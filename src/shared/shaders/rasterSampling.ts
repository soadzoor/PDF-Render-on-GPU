import {
  RASTER_MINIFY_CENTER_WEIGHT,
  RASTER_MINIFY_DERIVATIVE_SCALE,
  RASTER_MINIFY_MIP_BIAS,
  RASTER_MINIFY_NEIGHBOR_WEIGHT,
  RASTER_MINIFY_THRESHOLD
} from "./samplingPolicy";

export function buildRasterStableSamplingGlsl(): string {
  return `
vec4 sampleRasterStable(
  sampler2D rasterTex,
  vec2 uv,
  vec4 uvRect,
  vec2 rasterTextureSize
) {
  vec2 atlasPxSize = max(rasterTextureSize, vec2(1.0));
  vec2 texel = 1.0 / atlasPxSize;
  vec2 uvMin = uvRect.xy + texel * 0.5;
  vec2 uvMax = uvRect.xy + uvRect.zw - texel * 0.5;
  vec2 uvCenter = clamp(uv, uvMin, uvMax);
  vec2 nc = uvCenter * atlasPxSize;

  if (min(fwidth(nc.x), fwidth(nc.y)) > ${RASTER_MINIFY_THRESHOLD.toFixed(1)}) {
    vec2 dx = dFdx(nc) * ${RASTER_MINIFY_DERIVATIVE_SCALE.toFixed(2)} * texel;
    vec2 dy = dFdy(nc) * ${RASTER_MINIFY_DERIVATIVE_SCALE.toFixed(2)} * texel;
    float mipBias = ${RASTER_MINIFY_MIP_BIAS.toFixed(1)};
    return ${RASTER_MINIFY_CENTER_WEIGHT.toFixed(8)} * texture(rasterTex, uvCenter, mipBias) +
      ${RASTER_MINIFY_NEIGHBOR_WEIGHT.toFixed(8)} * (
        texture(rasterTex, clamp(uvCenter - dx - dy, uvMin, uvMax), mipBias) +
        texture(rasterTex, clamp(uvCenter - dx + dy, uvMin, uvMax), mipBias) +
        texture(rasterTex, clamp(uvCenter + dx - dy, uvMin, uvMax), mipBias) +
        texture(rasterTex, clamp(uvCenter + dx + dy, uvMin, uvMax), mipBias)
      );
  }

  return texture(rasterTex, uvCenter);
}
`;
}
