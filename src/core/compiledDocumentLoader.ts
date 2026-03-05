import { compilePdfPageScenes } from "./documentCompile";
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
}

export async function loadCompiledDocumentFromSource(
  source: PDFSource,
  options: CompiledDocumentLoadOptions = {}
): Promise<CompiledPdfDocument> {
  const bytes = await normalizePdfSourceToBytes(source);
  return loadCompiledDocumentFromBytes(bytes, options);
}

export async function loadCompiledDocumentFromBytes(
  bytes: Uint8Array,
  options: CompiledDocumentLoadOptions = {}
): Promise<CompiledPdfDocument> {
  const sourceType = detectSourceContainerType(bytes);

  if (sourceType === "zip") {
    return loadCompiledDocumentFromParsedDataZipV4(bytes);
  }

  if (sourceType === "pdf") {
    const pageScenes = await loadPdfPageScenes(bytes, {
      maxPages: options.maxPages,
      extraction: options.extraction
    });
    return compilePdfPageScenes(pageScenes);
  }

  throw new Error("Unsupported source bytes. Expected a PDF or parsed ZIP file.");
}
