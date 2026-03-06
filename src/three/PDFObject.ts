import { type BufferGeometry, Group } from "three";

import type { CompiledPdfDocument } from "../core/types";
import type { LoadPDFObjectOptions, ResolvedLoadOptions } from "./types";
import { createPdfMaterialSet, type PdfMaterialSet } from "./materials/createPdfMaterials";
import type { SharedGpuData } from "./gpu/sharedGpuData";
import { PDFPageInstancedMesh } from "./PDFPageInstancedMesh";
import { PDFPageMesh } from "./PDFPageMesh";
import { PanCacheController } from "./PanCacheController";

export class PDFObject extends Group {
  readonly pages: PDFPageMesh[];
  readonly pageCount: number;

  private readonly document: CompiledPdfDocument;
  private readonly shared: SharedGpuData;
  private readonly options: ResolvedLoadOptions;
  private readonly pageMaterialSet: PdfMaterialSet;
  private readonly panCacheController: PanCacheController;
  private readonly instancedMaterialSets = new Set<PdfMaterialSet>();
  private readonly instancedGeometries = new Set<BufferGeometry>();

  constructor(document: CompiledPdfDocument, shared: SharedGpuData, options: ResolvedLoadOptions) {
    super();
    this.document = document;
    this.shared = shared;
    this.options = options;
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
