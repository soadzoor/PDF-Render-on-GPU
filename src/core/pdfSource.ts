export type PDFSource = string | File | Blob | ArrayBuffer | Uint8Array;

export type SourceContainerType = "pdf" | "zip" | "unknown";

const BASE64_PATTERN = /^[A-Za-z0-9+/=\s]+$/;

export async function normalizePdfSourceToBytes(source: PDFSource): Promise<Uint8Array> {
  if (source instanceof Uint8Array) {
    return source.slice();
  }

  if (source instanceof ArrayBuffer) {
    return new Uint8Array(source.slice(0));
  }

  if (isBlobLike(source)) {
    return new Uint8Array(await source.arrayBuffer());
  }

  if (typeof source === "string") {
    return normalizeStringSourceToBytes(source);
  }

  throw new Error("Unsupported PDF/ZIP source type.");
}

export function detectSourceContainerType(bytes: Uint8Array): SourceContainerType {
  if (hasPdfMagic(bytes)) {
    return "pdf";
  }

  if (hasZipMagic(bytes)) {
    return "zip";
  }

  return "unknown";
}

async function normalizeStringSourceToBytes(value: string): Promise<Uint8Array> {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    throw new Error("Empty PDF/ZIP source string.");
  }

  if (isDataUri(trimmed)) {
    return decodeDataUri(trimmed);
  }

  if (looksLikeUrlOrPath(trimmed)) {
    return fetchBytes(trimmed);
  }

  if (looksLikeBase64(trimmed)) {
    return decodeBase64(trimmed);
  }

  throw new Error("String source is neither a URL/path nor Base64/data URI.");
}

function isBlobLike(value: unknown): value is Blob {
  return typeof Blob !== "undefined" && value instanceof Blob;
}

function isDataUri(value: string): boolean {
  return /^data:[^;,]+;base64,/i.test(value);
}

function looksLikeUrlOrPath(value: string): boolean {
  return (
    /^https?:\/\//i.test(value) ||
    /^\.\.?\//.test(value) ||
    /^\//.test(value) ||
    /\.(?:pdf|zip)(?:\?.*)?$/i.test(value)
  );
}

function looksLikeBase64(value: string): boolean {
  if (value.length < 64) {
    return false;
  }
  if (!BASE64_PATTERN.test(value)) {
    return false;
  }
  return value.length % 4 === 0;
}

async function fetchBytes(url: string): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch source (${response.status} ${response.statusText}).`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

function decodeDataUri(value: string): Uint8Array {
  const commaIndex = value.indexOf(",");
  if (commaIndex < 0) {
    throw new Error("Invalid data URI.");
  }

  const metadata = value.slice(5, commaIndex).toLowerCase();
  if (!metadata.includes(";base64")) {
    throw new Error("Only base64 data URIs are supported.");
  }

  return decodeBase64(value.slice(commaIndex + 1));
}

function decodeBase64(value: string): Uint8Array {
  const cleaned = value.replace(/\s+/g, "");

  if (typeof atob === "function") {
    const binary = atob(cleaned);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      out[i] = binary.charCodeAt(i);
    }
    return out;
  }

  throw new Error("Base64 decoding is not available in this runtime.");
}

function hasPdfMagic(bytes: Uint8Array): boolean {
  if (bytes.length < 5) {
    return false;
  }

  const maxOffset = Math.min(1024, bytes.length - 5);
  for (let i = 0; i <= maxOffset; i += 1) {
    if (
      bytes[i] === 0x25 &&
      bytes[i + 1] === 0x50 &&
      bytes[i + 2] === 0x44 &&
      bytes[i + 3] === 0x46 &&
      bytes[i + 4] === 0x2d
    ) {
      return true;
    }
  }

  return false;
}

function hasZipMagic(bytes: Uint8Array): boolean {
  if (bytes.length < 4) {
    return false;
  }

  const b0 = bytes[0];
  const b1 = bytes[1];
  const b2 = bytes[2];
  const b3 = bytes[3];

  return (
    b0 === 0x50 &&
    b1 === 0x4b &&
    ((b2 === 0x03 && b3 === 0x04) || (b2 === 0x05 && b3 === 0x06) || (b2 === 0x07 && b3 === 0x08))
  );
}
