import type { CompiledRasterLayer } from "./types";

export interface RasterAtlasBuildResult {
  width: number;
  height: number;
  rgba: Uint8Array;
  uvRects: Float32Array;
}

interface PackedLayer {
  index: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

const ATLAS_PADDING = 1;
const ATLAS_MAX_SIZE = 8192;

export function buildRasterAtlas(layers: CompiledRasterLayer[]): RasterAtlasBuildResult {
  if (layers.length === 0) {
    return {
      width: 1,
      height: 1,
      rgba: new Uint8Array([0, 0, 0, 0]),
      uvRects: new Float32Array(0)
    };
  }

  const packed = packLayers(layers);
  if (!packed) {
    // Fallback: keep only the first layer when atlas limits are exceeded.
    const first = layers[0];
    const rgba = first.data.slice(0, first.width * first.height * 4);
    return {
      width: first.width,
      height: first.height,
      rgba,
      uvRects: new Float32Array([0, 0, 1, 1])
    };
  }

  const { width, height, placements } = packed;
  const rgba = new Uint8Array(width * height * 4);
  const uvRects = new Float32Array(layers.length * 4);

  for (const placement of placements) {
    const layer = layers[placement.index];
    blitLayer(rgba, width, placement.x, placement.y, layer.width, layer.height, layer.data);

    const offset = placement.index * 4;
    uvRects[offset] = placement.x / width;
    uvRects[offset + 1] = placement.y / height;
    uvRects[offset + 2] = layer.width / width;
    uvRects[offset + 3] = layer.height / height;
  }

  return { width, height, rgba, uvRects };
}

function packLayers(
  layers: CompiledRasterLayer[]
): { width: number; height: number; placements: PackedLayer[] } | null {
  const indexed = layers
    .map((layer, index) => ({ index, width: layer.width, height: layer.height }))
    .sort((a, b) => {
      if (a.height !== b.height) {
        return b.height - a.height;
      }
      return b.width - a.width;
    });

  const totalArea = indexed.reduce((sum, item) => sum + (item.width + ATLAS_PADDING * 2) * (item.height + ATLAS_PADDING * 2), 0);
  const widest = indexed.reduce((max, item) => Math.max(max, item.width + ATLAS_PADDING * 2), 1);

  let atlasWidth = clamp(roundUpToPowerOfTwo(Math.ceil(Math.sqrt(totalArea))), widest, ATLAS_MAX_SIZE);

  while (atlasWidth <= ATLAS_MAX_SIZE) {
    const placements: PackedLayer[] = [];
    let x = 0;
    let y = 0;
    let rowHeight = 0;
    let failed = false;

    for (const item of indexed) {
      const paddedWidth = item.width + ATLAS_PADDING * 2;
      const paddedHeight = item.height + ATLAS_PADDING * 2;

      if (paddedWidth > atlasWidth) {
        failed = true;
        break;
      }

      if (x + paddedWidth > atlasWidth) {
        x = 0;
        y += rowHeight;
        rowHeight = 0;
      }

      if (y + paddedHeight > ATLAS_MAX_SIZE) {
        failed = true;
        break;
      }

      placements.push({
        index: item.index,
        width: item.width,
        height: item.height,
        x: x + ATLAS_PADDING,
        y: y + ATLAS_PADDING
      });

      x += paddedWidth;
      rowHeight = Math.max(rowHeight, paddedHeight);
    }

    if (!failed) {
      const usedHeight = Math.max(1, y + rowHeight);
      const atlasHeight = clamp(roundUpToPowerOfTwo(usedHeight), 1, ATLAS_MAX_SIZE);
      if (atlasHeight <= ATLAS_MAX_SIZE) {
        return { width: atlasWidth, height: atlasHeight, placements };
      }
    }

    if (atlasWidth === ATLAS_MAX_SIZE) {
      break;
    }

    atlasWidth = Math.min(ATLAS_MAX_SIZE, atlasWidth * 2);
  }

  return null;
}

function blitLayer(
  atlas: Uint8Array,
  atlasWidth: number,
  dstX: number,
  dstY: number,
  width: number,
  height: number,
  src: Uint8Array
): void {
  const stride = width * 4;
  for (let row = 0; row < height; row += 1) {
    const srcOffset = row * stride;
    const dstOffset = ((dstY + row) * atlasWidth + dstX) * 4;
    atlas.set(src.subarray(srcOffset, srcOffset + stride), dstOffset);
  }
}

function roundUpToPowerOfTwo(value: number): number {
  if (value <= 1) {
    return 1;
  }
  let out = 1;
  while (out < value) {
    out <<= 1;
  }
  return out;
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
