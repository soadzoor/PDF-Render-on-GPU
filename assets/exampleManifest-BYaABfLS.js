(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const ns=""+new URL("pdf.worker.min-wgc6bjNh.mjs",import.meta.url).href,He=64,Ze=1024,hi=3e4,di=22e4;function On(n){const t=n.segmentCount,e=Math.max(n.bounds.maxX-n.bounds.minX,1e-5),s=Math.max(n.bounds.maxY-n.bounds.minY,1e-5),{gridWidth:a,gridHeight:r}=fi(t,e,s),i=a*r,o=e/a,l=s/r,d=new Uint32Array(i);let p=0;for(let h=0;h<t;h+=1){const g=h*4,x=h*4,w=n.styles[x]+.35,E=n.primitiveBounds[g]-w,A=n.primitiveBounds[g+1]-w,S=n.primitiveBounds[g+2]+w,L=n.primitiveBounds[g+3]+w,U=kt(Math.floor((E-n.bounds.minX)/o),a),F=kt(Math.floor((S-n.bounds.minX)/o),a),P=kt(Math.floor((A-n.bounds.minY)/l),r),M=kt(Math.floor((L-n.bounds.minY)/l),r);for(let T=P;T<=M;T+=1){let R=T*a+U;for(let c=U;c<=F;c+=1){const B=d[R]+1;d[R]=B,B>p&&(p=B),R+=1}}}const m=new Uint32Array(i+1);for(let h=0;h<i;h+=1)m[h+1]=m[h]+d[h];const v=m[i],f=new Uint32Array(v),y=m.slice(0,i);for(let h=0;h<t;h+=1){const g=h*4,x=h*4,w=n.styles[x]+.35,E=n.primitiveBounds[g]-w,A=n.primitiveBounds[g+1]-w,S=n.primitiveBounds[g+2]+w,L=n.primitiveBounds[g+3]+w,U=kt(Math.floor((E-n.bounds.minX)/o),a),F=kt(Math.floor((S-n.bounds.minX)/o),a),P=kt(Math.floor((A-n.bounds.minY)/l),r),M=kt(Math.floor((L-n.bounds.minY)/l),r);for(let T=P;T<=M;T+=1){let R=T*a+U;for(let c=U;c<=F;c+=1){const B=y[R];f[B]=h,y[R]=B+1,R+=1}}}return{gridWidth:a,gridHeight:r,minX:n.bounds.minX,minY:n.bounds.minY,maxX:n.bounds.maxX,maxY:n.bounds.maxY,cellWidth:o,cellHeight:l,offsets:m,counts:d,indices:f,maxCellPopulation:p}}function fi(n,t,e){const s=we(Math.round(n/8),hi,di),a=t/e;let r=Math.round(Math.sqrt(s*a)),i=Math.round(s/Math.max(r,1));return r=we(r,He,Ze),i=we(i,He,Ze),{gridWidth:r,gridHeight:i}}function kt(n,t){return n<0?0:n>=t?t-1:n}function we(n,t,e){return n<t?t:n>e?e:n}const mi=96,pi=[1,.85,.7,.55,.4,.3],Le=8,qe=256,Wt=8,je=.001;function Xn(n,t){if(typeof document>"u"||n.textGlyphCount<=0)return null;const e=new Float32Array(n.textGlyphCount*4),s=Jt(Math.trunc(t)||4096,256,8192);let a=null;for(const d of pi){const p=Math.max(Le,Math.round(mi*d)),m=gi(n,p);if(m.length===0)return null;const v=xi(m,s);if(v){a=v;break}}if(!a)return null;const r=document.createElement("canvas");r.width=a.width,r.height=a.height;const i=r.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!i)return null;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,a.width,a.height),i.fillStyle="#ffffff",i.globalCompositeOperation="source-over";for(const d of a.placements){if(!yi(i,d,n))continue;i.fill("nonzero");const p=d.index*4;e[p]=(d.x+Wt)/a.width,e[p+1]=(d.y+Wt)/a.height,e[p+2]=d.innerWidth/a.width,e[p+3]=d.innerHeight/a.height}const o=i.getImageData(0,0,a.width,a.height),l=new Uint8Array(o.data);return{width:a.width,height:a.height,rgba:l,glyphUvRects:e}}function gi(n,t){const e=[];for(let s=0;s<n.textGlyphCount;s+=1){const a=s*4,r=Math.max(0,Math.trunc(n.textGlyphMetaA[a])),i=Math.max(0,Math.trunc(n.textGlyphMetaA[a+1]));if(i<=0)continue;const o=n.textGlyphMetaA[a+2],l=n.textGlyphMetaA[a+3],d=n.textGlyphMetaB[a],p=n.textGlyphMetaB[a+1],m=d-o,v=p-l;if(!Number.isFinite(m)||!Number.isFinite(v)||m<=1e-6||v<=1e-6)continue;const f=t/Math.max(m,v),y=Jt(Math.ceil(m*f),Le,qe),h=Jt(Math.ceil(v*f),Le,qe);e.push({index:s,segmentStart:r,segmentCount:i,minX:o,minY:l,maxX:d,maxY:p,innerWidth:y,innerHeight:h,tileWidth:y+Wt*2,tileHeight:h+Wt*2,x:0,y:0})}return e}function xi(n,t){if(n.length===0)return null;const e=n.slice().sort((i,o)=>i.tileHeight!==o.tileHeight?o.tileHeight-i.tileHeight:o.tileWidth-i.tileWidth),s=e.reduce((i,o)=>i+o.tileWidth*o.tileHeight,0),a=e.reduce((i,o)=>Math.max(i,o.tileWidth),0);let r=Jt(Qe(Math.ceil(Math.sqrt(s)*1.15)),a,t);for(;r<=t;){let i=0,o=0,l=0,d=!1;for(const p of e){if(p.tileWidth>r){d=!0;break}if(i+p.tileWidth>r&&(i=0,o+=l,l=0),p.x=i,p.y=o,i+=p.tileWidth,l=Math.max(l,p.tileHeight),o+l>t){d=!0;break}}if(!d){const p=o+l,m=Jt(Qe(Math.max(p,1)),1,t);if(m<=t)return{placements:e,width:r,height:m}}if(r===t)break;r=Math.min(t,r*2)}return null}function yi(n,t,e){const s=Math.max(t.maxX-t.minX,1e-6),a=Math.max(t.maxY-t.minY,1e-6),r=t.innerWidth/s,i=t.innerHeight/a,o=t.x+Wt-t.minX*r,l=t.y+Wt+t.maxY*i,d=x=>o+x*r,p=x=>l-x*i;n.beginPath();let m=!1,v=!1,f=0,y=0,h=0,g=0;for(let x=0;x<t.segmentCount;x+=1){const w=(t.segmentStart+x)*4;if(w+3>=e.textGlyphSegmentsA.length||w+3>=e.textGlyphSegmentsB.length)break;const E=e.textGlyphSegmentsA[w],A=e.textGlyphSegmentsA[w+1],S=e.textGlyphSegmentsA[w+2],L=e.textGlyphSegmentsA[w+3],U=e.textGlyphSegmentsB[w],F=e.textGlyphSegmentsB[w+1],P=e.textGlyphSegmentsB[w+2];(!v||!$e(E,A,h,g))&&(v&&n.closePath(),n.moveTo(d(E),p(A)),v=!0,f=E,y=A),P>=.5?n.quadraticCurveTo(d(S),p(L),d(U),p(F)):n.lineTo(d(U),p(F)),m=!0,h=U,g=F,$e(h,g,f,y)&&(n.closePath(),v=!1)}return v&&n.closePath(),m}function $e(n,t,e,s){return Math.abs(n-e)<=je&&Math.abs(t-s)<=je}function Qe(n){if(n<=1)return 1;let t=1;for(;t<n;)t<<=1;return t}function Jt(n,t,e){return n<t?t:n>e?e:n}const Un=`#version 300 es
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
`,Nn=`#version 300 es
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

  float coverage = 1.0 - smoothstep(vHalfWidth - vAAWorld, vHalfWidth + vAAWorld, distanceToSegment);
  float alpha = coverage * vAlpha;

  if (alpha <= 0.001) {
    discard;
  }

  vec3 color = mix(vColor, uVectorOverride.rgb, clamp(uVectorOverride.a, 0.0, 1.0));
  outColor = vec4(color, alpha);
}
`,Gn=`#version 300 es
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
`,zn=`#version 300 es
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
`,Vn=`#version 300 es
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
`,Yn=`#version 300 es
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
`,Ke=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

void main() {
  gl_Position = vec4(aCorner, 0.0, 1.0);
}
`,vi=`#version 300 es
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
`,Ti=`#version 300 es
precision highp float;

uniform sampler2D uVectorLayerTex;
uniform vec2 uViewportPx;

out vec4 outColor;

void main() {
  vec2 uv = gl_FragCoord.xy / max(uViewportPx, vec2(1.0));
  outColor = texture(uVectorLayerTex, clamp(uv, vec2(0.0), vec2(1.0)));
}
`,Wn=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aCorner;

uniform vec4 uRasterMatrixABCD;
uniform vec2 uRasterMatrixEF;
uniform vec2 uViewport;
uniform vec2 uCameraCenter;
uniform float uZoom;

out vec2 vUv;

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
}
`,Hn=`#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D uRasterTex;
in vec2 vUv;
out vec4 outColor;

void main() {
  vec4 color = texture(uRasterTex, vUv);
  if (color.a <= 0.001) {
    discard;
  }
  outColor = color;
}
`,Ci=140,Je=3e5,tn=1.8,en=96,bi=1e-5,Ai=.75,Si=1.3333333333,_i=2,wi=2.25,Ee=24,Nt=1e-4,re=1e-5,Ei=64,nn=5,rn=2e4,Ri=120,ae=160/255,se=169/255,oe=175/255,is=Un,rs=Nn,as=Gn,ss=zn,os=Vn,ls=Yn,cs=Wn,us=Hn;class hs{canvas;gl;segmentProgram;fillProgram;textProgram;blitProgram;vectorCompositeProgram;rasterProgram;segmentVao;fillVao;textVao;blitVao;cornerBuffer;allSegmentIdBuffer;visibleSegmentIdBuffer;allFillPathIdBuffer;allTextInstanceIdBuffer;segmentTextureA;segmentTextureB;segmentTextureC;segmentTextureD;fillPathMetaTextureA;fillPathMetaTextureB;fillPathMetaTextureC;fillSegmentTextureA;fillSegmentTextureB;textInstanceTextureA;textInstanceTextureB;textInstanceTextureC;textGlyphMetaTextureA;textGlyphMetaTextureB;textGlyphRasterMetaTexture;textGlyphSegmentTextureA;textGlyphSegmentTextureB;textRasterAtlasTexture;pageBackgroundTexture;uSegmentTexA;uSegmentTexB;uSegmentStyleTex;uSegmentBoundsTex;uSegmentTexSize;uViewport;uCameraCenter;uZoom;uAAScreenPx;uStrokeCurveEnabled;uStrokeVectorOverride;uFillPathMetaTexA;uFillPathMetaTexB;uFillPathMetaTexC;uFillSegmentTexA;uFillSegmentTexB;uFillPathMetaTexSize;uFillSegmentTexSize;uFillViewport;uFillCameraCenter;uFillZoom;uFillAAScreenPx;uFillVectorOverride;uTextInstanceTexA;uTextInstanceTexB;uTextInstanceTexC;uTextGlyphMetaTexA;uTextGlyphMetaTexB;uTextGlyphRasterMetaTex;uTextGlyphSegmentTexA;uTextGlyphSegmentTexB;uTextInstanceTexSize;uTextGlyphMetaTexSize;uTextGlyphSegmentTexSize;uTextViewport;uTextCameraCenter;uTextZoom;uTextAAScreenPx;uTextCurveEnabled;uTextRasterAtlasTex;uTextRasterAtlasSize;uTextVectorOnly;uTextVectorOverride;uCacheTex;uViewportPx;uCacheSizePx;uOffsetPx;uSampleScale;uVectorLayerTex;uVectorLayerViewportPx;uRasterTex;uRasterMatrixABCD;uRasterMatrixEF;uRasterViewport;uRasterCameraCenter;uRasterZoom;scene=null;grid=null;sceneStats=null;allSegmentIds=new Float32Array(0);visibleSegmentIds=new Float32Array(0);allFillPathIds=new Float32Array(0);allTextInstanceIds=new Float32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;segmentCount=0;fillPathCount=0;textInstanceCount=0;rasterLayers=[];pageRects=new Float32Array(0);visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textRasterAtlasWidth=1;textRasterAtlasHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;needsVisibleSetUpdate=!1;rafHandle=0;frameListener=null;interactionViewportProvider=null;externalFrameDriver=!1;presentedCameraCenterX=0;presentedCameraCenterY=0;presentedZoom=1;presentedFrameSerial=0;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=4096;lastInteractionTime=Number.NEGATIVE_INFINITY;isPanInteracting=!1;panCacheTexture=null;panCacheFramebuffer=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyFramebuffer=null;vectorMinifyWidth=0;vectorMinifyHeight=0;vectorMinifyWarmupPending=!1;panOptimizationEnabled=!0;rasterRenderingEnabled=!0;fillRenderingEnabled=!0;strokeRenderingEnabled=!0;textRenderingEnabled=!0;strokeCurveEnabled=!0;textVectorOnly=!1;hasCameraInteractionSinceSceneLoad=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;constructor(t){this.canvas=t;const e=t.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,alpha:!1,premultipliedAlpha:!1});if(!e)throw new Error("WebGL2 is required for this proof-of-concept renderer.");this.gl=e,this.segmentProgram=this.createProgram(Un,Nn),this.fillProgram=this.createProgram(Gn,zn),this.textProgram=this.createProgram(Vn,Yn),this.blitProgram=this.createProgram(Ke,vi),this.vectorCompositeProgram=this.createProgram(Ke,Ti),this.rasterProgram=this.createProgram(Wn,Hn),this.segmentVao=this.createVertexArray(),this.fillVao=this.createVertexArray(),this.textVao=this.createVertexArray(),this.blitVao=this.createVertexArray(),this.cornerBuffer=this.mustCreateBuffer(),this.allSegmentIdBuffer=this.mustCreateBuffer(),this.visibleSegmentIdBuffer=this.mustCreateBuffer(),this.allFillPathIdBuffer=this.mustCreateBuffer(),this.allTextInstanceIdBuffer=this.mustCreateBuffer(),this.segmentTextureA=this.mustCreateTexture(),this.segmentTextureB=this.mustCreateTexture(),this.segmentTextureC=this.mustCreateTexture(),this.segmentTextureD=this.mustCreateTexture(),this.fillPathMetaTextureA=this.mustCreateTexture(),this.fillPathMetaTextureB=this.mustCreateTexture(),this.fillPathMetaTextureC=this.mustCreateTexture(),this.fillSegmentTextureA=this.mustCreateTexture(),this.fillSegmentTextureB=this.mustCreateTexture(),this.textInstanceTextureA=this.mustCreateTexture(),this.textInstanceTextureB=this.mustCreateTexture(),this.textInstanceTextureC=this.mustCreateTexture(),this.textGlyphMetaTextureA=this.mustCreateTexture(),this.textGlyphMetaTextureB=this.mustCreateTexture(),this.textGlyphRasterMetaTexture=this.mustCreateTexture(),this.textGlyphSegmentTextureA=this.mustCreateTexture(),this.textGlyphSegmentTextureB=this.mustCreateTexture(),this.textRasterAtlasTexture=this.mustCreateTexture(),this.pageBackgroundTexture=this.mustCreateTexture(),this.uSegmentTexA=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexA"),this.uSegmentTexB=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexB"),this.uSegmentStyleTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentStyleTex"),this.uSegmentBoundsTex=this.mustGetUniformLocation(this.segmentProgram,"uSegmentBoundsTex"),this.uSegmentTexSize=this.mustGetUniformLocation(this.segmentProgram,"uSegmentTexSize"),this.uViewport=this.mustGetUniformLocation(this.segmentProgram,"uViewport"),this.uCameraCenter=this.mustGetUniformLocation(this.segmentProgram,"uCameraCenter"),this.uZoom=this.mustGetUniformLocation(this.segmentProgram,"uZoom"),this.uAAScreenPx=this.mustGetUniformLocation(this.segmentProgram,"uAAScreenPx"),this.uStrokeCurveEnabled=this.mustGetUniformLocation(this.segmentProgram,"uStrokeCurveEnabled"),this.uStrokeVectorOverride=this.mustGetUniformLocation(this.segmentProgram,"uVectorOverride"),this.uFillPathMetaTexA=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexA"),this.uFillPathMetaTexB=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexB"),this.uFillPathMetaTexC=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexC"),this.uFillSegmentTexA=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexA"),this.uFillSegmentTexB=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexB"),this.uFillPathMetaTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillPathMetaTexSize"),this.uFillSegmentTexSize=this.mustGetUniformLocation(this.fillProgram,"uFillSegmentTexSize"),this.uFillViewport=this.mustGetUniformLocation(this.fillProgram,"uViewport"),this.uFillCameraCenter=this.mustGetUniformLocation(this.fillProgram,"uCameraCenter"),this.uFillZoom=this.mustGetUniformLocation(this.fillProgram,"uZoom"),this.uFillAAScreenPx=this.mustGetUniformLocation(this.fillProgram,"uFillAAScreenPx"),this.uFillVectorOverride=this.mustGetUniformLocation(this.fillProgram,"uVectorOverride"),this.uTextInstanceTexA=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexA"),this.uTextInstanceTexB=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexB"),this.uTextInstanceTexC=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexC"),this.uTextGlyphMetaTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexA"),this.uTextGlyphMetaTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexB"),this.uTextGlyphRasterMetaTex=this.mustGetUniformLocation(this.textProgram,"uTextGlyphRasterMetaTex"),this.uTextGlyphSegmentTexA=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexA"),this.uTextGlyphSegmentTexB=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexB"),this.uTextInstanceTexSize=this.mustGetUniformLocation(this.textProgram,"uTextInstanceTexSize"),this.uTextGlyphMetaTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphMetaTexSize"),this.uTextGlyphSegmentTexSize=this.mustGetUniformLocation(this.textProgram,"uTextGlyphSegmentTexSize"),this.uTextViewport=this.mustGetUniformLocation(this.textProgram,"uViewport"),this.uTextCameraCenter=this.mustGetUniformLocation(this.textProgram,"uCameraCenter"),this.uTextZoom=this.mustGetUniformLocation(this.textProgram,"uZoom"),this.uTextAAScreenPx=this.mustGetUniformLocation(this.textProgram,"uTextAAScreenPx"),this.uTextCurveEnabled=this.mustGetUniformLocation(this.textProgram,"uTextCurveEnabled"),this.uTextRasterAtlasTex=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasTex"),this.uTextRasterAtlasSize=this.mustGetUniformLocation(this.textProgram,"uTextRasterAtlasSize"),this.uTextVectorOnly=this.mustGetUniformLocation(this.textProgram,"uTextVectorOnly"),this.uTextVectorOverride=this.mustGetUniformLocation(this.textProgram,"uVectorOverride"),this.uCacheTex=this.mustGetUniformLocation(this.blitProgram,"uCacheTex"),this.uViewportPx=this.mustGetUniformLocation(this.blitProgram,"uViewportPx"),this.uCacheSizePx=this.mustGetUniformLocation(this.blitProgram,"uCacheSizePx"),this.uOffsetPx=this.mustGetUniformLocation(this.blitProgram,"uOffsetPx"),this.uSampleScale=this.mustGetUniformLocation(this.blitProgram,"uSampleScale"),this.uVectorLayerTex=this.mustGetUniformLocation(this.vectorCompositeProgram,"uVectorLayerTex"),this.uVectorLayerViewportPx=this.mustGetUniformLocation(this.vectorCompositeProgram,"uViewportPx"),this.uRasterTex=this.mustGetUniformLocation(this.rasterProgram,"uRasterTex"),this.uRasterMatrixABCD=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixABCD"),this.uRasterMatrixEF=this.mustGetUniformLocation(this.rasterProgram,"uRasterMatrixEF"),this.uRasterViewport=this.mustGetUniformLocation(this.rasterProgram,"uViewport"),this.uRasterCameraCenter=this.mustGetUniformLocation(this.rasterProgram,"uCameraCenter"),this.uRasterZoom=this.mustGetUniformLocation(this.rasterProgram,"uZoom"),this.initializeGeometry(),this.initializeState(),this.uploadPageBackgroundTexture()}setFrameListener(t){this.frameListener=t}setExternalFrameDriver(t){const e=!!t;this.externalFrameDriver!==e&&(this.externalFrameDriver=e,this.externalFrameDriver&&this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0))}renderExternalFrame(t=performance.now()){this.render(t)}setPanOptimizationEnabled(t){const e=!!t;this.panOptimizationEnabled!==e&&(this.panOptimizationEnabled=e,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(t){const e=!!t;this.strokeCurveEnabled!==e&&(this.strokeCurveEnabled=e,this.requestFrame())}setRasterRenderingEnabled(t){const e=!!t;this.rasterRenderingEnabled!==e&&(this.rasterRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeRenderingEnabled(t){const e=!!t;this.strokeRenderingEnabled!==e&&(this.strokeRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setFillRenderingEnabled(t){const e=!!t;this.fillRenderingEnabled!==e&&(this.fillRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setTextRenderingEnabled(t){const e=!!t;this.textRenderingEnabled!==e&&(this.textRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setTextVectorOnly(t){const e=!!t;this.textVectorOnly!==e&&(this.textVectorOnly=e,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(t,e,s,a){const r=St(t,0,1),i=St(e,0,1),o=St(s,0,1),l=St(a,0,1),d=this.pageBackgroundColor;Math.abs(d[0]-r)<=1e-6&&Math.abs(d[1]-i)<=1e-6&&Math.abs(d[2]-o)<=1e-6&&Math.abs(d[3]-l)<=1e-6||(this.pageBackgroundColor=[r,i,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(t,e,s,a){const r=St(t,0,1),i=St(e,0,1),o=St(s,0,1),l=St(a,0,1),d=this.vectorOverrideColor;Math.abs(d[0]-r)<=1e-6&&Math.abs(d[1]-i)<=1e-6&&Math.abs(d[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[r,i,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}setInteractionViewportProvider(t){this.interactionViewportProvider=t}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const t=performance.now(),s=this.lastPanVelocityUpdateTimeMs>0&&t-this.lastPanVelocityUpdateTimeMs<=Ri?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(s)&&s>=nn?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/Ee,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/Ee,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const t=window.devicePixelRatio||1,e=Math.max(1,Math.round(this.canvas.clientWidth*t)),s=Math.max(1,Math.round(this.canvas.clientHeight*t));this.canvas.width===e&&this.canvas.height===s||(this.canvas.width=e,this.canvas.height=s,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(t){this.scene=t,this.segmentCount=t.segmentCount,this.fillPathCount=t.fillPathCount,this.textInstanceCount=t.textInstanceCount,this.pageRects=Fi(t),this.buildSegmentBounds(t),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?On(t):null,this.uploadRasterLayers(t);const e=this.uploadFillPaths(t),s=this.uploadSegments(t),a=this.uploadTextData(t);this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:e.pathMetaTextureWidth,fillPathTextureHeight:e.pathMetaTextureHeight,fillSegmentTextureWidth:e.segmentTextureWidth,fillSegmentTextureHeight:e.segmentTextureHeight,textureWidth:s.textureWidth,textureHeight:s.textureHeight,maxTextureSize:s.maxTextureSize,textInstanceTextureWidth:a.instanceTextureWidth,textInstanceTextureHeight:a.instanceTextureHeight,textGlyphTextureWidth:a.glyphMetaTextureWidth,textGlyphTextureHeight:a.glyphMetaTextureHeight,textSegmentTextureWidth:a.glyphSegmentTextureWidth,textSegmentTextureHeight:a.glyphSegmentTextureHeight},this.allSegmentIds=new Float32Array(this.segmentCount);for(let r=0;r<this.segmentCount;r+=1)this.allSegmentIds[r]=r;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allSegmentIds,this.gl.STATIC_DRAW),this.allFillPathIds=new Float32Array(this.fillPathCount);for(let r=0;r<this.fillPathCount;r+=1)this.allFillPathIds[r]=r;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allFillPathIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allFillPathIds,this.gl.STATIC_DRAW),this.allTextInstanceIds=new Float32Array(this.textInstanceCount);for(let r=0;r<this.textInstanceCount;r+=1)this.allTextInstanceIds[r]=r;return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.allTextInstanceIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.allTextInstanceIds,this.gl.STATIC_DRAW),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Float32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}getPresentedViewState(){return{cameraCenterX:this.presentedCameraCenterX,cameraCenterY:this.presentedCameraCenterY,zoom:this.presentedZoom}}getPresentedFrameSerial(){return this.presentedFrameSerial}setViewState(t){const e=Number(t.cameraCenterX),s=Number(t.cameraCenterY),a=Number(t.zoom);if(!Number.isFinite(e)||!Number.isFinite(s)||!Number.isFinite(a))return;this.cameraCenterX=e,this.cameraCenterY=s;const r=St(a,this.minZoom,this.maxZoom);this.zoom=r,this.targetCameraCenterX=e,this.targetCameraCenterY=s,this.targetZoom=r,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(t,e=64){const s=Math.max(t.maxX-t.minX,1e-4),a=Math.max(t.maxY-t.minY,1e-4),r=Math.max(1,this.canvas.width-e*2),i=Math.max(1,this.canvas.height-e*2),o=Math.min(r/s,i/a),l=St(o,1e-8,this.maxZoom);this.minZoom=Math.min(this.minZoom,l);const d=(t.minX+t.maxX)*.5,p=(t.minY+t.maxY)*.5;this.zoom=l,this.cameraCenterX=d,this.cameraCenterY=p,this.targetZoom=l,this.targetCameraCenterX=d,this.targetCameraCenterY=p,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.needsVisibleSetUpdate=!0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources();for(const t of this.rasterLayers)this.gl.deleteTexture(t.texture);this.rasterLayers=[]}panByPixels(t,e){if(!Number.isFinite(t)||!Number.isFinite(e))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const s=this.resolveClientToPixelScale(),a=-(t*s.x)/this.zoom,r=e*s.y/this.zoom;this.cameraCenterX+=a,this.cameraCenterY+=r,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(t,e,s){const a=St(s,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const r=this.clientToWorld(t,e),i=St(this.targetZoom*a,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=t,this.zoomAnchorClientY=e,this.zoomAnchorWorldX=r.x,this.zoomAnchorWorldY=r.y,this.targetZoom=i;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,i);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}requestFrame(){this.externalFrameDriver||this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(t=>{this.rafHandle=0,this.render(t)}))}render(t=performance.now()){const e=this.updateCameraWithDamping(t);this.updatePanReleaseVelocitySample(t);const s=this.gl;if(this.ensureRenderState(),!this.scene||this.fillPathCount===0&&this.segmentCount===0&&this.textInstanceCount===0&&this.rasterLayers.length===0&&this.pageRects.length===0){s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,this.canvas.width,this.canvas.height),s.clearColor(ae,se,oe,1),s.clear(s.COLOR_BUFFER_BIT),this.capturePresentedFrameState(),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),e&&this.requestFrame();return}this.shouldUsePanCache(e)?this.renderWithPanCache():this.renderDirectToScreen(),this.capturePresentedFrameState(),e&&this.requestFrame()}capturePresentedFrameState(){this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.presentedFrameSerial+=1}shouldUsePanCache(t){return!this.panOptimizationEnabled||this.segmentCount<Je?!1:this.isPanInteracting?!0:t}renderDirectToScreen(){const t=this.gl;let e=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=Je&&(e=!1),e&&this.vectorMinifyWarmupPending&&(e=!1,this.vectorMinifyWarmupPending=!1,this.needsVisibleSetUpdate=!0,this.requestFrame()),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(ae,se,oe,1),t.clear(t.COLOR_BUFFER_BIT),this.needsVisibleSetUpdate){if(e){const a=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,a)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}this.rasterRenderingEnabled&&this.drawRasterLayer(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);let s=0;e?(s=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),this.compositeVectorMinifyLayer()):(this.fillRenderingEnabled&&this.drawFilledPaths(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.strokeRenderingEnabled&&(s=this.drawVisibleSegments(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY)),this.textRenderingEnabled&&this.drawTextInstances(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY)),this.frameListener?.({renderedSegments:s,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillRenderingEnabled&&this.fillPathCount>0||this.strokeRenderingEnabled&&this.segmentCount>0||this.textRenderingEnabled&&this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=wi}computeVectorMinifyZoom(t,e){const s=Math.min(t/Math.max(1,this.canvas.width),e/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,s)}ensureVectorMinifyResources(){const t=this.gl,e=t.getParameter(t.MAX_TEXTURE_SIZE),s=e/Math.max(1,this.canvas.width),a=e/Math.max(1,this.canvas.height),r=Math.max(1,Math.min(_i,s,a)),i=Math.max(this.canvas.width,Math.floor(this.canvas.width*r)),o=Math.max(this.canvas.height,Math.floor(this.canvas.height*r));if(i<this.canvas.width||o<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyFramebuffer&&this.vectorMinifyWidth===i&&this.vectorMinifyHeight===o)return!0;this.destroyVectorMinifyResources();const l=t.createTexture();if(!l)return!1;t.bindTexture(t.TEXTURE_2D,l),Ii(t),t.texStorage2D(t.TEXTURE_2D,1,t.RGBA8,i,o);const d=t.createFramebuffer();if(!d)return t.deleteTexture(l),!1;t.bindFramebuffer(t.FRAMEBUFFER,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0);const p=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.bindFramebuffer(t.FRAMEBUFFER,null),p!==t.FRAMEBUFFER_COMPLETE?(t.deleteFramebuffer(d),t.deleteTexture(l),!1):(this.vectorMinifyTexture=l,this.vectorMinifyFramebuffer=d,this.vectorMinifyWidth=i,this.vectorMinifyHeight=o,this.vectorMinifyWarmupPending=!0,!0)}renderVectorLayerIntoMinifyTarget(t,e,s,a){if(!this.vectorMinifyFramebuffer||!this.vectorMinifyTexture)return 0;const r=this.gl,i=this.computeVectorMinifyZoom(t,e);r.bindFramebuffer(r.FRAMEBUFFER,this.vectorMinifyFramebuffer),r.viewport(0,0,t,e),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA),this.fillRenderingEnabled&&this.drawFilledPaths(t,e,s,a,i);const o=this.strokeRenderingEnabled?this.drawVisibleSegments(t,e,s,a,i):0;return this.textRenderingEnabled&&this.drawTextInstances(t,e,s,a,i),r.bindTexture(r.TEXTURE_2D,this.vectorMinifyTexture),r.bindFramebuffer(r.FRAMEBUFFER,null),o}compositeVectorMinifyLayer(){if(!this.vectorMinifyTexture)return;const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.useProgram(this.vectorCompositeProgram),t.bindVertexArray(this.blitVao),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.vectorMinifyTexture),t.uniform1i(this.uVectorLayerTex,0),t.uniform2f(this.uVectorLayerViewportPx,this.canvas.width,this.canvas.height),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let t=this.panCacheZoom/Math.max(this.zoom,1e-6),e=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,s=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const a=this.panCacheWidth*.5-2,r=this.panCacheHeight*.5-2,i=this.canvas.width*.5*Math.abs(t),o=this.canvas.height*.5*Math.abs(t),l=a-i,d=r-o,p=this.zoom/Math.max(this.panCacheZoom,1e-6),m=p<Ai||p>Si,f=Math.abs(this.targetZoom-this.zoom)<=re&&Math.abs(this.panCacheZoom-this.zoom)>bi,y=l<0||d<0||Math.abs(e)>l||Math.abs(s)>d;if(!this.panCacheValid||m||y||f){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gl;g.bindFramebuffer(g.FRAMEBUFFER,this.panCacheFramebuffer),g.viewport(0,0,this.panCacheWidth,this.panCacheHeight),g.clearColor(ae,se,oe,1),g.clear(g.COLOR_BUFFER_BIT),this.rasterRenderingEnabled&&this.drawRasterLayer(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.fillRenderingEnabled&&this.drawFilledPaths(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheRenderedSegments=this.strokeRenderingEnabled?this.drawVisibleSegments(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY):0,this.textRenderingEnabled&&this.drawTextInstances(this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,t=1,e=0,s=0}this.blitPanCache(e,s,t),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawRasterLayer(t,e,s,a){if(this.rasterLayers.length===0&&this.pageRects.length===0)return;const r=this.gl;if(r.useProgram(this.rasterProgram),r.bindVertexArray(this.blitVao),r.uniform2f(this.uRasterViewport,t,e),r.uniform2f(this.uRasterCameraCenter,s,a),r.uniform1f(this.uRasterZoom,this.zoom),this.pageRects.length>0){r.activeTexture(r.TEXTURE12),r.bindTexture(r.TEXTURE_2D,this.pageBackgroundTexture),r.uniform1i(this.uRasterTex,12);for(let i=0;i<this.pageRects.length;i+=4){const o=this.pageRects[i],l=this.pageRects[i+1],d=this.pageRects[i+2],p=this.pageRects[i+3],m=Math.max(d-o,1e-6),v=Math.max(p-l,1e-6);r.uniform4f(this.uRasterMatrixABCD,m,0,0,v),r.uniform2f(this.uRasterMatrixEF,o,l),r.drawArrays(r.TRIANGLE_STRIP,0,4)}}if(this.rasterLayers.length!==0){r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);for(const i of this.rasterLayers)r.activeTexture(r.TEXTURE12),r.bindTexture(r.TEXTURE_2D,i.texture),r.uniform1i(this.uRasterTex,12),r.uniform4f(this.uRasterMatrixABCD,i.matrix[0],i.matrix[1],i.matrix[2],i.matrix[3]),r.uniform2f(this.uRasterMatrixEF,i.matrix[4],i.matrix[5]),r.drawArrays(r.TRIANGLE_STRIP,0,4);r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA)}}drawFilledPaths(t,e,s,a,r=this.zoom){if(!this.scene||this.fillPathCount<=0)return 0;const i=this.gl;return i.useProgram(this.fillProgram),i.bindVertexArray(this.fillVao),i.activeTexture(i.TEXTURE7),i.bindTexture(i.TEXTURE_2D,this.fillPathMetaTextureA),i.activeTexture(i.TEXTURE8),i.bindTexture(i.TEXTURE_2D,this.fillPathMetaTextureB),i.activeTexture(i.TEXTURE9),i.bindTexture(i.TEXTURE_2D,this.fillPathMetaTextureC),i.activeTexture(i.TEXTURE10),i.bindTexture(i.TEXTURE_2D,this.fillSegmentTextureA),i.activeTexture(i.TEXTURE11),i.bindTexture(i.TEXTURE_2D,this.fillSegmentTextureB),i.uniform1i(this.uFillPathMetaTexA,7),i.uniform1i(this.uFillPathMetaTexB,8),i.uniform1i(this.uFillPathMetaTexC,9),i.uniform1i(this.uFillSegmentTexA,10),i.uniform1i(this.uFillSegmentTexB,11),i.uniform2i(this.uFillPathMetaTexSize,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight),i.uniform2i(this.uFillSegmentTexSize,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight),i.uniform2f(this.uFillViewport,t,e),i.uniform2f(this.uFillCameraCenter,s,a),i.uniform1f(this.uFillZoom,r),i.uniform1f(this.uFillAAScreenPx,1),i.uniform4f(this.uFillVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),i.drawArraysInstanced(i.TRIANGLE_STRIP,0,4,this.fillPathCount),this.fillPathCount}drawVisibleSegments(t,e,s,a,r=this.zoom){const i=this.usingAllSegments?this.segmentCount:this.visibleSegmentCount;if(i===0)return 0;const o=this.gl;o.useProgram(this.segmentProgram),o.bindVertexArray(this.segmentVao);const l=this.usingAllSegments?this.allSegmentIdBuffer:this.visibleSegmentIdBuffer;return o.bindBuffer(o.ARRAY_BUFFER,l),o.enableVertexAttribArray(1),o.vertexAttribPointer(1,1,o.FLOAT,!1,4,0),o.vertexAttribDivisor(1,1),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this.segmentTextureA),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.segmentTextureB),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.segmentTextureC),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,this.segmentTextureD),o.uniform1i(this.uSegmentTexA,0),o.uniform1i(this.uSegmentTexB,1),o.uniform1i(this.uSegmentStyleTex,2),o.uniform1i(this.uSegmentBoundsTex,3),o.uniform2i(this.uSegmentTexSize,this.segmentTextureWidth,this.segmentTextureHeight),o.uniform2f(this.uViewport,t,e),o.uniform2f(this.uCameraCenter,s,a),o.uniform1f(this.uZoom,r),o.uniform1f(this.uAAScreenPx,1),o.uniform1f(this.uStrokeCurveEnabled,this.strokeCurveEnabled?1:0),o.uniform4f(this.uStrokeVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,i),i}drawTextInstances(t,e,s,a,r=this.zoom){if(!this.scene||this.textInstanceCount<=0)return 0;const i=this.gl;return i.useProgram(this.textProgram),i.bindVertexArray(this.textVao),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,this.textInstanceTextureA),i.activeTexture(i.TEXTURE3),i.bindTexture(i.TEXTURE_2D,this.textInstanceTextureB),i.activeTexture(i.TEXTURE4),i.bindTexture(i.TEXTURE_2D,this.textInstanceTextureC),i.activeTexture(i.TEXTURE5),i.bindTexture(i.TEXTURE_2D,this.textGlyphMetaTextureA),i.activeTexture(i.TEXTURE6),i.bindTexture(i.TEXTURE_2D,this.textGlyphMetaTextureB),i.activeTexture(i.TEXTURE7),i.bindTexture(i.TEXTURE_2D,this.textGlyphSegmentTextureA),i.activeTexture(i.TEXTURE8),i.bindTexture(i.TEXTURE_2D,this.textGlyphSegmentTextureB),i.activeTexture(i.TEXTURE9),i.bindTexture(i.TEXTURE_2D,this.textGlyphRasterMetaTexture),i.activeTexture(i.TEXTURE13),i.bindTexture(i.TEXTURE_2D,this.textRasterAtlasTexture),i.uniform1i(this.uTextInstanceTexA,2),i.uniform1i(this.uTextInstanceTexB,3),i.uniform1i(this.uTextInstanceTexC,4),i.uniform1i(this.uTextGlyphMetaTexA,5),i.uniform1i(this.uTextGlyphMetaTexB,6),i.uniform1i(this.uTextGlyphSegmentTexA,7),i.uniform1i(this.uTextGlyphSegmentTexB,8),i.uniform1i(this.uTextGlyphRasterMetaTex,9),i.uniform1i(this.uTextRasterAtlasTex,13),i.uniform2i(this.uTextInstanceTexSize,this.textInstanceTextureWidth,this.textInstanceTextureHeight),i.uniform2i(this.uTextGlyphMetaTexSize,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight),i.uniform2i(this.uTextGlyphSegmentTexSize,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight),i.uniform2f(this.uTextRasterAtlasSize,this.textRasterAtlasWidth,this.textRasterAtlasHeight),i.uniform2f(this.uTextViewport,t,e),i.uniform2f(this.uTextCameraCenter,s,a),i.uniform1f(this.uTextZoom,r),i.uniform1f(this.uTextAAScreenPx,1.25),i.uniform1f(this.uTextCurveEnabled,this.strokeCurveEnabled?1:0),i.uniform1f(this.uTextVectorOnly,this.textVectorOnly?1:0),i.uniform4f(this.uTextVectorOverride,this.vectorOverrideColor[0],this.vectorOverrideColor[1],this.vectorOverrideColor[2],this.vectorOverrideOpacity),i.drawArraysInstanced(i.TRIANGLE_STRIP,0,4,this.textInstanceCount),this.textInstanceCount}blitPanCache(t,e,s){if(!this.panCacheTexture)return;const a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,null),a.viewport(0,0,this.canvas.width,this.canvas.height),a.clearColor(ae,se,oe,1),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(this.blitProgram),a.bindVertexArray(this.blitVao),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.panCacheTexture),a.uniform1i(this.uCacheTex,0),a.uniform2f(this.uViewportPx,this.canvas.width,this.canvas.height),a.uniform2f(this.uCacheSizePx,this.panCacheWidth,this.panCacheHeight),a.uniform2f(this.uOffsetPx,t,e),a.uniform1f(this.uSampleScale,s),a.disable(a.BLEND),a.drawArrays(a.TRIANGLE_STRIP,0,4),a.enable(a.BLEND)}ensurePanCacheResources(){const t=this.gl,e=t.getParameter(t.MAX_TEXTURE_SIZE),s=Math.min(e,Math.max(this.canvas.width+en*2,Math.ceil(this.canvas.width*tn))),a=Math.min(e,Math.max(this.canvas.height+en*2,Math.ceil(this.canvas.height*tn)));if(s<this.canvas.width||a<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheFramebuffer&&this.panCacheWidth===s&&this.panCacheHeight===a)return!0;this.destroyPanCacheResources();const r=t.createTexture();if(!r)return!1;t.bindTexture(t.TEXTURE_2D,r),Mi(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,s,a,0,t.RGBA,t.UNSIGNED_BYTE,null);const i=t.createFramebuffer();if(!i)return t.deleteTexture(r),!1;t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0);const o=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.bindFramebuffer(t.FRAMEBUFFER,null),o!==t.FRAMEBUFFER_COMPLETE?(t.deleteFramebuffer(i),t.deleteTexture(r),!1):(this.panCacheTexture=r,this.panCacheFramebuffer=i,this.panCacheWidth=s,this.panCacheHeight=a,this.panCacheValid=!1,!0)}destroyPanCacheResources(){this.panCacheFramebuffer&&(this.gl.deleteFramebuffer(this.panCacheFramebuffer),this.panCacheFramebuffer=null),this.panCacheTexture&&(this.gl.deleteTexture(this.panCacheTexture),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1}destroyVectorMinifyResources(){this.vectorMinifyFramebuffer&&(this.gl.deleteFramebuffer(this.vectorMinifyFramebuffer),this.vectorMinifyFramebuffer=null),this.vectorMinifyTexture&&(this.gl.deleteTexture(this.vectorMinifyTexture),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorMinifyWarmupPending=!1}updateVisibleSet(t=this.cameraCenterX,e=this.cameraCenterY,s=this.canvas.width,a=this.canvas.height,r=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const i=this.grid,o=Math.max(r,1e-6),l=s/(2*o),d=a/(2*o),p=Math.max(16/o,this.scene.maxHalfWidth*2),m=t-l-p,v=t+l+p,f=e-d-p,y=e+d+p,h=le(Math.floor((m-i.minX)/i.cellWidth),i.gridWidth),g=le(Math.floor((v-i.minX)/i.cellWidth),i.gridWidth),x=le(Math.floor((f-i.minY)/i.cellHeight),i.gridHeight),b=le(Math.floor((y-i.minY)/i.cellHeight),i.gridHeight);this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let w=0;for(let A=x;A<=b;A+=1){let S=A*i.gridWidth+h;for(let L=h;L<=g;L+=1){const U=i.offsets[S],F=i.counts[S];for(let P=0;P<F;P+=1){const M=i.indices[U+P];this.segmentMarks[M]!==this.markToken&&(this.segmentMarks[M]=this.markToken,!(this.segmentMaxX[M]<m||this.segmentMinX[M]>v||this.segmentMaxY[M]<f||this.segmentMinY[M]>y)&&(this.visibleSegmentIds[w]=M,w+=1))}S+=1}}this.visibleSegmentCount=w;const E=this.visibleSegmentIds.subarray(0,w);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.visibleSegmentIdBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,E,this.gl.DYNAMIC_DRAW)}uploadRasterLayers(t){const e=this.gl;for(const s of this.rasterLayers)e.deleteTexture(s.texture);this.rasterLayers=[];for(const s of this.getSceneRasterLayers(t)){const a=e.createTexture();if(!a)continue;e.bindTexture(e.TEXTURE_2D,a),an(e);const r=s.data.subarray(0,s.width*s.height*4),i=Pi(r);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,s.width,s.height,0,e.RGBA,e.UNSIGNED_BYTE,i),e.generateMipmap(e.TEXTURE_2D);const o=new Float32Array(6);s.matrix.length>=6?(o[0]=s.matrix[0],o[1]=s.matrix[1],o[2]=s.matrix[2],o[3]=s.matrix[3],o[4]=s.matrix[4],o[5]=s.matrix[5]):(o[0]=1,o[3]=1),this.rasterLayers.push({texture:a,matrix:o})}}getSceneRasterLayers(t){const e=[];if(Array.isArray(t.rasterLayers))for(const r of t.rasterLayers){const i=Math.max(0,Math.trunc(r?.width??0)),o=Math.max(0,Math.trunc(r?.height??0));i<=0||o<=0||!(r.data instanceof Uint8Array)||r.data.length<i*o*4||e.push({width:i,height:o,data:r.data,matrix:r.matrix instanceof Float32Array?r.matrix:new Float32Array(r.matrix)})}if(e.length>0)return e;const s=Math.max(0,Math.trunc(t.rasterLayerWidth)),a=Math.max(0,Math.trunc(t.rasterLayerHeight));return s<=0||a<=0||t.rasterLayerData.length<s*a*4||e.push({width:s,height:a,data:t.rasterLayerData,matrix:t.rasterLayerMatrix}),e}uploadFillPaths(t){const e=this.gl,s=e.getParameter(e.MAX_TEXTURE_SIZE),a=qt(t.fillPathCount,s),r=qt(t.fillSegmentCount,s);this.fillPathMetaTextureWidth=a.width,this.fillPathMetaTextureHeight=a.height,this.fillSegmentTextureWidth=r.width,this.fillSegmentTextureHeight=r.height;const i=a.width*a.height,o=r.width*r.height,l=new Float32Array(i*4);l.set(t.fillPathMetaA);const d=new Float32Array(i*4);d.set(t.fillPathMetaB);const p=new Float32Array(i*4);p.set(t.fillPathMetaC);const m=new Float32Array(o*4);m.set(t.fillSegmentsA);const v=new Float32Array(o*4);return v.set(t.fillSegmentsB),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,l),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,d),e.bindTexture(e.TEXTURE_2D,this.fillPathMetaTextureC),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,0,e.RGBA,e.FLOAT,p),e.bindTexture(e.TEXTURE_2D,this.fillSegmentTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,e.RGBA,e.FLOAT,m),e.bindTexture(e.TEXTURE_2D,this.fillSegmentTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,0,e.RGBA,e.FLOAT,v),{pathMetaTextureWidth:this.fillPathMetaTextureWidth,pathMetaTextureHeight:this.fillPathMetaTextureHeight,segmentTextureWidth:this.fillSegmentTextureWidth,segmentTextureHeight:this.fillSegmentTextureHeight}}uploadSegments(t){const e=this.gl,s=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.ceil(Math.sqrt(t.segmentCount));if(this.segmentTextureWidth=St(a,1,s),this.segmentTextureHeight=Math.max(1,Math.ceil(t.segmentCount/this.segmentTextureWidth)),this.segmentTextureHeight>s)throw new Error("Segment texture exceeds GPU limits for this browser/GPU.");const r=this.segmentTextureWidth*this.segmentTextureHeight,i=new Float32Array(r*4);i.set(t.endpoints);const o=new Float32Array(r*4);o.set(t.primitiveMeta);const l=new Float32Array(r*4);l.set(t.styles);const d=new Float32Array(r*4);return d.set(t.primitiveBounds),e.bindTexture(e.TEXTURE_2D,this.segmentTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,i),e.bindTexture(e.TEXTURE_2D,this.segmentTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,o),e.bindTexture(e.TEXTURE_2D,this.segmentTextureC),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,l),e.bindTexture(e.TEXTURE_2D,this.segmentTextureD),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.segmentTextureWidth,this.segmentTextureHeight,0,e.RGBA,e.FLOAT,d),{textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:s}}uploadTextData(t){const e=this.gl,s=e.getParameter(e.MAX_TEXTURE_SIZE),a=qt(t.textInstanceCount,s),r=qt(t.textGlyphCount,s),i=qt(t.textGlyphSegmentCount,s);this.textInstanceTextureWidth=a.width,this.textInstanceTextureHeight=a.height,this.textGlyphMetaTextureWidth=r.width,this.textGlyphMetaTextureHeight=r.height,this.textGlyphSegmentTextureWidth=i.width,this.textGlyphSegmentTextureHeight=i.height;const o=a.width*a.height,l=r.width*r.height,d=i.width*i.height,p=new Float32Array(o*4);p.set(t.textInstanceA);const m=new Float32Array(o*4);m.set(t.textInstanceB);const v=new Float32Array(o*4);v.set(t.textInstanceC);const f=new Float32Array(l*4);f.set(t.textGlyphMetaA);const y=new Float32Array(l*4);y.set(t.textGlyphMetaB);const h=new Float32Array(l*4),g=Xn(t,s);g?(h.set(g.glyphUvRects),this.textRasterAtlasWidth=g.width,this.textRasterAtlasHeight=g.height):(this.textRasterAtlasWidth=1,this.textRasterAtlasHeight=1);const x=new Float32Array(d*4);x.set(t.textGlyphSegmentsA);const b=new Float32Array(d*4);if(b.set(t.textGlyphSegmentsB),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,p),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,m),e.bindTexture(e.TEXTURE_2D,this.textInstanceTextureC),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textInstanceTextureWidth,this.textInstanceTextureHeight,0,e.RGBA,e.FLOAT,v),e.bindTexture(e.TEXTURE_2D,this.textGlyphMetaTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,f),e.bindTexture(e.TEXTURE_2D,this.textGlyphMetaTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,y),e.bindTexture(e.TEXTURE_2D,this.textGlyphRasterMetaTexture),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,0,e.RGBA,e.FLOAT,h),e.bindTexture(e.TEXTURE_2D,this.textGlyphSegmentTextureA),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,e.RGBA,e.FLOAT,x),e.bindTexture(e.TEXTURE_2D,this.textGlyphSegmentTextureB),Tt(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,0,e.RGBA,e.FLOAT,b),e.bindTexture(e.TEXTURE_2D,this.textRasterAtlasTexture),an(e),g)e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.textRasterAtlasWidth,this.textRasterAtlasHeight,0,e.RGBA,e.UNSIGNED_BYTE,g.rgba);else{const w=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,w)}return e.generateMipmap(e.TEXTURE_2D),{instanceTextureWidth:this.textInstanceTextureWidth,instanceTextureHeight:this.textInstanceTextureHeight,glyphMetaTextureWidth:this.textGlyphMetaTextureWidth,glyphMetaTextureHeight:this.textGlyphMetaTextureHeight,glyphSegmentTextureWidth:this.textGlyphSegmentTextureWidth,glyphSegmentTextureHeight:this.textGlyphSegmentTextureHeight}}buildSegmentBounds(t){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let e=0;e<this.segmentCount;e+=1){const s=e*4,a=e*4,r=t.styles[a]+.35;this.segmentMinX[e]=t.primitiveBounds[s]-r,this.segmentMinY[e]=t.primitiveBounds[s+1]-r,this.segmentMaxX[e]=t.primitiveBounds[s+2]+r,this.segmentMaxY[e]=t.primitiveBounds[s+3]+r}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=Ci}initializeGeometry(){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer);const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.bindVertexArray(this.segmentVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allSegmentIdBuffer),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(1,1),t.bindVertexArray(this.fillVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allFillPathIdBuffer),t.enableVertexAttribArray(3),t.vertexAttribPointer(3,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(3,1),t.bindVertexArray(this.textVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindBuffer(t.ARRAY_BUFFER,this.allTextInstanceIdBuffer),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,1,t.FLOAT,!1,4,0),t.vertexAttribDivisor(2,1),t.bindVertexArray(this.blitVao),t.bindBuffer(t.ARRAY_BUFFER,this.cornerBuffer),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,8,0),t.vertexAttribDivisor(0,0),t.bindVertexArray(null)}initializeState(){this.ensureRenderState()}ensureRenderState(){const t=this.gl;t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.disable(t.SCISSOR_TEST),t.colorMask(!0,!0,!0,!0),t.enable(t.BLEND),t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)}uploadPageBackgroundTexture(){const t=this.gl,e=this.pageBackgroundColor,s=new Uint8Array([Math.round(e[0]*255),Math.round(e[1]*255),Math.round(e[2]*255),Math.round(e[3]*255)]);t.bindTexture(t.TEXTURE_2D,this.pageBackgroundTexture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,s),t.bindTexture(t.TEXTURE_2D,null)}clientToWorld(t,e){return this.clientToWorldAt(t,e,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(t,e,s,a,r){const i=this.resolveInteractionViewportRect(),o=this.resolveClientToPixelScale(i),l=(t-i.left)*o.x,d=(i.bottom-e)*o.y;return{x:(l-this.canvas.width*.5)/r+s,y:(d-this.canvas.height*.5)/r+a}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(t){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const e=t-this.lastPanFrameTimeMs;if(e>.1){const s=this.cameraCenterX-this.lastPanFrameCameraX,a=this.cameraCenterY-this.lastPanFrameCameraY;let r=s*1e3/e,i=a*1e3/e;const o=Math.hypot(r,i);if(Number.isFinite(o)&&o>=nn){if(o>rn){const l=rn/o;r*=l,i*=l}this.panVelocityWorldX=r,this.panVelocityWorldY=i,this.lastPanVelocityUpdateTimeMs=t}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=t}updateCameraWithDamping(t){let e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>Nt||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>Nt,s=Math.abs(this.targetZoom-this.zoom)>re;if(!e&&!s)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=t,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=t-16);const a=St(t-this.lastCameraAnimationTimeMs,0,Ei);this.lastCameraAnimationTimeMs=t;const r=a/1e3,i=1-Math.exp(-Ee*r),o=1-Math.exp(-24*r);if(s&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=re&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),d=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=d.x,this.targetCameraCenterY=d.y,s||(this.hasZoomAnchor=!1),e=!1}else e&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*i,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*i,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=Nt&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=Nt&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>Nt||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>Nt,s=Math.abs(this.targetZoom-this.zoom)>re,e||s}computeCameraCenterForAnchor(t,e,s,a,r){const i=this.resolveInteractionViewportRect(),o=this.resolveClientToPixelScale(i),l=(t-i.left)*o.x,d=(i.bottom-e)*o.y;return{x:s-(l-this.canvas.width*.5)/r,y:a-(d-this.canvas.height*.5)/r}}resolveInteractionViewportRect(){const t=this.interactionViewportProvider?.();return t||this.canvas.getBoundingClientRect()}resolveClientToPixelScale(t){const e=t??this.resolveInteractionViewportRect(),s=Math.max(window.devicePixelRatio||1,1e-6),a=e.width>1e-6?this.canvas.width/e.width:s,r=e.height>1e-6?this.canvas.height/e.height:s;return{x:Math.max(1e-6,a),y:Math.max(1e-6,r)}}createProgram(t,e){const s=this.gl,a=this.compileShader(s.VERTEX_SHADER,t),r=this.compileShader(s.FRAGMENT_SHADER,e),i=s.createProgram();if(!i)throw new Error("Unable to create WebGL program.");if(s.attachShader(i,a),s.attachShader(i,r),s.linkProgram(i),!s.getProgramParameter(i,s.LINK_STATUS)){const l=s.getProgramInfoLog(i)||"Unknown linker error.";throw s.deleteProgram(i),new Error(`Program link failed: ${l}`)}return s.deleteShader(a),s.deleteShader(r),i}compileShader(t,e){const s=this.gl.createShader(t);if(!s)throw new Error("Unable to create shader.");if(this.gl.shaderSource(s,e),this.gl.compileShader(s),!this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)){const r=this.gl.getShaderInfoLog(s)||"Unknown shader compiler error.";throw this.gl.deleteShader(s),new Error(`Shader compilation failed: ${r}`)}return s}createVertexArray(){const t=this.gl.createVertexArray();if(!t)throw new Error("Unable to create VAO.");return t}mustCreateBuffer(){const t=this.gl.createBuffer();if(!t)throw new Error("Unable to create WebGL buffer.");return t}mustCreateTexture(){const t=this.gl.createTexture();if(!t)throw new Error("Unable to create WebGL texture.");return t}mustGetUniformLocation(t,e){const s=this.gl.getUniformLocation(t,e);if(!s)throw new Error(`Missing uniform: ${e}`);return s}}function Tt(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function Mi(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function Ii(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function an(n){n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}function Pi(n){const t=new Uint8Array(n.length);for(let e=0;e+3<n.length;e+=4){const s=n[e+3];if(s<=0){t[e]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;continue}if(s>=255){t[e]=n[e],t[e+1]=n[e+1],t[e+2]=n[e+2],t[e+3]=255;continue}const a=s/255;t[e]=Math.round(n[e]*a),t[e+1]=Math.round(n[e+1]*a),t[e+2]=Math.round(n[e+2]*a),t[e+3]=s}return t}function qt(n,t){const e=Math.max(1,n),s=Math.ceil(Math.sqrt(e)),a=St(s,1,t),r=Math.max(1,Math.ceil(e/a));if(r>t)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:a,height:r}}function Fi(n){return n.pageRects instanceof Float32Array&&n.pageRects.length>=4?new Float32Array(n.pageRects):new Float32Array([n.pageBounds.minX,n.pageBounds.minY,n.pageBounds.maxX,n.pageBounds.maxY])}function St(n,t,e){return n<t?t:n>e?e:n}function le(n,t){return n<0?0:n>=t?t-1:n}const Bi=140,ki=.92,sn=3e5,on=1.8,ln=96,Li=1e-5,Di=.75,Oi=1.3333333333,Xi=2,Ui=2.25,Re=24,Gt=1e-4,ce=1e-5,Ni=64,cn=5,un=2e4,Gi=120,jt={r:160/255,g:169/255,b:175/255,a:1},zi=16,Mt=64,Vi=12,ue=48,Yi=4,he=16,Wi=8,de=32,Hi=`
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
`,Zi=`
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
`,qi=`
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
`,ji=`
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
`,$i=`
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
`,Qi=`
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
`;class Zn{canvas;gpuDevice;gpuContext;presentationFormat;strokePipeline;fillPipeline;textPipeline;rasterPipeline;blitPipeline;vectorCompositePipeline;cameraUniformBuffer;blitUniformBuffer;vectorCompositeUniformBuffer;panCacheSampler;rasterLayerSampler;vectorCompositeSampler;strokeBindGroupLayout;fillBindGroupLayout;textBindGroupLayout;rasterBindGroupLayout;blitBindGroupLayout;vectorCompositeBindGroupLayout;strokeBindGroupAll=null;strokeBindGroupVisible=null;fillBindGroup=null;textBindGroup=null;blitBindGroup=null;vectorCompositeBindGroup=null;segmentTextureA=null;segmentTextureB=null;segmentTextureC=null;segmentTextureD=null;fillPathMetaTextureA=null;fillPathMetaTextureB=null;fillPathMetaTextureC=null;fillSegmentTextureA=null;fillSegmentTextureB=null;textInstanceTextureA=null;textInstanceTextureB=null;textInstanceTextureC=null;rasterLayerResources=[];pageBackgroundResources=[];textGlyphMetaTextureA=null;textGlyphMetaTextureB=null;textGlyphRasterMetaTexture=null;textGlyphSegmentTextureA=null;textGlyphSegmentTextureB=null;textRasterAtlasTexture=null;pageBackgroundTexture=null;segmentIdBufferAll=null;segmentIdBufferVisible=null;panCacheTexture=null;panCacheWidth=0;panCacheHeight=0;panCacheValid=!1;panCacheCenterX=0;panCacheCenterY=0;panCacheZoom=1;panCacheRenderedSegments=0;panCacheUsedCulling=!1;vectorMinifyTexture=null;vectorMinifyWidth=0;vectorMinifyHeight=0;scene=null;sceneStats=null;grid=null;frameListener=null;interactionViewportProvider=null;presentedCameraCenterX=0;presentedCameraCenterY=0;presentedZoom=1;presentedFrameSerial=0;rafHandle=0;externalFrameDriver=!1;externalFramePending=!1;cameraCenterX=0;cameraCenterY=0;zoom=1;targetCameraCenterX=0;targetCameraCenterY=0;targetZoom=1;lastCameraAnimationTimeMs=0;hasZoomAnchor=!1;zoomAnchorClientX=0;zoomAnchorClientY=0;zoomAnchorWorldX=0;zoomAnchorWorldY=0;panVelocityWorldX=0;panVelocityWorldY=0;lastPanVelocityUpdateTimeMs=0;lastPanFrameCameraX=0;lastPanFrameCameraY=0;lastPanFrameTimeMs=0;minZoom=.01;maxZoom=8192;strokeCurveEnabled=!0;rasterRenderingEnabled=!0;fillRenderingEnabled=!0;strokeRenderingEnabled=!0;textRenderingEnabled=!0;textVectorOnly=!1;pageBackgroundColor=[1,1,1,1];vectorOverrideColor=[0,0,0];vectorOverrideOpacity=0;panOptimizationEnabled=!0;isPanInteracting=!1;hasCameraInteractionSinceSceneLoad=!1;lastInteractionTime=Number.NEGATIVE_INFINITY;needsVisibleSetUpdate=!1;segmentCount=0;fillPathCount=0;textInstanceCount=0;visibleSegmentCount=0;usingAllSegments=!0;segmentTextureWidth=1;segmentTextureHeight=1;fillPathMetaTextureWidth=1;fillPathMetaTextureHeight=1;fillSegmentTextureWidth=1;fillSegmentTextureHeight=1;textInstanceTextureWidth=1;textInstanceTextureHeight=1;textGlyphMetaTextureWidth=1;textGlyphMetaTextureHeight=1;textGlyphSegmentTextureWidth=1;textGlyphSegmentTextureHeight=1;allSegmentIds=new Uint32Array(0);visibleSegmentIds=new Uint32Array(0);segmentMarks=new Uint32Array(0);segmentMinX=new Float32Array(0);segmentMinY=new Float32Array(0);segmentMaxX=new Float32Array(0);segmentMaxY=new Float32Array(0);markToken=1;constructor(t,e,s,a){this.canvas=t,this.gpuDevice=e,this.gpuContext=s,this.presentationFormat=a,this.configureContext();const r=globalThis.GPUBufferUsage,i=globalThis.GPUShaderStage;this.cameraUniformBuffer=this.gpuDevice.createBuffer({size:Mt,usage:r.UNIFORM|r.COPY_DST}),this.blitUniformBuffer=this.gpuDevice.createBuffer({size:ue,usage:r.UNIFORM|r.COPY_DST}),this.vectorCompositeUniformBuffer=this.gpuDevice.createBuffer({size:he,usage:r.UNIFORM|r.COPY_DST}),this.strokeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.VERTEX|i.FRAGMENT,buffer:{type:"uniform",minBindingSize:Mt}},{binding:1,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:i.VERTEX,buffer:{type:"read-only-storage"}}]}),this.fillBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.VERTEX|i.FRAGMENT,buffer:{type:"uniform",minBindingSize:Mt}},{binding:1,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:i.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:i.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),this.textBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.VERTEX|i.FRAGMENT,buffer:{type:"uniform",minBindingSize:Mt}},{binding:1,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:3,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:4,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:5,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:6,visibility:i.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:7,visibility:i.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:8,visibility:i.VERTEX,texture:{sampleType:"unfilterable-float"}},{binding:9,visibility:i.FRAGMENT,sampler:{type:"filtering"}},{binding:10,visibility:i.FRAGMENT,texture:{sampleType:"float"}}]}),this.rasterBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.VERTEX,buffer:{type:"uniform",minBindingSize:Mt}},{binding:1,visibility:i.VERTEX,buffer:{type:"uniform",minBindingSize:de}},{binding:2,visibility:i.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:i.FRAGMENT,texture:{sampleType:"float"}}]}),this.blitBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:i.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:i.FRAGMENT,buffer:{type:"uniform",minBindingSize:ue}}]}),this.vectorCompositeBindGroupLayout=this.gpuDevice.createBindGroupLayout({entries:[{binding:0,visibility:i.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:i.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:i.FRAGMENT,buffer:{type:"uniform",minBindingSize:he}}]});const o=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.strokeBindGroupLayout]}),l=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.fillBindGroupLayout]}),d=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.textBindGroupLayout]}),p=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.rasterBindGroupLayout]}),m=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.blitBindGroupLayout]}),v=this.gpuDevice.createPipelineLayout({bindGroupLayouts:[this.vectorCompositeBindGroupLayout]});this.strokePipeline=this.createPipeline(Hi,"vsMain","fsMain",o),this.fillPipeline=this.createPipeline(Zi,"vsMain","fsMain",l),this.textPipeline=this.createPipeline(qi,"vsMain","fsMain",d),this.rasterPipeline=this.createPipeline(ji,"vsMain","fsMain",p,!0),this.blitPipeline=this.createPipeline($i,"vsMain","fsMain",m),this.vectorCompositePipeline=this.createPipeline(Qi,"vsMain","fsMain",v,!0),this.panCacheSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.rasterLayerSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.vectorCompositeSampler=this.gpuDevice.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"nearest",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.pageBackgroundTexture=this.createRgba8Texture(1,1,new Uint8Array([255,255,255,255])),this.ensureSegmentIdBuffers(1)}static async create(t){const e=navigator;if(!e.gpu)throw new Error("WebGPU is not available in this browser.");const s=await e.gpu.requestAdapter({powerPreference:"high-performance"})??await e.gpu.requestAdapter();if(!s)throw new Error("Failed to acquire a WebGPU adapter.");const a=await s.requestDevice();typeof a.addEventListener=="function"&&a.addEventListener("uncapturederror",o=>{const l=o?.error?.message||o?.error||o;console.warn("[WebGPU uncaptured error]",l)});const r=t.getContext("webgpu");if(!r)throw new Error("Failed to acquire a WebGPU canvas context.");const i=e.gpu.getPreferredCanvasFormat?.()??"bgra8unorm";return new Zn(t,a,r,i)}setFrameListener(t){this.frameListener=t}setExternalFrameDriver(t){const e=!!t;if(this.externalFrameDriver!==e){if(this.externalFrameDriver=e,this.externalFrameDriver){this.externalFramePending=!0,this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0);return}this.externalFramePending&&(this.externalFramePending=!1,this.requestFrame())}}renderExternalFrame(t=performance.now()){this.externalFrameDriver&&!this.externalFramePending||(this.externalFramePending=!1,this.render(t))}setPanOptimizationEnabled(t){const e=!!t;this.panOptimizationEnabled!==e&&(this.panOptimizationEnabled=e,this.isPanInteracting=!1,this.panCacheValid=!1,this.panOptimizationEnabled||this.destroyPanCacheResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeCurveEnabled(t){const e=!!t;this.strokeCurveEnabled!==e&&(this.strokeCurveEnabled=e,this.requestFrame())}setRasterRenderingEnabled(t){const e=!!t;this.rasterRenderingEnabled!==e&&(this.rasterRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setFillRenderingEnabled(t){const e=!!t;this.fillRenderingEnabled!==e&&(this.fillRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setStrokeRenderingEnabled(t){const e=!!t;this.strokeRenderingEnabled!==e&&(this.strokeRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setTextRenderingEnabled(t){const e=!!t;this.textRenderingEnabled!==e&&(this.textRenderingEnabled=e,this.panCacheValid=!1,this.needsVisibleSetUpdate=!0,this.requestFrame())}setTextVectorOnly(t){const e=!!t;this.textVectorOnly!==e&&(this.textVectorOnly=e,this.panCacheValid=!1,this.textVectorOnly&&this.destroyVectorMinifyResources(),this.requestFrame())}setPageBackgroundColor(t,e,s,a){const r=wt(t,0,1),i=wt(e,0,1),o=wt(s,0,1),l=wt(a,0,1),d=this.pageBackgroundColor;Math.abs(d[0]-r)<=1e-6&&Math.abs(d[1]-i)<=1e-6&&Math.abs(d[2]-o)<=1e-6&&Math.abs(d[3]-l)<=1e-6||(this.pageBackgroundColor=[r,i,o,l],this.uploadPageBackgroundTexture(),this.panCacheValid=!1,this.requestFrame())}setVectorColorOverride(t,e,s,a){const r=wt(t,0,1),i=wt(e,0,1),o=wt(s,0,1),l=wt(a,0,1),d=this.vectorOverrideColor;Math.abs(d[0]-r)<=1e-6&&Math.abs(d[1]-i)<=1e-6&&Math.abs(d[2]-o)<=1e-6&&Math.abs(this.vectorOverrideOpacity-l)<=1e-6||(this.vectorOverrideColor=[r,i,o],this.vectorOverrideOpacity=l,this.panCacheValid=!1,this.requestFrame())}setInteractionViewportProvider(t){this.interactionViewportProvider=t}beginPanInteraction(){this.hasCameraInteractionSinceSceneLoad=!0,this.syncCameraTargetsToCurrent(),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=0,this.isPanInteracting=!0,this.markInteraction()}endPanInteraction(){this.isPanInteracting=!1;const t=performance.now(),s=this.lastPanVelocityUpdateTimeMs>0&&t-this.lastPanVelocityUpdateTimeMs<=Gi?Math.hypot(this.panVelocityWorldX,this.panVelocityWorldY):0;Number.isFinite(s)&&s>=cn?(this.targetCameraCenterX=this.cameraCenterX+this.panVelocityWorldX/Re,this.targetCameraCenterY=this.cameraCenterY+this.panVelocityWorldY/Re,this.lastCameraAnimationTimeMs=0):(this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY),this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.markInteraction(),this.needsVisibleSetUpdate=!0,this.requestFrame()}resize(){const t=window.devicePixelRatio||1,e=Math.max(1,Math.round(this.canvas.clientWidth*t)),s=Math.max(1,Math.round(this.canvas.clientHeight*t));this.canvas.width===e&&this.canvas.height===s||(this.canvas.width=e,this.canvas.height=s,this.configureContext(),this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.needsVisibleSetUpdate=!0,this.requestFrame())}setScene(t){this.scene=t,this.segmentCount=t.segmentCount,this.fillPathCount=t.fillPathCount,this.textInstanceCount=t.textInstanceCount,this.buildSegmentBounds(t),this.isPanInteracting=!1,this.panCacheValid=!1,this.destroyVectorMinifyResources(),this.grid=this.segmentCount>0?On(t):null;const e=this.maxTextureSize(),s=zt(t.segmentCount,e),a=zt(t.fillPathCount,e),r=zt(t.fillSegmentCount,e),i=zt(t.textInstanceCount,e),o=zt(t.textGlyphCount,e),l=zt(t.textGlyphSegmentCount,e);this.segmentTextureWidth=s.width,this.segmentTextureHeight=s.height,this.fillPathMetaTextureWidth=a.width,this.fillPathMetaTextureHeight=a.height,this.fillSegmentTextureWidth=r.width,this.fillSegmentTextureHeight=r.height,this.textInstanceTextureWidth=i.width,this.textInstanceTextureHeight=i.height,this.textGlyphMetaTextureWidth=o.width,this.textGlyphMetaTextureHeight=o.height,this.textGlyphSegmentTextureWidth=l.width,this.textGlyphSegmentTextureHeight=l.height,this.destroyDataResources(),this.segmentTextureA=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.endpoints),this.segmentTextureB=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.primitiveMeta),this.segmentTextureC=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.styles),this.segmentTextureD=this.createFloatTexture(this.segmentTextureWidth,this.segmentTextureHeight,t.primitiveBounds),this.fillPathMetaTextureA=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaA),this.fillPathMetaTextureB=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaB),this.fillPathMetaTextureC=this.createFloatTexture(this.fillPathMetaTextureWidth,this.fillPathMetaTextureHeight,t.fillPathMetaC),this.fillSegmentTextureA=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,t.fillSegmentsA),this.fillSegmentTextureB=this.createFloatTexture(this.fillSegmentTextureWidth,this.fillSegmentTextureHeight,t.fillSegmentsB),this.textInstanceTextureA=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceA),this.textInstanceTextureB=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceB),this.textInstanceTextureC=this.createFloatTexture(this.textInstanceTextureWidth,this.textInstanceTextureHeight,t.textInstanceC),this.textGlyphMetaTextureA=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,t.textGlyphMetaA),this.textGlyphMetaTextureB=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,t.textGlyphMetaB),this.textGlyphSegmentTextureA=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,t.textGlyphSegmentsA),this.textGlyphSegmentTextureB=this.createFloatTexture(this.textGlyphSegmentTextureWidth,this.textGlyphSegmentTextureHeight,t.textGlyphSegmentsB);const d=new Float32Array(this.textGlyphMetaTextureWidth*this.textGlyphMetaTextureHeight*4),p=Xn(t,e);p&&d.set(p.glyphUvRects),this.textGlyphRasterMetaTexture=this.createFloatTexture(this.textGlyphMetaTextureWidth,this.textGlyphMetaTextureHeight,d),this.textRasterAtlasTexture=p?this.createRgba8Texture(p.width,p.height,p.rgba):this.createRgba8Texture(1,1,new Uint8Array([0,0,0,0])),this.configurePageBackgroundResources(t),this.configureRasterLayers(t),this.allSegmentIds=new Uint32Array(this.segmentCount);for(let m=0;m<this.segmentCount;m+=1)this.allSegmentIds[m]=m;return this.ensureSegmentIdBuffers(Math.max(1,this.segmentCount)),this.segmentCount>0&&(this.gpuDevice.queue.writeBuffer(this.segmentIdBufferAll,0,this.allSegmentIds),this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,this.allSegmentIds)),this.fillBindGroup=this.gpuDevice.createBindGroup({layout:this.fillPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Mt}},{binding:1,resource:this.fillPathMetaTextureA.createView()},{binding:2,resource:this.fillPathMetaTextureB.createView()},{binding:3,resource:this.fillPathMetaTextureC.createView()},{binding:4,resource:this.fillSegmentTextureA.createView()},{binding:5,resource:this.fillSegmentTextureB.createView()}]}),this.textBindGroup=this.gpuDevice.createBindGroup({layout:this.textPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Mt}},{binding:1,resource:this.textInstanceTextureA.createView()},{binding:2,resource:this.textInstanceTextureB.createView()},{binding:3,resource:this.textInstanceTextureC.createView()},{binding:4,resource:this.textGlyphMetaTextureA.createView()},{binding:5,resource:this.textGlyphMetaTextureB.createView()},{binding:6,resource:this.textGlyphSegmentTextureA.createView()},{binding:7,resource:this.textGlyphSegmentTextureB.createView()},{binding:8,resource:this.textGlyphRasterMetaTexture.createView()},{binding:9,resource:this.rasterLayerSampler},{binding:10,resource:this.textRasterAtlasTexture.createView()}]}),this.strokeBindGroupAll=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Mt}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferAll}}]}),this.strokeBindGroupVisible=this.gpuDevice.createBindGroup({layout:this.strokePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Mt}},{binding:1,resource:this.segmentTextureA.createView()},{binding:2,resource:this.segmentTextureB.createView()},{binding:3,resource:this.segmentTextureC.createView()},{binding:4,resource:this.segmentTextureD.createView()},{binding:5,resource:{buffer:this.segmentIdBufferVisible}}]}),this.visibleSegmentIds.length<this.segmentCount&&(this.visibleSegmentIds=new Uint32Array(this.segmentCount)),this.segmentMarks.length<this.segmentCount&&(this.segmentMarks=new Uint32Array(this.segmentCount),this.markToken=1),this.visibleSegmentCount=this.segmentCount,this.usingAllSegments=!0,this.sceneStats={gridWidth:this.grid?.gridWidth??0,gridHeight:this.grid?.gridHeight??0,gridIndexCount:this.grid?.indices.length??0,maxCellPopulation:this.grid?.maxCellPopulation??0,fillPathTextureWidth:this.fillPathMetaTextureWidth,fillPathTextureHeight:this.fillPathMetaTextureHeight,fillSegmentTextureWidth:this.fillSegmentTextureWidth,fillSegmentTextureHeight:this.fillSegmentTextureHeight,textureWidth:this.segmentTextureWidth,textureHeight:this.segmentTextureHeight,maxTextureSize:e,textInstanceTextureWidth:this.textInstanceTextureWidth,textInstanceTextureHeight:this.textInstanceTextureHeight,textGlyphTextureWidth:this.textGlyphMetaTextureWidth,textGlyphTextureHeight:this.textGlyphMetaTextureHeight,textSegmentTextureWidth:this.textGlyphSegmentTextureWidth,textSegmentTextureHeight:this.textGlyphSegmentTextureHeight},this.minZoom=.01,this.maxZoom=8192,this.hasCameraInteractionSinceSceneLoad=!1,this.syncCameraTargetsToCurrent(),this.needsVisibleSetUpdate=!0,this.requestFrame(),this.sceneStats}getSceneStats(){return this.sceneStats}getViewState(){return{cameraCenterX:this.cameraCenterX,cameraCenterY:this.cameraCenterY,zoom:this.zoom}}getPresentedViewState(){return{cameraCenterX:this.presentedCameraCenterX,cameraCenterY:this.presentedCameraCenterY,zoom:this.presentedZoom}}getPresentedFrameSerial(){return this.presentedFrameSerial}setViewState(t){const e=Number(t.cameraCenterX),s=Number(t.cameraCenterY),a=Number(t.zoom);if(!Number.isFinite(e)||!Number.isFinite(s)||!Number.isFinite(a))return;this.cameraCenterX=e,this.cameraCenterY=s;const r=wt(a,this.minZoom,this.maxZoom);this.zoom=r,this.targetCameraCenterX=e,this.targetCameraCenterY=s,this.targetZoom=r,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.needsVisibleSetUpdate=!0,this.requestFrame()}fitToBounds(t,e=64){const s=Math.max(t.maxX-t.minX,1e-4),a=Math.max(t.maxY-t.minY,1e-4),r=Math.max(1,this.canvas.width-e*2),i=Math.max(1,this.canvas.height-e*2),o=Math.min(r/s,i/a),l=wt(o,1e-8,this.maxZoom);this.minZoom=Math.min(this.minZoom,l);const d=(t.minX+t.maxX)*.5,p=(t.minY+t.maxY)*.5;this.zoom=l,this.cameraCenterX=d,this.cameraCenterY=p,this.targetZoom=l,this.targetCameraCenterX=d,this.targetCameraCenterY=p,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1,this.isPanInteracting=!1,this.panCacheValid=!1,this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.needsVisibleSetUpdate=!0,this.requestFrame()}panByPixels(t,e){if(!Number.isFinite(t)||!Number.isFinite(e))return;this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction(),this.hasZoomAnchor=!1;const s=this.resolveClientToPixelScale(),a=-(t*s.x)/this.zoom,r=e*s.y/this.zoom;this.cameraCenterX+=a,this.cameraCenterY+=r,this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.needsVisibleSetUpdate=!0,this.requestFrame()}zoomAtClientPoint(t,e,s){const a=wt(s,.1,10);this.hasCameraInteractionSinceSceneLoad=!0,this.markInteraction();const r=this.clientToWorld(t,e),i=wt(this.targetZoom*a,this.minZoom,this.maxZoom);this.hasZoomAnchor=!0,this.zoomAnchorClientX=t,this.zoomAnchorClientY=e,this.zoomAnchorWorldX=r.x,this.zoomAnchorWorldY=r.y,this.targetZoom=i;const o=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,i);this.targetCameraCenterX=o.x,this.targetCameraCenterY=o.y,this.needsVisibleSetUpdate=!0,this.panVelocityWorldX=0,this.panVelocityWorldY=0,this.lastPanVelocityUpdateTimeMs=0,this.lastPanFrameTimeMs=0,this.requestFrame()}dispose(){this.rafHandle!==0&&(cancelAnimationFrame(this.rafHandle),this.rafHandle=0),this.frameListener=null,this.destroyPanCacheResources(),this.destroyVectorMinifyResources(),this.destroyDataResources(),this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.cameraUniformBuffer&&this.cameraUniformBuffer.destroy(),this.blitUniformBuffer&&this.blitUniformBuffer.destroy(),this.vectorCompositeUniformBuffer&&this.vectorCompositeUniformBuffer.destroy(),this.pageBackgroundTexture&&(this.pageBackgroundTexture.destroy(),this.pageBackgroundTexture=null)}configureContext(){this.gpuContext.configure({device:this.gpuDevice,format:this.presentationFormat,alphaMode:"opaque"})}createPipeline(t,e,s,a,r=!1){const i=this.gpuDevice.createShaderModule({code:t}),o=r?"one":"src-alpha";return this.gpuDevice.createRenderPipeline({layout:a,vertex:{module:i,entryPoint:e},fragment:{module:i,entryPoint:s,targets:[{format:this.presentationFormat,blend:{color:{srcFactor:o,dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},primitive:{topology:"triangle-strip"}})}maxTextureSize(){const t=Number(this.gpuDevice?.limits?.maxTextureDimension2D);return Number.isFinite(t)&&t>=1?Math.floor(t):8192}ensureSegmentIdBuffers(t){const e=globalThis.GPUBufferUsage,s=Math.max(1,t)*4;this.segmentIdBufferAll&&(this.segmentIdBufferAll.destroy(),this.segmentIdBufferAll=null),this.segmentIdBufferVisible&&(this.segmentIdBufferVisible.destroy(),this.segmentIdBufferVisible=null),this.segmentIdBufferAll=this.gpuDevice.createBuffer({size:s,usage:e.STORAGE|e.COPY_DST}),this.segmentIdBufferVisible=this.gpuDevice.createBuffer({size:s,usage:e.STORAGE|e.COPY_DST})}requestFrame(){if(this.externalFrameDriver){this.externalFramePending=!0;return}this.rafHandle===0&&(this.rafHandle=requestAnimationFrame(t=>{this.rafHandle=0,this.render(t)}))}render(t=performance.now()){const e=this.updateCameraWithDamping(t);if(this.updatePanReleaseVelocitySample(t),!this.scene||this.segmentCount===0&&this.fillPathCount===0&&this.textInstanceCount===0&&this.rasterLayerResources.length===0&&this.pageBackgroundResources.length===0){this.clearToScreen(),this.capturePresentedFrameState(),this.frameListener?.({renderedSegments:0,totalSegments:0,usedCulling:!1,zoom:this.zoom}),e&&this.requestFrame();return}if(!this.hasNativeRenderingEnabled()){this.capturePresentedFrameState(),this.frameListener?.({renderedSegments:0,totalSegments:this.segmentCount,usedCulling:!1,zoom:this.zoom}),e&&this.requestFrame();return}this.shouldUsePanCache(e)?this.renderWithPanCache():this.renderDirectToScreen(),this.capturePresentedFrameState(),e&&this.requestFrame()}hasNativeRenderingEnabled(){return this.rasterRenderingEnabled||this.fillRenderingEnabled||this.strokeRenderingEnabled||this.textRenderingEnabled}capturePresentedFrameState(){this.presentedCameraCenterX=this.cameraCenterX,this.presentedCameraCenterY=this.cameraCenterY,this.presentedZoom=this.zoom,this.presentedFrameSerial+=1}shouldUsePanCache(t){return!this.panOptimizationEnabled||this.segmentCount<sn?!1:this.isPanInteracting?!0:t}renderDirectToScreen(){let t=this.shouldUseVectorMinifyPath()&&this.ensureVectorMinifyResources();if(this.panOptimizationEnabled&&this.segmentCount>=sn&&(t=!1),this.needsVisibleSetUpdate){if(t){const i=this.computeVectorMinifyZoom(this.vectorMinifyWidth,this.vectorMinifyHeight);this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.vectorMinifyWidth,this.vectorMinifyHeight,i)}else this.updateVisibleSet(this.cameraCenterX,this.cameraCenterY,this.canvas.width,this.canvas.height,this.zoom);this.needsVisibleSetUpdate=!1}if(t){const i=this.renderVectorLayerIntoMinifyTarget(this.vectorMinifyWidth,this.vectorMinifyHeight,this.cameraCenterX,this.cameraCenterY),o=this.gpuContext.getCurrentTexture().createView(),l=this.gpuDevice.createCommandEncoder(),d=l.beginRenderPass({colorAttachments:[{view:o,clearValue:jt,loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY),this.drawRasterContentIntoPass(d),this.drawVectorMinifyCompositeIntoPass(d,this.canvas.width,this.canvas.height),d.end(),this.gpuDevice.queue.submit([l.finish()]),this.frameListener?.({renderedSegments:i,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom});return}const e=this.gpuContext.getCurrentTexture().createView(),s=this.gpuDevice.createCommandEncoder(),a=s.beginRenderPass({colorAttachments:[{view:e,clearValue:jt,loadOp:"clear",storeOp:"store"}]}),r=this.drawSceneIntoPass(a,this.canvas.width,this.canvas.height,this.cameraCenterX,this.cameraCenterY);a.end(),this.gpuDevice.queue.submit([s.finish()]),this.frameListener?.({renderedSegments:r,totalSegments:this.segmentCount,usedCulling:!this.usingAllSegments,zoom:this.zoom})}hasVectorContent(){return this.fillRenderingEnabled&&this.fillPathCount>0||this.strokeRenderingEnabled&&this.segmentCount>0||this.textRenderingEnabled&&this.textInstanceCount>0}shouldUseVectorMinifyPath(){return this.textVectorOnly||!this.hasVectorContent()?!1:this.zoom<=Ui}computeVectorMinifyZoom(t,e){const s=Math.min(t/Math.max(1,this.canvas.width),e/Math.max(1,this.canvas.height));return this.zoom*Math.max(1,s)}renderVectorLayerIntoMinifyTarget(t,e,s,a){if(!this.vectorMinifyTexture)return 0;const r=this.computeVectorMinifyZoom(t,e),i=this.gpuDevice.createCommandEncoder(),o=i.beginRenderPass({colorAttachments:[{view:this.vectorMinifyTexture.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"}]});this.updateCameraUniforms(t,e,s,a,r);const l=this.drawVectorContentIntoPass(o);return o.end(),this.gpuDevice.queue.submit([i.finish()]),l}drawVectorMinifyCompositeIntoPass(t,e,s){!this.vectorCompositeBindGroup||!this.vectorMinifyTexture||(this.updateVectorCompositeUniforms(e,s),t.setPipeline(this.vectorCompositePipeline),t.setBindGroup(0,this.vectorCompositeBindGroup),t.draw(4,1,0,0))}renderWithPanCache(){if(!this.ensurePanCacheResources()){this.renderDirectToScreen();return}let t=this.panCacheZoom/Math.max(this.zoom,1e-6),e=(this.cameraCenterX-this.panCacheCenterX)*this.panCacheZoom,s=(this.cameraCenterY-this.panCacheCenterY)*this.panCacheZoom;const a=this.panCacheWidth*.5-2,r=this.panCacheHeight*.5-2,i=this.canvas.width*.5*Math.abs(t),o=this.canvas.height*.5*Math.abs(t),l=a-i,d=r-o,p=this.zoom/Math.max(this.panCacheZoom,1e-6),m=p<Di||p>Oi,f=Math.abs(this.targetZoom-this.zoom)<=ce&&Math.abs(this.panCacheZoom-this.zoom)>Li,y=l<0||d<0||Math.abs(e)>l||Math.abs(s)>d;if(!this.panCacheValid||m||y||f){this.panCacheCenterX=this.cameraCenterX,this.panCacheCenterY=this.cameraCenterY,this.panCacheZoom=this.zoom,this.updateVisibleSet(this.panCacheCenterX,this.panCacheCenterY,this.panCacheWidth,this.panCacheHeight),this.needsVisibleSetUpdate=!1;const g=this.gpuDevice.createCommandEncoder(),x=g.beginRenderPass({colorAttachments:[{view:this.panCacheTexture.createView(),clearValue:jt,loadOp:"clear",storeOp:"store"}]});this.panCacheRenderedSegments=this.drawSceneIntoPass(x,this.panCacheWidth,this.panCacheHeight,this.panCacheCenterX,this.panCacheCenterY),x.end(),this.gpuDevice.queue.submit([g.finish()]),this.panCacheUsedCulling=!this.usingAllSegments,this.panCacheValid=!0,t=1,e=0,s=0}this.blitPanCache(e,s,t),this.frameListener?.({renderedSegments:this.panCacheRenderedSegments,totalSegments:this.segmentCount,usedCulling:this.panCacheUsedCulling,zoom:this.zoom})}drawSceneIntoPass(t,e,s,a,r){return this.updateCameraUniforms(e,s,a,r),this.drawRasterContentIntoPass(t),this.drawVectorContentIntoPass(t)}drawRasterContentIntoPass(t){if(this.rasterRenderingEnabled){if(this.pageBackgroundResources.length>0){t.setPipeline(this.rasterPipeline);for(const e of this.pageBackgroundResources)t.setBindGroup(0,e.bindGroup),t.draw(4,1,0,0)}if(this.rasterLayerResources.length>0){t.setPipeline(this.rasterPipeline);for(const e of this.rasterLayerResources)t.setBindGroup(0,e.bindGroup),t.draw(4,1,0,0)}}}drawVectorContentIntoPass(t){this.fillRenderingEnabled&&this.fillPathCount>0&&this.fillBindGroup&&(t.setPipeline(this.fillPipeline),t.setBindGroup(0,this.fillBindGroup),t.draw(4,this.fillPathCount,0,0));let e=this.strokeRenderingEnabled?this.usingAllSegments?this.segmentCount:this.visibleSegmentCount:0;if(e>0){const s=this.usingAllSegments?this.strokeBindGroupAll:this.strokeBindGroupVisible;s&&(t.setPipeline(this.strokePipeline),t.setBindGroup(0,s),t.draw(4,e,0,0))}return this.textRenderingEnabled&&this.textInstanceCount>0&&this.textBindGroup&&(t.setPipeline(this.textPipeline),t.setBindGroup(0,this.textBindGroup),t.draw(4,this.textInstanceCount,0,0)),e}updateCameraUniforms(t,e,s,a,r=this.zoom){const i=new Float32Array(zi);i[0]=t,i[1]=e,i[2]=s,i[3]=a,i[4]=r,i[5]=1,i[6]=this.strokeCurveEnabled?1:0,i[7]=1.25,i[8]=this.strokeCurveEnabled?1:0,i[9]=1,i[10]=this.textVectorOnly?1:0,i[11]=0,i[12]=this.vectorOverrideColor[0],i[13]=this.vectorOverrideColor[1],i[14]=this.vectorOverrideColor[2],i[15]=this.vectorOverrideOpacity,fe(i,Mt,"camera"),this.gpuDevice.queue.writeBuffer(this.cameraUniformBuffer,0,i)}updateVectorCompositeUniforms(t,e){const s=new Float32Array(Yi);s[0]=t,s[1]=e,s[2]=0,s[3]=0,fe(s,he,"vector composite"),this.gpuDevice.queue.writeBuffer(this.vectorCompositeUniformBuffer,0,s)}updateBlitUniforms(t,e,s){const a=new Float32Array(Vi);a[0]=this.canvas.width,a[1]=this.canvas.height,a[2]=this.panCacheWidth,a[3]=this.panCacheHeight,a[4]=t,a[5]=e,a[6]=s,a[7]=0,a[8]=0,a[9]=0,a[10]=0,a[11]=0,fe(a,ue,"blit"),this.gpuDevice.queue.writeBuffer(this.blitUniformBuffer,0,a)}blitPanCache(t,e,s){if(!this.panCacheTexture||!this.blitBindGroup){this.renderDirectToScreen();return}this.updateBlitUniforms(t,e,s);const a=this.gpuContext.getCurrentTexture().createView(),r=this.gpuDevice.createCommandEncoder(),i=r.beginRenderPass({colorAttachments:[{view:a,clearValue:jt,loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.blitPipeline),i.setBindGroup(0,this.blitBindGroup),i.draw(4,1,0,0),i.end(),this.gpuDevice.queue.submit([r.finish()])}ensureVectorMinifyResources(){const t=this.maxTextureSize(),e=t/Math.max(1,this.canvas.width),s=t/Math.max(1,this.canvas.height),a=Math.max(1,Math.min(Xi,e,s)),r=Math.max(this.canvas.width,Math.floor(this.canvas.width*a)),i=Math.max(this.canvas.height,Math.floor(this.canvas.height*a));if(r<this.canvas.width||i<this.canvas.height)return!1;if(this.vectorMinifyTexture&&this.vectorMinifyWidth===r&&this.vectorMinifyHeight===i&&this.vectorCompositeBindGroup)return!0;this.destroyVectorMinifyResources();const o=globalThis.GPUTextureUsage;return this.vectorMinifyTexture=this.gpuDevice.createTexture({size:{width:r,height:i,depthOrArrayLayers:1},format:this.presentationFormat,usage:o.RENDER_ATTACHMENT|o.TEXTURE_BINDING}),this.vectorMinifyWidth=r,this.vectorMinifyHeight=i,this.vectorCompositeBindGroup=this.gpuDevice.createBindGroup({layout:this.vectorCompositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.vectorCompositeSampler},{binding:1,resource:this.vectorMinifyTexture.createView()},{binding:2,resource:{buffer:this.vectorCompositeUniformBuffer,size:he}}]}),!0}ensurePanCacheResources(){const t=this.maxTextureSize(),e=Math.min(t,Math.max(this.canvas.width+ln*2,Math.ceil(this.canvas.width*on))),s=Math.min(t,Math.max(this.canvas.height+ln*2,Math.ceil(this.canvas.height*on)));if(e<this.canvas.width||s<this.canvas.height)return!1;if(this.panCacheTexture&&this.panCacheWidth===e&&this.panCacheHeight===s&&this.blitBindGroup)return!0;this.destroyPanCacheResources();const a=globalThis.GPUTextureUsage;return this.panCacheTexture=this.gpuDevice.createTexture({size:{width:e,height:s,depthOrArrayLayers:1},format:this.presentationFormat,usage:a.RENDER_ATTACHMENT|a.TEXTURE_BINDING}),this.panCacheWidth=e,this.panCacheHeight=s,this.panCacheValid=!1,this.blitBindGroup=this.gpuDevice.createBindGroup({layout:this.blitPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.panCacheSampler},{binding:1,resource:this.panCacheTexture.createView()},{binding:2,resource:{buffer:this.blitUniformBuffer,size:ue}}]}),!0}destroyPanCacheResources(){this.panCacheTexture&&(this.panCacheTexture.destroy(),this.panCacheTexture=null),this.panCacheWidth=0,this.panCacheHeight=0,this.panCacheValid=!1,this.panCacheRenderedSegments=0,this.panCacheUsedCulling=!1,this.blitBindGroup=null}destroyVectorMinifyResources(){this.vectorMinifyTexture&&(this.vectorMinifyTexture.destroy(),this.vectorMinifyTexture=null),this.vectorMinifyWidth=0,this.vectorMinifyHeight=0,this.vectorCompositeBindGroup=null}updateVisibleSet(t=this.cameraCenterX,e=this.cameraCenterY,s=this.canvas.width,a=this.canvas.height,r=this.zoom){if(!this.scene||!this.grid){this.visibleSegmentCount=0,this.usingAllSegments=!0;return}if(!this.hasCameraInteractionSinceSceneLoad){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}const i=this.grid,o=Math.max(r,1e-6),l=s/(2*o),d=a/(2*o),p=Math.max(16/o,this.scene.maxHalfWidth*2),m=t-l-p,v=t+l+p,f=e-d-p,y=e+d+p,h=me(Math.floor((m-i.minX)/i.cellWidth),i.gridWidth),g=me(Math.floor((v-i.minX)/i.cellWidth),i.gridWidth),x=me(Math.floor((f-i.minY)/i.cellHeight),i.gridHeight),b=me(Math.floor((y-i.minY)/i.cellHeight),i.gridHeight),w=(g-h+1)*(b-x+1),E=i.gridWidth*i.gridHeight;if(!this.isInteractionActive()&&w>=E*ki){this.usingAllSegments=!0,this.visibleSegmentCount=this.segmentCount;return}this.usingAllSegments=!1,this.markToken+=1,this.markToken===4294967295&&(this.segmentMarks.fill(0),this.markToken=1);let A=0;for(let S=x;S<=b;S+=1){let L=S*i.gridWidth+h;for(let U=h;U<=g;U+=1){const F=i.offsets[L],P=i.counts[L];for(let M=0;M<P;M+=1){const T=i.indices[F+M];this.segmentMarks[T]!==this.markToken&&(this.segmentMarks[T]=this.markToken,!(this.segmentMaxX[T]<m||this.segmentMinX[T]>v||this.segmentMaxY[T]<f||this.segmentMinY[T]>y)&&(this.visibleSegmentIds[A]=T,A+=1))}L+=1}}if(this.visibleSegmentCount=A,this.segmentIdBufferVisible&&A>0){const S=this.visibleSegmentIds.subarray(0,A);this.gpuDevice.queue.writeBuffer(this.segmentIdBufferVisible,0,S)}}buildSegmentBounds(t){this.segmentMinX.length<this.segmentCount&&(this.segmentMinX=new Float32Array(this.segmentCount),this.segmentMinY=new Float32Array(this.segmentCount),this.segmentMaxX=new Float32Array(this.segmentCount),this.segmentMaxY=new Float32Array(this.segmentCount));for(let e=0;e<this.segmentCount;e+=1){const s=e*4,a=e*4,r=t.styles[a]+.35;this.segmentMinX[e]=t.primitiveBounds[s]-r,this.segmentMinY[e]=t.primitiveBounds[s+1]-r,this.segmentMaxX[e]=t.primitiveBounds[s+2]+r,this.segmentMaxY[e]=t.primitiveBounds[s+3]+r}}markInteraction(){this.lastInteractionTime=performance.now()}isInteractionActive(){return performance.now()-this.lastInteractionTime<=Bi}configureRasterLayers(t){this.destroyRasterLayerResources();for(const e of this.getSceneRasterLayers(t)){const s=new Float32Array(6);e.matrix.length>=6?(s[0]=e.matrix[0],s[1]=e.matrix[1],s[2]=e.matrix[2],s[3]=e.matrix[3],s[4]=e.matrix[4],s[5]=e.matrix[5]):(s[0]=1,s[3]=1);const a=e.data.subarray(0,e.width*e.height*4),r=tr(a),i=this.createRgba8Texture(e.width,e.height,r);this.rasterLayerResources.push(this.createRasterLayerResource(s,i))}}configurePageBackgroundResources(t){if(this.destroyPageBackgroundResources(),this.pageBackgroundTexture||this.uploadPageBackgroundTexture(),!this.pageBackgroundTexture)return;const e=nr(t);for(let s=0;s+3<e.length;s+=4){const a=e[s],r=e[s+1],i=e[s+2],o=e[s+3];if(![a,r,i,o].every(Number.isFinite))continue;const l=Math.max(i-a,1e-6),d=Math.max(o-r,1e-6),p=new Float32Array([l,0,0,d,a,r]);this.pageBackgroundResources.push(this.createRasterLayerResource(p,this.pageBackgroundTexture))}}getSceneRasterLayers(t){const e=[];if(Array.isArray(t.rasterLayers))for(const r of t.rasterLayers){const i=Math.max(0,Math.trunc(r?.width??0)),o=Math.max(0,Math.trunc(r?.height??0));i<=0||o<=0||!(r.data instanceof Uint8Array)||r.data.length<i*o*4||e.push({width:i,height:o,data:r.data,matrix:r.matrix instanceof Float32Array?r.matrix:new Float32Array(r.matrix)})}if(e.length>0)return e;const s=Math.max(0,Math.trunc(t.rasterLayerWidth)),a=Math.max(0,Math.trunc(t.rasterLayerHeight));return s<=0||a<=0||t.rasterLayerData.length<s*a*4||e.push({width:s,height:a,data:t.rasterLayerData,matrix:t.rasterLayerMatrix}),e}destroyRasterLayerResources(){for(const t of this.rasterLayerResources)t.texture&&t.texture.destroy(),t.uniformBuffer&&t.uniformBuffer.destroy();this.rasterLayerResources=[]}destroyPageBackgroundResources(){for(const t of this.pageBackgroundResources)t.uniformBuffer&&t.uniformBuffer.destroy();this.pageBackgroundResources=[]}uploadPageBackgroundTexture(){const t=Math.round(this.pageBackgroundColor[3]*255),e=t/255,s=new Uint8Array([Math.round(this.pageBackgroundColor[0]*e*255),Math.round(this.pageBackgroundColor[1]*e*255),Math.round(this.pageBackgroundColor[2]*e*255),t]);if(!this.pageBackgroundTexture){this.pageBackgroundTexture=this.createRgba8Texture(1,1,s);return}this.writeRgba8Texture(this.pageBackgroundTexture,1,1,s,0)}createRasterLayerResource(t,e){const s=globalThis.GPUBufferUsage,a=new Float32Array(Wi);a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=0,a[7]=0,fe(a,de,"raster");const r=this.gpuDevice.createBuffer({size:de,usage:s.UNIFORM|s.COPY_DST});this.gpuDevice.queue.writeBuffer(r,0,a);const i=this.gpuDevice.createBindGroup({layout:this.rasterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer,size:Mt}},{binding:1,resource:{buffer:r,size:de}},{binding:2,resource:this.rasterLayerSampler},{binding:3,resource:e.createView()}]});return{texture:e,uniformBuffer:r,bindGroup:i}}createFloatTexture(t,e,s){const a=globalThis.GPUTextureUsage,r=this.gpuDevice.createTexture({size:{width:t,height:e,depthOrArrayLayers:1},format:"rgba32float",usage:a.TEXTURE_BINDING|a.COPY_DST}),i=Ki(s,t,e);return this.writeFloatTexture(r,t,e,i),r}createRgba8Texture(t,e,s){const a=globalThis.GPUTextureUsage,r=er(s,t,e),i=this.gpuDevice.createTexture({size:{width:t,height:e,depthOrArrayLayers:1},format:"rgba8unorm",mipLevelCount:r.length,usage:a.TEXTURE_BINDING|a.COPY_DST});for(let o=0;o<r.length;o+=1){const l=r[o],d=Ji(l.data,l.width,l.height);this.writeRgba8Texture(i,l.width,l.height,d,o)}return i}writeFloatTexture(t,e,s,a){const r=e*16,i=hn(r,256);if(s<=1&&r===i){this.gpuDevice.queue.writeTexture({texture:t},a,{offset:0},{width:e,height:s,depthOrArrayLayers:1});return}if(r===i){this.gpuDevice.queue.writeTexture({texture:t},a,{offset:0,bytesPerRow:r,rowsPerImage:s},{width:e,height:s,depthOrArrayLayers:1});return}const o=new Uint8Array(a.buffer,a.byteOffset,a.byteLength),l=new Uint8Array(i*s);for(let d=0;d<s;d+=1){const p=d*r,m=d*i;l.set(o.subarray(p,p+r),m)}this.gpuDevice.queue.writeTexture({texture:t},l,{offset:0,bytesPerRow:i,rowsPerImage:s},{width:e,height:s,depthOrArrayLayers:1})}writeRgba8Texture(t,e,s,a,r=0){const i=e*4,o=hn(i,256);if(s<=1&&i===o){this.gpuDevice.queue.writeTexture({texture:t,mipLevel:r},a,{offset:0},{width:e,height:s,depthOrArrayLayers:1});return}if(i===o){this.gpuDevice.queue.writeTexture({texture:t,mipLevel:r},a,{offset:0,bytesPerRow:i,rowsPerImage:s},{width:e,height:s,depthOrArrayLayers:1});return}const l=new Uint8Array(o*s);for(let d=0;d<s;d+=1){const p=d*i,m=d*o;l.set(a.subarray(p,p+i),m)}this.gpuDevice.queue.writeTexture({texture:t,mipLevel:r},l,{offset:0,bytesPerRow:o,rowsPerImage:s},{width:e,height:s,depthOrArrayLayers:1})}clearToScreen(){const t=this.gpuContext.getCurrentTexture().createView(),e=this.gpuDevice.createCommandEncoder();e.beginRenderPass({colorAttachments:[{view:t,clearValue:jt,loadOp:"clear",storeOp:"store"}]}).end(),this.gpuDevice.queue.submit([e.finish()])}destroyDataResources(){this.strokeBindGroupAll=null,this.strokeBindGroupVisible=null,this.fillBindGroup=null,this.textBindGroup=null,this.destroyPageBackgroundResources(),this.destroyRasterLayerResources();const t=[this.segmentTextureA,this.segmentTextureB,this.segmentTextureC,this.segmentTextureD,this.fillPathMetaTextureA,this.fillPathMetaTextureB,this.fillPathMetaTextureC,this.fillSegmentTextureA,this.fillSegmentTextureB,this.textInstanceTextureA,this.textInstanceTextureB,this.textInstanceTextureC,this.textGlyphMetaTextureA,this.textGlyphMetaTextureB,this.textGlyphRasterMetaTexture,this.textGlyphSegmentTextureA,this.textGlyphSegmentTextureB,this.textRasterAtlasTexture];for(const e of t)e&&e.destroy();this.segmentTextureA=null,this.segmentTextureB=null,this.segmentTextureC=null,this.segmentTextureD=null,this.fillPathMetaTextureA=null,this.fillPathMetaTextureB=null,this.fillPathMetaTextureC=null,this.fillSegmentTextureA=null,this.fillSegmentTextureB=null,this.textInstanceTextureA=null,this.textInstanceTextureB=null,this.textInstanceTextureC=null,this.textGlyphMetaTextureA=null,this.textGlyphMetaTextureB=null,this.textGlyphRasterMetaTexture=null,this.textGlyphSegmentTextureA=null,this.textGlyphSegmentTextureB=null,this.textRasterAtlasTexture=null}clientToWorld(t,e){return this.clientToWorldAt(t,e,this.cameraCenterX,this.cameraCenterY,this.zoom)}clientToWorldAt(t,e,s,a,r){const i=this.resolveInteractionViewportRect(),o=this.resolveClientToPixelScale(i),l=(t-i.left)*o.x,d=(i.bottom-e)*o.y;return{x:(l-this.canvas.width*.5)/r+s,y:(d-this.canvas.height*.5)/r+a}}syncCameraTargetsToCurrent(){this.targetCameraCenterX=this.cameraCenterX,this.targetCameraCenterY=this.cameraCenterY,this.targetZoom=this.zoom,this.lastCameraAnimationTimeMs=0,this.hasZoomAnchor=!1}updatePanReleaseVelocitySample(t){if(!this.isPanInteracting){this.lastPanFrameTimeMs=0;return}if(this.lastPanFrameTimeMs>0){const e=t-this.lastPanFrameTimeMs;if(e>.1){const s=this.cameraCenterX-this.lastPanFrameCameraX,a=this.cameraCenterY-this.lastPanFrameCameraY;let r=s*1e3/e,i=a*1e3/e;const o=Math.hypot(r,i);if(Number.isFinite(o)&&o>=cn){if(o>un){const l=un/o;r*=l,i*=l}this.panVelocityWorldX=r,this.panVelocityWorldY=i,this.lastPanVelocityUpdateTimeMs=t}}}this.lastPanFrameCameraX=this.cameraCenterX,this.lastPanFrameCameraY=this.cameraCenterY,this.lastPanFrameTimeMs=t}updateCameraWithDamping(t){let e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>Gt||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>Gt,s=Math.abs(this.targetZoom-this.zoom)>ce;if(!e&&!s)return this.hasZoomAnchor=!1,this.lastCameraAnimationTimeMs=t,!1;this.lastCameraAnimationTimeMs<=0&&(this.lastCameraAnimationTimeMs=t-16);const a=wt(t-this.lastCameraAnimationTimeMs,0,Ni);this.lastCameraAnimationTimeMs=t;const r=a/1e3,i=1-Math.exp(-Re*r),o=1-Math.exp(-24*r);if(s&&(this.zoom+=(this.targetZoom-this.zoom)*o,Math.abs(this.targetZoom-this.zoom)<=ce&&(this.zoom=this.targetZoom)),this.hasZoomAnchor){const l=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.zoom),d=this.computeCameraCenterForAnchor(this.zoomAnchorClientX,this.zoomAnchorClientY,this.zoomAnchorWorldX,this.zoomAnchorWorldY,this.targetZoom);this.cameraCenterX=l.x,this.cameraCenterY=l.y,this.targetCameraCenterX=d.x,this.targetCameraCenterY=d.y,s||(this.hasZoomAnchor=!1),e=!1}else e&&(this.cameraCenterX+=(this.targetCameraCenterX-this.cameraCenterX)*i,this.cameraCenterY+=(this.targetCameraCenterY-this.cameraCenterY)*i,Math.abs(this.targetCameraCenterX-this.cameraCenterX)<=Gt&&(this.cameraCenterX=this.targetCameraCenterX),Math.abs(this.targetCameraCenterY-this.cameraCenterY)<=Gt&&(this.cameraCenterY=this.targetCameraCenterY));return this.markInteraction(),this.needsVisibleSetUpdate=!0,e=Math.abs(this.targetCameraCenterX-this.cameraCenterX)>Gt||Math.abs(this.targetCameraCenterY-this.cameraCenterY)>Gt,s=Math.abs(this.targetZoom-this.zoom)>ce,e||s}computeCameraCenterForAnchor(t,e,s,a,r){const i=this.resolveInteractionViewportRect(),o=this.resolveClientToPixelScale(i),l=(t-i.left)*o.x,d=(i.bottom-e)*o.y;return{x:s-(l-this.canvas.width*.5)/r,y:a-(d-this.canvas.height*.5)/r}}resolveInteractionViewportRect(){const t=this.interactionViewportProvider?.();return t||this.canvas.getBoundingClientRect()}resolveClientToPixelScale(t){const e=t??this.resolveInteractionViewportRect(),s=Math.max(window.devicePixelRatio||1,1e-6),a=e.width>1e-6?this.canvas.width/e.width:s,r=e.height>1e-6?this.canvas.height/e.height:s;return{x:Math.max(1e-6,a),y:Math.max(1e-6,r)}}}function Ki(n,t,e){const s=t*e*4;if(n.length>s)throw new Error(`Texture source data exceeds texture size (${n.length} > ${s}).`);const a=new Float32Array(s);return a.set(n),a}function Ji(n,t,e){const s=t*e*4;if(n.length>s)throw new Error(`Texture source data exceeds texture size (${n.length} > ${s}).`);const a=new Uint8Array(s);return a.set(n),a}function tr(n){const t=new Uint8Array(n.length);for(let e=0;e+3<n.length;e+=4){const s=n[e+3];if(s<=0){t[e]=0,t[e+1]=0,t[e+2]=0,t[e+3]=0;continue}if(s>=255){t[e]=n[e],t[e+1]=n[e+1],t[e+2]=n[e+2],t[e+3]=255;continue}const a=s/255;t[e]=Math.round(n[e]*a),t[e+1]=Math.round(n[e+1]*a),t[e+2]=Math.round(n[e+2]*a),t[e+3]=s}return t}function er(n,t,e){const s=[];let a=Math.max(1,Math.trunc(t)),r=Math.max(1,Math.trunc(e)),i=n;for(s.push({width:a,height:r,data:i});a>1||r>1;){const o=Math.max(1,a>>1),l=Math.max(1,r>>1),d=new Uint8Array(o*l*4);for(let p=0;p<l;p+=1){const m=Math.min(r-1,p*2),v=Math.min(r-1,m+1);for(let f=0;f<o;f+=1){const y=Math.min(a-1,f*2),h=Math.min(a-1,y+1),g=(m*a+y)*4,x=(m*a+h)*4,b=(v*a+y)*4,w=(v*a+h)*4,E=(p*o+f)*4;d[E]=i[g]+i[x]+i[b]+i[w]+2>>2,d[E+1]=i[g+1]+i[x+1]+i[b+1]+i[w+1]+2>>2,d[E+2]=i[g+2]+i[x+2]+i[b+2]+i[w+2]+2>>2,d[E+3]=i[g+3]+i[x+3]+i[b+3]+i[w+3]+2>>2}}s.push({width:o,height:l,data:d}),a=o,r=l,i=d}return s}function fe(n,t,e){const s=n.byteLength;if(s>t)throw new Error(`${e} uniform data (${s} bytes) exceeds buffer size ${t} bytes.`)}function zt(n,t){const e=Math.max(1,n),s=Math.ceil(Math.sqrt(e)),a=wt(s,1,t),r=Math.max(1,Math.ceil(e/a));if(r>t)throw new Error("Data texture exceeds GPU limits for this browser/GPU.");return{width:a,height:r}}function nr(n){return n.pageRects instanceof Float32Array&&n.pageRects.length>=4?new Float32Array(n.pageRects):new Float32Array([n.pageBounds.minX,n.pageBounds.minY,n.pageBounds.maxX,n.pageBounds.maxY])}function hn(n,t){return Math.ceil(n/t)*t}function wt(n,t,e){return n<t?t:n>e?e:n}function me(n,t){return n<0?0:n>=t?t-1:n}const ir="modulepreload",rr=function(n,t){return new URL(n,t).href},dn={},fn=function(t,e,s){let a=Promise.resolve();if(e&&e.length>0){let d=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");a=d(e.map(p=>{if(p=rr(p,s),p in dn)return;dn[p]=!0;const m=p.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(s)for(let y=i.length-1;y>=0;y--){const h=i[y];if(h.href===p&&(!m||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${v}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":ir,m||(f.as="script"),f.crossOrigin="",f.href=p,l&&f.setAttribute("nonce",l),document.head.appendChild(f),m)return new Promise((y,h)=>{f.addEventListener("load",y),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},ar=typeof window>"u"?await fn(()=>import("./pdf-CoaqzUNK.js"),[],import.meta.url):await fn(()=>import("./pdf-TYrZqVzP.js"),[],import.meta.url),{getDocument:qn,OPS:W,VerbosityLevel:sr}=ar,Te=0,Ce=1,be=2,Ae=3,Se=4;class At{data;length=0;constructor(t=32768){this.data=new Float32Array(t*4)}get quadCount(){return this.length>>2}push(t,e,s,a){this.ensureCapacity(4);const r=this.length;this.data[r]=t,this.data[r+1]=e,this.data[r+2]=s,this.data[r+3]=a,this.length+=4}toTypedArray(){return this.data.slice(0,this.length)}ensureCapacity(t){if(this.length+t<=this.data.length)return;let e=this.data.length;for(;this.length+t>e;)e*=2;const s=new Float32Array(e);s.set(this.data),this.data=s}}const Pt=[1,0,0,1,0,0],mn=.001,or=.999995,pn=.05,jn=.001,lr=.999,Vt=1e3,Dt=1e4,gn=2e3,cr=200,Me=.05,xn=1e-4,ur=.015,hr=12,Lt=1e-4,dr=.001,fr=.001,mr=.001,pr=3,gr=24,yn=16384,xr=134217728,yr=0,vr=1,$n=0,Tr=2,Cr=4,br=6,Ar=0,Sr=1,Ie=0,Ne=1,_r=0,wr=1,Qn=.08,Kn=9,Jn=1,Ge=2,De=2,Er=.08,Rr=24,ti=sr?.ERRORS??0;function Mr(n,t){const e=dt(n),s=Math.max(0,Math.trunc(t+1e-6));return e+s*De}function Ir(n){const t=Math.max(0,Math.trunc(n/De+1e-6));return{alpha:dt(n-t*De),styleFlags:t}}async function ds(n,t={}){const e=t.enableSegmentMerge!==!1,s=t.enableInvisibleCull!==!1,a=Ht(t.maxPages,Number.MAX_SAFE_INTEGER,1,Number.MAX_SAFE_INTEGER),r=ri(),o=await qn({data:new Uint8Array(n),disableFontFace:!0,fontExtraProperties:!0,verbosity:ti,...r?{standardFontDataUrl:r}:{}}).promise;try{const l=Ht(o.numPages,1,1,Number.MAX_SAFE_INTEGER),d=Math.max(1,Math.min(l,a)),p=[];for(let m=1;m<=d;m+=1){const v=await o.getPage(m),f=await v.getOperatorList(),y=await kr(v,f,{enableSegmentMerge:e,enableInvisibleCull:s});p.push(y)}return p}finally{await o.destroy()}}function fs(n,t){return ei(n,t)}async function Pr(n,t={}){const e=Ht(t.maxPages,Number.MAX_SAFE_INTEGER,1,Number.MAX_SAFE_INTEGER),s=ri(),r=await qn({data:new Uint8Array(n),disableFontFace:!0,fontExtraProperties:!0,verbosity:ti,...s?{standardFontDataUrl:s}:{}}).promise;try{const i=Ht(r.numPages,1,1,Number.MAX_SAFE_INTEGER),o=Math.max(1,Math.min(i,e)),l=[];for(let d=1;d<=o;d+=1){const p=await r.getPage(d),m=await p.getOperatorList();l.push(await Br(p,m))}return l}finally{await r.destroy()}}async function Fr(n,t={}){const e=Ht(t.maxPagesPerRow,10,1,100),s=await Pr(n,t);return ei(s,e)}async function Br(n,t){const e=n.view,s=Array.isArray(e)?e:[0,0,1,1],a={minX:Math.min(Number(s[0])||0,Number(s[2])||1),minY:Math.min(Number(s[1])||0,Number(s[3])||1),maxX:Math.max(Number(s[0])||0,Number(s[2])||1),maxY:Math.max(Number(s[1])||0,Number(s[3])||1)},r=ii(n),i=_e(a,r),o=si(t),l=await oi(n,t,r,{allowFullPageFallback:!0}),d=l.width>0&&l.height>0&&l.data.length>=l.width*l.height*4?[{width:l.width,height:l.height,data:l.data,matrix:new Float32Array(l.matrix)}]:[],p=ni(),m=d[0]??null,v=Yt(i,l.bounds)??i;return{...p,pageCount:1,pagesPerRow:1,pageRects:new Float32Array([i.minX,i.minY,i.maxX,i.maxY]),rasterLayers:d,rasterLayerWidth:m?.width??0,rasterLayerHeight:m?.height??0,rasterLayerData:m?.data??new Uint8Array(0),rasterLayerMatrix:m?.matrix??new Float32Array([1,0,0,1,0,0]),bounds:v,pageBounds:i,imagePaintOpCount:o,operatorCount:t.fnArray.length}}async function kr(n,t,e){const s=n.view,a=Array.isArray(s)?s:[0,0,1,1],r={minX:Math.min(Number(a[0])||0,Number(a[2])||1),minY:Math.min(Number(a[1])||0,Number(a[3])||1),maxX:Math.max(Number(a[0])||0,Number(a[2])||1),maxY:Math.max(Number(a[1])||0,Number(a[3])||1)},i=ii(n),o=_e(r,i),l=si(t),d=new At,p=new At,m=new At,v=new At,f=new At(8192),y=new At(8192),h=new At(8192),g=new At(65536),x=new At(65536),b={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},w={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY};let E=0,A=0,S=0,L=0;const U=[],F=[];let P=Xr(i);for(let I=0;I<t.fnArray.length;I+=1){const V=t.fnArray[I],Z=t.argsArray[I];if(V===W.save){U.push(Cn(P));continue}if(V===W.restore){const tt=U.pop();tt&&(P=tt);continue}if(V===W.transform){const tt=Ut(Z);tt&&(P.matrix=Rt(P.matrix,tt));continue}if(V===W.paintFormXObjectBegin){F.push(Cn(P));const tt=Ut(Z);tt&&(P.matrix=Rt(P.matrix,tt));continue}if(V===W.paintFormXObjectEnd){const tt=F.pop();tt&&(P=tt);continue}if(V===W.setLineWidth){const tt=pt(Z,0,P.lineWidth);P.lineWidth=Math.max(0,tt);continue}if(V===W.setLineCap){const tt=Math.trunc(pt(Z,0,P.lineCap));P.lineCap=Math.min(2,Math.max(0,tt));continue}if(V===W.setStrokeRGBColor||V===W.setStrokeColor){const[tt,it,nt]=te(Z,[P.strokeR,P.strokeG,P.strokeB]);P.strokeR=tt,P.strokeG=it,P.strokeB=nt;continue}if(V===W.setStrokeGray){const tt=It(Z,0),[it]=Oe(tt,P.strokeR);P.strokeR=it,P.strokeG=it,P.strokeB=it;continue}if(V===W.setStrokeCMYKColor){const[tt,it,nt]=Xe(Z,[P.strokeR,P.strokeG,P.strokeB]);P.strokeR=tt,P.strokeG=it,P.strokeB=nt;continue}if(V===W.setFillRGBColor||V===W.setFillColor){const[tt,it,nt]=te(Z,[P.fillR,P.fillG,P.fillB]);P.fillR=tt,P.fillG=it,P.fillB=nt;continue}if(V===W.setFillGray){const[tt]=Oe(It(Z,0),P.fillR);P.fillR=tt,P.fillG=tt,P.fillB=tt;continue}if(V===W.setFillCMYKColor){const[tt,it,nt]=Xe(Z,[P.fillR,P.fillG,P.fillB]);P.fillR=tt,P.fillG=it,P.fillB=nt;continue}if(V===W.setGState){Yr(It(Z,0),P);continue}if(V!==W.constructPath)continue;const k=pt(Z,0,-1),N=Nr(k),Y=Gr(k);if(!N&&!Y)continue;const J=ai(Z);if(J){if(E+=1,N){const tt=P.lineWidth<=0,it=_a(P.matrix),nt=tt?0:P.lineWidth*it,mt=Math.max(0,nt*.5);S=Math.max(S,mt);let vt=0;tt&&(vt|=Jn),P.lineCap===1&&(vt|=Ge);const _t=dt(P.strokeR),Ft=dt(P.strokeG),ft=dt(P.strokeB),Bt=dt(P.strokeAlpha);A+=Wr(J,P.matrix,mt,_t,Ft,ft,Bt,vt,e.enableSegmentMerge,d,p,v,m,b)}if(Y){const tt=zr(k)?vr:yr,it=dt(P.fillAlpha),nt=N&&dt(P.strokeAlpha)>jn;it>mr&&Hr(J,P.matrix,tt,nt,dt(P.fillR),dt(P.fillG),dt(P.fillB),it,f,y,h,g,x,w)&&(L+=1)}}}const M=d.quadCount,T=d.toTypedArray(),R=p.toTypedArray(),c=m.toTypedArray(),B=v.toTypedArray(),q=g.quadCount,G=f.toTypedArray(),Q=y.toTypedArray(),z=h.toTypedArray(),j=g.toTypedArray(),O=x.toTypedArray(),D=L>0?w:null;let et=M,$=T,K=R,ot=c,ct=B,rt=M>0?b:null,at=M>0?S:0,st=0,lt=0,xt=0,gt=0;if(M>0&&e.enableInvisibleCull){const I=Zr(T,R,B,c);et=I.segmentCount,$=I.endpoints,K=I.primitiveMeta,ot=I.primitiveBounds,ct=I.styles,rt=I.segmentCount>0?I.bounds:null,at=I.maxHalfWidth,st=I.discardedTransparentCount,lt=I.discardedDegenerateCount,xt=I.discardedDuplicateCount,gt=I.discardedContainedCount}et===0&&($=new Float32Array(0),K=new Float32Array(0),ot=new Float32Array(0),ct=new Float32Array(0),at=0);let u=await Fe(n,t,i,o);if(u.instanceCount===0&&ta(t)&&(await ea(n),u=await Fe(n,t,i,o)),u.instanceCount>0&&u.inPageCount<u.instanceCount*.2){const I=await Fe(n,t,Pt,o);I.inPageCount>u.inPageCount&&(u=I)}const H=et===0&&L===0&&u.instanceCount===0,X=await oi(n,t,i,{allowFullPageFallback:H}),C=X.width>0&&X.height>0&&X.data.length>=X.width*X.height*4?[{width:X.width,height:X.height,data:X.data,matrix:new Float32Array(X.matrix)}]:[],_=Yt(Yt(Yt(rt,D),u.bounds),X.bounds)??{...o};return{pageCount:1,pagesPerRow:1,pageRects:new Float32Array([o.minX,o.minY,o.maxX,o.maxY]),fillPathCount:L,fillSegmentCount:q,fillPathMetaA:G,fillPathMetaB:Q,fillPathMetaC:z,fillSegmentsA:j,fillSegmentsB:O,segmentCount:et,sourceSegmentCount:A,mergedSegmentCount:M,sourceTextCount:u.sourceTextCount,textInstanceCount:u.instanceCount,textGlyphCount:u.glyphCount,textGlyphSegmentCount:u.glyphSegmentCount,textInPageCount:u.inPageCount,textOutOfPageCount:u.outOfPageCount,textInstanceA:u.instanceA,textInstanceB:u.instanceB,textInstanceC:u.instanceC,textGlyphMetaA:u.glyphMetaA,textGlyphMetaB:u.glyphMetaB,textGlyphSegmentsA:u.glyphSegmentsA,textGlyphSegmentsB:u.glyphSegmentsB,rasterLayers:C,rasterLayerWidth:C[0]?.width??0,rasterLayerHeight:C[0]?.height??0,rasterLayerData:C[0]?.data??new Uint8Array(0),rasterLayerMatrix:C[0]?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:$,primitiveMeta:K,primitiveBounds:ot,styles:ct,bounds:_,pageBounds:o,maxHalfWidth:at,imagePaintOpCount:l,operatorCount:t.fnArray.length,pathCount:E,discardedTransparentCount:st,discardedDegenerateCount:lt,discardedDuplicateCount:xt,discardedContainedCount:gt}}function ei(n,t){if(n.length===0)return ni();if(n.length===1)return{...n[0],pageCount:1,pagesPerRow:1};const e=Ht(t,10,1,100),s=Lr(n,e);let a=0,r=0,i=0,o=0,l=0,d=0,p=0,m=0,v=0,f=0,y=0,h=0,g=0,x=0,b=0,w=0,E=0,A=0,S=0,L=0;for(const X of n){a+=X.fillPathCount,r+=X.fillSegmentCount,i+=X.segmentCount,o+=X.sourceSegmentCount,l+=X.mergedSegmentCount,d+=X.sourceTextCount,p+=X.textInstanceCount,m+=X.textGlyphCount,v+=X.textGlyphSegmentCount,f+=X.textInPageCount,y+=X.textOutOfPageCount,h+=X.operatorCount,g+=X.imagePaintOpCount,x+=X.pathCount,b+=X.discardedTransparentCount,w+=X.discardedDegenerateCount,E+=X.discardedDuplicateCount,A+=X.discardedContainedCount,S=Math.max(S,X.maxHalfWidth);const C=X.pageRects.length>=4?Math.floor(X.pageRects.length/4):1;L+=Math.max(1,C)}const U=new Float32Array(a*4),F=new Float32Array(a*4),P=new Float32Array(a*4),M=new Float32Array(r*4),T=new Float32Array(r*4),R=new Float32Array(i*4),c=new Float32Array(i*4),B=new Float32Array(i*4),q=new Float32Array(i*4),G=new Float32Array(p*4),Q=new Float32Array(p*4),z=new Float32Array(p*4),j=new Float32Array(m*4),O=new Float32Array(m*4),D=new Float32Array(v*4),et=new Float32Array(v*4),$=new Float32Array(L*4);let K=0,ot=0,ct=0,rt=0,at=0,st=0,lt=0,xt=null,gt=null;const u=[];for(let X=0;X<n.length;X+=1){const C=n[X],_=s[X],I=_.translateX,V=_.translateY;for(let k=0;k<C.fillPathCount;k+=1){const N=k*4,Y=(K+k)*4;U[Y]=C.fillPathMetaA[N]+ot,U[Y+1]=C.fillPathMetaA[N+1],U[Y+2]=C.fillPathMetaA[N+2]+I,U[Y+3]=C.fillPathMetaA[N+3]+V,F[Y]=C.fillPathMetaB[N]+I,F[Y+1]=C.fillPathMetaB[N+1]+V,F[Y+2]=C.fillPathMetaB[N+2],F[Y+3]=C.fillPathMetaB[N+3],P[Y]=C.fillPathMetaC[N],P[Y+1]=C.fillPathMetaC[N+1],P[Y+2]=C.fillPathMetaC[N+2],P[Y+3]=C.fillPathMetaC[N+3]}for(let k=0;k<C.fillSegmentCount;k+=1){const N=k*4,Y=(ot+k)*4;M[Y]=C.fillSegmentsA[N]+I,M[Y+1]=C.fillSegmentsA[N+1]+V,M[Y+2]=C.fillSegmentsA[N+2]+I,M[Y+3]=C.fillSegmentsA[N+3]+V,T[Y]=C.fillSegmentsB[N]+I,T[Y+1]=C.fillSegmentsB[N+1]+V,T[Y+2]=C.fillSegmentsB[N+2],T[Y+3]=C.fillSegmentsB[N+3]}for(let k=0;k<C.segmentCount;k+=1){const N=k*4,Y=(ct+k)*4;R[Y]=C.endpoints[N]+I,R[Y+1]=C.endpoints[N+1]+V,R[Y+2]=C.endpoints[N+2]+I,R[Y+3]=C.endpoints[N+3]+V,c[Y]=C.primitiveMeta[N]+I,c[Y+1]=C.primitiveMeta[N+1]+V,c[Y+2]=C.primitiveMeta[N+2],c[Y+3]=C.primitiveMeta[N+3],B[Y]=C.primitiveBounds[N]+I,B[Y+1]=C.primitiveBounds[N+1]+V,B[Y+2]=C.primitiveBounds[N+2]+I,B[Y+3]=C.primitiveBounds[N+3]+V,q[Y]=C.styles[N],q[Y+1]=C.styles[N+1],q[Y+2]=C.styles[N+2],q[Y+3]=C.styles[N+3]}G.set(C.textInstanceA,rt*4),z.set(C.textInstanceC,rt*4);for(let k=0;k<C.textInstanceCount;k+=1){const N=k*4,Y=(rt+k)*4;Q[Y]=C.textInstanceB[N]+I,Q[Y+1]=C.textInstanceB[N+1]+V,Q[Y+2]=C.textInstanceB[N+2]+at,Q[Y+3]=C.textInstanceB[N+3]}for(let k=0;k<C.textGlyphCount;k+=1){const N=k*4,Y=(at+k)*4;j[Y]=C.textGlyphMetaA[N]+st,j[Y+1]=C.textGlyphMetaA[N+1],j[Y+2]=C.textGlyphMetaA[N+2],j[Y+3]=C.textGlyphMetaA[N+3],O[Y]=C.textGlyphMetaB[N],O[Y+1]=C.textGlyphMetaB[N+1],O[Y+2]=C.textGlyphMetaB[N+2],O[Y+3]=C.textGlyphMetaB[N+3]}D.set(C.textGlyphSegmentsA,st*4),et.set(C.textGlyphSegmentsB,st*4);const Z=C.pageRects;if(Z.length>=4){const k=Math.floor(Z.length/4);for(let N=0;N<k;N+=1){const Y=N*4,J=(lt+N)*4;$[J]=Z[Y]+I,$[J+1]=Z[Y+1]+V,$[J+2]=Z[Y+2]+I,$[J+3]=Z[Y+3]+V}lt+=k}else{const k=lt*4;$[k]=C.pageBounds.minX+I,$[k+1]=C.pageBounds.minY+V,$[k+2]=C.pageBounds.maxX+I,$[k+3]=C.pageBounds.maxY+V,lt+=1}xt=Yt(xt,Tn(C.bounds,I,V)),gt=Yt(gt,Tn(C.pageBounds,I,V));for(const k of Or(C)){if(k.matrix.length<6)continue;const N=new Float32Array(6);N[0]=k.matrix[0],N[1]=k.matrix[1],N[2]=k.matrix[2],N[3]=k.matrix[3],N[4]=k.matrix[4]+I,N[5]=k.matrix[5]+V,u.push({width:k.width,height:k.height,data:k.data,matrix:N})}K+=C.fillPathCount,ot+=C.fillSegmentCount,ct+=C.segmentCount,rt+=C.textInstanceCount,at+=C.textGlyphCount,st+=C.textGlyphSegmentCount}const H=u[0]??null;return{pageCount:n.length,pagesPerRow:e,pageRects:$,fillPathCount:a,fillSegmentCount:r,fillPathMetaA:U,fillPathMetaB:F,fillPathMetaC:P,fillSegmentsA:M,fillSegmentsB:T,segmentCount:i,sourceSegmentCount:o,mergedSegmentCount:l,sourceTextCount:d,textInstanceCount:p,textGlyphCount:m,textGlyphSegmentCount:v,textInPageCount:f,textOutOfPageCount:y,textInstanceA:G,textInstanceB:Q,textInstanceC:z,textGlyphMetaA:j,textGlyphMetaB:O,textGlyphSegmentsA:D,textGlyphSegmentsB:et,rasterLayers:u,rasterLayerWidth:H?.width??0,rasterLayerHeight:H?.height??0,rasterLayerData:H?.data??new Uint8Array(0),rasterLayerMatrix:H?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:R,primitiveMeta:c,primitiveBounds:B,styles:q,bounds:xt??{minX:0,minY:0,maxX:1,maxY:1},pageBounds:gt??xt??{minX:0,minY:0,maxX:1,maxY:1},maxHalfWidth:S,imagePaintOpCount:g,operatorCount:h,pathCount:x,discardedTransparentCount:b,discardedDegenerateCount:w,discardedDuplicateCount:E,discardedContainedCount:A}}function Lr(n,t){const e=n.map(m=>Dr(m.pageBounds,m.bounds)),s=Math.ceil(n.length/t),a=new Float64Array(s);let r=0;for(let m=0;m<e.length;m+=1){const v=e[m],f=Math.max(v.maxX-v.minX,.001),y=Math.max(v.maxY-v.minY,.001);r+=Math.max(f,y);const h=Math.floor(m/t);a[h]=Math.max(a[h],y)}const i=r/Math.max(1,e.length),o=Math.max(i*Er,Rr),l=new Float64Array(s);for(let m=1;m<s;m+=1)l[m]=l[m-1]-a[m-1]-o;const d=new Float64Array(s),p=new Array(n.length);for(let m=0;m<e.length;m+=1){const v=e[m],f=Math.max(v.maxX-v.minX,.001),y=Math.floor(m/t),h=d[y]-v.minX,g=l[y]-v.maxY;p[m]={translateX:h,translateY:g},d[y]+=f+o}return p}function Dr(n,t){const e=vn(n)?n:t;return vn(e)?e:{minX:0,minY:0,maxX:1,maxY:1}}function vn(n){return Number.isFinite(n.minX)&&Number.isFinite(n.minY)&&Number.isFinite(n.maxX)&&Number.isFinite(n.maxY)}function Tn(n,t,e){return{minX:n.minX+t,minY:n.minY+e,maxX:n.maxX+t,maxY:n.maxY+e}}function Or(n){const t=[];if(Array.isArray(n.rasterLayers))for(const r of n.rasterLayers){const i=Math.max(0,Math.trunc(r?.width??0)),o=Math.max(0,Math.trunc(r?.height??0));if(i<=0||o<=0||!(r.data instanceof Uint8Array)||r.data.length<i*o*4)continue;const l=new Float32Array(6);r.matrix.length>=6?(l[0]=r.matrix[0],l[1]=r.matrix[1],l[2]=r.matrix[2],l[3]=r.matrix[3],l[4]=r.matrix[4],l[5]=r.matrix[5]):(l[0]=1,l[3]=1),t.push({width:i,height:o,data:r.data,matrix:l})}if(t.length>0)return t;const e=Math.max(0,Math.trunc(n.rasterLayerWidth)),s=Math.max(0,Math.trunc(n.rasterLayerHeight));if(e<=0||s<=0||n.rasterLayerData.length<e*s*4)return t;const a=new Float32Array([1,0,0,1,0,0]);return n.rasterLayerMatrix.length>=6&&(a[0]=n.rasterLayerMatrix[0],a[1]=n.rasterLayerMatrix[1],a[2]=n.rasterLayerMatrix[2],a[3]=n.rasterLayerMatrix[3],a[4]=n.rasterLayerMatrix[4],a[5]=n.rasterLayerMatrix[5]),t.push({width:e,height:s,data:n.rasterLayerData,matrix:a}),t}function ni(){return{pageCount:0,pagesPerRow:1,pageRects:new Float32Array(0),fillPathCount:0,fillSegmentCount:0,fillPathMetaA:new Float32Array(0),fillPathMetaB:new Float32Array(0),fillPathMetaC:new Float32Array(0),fillSegmentsA:new Float32Array(0),fillSegmentsB:new Float32Array(0),segmentCount:0,sourceSegmentCount:0,mergedSegmentCount:0,sourceTextCount:0,textInstanceCount:0,textGlyphCount:0,textGlyphSegmentCount:0,textInPageCount:0,textOutOfPageCount:0,textInstanceA:new Float32Array(0),textInstanceB:new Float32Array(0),textInstanceC:new Float32Array(0),textGlyphMetaA:new Float32Array(0),textGlyphMetaB:new Float32Array(0),textGlyphSegmentsA:new Float32Array(0),textGlyphSegmentsB:new Float32Array(0),rasterLayers:[],rasterLayerWidth:0,rasterLayerHeight:0,rasterLayerData:new Uint8Array(0),rasterLayerMatrix:new Float32Array([1,0,0,1,0,0]),endpoints:new Float32Array(0),primitiveMeta:new Float32Array(0),primitiveBounds:new Float32Array(0),styles:new Float32Array(0),bounds:{minX:0,minY:0,maxX:1,maxY:1},pageBounds:{minX:0,minY:0,maxX:1,maxY:1},maxHalfWidth:0,imagePaintOpCount:0,operatorCount:0,pathCount:0,discardedTransparentCount:0,discardedDegenerateCount:0,discardedDuplicateCount:0,discardedContainedCount:0}}function Ht(n,t,e,s){const a=Math.trunc(Number(n)),r=Number.isFinite(a)?a:t;return r<e?e:r>s?s:r}function Xr(n=Pt){return{matrix:[...n],lineWidth:1,lineCap:0,strokeR:0,strokeG:0,strokeB:0,strokeAlpha:1,fillR:0,fillG:0,fillB:0,fillAlpha:1}}function ii(n){const t=ve(n.rotate),e=n.getViewport({scale:1,rotation:t,dontFlip:!1}),s=e.transform;if(!Array.isArray(s)||s.length<6)return[...Pt];const a=Number(s[0]),r=Number(s[1]),i=Number(s[2]),o=Number(s[3]),l=Number(s[4]),d=Number(s[5]);if(![a,r,i,o,l,d].every(Number.isFinite))return[...Pt];const p=Number(e.height);return Number.isFinite(p)?Rt([1,0,0,-1,0,p],[a,r,i,o,l,d]):[a,r,i,o,l,d]}function _e(n,t){const e=ht(t,n.minX,n.minY),s=ht(t,n.minX,n.maxY),a=ht(t,n.maxX,n.minY),r=ht(t,n.maxX,n.maxY);return{minX:Math.min(e[0],s[0],a[0],r[0]),minY:Math.min(e[1],s[1],a[1],r[1]),maxX:Math.max(e[0],s[0],a[0],r[0]),maxY:Math.max(e[1],s[1],a[1],r[1])}}function ve(n){if(!Number.isFinite(n))return 0;let t=n%360;return t<0&&(t+=360),t}function ri(){if(typeof window<"u"&&window.location)return new URL("pdfjs-standard-fonts/",window.location.href).toString();if(typeof window>"u"){const n=new URL("../node_modules/pdfjs-dist/standard_fonts/",import.meta.url);if(n.protocol==="file:"){const t=decodeURIComponent(n.pathname);return t.endsWith("/")?t:`${t}/`}return n.toString()}}function Ur(n,t,e=1){if(!Number.isFinite(n)||!Number.isFinite(t)||n<=0||t<=0)return 1;const s=typeof window>"u"?1:Math.max(1,Number(window.devicePixelRatio)||1),a=Math.max(s*pr,Number.isFinite(e)?e:1);let r=Math.max(1,Math.min(gr,a));for(;r>1;){const i=Math.max(1,Math.ceil(n*r)),o=Math.max(1,Math.ceil(t*r));if(i<=yn&&o<=yn&&i*o<=xr)return r;if(r*=.85,r<1.05)return 1}return 1}function Cn(n){return{matrix:[...n.matrix],lineWidth:n.lineWidth,lineCap:n.lineCap,strokeR:n.strokeR,strokeG:n.strokeG,strokeB:n.strokeB,strokeAlpha:n.strokeAlpha,fillR:n.fillR,fillG:n.fillG,fillB:n.fillB,fillAlpha:n.fillAlpha}}let Xt;function Ut(n){const t=bn(n);if(!t)return null;const e=Array.isArray(n)?bn(n[0]):null,s=t.length>=6?t:e;if(!s||s.length<6)return null;const a=Number(s[0]),r=Number(s[1]),i=Number(s[2]),o=Number(s[3]),l=Number(s[4]),d=Number(s[5]);return[a,r,i,o,l,d].every(Number.isFinite)?[a,r,i,o,l,d]:null}function bn(n){return Array.isArray(n)||ArrayBuffer.isView(n)?n:null}function ai(n){if(!Array.isArray(n)||n.length<2)return null;const t=n[1];if(!Array.isArray(t)||t.length===0)return null;const e=t[0];return e instanceof Float32Array?e:null}function It(n,t){if(Array.isArray(n))return n[t]}function pt(n,t,e){const s=It(n,t),a=Number(s);return Number.isFinite(a)?a:e}function Nr(n){return n===W.stroke||n===W.closeStroke||n===W.fillStroke||n===W.eoFillStroke||n===W.closeFillStroke||n===W.closeEOFillStroke}function Gr(n){return n===W.fill||n===W.eoFill||n===W.fillStroke||n===W.eoFillStroke||n===W.closeFillStroke||n===W.closeEOFillStroke}function zr(n){return n===W.eoFill||n===W.eoFillStroke||n===W.closeEOFillStroke}function Oe(n,t){const e=Number(n);if(Number.isFinite(e)){const s=dt(e>1?e/255:e);return[s,s,s]}return[t,t,t]}function Pe(n,t){if(typeof n=="number"&&Number.isFinite(n)){const e=dt(n>1?n/255:n);return[e,e,e]}if(typeof n=="string"&&n.startsWith("#")&&(n.length===7||n.length===4)){const[e,s,a]=Vr(n);return[dt(e/255),dt(s/255),dt(a/255)]}if(Array.isArray(n)&&n.length>=3){const e=Number(n[0]),s=Number(n[1]),a=Number(n[2]);if([e,s,a].every(Number.isFinite))return[dt(e>1?e/255:e),dt(s>1?s/255:s),dt(a>1?a/255:a)]}return[t[0],t[1],t[2]]}function te(n,t){return Array.isArray(n)?n.length>=3&&n.slice(0,3).every(e=>Number.isFinite(Number(e)))?Pe([n[0],n[1],n[2]],t):n.length>0?Pe(n[0],t):[t[0],t[1],t[2]]:Pe(n,t)}function Xe(n,t){if(!Array.isArray(n)||n.length<4)return te(n,t);const e=pe(n[0]),s=pe(n[1]),a=pe(n[2]),r=pe(n[3]);if([e,s,a,r].some(f=>f===null))return te(n,t);const i=e,o=s,l=a,d=r,p=1-Math.min(1,i+d),m=1-Math.min(1,o+d),v=1-Math.min(1,l+d);return[dt(p),dt(m),dt(v)]}function pe(n){const t=Number(n);if(!Number.isFinite(t))return null;const e=t>1?t/100:t;return dt(e)}function Vr(n){if(n.length===4){const a=Number.parseInt(n[1]+n[1],16),r=Number.parseInt(n[2]+n[2],16),i=Number.parseInt(n[3]+n[3],16);return[a,r,i]}const t=Number.parseInt(n.slice(1,3),16),e=Number.parseInt(n.slice(3,5),16),s=Number.parseInt(n.slice(5,7),16);return[t,e,s]}function Yr(n,t){if(Array.isArray(n))for(const e of n){if(!Array.isArray(e)||e.length<2)continue;const s=e[0],a=e[1];if(s==="CA"){const r=Number(a);Number.isFinite(r)&&(t.strokeAlpha=dt(r));continue}if(s==="ca"){const r=Number(a);Number.isFinite(r)&&(t.fillAlpha=dt(r));continue}if(s==="LW"){const r=Number(a);Number.isFinite(r)&&(t.lineWidth=Math.max(0,r));continue}if(s==="LC"){const r=Number(a);Number.isFinite(r)&&(t.lineCap=Math.min(2,Math.max(0,Math.trunc(r))))}}}function Wr(n,t,e,s,a,r,i,o,l,d,p,m,v,f){let y=0,h=0,g=0,x=0,b=0,w=!1,E=0,A=0,S=0,L=0,U=!1;const F=(c,B,q,G,Q,z,j)=>{d.push(c,B,q,G),p.push(Q,z,j,Mr(i,o)),m.push(e,s,a,r);const O=Math.min(c,q,Q),D=Math.min(B,G,z),et=Math.max(c,q,Q),$=Math.max(B,G,z);v.push(O,D,et,$),f.minX=Math.min(f.minX,O),f.minY=Math.min(f.minY,D),f.maxX=Math.max(f.maxX,et),f.maxY=Math.max(f.maxY,$)},P=()=>{U&&(F(E,A,S,L,S,L,Ie),U=!1)},M=(c,B,q,G)=>{if(!U)return!1;const Q=c-S,z=B-L;if(Q*Q+z*z>mn*mn)return!1;const j=S-E,O=L-A,D=q-c,et=G-B,$=j*j+O*O,K=D*D+et*et;if($<1e-10||K<1e-10)return!1;const ot=1/Math.sqrt($*K);if((j*D+O*et)*ot<or)return!1;const rt=q-E,at=G-A;return Aa(rt,at,j,O,$)>pn*pn?!1:(S=q,L=G,!0)},T=(c,B,q,G,Q)=>{const z=q-c,j=G-B;if(z*z+j*j<1e-10){if((o&Ge)===0)return;y+=1,P(),F(c,B,q,G,q,G,Ie);return}if(y+=1,!(l&&Q&&M(c,B,q,G))){if(l){P(),E=c,A=B,S=q,L=G,U=!0;return}F(c,B,q,G,q,G,Ie)}},R=(c,B,q,G,Q,z)=>{const j=Q-c,O=z-B,D=q-c,et=G-B;j*j+O*O<1e-10&&D*D+et*et<1e-10||(y+=1,P(),F(c,B,q,G,Q,z,Ne))};for(let c=0;c<n.length;){const B=n[c++];if(B===Te){P(),h=n[c++],g=n[c++],x=h,b=g,w=!0;continue}if(B===Ce){const q=n[c++],G=n[c++],[Q,z]=ht(t,h,g),[j,O]=ht(t,q,G);T(Q,z,j,O,!0),h=q,g=G;continue}if(B===be){const q=n[c++],G=n[c++],Q=n[c++],z=n[c++],j=n[c++],O=n[c++],[D,et]=ht(t,h,g),[$,K]=ht(t,q,G),[ot,ct]=ht(t,Q,z),[rt,at]=ht(t,j,O);Ve(D,et,$,K,ot,ct,rt,at,R,Qn,Kn),h=j,g=O;continue}if(B===Ae){const q=n[c++],G=n[c++],Q=n[c++],z=n[c++],[j,O]=ht(t,h,g),[D,et]=ht(t,q,G),[$,K]=ht(t,Q,z);R(j,O,D,et,$,K),h=Q,g=z;continue}if(B===Se){if(w&&(h!==x||g!==b)){const[q,G]=ht(t,h,g),[Q,z]=ht(t,x,b);T(q,G,Q,z,!0)}h=x,g=b,P();continue}P();break}return P(),y}function Hr(n,t,e,s,a,r,i,o,l,d,p,m,v,f){let y=0,h=0,g=0,x=0,b=!1;const w=m.quadCount;let E=0;const A={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},S=(F,P,M,T)=>{const R=M-F,c=T-P;R*R+c*c<1e-12||(m.push(F,P,M,T),v.push(M,T,_r,0),E+=1,A.minX=Math.min(A.minX,F,M),A.minY=Math.min(A.minY,P,T),A.maxX=Math.max(A.maxX,F,M),A.maxY=Math.max(A.maxY,P,T))},L=(F,P,M,T,R,c)=>{const B=R-F,q=c-P,G=M-F,Q=T-P;B*B+q*q<1e-12&&G*G+Q*Q<1e-12||(m.push(F,P,M,T),v.push(R,c,wr,0),E+=1,A.minX=Math.min(A.minX,F,M,R),A.minY=Math.min(A.minY,P,T,c),A.maxX=Math.max(A.maxX,F,M,R),A.maxY=Math.max(A.maxY,P,T,c))},U=()=>{if(b){if(y!==g||h!==x){const[F,P]=ht(t,y,h),[M,T]=ht(t,g,x);S(F,P,M,T)}y=g,h=x}};for(let F=0;F<n.length;){const P=n[F++];if(P===Te){U(),y=n[F++],h=n[F++],g=y,x=h,b=!0;continue}if(P===Ce){const M=n[F++],T=n[F++],[R,c]=ht(t,y,h),[B,q]=ht(t,M,T);S(R,c,B,q),y=M,h=T;continue}if(P===be){const M=n[F++],T=n[F++],R=n[F++],c=n[F++],B=n[F++],q=n[F++],[G,Q]=ht(t,y,h),[z,j]=ht(t,M,T),[O,D]=ht(t,R,c),[et,$]=ht(t,B,q);Ve(G,Q,z,j,O,D,et,$,L,Qn,Kn),y=B,h=q;continue}if(P===Ae){const M=n[F++],T=n[F++],R=n[F++],c=n[F++],[B,q]=ht(t,y,h),[G,Q]=ht(t,M,T),[z,j]=ht(t,R,c);L(B,q,G,Q,z,j),y=R,h=c;continue}if(P===Se){U();continue}U();break}return U(),E===0?!1:(l.push(w,E,A.minX,A.minY),d.push(A.maxX,A.maxY,a,r),p.push(e,s?1:0,i,o),f.minX=Math.min(f.minX,A.minX),f.minY=Math.min(f.minY,A.minY),f.maxX=Math.max(f.maxX,A.maxX),f.maxY=Math.max(f.maxY,A.maxY),!0)}function Zr(n,t,e,s){const a=n.length>>2,r=new Uint8Array(a),i=new Set,o=new Map;let l=0,d=0,p=0,m=0;for(let E=0;E<a;E+=1){const A=E*4,S=n[A],L=n[A+1],U=n[A+2],F=n[A+3],P=t[A],M=t[A+1],T=t[A+2],R=T>=Ne-.5,c=e[A],B=e[A+1],q=e[A+2],G=e[A+3],{alpha:Q,styleFlags:z}=Ir(t[A+3]);if(Q<=jn){l+=1;continue}const j=R?Math.hypot(U-S,F-L)+Math.hypot(P-U,M-F):Math.hypot(P-S,M-L);if(j<1e-5){const D=!R&&(z&Ge)!==0,$=(z&Jn)!==0||c>1e-6;if(!D||!$){d+=1;continue}}const O=qr(S,L,U,F,P,M,T,c,B,q,G,Q,z);if(i.has(O)){p+=1;continue}if(i.add(O),r[E]=1,!R&&j>=1e-5){const D=jr(E,S,L,P,M,c,B,q,G,Q,z);let et=o.get(D.key);et||(et=[],o.set(D.key,et)),et.push({index:D.index,start:D.start,end:D.end,halfWidth:D.halfWidth,alpha:D.alpha,styleFlags:D.styleFlags})}}for(const E of o.values()){E.sort((S,L)=>{if(Math.abs(S.halfWidth-L.halfWidth)>xn)return L.halfWidth-S.halfWidth;const U=S.end-S.start,F=L.end-L.start;return Math.abs(U-F)>Me?F-U:S.start-L.start});const A=[];for(const S of E){let L=!1;for(const U of A)if(!(U.halfWidth+xn<S.halfWidth)&&U.start-Me<=S.start&&U.end+Me>=S.end){L=!0;break}if(L){r[S.index]===1&&(r[S.index]=0,m+=1);continue}S.alpha>=lr&&A.push(S)}}let v=0;for(let E=0;E<a;E+=1)r[E]===1&&(v+=1);if(v===0)return{segmentCount:0,endpoints:new Float32Array(0),primitiveMeta:new Float32Array(0),primitiveBounds:new Float32Array(0),styles:new Float32Array(0),bounds:{minX:0,minY:0,maxX:0,maxY:0},maxHalfWidth:0,discardedTransparentCount:l,discardedDegenerateCount:d,discardedDuplicateCount:p,discardedContainedCount:m};const f=new Float32Array(v*4),y=new Float32Array(v*4),h=new Float32Array(v*4),g=new Float32Array(v*4),x={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY};let b=0,w=0;for(let E=0;E<a;E+=1){if(r[E]===0)continue;const A=E*4,S=w*4,L=n[A],U=n[A+1],F=s[A],P=s[A+1],M=s[A+2],T=s[A+3],R=e[A];f[S]=L,f[S+1]=U,f[S+2]=n[A+2],f[S+3]=n[A+3],y[S]=t[A],y[S+1]=t[A+1],y[S+2]=t[A+2],y[S+3]=t[A+3],h[S]=F,h[S+1]=P,h[S+2]=M,h[S+3]=T,g[S]=e[A],g[S+1]=e[A+1],g[S+2]=e[A+2],g[S+3]=e[A+3],x.minX=Math.min(x.minX,F),x.minY=Math.min(x.minY,P),x.maxX=Math.max(x.maxX,M),x.maxY=Math.max(x.maxY,T),b=Math.max(b,R),w+=1}return{segmentCount:v,endpoints:f,primitiveMeta:y,primitiveBounds:h,styles:g,bounds:x,maxHalfWidth:b,discardedTransparentCount:l,discardedDegenerateCount:d,discardedDuplicateCount:p,discardedContainedCount:m}}function qr(n,t,e,s,a,r,i,o,l,d,p,m,v){const f=i>=Ne-.5;let y=n,h=t,g=a,x=r,b=e,w=s;return!f&&(y>g||y===g&&h>x)&&(y=a,h=r,g=n,x=t),f||(b=g,w=x),[yt(i,10),yt(o,Dt),yt(l,Dt),yt(d,Dt),yt(p,Dt),yt(m,Dt),yt(v,1),yt(y,Vt),yt(h,Vt),yt(b,Vt),yt(w,Vt),yt(g,Vt),yt(x,Vt)].join("|")}function jr(n,t,e,s,a,r,i,o,l,d,p){let m=t,v=e,f=s,y=a,h=f-m,g=y-v;const x=Math.hypot(h,g);let b=h/x,w=g/x;(b<0||Math.abs(b)<1e-10&&w<0)&&(b=-b,w=-w,m=s,v=a,f=t,y=e);const E=-w,A=b,S=E*m+A*v,L=b*m+w*v,U=b*f+w*y,F=Math.min(L,U),P=Math.max(L,U);return{key:[yt(b,gn),yt(w,gn),yt(S,cr),yt(i,Dt),yt(o,Dt),yt(l,Dt),yt(p,1)].join("|"),index:n,start:F,end:P,halfWidth:r,alpha:d,styleFlags:p}}async function Fe(n,t,e,s){const a=Jr(n);if(!a)return Kr();const r=new At(4096),i=new At(4096),o=new At(4096),l=new At(2048),d=new At(2048),p=new At(16384),m=new At(16384),v=new Map,f=[];let y=0,h=null,g=0,x=0;const b=[],w=[],E=[],A=[];let S=la(e),L=null,U=null;const F=(M,T,R)=>{if(!R)return null;const c=typeof M?.loadedName=="string"&&M.loadedName.length>0?M.loadedName:T;if(!c)return null;const B=`${c}|${R}`,q=v.get(B);if(q!==void 0)return{index:q,bounds:f[q]};const G=pa(a,c,R);if(!G)return null;const Q=p.quadCount,z=xa(G,p,m);if(z.segmentCount<=0)return null;const j=l.quadCount;return l.push(Q,z.segmentCount,z.bounds.minX,z.bounds.minY),d.push(z.bounds.maxX,z.bounds.maxY,0,0),v.set(B,j),f[j]=z.bounds,{index:j,bounds:z.bounds}},P=M=>{if(M.length===0||S.fontSize===0)return;const T=fa(a,S.fontRef),R=ma(T),c=S.fontSize*R,B=T?.vertical===!0,q=B?1:-1,G=S.textHScale*S.fontDirection;let Q=0;for(const z of M){if(typeof z=="number"&&Number.isFinite(z)){Q+=q*z*S.fontSize/1e3;continue}const j=z,O=typeof j.fontChar=="string"?j.fontChar:"",D=Number(j.width),et=Number.isFinite(D)?D:0,$=j.isSpace===!0,K=da(j,O),ot=($?S.wordSpacing:0)+S.charSpacing;if(!B&&!K&&ha(S.renderMode)&&S.fillAlpha>fr){const rt=F(T,S.fontRef,O);if(rt){const at=ba(S,Q,0),st=_e(rt.bounds,at);(!L||Rn(st,L))&&(r.push(at[0],at[1],at[2],at[3]),i.push(at[4],at[5],rt.index,0),o.push(S.fillR,S.fillG,S.fillB,S.fillAlpha),y+=1,s&&(Rn(st,s)?g+=1:x+=1),h?(h.minX=Math.min(h.minX,st.minX-Lt),h.minY=Math.min(h.minY,st.minY-Lt),h.maxX=Math.max(h.maxX,st.maxX+Lt),h.maxY=Math.max(h.maxY,st.maxY+Lt)):h={minX:st.minX-Lt,minY:st.minY-Lt,maxX:st.maxX+Lt,maxY:st.maxY+Lt})}}const ct=B?et*c-ot*S.fontDirection:et*c+ot*S.fontDirection;Q+=ct}B?S.textY-=Q:S.textX+=Q*G};for(let M=0;M<t.fnArray.length;M+=1){const T=t.fnArray[M],R=t.argsArray[M];if(T===W.save){b.push(En(S)),E.push(An(L));continue}if(T===W.restore){const c=b.pop();c&&(S=c),L=E.pop()??null,U=null;continue}if(T===W.transform){const c=Ut(R);c&&(S.matrix=Rt(S.matrix,c));continue}if(T===W.paintFormXObjectBegin){w.push(En(S)),A.push(An(L));const c=Ut(R);c&&(S.matrix=Rt(S.matrix,c)),U=null;continue}if(T===W.paintFormXObjectEnd){const c=w.pop();c&&(S=c),L=A.pop()??L,U=null;continue}if(T===W.constructPath){if(pt(R,0,-1)===W.endPath){const B=ai(R);U=B?Qr(B,S.matrix):null}else U=null;continue}if(T===W.clip||T===W.eoClip){U&&(L=$r(L,U));continue}if(T===W.endPath){U=null;continue}if(T===W.setFillRGBColor||T===W.setFillColor||T===W.setFillGray||T===W.setFillCMYKColor){if(T===W.setFillCMYKColor){const[c,B,q]=Xe(R,[S.fillR,S.fillG,S.fillB]);S.fillR=c,S.fillG=B,S.fillB=q}else if(T===W.setFillGray){const[c]=Oe(It(R,0),S.fillR);S.fillR=c,S.fillG=c,S.fillB=c}else{const[c,B,q]=te(R,[S.fillR,S.fillG,S.fillB]);S.fillR=c,S.fillG=B,S.fillB=q}continue}if(T===W.setGState){ua(It(R,0),S);continue}if(T===W.beginText){ca(S);continue}if(T===W.setCharSpacing){S.charSpacing=pt(R,0,S.charSpacing);continue}if(T===W.setWordSpacing){S.wordSpacing=pt(R,0,S.wordSpacing);continue}if(T===W.setHScale){S.textHScale=pt(R,0,S.textHScale*100)/100;continue}if(T===W.setLeading){S.leading=-pt(R,0,-S.leading);continue}if(T===W.setFont){const c=It(R,0),B=pt(R,1,S.fontSize);typeof c=="string"&&(S.fontRef=c),B<0?(S.fontSize=-B,S.fontDirection=-1):(S.fontSize=B,S.fontDirection=1);continue}if(T===W.setTextRenderingMode){S.renderMode=Math.max(0,Math.trunc(pt(R,0,S.renderMode)));continue}if(T===W.setTextRise){S.textRise=pt(R,0,S.textRise);continue}if(T===W.moveText){const c=pt(R,0,0),B=pt(R,1,0);Qt(S,c,B);continue}if(T===W.setLeadingMoveText){const c=pt(R,0,0),B=pt(R,1,0);S.leading=B,Qt(S,c,B);continue}if(T===W.setTextMatrix){const c=Ut(R);c&&(S.textMatrix=c,S.textX=0,S.textY=0,S.lineX=0,S.lineY=0);continue}if(T===W.nextLine){Qt(S,0,S.leading);continue}if(T===W.showText||T===W.showSpacedText){P(Be(It(R,0))),U=null;continue}if(T===W.nextLineShowText){Qt(S,0,S.leading),P(Be(It(R,0))),U=null;continue}if(T===W.nextLineSetSpacingShowText){S.wordSpacing=pt(R,0,S.wordSpacing),S.charSpacing=pt(R,1,S.charSpacing),Qt(S,0,S.leading),P(Be(It(R,2))),U=null;continue}}return{sourceTextCount:y,instanceCount:r.quadCount,glyphCount:l.quadCount,glyphSegmentCount:p.quadCount,inPageCount:g,outOfPageCount:x,instanceA:r.toTypedArray(),instanceB:i.toTypedArray(),instanceC:o.toTypedArray(),glyphMetaA:l.toTypedArray(),glyphMetaB:d.toTypedArray(),glyphSegmentsA:p.toTypedArray(),glyphSegmentsB:m.toTypedArray(),bounds:h}}function An(n){return n?{...n}:null}function $r(n,t){if(!n&&!t)return null;if(!n&&t)return{...t};if(n&&!t)return{...n};const e=Math.max(n.minX,t.minX),s=Math.max(n.minY,t.minY),a=Math.min(n.maxX,t.maxX),r=Math.min(n.maxY,t.maxY);return e<=a&&s<=r?{minX:e,minY:s,maxX:a,maxY:r}:null}function Qr(n,t){let e=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY,i=!1,o=0,l=0,d=0,p=0,m=!1;const v=(f,y)=>{const[h,g]=ht(t,f,y);e=Math.min(e,h),s=Math.min(s,g),a=Math.max(a,h),r=Math.max(r,g),i=!0};for(let f=0;f<n.length;){const y=n[f++];if(y===Te){if(f+1>=n.length)break;o=n[f++],l=n[f++],d=o,p=l,m=!0,v(o,l);continue}if(y===Ce){if(f+1>=n.length)break;const h=n[f++],g=n[f++];v(o,l),v(h,g),o=h,l=g;continue}if(y===be){if(f+5>=n.length)break;const h=n[f++],g=n[f++],x=n[f++],b=n[f++],w=n[f++],E=n[f++];v(o,l),v(h,g),v(x,b),v(w,E),o=w,l=E;continue}if(y===Ae){if(f+3>=n.length)break;const h=n[f++],g=n[f++],x=n[f++],b=n[f++];v(o,l),v(h,g),v(x,b),o=x,l=b;continue}if(y===Se){m&&(v(o,l),v(d,p),o=d,l=p);continue}break}return i?{minX:e,minY:s,maxX:a,maxY:r}:null}function Kr(){return{sourceTextCount:0,instanceCount:0,glyphCount:0,glyphSegmentCount:0,inPageCount:0,outOfPageCount:0,instanceA:new Float32Array(0),instanceB:new Float32Array(0),instanceC:new Float32Array(0),glyphMetaA:new Float32Array(0),glyphMetaB:new Float32Array(0),glyphSegmentsA:new Float32Array(0),glyphSegmentsB:new Float32Array(0),bounds:null}}function Jr(n){const t=n;return!t.commonObjs||typeof t.commonObjs.get!="function"?null:t.commonObjs}function ta(n){for(const t of n.fnArray)if(t===W.showText||t===W.showSpacedText||t===W.nextLineShowText||t===W.nextLineSetSpacingShowText)return!0;return!1}function si(n){let t=0;for(const e of n.fnArray)ze(e)&&(t+=1);return t}async function ea(n){if(typeof document>"u")return;const t=n;if(!Array.isArray(t.view)||typeof t.getViewport!="function"||typeof t.render!="function")return;const e=Math.max(1,Math.abs(t.view[2]-t.view[0])),s=Math.max(1,Math.abs(t.view[3]-t.view[1])),a=Math.max(e,s),i=dt(1024/a)*.95+.05,o=t.getViewport({scale:i,rotation:ve(t.rotate),dontFlip:!0}),l=Math.max(1,Math.ceil(o.width)),d=Math.max(1,Math.ceil(o.height)),p=document.createElement("canvas");p.width=l,p.height=d;const m=p.getContext("2d",{alpha:!1});if(m)try{await t.render({canvasContext:m,viewport:o,intent:"display"}).promise}catch{}finally{p.width=0,p.height=0}}function ze(n){return n===W.paintImageXObject||n===W.paintInlineImageXObject||n===W.paintInlineImageXObjectGroup||n===W.paintImageXObjectRepeat||n===W.paintImageMaskXObject||n===W.paintImageMaskXObjectGroup||n===W.paintImageMaskXObjectRepeat||n===W.paintSolidColorImageMask||n===W.beginInlineImage||n===W.beginImageData||n===W.endInlineImage}function na(n,t){return n===W.dependency||n===W.save||n===W.restore||n===W.transform||n===W.setGState||n===W.beginGroup||n===W.endGroup||n===W.beginCompat||n===W.endCompat||n===W.beginMarkedContent||n===W.beginMarkedContentProps||n===W.endMarkedContent||n===W.paintFormXObjectBegin||n===W.paintFormXObjectEnd||n===W.paintXObject||n===W.clip||n===W.eoClip||n===W.endPath||n===W.setFillRGBColor||n===W.setFillColor||n===W.setFillGray||n===W.setFillCMYKColor||n===W.setFillColorN||n===W.setFillColorSpace||n===W.setFillTransparent||n===W.setStrokeRGBColor||n===W.setStrokeColor||n===W.setStrokeGray||n===W.setStrokeCMYKColor||n===W.setStrokeColorN||n===W.setStrokeColorSpace||n===W.setStrokeTransparent?!0:n===W.constructPath?pt(t,0,-1)===W.endPath:!1}function ia(n){const t=new Uint8Array(n.fnArray.length);let e=!1,s=!1;for(let a=0;a<n.fnArray.length;a+=1){const r=n.fnArray[a],i=n.argsArray[a];if(ze(r)){e=!0,t[a]=1;continue}(r===W.paintFormXObjectBegin||r===W.paintFormXObjectEnd||r===W.paintXObject)&&(s=!0),na(r,i)&&(t[a]=1)}return{hasImagePaintOps:e,hasFormXObjectOps:s,imageOnlyMask:t}}function ra(n){const t=[];let e=[...Pt],s=1;for(let a=0;a<n.fnArray.length;a+=1){const r=n.fnArray[a],i=n.argsArray[a];if(r===W.save){t.push([...e]);continue}if(r===W.restore){const v=t.pop();v&&(e=v);continue}if(r===W.transform){const v=Ut(i);v&&(e=Rt(e,v));continue}if(!ze(r))continue;const o=aa(r,i);if(!o)continue;const l=Math.hypot(e[0],e[1]),d=Math.hypot(e[2],e[3]);if(!Number.isFinite(l)||!Number.isFinite(d)||l<=1e-5||d<=1e-5)continue;const p=o.width/l,m=o.height/d;Number.isFinite(p)&&p>s&&(s=p),Number.isFinite(m)&&m>s&&(s=m)}return Number.isFinite(s)?Math.max(1,s):1}function aa(n,t){if(n===W.paintImageXObject||n===W.paintImageXObjectRepeat){const e=pt(t,1,Number.NaN),s=pt(t,2,Number.NaN);if(e>0&&s>0)return{width:e,height:s}}if(n===W.paintInlineImageXObject){const e=It(t,0),s=Number(e?.width),a=Number(e?.height);if(s>0&&a>0)return{width:s,height:a}}if(n===W.paintImageMaskXObject||n===W.paintImageMaskXObjectRepeat){const e=pt(t,1,Number.NaN),s=pt(t,2,Number.NaN);if(e>0&&s>0)return{width:e,height:s}}return null}function $t(){return{width:0,height:0,data:new Uint8Array(0),matrix:[...Pt],bounds:null}}async function oi(n,t,e,s){const a=ia(t);if(!a.hasImagePaintOps&&!(s.allowFullPageFallback&&a.hasFormXObjectOps))return $t();const r=n;if(!Array.isArray(r.view)||typeof r.getViewport!="function"||typeof r.render!="function")return $t();const i=r.getViewport({scale:1,rotation:ve(r.rotate),dontFlip:!1}),o=ra(t),l=Ur(Math.max(1,Math.ceil(i.width)),Math.max(1,Math.ceil(i.height)),o),d=l===1?i:r.getViewport({scale:l,rotation:ve(r.rotate),dontFlip:!1}),p=Math.max(1,Math.ceil(d.width)),m=Math.max(1,Math.ceil(d.height));if(!Number.isFinite(p)||!Number.isFinite(m)||p<=0||m<=0)return $t();let v=null;return a.hasImagePaintOps&&(v=await Sn(r,d,a.imageOnlyMask),v&&_n(v))?wn(p,m,v,d,e):!s.allowFullPageFallback||!a.hasFormXObjectOps||(v=await Sn(r,d),!v||!_n(v))?$t():wn(p,m,v,d,e)}async function sa(){if(Xt!==void 0)return Xt;if(typeof window<"u")return Xt=null,null;try{const t=await import("@napi-rs/canvas");return typeof t.createCanvas!="function"?(Xt=null,null):(Xt={createCanvas:t.createCanvas},Xt)}catch{return Xt=null,null}}async function oa(n,t){if(typeof document<"u"){const r=document.createElement("canvas");r.width=n,r.height=t;const i=r.getContext("2d",{alpha:!0,willReadFrequently:!0});return i?{context:i,dispose:()=>{r.width=0,r.height=0}}:null}const e=await sa();if(!e)return null;const s=e.createCanvas(n,t),a=s.getContext("2d");return!a||typeof a.getImageData!="function"?null:{context:a,dispose:()=>{s.width=0,s.height=0}}}async function Sn(n,t,e){const s=t,a=Math.max(1,Math.ceil(Number(s.width)||1)),r=Math.max(1,Math.ceil(Number(s.height)||1)),i=await oa(a,r);if(!i)return null;const o=i.context;try{const p={canvasContext:o,viewport:t,intent:"display",background:"rgba(0,0,0,0)"};e&&(p.operationsFilter=m=>m>=0&&m<e.length&&e[m]===1),await n.render(p).promise}catch{return i.dispose(),null}const l=o.getImageData(0,0,a,r),d=new Uint8Array(l.data instanceof Uint8ClampedArray?l.data:new Uint8Array(l.data));return i.dispose(),d}function _n(n){for(let t=3;t<n.length;t+=4)if(n[t]>0)return!0;return!1}function wn(n,t,e,s,a){const r=Ut(s.transform)??[...Pt],i=Sa(r)??[...Pt],l=Rt(a,Rt(i,[n,0,0,t,0,0])),d=_e({minX:0,minY:0,maxX:1,maxY:1},l);return{width:n,height:t,data:e,matrix:l,bounds:d}}function la(n){return{matrix:[...n],fillR:0,fillG:0,fillB:0,fillAlpha:1,textMatrix:[...Pt],textX:0,textY:0,lineX:0,lineY:0,charSpacing:0,wordSpacing:0,textHScale:1,leading:0,textRise:0,renderMode:$n,fontRef:"",fontSize:0,fontDirection:1}}function En(n){return{matrix:[...n.matrix],fillR:n.fillR,fillG:n.fillG,fillB:n.fillB,fillAlpha:n.fillAlpha,textMatrix:[...n.textMatrix],textX:n.textX,textY:n.textY,lineX:n.lineX,lineY:n.lineY,charSpacing:n.charSpacing,wordSpacing:n.wordSpacing,textHScale:n.textHScale,leading:n.leading,textRise:n.textRise,renderMode:n.renderMode,fontRef:n.fontRef,fontSize:n.fontSize,fontDirection:n.fontDirection}}function ca(n){n.textMatrix=[...Pt],n.textX=0,n.textY=0,n.lineX=0,n.lineY=0}function Qt(n,t,e){n.lineX+=t,n.lineY+=e,n.textX=n.lineX,n.textY=n.lineY}function ua(n,t){if(Array.isArray(n))for(const e of n){if(!Array.isArray(e)||e.length<2)continue;const s=e[0],a=e[1];if(s==="ca"){const r=Number(a);Number.isFinite(r)&&(t.fillAlpha=dt(r));continue}if(s==="Font"&&Array.isArray(a)){const r=a[0],i=Number(a[1]);typeof r=="string"&&(t.fontRef=r),Number.isFinite(i)&&(i<0?(t.fontSize=-i,t.fontDirection=-1):(t.fontSize=i,t.fontDirection=1))}}}function ha(n){return n===$n||n===Tr||n===Cr||n===br}function da(n,t){if(!t||n.isSpace===!0)return!0;const e=typeof n.unicode=="string"?n.unicode:"";return e.length>0&&e.trim().length===0}function Be(n){return Array.isArray(n)?n:[]}function fa(n,t){if(!t)return null;try{const e=n.get(t);return!e||typeof e!="object"?null:e}catch{return null}}function ma(n){const t=n?.fontMatrix;if(Array.isArray(t)&&t.length>=1){const e=Number(t[0]);if(Number.isFinite(e)&&e!==0)return e}return dr}function pa(n,t,e){const s=`${t}_path_${e}`;let a;try{a=n.get(s)}catch{return null}const r=a?.path;return ga(r)}function ga(n){if(!n)return null;if(n instanceof Float32Array)return n;if(ArrayBuffer.isView(n)){const t=n,e=new Float32Array(t.length);for(let s=0;s<t.length;s+=1){const a=Number(t[s]);e[s]=Number.isFinite(a)?a:0}return e}if(Array.isArray(n)){const t=new Float32Array(n.length);for(let e=0;e<n.length;e+=1){const s=Number(n[e]);t[e]=Number.isFinite(s)?s:0}return t}return null}function xa(n,t,e){let s=0,a=0,r=0,i=0,o=0,l=!1;const d={minX:Number.POSITIVE_INFINITY,minY:Number.POSITIVE_INFINITY,maxX:Number.NEGATIVE_INFINITY,maxY:Number.NEGATIVE_INFINITY},p=(v,f,y,h)=>{const g=y-v,x=h-f;g*g+x*x<1e-12||(t.push(v,f,y,h),e.push(y,h,Ar,0),s+=1,d.minX=Math.min(d.minX,v,y),d.minY=Math.min(d.minY,f,h),d.maxX=Math.max(d.maxX,v,y),d.maxY=Math.max(d.maxY,f,h))},m=(v,f,y,h,g,x)=>{const b=g-v,w=x-f,E=y-v,A=h-f;b*b+w*w<1e-12&&E*E+A*A<1e-12||(t.push(v,f,y,h),e.push(g,x,Sr,0),s+=1,d.minX=Math.min(d.minX,v,y,g),d.minY=Math.min(d.minY,f,h,x),d.maxX=Math.max(d.maxX,v,y,g),d.maxY=Math.max(d.maxY,f,h,x))};for(let v=0;v<n.length;){const f=n[v++];if(f===Te){a=n[v++],r=n[v++],i=a,o=r,l=!0;continue}if(f===Ce){const y=n[v++],h=n[v++];p(a,r,y,h),a=y,r=h;continue}if(f===be){const y=n[v++],h=n[v++],g=n[v++],x=n[v++],b=n[v++],w=n[v++];Ve(a,r,y,h,g,x,b,w,m,ur,hr),a=b,r=w;continue}if(f===Ae){const y=n[v++],h=n[v++],g=n[v++],x=n[v++];m(a,r,y,h,g,x),a=g,r=x;continue}if(f===Se){l&&(a!==i||r!==o)&&p(a,r,i,o),a=i,r=o;continue}break}return s===0?{segmentCount:0,bounds:{minX:0,minY:0,maxX:0,maxY:0}}:{segmentCount:s,bounds:d}}function Ve(n,t,e,s,a,r,i,o,l,d,p){const m=[n,t,e,s,a,r,i,o,0],v=d*d;for(;m.length>0;){const f=m.pop(),y=m.pop(),h=m.pop(),g=m.pop(),x=m.pop(),b=m.pop(),w=m.pop(),E=m.pop(),A=m.pop(),[S,L]=ya(A,E,w,b,x,g,h,y),U=va(A,E,w,b,x,g,h,y,S,L);if(f>=p||U<=v){l(A,E,S,L,h,y);continue}const F=(A+w)*.5,P=(E+b)*.5,M=(w+x)*.5,T=(b+g)*.5,R=(x+h)*.5,c=(g+y)*.5,B=(F+M)*.5,q=(P+T)*.5,G=(M+R)*.5,Q=(T+c)*.5,z=(B+G)*.5,j=(q+Q)*.5,O=f+1;m.push(z,j,G,Q,R,c,h,y,O),m.push(A,E,F,P,B,q,z,j,O)}}function ya(n,t,e,s,a,r,i,o){return[(3*(e+a)-n-i)*.25,(3*(s+r)-t-o)*.25]}function va(n,t,e,s,a,r,i,o,l,d){const p=[.25,.5,.75];let m=0;for(const v of p){const f=Ta(n,t,e,s,a,r,i,o,v),y=Ca(n,t,l,d,i,o,v),h=f[0]-y[0],g=f[1]-y[1],x=h*h+g*g;x>m&&(m=x)}return m}function Ta(n,t,e,s,a,r,i,o,l){const d=1-l,p=d*d,m=p*d,v=l*l,f=v*l,y=m*n+3*p*l*e+3*d*v*a+f*i,h=m*t+3*p*l*s+3*d*v*r+f*o;return[y,h]}function Ca(n,t,e,s,a,r,i){const o=1-i,l=o*o,d=i*i,p=l*n+2*o*i*e+d*a,m=l*t+2*o*i*s+d*r;return[p,m]}function ba(n,t,e){let s=n.matrix;return s=Rt(s,n.textMatrix),s=Rt(s,[1,0,0,1,n.textX,n.textY+n.textRise]),s=Rt(s,[n.textHScale*n.fontDirection,0,0,n.fontDirection>0?-1:1,0,0]),s=Rt(s,[1,0,0,1,t,e]),s=Rt(s,[n.fontSize,0,0,-n.fontSize,0,0]),s}function Yt(n,t){if(!n&&!t)return null;if(!n&&t)return{...t};if(n&&!t)return{...n};const e=n,s=t;return{minX:Math.min(e.minX,s.minX),minY:Math.min(e.minY,s.minY),maxX:Math.max(e.maxX,s.maxX),maxY:Math.max(e.maxY,s.maxY)}}function Rn(n,t){return!(n.maxX<t.minX||n.minX>t.maxX||n.maxY<t.minY||n.minY>t.maxY)}function Aa(n,t,e,s,a){const r=n*s-t*e;return r*r/a}function yt(n,t){return Math.round(n*t)}function Rt(n,t){return[n[0]*t[0]+n[2]*t[1],n[1]*t[0]+n[3]*t[1],n[0]*t[2]+n[2]*t[3],n[1]*t[2]+n[3]*t[3],n[0]*t[4]+n[2]*t[5]+n[4],n[1]*t[4]+n[3]*t[5]+n[5]]}function Sa(n){const t=n[0],e=n[1],s=n[2],a=n[3],r=n[4],i=n[5],o=t*a-e*s;if(!Number.isFinite(o)||Math.abs(o)<=1e-12)return null;const l=1/o;return[a*l,-e*l,-s*l,t*l,(s*i-a*r)*l,(e*r-t*i)*l]}function _a(n){const t=Math.hypot(n[0],n[1]),e=Math.hypot(n[2],n[3]),s=(t+e)*.5;return Number.isFinite(s)&&s>0?s:1}function ht(n,t,e){return[n[0]*t+n[2]*e+n[4],n[1]*t+n[3]*e+n[5]]}function dt(n){return n<=0?0:n>=1?1:n}function ms(n){let t=null,e=!1,s=0,a=0;const r=new Set,i=new Map;let o=null,l=!1,d=0,p=0,m=0;function v(){e=!1,s=0,a=0,r.clear(),i.clear(),o=null,l=!1,d=0,p=0,m=0}function f(){i.clear(),o=null,l=!1,d=0,p=0,m=0}function y(M){e&&n().endPanInteraction(),f(),v()}function h(){if(i.size<2)return null;const M=i.values(),T=M.next().value,R=M.next().value;if(!T||!R)return null;const c=R.x-T.x,B=R.y-T.y;return{distance:Math.hypot(c,B),centerX:(T.x+R.x)*.5,centerY:(T.y+R.y)*.5}}function g(M,T){if(M.hasPointerCapture(T))try{M.releasePointerCapture(T)}catch{}}function x(M){if(!i.has(M.pointerId)||!e)return;i.set(M.pointerId,{x:M.clientX,y:M.clientY});const T=n();if(i.size>=2){const B=h();if(!B)return;if(!l){l=!0,o=null,d=Math.max(B.distance,.001),p=B.centerX,m=B.centerY;return}const q=Math.max(d,.001),G=Math.max(B.distance,.001),Q=G/q,z=B.centerX-p,j=B.centerY-m;(z!==0||j!==0)&&T.panByPixels(z,j),Number.isFinite(Q)&&Math.abs(Q-1)>1e-4&&T.zoomAtClientPoint(B.centerX,B.centerY,Q),d=G,p=B.centerX,m=B.centerY;return}if(o===null){o=M.pointerId,s=M.clientX,a=M.clientY,l=!1,d=0;return}if(M.pointerId!==o)return;const R=M.clientX-s,c=M.clientY-a;s=M.clientX,a=M.clientY,T.panByPixels(R,c)}function b(M,T){if(i.delete(T.pointerId),r.delete(T.pointerId),g(M,T.pointerId),i.size>=2){const R=h();R&&(l=!0,o=null,d=Math.max(R.distance,.001),p=R.centerX,m=R.centerY);return}if(i.size===1){const R=i.entries().next().value;R?(o=R[0],s=R[1].x,a=R[1].y):o=null,l=!1,d=0,p=0,m=0;return}y()}const w=M=>{const T=t;if(T){if(r.add(M.pointerId),e||(e=!0,n().beginPanInteraction()),M.pointerType==="touch")if(i.set(M.pointerId,{x:M.clientX,y:M.clientY}),i.size===1)o=M.pointerId,l=!1,d=0,p=M.clientX,m=M.clientY,s=M.clientX,a=M.clientY;else{const R=h();R&&(l=!0,o=null,d=Math.max(R.distance,.001),p=R.centerX,m=R.centerY)}else s=M.clientX,a=M.clientY;T.setPointerCapture(M.pointerId)}},E=M=>{if(M.pointerType==="touch"){x(M);return}if(!e)return;const T=M.clientX-s,R=M.clientY-a;s=M.clientX,a=M.clientY,n().panByPixels(T,R)},A=M=>{const T=t;if(T){if(M.pointerType==="touch"){b(T,M);return}r.delete(M.pointerId),y(),g(T,M.pointerId)}},S=M=>{const T=t;if(T){if(M.pointerType==="touch"){b(T,M);return}r.delete(M.pointerId),y(),g(T,M.pointerId)}},L=M=>{if(r.delete(M.pointerId),M.pointerType==="touch"){i.has(M.pointerId)&&i.delete(M.pointerId),i.size===0&&y();return}e&&y()},U=M=>{M.preventDefault();const T=Math.exp(-M.deltaY*.0013);n().zoomAtClientPoint(M.clientX,M.clientY,T)};function F(M){t!==M&&(t&&P(),t=M,M.addEventListener("pointerdown",w),M.addEventListener("pointermove",E),M.addEventListener("pointerup",A),M.addEventListener("pointercancel",S),M.addEventListener("lostpointercapture",L),M.addEventListener("wheel",U,{passive:!1}))}function P(){const M=t;if(M){for(const T of r)g(M,T);M.removeEventListener("pointerdown",w),M.removeEventListener("pointermove",E),M.removeEventListener("pointerup",A),M.removeEventListener("pointercancel",S),M.removeEventListener("lostpointercapture",L),M.removeEventListener("wheel",U),t=null,y()}}return{attach:F,detach:P,resetState:v}}var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wa(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function xe(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ke={exports:{}};var Mn;function Ea(){return Mn||(Mn=1,(function(n,t){(function(e){n.exports=e()})(function(){return(function e(s,a,r){function i(d,p){if(!a[d]){if(!s[d]){var m=typeof xe=="function"&&xe;if(!p&&m)return m(d,!0);if(o)return o(d,!0);var v=new Error("Cannot find module '"+d+"'");throw v.code="MODULE_NOT_FOUND",v}var f=a[d]={exports:{}};s[d][0].call(f.exports,function(y){var h=s[d][1][y];return i(h||y)},f,f.exports,e,s,a,r)}return a[d].exports}for(var o=typeof xe=="function"&&xe,l=0;l<r.length;l++)i(r[l]);return i})({1:[function(e,s,a){var r=e("./utils"),i=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(l){for(var d,p,m,v,f,y,h,g=[],x=0,b=l.length,w=b,E=r.getTypeOf(l)!=="string";x<l.length;)w=b-x,m=E?(d=l[x++],p=x<b?l[x++]:0,x<b?l[x++]:0):(d=l.charCodeAt(x++),p=x<b?l.charCodeAt(x++):0,x<b?l.charCodeAt(x++):0),v=d>>2,f=(3&d)<<4|p>>4,y=1<w?(15&p)<<2|m>>6:64,h=2<w?63&m:64,g.push(o.charAt(v)+o.charAt(f)+o.charAt(y)+o.charAt(h));return g.join("")},a.decode=function(l){var d,p,m,v,f,y,h=0,g=0,x="data:";if(l.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var b,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&w--,l.charAt(l.length-2)===o.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=i.uint8array?new Uint8Array(0|w):new Array(0|w);h<l.length;)d=o.indexOf(l.charAt(h++))<<2|(v=o.indexOf(l.charAt(h++)))>>4,p=(15&v)<<4|(f=o.indexOf(l.charAt(h++)))>>2,m=(3&f)<<6|(y=o.indexOf(l.charAt(h++))),b[g++]=d,f!==64&&(b[g++]=p),y!==64&&(b[g++]=m);return b}},{"./support":30,"./utils":32}],2:[function(e,s,a){var r=e("./external"),i=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function d(p,m,v,f,y){this.compressedSize=p,this.uncompressedSize=m,this.crc32=v,this.compression=f,this.compressedContent=y}d.prototype={getContentWorker:function(){var p=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return p.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(p,m,v){return p.pipe(new o).pipe(new l("uncompressedSize")).pipe(m.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},s.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,a){var r=e("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},a.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,a){var r=e("./utils"),i=(function(){for(var o,l=[],d=0;d<256;d++){o=d;for(var p=0;p<8;p++)o=1&o?3988292384^o>>>1:o>>>1;l[d]=o}return l})();s.exports=function(o,l){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?(function(d,p,m,v){var f=i,y=v+m;d^=-1;for(var h=v;h<y;h++)d=d>>>8^f[255&(d^p[h])];return-1^d})(0|l,o,o.length,0):(function(d,p,m,v){var f=i,y=v+m;d^=-1;for(var h=v;h<y;h++)d=d>>>8^f[255&(d^p.charCodeAt(h))];return-1^d})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,s,a){a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(e,s,a){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,a){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),d=r?"uint8array":"array";function p(m,v){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=v,this.meta={}}a.magic="\b\0",o.inherits(p,l),p.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(d,m.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(v){m.push({data:v,meta:m.meta})}},a.compressWorker=function(m){return new p("Deflate",m)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,a){function r(f,y){var h,g="";for(h=0;h<y;h++)g+=String.fromCharCode(255&f),f>>>=8;return g}function i(f,y,h,g,x,b){var w,E,A=f.file,S=f.compression,L=b!==d.utf8encode,U=o.transformTo("string",b(A.name)),F=o.transformTo("string",d.utf8encode(A.name)),P=A.comment,M=o.transformTo("string",b(P)),T=o.transformTo("string",d.utf8encode(P)),R=F.length!==A.name.length,c=T.length!==P.length,B="",q="",G="",Q=A.dir,z=A.date,j={crc32:0,compressedSize:0,uncompressedSize:0};y&&!h||(j.crc32=f.crc32,j.compressedSize=f.compressedSize,j.uncompressedSize=f.uncompressedSize);var O=0;y&&(O|=8),L||!R&&!c||(O|=2048);var D=0,et=0;Q&&(D|=16),x==="UNIX"?(et=798,D|=(function(K,ot){var ct=K;return K||(ct=ot?16893:33204),(65535&ct)<<16})(A.unixPermissions,Q)):(et=20,D|=(function(K){return 63&(K||0)})(A.dosPermissions)),w=z.getUTCHours(),w<<=6,w|=z.getUTCMinutes(),w<<=5,w|=z.getUTCSeconds()/2,E=z.getUTCFullYear()-1980,E<<=4,E|=z.getUTCMonth()+1,E<<=5,E|=z.getUTCDate(),R&&(q=r(1,1)+r(p(U),4)+F,B+="up"+r(q.length,2)+q),c&&(G=r(1,1)+r(p(M),4)+T,B+="uc"+r(G.length,2)+G);var $="";return $+=`
\0`,$+=r(O,2),$+=S.magic,$+=r(w,2),$+=r(E,2),$+=r(j.crc32,4),$+=r(j.compressedSize,4),$+=r(j.uncompressedSize,4),$+=r(U.length,2),$+=r(B.length,2),{fileRecord:m.LOCAL_FILE_HEADER+$+U+B,dirRecord:m.CENTRAL_FILE_HEADER+r(et,2)+$+r(M.length,2)+"\0\0\0\0"+r(D,4)+r(g,4)+U+B+M}}var o=e("../utils"),l=e("../stream/GenericWorker"),d=e("../utf8"),p=e("../crc32"),m=e("../signature");function v(f,y,h,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=h,this.encodeFileName=g,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(v,l),v.prototype.push=function(f){var y=f.meta.percent||0,h=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:h?(y+100*(h-g-1))/h:100}}))},v.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var y=this.streamFiles&&!f.file.dir;if(y){var h=i(f,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(f){this.accumulate=!1;var y=this.streamFiles&&!f.file.dir,h=i(f,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),y)this.push({data:(function(g){return m.DATA_DESCRIPTOR+r(g.crc32,4)+r(g.compressedSize,4)+r(g.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var f=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var h=this.bytesWritten-f,g=(function(x,b,w,E,A){var S=o.transformTo("string",A(E));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(x,2)+r(x,2)+r(b,4)+r(w,4)+r(S.length,2)+S})(this.dirRecords.length,h,f,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(f){this._sources.push(f);var y=this;return f.on("data",function(h){y.processChunk(h)}),f.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),f.on("error",function(h){y.error(h)}),this},v.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(f){var y=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var h=0;h<y.length;h++)try{y[h].error(f)}catch{}return!0},v.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,y=0;y<f.length;y++)f[y].lock()},s.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,a){var r=e("../compressions"),i=e("./ZipFileWorker");a.generateWorker=function(o,l,d){var p=new i(l.streamFiles,d,l.platform,l.encodeFileName),m=0;try{o.forEach(function(v,f){m++;var y=(function(b,w){var E=b||w,A=r[E];if(!A)throw new Error(E+" is not a valid compression method !");return A})(f.options.compression,l.compression),h=f.options.compressionOptions||l.compressionOptions||{},g=f.dir,x=f.date;f._compressWorker(y,h).withStreamInfo("file",{name:v,dir:g,date:x,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(p)}),p.entriesCount=m}catch(v){p.error(v)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,a){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new r;for(var o in this)typeof this[o]!="function"&&(i[o]=this[o]);return i}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(i,o){return new r().loadAsync(i,o)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,a){var r=e("./utils"),i=e("./external"),o=e("./utf8"),l=e("./zipEntries"),d=e("./stream/Crc32Probe"),p=e("./nodejsUtils");function m(v){return new i.Promise(function(f,y){var h=v.decompressed.getContentWorker().pipe(new d);h.on("error",function(g){y(g)}).on("end",function(){h.streamInfo.crc32!==v.decompressed.crc32?y(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}s.exports=function(v,f){var y=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),p.isNode&&p.isStream(v)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",v,!0,f.optimizedBinaryString,f.base64).then(function(h){var g=new l(f);return g.load(h),g}).then(function(h){var g=[i.Promise.resolve(h)],x=h.files;if(f.checkCRC32)for(var b=0;b<x.length;b++)g.push(m(x[b]));return i.Promise.all(g)}).then(function(h){for(var g=h.shift(),x=g.files,b=0;b<x.length;b++){var w=x[b],E=w.fileNameStr,A=r.resolve(w.fileNameStr);y.file(A,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:f.createFolders}),w.dir||(y.file(A).unsafeOriginalName=E)}return g.zipComment.length&&(y.comment=g.zipComment),y})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,a){var r=e("../utils"),i=e("../stream/GenericWorker");function o(l,d){i.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(d)}r.inherits(o,i),o.prototype._bindStream=function(l){var d=this;(this._stream=l).pause(),l.on("data",function(p){d.push({data:p,meta:{percent:0}})}).on("error",function(p){d.isPaused?this.generatedError=p:d.error(p)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},o.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,a){var r=e("readable-stream").Readable;function i(o,l,d){r.call(this,l),this._helper=o;var p=this;o.on("data",function(m,v){p.push(m)||p._helper.pause(),d&&d(v)}).on("error",function(m){p.emit("error",m)}).on("end",function(){p.push(null)})}e("../utils").inherits(i,r),i.prototype._read=function(){this._helper.resume()},s.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,s,a){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,i);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,i)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var i=new Buffer(r);return i.fill(0),i},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,a){function r(A,S,L){var U,F=o.getTypeOf(S),P=o.extend(L||{},p);P.date=P.date||new Date,P.compression!==null&&(P.compression=P.compression.toUpperCase()),typeof P.unixPermissions=="string"&&(P.unixPermissions=parseInt(P.unixPermissions,8)),P.unixPermissions&&16384&P.unixPermissions&&(P.dir=!0),P.dosPermissions&&16&P.dosPermissions&&(P.dir=!0),P.dir&&(A=x(A)),P.createFolders&&(U=g(A))&&b.call(this,U,!0);var M=F==="string"&&P.binary===!1&&P.base64===!1;L&&L.binary!==void 0||(P.binary=!M),(S instanceof m&&S.uncompressedSize===0||P.dir||!S||S.length===0)&&(P.base64=!1,P.binary=!0,S="",P.compression="STORE",F="string");var T=null;T=S instanceof m||S instanceof l?S:y.isNode&&y.isStream(S)?new h(A,S):o.prepareContent(A,S,P.binary,P.optimizedBinaryString,P.base64);var R=new v(A,T,P);this.files[A]=R}var i=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),d=e("./stream/StreamHelper"),p=e("./defaults"),m=e("./compressedObject"),v=e("./zipObject"),f=e("./generate"),y=e("./nodejsUtils"),h=e("./nodejs/NodejsStreamInputAdapter"),g=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var S=A.lastIndexOf("/");return 0<S?A.substring(0,S):""},x=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},b=function(A,S){return S=S!==void 0?S:p.createFolders,A=x(A),this.files[A]||r.call(this,A,null,{dir:!0,createFolders:S}),this.files[A]};function w(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var S,L,U;for(S in this.files)U=this.files[S],(L=S.slice(this.root.length,S.length))&&S.slice(0,this.root.length)===this.root&&A(L,U)},filter:function(A){var S=[];return this.forEach(function(L,U){A(L,U)&&S.push(U)}),S},file:function(A,S,L){if(arguments.length!==1)return A=this.root+A,r.call(this,A,S,L),this;if(w(A)){var U=A;return this.filter(function(P,M){return!M.dir&&U.test(P)})}var F=this.files[this.root+A];return F&&!F.dir?F:null},folder:function(A){if(!A)return this;if(w(A))return this.filter(function(F,P){return P.dir&&A.test(F)});var S=this.root+A,L=b.call(this,S),U=this.clone();return U.root=L.name,U},remove:function(A){A=this.root+A;var S=this.files[A];if(S||(A.slice(-1)!=="/"&&(A+="/"),S=this.files[A]),S&&!S.dir)delete this.files[A];else for(var L=this.filter(function(F,P){return P.name.slice(0,A.length)===A}),U=0;U<L.length;U++)delete this.files[L[U].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var S,L={};try{if((L=o.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var U=L.comment||this.comment||"";S=f.generateWorker(this,L,U)}catch(F){(S=new l("error")).error(F)}return new d(S,L.type||"string",L.mimeType)},generateAsync:function(A,S){return this.generateInternalStream(A).accumulate(S)},generateNodeStream:function(A,S){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(S)}};s.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,a){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,a){var r=e("./DataReader");function i(o){r.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data[this.zero+o]},i.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),d=o.charCodeAt(1),p=o.charCodeAt(2),m=o.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===l&&this.data[v+1]===d&&this.data[v+2]===p&&this.data[v+3]===m)return v-this.zero;return-1},i.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),d=o.charCodeAt(1),p=o.charCodeAt(2),m=o.charCodeAt(3),v=this.readData(4);return l===v[0]&&d===v[1]&&p===v[2]&&m===v[3]},i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},s.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,s,a){var r=e("../utils");function i(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,d=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)d=(d<<8)+this.byteAt(l);return this.index+=o,d},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},s.exports=i},{"../utils":32}],19:[function(e,s,a){var r=e("./Uint8ArrayReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},s.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,a){var r=e("./DataReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},i.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},i.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},i.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},s.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,s,a){var r=e("./ArrayReader");function i(o){r.call(this,o)}e("../utils").inherits(i,r),i.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},s.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,a){var r=e("../utils"),i=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),d=e("./NodeBufferReader"),p=e("./Uint8ArrayReader");s.exports=function(m){var v=r.getTypeOf(m);return r.checkSupport(v),v!=="string"||i.uint8array?v==="nodebuffer"?new d(m):i.uint8array?new p(r.transformTo("uint8array",m)):new o(r.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,a){a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,a){var r=e("./GenericWorker"),i=e("../utils");function o(l){r.call(this,"ConvertWorker to "+l),this.destType=l}i.inherits(o,r),o.prototype.processChunk=function(l){this.push({data:i.transformTo(this.destType,l.data),meta:l.meta})},s.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,a){var r=e("./GenericWorker"),i=e("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,r),o.prototype.processChunk=function(l){this.streamInfo.crc32=i(l.data,this.streamInfo.crc32||0),this.push(l)},s.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,a){var r=e("../utils"),i=e("./GenericWorker");function o(l){i.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}r.inherits(o,i),o.prototype.processChunk=function(l){if(l){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+l.data.length}i.prototype.processChunk.call(this,l)},s.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,a){var r=e("../utils"),i=e("./GenericWorker");function o(l){i.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){d.dataIsReady=!0,d.data=p,d.max=p&&p.length||0,d.type=r.getTypeOf(p),d.isPaused||d._tickAndRepeat()},function(p){d.error(p)})}r.inherits(o,i),o.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,d);break;case"uint8array":l=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":l=this.data.slice(this.index,d)}return this.index=d,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,a){function r(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,o){return this._listeners[i].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,o){if(this._listeners[i])for(var l=0;l<this._listeners[i].length;l++)this._listeners[i][l].call(this,o)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var o=this;return i.on("data",function(l){o.processChunk(l)}),i.on("end",function(){o.end()}),i.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,o){return this.extraStreamInfo[i]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},s.exports=r},{}],29:[function(e,s,a){var r=e("../utils"),i=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),d=e("../support"),p=e("../external"),m=null;if(d.nodestream)try{m=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(y,h){return new p.Promise(function(g,x){var b=[],w=y._internalType,E=y._outputType,A=y._mimeType;y.on("data",function(S,L){b.push(S),h&&h(L)}).on("error",function(S){b=[],x(S)}).on("end",function(){try{var S=(function(L,U,F){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",U),F);case"base64":return l.encode(U);default:return r.transformTo(L,U)}})(E,(function(L,U){var F,P=0,M=null,T=0;for(F=0;F<U.length;F++)T+=U[F].length;switch(L){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(M=new Uint8Array(T),F=0;F<U.length;F++)M.set(U[F],P),P+=U[F].length;return M;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+L+"'")}})(w,b),A);g(S)}catch(L){x(L)}b=[]}).resume()})}function f(y,h,g){var x=h;switch(h){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=h,this._mimeType=g,r.checkSupport(x),this._worker=y.pipe(new i(x)),y.lock()}catch(b){this._worker=new o("error"),this._worker.error(b)}}f.prototype={accumulate:function(y){return v(this,y)},on:function(y,h){var g=this;return y==="data"?this._worker.on(y,function(x){h.call(g,x.data,x.meta)}):this._worker.on(y,function(){r.delay(h,arguments,g)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(y){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},y)}},s.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,a){if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var r=new ArrayBuffer(0);try{a.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),a.blob=i.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!e("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,a){for(var r=e("./utils"),i=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),d=new Array(256),p=0;p<256;p++)d[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;d[254]=d[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function v(){l.call(this,"utf-8 encode")}a.utf8encode=function(f){return i.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(y){var h,g,x,b,w,E=y.length,A=0;for(b=0;b<E;b++)(64512&(g=y.charCodeAt(b)))==55296&&b+1<E&&(64512&(x=y.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(x-56320),b++),A+=g<128?1:g<2048?2:g<65536?3:4;for(h=i.uint8array?new Uint8Array(A):new Array(A),b=w=0;w<A;b++)(64512&(g=y.charCodeAt(b)))==55296&&b+1<E&&(64512&(x=y.charCodeAt(b+1)))==56320&&(g=65536+(g-55296<<10)+(x-56320),b++),g<128?h[w++]=g:(g<2048?h[w++]=192|g>>>6:(g<65536?h[w++]=224|g>>>12:(h[w++]=240|g>>>18,h[w++]=128|g>>>12&63),h[w++]=128|g>>>6&63),h[w++]=128|63&g);return h})(f)},a.utf8decode=function(f){return i.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(y){var h,g,x,b,w=y.length,E=new Array(2*w);for(h=g=0;h<w;)if((x=y[h++])<128)E[g++]=x;else if(4<(b=d[x]))E[g++]=65533,h+=b-1;else{for(x&=b===2?31:b===3?15:7;1<b&&h<w;)x=x<<6|63&y[h++],b--;1<b?E[g++]=65533:x<65536?E[g++]=x:(x-=65536,E[g++]=55296|x>>10&1023,E[g++]=56320|1023&x)}return E.length!==g&&(E.subarray?E=E.subarray(0,g):E.length=g),r.applyFromCharCode(E)})(f=r.transformTo(i.uint8array?"uint8array":"array",f))},r.inherits(m,l),m.prototype.processChunk=function(f){var y=r.transformTo(i.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var h=y;(y=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),y.set(h,this.leftOver.length)}else y=this.leftOver.concat(y);this.leftOver=null}var g=(function(b,w){var E;for((w=w||b.length)>b.length&&(w=b.length),E=w-1;0<=E&&(192&b[E])==128;)E--;return E<0||E===0?w:E+d[b[E]]>w?E:w})(y),x=y;g!==y.length&&(i.uint8array?(x=y.subarray(0,g),this.leftOver=y.subarray(g,y.length)):(x=y.slice(0,g),this.leftOver=y.slice(g,y.length))),this.push({data:a.utf8decode(x),meta:f.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=m,r.inherits(v,l),v.prototype.processChunk=function(f){this.push({data:a.utf8encode(f.data),meta:f.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,a){var r=e("./support"),i=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function d(h){return h}function p(h,g){for(var x=0;x<h.length;++x)g[x]=255&h.charCodeAt(x);return g}e("setimmediate"),a.newBlob=function(h,g){a.checkSupport("blob");try{return new Blob([h],{type:g})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(h),x.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(h,g,x){var b=[],w=0,E=h.length;if(E<=x)return String.fromCharCode.apply(null,h);for(;w<E;)g==="array"||g==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(w,Math.min(w+x,E)))):b.push(String.fromCharCode.apply(null,h.subarray(w,Math.min(w+x,E)))),w+=x;return b.join("")},stringifyByChar:function(h){for(var g="",x=0;x<h.length;x++)g+=String.fromCharCode(h[x]);return g},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function v(h){var g=65536,x=a.getTypeOf(h),b=!0;if(x==="uint8array"?b=m.applyCanBeUsed.uint8array:x==="nodebuffer"&&(b=m.applyCanBeUsed.nodebuffer),b)for(;1<g;)try{return m.stringifyByChunk(h,x,g)}catch{g=Math.floor(g/2)}return m.stringifyByChar(h)}function f(h,g){for(var x=0;x<h.length;x++)g[x]=h[x];return g}a.applyFromCharCode=v;var y={};y.string={string:d,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return y.string.uint8array(h).buffer},uint8array:function(h){return p(h,new Uint8Array(h.length))},nodebuffer:function(h){return p(h,o.allocBuffer(h.length))}},y.array={string:v,array:d,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return o.newBufferFrom(h)}},y.arraybuffer={string:function(h){return v(new Uint8Array(h))},array:function(h){return f(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:d,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return o.newBufferFrom(new Uint8Array(h))}},y.uint8array={string:v,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:d,nodebuffer:function(h){return o.newBufferFrom(h)}},y.nodebuffer={string:v,array:function(h){return f(h,new Array(h.length))},arraybuffer:function(h){return y.nodebuffer.uint8array(h).buffer},uint8array:function(h){return f(h,new Uint8Array(h.length))},nodebuffer:d},a.transformTo=function(h,g){if(g=g||"",!h)return g;a.checkSupport(h);var x=a.getTypeOf(g);return y[x][h](g)},a.resolve=function(h){for(var g=h.split("/"),x=[],b=0;b<g.length;b++){var w=g[b];w==="."||w===""&&b!==0&&b!==g.length-1||(w===".."?x.pop():x.push(w))}return x.join("/")},a.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(h)?"nodebuffer":r.uint8array&&h instanceof Uint8Array?"uint8array":r.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(h){if(!r[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(h){var g,x,b="";for(x=0;x<(h||"").length;x++)b+="\\x"+((g=h.charCodeAt(x))<16?"0":"")+g.toString(16).toUpperCase();return b},a.delay=function(h,g,x){setImmediate(function(){h.apply(x||null,g||[])})},a.inherits=function(h,g){function x(){}x.prototype=g.prototype,h.prototype=new x},a.extend=function(){var h,g,x={};for(h=0;h<arguments.length;h++)for(g in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],g)&&x[g]===void 0&&(x[g]=arguments[h][g]);return x},a.prepareContent=function(h,g,x,b,w){return l.Promise.resolve(g).then(function(E){return r.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,S){var L=new FileReader;L.onload=function(U){A(U.target.result)},L.onerror=function(U){S(U.target.error)},L.readAsArrayBuffer(E)}):E}).then(function(E){var A=a.getTypeOf(E);return A?(A==="arraybuffer"?E=a.transformTo("uint8array",E):A==="string"&&(w?E=i.decode(E):x&&b!==!0&&(E=(function(S){return p(S,r.uint8array?new Uint8Array(S.length):new Array(S.length))})(E))),E):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,a){var r=e("./reader/readerFor"),i=e("./utils"),o=e("./signature"),l=e("./zipEntry"),d=e("./support");function p(m){this.files=[],this.loadOptions=m}p.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(v)+", expected "+i.pretty(m)+")")}},isSignature:function(m,v){var f=this.reader.index;this.reader.setIndex(m);var y=this.reader.readString(4)===v;return this.reader.setIndex(f),y},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),v=d.uint8array?"uint8array":"array",f=i.transformTo(v,m);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,v,f,y=this.zip64EndOfCentralSize-44;0<y;)m=this.reader.readInt(2),v=this.reader.readInt(4),f=this.reader.readData(v),this.zip64ExtensibleData[m]={id:m,length:v,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,v;for(m=0;m<this.files.length;m++)v=this.files[m],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var v=m;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var y=v-f;if(0<y)this.isSignature(v,o.CENTRAL_FILE_HEADER)||(this.reader.zero=y);else if(y<0)throw new Error("Corrupted zip: missing "+Math.abs(y)+" bytes.")},prepareReader:function(m){this.reader=r(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,a){var r=e("./reader/readerFor"),i=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),d=e("./utf8"),p=e("./compressions"),m=e("./support");function v(f,y){this.options=f,this.loadOptions=y}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var y,h;if(f.skip(22),this.fileNameLength=f.readInt(2),h=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((y=(function(g){for(var x in p)if(Object.prototype.hasOwnProperty.call(p,x)&&p[x].magic===g)return p[x];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,y,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var y=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(y),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var y,h,g,x=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<x;)y=f.readInt(2),h=f.readInt(2),g=f.readData(h),this.extraFields[y]={id:y,length:h,value:g};f.setIndex(x)},handleUTF8:function(){var f=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var y=this.findExtraFieldUnicodePath();if(y!==null)this.fileNameStr=y;else{var h=i.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var x=i.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var y=r(f.value);return y.readInt(1)!==1||l(this.fileName)!==y.readInt(4)?null:d.utf8decode(y.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var y=r(f.value);return y.readInt(1)!==1||l(this.fileComment)!==y.readInt(4)?null:d.utf8decode(y.readData(f.length-5))}return null}},s.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,a){function r(y,h,g){this.name=y,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=h,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var i=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),d=e("./compressedObject"),p=e("./stream/GenericWorker");r.prototype={internalStream:function(y){var h=null,g="string";try{if(!y)throw new Error("No output type specified.");var x=(g=y.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!x&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&x&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(w){(h=new p("error")).error(w)}return new i(h,g,"")},async:function(y,h){return this.internalStream(y).accumulate(h)},nodeStream:function(y,h){return this.internalStream(y||"nodebuffer").toNodejsStream(h)},_compressWorker:function(y,h){if(this._data instanceof d&&this._data.compression.magic===y.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),d.createWorkerFrom(g,y,h)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof p?this._data:new o(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<m.length;f++)r.prototype[m[f]]=v;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,a){(function(r){var i,o,l=r.MutationObserver||r.WebKitMutationObserver;if(l){var d=0,p=new l(y),m=r.document.createTextNode("");p.observe(m,{characterData:!0}),i=function(){m.data=d=++d%2}}else if(r.setImmediate||r.MessageChannel===void 0)i="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var h=r.document.createElement("script");h.onreadystatechange=function(){y(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},r.document.documentElement.appendChild(h)}:function(){setTimeout(y,0)};else{var v=new r.MessageChannel;v.port1.onmessage=y,i=function(){v.port2.postMessage(0)}}var f=[];function y(){var h,g;o=!0;for(var x=f.length;x;){for(g=f,f=[],h=-1;++h<x;)g[h]();x=f.length}o=!1}s.exports=function(h){f.push(h)!==1||o||i()}}).call(this,typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,a){var r=e("immediate");function i(){}var o={},l=["REJECTED"],d=["FULFILLED"],p=["PENDING"];function m(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,x!==i&&h(this,x)}function v(x,b,w){this.promise=x,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function f(x,b,w){r(function(){var E;try{E=b(w)}catch(A){return o.reject(x,A)}E===x?o.reject(x,new TypeError("Cannot resolve promise with itself")):o.resolve(x,E)})}function y(x){var b=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof b=="function")return function(){b.apply(x,arguments)}}function h(x,b){var w=!1;function E(L){w||(w=!0,o.reject(x,L))}function A(L){w||(w=!0,o.resolve(x,L))}var S=g(function(){b(A,E)});S.status==="error"&&E(S.value)}function g(x,b){var w={};try{w.value=x(b),w.status="success"}catch(E){w.status="error",w.value=E}return w}(s.exports=m).prototype.finally=function(x){if(typeof x!="function")return this;var b=this.constructor;return this.then(function(w){return b.resolve(x()).then(function(){return w})},function(w){return b.resolve(x()).then(function(){throw w})})},m.prototype.catch=function(x){return this.then(null,x)},m.prototype.then=function(x,b){if(typeof x!="function"&&this.state===d||typeof b!="function"&&this.state===l)return this;var w=new this.constructor(i);return this.state!==p?f(w,this.state===d?x:b,this.outcome):this.queue.push(new v(w,x,b)),w},v.prototype.callFulfilled=function(x){o.resolve(this.promise,x)},v.prototype.otherCallFulfilled=function(x){f(this.promise,this.onFulfilled,x)},v.prototype.callRejected=function(x){o.reject(this.promise,x)},v.prototype.otherCallRejected=function(x){f(this.promise,this.onRejected,x)},o.resolve=function(x,b){var w=g(y,b);if(w.status==="error")return o.reject(x,w.value);var E=w.value;if(E)h(x,E);else{x.state=d,x.outcome=b;for(var A=-1,S=x.queue.length;++A<S;)x.queue[A].callFulfilled(b)}return x},o.reject=function(x,b){x.state=l,x.outcome=b;for(var w=-1,E=x.queue.length;++w<E;)x.queue[w].callRejected(b);return x},m.resolve=function(x){return x instanceof this?x:o.resolve(new this(i),x)},m.reject=function(x){var b=new this(i);return o.reject(b,x)},m.all=function(x){var b=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=x.length,E=!1;if(!w)return this.resolve([]);for(var A=new Array(w),S=0,L=-1,U=new this(i);++L<w;)F(x[L],L);return U;function F(P,M){b.resolve(P).then(function(T){A[M]=T,++S!==w||E||(E=!0,o.resolve(U,A))},function(T){E||(E=!0,o.reject(U,T))})}},m.race=function(x){var b=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=x.length,E=!1;if(!w)return this.resolve([]);for(var A=-1,S=new this(i);++A<w;)L=x[A],b.resolve(L).then(function(U){E||(E=!0,o.resolve(S,U))},function(U){E||(E=!0,o.reject(S,U))});var L;return S}},{immediate:36}],38:[function(e,s,a){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,a){var r=e("./zlib/deflate"),i=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),d=e("./zlib/zstream"),p=Object.prototype.toString,m=0,v=-1,f=0,y=8;function h(x){if(!(this instanceof h))return new h(x);this.options=i.assign({level:v,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},x||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var w=r.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(w!==m)throw new Error(l[w]);if(b.header&&r.deflateSetHeader(this.strm,b.header),b.dictionary){var E;if(E=typeof b.dictionary=="string"?o.string2buf(b.dictionary):p.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(w=r.deflateSetDictionary(this.strm,E))!==m)throw new Error(l[w]);this._dict_set=!0}}function g(x,b){var w=new h(b);if(w.push(x,!0),w.err)throw w.msg||l[w.err];return w.result}h.prototype.push=function(x,b){var w,E,A=this.strm,S=this.options.chunkSize;if(this.ended)return!1;E=b===~~b?b:b===!0?4:0,typeof x=="string"?A.input=o.string2buf(x):p.call(x)==="[object ArrayBuffer]"?A.input=new Uint8Array(x):A.input=x,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new i.Buf8(S),A.next_out=0,A.avail_out=S),(w=r.deflate(A,E))!==1&&w!==m)return this.onEnd(w),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(i.shrinkBuf(A.output,A.next_out))):this.onData(i.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&w!==1);return E===4?(w=r.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===m):E!==2||(this.onEnd(m),!(A.avail_out=0))},h.prototype.onData=function(x){this.chunks.push(x)},h.prototype.onEnd=function(x){x===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},a.Deflate=h,a.deflate=g,a.deflateRaw=function(x,b){return(b=b||{}).raw=!0,g(x,b)},a.gzip=function(x,b){return(b=b||{}).gzip=!0,g(x,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,a){var r=e("./zlib/inflate"),i=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),d=e("./zlib/messages"),p=e("./zlib/zstream"),m=e("./zlib/gzheader"),v=Object.prototype.toString;function f(h){if(!(this instanceof f))return new f(h);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},h||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||h&&h.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var x=r.inflateInit2(this.strm,g.windowBits);if(x!==l.Z_OK)throw new Error(d[x]);this.header=new m,r.inflateGetHeader(this.strm,this.header)}function y(h,g){var x=new f(g);if(x.push(h,!0),x.err)throw x.msg||d[x.err];return x.result}f.prototype.push=function(h,g){var x,b,w,E,A,S,L=this.strm,U=this.options.chunkSize,F=this.options.dictionary,P=!1;if(this.ended)return!1;b=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?L.input=o.binstring2buf(h):v.call(h)==="[object ArrayBuffer]"?L.input=new Uint8Array(h):L.input=h,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new i.Buf8(U),L.next_out=0,L.avail_out=U),(x=r.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&F&&(S=typeof F=="string"?o.string2buf(F):v.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,x=r.inflateSetDictionary(this.strm,S)),x===l.Z_BUF_ERROR&&P===!0&&(x=l.Z_OK,P=!1),x!==l.Z_STREAM_END&&x!==l.Z_OK)return this.onEnd(x),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&x!==l.Z_STREAM_END&&(L.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=o.utf8border(L.output,L.next_out),E=L.next_out-w,A=o.buf2string(L.output,w),L.next_out=E,L.avail_out=U-E,E&&i.arraySet(L.output,L.output,w,E,0),this.onData(A)):this.onData(i.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(P=!0)}while((0<L.avail_in||L.avail_out===0)&&x!==l.Z_STREAM_END);return x===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(x=r.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(h){this.chunks.push(h)},f.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},a.Inflate=f,a.inflate=y,a.inflateRaw=function(h,g){return(g=g||{}).raw=!0,y(h,g)},a.ungzip=y},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,a){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(l){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var p=d.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var m in p)p.hasOwnProperty(m)&&(l[m]=p[m])}}return l},a.shrinkBuf=function(l,d){return l.length===d?l:l.subarray?l.subarray(0,d):(l.length=d,l)};var i={arraySet:function(l,d,p,m,v){if(d.subarray&&l.subarray)l.set(d.subarray(p,p+m),v);else for(var f=0;f<m;f++)l[v+f]=d[p+f]},flattenChunks:function(l){var d,p,m,v,f,y;for(d=m=0,p=l.length;d<p;d++)m+=l[d].length;for(y=new Uint8Array(m),d=v=0,p=l.length;d<p;d++)f=l[d],y.set(f,v),v+=f.length;return y}},o={arraySet:function(l,d,p,m,v){for(var f=0;f<m;f++)l[v+f]=d[p+f]},flattenChunks:function(l){return[].concat.apply([],l)}};a.setTyped=function(l){l?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,i)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,o))},a.setTyped(r)},{}],42:[function(e,s,a){var r=e("./common"),i=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new r.Buf8(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function p(m,v){if(v<65537&&(m.subarray&&o||!m.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(m,v));for(var f="",y=0;y<v;y++)f+=String.fromCharCode(m[y]);return f}l[254]=l[254]=1,a.string2buf=function(m){var v,f,y,h,g,x=m.length,b=0;for(h=0;h<x;h++)(64512&(f=m.charCodeAt(h)))==55296&&h+1<x&&(64512&(y=m.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(y-56320),h++),b+=f<128?1:f<2048?2:f<65536?3:4;for(v=new r.Buf8(b),h=g=0;g<b;h++)(64512&(f=m.charCodeAt(h)))==55296&&h+1<x&&(64512&(y=m.charCodeAt(h+1)))==56320&&(f=65536+(f-55296<<10)+(y-56320),h++),f<128?v[g++]=f:(f<2048?v[g++]=192|f>>>6:(f<65536?v[g++]=224|f>>>12:(v[g++]=240|f>>>18,v[g++]=128|f>>>12&63),v[g++]=128|f>>>6&63),v[g++]=128|63&f);return v},a.buf2binstring=function(m){return p(m,m.length)},a.binstring2buf=function(m){for(var v=new r.Buf8(m.length),f=0,y=v.length;f<y;f++)v[f]=m.charCodeAt(f);return v},a.buf2string=function(m,v){var f,y,h,g,x=v||m.length,b=new Array(2*x);for(f=y=0;f<x;)if((h=m[f++])<128)b[y++]=h;else if(4<(g=l[h]))b[y++]=65533,f+=g-1;else{for(h&=g===2?31:g===3?15:7;1<g&&f<x;)h=h<<6|63&m[f++],g--;1<g?b[y++]=65533:h<65536?b[y++]=h:(h-=65536,b[y++]=55296|h>>10&1023,b[y++]=56320|1023&h)}return p(b,y)},a.utf8border=function(m,v){var f;for((v=v||m.length)>m.length&&(v=m.length),f=v-1;0<=f&&(192&m[f])==128;)f--;return f<0||f===0?v:f+l[m[f]]>v?f:v}},{"./common":41}],43:[function(e,s,a){s.exports=function(r,i,o,l){for(var d=65535&r|0,p=r>>>16&65535|0,m=0;o!==0;){for(o-=m=2e3<o?2e3:o;p=p+(d=d+i[l++]|0)|0,--m;);d%=65521,p%=65521}return d|p<<16|0}},{}],44:[function(e,s,a){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,a){var r=(function(){for(var i,o=[],l=0;l<256;l++){i=l;for(var d=0;d<8;d++)i=1&i?3988292384^i>>>1:i>>>1;o[l]=i}return o})();s.exports=function(i,o,l,d){var p=r,m=d+l;i^=-1;for(var v=d;v<m;v++)i=i>>>8^p[255&(i^o[v])];return-1^i}},{}],46:[function(e,s,a){var r,i=e("../utils/common"),o=e("./trees"),l=e("./adler32"),d=e("./crc32"),p=e("./messages"),m=0,v=4,f=0,y=-2,h=-1,g=4,x=2,b=8,w=9,E=286,A=30,S=19,L=2*E+1,U=15,F=3,P=258,M=P+F+1,T=42,R=113,c=1,B=2,q=3,G=4;function Q(u,H){return u.msg=p[H],H}function z(u){return(u<<1)-(4<u?9:0)}function j(u){for(var H=u.length;0<=--H;)u[H]=0}function O(u){var H=u.state,X=H.pending;X>u.avail_out&&(X=u.avail_out),X!==0&&(i.arraySet(u.output,H.pending_buf,H.pending_out,X,u.next_out),u.next_out+=X,H.pending_out+=X,u.total_out+=X,u.avail_out-=X,H.pending-=X,H.pending===0&&(H.pending_out=0))}function D(u,H){o._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,H),u.block_start=u.strstart,O(u.strm)}function et(u,H){u.pending_buf[u.pending++]=H}function $(u,H){u.pending_buf[u.pending++]=H>>>8&255,u.pending_buf[u.pending++]=255&H}function K(u,H){var X,C,_=u.max_chain_length,I=u.strstart,V=u.prev_length,Z=u.nice_match,k=u.strstart>u.w_size-M?u.strstart-(u.w_size-M):0,N=u.window,Y=u.w_mask,J=u.prev,tt=u.strstart+P,it=N[I+V-1],nt=N[I+V];u.prev_length>=u.good_match&&(_>>=2),Z>u.lookahead&&(Z=u.lookahead);do if(N[(X=H)+V]===nt&&N[X+V-1]===it&&N[X]===N[I]&&N[++X]===N[I+1]){I+=2,X++;do;while(N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&N[++I]===N[++X]&&I<tt);if(C=P-(tt-I),I=tt-P,V<C){if(u.match_start=H,Z<=(V=C))break;it=N[I+V-1],nt=N[I+V]}}while((H=J[H&Y])>k&&--_!=0);return V<=u.lookahead?V:u.lookahead}function ot(u){var H,X,C,_,I,V,Z,k,N,Y,J=u.w_size;do{if(_=u.window_size-u.lookahead-u.strstart,u.strstart>=J+(J-M)){for(i.arraySet(u.window,u.window,J,J,0),u.match_start-=J,u.strstart-=J,u.block_start-=J,H=X=u.hash_size;C=u.head[--H],u.head[H]=J<=C?C-J:0,--X;);for(H=X=J;C=u.prev[--H],u.prev[H]=J<=C?C-J:0,--X;);_+=J}if(u.strm.avail_in===0)break;if(V=u.strm,Z=u.window,k=u.strstart+u.lookahead,N=_,Y=void 0,Y=V.avail_in,N<Y&&(Y=N),X=Y===0?0:(V.avail_in-=Y,i.arraySet(Z,V.input,V.next_in,Y,k),V.state.wrap===1?V.adler=l(V.adler,Z,Y,k):V.state.wrap===2&&(V.adler=d(V.adler,Z,Y,k)),V.next_in+=Y,V.total_in+=Y,Y),u.lookahead+=X,u.lookahead+u.insert>=F)for(I=u.strstart-u.insert,u.ins_h=u.window[I],u.ins_h=(u.ins_h<<u.hash_shift^u.window[I+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[I+F-1])&u.hash_mask,u.prev[I&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=I,I++,u.insert--,!(u.lookahead+u.insert<F)););}while(u.lookahead<M&&u.strm.avail_in!==0)}function ct(u,H){for(var X,C;;){if(u.lookahead<M){if(ot(u),u.lookahead<M&&H===m)return c;if(u.lookahead===0)break}if(X=0,u.lookahead>=F&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+F-1])&u.hash_mask,X=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),X!==0&&u.strstart-X<=u.w_size-M&&(u.match_length=K(u,X)),u.match_length>=F)if(C=o._tr_tally(u,u.strstart-u.match_start,u.match_length-F),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=F){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+F-1])&u.hash_mask,X=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else C=o._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(C&&(D(u,!1),u.strm.avail_out===0))return c}return u.insert=u.strstart<F-1?u.strstart:F-1,H===v?(D(u,!0),u.strm.avail_out===0?q:G):u.last_lit&&(D(u,!1),u.strm.avail_out===0)?c:B}function rt(u,H){for(var X,C,_;;){if(u.lookahead<M){if(ot(u),u.lookahead<M&&H===m)return c;if(u.lookahead===0)break}if(X=0,u.lookahead>=F&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+F-1])&u.hash_mask,X=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=F-1,X!==0&&u.prev_length<u.max_lazy_match&&u.strstart-X<=u.w_size-M&&(u.match_length=K(u,X),u.match_length<=5&&(u.strategy===1||u.match_length===F&&4096<u.strstart-u.match_start)&&(u.match_length=F-1)),u.prev_length>=F&&u.match_length<=u.prev_length){for(_=u.strstart+u.lookahead-F,C=o._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-F),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=_&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+F-1])&u.hash_mask,X=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=F-1,u.strstart++,C&&(D(u,!1),u.strm.avail_out===0))return c}else if(u.match_available){if((C=o._tr_tally(u,0,u.window[u.strstart-1]))&&D(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return c}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(C=o._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<F-1?u.strstart:F-1,H===v?(D(u,!0),u.strm.avail_out===0?q:G):u.last_lit&&(D(u,!1),u.strm.avail_out===0)?c:B}function at(u,H,X,C,_){this.good_length=u,this.max_lazy=H,this.nice_length=X,this.max_chain=C,this.func=_}function st(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*L),this.dyn_dtree=new i.Buf16(2*(2*A+1)),this.bl_tree=new i.Buf16(2*(2*S+1)),j(this.dyn_ltree),j(this.dyn_dtree),j(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(U+1),this.heap=new i.Buf16(2*E+1),j(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*E+1),j(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function lt(u){var H;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=x,(H=u.state).pending=0,H.pending_out=0,H.wrap<0&&(H.wrap=-H.wrap),H.status=H.wrap?T:R,u.adler=H.wrap===2?0:1,H.last_flush=m,o._tr_init(H),f):Q(u,y)}function xt(u){var H=lt(u);return H===f&&(function(X){X.window_size=2*X.w_size,j(X.head),X.max_lazy_match=r[X.level].max_lazy,X.good_match=r[X.level].good_length,X.nice_match=r[X.level].nice_length,X.max_chain_length=r[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=F-1,X.match_available=0,X.ins_h=0})(u.state),H}function gt(u,H,X,C,_,I){if(!u)return y;var V=1;if(H===h&&(H=6),C<0?(V=0,C=-C):15<C&&(V=2,C-=16),_<1||w<_||X!==b||C<8||15<C||H<0||9<H||I<0||g<I)return Q(u,y);C===8&&(C=9);var Z=new st;return(u.state=Z).strm=u,Z.wrap=V,Z.gzhead=null,Z.w_bits=C,Z.w_size=1<<Z.w_bits,Z.w_mask=Z.w_size-1,Z.hash_bits=_+7,Z.hash_size=1<<Z.hash_bits,Z.hash_mask=Z.hash_size-1,Z.hash_shift=~~((Z.hash_bits+F-1)/F),Z.window=new i.Buf8(2*Z.w_size),Z.head=new i.Buf16(Z.hash_size),Z.prev=new i.Buf16(Z.w_size),Z.lit_bufsize=1<<_+6,Z.pending_buf_size=4*Z.lit_bufsize,Z.pending_buf=new i.Buf8(Z.pending_buf_size),Z.d_buf=1*Z.lit_bufsize,Z.l_buf=3*Z.lit_bufsize,Z.level=H,Z.strategy=I,Z.method=X,xt(u)}r=[new at(0,0,0,0,function(u,H){var X=65535;for(X>u.pending_buf_size-5&&(X=u.pending_buf_size-5);;){if(u.lookahead<=1){if(ot(u),u.lookahead===0&&H===m)return c;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var C=u.block_start+X;if((u.strstart===0||u.strstart>=C)&&(u.lookahead=u.strstart-C,u.strstart=C,D(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-M&&(D(u,!1),u.strm.avail_out===0))return c}return u.insert=0,H===v?(D(u,!0),u.strm.avail_out===0?q:G):(u.strstart>u.block_start&&(D(u,!1),u.strm.avail_out),c)}),new at(4,4,8,4,ct),new at(4,5,16,8,ct),new at(4,6,32,32,ct),new at(4,4,16,16,rt),new at(8,16,32,32,rt),new at(8,16,128,128,rt),new at(8,32,128,256,rt),new at(32,128,258,1024,rt),new at(32,258,258,4096,rt)],a.deflateInit=function(u,H){return gt(u,H,b,15,8,0)},a.deflateInit2=gt,a.deflateReset=xt,a.deflateResetKeep=lt,a.deflateSetHeader=function(u,H){return u&&u.state?u.state.wrap!==2?y:(u.state.gzhead=H,f):y},a.deflate=function(u,H){var X,C,_,I;if(!u||!u.state||5<H||H<0)return u?Q(u,y):y;if(C=u.state,!u.output||!u.input&&u.avail_in!==0||C.status===666&&H!==v)return Q(u,u.avail_out===0?-5:y);if(C.strm=u,X=C.last_flush,C.last_flush=H,C.status===T)if(C.wrap===2)u.adler=0,et(C,31),et(C,139),et(C,8),C.gzhead?(et(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),et(C,255&C.gzhead.time),et(C,C.gzhead.time>>8&255),et(C,C.gzhead.time>>16&255),et(C,C.gzhead.time>>24&255),et(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),et(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(et(C,255&C.gzhead.extra.length),et(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(u.adler=d(u.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(et(C,0),et(C,0),et(C,0),et(C,0),et(C,0),et(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),et(C,3),C.status=R);else{var V=b+(C.w_bits-8<<4)<<8;V|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(V|=32),V+=31-V%31,C.status=R,$(C,V),C.strstart!==0&&($(C,u.adler>>>16),$(C,65535&u.adler)),u.adler=1}if(C.status===69)if(C.gzhead.extra){for(_=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),O(u),_=C.pending,C.pending!==C.pending_buf_size));)et(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){_=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),O(u),_=C.pending,C.pending===C.pending_buf_size)){I=1;break}I=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,et(C,I)}while(I!==0);C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),I===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){_=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),O(u),_=C.pending,C.pending===C.pending_buf_size)){I=1;break}I=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,et(C,I)}while(I!==0);C.gzhead.hcrc&&C.pending>_&&(u.adler=d(u.adler,C.pending_buf,C.pending-_,_)),I===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&O(u),C.pending+2<=C.pending_buf_size&&(et(C,255&u.adler),et(C,u.adler>>8&255),u.adler=0,C.status=R)):C.status=R),C.pending!==0){if(O(u),u.avail_out===0)return C.last_flush=-1,f}else if(u.avail_in===0&&z(H)<=z(X)&&H!==v)return Q(u,-5);if(C.status===666&&u.avail_in!==0)return Q(u,-5);if(u.avail_in!==0||C.lookahead!==0||H!==m&&C.status!==666){var Z=C.strategy===2?(function(k,N){for(var Y;;){if(k.lookahead===0&&(ot(k),k.lookahead===0)){if(N===m)return c;break}if(k.match_length=0,Y=o._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,Y&&(D(k,!1),k.strm.avail_out===0))return c}return k.insert=0,N===v?(D(k,!0),k.strm.avail_out===0?q:G):k.last_lit&&(D(k,!1),k.strm.avail_out===0)?c:B})(C,H):C.strategy===3?(function(k,N){for(var Y,J,tt,it,nt=k.window;;){if(k.lookahead<=P){if(ot(k),k.lookahead<=P&&N===m)return c;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=F&&0<k.strstart&&(J=nt[tt=k.strstart-1])===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]){it=k.strstart+P;do;while(J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&J===nt[++tt]&&tt<it);k.match_length=P-(it-tt),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=F?(Y=o._tr_tally(k,1,k.match_length-F),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(Y=o._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),Y&&(D(k,!1),k.strm.avail_out===0))return c}return k.insert=0,N===v?(D(k,!0),k.strm.avail_out===0?q:G):k.last_lit&&(D(k,!1),k.strm.avail_out===0)?c:B})(C,H):r[C.level].func(C,H);if(Z!==q&&Z!==G||(C.status=666),Z===c||Z===q)return u.avail_out===0&&(C.last_flush=-1),f;if(Z===B&&(H===1?o._tr_align(C):H!==5&&(o._tr_stored_block(C,0,0,!1),H===3&&(j(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),O(u),u.avail_out===0))return C.last_flush=-1,f}return H!==v?f:C.wrap<=0?1:(C.wrap===2?(et(C,255&u.adler),et(C,u.adler>>8&255),et(C,u.adler>>16&255),et(C,u.adler>>24&255),et(C,255&u.total_in),et(C,u.total_in>>8&255),et(C,u.total_in>>16&255),et(C,u.total_in>>24&255)):($(C,u.adler>>>16),$(C,65535&u.adler)),O(u),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?f:1)},a.deflateEnd=function(u){var H;return u&&u.state?(H=u.state.status)!==T&&H!==69&&H!==73&&H!==91&&H!==103&&H!==R&&H!==666?Q(u,y):(u.state=null,H===R?Q(u,-3):f):y},a.deflateSetDictionary=function(u,H){var X,C,_,I,V,Z,k,N,Y=H.length;if(!u||!u.state||(I=(X=u.state).wrap)===2||I===1&&X.status!==T||X.lookahead)return y;for(I===1&&(u.adler=l(u.adler,H,Y,0)),X.wrap=0,Y>=X.w_size&&(I===0&&(j(X.head),X.strstart=0,X.block_start=0,X.insert=0),N=new i.Buf8(X.w_size),i.arraySet(N,H,Y-X.w_size,X.w_size,0),H=N,Y=X.w_size),V=u.avail_in,Z=u.next_in,k=u.input,u.avail_in=Y,u.next_in=0,u.input=H,ot(X);X.lookahead>=F;){for(C=X.strstart,_=X.lookahead-(F-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[C+F-1])&X.hash_mask,X.prev[C&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=C,C++,--_;);X.strstart=C,X.lookahead=F-1,ot(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=F-1,X.match_available=0,u.next_in=Z,u.input=k,u.avail_in=V,X.wrap=I,f},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,a){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,a){s.exports=function(r,i){var o,l,d,p,m,v,f,y,h,g,x,b,w,E,A,S,L,U,F,P,M,T,R,c,B;o=r.state,l=r.next_in,c=r.input,d=l+(r.avail_in-5),p=r.next_out,B=r.output,m=p-(i-r.avail_out),v=p+(r.avail_out-257),f=o.dmax,y=o.wsize,h=o.whave,g=o.wnext,x=o.window,b=o.hold,w=o.bits,E=o.lencode,A=o.distcode,S=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;t:do{w<15&&(b+=c[l++]<<w,w+=8,b+=c[l++]<<w,w+=8),U=E[b&S];e:for(;;){if(b>>>=F=U>>>24,w-=F,(F=U>>>16&255)===0)B[p++]=65535&U;else{if(!(16&F)){if((64&F)==0){U=E[(65535&U)+(b&(1<<F)-1)];continue e}if(32&F){o.mode=12;break t}r.msg="invalid literal/length code",o.mode=30;break t}P=65535&U,(F&=15)&&(w<F&&(b+=c[l++]<<w,w+=8),P+=b&(1<<F)-1,b>>>=F,w-=F),w<15&&(b+=c[l++]<<w,w+=8,b+=c[l++]<<w,w+=8),U=A[b&L];n:for(;;){if(b>>>=F=U>>>24,w-=F,!(16&(F=U>>>16&255))){if((64&F)==0){U=A[(65535&U)+(b&(1<<F)-1)];continue n}r.msg="invalid distance code",o.mode=30;break t}if(M=65535&U,w<(F&=15)&&(b+=c[l++]<<w,(w+=8)<F&&(b+=c[l++]<<w,w+=8)),f<(M+=b&(1<<F)-1)){r.msg="invalid distance too far back",o.mode=30;break t}if(b>>>=F,w-=F,(F=p-m)<M){if(h<(F=M-F)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break t}if(R=x,(T=0)===g){if(T+=y-F,F<P){for(P-=F;B[p++]=x[T++],--F;);T=p-M,R=B}}else if(g<F){if(T+=y+g-F,(F-=g)<P){for(P-=F;B[p++]=x[T++],--F;);if(T=0,g<P){for(P-=F=g;B[p++]=x[T++],--F;);T=p-M,R=B}}}else if(T+=g-F,F<P){for(P-=F;B[p++]=x[T++],--F;);T=p-M,R=B}for(;2<P;)B[p++]=R[T++],B[p++]=R[T++],B[p++]=R[T++],P-=3;P&&(B[p++]=R[T++],1<P&&(B[p++]=R[T++]))}else{for(T=p-M;B[p++]=B[T++],B[p++]=B[T++],B[p++]=B[T++],2<(P-=3););P&&(B[p++]=B[T++],1<P&&(B[p++]=B[T++]))}break}}break}}while(l<d&&p<v);l-=P=w>>3,b&=(1<<(w-=P<<3))-1,r.next_in=l,r.next_out=p,r.avail_in=l<d?d-l+5:5-(l-d),r.avail_out=p<v?v-p+257:257-(p-v),o.hold=b,o.bits=w}},{}],49:[function(e,s,a){var r=e("../utils/common"),i=e("./adler32"),o=e("./crc32"),l=e("./inffast"),d=e("./inftrees"),p=1,m=2,v=0,f=-2,y=1,h=852,g=592;function x(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(T){var R;return T&&T.state?(R=T.state,T.total_in=T.total_out=R.total=0,T.msg="",R.wrap&&(T.adler=1&R.wrap),R.mode=y,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new r.Buf32(h),R.distcode=R.distdyn=new r.Buf32(g),R.sane=1,R.back=-1,v):f}function E(T){var R;return T&&T.state?((R=T.state).wsize=0,R.whave=0,R.wnext=0,w(T)):f}function A(T,R){var c,B;return T&&T.state?(B=T.state,R<0?(c=0,R=-R):(c=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?f:(B.window!==null&&B.wbits!==R&&(B.window=null),B.wrap=c,B.wbits=R,E(T))):f}function S(T,R){var c,B;return T?(B=new b,(T.state=B).window=null,(c=A(T,R))!==v&&(T.state=null),c):f}var L,U,F=!0;function P(T){if(F){var R;for(L=new r.Buf32(512),U=new r.Buf32(32),R=0;R<144;)T.lens[R++]=8;for(;R<256;)T.lens[R++]=9;for(;R<280;)T.lens[R++]=7;for(;R<288;)T.lens[R++]=8;for(d(p,T.lens,0,288,L,0,T.work,{bits:9}),R=0;R<32;)T.lens[R++]=5;d(m,T.lens,0,32,U,0,T.work,{bits:5}),F=!1}T.lencode=L,T.lenbits=9,T.distcode=U,T.distbits=5}function M(T,R,c,B){var q,G=T.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new r.Buf8(G.wsize)),B>=G.wsize?(r.arraySet(G.window,R,c-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(B<(q=G.wsize-G.wnext)&&(q=B),r.arraySet(G.window,R,c-B,q,G.wnext),(B-=q)?(r.arraySet(G.window,R,c-B,B,0),G.wnext=B,G.whave=G.wsize):(G.wnext+=q,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=q))),0}a.inflateReset=E,a.inflateReset2=A,a.inflateResetKeep=w,a.inflateInit=function(T){return S(T,15)},a.inflateInit2=S,a.inflate=function(T,R){var c,B,q,G,Q,z,j,O,D,et,$,K,ot,ct,rt,at,st,lt,xt,gt,u,H,X,C,_=0,I=new r.Buf8(4),V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return f;(c=T.state).mode===12&&(c.mode=13),Q=T.next_out,q=T.output,j=T.avail_out,G=T.next_in,B=T.input,z=T.avail_in,O=c.hold,D=c.bits,et=z,$=j,H=v;t:for(;;)switch(c.mode){case y:if(c.wrap===0){c.mode=13;break}for(;D<16;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(2&c.wrap&&O===35615){I[c.check=0]=255&O,I[1]=O>>>8&255,c.check=o(c.check,I,2,0),D=O=0,c.mode=2;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&O)<<8)+(O>>8))%31){T.msg="incorrect header check",c.mode=30;break}if((15&O)!=8){T.msg="unknown compression method",c.mode=30;break}if(D-=4,u=8+(15&(O>>>=4)),c.wbits===0)c.wbits=u;else if(u>c.wbits){T.msg="invalid window size",c.mode=30;break}c.dmax=1<<u,T.adler=c.check=1,c.mode=512&O?10:12,D=O=0;break;case 2:for(;D<16;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(c.flags=O,(255&c.flags)!=8){T.msg="unknown compression method",c.mode=30;break}if(57344&c.flags){T.msg="unknown header flags set",c.mode=30;break}c.head&&(c.head.text=O>>8&1),512&c.flags&&(I[0]=255&O,I[1]=O>>>8&255,c.check=o(c.check,I,2,0)),D=O=0,c.mode=3;case 3:for(;D<32;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.head&&(c.head.time=O),512&c.flags&&(I[0]=255&O,I[1]=O>>>8&255,I[2]=O>>>16&255,I[3]=O>>>24&255,c.check=o(c.check,I,4,0)),D=O=0,c.mode=4;case 4:for(;D<16;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.head&&(c.head.xflags=255&O,c.head.os=O>>8),512&c.flags&&(I[0]=255&O,I[1]=O>>>8&255,c.check=o(c.check,I,2,0)),D=O=0,c.mode=5;case 5:if(1024&c.flags){for(;D<16;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.length=O,c.head&&(c.head.extra_len=O),512&c.flags&&(I[0]=255&O,I[1]=O>>>8&255,c.check=o(c.check,I,2,0)),D=O=0}else c.head&&(c.head.extra=null);c.mode=6;case 6:if(1024&c.flags&&(z<(K=c.length)&&(K=z),K&&(c.head&&(u=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,B,G,K,u)),512&c.flags&&(c.check=o(c.check,B,K,G)),z-=K,G+=K,c.length-=K),c.length))break t;c.length=0,c.mode=7;case 7:if(2048&c.flags){if(z===0)break t;for(K=0;u=B[G+K++],c.head&&u&&c.length<65536&&(c.head.name+=String.fromCharCode(u)),u&&K<z;);if(512&c.flags&&(c.check=o(c.check,B,K,G)),z-=K,G+=K,u)break t}else c.head&&(c.head.name=null);c.length=0,c.mode=8;case 8:if(4096&c.flags){if(z===0)break t;for(K=0;u=B[G+K++],c.head&&u&&c.length<65536&&(c.head.comment+=String.fromCharCode(u)),u&&K<z;);if(512&c.flags&&(c.check=o(c.check,B,K,G)),z-=K,G+=K,u)break t}else c.head&&(c.head.comment=null);c.mode=9;case 9:if(512&c.flags){for(;D<16;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(O!==(65535&c.check)){T.msg="header crc mismatch",c.mode=30;break}D=O=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),T.adler=c.check=0,c.mode=12;break;case 10:for(;D<32;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}T.adler=c.check=x(O),D=O=0,c.mode=11;case 11:if(c.havedict===0)return T.next_out=Q,T.avail_out=j,T.next_in=G,T.avail_in=z,c.hold=O,c.bits=D,2;T.adler=c.check=1,c.mode=12;case 12:if(R===5||R===6)break t;case 13:if(c.last){O>>>=7&D,D-=7&D,c.mode=27;break}for(;D<3;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}switch(c.last=1&O,D-=1,3&(O>>>=1)){case 0:c.mode=14;break;case 1:if(P(c),c.mode=20,R!==6)break;O>>>=2,D-=2;break t;case 2:c.mode=17;break;case 3:T.msg="invalid block type",c.mode=30}O>>>=2,D-=2;break;case 14:for(O>>>=7&D,D-=7&D;D<32;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if((65535&O)!=(O>>>16^65535)){T.msg="invalid stored block lengths",c.mode=30;break}if(c.length=65535&O,D=O=0,c.mode=15,R===6)break t;case 15:c.mode=16;case 16:if(K=c.length){if(z<K&&(K=z),j<K&&(K=j),K===0)break t;r.arraySet(q,B,G,K,Q),z-=K,G+=K,j-=K,Q+=K,c.length-=K;break}c.mode=12;break;case 17:for(;D<14;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(c.nlen=257+(31&O),O>>>=5,D-=5,c.ndist=1+(31&O),O>>>=5,D-=5,c.ncode=4+(15&O),O>>>=4,D-=4,286<c.nlen||30<c.ndist){T.msg="too many length or distance symbols",c.mode=30;break}c.have=0,c.mode=18;case 18:for(;c.have<c.ncode;){for(;D<3;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.lens[V[c.have++]]=7&O,O>>>=3,D-=3}for(;c.have<19;)c.lens[V[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,X={bits:c.lenbits},H=d(0,c.lens,0,19,c.lencode,0,c.work,X),c.lenbits=X.bits,H){T.msg="invalid code lengths set",c.mode=30;break}c.have=0,c.mode=19;case 19:for(;c.have<c.nlen+c.ndist;){for(;at=(_=c.lencode[O&(1<<c.lenbits)-1])>>>16&255,st=65535&_,!((rt=_>>>24)<=D);){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(st<16)O>>>=rt,D-=rt,c.lens[c.have++]=st;else{if(st===16){for(C=rt+2;D<C;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(O>>>=rt,D-=rt,c.have===0){T.msg="invalid bit length repeat",c.mode=30;break}u=c.lens[c.have-1],K=3+(3&O),O>>>=2,D-=2}else if(st===17){for(C=rt+3;D<C;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}D-=rt,u=0,K=3+(7&(O>>>=rt)),O>>>=3,D-=3}else{for(C=rt+7;D<C;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}D-=rt,u=0,K=11+(127&(O>>>=rt)),O>>>=7,D-=7}if(c.have+K>c.nlen+c.ndist){T.msg="invalid bit length repeat",c.mode=30;break}for(;K--;)c.lens[c.have++]=u}}if(c.mode===30)break;if(c.lens[256]===0){T.msg="invalid code -- missing end-of-block",c.mode=30;break}if(c.lenbits=9,X={bits:c.lenbits},H=d(p,c.lens,0,c.nlen,c.lencode,0,c.work,X),c.lenbits=X.bits,H){T.msg="invalid literal/lengths set",c.mode=30;break}if(c.distbits=6,c.distcode=c.distdyn,X={bits:c.distbits},H=d(m,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,X),c.distbits=X.bits,H){T.msg="invalid distances set",c.mode=30;break}if(c.mode=20,R===6)break t;case 20:c.mode=21;case 21:if(6<=z&&258<=j){T.next_out=Q,T.avail_out=j,T.next_in=G,T.avail_in=z,c.hold=O,c.bits=D,l(T,$),Q=T.next_out,q=T.output,j=T.avail_out,G=T.next_in,B=T.input,z=T.avail_in,O=c.hold,D=c.bits,c.mode===12&&(c.back=-1);break}for(c.back=0;at=(_=c.lencode[O&(1<<c.lenbits)-1])>>>16&255,st=65535&_,!((rt=_>>>24)<=D);){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(at&&(240&at)==0){for(lt=rt,xt=at,gt=st;at=(_=c.lencode[gt+((O&(1<<lt+xt)-1)>>lt)])>>>16&255,st=65535&_,!(lt+(rt=_>>>24)<=D);){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}O>>>=lt,D-=lt,c.back+=lt}if(O>>>=rt,D-=rt,c.back+=rt,c.length=st,at===0){c.mode=26;break}if(32&at){c.back=-1,c.mode=12;break}if(64&at){T.msg="invalid literal/length code",c.mode=30;break}c.extra=15&at,c.mode=22;case 22:if(c.extra){for(C=c.extra;D<C;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.length+=O&(1<<c.extra)-1,O>>>=c.extra,D-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=23;case 23:for(;at=(_=c.distcode[O&(1<<c.distbits)-1])>>>16&255,st=65535&_,!((rt=_>>>24)<=D);){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if((240&at)==0){for(lt=rt,xt=at,gt=st;at=(_=c.distcode[gt+((O&(1<<lt+xt)-1)>>lt)])>>>16&255,st=65535&_,!(lt+(rt=_>>>24)<=D);){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}O>>>=lt,D-=lt,c.back+=lt}if(O>>>=rt,D-=rt,c.back+=rt,64&at){T.msg="invalid distance code",c.mode=30;break}c.offset=st,c.extra=15&at,c.mode=24;case 24:if(c.extra){for(C=c.extra;D<C;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}c.offset+=O&(1<<c.extra)-1,O>>>=c.extra,D-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){T.msg="invalid distance too far back",c.mode=30;break}c.mode=25;case 25:if(j===0)break t;if(K=$-j,c.offset>K){if((K=c.offset-K)>c.whave&&c.sane){T.msg="invalid distance too far back",c.mode=30;break}ot=K>c.wnext?(K-=c.wnext,c.wsize-K):c.wnext-K,K>c.length&&(K=c.length),ct=c.window}else ct=q,ot=Q-c.offset,K=c.length;for(j<K&&(K=j),j-=K,c.length-=K;q[Q++]=ct[ot++],--K;);c.length===0&&(c.mode=21);break;case 26:if(j===0)break t;q[Q++]=c.length,j--,c.mode=21;break;case 27:if(c.wrap){for(;D<32;){if(z===0)break t;z--,O|=B[G++]<<D,D+=8}if($-=j,T.total_out+=$,c.total+=$,$&&(T.adler=c.check=c.flags?o(c.check,q,$,Q-$):i(c.check,q,$,Q-$)),$=j,(c.flags?O:x(O))!==c.check){T.msg="incorrect data check",c.mode=30;break}D=O=0}c.mode=28;case 28:if(c.wrap&&c.flags){for(;D<32;){if(z===0)break t;z--,O+=B[G++]<<D,D+=8}if(O!==(4294967295&c.total)){T.msg="incorrect length check",c.mode=30;break}D=O=0}c.mode=29;case 29:H=1;break t;case 30:H=-3;break t;case 31:return-4;default:return f}return T.next_out=Q,T.avail_out=j,T.next_in=G,T.avail_in=z,c.hold=O,c.bits=D,(c.wsize||$!==T.avail_out&&c.mode<30&&(c.mode<27||R!==4))&&M(T,T.output,T.next_out,$-T.avail_out)?(c.mode=31,-4):(et-=T.avail_in,$-=T.avail_out,T.total_in+=et,T.total_out+=$,c.total+=$,c.wrap&&$&&(T.adler=c.check=c.flags?o(c.check,q,$,T.next_out-$):i(c.check,q,$,T.next_out-$)),T.data_type=c.bits+(c.last?64:0)+(c.mode===12?128:0)+(c.mode===20||c.mode===15?256:0),(et==0&&$===0||R===4)&&H===v&&(H=-5),H)},a.inflateEnd=function(T){if(!T||!T.state)return f;var R=T.state;return R.window&&(R.window=null),T.state=null,v},a.inflateGetHeader=function(T,R){var c;return T&&T.state?(2&(c=T.state).wrap)==0?f:((c.head=R).done=!1,v):f},a.inflateSetDictionary=function(T,R){var c,B=R.length;return T&&T.state?(c=T.state).wrap!==0&&c.mode!==11?f:c.mode===11&&i(1,R,B,0)!==c.check?-3:M(T,R,B,B)?(c.mode=31,-4):(c.havedict=1,v):f},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,a){var r=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(p,m,v,f,y,h,g,x){var b,w,E,A,S,L,U,F,P,M=x.bits,T=0,R=0,c=0,B=0,q=0,G=0,Q=0,z=0,j=0,O=0,D=null,et=0,$=new r.Buf16(16),K=new r.Buf16(16),ot=null,ct=0;for(T=0;T<=15;T++)$[T]=0;for(R=0;R<f;R++)$[m[v+R]]++;for(q=M,B=15;1<=B&&$[B]===0;B--);if(B<q&&(q=B),B===0)return y[h++]=20971520,y[h++]=20971520,x.bits=1,0;for(c=1;c<B&&$[c]===0;c++);for(q<c&&(q=c),T=z=1;T<=15;T++)if(z<<=1,(z-=$[T])<0)return-1;if(0<z&&(p===0||B!==1))return-1;for(K[1]=0,T=1;T<15;T++)K[T+1]=K[T]+$[T];for(R=0;R<f;R++)m[v+R]!==0&&(g[K[m[v+R]]++]=R);if(L=p===0?(D=ot=g,19):p===1?(D=i,et-=257,ot=o,ct-=257,256):(D=l,ot=d,-1),T=c,S=h,Q=R=O=0,E=-1,A=(j=1<<(G=q))-1,p===1&&852<j||p===2&&592<j)return 1;for(;;){for(U=T-Q,P=g[R]<L?(F=0,g[R]):g[R]>L?(F=ot[ct+g[R]],D[et+g[R]]):(F=96,0),b=1<<T-Q,c=w=1<<G;y[S+(O>>Q)+(w-=b)]=U<<24|F<<16|P|0,w!==0;);for(b=1<<T-1;O&b;)b>>=1;if(b!==0?(O&=b-1,O+=b):O=0,R++,--$[T]==0){if(T===B)break;T=m[v+g[R]]}if(q<T&&(O&A)!==E){for(Q===0&&(Q=q),S+=c,z=1<<(G=T-Q);G+Q<B&&!((z-=$[G+Q])<=0);)G++,z<<=1;if(j+=1<<G,p===1&&852<j||p===2&&592<j)return 1;y[E=O&A]=q<<24|G<<16|S-h|0}}return O!==0&&(y[S+O]=T-Q<<24|64<<16|0),x.bits=q,0}},{"../utils/common":41}],51:[function(e,s,a){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,a){var r=e("../utils/common"),i=0,o=1;function l(_){for(var I=_.length;0<=--I;)_[I]=0}var d=0,p=29,m=256,v=m+1+p,f=30,y=19,h=2*v+1,g=15,x=16,b=7,w=256,E=16,A=17,S=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],U=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],M=new Array(2*(v+2));l(M);var T=new Array(2*f);l(T);var R=new Array(512);l(R);var c=new Array(256);l(c);var B=new Array(p);l(B);var q,G,Q,z=new Array(f);function j(_,I,V,Z,k){this.static_tree=_,this.extra_bits=I,this.extra_base=V,this.elems=Z,this.max_length=k,this.has_stree=_&&_.length}function O(_,I){this.dyn_tree=_,this.max_code=0,this.stat_desc=I}function D(_){return _<256?R[_]:R[256+(_>>>7)]}function et(_,I){_.pending_buf[_.pending++]=255&I,_.pending_buf[_.pending++]=I>>>8&255}function $(_,I,V){_.bi_valid>x-V?(_.bi_buf|=I<<_.bi_valid&65535,et(_,_.bi_buf),_.bi_buf=I>>x-_.bi_valid,_.bi_valid+=V-x):(_.bi_buf|=I<<_.bi_valid&65535,_.bi_valid+=V)}function K(_,I,V){$(_,V[2*I],V[2*I+1])}function ot(_,I){for(var V=0;V|=1&_,_>>>=1,V<<=1,0<--I;);return V>>>1}function ct(_,I,V){var Z,k,N=new Array(g+1),Y=0;for(Z=1;Z<=g;Z++)N[Z]=Y=Y+V[Z-1]<<1;for(k=0;k<=I;k++){var J=_[2*k+1];J!==0&&(_[2*k]=ot(N[J]++,J))}}function rt(_){var I;for(I=0;I<v;I++)_.dyn_ltree[2*I]=0;for(I=0;I<f;I++)_.dyn_dtree[2*I]=0;for(I=0;I<y;I++)_.bl_tree[2*I]=0;_.dyn_ltree[2*w]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function at(_){8<_.bi_valid?et(_,_.bi_buf):0<_.bi_valid&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function st(_,I,V,Z){var k=2*I,N=2*V;return _[k]<_[N]||_[k]===_[N]&&Z[I]<=Z[V]}function lt(_,I,V){for(var Z=_.heap[V],k=V<<1;k<=_.heap_len&&(k<_.heap_len&&st(I,_.heap[k+1],_.heap[k],_.depth)&&k++,!st(I,Z,_.heap[k],_.depth));)_.heap[V]=_.heap[k],V=k,k<<=1;_.heap[V]=Z}function xt(_,I,V){var Z,k,N,Y,J=0;if(_.last_lit!==0)for(;Z=_.pending_buf[_.d_buf+2*J]<<8|_.pending_buf[_.d_buf+2*J+1],k=_.pending_buf[_.l_buf+J],J++,Z===0?K(_,k,I):(K(_,(N=c[k])+m+1,I),(Y=L[N])!==0&&$(_,k-=B[N],Y),K(_,N=D(--Z),V),(Y=U[N])!==0&&$(_,Z-=z[N],Y)),J<_.last_lit;);K(_,w,I)}function gt(_,I){var V,Z,k,N=I.dyn_tree,Y=I.stat_desc.static_tree,J=I.stat_desc.has_stree,tt=I.stat_desc.elems,it=-1;for(_.heap_len=0,_.heap_max=h,V=0;V<tt;V++)N[2*V]!==0?(_.heap[++_.heap_len]=it=V,_.depth[V]=0):N[2*V+1]=0;for(;_.heap_len<2;)N[2*(k=_.heap[++_.heap_len]=it<2?++it:0)]=1,_.depth[k]=0,_.opt_len--,J&&(_.static_len-=Y[2*k+1]);for(I.max_code=it,V=_.heap_len>>1;1<=V;V--)lt(_,N,V);for(k=tt;V=_.heap[1],_.heap[1]=_.heap[_.heap_len--],lt(_,N,1),Z=_.heap[1],_.heap[--_.heap_max]=V,_.heap[--_.heap_max]=Z,N[2*k]=N[2*V]+N[2*Z],_.depth[k]=(_.depth[V]>=_.depth[Z]?_.depth[V]:_.depth[Z])+1,N[2*V+1]=N[2*Z+1]=k,_.heap[1]=k++,lt(_,N,1),2<=_.heap_len;);_.heap[--_.heap_max]=_.heap[1],(function(nt,mt){var vt,_t,Ft,ft,Bt,Ot,Et=mt.dyn_tree,ne=mt.max_code,li=mt.stat_desc.static_tree,ci=mt.stat_desc.has_stree,ui=mt.stat_desc.extra_bits,We=mt.stat_desc.extra_base,Zt=mt.stat_desc.max_length,ie=0;for(ft=0;ft<=g;ft++)nt.bl_count[ft]=0;for(Et[2*nt.heap[nt.heap_max]+1]=0,vt=nt.heap_max+1;vt<h;vt++)Zt<(ft=Et[2*Et[2*(_t=nt.heap[vt])+1]+1]+1)&&(ft=Zt,ie++),Et[2*_t+1]=ft,ne<_t||(nt.bl_count[ft]++,Bt=0,We<=_t&&(Bt=ui[_t-We]),Ot=Et[2*_t],nt.opt_len+=Ot*(ft+Bt),ci&&(nt.static_len+=Ot*(li[2*_t+1]+Bt)));if(ie!==0){do{for(ft=Zt-1;nt.bl_count[ft]===0;)ft--;nt.bl_count[ft]--,nt.bl_count[ft+1]+=2,nt.bl_count[Zt]--,ie-=2}while(0<ie);for(ft=Zt;ft!==0;ft--)for(_t=nt.bl_count[ft];_t!==0;)ne<(Ft=nt.heap[--vt])||(Et[2*Ft+1]!==ft&&(nt.opt_len+=(ft-Et[2*Ft+1])*Et[2*Ft],Et[2*Ft+1]=ft),_t--)}})(_,I),ct(N,it,_.bl_count)}function u(_,I,V){var Z,k,N=-1,Y=I[1],J=0,tt=7,it=4;for(Y===0&&(tt=138,it=3),I[2*(V+1)+1]=65535,Z=0;Z<=V;Z++)k=Y,Y=I[2*(Z+1)+1],++J<tt&&k===Y||(J<it?_.bl_tree[2*k]+=J:k!==0?(k!==N&&_.bl_tree[2*k]++,_.bl_tree[2*E]++):J<=10?_.bl_tree[2*A]++:_.bl_tree[2*S]++,N=k,it=(J=0)===Y?(tt=138,3):k===Y?(tt=6,3):(tt=7,4))}function H(_,I,V){var Z,k,N=-1,Y=I[1],J=0,tt=7,it=4;for(Y===0&&(tt=138,it=3),Z=0;Z<=V;Z++)if(k=Y,Y=I[2*(Z+1)+1],!(++J<tt&&k===Y)){if(J<it)for(;K(_,k,_.bl_tree),--J!=0;);else k!==0?(k!==N&&(K(_,k,_.bl_tree),J--),K(_,E,_.bl_tree),$(_,J-3,2)):J<=10?(K(_,A,_.bl_tree),$(_,J-3,3)):(K(_,S,_.bl_tree),$(_,J-11,7));N=k,it=(J=0)===Y?(tt=138,3):k===Y?(tt=6,3):(tt=7,4)}}l(z);var X=!1;function C(_,I,V,Z){$(_,(d<<1)+(Z?1:0),3),(function(k,N,Y,J){at(k),et(k,Y),et(k,~Y),r.arraySet(k.pending_buf,k.window,N,Y,k.pending),k.pending+=Y})(_,I,V)}a._tr_init=function(_){X||((function(){var I,V,Z,k,N,Y=new Array(g+1);for(k=Z=0;k<p-1;k++)for(B[k]=Z,I=0;I<1<<L[k];I++)c[Z++]=k;for(c[Z-1]=k,k=N=0;k<16;k++)for(z[k]=N,I=0;I<1<<U[k];I++)R[N++]=k;for(N>>=7;k<f;k++)for(z[k]=N<<7,I=0;I<1<<U[k]-7;I++)R[256+N++]=k;for(V=0;V<=g;V++)Y[V]=0;for(I=0;I<=143;)M[2*I+1]=8,I++,Y[8]++;for(;I<=255;)M[2*I+1]=9,I++,Y[9]++;for(;I<=279;)M[2*I+1]=7,I++,Y[7]++;for(;I<=287;)M[2*I+1]=8,I++,Y[8]++;for(ct(M,v+1,Y),I=0;I<f;I++)T[2*I+1]=5,T[2*I]=ot(I,5);q=new j(M,L,m+1,v,g),G=new j(T,U,0,f,g),Q=new j(new Array(0),F,0,y,b)})(),X=!0),_.l_desc=new O(_.dyn_ltree,q),_.d_desc=new O(_.dyn_dtree,G),_.bl_desc=new O(_.bl_tree,Q),_.bi_buf=0,_.bi_valid=0,rt(_)},a._tr_stored_block=C,a._tr_flush_block=function(_,I,V,Z){var k,N,Y=0;0<_.level?(_.strm.data_type===2&&(_.strm.data_type=(function(J){var tt,it=4093624447;for(tt=0;tt<=31;tt++,it>>>=1)if(1&it&&J.dyn_ltree[2*tt]!==0)return i;if(J.dyn_ltree[18]!==0||J.dyn_ltree[20]!==0||J.dyn_ltree[26]!==0)return o;for(tt=32;tt<m;tt++)if(J.dyn_ltree[2*tt]!==0)return o;return i})(_)),gt(_,_.l_desc),gt(_,_.d_desc),Y=(function(J){var tt;for(u(J,J.dyn_ltree,J.l_desc.max_code),u(J,J.dyn_dtree,J.d_desc.max_code),gt(J,J.bl_desc),tt=y-1;3<=tt&&J.bl_tree[2*P[tt]+1]===0;tt--);return J.opt_len+=3*(tt+1)+5+5+4,tt})(_),k=_.opt_len+3+7>>>3,(N=_.static_len+3+7>>>3)<=k&&(k=N)):k=N=V+5,V+4<=k&&I!==-1?C(_,I,V,Z):_.strategy===4||N===k?($(_,2+(Z?1:0),3),xt(_,M,T)):($(_,4+(Z?1:0),3),(function(J,tt,it,nt){var mt;for($(J,tt-257,5),$(J,it-1,5),$(J,nt-4,4),mt=0;mt<nt;mt++)$(J,J.bl_tree[2*P[mt]+1],3);H(J,J.dyn_ltree,tt-1),H(J,J.dyn_dtree,it-1)})(_,_.l_desc.max_code+1,_.d_desc.max_code+1,Y+1),xt(_,_.dyn_ltree,_.dyn_dtree)),rt(_),Z&&at(_)},a._tr_tally=function(_,I,V){return _.pending_buf[_.d_buf+2*_.last_lit]=I>>>8&255,_.pending_buf[_.d_buf+2*_.last_lit+1]=255&I,_.pending_buf[_.l_buf+_.last_lit]=255&V,_.last_lit++,I===0?_.dyn_ltree[2*V]++:(_.matches++,I--,_.dyn_ltree[2*(c[V]+m+1)]++,_.dyn_dtree[2*D(I)]++),_.last_lit===_.lit_bufsize-1},a._tr_align=function(_){$(_,2,3),K(_,w,M),(function(I){I.bi_valid===16?(et(I,I.bi_buf),I.bi_buf=0,I.bi_valid=0):8<=I.bi_valid&&(I.pending_buf[I.pending++]=255&I.bi_buf,I.bi_buf>>=8,I.bi_valid-=8)})(_)}},{"../utils/common":41}],53:[function(e,s,a){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,a){(function(r){(function(i,o){if(!i.setImmediate){var l,d,p,m,v=1,f={},y=!1,h=i.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(i);g=g&&g.setTimeout?g:i,l={}.toString.call(i.process)==="[object process]"?function(E){process.nextTick(function(){b(E)})}:(function(){if(i.postMessage&&!i.importScripts){var E=!0,A=i.onmessage;return i.onmessage=function(){E=!1},i.postMessage("","*"),i.onmessage=A,E}})()?(m="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",w,!1):i.attachEvent("onmessage",w),function(E){i.postMessage(m+E,"*")}):i.MessageChannel?((p=new MessageChannel).port1.onmessage=function(E){b(E.data)},function(E){p.port2.postMessage(E)}):h&&"onreadystatechange"in h.createElement("script")?(d=h.documentElement,function(E){var A=h.createElement("script");A.onreadystatechange=function(){b(E),A.onreadystatechange=null,d.removeChild(A),A=null},d.appendChild(A)}):function(E){setTimeout(b,0,E)},g.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var A=new Array(arguments.length-1),S=0;S<A.length;S++)A[S]=arguments[S+1];var L={callback:E,args:A};return f[v]=L,l(v),v++},g.clearImmediate=x}function x(E){delete f[E]}function b(E){if(y)setTimeout(b,0,E);else{var A=f[E];if(A){y=!0;try{(function(S){var L=S.callback,U=S.args;switch(U.length){case 0:L();break;case 1:L(U[0]);break;case 2:L(U[0],U[1]);break;case 3:L(U[0],U[1],U[2]);break;default:L.apply(o,U)}})(A)}finally{x(E),y=!1}}}}function w(E){E.source===i&&typeof E.data=="string"&&E.data.indexOf(m)===0&&b(+E.data.slice(m.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ke)),ke.exports}var Ra=Ea();const Ye=wa(Ra);function Ma(n){if(n.length===0)return new Float32Array(0);if(n.length%4!==0)throw new Error(`Byte-shuffled float32 payload has invalid length (${n.length}).`);const t=n.length/4,e=new Uint8Array(n.length);for(let s=0;s<4;s+=1){const a=s*t;let r=s;for(let i=0;i<t;i+=1)e[r]=n[a+i],r+=4}return new Float32Array(e.buffer)}function Ia(n){if(n.length===0)return new Float32Array(0);if(n.length%4!==0)throw new Error(`XOR-delta byte-shuffled float32 payload has invalid length (${n.length}).`);const t=n.length/4,e=Ba(n,t),s=new Uint32Array(e.buffer),a=new Uint32Array(t);let r=0;for(let i=0;i<t;i+=1){const o=s[i]^r;a[i]=o,r=o}return new Float32Array(a.buffer)}function Pa(n){if(n.length===0)return new Uint8Array(0);if(n.length%4!==0)throw new Error(`Channel-major float32 source length must be divisible by 4 (${n.length}).`);const t=n.length/4,e=new Float32Array(n.length);for(let s=0;s<4;s+=1){const a=s*t;let r=s;for(let i=0;i<t;i+=1)e[a+i]=n[r],r+=4}return new Uint8Array(e.buffer)}function Fa(n){if(n.length===0)return new Float32Array(0);if(n.length%16!==0)throw new Error(`Channel-major float32 payload has invalid length (${n.length}).`);const t=new Float32Array(n.buffer,n.byteOffset,n.byteLength/4),e=t.length/4,s=new Float32Array(t.length);for(let a=0;a<4;a+=1){const r=a*e;let i=a;for(let o=0;o<e;o+=1)s[i]=t[r+o],i+=4}return s}function Ba(n,t){const e=new Uint8Array(n.length);for(let s=0;s<4;s+=1){const a=s*t;let r=s;for(let i=0;i<t;i+=1)e[r]=n[a+i],r+=4}return e}async function ps(n,t,e,s,a,r,i={}){const o=i.encodeRasterImages??!0,l=i.zipCompression??"DEFLATE",d=i.zipDeflateLevel??9,p=new Ye,m=ka(n,t,a),f=!!s&&s.length>0&&n.imagePaintOpCount>0&&r.length===0,y=f?[]:r,h=y[0]??null,g=f?"source/source.pdf":void 0;for(const A of m){const S=A.layout==="channel-major"?Pa(A.data):new Uint8Array(A.data.buffer,A.data.byteOffset,A.data.byteLength);p.file(A.filePath,S)}g&&s&&p.file(g,s);const x=[];for(let A=0;A<y.length;A+=1){const S=y[A],L=S.width*S.height*4,U=S.data.subarray(0,L);let F=`raster/layer-${A}.rgba`,P="rgba",M=U;if(o){const T=await Wa(S.width,S.height,U);T&&(F=`raster/layer-${A}.${T.extension}`,P=T.encoding,M=T.bytes)}p.file(F,M,{compression:"STORE"}),x.push({width:S.width,height:S.height,matrix:Array.from(S.matrix),file:F,encoding:P})}const b={formatVersion:3,sourceFile:e,sourcePdfFile:g,sourcePdfSizeBytes:f?s?.length??0:0,generatedAt:new Date().toISOString(),scene:{bounds:n.bounds,pageBounds:n.pageBounds,pageRects:Array.from(n.pageRects),pageCount:n.pageCount,pagesPerRow:n.pagesPerRow,maxHalfWidth:n.maxHalfWidth,operatorCount:n.operatorCount,imagePaintOpCount:n.imagePaintOpCount,pathCount:n.pathCount,sourceSegmentCount:n.sourceSegmentCount,mergedSegmentCount:n.mergedSegmentCount,segmentCount:n.segmentCount,fillPathCount:n.fillPathCount,fillSegmentCount:n.fillSegmentCount,textInstanceCount:n.textInstanceCount,textGlyphCount:n.textGlyphCount,textGlyphPrimitiveCount:n.textGlyphSegmentCount,rasterLayers:x,rasterLayerWidth:h?.width??0,rasterLayerHeight:h?.height??0,rasterLayerMatrix:h?Array.from(h.matrix):void 0,rasterLayerFile:x[0]?.file},textures:m.map(A=>({name:A.name,file:A.filePath,width:A.width,height:A.height,channels:4,componentType:"float32",layout:A.layout,byteShuffle:!1,predictor:"none",logicalItemCount:A.logicalItemCount,logicalFloatCount:A.logicalFloatCount,paddedFloatCount:A.data.length}))};p.file("manifest.json",JSON.stringify(b,null,2));const w=l==="DEFLATE"?{type:"blob",compression:"DEFLATE",compressionOptions:{level:d}}:{type:"blob",compression:"STORE"},E=await p.generateAsync(w);return{blob:E,byteLength:E.size,textureCount:m.length,rasterLayerCount:y.length,layout:a}}function ka(n,t,e){return[bt("fill-path-meta-a",n.fillPathMetaA,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),bt("fill-path-meta-b",n.fillPathMetaB,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),bt("fill-path-meta-c",n.fillPathMetaC,t.fillPathTextureWidth,t.fillPathTextureHeight,n.fillPathCount,e),bt("fill-primitives-a",n.fillSegmentsA,t.fillSegmentTextureWidth,t.fillSegmentTextureHeight,n.fillSegmentCount,e),bt("fill-primitives-b",n.fillSegmentsB,t.fillSegmentTextureWidth,t.fillSegmentTextureHeight,n.fillSegmentCount,e),bt("stroke-primitives-a",n.endpoints,t.textureWidth,t.textureHeight,n.segmentCount,e),bt("stroke-primitives-b",n.primitiveMeta,t.textureWidth,t.textureHeight,n.segmentCount,e),bt("stroke-styles",n.styles,t.textureWidth,t.textureHeight,n.segmentCount,e),bt("stroke-primitive-bounds",n.primitiveBounds,t.textureWidth,t.textureHeight,n.segmentCount,e),bt("text-instance-a",n.textInstanceA,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),bt("text-instance-b",n.textInstanceB,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),bt("text-instance-c",n.textInstanceC,t.textInstanceTextureWidth,t.textInstanceTextureHeight,n.textInstanceCount,e),bt("text-glyph-meta-a",n.textGlyphMetaA,t.textGlyphTextureWidth,t.textGlyphTextureHeight,n.textGlyphCount,e),bt("text-glyph-meta-b",n.textGlyphMetaB,t.textGlyphTextureWidth,t.textGlyphTextureHeight,n.textGlyphCount,e),bt("text-glyph-primitives-a",n.textGlyphSegmentsA,t.textSegmentTextureWidth,t.textSegmentTextureHeight,n.textGlyphSegmentCount,e),bt("text-glyph-primitives-b",n.textGlyphSegmentsB,t.textSegmentTextureWidth,t.textSegmentTextureHeight,n.textGlyphSegmentCount,e)]}async function gs(n){const t=await Ye.loadAsync(n),e=t.file("manifest.json");if(!e)throw new Error("Parsed data zip is missing manifest.json.");const s=await e.async("string");let a;try{a=JSON.parse(s)}catch(it){const nt=it instanceof Error?it.message:String(it);throw new Error(`Invalid manifest.json: ${nt}`)}const r=typeof a.scene=="object"&&a.scene?a.scene:{},i=Array.isArray(a.textures)?a.textures:[],o=new Map;for(const it of i){const nt=typeof it.name=="string"?it.name:null;nt&&o.set(nt,it)}const l=async(it,nt)=>{for(const mt of it){const vt=o.get(mt);if(!vt)continue;const _t=typeof vt.layout=="string"&&vt.layout==="channel-major"?".f32cm":vt.byteShuffle===!0?".f32bs":".f32",Ft=typeof vt.file=="string"?vt.file:`textures/${mt}${_t}`,ft=t.file(Ft);if(!ft)continue;const Bt=await ft.async("arraybuffer"),Ot=$a(Bt,vt,mt),Et=ut(vt.logicalFloatCount,Ot.length);if(Et>Ot.length)throw new Error(`Texture ${mt} logical float count exceeds file length.`);const ne=ut(vt.logicalItemCount,Math.floor(Et/4));return{data:Ot.slice(0,Et),logicalItemCount:ne}}return null},d=await l(["fill-path-meta-a"]),p=await l(["fill-path-meta-b"]),m=await l(["fill-path-meta-c"]),v=await l(["fill-primitives-a","fill-segments"]),f=await l(["fill-primitives-b"]),y=await l(["stroke-primitives-a","stroke-endpoints"]),h=await l(["stroke-primitives-b"]),g=await l(["stroke-styles"]),x=await l(["stroke-primitive-bounds"]),b=await l(["text-instance-a"]),w=await l(["text-instance-b"]),E=await l(["text-instance-c"]),A=await l(["text-glyph-meta-a"]),S=await l(["text-glyph-meta-b"]),L=await l(["text-glyph-primitives-a"]),U=await l(["text-glyph-primitives-b"]),F=ut(r.fillPathCount,d?.logicalItemCount??0),P=ut(r.fillSegmentCount,v?.logicalItemCount??0),M=ut(r.segmentCount,g?.logicalItemCount??y?.logicalItemCount??0),T=ut(r.textInstanceCount,b?.logicalItemCount??0),R=ut(r.textGlyphCount,A?.logicalItemCount??0),c=ut(r.textGlyphPrimitiveCount,ut(r.textGlyphSegmentCount,L?.logicalItemCount??0));if(M>0&&(!y||!g))throw new Error("Parsed data zip is missing stroke geometry textures.");const B=Ct(d?.data??new Float32Array(0),F,"fill-path-meta-a"),q=Ct(p?.data??new Float32Array(0),F,"fill-path-meta-b"),G=Ct(m?.data??new Float32Array(0),F,"fill-path-meta-c"),Q=Ct(v?.data??new Float32Array(0),P,"fill-primitives-a"),z=f?Ct(f.data,P,"fill-primitives-b"):In(Q,P),j=Ct(y?.data??new Float32Array(0),M,"stroke-primitives-a"),O=Ct(g?.data??new Float32Array(0),M,"stroke-styles"),D=h?Ct(h.data,M,"stroke-primitives-b"):In(j,M),et=x?Ct(x.data,M,"stroke-primitive-bounds"):Ua(j,D,M),$=Ct(b?.data??new Float32Array(0),T,"text-instance-a"),K=Ct(w?.data??new Float32Array(0),T,"text-instance-b"),ot=E?Ct(E.data,T,"text-instance-c"):Da(K,T),ct=Ct(A?.data??new Float32Array(0),R,"text-glyph-meta-a"),rt=Ct(S?.data??new Float32Array(0),R,"text-glyph-meta-b"),at=Ct(L?.data??new Float32Array(0),c,"text-glyph-primitives-a"),st=Ct(U?.data??new Float32Array(0),c,"text-glyph-primitives-b");Oa(D,O,M),Xa(q,G,F);const lt=ut(r.sourceSegmentCount,M),xt=ut(r.mergedSegmentCount,M),gt=ut(r.sourceTextCount,T),u=ut(r.textInPageCount,T),H=ut(r.textOutOfPageCount,Math.max(0,gt-u)),X=Math.max(1,ut(r.pageCount,1)),C=Math.max(1,ut(r.pagesPerRow,1));let _=await qa(t,r);if(_.length===0){const it=await Ya(t,a);if(it)try{const nt=await Fr(ts(it),{maxPages:X,maxPagesPerRow:C});_=La(nt),_.length>0&&console.log(`[Parsed data load] Restored ${_.length.toLocaleString()} raster layer(s) from embedded source PDF.`)}catch(nt){const mt=nt instanceof Error?nt.message:String(nt);console.warn(`[Parsed data load] Failed to restore raster layers from source PDF: ${mt}`)}}const I=_[0]??null,V=Kt(r.maxHalfWidth,Number.NaN)||ja(O,M),Z=Pn(r.bounds),k=Pn(r.pageBounds),N=za(Na(et,M),Ga(B,q,F))??{minX:0,minY:0,maxX:1,maxY:1},Y=Z??N,J=k??Y;return{pageRects:Va(r.pageRects,J),fillPathCount:F,fillSegmentCount:P,fillPathMetaA:B,fillPathMetaB:q,fillPathMetaC:G,fillSegmentsA:Q,fillSegmentsB:z,segmentCount:M,sourceSegmentCount:lt,mergedSegmentCount:xt,sourceTextCount:gt,textInstanceCount:T,textGlyphCount:R,textGlyphSegmentCount:c,textInPageCount:u,textOutOfPageCount:H,textInstanceA:$,textInstanceB:K,textInstanceC:ot,textGlyphMetaA:ct,textGlyphMetaB:rt,textGlyphSegmentsA:at,textGlyphSegmentsB:st,rasterLayers:_,rasterLayerWidth:I?.width??0,rasterLayerHeight:I?.height??0,rasterLayerData:I?.data??new Uint8Array(0),rasterLayerMatrix:I?.matrix??new Float32Array([1,0,0,1,0,0]),endpoints:j,primitiveMeta:D,primitiveBounds:et,styles:O,bounds:Y,pageBounds:J,pageCount:X,pagesPerRow:C,maxHalfWidth:V,imagePaintOpCount:ut(r.imagePaintOpCount,0),operatorCount:ut(r.operatorCount,0),pathCount:ut(r.pathCount,0),discardedTransparentCount:ut(r.discardedTransparentCount,0),discardedDegenerateCount:ut(r.discardedDegenerateCount,0),discardedDuplicateCount:ut(r.discardedDuplicateCount,0),discardedContainedCount:ut(r.discardedContainedCount,0)}}function La(n){const t=[];if(Array.isArray(n.rasterLayers))for(const a of n.rasterLayers){const r=Math.max(0,Math.trunc(a?.width??0)),i=Math.max(0,Math.trunc(a?.height??0));if(r<=0||i<=0||!(a.data instanceof Uint8Array)||a.data.length<r*i*4)continue;const o=a.matrix instanceof Float32Array?a.matrix:new Float32Array(a.matrix);t.push({width:r,height:i,data:a.data,matrix:o})}if(t.length>0)return t;const e=Math.max(0,Math.trunc(n.rasterLayerWidth)),s=Math.max(0,Math.trunc(n.rasterLayerHeight));return e<=0||s<=0||n.rasterLayerData.length<e*s*4||t.push({width:e,height:s,data:n.rasterLayerData,matrix:n.rasterLayerMatrix}),t}function Ct(n,t,e){const s=t*4;if(s===0)return new Float32Array(0);if(n.length<s)throw new Error(`Texture ${e} has insufficient data (${n.length} < ${s}).`);return n.length===s?n:n.slice(0,s)}function In(n,t){const e=new Float32Array(t*4);for(let s=0;s<t;s+=1){const a=s*4;e[a]=n[a+2],e[a+1]=n[a+3],e[a+2]=0,e[a+3]=0}return e}function Da(n,t){const e=new Float32Array(t*4);for(let s=0;s<t;s+=1){const a=s*4,r=ee(n[a+3]);e[a]=r,e[a+1]=r,e[a+2]=r,e[a+3]=1}return e}function ee(n){return!Number.isFinite(n)||n<0?0:n>1?1:n}function Oa(n,t,e){if(e<=0)return;let s=!1;for(let a=0;a<e;a+=1)if(Math.abs(n[a*4+3])>1e-6){s=!0;break}if(!s)for(let a=0;a<e;a+=1){const r=a*4,i=ee(t[r+1]),o=ee(t[r+2]),l=t[r+3]>=.5?1:0;t[r+1]=i,t[r+2]=i,t[r+3]=i,n[r+3]=o+l*2}}function Xa(n,t,e){if(e<=0)return;let s=!1;for(let a=0;a<e;a+=1)if(Math.abs(t[a*4+3])>1e-6){s=!0;break}if(!s)for(let a=0;a<e;a+=1){const r=a*4,i=ee(n[r+2]),o=ee(n[r+3]);n[r+2]=i,n[r+3]=i,t[r+2]=i,t[r+3]=o}}function Ua(n,t,e){const s=new Float32Array(e*4);for(let a=0;a<e;a+=1){const r=a*4,i=n[r],o=n[r+1],l=n[r+2],d=n[r+3],p=t[r],m=t[r+1];s[r]=Math.min(i,l,p),s[r+1]=Math.min(o,d,m),s[r+2]=Math.max(i,l,p),s[r+3]=Math.max(o,d,m)}return s}function Na(n,t){if(t<=0||n.length<t*4)return null;let e=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(let i=0;i<t;i+=1){const o=i*4;e=Math.min(e,n[o]),s=Math.min(s,n[o+1]),a=Math.max(a,n[o+2]),r=Math.max(r,n[o+3])}return{minX:e,minY:s,maxX:a,maxY:r}}function Ga(n,t,e){if(e<=0||n.length<e*4||t.length<e*4)return null;let s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;for(let o=0;o<e;o+=1){const l=o*4;s=Math.min(s,n[l+2]),a=Math.min(a,n[l+3]),r=Math.max(r,t[l]),i=Math.max(i,t[l+1])}return{minX:s,minY:a,maxX:r,maxY:i}}function za(n,t){return!n&&!t?null:n?t?{minX:Math.min(n.minX,t.minX),minY:Math.min(n.minY,t.minY),maxX:Math.max(n.maxX,t.maxX),maxY:Math.max(n.maxY,t.maxY)}:{...n}:t?{...t}:null}function Pn(n){if(!n||typeof n!="object")return null;const t=n,e=Kt(t.minX,Number.NaN),s=Kt(t.minY,Number.NaN),a=Kt(t.maxX,Number.NaN),r=Kt(t.maxY,Number.NaN);return[e,s,a,r].every(Number.isFinite)?{minX:e,minY:s,maxX:a,maxY:r}:null}function Va(n,t){if(Array.isArray(n)){const e=Math.floor(n.length/4);if(e>0){const s=new Float32Array(e*4);let a=0;for(let r=0;r<e;r+=1){const i=r*4,o=Number(n[i]),l=Number(n[i+1]),d=Number(n[i+2]),p=Number(n[i+3]);[o,l,d,p].every(Number.isFinite)&&(s[a]=o,s[a+1]=l,s[a+2]=d,s[a+3]=p,a+=4)}if(a>0)return s.slice(0,a)}}return new Float32Array([t.minX,t.minY,t.maxX,t.maxY])}function Fn(n){if(!Array.isArray(n)||n.length<6)return null;const t=new Float32Array(6);for(let e=0;e<6;e+=1){const s=Number(n[e]);if(!Number.isFinite(s))return null;t[e]=s}return t}async function Ya(n,t){const e=Ue(t.sourcePdfFile),s=Ue(t.sourcePdfUrl),a=[e,"source/source.pdf","source.pdf"];for(const r of a){if(!r)continue;const i=n.file(r);if(!i)continue;const o=await i.async("arraybuffer");if(!(o.byteLength<=0))return new Uint8Array(o)}if(s)try{const r=await fetch(Ja(s));if(r.ok){const i=await r.arrayBuffer();if(i.byteLength>0)return new Uint8Array(i)}}catch{}return null}async function Wa(n,t,e){const[s,a]=await Promise.all([Bn(n,t,e,"image/webp"),Bn(n,t,e,"image/png")]);return!s&&!a?null:s&&!a?{bytes:s,encoding:"webp",extension:"webp"}:a&&!s?{bytes:a,encoding:"png",extension:"png"}:!s||!a?null:s.byteLength<a.byteLength?{bytes:s,encoding:"webp",extension:"webp"}:{bytes:a,encoding:"png",extension:"png"}}async function Bn(n,t,e,s){if(typeof document>"u")return null;const a=n*t*4;if(n<=0||t<=0||e.length<a)return null;const r=document.createElement("canvas");r.width=n,r.height=t;const i=r.getContext("2d",{alpha:!0});if(!i)return r.width=0,r.height=0,null;const o=new Uint8ClampedArray(a);o.set(e.subarray(0,a));const l=new ImageData(o,n,t);i.putImageData(l,0,0);const d=await new Promise(m=>{r.toBlob(m,s)});if(r.width=0,r.height=0,!d)return null;const p=await d.arrayBuffer();return new Uint8Array(p)}function Ha(n){const t=n.toLowerCase();return t.endsWith(".png")?"image/png":t.endsWith(".webp")?"image/webp":t.endsWith(".jpg")||t.endsWith(".jpeg")?"image/jpeg":null}async function Za(n,t){if(typeof document>"u")return null;const e=Ha(n);if(!e)return null;const s=new Uint8Array(t.length);s.set(t);const a=new Blob([s],{type:e}),r=await createImageBitmap(a);try{const i=r.width,o=r.height;if(i<=0||o<=0)return null;const l=document.createElement("canvas");l.width=i,l.height=o;const d=l.getContext("2d",{alpha:!0,willReadFrequently:!0});if(!d)return l.width=0,l.height=0,null;d.drawImage(r,0,0);const p=d.getImageData(0,0,i,o),m=new Uint8Array(p.data);return l.width=0,l.height=0,{width:i,height:o,data:m}}finally{r.close()}}async function xs(n){try{const t=await Ye.loadAsync(n),e=t.file("manifest.json");let s=null;if(e){const r=await e.async("string");try{const i=JSON.parse(r);s=Ue(i.sourcePdfFile)}catch{s=null}}const a=[s,"source/source.pdf","source.pdf"];for(const r of a){if(!r)continue;const i=t.file(r);if(!i)continue;const o=await i.async("arraybuffer");if(!(o.byteLength<=0))return new Uint8Array(o)}}catch{}return null}async function qa(n,t){const e=[],s=Array.isArray(t.rasterLayers)?t.rasterLayers:[];for(let d=0;d<s.length;d+=1){const p=s[d];if(!p||typeof p!="object")continue;const m=p,v=ut(m.width,0),f=ut(m.height,0),y=typeof m.file=="string"?m.file:`raster/layer-${d}.rgba`,h=Fn(m.matrix)??new Float32Array([1,0,0,1,0,0]),g=await kn(n,y,v,f);!g||g.width<=0||g.height<=0||g.data.length<g.width*g.height*4||e.push({width:g.width,height:g.height,matrix:h,data:g.data})}if(e.length>0)return e;const a=ut(t.rasterLayerWidth,0),r=ut(t.rasterLayerHeight,0),i=Fn(t.rasterLayerMatrix)??new Float32Array([1,0,0,1,0,0]),o=n.file("raster/layer-0.webp")?"raster/layer-0.webp":n.file("raster/layer-0.png")?"raster/layer-0.png":n.file("raster/layer-0.rgba")?"raster/layer-0.rgba":n.file("raster/layer.webp")?"raster/layer.webp":n.file("raster/layer.png")?"raster/layer.png":"raster/layer.rgba",l=await kn(n,typeof t.rasterLayerFile=="string"?t.rasterLayerFile:o,a,r);return l&&l.width>0&&l.height>0&&l.data.length>=l.width*l.height*4&&e.push({width:l.width,height:l.height,data:l.data,matrix:i}),e}async function kn(n,t,e,s){const a=n.file(t);if(!a)return null;const r=await a.async("arraybuffer"),i=new Uint8Array(r),o=await Za(t,i);if(o)return o;if(e<=0||s<=0)return null;const l=e*s*4;if(i.length<l)throw new Error(`Raster layer data is truncated (${i.length} < ${l}).`);return{width:e,height:s,data:i.length===l?i:i.slice(0,l)}}function ja(n,t){let e=0;for(let s=0;s<t;s+=1)e=Math.max(e,n[s*4]);return e}function Kt(n,t){const e=Number(n);return Number.isFinite(e)?e:t}function ut(n,t){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):Math.max(0,Math.trunc(t))}function Ue(n){if(typeof n!="string")return null;const t=n.trim();return t.length>0?t:null}function bt(n,t,e,s,a,r){const i=a*4;if(t.length<i)throw new Error(`Texture ${n} has insufficient data (${t.length} < ${i}).`);return{name:n,filePath:`textures/${n}.f32`,width:e,height:s,logicalItemCount:a,logicalFloatCount:i,data:t.subarray(0,i),layout:r}}function $a(n,t,e){const s=typeof t.componentType=="string"?t.componentType:"float32";if(s!=="float32")throw new Error(`Texture ${e} has unsupported componentType ${String(s)}.`);const a=typeof t.layout=="string"?t.layout:"interleaved";if(a!=="interleaved"&&a!=="channel-major")throw new Error(`Texture ${e} has unsupported layout ${String(a)}.`);if(a==="channel-major")return Fa(new Uint8Array(n));const r=t.byteShuffle===!0,i=typeof t.predictor=="string"?t.predictor:"none";if(i!=="none"&&i!=="xor-delta-u32")throw new Error(`Texture ${e} has unsupported predictor ${String(i)}.`);if(r)return i==="xor-delta-u32"?Ia(new Uint8Array(n)):Ma(new Uint8Array(n));if(i!=="none")throw new Error(`Texture ${e} declares predictor ${i} without byteShuffle.`);if(n.byteLength%4!==0)throw new Error(`Texture ${e} has invalid byte length (${n.byteLength}).`);return new Float32Array(n)}const Qa=/^[a-z][a-z\d+.-]*:/i,Ka=new URL("./",window.location.href);function Ja(n){const t=n.trim();if(Qa.test(t))return t;const e=t.replace(/^\/+/,"");return new URL(e,Ka).toString()}function ts(n){return n.slice().buffer}const es=/^[a-z][a-z\d+.-]*:/i;function Ln(n){const t=n.trim();if(es.test(t))return t;const e=t.replace(/^\/+/,""),s=new URL("./",window.location.href);return new URL(e,s).toString()}function ys(n){const t=Array.isArray(n.examples)?n.examples:[],e=[];for(let s=0;s<t.length;s+=1){const a=t[s],r=ye(a?.name);if(!r)continue;const i=ye(a?.id)??`example-${s+1}`,o=ye(a?.pdf?.path),l=ye(a?.parsedZip?.path),d=o?Ln(o):null,p=l?Ln(l):null;!d||!p||e.push({id:i,name:r,pdfPath:d,pdfSizeBytes:Dn(a?.pdf?.sizeBytes,0),zipPath:p,zipSizeBytes:Dn(a?.parsedZip?.sizeBytes,0)})}return e}function Dn(n,t){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.trunc(e)):Math.max(0,Math.trunc(t))}function ye(n){if(typeof n!="string")return null;const t=n.trim();return t.length>0?t:null}export{ss as C,hs as W,gs as a,ps as b,fs as c,ms as d,ds as e,Zn as f,as as g,us as h,cs as i,rs as j,is as k,La as l,Xn as m,ys as n,ls as o,ns as p,os as q,Ln as r,xs as t};
