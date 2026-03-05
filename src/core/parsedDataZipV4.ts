import JSZip from "jszip";

import type { Bounds } from "../pdfVectorExtractor";
import type { CompiledPageInfo, CompiledPdfDocument, CompiledRasterLayer } from "./types";

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

export interface BuildParsedDataZipV4Options {
  sourceFile?: string;
  zipCompression?: "STORE" | "DEFLATE";
  zipDeflateLevel?: number;
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
  logicalItemCount: number;
  logicalFloatCount: number;
}

export async function buildParsedDataZipV4Blob(
  document: CompiledPdfDocument,
  options: BuildParsedDataZipV4Options = {}
): Promise<ParsedDataZipV4BlobResult> {
  const zipCompression = options.zipCompression ?? "DEFLATE";
  const zipDeflateLevel = options.zipDeflateLevel ?? 9;
  const zip = new JSZip();

  const textureEntries: BuiltTextureEntry[] = [];

  addTexture(zip, textureEntries, "endpoints", document.endpoints, document.segmentCount);
  addTexture(zip, textureEntries, "primitiveMeta", document.primitiveMeta, document.segmentCount);
  addTexture(zip, textureEntries, "primitiveBounds", document.primitiveBounds, document.segmentCount);
  addTexture(zip, textureEntries, "styles", document.styles, document.segmentCount);

  addTexture(zip, textureEntries, "fillPathMetaA", document.fillPathMetaA, document.fillPathCount);
  addTexture(zip, textureEntries, "fillPathMetaB", document.fillPathMetaB, document.fillPathCount);
  addTexture(zip, textureEntries, "fillPathMetaC", document.fillPathMetaC, document.fillPathCount);
  addTexture(zip, textureEntries, "fillSegmentsA", document.fillSegmentsA, document.fillSegmentCount);
  addTexture(zip, textureEntries, "fillSegmentsB", document.fillSegmentsB, document.fillSegmentCount);

  addTexture(zip, textureEntries, "textInstanceA", document.textInstanceA, document.textInstanceCount);
  addTexture(zip, textureEntries, "textInstanceB", document.textInstanceB, document.textInstanceCount);
  addTexture(zip, textureEntries, "textInstanceC", document.textInstanceC, document.textInstanceCount);
  addTexture(zip, textureEntries, "textGlyphMetaA", document.textGlyphMetaA, document.textGlyphCount);
  addTexture(zip, textureEntries, "textGlyphMetaB", document.textGlyphMetaB, document.textGlyphCount);
  addTexture(zip, textureEntries, "textGlyphSegmentsA", document.textGlyphSegmentsA, document.textGlyphSegmentCount);
  addTexture(zip, textureEntries, "textGlyphSegmentsB", document.textGlyphSegmentsB, document.textGlyphSegmentCount);

  const rasterLayers = document.rasterLayers.map((layer, index) => {
    const file = `raster/layer-${index}.rgba`;
    const expectedLength = Math.max(0, Math.trunc(layer.width) * Math.trunc(layer.height) * 4);
    const data = expectedLength > 0 ? layer.data.subarray(0, expectedLength) : new Uint8Array(0);
    zip.file(file, data, { compression: "STORE" });

    return {
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
      encoding: "rgba" as const
    };
  });

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
      rasterLayers
    },
    textures: textureEntries.map((entry) => ({
      name: entry.name,
      file: entry.file,
      componentType: "float32",
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
  buffer: ArrayBuffer | Uint8Array
): Promise<CompiledPdfDocument> {
  const zipBytes = buffer instanceof Uint8Array
    ? buffer
    : new Uint8Array(buffer);
  const zip = await JSZip.loadAsync(zipBytes);
  const manifestFile = zip.file("manifest.json");
  if (!manifestFile) {
    throw new Error("Parsed data zip is missing manifest.json.");
  }

  const manifestJson = await manifestFile.async("string");
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

  const endpoints = await readRequiredTexture(zip, textureByName, "endpoints", documentMeta.segmentCount);
  const primitiveMeta = await readRequiredTexture(zip, textureByName, "primitiveMeta", documentMeta.segmentCount);
  const primitiveBounds = await readRequiredTexture(zip, textureByName, "primitiveBounds", documentMeta.segmentCount);
  const styles = await readRequiredTexture(zip, textureByName, "styles", documentMeta.segmentCount);

  const fillPathMetaA = await readRequiredTexture(zip, textureByName, "fillPathMetaA", documentMeta.fillPathCount);
  const fillPathMetaB = await readRequiredTexture(zip, textureByName, "fillPathMetaB", documentMeta.fillPathCount);
  const fillPathMetaC = await readRequiredTexture(zip, textureByName, "fillPathMetaC", documentMeta.fillPathCount);
  const fillSegmentsA = await readRequiredTexture(zip, textureByName, "fillSegmentsA", documentMeta.fillSegmentCount);
  const fillSegmentsB = await readRequiredTexture(zip, textureByName, "fillSegmentsB", documentMeta.fillSegmentCount);

  const textInstanceA = await readRequiredTexture(zip, textureByName, "textInstanceA", documentMeta.textInstanceCount);
  const textInstanceB = await readRequiredTexture(zip, textureByName, "textInstanceB", documentMeta.textInstanceCount);
  const textInstanceC = await readRequiredTexture(zip, textureByName, "textInstanceC", documentMeta.textInstanceCount);
  const textGlyphMetaA = await readRequiredTexture(zip, textureByName, "textGlyphMetaA", documentMeta.textGlyphCount);
  const textGlyphMetaB = await readRequiredTexture(zip, textureByName, "textGlyphMetaB", documentMeta.textGlyphCount);
  const textGlyphSegmentsA = await readRequiredTexture(zip, textureByName, "textGlyphSegmentsA", documentMeta.textGlyphSegmentCount);
  const textGlyphSegmentsB = await readRequiredTexture(zip, textureByName, "textGlyphSegmentsB", documentMeta.textGlyphSegmentCount);

  const rasterLayers = await readRasterLayers(zip, documentMeta.rasterLayers);

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
    rasterLayers
  };
}

function addTexture(
  zip: JSZip,
  entries: BuiltTextureEntry[],
  name: RequiredTextureName,
  data: Float32Array,
  logicalItemCount: number
): void {
  const file = `textures/${name}.f32`;
  const bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  zip.file(file, bytes, { compression: "STORE" });
  entries.push({
    name,
    file,
    logicalItemCount,
    logicalFloatCount: logicalItemCount * 4
  });
}

async function readRequiredTexture(
  zip: JSZip,
  textureByName: Map<string, ManifestTextureEntry>,
  name: RequiredTextureName,
  expectedItemCount: number
): Promise<Float32Array> {
  const entry = textureByName.get(name);
  if (!entry) {
    throw new Error(`Parsed data zip is missing texture metadata for ${name}.`);
  }

  const componentType = readNonEmptyString(entry.componentType);
  if (componentType !== "float32") {
    throw new Error(`Texture ${name} has unsupported componentType ${componentType ?? "unknown"}.`);
  }

  const filePath = readNonEmptyString(entry.file) ?? `textures/${name}.f32`;
  const file = zip.file(filePath);
  if (!file) {
    throw new Error(`Parsed data zip is missing texture payload ${filePath}.`);
  }

  const fileBuffer = await file.async("arraybuffer");
  if (fileBuffer.byteLength % 4 !== 0) {
    throw new Error(`Texture ${name} byte length is not float32 aligned.`);
  }

  const raw = new Float32Array(fileBuffer);
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

async function readRasterLayers(
  zip: JSZip,
  source: ManifestRasterLayerEntry[]
): Promise<CompiledRasterLayer[]> {
  const out: CompiledRasterLayer[] = [];

  for (let i = 0; i < source.length; i += 1) {
    const entry = source[i];
    const width = readNonNegativeInt(entry.width, -1);
    const height = readNonNegativeInt(entry.height, -1);
    if (width <= 0 || height <= 0) {
      throw new Error(`Raster layer ${i} has invalid dimensions.`);
    }

    const encoding = readNonEmptyString(entry.encoding);
    if (encoding !== "rgba") {
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

    const buffer = await file.async("arraybuffer");
    const bytes = new Uint8Array(buffer);
    const expectedLength = width * height * 4;
    if (bytes.length < expectedLength) {
      throw new Error(`Raster layer ${i} payload is truncated (${bytes.length} < ${expectedLength}).`);
    }

    out.push({
      pageIndex,
      width,
      height,
      matrix,
      data: bytes.length === expectedLength ? bytes : bytes.slice(0, expectedLength)
    });
  }

  return out;
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

  return {
    pageCount,
    pages,
    maxSegmentCountPerPage: readNonNegativeInt(documentMeta.maxSegmentCountPerPage, 0),
    maxFillPathCountPerPage: readNonNegativeInt(documentMeta.maxFillPathCountPerPage, 0),
    maxTextInstanceCountPerPage: readNonNegativeInt(documentMeta.maxTextInstanceCountPerPage, 0),
    maxRasterLayerCountPerPage: readNonNegativeInt(documentMeta.maxRasterLayerCountPerPage, 0),
    segmentCount: readNonNegativeInt(documentMeta.segmentCount, 0),
    fillPathCount: readNonNegativeInt(documentMeta.fillPathCount, 0),
    fillSegmentCount: readNonNegativeInt(documentMeta.fillSegmentCount, 0),
    textInstanceCount: readNonNegativeInt(documentMeta.textInstanceCount, 0),
    textGlyphCount: readNonNegativeInt(documentMeta.textGlyphCount, 0),
    textGlyphSegmentCount: readNonNegativeInt(documentMeta.textGlyphSegmentCount, 0),
    rasterLayers
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

export function isParsedDataZipV4Manifest(value: unknown): boolean {
  if (!value || typeof value !== "object") {
    return false;
  }

  const source = value as ParsedDataZipManifest;
  return source.formatVersion === 4 && source.kind === PARSED_DATA_KIND;
}
