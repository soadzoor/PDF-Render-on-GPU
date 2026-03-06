import type * as THREE from "three";
import type { PDFLoadProgress } from "../core/loadProgress";
import type { PDFSource } from "../core/pdfSource";

export type { PDFSource };
export type { PDFLoadProgress };

export interface LoadPDFObjectOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  worker?: "auto" | false | { url?: string; instance?: Worker };
  onProgress?: (progress: PDFLoadProgress) => void;
  page?: {
    worldUnitsPerPoint?: number;
    side?: THREE.Side;
    depthWrite?: boolean;
  };
  material?: {
    strokeCurveEnabled?: boolean;
    textVectorOnly?: boolean;
    pageBackgroundColor?: THREE.ColorRepresentation;
    pageBackgroundOpacity?: number;
    vectorColorOverride?: THREE.ColorRepresentation | null;
    vectorOpacityOverride?: number;
  };
}

export interface ResolvedPageOptions {
  worldUnitsPerPoint: number;
  side: THREE.Side;
  depthWrite: boolean;
}

export interface ResolvedMaterialOptions {
  strokeCurveEnabled: boolean;
  textVectorOnly: boolean;
  pageBackgroundColor: THREE.ColorRepresentation;
  pageBackgroundOpacity: number;
  vectorColorOverride: THREE.ColorRepresentation | null;
  vectorOpacityOverride: number;
}

export interface ResolvedLoadOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  worker: "auto" | false | { url?: string; instance?: Worker };
  page: ResolvedPageOptions;
  material: ResolvedMaterialOptions;
}

export interface PDFDocumentMetrics {
  operatorCount: number;
  imagePaintOpCount: number;
  sourceSegmentCount: number;
  mergedSegmentCount: number;
  visibleSegmentCount: number;
  sourceTextCount: number;
  textInstanceCount: number;
  textGlyphCount: number;
  textGlyphSegmentCount: number;
  textInPageCount: number;
  textOutOfPageCount: number;
  fillPathCount: number;
  fillSegmentCount: number;
  rasterLayerCount: number;
  discardedTransparentCount: number;
  discardedDegenerateCount: number;
  discardedDuplicateCount: number;
  discardedContainedCount: number;
  maxCellPopulation: number;
  pageCount: number;
}

export interface PDFTextureMetrics {
  fillPathTextureWidth: number;
  fillPathTextureHeight: number;
  fillSegmentTextureWidth: number;
  fillSegmentTextureHeight: number;
  segmentTextureWidth: number;
  segmentTextureHeight: number;
  textInstanceTextureWidth: number;
  textInstanceTextureHeight: number;
  textGlyphTextureWidth: number;
  textGlyphTextureHeight: number;
  textSegmentTextureWidth: number;
  textSegmentTextureHeight: number;
  rasterLayerMetaTextureWidth: number;
  rasterLayerMetaTextureHeight: number;
  rasterAtlasSizes: Array<{ width: number; height: number }>;
  textAtlasWidth: number;
  textAtlasHeight: number;
  maxTextureSize: number;
}

export interface PDFLoadTimingMetrics {
  parseMs: number;
  uploadMs: number;
  totalMs: number;
}
