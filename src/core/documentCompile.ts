import type { VectorScene } from "../pdfVectorExtractor";
import type { CompiledPdfDocument, CompiledPageInfo, CompiledRasterLayer } from "./types";

export function compilePdfPageScenes(pageScenes: VectorScene[]): CompiledPdfDocument {
  if (pageScenes.length === 0) {
    return {
      pageCount: 0,
      pages: [],
      maxSegmentCountPerPage: 0,
      maxFillPathCountPerPage: 0,
      maxTextInstanceCountPerPage: 0,
      maxRasterLayerCountPerPage: 0,
      segmentCount: 0,
      fillPathCount: 0,
      fillSegmentCount: 0,
      textInstanceCount: 0,
      textGlyphCount: 0,
      textGlyphSegmentCount: 0,
      endpoints: new Float32Array(0),
      primitiveMeta: new Float32Array(0),
      primitiveBounds: new Float32Array(0),
      styles: new Float32Array(0),
      fillPathMetaA: new Float32Array(0),
      fillPathMetaB: new Float32Array(0),
      fillPathMetaC: new Float32Array(0),
      fillSegmentsA: new Float32Array(0),
      fillSegmentsB: new Float32Array(0),
      textInstanceA: new Float32Array(0),
      textInstanceB: new Float32Array(0),
      textInstanceC: new Float32Array(0),
      textGlyphMetaA: new Float32Array(0),
      textGlyphMetaB: new Float32Array(0),
      textGlyphSegmentsA: new Float32Array(0),
      textGlyphSegmentsB: new Float32Array(0),
      rasterLayers: []
    };
  }

  let totalSegmentCount = 0;
  let totalFillPathCount = 0;
  let totalFillSegmentCount = 0;
  let totalTextInstanceCount = 0;
  let totalTextGlyphCount = 0;
  let totalTextGlyphSegmentCount = 0;

  let maxSegmentCountPerPage = 0;
  let maxFillPathCountPerPage = 0;
  let maxTextInstanceCountPerPage = 0;
  let maxRasterLayerCountPerPage = 0;

  const allRasterLayers: CompiledRasterLayer[] = [];

  for (let pageIndex = 0; pageIndex < pageScenes.length; pageIndex += 1) {
    const scene = pageScenes[pageIndex];
    totalSegmentCount += scene.segmentCount;
    totalFillPathCount += scene.fillPathCount;
    totalFillSegmentCount += scene.fillSegmentCount;
    totalTextInstanceCount += scene.textInstanceCount;
    totalTextGlyphCount += scene.textGlyphCount;
    totalTextGlyphSegmentCount += scene.textGlyphSegmentCount;

    maxSegmentCountPerPage = Math.max(maxSegmentCountPerPage, scene.segmentCount);
    maxFillPathCountPerPage = Math.max(maxFillPathCountPerPage, scene.fillPathCount);
    maxTextInstanceCountPerPage = Math.max(maxTextInstanceCountPerPage, scene.textInstanceCount);

    const pageRasterLayers = listSceneRasterLayers(scene);
    maxRasterLayerCountPerPage = Math.max(maxRasterLayerCountPerPage, pageRasterLayers.length);
    for (const layer of pageRasterLayers) {
      allRasterLayers.push({
        pageIndex,
        width: layer.width,
        height: layer.height,
        data: layer.data,
        matrix: layer.matrix
      });
    }
  }

  const endpoints = new Float32Array(totalSegmentCount * 4);
  const primitiveMeta = new Float32Array(totalSegmentCount * 4);
  const primitiveBounds = new Float32Array(totalSegmentCount * 4);
  const styles = new Float32Array(totalSegmentCount * 4);
  const fillPathMetaA = new Float32Array(totalFillPathCount * 4);
  const fillPathMetaB = new Float32Array(totalFillPathCount * 4);
  const fillPathMetaC = new Float32Array(totalFillPathCount * 4);
  const fillSegmentsA = new Float32Array(totalFillSegmentCount * 4);
  const fillSegmentsB = new Float32Array(totalFillSegmentCount * 4);
  const textInstanceA = new Float32Array(totalTextInstanceCount * 4);
  const textInstanceB = new Float32Array(totalTextInstanceCount * 4);
  const textInstanceC = new Float32Array(totalTextInstanceCount * 4);
  const textGlyphMetaA = new Float32Array(totalTextGlyphCount * 4);
  const textGlyphMetaB = new Float32Array(totalTextGlyphCount * 4);
  const textGlyphSegmentsA = new Float32Array(totalTextGlyphSegmentCount * 4);
  const textGlyphSegmentsB = new Float32Array(totalTextGlyphSegmentCount * 4);

  const pages: CompiledPageInfo[] = new Array(pageScenes.length);

  let segmentOffset = 0;
  let fillPathOffset = 0;
  let fillSegmentOffset = 0;
  let textInstanceOffset = 0;
  let textGlyphOffset = 0;
  let textGlyphSegmentOffset = 0;
  let rasterLayerOffset = 0;

  for (let pageIndex = 0; pageIndex < pageScenes.length; pageIndex += 1) {
    const scene = pageScenes[pageIndex];

    const rect = resolveScenePrimaryPageRect(scene);
    const widthPt = Math.max(rect[2] - rect[0], 1e-6);
    const heightPt = Math.max(rect[3] - rect[1], 1e-6);
    const pageCenter: [number, number] = [(rect[0] + rect[2]) * 0.5, (rect[1] + rect[3]) * 0.5];

    const pageRasterLayers = listSceneRasterLayers(scene);

    pages[pageIndex] = {
      pageIndex,
      pageBounds: { ...scene.pageBounds },
      pageRect: rect,
      pageCenter,
      widthPt,
      heightPt,
      segmentStart: segmentOffset,
      segmentCount: scene.segmentCount,
      fillPathStart: fillPathOffset,
      fillPathCount: scene.fillPathCount,
      fillSegmentStart: fillSegmentOffset,
      fillSegmentCount: scene.fillSegmentCount,
      textInstanceStart: textInstanceOffset,
      textInstanceCount: scene.textInstanceCount,
      textGlyphStart: textGlyphOffset,
      textGlyphCount: scene.textGlyphCount,
      textGlyphSegmentStart: textGlyphSegmentOffset,
      textGlyphSegmentCount: scene.textGlyphSegmentCount,
      rasterLayerStart: rasterLayerOffset,
      rasterLayerCount: pageRasterLayers.length
    };

    endpoints.set(scene.endpoints, segmentOffset * 4);
    primitiveMeta.set(scene.primitiveMeta, segmentOffset * 4);
    primitiveBounds.set(scene.primitiveBounds, segmentOffset * 4);
    styles.set(scene.styles, segmentOffset * 4);

    for (let i = 0; i < scene.fillPathCount; i += 1) {
      const src = i * 4;
      const dst = (fillPathOffset + i) * 4;
      fillPathMetaA[dst] = scene.fillPathMetaA[src] + fillSegmentOffset;
      fillPathMetaA[dst + 1] = scene.fillPathMetaA[src + 1];
      fillPathMetaA[dst + 2] = scene.fillPathMetaA[src + 2];
      fillPathMetaA[dst + 3] = scene.fillPathMetaA[src + 3];

      fillPathMetaB[dst] = scene.fillPathMetaB[src];
      fillPathMetaB[dst + 1] = scene.fillPathMetaB[src + 1];
      fillPathMetaB[dst + 2] = scene.fillPathMetaB[src + 2];
      fillPathMetaB[dst + 3] = scene.fillPathMetaB[src + 3];

      fillPathMetaC[dst] = scene.fillPathMetaC[src];
      fillPathMetaC[dst + 1] = scene.fillPathMetaC[src + 1];
      fillPathMetaC[dst + 2] = scene.fillPathMetaC[src + 2];
      fillPathMetaC[dst + 3] = scene.fillPathMetaC[src + 3];
    }

    fillSegmentsA.set(scene.fillSegmentsA, fillSegmentOffset * 4);
    fillSegmentsB.set(scene.fillSegmentsB, fillSegmentOffset * 4);

    textInstanceA.set(scene.textInstanceA, textInstanceOffset * 4);
    textInstanceC.set(scene.textInstanceC, textInstanceOffset * 4);

    for (let i = 0; i < scene.textInstanceCount; i += 1) {
      const src = i * 4;
      const dst = (textInstanceOffset + i) * 4;
      textInstanceB[dst] = scene.textInstanceB[src];
      textInstanceB[dst + 1] = scene.textInstanceB[src + 1];
      textInstanceB[dst + 2] = scene.textInstanceB[src + 2] + textGlyphOffset;
      textInstanceB[dst + 3] = scene.textInstanceB[src + 3];
    }

    for (let i = 0; i < scene.textGlyphCount; i += 1) {
      const src = i * 4;
      const dst = (textGlyphOffset + i) * 4;
      textGlyphMetaA[dst] = scene.textGlyphMetaA[src] + textGlyphSegmentOffset;
      textGlyphMetaA[dst + 1] = scene.textGlyphMetaA[src + 1];
      textGlyphMetaA[dst + 2] = scene.textGlyphMetaA[src + 2];
      textGlyphMetaA[dst + 3] = scene.textGlyphMetaA[src + 3];

      textGlyphMetaB[dst] = scene.textGlyphMetaB[src];
      textGlyphMetaB[dst + 1] = scene.textGlyphMetaB[src + 1];
      textGlyphMetaB[dst + 2] = scene.textGlyphMetaB[src + 2];
      textGlyphMetaB[dst + 3] = scene.textGlyphMetaB[src + 3];
    }

    textGlyphSegmentsA.set(scene.textGlyphSegmentsA, textGlyphSegmentOffset * 4);
    textGlyphSegmentsB.set(scene.textGlyphSegmentsB, textGlyphSegmentOffset * 4);

    segmentOffset += scene.segmentCount;
    fillPathOffset += scene.fillPathCount;
    fillSegmentOffset += scene.fillSegmentCount;
    textInstanceOffset += scene.textInstanceCount;
    textGlyphOffset += scene.textGlyphCount;
    textGlyphSegmentOffset += scene.textGlyphSegmentCount;
    rasterLayerOffset += pageRasterLayers.length;
  }

  return {
    pageCount: pageScenes.length,
    pages,
    maxSegmentCountPerPage,
    maxFillPathCountPerPage,
    maxTextInstanceCountPerPage,
    maxRasterLayerCountPerPage,
    segmentCount: totalSegmentCount,
    fillPathCount: totalFillPathCount,
    fillSegmentCount: totalFillSegmentCount,
    textInstanceCount: totalTextInstanceCount,
    textGlyphCount: totalTextGlyphCount,
    textGlyphSegmentCount: totalTextGlyphSegmentCount,
    endpoints,
    primitiveMeta,
    primitiveBounds,
    styles,
    fillPathMetaA,
    fillPathMetaB,
    fillPathMetaC,
    fillSegmentsA,
    fillSegmentsB,
    textInstanceA,
    textInstanceB,
    textInstanceC,
    textGlyphMetaA,
    textGlyphMetaB,
    textGlyphSegmentsA,
    textGlyphSegmentsB,
    rasterLayers: allRasterLayers
  };
}

function resolveScenePrimaryPageRect(scene: VectorScene): [number, number, number, number] {
  if (scene.pageRects instanceof Float32Array && scene.pageRects.length >= 4) {
    return [scene.pageRects[0], scene.pageRects[1], scene.pageRects[2], scene.pageRects[3]];
  }
  return [scene.pageBounds.minX, scene.pageBounds.minY, scene.pageBounds.maxX, scene.pageBounds.maxY];
}

function listSceneRasterLayers(
  scene: VectorScene
): Array<{ width: number; height: number; data: Uint8Array; matrix: Float32Array }> {
  const out: Array<{ width: number; height: number; data: Uint8Array; matrix: Float32Array }> = [];

  if (Array.isArray(scene.rasterLayers)) {
    for (const layer of scene.rasterLayers) {
      const width = Math.max(0, Math.trunc(layer?.width ?? 0));
      const height = Math.max(0, Math.trunc(layer?.height ?? 0));
      if (width <= 0 || height <= 0 || !(layer.data instanceof Uint8Array) || layer.data.length < width * height * 4) {
        continue;
      }
      out.push({
        width,
        height,
        data: layer.data,
        matrix: layer.matrix instanceof Float32Array ? layer.matrix : new Float32Array(layer.matrix)
      });
    }
  }

  if (out.length > 0) {
    return out;
  }

  const width = Math.max(0, Math.trunc(scene.rasterLayerWidth));
  const height = Math.max(0, Math.trunc(scene.rasterLayerHeight));
  if (width <= 0 || height <= 0 || scene.rasterLayerData.length < width * height * 4) {
    return out;
  }

  out.push({
    width,
    height,
    data: scene.rasterLayerData,
    matrix:
      scene.rasterLayerMatrix instanceof Float32Array
        ? scene.rasterLayerMatrix
        : new Float32Array(scene.rasterLayerMatrix)
  });

  return out;
}
