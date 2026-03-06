import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import { loadCompiledDocumentFromSource } from "../core/compiledDocumentLoader";
import { createLoadProgressReporter, type LoadProgressReporter } from "../core/loadProgress";
import type { CompiledPdfDocument } from "../core/types";
import { loadCompiledDocumentInWorker } from "../core/worker/client";
import { createSharedGpuData } from "./gpu/sharedGpuData";
import { resolveLoadOptions } from "./options";
import { PDFObject } from "./PDFObject";
import type { LoadPDFObjectOptions, PDFSource } from "./types";

let isPdfWorkerConfigured = false;

export async function LoadPDFObject(source: PDFSource, options: LoadPDFObjectOptions = {}): Promise<PDFObject> {
  ensurePdfJsWorkerConfigured();

  const loadStart = nowMs();
  const resolved = resolveLoadOptions(options);
  const progress = createLoadProgressReporter(options.onProgress);
  progress.report(0, { stage: "source" });

  let compiled;
  if (resolved.worker !== false) {
    try {
      compiled = await loadCompiledDocumentInWorker(source, {
        maxPages: resolved.maxPages,
        extraction: resolved.extraction,
        worker:
          typeof resolved.worker === "object"
            ? resolved.worker
            : { create: () => new Worker(new URL("./worker/pdfLoadWorker.ts", import.meta.url), { type: "module" }) },
        progress: progress.child(0, 0.985, { executionPath: "worker" })
      });
    } catch (error) {
      if (resolved.worker !== "auto") {
        throw error;
      }
      compiled = await loadCompiledDocumentOnMain(source, {
        maxPages: resolved.maxPages,
        extraction: resolved.extraction,
        progress: progress.child(0, 0.985, { executionPath: "main-thread-fallback" })
      });
    }
  } else {
    compiled = await loadCompiledDocumentOnMain(source, {
      maxPages: resolved.maxPages,
      extraction: resolved.extraction,
      progress: progress.child(0, 0.985, { executionPath: "main-thread" })
    });
  }
  const parseEnd = nowMs();

  const uploadStart = nowMs();
  const shared = createSharedGpuData(compiled, progress.child(0.985, 0.998, { stage: "upload" }));
  const uploadEnd = nowMs();
  const pdfObject = new PDFObject(compiled, shared, resolved, {
    parseMs: Math.max(0, parseEnd - loadStart),
    uploadMs: Math.max(0, uploadEnd - uploadStart),
    totalMs: Math.max(0, uploadEnd - loadStart)
  });
  progress.complete({ stage: "complete" });
  return pdfObject;
}

async function loadCompiledDocumentOnMain(
  source: PDFSource,
  options: {
    maxPages?: number;
    extraction?: {
      enableSegmentMerge?: boolean;
      enableInvisibleCull?: boolean;
    };
    progress?: LoadProgressReporter;
  }
): Promise<CompiledPdfDocument> {
  return loadCompiledDocumentFromSource(source, options);
}

function ensurePdfJsWorkerConfigured(): void {
  if (isPdfWorkerConfigured) {
    return;
  }

  GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
  isPdfWorkerConfigured = true;
}

function nowMs(): number {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
}
