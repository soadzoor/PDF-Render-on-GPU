import {
  ClampToEdgeWrapping,
  Color,
  LinearFilter,
  Matrix4,
  OrthographicCamera,
  Quaternion,
  Vector2,
  Vector3,
  WebGLRenderTarget,
  type Camera,
  type Object3D,
  type Texture,
  type WebGLRenderer
} from "three";

import {
  PAN_CACHE_OVERSCAN_FACTOR,
  PAN_CACHE_ZOOM_RATIO_MAX,
  PAN_CACHE_ZOOM_RATIO_MIN
} from "../shared/shaders/samplingPolicy";
import type { PdfMaterialSet } from "./materials/createPdfMaterials";

const MATRIX_COMPARE_EPSILON = 1e-9;
const MIN_ZOOM = 1e-6;

export class PanCacheController {
  private readonly owner: Object3D;
  private readonly fallbackTexture: Texture;
  private readonly materialSets = new Set<PdfMaterialSet>();

  private cacheTarget: WebGLRenderTarget | null = null;
  private cacheValid = false;
  private cacheEnabled = false;
  private invalidateRequested = true;
  private isRefreshingCache = false;
  private hasLastFrameCameraState = false;
  private lastHandledFrame = -1;
  private lastContentHash = 0;

  private readonly cacheViewProj = new Matrix4();
  private readonly identity = new Matrix4();
  private readonly cacheCamera = new OrthographicCamera();

  private readonly lastCameraWorld = new Matrix4();
  private readonly lastCameraProjection = new Matrix4();
  private readonly lastViewport = new Vector2(0, 0);

  private readonly cachedSourcePosition = new Vector3();
  private readonly cachedSourceQuaternion = new Quaternion();
  private readonly cachedRightAxis = new Vector3(1, 0, 0);
  private readonly cachedUpAxis = new Vector3(0, 1, 0);
  private cachedSourceLeft = -1;
  private cachedSourceRight = 1;
  private cachedSourceTop = 1;
  private cachedSourceBottom = -1;
  private cachedSourceZoom = 1;

  private readonly tmpViewport = new Vector2();
  private readonly tmpDelta = new Vector3();
  private readonly tmpClearColor = new Color();

  constructor(owner: Object3D, fallbackTexture: Texture) {
    this.owner = owner;
    this.fallbackTexture = fallbackTexture;
  }

  registerMaterialSet(materialSet: PdfMaterialSet): void {
    this.materialSets.add(materialSet);
    if (this.cacheEnabled && this.cacheTarget) {
      materialSet.setPanCacheState(true, this.cacheViewProj, this.cacheTarget.texture);
      return;
    }
    materialSet.setPanCacheState(false, this.identity, this.fallbackTexture);
  }

  unregisterMaterialSet(materialSet: PdfMaterialSet): void {
    this.materialSets.delete(materialSet);
  }

  invalidate(): void {
    this.invalidateRequested = true;
    this.cacheValid = false;
  }

  onBeforeRender(renderer: WebGLRenderer, scene: Object3D, camera: Camera): void {
    if (this.isRefreshingCache || scene === this.owner) {
      return;
    }

    const frame = renderer.info.render.frame;
    if (frame === this.lastHandledFrame) {
      return;
    }

    renderer.getDrawingBufferSize(this.tmpViewport);

    const orthographicCamera = camera as OrthographicCamera;
    if (orthographicCamera.isOrthographicCamera !== true) {
      this.disablePanCache();
      this.recordCameraState(camera, this.tmpViewport);
      this.lastHandledFrame = renderer.info.render.frame;
      return;
    }

    const viewportChanged =
      this.tmpViewport.x !== this.lastViewport.x ||
      this.tmpViewport.y !== this.lastViewport.y;
    const cameraMoving = this.hasLastFrameCameraState
      ? !matricesApproxEqual(camera.matrixWorld, this.lastCameraWorld, MATRIX_COMPARE_EPSILON) ||
        !matricesApproxEqual(camera.projectionMatrix, this.lastCameraProjection, MATRIX_COMPARE_EPSILON)
      : false;

    const contentDirty = this.detectContentTransformChange();
    const refreshRequested = viewportChanged || contentDirty || this.invalidateRequested;

    if (!cameraMoving) {
      this.disablePanCache();
      this.recordCameraState(camera, this.tmpViewport);
      this.lastHandledFrame = renderer.info.render.frame;
      return;
    }

    if (!this.ensureCacheTarget(renderer, this.tmpViewport)) {
      this.disablePanCache();
      this.recordCameraState(camera, this.tmpViewport);
      this.lastHandledFrame = renderer.info.render.frame;
      return;
    }

    if (this.shouldRefreshCache(orthographicCamera, refreshRequested)) {
      this.refreshCache(renderer, orthographicCamera);
    }

    if (this.cacheValid && this.cacheTarget) {
      this.setPanCacheState(true, this.cacheViewProj, this.cacheTarget.texture);
      this.cacheEnabled = true;
    } else {
      this.disablePanCache();
    }

    this.recordCameraState(camera, this.tmpViewport);
    this.lastHandledFrame = renderer.info.render.frame;
  }

  dispose(): void {
    this.disablePanCache();
    this.cacheTarget?.dispose();
    this.cacheTarget = null;
    this.materialSets.clear();
  }

  private detectContentTransformChange(): boolean {
    const nextHash = computeTransformHash(this.owner);
    const changed = this.lastContentHash !== nextHash;
    this.lastContentHash = nextHash;
    if (changed) {
      this.cacheValid = false;
    }
    return changed;
  }

  private shouldRefreshCache(camera: OrthographicCamera, forced: boolean): boolean {
    if (forced || !this.cacheValid || !this.cacheTarget) {
      return true;
    }

    const orientationDot = Math.abs(camera.quaternion.dot(this.cachedSourceQuaternion));
    if (orientationDot < 0.999999) {
      return true;
    }

    if (
      camera.left !== this.cachedSourceLeft ||
      camera.right !== this.cachedSourceRight ||
      camera.top !== this.cachedSourceTop ||
      camera.bottom !== this.cachedSourceBottom
    ) {
      return true;
    }

    const zoomRatio = camera.zoom / Math.max(this.cachedSourceZoom, MIN_ZOOM);
    if (zoomRatio < PAN_CACHE_ZOOM_RATIO_MIN || zoomRatio > PAN_CACHE_ZOOM_RATIO_MAX) {
      return true;
    }

    this.tmpDelta.copy(camera.position).sub(this.cachedSourcePosition);
    const deltaX = Math.abs(this.tmpDelta.dot(this.cachedRightAxis));
    const deltaY = Math.abs(this.tmpDelta.dot(this.cachedUpAxis));

    const halfCurrentWorldWidth = Math.abs((camera.right - camera.left) / Math.max(camera.zoom, MIN_ZOOM)) * 0.5;
    const halfCurrentWorldHeight = Math.abs((camera.top - camera.bottom) / Math.max(camera.zoom, MIN_ZOOM)) * 0.5;
    const halfCacheWorldWidth =
      Math.abs((this.cachedSourceRight - this.cachedSourceLeft) / Math.max(this.cachedSourceZoom, MIN_ZOOM)) *
      0.5 *
      PAN_CACHE_OVERSCAN_FACTOR;
    const halfCacheWorldHeight =
      Math.abs((this.cachedSourceTop - this.cachedSourceBottom) / Math.max(this.cachedSourceZoom, MIN_ZOOM)) *
      0.5 *
      PAN_CACHE_OVERSCAN_FACTOR;

    const coverageX = halfCacheWorldWidth - halfCurrentWorldWidth;
    const coverageY = halfCacheWorldHeight - halfCurrentWorldHeight;
    if (coverageX <= 0 || coverageY <= 0) {
      return true;
    }

    return deltaX > coverageX || deltaY > coverageY;
  }

  private refreshCache(renderer: WebGLRenderer, sourceCamera: OrthographicCamera): void {
    if (!this.cacheTarget) {
      this.cacheValid = false;
      return;
    }

    const previousTarget = renderer.getRenderTarget();
    const previousAutoClear = renderer.autoClear;
    const previousClearAlpha = renderer.getClearAlpha();
    renderer.getClearColor(this.tmpClearColor);

    this.cacheCamera.copy(sourceCamera);
    this.cacheCamera.position.copy(sourceCamera.position);
    this.cacheCamera.quaternion.copy(sourceCamera.quaternion);
    this.cacheCamera.up.copy(sourceCamera.up);
    this.cacheCamera.left = sourceCamera.left;
    this.cacheCamera.right = sourceCamera.right;
    this.cacheCamera.top = sourceCamera.top;
    this.cacheCamera.bottom = sourceCamera.bottom;
    this.cacheCamera.zoom = sourceCamera.zoom / PAN_CACHE_OVERSCAN_FACTOR;
    this.cacheCamera.updateProjectionMatrix();
    this.cacheCamera.updateMatrixWorld(true);

    this.isRefreshingCache = true;
    this.setPanCacheState(false, this.identity, this.fallbackTexture);

    try {
      renderer.autoClear = true;
      renderer.setRenderTarget(this.cacheTarget);
      renderer.setClearColor(0x000000, 0);
      renderer.clear(true, true, true);
      renderer.render(this.owner, this.cacheCamera);

      this.cacheViewProj.multiplyMatrices(this.cacheCamera.projectionMatrix, this.cacheCamera.matrixWorldInverse);
      this.cachedSourcePosition.copy(sourceCamera.position);
      this.cachedSourceQuaternion.copy(sourceCamera.quaternion);
      this.cachedRightAxis.set(1, 0, 0).applyQuaternion(this.cachedSourceQuaternion);
      this.cachedUpAxis.set(0, 1, 0).applyQuaternion(this.cachedSourceQuaternion);
      this.cachedSourceLeft = sourceCamera.left;
      this.cachedSourceRight = sourceCamera.right;
      this.cachedSourceTop = sourceCamera.top;
      this.cachedSourceBottom = sourceCamera.bottom;
      this.cachedSourceZoom = sourceCamera.zoom;
      this.cacheValid = true;
      this.invalidateRequested = false;
    } finally {
      this.isRefreshingCache = false;
      renderer.setRenderTarget(previousTarget);
      renderer.setClearColor(this.tmpClearColor, previousClearAlpha);
      renderer.autoClear = previousAutoClear;
    }
  }

  private ensureCacheTarget(renderer: WebGLRenderer, viewport: Vector2): boolean {
    const viewportWidth = Math.max(1, Math.floor(viewport.x));
    const viewportHeight = Math.max(1, Math.floor(viewport.y));

    const maxTextureSize = renderer.capabilities.maxTextureSize;
    if (maxTextureSize < viewportWidth || maxTextureSize < viewportHeight) {
      return false;
    }
    const desiredWidth = clampInt(Math.ceil(viewportWidth * PAN_CACHE_OVERSCAN_FACTOR), viewportWidth, maxTextureSize);
    const desiredHeight = clampInt(Math.ceil(viewportHeight * PAN_CACHE_OVERSCAN_FACTOR), viewportHeight, maxTextureSize);

    if (desiredWidth <= 0 || desiredHeight <= 0) {
      return false;
    }

    if (this.cacheTarget && this.cacheTarget.width === desiredWidth && this.cacheTarget.height === desiredHeight) {
      return true;
    }

    this.cacheTarget?.dispose();
    this.cacheTarget = new WebGLRenderTarget(desiredWidth, desiredHeight, {
      depthBuffer: true,
      stencilBuffer: false
    });
    this.cacheTarget.texture.generateMipmaps = false;
    this.cacheTarget.texture.minFilter = LinearFilter;
    this.cacheTarget.texture.magFilter = LinearFilter;
    this.cacheTarget.texture.wrapS = ClampToEdgeWrapping;
    this.cacheTarget.texture.wrapT = ClampToEdgeWrapping;

    this.cacheValid = false;
    this.invalidateRequested = true;
    return true;
  }

  private disablePanCache(): void {
    if (!this.cacheEnabled) {
      return;
    }
    this.setPanCacheState(false, this.identity, this.fallbackTexture);
    this.cacheEnabled = false;
  }

  private setPanCacheState(enabled: boolean, viewProj: Matrix4, texture: Texture): void {
    for (const set of this.materialSets) {
      set.setPanCacheState(enabled, viewProj, texture);
    }
  }

  private recordCameraState(camera: Camera, viewport: Vector2): void {
    this.lastCameraWorld.copy(camera.matrixWorld);
    this.lastCameraProjection.copy(camera.projectionMatrix);
    this.lastViewport.copy(viewport);
    this.hasLastFrameCameraState = true;
  }
}

function matricesApproxEqual(a: Matrix4, b: Matrix4, epsilon: number): boolean {
  const aa = a.elements;
  const bb = b.elements;
  for (let i = 0; i < 16; i += 1) {
    if (Math.abs(aa[i] - bb[i]) > epsilon) {
      return false;
    }
  }
  return true;
}

function computeTransformHash(root: Object3D): number {
  let hash = 2166136261;
  for (const child of root.children) {
    hash = hashMatrixElements(hash, child.matrixWorld.elements);
    const maybeInstanced = child as { instanceMatrix?: { version?: number } };
    if (maybeInstanced.instanceMatrix) {
      hash = mixHash(hash, maybeInstanced.instanceMatrix.version ?? 0);
    }
  }
  return hash >>> 0;
}

function hashMatrixElements(seed: number, elements: ArrayLike<number>): number {
  let hash = seed;
  for (let i = 0; i < elements.length; i += 1) {
    const scaled = Number.isFinite(elements[i]) ? Math.round(elements[i] * 1e6) : 0;
    hash = mixHash(hash, scaled);
  }
  return hash;
}

function mixHash(hash: number, value: number): number {
  return Math.imul(hash ^ (value | 0), 16777619);
}

function clampInt(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
