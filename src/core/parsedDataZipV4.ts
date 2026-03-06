import JSZip from "jszip";

import type { Bounds } from "../pdfVectorExtractor";
import {
  decodeByteShuffledFloat32,
  decodeChannelMajorFloat32,
  decodeXorDeltaByteShuffledFloat32,
  encodeByteShuffledFloat32,
  encodeChannelMajorFloat32,
  encodeXorDeltaByteShuffledFloat32
} from "../parsedDataEncoding";
import type { LoadProgressReporter } from "./loadProgress";
import type {
  CompiledDocumentStats,
  CompiledPageInfo,
  CompiledPdfDocument,
  CompiledRasterLayer
} from "./types";

const PARSED_DATA_KIND = "hepr.compiled-pdf-document";
const REQUIRED_TEXTURE_NAMES = [
  "endpoints",
  "primitiveMeta",
  "primitiveBounds",
  "styles",
  "fillPathMetaA",
  "fillPathMetaB",
  "fillPathMetaC",
  "fillSegmentsA",
  "fillSegmentsB",
  "textInstanceA",
  "textInstanceB",
  "textInstanceC",
  "textGlyphMetaA",
  "textGlyphMetaB",
  "textGlyphSegmentsA",
  "textGlyphSegmentsB"
] as const;

type RequiredTextureName = (typeof REQUIRED_TEXTURE_NAMES)[number];
type TextureLayout = "interleaved" | "channel-major";
type TexturePredictor = "none" | "xor-delta-u32";

export interface BuildParsedDataZipV4Options {
  sourceFile?: string;
  zipCompression?: "STORE" | "DEFLATE";
  zipDeflateLevel?: number;
  textureLayout?: TextureLayout;
  textureByteShuffle?: boolean;
  texturePredictor?: TexturePredictor;
  encodeRasterImages?: boolean;
}

export interface ParsedDataZipV4BlobResult {
  blob: Blob;
  byteLength: number;
  textureCount: number;
  rasterLayerCount: number;
}

interface ManifestTextureEntry {
  name?: unknown;
  file?: unknown;
  componentType?: unknown;
  layout?: unknown;
  byteShuffle?: unknown;
  predictor?: unknown;
  logicalItemCount?: unknown;
  logicalFloatCount?: unknown;
}

interface ManifestRasterLayerEntry {
  pageIndex?: unknown;
  width?: unknown;
  height?: unknown;
  matrix?: unknown;
  file?: unknown;
  encoding?: unknown;
}

interface EncodedRasterImage {
  bytes: Uint8Array;
  encoding: "webp" | "png";
  extension: "webp" | "png";
}

interface ManifestPageEntry {
  pageIndex?: unknown;
  pageBounds?: unknown;
  pageRect?: unknown;
  pageCenter?: unknown;
  widthPt?: unknown;
  heightPt?: unknown;
  segmentStart?: unknown;
  segmentCount?: unknown;
  fillPathStart?: unknown;
  fillPathCount?: unknown;
  fillSegmentStart?: unknown;
  fillSegmentCount?: unknown;
  textInstanceStart?: unknown;
  textInstanceCount?: unknown;
  textGlyphStart?: unknown;
  textGlyphCount?: unknown;
  textGlyphSegmentStart?: unknown;
  textGlyphSegmentCount?: unknown;
  rasterLayerStart?: unknown;
  rasterLayerCount?: unknown;
}

interface ManifestDocumentEntry {
  pageCount?: unknown;
  pages?: unknown;
  maxSegmentCountPerPage?: unknown;
  maxFillPathCountPerPage?: unknown;
  maxTextInstanceCountPerPage?: unknown;
  maxRasterLayerCountPerPage?: unknown;
  segmentCount?: unknown;
  fillPathCount?: unknown;
  fillSegmentCount?: unknown;
  textInstanceCount?: unknown;
  textGlyphCount?: unknown;
  textGlyphSegmentCount?: unknown;
  rasterLayers?: unknown;
  stats?: unknown;
}

interface ManifestDocumentStatsEntry {
  operatorCount?: unknown;
  imagePaintOpCount?: unknown;
  sourceSegmentCount?: unknown;
  mergedSegmentCount?: unknown;
  sourceTextCount?: unknown;
  textInPageCount?: unknown;
  textOutOfPageCount?: unknown;
  discardedTransparentCount?: unknown;
  discardedDegenerateCount?: unknown;
  discardedDuplicateCount?: unknown;
  discardedContainedCount?: unknown;
  maxCellPopulation?: unknown;
}

interface ParsedDataZipManifest {
  formatVersion?: unknown;
  kind?: unknown;
  generatedAt?: unknown;
  sourceFile?: unknown;
  document?: unknown;
  textures?: unknown;
}

interface BuiltTextureEntry {
  name: RequiredTextureName;
  file: string;
  layout: TextureLayout;
  byteShuffle: boolean;
  predictor: "none" | "xor-delta-u32";
  logicalItemCount: number;
  logicalFloatCount: number;
}

export async function buildParsedDataZipV4Blob(
  document: CompiledPdfDocument,
  options: BuildParsedDataZipV4Options = {}
): Promise<ParsedDataZipV4BlobResult> {
  const zipCompression = options.zipCompression ?? "DEFLATE";
  const zipDeflateLevel = options.zipDeflateLevel ?? 9;
  const textureLayout = options.textureLayout ?? "interleaved";
  const textureByteShuffle =
    textureLayout === "interleaved" ? (options.textureByteShuffle ?? true) : false;
  const texturePredictor =
    textureLayout === "interleaved"
      ? (options.texturePredictor ?? (textureByteShuffle ? "xor-delta-u32" : "none"))
      : "none";
  const encodeRasterImages = options.encodeRasterImages ?? true;
  const zip = new JSZip();

  const textureEntries: BuiltTextureEntry[] = [];

  addTexture(zip, textureEntries, "endpoints", document.endpoints, document.segmentCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "primitiveMeta", document.primitiveMeta, document.segmentCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "primitiveBounds", document.primitiveBounds, document.segmentCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "styles", document.styles, document.segmentCount, textureLayout, textureByteShuffle, texturePredictor);

  addTexture(zip, textureEntries, "fillPathMetaA", document.fillPathMetaA, document.fillPathCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "fillPathMetaB", document.fillPathMetaB, document.fillPathCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "fillPathMetaC", document.fillPathMetaC, document.fillPathCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "fillSegmentsA", document.fillSegmentsA, document.fillSegmentCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "fillSegmentsB", document.fillSegmentsB, document.fillSegmentCount, textureLayout, textureByteShuffle, texturePredictor);

  addTexture(zip, textureEntries, "textInstanceA", document.textInstanceA, document.textInstanceCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textInstanceB", document.textInstanceB, document.textInstanceCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textInstanceC", document.textInstanceC, document.textInstanceCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textGlyphMetaA", document.textGlyphMetaA, document.textGlyphCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textGlyphMetaB", document.textGlyphMetaB, document.textGlyphCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textGlyphSegmentsA", document.textGlyphSegmentsA, document.textGlyphSegmentCount, textureLayout, textureByteShuffle, texturePredictor);
  addTexture(zip, textureEntries, "textGlyphSegmentsB", document.textGlyphSegmentsB, document.textGlyphSegmentCount, textureLayout, textureByteShuffle, texturePredictor);

  const rasterLayers: Array<{
    pageIndex: number;
    width: number;
    height: number;
    matrix: [number, number, number, number, number, number];
    file: string;
    encoding: "rgba" | "webp" | "png";
  }> = [];
  for (let index = 0; index < document.rasterLayers.length; index += 1) {
    const layer = document.rasterLayers[index];
    const expectedLength = Math.max(0, Math.trunc(layer.width) * Math.trunc(layer.height) * 4);
    const rgba = expectedLength > 0 ? layer.data.subarray(0, expectedLength) : new Uint8Array(0);

    let file = `raster/layer-${index}.rgba`;
    let encoding: "rgba" | "webp" | "png" = "rgba";
    let payload = rgba;
    let compressionOptions: JSZip.JSZipFileOptions | undefined;

    if (encodeRasterImages) {
      const encoded = await encodeRasterLayerAsBestImage(layer.width, layer.height, rgba);
      if (encoded) {
        file = `raster/layer-${index}.${encoded.extension}`;
        encoding = encoded.encoding;
        payload = encoded.bytes;
        compressionOptions = { compression: "STORE" };
      }
    }

    zip.file(file, payload, compressionOptions);
    rasterLayers.push({
      pageIndex: Math.max(0, Math.trunc(layer.pageIndex)),
      width: Math.max(0, Math.trunc(layer.width)),
      height: Math.max(0, Math.trunc(layer.height)),
      matrix: [
        Number(layer.matrix[0] ?? 1),
        Number(layer.matrix[1] ?? 0),
        Number(layer.matrix[2] ?? 0),
        Number(layer.matrix[3] ?? 1),
        Number(layer.matrix[4] ?? 0),
        Number(layer.matrix[5] ?? 0)
      ],
      file,
      encoding
    });
  }

  const manifest = {
    formatVersion: 4,
    kind: PARSED_DATA_KIND,
    generatedAt: new Date().toISOString(),
    sourceFile: options.sourceFile,
    document: {
      pageCount: document.pageCount,
      pages: document.pages,
      maxSegmentCountPerPage: document.maxSegmentCountPerPage,
      maxFillPathCountPerPage: document.maxFillPathCountPerPage,
      maxTextInstanceCountPerPage: document.maxTextInstanceCountPerPage,
      maxRasterLayerCountPerPage: document.maxRasterLayerCountPerPage,
      segmentCount: document.segmentCount,
      fillPathCount: document.fillPathCount,
      fillSegmentCount: document.fillSegmentCount,
      textInstanceCount: document.textInstanceCount,
      textGlyphCount: document.textGlyphCount,
      textGlyphSegmentCount: document.textGlyphSegmentCount,
      rasterLayers,
      stats: document.stats
    },
    textures: textureEntries.map((entry) => ({
      name: entry.name,
      file: entry.file,
      componentType: "float32",
      layout: entry.layout,
      byteShuffle: entry.byteShuffle,
      predictor: entry.predictor,
      logicalItemCount: entry.logicalItemCount,
      logicalFloatCount: entry.logicalFloatCount
    }))
  };

  zip.file("manifest.json", JSON.stringify(manifest, null, 2));

  const generateOptions =
    zipCompression === "DEFLATE"
      ? {
          type: "blob" as const,
          compression: "DEFLATE" as const,
          compressionOptions: { level: zipDeflateLevel }
        }
      : {
          type: "blob" as const,
          compression: "STORE" as const
        };

  const blob = await zip.generateAsync(generateOptions);

  return {
    blob,
    byteLength: blob.size,
    textureCount: textureEntries.length,
    rasterLayerCount: rasterLayers.length
  };
}

export async function loadCompiledDocumentFromParsedDataZipV4(
  buffer: ArrayBuffer | Uint8Array,
  progress?: LoadProgressReporter
): Promise<CompiledPdfDocument> {
  const zipBytes = buffer instanceof Uint8Array
    ? buffer
    : new Uint8Array(buffer);
  const zipOpenProgress = progress?.child(0, 0.15, {
    stage: "zip-open",
    sourceType: "zip"
  });
  const zip = zipOpenProgress
    ? await zipOpenProgress.withIndeterminateProgress(() => JSZip.loadAsync(zipBytes), {
      stage: "zip-open",
      sourceType: "zip",
      unit: "files"
    })
    : await JSZip.loadAsync(zipBytes);
  const manifestFile = zip.file("manifest.json");
  if (!manifestFile) {
    throw new Error("Parsed data zip is missing manifest.json.");
  }

  const manifestProgress = progress?.child(0.15, 0.2, {
    stage: "zip-manifest",
    sourceType: "zip"
  });
  manifestProgress?.report(0, { unit: "files", processed: 0, total: 1 });
  const manifestJson = await manifestFile.async("string", (metadata) => {
    manifestProgress?.report(metadata.percent / 100, {
      stage: "zip-manifest",
      sourceType: "zip",
      unit: "files",
      processed: 1,
      total: 1
    });
  });
  manifestProgress?.complete({
    stage: "zip-manifest",
    sourceType: "zip",
    unit: "files",
    processed: 1,
    total: 1
  });
  let manifest: ParsedDataZipManifest;
  try {
    manifest = JSON.parse(manifestJson) as ParsedDataZipManifest;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid manifest.json: ${message}`);
  }

  const formatVersion = readNonNegativeInt(manifest.formatVersion, Number.NaN);
  if (!Number.isFinite(formatVersion)) {
    throw new Error("Parsed data zip manifest is missing formatVersion.");
  }
  if (formatVersion === 3) {
    throw new Error("Parsed ZIP format v3 is unsupported; regenerate as v4.");
  }
  if (formatVersion !== 4) {
    throw new Error(`Unsupported parsed ZIP formatVersion ${formatVersion}; expected 4.`);
  }

  if (manifest.kind !== PARSED_DATA_KIND) {
    throw new Error(`Parsed data zip kind mismatch: expected ${PARSED_DATA_KIND}.`);
  }

  const documentMeta = parseDocumentMeta(manifest.document);

  const textureEntries = Array.isArray(manifest.textures)
    ? (manifest.textures as ManifestTextureEntry[])
    : [];
  const textureByName = new Map<string, ManifestTextureEntry>();
  for (const entry of textureEntries) {
    const name = readNonEmptyString(entry.name);
    if (!name) {
      continue;
    }
    textureByName.set(name, entry);
  }

  const payloadItems = buildZipPayloadItems(textureByName, documentMeta);
  const payloadWeightTotal = Math.max(1, payloadItems.reduce((sum, item) => sum + item.weight, 0));
  let payloadWeightProcessed = 0;
  const payloadProgress = progress?.child(0.2, 1, {
    stage: "zip-file",
    sourceType: "zip",
    unit: "files",
    processed: 0,
    total: payloadItems.length
  });
  const reportPayloadProgress = (
    itemWeightProcessed: number,
    meta: {
      processedFiles: number;
      totalFiles: number;
    }
  ): void => {
    payloadProgress?.report((payloadWeightProcessed + itemWeightProcessed) / payloadWeightTotal, {
      stage: "zip-file",
      sourceType: "zip",
      unit: "files",
      processed: meta.processedFiles,
      total: meta.totalFiles
    });
  };
  const finalizePayloadProgress = (weight: number, processedFiles: number, totalFiles: number): void => {
    payloadWeightProcessed += weight;
    payloadProgress?.report(payloadWeightProcessed / payloadWeightTotal, {
      stage: "zip-file",
      sourceType: "zip",
      unit: "files",
      processed: processedFiles,
      total: totalFiles
    });
  };
  let payloadFileIndex = 0;

  const endpoints = await readRequiredTexture(zip, textureByName, "endpoints", documentMeta.segmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, {
      processedFiles: payloadFileIndex,
      totalFiles: payloadItems.length
    })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const primitiveMeta = await readRequiredTexture(zip, textureByName, "primitiveMeta", documentMeta.segmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, {
      processedFiles: payloadFileIndex,
      totalFiles: payloadItems.length
    })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const primitiveBounds = await readRequiredTexture(zip, textureByName, "primitiveBounds", documentMeta.segmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, {
      processedFiles: payloadFileIndex,
      totalFiles: payloadItems.length
    })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const styles = await readRequiredTexture(zip, textureByName, "styles", documentMeta.segmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, {
      processedFiles: payloadFileIndex,
      totalFiles: payloadItems.length
    })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);

  const fillPathMetaA = await readRequiredTexture(zip, textureByName, "fillPathMetaA", documentMeta.fillPathCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const fillPathMetaB = await readRequiredTexture(zip, textureByName, "fillPathMetaB", documentMeta.fillPathCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const fillPathMetaC = await readRequiredTexture(zip, textureByName, "fillPathMetaC", documentMeta.fillPathCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const fillSegmentsA = await readRequiredTexture(zip, textureByName, "fillSegmentsA", documentMeta.fillSegmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const fillSegmentsB = await readRequiredTexture(zip, textureByName, "fillSegmentsB", documentMeta.fillSegmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);

  const textInstanceA = await readRequiredTexture(zip, textureByName, "textInstanceA", documentMeta.textInstanceCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textInstanceB = await readRequiredTexture(zip, textureByName, "textInstanceB", documentMeta.textInstanceCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textInstanceC = await readRequiredTexture(zip, textureByName, "textInstanceC", documentMeta.textInstanceCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textGlyphMetaA = await readRequiredTexture(zip, textureByName, "textGlyphMetaA", documentMeta.textGlyphCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textGlyphMetaB = await readRequiredTexture(zip, textureByName, "textGlyphMetaB", documentMeta.textGlyphCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textGlyphSegmentsA = await readRequiredTexture(zip, textureByName, "textGlyphSegmentsA", documentMeta.textGlyphSegmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);
  const textGlyphSegmentsB = await readRequiredTexture(zip, textureByName, "textGlyphSegmentsB", documentMeta.textGlyphSegmentCount, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, { processedFiles: payloadFileIndex, totalFiles: payloadItems.length })
  });
  finalizePayloadProgress(payloadItems[payloadFileIndex]?.weight ?? 0, ++payloadFileIndex, payloadItems.length);

  const rasterLayers = await readRasterLayers(zip, documentMeta.rasterLayers, {
    report: (localProgress, weight) => reportPayloadProgress(weight * localProgress, {
      processedFiles: payloadFileIndex,
      totalFiles: payloadItems.length
    }),
    totalFiles: payloadItems.length
  });
  for (let i = payloadFileIndex; i < payloadItems.length; i += 1) {
    finalizePayloadProgress(payloadItems[i]?.weight ?? 0, i + 1, payloadItems.length);
  }
  payloadProgress?.complete({
    stage: "zip-file",
    sourceType: "zip",
    unit: "files",
    processed: payloadItems.length,
    total: payloadItems.length
  });

  return {
    pageCount: documentMeta.pageCount,
    pages: documentMeta.pages,
    maxSegmentCountPerPage: documentMeta.maxSegmentCountPerPage,
    maxFillPathCountPerPage: documentMeta.maxFillPathCountPerPage,
    maxTextInstanceCountPerPage: documentMeta.maxTextInstanceCountPerPage,
    maxRasterLayerCountPerPage: documentMeta.maxRasterLayerCountPerPage,
    segmentCount: documentMeta.segmentCount,
    fillPathCount: documentMeta.fillPathCount,
    fillSegmentCount: documentMeta.fillSegmentCount,
    textInstanceCount: documentMeta.textInstanceCount,
    textGlyphCount: documentMeta.textGlyphCount,
    textGlyphSegmentCount: documentMeta.textGlyphSegmentCount,
    endpoints,
    primitiveMeta,
    primitiveBounds,
    styles,
    fillPathMetaA,
    fillPathMetaB,
    fillPathMetaC,
    fillSegmentsA,
    fillSegmentsB,
    textInstanceA,
    textInstanceB,
    textInstanceC,
    textGlyphMetaA,
    textGlyphMetaB,
    textGlyphSegmentsA,
    textGlyphSegmentsB,
    rasterLayers,
    stats: documentMeta.stats
  };
}

function addTexture(
  zip: JSZip,
  entries: BuiltTextureEntry[],
  name: RequiredTextureName,
  data: Float32Array,
  logicalItemCount: number,
  layout: TextureLayout,
  byteShuffle: boolean,
  predictor: TexturePredictor
): void {
  const logicalFloatCount = logicalItemCount * 4;
  if (logicalFloatCount > data.length) {
    throw new Error(`Texture ${name} has insufficient data (${data.length} < ${logicalFloatCount}).`);
  }

  const payload = data.subarray(0, logicalFloatCount);
  const useByteShuffle = layout === "interleaved" && byteShuffle;
  const effectivePredictor: TexturePredictor = useByteShuffle ? predictor : "none";
  if (effectivePredictor === "xor-delta-u32" && !useByteShuffle) {
    throw new Error(`Texture ${name} predictor ${effectivePredictor} requires byteShuffle.`);
  }

  let file = `textures/${name}.f32`;
  let bytes: Uint8Array;
  if (layout === "channel-major") {
    file = `textures/${name}.f32cm`;
    bytes = encodeChannelMajorFloat32(payload);
  } else if (useByteShuffle) {
    file = `textures/${name}.f32bs`;
    bytes = effectivePredictor === "xor-delta-u32"
      ? encodeXorDeltaByteShuffledFloat32(payload)
      : encodeByteShuffledFloat32(payload);
  } else {
    bytes = new Uint8Array(payload.buffer, payload.byteOffset, payload.byteLength);
  }

  zip.file(file, bytes);
  entries.push({
    name,
    file,
    layout,
    byteShuffle: useByteShuffle,
    predictor: effectivePredictor,
    logicalItemCount,
    logicalFloatCount
  });
}

async function readRequiredTexture(
  zip: JSZip,
  textureByName: Map<string, ManifestTextureEntry>,
  name: RequiredTextureName,
  expectedItemCount: number,
  progress?: {
    report: (localProgress: number, weight: number) => void;
  }
): Promise<Float32Array> {
  const entry = textureByName.get(name);
  if (!entry) {
    throw new Error(`Parsed data zip is missing texture metadata for ${name}.`);
  }

  const componentType = readNonEmptyString(entry.componentType);
  if (componentType !== "float32") {
    throw new Error(`Texture ${name} has unsupported componentType ${componentType ?? "unknown"}.`);
  }

  const filePath = readNonEmptyString(entry.file) ?? inferTexturePath(name, entry);
  const file = zip.file(filePath) ?? zip.file(inferTexturePath(name, entry));
  if (!file) {
    throw new Error(`Parsed data zip is missing texture payload ${filePath}.`);
  }

  const weight = Math.max(1, readNonNegativeInt(entry.logicalFloatCount, expectedItemCount * 4) * 4);
  progress?.report(0, weight);
  const fileBuffer = await file.async("arraybuffer", (metadata) => {
    progress?.report(metadata.percent / 100, weight);
  });
  progress?.report(1, weight);
  const raw = readTexturePayloadAsFloat32(fileBuffer, entry, name);
  const logicalFloatCountFromManifest = readNonNegativeInt(entry.logicalFloatCount, raw.length);
  if (logicalFloatCountFromManifest > raw.length) {
    throw new Error(`Texture ${name} logicalFloatCount exceeds payload size.`);
  }

  const expectedFloatCount = expectedItemCount * 4;
  if (logicalFloatCountFromManifest < expectedFloatCount) {
    throw new Error(`Texture ${name} has insufficient data for expected item count.`);
  }

  const logicalItemCountFromManifest = readNonNegativeInt(entry.logicalItemCount, Math.floor(logicalFloatCountFromManifest / 4));
  if (logicalItemCountFromManifest < expectedItemCount) {
    throw new Error(`Texture ${name} logicalItemCount is smaller than expected.`);
  }

  return raw.slice(0, expectedFloatCount);
}

function inferTexturePath(name: RequiredTextureName, entry: ManifestTextureEntry): string {
  const layout = readTextureLayout(entry);
  if (layout === "channel-major") {
    return `textures/${name}.f32cm`;
  }
  return entry.byteShuffle === true
    ? `textures/${name}.f32bs`
    : `textures/${name}.f32`;
}

function readTextureLayout(entry: ManifestTextureEntry): TextureLayout {
  const rawLayout = readNonEmptyString(entry.layout);
  if (!rawLayout || rawLayout === "interleaved") {
    return "interleaved";
  }
  if (rawLayout === "channel-major") {
    return "channel-major";
  }
  throw new Error(`Texture has unsupported layout ${rawLayout}.`);
}

function readTexturePayloadAsFloat32(
  fileBuffer: ArrayBuffer,
  entry: ManifestTextureEntry,
  textureName: RequiredTextureName
): Float32Array {
  const layout = readTextureLayout(entry);
  if (layout === "channel-major") {
    return decodeChannelMajorFloat32(new Uint8Array(fileBuffer));
  }

  const byteShuffle = entry.byteShuffle === true;
  const predictor = readNonEmptyString(entry.predictor) ?? "none";
  if (predictor !== "none" && predictor !== "xor-delta-u32") {
    throw new Error(`Texture ${textureName} has unsupported predictor ${predictor}.`);
  }

  if (byteShuffle) {
    if (predictor === "xor-delta-u32") {
      return decodeXorDeltaByteShuffledFloat32(new Uint8Array(fileBuffer));
    }
    return decodeByteShuffledFloat32(new Uint8Array(fileBuffer));
  }

  if (predictor !== "none") {
    throw new Error(`Texture ${textureName} declares predictor ${predictor} without byteShuffle.`);
  }
  if (fileBuffer.byteLength % 4 !== 0) {
    throw new Error(`Texture ${textureName} byte length is not float32 aligned.`);
  }
  return new Float32Array(fileBuffer);
}

async function readRasterLayers(
  zip: JSZip,
  source: ManifestRasterLayerEntry[],
  progress?: {
    report: (localProgress: number, weight: number) => void;
    totalFiles: number;
  }
): Promise<CompiledRasterLayer[]> {
  const out: CompiledRasterLayer[] = [];

  for (let i = 0; i < source.length; i += 1) {
    const entry = source[i];
    const width = readNonNegativeInt(entry.width, -1);
    const height = readNonNegativeInt(entry.height, -1);
    if (width <= 0 || height <= 0) {
      throw new Error(`Raster layer ${i} has invalid dimensions.`);
    }

    const encoding = readNonEmptyString(entry.encoding) ?? "rgba";
    if (encoding !== "rgba" && encoding !== "png" && encoding !== "webp") {
      throw new Error(`Raster layer ${i} has unsupported encoding ${encoding ?? "unknown"}.`);
    }

    const matrix = readMat2D(entry.matrix);
    const pageIndex = readNonNegativeInt(entry.pageIndex, Number.NaN);
    if (!Number.isFinite(pageIndex)) {
      throw new Error(`Raster layer ${i} is missing pageIndex.`);
    }

    const filePath = readNonEmptyString(entry.file) ?? `raster/layer-${i}.rgba`;
    const file = zip.file(filePath);
    if (!file) {
      throw new Error(`Raster layer payload is missing: ${filePath}.`);
    }

    const weight = Math.max(1, width * height * 4);
    progress?.report(0, weight);
    const buffer = await file.async("arraybuffer", (metadata) => {
      progress?.report(metadata.percent / 100, weight);
    });
    const bytes = new Uint8Array(buffer);
    let rgba: Uint8Array;

    if (encoding === "rgba") {
      const expectedLength = width * height * 4;
      if (bytes.length < expectedLength) {
        throw new Error(`Raster layer ${i} payload is truncated (${bytes.length} < ${expectedLength}).`);
      }
      rgba = bytes.length === expectedLength ? bytes : bytes.slice(0, expectedLength);
    } else {
      const decoded = await decodeRasterImageToRgba(filePath, bytes);
      if (!decoded) {
        throw new Error(`Raster layer ${i} could not be decoded from ${encoding} payload.`);
      }
      if (decoded.width !== width || decoded.height !== height) {
        throw new Error(
          `Raster layer ${i} dimensions mismatch (${decoded.width}x${decoded.height} != ${width}x${height}).`
        );
      }
      rgba = decoded.data;
    }

    out.push({
      pageIndex,
      width,
      height,
      matrix,
      data: rgba
    });
    progress?.report(1, weight);
  }

  return out;
}

function buildZipPayloadItems(
  textureByName: Map<string, ManifestTextureEntry>,
  documentMeta: {
    rasterLayers: ManifestRasterLayerEntry[];
  }
): Array<{ weight: number }> {
  const items: Array<{ weight: number }> = [];

  for (const name of REQUIRED_TEXTURE_NAMES) {
    const entry = textureByName.get(name);
    const weight = Math.max(1, readNonNegativeInt(entry?.logicalFloatCount, 0) * 4);
    items.push({ weight });
  }

  for (const entry of documentMeta.rasterLayers) {
    const width = readNonNegativeInt(entry.width, 0);
    const height = readNonNegativeInt(entry.height, 0);
    items.push({ weight: Math.max(1, width * height * 4) });
  }

  return items;
}

function parseDocumentMeta(input: unknown): {
  pageCount: number;
  pages: CompiledPageInfo[];
  maxSegmentCountPerPage: number;
  maxFillPathCountPerPage: number;
  maxTextInstanceCountPerPage: number;
  maxRasterLayerCountPerPage: number;
  segmentCount: number;
  fillPathCount: number;
  fillSegmentCount: number;
  textInstanceCount: number;
  textGlyphCount: number;
  textGlyphSegmentCount: number;
  rasterLayers: ManifestRasterLayerEntry[];
  stats: CompiledDocumentStats;
} {
  if (!input || typeof input !== "object") {
    throw new Error("Parsed data zip manifest is missing document metadata.");
  }

  const documentMeta = input as ManifestDocumentEntry;
  const pagesRaw = Array.isArray(documentMeta.pages)
    ? (documentMeta.pages as ManifestPageEntry[])
    : [];

  const pages = pagesRaw.map((page, index) => parsePageInfo(page, index));
  if (pages.length === 0) {
    throw new Error("Parsed data zip document.pages is empty.");
  }

  const pageCount = readNonNegativeInt(documentMeta.pageCount, pages.length);
  if (pageCount !== pages.length) {
    throw new Error(`Parsed data zip pageCount mismatch (${pageCount} != ${pages.length}).`);
  }

  const rasterLayers = Array.isArray(documentMeta.rasterLayers)
    ? (documentMeta.rasterLayers as ManifestRasterLayerEntry[])
    : [];

  const segmentCount = readNonNegativeInt(documentMeta.segmentCount, 0);
  const fillPathCount = readNonNegativeInt(documentMeta.fillPathCount, 0);
  const fillSegmentCount = readNonNegativeInt(documentMeta.fillSegmentCount, 0);
  const textInstanceCount = readNonNegativeInt(documentMeta.textInstanceCount, 0);
  const textGlyphCount = readNonNegativeInt(documentMeta.textGlyphCount, 0);
  const textGlyphSegmentCount = readNonNegativeInt(documentMeta.textGlyphSegmentCount, 0);
  const maxSegmentCountPerPage = readNonNegativeInt(documentMeta.maxSegmentCountPerPage, 0);

  return {
    pageCount,
    pages,
    maxSegmentCountPerPage,
    maxFillPathCountPerPage: readNonNegativeInt(documentMeta.maxFillPathCountPerPage, 0),
    maxTextInstanceCountPerPage: readNonNegativeInt(documentMeta.maxTextInstanceCountPerPage, 0),
    maxRasterLayerCountPerPage: readNonNegativeInt(documentMeta.maxRasterLayerCountPerPage, 0),
    segmentCount,
    fillPathCount,
    fillSegmentCount,
    textInstanceCount,
    textGlyphCount,
    textGlyphSegmentCount,
    rasterLayers,
    stats: parseDocumentStats(documentMeta.stats, {
      segmentCount,
      textInstanceCount,
      rasterLayerCount: rasterLayers.length,
      maxSegmentCountPerPage
    })
  };
}

function parsePageInfo(page: ManifestPageEntry, index: number): CompiledPageInfo {
  const pageIndex = readNonNegativeInt(page.pageIndex, index);
  const pageRect = readVec4(page.pageRect, "pageRect");
  const pageCenter = readVec2(page.pageCenter, "pageCenter");
  const pageBounds = readBounds(page.pageBounds, "pageBounds");

  return {
    pageIndex,
    pageBounds,
    pageRect,
    pageCenter,
    widthPt: readFiniteNumber(page.widthPt, "widthPt"),
    heightPt: readFiniteNumber(page.heightPt, "heightPt"),
    segmentStart: readNonNegativeInt(page.segmentStart, 0),
    segmentCount: readNonNegativeInt(page.segmentCount, 0),
    fillPathStart: readNonNegativeInt(page.fillPathStart, 0),
    fillPathCount: readNonNegativeInt(page.fillPathCount, 0),
    fillSegmentStart: readNonNegativeInt(page.fillSegmentStart, 0),
    fillSegmentCount: readNonNegativeInt(page.fillSegmentCount, 0),
    textInstanceStart: readNonNegativeInt(page.textInstanceStart, 0),
    textInstanceCount: readNonNegativeInt(page.textInstanceCount, 0),
    textGlyphStart: readNonNegativeInt(page.textGlyphStart, 0),
    textGlyphCount: readNonNegativeInt(page.textGlyphCount, 0),
    textGlyphSegmentStart: readNonNegativeInt(page.textGlyphSegmentStart, 0),
    textGlyphSegmentCount: readNonNegativeInt(page.textGlyphSegmentCount, 0),
    rasterLayerStart: readNonNegativeInt(page.rasterLayerStart, 0),
    rasterLayerCount: readNonNegativeInt(page.rasterLayerCount, 0)
  };
}

function parseDocumentStats(
  input: unknown,
  fallback: {
    segmentCount: number;
    textInstanceCount: number;
    rasterLayerCount: number;
    maxSegmentCountPerPage: number;
  }
): CompiledDocumentStats {
  if (!input || typeof input !== "object") {
    return createDefaultDocumentStats(fallback);
  }

  const stats = input as ManifestDocumentStatsEntry;
  return {
    operatorCount: readNonNegativeInt(stats.operatorCount, 0),
    imagePaintOpCount: readNonNegativeInt(stats.imagePaintOpCount, fallback.rasterLayerCount),
    sourceSegmentCount: readNonNegativeInt(stats.sourceSegmentCount, fallback.segmentCount),
    mergedSegmentCount: readNonNegativeInt(stats.mergedSegmentCount, fallback.segmentCount),
    sourceTextCount: readNonNegativeInt(stats.sourceTextCount, fallback.textInstanceCount),
    textInPageCount: readNonNegativeInt(stats.textInPageCount, fallback.textInstanceCount),
    textOutOfPageCount: readNonNegativeInt(stats.textOutOfPageCount, 0),
    discardedTransparentCount: readNonNegativeInt(stats.discardedTransparentCount, 0),
    discardedDegenerateCount: readNonNegativeInt(stats.discardedDegenerateCount, 0),
    discardedDuplicateCount: readNonNegativeInt(stats.discardedDuplicateCount, 0),
    discardedContainedCount: readNonNegativeInt(stats.discardedContainedCount, 0),
    maxCellPopulation: readNonNegativeInt(stats.maxCellPopulation, fallback.maxSegmentCountPerPage)
  };
}

function createDefaultDocumentStats(fallback: {
  segmentCount: number;
  textInstanceCount: number;
  rasterLayerCount: number;
  maxSegmentCountPerPage: number;
}): CompiledDocumentStats {
  return {
    operatorCount: 0,
    imagePaintOpCount: fallback.rasterLayerCount,
    sourceSegmentCount: fallback.segmentCount,
    mergedSegmentCount: fallback.segmentCount,
    sourceTextCount: fallback.textInstanceCount,
    textInPageCount: fallback.textInstanceCount,
    textOutOfPageCount: 0,
    discardedTransparentCount: 0,
    discardedDegenerateCount: 0,
    discardedDuplicateCount: 0,
    discardedContainedCount: 0,
    maxCellPopulation: fallback.maxSegmentCountPerPage
  };
}

function readBounds(input: unknown, label: string): Bounds {
  if (!input || typeof input !== "object") {
    throw new Error(`Page metadata is missing ${label}.`);
  }

  const source = input as Record<string, unknown>;
  return {
    minX: readFiniteNumber(source.minX, `${label}.minX`),
    minY: readFiniteNumber(source.minY, `${label}.minY`),
    maxX: readFiniteNumber(source.maxX, `${label}.maxX`),
    maxY: readFiniteNumber(source.maxY, `${label}.maxY`)
  };
}

function readVec4(input: unknown, label: string): [number, number, number, number] {
  if (!Array.isArray(input) || input.length < 4) {
    throw new Error(`Page metadata is missing ${label}.`);
  }

  return [
    readFiniteNumber(input[0], `${label}[0]`),
    readFiniteNumber(input[1], `${label}[1]`),
    readFiniteNumber(input[2], `${label}[2]`),
    readFiniteNumber(input[3], `${label}[3]`)
  ];
}

function readVec2(input: unknown, label: string): [number, number] {
  if (!Array.isArray(input) || input.length < 2) {
    throw new Error(`Page metadata is missing ${label}.`);
  }

  return [
    readFiniteNumber(input[0], `${label}[0]`),
    readFiniteNumber(input[1], `${label}[1]`)
  ];
}

function readMat2D(input: unknown): Float32Array {
  if (!Array.isArray(input) || input.length < 6) {
    throw new Error("Raster layer matrix must be a 6-element array.");
  }

  return new Float32Array([
    readFiniteNumber(input[0], "matrix[0]"),
    readFiniteNumber(input[1], "matrix[1]"),
    readFiniteNumber(input[2], "matrix[2]"),
    readFiniteNumber(input[3], "matrix[3]"),
    readFiniteNumber(input[4], "matrix[4]"),
    readFiniteNumber(input[5], "matrix[5]")
  ]);
}

function readFiniteNumber(value: unknown, label: string): number {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    throw new Error(`Expected finite number for ${label}.`);
  }
  return numberValue;
}

function readNonNegativeInt(value: unknown, fallback: number): number {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    return Math.max(0, Math.trunc(fallback));
  }
  return Math.max(0, Math.trunc(numberValue));
}

function readNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

async function encodeRasterLayerAsBestImage(
  width: number,
  height: number,
  rgba: Uint8Array
): Promise<EncodedRasterImage | null> {
  const [webp, png] = await Promise.all([
    encodeRasterLayerAsImage(width, height, rgba, "image/webp"),
    encodeRasterLayerAsImage(width, height, rgba, "image/png")
  ]);

  if (!webp && !png) {
    return null;
  }
  if (webp && !png) {
    return { bytes: webp, encoding: "webp", extension: "webp" };
  }
  if (png && !webp) {
    return { bytes: png, encoding: "png", extension: "png" };
  }

  if (!webp || !png) {
    return null;
  }
  return webp.byteLength <= png.byteLength
    ? { bytes: webp, encoding: "webp", extension: "webp" }
    : { bytes: png, encoding: "png", extension: "png" };
}

async function encodeRasterLayerAsImage(
  width: number,
  height: number,
  rgba: Uint8Array,
  mimeType: "image/png" | "image/webp"
): Promise<Uint8Array | null> {
  if (typeof document === "undefined") {
    return null;
  }

  const expectedBytes = width * height * 4;
  if (width <= 0 || height <= 0 || rgba.length < expectedBytes) {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    canvas.width = 0;
    canvas.height = 0;
    return null;
  }

  const imageData = createImageDataFromRgba(width, height, rgba);
  if (!imageData) {
    canvas.width = 0;
    canvas.height = 0;
    return null;
  }

  context.putImageData(imageData, 0, 0);
  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, mimeType);
  });
  canvas.width = 0;
  canvas.height = 0;
  if (!blob) {
    return null;
  }

  const buffer = await blob.arrayBuffer();
  return new Uint8Array(buffer);
}

function createImageDataFromRgba(width: number, height: number, rgba: Uint8Array): ImageData | null {
  const expectedBytes = width * height * 4;
  if (rgba.length < expectedBytes) {
    return null;
  }

  try {
    const clamped = new Uint8ClampedArray(expectedBytes);
    clamped.set(rgba.subarray(0, expectedBytes));
    return new ImageData(clamped, width, height);
  } catch {
    return null;
  }
}

function getMimeTypeForRasterPath(path: string): "image/png" | "image/webp" | null {
  const lower = path.toLowerCase();
  if (lower.endsWith(".png")) {
    return "image/png";
  }
  if (lower.endsWith(".webp")) {
    return "image/webp";
  }
  return null;
}

async function decodeRasterImageToRgba(
  path: string,
  encoded: Uint8Array
): Promise<{ width: number; height: number; data: Uint8Array } | null> {
  const mimeType = getMimeTypeForRasterPath(path);
  if (!mimeType || typeof createImageBitmap !== "function") {
    return null;
  }

  const encodedCopy = new Uint8Array(encoded.length);
  encodedCopy.set(encoded);
  const blob = new Blob([encodedCopy], { type: mimeType });
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(blob);
  } catch {
    return null;
  }
  try {
    const width = bitmap.width;
    const height = bitmap.height;
    if (width <= 0 || height <= 0) {
      return null;
    }

    if (typeof OffscreenCanvas !== "undefined") {
      const canvas = new OffscreenCanvas(width, height);
      const context = canvas.getContext("2d", { alpha: true, willReadFrequently: true });
      if (!context) {
        return null;
      }
      context.drawImage(bitmap, 0, 0);
      const imageData = context.getImageData(0, 0, width, height);
      return { width, height, data: new Uint8Array(imageData.data) };
    }

    if (typeof document !== "undefined") {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d", { alpha: true, willReadFrequently: true });
      if (!context) {
        canvas.width = 0;
        canvas.height = 0;
        return null;
      }

      context.drawImage(bitmap, 0, 0);
      const imageData = context.getImageData(0, 0, width, height);
      const rgba = new Uint8Array(imageData.data);
      canvas.width = 0;
      canvas.height = 0;
      return { width, height, data: rgba };
    }
  } finally {
    bitmap.close();
  }

  return null;
}

export function isParsedDataZipV4Manifest(value: unknown): boolean {
  if (!value || typeof value !== "object") {
    return false;
  }

  const source = value as ParsedDataZipManifest;
  return source.formatVersion === 4 && source.kind === PARSED_DATA_KIND;
}
