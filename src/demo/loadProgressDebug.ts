import type { PDFLoadProgress } from "../core/loadProgress";

interface LoadProgressDebugTrackerOptions {
  enabled: boolean;
  tag: string;
  emitLine: (line: string) => void;
  minDelta?: number;
  minIntervalMs?: number;
}

interface LoadProgressDebugState {
  token: number;
  label: string;
  startMs: number;
  stageStartMs: number;
  lastLogMs: number;
  lastValue: number;
  lastStage: PDFLoadProgress["stage"] | null;
  lastExecutionPath: PDFLoadProgress["executionPath"] | null;
  stageDurations: Map<PDFLoadProgress["stage"], number>;
}

export interface LoadProgressDebugTracker {
  begin(token: number, label: string): void;
  update(token: number, progress: PDFLoadProgress): void;
  finish(token: number, successful: boolean, error?: string): void;
}

export function formatLoadProgressStage(stage: PDFLoadProgress["stage"] | undefined): string {
  switch (stage) {
    case "source":
      return "Reading source";
    case "pdf-page":
      return "Processing page";
    case "pdf-operators":
      return "Scanning operators";
    case "pdf-text":
      return "Extracting text";
    case "pdf-raster":
      return "Extracting rasters";
    case "compile":
      return "Compiling";
    case "zip-open":
      return "Opening ZIP";
    case "zip-manifest":
      return "Reading manifest";
    case "zip-file":
      return "Decoding ZIP";
    case "upload":
      return "Uploading";
    case "complete":
      return "Complete";
    default:
      return "Parsing / loading";
  }
}

export function createLoadProgressDebugTracker(
  options: LoadProgressDebugTrackerOptions
): LoadProgressDebugTracker {
  const minDelta = options.minDelta ?? 0.03;
  const minIntervalMs = options.minIntervalMs ?? 2000;
  let state: LoadProgressDebugState | null = null;

  return {
    begin(token: number, label: string): void {
      if (!options.enabled) {
        return;
      }
      const now = performance.now();
      state = {
        token,
        label,
        startMs: now,
        stageStartMs: now,
        lastLogMs: now,
        lastValue: 0,
        lastStage: null,
        lastExecutionPath: null,
        stageDurations: new Map()
      };
      options.emitLine(`[${options.tag}][load ${token}] start ${label}`);
    },
    update(token: number, progress: PDFLoadProgress): void {
      if (!options.enabled || !state || state.token !== token) {
        return;
      }

      const now = performance.now();
      const stage = progress.stage ?? "source";
      const value = Math.max(0, Math.min(1, Number(progress.value) || 0));
      const elapsedMs = now - state.startMs;
      const stageLabel = formatLoadProgressStage(stage);
      const executionLabel = formatLoadExecutionPath(progress.executionPath);

      if (state.lastStage !== stage || state.lastExecutionPath !== (progress.executionPath ?? null)) {
        if (state.lastStage) {
          const finishedStageMs = now - state.stageStartMs;
          const previousDuration = state.stageDurations.get(state.lastStage) || 0;
          state.stageDurations.set(state.lastStage, previousDuration + finishedStageMs);
          options.emitLine(
            `[${options.tag}][load ${token}] +${formatDebugElapsed(elapsedMs)} ${formatLoadProgressStage(state.lastStage)} done in ${finishedStageMs.toFixed(0)} ms`
          );
        }
        state.lastStage = stage;
        state.lastExecutionPath = progress.executionPath ?? null;
        state.stageStartMs = now;
        state.lastLogMs = now;
        state.lastValue = value;
        options.emitLine(
          `[${options.tag}][load ${token}] +${formatDebugElapsed(elapsedMs)} ${stageLabel}${executionLabel} ${formatDebugPercent(value)}`
        );
        return;
      }

      if (now - state.lastLogMs >= minIntervalMs || value - state.lastValue >= minDelta) {
        const deltaPercent = (value - state.lastValue) * 100;
        state.lastLogMs = now;
        state.lastValue = value;
        options.emitLine(
          `[${options.tag}][load ${token}] +${formatDebugElapsed(elapsedMs)} ${stageLabel}${executionLabel} ${formatDebugPercent(value)} (${deltaPercent >= 0 ? "+" : ""}${deltaPercent.toFixed(2)}%)`
        );
      }
    },
    finish(token: number, successful: boolean, error?: string): void {
      if (!options.enabled || !state || state.token !== token) {
        return;
      }

      const now = performance.now();
      const elapsedMs = now - state.startMs;
      if (state.lastStage) {
        const stageDurationMs = now - state.stageStartMs;
        const previousDuration = state.stageDurations.get(state.lastStage) || 0;
        state.stageDurations.set(state.lastStage, previousDuration + stageDurationMs);
        options.emitLine(
          `[${options.tag}][load ${token}] +${formatDebugElapsed(elapsedMs)} ${formatLoadProgressStage(state.lastStage)} done in ${stageDurationMs.toFixed(0)} ms`
        );
      }

      const summary = Array.from(state.stageDurations.entries())
        .map(([stageName, durationMs]) => `${stageName}=${durationMs.toFixed(0)}ms`)
        .join(", ");

      if (successful) {
        options.emitLine(
          `[${options.tag}][load ${token}] complete ${state.label} in ${elapsedMs.toFixed(0)} ms${summary ? ` | ${summary}` : ""}`
        );
      } else {
        options.emitLine(
          `[${options.tag}][load ${token}] failed ${state.label} in ${elapsedMs.toFixed(0)} ms${summary ? ` | ${summary}` : ""}${error ? ` | ${error}` : ""}`
        );
      }

      state = null;
    }
  };
}

function formatDebugElapsed(elapsedMs: number): string {
  return `${(elapsedMs / 1000).toFixed(2)}s`;
}

function formatDebugPercent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

function formatLoadExecutionPath(executionPath: PDFLoadProgress["executionPath"] | undefined): string {
  if (!executionPath) {
    return "";
  }
  return ` [${executionPath}]`;
}
