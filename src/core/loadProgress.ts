export type PDFLoadStage =
  | "source"
  | "pdf-page"
  | "pdf-operators"
  | "pdf-text"
  | "pdf-raster"
  | "compile"
  | "zip-open"
  | "zip-manifest"
  | "zip-file"
  | "upload"
  | "complete";

export type PDFLoadExecutionPath = "worker" | "main-thread" | "main-thread-fallback";

export interface PDFLoadProgress {
  value: number;
  stage: PDFLoadStage;
  executionPath?: PDFLoadExecutionPath;
  sourceType?: "pdf" | "zip";
  unit?: "bytes" | "operators" | "files" | "pages";
  processed?: number;
  total?: number;
  pageIndex?: number;
  pageCount?: number;
}

export type LoadProgressCallback = (progress: PDFLoadProgress) => void;

interface ProgressRootState {
  callback?: LoadProgressCallback;
  throttleMs: number;
  minDelta: number;
  lastEmittedValue: number;
  lastEmittedAt: number;
  lastStage?: PDFLoadStage;
}

type ProgressMetadata = Omit<PDFLoadProgress, "value">;

export interface IndeterminateProgressOptions {
  stage: PDFLoadStage;
  sourceType?: "pdf" | "zip";
  unit?: "bytes" | "operators" | "files" | "pages";
  processed?: number;
  total?: number;
  pageIndex?: number;
  pageCount?: number;
  tickMs?: number;
  ceiling?: number;
  advance?: number;
  timeConstantMs?: number;
  curve?: "ease" | "linear";
}

const DEFAULT_PROGRESS_STAGE: PDFLoadStage = "source";

export class LoadProgressReporter {
  readonly enabled: boolean;

  private readonly root: ProgressRootState;

  private readonly start: number;

  private readonly end: number;

  private readonly fixedMeta: Partial<ProgressMetadata>;

  constructor(
    callback?: LoadProgressCallback,
    options: {
      start?: number;
      end?: number;
      throttleMs?: number;
      minDelta?: number;
      fixedMeta?: Partial<ProgressMetadata>;
      root?: ProgressRootState;
    } = {}
  ) {
    this.root = options.root ?? {
      callback,
      throttleMs: options.throttleMs ?? 80,
      minDelta: options.minDelta ?? 0.002,
      lastEmittedValue: -1,
      lastEmittedAt: 0
    };
    this.start = clamp01(options.start ?? 0);
    this.end = clamp01(options.end ?? 1);
    this.fixedMeta = options.fixedMeta ?? {};
    this.enabled = typeof this.root.callback === "function";
  }

  child(start: number, end: number, fixedMeta: Partial<ProgressMetadata> = {}): LoadProgressReporter {
    const rangeStart = lerp(this.start, this.end, clamp01(start));
    const rangeEnd = lerp(this.start, this.end, clamp01(end));
    return new LoadProgressReporter(undefined, {
      start: rangeStart,
      end: rangeEnd,
      root: this.root,
      fixedMeta: { ...this.fixedMeta, ...fixedMeta }
    });
  }

  report(value: number, meta: Partial<ProgressMetadata> = {}): void {
    if (!this.enabled) {
      return;
    }

    const mergedMeta = { ...this.fixedMeta, ...meta };
    const normalized = clamp01(value);
    const absoluteValue = lerp(this.start, this.end, normalized);
    const monotonicValue = Math.max(this.root.lastEmittedValue, absoluteValue);
    const stage = mergedMeta.stage ?? this.fixedMeta.stage ?? this.root.lastStage ?? DEFAULT_PROGRESS_STAGE;
    const now = nowMs();
    const delta = monotonicValue - this.root.lastEmittedValue;
    const stageChanged = stage !== this.root.lastStage;
    const shouldEmit =
      this.root.lastEmittedValue < 0 ||
      monotonicValue >= 1 ||
      stageChanged ||
      delta >= this.root.minDelta ||
      now - this.root.lastEmittedAt >= this.root.throttleMs;

    if (!shouldEmit) {
      return;
    }

    const payload: PDFLoadProgress = {
      value: clamp01(monotonicValue),
      stage,
      executionPath: mergedMeta.executionPath,
      sourceType: mergedMeta.sourceType,
      unit: mergedMeta.unit,
      processed: mergedMeta.processed,
      total: mergedMeta.total,
      pageIndex: mergedMeta.pageIndex,
      pageCount: mergedMeta.pageCount
    };

    this.root.lastEmittedValue = payload.value;
    this.root.lastEmittedAt = now;
    this.root.lastStage = payload.stage;
    this.root.callback?.(payload);
  }

  complete(meta: Partial<ProgressMetadata> = {}): void {
    this.report(1, meta);
  }

  async withIndeterminateProgress<T>(
    work: Promise<T> | (() => Promise<T>),
    options: IndeterminateProgressOptions
  ): Promise<T> {
    if (!this.enabled) {
      return typeof work === "function" ? work() : work;
    }

    const tickMs = Math.max(50, Math.trunc(options.tickMs ?? 90));
    const ceiling = clamp(options.ceiling ?? 0.9, 0.1, 0.999);
    const advance = clamp(options.advance ?? 0.18, 0.02, 0.5);
    const timeConstantMs = Math.max(
      tickMs,
      Math.trunc(options.timeConstantMs ?? (tickMs * 5) / Math.max(0.02, advance))
    );
    const curve = options.curve ?? "ease";
    const meta: Partial<ProgressMetadata> = {
      stage: options.stage,
      sourceType: options.sourceType,
      unit: options.unit,
      processed: options.processed,
      total: options.total,
      pageIndex: options.pageIndex,
      pageCount: options.pageCount
    };

    let syntheticValue = 0;
    const startedAt = nowMs();
    this.report(0, meta);

    const intervalId = globalThis.setInterval(() => {
      const elapsedMs = Math.max(0, nowMs() - startedAt);
      if (curve === "linear") {
        syntheticValue = Math.min(ceiling, (elapsedMs / Math.max(1, timeConstantMs)) * ceiling);
      } else {
        const ratio = elapsedMs / Math.max(1, timeConstantMs);
        syntheticValue = Math.min(ceiling, ceiling * (1 - 1 / (1 + ratio)));
      }
      this.report(syntheticValue, meta);
    }, tickMs);

    try {
      const promise = typeof work === "function" ? work() : work;
      const result = await promise;
      this.complete(meta);
      return result;
    } finally {
      globalThis.clearInterval(intervalId);
    }
  }
}

export function createLoadProgressReporter(
  callback?: LoadProgressCallback,
  options: {
    throttleMs?: number;
    minDelta?: number;
  } = {}
): LoadProgressReporter {
  return new LoadProgressReporter(callback, options);
}

export function shouldReportProgressStep(index: number, mask = 127): boolean {
  return (index & mask) === 0;
}

const IS_WORKER_CONTEXT =
  typeof WorkerGlobalScope !== "undefined" &&
  typeof self !== "undefined" &&
  self instanceof WorkerGlobalScope &&
  typeof document === "undefined";

let lastWorkerYieldAt = 0;

export async function maybeYieldInWorker(minIntervalMs = 96): Promise<void> {
  if (!IS_WORKER_CONTEXT) {
    return;
  }

  const now = nowMs();
  if (now - lastWorkerYieldAt < Math.max(16, minIntervalMs)) {
    return;
  }
  lastWorkerYieldAt = now;

  const schedulerApi = (globalThis as { scheduler?: { yield?: () => Promise<void> } }).scheduler;
  if (schedulerApi?.yield) {
    await schedulerApi.yield();
    return;
  }

  await new Promise<void>((resolve) => {
    globalThis.setTimeout(resolve, 0);
  });
}

export function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function nowMs(): number {
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
}
