import {
  composeVectorScenesInGrid,
  type RasterLayer,
  type VectorScene
} from "../pdfVectorExtractor";
import type { CompiledPageInfo, CompiledPdfDocument, CompiledRasterLayer } from "./types";

export function compiledDocumentToPageScenes(document: CompiledPdfDocument): VectorScene[] {
  const out: VectorScene[] = [];

  for (let i = 0; i < document.pages.length; i += 1) {
    const page = document.pages[i];
    out.push(buildSinglePageScene(document, page));
  }

  return out;
}

export function compiledDocumentToVectorScene(
  document: CompiledPdfDocument,
  pagesPerRow: number
): VectorScene {
  const pageScenes = compiledDocumentToPageScenes(document);
  const normalizedPagesPerRow = normalizePositiveInt(pagesPerRow, 10, 1, 100);
  return composeVectorScenesInGrid(pageScenes, normalizedPagesPerRow);
}

function buildSinglePageScene(
  document: CompiledPdfDocument,
  page: CompiledPageInfo
): VectorScene {
  const segmentFloatStart = page.segmentStart * 4;
  const segmentFloatEnd = (page.segmentStart + page.segmentCount) * 4;
  const fillPathFloatStart = page.fillPathStart * 4;
  const fillPathFloatEnd = (page.fillPathStart + page.fillPathCount) * 4;
  const fillSegmentFloatStart = page.fillSegmentStart * 4;
  const fillSegmentFloatEnd = (page.fillSegmentStart + page.fillSegmentCount) * 4;
  const textInstanceFloatStart = page.textInstanceStart * 4;
  const textInstanceFloatEnd = (page.textInstanceStart + page.textInstanceCount) * 4;
  const textGlyphFloatStart = page.textGlyphStart * 4;
  const textGlyphFloatEnd = (page.textGlyphStart + page.textGlyphCount) * 4;
  const textGlyphSegmentFloatStart = page.textGlyphSegmentStart * 4;
  const textGlyphSegmentFloatEnd = (page.textGlyphSegmentStart + page.textGlyphSegmentCount) * 4;

  const endpoints = document.endpoints.slice(segmentFloatStart, segmentFloatEnd);
  const primitiveMeta = document.primitiveMeta.slice(segmentFloatStart, segmentFloatEnd);
  const primitiveBounds = document.primitiveBounds.slice(segmentFloatStart, segmentFloatEnd);
  const styles = document.styles.slice(segmentFloatStart, segmentFloatEnd);

  const fillPathMetaA = document.fillPathMetaA.slice(fillPathFloatStart, fillPathFloatEnd);
  const fillPathMetaB = document.fillPathMetaB.slice(fillPathFloatStart, fillPathFloatEnd);
  const fillPathMetaC = document.fillPathMetaC.slice(fillPathFloatStart, fillPathFloatEnd);
  const fillSegmentsA = document.fillSegmentsA.slice(fillSegmentFloatStart, fillSegmentFloatEnd);
  const fillSegmentsB = document.fillSegmentsB.slice(fillSegmentFloatStart, fillSegmentFloatEnd);

  const textInstanceA = document.textInstanceA.slice(textInstanceFloatStart, textInstanceFloatEnd);
  const textInstanceB = document.textInstanceB.slice(textInstanceFloatStart, textInstanceFloatEnd);
  const textInstanceC = document.textInstanceC.slice(textInstanceFloatStart, textInstanceFloatEnd);
  const textGlyphMetaA = document.textGlyphMetaA.slice(textGlyphFloatStart, textGlyphFloatEnd);
  const textGlyphMetaB = document.textGlyphMetaB.slice(textGlyphFloatStart, textGlyphFloatEnd);
  const textGlyphSegmentsA = document.textGlyphSegmentsA.slice(textGlyphSegmentFloatStart, textGlyphSegmentFloatEnd);
  const textGlyphSegmentsB = document.textGlyphSegmentsB.slice(textGlyphSegmentFloatStart, textGlyphSegmentFloatEnd);

  for (let i = 0; i < page.fillPathCount; i += 1) {
    fillPathMetaA[i * 4] -= page.fillSegmentStart;
  }

  for (let i = 0; i < page.textInstanceCount; i += 1) {
    textInstanceB[i * 4 + 2] -= page.textGlyphStart;
  }

  for (let i = 0; i < page.textGlyphCount; i += 1) {
    textGlyphMetaA[i * 4] -= page.textGlyphSegmentStart;
  }

  const rasterLayers = readPageRasterLayers(document, page);
  const primaryRasterLayer = rasterLayers[0] ?? null;

  const maxHalfWidth = computeMaxHalfWidth(styles, page.segmentCount);

  return {
    pageCount: 1,
    pagesPerRow: 1,
    pageRects: new Float32Array([page.pageRect[0], page.pageRect[1], page.pageRect[2], page.pageRect[3]]),

    fillPathCount: page.fillPathCount,
    fillSegmentCount: page.fillSegmentCount,
    fillPathMetaA,
    fillPathMetaB,
    fillPathMetaC,
    fillSegmentsA,
    fillSegmentsB,

    segmentCount: page.segmentCount,
    sourceSegmentCount: page.segmentCount,
    mergedSegmentCount: page.segmentCount,

    sourceTextCount: page.textInstanceCount,
    textInstanceCount: page.textInstanceCount,
    textGlyphCount: page.textGlyphCount,
    textGlyphSegmentCount: page.textGlyphSegmentCount,
    textInPageCount: page.textInstanceCount,
    textOutOfPageCount: 0,

    textInstanceA,
    textInstanceB,
    textInstanceC,
    textGlyphMetaA,
    textGlyphMetaB,
    textGlyphSegmentsA,
    textGlyphSegmentsB,

    rasterLayers,
    rasterLayerWidth: primaryRasterLayer?.width ?? 0,
    rasterLayerHeight: primaryRasterLayer?.height ?? 0,
    rasterLayerData: primaryRasterLayer?.data ?? new Uint8Array(0),
    rasterLayerMatrix: primaryRasterLayer?.matrix ?? new Float32Array([1, 0, 0, 1, 0, 0]),

    endpoints,
    primitiveMeta,
    primitiveBounds,
    styles,

    bounds: { ...page.pageBounds },
    pageBounds: { ...page.pageBounds },
    maxHalfWidth,

    operatorCount: 0,
    imagePaintOpCount: rasterLayers.length,
    pathCount: 0,

    discardedTransparentCount: 0,
    discardedDegenerateCount: 0,
    discardedDuplicateCount: 0,
    discardedContainedCount: 0
  };
}

function readPageRasterLayers(document: CompiledPdfDocument, page: CompiledPageInfo): RasterLayer[] {
  const out: RasterLayer[] = [];

  const start = page.rasterLayerStart;
  const end = start + page.rasterLayerCount;
  for (let i = start; i < end; i += 1) {
    const layer = document.rasterLayers[i];
    if (!layer) {
      continue;
    }
    out.push(cloneRasterLayer(layer));
  }

  return out;
}

function cloneRasterLayer(layer: CompiledRasterLayer): RasterLayer {
  return {
    width: layer.width,
    height: layer.height,
    data: layer.data.slice(),
    matrix: new Float32Array(layer.matrix)
  };
}

function computeMaxHalfWidth(styles: Float32Array, segmentCount: number): number {
  let maxHalfWidth = 0;
  for (let i = 0; i < segmentCount; i += 1) {
    maxHalfWidth = Math.max(maxHalfWidth, styles[i * 4]);
  }
  return maxHalfWidth;
}

function normalizePositiveInt(value: number, fallback: number, min: number, max: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, Math.trunc(parsed)));
}
