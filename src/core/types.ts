import type { Bounds } from "../pdfVectorExtractor";

export interface CompiledPageInfo {
  pageIndex: number;
  pageBounds: Bounds;
  pageRect: [number, number, number, number];
  pageCenter: [number, number];
  widthPt: number;
  heightPt: number;
  segmentStart: number;
  segmentCount: number;
  fillPathStart: number;
  fillPathCount: number;
  fillSegmentStart: number;
  fillSegmentCount: number;
  textInstanceStart: number;
  textInstanceCount: number;
  textGlyphStart: number;
  textGlyphCount: number;
  textGlyphSegmentStart: number;
  textGlyphSegmentCount: number;
  rasterLayerStart: number;
  rasterLayerCount: number;
}

export interface CompiledRasterLayer {
  pageIndex: number;
  width: number;
  height: number;
  data: Uint8Array;
  matrix: Float32Array;
}

export interface CompiledDocumentStats {
  operatorCount: number;
  imagePaintOpCount: number;
  sourceSegmentCount: number;
  mergedSegmentCount: number;
  sourceTextCount: number;
  textInPageCount: number;
  textOutOfPageCount: number;
  discardedTransparentCount: number;
  discardedDegenerateCount: number;
  discardedDuplicateCount: number;
  discardedContainedCount: number;
  maxCellPopulation: number;
}

export interface CompiledPdfDocument {
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
  endpoints: Float32Array;
  primitiveMeta: Float32Array;
  primitiveBounds: Float32Array;
  styles: Float32Array;
  fillPathMetaA: Float32Array;
  fillPathMetaB: Float32Array;
  fillPathMetaC: Float32Array;
  fillSegmentsA: Float32Array;
  fillSegmentsB: Float32Array;
  textInstanceA: Float32Array;
  textInstanceB: Float32Array;
  textInstanceC: Float32Array;
  textGlyphMetaA: Float32Array;
  textGlyphMetaB: Float32Array;
  textGlyphSegmentsA: Float32Array;
  textGlyphSegmentsB: Float32Array;
  rasterLayers: CompiledRasterLayer[];
  stats: CompiledDocumentStats;
}
