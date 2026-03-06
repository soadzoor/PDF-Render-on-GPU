import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import { loadCompiledDocumentFromSource } from "../core/compiledDocumentLoader";
import type { CompiledPdfDocument } from "../core/types";
import { createSharedGpuData } from "./gpu/sharedGpuData";
import { resolveLoadOptions } from "./options";
import { PDFObject } from "./PDFObject";
import type { LoadPDFObjectOptions, PDFSource } from "./types";
import type { WorkerLoadRequest, WorkerResponseMessage } from "./worker/protocol";

let isPdfWorkerConfigured = false;

export async function LoadPDFObject(source: PDFSource, options: LoadPDFObjectOptions = {}): Promise<PDFObject> {
  ensurePdfJsWorkerConfigured();

  const loadStart = nowMs();
  const resolved = resolveLoadOptions(options);

  let compiled: CompiledPdfDocument;
  if (resolved.worker !== false) {
    try {
      compiled = await loadCompiledDocumentInWorker(source, resolved.worker, {
        maxPages: resolved.maxPages,
        extraction: resolved.extraction
      });
    } catch (error) {
      if (resolved.worker !== "auto") {
        throw error;
      }
      compiled = await loadCompiledDocumentOnMain(source, {
        maxPages: resolved.maxPages,
        extraction: resolved.extraction
      });
    }
  } else {
    compiled = await loadCompiledDocumentOnMain(source, {
      maxPages: resolved.maxPages,
      extraction: resolved.extraction
    });
  }
  const parseEnd = nowMs();

  const uploadStart = nowMs();
  const shared = createSharedGpuData(compiled);
  const uploadEnd = nowMs();
  return new PDFObject(compiled, shared, resolved, {
    parseMs: Math.max(0, parseEnd - loadStart),
    uploadMs: Math.max(0, uploadEnd - uploadStart),
    totalMs: Math.max(0, uploadEnd - loadStart)
  });
}

async function loadCompiledDocumentOnMain(
  source: PDFSource,
  options: {
    maxPages?: number;
    extraction?: {
      enableSegmentMerge?: boolean;
      enableInvisibleCull?: boolean;
    };
  }
): Promise<CompiledPdfDocument> {
  return loadCompiledDocumentFromSource(source, options);
}

async function loadCompiledDocumentInWorker(
  source: PDFSource,
  workerOption: "auto" | { url?: string; instance?: Worker },
  options: {
    maxPages?: number;
    extraction?: {
      enableSegmentMerge?: boolean;
      enableInvisibleCull?: boolean;
    };
  }
): Promise<CompiledPdfDocument> {
  const useProvidedInstance = typeof workerOption === "object" && workerOption.instance;
  const worker =
    (useProvidedInstance as Worker | undefined) ??
    createDefaultLoaderWorker(typeof workerOption === "object" ? workerOption.url : undefined);
  const ownsWorker = !useProvidedInstance;

  const request: WorkerLoadRequest = {
    type: "load",
    source,
    options
  };

  try {
    return await new Promise<CompiledPdfDocument>((resolve, reject) => {
      const handleMessage = (event: MessageEvent<WorkerResponseMessage>) => {
        const payload = event.data;
        if (!payload) {
          return;
        }

        cleanup();

        if (payload.type === "load:error") {
          reject(new Error(payload.error));
          return;
        }

        resolve(payload.document);
      };

      const handleError = (event: ErrorEvent) => {
        cleanup();
        reject(new Error(event.message || "Worker load failed."));
      };

      const cleanup = () => {
        worker.removeEventListener("message", handleMessage as EventListener);
        worker.removeEventListener("error", handleError as EventListener);
        if (ownsWorker) {
          worker.terminate();
        }
      };

      worker.addEventListener("message", handleMessage as EventListener);
      worker.addEventListener("error", handleError as EventListener);
      worker.postMessage(request);
    });
  } catch (error) {
    if (ownsWorker) {
      worker.terminate();
    }
    throw error;
  }
}

function createDefaultLoaderWorker(customUrl?: string): Worker {
  if (customUrl) {
    return new Worker(customUrl, { type: "module" });
  }

  const url = new URL("./worker/pdfLoadWorker.ts", import.meta.url);
  return new Worker(url, { type: "module" });
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
