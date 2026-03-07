import{b as ke,a as ki,c as Hi,d as Yi,e as vt,f as Ni,g as $i,p as Zi,h as qi,i as He,l as Qi,j as Ki,k as ji,m as Ji,n as er}from"./client-GTiz-NFi.js";import{GlobalWorkerOptions as tr}from"./pdf-TYrZqVzP.js";const tt=64,it=1024,ir=3e4,rr=22e4;function yt(i){const e=i.segmentCount,t=Math.max(i.bounds.maxX-i.bounds.minX,1e-5),a=Math.max(i.bounds.maxY-i.bounds.minY,1e-5),{gridWidth:n,gridHeight:s}=ar(e,t,a),r=n*s,o=t/n,l=a/s,c=new Uint32Array(r);let h=0;for(let C=0;C<e;C+=1){const g=C*4,v=C*4,u=i.styles[v]+.35,T=i.primitiveBounds[g]-u,S=i.primitiveBounds[g+1]-u,y=i.primitiveBounds[g+2]+u,L=i.primitiveBounds[g+3]+u,I=H(Math.floor((T-i.bounds.minX)/o),n),_=H(Math.floor((y-i.bounds.minX)/o),n),w=H(Math.floor((S-i.bounds.minY)/l),s),b=H(Math.floor((L-i.bounds.minY)/l),s);for(let R=w;R<=b;R+=1){let W=R*n+I;for(let k=I;k<=_;k+=1){const V=c[W]+1;c[W]=V,V>h&&(h=V),W+=1}}}const x=new Uint32Array(r+1);for(let C=0;C<r;C+=1)x[C+1]=x[C]+c[C];const p=x[r],m=new Uint32Array(p),d=x.slice(0,r);for(let C=0;C<e;C+=1){const g=C*4,v=C*4,u=i.styles[v]+.35,T=i.primitiveBounds[g]-u,S=i.primitiveBounds[g+1]-u,y=i.primitiveBounds[g+2]+u,L=i.primitiveBounds[g+3]+u,I=H(Math.floor((T-i.bounds.minX)/o),n),_=H(Math.floor((y-i.bounds.minX)/o),n),w=H(Math.floor((S-i.bounds.minY)/l),s),b=H(Math.floor((L-i.bounds.minY)/l),s);for(let R=w;R<=b;R+=1){let W=R*n+I;for(let k=I;k<=_;k+=1){const V=d[W];m[V]=C,d[W]=V+1,W+=1}}}return{gridWidth:n,gridHeight:s,minX:i.bounds.minX,minY:i.bounds.minY,maxX:i.bounds.maxX,maxY:i.bounds.maxY,cellWidth:o,cellHeight:l,offsets:x,counts:c,indices:m,maxCellPopulation:h}}function ar(i,e,t){const a=Le(Math.round(i/8),ir,rr),n=e/t;let s=Math.round(Math.sqrt(a*n)),r=Math.round(a/Math.max(s,1));return s=Le(s,tt,it),r=Le(r,tt,it),{gridWidth:s,gridHeight:r}}function H(i,e){return i<0?0:i>=e?e-1:i}function Le(i,e,t){return i<e?e:i>t?t:i}const nr=`#version 300 es
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
`,sr=`#version 300 es
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

${ke()}

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
`,or=`#version 300 es
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
`,lr=`#version 300 es
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

${ke()}
${Ni()}

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
`,cr=`#version 300 es
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
`,ur=`#version 300 es
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

${ke()}
${ki()}
${Hi()}

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
`,rt=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,hr=`#version 300 es
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
`,mr=`#version 300 es
precision highp float;

uniform sampler2D uVectorLayerTex;
uniform vec2 uViewportPx;

out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / max(uViewportPx, vec2(1.0));
  outColor = texture(uVectorLayerTex, clamp(uv, vec2(0.0), vec2(1.0)));
}
`,dr=`#version 300 es
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
`,xr=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterTex;
uniform vec2 uRasterTexSize;
in vec2 vUv;
flat in vec4 vUvRect;
out vec4 outColor;

${Yi()}

void main() {
  vec4 color = sampleRasterStable(uRasterTex, vUv, vUvRect, uRasterTexSize);
  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`,fr=140,at=3e5,nt=1.8,st=96,gr=1e-5,pr=.75,Tr=1.3333333333,Cr=2,vr=2.25,De=24,j=1e-4,he=1e-5,yr=64,ot=5,lt=2e4,Sr=120,me=160/255,de=169/255,xe=175/255;class br{canvas;gl;segmentProgram;fillProgram;textProgram;blitProgram;vectorCompositeProgram;rasterProgram;segmentVao;fillVao;textVao;blitVao;cornerBuffer;allSegmentIdBuffer;visibleSegmentIdBuffer;allFillPathIdBuffer;allTextInstanceIdBuffer;segmentTextureA;segmentTextureB;segmentTextureC;segmentTextureD;fillPathMetaTextureA;fillPathMetaTextureB;fillPathMetaTextureC;fillSegmentTextureA;fillSegmentTextureB;textInstanceTextureA;textInstanceTextureB;textInstanceTextureC;textGlyphMetaTextureA;textGlyphMetaTextureB;textGlyphRasterMetaTexture;textGlyphSegmentTextureA;textGlyphSegmentTextureB;textRasterAtlasTexture;pageBackgroundTexture;uSegmentTexA;uSegmentTexB;uSegmentStyleTex;uSegmentBoundsTex;uSegmentTexSize;uViewport;uCameraCenter;uZoom;uAAScreenPx;uStrokeCurveEnabled;uStrokeVectorOverride;uFillPathMetaTexA;uFillPathMetaTexB;uFillPathMetaTexC;uFillSegmentTexA;uFillSegmentTexB;uFillPathMetaTexSize;uFillSegmentTexSize;uFillViewport;uFillCameraCenter;uFillZoom;uFillAAScreenPx;uFillVectorOverride;uTextInstanceTexA;uTextInstanceTexB;uTextInstanceTexC;uTextGlyphMetaTexA;uTextGlyphMetaTexB;uTextGlyphRasterMetaTex;uTextGlyphSegmentTexA;uTextGlyphSegmentTexB;uTextInstanceTexSize;uTextGlyphMetaTexSize;uTextGlyphSegmentTexSize;uTextViewport;uTextCameraCenter;uTextZoom;uTextAAScreenPx;uTextCurveEnabled;uTextRasterAtlasTex;uTextRasterAtlasSize;uTextVectorOnly;uTextVectorOverride;uCacheTex;uViewportPx;uCacheSizePx;uOffsetPx;uSampleScale;uVectorLayerTex;uVectorLayerViewportPx;uRasterTex;uRasterTexSize;uRasterMatrixABCD;uRasterMatrixEF;uRasterViewport;uRasterCameraCenter;uRasterZoom;scene=null;grid=null;sceneStats=null;allSegmentIds=new Float32Array(0);visibleSegmentIds=new Float32Array(0);allFillPathIds=new Float32Array(0);allTextInstanceIds=new Float32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;segmentCount=0;fillPathCount=0;textInstanceCount=0;rasterLayers=[];pageRects=new Float32Array(0);visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textRasterAtlasWidth=1;textRasterAtlasHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;needsVisibleSetUpdate=!1;rafHandle=0;frameListener=null;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=4096;lastInteractionTime=Number.NEGATIVE_INFINITY;isPanInteracting=!1;panCacheTexture=null;panCacheFramebuffer=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyFramebuffer=null;vectorMinifyWidth=0;vectorMinifyHeight=0;vectorMinifyWarmupPending=!1;panOptimizationEnabled=!0;strokeCurveEnabled=!0;textVectorOnly=!1;hasCameraInteractionSinceSceneLoad=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;constructor(e){this.canvas=e;const t=e.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,alpha:!1,premultipliedAlpha:!1});if(!t)throw new Error("WebGL2 is required for this proof-of-concept renderer.");this.gl=t,this.segmentProgram=this.createProgram(nr,sr),this.fillProgram=this.createProgram(or,lr),this.textProgram=this.createProgram(cr,ur),this.blitProgram=this.createProgram(rt,hr),this.vectorCompositeProgram=this.createProgram(rt,mr),this.rasterProgram=this.createProgram(dr,xr),this.segmentVao=this.createVertexArray(),this.fillVao=this.createVertexArray(),this.textVao=this.createVertexArray(),this.blitVao=this.createVertexArray(),this.cornerBuffer=this.mustCreateBuffer(),this.allSegmentIdBuffer=this.mustCreateBuffer(),this.visibleSegmentIdBuffer=this.mustCreateBuffer(),this.allFillPathIdBuffer=this.mustCreateBuffer(),this.allTextInstanceIdBuffer=this.mustCreateBuffer(),this.segmentTextureA=this.mustCreateTexture(),this.segmentTextureB=this.mustCreateTexture(),this.segmentTextureC=this.mustCreateTexture(),this.segmentTextureD=this.mustCreateTexture(),this.fillPathMetaTextureA=this.mustCreateTexture(),this.fillPathMetaTextureB=this.mustCreateTexture(),this.fillPathMetaTextureC=this.mustCreateTexture(),this.fillSegmentTextureA=this.mustCreateTexture(),this.fillSegmentTextureB=this.mustCreateTexture(),this.textInstanceTextureA=this.mustCreateTexture(),this.textInstanceTextureB=this.mustCreateTexture(),this.textInstanceTextureC=this.mustCreateTexture(),this.textGlyphMetaTextureA=this.mustCreateTexture(),this.textGlyphMetaTextureB=this.mustCreateTexture(),this.textGlyphRasterMetaTexture=this.mustCreateTexture(),this.textGlyphSegmentTextureA=this.mustCreateTexture(),this.textGlyphSegmentTextureB=this.mustCreateTexture(),this.textRasterAtlasTexture=this.mustCreateTexture(),this.pageBackgroundTexture=this.mustCreateTexture(),this.uSegmentTexA=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexA"),this.uSegmentTexB=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexB"),this.uSegmentStyleTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentStyleTex"),this.uSegmentBoundsTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentBoundsTex"),this.uSegmentTexSize=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexSize"),this.uViewport=this.mustGetUniformLocation(this.segmentProgram,"uViewport"),this.uCameraCenter=this.mustGetUniformLocation(this.segmentProgram,"uCameraCenter"),this.uZoom=this.mustGetUniformLocation(this.segmentProgram,"uZoom"),this.uAAScreenPx=this.mustGetUniformLocation(this.segmentProgram,"uAAScreenPx"),this.uStrokeCurveEnabled=this.mustGetUniformLocation(this.segmentProgram,"uStrokeCurveEnabled"),this.uStrokeVectorOverride=this.mustGetUniformLocation(this.segmentProgram,"uVectorOverride"),this.uFillPathMetaTexA=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexA"),this.uFillPathMetaTexB=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexB"),this.uFillPathMetaTexC=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexC"),this.uFillSegmentTexA=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexA"),this.uFillSegmentTexB=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexB"),this.uFillPathMetaTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexSize"),this.uFillSegmentTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexSize"),this.uFillViewport=this.mustGetUniformLocation(this.fillProgram,"uViewport"),this.uFillCameraCenter=this.mustGetUniformLocation(this.fillProgram,"uCameraCenter"),this.uFillZoom=this.mustGetUniformLocation(this.fillProgram,"uZoom"),this.uFillAAScreenPx=this.mustGetUniformLocation(this.fillProgram,"uFillAAScreenPx"),this.uFillVectorOverride=this.mustGetUniformLocation(this.fillProgram,"uVectorOverride"),this.uTextInstanceTexA=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexA"),this.uTextInstanceTexB=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexB"),this.uTextInstanceTexC=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexC"),this.uTextGlyphMetaTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexA"),this.uTextGlyphMetaTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexB"),this.uTextGlyphRasterMetaTex=this.mustGetUniformLocation(this.textProgram,"uTextGlyphRasterMetaTex"),this.uTextGlyphSegmentTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexA"),this.uTextGlyphSegmentTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexB"),this.uTextInstanceTexSize=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexSize"),this.uTextGlyphMetaTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexSize"),this.uTextGlyphSegmentTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexSize"),this.uTextViewport=this.mustGetUniformLocation(this.textProgram,"uViewport"),this.uTextCameraCenter=this.mustGetUniformLocation(this.textProgram,"uCameraCenter"),this.uTextZoom=this.mustGetUniformLocation(this.textProgram,"uZoom"),this.uTextAAScreenPx=this.mustGetUniformLocation(this.textProgram,"uTextAAScreenPx"),this.uTextCurveEnabled=this.mustGetUniformLocation(this.textProgram,"uTextCurveEnabled"),this.uTextRasterAtlasTex=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasTex"),this.uTextRasterAtlasSize=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasSize"),this.uTextVectorOnly=this.mustGetUniformLocation(this.textProgram,"uTextVectorOnly"),this.uTextVectorOverride=this.mustGetUniformLocation(this.textProgram,"uVectorOverride"),this.uCacheTex=this.mustGetUniformLocation(this.blitProgram,"uCacheTex"),this.uViewportPx=this.mustGetUniformLocation(this.blitProgram,"uViewportPx"),this.uCacheSizePx=this.mustGetUniformLocation(this.blitProgram,"uCacheSizePx"),this.uOffsetPx=this.mustGetUniformLocation(this.blitProgram,"uOffsetPx"),this.uSampleScale=this.mustGetUniformLocation(this.blitProgram,"uSampleScale"),this.uVectorLayerTex=this.mustGetUniformLocation(this.vectorCompositeProgram,"uVectorLayerTex"),this.uVectorLayerViewportPx=this.mustGetUniformLocation(this.vectorCompositeProgram,"uViewportPx"),this.uRasterTex=this.mustGetUniformLocation(this.rasterProgram,"uRasterTex"),this.uRasterTexSize=this.mustGetUniformLocation(this.rasterProgram,"uRasterTexSize"),this.uRasterMatrixABCD=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixABCD"),this.uRasterMatrixEF=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixEF"),this.uRasterViewport=this.mustGetUniformLocation(this.rasterProgram,"uViewport"),this.uRasterCameraCenter=this.mustGetUniformLocation(this.rasterProgram,"uCameraCenter"),this.uRasterZoom=this.mustGetUniformLocation(this.rasterProgram,"uZoom"),this.initializeGeometry(),this.initializeState(),this.uploadPageBackgroundTexture()}setFrameListener(e){this.frameListener=e}setPanOptimizationEnabled(e){const t=!!e;this.panOptimizationEnabled!==t&&(this.panOptimizationEnabled=t,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(e){const t=!!e;this.strokeCurveEnabled!==t&&(this.strokeCurveEnabled=t,this.requestFrame())}setTextVectorOnly(e){const t=!!e;this.textVectorOnly!==t&&(this.textVectorOnly=t,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(e,t,a,n){const s=B(e,0,1),r=B(t,0,1),o=B(a,0,1),l=B(n,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-s)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[s,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(e,t,a,n){const s=B(e,0,1),r=B(t,0,1),o=B(a,0,1),l=B(n,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-s)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[s,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const e=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&e-this.lastPanVelocityUpdateTimeMs<=Sr?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=ot?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/De,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/De,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const e=window.devicePixelRatio||1,t=Math.max(1,Math.round(this.canvas.clientWidth*e)),a=Math.max(1,Math.round(this.canvas.clientHeight*e));this.canvas.width===t&&this.canvas.height===a||(this.canvas.width=t,this.canvas.height=a,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(e){this.scene=e,this.segmentCount=e.segmentCount,this.fillPathCount=e.fillPathCount,this.textInstanceCount=e.textInstanceCount,this.pageRects=Rr(e),this.buildSegmentBounds(e),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?yt(e):null,this.uploadRasterLayers(e);const t=this.uploadFillPaths(e),a=this.uploadSegments(e),n=this.uploadTextData(e);this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:t.pathMetaTextureWidth,fillPathTextureHeight:t.pathMetaTextureHeight,fillSegmentTextureWidth:t.segmentTextureWidth,fillSegmentTextureHeight:t.segmentTextureHeight,textureWidth:a.textureWidth,textureHeight:a.textureHeight,maxTextureSize:a.maxTextureSize,textInstanceTextureWidth:n.instanceTextureWidth,textInstanceTextureHeight:n.instanceTextureHeight,textGlyphTextureWidth:n.glyphMetaTextureWidth,textGlyphTextureHeight:n.glyphMetaTextureHeight,textSegmentTextureWidth:n.glyphSegmentTextureWidth,textSegmentTextureHeight:n.glyphSegmentTextureHeight},this.allSegmentIds=new Float32Array(this.segmentCount);for(let s=0;s<this.segmentCount;s+=1)this.allSegmentIds[s]=s;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allSegmentIds,this.gl.STATIC_DRAW),this.allFillPathIds=new Float32Array(this.fillPathCount);for(let s=0;s<this.fillPathCount;s+=1)this.allFillPathIds[s]=s;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allFillPathIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allFillPathIds,this.gl.STATIC_DRAW),this.allTextInstanceIds=new Float32Array(this.textInstanceCount);for(let s=0;s<this.textInstanceCount;s+=1)this.allTextInstanceIds[s]=s;return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allTextInstanceIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allTextInstanceIds,this.gl.STATIC_DRAW),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Float32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(e){const t=Number(e.cameraCenterX),a=Number(e.cameraCenterY),n=Number(e.zoom);if(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(n))return;this.cameraCenterX=t,this.cameraCenterY=a;const s=B(n,this.minZoom,this.maxZoom);this.zoom=s,this.targetCameraCenterX=t,this.targetCameraCenterY=a,this.targetZoom=s,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(e,t=64){const a=Math.max(e.maxX-e.minX,1e-4),n=Math.max(e.maxY-e.minY,1e-4),s=Math.max(1,this.canvas.width-t*2),r=Math.max(1,this.canvas.height-t*2),o=B(Math.min(s/a,r/n),this.minZoom,this.maxZoom),l=(e.minX+e.maxX)*.5,c=(e.minY+e.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources();for(const e of this.rasterLayers)this.gl.deleteTexture(e.texture);this.rasterLayers=[]}panByPixels(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=window.devicePixelRatio||1,n=-(e*a)/this.zoom,s=t*a/this.zoom;this.cameraCenterX+=n,this.cameraCenterY+=s,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(e,t,a){const n=B(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const s=this.clientToWorld(e,t),r=B(this.targetZoom*n,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=e,this.zoomAnchorClientY=t,this.zoomAnchorWorldX=s.x,this.zoomAnchorWorldY=s.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(e=>{this.rafHandle=0,this.render(e)}))}render(e=performance.now()){const t=this.updateCameraWithDamping(e);this.updatePanReleaseVelocitySample(e);const a=this.gl;if(!this.scene||this.fillPathCount===0&&this.segmentCount===0&&this.textInstanceCount===0&&this.rasterLayers.length===0&&this.pageRects.length===0){a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),a.clearColor(me,de,xe,1),a.clear(a.COLOR_BUFFER_BIT),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),t&&this.requestFrame();return}this.shouldUsePanCache(t)?this.renderWithPanCache():this.renderDirectToScreen(),t&&this.requestFrame()}shouldUsePanCache(e){return!this.panOptimizationEnabled||this.segmentCount<at?!1:this.isPanInteracting?!0:e}renderDirectToScreen(){const e=this.gl;let t=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=at&&(t=!1),t&&this.vectorMinifyWarmupPending&&(t=!1,this.vectorMinifyWarmupPending=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.clearColor(me,de,xe,1),e.clear(e.COLOR_BUFFER_BIT),this.needsVisibleSetUpdate){if(t){const n=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,n)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}this.drawRasterLayer(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);let a=0;t?(a=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),this.compositeVectorMinifyLayer()):(this.drawFilledPaths(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),a=this.drawVisibleSegments(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawTextInstances(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY)),this.frameListener?.({renderedSegments:a,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=vr}computeVectorMinifyZoom(e,t){const a=Math.min(e/Math.max(1,this.canvas.width),t/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}ensureVectorMinifyResources(){const e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),a=t/Math.max(1,this.canvas.width),n=t/Math.max(1,this.canvas.height),s=Math.max(1,Math.min(Cr,a,n)),r=Math.max(this.canvas.width,Math.floor(this.canvas.width*s)),o=Math.max(this.canvas.height,Math.floor(this.canvas.height*s));if(r<this.canvas.width||o<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyFramebuffer&&this.vectorMinifyWidth===r&&this.vectorMinifyHeight===o)return!0;this.destroyVectorMinifyResources();const l=e.createTexture();if(!l)return!1;e.bindTexture(e.TEXTURE_2D,l),Mr(e),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA8,r,o);const c=e.createFramebuffer();if(!c)return e.deleteTexture(l),!1;e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0);const h=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.bindFramebuffer(e.FRAMEBUFFER,null),h!==e.FRAMEBUFFER_COMPLETE?(e.deleteFramebuffer(c),e.deleteTexture(l),!1):(this.vectorMinifyTexture=l,this.vectorMinifyFramebuffer=c,this.vectorMinifyWidth=r,this.vectorMinifyHeight=o,this.vectorMinifyWarmupPending=!0,!0)}renderVectorLayerIntoMinifyTarget(e,t,a,n){if(!this.vectorMinifyFramebuffer||!this.vectorMinifyTexture)return 0;const s=this.gl,r=this.computeVectorMinifyZoom(e,t);s.bindFramebuffer(s.FRAMEBUFFER,this.vectorMinifyFramebuffer),s.viewport(0,0,e,t),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA),this.drawFilledPaths(e,t,a,n,r);const o=this.drawVisibleSegments(e,t,a,n,r);return this.drawTextInstances(e,t,a,n,r),s.bindTexture(s.TEXTURE_2D,this.vectorMinifyTexture),s.bindFramebuffer(s.FRAMEBUFFER,null),o}compositeVectorMinifyLayer(){if(!this.vectorMinifyTexture)return;const e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.useProgram(this.vectorCompositeProgram),e.bindVertexArray(this.blitVao),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.vectorMinifyTexture),e.uniform1i(this.uVectorLayerTex,0),e.uniform2f(this.uVectorLayerViewportPx,this.canvas.width,this.canvas.height),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let e=this.panCacheZoom/Math.max(this.zoom,1e-6),t=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const n=this.panCacheWidth*.5-2,s=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(e),o=this.canvas.height*.5*Math.abs(e),l=n-r,c=s-o,h=this.zoom/Math.max(this.panCacheZoom,1e-6),x=h<pr||h>Tr,m=Math.abs(this.targetZoom-this.zoom)<=he&&Math.abs(this.panCacheZoom-this.zoom)>gr,d=l<0||c<0||Math.abs(t)>l||Math.abs(a)>c;if(!this.panCacheValid||x||d||m){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gl;g.bindFramebuffer(g.FRAMEBUFFER,this.panCacheFramebuffer),g.viewport(0,0,this.panCacheWidth,this.panCacheHeight),g.clearColor(me,de,xe,1),g.clear(g.COLOR_BUFFER_BIT),this.drawRasterLayer(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawFilledPaths(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheRenderedSegments=this.drawVisibleSegments(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.drawTextInstances(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,e=1,t=0,a=0}this.blitPanCache(t,a,e),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawRasterLayer(e,t,a,n){if(this.rasterLayers.length===0&&this.pageRects.length===0)return;const s=this.gl;if(s.useProgram(this.rasterProgram),s.bindVertexArray(this.blitVao),s.uniform2f(this.uRasterViewport,e,t),s.uniform2f(this.uRasterCameraCenter,a,n),s.uniform1f(this.uRasterZoom,this.zoom),this.pageRects.length>0){s.activeTexture(s.TEXTURE12),s.bindTexture(s.TEXTURE_2D,this.pageBackgroundTexture),s.uniform1i(this.uRasterTex,12),s.uniform2f(this.uRasterTexSize,1,1);for(let r=0;r<this.pageRects.length;r+=4){const o=this.pageRects[r],l=this.pageRects[r+1],c=this.pageRects[r+2],h=this.pageRects[r+3],x=Math.max(c-o,1e-6),p=Math.max(h-l,1e-6);s.uniform4f(this.uRasterMatrixABCD,x,0,0,p),s.uniform2f(this.uRasterMatrixEF,o,l),s.drawArrays(s.TRIANGLE_STRIP,0,4)}}if(this.rasterLayers.length!==0){s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);for(const r of this.rasterLayers)s.activeTexture(s.TEXTURE12),s.bindTexture(s.TEXTURE_2D,r.texture),s.uniform1i(this.uRasterTex,12),s.uniform2f(this.uRasterTexSize,r.width,r.height),s.uniform4f(this.uRasterMatrixABCD,r.matrix[0],r.matrix[1],r.matrix[2],r.matrix[3]),s.uniform2f(this.uRasterMatrixEF,r.matrix[4],r.matrix[5]),s.drawArrays(s.TRIANGLE_STRIP,0,4);s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA)}}drawFilledPaths(e,t,a,n,s=this.zoom){if(!this.scene||this.fillPathCount<=0)return 0;const r=this.gl;return r.useProgram(this.fillProgram),r.bindVertexArray(this.fillVao),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.fillPathMetaTextureC),r.activeTexture(r.TEXTURE10),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureA),r.activeTexture(r.TEXTURE11),r.bindTexture(r.TEXTURE_2D,this.fillSegmentTextureB),r.uniform1i(this.uFillPathMetaTexA,7),r.uniform1i(this.uFillPathMetaTexB,8),r.uniform1i(this.uFillPathMetaTexC,9),r.uniform1i(this.uFillSegmentTexA,10),r.uniform1i(this.uFillSegmentTexB,11),r.uniform2i(this.uFillPathMetaTexSize,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight),r.uniform2i(this.uFillSegmentTexSize,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight),r.uniform2f(this.uFillViewport,e,t),r.uniform2f(this.uFillCameraCenter,a,n),r.uniform1f(this.uFillZoom,s),r.uniform1f(this.uFillAAScreenPx,1),r.uniform4f(this.uFillVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.fillPathCount),this.fillPathCount}drawVisibleSegments(e,t,a,n,s=this.zoom){const r=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(r===0)return 0;const o=this.gl;o.useProgram(this.segmentProgram),o.bindVertexArray(this.segmentVao);const l=this.usingAllSegments?this.allSegmentIdBuffer:this.visibleSegmentIdBuffer;return o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(1),o.vertexAttribPointer(1,1,o.FLOAT,!1,4,0),o.vertexAttribDivisor(1,1),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this.segmentTextureA),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.segmentTextureB),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.segmentTextureC),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.segmentTextureD),o.uniform1i(this.uSegmentTexA,0),o.uniform1i(this.uSegmentTexB,1),o.uniform1i(this.uSegmentStyleTex,2),o.uniform1i(this.uSegmentBoundsTex,3),o.uniform2i(this.uSegmentTexSize,this.segmentTextureWidth,this.segmentTextureHeight),o.uniform2f(this.uViewport,e,t),o.uniform2f(this.uCameraCenter,a,n),o.uniform1f(this.uZoom,s),o.uniform1f(this.uAAScreenPx,1),o.uniform1f(this.uStrokeCurveEnabled,this.strokeCurveEnabled?1:0),o.uniform4f(this.uStrokeVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,r),r}drawTextInstances(e,t,a,n,s=this.zoom){if(!this.scene||this.textInstanceCount<=0)return 0;const r=this.gl;return r.useProgram(this.textProgram),r.bindVertexArray(this.textVao),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureA),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureB),r.activeTexture(r.TEXTURE4),r.bindTexture(r.TEXTURE_2D,this.textInstanceTextureC),r.activeTexture(r.TEXTURE5),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureA),r.activeTexture(r.TEXTURE6),r.bindTexture(r.TEXTURE_2D,this.textGlyphMetaTextureB),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureA),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,this.textGlyphSegmentTextureB),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,this.textGlyphRasterMetaTexture),r.activeTexture(r.TEXTURE13),r.bindTexture(r.TEXTURE_2D,this.textRasterAtlasTexture),r.uniform1i(this.uTextInstanceTexA,2),r.uniform1i(this.uTextInstanceTexB,3),r.uniform1i(this.uTextInstanceTexC,4),r.uniform1i(this.uTextGlyphMetaTexA,5),r.uniform1i(this.uTextGlyphMetaTexB,6),r.uniform1i(this.uTextGlyphSegmentTexA,7),r.uniform1i(this.uTextGlyphSegmentTexB,8),r.uniform1i(this.uTextGlyphRasterMetaTex,9),r.uniform1i(this.uTextRasterAtlasTex,13),r.uniform2i(this.uTextInstanceTexSize,this.textInstanceTextureWidth,this.textInstanceTextureHeight),r.uniform2i(this.uTextGlyphMetaTexSize,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight),r.uniform2i(this.uTextGlyphSegmentTexSize,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight),r.uniform2f(this.uTextRasterAtlasSize,this.textRasterAtlasWidth,this.textRasterAtlasHeight),r.uniform2f(this.uTextViewport,e,t),r.uniform2f(this.uTextCameraCenter,a,n),r.uniform1f(this.uTextZoom,s),r.uniform1f(this.uTextAAScreenPx,1.25),r.uniform1f(this.uTextCurveEnabled,this.strokeCurveEnabled?1:0),r.uniform1f(this.uTextVectorOnly,this.textVectorOnly?1:0),r.uniform4f(this.uTextVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,this.textInstanceCount),this.textInstanceCount}blitPanCache(e,t,a){if(!this.panCacheTexture)return;const n=this.gl;n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,this.canvas.width,this.canvas.height),n.clearColor(me,de,xe,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(this.blitProgram),n.bindVertexArray(this.blitVao),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.panCacheTexture),n.uniform1i(this.uCacheTex,0),n.uniform2f(this.uViewportPx,this.canvas.width,this.canvas.height),n.uniform2f(this.uCacheSizePx,this.panCacheWidth,this.panCacheHeight),n.uniform2f(this.uOffsetPx,e,t),n.uniform1f(this.uSampleScale,a),n.disable(n.BLEND),n.drawArrays(n.TRIANGLE_STRIP,0,4),n.enable(n.BLEND)}ensurePanCacheResources(){const e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(t,Math.max(this.canvas.width+st*2,Math.ceil(this.canvas.width*nt))),n=Math.min(t,Math.max(this.canvas.height+st*2,Math.ceil(this.canvas.height*nt)));if(a<this.canvas.width||n<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheFramebuffer&&this.panCacheWidth===a&&this.panCacheHeight===n)return!0;this.destroyPanCacheResources();const s=e.createTexture();if(!s)return!1;e.bindTexture(e.TEXTURE_2D,s),Ar(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,a,n,0,e.RGBA,e.UNSIGNED_BYTE,null);const r=e.createFramebuffer();if(!r)return e.deleteTexture(s),!1;e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const o=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.bindFramebuffer(e.FRAMEBUFFER,null),o!==e.FRAMEBUFFER_COMPLETE?(e.deleteFramebuffer(r),e.deleteTexture(s),!1):(this.panCacheTexture=s,this.panCacheFramebuffer=r,this.panCacheWidth=a,this.panCacheHeight=n,this.panCacheValid=!1,!0)}destroyPanCacheResources(){this.panCacheFramebuffer&&(this.gl.deleteFramebuffer(this.panCacheFramebuffer),this.panCacheFramebuffer=null),this.panCacheTexture&&(this.gl.deleteTexture(this.panCacheTexture),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1}destroyVectorMinifyResources(){this.vectorMinifyFramebuffer&&(this.gl.deleteFramebuffer(this.vectorMinifyFramebuffer),this.vectorMinifyFramebuffer=null),this.vectorMinifyTexture&&(this.gl.deleteTexture(this.vectorMinifyTexture),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorMinifyWarmupPending=!1}updateVisibleSet(e=this.cameraCenterX,t=this.cameraCenterY,a=this.canvas.width,n=this.canvas.height,s=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(s,1e-6),l=a/(2*o),c=n/(2*o),h=Math.max(16/o,this.scene.maxHalfWidth*2),x=e-l-h,p=e+l+h,m=t-c-h,d=t+c+h,C=fe(Math.floor((x-r.minX)/r.cellWidth),r.gridWidth),g=fe(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),v=fe(Math.floor((m-r.minY)/r.cellHeight),r.gridHeight),f=fe(Math.floor((d-r.minY)/r.cellHeight),r.gridHeight);this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let u=0;for(let S=v;S<=f;S+=1){let y=S*r.gridWidth+C;for(let L=C;L<=g;L+=1){const I=r.offsets[y],_=r.counts[y];for(let w=0;w<_;w+=1){const b=r.indices[I+w];this.segmentMarks[b]!==this.markToken&&(this.segmentMarks[b]=this.markToken,!(this.segmentMaxX[b]<x||this.segmentMinX[b]>p||this.segmentMaxY[b]<m||this.segmentMinY[b]>d)&&(this.visibleSegmentIds[u]=b,u+=1))}y+=1}}this.visibleSegmentCount=u;const T=this.visibleSegmentIds.subarray(0,u);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.visibleSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,T,this.gl.DYNAMIC_DRAW)}uploadRasterLayers(e){const t=this.gl;for(const a of this.rasterLayers)t.deleteTexture(a.texture);this.rasterLayers=[];for(const a of this.getSceneRasterLayers(e)){const n=t.createTexture();if(!n)continue;t.bindTexture(t.TEXTURE_2D,n),ct(t);const s=a.data.subarray(0,a.width*a.height*4),r=Pr(s);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,a.width,a.height,0,t.RGBA,t.UNSIGNED_BYTE,r),t.generateMipmap(t.TEXTURE_2D);const o=new Float32Array(6);a.matrix.length>=6?(o[0]=a.matrix[0],o[1]=a.matrix[1],o[2]=a.matrix[2],o[3]=a.matrix[3],o[4]=a.matrix[4],o[5]=a.matrix[5]):(o[0]=1,o[3]=1),this.rasterLayers.push({texture:n,matrix:o,width:a.width,height:a.height})}}getSceneRasterLayers(e){const t=[];if(Array.isArray(e.rasterLayers))for(const s of e.rasterLayers){const r=Math.max(0,Math.trunc(s?.width??0)),o=Math.max(0,Math.trunc(s?.height??0));r<=0||o<=0||!(s.data instanceof Uint8Array)||s.data.length<r*o*4||t.push({width:r,height:o,data:s.data,matrix:s.matrix instanceof Float32Array?s.matrix:new Float32Array(s.matrix)})}if(t.length>0)return t;const a=Math.max(0,Math.trunc(e.rasterLayerWidth)),n=Math.max(0,Math.trunc(e.rasterLayerHeight));return a<=0||n<=0||e.rasterLayerData.length<a*n*4||t.push({width:a,height:n,data:e.rasterLayerData,matrix:e.rasterLayerMatrix}),t}uploadFillPaths(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),n=re(e.fillPathCount,a),s=re(e.fillSegmentCount,a);this.fillPathMetaTextureWidth=n.width,this.fillPathMetaTextureHeight=n.height,this.fillSegmentTextureWidth=s.width,this.fillSegmentTextureHeight=s.height;const r=n.width*n.height,o=s.width*s.height,l=new Float32Array(r*4);l.set(e.fillPathMetaA);const c=new Float32Array(r*4);c.set(e.fillPathMetaB);const h=new Float32Array(r*4);h.set(e.fillPathMetaC);const x=new Float32Array(o*4);x.set(e.fillSegmentsA);const p=new Float32Array(o*4);return p.set(e.fillSegmentsB),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,l),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,c),t.bindTexture(t.TEXTURE_2D,this.fillPathMetaTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,t.RGBA,t.FLOAT,h),t.bindTexture(t.TEXTURE_2D,this.fillSegmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,t.RGBA,t.FLOAT,x),t.bindTexture(t.TEXTURE_2D,this.fillSegmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,t.RGBA,t.FLOAT,p),{pathMetaTextureWidth:this.fillPathMetaTextureWidth,pathMetaTextureHeight:this.fillPathMetaTextureHeight,segmentTextureWidth:this.fillSegmentTextureWidth,segmentTextureHeight:this.fillSegmentTextureHeight}}uploadSegments(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),n=Math.ceil(Math.sqrt(e.segmentCount));if(this.segmentTextureWidth=B(n,1,a),this.segmentTextureHeight=Math.max(1,Math.ceil(e.segmentCount/this.segmentTextureWidth)),this.segmentTextureHeight>a)throw new Error("Segment texture exceeds GPU limits for this browser/GPU.");const s=this.segmentTextureWidth*this.segmentTextureHeight,r=new Float32Array(s*4);r.set(e.endpoints);const o=new Float32Array(s*4);o.set(e.primitiveMeta);const l=new Float32Array(s*4);l.set(e.styles);const c=new Float32Array(s*4);return c.set(e.primitiveBounds),t.bindTexture(t.TEXTURE_2D,this.segmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,r),t.bindTexture(t.TEXTURE_2D,this.segmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,o),t.bindTexture(t.TEXTURE_2D,this.segmentTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,l),t.bindTexture(t.TEXTURE_2D,this.segmentTextureD),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,t.RGBA,t.FLOAT,c),{textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:a}}uploadTextData(e){const t=this.gl,a=t.getParameter(t.MAX_TEXTURE_SIZE),n=re(e.textInstanceCount,a),s=re(e.textGlyphCount,a),r=re(e.textGlyphSegmentCount,a);this.textInstanceTextureWidth=n.width,this.textInstanceTextureHeight=n.height,this.textGlyphMetaTextureWidth=s.width,this.textGlyphMetaTextureHeight=s.height,this.textGlyphSegmentTextureWidth=r.width,this.textGlyphSegmentTextureHeight=r.height;const o=n.width*n.height,l=s.width*s.height,c=r.width*r.height,h=new Float32Array(o*4);h.set(e.textInstanceA);const x=new Float32Array(o*4);x.set(e.textInstanceB);const p=new Float32Array(o*4);p.set(e.textInstanceC);const m=new Float32Array(l*4);m.set(e.textGlyphMetaA);const d=new Float32Array(l*4);d.set(e.textGlyphMetaB);const C=new Float32Array(l*4),g=vt(e,a);g?(C.set(g.glyphUvRects),this.textRasterAtlasWidth=g.width,this.textRasterAtlasHeight=g.height):(this.textRasterAtlasWidth=1,this.textRasterAtlasHeight=1);const v=new Float32Array(c*4);v.set(e.textGlyphSegmentsA);const f=new Float32Array(c*4);if(f.set(e.textGlyphSegmentsB),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,h),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,x),t.bindTexture(t.TEXTURE_2D,this.textInstanceTextureC),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,t.RGBA,t.FLOAT,p),t.bindTexture(t.TEXTURE_2D,this.textGlyphMetaTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,m),t.bindTexture(t.TEXTURE_2D,this.textGlyphMetaTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,d),t.bindTexture(t.TEXTURE_2D,this.textGlyphRasterMetaTexture),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,t.RGBA,t.FLOAT,C),t.bindTexture(t.TEXTURE_2D,this.textGlyphSegmentTextureA),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,t.RGBA,t.FLOAT,v),t.bindTexture(t.TEXTURE_2D,this.textGlyphSegmentTextureB),E(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,t.RGBA,t.FLOAT,f),t.bindTexture(t.TEXTURE_2D,this.textRasterAtlasTexture),ct(t),g)t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.textRasterAtlasWidth,this.textRasterAtlasHeight,0,t.RGBA,t.UNSIGNED_BYTE,g.rgba);else{const u=new Uint8Array([0,0,0,0]);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,u)}return t.generateMipmap(t.TEXTURE_2D),{instanceTextureWidth:this.textInstanceTextureWidth,instanceTextureHeight:this.textInstanceTextureHeight,glyphMetaTextureWidth:this.textGlyphMetaTextureWidth,glyphMetaTextureHeight:this.textGlyphMetaTextureHeight,glyphSegmentTextureWidth:this.textGlyphSegmentTextureWidth,glyphSegmentTextureHeight:this.textGlyphSegmentTextureHeight}}buildSegmentBounds(e){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let t=0;t<this.segmentCount;t+=1){const a=t*4,n=t*4,s=e.styles[n]+.35;this.segmentMinX[t]=e.primitiveBounds[a]-s,this.segmentMinY[t]=e.primitiveBounds[a+1]-s,this.segmentMaxX[t]=e.primitiveBounds[a+2]+s,this.segmentMaxY[t]=e.primitiveBounds[a+3]+s}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=fr}initializeGeometry(){const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer);const t=new Float32Array([-1,-1,1,-1,-1,1,1,1]);e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindVertexArray(this.segmentVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allSegmentIdBuffer),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(this.fillVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allFillPathIdBuffer),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(3,1),e.bindVertexArray(this.textVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindBuffer(e.ARRAY_BUFFER,this.allTextInstanceIdBuffer),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,4,0),e.vertexAttribDivisor(2,1),e.bindVertexArray(this.blitVao),e.bindBuffer(e.ARRAY_BUFFER,this.cornerBuffer),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0),e.vertexAttribDivisor(0,0),e.bindVertexArray(null)}initializeState(){const e=this.gl;e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.enable(e.BLEND),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)}uploadPageBackgroundTexture(){const e=this.gl,t=this.pageBackgroundColor,a=new Uint8Array([Math.round(t[0]*255),Math.round(t[1]*255),Math.round(t[2]*255),Math.round(t[3]*255)]);e.bindTexture(e.TEXTURE_2D,this.pageBackgroundTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a),e.bindTexture(e.TEXTURE_2D,null)}clientToWorld(e,t){return this.clientToWorldAt(e,t,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(e,t,a,n,s){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:(l-this.canvas.width*.5)/s+a,y:(c-this.canvas.height*.5)/s+n}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(e){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const t=e-this.lastPanFrameTimeMs;if(t>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,n=this.cameraCenterY-this.lastPanFrameCameraY;let s=a*1e3/t,r=n*1e3/t;const o=Math.hypot(s,r);if(Number.isFinite(o)&&o>=ot){if(o>lt){const l=lt/o;s*=l,r*=l}this.panVelocityWorldX=s,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=e}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=e}updateCameraWithDamping(e){let t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>j||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>j,a=Math.abs(this.targetZoom-this.zoom)>he;if(!t&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=e,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=e-16);const n=B(e-this.lastCameraAnimationTimeMs,0,yr);this.lastCameraAnimationTimeMs=e;const s=n/1e3,r=1-Math.exp(-De*s),o=1-Math.exp(-24*s);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=he&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),t=!1}else t&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=j&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=j&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>j||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>j,a=Math.abs(this.targetZoom-this.zoom)>he,t||a}computeCameraCenterForAnchor(e,t,a,n,s){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:a-(l-this.canvas.width*.5)/s,y:n-(c-this.canvas.height*.5)/s}}createProgram(e,t){const a=this.gl,n=this.compileShader(a.VERTEX_SHADER,e),s=this.compileShader(a.FRAGMENT_SHADER,t),r=a.createProgram();if(!r)throw new Error("Unable to create WebGL program.");if(a.attachShader(r,n),a.attachShader(r,s),a.linkProgram(r),!a.getProgramParameter(r,a.LINK_STATUS)){const l=a.getProgramInfoLog(r)||"Unknown linker error.";throw a.deleteProgram(r),new Error(`Program link failed: ${l}`)}return a.deleteShader(n),a.deleteShader(s),r}compileShader(e,t){const a=this.gl.createShader(e);if(!a)throw new Error("Unable to create shader.");if(this.gl.shaderSource(a,t),this.gl.compileShader(a),!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)){const s=this.gl.getShaderInfoLog(a)||"Unknown shader compiler error.";throw this.gl.deleteShader(a),new Error(`Shader compilation failed: ${s}`)}return a}createVertexArray(){const e=this.gl.createVertexArray();if(!e)throw new Error("Unable to create VAO.");return e}mustCreateBuffer(){const e=this.gl.createBuffer();if(!e)throw new Error("Unable to create WebGL buffer.");return e}mustCreateTexture(){const e=this.gl.createTexture();if(!e)throw new Error("Unable to create WebGL texture.");return e}mustGetUniformLocation(e,t){const a=this.gl.getUniformLocation(e,t);if(!a)throw new Error(`Missing uniform: ${t}`);return a}}function E(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Ar(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Mr(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function ct(i){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR_MIPMAP_LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Pr(i){const e=new Uint8Array(i.length);for(let t=0;t+3<i.length;t+=4){const a=i[t+3];if(a<=0){e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;continue}if(a>=255){e[t]=i[t],e[t+1]=i[t+1],e[t+2]=i[t+2],e[t+3]=255;continue}const n=a/255;e[t]=Math.round(i[t]*n),e[t+1]=Math.round(i[t+1]*n),e[t+2]=Math.round(i[t+2]*n),e[t+3]=a}return e}function re(i,e){const t=Math.max(1,i),a=Math.ceil(Math.sqrt(t)),n=B(a,1,e),s=Math.max(1,Math.ceil(t/n));if(s>e)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:n,height:s}}function Rr(i){return i.pageRects instanceof Float32Array&&i.pageRects.length>=4?new Float32Array(i.pageRects):new Float32Array([i.pageBounds.minX,i.pageBounds.minY,i.pageBounds.maxX,i.pageBounds.maxY])}function B(i,e,t){return i<e?e:i>t?t:i}function fe(i,e){return i<0?0:i>=e?e-1:i}const Er=140,Ir=.92,ut=3e5,ht=1.8,mt=96,wr=1e-5,Br=.75,Fr=1.3333333333,Lr=2,Dr=2.25,_e=24,J=1e-4,ge=1e-5,_r=64,dt=5,xt=2e4,Vr=120,ae={r:160/255,g:169/255,b:175/255,a:1},Gr=16,U=64,Ur=12,pe=48,Or=4,Te=16,Xr=8,Ce=32,zr=`
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
`,Hr=`
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
`,Yr=`
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
`,Nr=`
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
`;class Ye{canvas;gpuDevice;gpuContext;presentationFormat;strokePipeline;fillPipeline;textPipeline;rasterPipeline;blitPipeline;vectorCompositePipeline;cameraUniformBuffer;blitUniformBuffer;vectorCompositeUniformBuffer;panCacheSampler;rasterLayerSampler;vectorCompositeSampler;strokeBindGroupLayout;fillBindGroupLayout;textBindGroupLayout;rasterBindGroupLayout;blitBindGroupLayout;vectorCompositeBindGroupLayout;strokeBindGroupAll=null;strokeBindGroupVisible=null;fillBindGroup=null;textBindGroup=null;blitBindGroup=null;vectorCompositeBindGroup=null;segmentTextureA=null;segmentTextureB=null;segmentTextureC=null;segmentTextureD=null;fillPathMetaTextureA=null;fillPathMetaTextureB=null;fillPathMetaTextureC=null;fillSegmentTextureA=null;fillSegmentTextureB=null;textInstanceTextureA=null;textInstanceTextureB=null;textInstanceTextureC=null;rasterLayerResources=[];pageBackgroundResources=[];textGlyphMetaTextureA=null;textGlyphMetaTextureB=null;textGlyphRasterMetaTexture=null;textGlyphSegmentTextureA=null;textGlyphSegmentTextureB=null;textRasterAtlasTexture=null;pageBackgroundTexture=null;segmentIdBufferAll=null;segmentIdBufferVisible=null;panCacheTexture=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyWidth=0;vectorMinifyHeight=0;scene=null;sceneStats=null;grid=null;frameListener=null;rafHandle=0;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=8192;strokeCurveEnabled=!0;textVectorOnly=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;panOptimizationEnabled=!0;isPanInteracting=!1;hasCameraInteractionSinceSceneLoad=!1;lastInteractionTime=Number.NEGATIVE_INFINITY;needsVisibleSetUpdate=!1;segmentCount=0;fillPathCount=0;textInstanceCount=0;visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;allSegmentIds=new Uint32Array(0);visibleSegmentIds=new Uint32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;constructor(e,t,a,n){this.canvas=e,this.gpuDevice=t,this.gpuContext=a,this.presentationFormat=n,this.configureContext();const s=globalThis.GPUBufferUsage,r=globalThis.GPUShaderStage;this.cameraUniformBuffer=this.gpuDevice.createBuffer({size:U,usage:s.UNIFORM|s.COPY_DST}),this.blitUniformBuffer=this.gpuDevice.createBuffer({size:pe,usage:s.UNIFORM|s.COPY_DST}),this.vectorCompositeUniformBuffer=this.gpuDevice.createBuffer({size:Te,usage:s.UNIFORM|s.COPY_DST}),this.strokeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,buffer:{type:"read-only-storage"}}]}),this.fillBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.textBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX|r.FRAGMENT,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:6,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:7,visibility:r.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:r.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:10,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.rasterBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:U}},{binding:1,visibility:r.VERTEX,buffer:{type:"uniform",minBindingSize:Ce}},{binding:2,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:r.FRAGMENT,texture:{sampleType:"float"}}]}),this.blitBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:pe}}]}),this.vectorCompositeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:r.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:r.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:r.FRAGMENT,buffer:{type:"uniform",minBindingSize:Te}}]});const o=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.strokeBindGroupLayout]}),l=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.fillBindGroupLayout]}),c=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.textBindGroupLayout]}),h=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.rasterBindGroupLayout]}),x=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.blitBindGroupLayout]}),p=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.vectorCompositeBindGroupLayout]});this.strokePipeline=this.createPipeline(zr,"vsMain","fsMain",o),this.fillPipeline=this.createPipeline(Wr,"vsMain","fsMain",l),this.textPipeline=this.createPipeline(kr,"vsMain","fsMain",c),this.rasterPipeline=this.createPipeline(Hr,"vsMain","fsMain",h,!0),this.blitPipeline=this.createPipeline(Yr,"vsMain","fsMain",x),this.vectorCompositePipeline=this.createPipeline(Nr,"vsMain","fsMain",p,!0),this.panCacheSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.rasterLayerSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.vectorCompositeSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.pageBackgroundTexture=this.createRgba8Texture(1,1,new Uint8Array([255,255,255,255])),this.ensureSegmentIdBuffers(1)}static async create(e){const t=navigator;if(!t.gpu)throw new Error("WebGPU is not available in this browser.");const a=await t.gpu.requestAdapter();if(!a)throw new Error("Failed to acquire a WebGPU adapter.");const n=await a.requestDevice();typeof n.addEventListener=="function"&&n.addEventListener("uncapturederror",o=>{const l=o?.error?.message||o?.error||o;console.warn("[WebGPU uncaptured error]",l)});const s=e.getContext("webgpu");if(!s)throw new Error("Failed to acquire a WebGPU canvas context.");const r=t.gpu.getPreferredCanvasFormat?.()??"bgra8unorm";return new Ye(e,n,s,r)}setFrameListener(e){this.frameListener=e}setPanOptimizationEnabled(e){const t=!!e;this.panOptimizationEnabled!==t&&(this.panOptimizationEnabled=t,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(e){const t=!!e;this.strokeCurveEnabled!==t&&(this.strokeCurveEnabled=t,this.requestFrame())}setTextVectorOnly(e){const t=!!e;this.textVectorOnly!==t&&(this.textVectorOnly=t,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(e,t,a,n){const s=D(e,0,1),r=D(t,0,1),o=D(a,0,1),l=D(n,0,1),c=this.pageBackgroundColor;Math.abs(c[0]-s)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(c[3]-l)<=1e-6||(this.pageBackgroundColor=[s,r,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(e,t,a,n){const s=D(e,0,1),r=D(t,0,1),o=D(a,0,1),l=D(n,0,1),c=this.vectorOverrideColor;Math.abs(c[0]-s)<=1e-6&&Math.abs(c[1]-r)<=1e-6&&Math.abs(c[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[s,r,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const e=performance.now(),a=this.lastPanVelocityUpdateTimeMs>0&&e-this.lastPanVelocityUpdateTimeMs<=Vr?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(a)&&a>=dt?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/_e,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/_e,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const e=window.devicePixelRatio||1,t=Math.max(1,Math.round(this.canvas.clientWidth*e)),a=Math.max(1,Math.round(this.canvas.clientHeight*e));this.canvas.width===t&&this.canvas.height===a||(this.canvas.width=t,this.canvas.height=a,this.configureContext(),this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(e){this.scene=e,this.segmentCount=e.segmentCount,this.fillPathCount=e.fillPathCount,this.textInstanceCount=e.textInstanceCount,this.buildSegmentBounds(e),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?yt(e):null;const t=this.maxTextureSize(),a=ee(e.segmentCount,t),n=ee(e.fillPathCount,t),s=ee(e.fillSegmentCount,t),r=ee(e.textInstanceCount,t),o=ee(e.textGlyphCount,t),l=ee(e.textGlyphSegmentCount,t);this.segmentTextureWidth=a.width,this.segmentTextureHeight=a.height,this.fillPathMetaTextureWidth=n.width,this.fillPathMetaTextureHeight=n.height,this.fillSegmentTextureWidth=s.width,this.fillSegmentTextureHeight=s.height,this.textInstanceTextureWidth=r.width,this.textInstanceTextureHeight=r.height,this.textGlyphMetaTextureWidth=o.width,this.textGlyphMetaTextureHeight=o.height,this.textGlyphSegmentTextureWidth=l.width,this.textGlyphSegmentTextureHeight=l.height,this.destroyDataResources(),this.segmentTextureA=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.endpoints),this.segmentTextureB=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.primitiveMeta),this.segmentTextureC=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.styles),this.segmentTextureD=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,e.primitiveBounds),this.fillPathMetaTextureA=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaA),this.fillPathMetaTextureB=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaB),this.fillPathMetaTextureC=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,e.fillPathMetaC),this.fillSegmentTextureA=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,e.fillSegmentsA),this.fillSegmentTextureB=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,e.fillSegmentsB),this.textInstanceTextureA=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceA),this.textInstanceTextureB=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceB),this.textInstanceTextureC=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,e.textInstanceC),this.textGlyphMetaTextureA=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,e.textGlyphMetaA),this.textGlyphMetaTextureB=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,e.textGlyphMetaB),this.textGlyphSegmentTextureA=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,e.textGlyphSegmentsA),this.textGlyphSegmentTextureB=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,e.textGlyphSegmentsB);const c=new Float32Array(this.textGlyphMetaTextureWidth*this.textGlyphMetaTextureHeight*4),h=vt(e,t);h&&c.set(h.glyphUvRects),this.textGlyphRasterMetaTexture=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,c),this.textRasterAtlasTexture=h?this.createRgba8Texture(h.width,h.height,h.rgba):this.createRgba8Texture(1,1,new Uint8Array([0,0,0,0])),this.configurePageBackgroundResources(e),this.configureRasterLayers(e),this.allSegmentIds=new Uint32Array(this.segmentCount);for(let x=0;x<this.segmentCount;x+=1)this.allSegmentIds[x]=x;return this.ensureSegmentIdBuffers(Math.max(1,this.segmentCount)),this.segmentCount>0&&(this.gpuDevice.queue.writeBuffer(this.segmentIdBufferAll,0,this.allSegmentIds),this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,this.allSegmentIds)),this.fillBindGroup=this.gpuDevice.createBindGroup({layout:this.fillPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.fillPathMetaTextureA.createView()},{binding:2,resource:this.fillPathMetaTextureB.createView()},{binding:3,resource:this.fillPathMetaTextureC.createView()},{binding:4,resource:this.fillSegmentTextureA.createView()},{binding:5,resource:this.fillSegmentTextureB.createView()}]}),this.textBindGroup=this.gpuDevice.createBindGroup({layout:this.textPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.textInstanceTextureA.createView()},{binding:2,resource:this.textInstanceTextureB.createView()},{binding:3,resource:this.textInstanceTextureC.createView()},{binding:4,resource:this.textGlyphMetaTextureA.createView()},{binding:5,resource:this.textGlyphMetaTextureB.createView()},{binding:6,resource:this.textGlyphSegmentTextureA.createView()},{binding:7,resource:this.textGlyphSegmentTextureB.createView()},{binding:8,resource:this.textGlyphRasterMetaTexture.createView()},{binding:9,resource:this.rasterLayerSampler},{binding:10,resource:this.textRasterAtlasTexture.createView()}]}),this.strokeBindGroupAll=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferAll}}]}),this.strokeBindGroupVisible=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferVisible}}]}),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Uint32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:this.fillPathMetaTextureWidth,fillPathTextureHeight:this.fillPathMetaTextureHeight,fillSegmentTextureWidth:this.fillSegmentTextureWidth,fillSegmentTextureHeight:this.fillSegmentTextureHeight,textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:t,textInstanceTextureWidth:this.textInstanceTextureWidth,textInstanceTextureHeight:this.textInstanceTextureHeight,textGlyphTextureWidth:this.textGlyphMetaTextureWidth,textGlyphTextureHeight:this.textGlyphMetaTextureHeight,textSegmentTextureWidth:this.textGlyphSegmentTextureWidth,textSegmentTextureHeight:this.textGlyphSegmentTextureHeight},this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!1,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}setViewState(e){const t=Number(e.cameraCenterX),a=Number(e.cameraCenterY),n=Number(e.zoom);if(!Number.isFinite(t)||!Number.isFinite(a)||!Number.isFinite(n))return;this.cameraCenterX=t,this.cameraCenterY=a;const s=D(n,this.minZoom,this.maxZoom);this.zoom=s,this.targetCameraCenterX=t,this.targetCameraCenterY=a,this.targetZoom=s,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(e,t=64){const a=Math.max(e.maxX-e.minX,1e-4),n=Math.max(e.maxY-e.minY,1e-4),s=Math.max(1,this.canvas.width-t*2),r=Math.max(1,this.canvas.height-t*2),o=D(Math.min(s/a,r/n),this.minZoom,this.maxZoom),l=(e.minX+e.maxX)*.5,c=(e.minY+e.maxY)*.5;this.zoom=o,this.cameraCenterX=l,this.cameraCenterY=c,this.targetZoom=o,this.targetCameraCenterX=l,this.targetCameraCenterY=c,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()}panByPixels(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const a=window.devicePixelRatio||1,n=-(e*a)/this.zoom,s=t*a/this.zoom;this.cameraCenterX+=n,this.cameraCenterY+=s,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(e,t,a){const n=D(a,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const s=this.clientToWorld(e,t),r=D(this.targetZoom*n,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=e,this.zoomAnchorClientY=t,this.zoomAnchorWorldX=s.x,this.zoomAnchorWorldY=s.y,this.targetZoom=r;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,r);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.destroyDataResources(),this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.cameraUniformBuffer&&this.cameraUniformBuffer.destroy(),this.blitUniformBuffer&&this.blitUniformBuffer.destroy(),this.vectorCompositeUniformBuffer&&this.vectorCompositeUniformBuffer.destroy(),this.pageBackgroundTexture&&(this.pageBackgroundTexture.destroy(),this.pageBackgroundTexture=null)}configureContext(){this.gpuContext.configure({device:this.gpuDevice,format:this.presentationFormat,alphaMode:"opaque"})}createPipeline(e,t,a,n,s=!1){const r=this.gpuDevice.createShaderModule({code:e}),o=s?"one":"src-alpha";return this.gpuDevice.createRenderPipeline({layout:n,vertex:{module:r,entryPoint:t},fragment:{module:r,entryPoint:a,targets:[{format:this.presentationFormat,blend:{color:{srcFactor:o,dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip"}})}maxTextureSize(){const e=Number(this.gpuDevice?.limits?.maxTextureDimension2D);return Number.isFinite(e)&&e>=1?Math.floor(e):8192}ensureSegmentIdBuffers(e){const t=globalThis.GPUBufferUsage,a=Math.max(1,e)*4;this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.segmentIdBufferAll=this.gpuDevice.createBuffer({size:a,usage:t.STORAGE|t.COPY_DST}),this.segmentIdBufferVisible=this.gpuDevice.createBuffer({size:a,usage:t.STORAGE|t.COPY_DST})}requestFrame(){this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(e=>{this.rafHandle=0,this.render(e)}))}render(e=performance.now()){const t=this.updateCameraWithDamping(e);if(this.updatePanReleaseVelocitySample(e),!this.scene||this.segmentCount===0&&this.fillPathCount===0&&this.textInstanceCount===0&&this.rasterLayerResources.length===0&&this.pageBackgroundResources.length===0){this.clearToScreen(),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),t&&this.requestFrame();return}this.shouldUsePanCache(t)?this.renderWithPanCache():this.renderDirectToScreen(),t&&this.requestFrame()}shouldUsePanCache(e){return!this.panOptimizationEnabled||this.segmentCount<ut?!1:this.isPanInteracting?!0:e}renderDirectToScreen(){let e=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=ut&&(e=!1),this.needsVisibleSetUpdate){if(e){const r=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,r)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}if(e){const r=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),o=this.gpuContext.getCurrentTexture().createView(),l=this.gpuDevice.createCommandEncoder(),c=l.beginRenderPass({colorAttachments:[{view:o,clearValue:ae,loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawRasterContentIntoPass(c),this.drawVectorMinifyCompositeIntoPass(c,this.canvas.width,this.canvas.height),c.end(),this.gpuDevice.queue.submit([l.finish()]),this.frameListener?.({renderedSegments:r,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom});return}const t=this.gpuContext.getCurrentTexture().createView(),a=this.gpuDevice.createCommandEncoder(),n=a.beginRenderPass({colorAttachments:[{view:t,clearValue:ae,loadOp:"clear",storeOp:"store"}]}),s=this.drawSceneIntoPass(n,this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);n.end(),this.gpuDevice.queue.submit([a.finish()]),this.frameListener?.({renderedSegments:s,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillPathCount>0||this.segmentCount>0||this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=Dr}computeVectorMinifyZoom(e,t){const a=Math.min(e/Math.max(1,this.canvas.width),t/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,a)}renderVectorLayerIntoMinifyTarget(e,t,a,n){if(!this.vectorMinifyTexture)return 0;const s=this.computeVectorMinifyZoom(e,t),r=this.gpuDevice.createCommandEncoder(),o=r.beginRenderPass({colorAttachments:[{view:this.vectorMinifyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(e,t,a,n,s);const l=this.drawVectorContentIntoPass(o);return o.end(),this.gpuDevice.queue.submit([r.finish()]),l}drawVectorMinifyCompositeIntoPass(e,t,a){!this.vectorCompositeBindGroup||!this.vectorMinifyTexture||(this.updateVectorCompositeUniforms(t,a),e.setPipeline(this.vectorCompositePipeline),e.setBindGroup(0,this.vectorCompositeBindGroup),e.draw(4,1,0,0))}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let e=this.panCacheZoom/Math.max(this.zoom,1e-6),t=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,a=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const n=this.panCacheWidth*.5-2,s=this.panCacheHeight*.5-2,r=this.canvas.width*.5*Math.abs(e),o=this.canvas.height*.5*Math.abs(e),l=n-r,c=s-o,h=this.zoom/Math.max(this.panCacheZoom,1e-6),x=h<Br||h>Fr,m=Math.abs(this.targetZoom-this.zoom)<=ge&&Math.abs(this.panCacheZoom-this.zoom)>wr,d=l<0||c<0||Math.abs(t)>l||Math.abs(a)>c;if(!this.panCacheValid||x||d||m){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gpuDevice.createCommandEncoder(),v=g.beginRenderPass({colorAttachments:[{view:this.panCacheTexture.createView(),clearValue:ae,loadOp:"clear",storeOp:"store"}]});this.panCacheRenderedSegments=this.drawSceneIntoPass(v,this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),v.end(),this.gpuDevice.queue.submit([g.finish()]),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,e=1,t=0,a=0}this.blitPanCache(t,a,e),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawSceneIntoPass(e,t,a,n,s){return this.updateCameraUniforms(t,a,n,s),this.drawRasterContentIntoPass(e),this.drawVectorContentIntoPass(e)}drawRasterContentIntoPass(e){if(this.pageBackgroundResources.length>0){e.setPipeline(this.rasterPipeline);for(const t of this.pageBackgroundResources)e.setBindGroup(0,t.bindGroup),e.draw(4,1,0,0)}if(this.rasterLayerResources.length>0){e.setPipeline(this.rasterPipeline);for(const t of this.rasterLayerResources)e.setBindGroup(0,t.bindGroup),e.draw(4,1,0,0)}}drawVectorContentIntoPass(e){this.fillPathCount>0&&this.fillBindGroup&&(e.setPipeline(this.fillPipeline),e.setBindGroup(0,this.fillBindGroup),e.draw(4,this.fillPathCount,0,0));let t=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(t>0){const a=this.usingAllSegments?this.strokeBindGroupAll:this.strokeBindGroupVisible;a&&(e.setPipeline(this.strokePipeline),e.setBindGroup(0,a),e.draw(4,t,0,0))}return this.textInstanceCount>0&&this.textBindGroup&&(e.setPipeline(this.textPipeline),e.setBindGroup(0,this.textBindGroup),e.draw(4,this.textInstanceCount,0,0)),t}updateCameraUniforms(e,t,a,n,s=this.zoom){const r=new Float32Array(Gr);r[0]=e,r[1]=t,r[2]=a,r[3]=n,r[4]=s,r[5]=1,r[6]=this.strokeCurveEnabled?1:0,r[7]=1.25,r[8]=this.strokeCurveEnabled?1:0,r[9]=1,r[10]=this.textVectorOnly?1:0,r[11]=0,r[12]=this.vectorOverrideColor[0],r[13]=this.vectorOverrideColor[1],r[14]=this.vectorOverrideColor[2],r[15]=this.vectorOverrideOpacity,ve(r,U,"camera"),this.gpuDevice.queue.writeBuffer(this.cameraUniformBuffer,0,r)}updateVectorCompositeUniforms(e,t){const a=new Float32Array(Or);a[0]=e,a[1]=t,a[2]=0,a[3]=0,ve(a,Te,"vector composite"),this.gpuDevice.queue.writeBuffer(this.vectorCompositeUniformBuffer,0,a)}updateBlitUniforms(e,t,a){const n=new Float32Array(Ur);n[0]=this.canvas.width,n[1]=this.canvas.height,n[2]=this.panCacheWidth,n[3]=this.panCacheHeight,n[4]=e,n[5]=t,n[6]=a,n[7]=0,n[8]=0,n[9]=0,n[10]=0,n[11]=0,ve(n,pe,"blit"),this.gpuDevice.queue.writeBuffer(this.blitUniformBuffer,0,n)}blitPanCache(e,t,a){if(!this.panCacheTexture||!this.blitBindGroup){this.renderDirectToScreen();return}this.updateBlitUniforms(e,t,a);const n=this.gpuContext.getCurrentTexture().createView(),s=this.gpuDevice.createCommandEncoder(),r=s.beginRenderPass({colorAttachments:[{view:n,clearValue:ae,loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.blitPipeline),r.setBindGroup(0,this.blitBindGroup),r.draw(4,1,0,0),r.end(),this.gpuDevice.queue.submit([s.finish()])}ensureVectorMinifyResources(){const e=this.maxTextureSize(),t=e/Math.max(1,this.canvas.width),a=e/Math.max(1,this.canvas.height),n=Math.max(1,Math.min(Lr,t,a)),s=Math.max(this.canvas.width,Math.floor(this.canvas.width*n)),r=Math.max(this.canvas.height,Math.floor(this.canvas.height*n));if(s<this.canvas.width||r<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyWidth===s&&this.vectorMinifyHeight===r&&this.vectorCompositeBindGroup)return!0;this.destroyVectorMinifyResources();const o=globalThis.GPUTextureUsage;return this.vectorMinifyTexture=this.gpuDevice.createTexture({size:{width:s,height:r,depthOrArrayLayers:1},format:this.presentationFormat,usage:o.RENDER_ATTACHMENT|o.TEXTURE_BINDING}),this.vectorMinifyWidth=s,this.vectorMinifyHeight=r,this.vectorCompositeBindGroup=this.gpuDevice.createBindGroup({layout:this.vectorCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.vectorCompositeSampler},{binding:1,resource:this.vectorMinifyTexture.createView()},{binding:2,resource:{buffer:this.vectorCompositeUniformBuffer,size:Te}}]}),!0}ensurePanCacheResources(){const e=this.maxTextureSize(),t=Math.min(e,Math.max(this.canvas.width+mt*2,Math.ceil(this.canvas.width*ht))),a=Math.min(e,Math.max(this.canvas.height+mt*2,Math.ceil(this.canvas.height*ht)));if(t<this.canvas.width||a<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheWidth===t&&this.panCacheHeight===a&&this.blitBindGroup)return!0;this.destroyPanCacheResources();const n=globalThis.GPUTextureUsage;return this.panCacheTexture=this.gpuDevice.createTexture({size:{width:t,height:a,depthOrArrayLayers:1},format:this.presentationFormat,usage:n.RENDER_ATTACHMENT|n.TEXTURE_BINDING}),this.panCacheWidth=t,this.panCacheHeight=a,this.panCacheValid=!1,this.blitBindGroup=this.gpuDevice.createBindGroup({layout:this.blitPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.panCacheSampler},{binding:1,resource:this.panCacheTexture.createView()},{binding:2,resource:{buffer:this.blitUniformBuffer,size:pe}}]}),!0}destroyPanCacheResources(){this.panCacheTexture&&(this.panCacheTexture.destroy(),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1,this.blitBindGroup=null}destroyVectorMinifyResources(){this.vectorMinifyTexture&&(this.vectorMinifyTexture.destroy(),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorCompositeBindGroup=null}updateVisibleSet(e=this.cameraCenterX,t=this.cameraCenterY,a=this.canvas.width,n=this.canvas.height,s=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const r=this.grid,o=Math.max(s,1e-6),l=a/(2*o),c=n/(2*o),h=Math.max(16/o,this.scene.maxHalfWidth*2),x=e-l-h,p=e+l+h,m=t-c-h,d=t+c+h,C=ye(Math.floor((x-r.minX)/r.cellWidth),r.gridWidth),g=ye(Math.floor((p-r.minX)/r.cellWidth),r.gridWidth),v=ye(Math.floor((m-r.minY)/r.cellHeight),r.gridHeight),f=ye(Math.floor((d-r.minY)/r.cellHeight),r.gridHeight),u=(g-C+1)*(f-v+1),T=r.gridWidth*r.gridHeight;if(!this.isInteractionActive()&&u>=T*Ir){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let S=0;for(let y=v;y<=f;y+=1){let L=y*r.gridWidth+C;for(let I=C;I<=g;I+=1){const _=r.offsets[L],w=r.counts[L];for(let b=0;b<w;b+=1){const R=r.indices[_+b];this.segmentMarks[R]!==this.markToken&&(this.segmentMarks[R]=this.markToken,!(this.segmentMaxX[R]<x||this.segmentMinX[R]>p||this.segmentMaxY[R]<m||this.segmentMinY[R]>d)&&(this.visibleSegmentIds[S]=R,S+=1))}L+=1}}if(this.visibleSegmentCount=S,this.segmentIdBufferVisible&&S>0){const y=this.visibleSegmentIds.subarray(0,S);this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,y)}}buildSegmentBounds(e){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let t=0;t<this.segmentCount;t+=1){const a=t*4,n=t*4,s=e.styles[n]+.35;this.segmentMinX[t]=e.primitiveBounds[a]-s,this.segmentMinY[t]=e.primitiveBounds[a+1]-s,this.segmentMaxX[t]=e.primitiveBounds[a+2]+s,this.segmentMaxY[t]=e.primitiveBounds[a+3]+s}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=Er}configureRasterLayers(e){this.destroyRasterLayerResources();for(const t of this.getSceneRasterLayers(e)){const a=new Float32Array(6);t.matrix.length>=6?(a[0]=t.matrix[0],a[1]=t.matrix[1],a[2]=t.matrix[2],a[3]=t.matrix[3],a[4]=t.matrix[4],a[5]=t.matrix[5]):(a[0]=1,a[3]=1);const n=t.data.subarray(0,t.width*t.height*4),s=qr(n),r=this.createRgba8Texture(t.width,t.height,s);this.rasterLayerResources.push(this.createRasterLayerResource(a,r))}}configurePageBackgroundResources(e){if(this.destroyPageBackgroundResources(),this.pageBackgroundTexture||this.uploadPageBackgroundTexture(),!this.pageBackgroundTexture)return;const t=Kr(e);for(let a=0;a+3<t.length;a+=4){const n=t[a],s=t[a+1],r=t[a+2],o=t[a+3];if(![n,s,r,o].every(Number.isFinite))continue;const l=Math.max(r-n,1e-6),c=Math.max(o-s,1e-6),h=new Float32Array([l,0,0,c,n,s]);this.pageBackgroundResources.push(this.createRasterLayerResource(h,this.pageBackgroundTexture))}}getSceneRasterLayers(e){const t=[];if(Array.isArray(e.rasterLayers))for(const s of e.rasterLayers){const r=Math.max(0,Math.trunc(s?.width??0)),o=Math.max(0,Math.trunc(s?.height??0));r<=0||o<=0||!(s.data instanceof Uint8Array)||s.data.length<r*o*4||t.push({width:r,height:o,data:s.data,matrix:s.matrix instanceof Float32Array?s.matrix:new Float32Array(s.matrix)})}if(t.length>0)return t;const a=Math.max(0,Math.trunc(e.rasterLayerWidth)),n=Math.max(0,Math.trunc(e.rasterLayerHeight));return a<=0||n<=0||e.rasterLayerData.length<a*n*4||t.push({width:a,height:n,data:e.rasterLayerData,matrix:e.rasterLayerMatrix}),t}destroyRasterLayerResources(){for(const e of this.rasterLayerResources)e.texture&&e.texture.destroy(),e.uniformBuffer&&e.uniformBuffer.destroy();this.rasterLayerResources=[]}destroyPageBackgroundResources(){for(const e of this.pageBackgroundResources)e.uniformBuffer&&e.uniformBuffer.destroy();this.pageBackgroundResources=[]}uploadPageBackgroundTexture(){const e=Math.round(this.pageBackgroundColor[3]*255),t=e/255,a=new Uint8Array([Math.round(this.pageBackgroundColor[0]*t*255),Math.round(this.pageBackgroundColor[1]*t*255),Math.round(this.pageBackgroundColor[2]*t*255),e]);if(!this.pageBackgroundTexture){this.pageBackgroundTexture=this.createRgba8Texture(1,1,a);return}this.writeRgba8Texture(this.pageBackgroundTexture,1,1,a,0)}createRasterLayerResource(e,t){const a=globalThis.GPUBufferUsage,n=new Float32Array(Xr);n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=0,n[7]=0,ve(n,Ce,"raster");const s=this.gpuDevice.createBuffer({size:Ce,usage:a.UNIFORM|a.COPY_DST});this.gpuDevice.queue.writeBuffer(s,0,n);const r=this.gpuDevice.createBindGroup({layout:this.rasterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:U}},{binding:1,resource:{buffer:s,size:Ce}},{binding:2,resource:this.rasterLayerSampler},{binding:3,resource:t.createView()}]});return{texture:t,uniformBuffer:s,bindGroup:r}}createFloatTexture(e,t,a){const n=globalThis.GPUTextureUsage,s=this.gpuDevice.createTexture({size:{width:e,height:t,depthOrArrayLayers:1},format:"rgba32float",usage:n.TEXTURE_BINDING|n.COPY_DST}),r=$r(a,e,t);return this.writeFloatTexture(s,e,t,r),s}createRgba8Texture(e,t,a){const n=globalThis.GPUTextureUsage,s=Qr(a,e,t),r=this.gpuDevice.createTexture({size:{width:e,height:t,depthOrArrayLayers:1},format:"rgba8unorm",mipLevelCount:s.length,usage:n.TEXTURE_BINDING|n.COPY_DST});for(let o=0;o<s.length;o+=1){const l=s[o],c=Zr(l.data,l.width,l.height);this.writeRgba8Texture(r,l.width,l.height,c,o)}return r}writeFloatTexture(e,t,a,n){const s=t*16,r=ft(s,256);if(a<=1&&s===r){this.gpuDevice.queue.writeTexture({texture:e},n,{offset:0},{width:t,height:a,depthOrArrayLayers:1});return}if(s===r){this.gpuDevice.queue.writeTexture({texture:e},n,{offset:0,bytesPerRow:s,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1});return}const o=new Uint8Array(n.buffer,n.byteOffset,n.byteLength),l=new Uint8Array(r*a);for(let c=0;c<a;c+=1){const h=c*s,x=c*r;l.set(o.subarray(h,h+s),x)}this.gpuDevice.queue.writeTexture({texture:e},l,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1})}writeRgba8Texture(e,t,a,n,s=0){const r=t*4,o=ft(r,256);if(a<=1&&r===o){this.gpuDevice.queue.writeTexture({texture:e,mipLevel:s},n,{offset:0},{width:t,height:a,depthOrArrayLayers:1});return}if(r===o){this.gpuDevice.queue.writeTexture({texture:e,mipLevel:s},n,{offset:0,bytesPerRow:r,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1});return}const l=new Uint8Array(o*a);for(let c=0;c<a;c+=1){const h=c*r,x=c*o;l.set(n.subarray(h,h+r),x)}this.gpuDevice.queue.writeTexture({texture:e,mipLevel:s},l,{offset:0,bytesPerRow:o,rowsPerImage:a},{width:t,height:a,depthOrArrayLayers:1})}clearToScreen(){const e=this.gpuContext.getCurrentTexture().createView(),t=this.gpuDevice.createCommandEncoder();t.beginRenderPass({colorAttachments:[{view:e,clearValue:ae,loadOp:"clear",storeOp:"store"}]}).end(),this.gpuDevice.queue.submit([t.finish()])}destroyDataResources(){this.strokeBindGroupAll=null,this.strokeBindGroupVisible=null,this.fillBindGroup=null,this.textBindGroup=null,this.destroyPageBackgroundResources(),this.destroyRasterLayerResources();const e=[this.segmentTextureA,this.segmentTextureB,this.segmentTextureC,this.segmentTextureD,this.fillPathMetaTextureA,this.fillPathMetaTextureB,this.fillPathMetaTextureC,this.fillSegmentTextureA,this.fillSegmentTextureB,this.textInstanceTextureA,this.textInstanceTextureB,this.textInstanceTextureC,this.textGlyphMetaTextureA,this.textGlyphMetaTextureB,this.textGlyphRasterMetaTexture,this.textGlyphSegmentTextureA,this.textGlyphSegmentTextureB,this.textRasterAtlasTexture];for(const t of e)t&&t.destroy();this.segmentTextureA=null,this.segmentTextureB=null,this.segmentTextureC=null,this.segmentTextureD=null,this.fillPathMetaTextureA=null,this.fillPathMetaTextureB=null,this.fillPathMetaTextureC=null,this.fillSegmentTextureA=null,this.fillSegmentTextureB=null,this.textInstanceTextureA=null,this.textInstanceTextureB=null,this.textInstanceTextureC=null,this.textGlyphMetaTextureA=null,this.textGlyphMetaTextureB=null,this.textGlyphRasterMetaTexture=null,this.textGlyphSegmentTextureA=null,this.textGlyphSegmentTextureB=null,this.textRasterAtlasTexture=null}clientToWorld(e,t){return this.clientToWorldAt(e,t,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(e,t,a,n,s){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:(l-this.canvas.width*.5)/s+a,y:(c-this.canvas.height*.5)/s+n}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(e){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const t=e-this.lastPanFrameTimeMs;if(t>.1){const a=this.cameraCenterX-this.lastPanFrameCameraX,n=this.cameraCenterY-this.lastPanFrameCameraY;let s=a*1e3/t,r=n*1e3/t;const o=Math.hypot(s,r);if(Number.isFinite(o)&&o>=dt){if(o>xt){const l=xt/o;s*=l,r*=l}this.panVelocityWorldX=s,this.panVelocityWorldY=r,this.lastPanVelocityUpdateTimeMs=e}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=e}updateCameraWithDamping(e){let t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>J||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>J,a=Math.abs(this.targetZoom-this.zoom)>ge;if(!t&&!a)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=e,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=e-16);const n=D(e-this.lastCameraAnimationTimeMs,0,_r);this.lastCameraAnimationTimeMs=e;const s=n/1e3,r=1-Math.exp(-_e*s),o=1-Math.exp(-24*s);if(a&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=ge&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),c=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=c.x,this.targetCameraCenterY=c.y,a||(this.hasZoomAnchor=!1),t=!1}else t&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*r,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*r,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=J&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=J&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,t=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>J||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>J,a=Math.abs(this.targetZoom-this.zoom)>ge,t||a}computeCameraCenterForAnchor(e,t,a,n,s){const r=this.canvas.getBoundingClientRect(),o=window.devicePixelRatio||1,l=(e-r.left)*o,c=(r.bottom-t)*o;return{x:a-(l-this.canvas.width*.5)/s,y:n-(c-this.canvas.height*.5)/s}}}function $r(i,e,t){const a=e*t*4;if(i.length>a)throw new Error(`Texture source data exceeds texture size (${i.length} > ${a}).`);const n=new Float32Array(a);return n.set(i),n}function Zr(i,e,t){const a=e*t*4;if(i.length>a)throw new Error(`Texture source data exceeds texture size (${i.length} > ${a}).`);const n=new Uint8Array(a);return n.set(i),n}function qr(i){const e=new Uint8Array(i.length);for(let t=0;t+3<i.length;t+=4){const a=i[t+3];if(a<=0){e[t]=0,e[t+1]=0,e[t+2]=0,e[t+3]=0;continue}if(a>=255){e[t]=i[t],e[t+1]=i[t+1],e[t+2]=i[t+2],e[t+3]=255;continue}const n=a/255;e[t]=Math.round(i[t]*n),e[t+1]=Math.round(i[t+1]*n),e[t+2]=Math.round(i[t+2]*n),e[t+3]=a}return e}function Qr(i,e,t){const a=[];let n=Math.max(1,Math.trunc(e)),s=Math.max(1,Math.trunc(t)),r=i;for(a.push({width:n,height:s,data:r});n>1||s>1;){const o=Math.max(1,n>>1),l=Math.max(1,s>>1),c=new Uint8Array(o*l*4);for(let h=0;h<l;h+=1){const x=Math.min(s-1,h*2),p=Math.min(s-1,x+1);for(let m=0;m<o;m+=1){const d=Math.min(n-1,m*2),C=Math.min(n-1,d+1),g=(x*n+d)*4,v=(x*n+C)*4,f=(p*n+d)*4,u=(p*n+C)*4,T=(h*o+m)*4;c[T]=r[g]+r[v]+r[f]+r[u]+2>>2,c[T+1]=r[g+1]+r[v+1]+r[f+1]+r[u+1]+2>>2,c[T+2]=r[g+2]+r[v+2]+r[f+2]+r[u+2]+2>>2,c[T+3]=r[g+3]+r[v+3]+r[f+3]+r[u+3]+2>>2}}a.push({width:o,height:l,data:c}),n=o,s=l,r=c}return a}function ve(i,e,t){const a=i.byteLength;if(a>e)throw new Error(`${t} uniform data (${a} bytes) exceeds buffer size ${e} bytes.`)}function ee(i,e){const t=Math.max(1,i),a=Math.ceil(Math.sqrt(t)),n=D(a,1,e),s=Math.max(1,Math.ceil(t/n));if(s>e)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:n,height:s}}function Kr(i){return i.pageRects instanceof Float32Array&&i.pageRects.length>=4?new Float32Array(i.pageRects):new Float32Array([i.pageBounds.minX,i.pageBounds.minY,i.pageBounds.maxX,i.pageBounds.maxY])}function ft(i,e){return Math.ceil(i/e)*e}function D(i,e,t){return i<e?e:i>t?t:i}function ye(i,e){return i<0?0:i>=e?e-1:i}function jr(i){let e=!1,t=0,a=0;const n=new Map;let s=null,r=!1,o=0,l=0,c=0;function h(){e=!1,t=0,a=0,n.clear(),s=null,r=!1,o=0,l=0,c=0}function x(){n.clear(),s=null,r=!1,o=0,l=0,c=0}function p(f){e&&i().endPanInteraction(),x(),h()}function m(){if(n.size<2)return null;const f=n.values(),u=f.next().value,T=f.next().value;if(!u||!T)return null;const S=T.x-u.x,y=T.y-u.y;return{distance:Math.hypot(S,y),centerX:(u.x+T.x)*.5,centerY:(u.y+T.y)*.5}}function d(f,u){if(f.hasPointerCapture(u))try{f.releasePointerCapture(u)}catch{}}function C(f){if(!n.has(f.pointerId)||!e)return;n.set(f.pointerId,{x:f.clientX,y:f.clientY});const u=i();if(n.size>=2){const y=m();if(!y)return;if(!r){r=!0,s=null,o=Math.max(y.distance,.001),l=y.centerX,c=y.centerY;return}const L=Math.max(o,.001),I=Math.max(y.distance,.001),_=I/L,w=y.centerX-l,b=y.centerY-c;(w!==0||b!==0)&&u.panByPixels(w,b),Number.isFinite(_)&&Math.abs(_-1)>1e-4&&u.zoomAtClientPoint(y.centerX,y.centerY,_),o=I,l=y.centerX,c=y.centerY;return}if(s===null){s=f.pointerId,t=f.clientX,a=f.clientY,r=!1,o=0;return}if(f.pointerId!==s)return;const T=f.clientX-t,S=f.clientY-a;t=f.clientX,a=f.clientY,u.panByPixels(T,S)}function g(f,u){if(n.delete(u.pointerId),d(f,u.pointerId),n.size>=2){const T=m();T&&(r=!0,s=null,o=Math.max(T.distance,.001),l=T.centerX,c=T.centerY);return}if(n.size===1){const T=n.entries().next().value;T?(s=T[0],t=T[1].x,a=T[1].y):s=null,r=!1,o=0,l=0,c=0;return}p()}function v(f){f.addEventListener("pointerdown",u=>{if(e||(e=!0,i().beginPanInteraction()),u.pointerType==="touch")if(n.set(u.pointerId,{x:u.clientX,y:u.clientY}),n.size===1)s=u.pointerId,r=!1,o=0,l=u.clientX,c=u.clientY,t=u.clientX,a=u.clientY;else{const T=m();T&&(r=!0,s=null,o=Math.max(T.distance,.001),l=T.centerX,c=T.centerY)}else t=u.clientX,a=u.clientY;f.setPointerCapture(u.pointerId)}),f.addEventListener("pointermove",u=>{if(u.pointerType==="touch"){C(u);return}if(!e)return;const T=u.clientX-t,S=u.clientY-a;t=u.clientX,a=u.clientY,i().panByPixels(T,S)}),f.addEventListener("pointerup",u=>{if(u.pointerType==="touch"){g(f,u);return}p(),d(f,u.pointerId)}),f.addEventListener("pointercancel",u=>{if(u.pointerType==="touch"){g(f,u);return}p(),d(f,u.pointerId)}),f.addEventListener("lostpointercapture",u=>{if(u.pointerType==="touch"){n.has(u.pointerId)&&n.delete(u.pointerId),n.size===0&&p();return}e&&p()}),f.addEventListener("wheel",u=>{u.preventDefault();const T=Math.exp(-u.deltaY*.0013);i().zoomAtClientPoint(u.clientX,u.clientY,T)},{passive:!1})}return{attach:v,resetState:h}}function Jr(i){const e=ea();let t="webgl",a=!1;function n(){if(!e){i.webGpuToggleElement.checked=!1,i.webGpuToggleElement.disabled=!0,i.webGpuToggleElement.title="WebGPU is not available in this browser/GPU.";return}i.webGpuToggleElement.disabled=!1,i.webGpuToggleElement.title="Experimental WebGPU backend."}async function s(r){const o=r?"webgpu":"webgl";if(o===t||a)return;if(o==="webgpu"&&!e){i.webGpuToggleElement.checked=!1,i.setStatus("WebGPU is not supported in this browser/GPU. Using WebGL.");return}a=!0;const l=i.getRenderer(),c=l.getViewState(),h=i.getSceneSnapshot(),x=i.getCanvasElement(),p=ta(x);i.setStatus(`Switching renderer backend to ${o.toUpperCase()}...`);try{x.replaceWith(p),i.setCanvasElement(p),i.attachCanvasInteractionListeners(p);const m=o==="webgpu"?await i.createWebGpuRenderer(p):i.createWebGlRenderer(p);if(i.setRenderer(m),t=o,i.webGpuToggleElement.checked=o==="webgpu",i.resetPointerInteractionState(),l.setFrameListener(null),l.dispose(),h.scene&&h.label){const d=m.setScene(h.scene);i.setSceneStats(d),m.setViewState(c),i.updateMetricsAfterSwitch(h.label,h.scene,d),i.setMetricTimesText("parse -, upload - (backend switch)");const C=h.loadedSourceKind==="parsed-zip"?" | source: parsed data zip":"",g=`${i.formatSceneStatus(h.label,h.scene)}${C}`;i.setBaseStatus(g),i.setStatusText(o==="webgpu"?`${g} | backend: WebGPU (preview)`:`${g} | backend: WebGL`)}else m.setViewState(c),i.setStatus(`Switched to ${o.toUpperCase()} backend.`)}catch(m){i.getCanvasElement()===p&&(p.replaceWith(x),i.setCanvasElement(x),i.resetPointerInteractionState());const d=m instanceof Error?m.message:String(m);i.webGpuToggleElement.checked=t==="webgpu",i.setStatus(`Failed to switch backend: ${d}`)}finally{a=!1}}return{webGpuSupported:e,getActiveBackend:()=>t,initializeToggleState:n,applyPreference:s}}function ea(){return typeof navigator.gpu<"u"}function ta(i){const e=i.cloneNode(!1);return e.width=i.width,e.height=i.height,e}function St(i){const e=[];if(Array.isArray(i.rasterLayers))for(const n of i.rasterLayers){const s=Math.max(0,Math.trunc(n?.width??0)),r=Math.max(0,Math.trunc(n?.height??0));if(s<=0||r<=0||!(n.data instanceof Uint8Array)||n.data.length<s*r*4)continue;const o=n.matrix instanceof Float32Array?n.matrix:new Float32Array(n.matrix);e.push({width:s,height:r,data:n.data,matrix:o})}if(e.length>0)return e;const t=Math.max(0,Math.trunc(i.rasterLayerWidth)),a=Math.max(0,Math.trunc(i.rasterLayerHeight));return t<=0||a<=0||i.rasterLayerData.length<t*a*4||e.push({width:t,height:a,data:i.rasterLayerData,matrix:i.rasterLayerMatrix}),e}new URL("./",window.location.href);function ia(i){const e=[];for(let t=0;t<i.pages.length;t+=1){const a=i.pages[t];e.push(aa(i,a))}return e}function ra(i,e){const t=ia(i),a=la(e,10,1,100),n=$i(t,a);return n.operatorCount=i.stats.operatorCount,n.imagePaintOpCount=i.stats.imagePaintOpCount,n.sourceSegmentCount=i.stats.sourceSegmentCount,n.mergedSegmentCount=i.stats.mergedSegmentCount,n.sourceTextCount=i.stats.sourceTextCount,n.textInPageCount=i.stats.textInPageCount,n.textOutOfPageCount=i.stats.textOutOfPageCount,n.discardedTransparentCount=i.stats.discardedTransparentCount,n.discardedDegenerateCount=i.stats.discardedDegenerateCount,n.discardedDuplicateCount=i.stats.discardedDuplicateCount,n.discardedContainedCount=i.stats.discardedContainedCount,n}function aa(i,e){const t=e.segmentStart*4,a=(e.segmentStart+e.segmentCount)*4,n=e.fillPathStart*4,s=(e.fillPathStart+e.fillPathCount)*4,r=e.fillSegmentStart*4,o=(e.fillSegmentStart+e.fillSegmentCount)*4,l=e.textInstanceStart*4,c=(e.textInstanceStart+e.textInstanceCount)*4,h=e.textGlyphStart*4,x=(e.textGlyphStart+e.textGlyphCount)*4,p=e.textGlyphSegmentStart*4,m=(e.textGlyphSegmentStart+e.textGlyphSegmentCount)*4,d=i.endpoints.slice(t,a),C=i.primitiveMeta.slice(t,a),g=i.primitiveBounds.slice(t,a),v=i.styles.slice(t,a),f=i.fillPathMetaA.slice(n,s),u=i.fillPathMetaB.slice(n,s),T=i.fillPathMetaC.slice(n,s),S=i.fillSegmentsA.slice(r,o),y=i.fillSegmentsB.slice(r,o),L=i.textInstanceA.slice(l,c),I=i.textInstanceB.slice(l,c),_=i.textInstanceC.slice(l,c),w=i.textGlyphMetaA.slice(h,x),b=i.textGlyphMetaB.slice(h,x),R=i.textGlyphSegmentsA.slice(p,m),W=i.textGlyphSegmentsB.slice(p,m);for(let G=0;G<e.fillPathCount;G+=1)f[G*4]-=e.fillSegmentStart;for(let G=0;G<e.textInstanceCount;G+=1)I[G*4+2]-=e.textGlyphStart;for(let G=0;G<e.textGlyphCount;G+=1)w[G*4]-=e.textGlyphSegmentStart;const k=na(i,e),V=k[0]??null,Wi=oa(v,e.segmentCount);return{pageCount:1,pagesPerRow:1,pageRects:new Float32Array([e.pageRect[0],e.pageRect[1],e.pageRect[2],e.pageRect[3]]),fillPathCount:e.fillPathCount,fillSegmentCount:e.fillSegmentCount,fillPathMetaA:f,fillPathMetaB:u,fillPathMetaC:T,fillSegmentsA:S,fillSegmentsB:y,segmentCount:e.segmentCount,sourceSegmentCount:e.segmentCount,mergedSegmentCount:e.segmentCount,sourceTextCount:e.textInstanceCount,textInstanceCount:e.textInstanceCount,textGlyphCount:e.textGlyphCount,textGlyphSegmentCount:e.textGlyphSegmentCount,textInPageCount:e.textInstanceCount,textOutOfPageCount:0,textInstanceA:L,textInstanceB:I,textInstanceC:_,textGlyphMetaA:w,textGlyphMetaB:b,textGlyphSegmentsA:R,textGlyphSegmentsB:W,rasterLayers:k,rasterLayerWidth:V?.width??0,rasterLayerHeight:V?.height??0,rasterLayerData:V?.data??new Uint8Array(0),rasterLayerMatrix:V?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:d,primitiveMeta:C,primitiveBounds:g,styles:v,bounds:{...e.pageBounds},pageBounds:{...e.pageBounds},maxHalfWidth:Wi,operatorCount:0,imagePaintOpCount:k.length,pathCount:0,discardedTransparentCount:0,discardedDegenerateCount:0,discardedDuplicateCount:0,discardedContainedCount:0}}function na(i,e){const t=[],a=e.rasterLayerStart,n=a+e.rasterLayerCount;for(let s=a;s<n;s+=1){const r=i.rasterLayers[s];r&&t.push(sa(r))}return t}function sa(i){return{width:i.width,height:i.height,data:i.data.slice(),matrix:new Float32Array(i.matrix)}}function oa(i,e){let t=0;for(let a=0;a<e;a+=1)t=Math.max(t,i[a*4]);return t}function la(i,e,t,a){const n=Number(i);return Number.isFinite(n)?Math.max(t,Math.min(a,Math.trunc(n))):e}function ca(i,e){function t(){const m=Math.trunc(Number(i.maxPagesPerRowInput.value));return Number.isFinite(m)?ne(m,1,100):10}function a(m){const d=Math.trunc(Number(m));return Number.isFinite(d)?ne(d,0,100):100}function n(m){const d=Math.trunc(Number(m));return Number.isFinite(d)?ne(d,0,100):0}function s(m){const d=ne(Math.trunc(m),0,100);i.pageBackgroundOpacityInput.value=String(d),i.pageBackgroundOpacitySlider.value=String(d)}function r(m){const d=ne(Math.trunc(m),0,100);i.vectorOpacityInput.value=String(d),i.vectorOpacitySlider.value=String(d)}function o(){const m=i.pageBackgroundColorInput.value||"#ffffff",d=/^#([0-9a-fA-F]{6})$/.exec(m),C=a(i.pageBackgroundOpacityInput.value);s(C);const g=C/100;if(!d)return[1,1,1,g];const v=Number.parseInt(d[1],16);if(!Number.isFinite(v))return[1,1,1,g];const f=(v>>16&255)/255,u=(v>>8&255)/255,T=(v&255)/255;return[f,u,T,g]}function l(){const m=i.vectorColorInput.value||"#000000",d=/^#([0-9a-fA-F]{6})$/.exec(m),C=n(i.vectorOpacityInput.value);r(C);const g=C/100;if(!d)return[0,0,0,g];const v=Number.parseInt(d[1],16);if(!Number.isFinite(v))return[0,0,0,g];const f=(v>>16&255)/255,u=(v>>8&255)/255,T=(v&255)/255;return[f,u,T,g]}function c(){const m=o();e().setPageBackgroundColor(m[0],m[1],m[2],m[3])}function h(){const m=l();e().setVectorColorOverride(m[0],m[1],m[2],m[3])}function x(){i.maxPagesPerRowInput.value=String(t())}function p(m){i.panOptimizationToggle.addEventListener("change",()=>{m.onPanOptimizationChange(i.panOptimizationToggle.checked)}),i.segmentMergeToggle.addEventListener("change",()=>{m.onSegmentMergeChange()}),i.invisibleCullToggle.addEventListener("change",()=>{m.onInvisibleCullChange()}),i.strokeCurveToggle.addEventListener("change",()=>{m.onStrokeCurveChange(i.strokeCurveToggle.checked)}),i.vectorTextOnlyToggle.addEventListener("change",()=>{m.onVectorTextOnlyChange(i.vectorTextOnlyToggle.checked)}),i.pageBackgroundColorInput.addEventListener("input",()=>{c()}),i.pageBackgroundOpacitySlider.addEventListener("input",()=>{const d=a(i.pageBackgroundOpacitySlider.value);s(d),c()}),i.pageBackgroundOpacityInput.addEventListener("input",()=>{const d=a(i.pageBackgroundOpacityInput.value);s(d),c()}),i.vectorColorInput.addEventListener("input",()=>{h()}),i.vectorOpacitySlider.addEventListener("input",()=>{const d=n(i.vectorOpacitySlider.value);r(d),h()}),i.vectorOpacityInput.addEventListener("input",()=>{const d=n(i.vectorOpacityInput.value);r(d),h()}),i.maxPagesPerRowInput.addEventListener("change",()=>{const d=t();i.maxPagesPerRowInput.value=String(d),m.onMaxPagesPerRowChange(d)}),i.webGpuToggle.addEventListener("change",()=>{m.onWebGpuToggleChange(i.webGpuToggle.checked)})}return{bindEventListeners:p,readMaxPagesPerRowInput:t,readPageBackgroundColorInput:o,readVectorColorOverrideInput:l,applyPageBackgroundColorFromControls:c,applyVectorColorOverrideFromControls:h,syncMaxPagesPerRowInputValue:x}}function ne(i,e,t){return i<e?e:i>t?t:i}const ua=/^[a-z][a-z\d+.-]*:/i;function Ge(i){const e=i.trim();if(ua.test(e))return e;const t=e.replace(/^\/+/,""),a=new URL("./",window.location.href);return new URL(t,a).toString()}function ha(i){const e=Array.isArray(i.examples)?i.examples:[],t=[];for(let a=0;a<e.length;a+=1){const n=e[a],s=Se(n?.name);if(!s)continue;const r=Se(n?.id)??`example-${a+1}`,o=Se(n?.pdf?.path),l=Se(n?.parsedZip?.path),c=o?Ge(o):null,h=l?Ge(l):null;!c||!h||t.push({id:r,name:s,pdfPath:c,pdfSizeBytes:gt(n?.pdf?.sizeBytes,0),zipPath:h,zipSizeBytes:gt(n?.parsedZip?.sizeBytes,0)})}return t}function gt(i,e){const t=Number(i);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):Math.max(0,Math.trunc(e))}function Se(i){if(typeof i!="string")return null;const e=i.trim();return e.length>0?e:null}tr.workerSrc=Zi;const bt=document.querySelector("#viewport"),At=document.querySelector("#hud"),Mt=document.querySelector("#toggle-hud"),Pt=document.querySelector("#toggle-hud-icon"),Rt=document.querySelector("#open-file"),Et=document.querySelector("#example-select"),It=document.querySelector("#download-data"),wt=document.querySelector("#download-all-data"),Bt=document.querySelector("#file-input"),Ft=document.querySelector("#status"),Lt=document.querySelector("#parse-loader"),Dt=document.querySelector("#parse-loader-text"),_t=document.querySelector("#runtime"),Vt=document.querySelector("#metrics"),Gt=document.querySelector("#metric-file"),Ut=document.querySelector("#metric-operators"),Ot=document.querySelector("#metric-source-segments"),Xt=document.querySelector("#metric-merged-segments"),zt=document.querySelector("#metric-visible-segments"),Wt=document.querySelector("#metric-reductions"),kt=document.querySelector("#metric-cull-discards"),Ht=document.querySelector("#metric-times"),Yt=document.querySelector("#metric-fps"),Nt=document.querySelector("#metric-texture"),$t=document.querySelector("#metric-grid-max-cell"),Zt=document.querySelector("#load-debug"),qt=document.querySelector("#load-debug-log"),Qt=document.querySelector("#drop-indicator"),Kt=document.querySelector("#toggle-pan-opt"),jt=document.querySelector("#toggle-segment-merge"),Jt=document.querySelector("#toggle-invisible-cull"),ei=document.querySelector("#toggle-stroke-curves"),ti=document.querySelector("#toggle-vector-text-only"),ii=document.querySelector("#toggle-webgpu"),ri=document.querySelector("#max-pages-per-row"),ai=document.querySelector("#page-bg-color"),ni=document.querySelector("#page-bg-opacity-slider"),si=document.querySelector("#page-bg-opacity"),oi=document.querySelector("#vector-color"),li=document.querySelector("#vector-opacity-slider"),ci=document.querySelector("#vector-opacity");if(!bt||!At||!Mt||!Pt||!Rt||!Et||!It||!wt||!Bt||!Ft||!Lt||!Dt||!_t||!Vt||!Gt||!Ut||!Ot||!Xt||!zt||!Wt||!kt||!Ht||!Yt||!Nt||!$t||!Zt||!qt||!Qt||!Kt||!jt||!Jt||!ei||!ti||!ii||!ri||!ai||!ni||!si||!oi||!li||!ci)throw new Error("Required UI elements are missing from index.html.");let Re=bt;const Ee=At,Ue=Mt,ma=Pt,ui=Rt,A=Et,Ae=It,Me=wt,oe=Bt,da=Ft,xa=Lt,fa=Dt,ga=_t,hi=Vt,mi=Gt,di=Ut,xi=Ot,fi=Xt,gi=zt,pi=Wt,Ti=kt,Ne=Ht,pa=Yt,Ci=Nt,vi=$t,Ta=Zt,Ca=qt,le=Qt,yi=Kt,Si=jt,bi=Jt,Ai=ei,Mi=ti,Pi=ii,Ri=ri,va=ai,ya=ni,Sa=si,ba=oi,Aa=li,Ma=ci;let X,we=null;const ce=ca({panOptimizationToggle:yi,segmentMergeToggle:Si,invisibleCullToggle:bi,strokeCurveToggle:Ai,vectorTextOnlyToggle:Mi,webGpuToggle:Pi,maxPagesPerRowInput:Ri,pageBackgroundColorInput:va,pageBackgroundOpacitySlider:ya,pageBackgroundOpacityInput:Sa,vectorColorInput:ba,vectorOpacitySlider:Aa,vectorOpacityInput:Ma},()=>X),Oe=jr(()=>X);function Pa(i){za();const e=i.renderedSegments.toLocaleString(),t=i.totalSegments.toLocaleString(),a=i.usedCulling?"culled":"full",n=(we?.getActiveBackend()??"webgl").toUpperCase();P.setRuntime(`Draw ${e}/${t} segments | mode: ${a} | zoom: ${i.zoom.toFixed(2)}x | backend: ${n}`)}function Ei(i){i.resize(),i.setPanOptimizationEnabled(yi.checked),i.setStrokeCurveEnabled(Ai.checked),i.setTextVectorOnly(Mi.checked);const e=ce.readPageBackgroundColorInput();i.setPageBackgroundColor(e[0],e[1],e[2],e[3]);const t=ce.readVectorColorOverrideInput();i.setVectorColorOverride(t[0],t[1],t[2],t[3]),i.setFrameListener(Pa)}function Ii(i){const e=new br(i);return Ei(e),e}async function Ra(i){const e=await Ye.create(i);return Ei(e),e}X=Ii(Re);let q="Waiting for PDF or parsed ZIP...",F=null,$e=null,$=null,O=null,z=0,Q=!1;const wi=new URLSearchParams(window.location.search).get("loadDebug")==="1";let Y=null,Ze=0;const pt="DEFLATE",Ea=9,N=new Map;let te=[],Pe=!1,Ve=0,be=0;const P=qi({statusElement:da,loaderElement:xa,loaderTextElement:fa,runtimeElement:ga,fpsElement:pa,debugElement:Ta,debugLogElement:Ca},{runtimeThrottleMs:250,fpsThrottleMs:250,debugEnabled:wi,debugMaxLines:200}),qe=Ji({enabled:wi,tag:"hepr/native",emitLine(i){console.log(i),P.appendDebugLine(i)},minDelta:.03,minIntervalMs:2e3});we=Jr({webGpuToggleElement:Pi,getRenderer:()=>X,setRenderer:i=>{X=i},getCanvasElement:()=>Re,setCanvasElement:i=>{Re=i},createWebGlRenderer:Ii,createWebGpuRenderer:Ra,attachCanvasInteractionListeners:i=>{Oe.attach(i)},resetPointerInteractionState:()=>{Oe.resetState()},getSceneSnapshot:()=>({scene:$e,label:$,loadedSourceKind:F?.kind??null}),setSceneStats:i=>{},updateMetricsAfterSwitch:(i,e,t)=>{Oi(i,e,t,0,0)},setMetricTimesText:i=>{Ne.textContent=i},formatSceneStatus:ze,setBaseStatus:i=>{q=i},setStatus:M,setStatusText:i=>{P.setStatus(i)}});we.initializeToggleState();Fe();Gi(!1);K(!1);Z(!1);ce.syncMaxPagesPerRowInputValue();M(q);ie();Ia();ui.addEventListener("click",()=>{oe.click()});Ae.addEventListener("click",()=>{Ui()});Me.addEventListener("click",()=>{Ua()});Ue.addEventListener("click",()=>{const i=Ee.classList.contains("collapsed");Gi(!i)});oe.addEventListener("change",async()=>{const[i]=Array.from(oe.files||[]);i&&(Xe(i)?await Fi(i):Bi(i)?await Li(i):M(`Unsupported file type: ${i.name}`),oe.value="")});A.addEventListener("change",()=>{const i=A.value;i&&Ba(i)});ce.bindEventListeners({onPanOptimizationChange:i=>{X.setPanOptimizationEnabled(i)},onSegmentMergeChange:()=>Tt(),onInvisibleCullChange:()=>Tt(),onStrokeCurveChange:i=>{X.setStrokeCurveEnabled(i)},onVectorTextOnlyChange:i=>{X.setTextVectorOnly(i)},onMaxPagesPerRowChange:async()=>{if(!O||!$)return;const i=++z,e=He(t=>{et(i,t)});Je(i),await Ke(O,$,{activeLoadToken:i,preserveView:!1,parseMs:0,progress:e,sourceLabelSuffix:F?.kind==="parsed-zip"?"parsed data zip":null})},onWebGpuToggleChange:i=>we?.applyPreference(i)??Promise.resolve()});Oe.attach(Re);window.addEventListener("resize",()=>{Qe(),X.resize()});window.addEventListener("dragenter",i=>{i.preventDefault(),Q=!0,ie()});window.addEventListener("dragover",i=>{i.preventDefault(),Q||(Q=!0,ie())});window.addEventListener("dragleave",i=>{(i.target===document.documentElement||i.target===document.body)&&(Q=!1,ie())});window.addEventListener("drop",async i=>{i.preventDefault(),Q=!1,ie();const t=Array.from(i.dataTransfer?.files||[]).find(a=>Xe(a)||Bi(a));if(!t){M("Dropped file is not a supported PDF or parsed zip.");return}Xe(t)?await Fi(t):await Li(t)});function ie(){const i=Q||!$e;Qe(),le.classList.toggle("active",i),le.classList.toggle("dragging",Q)}function Qe(){const i=Math.max(window.innerWidth,1),e=Math.max(window.innerHeight,1),t=Ee.getBoundingClientRect(),a=Ee.classList.contains("collapsed"),n=i<=640?12:24,s=280,r=Math.min(i-n,t.right+n),o=Math.max(0,i-r-n);let l=i*.5,c=Math.min(420,Math.max(220,i-n*2));!a&&o>=s&&(l=r+o*.5,c=Math.min(420,o)),le.style.left=`${Math.round(l)}px`,le.style.top=`${Math.round(e*.5)}px`,le.style.width=`${Math.round(c)}px`}async function Ia(){N.clear(),te=[],A.innerHTML="",A.append(new Option("Examples (loading...)","")),A.value="",A.disabled=!0,Z(!1);try{const i=Ge("examples/manifest.json"),e=await fetch(i,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json(),a=ha(t);if(a.length===0)throw new Error("Manifest does not contain valid examples.");wa(a)}catch(i){const e=i instanceof Error?i.message:String(i);console.warn(`[Examples] Failed to load manifest: ${e}`),te=[],A.innerHTML="",A.append(new Option("Examples unavailable","")),A.value="",A.disabled=!0,Z(!1)}}function wa(i){te=[...i],N.clear(),A.innerHTML="",A.append(new Option("Load example...",""));for(const e of i){const t=document.createElement("optgroup");t.label=e.name;const a=`${e.id}:pdf`,n=`${e.id}:zip`,s=`Parse PDF (${We(e.pdfSizeBytes)} kB)`,r=`Load Parsed ZIP (${We(e.zipSizeBytes)} kB)`;N.set(a,{id:e.id,sourceName:e.name,kind:"pdf",path:e.pdfPath}),N.set(n,{id:e.id,sourceName:e.name,kind:"zip",path:e.zipPath}),t.append(new Option(s,a)),t.append(new Option(r,n)),A.append(t)}A.value="",A.disabled=N.size===0,Z(te.length>0)}async function Ba(i){const e=N.get(i);if(!e){A.value="";return}A.disabled=!0;try{const t=e.kind==="pdf"?"PDF":"parsed ZIP";if(M(`Loading example ${e.sourceName} (${t})...`),e.kind==="pdf")F={kind:"pdf",source:e.path,label:e.sourceName},await Be(e.path,e.sourceName,{preserveView:!1,autoMaxPagesPerRow:!0});else{const a=`${e.sourceName} (parsed zip)`;F={kind:"parsed-zip",source:e.path,label:a},await Di(e.path,a,{preserveView:!1})}}catch(t){const a=t instanceof Error?t.message:String(t);M(`Failed to load example: ${a}`)}finally{A.value="",A.disabled=N.size===0}}function Xe(i){const e=i.name.toLowerCase();return i.type==="application/pdf"||e.endsWith(".pdf")}function Bi(i){return i.name.toLowerCase().endsWith(".zip")||i.type==="application/zip"||i.type==="application/x-zip-compressed"}async function Fi(i){F={kind:"pdf",source:i,label:i.name},Y=null,await Be(i,i.name,{preserveView:!1,autoMaxPagesPerRow:!0})}async function Li(i){F={kind:"parsed-zip",source:i,label:i.name},await Di(i,i.name,{preserveView:!1})}async function Be(i,e,t={}){const a=++z,n=Fa(),s=La(n),r=He(l=>{et(a,l)}),o=Da(e,s,i);Je(a),Vi(a,e);try{let l=o;const c=performance.now();if(l?(M(`Rearranging ${e}... (using cached compiled document)`),r.report(.97,{stage:"compile",sourceType:"pdf"})):(M(`Parsing ${e} with PDF.js... (merge ${n.enableSegmentMerge?"on":"off"}, cull ${n.enableInvisibleCull?"on":"off"})`),l=await _i(i,e,{maxPages:void 0,extraction:n,progress:r.child(0,.97)}),_a(e,s,i,l)),a!==z)return;if(t.autoMaxPagesPerRow){const x=$a(l.pageCount);Ri.value=String(x)}const h=performance.now()-c;await Ke(l,e,{activeLoadToken:a,preserveView:t.preserveView,parseMs:h,progress:r,sourceLabelSuffix:null}),ue(a,!0)}catch(l){if(a!==z)return;Ie(a);const c=l instanceof Error?l.message:String(l);ue(a,!1,c),M(`Failed to render PDF: ${c}`),O=null,P.setRuntime(""),Fe(e)}}async function Tt(){!F||F.kind!=="pdf"||await Be(F.source,F.label,{preserveView:!0})}async function Di(i,e,t={}){const a=++z,n=He(s=>{et(a,s)});Je(a),Vi(a,e);try{const s=performance.now();M(`Loading parsed data from ${e}...`);const r=await _i(i,e,{progress:n.child(0,.97)});if(a!==z)return;const o=performance.now()-s;await Ke(r,e,{activeLoadToken:a,preserveView:t.preserveView,parseMs:o,progress:n,sourceLabelSuffix:"parsed data zip"}),ue(a,!0)}catch(s){if(a!==z)return;Ie(a);const r=s instanceof Error?s.message:String(s);ue(a,!1,r),M(`Failed to load parsed data zip: ${r}`),O=null,P.setRuntime(""),Fe(e)}}function Fa(){return{enableSegmentMerge:Si.checked,enableInvisibleCull:bi.checked}}function La(i){const e=i.enableSegmentMerge!==!1,t=i.enableInvisibleCull!==!1;return`merge:${e?1:0}|cull:${t?1:0}`}function Da(i,e,t){return!F||F.kind!=="pdf"||!Y||!Va(Y.sourceRef,t)||Y.sourceLabel!==i||Y.optionsKey!==e?null:Y.document}function _a(i,e,t,a){!F||F.kind!=="pdf"||(Y={sourceRef:t,sourceLabel:i,optionsKey:e,document:a})}function Va(i,e){return i===e}function Ga(i,e){const t=e instanceof Error?e.message:String(e),a=`[hepr/native][worker-fallback] ${i}: ${t}`;console.warn(a,e),P.appendDebugLine(a)}async function _i(i,e,t){try{return await Qi(i,{...t,progress:t.progress?.child(0,1,{executionPath:"worker"})})}catch(a){return Ga(e,a),Ki(i,{...t,progress:t.progress?.child(0,1,{executionPath:"main-thread-fallback"})})}}async function Ke(i,e,t){const a=performance.now(),n=ce.readMaxPagesPerRowInput(),s=t.progress.child(.97,.985,{stage:"compile"});s.report(0,{stage:"compile",unit:"pages",processed:0,total:i.pageCount});const r=ra(i,n);s.complete({stage:"compile",unit:"pages",processed:i.pageCount,total:i.pageCount});const o=t.parseMs+(performance.now()-a);if(t.activeLoadToken!==z)return;const l=St(r).length,c=l>0;if(r.segmentCount===0&&r.textInstanceCount===0&&r.fillPathCount===0&&!c){Ie(t.activeLoadToken),ue(t.activeLoadToken,!1,"No visible geometry was found."),M(`No visible geometry was found in ${e}.`),P.setRuntime(""),Fe(e),K(!1);return}M(`Uploading ${r.segmentCount.toLocaleString()} segments, ${r.textInstanceCount.toLocaleString()} text instances${c?`, ${l.toLocaleString()} raster layer${l===1?"":"s"}`:""} to GPU...`);const h=performance.now(),x=t.progress.child(.985,.998,{stage:"upload"});x.report(0,{stage:"upload"});const p=X.setScene(r);x.complete({stage:"upload"}),t.preserveView||X.fitToBounds(r.bounds,64);const m=performance.now();t.activeLoadToken===z&&(ka(e,r),Ha(e,r),Ya(e,r),Wa(e,r,p),$e=r,$=e,O=i,ie(),K(!0),Oi(e,r,p,o,m-h),q=t.sourceLabelSuffix?`${ze(e,r)} | source: ${t.sourceLabelSuffix}`:ze(e,r),P.setStatus(q),t.progress.complete({stage:"complete"}),Ie(t.activeLoadToken))}function je(i){const e=St(i);if(e.length===0)return"";if(e.length===1)return`${e[0].width}x${e[0].height}`;const a=e.reduce((n,s)=>n+s.width*s.height,0)/1e6;return`${e.length.toLocaleString()} layers (${a.toFixed(1)} MP total)`}function ze(i,e){const t=e.pageCount>1?`${e.pageCount.toLocaleString()} pages (${e.pagesPerRow.toLocaleString()}/row) | `:"",a=e.fillPathCount.toLocaleString(),n=e.sourceSegmentCount.toLocaleString(),s=e.segmentCount.toLocaleString(),r=e.textInstanceCount.toLocaleString(),o=je(e),l=o?`, raster ${o}`:"";return`${i} loaded | ${t}fills ${a}, ${s} visible from ${n} source segments, ${r} text instances${l}`}function M(i){q=i,P.setStatus(q)}function Je(i){Ze=i,P.setLoader(!0,"Parsing / loading 0.00%")}function et(i,e){if(i!==z||i!==Ze)return;qe.update(i,e);const t=er(e.stage),a=e.executionPath?` [${e.executionPath}]`:"",n=zi(e.value,0,1);P.setLoader(!0,`${t}${a} ${(n*100).toFixed(2)}%`)}function Ie(i,e){i===Ze&&P.setLoader(!1)}function Vi(i,e){P.clearDebug(),qe.begin(i,e)}function ue(i,e,t){qe.finish(i,e,t)}function K(i,e=!1){Ae.hidden=!i,Ae.disabled=!i||e||Pe,Ae.textContent=e?"Preparing ZIP...":"Download Parsed Data"}function Z(i,e=!1,t){Me.hidden=!1,Me.disabled=!i||e,Me.textContent=e?t??"Exporting Example ZIPs...":"Download All Example ZIPs"}function Ct(i){ui.disabled=!i,oe.disabled=!i,A.disabled=!i||N.size===0}function Gi(i){Ee.classList.toggle("collapsed",i),Ue.setAttribute("aria-expanded",String(!i)),Ue.title=i?"Expand panel":"Collapse panel",ma.textContent=i?"▸":"▾",Qe()}async function Ua(){if(Pe)return;const i=te;if(i.length===0){M("No example PDFs available for batch export.");return}Pe=!0,Ct(!1),K(!!O,!1),Z(!0,!0,`Exporting 0/${i.length}...`);try{for(let e=0;e<i.length;e+=1){const t=i[e],a=e+1;if(Z(!0,!0,`Exporting ${a}/${i.length}...`),M(`Batch ${a}/${i.length}: loading ${t.name}...`),F={kind:"pdf",source:t.pdfPath,label:t.name},Y=null,O=null,$=null,await Be(t.pdfPath,t.name,{preserveView:!1,autoMaxPagesPerRow:!0}),!O||$!==t.name)throw new Error(`${t.name}: parsed data not available after load`);M(`Batch ${a}/${i.length}: downloading ${t.name} parsed ZIP...`),await Ui(),await Na(200)}M(`Batch export complete: ${i.length.toLocaleString()} parsed ZIP files downloaded.`)}catch(e){const t=e instanceof Error?e.message:String(e);M(`Batch export failed: ${t}`)}finally{Pe=!1,Ct(!0),K(!!O,!1),Z(te.length>0,!1)}}async function Ui(){if(!O||!$){M("No parsed floorplan data available to export.");return}const i=$,e=P.getStatus();K(!0,!0),P.setStatus("Preparing parsed ZIP (v4)...");try{const t=await ji(O,{sourceFile:i,zipCompression:pt,zipDeflateLevel:Ea,textureLayout:"channel-major",textureByteShuffle:!1,texturePredictor:"none",encodeRasterImages:!0}),a=`${Oa(i)}-parsed-data.zip`;Xa(t.blob,a),console.log(`[Parsed data export] ${i}: wrote v4 ZIP (${t.textureCount.toLocaleString()} textures, ${t.rasterLayerCount.toLocaleString()} raster layers) to ${a} (${We(t.byteLength)} kB, compression=${pt.toLowerCase()})`),P.setStatus(e||q)}catch(t){const a=t instanceof Error?t.message:String(t);M(`Failed to download parsed data: ${a}`)}finally{K(!0,!1)}}function We(i){return(Math.max(0,Number(i)||0)/1024).toFixed(1)}function Oa(i){const t=i.replace(/\.pdf$/i,"").trim().replace(/[^a-zA-Z0-9._-]+/g,"_");return t.length>0?t:"floorplan"}function Xa(i,e){const t=URL.createObjectURL(i),a=document.createElement("a");a.href=t,a.download=e,a.style.display="none",document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(t),0)}function Fe(i="-"){mi.textContent=i,di.textContent="-",xi.textContent="-",fi.textContent="-",gi.textContent="-",pi.textContent="-",Ti.textContent="-",Ne.textContent="-",Ci.textContent="-",vi.textContent="-",hi.dataset.ready="false",P.setFps("-")}function Oi(i,e,t,a,n){const s=e.sourceSegmentCount,r=e.mergedSegmentCount,o=e.segmentCount,l=e.fillPathCount,c=s>0?(1-r/s)*100:0,h=r>0?(1-o/r)*100:0,x=s>0?(1-o/s)*100:0,p=Xi(t.textureWidth,t.textureHeight,t.maxTextureSize),m=je(e);mi.textContent=i,di.textContent=e.operatorCount.toLocaleString(),xi.textContent=s.toLocaleString(),fi.textContent=`${r.toLocaleString()} (${se(c)} reduction)`,gi.textContent=`${o.toLocaleString()} (${se(x)} total reduction), fills ${l.toLocaleString()}, text ${e.textInstanceCount.toLocaleString()} instances, pages ${e.pageCount.toLocaleString()} (${e.pagesPerRow.toLocaleString()}/row)`,pi.textContent=`merge ${se(c)}, invisible-cull ${se(h)}, total ${se(x)}`,Ti.textContent=`transparent ${e.discardedTransparentCount.toLocaleString()}, degenerate ${e.discardedDegenerateCount.toLocaleString()}, duplicates ${e.discardedDuplicateCount.toLocaleString()}, contained ${e.discardedContainedCount.toLocaleString()}, glyphs ${e.textGlyphCount.toLocaleString()} / glyph segments ${e.textGlyphSegmentCount.toLocaleString()}`,Ne.textContent=`parse ${a.toFixed(0)} ms, upload ${n.toFixed(0)} ms`,Ci.textContent=`fill paths ${t.fillPathTextureWidth}x${t.fillPathTextureHeight}, fill seg ${t.fillSegmentTextureWidth}x${t.fillSegmentTextureHeight}, segments ${t.textureWidth}x${t.textureHeight} (${p.toFixed(1)}% of max area ${t.maxTextureSize}x${t.maxTextureSize}), text inst ${t.textInstanceTextureWidth}x${t.textInstanceTextureHeight}, glyph ${t.textGlyphTextureWidth}x${t.textGlyphTextureHeight}, glyph-seg ${t.textSegmentTextureWidth}x${t.textSegmentTextureHeight}${m?`, raster ${m}`:""}`,vi.textContent=t.maxCellPopulation.toLocaleString(),hi.dataset.ready="true"}function se(i){return`${Math.max(0,i).toFixed(1)}%`}function za(){const i=performance.now();if(Ve>0){const e=i-Ve;if(e>0){const t=1e3/e;be=be===0?t:be*.85+t*.15,P.setFps(`${be.toFixed(0)} FPS`)}}Ve=i}function Wa(i,e,t){const a=Xi(t.textureWidth,t.textureHeight,t.maxTextureSize),n=je(e);console.log(`[GPU texture size] ${i}: fills=${t.fillPathTextureWidth}x${t.fillPathTextureHeight} (paths=${e.fillPathCount.toLocaleString()}), fill-segments=${t.fillSegmentTextureWidth}x${t.fillSegmentTextureHeight} (count=${e.fillSegmentCount.toLocaleString()}), segments=${t.textureWidth}x${t.textureHeight} (count=${e.segmentCount.toLocaleString()}, max=${t.maxTextureSize}, util=${a.toFixed(1)}%), text instances=${t.textInstanceTextureWidth}x${t.textInstanceTextureHeight} (count=${e.textInstanceCount.toLocaleString()}), glyphs=${t.textGlyphTextureWidth}x${t.textGlyphTextureHeight} (count=${e.textGlyphCount.toLocaleString()}), glyph-segments=${t.textSegmentTextureWidth}x${t.textSegmentTextureHeight} (count=${e.textGlyphSegmentCount.toLocaleString()})${n?`, raster=${n}`:""}`)}function Xi(i,e,t){const a=Math.max(1,Math.floor(i)),n=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t)),r=a*n,o=s*s;return r/o*100}function ka(i,e){if(e.sourceSegmentCount<=0)return;const t=e.mergedSegmentCount,a=e.sourceSegmentCount,n=a>0?(1-t/a)*100:0;console.log(`[Segment merge] ${i}: ${t.toLocaleString()} merged / ${a.toLocaleString()} source (${n.toFixed(1)}% reduction)`)}function Ha(i,e){if(e.mergedSegmentCount<=0)return;const t=e.segmentCount,a=e.mergedSegmentCount,n=a>0?(1-t/a)*100:0;console.log(`[Invisible cull] ${i}: ${t.toLocaleString()} visible / ${a.toLocaleString()} merged (${n.toFixed(1)}% reduction, transparent=${e.discardedTransparentCount.toLocaleString()}, degenerate=${e.discardedDegenerateCount.toLocaleString()}, duplicates=${e.discardedDuplicateCount.toLocaleString()}, contained=${e.discardedContainedCount.toLocaleString()})`)}function Ya(i,e){console.log(`[Text vectors] ${i}: instances=${e.textInstanceCount.toLocaleString()}, sourceText=${e.sourceTextCount.toLocaleString()}, glyphs=${e.textGlyphCount.toLocaleString()}, glyphSegments=${e.textGlyphSegmentCount.toLocaleString()}, inPage=${e.textInPageCount.toLocaleString()}, outOfPage=${e.textOutOfPageCount.toLocaleString()}, fillPaths=${e.fillPathCount.toLocaleString()}, fillSegments=${e.fillSegmentCount.toLocaleString()}`)}function Na(i){return new Promise(e=>{window.setTimeout(e,Math.max(0,i))})}function zi(i,e,t){return i<e?e:i>t?t:i}function $a(i){const e=Math.max(1,Math.trunc(i));return zi(Math.ceil(Math.sqrt(e)),1,100)}
