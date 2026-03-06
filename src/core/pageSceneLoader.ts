import { extractPdfPageScenes, type VectorExtractOptions, type VectorScene } from "../pdfVectorExtractor";
import type { LoadProgressReporter } from "./loadProgress";

export interface PageSceneLoadOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  progress?: LoadProgressReporter;
}

export async function loadPdfPageScenes(
  sourceBytes: Uint8Array,
  options: PageSceneLoadOptions = {}
): Promise<VectorScene[]> {
  const extractionOptions: VectorExtractOptions = {
    maxPages: options.maxPages,
    enableSegmentMerge: options.extraction?.enableSegmentMerge,
    enableInvisibleCull: options.extraction?.enableInvisibleCull
  };

  const buffer = new ArrayBuffer(sourceBytes.byteLength);
  new Uint8Array(buffer).set(sourceBytes);

  return extractPdfPageScenes(buffer, extractionOptions, options.progress);
}
