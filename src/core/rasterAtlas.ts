import type { CompiledRasterLayer } from "./types";

export interface RasterAtlasPage {
  width: number;
  height: number;
  rgba: Uint8Array;
}

export interface RasterAtlasTilePlacement {
  layerIndex: number;
  atlasIndex: number;
  sourceX: number;
  sourceY: number;
  width: number;
  height: number;
  uvRect: [number, number, number, number];
}

export interface RasterAtlasBuildResult {
  atlases: RasterAtlasPage[];
  tiles: RasterAtlasTilePlacement[];
}

interface RasterTileInput {
  id: number;
  layerIndex: number;
  sourceX: number;
  sourceY: number;
  width: number;
  height: number;
}

interface PackedTile extends RasterTileInput {
  x: number;
  y: number;
}

const ATLAS_PADDING = 2;

export function buildRasterAtlases(layers: CompiledRasterLayer[], maxTextureSize: number): RasterAtlasBuildResult {
  const atlasMaxSize = Math.max(1, Math.trunc(maxTextureSize));

  if (layers.length === 0) {
    return {
      atlases: [{ width: 1, height: 1, rgba: new Uint8Array([0, 0, 0, 0]) }],
      tiles: []
    };
  }

  const maxTileDimension = atlasMaxSize - ATLAS_PADDING * 2;
  if (maxTileDimension <= 0) {
    throw new Error("Raster atlas padding exceeds available texture size.");
  }

  const splitTiles = splitLayersIntoTiles(layers, maxTileDimension);
  if (splitTiles.length === 0) {
    return {
      atlases: [{ width: 1, height: 1, rgba: new Uint8Array([0, 0, 0, 0]) }],
      tiles: []
    };
  }

  let remaining = splitTiles
    .slice()
    .sort((a, b) => {
      if (a.height !== b.height) {
        return b.height - a.height;
      }
      if (a.width !== b.width) {
        return b.width - a.width;
      }
      return a.id - b.id;
    });

  const atlases: RasterAtlasPage[] = [];
  const tilePlacements: RasterAtlasTilePlacement[] = [];

  while (remaining.length > 0) {
    const packed = packTilesIntoSingleAtlas(remaining, atlasMaxSize);
    if (!packed || packed.placements.length === 0) {
      throw new Error("Failed to pack raster tiles into GPU atlas textures.");
    }

    const atlasIndex = atlases.length;
    const rgba = new Uint8Array(packed.width * packed.height * 4);

    for (const tile of packed.placements) {
      const layer = layers[tile.layerIndex];
      if (!layer) {
        continue;
      }

      blitTileWithPadding(rgba, packed.width, packed.height, layer, tile);
      tilePlacements.push({
        layerIndex: tile.layerIndex,
        atlasIndex,
        sourceX: tile.sourceX,
        sourceY: tile.sourceY,
        width: tile.width,
        height: tile.height,
        uvRect: [tile.x / packed.width, tile.y / packed.height, tile.width / packed.width, tile.height / packed.height]
      });
    }

    atlases.push({
      width: packed.width,
      height: packed.height,
      rgba
    });

    const consumedIds = new Set<number>();
    for (const tile of packed.placements) {
      consumedIds.add(tile.id);
    }
    remaining = remaining.filter((tile) => !consumedIds.has(tile.id));
  }

  return {
    atlases,
    tiles: tilePlacements
  };
}

function splitLayersIntoTiles(layers: CompiledRasterLayer[], maxTileDimension: number): RasterTileInput[] {
  const out: RasterTileInput[] = [];
  let nextId = 0;

  for (let layerIndex = 0; layerIndex < layers.length; layerIndex += 1) {
    const layer = layers[layerIndex];
    const width = Math.max(0, Math.trunc(layer.width));
    const height = Math.max(0, Math.trunc(layer.height));
    if (width <= 0 || height <= 0) {
      continue;
    }
    if (!(layer.data instanceof Uint8Array) || layer.data.length < width * height * 4) {
      continue;
    }

    for (let sourceY = 0; sourceY < height; sourceY += maxTileDimension) {
      const tileHeight = Math.min(maxTileDimension, height - sourceY);
      for (let sourceX = 0; sourceX < width; sourceX += maxTileDimension) {
        const tileWidth = Math.min(maxTileDimension, width - sourceX);
        out.push({
          id: nextId,
          layerIndex,
          sourceX,
          sourceY,
          width: tileWidth,
          height: tileHeight
        });
        nextId += 1;
      }
    }
  }

  return out;
}

function packTilesIntoSingleAtlas(
  remaining: RasterTileInput[],
  atlasMaxSize: number
): { width: number; height: number; placements: PackedTile[] } | null {
  const paddedArea = remaining.reduce(
    (sum, item) => sum + (item.width + ATLAS_PADDING * 2) * (item.height + ATLAS_PADDING * 2),
    0
  );
  const widest = remaining.reduce((max, item) => Math.max(max, item.width + ATLAS_PADDING * 2), 1);

  let atlasWidth = clamp(roundUpToPowerOfTwo(Math.ceil(Math.sqrt(paddedArea))), widest, atlasMaxSize);

  while (atlasWidth <= atlasMaxSize) {
    const layout = layoutTilesForWidth(remaining, atlasWidth, atlasMaxSize);
    if (layout.placements.length > 0) {
      const atlasHeight = clamp(roundUpToPowerOfTwo(Math.max(1, layout.usedHeight)), 1, atlasMaxSize);
      return {
        width: atlasWidth,
        height: atlasHeight,
        placements: layout.placements
      };
    }

    if (atlasWidth === atlasMaxSize) {
      break;
    }
    atlasWidth = Math.min(atlasMaxSize, atlasWidth * 2);
  }

  return null;
}

function layoutTilesForWidth(
  tiles: RasterTileInput[],
  atlasWidth: number,
  atlasMaxSize: number
): { placements: PackedTile[]; usedHeight: number } {
  const placements: PackedTile[] = [];
  let x = 0;
  let y = 0;
  let rowHeight = 0;
  let usedHeight = 0;

  for (const tile of tiles) {
    const paddedWidth = tile.width + ATLAS_PADDING * 2;
    const paddedHeight = tile.height + ATLAS_PADDING * 2;
    if (paddedWidth > atlasWidth || paddedHeight > atlasMaxSize) {
      continue;
    }

    if (x + paddedWidth > atlasWidth) {
      x = 0;
      y += rowHeight;
      rowHeight = 0;
    }

    if (y + paddedHeight > atlasMaxSize) {
      continue;
    }

    placements.push({
      ...tile,
      x: x + ATLAS_PADDING,
      y: y + ATLAS_PADDING
    });

    x += paddedWidth;
    rowHeight = Math.max(rowHeight, paddedHeight);
    usedHeight = Math.max(usedHeight, y + rowHeight);
  }

  return { placements, usedHeight };
}

function blitTileWithPadding(
  atlas: Uint8Array,
  atlasWidth: number,
  atlasHeight: number,
  layer: CompiledRasterLayer,
  tile: PackedTile
): void {
  const minSourceX = tile.sourceX;
  const minSourceY = tile.sourceY;
  const maxSourceX = tile.sourceX + tile.width - 1;
  const maxSourceY = tile.sourceY + tile.height - 1;

  const minDstX = tile.x - ATLAS_PADDING;
  const minDstY = tile.y - ATLAS_PADDING;
  const maxDstX = tile.x + tile.width + ATLAS_PADDING - 1;
  const maxDstY = tile.y + tile.height + ATLAS_PADDING - 1;

  for (let dstY = minDstY; dstY <= maxDstY; dstY += 1) {
    if (dstY < 0 || dstY >= atlasHeight) {
      continue;
    }
    const sourceY = clamp(dstY - tile.y + tile.sourceY, minSourceY, maxSourceY);
    for (let dstX = minDstX; dstX <= maxDstX; dstX += 1) {
      if (dstX < 0 || dstX >= atlasWidth) {
        continue;
      }
      const sourceX = clamp(dstX - tile.x + tile.sourceX, minSourceX, maxSourceX);
      const srcOffset = (sourceY * layer.width + sourceX) * 4;
      const dstOffset = (dstY * atlasWidth + dstX) * 4;
      atlas[dstOffset] = layer.data[srcOffset];
      atlas[dstOffset + 1] = layer.data[srcOffset + 1];
      atlas[dstOffset + 2] = layer.data[srcOffset + 2];
      atlas[dstOffset + 3] = layer.data[srcOffset + 3];
    }
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
