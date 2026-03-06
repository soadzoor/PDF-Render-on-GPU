import type { CompiledPdfDocument } from "../types";

export function collectCompiledDocumentTransferables(document: CompiledPdfDocument): Transferable[] {
  const transferables: Transferable[] = [
    document.endpoints.buffer,
    document.primitiveMeta.buffer,
    document.primitiveBounds.buffer,
    document.styles.buffer,
    document.fillPathMetaA.buffer,
    document.fillPathMetaB.buffer,
    document.fillPathMetaC.buffer,
    document.fillSegmentsA.buffer,
    document.fillSegmentsB.buffer,
    document.textInstanceA.buffer,
    document.textInstanceB.buffer,
    document.textInstanceC.buffer,
    document.textGlyphMetaA.buffer,
    document.textGlyphMetaB.buffer,
    document.textGlyphSegmentsA.buffer,
    document.textGlyphSegmentsB.buffer
  ];

  for (const layer of document.rasterLayers) {
    transferables.push(layer.data.buffer, layer.matrix.buffer);
  }

  return transferables;
}
