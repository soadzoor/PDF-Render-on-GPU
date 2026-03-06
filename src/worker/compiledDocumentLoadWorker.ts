/// <reference lib="webworker" />

import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import { loadCompiledDocumentFromSource } from "../core/compiledDocumentLoader";
import { createLoadProgressReporter } from "../core/loadProgress";
import type { CompiledPdfDocument } from "../core/types";
import type {
  CompiledDocumentWorkerLoadRequest,
  CompiledDocumentWorkerResponseMessage
} from "../core/worker/protocol";

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const workerScope = self as unknown as DedicatedWorkerGlobalScope;

workerScope.addEventListener("message", async (event: MessageEvent<CompiledDocumentWorkerLoadRequest>) => {
  const request = event.data;
  if (!request || request.type !== "load") {
    return;
  }

  try {
    const progress = createLoadProgressReporter((payload) => {
      const message: CompiledDocumentWorkerResponseMessage = {
        type: "load:progress",
        requestId: request.requestId,
        progress: payload
      };
      workerScope.postMessage(message);
    });

    const document = await loadCompiledDocumentFromSource(request.source, {
      maxPages: request.options.maxPages,
      extraction: request.options.extraction,
      progress
    });

    const message: CompiledDocumentWorkerResponseMessage = {
      type: "load:success",
      requestId: request.requestId,
      document
    };

    workerScope.postMessage(message, collectTransferables(document));
  } catch (error) {
    const message: CompiledDocumentWorkerResponseMessage = {
      type: "load:error",
      requestId: request.requestId,
      error: error instanceof Error ? error.message : String(error)
    };
    workerScope.postMessage(message);
  }
});

function collectTransferables(document: CompiledPdfDocument): Transferable[] {
  const transferables: Transferable[] = [
    document.endpoints.buffer,
    document.primitiveMeta.buffer,
    document.primitiveBounds.buffer,
    document.styles.buffer,
    document.fillPathMetaA.buffer,
    document.fillPathMetaB.buffer,
    document.fillPathMetaC.buffer,
    document.fillSegmentsA.buffer,
    document.fillSegmentsB.buffer,
    document.textInstanceA.buffer,
    document.textInstanceB.buffer,
    document.textInstanceC.buffer,
    document.textGlyphMetaA.buffer,
    document.textGlyphMetaB.buffer,
    document.textGlyphSegmentsA.buffer,
    document.textGlyphSegmentsB.buffer
  ];

  for (const layer of document.rasterLayers) {
    transferables.push(layer.data.buffer, layer.matrix.buffer);
  }

  return transferables;
}
