/// <reference lib="webworker" />

import type {
  CompiledDocumentWorkerLoadRequest,
  CompiledDocumentWorkerResponseMessage
} from "./protocol";

const workerScope = self as unknown as DedicatedWorkerGlobalScope;
const WORKER_PROGRESS_THROTTLE_MS = 400;
const WORKER_PROGRESS_MIN_DELTA = 0.005;

interface WorkerRuntime {
  loadCompiledDocumentFromSource: typeof import("../compiledDocumentLoader").loadCompiledDocumentFromSource;
  createLoadProgressReporter: typeof import("../loadProgress").createLoadProgressReporter;
  collectCompiledDocumentTransferables: typeof import("./transferables").collectCompiledDocumentTransferables;
}

let runtimePromise: Promise<WorkerRuntime> | null = null;

workerScope.addEventListener("message", async (event: MessageEvent<CompiledDocumentWorkerLoadRequest>) => {
  const request = event.data;
  if (!request || request.type !== "load") {
    return;
  }

  try {
    const initialProgressMessage: CompiledDocumentWorkerResponseMessage = {
      type: "load:progress",
      requestId: request.requestId,
      progress: {
        value: 0,
        stage: "source",
        executionPath: "worker"
      }
    };
    workerScope.postMessage(initialProgressMessage);

    const runtime = await getWorkerRuntime();

    const progress = runtime.createLoadProgressReporter(
      (payload) => {
        const message: CompiledDocumentWorkerResponseMessage = {
          type: "load:progress",
          requestId: request.requestId,
          progress: {
            ...payload,
            executionPath: "worker"
          }
        };
        workerScope.postMessage(message);
      },
      {
        throttleMs: WORKER_PROGRESS_THROTTLE_MS,
        minDelta: WORKER_PROGRESS_MIN_DELTA
      }
    );

    const document = await runtime.loadCompiledDocumentFromSource(request.source, {
      maxPages: request.options.maxPages,
      extraction: request.options.extraction,
      progress
    });

    const message: CompiledDocumentWorkerResponseMessage = {
      type: "load:success",
      requestId: request.requestId,
      document
    };
    workerScope.postMessage(message, runtime.collectCompiledDocumentTransferables(document));
  } catch (error) {
    const message: CompiledDocumentWorkerResponseMessage = {
      type: "load:error",
      requestId: request.requestId,
      error: error instanceof Error ? error.message : String(error)
    };
    workerScope.postMessage(message);
  }
});

async function getWorkerRuntime(): Promise<WorkerRuntime> {
  if (!runtimePromise) {
    runtimePromise = initializeWorkerRuntime();
  }
  return runtimePromise;
}

async function initializeWorkerRuntime(): Promise<WorkerRuntime> {
  const [
    compiledDocumentLoaderModule,
    loadProgressModule,
    transferablesModule
  ] = await Promise.all([
    import("../compiledDocumentLoader"),
    import("../loadProgress"),
    import("./transferables")
  ]);

  return {
    loadCompiledDocumentFromSource: compiledDocumentLoaderModule.loadCompiledDocumentFromSource,
    createLoadProgressReporter: loadProgressModule.createLoadProgressReporter,
    collectCompiledDocumentTransferables: transferablesModule.collectCompiledDocumentTransferables
  };
}
