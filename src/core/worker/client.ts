import type { PDFSource } from "../pdfSource";
import type { LoadProgressReporter } from "../loadProgress";
import type { CompiledPdfDocument } from "../types";
import type {
  CompiledDocumentWorkerLoadRequest,
  CompiledDocumentWorkerResponseMessage
} from "./protocol";

export interface LoadCompiledDocumentInWorkerOptions {
  maxPages?: number;
  extraction?: {
    enableSegmentMerge?: boolean;
    enableInvisibleCull?: boolean;
  };
  worker?: {
    url?: string;
    instance?: Worker;
    create?: () => Worker;
  };
  progress?: LoadProgressReporter;
}

let nextWorkerRequestId = 1;
const WORKER_START_TIMEOUT_MS = 15000;

export async function loadCompiledDocumentInWorker(
  source: PDFSource,
  options: LoadCompiledDocumentInWorkerOptions = {}
): Promise<CompiledPdfDocument> {
  const requestId = nextWorkerRequestId++;

  const request: CompiledDocumentWorkerLoadRequest = {
    type: "load",
    requestId,
    source,
    options: {
      maxPages: options.maxPages,
      extraction: options.extraction
    }
  };

  try {
    return await new Promise<CompiledPdfDocument>((resolve, reject) => {
      const useProvidedInstance = options.worker?.instance;
      const worker =
        useProvidedInstance ??
        options.worker?.create?.() ??
        createDefaultCompiledDocumentWorker(options.worker?.url);
      const ownsWorker = !useProvidedInstance;
      let didReceiveAnyMessage = false;
      const startupTimeout = globalThis.setTimeout(() => {
        if (didReceiveAnyMessage) {
          return;
        }
        cleanup();
        reject(new Error("Worker load timed out before sending a response."));
      }, WORKER_START_TIMEOUT_MS);

      const handleMessage = (event: MessageEvent<CompiledDocumentWorkerResponseMessage>) => {
        const payload = event.data;
        if (!payload || payload.requestId !== requestId) {
          return;
        }
        didReceiveAnyMessage = true;

        if (payload.type === "load:progress") {
          options.progress?.report(payload.progress.value, payload.progress);
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
        reject(new Error(formatWorkerLoadError(event)));
      };

      const handleMessageError = () => {
        cleanup();
        reject(new Error("Worker load failed to deserialize a message."));
      };

      const cleanup = () => {
        globalThis.clearTimeout(startupTimeout);
        worker.removeEventListener("message", handleMessage as EventListener);
        worker.removeEventListener("error", handleError as EventListener);
        worker.removeEventListener("messageerror", handleMessageError as EventListener);
        if (ownsWorker) {
          worker.terminate();
        }
      };

      worker.addEventListener("message", handleMessage as EventListener);
      worker.addEventListener("error", handleError as EventListener);
      worker.addEventListener("messageerror", handleMessageError as EventListener);
      worker.postMessage(request);
    });
  } catch (error) {
    throw error;
  }
}

function createDefaultCompiledDocumentWorker(customUrl?: string): Worker {
  if (customUrl) {
    return new Worker(customUrl, { type: "module" });
  }

  const url = new URL("./compiledDocumentLoadWorker.ts", import.meta.url);
  return new Worker(url, { type: "module" });
}

function formatWorkerLoadError(event: ErrorEvent): string {
  const baseMessage = event.message || "Worker load failed.";
  const filename = typeof event.filename === "string" ? event.filename : "";
  const line = Number.isFinite(event.lineno) && event.lineno > 0 ? Math.trunc(event.lineno) : 0;
  const column = Number.isFinite(event.colno) && event.colno > 0 ? Math.trunc(event.colno) : 0;

  if (!filename) {
    return baseMessage;
  }

  const location = `${filename}${line > 0 ? `:${line}` : ""}${column > 0 ? `:${column}` : ""}`;
  return `${baseMessage} (${location})`;
}
