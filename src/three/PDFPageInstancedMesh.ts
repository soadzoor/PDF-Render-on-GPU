import {
  InstancedMesh,
  Matrix4,
  type BufferGeometry,
  type Camera,
  type Material,
  type Object3D,
  type WebGLRenderer
} from "three";

export class PDFPageInstancedMesh extends InstancedMesh {
  readonly pageIndices: Uint32Array;

  constructor(
    geometry: BufferGeometry,
    material: Material | Material[],
    pageIndices: readonly number[],
    sourcePages?: readonly Object3D[],
    beforeRenderHook?: (renderer: WebGLRenderer, scene: Object3D, camera: Camera) => void
  ) {
    super(geometry, material, pageIndices.length);
    this.pageIndices = new Uint32Array(pageIndices.length);
    this.frustumCulled = false;

    const matrix = new Matrix4();
    for (let i = 0; i < pageIndices.length; i += 1) {
      this.pageIndices[i] = pageIndices[i];
      if (sourcePages && sourcePages[i]) {
        sourcePages[i].updateMatrix();
        matrix.copy(sourcePages[i].matrix);
      } else {
        matrix.identity();
      }
      this.setMatrixAt(i, matrix);
    }
    this.instanceMatrix.needsUpdate = true;
    this.onBeforeRender = (renderer, scene, camera) => {
      beforeRenderHook?.(renderer, scene, camera);
    };
  }
}
