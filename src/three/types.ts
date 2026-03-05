import type * as THREE from "three";
import type { PDFSource } from "../core/pdfSource";

export type { PDFSource };

export interface LoadPDFObjectOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  worker?: "auto" | false | { url?: string; instance?: Worker };
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
