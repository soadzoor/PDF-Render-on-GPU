export const QUAD_WINDING_SUBDIVISIONS = 6;

export function buildVectorDistanceFunctionsGlsl(): string {
  return `
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
`;
}

export function buildFillWindingFunctionsGlsl(): string {
  return `
const int QUAD_WINDING_SUBDIVISIONS = ${QUAD_WINDING_SUBDIVISIONS};

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
`;
}

export function buildTextWindingFunctionsGlsl(): string {
  return `
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
`;
}
