import {
  InstancedMesh,
  type BufferGeometry,
  type Camera,
  type Material,
  type Object3D,
  type WebGLRenderer
} from "three";

export class PDFPageInstancedMesh extends InstancedMesh {
  readonly pageIndices: Uint32Array;

  private readonly sourcePages: readonly Object3D[];
  private readonly sourceHashes: Uint32Array;

  constructor(
    geometry: BufferGeometry,
    material: Material | Material[],
    pageIndices: readonly number[],
    sourcePages?: readonly Object3D[],
    beforeRenderHook?: (renderer: WebGLRenderer, scene: Object3D, camera: Camera) => void
  ) {
    super(geometry, material, pageIndices.length);
    this.pageIndices = new Uint32Array(pageIndices.length);
    this.sourcePages = sourcePages ?? [];
    this.sourceHashes = new Uint32Array(pageIndices.length);
    this.frustumCulled = false;

    for (let i = 0; i < pageIndices.length; i += 1) {
      this.pageIndices[i] = pageIndices[i];
      this.syncSourcePageAt(i, true);
    }
    this.onBeforeRender = (renderer, scene, camera) => {
      this.syncFromSourcePages();
      beforeRenderHook?.(renderer, scene, camera);
    };
  }

  syncFromSourcePages(force = false): boolean {
    let changed = false;
    for (let i = 0; i < this.pageIndices.length; i += 1) {
      changed = this.syncSourcePageAt(i, force) || changed;
    }

    if (changed) {
      this.instanceMatrix.needsUpdate = true;
    }

    return changed;
  }

  private syncSourcePageAt(index: number, force: boolean): boolean {
    const sourcePage = this.sourcePages[index];
    if (!sourcePage) {
      return false;
    }

    sourcePage.updateMatrix();
    const hash = hashMatrix(sourcePage.matrix.elements);
    if (!force && this.sourceHashes[index] === hash) {
      return false;
    }

    this.sourceHashes[index] = hash;
    this.setMatrixAt(index, sourcePage.matrix);
    return true;
  }
}

function hashMatrix(elements: ArrayLike<number>): number {
  let hash = 2166136261;
  for (let i = 0; i < elements.length; i += 1) {
    const scaled = Number.isFinite(elements[i]) ? Math.round(elements[i] * 1e6) : 0;
    hash = Math.imul(hash ^ scaled, 16777619);
  }
  return hash >>> 0;
}
