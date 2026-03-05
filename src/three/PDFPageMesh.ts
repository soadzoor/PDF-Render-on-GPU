import { type BufferGeometry, Mesh } from "three";

import type { RawShaderMaterial } from "three";
import type { CompiledPageInfo } from "../core/types";
import { setPageIndexUniform } from "./materials/createPdfMaterials";

export class PDFPageMesh extends Mesh {
  readonly pageIndex: number;
  readonly pageWidthPt: number;
  readonly pageHeightPt: number;

  private readonly materials: RawShaderMaterial[];

  constructor(pageInfo: CompiledPageInfo, geometry: BufferGeometry, materials: RawShaderMaterial[]) {
    super(geometry, materials);
    this.pageIndex = pageInfo.pageIndex;
    this.pageWidthPt = pageInfo.widthPt;
    this.pageHeightPt = pageInfo.heightPt;
    this.materials = materials;
    this.frustumCulled = false;

    this.onBeforeRender = () => {
      setPageIndexUniform(this.materials, this.pageIndex);
    };
  }
}
