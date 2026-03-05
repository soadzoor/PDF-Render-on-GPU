import {
  Color,
  GLSL3,
  RawShaderMaterial,
  type Side
} from "three";

import type { SharedGpuData } from "../gpu/sharedGpuData";
import type { ResolvedLoadOptions, ResolvedMaterialOptions } from "../types";

export interface PdfMaterialSet {
  raster: RawShaderMaterial;
  fill: RawShaderMaterial;
  stroke: RawShaderMaterial;
  text: RawShaderMaterial;
  all: RawShaderMaterial[];
  setMaterialOptions(options: Partial<ResolvedMaterialOptions>): void;
  dispose(): void;
}

export function createPdfMaterialSet(
  shared: SharedGpuData,
  options: ResolvedLoadOptions,
  mode: "mesh" | "instanced"
): PdfMaterialSet {
  const isInstanced = mode === "instanced";
  const instancedDefinePatch = isInstanced ? { defines: { PDF_INSTANCED: "1" } } : {};

  const backgroundColor = new Color(options.material.pageBackgroundColor);
  const overrideColor = options.material.vectorColorOverride
    ? new Color(options.material.vectorColorOverride)
    : new Color(0, 0, 0);
  const overrideOpacity = options.material.vectorColorOverride ? options.material.vectorOpacityOverride : 0;

  const commonUniforms = {
    uWorldUnitsPerPoint: { value: options.page.worldUnitsPerPoint },
    uPageIndex: { value: 0 },
    uPageMetaTexA: { value: shared.pageMetaTextureA.texture },
    uPageMetaTexB: { value: shared.pageMetaTextureB.texture },
    uPageRectTex: { value: shared.pageRectTexture.texture },
    uPageMetaTexSize: { value: [shared.pageMetaTextureA.width, shared.pageMetaTextureA.height] },
    uPageRectTexSize: { value: [shared.pageRectTexture.width, shared.pageRectTexture.height] },
    uPageBackgroundColor: {
      value: [backgroundColor.r, backgroundColor.g, backgroundColor.b, options.material.pageBackgroundOpacity]
    },
    uVectorOverride: { value: [overrideColor.r, overrideColor.g, overrideColor.b, overrideOpacity] },
    uStrokeCurveEnabled: { value: options.material.strokeCurveEnabled ? 1 : 0 },
    uTextCurveEnabled: { value: options.material.strokeCurveEnabled ? 1 : 0 },
    uTextVectorOnly: { value: options.material.textVectorOnly ? 1 : 0 },
    uStrokeAAScreenPx: { value: 1.0 },
    uFillAAScreenPx: { value: 1.0 },
    uTextAAScreenPx: { value: 1.25 }
  };

  const raster = new RawShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: options.page.side,
    depthWrite: options.page.depthWrite,
    depthTest: true,
    vertexShader: buildRasterVertexShader(isInstanced),
    fragmentShader: RASTER_FRAGMENT_SHADER,
    uniforms: {
      ...commonUniforms,
      uRasterLayerTexA: { value: shared.rasterLayerMetaTextureA.texture },
      uRasterLayerTexB: { value: shared.rasterLayerMetaTextureB.texture },
      uRasterLayerTexC: { value: shared.rasterLayerMetaTextureC.texture },
      uRasterLayerTexSize: {
        value: [shared.rasterLayerMetaTextureA.width, shared.rasterLayerMetaTextureA.height]
      },
      uRasterAtlasTex: { value: shared.rasterAtlasTexture },
      uRasterAtlasSize: { value: [shared.rasterAtlasSize.width, shared.rasterAtlasSize.height] }
    },
    ...instancedDefinePatch
  });

  const fill = new RawShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: options.page.side,
    depthWrite: options.page.depthWrite,
    depthTest: true,
    vertexShader: buildFillVertexShader(isInstanced),
    fragmentShader: FILL_FRAGMENT_SHADER,
    uniforms: {
      ...commonUniforms,
      uFillPathMetaTexA: { value: shared.fillPathTextureA.texture },
      uFillPathMetaTexB: { value: shared.fillPathTextureB.texture },
      uFillPathMetaTexC: { value: shared.fillPathTextureC.texture },
      uFillPathMetaTexSize: { value: [shared.fillPathTextureA.width, shared.fillPathTextureA.height] },
      uFillSegmentTexA: { value: shared.fillSegmentTextureA.texture },
      uFillSegmentTexB: { value: shared.fillSegmentTextureB.texture },
      uFillSegmentTexSize: { value: [shared.fillSegmentTextureA.width, shared.fillSegmentTextureA.height] }
    },
    ...instancedDefinePatch
  });

  const stroke = new RawShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: options.page.side,
    depthWrite: options.page.depthWrite,
    depthTest: true,
    vertexShader: buildStrokeVertexShader(isInstanced),
    fragmentShader: STROKE_FRAGMENT_SHADER,
    uniforms: {
      ...commonUniforms,
      uSegmentTexA: { value: shared.segmentTextureA.texture },
      uSegmentTexB: { value: shared.segmentTextureB.texture },
      uSegmentStyleTex: { value: shared.segmentTextureC.texture },
      uSegmentBoundsTex: { value: shared.segmentTextureD.texture },
      uSegmentTexSize: { value: [shared.segmentTextureA.width, shared.segmentTextureA.height] }
    },
    ...instancedDefinePatch
  });

  const text = new RawShaderMaterial({
    glslVersion: GLSL3,
    transparent: true,
    side: options.page.side,
    depthWrite: options.page.depthWrite,
    depthTest: true,
    vertexShader: buildTextVertexShader(isInstanced),
    fragmentShader: TEXT_FRAGMENT_SHADER,
    uniforms: {
      ...commonUniforms,
      uTextInstanceTexA: { value: shared.textInstanceTextureA.texture },
      uTextInstanceTexB: { value: shared.textInstanceTextureB.texture },
      uTextInstanceTexC: { value: shared.textInstanceTextureC.texture },
      uTextInstanceTexSize: { value: [shared.textInstanceTextureA.width, shared.textInstanceTextureA.height] },
      uTextGlyphMetaTexA: { value: shared.textGlyphMetaTextureA.texture },
      uTextGlyphMetaTexB: { value: shared.textGlyphMetaTextureB.texture },
      uTextGlyphMetaTexSize: { value: [shared.textGlyphMetaTextureA.width, shared.textGlyphMetaTextureA.height] },
      uTextGlyphSegmentTexA: { value: shared.textGlyphSegmentTextureA.texture },
      uTextGlyphSegmentTexB: { value: shared.textGlyphSegmentTextureB.texture },
      uTextGlyphSegmentTexSize: {
        value: [shared.textGlyphSegmentTextureA.width, shared.textGlyphSegmentTextureA.height]
      },
      uTextGlyphRasterMetaTex: { value: shared.textGlyphRasterMetaTexture.texture },
      uTextRasterAtlasTex: { value: shared.textAtlasTexture },
      uTextRasterAtlasSize: { value: [shared.textAtlasSize.width, shared.textAtlasSize.height] }
    },
    ...instancedDefinePatch
  });

  const all = [raster, fill, stroke, text];

  setMaterialFlags(all, options.page.side, options.page.depthWrite);

  return {
    raster,
    fill,
    stroke,
    text,
    all,
    setMaterialOptions: (next) => {
      applyMaterialOptionPatch(commonUniforms, next);
      if (typeof next.strokeCurveEnabled === "boolean") {
        commonUniforms.uStrokeCurveEnabled.value = next.strokeCurveEnabled ? 1 : 0;
        commonUniforms.uTextCurveEnabled.value = next.strokeCurveEnabled ? 1 : 0;
      }

      if (typeof next.textVectorOnly === "boolean") {
        commonUniforms.uTextVectorOnly.value = next.textVectorOnly ? 1 : 0;
      }

      if (next.pageBackgroundColor !== undefined || next.pageBackgroundOpacity !== undefined) {
        const current = commonUniforms.uPageBackgroundColor.value as number[];
        const color = new Color(next.pageBackgroundColor ?? new Color(current[0], current[1], current[2]));
        current[0] = color.r;
        current[1] = color.g;
        current[2] = color.b;
        if (next.pageBackgroundOpacity !== undefined) {
          current[3] = clamp(next.pageBackgroundOpacity, 0, 1);
        }
      }

      if (next.vectorColorOverride !== undefined || next.vectorOpacityOverride !== undefined) {
        const current = commonUniforms.uVectorOverride.value as number[];
        if (next.vectorColorOverride === null) {
          current[0] = 0;
          current[1] = 0;
          current[2] = 0;
          current[3] = 0;
        } else {
          if (next.vectorColorOverride !== undefined) {
            const color = new Color(next.vectorColorOverride);
            current[0] = color.r;
            current[1] = color.g;
            current[2] = color.b;
            current[3] = next.vectorOpacityOverride !== undefined ? clamp(next.vectorOpacityOverride, 0, 1) : current[3];
            if (next.vectorOpacityOverride === undefined && current[3] <= 0) {
              current[3] = 1;
            }
          } else if (next.vectorOpacityOverride !== undefined) {
            current[3] = clamp(next.vectorOpacityOverride, 0, 1);
          }
        }
      }

      for (const material of all) {
        material.needsUpdate = true;
      }
    },
    dispose: () => {
      for (const material of all) {
        material.dispose();
      }
    }
  };
}

function setMaterialFlags(materials: RawShaderMaterial[], side: Side, depthWrite: boolean): void {
  for (const material of materials) {
    material.side = side;
    material.depthWrite = depthWrite;
    material.toneMapped = false;
  }
}

function applyMaterialOptionPatch(
  uniforms: Record<string, { value: unknown }>,
  patch: Partial<ResolvedMaterialOptions>
): void {
  if (typeof patch.strokeCurveEnabled === "boolean") {
    uniforms.uStrokeCurveEnabled.value = patch.strokeCurveEnabled ? 1 : 0;
    uniforms.uTextCurveEnabled.value = patch.strokeCurveEnabled ? 1 : 0;
  }
  if (typeof patch.textVectorOnly === "boolean") {
    uniforms.uTextVectorOnly.value = patch.textVectorOnly ? 1 : 0;
  }
}

function commonVertexHeader(isInstanced: boolean): string {
  return `precision highp float;
precision highp sampler2D;

in vec3 position;
in float aPrimitiveIndex;
${isInstanced ? "in float aPageIndex;" : ""}

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uWorldUnitsPerPoint;
uniform int uPageIndex;
uniform sampler2D uPageMetaTexA;
uniform sampler2D uPageMetaTexB;
uniform sampler2D uPageRectTex;
uniform ivec2 uPageMetaTexSize;
uniform ivec2 uPageRectTexSize;

#ifdef USE_INSTANCING
in mat4 instanceMatrix;
#endif

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

int readPageIndex() {
${isInstanced ? "  return int(aPageIndex + 0.5);" : "  return uPageIndex;"}
}

vec4 toClip(vec2 pagePoint, vec2 pageCenter) {
  vec3 local = vec3((pagePoint - pageCenter) * uWorldUnitsPerPoint, 0.0);
  vec4 world = vec4(local, 1.0);
#ifdef USE_INSTANCING
  world = instanceMatrix * world;
#endif
  return projectionMatrix * (modelViewMatrix * world);
}
`;
}

function buildRasterVertexShader(isInstanced: boolean): string {
  return `${commonVertexHeader(isInstanced)}
uniform sampler2D uRasterLayerTexA;
uniform sampler2D uRasterLayerTexB;
uniform sampler2D uRasterLayerTexC;
uniform ivec2 uRasterLayerTexSize;

out vec2 vUv;
flat out float vRasterKind;

void main() {
  int pageIndex = readPageIndex();
  vec4 pageMetaB = texelFetch(uPageMetaTexB, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int rasterCount = int(pageMetaB.w + 0.5);

  vec2 corner01 = position.xy * 0.5 + 0.5;

  if (primitiveIndex > rasterCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vUv = vec2(0.0);
    vRasterKind = 0.0;
    return;
  }

  if (primitiveIndex == 0) {
    vec2 pagePoint = mix(pageRect.xy, pageRect.zw, corner01);
    gl_Position = toClip(pagePoint, pageCenter);
    vUv = vec2(0.0);
    vRasterKind = 0.0;
    return;
  }

  int layerIndex = int(pageMetaB.z + 0.5) + primitiveIndex - 1;
  vec4 metaA = texelFetch(uRasterLayerTexA, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);
  vec4 metaB = texelFetch(uRasterLayerTexB, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);
  vec4 metaC = texelFetch(uRasterLayerTexC, coordFromIndex(layerIndex, uRasterLayerTexSize), 0);

  vec2 localTopDown = vec2(corner01.x, 1.0 - corner01.y);
  vec2 pagePoint = vec2(
    metaA.x * localTopDown.x + metaA.z * localTopDown.y + metaB.x,
    metaA.y * localTopDown.x + metaA.w * localTopDown.y + metaB.y
  );

  gl_Position = toClip(pagePoint, pageCenter);
  vUv = vec2(metaB.z + localTopDown.x * metaC.x, metaB.w + localTopDown.y * metaC.y);
  vRasterKind = 1.0;
}
`;
}

const RASTER_FRAGMENT_SHADER = `precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterAtlasTex;
uniform vec4 uPageBackgroundColor;

in vec2 vUv;
flat in float vRasterKind;
out vec4 outColor;

void main() {
  if (vRasterKind < 0.5) {
    if (uPageBackgroundColor.a <= 0.001) {
      discard;
    }
    outColor = uPageBackgroundColor;
    return;
  }

  vec4 color = texture(uRasterAtlasTex, vUv);
  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`;

function buildFillVertexShader(isInstanced: boolean): string {
  return `${commonVertexHeader(isInstanced)}
uniform sampler2D uFillPathMetaTexA;
uniform sampler2D uFillPathMetaTexB;
uniform sampler2D uFillPathMetaTexC;
uniform ivec2 uFillPathMetaTexSize;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vAlpha;
flat out float vFillRule;
flat out float vFillHasCompanionStroke;
out vec2 vLocal;

void main() {
  int pageIndex = readPageIndex();
  vec4 pageMetaA = texelFetch(uPageMetaTexA, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int fillCount = int(pageMetaA.w + 0.5);
  if (primitiveIndex >= fillCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vFillRule = 0.0;
    vFillHasCompanionStroke = 0.0;
    vLocal = vec2(0.0);
    return;
  }

  int pathIndex = int(pageMetaA.z + 0.5) + primitiveIndex;
  vec4 metaA = texelFetch(uFillPathMetaTexA, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);
  vec4 metaB = texelFetch(uFillPathMetaTexB, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);
  vec4 metaC = texelFetch(uFillPathMetaTexC, coordFromIndex(pathIndex, uFillPathMetaTexSize), 0);

  int segmentCount = int(metaA.y + 0.5);
  float alpha = metaC.w;
  if (segmentCount <= 0 || alpha <= 0.001) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    vFillRule = 0.0;
    vFillHasCompanionStroke = 0.0;
    vLocal = vec2(0.0);
    return;
  }

  vec2 minBounds = metaA.zw;
  vec2 maxBounds = metaB.xy;
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  gl_Position = toClip(local, pageCenter);
  vSegmentStart = int(metaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = vec3(metaB.z, metaB.w, metaC.z);
  vAlpha = alpha;
  vFillRule = metaC.x;
  vFillHasCompanionStroke = metaC.y;
  vLocal = local;
}
`;
}

const FILL_FRAGMENT_SHADER = `precision highp float;
precision highp sampler2D;

uniform sampler2D uFillSegmentTexA;
uniform sampler2D uFillSegmentTexB;
uniform ivec2 uFillSegmentTexSize;
uniform float uFillAAScreenPx;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vAlpha;
flat in float vFillRule;
flat in float vFillHasCompanionStroke;
in vec2 vLocal;

out vec4 outColor;

const int MAX_FILL_PATH_PRIMITIVES = 2048;
const float FILL_PRIMITIVE_QUADRATIC = 1.0;
const int QUAD_WINDING_SUBDIVISIONS = 6;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

vec2 evaluateQuadratic(vec2 a, vec2 b, vec2 c, float t) {
  float oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

void accumulateLineCrossing(vec2 a, vec2 b, vec2 p, inout int winding, inout int crossings) {
  bool upward = (a.y <= p.y) && (b.y > p.y);
  bool downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  float denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  float xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    crossings += 1;
    winding += upward ? 1 : -1;
  }
}

void accumulateQuadraticCrossing(vec2 a, vec2 b, vec2 c, vec2 p, inout int winding, inout int crossings) {
  vec2 prev = a;
  for (int i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i += 1) {
    float t = float(i) / float(QUAD_WINDING_SUBDIVISIONS);
    vec2 next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding, crossings);
    prev = next;
  }
}

void main() {
  if (vSegmentCount <= 0 || vAlpha <= 0.001) {
    discard;
  }

  float minDistance = 1e20;
  int winding = 0;
  int crossings = 0;

  for (int i = 0; i < MAX_FILL_PATH_PRIMITIVES; i += 1) {
    if (i >= vSegmentCount) {
      break;
    }

    vec4 primitiveA = texelFetch(uFillSegmentTexA, coordFromIndex(vSegmentStart + i, uFillSegmentTexSize), 0);
    vec4 primitiveB = texelFetch(uFillSegmentTexB, coordFromIndex(vSegmentStart + i, uFillSegmentTexSize), 0);
    vec2 p0 = primitiveA.xy;
    vec2 p1 = primitiveA.zw;
    vec2 p2 = primitiveB.xy;
    float primitiveType = primitiveB.z;

    if (primitiveType >= FILL_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(vLocal, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, vLocal, winding, crossings);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(vLocal, p0, p2));
      accumulateLineCrossing(p0, p2, vLocal, winding, crossings);
    }
  }

  bool insideNonZero = winding != 0;
  bool insideEvenOdd = (crossings & 1) == 1;
  bool inside = vFillRule >= 0.5 ? insideEvenOdd : insideNonZero;
  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  if (vFillHasCompanionStroke >= 0.5) {
    float alpha = inside ? vAlpha : 0.0;
    if (alpha <= 0.001) {
      discard;
    }
    outColor = vec4(color, alpha);
    return;
  }

  float signedDistance = inside ? -minDistance : minDistance;

  float pixelToLocalX = length(vec2(dFdx(vLocal.x), dFdy(vLocal.x)));
  float pixelToLocalY = length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)));
  float aaWidth = max(max(pixelToLocalX, pixelToLocalY) * uFillAAScreenPx, 1e-4);

  float alpha = clamp(0.5 - signedDistance / aaWidth, 0.0, 1.0) * vAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  outColor = vec4(color, alpha);
}
`;

function buildStrokeVertexShader(isInstanced: boolean): string {
  return `${commonVertexHeader(isInstanced)}
uniform sampler2D uSegmentTexA;
uniform sampler2D uSegmentTexB;
uniform sampler2D uSegmentStyleTex;
uniform sampler2D uSegmentBoundsTex;
uniform ivec2 uSegmentTexSize;

out vec2 vLocal;
flat out vec2 vP0;
flat out vec2 vP1;
flat out vec2 vP2;
flat out float vPrimitiveType;
flat out float vHalfWidth;
flat out float vIsHairline;
flat out vec3 vColor;
flat out float vAlpha;

void main() {
  int pageIndex = readPageIndex();
  vec4 pageMetaA = texelFetch(uPageMetaTexA, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int segmentCount = int(pageMetaA.y + 0.5);

  if (primitiveIndex >= segmentCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vIsHairline = 0.0;
    vColor = vec3(0.0);
    vAlpha = 0.0;
    return;
  }

  int segmentIndex = int(pageMetaA.x + 0.5) + primitiveIndex;
  vec4 primitiveA = texelFetch(uSegmentTexA, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 primitiveB = texelFetch(uSegmentTexB, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 style = texelFetch(uSegmentStyleTex, coordFromIndex(segmentIndex, uSegmentTexSize), 0);
  vec4 primitiveBounds = texelFetch(uSegmentBoundsTex, coordFromIndex(segmentIndex, uSegmentTexSize), 0);

  vec2 p0 = primitiveA.xy;
  vec2 p1 = primitiveA.zw;
  vec2 p2 = primitiveB.xy;
  float primitiveType = primitiveB.z;
  bool isQuadratic = primitiveType >= 0.5;
  float halfWidth = style.x;
  vec3 color = style.yzw;
  float packedStyle = primitiveB.w;
  float styleFlags = floor(packedStyle / 2.0 + 1e-6);
  float alpha = packedStyle - styleFlags * 2.0;
  bool isHairline = mod(styleFlags, 2.0) >= 0.5;

  float geometryLength = isQuadratic
    ? length(p1 - p0) + length(p2 - p1)
    : length(p2 - p0);

  if (geometryLength < 1e-5 || alpha <= 0.001) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vIsHairline = 0.0;
    vColor = color;
    vAlpha = 0.0;
    return;
  }

  float extent = max(halfWidth, 0.5) + 2.0;
  vec2 worldMin = primitiveBounds.xy - vec2(extent);
  vec2 worldMax = primitiveBounds.zw + vec2(extent);
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 pagePoint = mix(worldMin, worldMax, corner01);

  gl_Position = toClip(pagePoint, pageCenter);
  vLocal = pagePoint;
  vP0 = p0;
  vP1 = p1;
  vP2 = p2;
  vPrimitiveType = primitiveType;
  vHalfWidth = halfWidth;
  vIsHairline = isHairline ? 1.0 : 0.0;
  vColor = color;
  vAlpha = alpha;
}
`;
}

const STROKE_FRAGMENT_SHADER = `precision highp float;

uniform float uStrokeCurveEnabled;
uniform float uStrokeAAScreenPx;
uniform vec4 uVectorOverride;

in vec2 vLocal;
flat in vec2 vP0;
flat in vec2 vP1;
flat in vec2 vP2;
flat in float vPrimitiveType;
flat in float vHalfWidth;
flat in float vIsHairline;
flat in vec3 vColor;
flat in float vAlpha;

out vec4 outColor;

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

void main() {
  if (vAlpha <= 0.001) {
    discard;
  }

  float distanceToSegment = (uStrokeCurveEnabled >= 0.5 && vPrimitiveType >= 0.5)
    ? distanceToQuadraticBezier(vLocal, vP0, vP1, vP2)
    : distanceToLineSegment(vLocal, vP0, vP2);

  float localPerPixel = max(
    length(vec2(dFdx(vLocal.x), dFdy(vLocal.x))),
    length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)))
  );

  float halfWidth = vHalfWidth;
  if (vIsHairline >= 0.5) {
    halfWidth = max(halfWidth, 0.5 * localPerPixel);
  }

  float aaWidth = max(localPerPixel * uStrokeAAScreenPx, 1e-4);
  if (vIsHairline >= 0.5) {
    aaWidth = max(aaWidth, 0.35 * localPerPixel);
  }

  float coverage = 1.0 - smoothstep(halfWidth - aaWidth, halfWidth + aaWidth, distanceToSegment);
  float alpha = coverage * vAlpha;

  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`;

function buildTextVertexShader(isInstanced: boolean): string {
  return `${commonVertexHeader(isInstanced)}
uniform sampler2D uTextInstanceTexA;
uniform sampler2D uTextInstanceTexB;
uniform sampler2D uTextInstanceTexC;
uniform sampler2D uTextGlyphMetaTexA;
uniform sampler2D uTextGlyphMetaTexB;
uniform sampler2D uTextGlyphRasterMetaTex;
uniform ivec2 uTextInstanceTexSize;
uniform ivec2 uTextGlyphMetaTexSize;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vColorAlpha;
flat out vec4 vRasterRect;
out vec2 vNormCoord;
out vec2 vLocal;

void main() {
  int pageIndex = readPageIndex();
  vec4 pageMetaB = texelFetch(uPageMetaTexB, coordFromIndex(pageIndex, uPageMetaTexSize), 0);
  vec4 pageRect = texelFetch(uPageRectTex, coordFromIndex(pageIndex, uPageRectTexSize), 0);
  vec2 pageCenter = (pageRect.xy + pageRect.zw) * 0.5;

  int primitiveIndex = int(aPrimitiveIndex + 0.5);
  int textCount = int(pageMetaB.y + 0.5);
  if (primitiveIndex >= textCount) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vColorAlpha = 0.0;
    vRasterRect = vec4(0.0);
    vNormCoord = vec2(0.0);
    vLocal = vec2(0.0);
    return;
  }

  int instanceIndex = int(pageMetaB.x + 0.5) + primitiveIndex;
  vec4 instanceA = texelFetch(uTextInstanceTexA, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);
  vec4 instanceB = texelFetch(uTextInstanceTexB, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);
  vec4 instanceC = texelFetch(uTextInstanceTexC, coordFromIndex(instanceIndex, uTextInstanceTexSize), 0);

  int glyphIndex = int(instanceB.z + 0.5);
  vec4 glyphMetaA = texelFetch(uTextGlyphMetaTexA, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);
  vec4 glyphMetaB = texelFetch(uTextGlyphMetaTexB, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);
  vec4 glyphRasterMeta = texelFetch(uTextGlyphRasterMetaTex, coordFromIndex(glyphIndex, uTextGlyphMetaTexSize), 0);

  int segmentCount = int(glyphMetaA.y + 0.5);
  if (segmentCount <= 0) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vSegmentStart = 0;
    vSegmentCount = 0;
    vColor = vec3(0.0);
    vColorAlpha = 0.0;
    vRasterRect = vec4(0.0);
    vNormCoord = vec2(0.0);
    vLocal = vec2(0.0);
    return;
  }

  vec2 minBounds = glyphMetaA.zw;
  vec2 maxBounds = glyphMetaB.xy;
  vec2 corner01 = position.xy * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  vec2 pagePoint = vec2(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  gl_Position = toClip(pagePoint, pageCenter);
  vSegmentStart = int(glyphMetaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = instanceC.rgb;
  vColorAlpha = instanceC.a;
  vRasterRect = glyphRasterMeta;
  vNormCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2(1e-6)), 0.0, 1.0);
  vLocal = local;
}
`;
}

const TEXT_FRAGMENT_SHADER = `precision highp float;
precision highp sampler2D;

uniform sampler2D uTextGlyphSegmentTexA;
uniform sampler2D uTextGlyphSegmentTexB;
uniform sampler2D uTextRasterAtlasTex;
uniform ivec2 uTextGlyphSegmentTexSize;
uniform vec2 uTextRasterAtlasSize;
uniform float uTextAAScreenPx;
uniform float uTextCurveEnabled;
uniform float uTextVectorOnly;
uniform vec4 uVectorOverride;

flat in int vSegmentStart;
flat in int vSegmentCount;
flat in vec3 vColor;
flat in float vColorAlpha;
flat in vec4 vRasterRect;
in vec2 vNormCoord;
in vec2 vLocal;

out vec4 outColor;

const int MAX_GLYPH_PRIMITIVES = 256;
const float TEXT_PRIMITIVE_QUADRATIC = 1.0;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

float distanceToLineSegment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  float t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

float distanceToQuadraticBezier(vec2 p, vec2 a, vec2 b, vec2 c) {
  vec2 aa = b - a;
  vec2 bb = a - 2.0 * b + c;
  vec2 cc = aa * 2.0;
  vec2 dd = a - p;

  float bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  float inv = 1.0 / bbLenSq;
  float kx = inv * dot(aa, bb);
  float ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  float kz = inv * dot(dd, aa);

  float pValue = ky - kx * kx;
  float pCube = pValue * pValue * pValue;
  float qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  float hValue = qValue * qValue + 4.0 * pCube;

  float best = 1e20;

  if (hValue >= 0.0) {
    float hSqrt = sqrt(hValue);
    vec2 roots = (vec2(hSqrt, -hSqrt) - qValue) * 0.5;
    vec2 uv = sign(roots) * pow(abs(roots), vec2(1.0 / 3.0));
    float t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    vec2 delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    float z = sqrt(-pValue);
    float acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    float angle = acos(acosArg) / 3.0;
    float cosine = cos(angle);
    float sine = sin(angle) * 1.732050808;
    vec3 t = clamp(vec3(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, 0.0, 1.0);

    vec2 delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

void accumulateLineCrossing(vec2 a, vec2 b, vec2 p, inout int winding) {
  bool upward = (a.y <= p.y) && (b.y > p.y);
  bool downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  float denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  float xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    winding += upward ? 1 : -1;
  }
}

void accumulateQuadraticCrossingRoot(
  vec2 a,
  vec2 b,
  vec2 c,
  vec2 p,
  float ay,
  float by,
  float t,
  inout int winding
) {
  const float ROOT_EPS = 1e-5;
  if (t < -ROOT_EPS || t >= 1.0 - ROOT_EPS) {
    return;
  }

  float tc = clamp(t, 0.0, 1.0);
  float oneMinusT = 1.0 - tc;
  float xCross = oneMinusT * oneMinusT * a.x + 2.0 * oneMinusT * tc * b.x + tc * tc * c.x;
  if (xCross <= p.x) {
    return;
  }

  float dy = by + 2.0 * ay * tc;
  if (abs(dy) <= 1e-6) {
    return;
  }

  winding += dy > 0.0 ? 1 : -1;
}

void accumulateQuadraticCrossing(vec2 a, vec2 b, vec2 c, vec2 p, inout int winding) {
  float ay = a.y - 2.0 * b.y + c.y;
  float by = 2.0 * (b.y - a.y);
  float cy = a.y - p.y;

  if (abs(ay) <= 1e-8) {
    if (abs(by) <= 1e-8) {
      return;
    }
    float t = -cy / by;
    accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t, winding);
    return;
  }

  float discriminant = by * by - 4.0 * ay * cy;
  if (discriminant < 0.0) {
    return;
  }

  float sqrtDiscriminant = sqrt(max(discriminant, 0.0));
  float invDen = 0.5 / ay;
  float t0 = (-by - sqrtDiscriminant) * invDen;
  float t1 = (-by + sqrtDiscriminant) * invDen;
  accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t0, winding);
  if (abs(t1 - t0) > 1e-5) {
    accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t1, winding);
  }
}

void main() {
  if (vSegmentCount <= 0) {
    discard;
  }

  if (uTextVectorOnly < 0.5 && vRasterRect.z > 0.0 && vRasterRect.w > 0.0) {
    vec2 atlasPxSize = max(uTextRasterAtlasSize, vec2(1.0));
    vec2 nc = vec2(vNormCoord.x, 1.0 - vNormCoord.y) * (vRasterRect.zw * atlasPxSize);
    if (min(fwidth(nc.x), fwidth(nc.y)) > 2.0) {
      vec2 uvCenter = vec2(
        vRasterRect.x + vNormCoord.x * vRasterRect.z,
        vRasterRect.y + (1.0 - vNormCoord.y) * vRasterRect.w
      );
      vec2 texel = 1.0 / atlasPxSize;
      vec2 uvMin = vRasterRect.xy + texel * 0.5;
      vec2 uvMax = vRasterRect.xy + vRasterRect.zw - texel * 0.5;
      vec2 dx = dFdx(nc) * 0.33 * texel;
      vec2 dy = dFdy(nc) * 0.33 * texel;
      float mipBias = -1.25;
      float alpha = (1.0 / 3.0) * texture(uTextRasterAtlasTex, clamp(uvCenter, uvMin, uvMax), mipBias).r +
        (1.0 / 6.0) * (
          texture(uTextRasterAtlasTex, clamp(uvCenter - dx - dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter - dx + dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter + dx - dy, uvMin, uvMax), mipBias).r +
          texture(uTextRasterAtlasTex, clamp(uvCenter + dx + dy, uvMin, uvMax), mipBias).r
        );
      alpha *= vColorAlpha;
      if (alpha <= 0.001) {
        discard;
      }
      vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
      outColor = vec4(color, alpha);
      return;
    }
  }

  float minDistance = 1e20;
  int winding = 0;

  for (int i = 0; i < MAX_GLYPH_PRIMITIVES; i += 1) {
    if (i >= vSegmentCount) {
      break;
    }

    vec4 primitiveA = texelFetch(uTextGlyphSegmentTexA, coordFromIndex(vSegmentStart + i, uTextGlyphSegmentTexSize), 0);
    vec4 primitiveB = texelFetch(uTextGlyphSegmentTexB, coordFromIndex(vSegmentStart + i, uTextGlyphSegmentTexSize), 0);
    vec2 p0 = primitiveA.xy;
    vec2 p1 = primitiveA.zw;
    vec2 p2 = primitiveB.xy;
    float primitiveType = primitiveB.z;

    if (uTextCurveEnabled >= 0.5 && primitiveType >= TEXT_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(vLocal, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, vLocal, winding);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(vLocal, p0, p2));
      accumulateLineCrossing(p0, p2, vLocal, winding);
    }
  }

  bool inside = winding != 0;
  float signedDistance = inside ? -minDistance : minDistance;

  float pixelToLocalX = length(vec2(dFdx(vLocal.x), dFdy(vLocal.x)));
  float pixelToLocalY = length(vec2(dFdx(vLocal.y), dFdy(vLocal.y)));
  float localPerPixel = max(pixelToLocalX, pixelToLocalY);

  float baseAAWidth = max(localPerPixel * uTextAAScreenPx, 1e-4);
  float alphaBase = 1.0 - smoothstep(-baseAAWidth, baseAAWidth, signedDistance);
  float alpha = alphaBase * vColorAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`;

export function setPageIndexUniform(materials: readonly RawShaderMaterial[], pageIndex: number): void {
  for (const material of materials) {
    if (material.uniforms.uPageIndex) {
      material.uniforms.uPageIndex.value = pageIndex;
    }
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
