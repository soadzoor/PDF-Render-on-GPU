import { DoubleSide } from "three";
import type { LoadPDFObjectOptions, ResolvedLoadOptions } from "./types";

export function resolveLoadOptions(options: LoadPDFObjectOptions = {}): ResolvedLoadOptions {
  return {
    maxPages: options.maxPages,
    extraction: options.extraction,
    worker: options.worker ?? "auto",
    page: {
      worldUnitsPerPoint: clamp(options.page?.worldUnitsPerPoint ?? 0.01, 1e-6, 10),
      side: options.page?.side ?? DoubleSide,
      depthWrite: options.page?.depthWrite ?? false
    },
    material: {
      strokeCurveEnabled: options.material?.strokeCurveEnabled ?? true,
      textVectorOnly: options.material?.textVectorOnly ?? false,
      pageBackgroundColor: options.material?.pageBackgroundColor ?? 0xffffff,
      pageBackgroundOpacity: clamp(options.material?.pageBackgroundOpacity ?? 1, 0, 1),
      vectorColorOverride: options.material?.vectorColorOverride ?? null,
      vectorOpacityOverride: clamp(options.material?.vectorOpacityOverride ?? 0, 0, 1)
    }
  };
}

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) {
    return min;
  }
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
