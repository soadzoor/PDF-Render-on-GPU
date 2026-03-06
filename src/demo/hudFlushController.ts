export interface HudFlushControllerElements {
  statusElement: HTMLElement;
  loaderElement: HTMLElement;
  loaderTextElement: HTMLElement;
  runtimeElement: HTMLElement;
  fpsElement: HTMLElement;
  debugElement?: HTMLElement | null;
  debugLogElement?: HTMLElement | null;
}

export interface HudFlushControllerOptions {
  runtimeThrottleMs?: number;
  fpsThrottleMs?: number;
  debugEnabled?: boolean;
  debugMaxLines?: number;
}

interface TextSlotState {
  current: string;
  next: string;
  dirty: boolean;
  lastFlushMs: number;
  throttleMs: number;
}

interface LoaderState {
  currentVisible: boolean;
  nextVisible: boolean;
  currentText: string;
  nextText: string;
  dirty: boolean;
}

export interface HudFlushController {
  setStatus(text: string): void;
  getStatus(): string;
  setLoader(isVisible: boolean, text?: string): void;
  setRuntime(text: string): void;
  setFps(text: string): void;
  appendDebugLine(line: string): void;
  clearDebug(): void;
}

export function createHudFlushController(
  elements: HudFlushControllerElements,
  options: HudFlushControllerOptions = {}
): HudFlushController {
  const runtimeThrottleMs = Math.max(0, Math.trunc(options.runtimeThrottleMs ?? 250));
  const fpsThrottleMs = Math.max(0, Math.trunc(options.fpsThrottleMs ?? 250));
  const debugEnabled = options.debugEnabled === true;
  const debugMaxLines = Math.max(1, Math.trunc(options.debugMaxLines ?? 200));

  const statusState: TextSlotState = createTextSlotState(elements.statusElement.textContent ?? "", 0);
  const runtimeState: TextSlotState = createTextSlotState(elements.runtimeElement.textContent ?? "", runtimeThrottleMs);
  const fpsState: TextSlotState = createTextSlotState(elements.fpsElement.textContent ?? "", fpsThrottleMs);
  const loaderState: LoaderState = {
    currentVisible: !elements.loaderElement.hidden,
    nextVisible: !elements.loaderElement.hidden,
    currentText: elements.loaderTextElement.textContent ?? "",
    nextText: elements.loaderTextElement.textContent ?? "",
    dirty: false
  };

  let debugLines: string[] = [];
  let debugDirty = false;
  let currentDebugVisible = shouldShowDebug(debugEnabled, debugLines.length > 0);
  let frameId: number | null = null;

  if (elements.debugElement) {
    elements.debugElement.hidden = !currentDebugVisible;
  }
  if (!currentDebugVisible && elements.debugLogElement) {
    elements.debugLogElement.textContent = "";
  }

  function scheduleFlush(): void {
    if (frameId !== null) {
      return;
    }
    frameId = globalThis.requestAnimationFrame(flush);
  }

  function flush(now: number): void {
    frameId = null;
    let needsAnotherFrame = false;

    flushTextSlot(statusState, elements.statusElement, now);
    flushLoaderState(loaderState, elements.loaderElement, elements.loaderTextElement);
    needsAnotherFrame = flushTextSlot(runtimeState, elements.runtimeElement, now) || needsAnotherFrame;
    needsAnotherFrame = flushTextSlot(fpsState, elements.fpsElement, now) || needsAnotherFrame;

    if (elements.debugElement && elements.debugLogElement) {
      const shouldShow = shouldShowDebug(debugEnabled, debugLines.length > 0);
      if (currentDebugVisible !== shouldShow) {
        currentDebugVisible = shouldShow;
        elements.debugElement.hidden = !shouldShow;
      }

      if (shouldShow && debugDirty) {
        if ("open" in elements.debugElement) {
          (elements.debugElement as HTMLDetailsElement).open = true;
        }
        elements.debugLogElement.textContent = debugLines.join("\n");
        elements.debugLogElement.scrollTop = elements.debugLogElement.scrollHeight;
        debugDirty = false;
      } else if (!shouldShow && elements.debugLogElement.textContent !== "") {
        elements.debugLogElement.textContent = "";
        debugDirty = false;
      }
    }

    if (needsAnotherFrame) {
      scheduleFlush();
    }
  }

  return {
    setStatus(text: string): void {
      updateTextSlot(statusState, text);
      scheduleFlush();
    },
    getStatus(): string {
      return statusState.next;
    },
    setLoader(isVisible: boolean, text = ""): void {
      const nextText = isVisible ? text : "";
      if (
        loaderState.nextVisible === isVisible &&
        loaderState.nextText === nextText &&
        !loaderState.dirty
      ) {
        return;
      }
      loaderState.nextVisible = isVisible;
      loaderState.nextText = nextText;
      loaderState.dirty = true;
      flushLoaderState(loaderState, elements.loaderElement, elements.loaderTextElement);
    },
    setRuntime(text: string): void {
      updateTextSlot(runtimeState, text);
      scheduleFlush();
    },
    setFps(text: string): void {
      updateTextSlot(fpsState, text);
      scheduleFlush();
    },
    appendDebugLine(line: string): void {
      if (!debugEnabled) {
        return;
      }
      debugLines.push(line);
      if (debugLines.length > debugMaxLines) {
        debugLines = debugLines.slice(debugLines.length - debugMaxLines);
      }
      debugDirty = true;
      scheduleFlush();
    },
    clearDebug(): void {
      if (!debugEnabled && debugLines.length === 0 && !debugDirty) {
        return;
      }
      debugLines = [];
      debugDirty = true;
      scheduleFlush();
    }
  };
}

function createTextSlotState(initialText: string, throttleMs: number): TextSlotState {
  return {
    current: initialText,
    next: initialText,
    dirty: false,
    lastFlushMs: 0,
    throttleMs
  };
}

function updateTextSlot(slot: TextSlotState, text: string): void {
  if (slot.next === text && !slot.dirty) {
    return;
  }
  slot.next = text;
  slot.dirty = true;
}

function flushTextSlot(slot: TextSlotState, element: HTMLElement, now: number): boolean {
  if (!slot.dirty) {
    return false;
  }

  const bypassThrottle = slot.next === "" || slot.next === "-" || slot.current === "" || slot.current === "-";
  if (!bypassThrottle && slot.throttleMs > 0 && now - slot.lastFlushMs < slot.throttleMs) {
    return true;
  }

  if (element.textContent !== slot.next) {
    element.textContent = slot.next;
  }
  slot.current = slot.next;
  slot.dirty = false;
  slot.lastFlushMs = now;
  return false;
}

function flushLoaderState(
  state: LoaderState,
  loaderElement: HTMLElement,
  loaderTextElement: HTMLElement
): void {
  if (!state.dirty) {
    return;
  }

  loaderElement.hidden = !state.nextVisible;
  const text = state.nextVisible ? state.nextText : "";
  if (loaderTextElement.textContent !== text) {
    loaderTextElement.textContent = text;
  }

  state.currentVisible = state.nextVisible;
  state.currentText = state.nextText;
  state.dirty = false;
}

function shouldShowDebug(debugEnabled: boolean, hasLines: boolean): boolean {
  return debugEnabled && hasLines;
}
