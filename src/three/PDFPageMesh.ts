import { type BufferGeometry, Mesh, type Camera, type Object3D, type WebGLRenderer } from "three";

import type { RawShaderMaterial } from "three";
import type { CompiledPageInfo } from "../core/types";
import { setPageIndexUniform } from "./materials/createPdfMaterials";

export class PDFPageMesh extends Mesh {
  readonly pageIndex: number;
  readonly pageWidthPt: number;
  readonly pageHeightPt: number;

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
    this.pageWidthPt = pageInfo.widthPt;
    this.pageHeightPt = pageInfo.heightPt;
    this.materials = materials;
    this.beforeRenderHook = beforeRenderHook;
    this.frustumCulled = false;

    this.onBeforeRender = (renderer, scene, camera) => {
      setPageIndexUniform(this.materials, this.pageIndex);
      this.beforeRenderHook?.(renderer, scene, camera);
    };
  }
}
