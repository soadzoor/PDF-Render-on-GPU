import { Box3, Group, Matrix4, Vector3, type BufferGeometry, type Object3D } from "three";

import type { CompiledPdfDocument } from "../core/types";
import type {
  LoadPDFObjectOptions,
  PDFPageMode,
  PDFDocumentMetrics,
  PDFLoadTimingMetrics,
  PDFTextureMetrics,
  ResolvedLoadOptions
} from "./types";
import { createPdfMaterialSet, type PdfMaterialSet } from "./materials/createPdfMaterials";
import type { SharedGpuData } from "./gpu/sharedGpuData";
import { PDFPageInstancedMesh } from "./PDFPageInstancedMesh";
import { PDFPageMesh } from "./PDFPageMesh";
import { PDFPageTransform } from "./PDFPageTransform";
import { PanCacheController } from "./PanCacheController";

export class PDFObject {
  readonly object3d: Object3D;
  readonly pages: PDFPageMesh[];
  readonly pageTransforms: Array<PDFPageMesh | PDFPageTransform>;
  readonly pageCount: number;
  readonly pageMode: PDFPageMode;
  readonly instancedPages: PDFPageInstancedMesh | null;
  readonly documentMetrics: PDFDocumentMetrics;
  readonly textureMetrics: PDFTextureMetrics;
  readonly loadTiming: PDFLoadTimingMetrics;

  private readonly document: CompiledPdfDocument;
  private readonly shared: SharedGpuData;
  private readonly options: ResolvedLoadOptions;
  private readonly pageMaterialSet: PdfMaterialSet | null;
  private readonly panCacheController: PanCacheController;
  private readonly instancedMaterialSets = new Set<PdfMaterialSet>();
  private readonly instancedGeometries = new Set<BufferGeometry>();

  constructor(
    document: CompiledPdfDocument,
    shared: SharedGpuData,
    options: ResolvedLoadOptions,
    loadTiming: PDFLoadTimingMetrics
  ) {
    this.document = document;
    this.shared = shared;
    this.options = options;
    this.loadTiming = { ...loadTiming };
    this.pageMode = options.pageMode;
    this.pageCount = document.pageCount;
    this.documentMetrics = createDocumentMetrics(document);
    this.textureMetrics = createTextureMetrics(shared);

    if (this.pageMode === "instanced") {
      this.pages = [];
      this.pageTransforms = document.pages.map((pageInfo) => new PDFPageTransform(pageInfo));
      this.pageMaterialSet = null;
      this.instancedPages = this.createPrimaryInstancedPages();
      this.object3d = this.instancedPages;
      this.panCacheController = new PanCacheController(this.object3d, shared.textAtlasTexture, options.panOptimization);
      for (const set of this.instancedMaterialSets) {
        this.panCacheController.registerMaterialSet(set);
      }
    } else {
      this.instancedPages = null;
      this.pageMaterialSet = createPdfMaterialSet(shared, options, "mesh");
      const pageMaterialSet = this.pageMaterialSet;
      this.object3d = new Group();
      this.panCacheController = new PanCacheController(this.object3d, shared.textAtlasTexture, options.panOptimization);
      this.panCacheController.registerMaterialSet(pageMaterialSet);
      this.pages = document.pages.map(
        (pageInfo) =>
          new PDFPageMesh(
            pageInfo,
            shared.geometry,
            pageMaterialSet.all,
            (renderer, scene, camera) => {
              this.panCacheController.onBeforeRender(renderer, scene, camera);
            }
          )
      );
      this.pageTransforms = this.pages;
      for (const page of this.pages) {
        this.object3d.add(page);
      }
    }
  }

  get renderObjects(): readonly (PDFPageMesh | PDFPageInstancedMesh)[] {
    if (this.instancedPages) {
      return [this.instancedPages];
    }
    return this.pages;
  }

  setMaterialOptions(options: Partial<NonNullable<LoadPDFObjectOptions["material"]>>): void {
    this.pageMaterialSet?.setMaterialOptions(options);
    for (const set of this.instancedMaterialSets) {
      set.setMaterialOptions(options);
    }
    this.panCacheController.invalidate();
  }

  setPanOptimizationEnabled(enabled: boolean): void {
    this.panCacheController.setEnabled(enabled);
  }

  getWorldBounds(target = new Box3()): Box3 {
    target.makeEmpty();

    if (this.pageTransforms.length === 0) {
      return target;
    }

    if (this.pageMode === "pages") {
      for (const page of this.pages) {
        page.updateWorldMatrix(true, false);
        expandBoundsForPage(target, page.pageWidth, page.pageHeight, page.matrixWorld);
      }
      return target;
    }

    this.object3d.updateWorldMatrix(true, false);
    for (const page of this.pageTransforms) {
      page.updateMatrix();
      BOUNDS_PAGE_MATRIX.multiplyMatrices(this.object3d.matrixWorld, page.matrix);
      expandBoundsForPage(target, page.pageWidth, page.pageHeight, BOUNDS_PAGE_MATRIX);
    }
    return target;
  }

  dispose(): void {
    this.panCacheController.dispose();
    this.pageMaterialSet?.dispose();

    for (const set of this.instancedMaterialSets) {
      set.dispose();
    }
    this.instancedMaterialSets.clear();

    for (const geometry of this.instancedGeometries) {
      geometry.dispose();
    }
    this.instancedGeometries.clear();

    this.shared.dispose();

    if (this.object3d instanceof Group) {
      for (const child of [...this.object3d.children]) {
        this.object3d.remove(child);
      }
    }
  }

  private createPrimaryInstancedPages(): PDFPageInstancedMesh {
    const pageIndices = this.pageTransforms.map((page) => page.pageIndex);
    return this.createInstancedPages(pageIndices);
  }

  private createInstancedPages(pageIndices?: number[]): PDFPageInstancedMesh {
    const indices = pageIndices && pageIndices.length > 0
      ? normalizePageIndexList(pageIndices, this.pageCount)
      : this.pageTransforms.map((page) => page.pageIndex);

    const geometry = this.shared.createInstancedGeometry(indices);
    const materialSet = createPdfMaterialSet(this.shared, this.options, "instanced");
    this.instancedMaterialSets.add(materialSet);
    this.instancedGeometries.add(geometry);

    return new PDFPageInstancedMesh(
      geometry,
      materialSet.all,
      indices,
      indices.map((index) => this.pageTransforms[index]),
      (renderer, scene, camera) => {
        this.panCacheController.onBeforeRender(renderer, scene, camera);
      }
    );
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

const PAGE_LOCAL_CORNERS = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1]
] as const;

const BOUNDS_POINT = new Vector3();
const BOUNDS_PAGE_MATRIX = new Matrix4();

function expandBoundsForPage(target: Box3, pageWidth: number, pageHeight: number, matrixWorld: Matrix4): void {
  const halfWidth = pageWidth * 0.5;
  const halfHeight = pageHeight * 0.5;

  for (const [x, y] of PAGE_LOCAL_CORNERS) {
    BOUNDS_POINT.set(x * halfWidth, y * halfHeight, 0).applyMatrix4(matrixWorld);
    target.expandByPoint(BOUNDS_POINT);
  }
}
