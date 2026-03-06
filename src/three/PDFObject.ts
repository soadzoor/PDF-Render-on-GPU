import { type BufferGeometry, Group } from "three";

import type { CompiledPdfDocument } from "../core/types";
import type {
  LoadPDFObjectOptions,
  PDFDocumentMetrics,
  PDFLoadTimingMetrics,
  PDFTextureMetrics,
  ResolvedLoadOptions
} from "./types";
import { createPdfMaterialSet, type PdfMaterialSet } from "./materials/createPdfMaterials";
import type { SharedGpuData } from "./gpu/sharedGpuData";
import { PDFPageInstancedMesh } from "./PDFPageInstancedMesh";
import { PDFPageMesh } from "./PDFPageMesh";
import { PanCacheController } from "./PanCacheController";

export class PDFObject extends Group {
  readonly pages: PDFPageMesh[];
  readonly pageCount: number;
  readonly documentMetrics: PDFDocumentMetrics;
  readonly textureMetrics: PDFTextureMetrics;
  readonly loadTiming: PDFLoadTimingMetrics;

  private readonly document: CompiledPdfDocument;
  private readonly shared: SharedGpuData;
  private readonly options: ResolvedLoadOptions;
  private readonly pageMaterialSet: PdfMaterialSet;
  private readonly panCacheController: PanCacheController;
  private readonly instancedMaterialSets = new Set<PdfMaterialSet>();
  private readonly instancedGeometries = new Set<BufferGeometry>();

  constructor(
    document: CompiledPdfDocument,
    shared: SharedGpuData,
    options: ResolvedLoadOptions,
    loadTiming: PDFLoadTimingMetrics
  ) {
    super();
    this.document = document;
    this.shared = shared;
    this.options = options;
    this.loadTiming = { ...loadTiming };
    this.documentMetrics = createDocumentMetrics(document);
    this.textureMetrics = createTextureMetrics(shared);
    this.pageMaterialSet = createPdfMaterialSet(shared, options, "mesh");
    this.panCacheController = new PanCacheController(this, shared.textAtlasTexture);
    this.panCacheController.registerMaterialSet(this.pageMaterialSet);

    this.pages = document.pages.map(
      (pageInfo) =>
        new PDFPageMesh(
          pageInfo,
          shared.geometry,
          this.pageMaterialSet.all,
          (renderer, scene, camera) => {
            this.panCacheController.onBeforeRender(renderer, scene, camera);
          }
        )
    );
    this.pageCount = this.pages.length;
    this.pages.forEach((page) => this.add(page));
  }

  createInstancedPages(pageIndices?: number[]): PDFPageInstancedMesh {
    const indices = pageIndices && pageIndices.length > 0
      ? normalizePageIndexList(pageIndices, this.pageCount)
      : this.pages.map((page) => page.pageIndex);

    const geometry = this.shared.createInstancedGeometry(indices);
    const materialSet = createPdfMaterialSet(this.shared, this.options, "instanced");
    this.panCacheController.registerMaterialSet(materialSet);
    this.instancedMaterialSets.add(materialSet);
    this.instancedGeometries.add(geometry);

    const sourcePages = indices.map((index) => this.pages[index]);
    const instanced = new PDFPageInstancedMesh(
      geometry,
      materialSet.all,
      indices,
      sourcePages,
      (renderer, scene, camera) => {
        this.panCacheController.onBeforeRender(renderer, scene, camera);
      }
    );
    this.add(instanced);
    this.panCacheController.invalidate();
    return instanced;
  }

  setMaterialOptions(options: Partial<NonNullable<LoadPDFObjectOptions["material"]>>): void {
    this.pageMaterialSet.setMaterialOptions(options);
    for (const set of this.instancedMaterialSets) {
      set.setMaterialOptions(options);
    }
    this.panCacheController.invalidate();
  }

  dispose(): void {
    this.panCacheController.dispose();
    this.pageMaterialSet.dispose();

    for (const set of this.instancedMaterialSets) {
      set.dispose();
    }
    this.instancedMaterialSets.clear();

    for (const geometry of this.instancedGeometries) {
      geometry.dispose();
    }
    this.instancedGeometries.clear();

    this.shared.dispose();

    for (const child of [...this.children]) {
      this.remove(child);
    }
  }
}

function createDocumentMetrics(document: CompiledPdfDocument): PDFDocumentMetrics {
  const sourceStats = document.stats;
  return {
    operatorCount: sourceStats.operatorCount,
    imagePaintOpCount: sourceStats.imagePaintOpCount,
    sourceSegmentCount: sourceStats.sourceSegmentCount,
    mergedSegmentCount: sourceStats.mergedSegmentCount,
    visibleSegmentCount: document.segmentCount,
    sourceTextCount: sourceStats.sourceTextCount,
    textInstanceCount: document.textInstanceCount,
    textGlyphCount: document.textGlyphCount,
    textGlyphSegmentCount: document.textGlyphSegmentCount,
    textInPageCount: sourceStats.textInPageCount,
    textOutOfPageCount: sourceStats.textOutOfPageCount,
    fillPathCount: document.fillPathCount,
    fillSegmentCount: document.fillSegmentCount,
    rasterLayerCount: document.rasterLayers.length,
    discardedTransparentCount: sourceStats.discardedTransparentCount,
    discardedDegenerateCount: sourceStats.discardedDegenerateCount,
    discardedDuplicateCount: sourceStats.discardedDuplicateCount,
    discardedContainedCount: sourceStats.discardedContainedCount,
    maxCellPopulation: sourceStats.maxCellPopulation,
    pageCount: document.pageCount
  };
}

function createTextureMetrics(shared: SharedGpuData): PDFTextureMetrics {
  return {
    fillPathTextureWidth: shared.fillPathTextureA.width,
    fillPathTextureHeight: shared.fillPathTextureA.height,
    fillSegmentTextureWidth: shared.fillSegmentTextureA.width,
    fillSegmentTextureHeight: shared.fillSegmentTextureA.height,
    segmentTextureWidth: shared.segmentTextureA.width,
    segmentTextureHeight: shared.segmentTextureA.height,
    textInstanceTextureWidth: shared.textInstanceTextureA.width,
    textInstanceTextureHeight: shared.textInstanceTextureA.height,
    textGlyphTextureWidth: shared.textGlyphMetaTextureA.width,
    textGlyphTextureHeight: shared.textGlyphMetaTextureA.height,
    textSegmentTextureWidth: shared.textGlyphSegmentTextureA.width,
    textSegmentTextureHeight: shared.textGlyphSegmentTextureA.height,
    rasterLayerMetaTextureWidth: shared.rasterLayerMetaTextureA.width,
    rasterLayerMetaTextureHeight: shared.rasterLayerMetaTextureA.height,
    rasterAtlasSizes: shared.rasterAtlasSizes.map((size) => ({ width: size.width, height: size.height })),
    textAtlasWidth: shared.textAtlasSize.width,
    textAtlasHeight: shared.textAtlasSize.height,
    maxTextureSize: shared.maxTextureSize
  };
}

function normalizePageIndexList(pageIndices: readonly number[], pageCount: number): number[] {
  const out: number[] = [];
  const seen = new Set<number>();

  for (const value of pageIndices) {
    const pageIndex = Math.trunc(value);
    if (pageIndex < 0 || pageIndex >= pageCount || seen.has(pageIndex)) {
      continue;
    }
    seen.add(pageIndex);
    out.push(pageIndex);
  }

  if (out.length > 0) {
    return out;
  }

  for (let i = 0; i < pageCount; i += 1) {
    out.push(i);
  }
  return out;
}
