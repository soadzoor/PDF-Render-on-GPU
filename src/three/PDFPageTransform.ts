import { Object3D, Vector2 } from "three";

import type { CompiledPageInfo } from "../core/types";

export class PDFPageTransform extends Object3D {
  readonly pageIndex: number;
  readonly pageWidth: number;
  readonly pageHeight: number;
  readonly pageSize: Vector2;

  constructor(pageInfo: CompiledPageInfo) {
    super();
    this.pageIndex = pageInfo.pageIndex;
    this.pageWidth = pageInfo.widthPt;
    this.pageHeight = pageInfo.heightPt;
    this.pageSize = new Vector2(this.pageWidth, this.pageHeight);
  }
}
