import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";

import JSZip from "jszip";

import { extractPdfVectors, type RasterLayer, type VectorScene } from "../src/pdfVectorExtractor.ts";

interface ExportTextureEntry {
  name: string;
  filePath: string;
  width: number;
  height: number;
  logicalItemCount: number;
  logicalFloatCount: number;
  data: Float32Array;
}

interface ExampleOptionManifestEntry {
  id: string;
  name: string;
  pdf: {
    path: string;
    sizeBytes: number;
  };
  parsedZip: {
    path: string;
    sizeBytes: number;
  };
}

interface ExampleManifest {
  generatedAt: string;
  examples: ExampleOptionManifestEntry[];
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRootDir = path.resolve(scriptDir, "..");
const sourcePdfDir = path.resolve(repoRootDir, "pdfs");
const outputRootDir = path.resolve(repoRootDir, "public", "examples");
const outputPdfDir = path.resolve(outputRootDir, "pdfs");
const outputZipDir = path.resolve(outputRootDir, "zips");
const outputManifestPath = path.resolve(outputRootDir, "manifest.json");

async function main(): Promise<void> {
  await fs.rm(outputPdfDir, { recursive: true, force: true });
  await fs.rm(outputZipDir, { recursive: true, force: true });
  await fs.rm(outputManifestPath, { force: true });
  await fs.mkdir(outputPdfDir, { recursive: true });
  await fs.mkdir(outputZipDir, { recursive: true });

  const files = await fs.readdir(sourcePdfDir, { withFileTypes: true });
  const pdfFiles = files
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  if (pdfFiles.length === 0) {
    throw new Error(`No PDF files found in ${sourcePdfDir}`);
  }

  const usedIds = new Set<string>();
  const manifestEntries: ExampleOptionManifestEntry[] = [];

  for (let i = 0; i < pdfFiles.length; i += 1) {
    const pdfFileName = pdfFiles[i];
    const sourcePdfPath = path.resolve(sourcePdfDir, pdfFileName);
    const targetPdfPath = path.resolve(outputPdfDir, pdfFileName);
    await fs.copyFile(sourcePdfPath, targetPdfPath);

    const pdfBytes = await fs.readFile(sourcePdfPath);
    const pdfArrayBuffer = pdfBytes.buffer.slice(pdfBytes.byteOffset, pdfBytes.byteOffset + pdfBytes.byteLength);

    console.log(`[examples] parsing ${pdfFileName} (${formatKilobytes(pdfBytes.byteLength)} kB)`);
    const scene = await extractPdfVectors(pdfArrayBuffer, {
      enableSegmentMerge: true,
      enableInvisibleCull: true,
      maxPagesPerRow: 10
    });

    const parsedZipBytes = await buildParsedDataZip(scene, pdfFileName);
    const zipFileName = makeUniqueZipFileName(path.parse(pdfFileName).name, i);
    const targetZipPath = path.resolve(outputZipDir, zipFileName);
    await fs.writeFile(targetZipPath, parsedZipBytes);

    const exampleId = makeUniqueId(path.parse(pdfFileName).name, usedIds, i + 1);
    const pdfRelativePath = `/examples/pdfs/${encodeURIComponent(pdfFileName)}`;
    const zipRelativePath = `/examples/zips/${encodeURIComponent(zipFileName)}`;
    manifestEntries.push({
      id: exampleId,
      name: pdfFileName,
      pdf: {
        path: pdfRelativePath,
        sizeBytes: pdfBytes.byteLength
      },
      parsedZip: {
        path: zipRelativePath,
        sizeBytes: parsedZipBytes.byteLength
      }
    });

    console.log(
      `[examples] wrote ${pdfFileName}: PDF ${formatKilobytes(pdfBytes.byteLength)} kB, ZIP ${formatKilobytes(parsedZipBytes.byteLength)} kB`
    );
  }

  const manifest: ExampleManifest = {
    generatedAt: new Date().toISOString(),
    examples: manifestEntries
  };
  await fs.writeFile(outputManifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`[examples] manifest written: ${outputManifestPath}`);
}

function makeUniqueZipFileName(baseName: string, index: number): string {
  const safeBase = sanitizeStem(baseName);
  const prefix = safeBase.length > 0 ? safeBase : `example-${index + 1}`;
  return `${prefix}.parsed-data.zip`;
}

function sanitizeStem(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function makeUniqueId(baseName: string, used: Set<string>, index: number): string {
  const stem = sanitizeStem(baseName).toLowerCase() || `example-${index}`;
  let candidate = stem;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${stem}-${suffix}`;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

async function buildParsedDataZip(scene: VectorScene, sourceFileName: string): Promise<Uint8Array> {
  const zip = new JSZip();
  const textureEntries = buildTextureExportEntries(scene);
  const rasterLayers = listSceneRasterLayers(scene);
  const primaryRasterLayer = rasterLayers[0] ?? null;

  for (const entry of textureEntries) {
    const bytes = new Uint8Array(entry.data.buffer, entry.data.byteOffset, entry.data.byteLength);
    zip.file(entry.filePath, bytes);
  }

  for (let i = 0; i < rasterLayers.length; i += 1) {
    const layer = rasterLayers[i];
    const filePath = `raster/layer-${i}.rgba`;
    const expectedBytes = layer.width * layer.height * 4;
    zip.file(filePath, layer.data.subarray(0, expectedBytes));
  }

  const manifest = {
    formatVersion: 2,
    sourceFile: sourceFileName,
    generatedAt: new Date().toISOString(),
    scene: {
      bounds: scene.bounds,
      pageBounds: scene.pageBounds,
      pageRects: Array.from(scene.pageRects),
      pageCount: scene.pageCount,
      pagesPerRow: scene.pagesPerRow,
      maxHalfWidth: scene.maxHalfWidth,
      operatorCount: scene.operatorCount,
      pathCount: scene.pathCount,
      sourceSegmentCount: scene.sourceSegmentCount,
      mergedSegmentCount: scene.mergedSegmentCount,
      segmentCount: scene.segmentCount,
      fillPathCount: scene.fillPathCount,
      fillSegmentCount: scene.fillSegmentCount,
      sourceTextCount: scene.sourceTextCount,
      textInstanceCount: scene.textInstanceCount,
      textGlyphCount: scene.textGlyphCount,
      textGlyphPrimitiveCount: scene.textGlyphSegmentCount,
      textInPageCount: scene.textInPageCount,
      textOutOfPageCount: scene.textOutOfPageCount,
      discardedTransparentCount: scene.discardedTransparentCount,
      discardedDegenerateCount: scene.discardedDegenerateCount,
      discardedDuplicateCount: scene.discardedDuplicateCount,
      discardedContainedCount: scene.discardedContainedCount,
      rasterLayers: rasterLayers.map((layer, index) => ({
        width: layer.width,
        height: layer.height,
        matrix: Array.from(layer.matrix),
        file: `raster/layer-${index}.rgba`
      })),
      rasterLayerWidth: primaryRasterLayer?.width ?? 0,
      rasterLayerHeight: primaryRasterLayer?.height ?? 0,
      rasterLayerMatrix: primaryRasterLayer ? Array.from(primaryRasterLayer.matrix) : undefined,
      rasterLayerFile: primaryRasterLayer ? "raster/layer-0.rgba" : undefined
    },
    textures: textureEntries.map((entry) => ({
      name: entry.name,
      file: entry.filePath,
      width: entry.width,
      height: entry.height,
      channels: 4,
      componentType: "float32",
      logicalItemCount: entry.logicalItemCount,
      logicalFloatCount: entry.logicalFloatCount,
      paddedFloatCount: entry.data.length
    }))
  };

  zip.file("manifest.json", JSON.stringify(manifest, null, 2));
  return zip.generateAsync({
    type: "uint8array",
    compression: "DEFLATE",
    compressionOptions: { level: 6 }
  });
}

function buildTextureExportEntries(scene: VectorScene): ExportTextureEntry[] {
  return [
    createTextureExportEntry("fill-path-meta-a", scene.fillPathMetaA, scene.fillPathCount),
    createTextureExportEntry("fill-path-meta-b", scene.fillPathMetaB, scene.fillPathCount),
    createTextureExportEntry("fill-path-meta-c", scene.fillPathMetaC, scene.fillPathCount),
    createTextureExportEntry("fill-primitives-a", scene.fillSegmentsA, scene.fillSegmentCount),
    createTextureExportEntry("fill-primitives-b", scene.fillSegmentsB, scene.fillSegmentCount),
    createTextureExportEntry("stroke-primitives-a", scene.endpoints, scene.segmentCount),
    createTextureExportEntry("stroke-primitives-b", scene.primitiveMeta, scene.segmentCount),
    createTextureExportEntry("stroke-styles", scene.styles, scene.segmentCount),
    createTextureExportEntry("stroke-primitive-bounds", scene.primitiveBounds, scene.segmentCount),
    createTextureExportEntry("text-instance-a", scene.textInstanceA, scene.textInstanceCount),
    createTextureExportEntry("text-instance-b", scene.textInstanceB, scene.textInstanceCount),
    createTextureExportEntry("text-instance-c", scene.textInstanceC, scene.textInstanceCount),
    createTextureExportEntry("text-glyph-meta-a", scene.textGlyphMetaA, scene.textGlyphCount),
    createTextureExportEntry("text-glyph-meta-b", scene.textGlyphMetaB, scene.textGlyphCount),
    createTextureExportEntry("text-glyph-primitives-a", scene.textGlyphSegmentsA, scene.textGlyphSegmentCount),
    createTextureExportEntry("text-glyph-primitives-b", scene.textGlyphSegmentsB, scene.textGlyphSegmentCount)
  ];
}

function createTextureExportEntry(name: string, data: Float32Array, logicalItemCount: number): ExportTextureEntry {
  const logicalFloatCount = logicalItemCount * 4;
  const floats = logicalFloatCount > 0 ? data.slice(0, logicalFloatCount) : new Float32Array(0);
  const dims = chooseTextureDimensions(logicalItemCount);
  return {
    name,
    filePath: `textures/${name}.f32`,
    width: dims.width,
    height: dims.height,
    logicalItemCount,
    logicalFloatCount,
    data: floats
  };
}

function chooseTextureDimensions(itemCount: number): { width: number; height: number } {
  const safeCount = Math.max(1, itemCount);
  const width = Math.max(1, Math.ceil(Math.sqrt(safeCount)));
  const height = Math.max(1, Math.ceil(safeCount / width));
  return { width, height };
}

function listSceneRasterLayers(scene: VectorScene): RasterLayer[] {
  if (Array.isArray(scene.rasterLayers) && scene.rasterLayers.length > 0) {
    return scene.rasterLayers.filter((layer) => {
      const width = Math.max(0, Math.trunc(layer?.width ?? 0));
      const height = Math.max(0, Math.trunc(layer?.height ?? 0));
      return width > 0 && height > 0 && layer.data.length >= width * height * 4;
    });
  }
  return [];
}

function formatKilobytes(sizeBytes: number): string {
  return (sizeBytes / 1024).toFixed(1);
}

await main();
