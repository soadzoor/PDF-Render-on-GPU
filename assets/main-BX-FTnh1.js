import{b as ze,a as Wi,c as ki,d as Hi,e as Tt,f as Yi,g as Ni,p as $i,h as Zi,i as We,l as qi,j as Qi,k as Ki,m as ji,n as Ji}from"./client-GTiz-NFi.js";import{GlobalWorkerOptions as er}from"./pdf-TYrZqVzP.js";const je=64,Je=1024,tr=3e4,ir=22e4;function Ct(i){const e=i.segmentCount,t=Math.max(i.bounds.maxX-i.bounds.minX,1e-5),a=Math.max(i.bounds.maxY-i.bounds.minY,1e-5),{gridWidth:s,gridHeight:n}=rr(e,t,a),r=s*n,o=t/s,l=a/n,c=new Uint32Array(r);let h=0;for(let C=0;C<e;C+=1){const g=C*4,v=C*4,u=i.styles[v]+.35,T=i.primitiveBounds[g]-u,S=i.primitiveBounds[g+1]-u,y=i.primitiveBounds[g+2]+u,L=i.primitiveBounds[g+3]+u,I=H(Math.floor((T-i.bounds.minX)/o),s),_=H(Math.floor((y-i.bounds.minX)/o),s),w=H(Math.floor((S-i.bounds.minY)/l),n),b=H(Math.floor((L-i.bounds.minY)/l),n);for(let R=w;R<=b;R+=1){let W=R*s+I;for(let k=I;k<=_;k+=1){const V=c[W]+1;c[W]=V,V>h&&(h=V),W+=1}}}const x=new Uint32Array(r+1);for(let C=0;C<r;C+=1)x[C+1]=x[C]+c[C];const p=x[r],m=new Uint32Array(p),d=x.slice(0,r);for(let C=0;C<e;C+=1){const g=C*4,v=C*4,u=i.styles[v]+.35,T=i.primitiveBounds[g]-u,S=i.primitiveBounds[g+1]-u,y=i.primitiveBounds[g+2]+u,L=i.primitiveBounds[g+3]+u,I=H(Math.floor((T-i.bounds.minX)/o),s),_=H(Math.floor((y-i.bounds.minX)/o),s),w=H(Math.floor((S-i.bounds.minY)/l),n),b=H(Math.floor((L-i.bounds.minY)/l),n);for(let R=w;R<=b;R+=1){let W=R*s+I;for(let k=I;k<=_;k+=1){const V=d[W];m[V]=C,d[W]=V+1,W+=1}}}return{gridWidth:s,gridHeight:n,minX:i.bounds.minX,minY:i.bounds.minY,maxX:i.bounds.maxX,maxY:i.bounds.maxY,cellWidth:o,cellHeight:l,offsets:x,counts:c,indices:m,maxCellPopulation:h}}function rr(i,e,t){const a=Be(Math.round(i/8),tr,ir),s=e/t;let n=Math.round(Math.sqrt(a*s)),r=Math.round(a/Math.max(n,1));return n=Be(n,je,Je),r=Be(r,je,Je),{gridWidth:n,gridHeight:r}}function H(i,e){return i<0?0:i>=e?e-1:i}function Be(i,e,t){return i<e?e:i>t?t:i}const ar=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 1) in float aSegmentIndex;

uniform sampler2D uSegmentTexA;
uniform sampler2D uSegmentTexB;
uniform sampler2D uSegmentStyleTex;
uniform sampler2D uSegmentBoundsTex;
uniform ivec2 uSegmentTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;
uniform float uAAScreenPx;

out vec2 vLocal;
flat out vec2 vP0;
flat out vec2 vP1;
flat out vec2 vP2;
flat out float vPrimitiveType;
flat out float vHalfWidth;
flat out float vAAWorld;
flat out vec3 vColor;
flat out float vAlpha;

ivec2 segmentCoord(int index) {
  int x = index % uSegmentTexSize.x;
  int y = index / uSegmentTexSize.x;
  return ivec2(x, y);
}

void main() {
  int index = int(aSegmentIndex + 0.5);
  vec4 primitiveA = texelFetch(uSegmentTexA, segmentCoord(index), 0);
  vec4 primitiveB = texelFetch(uSegmentTexB, segmentCoord(index), 0);
  vec4 style = texelFetch(uSegmentStyleTex, segmentCoord(index), 0);
  vec4 primitiveBounds = texelFetch(uSegmentBoundsTex, segmentCoord(index), 0);

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
  bool isRoundCap = mod(floor(styleFlags * 0.5), 2.0) >= 0.5;

  float geometryLength = isQuadratic
    ? length(p1 - p0) + length(p2 - p1)
    : length(p2 - p0);

  if ((geometryLength < 1e-5 && !isRoundCap) || alpha <= 0.001) {
    gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
    vLocal = vec2(0.0);
    vP0 = vec2(0.0);
    vP1 = vec2(0.0);
    vP2 = vec2(0.0);
    vPrimitiveType = 0.0;
    vHalfWidth = 0.0;
    vAAWorld = 1.0;
    vColor = color;
    vAlpha = 0.0;
    return;
  }

  if (isHairline) {
    halfWidth = max(0.5 / max(uZoom, 1e-4), 1e-5);
  }

  float aaWorld = max(1.0 / uZoom, 0.0001) * uAAScreenPx;
  if (isHairline) {
    aaWorld = max(0.35 / max(uZoom, 1e-4), 5e-5);
  }

  float extent = halfWidth + aaWorld;
  vec2 worldMin = primitiveBounds.xy - vec2(extent);
  vec2 worldMax = primitiveBounds.zw + vec2(extent);
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 worldPosition = mix(worldMin, worldMax, corner01);

  vec2 screen = (worldPosition - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);

  vLocal = worldPosition;
  vP0 = p0;
  vP1 = p1;
  vP2 = p2;
  vPrimitiveType = primitiveType;
  vHalfWidth = halfWidth;
  vAAWorld = aaWorld;
  vColor = color;
  vAlpha = alpha;
}
`,nr=`#version 300 es
precision highp float;
uniform float uStrokeCurveEnabled;
uniform vec4 uVectorOverride;
in vec2 vLocal;
flat in vec2 vP0;
flat in vec2 vP1;
flat in vec2 vP2;
flat in float vPrimitiveType;
flat in float vHalfWidth;
flat in float vAAWorld;
flat in vec3 vColor;
flat in float vAlpha;

out vec4 outColor;

${ze()}

void main() {
  if (vAlpha <= 0.001) {
    discard;
  }

  float distanceToSegment = (uStrokeCurveEnabled >= 0.5 && vPrimitiveType >= 0.5)
    ? distanceToQuadraticBezier(vLocal, vP0, vP1, vP2)
    : distanceToLineSegment(vLocal, vP0, vP2);

  float coverage = 1.0 - smoothstep(vHalfWidth - vAAWorld, vHalfWidth + vAAWorld, distanceToSegment);
  float alpha = coverage * vAlpha;

  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`,sr=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 3) in float aFillPathIndex;

uniform sampler2D uFillPathMetaTexA;
uniform sampler2D uFillPathMetaTexB;
uniform sampler2D uFillPathMetaTexC;
uniform ivec2 uFillPathMetaTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vAlpha;
flat out float vFillRule;
flat out float vFillHasCompanionStroke;
out vec2 vLocal;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

void main() {
  int pathIndex = int(aFillPathIndex + 0.5);
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
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 world = mix(minBounds, maxBounds, corner01);

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;
  gl_Position = vec4(clip, 0.0, 1.0);

  vSegmentStart = int(metaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = vec3(metaB.z, metaB.w, metaC.z);
  vAlpha = alpha;
  vFillRule = metaC.x;
  vFillHasCompanionStroke = metaC.y;
  vLocal = world;
}
`,or=`#version 300 es
precision highp float;
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

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

${ze()}
${Yi()}

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
`,lr=`#version 300 es
precision highp float;
precision highp sampler2D;

layout(location = 0) in vec2 aCorner;
layout(location = 2) in float aTextInstanceIndex;

uniform sampler2D uTextInstanceTexA;
uniform sampler2D uTextInstanceTexB;
uniform sampler2D uTextInstanceTexC;
uniform sampler2D uTextGlyphMetaTexA;
uniform sampler2D uTextGlyphMetaTexB;
uniform sampler2D uTextGlyphRasterMetaTex;
uniform ivec2 uTextInstanceTexSize;
uniform ivec2 uTextGlyphMetaTexSize;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

flat out int vSegmentStart;
flat out int vSegmentCount;
flat out vec3 vColor;
flat out float vColorAlpha;
flat out vec4 vRasterRect;
out vec2 vNormCoord;
out vec2 vLocal;

ivec2 coordFromIndex(int index, ivec2 sizeValue) {
  int x = index % sizeValue.x;
  int y = index / sizeValue.x;
  return ivec2(x, y);
}

void main() {
  int instanceIndex = int(aTextInstanceIndex + 0.5);
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
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 local = mix(minBounds, maxBounds, corner01);

  vec2 world = vec2(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);
  vSegmentStart = int(glyphMetaA.x + 0.5);
  vSegmentCount = segmentCount;
  vColor = instanceC.rgb;
  vColorAlpha = instanceC.a;
  vRasterRect = glyphRasterMeta;
  vNormCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2(1e-6)), 0.0, 1.0);
  vLocal = local;
}
`,cr=`#version 300 es
precision highp float;
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

${ze()}
${Wi()}
${ki()}

void main() {
  if (vSegmentCount <= 0) {
    discard;
  }

  if (uTextVectorOnly < 0.5 && vRasterRect.z > 0.0 && vRasterRect.w > 0.0) {
    vec2 atlasPxSize = max(uTextRasterAtlasSize, vec2(1.0));
    vec2 nc = vec2(vNormCoord.x, 1.0 - vNormCoord.y) * (vRasterRect.zw * atlasPxSize);
    if (shouldUseTextMinifyFallback(nc)) {
      float alpha = sampleTextMinifiedAlpha(
        uTextRasterAtlasTex,
        atlasPxSize,
        vRasterRect,
        vNormCoord,
        nc
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

  bool insideWinding = winding != 0;
  bool inside = insideWinding;
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
`,et=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,ur=`#version 300 es
precision highp float;

uniform sampler2D uCacheTex;
uniform vec2 uViewportPx;
uniform vec2 uCacheSizePx;
uniform vec2 uOffsetPx;
uniform float uSampleScale;

out vec4 outColor;

void main() {
  float sampleScale = max(uSampleScale, 1e-6);
  vec2 centered = gl_FragCoord.xy - 0.5 * uViewportPx;
  vec2 samplePx = centered * sampleScale + 0.5 * uCacheSizePx + uOffsetPx;
  vec2 uv = samplePx / uCacheSizePx;

  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    outColor = vec4(0.627451, 0.662745, 0.686275, 1.0);
    return;
  }

  outColor = texture(uCacheTex, uv);
}
`,hr=`#version 300 es
precision highp float;

uniform sampler2D uVectorLayerTex;
uniform vec2 uViewportPx;

out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / max(uViewportPx, vec2(1.0));
  outColor = texture(uVectorLayerTex, clamp(uv, vec2(0.0), vec2(1.0)));
}
`,mr=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

uniform vec4 uRasterMatrixABCD;
uniform vec2 uRasterMatrixEF;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

out vec2 vUv;
flat out vec4 vUvRect;

void main() {
  vec2 corner01 = aCorner * 0.5 + 0.5;
  vec2 localTopDown = vec2(corner01.x, 1.0 - corner01.y);

  float a = uRasterMatrixABCD.x;
  float b = uRasterMatrixABCD.y;
  float c = uRasterMatrixABCD.z;
  float d = uRasterMatrixABCD.w;
  float e = uRasterMatrixEF.x;
  float f = uRasterMatrixEF.y;

  vec2 world = vec2(
    a * localTopDown.x + c * localTopDown.y + e,
    b * localTopDown.x + d * localTopDown.y + f
  );

  vec2 screen = (world - uCameraCenter) * uZoom + 0.5 * uViewport;
  vec2 clip = (screen / (0.5 * uViewport)) - 1.0;

  gl_Position = vec4(clip, 0.0, 1.0);
  vUv = localTopDown;
  vUvRect = vec4(0.0, 0.0, 1.0, 1.0);
}
`,dr=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterTex;
uniform vec2 uRasterTexSize;
in vec2 vUv;
flat in vec4 vUvRect;
out vec4 outColor;

${Hi()}

void main() {
  vec4 color = sampleRasterStable(uRasterTex, vUv, vUvRect, uRasterTexSize);
  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`,xr=140,tt=3e5,it=1.8,rt=96,fr=1e-5,gr=.75,pr=1.3333333333,Tr=2,Cr=2.25,Fe=24,j=1e-4,ue=1e-5,vr=64,at=5,nt=2e4,yr=120,he=160/255,me=169/255,de=175/255;class Sr{canvas;gl;segmentProgram;fillProgram;textProgram;blitProgram;vectorCompositeProgram;rasterProgram;segmentVao;fillVao;textVao;blitVao;cornerBuffer;allSegmentIdBuffer;visibleSegmentIdBuffer;allFillPathIdBuffer;allTextInstanceIdBuffer;segmentTextureA;segmentTextureB;segmentTextureC;segmentTextureD;fillPathMetaTextureA;fillPathMetaTextureB;fillPathMetaTextureC;fillSegmentTextureA;fillSegmentTextureB;textInstanceTextureA;textInstanceTextureB;textInstanceTextureC;textGlyphMetaTextureA;textGlyphMetaTextureB;textGlyphRasterMetaTexture;textGlyphSegmentTextureA;textGlyphSegmentTextureB;textRasterAtlasTexture;pageBackgroundTexture;uSegmentTexA;uSegmentTexB;uSegmentStyleTex;uSegmentBoundsTex;uSegmentTexSize;uViewport;uCameraCenter;uZoom;uAAScreenPx;uStrokeCurveEnabled;uStrokeVectorOverride;uFillPathMetaTexA;uFillPathMetaTexB;uFillPathMetaTexC;uFillSegmentTexA;uFillSegmentTexB;uFillPathMetaTexSize;uFillSegmentTexSize;uFillViewport;uFillCameraCenter;uFillZoom;uFillAAScreenPx;uFillVectorOverride;uTextInstanceTexA;uTextInstanceTexB;uTextInstanceTexC;uTextGlyphMetaTexA;uTextGlyphMetaTexB;uTextGlyphRasterMetaTex;uTextGlyphSegmentTexA;uTextGlyphSegmentTexB;uTextInstanceTexSize;uTextGlyphMetaTexSize;uTextGlyphSegmentTexSize;uTextViewport;uTextCameraCenter;uTextZoom;uTextAAScreenPx;uTextCurveEnabled;uTextRasterAtlasTex;uTextRasterAtlasSize;uTextVectorOnly;uTextVectorOverride;uCacheTex;uViewportPx;uCacheSizePx;uOffsetPx;uSampleScale;uVectorLayerTex;uVectorLayerViewportPx;uRasterTex;uRasterTexSize;uRasterMatrixABCD;uRasterMatrixEF;uRasterViewport;uRasterCameraCenter;uRasterZoom;scene=null;grid=null;sceneStats=null;allSegmentIds=new Float32Array(0);visibleSegmentIds=new Float32Array(0);allFillPathIds=new Float32Array(0);allTextInstanceIds=new Float32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;segmentCount=0;fillPathCount=0;textInstanceCount=0;rasterLayers=[];pageRects=new Float32Array(0);visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textRasterAtlasWidth=1;textRasterAtlasHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;needsVisibleSetUpdate=!1;rafHandle=0;frameListener=null;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=4096;lastInteractionTime=Number.NEGATIVE_INFINITY;isPanInteracting=!1;panCacheTexture=null;panCacheFramebuffer=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyFramebuffer=null;vectorMinifyWidth=0;vectorMinifyHeight=0;vectorMinifyWarmupPending=!1;panOptimizationEnabled=!0;strokeCurveEnabled=!0;textVectorOnly=!1;hasCameraInteractionSinceSceneLoad=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;constructor(e){this.canvas=e;const t=e.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,alpha:!1,premultipliedAlpha:!1});if(!t)throw new Error("WebGL2 is required for this proof-of-concept renderer.");this.gl=t,this.segmentProgram=this.createProgram(ar,nr),this.fillProgram=this.createProgram(sr,or),this.textProgram=this.createProgram(lr,cr),this.blitProgram=this.createProgram(et,ur),this.vectorCompositeProgram=this.createProgram(et,hr),this.rasterProgram=this.createProgram(mr,dr),this.segmentVao=this.createVertexArray(),this.fillVao=this.createVertexArray(),this.textVao=this.createVertexArray(),this.blitVao=this.createVertexArray(),this.cornerBuffer=this.mustCreateBuffer(),this.allSegmentIdBuffer=this.mustCreateBuffer(),this.visibleSegmentIdBuffer=this.mustCreateBuffer(),this.allFillPathIdBuffer=this.mustCreateBuffer(),this.allTextInstanceIdBuffer=this.mustCreateBuffer(),this.segmentTextureA=this.mustCreateTexture(),this.segmentTextureB=this.mustCreateTexture(),this.segmentTextureC=this.mustCreateTexture(),this.segmentTextureD=this.mustCreateTexture(),this.fillPathMetaTextureA=this.mustCreateTexture(),this.fillPathMetaTextureB=this.mustCreateTexture(),this.fillPathMetaTextureC=this.mustCreateTexture(),this.fillSegmentTextureA=this.mustCreateTexture(),this.fillSegmentTextureB=this.mustCreateTexture(),this.textInstanceTextureA=this.mustCreateTexture(),this.textInstanceTextureB=this.mustCreateTexture(),this.textInstanceTextureC=this.mustCreateTexture(),this.textGlyphMetaTextureA=this.mustCreateTexture(),this.textGlyphMetaTextureB=this.mustCreateTexture(),this.textGlyphRasterMetaTexture=this.mustCreateTexture(),this.textGlyphSegmentTextureA=this.mustCreateTexture(),this.textGlyphSegmentTextureB=this.mustCreateTexture(),this.textRasterAtlasTexture=this.mustCreateTexture(),this.pageBackgroundTexture=this.mustCreateTexture(),this.uSegmentTexA=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexA"),this.uSegmentTexB=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexB"),this.uSegmentStyleTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentStyleTex"),this.uSegmentBoundsTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentBoundsTex"),this.uSegmentTexSize=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexSize"),this.uViewport=this.mustGetUniformLocation(this.segmentProgram,"uViewport"),this.uCameraCenter=this.mustGetUniformLocation(this.segmentProgram,"uCameraCenter"),this.uZoom=this.mustGetUniformLocation(this.segmentProgram,"uZoom"),this.uAAScreenPx=this.mustGetUniformLocation(this.segmentProgram,"uAAScreenPx"),this.uStrokeCurveEnabled=this.mustGetUniformLocation(this.segmentProgram,"uStrokeCurveEnabled"),this.uStrokeVectorOverride=this.mustGetUniformLocation(this.segmentProgram,"uVectorOverride"),this.uFillPathMetaTexA=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexA"),this.uFillPathMetaTexB=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexB"),this.uFillPathMetaTexC=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexC"),this.uFillSegmentTexA=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexA"),this.uFillSegmentTexB=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexB"),this.uFillPathMetaTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexSize"),this.uFillSegmentTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexSize"),this.uFillViewport=this.mustGetUniformLocation(this.fillProgram,"uViewport"),this.uFillCameraCenter=this.mustGetUniformLocation(this.fillProgram,"uCameraCenter"),this.uFillZoom=this.mustGetUniformLocation(this.fillProgram,"uZoom"),this.uFillAAScreenPx=this.mustGetUniformLocation(this.fillProgram,"uFillAAScreenPx"),this.uFillVectorOverride=this.mustGetUniformLocation(this.fillProgram,"uVectorOverride"),this.uTextInstanceTexA=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexA"),this.uTextInstanceTexB=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexB"),this.uTextInstanceTexC=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexC"),this.uTextGlyphMetaTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexA"),this.uTextGlyphMetaTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexB"),this.uTextGlyphRasterMetaTex=this.mustGetUniformLocation(this.textProgram,"uTextGlyphRasterMetaTex"),this.uTextGlyphSegmentTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexA"),this.uTextGlyphSegmentTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexB"),this.uTextInstanceTexSize=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexSize"),this.uTextGlyphMetaTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexSize"),this.uTextGlyphSegmentTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexSize"),this.uTextViewport=this.mustGetUniformLocation(this.textProgram,"uViewport"),this.uTextCameraCenter=this.mustGetUniformLocation(this.textProgram,"uCameraCenter"),this.uTextZoom=this.mustGetUniformLocation(this.textProgram,"uZoom"),this.uTextAAScreenPx=this.mustGetUniformLocation(this.textProgram,"uTextAAScreenPx"),this.uTextCurveEnabled=this.mustGetUniformLocation(this.textProgram,"uTextCurveEnabled"),this.uTextRasterAtlasTex=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasTex"),this.uTextRasterAtlasSize=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasSize"),this.uTextVectorOnly=this.mustGetUniformLocation(this.textProgram,"uTextVectorOnly"),this.uTextVectorOverride=this.mustGetUniformLocation(this.textProgram,"uVectorOverride"),this.uCacheTex=this.mustGetUniformLocation(this.blitProgram,"uCacheTex"),this.uViewportPx=this.mustGetUniformLocation(this.blitProgram,"uViewportPx"),this.uCacheSizePx=this.mustGetUniformLocation(this.blitProgram,"uCacheSizePx"),this.uOffsetPx=this.mustGetUniformLocation(this.blitProgram,"uOffsetPx"),this.uSampleScale=this.mustGetUniformLocation(this.blitProgram,"uSampleScale"),this.uVectorLayerTex=this.mustGetUniformLocation(this.vectorCompositeProgram,"uVectorLayerTex"),this.uVectorLayerViewportPx=this.mustGetUniformLocation(this.vectorCompositeProgram,"uViewportPx"),this.uRasterTex=this.mustGetUniformLocation(this.rasterProgram,"uRasterTex"),this.uRasterTexSize=this.mustGetUniformLocation(this.rasterProgram,"uRasterTexSize"),this.uRasterMatrixABCD=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixABCD"),this.uRasterMatrixEF=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixEF"),this.uRasterViewport=this.mustGetUniformLocation(this.rasterProgram,"uViewport"),this.uRasterCameraCenter=this.mustGetUniformLocation(this.rasterProgram,"uCameraCenter"),this.uRasterZoom=this.mustGetUniformLocation(this.rasterProgram,"uZoom"),this.initializeGeometry(),this.initializeState(),this.uploadPageBackgroundTexture()}setFrameListener(e){this.frameListener=e}setPanOptimizationEnabled(e){const t=!!e;this.panOptimizationEnabled!==t&&(this.panOptimizationEnabled=t,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(e){const t=!!e;this.strokeCurveEnabled!==t&&(this.strokeCurveEnabled=t,this.requestFrame())}setTextVectorOnly(e){const t=!!e;this.textVectorOnly!==t&&(this.textVectorOnly=t,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(e,t,a,s){const n=B(e,0,1),r=B(t,0,1),o=B(a,0,1),l=B(s,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-n)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[n,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(e,t,a,s){const n=B(e,0,1),r=B(t,0,1),o=B(a,0,1),l=B(s,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-n)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[n,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const e=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&e-this.lastPanVelocityUpdateTimeMs<=yr?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=at?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/Fe,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/Fe,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const e=window.devicePixelRatio||1,t=Math.max(1,Math.round(this.canvas.clientWidth*e)),a=Math.max(1,Math.round(this.canvas.clientHeight*e));this.canvas.width===t&&this.canvas.height===a||(this.canvas.width=t,this.canvas.height=a,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(e){this.scene=e,this.segmentCount=e.segmentCount,this.fillPathCount=e.fillPathCount,this.textInstanceCount=e.textInstanceCount,this.pageRects=Pr(e),this.buildSegmentBounds(e),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?Ct(e):null,this.uploadRasterLayers(e);const t=this.uploadFillPaths(e),a=this.uploadSegments(e),s=this.uploadTextData(e);this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:t.pathMetaTextureWidth,fillPathTextureHeight:t.pathMetaTextureHeight,fillSegmentTextureWidth:t.segmentTextureWidth,fillSegmentTextureHeight:t.segmentTextureHeight,textureWidth:a.textureWidth,textureHeight:a.textureHeight,maxTextureSize:a.maxTextureSize,textInstanceTextureWidth:s.instanceTextureWidth,textInstanceTextureHeight:s.instanceTextureHeight,textGlyphTextureWidth:s.glyphMetaTextureWidth,textGlyphTextureHeight:s.glyphMetaTextureHeight,textSegmentTextureWidth:s.glyphSegmentTextureWidth,textSegmentTextureHeight:s.glyphSegmentTextureHeight},this.allSegmentIds=new Float32Array(this.segmentCount);for(let n=0;n<this.segmentCount;n+=1)this.allSegmentIds[n]=n;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allSegmentIds,this.gl.STATIC_DRAW),this.allFillPathIds=new Float32Array(this.fillPathCount);for(let n=0;n<this.fillPathCount;n+=1)this.allFillPathIds[n]=n;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allFillPathIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allFillPathIds,this.gl.STATIC_DRAW),this.allTextInstanceIds=new Float32Array(this.textInstanceCount);for(let n=0;n<this.textInstanceCount;n+=1)this.allTextInstanceIds[n]=n;return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allTextInstanceIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allTextInstanceIds,this.gl.STATIC_DRAW),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Float32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(e){const t=Number(e.cameraCenterX),a=Number(e.cameraCenterY),s=Number(e.zoom);if(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(s))return;this.cameraCenterX=t,this.cameraCenterY=a;const n=B(s,this.minZoom,this.maxZoom);this.zoom=n,this.targetCameraCenterX=t,this.targetCameraCenterY=a,this.targetZoom=n,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(e,t=64){const a=Math.max(e.maxX-e.minX,1e-4),s=Math.max(e.maxY-e.minY,1e-4),n=Math.max(1,this.canvas.width-t*2),r=Math.max(1,this.canvas.height-t*2),o=B(Math.min(n/a,r/s),this.minZoom,this.maxZoom),l=(e.minX+e.maxX)*.5,c=(e.minY+e.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources();for(const e of this.rasterLayers)this.gl.deleteTexture(e.texture);this.rasterLayers=[]}panByPixels(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=window.devicePixelRatio||1,s=-(e*a)/this.zoom,n=t*a/this.zoom;this.cameraCenterX+=s,this.cameraCenterY+=n,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(e,t,a){const s=B(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const n=this.clientToWorld(e,t),r=B(this.targetZoom*s,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=e,this.zoomAnchorClientY=t,this.zoomAnchorWorldX=n.x,this.zoomAnchorWorldY=n.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(e=>{this.rafHandle=0,this.render(e)}))}render(e=performance.now()){const t=this.updateCameraWithDamping(e);this.updatePanReleaseVelocitySample(e);const a=this.gl;if(!this.scene||this.fillPathCount===0&&this.segmentCount===0&&this.textInstanceCount===0&&this.rasterLayers.length===0&&this.pageRects.length===0){a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),a.clearColor(he,me,de,1),a.clear(a.COLOR_BUFFER_BIT),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),t&&this.requestFrame();return}this.shouldUsePanCache(t)?this.renderWithPanCache():this.renderDirectToScreen(),t&&this.requestFrame()}shouldUsePanCache(e){return!this.panOptimizationEnabled||this.segmentCount<tt?!1:this.isPanInteracting?!0:e}renderDirectToScreen(){const e=this.gl;let t=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=tt&&(t=!1),t&&this.vectorMinifyWarmupPending&&(t=!1,this.vectorMinifyWarmupPending=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.clearColor(he,me,de,1),e.clear(e.COLOR_BUFFER_BIT),this.needsVisibleSetUpdate){if(t){const s=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,s)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}this.drawRasterLayer(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);let a=0;t?(a=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),this.compositeVectorMinifyLayer()):(this.drawFilledPaths(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),a=this.drawVisibleSegments(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawTextInstances(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY)),this.frameListener?.({renderedSegments:a,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=Cr}computeVectorMinifyZoom(e,t){const a=Math.min(e/Math.max(1,this.canvas.width),t/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}ensureVectorMinifyResources(){const e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),a=t/Math.max(1,this.canvas.width),s=t/Math.max(1,this.canvas.height),n=Math.max(1,Math.min(Tr,a,s)),r=Math.max(this.canvas.width,Math.floor(this.canvas.width*n)),o=Math.max(this.canvas.height,Math.floor(this.canvas.height*n));if(r<this.canvas.width||o<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyFramebuffer&&this.vectorMinifyWidth===r&&this.vectorMinifyHeight===o)return!0;this.destroyVectorMinifyResources();const l=e.createTexture();if(!l)return!1;e.bindTexture(e.TEXTURE_2D,l),Ar(e),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA8,r,o);const c=e.createFramebuffer();if(!c)return e.deleteTexture(l),!1;e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0);const h=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.bindFramebuffer(e.FRAMEBUFFER,null),h!==e.FRAMEBUFFER_COMPLETE?(e.deleteFramebuffer(c),e.deleteTexture(l),!1):(this.vectorMinifyTexture=l,this.vectorMinifyFramebuffer=c,this.vectorMinifyWidth=r,this.vectorMinifyHeight=o,this.vectorMinifyWarmupPending=!0,!0)}renderVectorLayerIntoMinifyTarget(e,t,a,s){if(!this.vectorMinifyFramebuffer||!this.vectorMinifyTexture)return 0;const n=this.gl,r=this.computeVectorMinifyZoom(e,t);n.bindFramebuffer(n.FRAMEBUFFER,this.vectorMinifyFramebuffer),n.viewport(0,0,e,t),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA),this.drawFilledPaths(e,t,a,s,r);const o=this.drawVisibleSegments(e,t,a,s,r);return this.drawTextInstances(e,t,a,s,r),n.bindTexture(n.TEXTURE_2D,this.vectorMinifyTexture),n.bindFramebuffer(n.FRAMEBUFFER,null),o}compositeVectorMinifyLayer(){if(!this.vectorMinifyTexture)return;const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.useProgram(this.vectorCompositeProgram),e.bindVertexArray(this.blitVao),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.vectorMinifyTexture),e.uniform1i(this.uVectorLayerTex,0),e.uniform2f(this.uVectorLayerViewportPx,this.canvas.width,this.canvas.height),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let e=this.panCacheZoom/Math.max(this.zoom,1e-6),t=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const s=this.panCacheWidth*.5-2,n=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(e),o=this.canvas.height*.5*Math.abs(e),l=s-r,c=n-o,h=this.zoom/Math.max(this.panCacheZoom,1e-6),x=h<gr||h>pr,m=Math.abs(this.targetZoom-this.zoom)<=ue&&Math.abs(this.panCacheZoom-this.zoom)>fr,d=l<0||c<0||Math.abs(t)>l||Math.abs(a)>c;if(!this.panCacheValid||x||d||m){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gl;g.bindFramebuffer(g.FRAMEBUFFER,this.panCacheFramebuffer),g.viewport(0,0,this.panCacheWidth,this.panCacheHeight),g.clearColor(he,me,de,1),g.clear(g.COLOR_BUFFER_BIT),this.drawRasterLayer(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawFilledPaths(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheRenderedSegments=this.drawVisibleSegments(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawTextInstances(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,e=1,t=0,a=0}this.blitPanCache(t,a,e),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawRasterLayer(e,t,a,s){if(this.rasterLayers.length===0&&this.pageRects.length===0)return;const n=this.gl;if(n.useProgram(this.rasterProgram),n.bindVertexArray(this.blitVao),n.uniform2f(this.uRasterViewport,e,t),n.uniform2f(this.uRasterCameraCenter,a,s),n.uniform1f(this.uRasterZoom,this.zoom),this.pageRects.length>0){n.activeTexture(n.TEXTURE12),n.bindTexture(n.TEXTURE_2D,this.pageBackgroundTexture),n.uniform1i(this.uRasterTex,12),n.uniform2f(this.uRasterTexSize,1,1);for(let r=0;r<this.pageRects.length;r+=4){const o=this.pageRects[r],l=this.pageRects[r+1],c=this.pageRects[r+2],h=this.pageRects[r+3],x=Math.max(c-o,1e-6),p=Math.max(h-l,1e-6);n.uniform4f(this.uRasterMatrixABCD,x,0,0,p),n.uniform2f(this.uRasterMatrixEF,o,l),n.drawArrays(n.TRIANGLE_STRIP,0,4)}}if(this.rasterLayers.length!==0){n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);for(const r of this.rasterLayers)n.activeTexture(n.TEXTURE12),n.bindTexture(n.TEXTURE_2D,r.texture),n.uniform1i(this.uRasterTex,12),n.uniform2f(this.uRasterTexSize,r.width,r.height),n.uniform4f(this.uRasterMatrixABCD,r.matrix[0],r.matrix[1],r.matrix[2],r.matrix[3]),n.uniform2f(this.uRasterMatrixEF,r.matrix[4],r.matrix[5]),n.drawArrays(n.TRIANGLE_STRIP,0,4);n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}drawFilledPaths(e,t,a,s,n=this.zoom){if(!this.scene||this.fillPathCount<=0)return 0;const r=this.gl;return r.useProgram(this.fillProgram),r.bindVertexArray(this.fillVao),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureC),r.activeTexture(r.TEXTURE10),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureA),r.activeTexture(r.TEXTURE11),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureB),r.uniform1i(this.uFillPathMetaTexA,7),r.uniform1i(this.uFillPathMetaTexB,8),r.uniform1i(this.uFillPathMetaTexC,9),r.uniform1i(this.uFillSegmentTexA,10),r.uniform1i(this.uFillSegmentTexB,11),r.uniform2i(this.uFillPathMetaTexSize,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight),r.uniform2i(this.uFillSegmentTexSize,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight),r.uniform2f(this.uFillViewport,e,t),r.uniform2f(this.uFillCameraCenter,a,s),r.uniform1f(this.uFillZoom,n),r.uniform1f(this.uFillAAScreenPx,1),r.uniform4f(this.uFillVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.fillPathCount),this.fillPathCount}drawVisibleSegments(e,t,a,s,n=this.zoom){const r=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(r===0)return 0;const o=this.gl;o.useProgram(this.segmentProgram),o.bindVertexArray(this.segmentVao);const l=this.usingAllSegments?this.allSegmentIdBuffer:this.visibleSegmentIdBuffer;return o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(1),o.vertexAttribPointer(1,1,o.FLOAT,!1,4,0),o.vertexAttribDivisor(1,1),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this.segmentTextureA),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.segmentTextureB),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.segmentTextureC),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.segmentTextureD),o.uniform1i(this.uSegmentTexA,0),o.uniform1i(this.uSegmentTexB,1),o.uniform1i(this.uSegmentStyleTex,2),o.uniform1i(this.uSegmentBoundsTex,3),o.uniform2i(this.uSegmentTexSize,this.segmentTextureWidth,this.segmentTextureHeight),o.uniform2f(this.uViewport,e,t),o.uniform2f(this.uCameraCenter,a,s),o.uniform1f(this.uZoom,n),o.uniform1f(this.uAAScreenPx,1),o.uniform1f(this.uStrokeCurveEnabled,this.strokeCurveEnabled?1:0),o.uniform4f(this.uStrokeVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,r),r}drawTextInstances(e,t,a,s,n=this.zoom){if(!this.scene||this.textInstanceCount<=0)return 0;const r=this.gl;return r.useProgram(this.textProgram),r.bindVertexArray(this.textVao),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureA),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureB),r.activeTexture(r.TEXTURE4),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureC),r.activeTexture(r.TEXTURE5),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureA),r.activeTexture(r.TEXTURE6),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureB),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.textGlyphRasterMetaTexture),r.activeTexture(r.TEXTURE13),r.bindTexture(r.TEXTURE_2D,this.textRasterAtlasTexture),r.uniform1i(this.uTextInstanceTexA,2),r.uniform1i(this.uTextInstanceTexB,3),r.uniform1i(this.uTextInstanceTexC,4),r.uniform1i(this.uTextGlyphMetaTexA,5),r.uniform1i(this.uTextGlyphMetaTexB,6),r.uniform1i(this.uTextGlyphSegmentTexA,7),r.uniform1i(this.uTextGlyphSegmentTexB,8),r.uniform1i(this.uTextGlyphRasterMetaTex,9),r.uniform1i(this.uTextRasterAtlasTex,13),r.uniform2i(this.uTextInstanceTexSize,this.textInstanceTextureWidth,this.textInstanceTextureHeight),r.uniform2i(this.uTextGlyphMetaTexSize,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight),r.uniform2i(this.uTextGlyphSegmentTexSize,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight),r.uniform2f(this.uTextRasterAtlasSize,this.textRasterAtlasWidth,this.textRasterAtlasHeight),r.uniform2f(this.uTextViewport,e,t),r.uniform2f(this.uTextCameraCenter,a,s),r.uniform1f(this.uTextZoom,n),r.uniform1f(this.uTextAAScreenPx,1.25),r.uniform1f(this.uTextCurveEnabled,this.strokeCurveEnabled?1:0),r.uniform1f(this.uTextVectorOnly,this.textVectorOnly?1:0),r.uniform4f(this.uTextVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.textInstanceCount),this.textInstanceCount}blitPanCache(e,t,a){if(!this.panCacheTexture)return;const s=this.gl;s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,this.canvas.width,this.canvas.height),s.clearColor(he,me,de,1),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(this.blitProgram),s.bindVertexArray(this.blitVao),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.panCacheTexture),s.uniform1i(this.uCacheTex,0),s.uniform2f(this.uViewportPx,this.canvas.width,this.canvas.height),s.uniform2f(this.uCacheSizePx,this.panCacheWidth,this.panCacheHeight),s.uniform2f(this.uOffsetPx,e,t),s.uniform1f(this.uSampleScale,a),s.disable(s.BLEND),s.drawArrays(s.TRIANGLE_STRIP,0,4),s.enable(s.BLEND)}ensurePanCacheResources(){const e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(t,Math.max(this.canvas.width+rt*2,Math.ceil(this.canvas.width*it))),s=Math.min(t,Math.max(this.canvas.height+rt*2,Math.ceil(this.canvas.height*it)));if(a<this.canvas.width||s<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheFramebuffer&&this.panCacheWidth===a&&this.panCacheHeight===s)return!0;this.destroyPanCacheResources();const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),br(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,a,s,0,e.RGBA,e.UNSIGNED_BYTE,null);const r=e.createFramebuffer();if(!r)return e.deleteTexture(n),!1;e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const o=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.bindFramebuffer(e.FRAMEBUFFER,null),o!==e.FRAMEBUFFER_COMPLETE?(e.deleteFramebuffer(r),e.deleteTexture(n),!1):(this.panCacheTexture=n,this.panCacheFramebuffer=r,this.panCacheWidth=a,this.panCacheHeight=s,this.panCacheValid=!1,!0)}destroyPanCacheResources(){this.panCacheFramebuffer&&(this.gl.deleteFramebuffer(this.panCacheFramebuffer),this.panCacheFramebuffer=null),this.panCacheTexture&&(this.gl.deleteTexture(this.panCacheTexture),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1}destroyVectorMinifyResources(){this.vectorMinifyFramebuffer&&(this.gl.deleteFramebuffer(this.vectorMinifyFramebuffer),this.vectorMinifyFramebuffer=null),this.vectorMinifyTexture&&(this.gl.deleteTexture(this.vectorMinifyTexture),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorMinifyWarmupPending=!1}updateVisibleSet(e=this.cameraCenterX,t=this.cameraCenterY,a=this.canvas.width,s=this.canvas.height,n=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(n,1e-6),l=a/(2*o),c=s/(2*o),h=Math.max(16/o,this.scene.maxHalfWidth*2),x=e-l-h,p=e+l+h,m=t-c-h,d=t+c+h,C=xe(Math.floor((x-r.minX)/r.cellWidth),r.gridWidth),g=xe(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),v=xe(Math.floor((m-r.minY)/r.cellHeight),r.gridHeight),f=xe(Math.floor((d-r.minY)/r.cellHeight),r.gridHeight);this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let u=0;for(let S=v;S<=f;S+=1){let y=S*r.gridWidth+C;for(let L=C;L<=g;L+=1){const I=r.offsets[y],_=r.counts[y];for(let w=0;w<_;w+=1){const b=r.indices[I+w];this.segmentMarks[b]!==this.markToken&&(this.segmentMarks[b]=this.markToken,!(this.segmentMaxX[b]<x||this.segmentMinX[b]>p||this.segmentMaxY[b]<m||this.segmentMinY[b]>d)&&(this.visibleSegmentIds[u]=b,u+=1))}y+=1}}this.visibleSegmentCount=u;const T=this.visibleSegmentIds.subarray(0,u);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.visibleSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,T,this.gl.DYNAMIC_DRAW)}uploadRasterLayers(e){const t=this.gl;for(const a of this.rasterLayers)t.deleteTexture(a.texture);this.rasterLayers=[];for(const a of this.getSceneRasterLayers(e)){const s=t.createTexture();if(!s)continue;t.bindTexture(t.TEXTURE_2D,s),st(t);const n=a.data.subarray(0,a.width*a.height*4),r=Mr(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,a.width,a.height,0,t.RGBA,t.UNSIGNED_BYTE,r),t.generateMipmap(t.TEXTURE_2D);const o=new Float32Array(6);a.matrix.length>=6?(o[0]=a.matrix[0],o[1]=a.matrix[1],o[2]=a.matrix[2],o[3]=a.matrix[3],o[4]=a.matrix[4],o[5]=a.matrix[5]):(o[0]=1,o[3]=1),this.rasterLayers.push({texture:s,matrix:o,width:a.width,height:a.height})}}getSceneRasterLayers(e){const t=[];if(Array.isArray(e.rasterLayers))for(const n of e.rasterLayers){const r=Math.max(0,Math.trunc(n?.width??0)),o=Math.max(0,Math.trunc(n?.height??0));r<=0||o<=0||!(n.data instanceof Uint8Array)||n.data.length<r*o*4||t.push({width:r,height:o,data:n.data,matrix:n.matrix instanceof Float32Array?n.matrix:new Float32Array(n.matrix)})}if(t.length>0)return t;const a=Math.max(0,Math.trunc(e.rasterLayerWidth)),s=Math.max(0,Math.trunc(e.rasterLayerHeight));return a<=0||s<=0||e.rasterLayerData.length<a*s*4||t.push({width:a,height:s,data:e.rasterLayerData,matrix:e.rasterLayerMatrix}),t}uploadFillPaths(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),s=re(e.fillPathCount,a),n=re(e.fillSegmentCount,a);this.fillPathMetaTextureWidth=s.width,this.fillPathMetaTextureHeight=s.height,this.fillSegmentTextureWidth=n.width,this.fillSegmentTextureHeight=n.height;const r=s.width*s.height,o=n.width*n.height,l=new Float32Array(r*4);l.set(e.fillPathMetaA);const c=new Float32Array(r*4);c.set(e.fillPathMetaB);const h=new Float32Array(r*4);h.set(e.fillPathMetaC);const x=new Float32Array(o*4);x.set(e.fillSegmentsA);const p=new Float32Array(o*4);return p.set(e.fillSegmentsB),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,l),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,c),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,h),t.bindTexture(t.TEXTURE_2D,this.fillSegmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,t.RGBA,t.FLOAT,x),t.bindTexture(t.TEXTURE_2D,this.fillSegmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,t.RGBA,t.FLOAT,p),{pathMetaTextureWidth:this.fillPathMetaTextureWidth,pathMetaTextureHeight:this.fillPathMetaTextureHeight,segmentTextureWidth:this.fillSegmentTextureWidth,segmentTextureHeight:this.fillSegmentTextureHeight}}uploadSegments(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),s=Math.ceil(Math.sqrt(e.segmentCount));if(this.segmentTextureWidth=B(s,1,a),this.segmentTextureHeight=Math.max(1,Math.ceil(e.segmentCount/this.segmentTextureWidth)),this.segmentTextureHeight>a)throw new Error("Segment texture exceeds GPU limits for this browser/GPU.");const n=this.segmentTextureWidth*this.segmentTextureHeight,r=new Float32Array(n*4);r.set(e.endpoints);const o=new Float32Array(n*4);o.set(e.primitiveMeta);const l=new Float32Array(n*4);l.set(e.styles);const c=new Float32Array(n*4);return c.set(e.primitiveBounds),t.bindTexture(t.TEXTURE_2D,this.segmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,r),t.bindTexture(t.TEXTURE_2D,this.segmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,o),t.bindTexture(t.TEXTURE_2D,this.segmentTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,l),t.bindTexture(t.TEXTURE_2D,this.segmentTextureD),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,c),{textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:a}}uploadTextData(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),s=re(e.textInstanceCount,a),n=re(e.textGlyphCount,a),r=re(e.textGlyphSegmentCount,a);this.textInstanceTextureWidth=s.width,this.textInstanceTextureHeight=s.height,this.textGlyphMetaTextureWidth=n.width,this.textGlyphMetaTextureHeight=n.height,this.textGlyphSegmentTextureWidth=r.width,this.textGlyphSegmentTextureHeight=r.height;const o=s.width*s.height,l=n.width*n.height,c=r.width*r.height,h=new Float32Array(o*4);h.set(e.textInstanceA);const x=new Float32Array(o*4);x.set(e.textInstanceB);const p=new Float32Array(o*4);p.set(e.textInstanceC);const m=new Float32Array(l*4);m.set(e.textGlyphMetaA);const d=new Float32Array(l*4);d.set(e.textGlyphMetaB);const C=new Float32Array(l*4),g=Tt(e,a);g?(C.set(g.glyphUvRects),this.textRasterAtlasWidth=g.width,this.textRasterAtlasHeight=g.height):(this.textRasterAtlasWidth=1,this.textRasterAtlasHeight=1);const v=new Float32Array(c*4);v.set(e.textGlyphSegmentsA);const f=new Float32Array(c*4);if(f.set(e.textGlyphSegmentsB),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,h),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,x),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,p),t.bindTexture(t.TEXTURE_2D,this.textGlyphMetaTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,m),t.bindTexture(t.TEXTURE_2D,this.textGlyphMetaTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,d),t.bindTexture(t.TEXTURE_2D,this.textGlyphRasterMetaTexture),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,C),t.bindTexture(t.TEXTURE_2D,this.textGlyphSegmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,t.RGBA,t.FLOAT,v),t.bindTexture(t.TEXTURE_2D,this.textGlyphSegmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,t.RGBA,t.FLOAT,f),t.bindTexture(t.TEXTURE_2D,this.textRasterAtlasTexture),st(t),g)t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.textRasterAtlasWidth,this.textRasterAtlasHeight,0,t.RGBA,t.UNSIGNED_BYTE,g.rgba);else{const u=new Uint8Array([0,0,0,0]);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,u)}return t.generateMipmap(t.TEXTURE_2D),{instanceTextureWidth:this.textInstanceTextureWidth,instanceTextureHeight:this.textInstanceTextureHeight,glyphMetaTextureWidth:this.textGlyphMetaTextureWidth,glyphMetaTextureHeight:this.textGlyphMetaTextureHeight,glyphSegmentTextureWidth:this.textGlyphSegmentTextureWidth,glyphSegmentTextureHeight:this.textGlyphSegmentTextureHeight}}buildSegmentBounds(e){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let t=0;t<this.segmentCount;t+=1){const a=t*4,s=t*4,n=e.styles[s]+.35;this.segmentMinX[t]=e.primitiveBounds[a]-n,this.segmentMinY[t]=e.primitiveBounds[a+1]-n,this.segmentMaxX[t]=e.primitiveBounds[a+2]+n,this.segmentMaxY[t]=e.primitiveBounds[a+3]+n}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=xr}initializeGeometry(){const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer);const t=new Float32Array([-1,-1,1,-1,-1,1,1,1]);e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindVertexArray(this.segmentVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allSegmentIdBuffer),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(this.fillVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allFillPathIdBuffer),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(3,1),e.bindVertexArray(this.textVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allTextInstanceIdBuffer),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(2,1),e.bindVertexArray(this.blitVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindVertexArray(null)}initializeState(){const e=this.gl;e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.enable(e.BLEND),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)}uploadPageBackgroundTexture(){const e=this.gl,t=this.pageBackgroundColor,a=new Uint8Array([Math.round(t[0]*255),Math.round(t[1]*255),Math.round(t[2]*255),Math.round(t[3]*255)]);e.bindTexture(e.TEXTURE_2D,this.pageBackgroundTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a),e.bindTexture(e.TEXTURE_2D,null)}clientToWorld(e,t){return this.clientToWorldAt(e,t,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(e,t,a,s,n){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:(l-this.canvas.width*.5)/n+a,y:(c-this.canvas.height*.5)/n+s}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(e){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const t=e-this.lastPanFrameTimeMs;if(t>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,s=this.cameraCenterY-this.lastPanFrameCameraY;let n=a*1e3/t,r=s*1e3/t;const o=Math.hypot(n,r);if(Number.isFinite(o)&&o>=at){if(o>nt){const l=nt/o;n*=l,r*=l}this.panVelocityWorldX=n,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=e}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=e}updateCameraWithDamping(e){let t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>j||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>j,a=Math.abs(this.targetZoom-this.zoom)>ue;if(!t&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=e,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=e-16);const s=B(e-this.lastCameraAnimationTimeMs,0,vr);this.lastCameraAnimationTimeMs=e;const n=s/1e3,r=1-Math.exp(-Fe*n),o=1-Math.exp(-24*n);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=ue&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),t=!1}else t&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=j&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=j&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>j||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>j,a=Math.abs(this.targetZoom-this.zoom)>ue,t||a}computeCameraCenterForAnchor(e,t,a,s,n){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:a-(l-this.canvas.width*.5)/n,y:s-(c-this.canvas.height*.5)/n}}createProgram(e,t){const a=this.gl,s=this.compileShader(a.VERTEX_SHADER,e),n=this.compileShader(a.FRAGMENT_SHADER,t),r=a.createProgram();if(!r)throw new Error("Unable to create WebGL program.");if(a.attachShader(r,s),a.attachShader(r,n),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS)){const l=a.getProgramInfoLog(r)||"Unknown linker error.";throw a.deleteProgram(r),new Error(`Program link failed: ${l}`)}return a.deleteShader(s),a.deleteShader(n),r}compileShader(e,t){const a=this.gl.createShader(e);if(!a)throw new Error("Unable to create shader.");if(this.gl.shaderSource(a,t),this.gl.compileShader(a),!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)){const n=this.gl.getShaderInfoLog(a)||"Unknown shader compiler error.";throw this.gl.deleteShader(a),new Error(`Shader compilation failed: ${n}`)}return a}createVertexArray(){const e=this.gl.createVertexArray();if(!e)throw new Error("Unable to create VAO.");return e}mustCreateBuffer(){const e=this.gl.createBuffer();if(!e)throw new Error("Unable to create WebGL buffer.");return e}mustCreateTexture(){const e=this.gl.createTexture();if(!e)throw new Error("Unable to create WebGL texture.");return e}mustGetUniformLocation(e,t){const a=this.gl.getUniformLocation(e,t);if(!a)throw new Error(`Missing uniform: ${t}`);return a}}function E(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function br(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Ar(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function st(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR_MIPMAP_LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Mr(i){const e=new Uint8Array(i.length);for(let t=0;t+3<i.length;t+=4){const a=i[t+3];if(a<=0){e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;continue}if(a>=255){e[t]=i[t],e[t+1]=i[t+1],e[t+2]=i[t+2],e[t+3]=255;continue}const s=a/255;e[t]=Math.round(i[t]*s),e[t+1]=Math.round(i[t+1]*s),e[t+2]=Math.round(i[t+2]*s),e[t+3]=a}return e}function re(i,e){const t=Math.max(1,i),a=Math.ceil(Math.sqrt(t)),s=B(a,1,e),n=Math.max(1,Math.ceil(t/s));if(n>e)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:s,height:n}}function Pr(i){return i.pageRects instanceof Float32Array&&i.pageRects.length>=4?new Float32Array(i.pageRects):new Float32Array([i.pageBounds.minX,i.pageBounds.minY,i.pageBounds.maxX,i.pageBounds.maxY])}function B(i,e,t){return i<e?e:i>t?t:i}function xe(i,e){return i<0?0:i>=e?e-1:i}const Rr=140,Er=.92,ot=3e5,lt=1.8,ct=96,Ir=1e-5,wr=.75,Br=1.3333333333,Fr=2,Lr=2.25,Le=24,J=1e-4,fe=1e-5,Dr=64,ut=5,ht=2e4,_r=120,ae={r:160/255,g:169/255,b:175/255,a:1},Vr=16,U=64,Gr=12,ge=48,Ur=4,pe=16,Or=8,Te=32,Xr=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

struct SegmentIdBuffer {
  values : array<u32>,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uSegmentTexA : texture_2d<f32>;
@group(0) @binding(2) var uSegmentTexB : texture_2d<f32>;
@group(0) @binding(3) var uSegmentStyleTex : texture_2d<f32>;
@group(0) @binding(4) var uSegmentBoundsTex : texture_2d<f32>;
@group(0) @binding(5) var<storage, read> uSegmentIds : SegmentIdBuffer;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) p0 : vec2f,
  @location(2) @interpolate(flat) p1 : vec2f,
  @location(3) @interpolate(flat) p2 : vec2f,
  @location(4) @interpolate(flat) primitiveType : f32,
  @location(5) @interpolate(flat) halfWidth : f32,
  @location(6) @interpolate(flat) aaWorld : f32,
  @location(7) @interpolate(flat) color : vec3f,
  @location(8) @interpolate(flat) alpha : f32,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : u32, width : u32) -> vec2<i32> {
  return vec2<i32>(i32(index % width), i32(index / width));
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let segmentIndex = uSegmentIds.values[instanceIndex];
  let dims = textureDimensions(uSegmentTexA);
  let coord = coordFromIndex(segmentIndex, dims.x);

  let primitiveA = textureLoad(uSegmentTexA, coord, 0);
  let primitiveB = textureLoad(uSegmentTexB, coord, 0);
  let style = textureLoad(uSegmentStyleTex, coord, 0);
  let primitiveBounds = textureLoad(uSegmentBoundsTex, coord, 0);

  let p0 = primitiveA.xy;
  let p1 = primitiveA.zw;
  let p2 = primitiveB.xy;
  let primitiveType = primitiveB.z;
  let isQuadratic = primitiveType >= 0.5;

  var halfWidth = style.x;
  let color = style.yzw;
  let packedStyle = primitiveB.w;
  let styleFlags = i32(floor(packedStyle / 2.0 + 1e-6));
  let alpha = clamp(packedStyle - f32(styleFlags) * 2.0, 0.0, 1.0);
  let isHairline = (styleFlags & 1) != 0;
  let isRoundCap = (styleFlags & 2) != 0;

  let geometryLength = select(length(p2 - p0), length(p1 - p0) + length(p2 - p1), isQuadratic);

  var out : VsOut;
  if ((geometryLength < 1e-5 && !isRoundCap) || alpha <= 0.001) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.p0 = vec2f(0.0, 0.0);
    out.p1 = vec2f(0.0, 0.0);
    out.p2 = vec2f(0.0, 0.0);
    out.primitiveType = 0.0;
    out.halfWidth = 0.0;
    out.aaWorld = 1.0;
    out.color = color;
    out.alpha = 0.0;
    return out;
  }

  if (isHairline) {
    halfWidth = max(0.5 / max(uCamera.zoom, 1e-4), 1e-5);
  }

  var aaWorld = max(1.0 / max(uCamera.zoom, 1e-4), 0.0001) * uCamera.strokeAAScreenPx;
  if (isHairline) {
    aaWorld = max(0.35 / max(uCamera.zoom, 1e-4), 5e-5);
  }

  let extent = halfWidth + aaWorld;
  let worldMin = primitiveBounds.xy - vec2f(extent, extent);
  let worldMax = primitiveBounds.zw + vec2f(extent, extent);

  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let worldPosition = mix(worldMin, worldMax, corner01);
  let screen = (worldPosition - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = worldPosition;
  out.p0 = p0;
  out.p1 = p1;
  out.p2 = p2;
  out.primitiveType = primitiveType;
  out.halfWidth = halfWidth;
  out.aaWorld = aaWorld;
  out.color = color;
  out.alpha = alpha;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  if (inData.alpha <= 0.001) {
    discard;
  }

  let useCurve = uCamera.strokeCurveEnabled >= 0.5 && inData.primitiveType >= 0.5;
  let distanceToSegment = select(
    distanceToLineSegment(inData.local, inData.p0, inData.p2),
    distanceToQuadraticBezier(inData.local, inData.p0, inData.p1, inData.p2),
    useCurve
  );

  let coverage = 1.0 - smoothstep(inData.halfWidth - inData.aaWorld, inData.halfWidth + inData.aaWorld, distanceToSegment);
  let alpha = coverage * inData.alpha;

  if (alpha <= 0.001) {
    discard;
  }

  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
  return vec4f(color, alpha);
}
`,zr=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uFillPathMetaTexA : texture_2d<f32>;
@group(0) @binding(2) var uFillPathMetaTexB : texture_2d<f32>;
@group(0) @binding(3) var uFillPathMetaTexC : texture_2d<f32>;
@group(0) @binding(4) var uFillSegmentTexA : texture_2d<f32>;
@group(0) @binding(5) var uFillSegmentTexB : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) segmentStart : i32,
  @location(2) @interpolate(flat) segmentCount : i32,
  @location(3) @interpolate(flat) color : vec3f,
  @location(4) @interpolate(flat) alpha : f32,
  @location(5) @interpolate(flat) fillRule : f32,
  @location(6) @interpolate(flat) fillHasCompanionStroke : f32,
};

const MAX_FILL_PATH_PRIMITIVES : i32 = 2048;
const FILL_PRIMITIVE_QUADRATIC : f32 = 1.0;
const QUAD_WINDING_SUBDIVISIONS : i32 = 6;

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : i32, width : i32) -> vec2<i32> {
  return vec2<i32>(index % width, index / width);
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

fn evaluateQuadratic(a : vec2f, b : vec2f, c : vec2f, t : f32) -> vec2f {
  let oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

fn accumulateLineCrossing(a : vec2f, b : vec2f, p : vec2f, winding : ptr<function, i32>, crossings : ptr<function, i32>) {
  let upward = (a.y <= p.y) && (b.y > p.y);
  let downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  let denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  let xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    *crossings = *crossings + 1;
    *winding = *winding + select(-1, 1, upward);
  }
}

fn accumulateQuadraticCrossing(a : vec2f, b : vec2f, c : vec2f, p : vec2f, winding : ptr<function, i32>, crossings : ptr<function, i32>) {
  var prev = a;
  for (var i = 1; i <= QUAD_WINDING_SUBDIVISIONS; i = i + 1) {
    let t = f32(i) / f32(QUAD_WINDING_SUBDIVISIONS);
    let next = evaluateQuadratic(a, b, c, t);
    accumulateLineCrossing(prev, next, p, winding, crossings);
    prev = next;
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let metaDims = textureDimensions(uFillPathMetaTexA);
  let pathIndex = i32(instanceIndex);
  let coord = coordFromIndex(pathIndex, i32(metaDims.x));

  let metaA = textureLoad(uFillPathMetaTexA, coord, 0);
  let metaB = textureLoad(uFillPathMetaTexB, coord, 0);
  let metaC = textureLoad(uFillPathMetaTexC, coord, 0);

  let segmentCount = i32(metaA.y + 0.5);
  let alpha = metaC.w;

  var out : VsOut;
  if (segmentCount <= 0 || alpha <= 0.001) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.segmentStart = 0;
    out.segmentCount = 0;
    out.color = vec3f(0.0, 0.0, 0.0);
    out.alpha = 0.0;
    out.fillRule = 0.0;
    out.fillHasCompanionStroke = 0.0;
    return out;
  }

  let minBounds = metaA.zw;
  let maxBounds = metaB.xy;
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let world = mix(minBounds, maxBounds, corner01);

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = world;
  out.segmentStart = i32(metaA.x + 0.5);
  out.segmentCount = segmentCount;
  out.color = vec3f(metaB.z, metaB.w, metaC.z);
  out.alpha = alpha;
  out.fillRule = metaC.x;
  out.fillHasCompanionStroke = metaC.y;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let pixelToLocalX = length(vec2f(dpdx(inData.local.x), dpdy(inData.local.x)));
  let pixelToLocalY = length(vec2f(dpdx(inData.local.y), dpdy(inData.local.y)));
  let aaWidth = max(max(pixelToLocalX, pixelToLocalY) * uCamera.fillAAScreenPx, 1e-4);

  if (inData.segmentCount <= 0 || inData.alpha <= 0.001) {
    discard;
  }

  let fillSegDims = textureDimensions(uFillSegmentTexA);

  var minDistance = 1e20;
  var winding = 0;
  var crossings = 0;

  for (var i = 0; i < MAX_FILL_PATH_PRIMITIVES; i = i + 1) {
    if (i >= inData.segmentCount) {
      break;
    }

    let segmentIndex = inData.segmentStart + i;
    let coord = coordFromIndex(segmentIndex, i32(fillSegDims.x));

    let primitiveA = textureLoad(uFillSegmentTexA, coord, 0);
    let primitiveB = textureLoad(uFillSegmentTexB, coord, 0);
    let p0 = primitiveA.xy;
    let p1 = primitiveA.zw;
    let p2 = primitiveB.xy;
    let primitiveType = primitiveB.z;

    if (primitiveType >= FILL_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(inData.local, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, inData.local, &winding, &crossings);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(inData.local, p0, p2));
      accumulateLineCrossing(p0, p2, inData.local, &winding, &crossings);
    }
  }

  let insideNonZero = winding != 0;
  let insideEvenOdd = (crossings & 1) == 1;
  let inside = select(insideNonZero, insideEvenOdd, inData.fillRule >= 0.5);
  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));

  if (inData.fillHasCompanionStroke >= 0.5) {
    let alpha = select(0.0, inData.alpha, inside);
    if (alpha <= 0.001) {
      discard;
    }
    return vec4f(color, alpha);
  }

  let signedDistance = select(minDistance, -minDistance, inside);

  let alpha = clamp(0.5 - signedDistance / aaWidth, 0.0, 1.0) * inData.alpha;
  if (alpha <= 0.001) {
    discard;
  }

  return vec4f(color, alpha);
}
`,Wr=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var uTextInstanceTexA : texture_2d<f32>;
@group(0) @binding(2) var uTextInstanceTexB : texture_2d<f32>;
@group(0) @binding(3) var uTextInstanceTexC : texture_2d<f32>;
@group(0) @binding(4) var uTextGlyphMetaTexA : texture_2d<f32>;
@group(0) @binding(5) var uTextGlyphMetaTexB : texture_2d<f32>;
@group(0) @binding(6) var uTextGlyphSegmentTexA : texture_2d<f32>;
@group(0) @binding(7) var uTextGlyphSegmentTexB : texture_2d<f32>;
@group(0) @binding(8) var uTextGlyphRasterMetaTex : texture_2d<f32>;
@group(0) @binding(9) var uTextRasterSampler : sampler;
@group(0) @binding(10) var uTextRasterAtlasTex : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) local : vec2f,
  @location(1) @interpolate(flat) segmentStart : i32,
  @location(2) @interpolate(flat) segmentCount : i32,
  @location(3) @interpolate(flat) color : vec3f,
  @location(4) @interpolate(flat) colorAlpha : f32,
  @location(5) @interpolate(flat) rasterRect : vec4f,
  @location(6) normCoord : vec2f,
};

const MAX_GLYPH_PRIMITIVES : i32 = 256;
const TEXT_PRIMITIVE_QUADRATIC : f32 = 1.0;
const QUAD_WINDING_SUBDIVISIONS : i32 = 6;

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

fn coordFromIndex(index : i32, width : i32) -> vec2<i32> {
  return vec2<i32>(index % width, index / width);
}

fn distanceToLineSegment(p : vec2f, a : vec2f, b : vec2f) -> f32 {
  let ab = b - a;
  let abLenSq = dot(ab, ab);
  if (abLenSq <= 1e-10) {
    return length(p - a);
  }
  let t = clamp(dot(p - a, ab) / abLenSq, 0.0, 1.0);
  return length(p - (a + ab * t));
}

fn distanceToQuadraticBezier(p : vec2f, a : vec2f, b : vec2f, c : vec2f) -> f32 {
  let aa = b - a;
  let bb = a - 2.0 * b + c;
  let cc = aa * 2.0;
  let dd = a - p;

  let bbLenSq = dot(bb, bb);
  if (bbLenSq <= 1e-12) {
    return distanceToLineSegment(p, a, c);
  }

  let inv = 1.0 / bbLenSq;
  let kx = inv * dot(aa, bb);
  let ky = inv * (2.0 * dot(aa, aa) + dot(dd, bb)) / 3.0;
  let kz = inv * dot(dd, aa);

  let pValue = ky - kx * kx;
  let pCube = pValue * pValue * pValue;
  let qValue = kx * (2.0 * kx * kx - 3.0 * ky) + kz;
  let hValue = qValue * qValue + 4.0 * pCube;

  var best = 1e20;

  if (hValue >= 0.0) {
    let hSqrt = sqrt(hValue);
    let roots = (vec2f(hSqrt, -hSqrt) - qValue) * 0.5;
    let uv = sign(roots) * pow(abs(roots), vec2f(1.0 / 3.0));
    let t = clamp(uv.x + uv.y - kx, 0.0, 1.0);
    let delta = dd + (cc + bb * t) * t;
    best = dot(delta, delta);
  } else {
    let z = sqrt(-pValue);
    let acosArg = clamp(qValue / (2.0 * pValue * z), -1.0, 1.0);
    let angle = acos(acosArg) / 3.0;
    let cosine = cos(angle);
    let sine = sin(angle) * 1.732050808;
    let t = clamp(vec3f(cosine + cosine, -sine - cosine, sine - cosine) * z - kx, vec3f(0.0), vec3f(1.0));

    var delta = dd + (cc + bb * t.x) * t.x;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.y) * t.y;
    best = min(best, dot(delta, delta));
    delta = dd + (cc + bb * t.z) * t.z;
    best = min(best, dot(delta, delta));
  }

  return sqrt(max(best, 0.0));
}

fn evaluateQuadratic(a : vec2f, b : vec2f, c : vec2f, t : f32) -> vec2f {
  let oneMinusT = 1.0 - t;
  return oneMinusT * oneMinusT * a + 2.0 * oneMinusT * t * b + t * t * c;
}

fn accumulateLineCrossing(a : vec2f, b : vec2f, p : vec2f, winding : ptr<function, i32>) {
  let upward = (a.y <= p.y) && (b.y > p.y);
  let downward = (a.y > p.y) && (b.y <= p.y);
  if (!upward && !downward) {
    return;
  }

  let denom = b.y - a.y;
  if (abs(denom) <= 1e-6) {
    return;
  }

  let xCross = a.x + (p.y - a.y) * (b.x - a.x) / denom;
  if (xCross > p.x) {
    *winding = *winding + select(-1, 1, upward);
  }
}

fn accumulateQuadraticCrossingRoot(
  a : vec2f,
  b : vec2f,
  c : vec2f,
  p : vec2f,
  ay : f32,
  by : f32,
  t : f32,
  winding : ptr<function, i32>
) {
  let rootEps = 1e-5;
  if (t < -rootEps || t >= 1.0 - rootEps) {
    return;
  }

  let tc = clamp(t, 0.0, 1.0);
  let oneMinusT = 1.0 - tc;
  let xCross = oneMinusT * oneMinusT * a.x + 2.0 * oneMinusT * tc * b.x + tc * tc * c.x;
  if (xCross <= p.x) {
    return;
  }

  let dy = by + 2.0 * ay * tc;
  if (abs(dy) <= 1e-6) {
    return;
  }

  *winding = *winding + select(-1, 1, dy > 0.0);
}

fn accumulateQuadraticCrossing(a : vec2f, b : vec2f, c : vec2f, p : vec2f, winding : ptr<function, i32>) {
  let ay = a.y - 2.0 * b.y + c.y;
  let by = 2.0 * (b.y - a.y);
  let cy = a.y - p.y;

  if (abs(ay) <= 1e-8) {
    if (abs(by) <= 1e-8) {
      return;
    }
    let t = -cy / by;
    accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t, winding);
    return;
  }

  let discriminant = by * by - 4.0 * ay * cy;
  if (discriminant < 0.0) {
    return;
  }

  let sqrtDiscriminant = sqrt(max(discriminant, 0.0));
  let invDen = 0.5 / ay;
  let t0 = (-by - sqrtDiscriminant) * invDen;
  let t1 = (-by + sqrtDiscriminant) * invDen;
  accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t0, winding);
  if (abs(t1 - t0) > 1e-5) {
    accumulateQuadraticCrossingRoot(a, b, c, p, ay, by, t1, winding);
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) instanceIndex : u32) -> VsOut {
  let instanceDims = textureDimensions(uTextInstanceTexA);
  let glyphMetaDims = textureDimensions(uTextGlyphMetaTexA);

  let instanceIndexI = i32(instanceIndex);
  let instanceCoord = coordFromIndex(instanceIndexI, i32(instanceDims.x));

  let instanceA = textureLoad(uTextInstanceTexA, instanceCoord, 0);
  let instanceB = textureLoad(uTextInstanceTexB, instanceCoord, 0);
  let instanceC = textureLoad(uTextInstanceTexC, instanceCoord, 0);

  let glyphIndex = i32(instanceB.z + 0.5);
  let glyphCoord = coordFromIndex(glyphIndex, i32(glyphMetaDims.x));
  let glyphMetaA = textureLoad(uTextGlyphMetaTexA, glyphCoord, 0);
  let glyphMetaB = textureLoad(uTextGlyphMetaTexB, glyphCoord, 0);
  let glyphRasterMeta = textureLoad(uTextGlyphRasterMetaTex, glyphCoord, 0);

  let segmentCount = i32(glyphMetaA.y + 0.5);

  var out : VsOut;
  if (segmentCount <= 0) {
    out.position = vec4f(-2.0, -2.0, 0.0, 1.0);
    out.local = vec2f(0.0, 0.0);
    out.segmentStart = 0;
    out.segmentCount = 0;
    out.color = vec3f(0.0, 0.0, 0.0);
    out.colorAlpha = 0.0;
    out.rasterRect = vec4f(0.0, 0.0, 0.0, 0.0);
    out.normCoord = vec2f(0.0, 0.0);
    return out;
  }

  let minBounds = glyphMetaA.zw;
  let maxBounds = glyphMetaB.xy;
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let local = mix(minBounds, maxBounds, corner01);

  let world = vec2f(
    instanceA.x * local.x + instanceA.z * local.y + instanceB.x,
    instanceA.y * local.x + instanceA.w * local.y + instanceB.y
  );

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  out.position = vec4f(clip, 0.0, 1.0);
  out.local = local;
  out.segmentStart = i32(glyphMetaA.x + 0.5);
  out.segmentCount = segmentCount;
  out.color = instanceC.xyz;
  out.colorAlpha = instanceC.w;
  out.rasterRect = glyphRasterMeta;
  out.normCoord = clamp((local - minBounds) / max(maxBounds - minBounds, vec2f(1e-6, 1e-6)), vec2f(0.0), vec2f(1.0));
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let pixelToLocalX = length(vec2f(dpdx(inData.local.x), dpdy(inData.local.x)));
  let pixelToLocalY = length(vec2f(dpdx(inData.local.y), dpdy(inData.local.y)));
  let localPerPixel = max(pixelToLocalX, pixelToLocalY);
  let baseAAWidth = max(localPerPixel * uCamera.textAAScreenPx, 1e-4);
  let atlasDims = vec2f(textureDimensions(uTextRasterAtlasTex));
  let nc = vec2f(inData.normCoord.x, 1.0 - inData.normCoord.y) * (inData.rasterRect.zw * atlasDims);
  let ncFwidthX = fwidth(nc.x);
  let ncFwidthY = fwidth(nc.y);
  let dncDx = dpdx(nc);
  let dncDy = dpdy(nc);

  if (inData.segmentCount <= 0) {
    discard;
  }

  if (
    uCamera.textVectorOnly < 0.5 &&
    inData.rasterRect.z > 0.0 &&
    inData.rasterRect.w > 0.0 &&
    min(ncFwidthX, ncFwidthY) > 2.0
  ) {
    let uvCenter = vec2f(
      inData.rasterRect.x + inData.normCoord.x * inData.rasterRect.z,
      inData.rasterRect.y + (1.0 - inData.normCoord.y) * inData.rasterRect.w
    );
    let texel = 1.0 / max(atlasDims, vec2f(1.0, 1.0));
    let uvMin = inData.rasterRect.xy + texel * 0.5;
    let uvMax = inData.rasterRect.xy + inData.rasterRect.zw - texel * 0.5;
    let dx = dncDx * 0.33 * texel;
    let dy = dncDy * 0.33 * texel;
    let mipBias = -1.25;
    let lod = max(log2(max(max(ncFwidthX, ncFwidthY), 1e-6)) + mipBias, 0.0);
    let alphaRaster = (1.0 / 3.0) * textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter, uvMin, uvMax), lod).r +
      (1.0 / 6.0) * (
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter - dx - dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter - dx + dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter + dx - dy, uvMin, uvMax), lod).r +
        textureSampleLevel(uTextRasterAtlasTex, uTextRasterSampler, clamp(uvCenter + dx + dy, uvMin, uvMax), lod).r
      );
    let alpha = alphaRaster * inData.colorAlpha;
    if (alpha <= 0.001) {
      discard;
    }
    let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
    return vec4f(color, alpha);
  }

  let glyphSegDims = textureDimensions(uTextGlyphSegmentTexA);

  var minDistance = 1e20;
  var winding = 0;

  for (var i = 0; i < MAX_GLYPH_PRIMITIVES; i = i + 1) {
    if (i >= inData.segmentCount) {
      break;
    }

    let segmentIndex = inData.segmentStart + i;
    let coord = coordFromIndex(segmentIndex, i32(glyphSegDims.x));

    let primitiveA = textureLoad(uTextGlyphSegmentTexA, coord, 0);
    let primitiveB = textureLoad(uTextGlyphSegmentTexB, coord, 0);
    let p0 = primitiveA.xy;
    let p1 = primitiveA.zw;
    let p2 = primitiveB.xy;
    let primitiveType = primitiveB.z;

    if (uCamera.textCurveEnabled >= 0.5 && primitiveType >= TEXT_PRIMITIVE_QUADRATIC) {
      minDistance = min(minDistance, distanceToQuadraticBezier(inData.local, p0, p1, p2));
      accumulateQuadraticCrossing(p0, p1, p2, inData.local, &winding);
    } else {
      minDistance = min(minDistance, distanceToLineSegment(inData.local, p0, p2));
      accumulateLineCrossing(p0, p2, inData.local, &winding);
    }
  }

  let inside = winding != 0;
  let signedDistance = select(minDistance, -minDistance, inside);
  let alphaBase = 1.0 - smoothstep(-baseAAWidth, baseAAWidth, signedDistance);
  let alpha = alphaBase * inData.colorAlpha;
  if (alpha <= 0.001) {
    discard;
  }

  let color = mix(inData.color, uCamera.vectorOverride.xyz, clamp(uCamera.vectorOverride.w, 0.0, 1.0));
  return vec4f(color, alpha);
}
`,kr=`
struct CameraUniforms {
  viewport : vec2f,
  cameraCenter : vec2f,
  zoom : f32,
  strokeAAScreenPx : f32,
  strokeCurveEnabled : f32,
  textAAScreenPx : f32,
  textCurveEnabled : f32,
  fillAAScreenPx : f32,
  textVectorOnly : f32,
  pad0 : f32,
  vectorOverride : vec4f,
};

struct RasterUniforms {
  matrixA : vec4f,
  matrixB : vec4f,
};

@group(0) @binding(0) var<uniform> uCamera : CameraUniforms;
@group(0) @binding(1) var<uniform> uRaster : RasterUniforms;
@group(0) @binding(2) var uRasterSampler : sampler;
@group(0) @binding(3) var uRasterTex : texture_2d<f32>;

struct VsOut {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  let corner01 = cornerFromVertexIndex(vertexIndex) * 0.5 + 0.5;
  let localTopDown = vec2f(corner01.x, 1.0 - corner01.y);

  let a = uRaster.matrixA.x;
  let b = uRaster.matrixA.y;
  let c = uRaster.matrixA.z;
  let d = uRaster.matrixA.w;
  let e = uRaster.matrixB.x;
  let f = uRaster.matrixB.y;

  let world = vec2f(
    a * localTopDown.x + c * localTopDown.y + e,
    b * localTopDown.x + d * localTopDown.y + f
  );

  let screen = (world - uCamera.cameraCenter) * uCamera.zoom + 0.5 * uCamera.viewport;
  let clip = (screen / (0.5 * uCamera.viewport)) - 1.0;

  var out : VsOut;
  out.position = vec4f(clip, 0.0, 1.0);
  out.uv = localTopDown;
  return out;
}

@fragment
fn fsMain(inData : VsOut) -> @location(0) vec4f {
  let color = textureSample(uRasterTex, uRasterSampler, inData.uv);
  if (color.a <= 0.001) {
    discard;
  }
  return color;
}
`,Hr=`
struct BlitUniforms {
  viewportPx : vec2f,
  cacheSizePx : vec2f,
  offsetPx : vec2f,
  sampleScale : f32,
  pad : vec3f,
};

@group(0) @binding(0) var uCacheSampler : sampler;
@group(0) @binding(1) var uCacheTex : texture_2d<f32>;
@group(0) @binding(2) var<uniform> uBlit : BlitUniforms;

struct VsOut {
  @builtin(position) position : vec4f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  var out : VsOut;
  out.position = vec4f(cornerFromVertexIndex(vertexIndex), 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) fragPos : vec4f) -> @location(0) vec4f {
  let scale = max(uBlit.sampleScale, 1e-6);
  let centered = fragPos.xy - 0.5 * uBlit.viewportPx;
  let offsetPx = vec2f(uBlit.offsetPx.x, -uBlit.offsetPx.y);
  let samplePx = centered * scale + 0.5 * uBlit.cacheSizePx + offsetPx;
  let uv = samplePx / uBlit.cacheSizePx;

  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    return vec4f(0.627451, 0.662745, 0.686275, 1.0);
  }

  return textureSampleLevel(uCacheTex, uCacheSampler, uv, 0.0);
}
`,Yr=`
struct VectorCompositeUniforms {
  viewportPx : vec2f,
  pad : vec2f,
};

@group(0) @binding(0) var uVectorSampler : sampler;
@group(0) @binding(1) var uVectorTex : texture_2d<f32>;
@group(0) @binding(2) var<uniform> uComposite : VectorCompositeUniforms;

struct VsOut {
  @builtin(position) position : vec4f,
};

fn cornerFromVertexIndex(vertexIndex : u32) -> vec2f {
  switch (vertexIndex) {
    case 0u: {
      return vec2f(-1.0, -1.0);
    }
    case 1u: {
      return vec2f(1.0, -1.0);
    }
    case 2u: {
      return vec2f(-1.0, 1.0);
    }
    default: {
      return vec2f(1.0, 1.0);
    }
  }
}

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex : u32) -> VsOut {
  var out : VsOut;
  out.position = vec4f(cornerFromVertexIndex(vertexIndex), 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) fragPos : vec4f) -> @location(0) vec4f {
  let viewport = max(uComposite.viewportPx, vec2f(1.0, 1.0));
  let uv = fragPos.xy / viewport;
  return textureSampleLevel(uVectorTex, uVectorSampler, clamp(uv, vec2f(0.0), vec2f(1.0)), 0.0);
}
`;class ke{canvas;gpuDevice;gpuContext;presentationFormat;strokePipeline;fillPipeline;textPipeline;rasterPipeline;blitPipeline;vectorCompositePipeline;cameraUniformBuffer;blitUniformBuffer;vectorCompositeUniformBuffer;panCacheSampler;rasterLayerSampler;vectorCompositeSampler;strokeBindGroupLayout;fillBindGroupLayout;textBindGroupLayout;rasterBindGroupLayout;blitBindGroupLayout;vectorCompositeBindGroupLayout;strokeBindGroupAll=null;strokeBindGroupVisible=null;fillBindGroup=null;textBindGroup=null;blitBindGroup=null;vectorCompositeBindGroup=null;segmentTextureA=null;segmentTextureB=null;segmentTextureC=null;segmentTextureD=null;fillPathMetaTextureA=null;fillPathMetaTextureB=null;fillPathMetaTextureC=null;fillSegmentTextureA=null;fillSegmentTextureB=null;textInstanceTextureA=null;textInstanceTextureB=null;textInstanceTextureC=null;rasterLayerResources=[];pageBackgroundResources=[];textGlyphMetaTextureA=null;textGlyphMetaTextureB=null;textGlyphRasterMetaTexture=null;textGlyphSegmentTextureA=null;textGlyphSegmentTextureB=null;textRasterAtlasTexture=null;pageBackgroundTexture=null;segmentIdBufferAll=null;segmentIdBufferVisible=null;panCacheTexture=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyWidth=0;vectorMinifyHeight=0;scene=null;sceneStats=null;grid=null;frameListener=null;rafHandle=0;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=8192;strokeCurveEnabled=!0;textVectorOnly=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;panOptimizationEnabled=!0;isPanInteracting=!1;hasCameraInteractionSinceSceneLoad=!1;lastInteractionTime=Number.NEGATIVE_INFINITY;needsVisibleSetUpdate=!1;segmentCount=0;fillPathCount=0;textInstanceCount=0;visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;allSegmentIds=new Uint32Array(0);visibleSegmentIds=new Uint32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;constructor(e,t,a,s){this.canvas=e,this.gpuDevice=t,this.gpuContext=a,this.presentationFormat=s,this.configureContext();const n=globalThis.GPUBufferUsage,r=globalThis.GPUShaderStage;this.cameraUniformBuffer=this.gpuDevice.createBuffer({size:U,usage:n.UNIFORM|n.COPY_DST}),this.blitUniformBuffer=this.gpuDevice.createBuffer({size:ge,usage:n.UNIFORM|n.COPY_DST}),this.vectorCompositeUniformBuffer=this.gpuDevice.createBuffer({size:pe,usage:n.UNIFORM|n.COPY_DST}),this.strokeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,buffer:{type:"read-only-storage"}}]}),this.fillBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.textBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:6,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:7,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:10,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.rasterBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:Te}},{binding:2,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.blitBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:ge}}]}),this.vectorCompositeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:pe}}]});const o=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.strokeBindGroupLayout]}),l=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.fillBindGroupLayout]}),c=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.textBindGroupLayout]}),h=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.rasterBindGroupLayout]}),x=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.blitBindGroupLayout]}),p=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.vectorCompositeBindGroupLayout]});this.strokePipeline=this.createPipeline(Xr,"vsMain","fsMain",o),this.fillPipeline=this.createPipeline(zr,"vsMain","fsMain",l),this.textPipeline=this.createPipeline(Wr,"vsMain","fsMain",c),this.rasterPipeline=this.createPipeline(kr,"vsMain","fsMain",h,!0),this.blitPipeline=this.createPipeline(Hr,"vsMain","fsMain",x),this.vectorCompositePipeline=this.createPipeline(Yr,"vsMain","fsMain",p,!0),this.panCacheSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.rasterLayerSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.vectorCompositeSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.pageBackgroundTexture=this.createRgba8Texture(1,1,new Uint8Array([255,255,255,255])),this.ensureSegmentIdBuffers(1)}static async create(e){const t=navigator;if(!t.gpu)throw new Error("WebGPU is not available in this browser.");const a=await t.gpu.requestAdapter();if(!a)throw new Error("Failed to acquire a WebGPU adapter.");const s=await a.requestDevice();typeof s.addEventListener=="function"&&s.addEventListener("uncapturederror",o=>{const l=o?.error?.message||o?.error||o;console.warn("[WebGPU uncaptured error]",l)});const n=e.getContext("webgpu");if(!n)throw new Error("Failed to acquire a WebGPU canvas context.");const r=t.gpu.getPreferredCanvasFormat?.()??"bgra8unorm";return new ke(e,s,n,r)}setFrameListener(e){this.frameListener=e}setPanOptimizationEnabled(e){const t=!!e;this.panOptimizationEnabled!==t&&(this.panOptimizationEnabled=t,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(e){const t=!!e;this.strokeCurveEnabled!==t&&(this.strokeCurveEnabled=t,this.requestFrame())}setTextVectorOnly(e){const t=!!e;this.textVectorOnly!==t&&(this.textVectorOnly=t,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(e,t,a,s){const n=D(e,0,1),r=D(t,0,1),o=D(a,0,1),l=D(s,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-n)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[n,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(e,t,a,s){const n=D(e,0,1),r=D(t,0,1),o=D(a,0,1),l=D(s,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-n)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[n,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const e=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&e-this.lastPanVelocityUpdateTimeMs<=_r?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=ut?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/Le,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/Le,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const e=window.devicePixelRatio||1,t=Math.max(1,Math.round(this.canvas.clientWidth*e)),a=Math.max(1,Math.round(this.canvas.clientHeight*e));this.canvas.width===t&&this.canvas.height===a||(this.canvas.width=t,this.canvas.height=a,this.configureContext(),this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(e){this.scene=e,this.segmentCount=e.segmentCount,this.fillPathCount=e.fillPathCount,this.textInstanceCount=e.textInstanceCount,this.buildSegmentBounds(e),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?Ct(e):null;const t=this.maxTextureSize(),a=ee(e.segmentCount,t),s=ee(e.fillPathCount,t),n=ee(e.fillSegmentCount,t),r=ee(e.textInstanceCount,t),o=ee(e.textGlyphCount,t),l=ee(e.textGlyphSegmentCount,t);this.segmentTextureWidth=a.width,this.segmentTextureHeight=a.height,this.fillPathMetaTextureWidth=s.width,this.fillPathMetaTextureHeight=s.height,this.fillSegmentTextureWidth=n.width,this.fillSegmentTextureHeight=n.height,this.textInstanceTextureWidth=r.width,this.textInstanceTextureHeight=r.height,this.textGlyphMetaTextureWidth=o.width,this.textGlyphMetaTextureHeight=o.height,this.textGlyphSegmentTextureWidth=l.width,this.textGlyphSegmentTextureHeight=l.height,this.destroyDataResources(),this.segmentTextureA=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.endpoints),this.segmentTextureB=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.primitiveMeta),this.segmentTextureC=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.styles),this.segmentTextureD=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.primitiveBounds),this.fillPathMetaTextureA=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaA),this.fillPathMetaTextureB=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaB),this.fillPathMetaTextureC=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaC),this.fillSegmentTextureA=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,e.fillSegmentsA),this.fillSegmentTextureB=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,e.fillSegmentsB),this.textInstanceTextureA=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceA),this.textInstanceTextureB=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceB),this.textInstanceTextureC=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceC),this.textGlyphMetaTextureA=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,e.textGlyphMetaA),this.textGlyphMetaTextureB=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,e.textGlyphMetaB),this.textGlyphSegmentTextureA=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,e.textGlyphSegmentsA),this.textGlyphSegmentTextureB=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,e.textGlyphSegmentsB);const c=new Float32Array(this.textGlyphMetaTextureWidth*this.textGlyphMetaTextureHeight*4),h=Tt(e,t);h&&c.set(h.glyphUvRects),this.textGlyphRasterMetaTexture=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,c),this.textRasterAtlasTexture=h?this.createRgba8Texture(h.width,h.height,h.rgba):this.createRgba8Texture(1,1,new Uint8Array([0,0,0,0])),this.configurePageBackgroundResources(e),this.configureRasterLayers(e),this.allSegmentIds=new Uint32Array(this.segmentCount);for(let x=0;x<this.segmentCount;x+=1)this.allSegmentIds[x]=x;return this.ensureSegmentIdBuffers(Math.max(1,this.segmentCount)),this.segmentCount>0&&(this.gpuDevice.queue.writeBuffer(this.segmentIdBufferAll,0,this.allSegmentIds),this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,this.allSegmentIds)),this.fillBindGroup=this.gpuDevice.createBindGroup({layout:this.fillPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.fillPathMetaTextureA.createView()},{binding:2,resource:this.fillPathMetaTextureB.createView()},{binding:3,resource:this.fillPathMetaTextureC.createView()},{binding:4,resource:this.fillSegmentTextureA.createView()},{binding:5,resource:this.fillSegmentTextureB.createView()}]}),this.textBindGroup=this.gpuDevice.createBindGroup({layout:this.textPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.textInstanceTextureA.createView()},{binding:2,resource:this.textInstanceTextureB.createView()},{binding:3,resource:this.textInstanceTextureC.createView()},{binding:4,resource:this.textGlyphMetaTextureA.createView()},{binding:5,resource:this.textGlyphMetaTextureB.createView()},{binding:6,resource:this.textGlyphSegmentTextureA.createView()},{binding:7,resource:this.textGlyphSegmentTextureB.createView()},{binding:8,resource:this.textGlyphRasterMetaTexture.createView()},{binding:9,resource:this.rasterLayerSampler},{binding:10,resource:this.textRasterAtlasTexture.createView()}]}),this.strokeBindGroupAll=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferAll}}]}),this.strokeBindGroupVisible=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferVisible}}]}),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Uint32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:this.fillPathMetaTextureWidth,fillPathTextureHeight:this.fillPathMetaTextureHeight,fillSegmentTextureWidth:this.fillSegmentTextureWidth,fillSegmentTextureHeight:this.fillSegmentTextureHeight,textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:t,textInstanceTextureWidth:this.textInstanceTextureWidth,textInstanceTextureHeight:this.textInstanceTextureHeight,textGlyphTextureWidth:this.textGlyphMetaTextureWidth,textGlyphTextureHeight:this.textGlyphMetaTextureHeight,textSegmentTextureWidth:this.textGlyphSegmentTextureWidth,textSegmentTextureHeight:this.textGlyphSegmentTextureHeight},this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!1,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(e){const t=Number(e.cameraCenterX),a=Number(e.cameraCenterY),s=Number(e.zoom);if(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(s))return;this.cameraCenterX=t,this.cameraCenterY=a;const n=D(s,this.minZoom,this.maxZoom);this.zoom=n,this.targetCameraCenterX=t,this.targetCameraCenterY=a,this.targetZoom=n,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(e,t=64){const a=Math.max(e.maxX-e.minX,1e-4),s=Math.max(e.maxY-e.minY,1e-4),n=Math.max(1,this.canvas.width-t*2),r=Math.max(1,this.canvas.height-t*2),o=D(Math.min(n/a,r/s),this.minZoom,this.maxZoom),l=(e.minX+e.maxX)*.5,c=(e.minY+e.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}panByPixels(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=window.devicePixelRatio||1,s=-(e*a)/this.zoom,n=t*a/this.zoom;this.cameraCenterX+=s,this.cameraCenterY+=n,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(e,t,a){const s=D(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const n=this.clientToWorld(e,t),r=D(this.targetZoom*s,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=e,this.zoomAnchorClientY=t,this.zoomAnchorWorldX=n.x,this.zoomAnchorWorldY=n.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.destroyDataResources(),this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.cameraUniformBuffer&&this.cameraUniformBuffer.destroy(),this.blitUniformBuffer&&this.blitUniformBuffer.destroy(),this.vectorCompositeUniformBuffer&&this.vectorCompositeUniformBuffer.destroy(),this.pageBackgroundTexture&&(this.pageBackgroundTexture.destroy(),this.pageBackgroundTexture=null)}configureContext(){this.gpuContext.configure({device:this.gpuDevice,format:this.presentationFormat,alphaMode:"opaque"})}createPipeline(e,t,a,s,n=!1){const r=this.gpuDevice.createShaderModule({code:e}),o=n?"one":"src-alpha";return this.gpuDevice.createRenderPipeline({layout:s,vertex:{module:r,entryPoint:t},fragment:{module:r,entryPoint:a,targets:[{format:this.presentationFormat,blend:{color:{srcFactor:o,dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip"}})}maxTextureSize(){const e=Number(this.gpuDevice?.limits?.maxTextureDimension2D);return Number.isFinite(e)&&e>=1?Math.floor(e):8192}ensureSegmentIdBuffers(e){const t=globalThis.GPUBufferUsage,a=Math.max(1,e)*4;this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.segmentIdBufferAll=this.gpuDevice.createBuffer({size:a,usage:t.STORAGE|t.COPY_DST}),this.segmentIdBufferVisible=this.gpuDevice.createBuffer({size:a,usage:t.STORAGE|t.COPY_DST})}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(e=>{this.rafHandle=0,this.render(e)}))}render(e=performance.now()){const t=this.updateCameraWithDamping(e);if(this.updatePanReleaseVelocitySample(e),!this.scene||this.segmentCount===0&&this.fillPathCount===0&&this.textInstanceCount===0&&this.rasterLayerResources.length===0&&this.pageBackgroundResources.length===0){this.clearToScreen(),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),t&&this.requestFrame();return}this.shouldUsePanCache(t)?this.renderWithPanCache():this.renderDirectToScreen(),t&&this.requestFrame()}shouldUsePanCache(e){return!this.panOptimizationEnabled||this.segmentCount<ot?!1:this.isPanInteracting?!0:e}renderDirectToScreen(){let e=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=ot&&(e=!1),this.needsVisibleSetUpdate){if(e){const r=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,r)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}if(e){const r=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),o=this.gpuContext.getCurrentTexture().createView(),l=this.gpuDevice.createCommandEncoder(),c=l.beginRenderPass({colorAttachments:[{view:o,clearValue:ae,loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawRasterContentIntoPass(c),this.drawVectorMinifyCompositeIntoPass(c,this.canvas.width,this.canvas.height),c.end(),this.gpuDevice.queue.submit([l.finish()]),this.frameListener?.({renderedSegments:r,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom});return}const t=this.gpuContext.getCurrentTexture().createView(),a=this.gpuDevice.createCommandEncoder(),s=a.beginRenderPass({colorAttachments:[{view:t,clearValue:ae,loadOp:"clear",storeOp:"store"}]}),n=this.drawSceneIntoPass(s,this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);s.end(),this.gpuDevice.queue.submit([a.finish()]),this.frameListener?.({renderedSegments:n,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=Lr}computeVectorMinifyZoom(e,t){const a=Math.min(e/Math.max(1,this.canvas.width),t/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}renderVectorLayerIntoMinifyTarget(e,t,a,s){if(!this.vectorMinifyTexture)return 0;const n=this.computeVectorMinifyZoom(e,t),r=this.gpuDevice.createCommandEncoder(),o=r.beginRenderPass({colorAttachments:[{view:this.vectorMinifyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(e,t,a,s,n);const l=this.drawVectorContentIntoPass(o);return o.end(),this.gpuDevice.queue.submit([r.finish()]),l}drawVectorMinifyCompositeIntoPass(e,t,a){!this.vectorCompositeBindGroup||!this.vectorMinifyTexture||(this.updateVectorCompositeUniforms(t,a),e.setPipeline(this.vectorCompositePipeline),e.setBindGroup(0,this.vectorCompositeBindGroup),e.draw(4,1,0,0))}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let e=this.panCacheZoom/Math.max(this.zoom,1e-6),t=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const s=this.panCacheWidth*.5-2,n=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(e),o=this.canvas.height*.5*Math.abs(e),l=s-r,c=n-o,h=this.zoom/Math.max(this.panCacheZoom,1e-6),x=h<wr||h>Br,m=Math.abs(this.targetZoom-this.zoom)<=fe&&Math.abs(this.panCacheZoom-this.zoom)>Ir,d=l<0||c<0||Math.abs(t)>l||Math.abs(a)>c;if(!this.panCacheValid||x||d||m){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gpuDevice.createCommandEncoder(),v=g.beginRenderPass({colorAttachments:[{view:this.panCacheTexture.createView(),clearValue:ae,loadOp:"clear",storeOp:"store"}]});this.panCacheRenderedSegments=this.drawSceneIntoPass(v,this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),v.end(),this.gpuDevice.queue.submit([g.finish()]),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,e=1,t=0,a=0}this.blitPanCache(t,a,e),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawSceneIntoPass(e,t,a,s,n){return this.updateCameraUniforms(t,a,s,n),this.drawRasterContentIntoPass(e),this.drawVectorContentIntoPass(e)}drawRasterContentIntoPass(e){if(this.pageBackgroundResources.length>0){e.setPipeline(this.rasterPipeline);for(const t of this.pageBackgroundResources)e.setBindGroup(0,t.bindGroup),e.draw(4,1,0,0)}if(this.rasterLayerResources.length>0){e.setPipeline(this.rasterPipeline);for(const t of this.rasterLayerResources)e.setBindGroup(0,t.bindGroup),e.draw(4,1,0,0)}}drawVectorContentIntoPass(e){this.fillPathCount>0&&this.fillBindGroup&&(e.setPipeline(this.fillPipeline),e.setBindGroup(0,this.fillBindGroup),e.draw(4,this.fillPathCount,0,0));let t=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(t>0){const a=this.usingAllSegments?this.strokeBindGroupAll:this.strokeBindGroupVisible;a&&(e.setPipeline(this.strokePipeline),e.setBindGroup(0,a),e.draw(4,t,0,0))}return this.textInstanceCount>0&&this.textBindGroup&&(e.setPipeline(this.textPipeline),e.setBindGroup(0,this.textBindGroup),e.draw(4,this.textInstanceCount,0,0)),t}updateCameraUniforms(e,t,a,s,n=this.zoom){const r=new Float32Array(Vr);r[0]=e,r[1]=t,r[2]=a,r[3]=s,r[4]=n,r[5]=1,r[6]=this.strokeCurveEnabled?1:0,r[7]=1.25,r[8]=this.strokeCurveEnabled?1:0,r[9]=1,r[10]=this.textVectorOnly?1:0,r[11]=0,r[12]=this.vectorOverrideColor[0],r[13]=this.vectorOverrideColor[1],r[14]=this.vectorOverrideColor[2],r[15]=this.vectorOverrideOpacity,Ce(r,U,"camera"),this.gpuDevice.queue.writeBuffer(this.cameraUniformBuffer,0,r)}updateVectorCompositeUniforms(e,t){const a=new Float32Array(Ur);a[0]=e,a[1]=t,a[2]=0,a[3]=0,Ce(a,pe,"vector composite"),this.gpuDevice.queue.writeBuffer(this.vectorCompositeUniformBuffer,0,a)}updateBlitUniforms(e,t,a){const s=new Float32Array(Gr);s[0]=this.canvas.width,s[1]=this.canvas.height,s[2]=this.panCacheWidth,s[3]=this.panCacheHeight,s[4]=e,s[5]=t,s[6]=a,s[7]=0,s[8]=0,s[9]=0,s[10]=0,s[11]=0,Ce(s,ge,"blit"),this.gpuDevice.queue.writeBuffer(this.blitUniformBuffer,0,s)}blitPanCache(e,t,a){if(!this.panCacheTexture||!this.blitBindGroup){this.renderDirectToScreen();return}this.updateBlitUniforms(e,t,a);const s=this.gpuContext.getCurrentTexture().createView(),n=this.gpuDevice.createCommandEncoder(),r=n.beginRenderPass({colorAttachments:[{view:s,clearValue:ae,loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.blitPipeline),r.setBindGroup(0,this.blitBindGroup),r.draw(4,1,0,0),r.end(),this.gpuDevice.queue.submit([n.finish()])}ensureVectorMinifyResources(){const e=this.maxTextureSize(),t=e/Math.max(1,this.canvas.width),a=e/Math.max(1,this.canvas.height),s=Math.max(1,Math.min(Fr,t,a)),n=Math.max(this.canvas.width,Math.floor(this.canvas.width*s)),r=Math.max(this.canvas.height,Math.floor(this.canvas.height*s));if(n<this.canvas.width||r<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyWidth===n&&this.vectorMinifyHeight===r&&this.vectorCompositeBindGroup)return!0;this.destroyVectorMinifyResources();const o=globalThis.GPUTextureUsage;return this.vectorMinifyTexture=this.gpuDevice.createTexture({size:{width:n,height:r,depthOrArrayLayers:1},format:this.presentationFormat,usage:o.RENDER_ATTACHMENT|o.TEXTURE_BINDING}),this.vectorMinifyWidth=n,this.vectorMinifyHeight=r,this.vectorCompositeBindGroup=this.gpuDevice.createBindGroup({layout:this.vectorCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.vectorCompositeSampler},{binding:1,resource:this.vectorMinifyTexture.createView()},{binding:2,resource:{buffer:this.vectorCompositeUniformBuffer,size:pe}}]}),!0}ensurePanCacheResources(){const e=this.maxTextureSize(),t=Math.min(e,Math.max(this.canvas.width+ct*2,Math.ceil(this.canvas.width*lt))),a=Math.min(e,Math.max(this.canvas.height+ct*2,Math.ceil(this.canvas.height*lt)));if(t<this.canvas.width||a<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheWidth===t&&this.panCacheHeight===a&&this.blitBindGroup)return!0;this.destroyPanCacheResources();const s=globalThis.GPUTextureUsage;return this.panCacheTexture=this.gpuDevice.createTexture({size:{width:t,height:a,depthOrArrayLayers:1},format:this.presentationFormat,usage:s.RENDER_ATTACHMENT|s.TEXTURE_BINDING}),this.panCacheWidth=t,this.panCacheHeight=a,this.panCacheValid=!1,this.blitBindGroup=this.gpuDevice.createBindGroup({layout:this.blitPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.panCacheSampler},{binding:1,resource:this.panCacheTexture.createView()},{binding:2,resource:{buffer:this.blitUniformBuffer,size:ge}}]}),!0}destroyPanCacheResources(){this.panCacheTexture&&(this.panCacheTexture.destroy(),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1,this.blitBindGroup=null}destroyVectorMinifyResources(){this.vectorMinifyTexture&&(this.vectorMinifyTexture.destroy(),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorCompositeBindGroup=null}updateVisibleSet(e=this.cameraCenterX,t=this.cameraCenterY,a=this.canvas.width,s=this.canvas.height,n=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(n,1e-6),l=a/(2*o),c=s/(2*o),h=Math.max(16/o,this.scene.maxHalfWidth*2),x=e-l-h,p=e+l+h,m=t-c-h,d=t+c+h,C=ve(Math.floor((x-r.minX)/r.cellWidth),r.gridWidth),g=ve(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),v=ve(Math.floor((m-r.minY)/r.cellHeight),r.gridHeight),f=ve(Math.floor((d-r.minY)/r.cellHeight),r.gridHeight),u=(g-C+1)*(f-v+1),T=r.gridWidth*r.gridHeight;if(!this.isInteractionActive()&&u>=T*Er){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let S=0;for(let y=v;y<=f;y+=1){let L=y*r.gridWidth+C;for(let I=C;I<=g;I+=1){const _=r.offsets[L],w=r.counts[L];for(let b=0;b<w;b+=1){const R=r.indices[_+b];this.segmentMarks[R]!==this.markToken&&(this.segmentMarks[R]=this.markToken,!(this.segmentMaxX[R]<x||this.segmentMinX[R]>p||this.segmentMaxY[R]<m||this.segmentMinY[R]>d)&&(this.visibleSegmentIds[S]=R,S+=1))}L+=1}}if(this.visibleSegmentCount=S,this.segmentIdBufferVisible&&S>0){const y=this.visibleSegmentIds.subarray(0,S);this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,y)}}buildSegmentBounds(e){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let t=0;t<this.segmentCount;t+=1){const a=t*4,s=t*4,n=e.styles[s]+.35;this.segmentMinX[t]=e.primitiveBounds[a]-n,this.segmentMinY[t]=e.primitiveBounds[a+1]-n,this.segmentMaxX[t]=e.primitiveBounds[a+2]+n,this.segmentMaxY[t]=e.primitiveBounds[a+3]+n}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=Rr}configureRasterLayers(e){this.destroyRasterLayerResources();for(const t of this.getSceneRasterLayers(e)){const a=new Float32Array(6);t.matrix.length>=6?(a[0]=t.matrix[0],a[1]=t.matrix[1],a[2]=t.matrix[2],a[3]=t.matrix[3],a[4]=t.matrix[4],a[5]=t.matrix[5]):(a[0]=1,a[3]=1);const s=t.data.subarray(0,t.width*t.height*4),n=Zr(s),r=this.createRgba8Texture(t.width,t.height,n);this.rasterLayerResources.push(this.createRasterLayerResource(a,r))}}configurePageBackgroundResources(e){if(this.destroyPageBackgroundResources(),this.pageBackgroundTexture||this.uploadPageBackgroundTexture(),!this.pageBackgroundTexture)return;const t=Qr(e);for(let a=0;a+3<t.length;a+=4){const s=t[a],n=t[a+1],r=t[a+2],o=t[a+3];if(![s,n,r,o].every(Number.isFinite))continue;const l=Math.max(r-s,1e-6),c=Math.max(o-n,1e-6),h=new Float32Array([l,0,0,c,s,n]);this.pageBackgroundResources.push(this.createRasterLayerResource(h,this.pageBackgroundTexture))}}getSceneRasterLayers(e){const t=[];if(Array.isArray(e.rasterLayers))for(const n of e.rasterLayers){const r=Math.max(0,Math.trunc(n?.width??0)),o=Math.max(0,Math.trunc(n?.height??0));r<=0||o<=0||!(n.data instanceof Uint8Array)||n.data.length<r*o*4||t.push({width:r,height:o,data:n.data,matrix:n.matrix instanceof Float32Array?n.matrix:new Float32Array(n.matrix)})}if(t.length>0)return t;const a=Math.max(0,Math.trunc(e.rasterLayerWidth)),s=Math.max(0,Math.trunc(e.rasterLayerHeight));return a<=0||s<=0||e.rasterLayerData.length<a*s*4||t.push({width:a,height:s,data:e.rasterLayerData,matrix:e.rasterLayerMatrix}),t}destroyRasterLayerResources(){for(const e of this.rasterLayerResources)e.texture&&e.texture.destroy(),e.uniformBuffer&&e.uniformBuffer.destroy();this.rasterLayerResources=[]}destroyPageBackgroundResources(){for(const e of this.pageBackgroundResources)e.uniformBuffer&&e.uniformBuffer.destroy();this.pageBackgroundResources=[]}uploadPageBackgroundTexture(){const e=Math.round(this.pageBackgroundColor[3]*255),t=e/255,a=new Uint8Array([Math.round(this.pageBackgroundColor[0]*t*255),Math.round(this.pageBackgroundColor[1]*t*255),Math.round(this.pageBackgroundColor[2]*t*255),e]);if(!this.pageBackgroundTexture){this.pageBackgroundTexture=this.createRgba8Texture(1,1,a);return}this.writeRgba8Texture(this.pageBackgroundTexture,1,1,a,0)}createRasterLayerResource(e,t){const a=globalThis.GPUBufferUsage,s=new Float32Array(Or);s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[4]=e[4],s[5]=e[5],s[6]=0,s[7]=0,Ce(s,Te,"raster");const n=this.gpuDevice.createBuffer({size:Te,usage:a.UNIFORM|a.COPY_DST});this.gpuDevice.queue.writeBuffer(n,0,s);const r=this.gpuDevice.createBindGroup({layout:this.rasterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:{buffer:n,size:Te}},{binding:2,resource:this.rasterLayerSampler},{binding:3,resource:t.createView()}]});return{texture:t,uniformBuffer:n,bindGroup:r}}createFloatTexture(e,t,a){const s=globalThis.GPUTextureUsage,n=this.gpuDevice.createTexture({size:{width:e,height:t,depthOrArrayLayers:1},format:"rgba32float",usage:s.TEXTURE_BINDING|s.COPY_DST}),r=Nr(a,e,t);return this.writeFloatTexture(n,e,t,r),n}createRgba8Texture(e,t,a){const s=globalThis.GPUTextureUsage,n=qr(a,e,t),r=this.gpuDevice.createTexture({size:{width:e,height:t,depthOrArrayLayers:1},format:"rgba8unorm",mipLevelCount:n.length,usage:s.TEXTURE_BINDING|s.COPY_DST});for(let o=0;o<n.length;o+=1){const l=n[o],c=$r(l.data,l.width,l.height);this.writeRgba8Texture(r,l.width,l.height,c,o)}return r}writeFloatTexture(e,t,a,s){const n=t*16,r=mt(n,256);if(a<=1&&n===r){this.gpuDevice.queue.writeTexture({texture:e},s,{offset:0},{width:t,height:a,depthOrArrayLayers:1});return}if(n===r){this.gpuDevice.queue.writeTexture({texture:e},s,{offset:0,bytesPerRow:n,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1});return}const o=new Uint8Array(s.buffer,s.byteOffset,s.byteLength),l=new Uint8Array(r*a);for(let c=0;c<a;c+=1){const h=c*n,x=c*r;l.set(o.subarray(h,h+n),x)}this.gpuDevice.queue.writeTexture({texture:e},l,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1})}writeRgba8Texture(e,t,a,s,n=0){const r=t*4,o=mt(r,256);if(a<=1&&r===o){this.gpuDevice.queue.writeTexture({texture:e,mipLevel:n},s,{offset:0},{width:t,height:a,depthOrArrayLayers:1});return}if(r===o){this.gpuDevice.queue.writeTexture({texture:e,mipLevel:n},s,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1});return}const l=new Uint8Array(o*a);for(let c=0;c<a;c+=1){const h=c*r,x=c*o;l.set(s.subarray(h,h+r),x)}this.gpuDevice.queue.writeTexture({texture:e,mipLevel:n},l,{offset:0,bytesPerRow:o,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1})}clearToScreen(){const e=this.gpuContext.getCurrentTexture().createView(),t=this.gpuDevice.createCommandEncoder();t.beginRenderPass({colorAttachments:[{view:e,clearValue:ae,loadOp:"clear",storeOp:"store"}]}).end(),this.gpuDevice.queue.submit([t.finish()])}destroyDataResources(){this.strokeBindGroupAll=null,this.strokeBindGroupVisible=null,this.fillBindGroup=null,this.textBindGroup=null,this.destroyPageBackgroundResources(),this.destroyRasterLayerResources();const e=[this.segmentTextureA,this.segmentTextureB,this.segmentTextureC,this.segmentTextureD,this.fillPathMetaTextureA,this.fillPathMetaTextureB,this.fillPathMetaTextureC,this.fillSegmentTextureA,this.fillSegmentTextureB,this.textInstanceTextureA,this.textInstanceTextureB,this.textInstanceTextureC,this.textGlyphMetaTextureA,this.textGlyphMetaTextureB,this.textGlyphRasterMetaTexture,this.textGlyphSegmentTextureA,this.textGlyphSegmentTextureB,this.textRasterAtlasTexture];for(const t of e)t&&t.destroy();this.segmentTextureA=null,this.segmentTextureB=null,this.segmentTextureC=null,this.segmentTextureD=null,this.fillPathMetaTextureA=null,this.fillPathMetaTextureB=null,this.fillPathMetaTextureC=null,this.fillSegmentTextureA=null,this.fillSegmentTextureB=null,this.textInstanceTextureA=null,this.textInstanceTextureB=null,this.textInstanceTextureC=null,this.textGlyphMetaTextureA=null,this.textGlyphMetaTextureB=null,this.textGlyphRasterMetaTexture=null,this.textGlyphSegmentTextureA=null,this.textGlyphSegmentTextureB=null,this.textRasterAtlasTexture=null}clientToWorld(e,t){return this.clientToWorldAt(e,t,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(e,t,a,s,n){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:(l-this.canvas.width*.5)/n+a,y:(c-this.canvas.height*.5)/n+s}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(e){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const t=e-this.lastPanFrameTimeMs;if(t>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,s=this.cameraCenterY-this.lastPanFrameCameraY;let n=a*1e3/t,r=s*1e3/t;const o=Math.hypot(n,r);if(Number.isFinite(o)&&o>=ut){if(o>ht){const l=ht/o;n*=l,r*=l}this.panVelocityWorldX=n,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=e}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=e}updateCameraWithDamping(e){let t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>J||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>J,a=Math.abs(this.targetZoom-this.zoom)>fe;if(!t&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=e,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=e-16);const s=D(e-this.lastCameraAnimationTimeMs,0,Dr);this.lastCameraAnimationTimeMs=e;const n=s/1e3,r=1-Math.exp(-Le*n),o=1-Math.exp(-24*n);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=fe&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),t=!1}else t&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=J&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=J&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>J||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>J,a=Math.abs(this.targetZoom-this.zoom)>fe,t||a}computeCameraCenterForAnchor(e,t,a,s,n){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:a-(l-this.canvas.width*.5)/n,y:s-(c-this.canvas.height*.5)/n}}}function Nr(i,e,t){const a=e*t*4;if(i.length>a)throw new Error(`Texture source data exceeds texture size (${i.length} > ${a}).`);const s=new Float32Array(a);return s.set(i),s}function $r(i,e,t){const a=e*t*4;if(i.length>a)throw new Error(`Texture source data exceeds texture size (${i.length} > ${a}).`);const s=new Uint8Array(a);return s.set(i),s}function Zr(i){const e=new Uint8Array(i.length);for(let t=0;t+3<i.length;t+=4){const a=i[t+3];if(a<=0){e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;continue}if(a>=255){e[t]=i[t],e[t+1]=i[t+1],e[t+2]=i[t+2],e[t+3]=255;continue}const s=a/255;e[t]=Math.round(i[t]*s),e[t+1]=Math.round(i[t+1]*s),e[t+2]=Math.round(i[t+2]*s),e[t+3]=a}return e}function qr(i,e,t){const a=[];let s=Math.max(1,Math.trunc(e)),n=Math.max(1,Math.trunc(t)),r=i;for(a.push({width:s,height:n,data:r});s>1||n>1;){const o=Math.max(1,s>>1),l=Math.max(1,n>>1),c=new Uint8Array(o*l*4);for(let h=0;h<l;h+=1){const x=Math.min(n-1,h*2),p=Math.min(n-1,x+1);for(let m=0;m<o;m+=1){const d=Math.min(s-1,m*2),C=Math.min(s-1,d+1),g=(x*s+d)*4,v=(x*s+C)*4,f=(p*s+d)*4,u=(p*s+C)*4,T=(h*o+m)*4;c[T]=r[g]+r[v]+r[f]+r[u]+2>>2,c[T+1]=r[g+1]+r[v+1]+r[f+1]+r[u+1]+2>>2,c[T+2]=r[g+2]+r[v+2]+r[f+2]+r[u+2]+2>>2,c[T+3]=r[g+3]+r[v+3]+r[f+3]+r[u+3]+2>>2}}a.push({width:o,height:l,data:c}),s=o,n=l,r=c}return a}function Ce(i,e,t){const a=i.byteLength;if(a>e)throw new Error(`${t} uniform data (${a} bytes) exceeds buffer size ${e} bytes.`)}function ee(i,e){const t=Math.max(1,i),a=Math.ceil(Math.sqrt(t)),s=D(a,1,e),n=Math.max(1,Math.ceil(t/s));if(n>e)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:s,height:n}}function Qr(i){return i.pageRects instanceof Float32Array&&i.pageRects.length>=4?new Float32Array(i.pageRects):new Float32Array([i.pageBounds.minX,i.pageBounds.minY,i.pageBounds.maxX,i.pageBounds.maxY])}function mt(i,e){return Math.ceil(i/e)*e}function D(i,e,t){return i<e?e:i>t?t:i}function ve(i,e){return i<0?0:i>=e?e-1:i}function Kr(i){let e=!1,t=0,a=0;const s=new Map;let n=null,r=!1,o=0,l=0,c=0;function h(){e=!1,t=0,a=0,s.clear(),n=null,r=!1,o=0,l=0,c=0}function x(){s.clear(),n=null,r=!1,o=0,l=0,c=0}function p(f){e&&i().endPanInteraction(),x(),h()}function m(){if(s.size<2)return null;const f=s.values(),u=f.next().value,T=f.next().value;if(!u||!T)return null;const S=T.x-u.x,y=T.y-u.y;return{distance:Math.hypot(S,y),centerX:(u.x+T.x)*.5,centerY:(u.y+T.y)*.5}}function d(f,u){if(f.hasPointerCapture(u))try{f.releasePointerCapture(u)}catch{}}function C(f){if(!s.has(f.pointerId)||!e)return;s.set(f.pointerId,{x:f.clientX,y:f.clientY});const u=i();if(s.size>=2){const y=m();if(!y)return;if(!r){r=!0,n=null,o=Math.max(y.distance,.001),l=y.centerX,c=y.centerY;return}const L=Math.max(o,.001),I=Math.max(y.distance,.001),_=I/L,w=y.centerX-l,b=y.centerY-c;(w!==0||b!==0)&&u.panByPixels(w,b),Number.isFinite(_)&&Math.abs(_-1)>1e-4&&u.zoomAtClientPoint(y.centerX,y.centerY,_),o=I,l=y.centerX,c=y.centerY;return}if(n===null){n=f.pointerId,t=f.clientX,a=f.clientY,r=!1,o=0;return}if(f.pointerId!==n)return;const T=f.clientX-t,S=f.clientY-a;t=f.clientX,a=f.clientY,u.panByPixels(T,S)}function g(f,u){if(s.delete(u.pointerId),d(f,u.pointerId),s.size>=2){const T=m();T&&(r=!0,n=null,o=Math.max(T.distance,.001),l=T.centerX,c=T.centerY);return}if(s.size===1){const T=s.entries().next().value;T?(n=T[0],t=T[1].x,a=T[1].y):n=null,r=!1,o=0,l=0,c=0;return}p()}function v(f){f.addEventListener("pointerdown",u=>{if(e||(e=!0,i().beginPanInteraction()),u.pointerType==="touch")if(s.set(u.pointerId,{x:u.clientX,y:u.clientY}),s.size===1)n=u.pointerId,r=!1,o=0,l=u.clientX,c=u.clientY,t=u.clientX,a=u.clientY;else{const T=m();T&&(r=!0,n=null,o=Math.max(T.distance,.001),l=T.centerX,c=T.centerY)}else t=u.clientX,a=u.clientY;f.setPointerCapture(u.pointerId)}),f.addEventListener("pointermove",u=>{if(u.pointerType==="touch"){C(u);return}if(!e)return;const T=u.clientX-t,S=u.clientY-a;t=u.clientX,a=u.clientY,i().panByPixels(T,S)}),f.addEventListener("pointerup",u=>{if(u.pointerType==="touch"){g(f,u);return}p(),d(f,u.pointerId)}),f.addEventListener("pointercancel",u=>{if(u.pointerType==="touch"){g(f,u);return}p(),d(f,u.pointerId)}),f.addEventListener("lostpointercapture",u=>{if(u.pointerType==="touch"){s.has(u.pointerId)&&s.delete(u.pointerId),s.size===0&&p();return}e&&p()}),f.addEventListener("wheel",u=>{u.preventDefault();const T=Math.exp(-u.deltaY*.0013);i().zoomAtClientPoint(u.clientX,u.clientY,T)},{passive:!1})}return{attach:v,resetState:h}}function jr(i){const e=Jr();let t="webgl",a=!1;function s(){if(!e){i.webGpuToggleElement.checked=!1,i.webGpuToggleElement.disabled=!0,i.webGpuToggleElement.title="WebGPU is not available in this browser/GPU.";return}i.webGpuToggleElement.disabled=!1,i.webGpuToggleElement.title="Experimental WebGPU backend."}async function n(r){const o=r?"webgpu":"webgl";if(o===t||a)return;if(o==="webgpu"&&!e){i.webGpuToggleElement.checked=!1,i.setStatus("WebGPU is not supported in this browser/GPU. Using WebGL.");return}a=!0;const l=i.getRenderer(),c=l.getViewState(),h=i.getSceneSnapshot(),x=i.getCanvasElement(),p=ea(x);i.setStatus(`Switching renderer backend to ${o.toUpperCase()}...`);try{x.replaceWith(p),i.setCanvasElement(p),i.attachCanvasInteractionListeners(p);const m=o==="webgpu"?await i.createWebGpuRenderer(p):i.createWebGlRenderer(p);if(i.setRenderer(m),t=o,i.webGpuToggleElement.checked=o==="webgpu",i.resetPointerInteractionState(),l.setFrameListener(null),l.dispose(),h.scene&&h.label){const d=m.setScene(h.scene);i.setSceneStats(d),m.setViewState(c),i.updateMetricsAfterSwitch(h.label,h.scene,d),i.setMetricTimesText("parse -, upload - (backend switch)");const C=h.loadedSourceKind==="parsed-zip"?" | source: parsed data zip":"",g=`${i.formatSceneStatus(h.label,h.scene)}${C}`;i.setBaseStatus(g),i.setStatusText(o==="webgpu"?`${g} | backend: WebGPU (preview)`:`${g} | backend: WebGL`)}else m.setViewState(c),i.setStatus(`Switched to ${o.toUpperCase()} backend.`)}catch(m){i.getCanvasElement()===p&&(p.replaceWith(x),i.setCanvasElement(x),i.resetPointerInteractionState());const d=m instanceof Error?m.message:String(m);i.webGpuToggleElement.checked=t==="webgpu",i.setStatus(`Failed to switch backend: ${d}`)}finally{a=!1}}return{webGpuSupported:e,getActiveBackend:()=>t,initializeToggleState:s,applyPreference:n}}function Jr(){return typeof navigator.gpu<"u"}function ea(i){const e=i.cloneNode(!1);return e.width=i.width,e.height=i.height,e}function vt(i){const e=[];if(Array.isArray(i.rasterLayers))for(const s of i.rasterLayers){const n=Math.max(0,Math.trunc(s?.width??0)),r=Math.max(0,Math.trunc(s?.height??0));if(n<=0||r<=0||!(s.data instanceof Uint8Array)||s.data.length<n*r*4)continue;const o=s.matrix instanceof Float32Array?s.matrix:new Float32Array(s.matrix);e.push({width:n,height:r,data:s.data,matrix:o})}if(e.length>0)return e;const t=Math.max(0,Math.trunc(i.rasterLayerWidth)),a=Math.max(0,Math.trunc(i.rasterLayerHeight));return t<=0||a<=0||i.rasterLayerData.length<t*a*4||e.push({width:t,height:a,data:i.rasterLayerData,matrix:i.rasterLayerMatrix}),e}new URL("./",window.location.href);function ta(i){const e=[];for(let t=0;t<i.pages.length;t+=1){const a=i.pages[t];e.push(ra(i,a))}return e}function ia(i,e){const t=ta(i),a=oa(e,10,1,100),s=Ni(t,a);return s.operatorCount=i.stats.operatorCount,s.imagePaintOpCount=i.stats.imagePaintOpCount,s.sourceSegmentCount=i.stats.sourceSegmentCount,s.mergedSegmentCount=i.stats.mergedSegmentCount,s.sourceTextCount=i.stats.sourceTextCount,s.textInPageCount=i.stats.textInPageCount,s.textOutOfPageCount=i.stats.textOutOfPageCount,s.discardedTransparentCount=i.stats.discardedTransparentCount,s.discardedDegenerateCount=i.stats.discardedDegenerateCount,s.discardedDuplicateCount=i.stats.discardedDuplicateCount,s.discardedContainedCount=i.stats.discardedContainedCount,s}function ra(i,e){const t=e.segmentStart*4,a=(e.segmentStart+e.segmentCount)*4,s=e.fillPathStart*4,n=(e.fillPathStart+e.fillPathCount)*4,r=e.fillSegmentStart*4,o=(e.fillSegmentStart+e.fillSegmentCount)*4,l=e.textInstanceStart*4,c=(e.textInstanceStart+e.textInstanceCount)*4,h=e.textGlyphStart*4,x=(e.textGlyphStart+e.textGlyphCount)*4,p=e.textGlyphSegmentStart*4,m=(e.textGlyphSegmentStart+e.textGlyphSegmentCount)*4,d=i.endpoints.slice(t,a),C=i.primitiveMeta.slice(t,a),g=i.primitiveBounds.slice(t,a),v=i.styles.slice(t,a),f=i.fillPathMetaA.slice(s,n),u=i.fillPathMetaB.slice(s,n),T=i.fillPathMetaC.slice(s,n),S=i.fillSegmentsA.slice(r,o),y=i.fillSegmentsB.slice(r,o),L=i.textInstanceA.slice(l,c),I=i.textInstanceB.slice(l,c),_=i.textInstanceC.slice(l,c),w=i.textGlyphMetaA.slice(h,x),b=i.textGlyphMetaB.slice(h,x),R=i.textGlyphSegmentsA.slice(p,m),W=i.textGlyphSegmentsB.slice(p,m);for(let G=0;G<e.fillPathCount;G+=1)f[G*4]-=e.fillSegmentStart;for(let G=0;G<e.textInstanceCount;G+=1)I[G*4+2]-=e.textGlyphStart;for(let G=0;G<e.textGlyphCount;G+=1)w[G*4]-=e.textGlyphSegmentStart;const k=aa(i,e),V=k[0]??null,zi=sa(v,e.segmentCount);return{pageCount:1,pagesPerRow:1,pageRects:new Float32Array([e.pageRect[0],e.pageRect[1],e.pageRect[2],e.pageRect[3]]),fillPathCount:e.fillPathCount,fillSegmentCount:e.fillSegmentCount,fillPathMetaA:f,fillPathMetaB:u,fillPathMetaC:T,fillSegmentsA:S,fillSegmentsB:y,segmentCount:e.segmentCount,sourceSegmentCount:e.segmentCount,mergedSegmentCount:e.segmentCount,sourceTextCount:e.textInstanceCount,textInstanceCount:e.textInstanceCount,textGlyphCount:e.textGlyphCount,textGlyphSegmentCount:e.textGlyphSegmentCount,textInPageCount:e.textInstanceCount,textOutOfPageCount:0,textInstanceA:L,textInstanceB:I,textInstanceC:_,textGlyphMetaA:w,textGlyphMetaB:b,textGlyphSegmentsA:R,textGlyphSegmentsB:W,rasterLayers:k,rasterLayerWidth:V?.width??0,rasterLayerHeight:V?.height??0,rasterLayerData:V?.data??new Uint8Array(0),rasterLayerMatrix:V?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:d,primitiveMeta:C,primitiveBounds:g,styles:v,bounds:{...e.pageBounds},pageBounds:{...e.pageBounds},maxHalfWidth:zi,operatorCount:0,imagePaintOpCount:k.length,pathCount:0,discardedTransparentCount:0,discardedDegenerateCount:0,discardedDuplicateCount:0,discardedContainedCount:0}}function aa(i,e){const t=[],a=e.rasterLayerStart,s=a+e.rasterLayerCount;for(let n=a;n<s;n+=1){const r=i.rasterLayers[n];r&&t.push(na(r))}return t}function na(i){return{width:i.width,height:i.height,data:i.data.slice(),matrix:new Float32Array(i.matrix)}}function sa(i,e){let t=0;for(let a=0;a<e;a+=1)t=Math.max(t,i[a*4]);return t}function oa(i,e,t,a){const s=Number(i);return Number.isFinite(s)?Math.max(t,Math.min(a,Math.trunc(s))):e}function la(i,e){function t(){const m=Math.trunc(Number(i.maxPagesPerRowInput.value));return Number.isFinite(m)?ne(m,1,100):10}function a(m){const d=Math.trunc(Number(m));return Number.isFinite(d)?ne(d,0,100):100}function s(m){const d=Math.trunc(Number(m));return Number.isFinite(d)?ne(d,0,100):0}function n(m){const d=ne(Math.trunc(m),0,100);i.pageBackgroundOpacityInput.value=String(d),i.pageBackgroundOpacitySlider.value=String(d)}function r(m){const d=ne(Math.trunc(m),0,100);i.vectorOpacityInput.value=String(d),i.vectorOpacitySlider.value=String(d)}function o(){const m=i.pageBackgroundColorInput.value||"#ffffff",d=/^#([0-9a-fA-F]{6})$/.exec(m),C=a(i.pageBackgroundOpacityInput.value);n(C);const g=C/100;if(!d)return[1,1,1,g];const v=Number.parseInt(d[1],16);if(!Number.isFinite(v))return[1,1,1,g];const f=(v>>16&255)/255,u=(v>>8&255)/255,T=(v&255)/255;return[f,u,T,g]}function l(){const m=i.vectorColorInput.value||"#000000",d=/^#([0-9a-fA-F]{6})$/.exec(m),C=s(i.vectorOpacityInput.value);r(C);const g=C/100;if(!d)return[0,0,0,g];const v=Number.parseInt(d[1],16);if(!Number.isFinite(v))return[0,0,0,g];const f=(v>>16&255)/255,u=(v>>8&255)/255,T=(v&255)/255;return[f,u,T,g]}function c(){const m=o();e().setPageBackgroundColor(m[0],m[1],m[2],m[3])}function h(){const m=l();e().setVectorColorOverride(m[0],m[1],m[2],m[3])}function x(){i.maxPagesPerRowInput.value=String(t())}function p(m){i.panOptimizationToggle.addEventListener("change",()=>{m.onPanOptimizationChange(i.panOptimizationToggle.checked)}),i.segmentMergeToggle.addEventListener("change",()=>{m.onSegmentMergeChange()}),i.invisibleCullToggle.addEventListener("change",()=>{m.onInvisibleCullChange()}),i.strokeCurveToggle.addEventListener("change",()=>{m.onStrokeCurveChange(i.strokeCurveToggle.checked)}),i.vectorTextOnlyToggle.addEventListener("change",()=>{m.onVectorTextOnlyChange(i.vectorTextOnlyToggle.checked)}),i.pageBackgroundColorInput.addEventListener("input",()=>{c()}),i.pageBackgroundOpacitySlider.addEventListener("input",()=>{const d=a(i.pageBackgroundOpacitySlider.value);n(d),c()}),i.pageBackgroundOpacityInput.addEventListener("input",()=>{const d=a(i.pageBackgroundOpacityInput.value);n(d),c()}),i.vectorColorInput.addEventListener("input",()=>{h()}),i.vectorOpacitySlider.addEventListener("input",()=>{const d=s(i.vectorOpacitySlider.value);r(d),h()}),i.vectorOpacityInput.addEventListener("input",()=>{const d=s(i.vectorOpacityInput.value);r(d),h()}),i.maxPagesPerRowInput.addEventListener("change",()=>{const d=t();i.maxPagesPerRowInput.value=String(d),m.onMaxPagesPerRowChange(d)}),i.webGpuToggle.addEventListener("change",()=>{m.onWebGpuToggleChange(i.webGpuToggle.checked)})}return{bindEventListeners:p,readMaxPagesPerRowInput:t,readPageBackgroundColorInput:o,readVectorColorOverrideInput:l,applyPageBackgroundColorFromControls:c,applyVectorColorOverrideFromControls:h,syncMaxPagesPerRowInputValue:x}}function ne(i,e,t){return i<e?e:i>t?t:i}const ca=/^[a-z][a-z\d+.-]*:/i;function _e(i){const e=i.trim();if(ca.test(e))return e;const t=e.replace(/^\/+/,""),a=new URL("./",window.location.href);return new URL(t,a).toString()}function ua(i){const e=Array.isArray(i.examples)?i.examples:[],t=[];for(let a=0;a<e.length;a+=1){const s=e[a],n=ye(s?.name);if(!n)continue;const r=ye(s?.id)??`example-${a+1}`,o=ye(s?.pdf?.path),l=ye(s?.parsedZip?.path),c=o?_e(o):null,h=l?_e(l):null;!c||!h||t.push({id:r,name:n,pdfPath:c,pdfSizeBytes:dt(s?.pdf?.sizeBytes,0),zipPath:h,zipSizeBytes:dt(s?.parsedZip?.sizeBytes,0)})}return t}function dt(i,e){const t=Number(i);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):Math.max(0,Math.trunc(e))}function ye(i){if(typeof i!="string")return null;const e=i.trim();return e.length>0?e:null}er.workerSrc=$i;const yt=document.querySelector("#viewport"),St=document.querySelector("#hud"),bt=document.querySelector("#toggle-hud"),At=document.querySelector("#toggle-hud-icon"),Mt=document.querySelector("#open-file"),Pt=document.querySelector("#example-select"),Rt=document.querySelector("#download-data"),Et=document.querySelector("#download-all-data"),It=document.querySelector("#file-input"),wt=document.querySelector("#status"),Bt=document.querySelector("#parse-loader"),Ft=document.querySelector("#parse-loader-text"),Lt=document.querySelector("#runtime"),Dt=document.querySelector("#metrics"),_t=document.querySelector("#metric-file"),Vt=document.querySelector("#metric-operators"),Gt=document.querySelector("#metric-source-segments"),Ut=document.querySelector("#metric-merged-segments"),Ot=document.querySelector("#metric-visible-segments"),Xt=document.querySelector("#metric-reductions"),zt=document.querySelector("#metric-cull-discards"),Wt=document.querySelector("#metric-times"),kt=document.querySelector("#metric-fps"),Ht=document.querySelector("#metric-texture"),Yt=document.querySelector("#metric-grid-max-cell"),Nt=document.querySelector("#load-debug"),$t=document.querySelector("#load-debug-log"),Zt=document.querySelector("#drop-indicator"),qt=document.querySelector("#toggle-pan-opt"),Qt=document.querySelector("#toggle-segment-merge"),Kt=document.querySelector("#toggle-invisible-cull"),jt=document.querySelector("#toggle-stroke-curves"),Jt=document.querySelector("#toggle-vector-text-only"),ei=document.querySelector("#toggle-webgpu"),ti=document.querySelector("#max-pages-per-row"),ii=document.querySelector("#page-bg-color"),ri=document.querySelector("#page-bg-opacity-slider"),ai=document.querySelector("#page-bg-opacity"),ni=document.querySelector("#vector-color"),si=document.querySelector("#vector-opacity-slider"),oi=document.querySelector("#vector-opacity");if(!yt||!St||!bt||!At||!Mt||!Pt||!Rt||!Et||!It||!wt||!Bt||!Ft||!Lt||!Dt||!_t||!Vt||!Gt||!Ut||!Ot||!Xt||!zt||!Wt||!kt||!Ht||!Yt||!Nt||!$t||!Zt||!qt||!Qt||!Kt||!jt||!Jt||!ei||!ti||!ii||!ri||!ai||!ni||!si||!oi)throw new Error("Required UI elements are missing from index.html.");let Pe=yt;const li=St,Ve=bt,ha=At,ci=Mt,A=Pt,be=Rt,Ae=Et,oe=It,ma=wt,da=Bt,xa=Ft,fa=Lt,ui=Dt,hi=_t,mi=Vt,di=Gt,xi=Ut,fi=Ot,gi=Xt,pi=zt,He=Wt,ga=kt,Ti=Ht,Ci=Yt,pa=Nt,Ta=$t,xt=Zt,vi=qt,yi=Qt,Si=Kt,bi=jt,Ai=Jt,Mi=ei,Pi=ti,Ca=ii,va=ri,ya=ai,Sa=ni,ba=si,Aa=oi;let X,Ee=null;const le=la({panOptimizationToggle:vi,segmentMergeToggle:yi,invisibleCullToggle:Si,strokeCurveToggle:bi,vectorTextOnlyToggle:Ai,webGpuToggle:Mi,maxPagesPerRowInput:Pi,pageBackgroundColorInput:Ca,pageBackgroundOpacitySlider:va,pageBackgroundOpacityInput:ya,vectorColorInput:Sa,vectorOpacitySlider:ba,vectorOpacityInput:Aa},()=>X),Ge=Kr(()=>X);function Ma(i){Xa();const e=i.renderedSegments.toLocaleString(),t=i.totalSegments.toLocaleString(),a=i.usedCulling?"culled":"full",s=(Ee?.getActiveBackend()??"webgl").toUpperCase();P.setRuntime(`Draw ${e}/${t} segments | mode: ${a} | zoom: ${i.zoom.toFixed(2)}x | backend: ${s}`)}function Ri(i){i.resize(),i.setPanOptimizationEnabled(vi.checked),i.setStrokeCurveEnabled(bi.checked),i.setTextVectorOnly(Ai.checked);const e=le.readPageBackgroundColorInput();i.setPageBackgroundColor(e[0],e[1],e[2],e[3]);const t=le.readVectorColorOverrideInput();i.setVectorColorOverride(t[0],t[1],t[2],t[3]),i.setFrameListener(Ma)}function Ei(i){const e=new Sr(i);return Ri(e),e}async function Pa(i){const e=await ke.create(i);return Ri(e),e}X=Ei(Pe);let q="Waiting for PDF or parsed ZIP...",F=null,Ye=null,$=null,O=null,z=0,Q=!1;const Ii=new URLSearchParams(window.location.search).get("loadDebug")==="1";let Y=null,Ne=0;const ft="DEFLATE",Ra=9,N=new Map;let te=[],Me=!1,De=0,Se=0;const P=Zi({statusElement:ma,loaderElement:da,loaderTextElement:xa,runtimeElement:fa,fpsElement:ga,debugElement:pa,debugLogElement:Ta},{runtimeThrottleMs:250,fpsThrottleMs:250,debugEnabled:Ii,debugMaxLines:200}),$e=ji({enabled:Ii,tag:"hepr/native",emitLine(i){console.log(i),P.appendDebugLine(i)},minDelta:.03,minIntervalMs:2e3});Ee=jr({webGpuToggleElement:Mi,getRenderer:()=>X,setRenderer:i=>{X=i},getCanvasElement:()=>Pe,setCanvasElement:i=>{Pe=i},createWebGlRenderer:Ei,createWebGpuRenderer:Pa,attachCanvasInteractionListeners:i=>{Ge.attach(i)},resetPointerInteractionState:()=>{Ge.resetState()},getSceneSnapshot:()=>({scene:Ye,label:$,loadedSourceKind:F?.kind??null}),setSceneStats:i=>{},updateMetricsAfterSwitch:(i,e,t)=>{Ui(i,e,t,0,0)},setMetricTimesText:i=>{He.textContent=i},formatSceneStatus:Oe,setBaseStatus:i=>{q=i},setStatus:M,setStatusText:i=>{P.setStatus(i)}});Ee.initializeToggleState();we();Vi(!1);K(!1);Z(!1);le.syncMaxPagesPerRowInputValue();M(q);ie();Ea();ci.addEventListener("click",()=>{oe.click()});be.addEventListener("click",()=>{Gi()});Ae.addEventListener("click",()=>{Ga()});Ve.addEventListener("click",()=>{const i=li.classList.contains("collapsed");Vi(!i)});oe.addEventListener("change",async()=>{const[i]=Array.from(oe.files||[]);i&&(Ue(i)?await Bi(i):wi(i)?await Fi(i):M(`Unsupported file type: ${i.name}`),oe.value="")});A.addEventListener("change",()=>{const i=A.value;i&&wa(i)});le.bindEventListeners({onPanOptimizationChange:i=>{X.setPanOptimizationEnabled(i)},onSegmentMergeChange:()=>gt(),onInvisibleCullChange:()=>gt(),onStrokeCurveChange:i=>{X.setStrokeCurveEnabled(i)},onVectorTextOnlyChange:i=>{X.setTextVectorOnly(i)},onMaxPagesPerRowChange:async()=>{if(!O||!$)return;const i=++z,e=We(t=>{Ke(i,t)});Qe(i),await Ze(O,$,{activeLoadToken:i,preserveView:!1,parseMs:0,progress:e,sourceLabelSuffix:F?.kind==="parsed-zip"?"parsed data zip":null})},onWebGpuToggleChange:i=>Ee?.applyPreference(i)??Promise.resolve()});Ge.attach(Pe);window.addEventListener("resize",()=>{X.resize()});window.addEventListener("dragenter",i=>{i.preventDefault(),Q=!0,ie()});window.addEventListener("dragover",i=>{i.preventDefault(),Q||(Q=!0,ie())});window.addEventListener("dragleave",i=>{(i.target===document.documentElement||i.target===document.body)&&(Q=!1,ie())});window.addEventListener("drop",async i=>{i.preventDefault(),Q=!1,ie();const t=Array.from(i.dataTransfer?.files||[]).find(a=>Ue(a)||wi(a));if(!t){M("Dropped file is not a supported PDF or parsed zip.");return}Ue(t)?await Bi(t):await Fi(t)});function ie(){const i=Q||!Ye;xt.classList.toggle("active",i),xt.classList.toggle("dragging",Q)}async function Ea(){N.clear(),te=[],A.innerHTML="",A.append(new Option("Examples (loading...)","")),A.value="",A.disabled=!0,Z(!1);try{const i=_e("examples/manifest.json"),e=await fetch(i,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json(),a=ua(t);if(a.length===0)throw new Error("Manifest does not contain valid examples.");Ia(a)}catch(i){const e=i instanceof Error?i.message:String(i);console.warn(`[Examples] Failed to load manifest: ${e}`),te=[],A.innerHTML="",A.append(new Option("Examples unavailable","")),A.value="",A.disabled=!0,Z(!1)}}function Ia(i){te=[...i],N.clear(),A.innerHTML="",A.append(new Option("Load example...",""));for(const e of i){const t=document.createElement("optgroup");t.label=e.name;const a=`${e.id}:pdf`,s=`${e.id}:zip`,n=`Parse PDF (${Xe(e.pdfSizeBytes)} kB)`,r=`Load Parsed ZIP (${Xe(e.zipSizeBytes)} kB)`;N.set(a,{id:e.id,sourceName:e.name,kind:"pdf",path:e.pdfPath}),N.set(s,{id:e.id,sourceName:e.name,kind:"zip",path:e.zipPath}),t.append(new Option(n,a)),t.append(new Option(r,s)),A.append(t)}A.value="",A.disabled=N.size===0,Z(te.length>0)}async function wa(i){const e=N.get(i);if(!e){A.value="";return}A.disabled=!0;try{const t=e.kind==="pdf"?"PDF":"parsed ZIP";if(M(`Loading example ${e.sourceName} (${t})...`),e.kind==="pdf")F={kind:"pdf",source:e.path,label:e.sourceName},await Ie(e.path,e.sourceName,{preserveView:!1,autoMaxPagesPerRow:!0});else{const a=`${e.sourceName} (parsed zip)`;F={kind:"parsed-zip",source:e.path,label:a},await Li(e.path,a,{preserveView:!1})}}catch(t){const a=t instanceof Error?t.message:String(t);M(`Failed to load example: ${a}`)}finally{A.value="",A.disabled=N.size===0}}function Ue(i){const e=i.name.toLowerCase();return i.type==="application/pdf"||e.endsWith(".pdf")}function wi(i){return i.name.toLowerCase().endsWith(".zip")||i.type==="application/zip"||i.type==="application/x-zip-compressed"}async function Bi(i){F={kind:"pdf",source:i,label:i.name},Y=null,await Ie(i,i.name,{preserveView:!1,autoMaxPagesPerRow:!0})}async function Fi(i){F={kind:"parsed-zip",source:i,label:i.name},await Li(i,i.name,{preserveView:!1})}async function Ie(i,e,t={}){const a=++z,s=Ba(),n=Fa(s),r=We(l=>{Ke(a,l)}),o=La(e,n,i);Qe(a),_i(a,e);try{let l=o;const c=performance.now();if(l?(M(`Rearranging ${e}... (using cached compiled document)`),r.report(.97,{stage:"compile",sourceType:"pdf"})):(M(`Parsing ${e} with PDF.js... (merge ${s.enableSegmentMerge?"on":"off"}, cull ${s.enableInvisibleCull?"on":"off"})`),l=await Di(i,e,{maxPages:void 0,extraction:s,progress:r.child(0,.97)}),Da(e,n,i,l)),a!==z)return;if(t.autoMaxPagesPerRow){const x=Na(l.pageCount);Pi.value=String(x)}const h=performance.now()-c;await Ze(l,e,{activeLoadToken:a,preserveView:t.preserveView,parseMs:h,progress:r,sourceLabelSuffix:null}),ce(a,!0)}catch(l){if(a!==z)return;Re(a);const c=l instanceof Error?l.message:String(l);ce(a,!1,c),M(`Failed to render PDF: ${c}`),O=null,P.setRuntime(""),we(e)}}async function gt(){!F||F.kind!=="pdf"||await Ie(F.source,F.label,{preserveView:!0})}async function Li(i,e,t={}){const a=++z,s=We(n=>{Ke(a,n)});Qe(a),_i(a,e);try{const n=performance.now();M(`Loading parsed data from ${e}...`);const r=await Di(i,e,{progress:s.child(0,.97)});if(a!==z)return;const o=performance.now()-n;await Ze(r,e,{activeLoadToken:a,preserveView:t.preserveView,parseMs:o,progress:s,sourceLabelSuffix:"parsed data zip"}),ce(a,!0)}catch(n){if(a!==z)return;Re(a);const r=n instanceof Error?n.message:String(n);ce(a,!1,r),M(`Failed to load parsed data zip: ${r}`),O=null,P.setRuntime(""),we(e)}}function Ba(){return{enableSegmentMerge:yi.checked,enableInvisibleCull:Si.checked}}function Fa(i){const e=i.enableSegmentMerge!==!1,t=i.enableInvisibleCull!==!1;return`merge:${e?1:0}|cull:${t?1:0}`}function La(i,e,t){return!F||F.kind!=="pdf"||!Y||!_a(Y.sourceRef,t)||Y.sourceLabel!==i||Y.optionsKey!==e?null:Y.document}function Da(i,e,t,a){!F||F.kind!=="pdf"||(Y={sourceRef:t,sourceLabel:i,optionsKey:e,document:a})}function _a(i,e){return i===e}function Va(i,e){const t=e instanceof Error?e.message:String(e),a=`[hepr/native][worker-fallback] ${i}: ${t}`;console.warn(a,e),P.appendDebugLine(a)}async function Di(i,e,t){try{return await qi(i,{...t,progress:t.progress?.child(0,1,{executionPath:"worker"})})}catch(a){return Va(e,a),Qi(i,{...t,progress:t.progress?.child(0,1,{executionPath:"main-thread-fallback"})})}}async function Ze(i,e,t){const a=performance.now(),s=le.readMaxPagesPerRowInput(),n=t.progress.child(.97,.985,{stage:"compile"});n.report(0,{stage:"compile",unit:"pages",processed:0,total:i.pageCount});const r=ia(i,s);n.complete({stage:"compile",unit:"pages",processed:i.pageCount,total:i.pageCount});const o=t.parseMs+(performance.now()-a);if(t.activeLoadToken!==z)return;const l=vt(r).length,c=l>0;if(r.segmentCount===0&&r.textInstanceCount===0&&r.fillPathCount===0&&!c){Re(t.activeLoadToken),ce(t.activeLoadToken,!1,"No visible geometry was found."),M(`No visible geometry was found in ${e}.`),P.setRuntime(""),we(e),K(!1);return}M(`Uploading ${r.segmentCount.toLocaleString()} segments, ${r.textInstanceCount.toLocaleString()} text instances${c?`, ${l.toLocaleString()} raster layer${l===1?"":"s"}`:""} to GPU...`);const h=performance.now(),x=t.progress.child(.985,.998,{stage:"upload"});x.report(0,{stage:"upload"});const p=X.setScene(r);x.complete({stage:"upload"}),t.preserveView||X.fitToBounds(r.bounds,64);const m=performance.now();t.activeLoadToken===z&&(Wa(e,r),ka(e,r),Ha(e,r),za(e,r,p),Ye=r,$=e,O=i,ie(),K(!0),Ui(e,r,p,o,m-h),q=t.sourceLabelSuffix?`${Oe(e,r)} | source: ${t.sourceLabelSuffix}`:Oe(e,r),P.setStatus(q),t.progress.complete({stage:"complete"}),Re(t.activeLoadToken))}function qe(i){const e=vt(i);if(e.length===0)return"";if(e.length===1)return`${e[0].width}x${e[0].height}`;const a=e.reduce((s,n)=>s+n.width*n.height,0)/1e6;return`${e.length.toLocaleString()} layers (${a.toFixed(1)} MP total)`}function Oe(i,e){const t=e.pageCount>1?`${e.pageCount.toLocaleString()} pages (${e.pagesPerRow.toLocaleString()}/row) | `:"",a=e.fillPathCount.toLocaleString(),s=e.sourceSegmentCount.toLocaleString(),n=e.segmentCount.toLocaleString(),r=e.textInstanceCount.toLocaleString(),o=qe(e),l=o?`, raster ${o}`:"";return`${i} loaded | ${t}fills ${a}, ${n} visible from ${s} source segments, ${r} text instances${l}`}function M(i){q=i,P.setStatus(q)}function Qe(i){Ne=i,P.setLoader(!0,"Parsing / loading 0.00%")}function Ke(i,e){if(i!==z||i!==Ne)return;$e.update(i,e);const t=Ji(e.stage),a=e.executionPath?` [${e.executionPath}]`:"",s=Xi(e.value,0,1);P.setLoader(!0,`${t}${a} ${(s*100).toFixed(2)}%`)}function Re(i,e){i===Ne&&P.setLoader(!1)}function _i(i,e){P.clearDebug(),$e.begin(i,e)}function ce(i,e,t){$e.finish(i,e,t)}function K(i,e=!1){be.hidden=!i,be.disabled=!i||e||Me,be.textContent=e?"Preparing ZIP...":"Download Parsed Data"}function Z(i,e=!1,t){Ae.hidden=!1,Ae.disabled=!i||e,Ae.textContent=e?t??"Exporting Example ZIPs...":"Download All Example ZIPs"}function pt(i){ci.disabled=!i,oe.disabled=!i,A.disabled=!i||N.size===0}function Vi(i){li.classList.toggle("collapsed",i),Ve.setAttribute("aria-expanded",String(!i)),Ve.title=i?"Expand panel":"Collapse panel",ha.textContent=i?"▸":"▾"}async function Ga(){if(Me)return;const i=te;if(i.length===0){M("No example PDFs available for batch export.");return}Me=!0,pt(!1),K(!!O,!1),Z(!0,!0,`Exporting 0/${i.length}...`);try{for(let e=0;e<i.length;e+=1){const t=i[e],a=e+1;if(Z(!0,!0,`Exporting ${a}/${i.length}...`),M(`Batch ${a}/${i.length}: loading ${t.name}...`),F={kind:"pdf",source:t.pdfPath,label:t.name},Y=null,O=null,$=null,await Ie(t.pdfPath,t.name,{preserveView:!1,autoMaxPagesPerRow:!0}),!O||$!==t.name)throw new Error(`${t.name}: parsed data not available after load`);M(`Batch ${a}/${i.length}: downloading ${t.name} parsed ZIP...`),await Gi(),await Ya(200)}M(`Batch export complete: ${i.length.toLocaleString()} parsed ZIP files downloaded.`)}catch(e){const t=e instanceof Error?e.message:String(e);M(`Batch export failed: ${t}`)}finally{Me=!1,pt(!0),K(!!O,!1),Z(te.length>0,!1)}}async function Gi(){if(!O||!$){M("No parsed floorplan data available to export.");return}const i=$,e=P.getStatus();K(!0,!0),P.setStatus("Preparing parsed ZIP (v4)...");try{const t=await Ki(O,{sourceFile:i,zipCompression:ft,zipDeflateLevel:Ra,textureLayout:"channel-major",textureByteShuffle:!1,texturePredictor:"none",encodeRasterImages:!0}),a=`${Ua(i)}-parsed-data.zip`;Oa(t.blob,a),console.log(`[Parsed data export] ${i}: wrote v4 ZIP (${t.textureCount.toLocaleString()} textures, ${t.rasterLayerCount.toLocaleString()} raster layers) to ${a} (${Xe(t.byteLength)} kB, compression=${ft.toLowerCase()})`),P.setStatus(e||q)}catch(t){const a=t instanceof Error?t.message:String(t);M(`Failed to download parsed data: ${a}`)}finally{K(!0,!1)}}function Xe(i){return(Math.max(0,Number(i)||0)/1024).toFixed(1)}function Ua(i){const t=i.replace(/\.pdf$/i,"").trim().replace(/[^a-zA-Z0-9._-]+/g,"_");return t.length>0?t:"floorplan"}function Oa(i,e){const t=URL.createObjectURL(i),a=document.createElement("a");a.href=t,a.download=e,a.style.display="none",document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}function we(i="-"){hi.textContent=i,mi.textContent="-",di.textContent="-",xi.textContent="-",fi.textContent="-",gi.textContent="-",pi.textContent="-",He.textContent="-",Ti.textContent="-",Ci.textContent="-",ui.dataset.ready="false",P.setFps("-")}function Ui(i,e,t,a,s){const n=e.sourceSegmentCount,r=e.mergedSegmentCount,o=e.segmentCount,l=e.fillPathCount,c=n>0?(1-r/n)*100:0,h=r>0?(1-o/r)*100:0,x=n>0?(1-o/n)*100:0,p=Oi(t.textureWidth,t.textureHeight,t.maxTextureSize),m=qe(e);hi.textContent=i,mi.textContent=e.operatorCount.toLocaleString(),di.textContent=n.toLocaleString(),xi.textContent=`${r.toLocaleString()} (${se(c)} reduction)`,fi.textContent=`${o.toLocaleString()} (${se(x)} total reduction), fills ${l.toLocaleString()}, text ${e.textInstanceCount.toLocaleString()} instances, pages ${e.pageCount.toLocaleString()} (${e.pagesPerRow.toLocaleString()}/row)`,gi.textContent=`merge ${se(c)}, invisible-cull ${se(h)}, total ${se(x)}`,pi.textContent=`transparent ${e.discardedTransparentCount.toLocaleString()}, degenerate ${e.discardedDegenerateCount.toLocaleString()}, duplicates ${e.discardedDuplicateCount.toLocaleString()}, contained ${e.discardedContainedCount.toLocaleString()}, glyphs ${e.textGlyphCount.toLocaleString()} / glyph segments ${e.textGlyphSegmentCount.toLocaleString()}`,He.textContent=`parse ${a.toFixed(0)} ms, upload ${s.toFixed(0)} ms`,Ti.textContent=`fill paths ${t.fillPathTextureWidth}x${t.fillPathTextureHeight}, fill seg ${t.fillSegmentTextureWidth}x${t.fillSegmentTextureHeight}, segments ${t.textureWidth}x${t.textureHeight} (${p.toFixed(1)}% of max area ${t.maxTextureSize}x${t.maxTextureSize}), text inst ${t.textInstanceTextureWidth}x${t.textInstanceTextureHeight}, glyph ${t.textGlyphTextureWidth}x${t.textGlyphTextureHeight}, glyph-seg ${t.textSegmentTextureWidth}x${t.textSegmentTextureHeight}${m?`, raster ${m}`:""}`,Ci.textContent=t.maxCellPopulation.toLocaleString(),ui.dataset.ready="true"}function se(i){return`${Math.max(0,i).toFixed(1)}%`}function Xa(){const i=performance.now();if(De>0){const e=i-De;if(e>0){const t=1e3/e;Se=Se===0?t:Se*.85+t*.15,P.setFps(`${Se.toFixed(0)} FPS`)}}De=i}function za(i,e,t){const a=Oi(t.textureWidth,t.textureHeight,t.maxTextureSize),s=qe(e);console.log(`[GPU texture size] ${i}: fills=${t.fillPathTextureWidth}x${t.fillPathTextureHeight} (paths=${e.fillPathCount.toLocaleString()}), fill-segments=${t.fillSegmentTextureWidth}x${t.fillSegmentTextureHeight} (count=${e.fillSegmentCount.toLocaleString()}), segments=${t.textureWidth}x${t.textureHeight} (count=${e.segmentCount.toLocaleString()}, max=${t.maxTextureSize}, util=${a.toFixed(1)}%), text instances=${t.textInstanceTextureWidth}x${t.textInstanceTextureHeight} (count=${e.textInstanceCount.toLocaleString()}), glyphs=${t.textGlyphTextureWidth}x${t.textGlyphTextureHeight} (count=${e.textGlyphCount.toLocaleString()}), glyph-segments=${t.textSegmentTextureWidth}x${t.textSegmentTextureHeight} (count=${e.textGlyphSegmentCount.toLocaleString()})${s?`, raster=${s}`:""}`)}function Oi(i,e,t){const a=Math.max(1,Math.floor(i)),s=Math.max(1,Math.floor(e)),n=Math.max(1,Math.floor(t)),r=a*s,o=n*n;return r/o*100}function Wa(i,e){if(e.sourceSegmentCount<=0)return;const t=e.mergedSegmentCount,a=e.sourceSegmentCount,s=a>0?(1-t/a)*100:0;console.log(`[Segment merge] ${i}: ${t.toLocaleString()} merged / ${a.toLocaleString()} source (${s.toFixed(1)}% reduction)`)}function ka(i,e){if(e.mergedSegmentCount<=0)return;const t=e.segmentCount,a=e.mergedSegmentCount,s=a>0?(1-t/a)*100:0;console.log(`[Invisible cull] ${i}: ${t.toLocaleString()} visible / ${a.toLocaleString()} merged (${s.toFixed(1)}% reduction, transparent=${e.discardedTransparentCount.toLocaleString()}, degenerate=${e.discardedDegenerateCount.toLocaleString()}, duplicates=${e.discardedDuplicateCount.toLocaleString()}, contained=${e.discardedContainedCount.toLocaleString()})`)}function Ha(i,e){console.log(`[Text vectors] ${i}: instances=${e.textInstanceCount.toLocaleString()}, sourceText=${e.sourceTextCount.toLocaleString()}, glyphs=${e.textGlyphCount.toLocaleString()}, glyphSegments=${e.textGlyphSegmentCount.toLocaleString()}, inPage=${e.textInPageCount.toLocaleString()}, outOfPage=${e.textOutOfPageCount.toLocaleString()}, fillPaths=${e.fillPathCount.toLocaleString()}, fillSegments=${e.fillSegmentCount.toLocaleString()}`)}function Ya(i){return new Promise(e=>{window.setTimeout(e,Math.max(0,i))})}function Xi(i,e,t){return i<e?e:i>t?t:i}function Na(i){const e=Math.max(1,Math.trunc(i));return Xi(Math.ceil(Math.sqrt(e)),1,100)}
