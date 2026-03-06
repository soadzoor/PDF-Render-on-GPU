import {
  BufferAttribute,
  ClampToEdgeWrapping,
  DataTexture,
  FloatType,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  LinearFilter,
  LinearMipmapLinearFilter,
  NearestFilter,
  RGBAFormat,
  Sphere,
  Vector3
} from "three";

import type { VectorScene } from "../../pdfVectorExtractor";
import { buildTextRasterAtlas } from "../../textRasterAtlas";
import { buildRasterAtlases, type RasterAtlasTilePlacement } from "../../core/rasterAtlas";
import type { CompiledPdfDocument } from "../../core/types";

export interface FloatTextureRef {
  texture: DataTexture;
  width: number;
  height: number;
}

export interface SharedGpuData {
  document: CompiledPdfDocument;
  geometry: InstancedBufferGeometry;
  maxRasterPrimitiveCount: number;
  maxFillPrimitiveCount: number;
  maxSegmentPrimitiveCount: number;
  maxTextPrimitiveCount: number;

  pageMetaTextureA: FloatTextureRef;
  pageMetaTextureB: FloatTextureRef;
  pageRectTexture: FloatTextureRef;

  segmentTextureA: FloatTextureRef;
  segmentTextureB: FloatTextureRef;
  segmentTextureC: FloatTextureRef;
  segmentTextureD: FloatTextureRef;

  fillPathTextureA: FloatTextureRef;
  fillPathTextureB: FloatTextureRef;
  fillPathTextureC: FloatTextureRef;
  fillSegmentTextureA: FloatTextureRef;
  fillSegmentTextureB: FloatTextureRef;

  textInstanceTextureA: FloatTextureRef;
  textInstanceTextureB: FloatTextureRef;
  textInstanceTextureC: FloatTextureRef;
  textGlyphMetaTextureA: FloatTextureRef;
  textGlyphMetaTextureB: FloatTextureRef;
  textGlyphSegmentTextureA: FloatTextureRef;
  textGlyphSegmentTextureB: FloatTextureRef;
  textGlyphRasterMetaTexture: FloatTextureRef;

  rasterLayerMetaTextureA: FloatTextureRef;
  rasterLayerMetaTextureB: FloatTextureRef;
  rasterLayerMetaTextureC: FloatTextureRef;

  rasterAtlasTextures: DataTexture[];
  rasterAtlasSizes: Array<{ width: number; height: number }>;
  textAtlasTexture: DataTexture;
  textAtlasSize: { width: number; height: number };

  createInstancedGeometry(pageIndices: readonly number[]): InstancedBufferGeometry;
  dispose(): void;
}

const DEFAULT_MAX_TEXTURE_SIZE = 4096;

export function createSharedGpuData(document: CompiledPdfDocument): SharedGpuData {
  const maxTextureSize = resolveMaxTextureSizeFallback();

  const rasterAtlasBuild = buildRasterAtlases(document.rasterLayers, maxTextureSize);
  const rasterAtlasTextures = rasterAtlasBuild.atlases.map((atlas) => createRgbaTexture(atlas.rgba, atlas.width, atlas.height));
  const rasterPrimitiveBuild = buildRasterPrimitiveTable(document, rasterAtlasBuild.tiles);

  const pageMetaA = new Float32Array(document.pageCount * 4);
  const pageMetaB = new Float32Array(document.pageCount * 4);
  const pageRects = new Float32Array(document.pageCount * 4);

  for (let i = 0; i < document.pages.length; i += 1) {
    const page = document.pages[i];
    const offset = i * 4;

    pageMetaA[offset] = page.segmentStart;
    pageMetaA[offset + 1] = page.segmentCount;
    pageMetaA[offset + 2] = page.fillPathStart;
    pageMetaA[offset + 3] = page.fillPathCount;

    pageMetaB[offset] = page.textInstanceStart;
    pageMetaB[offset + 1] = page.textInstanceCount;
    pageMetaB[offset + 2] = rasterPrimitiveBuild.pageRasterStarts[i];
    pageMetaB[offset + 3] = rasterPrimitiveBuild.pageRasterCounts[i];

    pageRects[offset] = page.pageRect[0];
    pageRects[offset + 1] = page.pageRect[1];
    pageRects[offset + 2] = page.pageRect[2];
    pageRects[offset + 3] = page.pageRect[3];
  }

  const pageMetaTextureA = createFloatTexture(pageMetaA, maxTextureSize);
  const pageMetaTextureB = createFloatTexture(pageMetaB, maxTextureSize);
  const pageRectTexture = createFloatTexture(pageRects, maxTextureSize);

  const segmentTextureA = createFloatTexture(document.endpoints, maxTextureSize);
  const segmentTextureB = createFloatTexture(document.primitiveMeta, maxTextureSize);
  const segmentTextureC = createFloatTexture(document.styles, maxTextureSize);
  const segmentTextureD = createFloatTexture(document.primitiveBounds, maxTextureSize);

  const fillPathTextureA = createFloatTexture(document.fillPathMetaA, maxTextureSize);
  const fillPathTextureB = createFloatTexture(document.fillPathMetaB, maxTextureSize);
  const fillPathTextureC = createFloatTexture(document.fillPathMetaC, maxTextureSize);
  const fillSegmentTextureA = createFloatTexture(document.fillSegmentsA, maxTextureSize);
  const fillSegmentTextureB = createFloatTexture(document.fillSegmentsB, maxTextureSize);

  const textInstanceTextureA = createFloatTexture(document.textInstanceA, maxTextureSize);
  const textInstanceTextureB = createFloatTexture(document.textInstanceB, maxTextureSize);
  const textInstanceTextureC = createFloatTexture(document.textInstanceC, maxTextureSize);
  const textGlyphMetaTextureA = createFloatTexture(document.textGlyphMetaA, maxTextureSize);
  const textGlyphMetaTextureB = createFloatTexture(document.textGlyphMetaB, maxTextureSize);
  const textGlyphSegmentTextureA = createFloatTexture(document.textGlyphSegmentsA, maxTextureSize);
  const textGlyphSegmentTextureB = createFloatTexture(document.textGlyphSegmentsB, maxTextureSize);

  const rasterLayerMetaA = new Float32Array(rasterPrimitiveBuild.primitives.length * 4);
  const rasterLayerMetaB = new Float32Array(rasterPrimitiveBuild.primitives.length * 4);
  const rasterLayerMetaC = new Float32Array(rasterPrimitiveBuild.primitives.length * 4);

  for (let i = 0; i < rasterPrimitiveBuild.primitives.length; i += 1) {
    const primitive = rasterPrimitiveBuild.primitives[i];
    const matrix = primitive.matrix;
    const uv = primitive.uvRect;
    const offset = i * 4;

    rasterLayerMetaA[offset] = matrix[0] ?? 1;
    rasterLayerMetaA[offset + 1] = matrix[1] ?? 0;
    rasterLayerMetaA[offset + 2] = matrix[2] ?? 0;
    rasterLayerMetaA[offset + 3] = matrix[3] ?? 1;

    rasterLayerMetaB[offset] = matrix[4] ?? 0;
    rasterLayerMetaB[offset + 1] = matrix[5] ?? 0;
    rasterLayerMetaB[offset + 2] = uv[0];
    rasterLayerMetaB[offset + 3] = uv[1];

    rasterLayerMetaC[offset] = uv[2];
    rasterLayerMetaC[offset + 1] = uv[3];
    rasterLayerMetaC[offset + 2] = primitive.atlasIndex;
    rasterLayerMetaC[offset + 3] = 0;
  }

  const rasterLayerMetaTextureA = createFloatTexture(rasterLayerMetaA, maxTextureSize);
  const rasterLayerMetaTextureB = createFloatTexture(rasterLayerMetaB, maxTextureSize);
  const rasterLayerMetaTextureC = createFloatTexture(rasterLayerMetaC, maxTextureSize);

  const textAtlasBuild = buildTextAtlasForDocument(document, maxTextureSize);
  const textAtlasTexture = createTextAtlasTexture(textAtlasBuild.rgba, textAtlasBuild.width, textAtlasBuild.height);
  const textGlyphRasterMetaTexture = createFloatTexture(textAtlasBuild.glyphUvRects, maxTextureSize);

  const maxRasterPrimitiveCount = Math.max(1, 1 + rasterPrimitiveBuild.maxRasterPrimitiveCountPerPage);
  const maxFillPrimitiveCount = Math.max(1, document.maxFillPathCountPerPage);
  const maxSegmentPrimitiveCount = Math.max(1, document.maxSegmentCountPerPage);
  const maxTextPrimitiveCount = Math.max(1, document.maxTextInstanceCountPerPage);

  const geometry = createSharedPageGeometry(
    maxRasterPrimitiveCount,
    maxFillPrimitiveCount,
    maxSegmentPrimitiveCount,
    maxTextPrimitiveCount,
    rasterAtlasTextures.length
  );

  const disposableTextures: DataTexture[] = [
    pageMetaTextureA.texture,
    pageMetaTextureB.texture,
    pageRectTexture.texture,
    segmentTextureA.texture,
    segmentTextureB.texture,
    segmentTextureC.texture,
    segmentTextureD.texture,
    fillPathTextureA.texture,
    fillPathTextureB.texture,
    fillPathTextureC.texture,
    fillSegmentTextureA.texture,
    fillSegmentTextureB.texture,
    textInstanceTextureA.texture,
    textInstanceTextureB.texture,
    textInstanceTextureC.texture,
    textGlyphMetaTextureA.texture,
    textGlyphMetaTextureB.texture,
    textGlyphSegmentTextureA.texture,
    textGlyphSegmentTextureB.texture,
    textGlyphRasterMetaTexture.texture,
    rasterLayerMetaTextureA.texture,
    rasterLayerMetaTextureB.texture,
    rasterLayerMetaTextureC.texture,
    ...rasterAtlasTextures,
    textAtlasTexture
  ];

  return {
    document,
    geometry,
    maxRasterPrimitiveCount,
    maxFillPrimitiveCount,
    maxSegmentPrimitiveCount,
    maxTextPrimitiveCount,
    pageMetaTextureA,
    pageMetaTextureB,
    pageRectTexture,
    segmentTextureA,
    segmentTextureB,
    segmentTextureC,
    segmentTextureD,
    fillPathTextureA,
    fillPathTextureB,
    fillPathTextureC,
    fillSegmentTextureA,
    fillSegmentTextureB,
    textInstanceTextureA,
    textInstanceTextureB,
    textInstanceTextureC,
    textGlyphMetaTextureA,
    textGlyphMetaTextureB,
    textGlyphSegmentTextureA,
    textGlyphSegmentTextureB,
    textGlyphRasterMetaTexture,
    rasterLayerMetaTextureA,
    rasterLayerMetaTextureB,
    rasterLayerMetaTextureC,
    rasterAtlasTextures,
    rasterAtlasSizes: rasterAtlasBuild.atlases.map((atlas) => ({ width: atlas.width, height: atlas.height })),
    textAtlasTexture,
    textAtlasSize: { width: textAtlasBuild.width, height: textAtlasBuild.height },
    createInstancedGeometry: (pageIndices: readonly number[]) => createInstancedPageGeometry(geometry, pageIndices),
    dispose: () => {
      geometry.dispose();
      for (const texture of disposableTextures) {
        texture.dispose();
      }
    }
  };
}

interface RasterPrimitiveInfo {
  atlasIndex: number;
  matrix: [number, number, number, number, number, number];
  uvRect: [number, number, number, number];
}

interface RasterPrimitiveBuildResult {
  primitives: RasterPrimitiveInfo[];
  pageRasterStarts: Uint32Array;
  pageRasterCounts: Uint32Array;
  maxRasterPrimitiveCountPerPage: number;
}

function buildRasterPrimitiveTable(
  document: CompiledPdfDocument,
  tilePlacements: RasterAtlasTilePlacement[]
): RasterPrimitiveBuildResult {
  const pageRasterStarts = new Uint32Array(document.pageCount);
  const pageRasterCounts = new Uint32Array(document.pageCount);
  const primitives: RasterPrimitiveInfo[] = [];
  const layerTileMap = new Map<number, RasterAtlasTilePlacement[]>();

  for (const tile of tilePlacements) {
    const entries = layerTileMap.get(tile.layerIndex);
    if (entries) {
      entries.push(tile);
      continue;
    }
    layerTileMap.set(tile.layerIndex, [tile]);
  }

  for (const entries of layerTileMap.values()) {
    entries.sort((a, b) => {
      if (a.sourceY !== b.sourceY) {
        return a.sourceY - b.sourceY;
      }
      return a.sourceX - b.sourceX;
    });
  }

  let maxRasterPrimitiveCountPerPage = 0;

  for (let pageIndex = 0; pageIndex < document.pages.length; pageIndex += 1) {
    const page = document.pages[pageIndex];
    const primitiveStart = primitives.length;
    const layerEnd = page.rasterLayerStart + page.rasterLayerCount;

    for (let layerIndex = page.rasterLayerStart; layerIndex < layerEnd; layerIndex += 1) {
      const layer = document.rasterLayers[layerIndex];
      if (!layer) {
        continue;
      }

      const layerWidth = Math.max(1, Math.trunc(layer.width));
      const layerHeight = Math.max(1, Math.trunc(layer.height));
      if (layerWidth <= 0 || layerHeight <= 0) {
        continue;
      }

      const tiles = layerTileMap.get(layerIndex);
      if (!tiles || tiles.length === 0) {
        continue;
      }

      for (const tile of tiles) {
        primitives.push(buildRasterPrimitive(layer.matrix, layerWidth, layerHeight, tile));
      }
    }

    const primitiveCount = primitives.length - primitiveStart;
    pageRasterStarts[pageIndex] = primitiveStart;
    pageRasterCounts[pageIndex] = primitiveCount;
    maxRasterPrimitiveCountPerPage = Math.max(maxRasterPrimitiveCountPerPage, primitiveCount);
  }

  return {
    primitives,
    pageRasterStarts,
    pageRasterCounts,
    maxRasterPrimitiveCountPerPage
  };
}

function buildRasterPrimitive(
  matrixSource: Float32Array,
  layerWidth: number,
  layerHeight: number,
  tile: RasterAtlasTilePlacement
): RasterPrimitiveInfo {
  const matrix = [
    Number(matrixSource[0] ?? 1),
    Number(matrixSource[1] ?? 0),
    Number(matrixSource[2] ?? 0),
    Number(matrixSource[3] ?? 1),
    Number(matrixSource[4] ?? 0),
    Number(matrixSource[5] ?? 0)
  ] as [number, number, number, number, number, number];

  const tileScaleX = tile.width / layerWidth;
  const tileScaleY = tile.height / layerHeight;
  const tileOffsetX = tile.sourceX / layerWidth;
  const tileOffsetY = tile.sourceY / layerHeight;

  const a = matrix[0] * tileScaleX;
  const b = matrix[1] * tileScaleX;
  const c = matrix[2] * tileScaleY;
  const d = matrix[3] * tileScaleY;
  const e = matrix[0] * tileOffsetX + matrix[2] * tileOffsetY + matrix[4];
  const f = matrix[1] * tileOffsetX + matrix[3] * tileOffsetY + matrix[5];

  return {
    atlasIndex: tile.atlasIndex,
    matrix: [a, b, c, d, e, f],
    uvRect: tile.uvRect
  };
}

function createFloatTexture(data: Float32Array, maxTextureSize: number): FloatTextureRef {
  const quadCount = Math.floor(data.length / 4);
  const { width, height } = chooseTextureDimensions(quadCount, maxTextureSize);
  const packed = new Float32Array(width * height * 4);
  packed.set(data.subarray(0, quadCount * 4));

  const texture = new DataTexture(packed, width, height, RGBAFormat, FloatType);
  texture.needsUpdate = true;
  texture.generateMipmaps = false;
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;

  return { texture, width, height };
}

function createRgbaTexture(data: Uint8Array, width: number, height: number): DataTexture {
  const texture = new DataTexture(data, width, height, RGBAFormat);
  texture.needsUpdate = true;
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.anisotropy = 4;
  return texture;
}

function createTextAtlasTexture(data: Uint8Array, width: number, height: number): DataTexture {
  const texture = new DataTexture(data, width, height, RGBAFormat);
  texture.needsUpdate = true;
  texture.generateMipmaps = true;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  return texture;
}

function chooseTextureDimensions(itemCount: number, maxTextureSize: number): { width: number; height: number } {
  const safeCount = Math.max(1, itemCount);
  const preferredWidth = Math.ceil(Math.sqrt(safeCount));
  const width = clamp(preferredWidth, 1, maxTextureSize);
  const height = Math.max(1, Math.ceil(safeCount / width));

  if (height > maxTextureSize) {
    throw new Error("Data texture exceeds GPU limits for this browser/GPU.");
  }

  return { width, height };
}

function createSharedPageGeometry(
  maxRasterPrimitiveCount: number,
  maxFillPrimitiveCount: number,
  maxSegmentPrimitiveCount: number,
  maxTextPrimitiveCount: number,
  rasterPassCountInput: number
): InstancedBufferGeometry {
  const rasterPassCount = Math.max(1, Math.trunc(rasterPassCountInput));
  const totalPrimitiveCount =
    maxRasterPrimitiveCount + maxFillPrimitiveCount + maxSegmentPrimitiveCount + maxTextPrimitiveCount;
  const totalVertexCount = totalPrimitiveCount * 4;
  const totalIndexCount = totalPrimitiveCount * 6;

  const positions = new Float32Array(totalVertexCount * 3);
  const primitiveIndex = new Float32Array(totalVertexCount);
  const quadIndices = new Uint32Array(totalIndexCount);

  let vertexOffset = 0;
  let indexOffset = 0;
  let groupStart = 0;

  const geometry = new InstancedBufferGeometry();

  const rasterResult = appendPrimitiveDomain(positions, primitiveIndex, quadIndices, vertexOffset, indexOffset, maxRasterPrimitiveCount);
  vertexOffset = rasterResult.vertexOffset;
  indexOffset = rasterResult.indexOffset;
  for (let passIndex = 0; passIndex < rasterPassCount; passIndex += 1) {
    geometry.addGroup(groupStart, maxRasterPrimitiveCount * 6, passIndex);
  }
  groupStart += maxRasterPrimitiveCount * 6;

  const fillResult = appendPrimitiveDomain(positions, primitiveIndex, quadIndices, vertexOffset, indexOffset, maxFillPrimitiveCount);
  vertexOffset = fillResult.vertexOffset;
  indexOffset = fillResult.indexOffset;
  geometry.addGroup(groupStart, maxFillPrimitiveCount * 6, rasterPassCount);
  groupStart += maxFillPrimitiveCount * 6;

  const strokeResult = appendPrimitiveDomain(
    positions,
    primitiveIndex,
    quadIndices,
    vertexOffset,
    indexOffset,
    maxSegmentPrimitiveCount
  );
  vertexOffset = strokeResult.vertexOffset;
  indexOffset = strokeResult.indexOffset;
  geometry.addGroup(groupStart, maxSegmentPrimitiveCount * 6, rasterPassCount + 1);
  groupStart += maxSegmentPrimitiveCount * 6;

  appendPrimitiveDomain(positions, primitiveIndex, quadIndices, vertexOffset, indexOffset, maxTextPrimitiveCount);
  geometry.addGroup(groupStart, maxTextPrimitiveCount * 6, rasterPassCount + 2);

  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  geometry.setAttribute("aPrimitiveIndex", new BufferAttribute(primitiveIndex, 1));
  geometry.setIndex(new BufferAttribute(quadIndices, 1));
  geometry.instanceCount = 1;
  geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 1e9);

  return geometry;
}

function appendPrimitiveDomain(
  positions: Float32Array,
  primitiveIndex: Float32Array,
  quadIndices: Uint32Array,
  vertexOffset: number,
  indexOffset: number,
  primitiveCount: number
): { vertexOffset: number; indexOffset: number } {
  for (let primitive = 0; primitive < primitiveCount; primitive += 1) {
    const next = writePrimitiveQuad(positions, primitiveIndex, quadIndices, vertexOffset, indexOffset, primitive);
    vertexOffset = next.vertexOffset;
    indexOffset = next.indexOffset;
  }
  return { vertexOffset, indexOffset };
}

function writePrimitiveQuad(
  positions: Float32Array,
  primitiveIndex: Float32Array,
  quadIndices: Uint32Array,
  vertexOffset: number,
  indexOffset: number,
  primitive: number
): { vertexOffset: number; indexOffset: number } {
  const corners = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]
  ] as const;

  for (let i = 0; i < 4; i += 1) {
    const vertex = vertexOffset + i;
    const positionOffset = vertex * 3;
    positions[positionOffset] = corners[i][0];
    positions[positionOffset + 1] = corners[i][1];
    positions[positionOffset + 2] = 0;
    primitiveIndex[vertex] = primitive;
  }

  quadIndices[indexOffset] = vertexOffset;
  quadIndices[indexOffset + 1] = vertexOffset + 1;
  quadIndices[indexOffset + 2] = vertexOffset + 2;
  quadIndices[indexOffset + 3] = vertexOffset + 2;
  quadIndices[indexOffset + 4] = vertexOffset + 1;
  quadIndices[indexOffset + 5] = vertexOffset + 3;

  return { vertexOffset: vertexOffset + 4, indexOffset: indexOffset + 6 };
}

function createInstancedPageGeometry(
  baseGeometry: InstancedBufferGeometry,
  pageIndices: readonly number[]
): InstancedBufferGeometry {
  const geometry = baseGeometry.clone();
  const pageIndexArray = new Float32Array(pageIndices.length);
  for (let i = 0; i < pageIndices.length; i += 1) {
    pageIndexArray[i] = pageIndices[i];
  }
  geometry.setAttribute("aPageIndex", new InstancedBufferAttribute(pageIndexArray, 1));
  geometry.instanceCount = pageIndices.length;
  geometry.boundingSphere = new Sphere(new Vector3(0, 0, 0), 1e9);
  return geometry;
}

function buildTextAtlasForDocument(document: CompiledPdfDocument, maxTextureSize: number): {
  width: number;
  height: number;
  rgba: Uint8Array;
  glyphUvRects: Float32Array;
} {
  if (typeof document === "undefined" || document.textGlyphCount <= 0) {
    return {
      width: 1,
      height: 1,
      rgba: new Uint8Array([0, 0, 0, 0]),
      glyphUvRects: new Float32Array(document.textGlyphCount * 4)
    };
  }

  const fakeScene = {
    textGlyphCount: document.textGlyphCount,
    textGlyphMetaA: document.textGlyphMetaA,
    textGlyphMetaB: document.textGlyphMetaB,
    textGlyphSegmentsA: document.textGlyphSegmentsA,
    textGlyphSegmentsB: document.textGlyphSegmentsB
  } as unknown as VectorScene;

  const atlas = buildTextRasterAtlas(fakeScene, maxTextureSize);
  if (!atlas) {
    return {
      width: 1,
      height: 1,
      rgba: new Uint8Array([0, 0, 0, 0]),
      glyphUvRects: new Float32Array(document.textGlyphCount * 4)
    };
  }

  return {
    width: atlas.width,
    height: atlas.height,
    rgba: atlas.rgba,
    glyphUvRects: atlas.glyphUvRects
  };
}

function resolveMaxTextureSizeFallback(): number {
  if (typeof document === "undefined") {
    return DEFAULT_MAX_TEXTURE_SIZE;
  }

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) {
      return DEFAULT_MAX_TEXTURE_SIZE;
    }
    const raw = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 1) {
      return DEFAULT_MAX_TEXTURE_SIZE;
    }
    return Math.max(1024, Math.min(Math.floor(value), 16384));
  } catch {
    return DEFAULT_MAX_TEXTURE_SIZE;
  }
}

function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
