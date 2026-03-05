/// <reference lib="webworker" />

import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import { loadCompiledDocumentFromSource } from "../../core/compiledDocumentLoader";
import type { CompiledPdfDocument } from "../../core/types";
import type { WorkerLoadRequest, WorkerResponseMessage } from "./protocol";

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const workerScope = self as unknown as DedicatedWorkerGlobalScope;

workerScope.addEventListener("message", async (event: MessageEvent<WorkerLoadRequest>) => {
  const request = event.data;
  if (!request || request.type !== "load") {
    return;
  }

  try {
    const document = await loadCompiledDocumentFromSource(request.source, {
      maxPages: request.options.maxPages,
      extraction: request.options.extraction
    });

    const message: WorkerResponseMessage = {
      type: "load:success",
      document
    };

    workerScope.postMessage(message, collectTransferables(document));
  } catch (error) {
    const message: WorkerResponseMessage = {
      type: "load:error",
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
