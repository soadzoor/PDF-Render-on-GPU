import "./style.css";

import { GlobalWorkerOptions } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import { WebGlFloorplanRenderer, type DrawStats, type SceneStats } from "./webGlFloorplanRenderer";
import { WebGpuFloorplanRenderer } from "./webGpuFloorplanRenderer";
import {
  type VectorExtractOptions,
  type VectorScene
} from "./pdfVectorExtractor";
import { createCanvasInteractionController } from "./canvasInteractions";
import { createBackendSwitcher } from "./backendSwitcher";
import { createHudFlushController } from "./demo/hudFlushController";
import {
  createLoadProgressDebugTracker,
  formatLoadProgressStage
} from "./demo/loadProgressDebug";
import { listSceneRasterLayers } from "./parsedDataZip";
import { loadCompiledDocumentFromSource } from "./core/compiledDocumentLoader";
import { buildParsedDataZipV4Blob } from "./core/parsedDataZipV4";
import { compiledDocumentToVectorScene } from "./core/compiledDocumentToVectorScene";
import {
  createLoadProgressReporter,
  type LoadProgressReporter,
  type PDFLoadProgress
} from "./core/loadProgress";
import type { PDFSource } from "./core/pdfSource";
import type { CompiledPdfDocument } from "./core/types";
import { loadCompiledDocumentInWorker } from "./core/worker/client";
import type { RendererApi } from "./rendererTypes";
import { createUiControlManager } from "./uiControls";
import {
  normalizeExampleManifestEntries,
  resolveAppAssetUrl,
  type ExampleAssetManifest,
  type NormalizedExampleEntry
} from "./exampleManifest";

GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const canvas = document.querySelector<HTMLCanvasElement>("#viewport");
const hudElement = document.querySelector<HTMLDivElement>("#hud");
const toggleHudButton = document.querySelector<HTMLButtonElement>("#toggle-hud");
const toggleHudIcon = document.querySelector<HTMLSpanElement>("#toggle-hud-icon");
const openButton = document.querySelector<HTMLButtonElement>("#open-file");
const exampleSelect = document.querySelector<HTMLSelectElement>("#example-select");
const downloadDataButton = document.querySelector<HTMLButtonElement>("#download-data");
const downloadAllDataButton = document.querySelector<HTMLButtonElement>("#download-all-data");
const fileInput = document.querySelector<HTMLInputElement>("#file-input");
const statusElement = document.querySelector<HTMLDivElement>("#status");
const parseLoaderElement = document.querySelector<HTMLDivElement>("#parse-loader");
const parseLoaderTextElement = document.querySelector<HTMLSpanElement>("#parse-loader-text");
const runtimeElement = document.querySelector<HTMLDivElement>("#runtime");
const metricsElement = document.querySelector<HTMLDivElement>("#metrics");
const metricFileElement = document.querySelector<HTMLSpanElement>("#metric-file");
const metricOperatorsElement = document.querySelector<HTMLSpanElement>("#metric-operators");
const metricSourceSegmentsElement = document.querySelector<HTMLSpanElement>("#metric-source-segments");
const metricMergedSegmentsElement = document.querySelector<HTMLSpanElement>("#metric-merged-segments");
const metricVisibleSegmentsElement = document.querySelector<HTMLSpanElement>("#metric-visible-segments");
const metricReductionsElement = document.querySelector<HTMLSpanElement>("#metric-reductions");
const metricCullDiscardsElement = document.querySelector<HTMLSpanElement>("#metric-cull-discards");
const metricTimesElement = document.querySelector<HTMLSpanElement>("#metric-times");
const metricFpsElement = document.querySelector<HTMLSpanElement>("#metric-fps");
const metricTextureElement = document.querySelector<HTMLSpanElement>("#metric-texture");
const metricGridMaxCellElement = document.querySelector<HTMLSpanElement>("#metric-grid-max-cell");
const loadDebugElement = document.querySelector<HTMLDetailsElement>("#load-debug");
const loadDebugLogElement = document.querySelector<HTMLPreElement>("#load-debug-log");
const dropIndicator = document.querySelector<HTMLDivElement>("#drop-indicator");
const panOptimizationToggle = document.querySelector<HTMLInputElement>("#toggle-pan-opt");
const segmentMergeToggle = document.querySelector<HTMLInputElement>("#toggle-segment-merge");
const invisibleCullToggle = document.querySelector<HTMLInputElement>("#toggle-invisible-cull");
const strokeCurveToggle = document.querySelector<HTMLInputElement>("#toggle-stroke-curves");
const vectorTextOnlyToggle = document.querySelector<HTMLInputElement>("#toggle-vector-text-only");
const webGpuToggle = document.querySelector<HTMLInputElement>("#toggle-webgpu");
const maxPagesPerRowInput = document.querySelector<HTMLInputElement>("#max-pages-per-row");
const pageBackgroundColorInput = document.querySelector<HTMLInputElement>("#page-bg-color");
const pageBackgroundOpacitySlider = document.querySelector<HTMLInputElement>("#page-bg-opacity-slider");
const pageBackgroundOpacityInput = document.querySelector<HTMLInputElement>("#page-bg-opacity");
const vectorColorInput = document.querySelector<HTMLInputElement>("#vector-color");
const vectorOpacitySlider = document.querySelector<HTMLInputElement>("#vector-opacity-slider");
const vectorOpacityInput = document.querySelector<HTMLInputElement>("#vector-opacity");

if (
  !canvas ||
  !hudElement ||
  !toggleHudButton ||
  !toggleHudIcon ||
  !openButton ||
  !exampleSelect ||
  !downloadDataButton ||
  !downloadAllDataButton ||
  !fileInput ||
  !statusElement ||
  !parseLoaderElement ||
  !parseLoaderTextElement ||
  !runtimeElement ||
  !metricsElement ||
  !metricFileElement ||
  !metricOperatorsElement ||
  !metricSourceSegmentsElement ||
  !metricMergedSegmentsElement ||
  !metricVisibleSegmentsElement ||
  !metricReductionsElement ||
  !metricCullDiscardsElement ||
  !metricTimesElement ||
  !metricFpsElement ||
  !metricTextureElement ||
  !metricGridMaxCellElement ||
  !loadDebugElement ||
  !loadDebugLogElement ||
  !dropIndicator ||
  !panOptimizationToggle ||
  !segmentMergeToggle ||
  !invisibleCullToggle ||
  !strokeCurveToggle ||
  !vectorTextOnlyToggle ||
  !webGpuToggle ||
  !maxPagesPerRowInput ||
  !pageBackgroundColorInput ||
  !pageBackgroundOpacitySlider ||
  !pageBackgroundOpacityInput ||
  !vectorColorInput ||
  !vectorOpacitySlider ||
  !vectorOpacityInput
) {
  throw new Error("Required UI elements are missing from index.html.");
}

let canvasElement = canvas;
const hudPanelElement = hudElement;
const toggleHudButtonElement = toggleHudButton;
const toggleHudIconElement = toggleHudIcon;
const openButtonElement = openButton;
const exampleSelectElement = exampleSelect;
const downloadDataButtonElement = downloadDataButton;
const downloadAllDataButtonElement = downloadAllDataButton;
const fileInputElement = fileInput;
const statusTextElement = statusElement;
const parsingLoaderElement = parseLoaderElement;
const parsingLoaderTextElement = parseLoaderTextElement;
const runtimeTextElement = runtimeElement;
const metricsPanelElement = metricsElement;
const metricFileTextElement = metricFileElement;
const metricOperatorsTextElement = metricOperatorsElement;
const metricSourceSegmentsTextElement = metricSourceSegmentsElement;
const metricMergedSegmentsTextElement = metricMergedSegmentsElement;
const metricVisibleSegmentsTextElement = metricVisibleSegmentsElement;
const metricReductionsTextElement = metricReductionsElement;
const metricCullDiscardsTextElement = metricCullDiscardsElement;
const metricTimesTextElement = metricTimesElement;
const metricFpsTextElement = metricFpsElement;
const metricTextureTextElement = metricTextureElement;
const metricGridMaxCellTextElement = metricGridMaxCellElement;
const loadDebugDetailsElement = loadDebugElement;
const loadDebugLogTextElement = loadDebugLogElement;
const dropIndicatorElement = dropIndicator;
const panOptimizationToggleElement = panOptimizationToggle;
const segmentMergeToggleElement = segmentMergeToggle;
const invisibleCullToggleElement = invisibleCullToggle;
const strokeCurveToggleElement = strokeCurveToggle;
const vectorTextOnlyToggleElement = vectorTextOnlyToggle;
const webGpuToggleElement = webGpuToggle;
const maxPagesPerRowInputElement = maxPagesPerRowInput;
const pageBackgroundColorInputElement = pageBackgroundColorInput;
const pageBackgroundOpacitySliderElement = pageBackgroundOpacitySlider;
const pageBackgroundOpacityInputElement = pageBackgroundOpacityInput;
const vectorColorInputElement = vectorColorInput;
const vectorOpacitySliderElement = vectorOpacitySlider;
const vectorOpacityInputElement = vectorOpacityInput;
let renderer: RendererApi;
let backendSwitcher: ReturnType<typeof createBackendSwitcher> | null = null;

const uiControlManager = createUiControlManager(
  {
    panOptimizationToggle: panOptimizationToggleElement,
    segmentMergeToggle: segmentMergeToggleElement,
    invisibleCullToggle: invisibleCullToggleElement,
    strokeCurveToggle: strokeCurveToggleElement,
    vectorTextOnlyToggle: vectorTextOnlyToggleElement,
    webGpuToggle: webGpuToggleElement,
    maxPagesPerRowInput: maxPagesPerRowInputElement,
    pageBackgroundColorInput: pageBackgroundColorInputElement,
    pageBackgroundOpacitySlider: pageBackgroundOpacitySliderElement,
    pageBackgroundOpacityInput: pageBackgroundOpacityInputElement,
    vectorColorInput: vectorColorInputElement,
    vectorOpacitySlider: vectorOpacitySliderElement,
    vectorOpacityInput: vectorOpacityInputElement
  },
  () => renderer
);

const canvasInteractionController = createCanvasInteractionController(() => renderer);

function onRendererFrame(stats: DrawStats): void {
  updateFpsMetric();

  const rendered = stats.renderedSegments.toLocaleString();
  const total = stats.totalSegments.toLocaleString();
  const mode = stats.usedCulling ? "culled" : "full";
  const activeBackendLabel = (backendSwitcher?.getActiveBackend() ?? "webgl").toUpperCase();
  hudFlushController.setRuntime(
    `Draw ${rendered}/${total} segments | mode: ${mode} | zoom: ${stats.zoom.toFixed(2)}x | backend: ${activeBackendLabel}`
  );
}

function initializeRendererCommon(rendererApi: RendererApi): void {
  rendererApi.resize();
  rendererApi.setPanOptimizationEnabled(panOptimizationToggleElement.checked);
  rendererApi.setStrokeCurveEnabled(strokeCurveToggleElement.checked);
  rendererApi.setTextVectorOnly(vectorTextOnlyToggleElement.checked);
  const pageBackgroundColor = uiControlManager.readPageBackgroundColorInput();
  rendererApi.setPageBackgroundColor(
    pageBackgroundColor[0],
    pageBackgroundColor[1],
    pageBackgroundColor[2],
    pageBackgroundColor[3]
  );
  const vectorColorOverride = uiControlManager.readVectorColorOverrideInput();
  rendererApi.setVectorColorOverride(
    vectorColorOverride[0],
    vectorColorOverride[1],
    vectorColorOverride[2],
    vectorColorOverride[3]
  );
  rendererApi.setFrameListener(onRendererFrame);
}

function createWebGlRenderer(targetCanvas: HTMLCanvasElement): RendererApi {
  const next = new WebGlFloorplanRenderer(targetCanvas);
  initializeRendererCommon(next);
  return next;
}

async function createWebGpuRenderer(targetCanvas: HTMLCanvasElement): Promise<RendererApi> {
  const next = await WebGpuFloorplanRenderer.create(targetCanvas);
  initializeRendererCommon(next);
  return next;
}

renderer = createWebGlRenderer(canvasElement);

let baseStatus = "Waiting for PDF or parsed ZIP...";
type LoadedSourceKind = "pdf" | "parsed-zip";

interface LoadedSource {
  kind: LoadedSourceKind;
  source: PDFSource;
  label: string;
}

let lastLoadedSource: LoadedSource | null = null;
let lastParsedScene: VectorScene | null = null;
let lastParsedSceneStats: SceneStats | null = null;
let lastParsedSceneLabel: string | null = null;
let lastCompiledDocument: CompiledPdfDocument | null = null;
let loadToken = 0;
let isDropDragActive = false;
const loadDebugEnabled = new URLSearchParams(window.location.search).get("loadDebug") === "1";

interface ParsedPdfCompiledCache {
  sourceRef: PDFSource;
  sourceLabel: string;
  optionsKey: string;
  document: CompiledPdfDocument;
}

let parsedPdfCompiledCache: ParsedPdfCompiledCache | null = null;
let loaderProgressUiToken = 0;

interface LoadPdfOptions {
  preserveView?: boolean;
  autoMaxPagesPerRow?: boolean;
}

const EXPORT_ZIP_COMPRESSION: "STORE" | "DEFLATE" = "DEFLATE";
const EXPORT_ZIP_DEFLATE_LEVEL = 9;
type ExampleSelectionKind = "pdf" | "zip";

interface ExampleSelection {
  id: string;
  sourceName: string;
  kind: ExampleSelectionKind;
  path: string;
}

const exampleSelectionMap = new Map<string, ExampleSelection>();
let exampleManifestEntries: NormalizedExampleEntry[] = [];
let isBatchExampleExportRunning = false;

let fpsLastSampleTime = 0;
let fpsSmoothed = 0;

const hudFlushController = createHudFlushController(
  {
    statusElement: statusTextElement,
    loaderElement: parsingLoaderElement,
    loaderTextElement: parsingLoaderTextElement,
    runtimeElement: runtimeTextElement,
    fpsElement: metricFpsTextElement,
    debugElement: loadDebugDetailsElement,
    debugLogElement: loadDebugLogTextElement
  },
  {
    runtimeThrottleMs: 250,
    fpsThrottleMs: 250,
    debugEnabled: loadDebugEnabled,
    debugMaxLines: 200
  }
);

const loadProgressDebugTracker = createLoadProgressDebugTracker({
  enabled: loadDebugEnabled,
  tag: "hepr/native",
  emitLine(line) {
    console.log(line);
    hudFlushController.appendDebugLine(line);
  },
  minDelta: 0.03,
  minIntervalMs: 2000
});

backendSwitcher = createBackendSwitcher({
  webGpuToggleElement,
  getRenderer: () => renderer,
  setRenderer: (nextRenderer) => {
    renderer = nextRenderer;
  },
  getCanvasElement: () => canvasElement,
  setCanvasElement: (nextCanvas) => {
    canvasElement = nextCanvas;
  },
  createWebGlRenderer,
  createWebGpuRenderer,
  attachCanvasInteractionListeners: (targetCanvas) => {
    canvasInteractionController.attach(targetCanvas);
  },
  resetPointerInteractionState: () => {
    canvasInteractionController.resetState();
  },
  getSceneSnapshot: () => ({
    scene: lastParsedScene,
    label: lastParsedSceneLabel,
    loadedSourceKind: lastLoadedSource?.kind ?? null
  }),
  setSceneStats: (stats) => {
    lastParsedSceneStats = stats;
  },
  updateMetricsAfterSwitch: (label, scene, sceneStats) => {
    updateMetricsPanel(label, scene, sceneStats, 0, 0);
  },
  setMetricTimesText: (text) => {
    metricTimesTextElement.textContent = text;
  },
  formatSceneStatus,
  setBaseStatus: (status) => {
    baseStatus = status;
  },
  setStatus,
  setStatusText: (status) => {
    hudFlushController.setStatus(status);
  }
});

backendSwitcher.initializeToggleState();
setMetricPlaceholder();
setHudCollapsed(false);
setDownloadDataButtonState(false);
setDownloadAllDataButtonState(false);
uiControlManager.syncMaxPagesPerRowInputValue();
setStatus(baseStatus);
refreshDropIndicator();
void loadExampleManifest();

openButtonElement.addEventListener("click", () => {
  fileInputElement.click();
});

downloadDataButtonElement.addEventListener("click", () => {
  void downloadParsedDataZip();
});

downloadAllDataButtonElement.addEventListener("click", () => {
  void downloadAllExampleParsedZips();
});

toggleHudButtonElement.addEventListener("click", () => {
  const currentlyCollapsed = hudPanelElement.classList.contains("collapsed");
  setHudCollapsed(!currentlyCollapsed);
});

fileInputElement.addEventListener("change", async () => {
  const [file] = Array.from(fileInputElement.files || []);
  if (!file) {
    return;
  }
  if (isPdfFile(file)) {
    await loadPdfFile(file);
  } else if (isParsedDataZipFile(file)) {
    await loadParsedDataZipFile(file);
  } else {
    setStatus(`Unsupported file type: ${file.name}`);
  }
  fileInputElement.value = "";
});

exampleSelectElement.addEventListener("change", () => {
  const selectedKey = exampleSelectElement.value;
  if (!selectedKey) {
    return;
  }
  void loadExampleSelection(selectedKey);
});

uiControlManager.bindEventListeners({
  onPanOptimizationChange: (enabled) => {
    renderer.setPanOptimizationEnabled(enabled);
  },
  onSegmentMergeChange: () => reloadLastPdfWithCurrentOptions(),
  onInvisibleCullChange: () => reloadLastPdfWithCurrentOptions(),
  onStrokeCurveChange: (enabled) => {
    renderer.setStrokeCurveEnabled(enabled);
  },
  onVectorTextOnlyChange: (enabled) => {
    renderer.setTextVectorOnly(enabled);
  },
  onMaxPagesPerRowChange: async () => {
    if (!lastCompiledDocument || !lastParsedSceneLabel) {
      return;
    }
    const activeLoadToken = ++loadToken;
    const progress = createLoadProgressReporter((payload) => {
      updateLoaderProgress(activeLoadToken, payload);
    });
    beginLoaderProgress(activeLoadToken);
    await renderCompiledDocument(lastCompiledDocument, lastParsedSceneLabel, {
      activeLoadToken,
      preserveView: false,
      parseMs: 0,
      progress,
      sourceLabelSuffix: lastLoadedSource?.kind === "parsed-zip" ? "parsed data zip" : null
    });
  },
  onWebGpuToggleChange: (enabled) => backendSwitcher?.applyPreference(enabled) ?? Promise.resolve()
});

canvasInteractionController.attach(canvasElement);

window.addEventListener("resize", () => {
  renderer.resize();
});

window.addEventListener("dragenter", (event) => {
  event.preventDefault();
  isDropDragActive = true;
  refreshDropIndicator();
});

window.addEventListener("dragover", (event) => {
  event.preventDefault();
  if (!isDropDragActive) {
    isDropDragActive = true;
    refreshDropIndicator();
  }
});

window.addEventListener("dragleave", (event) => {
  if (event.target === document.documentElement || event.target === document.body) {
    isDropDragActive = false;
    refreshDropIndicator();
  }
});

window.addEventListener("drop", async (event) => {
  event.preventDefault();
  isDropDragActive = false;
  refreshDropIndicator();

  const files = Array.from(event.dataTransfer?.files || []);
  const supported = files.find((file) => isPdfFile(file) || isParsedDataZipFile(file));

  if (!supported) {
    setStatus("Dropped file is not a supported PDF or parsed zip.");
    return;
  }

  if (isPdfFile(supported)) {
    await loadPdfFile(supported);
  } else {
    await loadParsedDataZipFile(supported);
  }
});

function refreshDropIndicator(): void {
  const shouldShow = isDropDragActive || !lastParsedScene;
  dropIndicatorElement.classList.toggle("active", shouldShow);
  dropIndicatorElement.classList.toggle("dragging", isDropDragActive);
}

async function loadExampleManifest(): Promise<void> {
  exampleSelectionMap.clear();
  exampleManifestEntries = [];
  exampleSelectElement.innerHTML = "";
  exampleSelectElement.append(new Option("Examples (loading...)", ""));
  exampleSelectElement.value = "";
  exampleSelectElement.disabled = true;
  setDownloadAllDataButtonState(false);

  try {
    const manifestUrl = resolveAppAssetUrl("examples/manifest.json");
    const response = await fetch(manifestUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const manifest = (await response.json()) as ExampleAssetManifest;
    const entries = normalizeExampleManifestEntries(manifest);
    if (entries.length === 0) {
      throw new Error("Manifest does not contain valid examples.");
    }

    populateExampleSelect(entries);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[Examples] Failed to load manifest: ${message}`);
    exampleManifestEntries = [];
    exampleSelectElement.innerHTML = "";
    exampleSelectElement.append(new Option("Examples unavailable", ""));
    exampleSelectElement.value = "";
    exampleSelectElement.disabled = true;
    setDownloadAllDataButtonState(false);
  }
}

function populateExampleSelect(entries: NormalizedExampleEntry[]): void {
  exampleManifestEntries = [...entries];
  exampleSelectionMap.clear();
  exampleSelectElement.innerHTML = "";
  exampleSelectElement.append(new Option("Load example...", ""));

  for (const entry of entries) {
    const group = document.createElement("optgroup");
    group.label = entry.name;

    const pdfKey = `${entry.id}:pdf`;
    const zipKey = `${entry.id}:zip`;
    const pdfLabel = `Parse PDF (${formatKilobytes(entry.pdfSizeBytes)} kB)`;
    const zipLabel = `Load Parsed ZIP (${formatKilobytes(entry.zipSizeBytes)} kB)`;

    exampleSelectionMap.set(pdfKey, {
      id: entry.id,
      sourceName: entry.name,
      kind: "pdf",
      path: entry.pdfPath
    });
    exampleSelectionMap.set(zipKey, {
      id: entry.id,
      sourceName: entry.name,
      kind: "zip",
      path: entry.zipPath
    });

    group.append(new Option(pdfLabel, pdfKey));
    group.append(new Option(zipLabel, zipKey));
    exampleSelectElement.append(group);
  }

  exampleSelectElement.value = "";
  exampleSelectElement.disabled = exampleSelectionMap.size === 0;
  setDownloadAllDataButtonState(exampleManifestEntries.length > 0);
}

async function loadExampleSelection(selectionKey: string): Promise<void> {
  const selection = exampleSelectionMap.get(selectionKey);
  if (!selection) {
    exampleSelectElement.value = "";
    return;
  }

  exampleSelectElement.disabled = true;
  try {
    const modeLabel = selection.kind === "pdf" ? "PDF" : "parsed ZIP";
    setStatus(`Loading example ${selection.sourceName} (${modeLabel})...`);
    if (selection.kind === "pdf") {
      lastLoadedSource = {
        kind: "pdf",
        source: selection.path,
        label: selection.sourceName
      };
      await loadPdfSource(selection.path, selection.sourceName, {
        preserveView: false,
        autoMaxPagesPerRow: true
      });
    } else {
      const zipLabel = `${selection.sourceName} (parsed zip)`;
      lastLoadedSource = {
        kind: "parsed-zip",
        source: selection.path,
        label: zipLabel
      };
      await loadParsedDataZipSource(selection.path, zipLabel, {
        preserveView: false
      });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`Failed to load example: ${message}`);
  } finally {
    exampleSelectElement.value = "";
    exampleSelectElement.disabled = exampleSelectionMap.size === 0;
  }
}

function isPdfFile(file: File): boolean {
  const lowerName = file.name.toLowerCase();
  return file.type === "application/pdf" || lowerName.endsWith(".pdf");
}

function isParsedDataZipFile(file: File): boolean {
  const lowerName = file.name.toLowerCase();
  return (
    lowerName.endsWith(".zip") ||
    file.type === "application/zip" ||
    file.type === "application/x-zip-compressed"
  );
}

async function loadPdfFile(file: File): Promise<void> {
  lastLoadedSource = { kind: "pdf", source: file, label: file.name };
  parsedPdfCompiledCache = null;
  await loadPdfSource(file, file.name, { preserveView: false, autoMaxPagesPerRow: true });
}

async function loadParsedDataZipFile(file: File): Promise<void> {
  lastLoadedSource = { kind: "parsed-zip", source: file, label: file.name };
  await loadParsedDataZipSource(file, file.name, { preserveView: false });
}

async function loadPdfSource(source: PDFSource, label: string, options: LoadPdfOptions = {}): Promise<void> {
  const activeLoadToken = ++loadToken;
  const extractionOptions = getExtractionOptions();
  const optionsKey = buildPdfPageCacheKey(extractionOptions);
  const progress = createLoadProgressReporter((payload) => {
    updateLoaderProgress(activeLoadToken, payload);
  });
  const cachedDocument = getCachedCompiledPdfDocument(label, optionsKey, source);

  beginLoaderProgress(activeLoadToken);
  beginLoadProgressDebug(activeLoadToken, label);

  try {
    let compiledDocument = cachedDocument;
    const parseStart = performance.now();

    if (compiledDocument) {
      setStatus(`Rearranging ${label}... (using cached compiled document)`);
      progress.report(0.97, { stage: "compile", sourceType: "pdf" });
    } else {
      setStatus(
        `Parsing ${label} with PDF.js... (merge ${extractionOptions.enableSegmentMerge ? "on" : "off"}, cull ${extractionOptions.enableInvisibleCull ? "on" : "off"})`
      );
      compiledDocument = await loadCompiledDocumentWithWorkerFallback(source, {
        maxPages: undefined,
        extraction: extractionOptions,
        progress: progress.child(0, 0.97)
      });
      storeCachedCompiledPdfDocument(label, optionsKey, source, compiledDocument);
    }

    if (activeLoadToken !== loadToken) {
      return;
    }

    if (options.autoMaxPagesPerRow) {
      const pagesPerRow = computeAutoPagesPerRow(compiledDocument.pageCount);
      maxPagesPerRowInputElement.value = String(pagesPerRow);
    }

    const parseMs = performance.now() - parseStart;
    await renderCompiledDocument(compiledDocument, label, {
      activeLoadToken,
      preserveView: options.preserveView,
      parseMs,
      progress,
      sourceLabelSuffix: null
    });
    finishLoadProgressDebug(activeLoadToken, true);
  } catch (error) {
    if (activeLoadToken !== loadToken) {
      return;
    }

    finishLoaderProgress(activeLoadToken, false);
    const message = error instanceof Error ? error.message : String(error);
    finishLoadProgressDebug(activeLoadToken, false, message);
    setStatus(`Failed to render PDF: ${message}`);
    lastCompiledDocument = null;
    hudFlushController.setRuntime("");
    setMetricPlaceholder(label);
  }
}

async function reloadLastPdfWithCurrentOptions(): Promise<void> {
  if (!lastLoadedSource || lastLoadedSource.kind !== "pdf") {
    return;
  }
  await loadPdfSource(lastLoadedSource.source, lastLoadedSource.label, { preserveView: true });
}

async function loadParsedDataZipSource(source: PDFSource, label: string, options: LoadPdfOptions = {}): Promise<void> {
  const activeLoadToken = ++loadToken;
  const progress = createLoadProgressReporter((payload) => {
    updateLoaderProgress(activeLoadToken, payload);
  });
  beginLoaderProgress(activeLoadToken);
  beginLoadProgressDebug(activeLoadToken, label);

  try {
    const parseStart = performance.now();
    setStatus(`Loading parsed data from ${label}...`);
    const compiledDocument = await loadCompiledDocumentWithWorkerFallback(source, {
      progress: progress.child(0, 0.97)
    });

    if (activeLoadToken !== loadToken) {
      return;
    }

    const parseMs = performance.now() - parseStart;
    await renderCompiledDocument(compiledDocument, label, {
      activeLoadToken,
      preserveView: options.preserveView,
      parseMs,
      progress,
      sourceLabelSuffix: "parsed data zip"
    });
    finishLoadProgressDebug(activeLoadToken, true);
  } catch (error) {
    if (activeLoadToken !== loadToken) {
      return;
    }

    finishLoaderProgress(activeLoadToken, false);
    const message = error instanceof Error ? error.message : String(error);
    finishLoadProgressDebug(activeLoadToken, false, message);
    setStatus(`Failed to load parsed data zip: ${message}`);
    lastCompiledDocument = null;
    hudFlushController.setRuntime("");
    setMetricPlaceholder(label);
  }
}

function getExtractionOptions(): VectorExtractOptions {
  return {
    enableSegmentMerge: segmentMergeToggleElement.checked,
    enableInvisibleCull: invisibleCullToggleElement.checked
  };
}

function buildPdfPageCacheKey(options: VectorExtractOptions): string {
  const mergeEnabled = options.enableSegmentMerge !== false;
  const invisibleCullEnabled = options.enableInvisibleCull !== false;
  return `merge:${mergeEnabled ? 1 : 0}|cull:${invisibleCullEnabled ? 1 : 0}`;
}

function getCachedCompiledPdfDocument(label: string, optionsKey: string, source: PDFSource): CompiledPdfDocument | null {
  if (!lastLoadedSource || lastLoadedSource.kind !== "pdf" || !parsedPdfCompiledCache) {
    return null;
  }
  if (!sameLoadedSource(parsedPdfCompiledCache.sourceRef, source)) {
    return null;
  }
  if (parsedPdfCompiledCache.sourceLabel !== label) {
    return null;
  }
  if (parsedPdfCompiledCache.optionsKey !== optionsKey) {
    return null;
  }
  return parsedPdfCompiledCache.document;
}

function storeCachedCompiledPdfDocument(
  label: string,
  optionsKey: string,
  source: PDFSource,
  document: CompiledPdfDocument
): void {
  if (!lastLoadedSource || lastLoadedSource.kind !== "pdf") {
    return;
  }
  parsedPdfCompiledCache = {
    sourceRef: source,
    sourceLabel: label,
    optionsKey,
    document
  };
}

function sameLoadedSource(a: PDFSource, b: PDFSource): boolean {
  if (typeof a === "string" && typeof b === "string") {
    return a === b;
  }
  return a === b;
}

async function loadCompiledDocumentWithWorkerFallback(
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
  try {
    return await loadCompiledDocumentInWorker(source, {
      ...options,
      progress: options.progress?.child(0, 1, { executionPath: "worker" }),
      worker: {
        create: () => new Worker(new URL("./worker/compiledDocumentLoadWorker.ts", import.meta.url), { type: "module" })
      }
    });
  } catch {
    return loadCompiledDocumentFromSource(source, {
      ...options,
      progress: options.progress?.child(0, 1, { executionPath: "main-thread-fallback" })
    });
  }
}

async function renderCompiledDocument(
  compiledDocument: CompiledPdfDocument,
  label: string,
  options: {
    activeLoadToken: number;
    preserveView?: boolean;
    parseMs: number;
    progress: LoadProgressReporter;
    sourceLabelSuffix: string | null;
  }
): Promise<void> {
  const composeStart = performance.now();
  const pagesPerRow = uiControlManager.readMaxPagesPerRowInput();
  const composeProgress = options.progress.child(0.97, 0.985, { stage: "compile" });
  composeProgress.report(0, { stage: "compile", unit: "pages", processed: 0, total: compiledDocument.pageCount });
  const scene = compiledDocumentToVectorScene(compiledDocument, pagesPerRow);
  composeProgress.complete({
    stage: "compile",
    unit: "pages",
    processed: compiledDocument.pageCount,
    total: compiledDocument.pageCount
  });
  const parseMs = options.parseMs + (performance.now() - composeStart);

  if (options.activeLoadToken !== loadToken) {
    return;
  }

  const rasterLayerCount = listSceneRasterLayers(scene).length;
  const hasRasterLayer = rasterLayerCount > 0;
  if (scene.segmentCount === 0 && scene.textInstanceCount === 0 && scene.fillPathCount === 0 && !hasRasterLayer) {
    finishLoaderProgress(options.activeLoadToken, false);
    finishLoadProgressDebug(options.activeLoadToken, false, "No visible geometry was found.");
    setStatus(`No visible geometry was found in ${label}.`);
    hudFlushController.setRuntime("");
    setMetricPlaceholder(label);
    setDownloadDataButtonState(false);
    return;
  }

  setStatus(
    `Uploading ${scene.segmentCount.toLocaleString()} segments, ${scene.textInstanceCount.toLocaleString()} text instances${hasRasterLayer ? `, ${rasterLayerCount.toLocaleString()} raster layer${rasterLayerCount === 1 ? "" : "s"}` : ""} to GPU...`
  );
  const uploadStart = performance.now();
  const uploadProgress = options.progress.child(0.985, 0.998, { stage: "upload" });
  uploadProgress.report(0, { stage: "upload" });
  const sceneStats = renderer.setScene(scene);
  uploadProgress.complete({ stage: "upload" });
  if (!options.preserveView) {
    renderer.fitToBounds(scene.bounds, 64);
  }
  const uploadEnd = performance.now();

  if (options.activeLoadToken !== loadToken) {
    return;
  }

  logSegmentMergeStats(label, scene);
  logInvisibleCullStats(label, scene);
  logTextVectorStats(label, scene);
  logTextureSizeStats(label, scene, sceneStats);

  lastParsedScene = scene;
  lastParsedSceneStats = sceneStats;
  lastParsedSceneLabel = label;
  lastCompiledDocument = compiledDocument;
  refreshDropIndicator();
  setDownloadDataButtonState(true);

  updateMetricsPanel(label, scene, sceneStats, parseMs, uploadEnd - uploadStart);
  baseStatus = options.sourceLabelSuffix
    ? `${formatSceneStatus(label, scene)} | source: ${options.sourceLabelSuffix}`
    : formatSceneStatus(label, scene);
  hudFlushController.setStatus(baseStatus);
  options.progress.complete({ stage: "complete" });
  finishLoaderProgress(options.activeLoadToken, true);
}

function formatRasterLayerSummary(scene: VectorScene): string {
  const rasterLayers = listSceneRasterLayers(scene);
  if (rasterLayers.length === 0) {
    return "";
  }
  if (rasterLayers.length === 1) {
    return `${rasterLayers[0].width}x${rasterLayers[0].height}`;
  }

  const totalPixels = rasterLayers.reduce((sum, layer) => sum + layer.width * layer.height, 0);
  const megaPixels = totalPixels / 1_000_000;
  return `${rasterLayers.length.toLocaleString()} layers (${megaPixels.toFixed(1)} MP total)`;
}

function formatSceneStatus(
  label: string,
  scene: VectorScene
): string {
  const pagePrefix =
    scene.pageCount > 1
      ? `${scene.pageCount.toLocaleString()} pages (${scene.pagesPerRow.toLocaleString()}/row) | `
      : "";
  const fillPathCount = scene.fillPathCount.toLocaleString();
  const sourceSegmentCount = scene.sourceSegmentCount.toLocaleString();
  const visibleSegmentCount = scene.segmentCount.toLocaleString();
  const textInstanceCount = scene.textInstanceCount.toLocaleString();
  const rasterSummary = formatRasterLayerSummary(scene);
  const rasterSuffix = rasterSummary ? `, raster ${rasterSummary}` : "";
  return `${label} loaded | ${pagePrefix}fills ${fillPathCount}, ${visibleSegmentCount} visible from ${sourceSegmentCount} source segments, ${textInstanceCount} text instances${rasterSuffix}`;
}

function setStatus(message: string): void {
  baseStatus = message;
  hudFlushController.setStatus(baseStatus);
}

function beginLoaderProgress(token: number): void {
  loaderProgressUiToken = token;
  hudFlushController.setLoader(true, "Parsing / loading 0.00%");
}

function updateLoaderProgress(token: number, progress: PDFLoadProgress): void {
  if (token !== loadToken || token !== loaderProgressUiToken) {
    return;
  }
  loadProgressDebugTracker.update(token, progress);
  const stageLabel = formatLoadProgressStage(progress.stage);
  const executionPathLabel = progress.executionPath ? ` [${progress.executionPath}]` : "";
  const clampedValue = clamp(progress.value, 0, 1);
  hudFlushController.setLoader(true, `${stageLabel}${executionPathLabel} ${(clampedValue * 100).toFixed(2)}%`);
}

function finishLoaderProgress(token: number, shouldHide: boolean): void {
  if (token !== loaderProgressUiToken) {
    return;
  }
  hudFlushController.setLoader(false);
}

function beginLoadProgressDebug(token: number, label: string): void {
  hudFlushController.clearDebug();
  loadProgressDebugTracker.begin(token, label);
}

function finishLoadProgressDebug(token: number, successful: boolean, error?: string): void {
  loadProgressDebugTracker.finish(token, successful, error);
}

function setDownloadDataButtonState(hasParsedData: boolean, isBusy = false): void {
  downloadDataButtonElement.hidden = !hasParsedData;
  downloadDataButtonElement.disabled = !hasParsedData || isBusy || isBatchExampleExportRunning;
  downloadDataButtonElement.textContent = isBusy ? "Preparing ZIP..." : "Download Parsed Data";
}

function setDownloadAllDataButtonState(hasExamples: boolean, isBusy = false, progressText?: string): void {
  downloadAllDataButtonElement.hidden = false;
  downloadAllDataButtonElement.disabled = !hasExamples || isBusy;
  downloadAllDataButtonElement.textContent = isBusy
    ? progressText ?? "Exporting Example ZIPs..."
    : "Download All Example ZIPs";
}

function setPrimaryLoadControlsEnabled(isEnabled: boolean): void {
  openButtonElement.disabled = !isEnabled;
  fileInputElement.disabled = !isEnabled;
  exampleSelectElement.disabled = !isEnabled || exampleSelectionMap.size === 0;
}

function setHudCollapsed(collapsed: boolean): void {
  hudPanelElement.classList.toggle("collapsed", collapsed);
  toggleHudButtonElement.setAttribute("aria-expanded", String(!collapsed));
  toggleHudButtonElement.title = collapsed ? "Expand panel" : "Collapse panel";
  toggleHudIconElement.textContent = collapsed ? "▸" : "▾";
}

async function downloadAllExampleParsedZips(): Promise<void> {
  if (isBatchExampleExportRunning) {
    return;
  }

  const pdfEntries = exampleManifestEntries;
  if (pdfEntries.length === 0) {
    setStatus("No example PDFs available for batch export.");
    return;
  }

  isBatchExampleExportRunning = true;
  setPrimaryLoadControlsEnabled(false);
  setDownloadDataButtonState(Boolean(lastCompiledDocument), false);
  setDownloadAllDataButtonState(true, true, `Exporting 0/${pdfEntries.length}...`);

  try {
    for (let index = 0; index < pdfEntries.length; index += 1) {
      const entry = pdfEntries[index];
      const step = index + 1;
      setDownloadAllDataButtonState(true, true, `Exporting ${step}/${pdfEntries.length}...`);
      setStatus(`Batch ${step}/${pdfEntries.length}: loading ${entry.name}...`);
      lastLoadedSource = { kind: "pdf", source: entry.pdfPath, label: entry.name };
      parsedPdfCompiledCache = null;
      lastCompiledDocument = null;
      lastParsedSceneLabel = null;

      await loadPdfSource(entry.pdfPath, entry.name, { preserveView: false, autoMaxPagesPerRow: true });
      if (!lastCompiledDocument || lastParsedSceneLabel !== entry.name) {
        throw new Error(`${entry.name}: parsed data not available after load`);
      }

      setStatus(`Batch ${step}/${pdfEntries.length}: downloading ${entry.name} parsed ZIP...`);
      await downloadParsedDataZip();
      await delayMilliseconds(200);
    }

    setStatus(`Batch export complete: ${pdfEntries.length.toLocaleString()} parsed ZIP files downloaded.`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`Batch export failed: ${message}`);
  } finally {
    isBatchExampleExportRunning = false;
    setPrimaryLoadControlsEnabled(true);
    setDownloadDataButtonState(Boolean(lastCompiledDocument), false);
    setDownloadAllDataButtonState(exampleManifestEntries.length > 0, false);
  }
}

async function downloadParsedDataZip(): Promise<void> {
  if (!lastCompiledDocument || !lastParsedSceneLabel) {
    setStatus("No parsed floorplan data available to export.");
    return;
  }

  const label = lastParsedSceneLabel;
  const previousStatusText = hudFlushController.getStatus();

  setDownloadDataButtonState(true, true);
  hudFlushController.setStatus("Preparing parsed ZIP (v4)...");

  try {
    const selectedZip = await buildParsedDataZipV4Blob(lastCompiledDocument, {
      sourceFile: label,
      zipCompression: EXPORT_ZIP_COMPRESSION,
      zipDeflateLevel: EXPORT_ZIP_DEFLATE_LEVEL,
      textureLayout: "channel-major",
      textureByteShuffle: false,
      texturePredictor: "none",
      encodeRasterImages: true
    });

    const zipFileName = `${sanitizeDownloadName(label)}-parsed-data.zip`;
    triggerBlobDownload(selectedZip.blob, zipFileName);
    console.log(
      `[Parsed data export] ${label}: wrote v4 ZIP (${selectedZip.textureCount.toLocaleString()} textures, ${selectedZip.rasterLayerCount.toLocaleString()} raster layers) to ${zipFileName} (${formatKilobytes(selectedZip.byteLength)} kB, compression=${EXPORT_ZIP_COMPRESSION.toLowerCase()})`
    );
    hudFlushController.setStatus(previousStatusText || baseStatus);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`Failed to download parsed data: ${message}`);
  } finally {
    setDownloadDataButtonState(true, false);
  }
}

function formatKilobytes(sizeBytes: number): string {
  const safeBytes = Math.max(0, Number(sizeBytes) || 0);
  return (safeBytes / 1024).toFixed(1);
}

function sanitizeDownloadName(label: string): string {
  const withoutExtension = label.replace(/\.pdf$/i, "");
  const normalized = withoutExtension.trim().replace(/[^a-zA-Z0-9._-]+/g, "_");
  return normalized.length > 0 ? normalized : "floorplan";
}

function triggerBlobDownload(blob: Blob, filename: string): void {
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = filename;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 0);
}

function setMetricPlaceholder(label: string = "-"): void {
  metricFileTextElement.textContent = label;
  metricOperatorsTextElement.textContent = "-";
  metricSourceSegmentsTextElement.textContent = "-";
  metricMergedSegmentsTextElement.textContent = "-";
  metricVisibleSegmentsTextElement.textContent = "-";
  metricReductionsTextElement.textContent = "-";
  metricCullDiscardsTextElement.textContent = "-";
  metricTimesTextElement.textContent = "-";
  metricTextureTextElement.textContent = "-";
  metricGridMaxCellTextElement.textContent = "-";
  metricsPanelElement.dataset.ready = "false";
  hudFlushController.setFps("-");
}

function updateMetricsPanel(
  label: string,
  scene: VectorScene,
  sceneStats: {
    fillPathTextureWidth: number;
    fillPathTextureHeight: number;
    fillSegmentTextureWidth: number;
    fillSegmentTextureHeight: number;
    textureWidth: number;
    textureHeight: number;
    maxTextureSize: number;
    maxCellPopulation: number;
    textInstanceTextureWidth: number;
    textInstanceTextureHeight: number;
    textGlyphTextureWidth: number;
    textGlyphTextureHeight: number;
    textSegmentTextureWidth: number;
    textSegmentTextureHeight: number;
  },
  parseMs: number,
  uploadMs: number
): void {
  const sourceSegments = scene.sourceSegmentCount;
  const mergedSegments = scene.mergedSegmentCount;
  const visibleSegments = scene.segmentCount;
  const fillPaths = scene.fillPathCount;

  const mergeReduction = sourceSegments > 0 ? (1 - mergedSegments / sourceSegments) * 100 : 0;
  const cullReduction = mergedSegments > 0 ? (1 - visibleSegments / mergedSegments) * 100 : 0;
  const totalReduction = sourceSegments > 0 ? (1 - visibleSegments / sourceSegments) * 100 : 0;
  const textureUtilization = computeTextureAreaUtilizationPercent(
    sceneStats.textureWidth,
    sceneStats.textureHeight,
    sceneStats.maxTextureSize
  );
  const rasterSummary = formatRasterLayerSummary(scene);

  metricFileTextElement.textContent = label;
  metricOperatorsTextElement.textContent = scene.operatorCount.toLocaleString();
  metricSourceSegmentsTextElement.textContent = sourceSegments.toLocaleString();
  metricMergedSegmentsTextElement.textContent = `${mergedSegments.toLocaleString()} (${formatPercent(mergeReduction)} reduction)`;
  metricVisibleSegmentsTextElement.textContent =
    `${visibleSegments.toLocaleString()} (${formatPercent(totalReduction)} total reduction), fills ${fillPaths.toLocaleString()}, text ${scene.textInstanceCount.toLocaleString()} instances, pages ${scene.pageCount.toLocaleString()} (${scene.pagesPerRow.toLocaleString()}/row)`;
  metricReductionsTextElement.textContent =
    `merge ${formatPercent(mergeReduction)}, invisible-cull ${formatPercent(cullReduction)}, total ${formatPercent(totalReduction)}`;
  metricCullDiscardsTextElement.textContent =
    `transparent ${scene.discardedTransparentCount.toLocaleString()}, degenerate ${scene.discardedDegenerateCount.toLocaleString()}, duplicates ${scene.discardedDuplicateCount.toLocaleString()}, contained ${scene.discardedContainedCount.toLocaleString()}, glyphs ${scene.textGlyphCount.toLocaleString()} / glyph segments ${scene.textGlyphSegmentCount.toLocaleString()}`;
  metricTimesTextElement.textContent = `parse ${parseMs.toFixed(0)} ms, upload ${uploadMs.toFixed(0)} ms`;
  metricTextureTextElement.textContent =
    `fill paths ${sceneStats.fillPathTextureWidth}x${sceneStats.fillPathTextureHeight}, fill seg ${sceneStats.fillSegmentTextureWidth}x${sceneStats.fillSegmentTextureHeight}, segments ${sceneStats.textureWidth}x${sceneStats.textureHeight} (${textureUtilization.toFixed(1)}% of max area ${sceneStats.maxTextureSize}x${sceneStats.maxTextureSize}), text inst ${sceneStats.textInstanceTextureWidth}x${sceneStats.textInstanceTextureHeight}, glyph ${sceneStats.textGlyphTextureWidth}x${sceneStats.textGlyphTextureHeight}, glyph-seg ${sceneStats.textSegmentTextureWidth}x${sceneStats.textSegmentTextureHeight}${rasterSummary ? `, raster ${rasterSummary}` : ""}`;
  metricGridMaxCellTextElement.textContent = sceneStats.maxCellPopulation.toLocaleString();
  metricsPanelElement.dataset.ready = "true";
}

function formatPercent(value: number): string {
  return `${Math.max(0, value).toFixed(1)}%`;
}

function updateFpsMetric(): void {
  const now = performance.now();
  if (fpsLastSampleTime > 0) {
    const deltaMs = now - fpsLastSampleTime;
    if (deltaMs > 0) {
      const fpsNow = 1000 / deltaMs;
      fpsSmoothed = fpsSmoothed === 0 ? fpsNow : fpsSmoothed * 0.85 + fpsNow * 0.15;
      hudFlushController.setFps(`${fpsSmoothed.toFixed(0)} FPS`);
    }
  }
  fpsLastSampleTime = now;
}

function logTextureSizeStats(
  label: string,
  scene: VectorScene,
  sceneStats: {
    fillPathTextureWidth: number;
    fillPathTextureHeight: number;
    fillSegmentTextureWidth: number;
    fillSegmentTextureHeight: number;
    textureWidth: number;
    textureHeight: number;
    maxTextureSize: number;
    textInstanceTextureWidth: number;
    textInstanceTextureHeight: number;
    textGlyphTextureWidth: number;
    textGlyphTextureHeight: number;
    textSegmentTextureWidth: number;
    textSegmentTextureHeight: number;
  }
): void {
  const utilization = computeTextureAreaUtilizationPercent(
    sceneStats.textureWidth,
    sceneStats.textureHeight,
    sceneStats.maxTextureSize
  );
  const rasterSummary = formatRasterLayerSummary(scene);
  console.log(
    `[GPU texture size] ${label}: fills=${sceneStats.fillPathTextureWidth}x${sceneStats.fillPathTextureHeight} (paths=${scene.fillPathCount.toLocaleString()}), fill-segments=${sceneStats.fillSegmentTextureWidth}x${sceneStats.fillSegmentTextureHeight} (count=${scene.fillSegmentCount.toLocaleString()}), segments=${sceneStats.textureWidth}x${sceneStats.textureHeight} (count=${scene.segmentCount.toLocaleString()}, max=${sceneStats.maxTextureSize}, util=${utilization.toFixed(1)}%), text instances=${sceneStats.textInstanceTextureWidth}x${sceneStats.textInstanceTextureHeight} (count=${scene.textInstanceCount.toLocaleString()}), glyphs=${sceneStats.textGlyphTextureWidth}x${sceneStats.textGlyphTextureHeight} (count=${scene.textGlyphCount.toLocaleString()}), glyph-segments=${sceneStats.textSegmentTextureWidth}x${sceneStats.textSegmentTextureHeight} (count=${scene.textGlyphSegmentCount.toLocaleString()})${rasterSummary ? `, raster=${rasterSummary}` : ""}`
  );
}

function computeTextureAreaUtilizationPercent(width: number, height: number, maxTextureSize: number): number {
  const safeWidth = Math.max(1, Math.floor(width));
  const safeHeight = Math.max(1, Math.floor(height));
  const safeMax = Math.max(1, Math.floor(maxTextureSize));
  const usedArea = safeWidth * safeHeight;
  const maxArea = safeMax * safeMax;
  return (usedArea / maxArea) * 100;
}

function logSegmentMergeStats(label: string, scene: VectorScene): void {
  if (scene.sourceSegmentCount <= 0) {
    return;
  }

  const merged = scene.mergedSegmentCount;
  const source = scene.sourceSegmentCount;
  const reduction = source > 0 ? (1 - merged / source) * 100 : 0;

  console.log(
    `[Segment merge] ${label}: ${merged.toLocaleString()} merged / ${source.toLocaleString()} source (${reduction.toFixed(1)}% reduction)`
  );
}

function logInvisibleCullStats(label: string, scene: VectorScene): void {
  if (scene.mergedSegmentCount <= 0) {
    return;
  }

  const visible = scene.segmentCount;
  const merged = scene.mergedSegmentCount;
  const reduction = merged > 0 ? (1 - visible / merged) * 100 : 0;

  console.log(
    `[Invisible cull] ${label}: ${visible.toLocaleString()} visible / ${merged.toLocaleString()} merged (${reduction.toFixed(1)}% reduction, transparent=${scene.discardedTransparentCount.toLocaleString()}, degenerate=${scene.discardedDegenerateCount.toLocaleString()}, duplicates=${scene.discardedDuplicateCount.toLocaleString()}, contained=${scene.discardedContainedCount.toLocaleString()})`
  );
}

function logTextVectorStats(label: string, scene: VectorScene): void {
  console.log(
    `[Text vectors] ${label}: instances=${scene.textInstanceCount.toLocaleString()}, sourceText=${scene.sourceTextCount.toLocaleString()}, glyphs=${scene.textGlyphCount.toLocaleString()}, glyphSegments=${scene.textGlyphSegmentCount.toLocaleString()}, inPage=${scene.textInPageCount.toLocaleString()}, outOfPage=${scene.textOutOfPageCount.toLocaleString()}, fillPaths=${scene.fillPathCount.toLocaleString()}, fillSegments=${scene.fillSegmentCount.toLocaleString()}`
  );
}

function delayMilliseconds(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, Math.max(0, ms));
  });
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

function computeAutoPagesPerRow(pageCount: number): number {
  const safePageCount = Math.max(1, Math.trunc(pageCount));
  return clamp(Math.ceil(Math.sqrt(safePageCount)), 1, 100);
}
