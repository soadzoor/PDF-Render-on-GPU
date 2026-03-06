import {
  TEXT_MINIFY_CENTER_WEIGHT,
  TEXT_MINIFY_DERIVATIVE_SCALE,
  TEXT_MINIFY_MIP_BIAS,
  TEXT_MINIFY_NEIGHBOR_WEIGHT,
  TEXT_MINIFY_THRESHOLD
} from "./samplingPolicy";

export function buildTextMinifySamplingGlsl(): string {
  return `
bool shouldUseTextMinifyFallback(vec2 nc) {
  return min(fwidth(nc.x), fwidth(nc.y)) > ${TEXT_MINIFY_THRESHOLD.toFixed(1)};
}

float sampleTextMinifiedAlpha(
  sampler2D textRasterAtlasTex,
  vec2 atlasPxSize,
  vec4 rasterRect,
  vec2 normCoord,
  vec2 nc
) {
  vec2 uvCenter = vec2(
    rasterRect.x + normCoord.x * rasterRect.z,
    rasterRect.y + (1.0 - normCoord.y) * rasterRect.w
  );
  vec2 texel = 1.0 / atlasPxSize;
  vec2 uvMin = rasterRect.xy + texel * 0.5;
  vec2 uvMax = rasterRect.xy + rasterRect.zw - texel * 0.5;
  vec2 dx = dFdx(nc) * ${TEXT_MINIFY_DERIVATIVE_SCALE.toFixed(2)} * texel;
  vec2 dy = dFdy(nc) * ${TEXT_MINIFY_DERIVATIVE_SCALE.toFixed(2)} * texel;
  float mipBias = ${TEXT_MINIFY_MIP_BIAS.toFixed(2)};
  return ${TEXT_MINIFY_CENTER_WEIGHT.toFixed(8)} * texture(textRasterAtlasTex, clamp(uvCenter, uvMin, uvMax), mipBias).r +
    ${TEXT_MINIFY_NEIGHBOR_WEIGHT.toFixed(8)} * (
      texture(textRasterAtlasTex, clamp(uvCenter - dx - dy, uvMin, uvMax), mipBias).r +
      texture(textRasterAtlasTex, clamp(uvCenter - dx + dy, uvMin, uvMax), mipBias).r +
      texture(textRasterAtlasTex, clamp(uvCenter + dx - dy, uvMin, uvMax), mipBias).r +
      texture(textRasterAtlasTex, clamp(uvCenter + dx + dy, uvMin, uvMax), mipBias).r
    );
}
`;
}
