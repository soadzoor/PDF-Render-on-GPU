import { type BufferGeometry, Mesh, Vector2, type Camera, type Object3D, type WebGLRenderer } from "three";

import type { RawShaderMaterial } from "three";
import type { CompiledPageInfo } from "../core/types";
import { setPageIndexUniform } from "./materials/createPdfMaterials";

export class PDFPageMesh extends Mesh {
  readonly pageIndex: number;
  readonly pageWidth: number;
  readonly pageHeight: number;
  readonly pageSize: Vector2;

  private readonly materials: RawShaderMaterial[];
  private readonly beforeRenderHook?: (renderer: WebGLRenderer, scene: Object3D, camera: Camera) => void;

  constructor(
    pageInfo: CompiledPageInfo,
    geometry: BufferGeometry,
    materials: RawShaderMaterial[],
    beforeRenderHook?: (renderer: WebGLRenderer, scene: Object3D, camera: Camera) => void
  ) {
    super(geometry, materials);
    this.pageIndex = pageInfo.pageIndex;
    this.pageWidth = pageInfo.widthPt;
    this.pageHeight = pageInfo.heightPt;
    this.pageSize = new Vector2(this.pageWidth, this.pageHeight);
    this.materials = materials;
    this.beforeRenderHook = beforeRenderHook;
    this.frustumCulled = false;

    this.onBeforeRender = (renderer, scene, camera) => {
      setPageIndexUniform(this.materials, this.pageIndex);
      this.beforeRenderHook?.(renderer, scene, camera);
    };
  }
}
