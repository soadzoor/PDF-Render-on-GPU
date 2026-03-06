import { compilePdfPageScenes } from "./documentCompile";
import type { LoadProgressReporter } from "./loadProgress";
import { loadPdfPageScenes } from "./pageSceneLoader";
import { loadCompiledDocumentFromParsedDataZipV4 } from "./parsedDataZipV4";
import {
  detectSourceContainerType,
  normalizePdfSourceToBytes,
  type PDFSource
} from "./pdfSource";
import type { CompiledPdfDocument } from "./types";

export interface CompiledDocumentLoadOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  progress?: LoadProgressReporter;
}

export async function loadCompiledDocumentFromSource(
  source: PDFSource,
  options: CompiledDocumentLoadOptions = {}
): Promise<CompiledPdfDocument> {
  const sourceProgress = options.progress?.child(0, 0.02, { stage: "source" });
  const bytes = await normalizePdfSourceToBytes(source, sourceProgress);
  return loadCompiledDocumentFromBytes(bytes, {
    ...options,
    progress: options.progress?.child(0.02, 1)
  });
}

export async function loadCompiledDocumentFromBytes(
  bytes: Uint8Array,
  options: CompiledDocumentLoadOptions = {}
): Promise<CompiledPdfDocument> {
  const sourceType = detectSourceContainerType(bytes);

  if (sourceType === "zip") {
    return loadCompiledDocumentFromParsedDataZipV4(bytes, options.progress?.child(0, 1, { sourceType: "zip" }));
  }

  if (sourceType === "pdf") {
    const pageScenes = await loadPdfPageScenes(bytes, {
      maxPages: options.maxPages,
      extraction: options.extraction,
      progress: options.progress?.child(0, 0.97, { sourceType: "pdf" })
    });
    return compilePdfPageScenes(pageScenes, options.progress?.child(0.97, 1, {
      stage: "compile",
      sourceType: "pdf"
    }));
  }

  throw new Error("Unsupported source bytes. Expected a PDF or parsed ZIP file.");
}
