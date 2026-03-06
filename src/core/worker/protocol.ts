import type { PDFSource } from "../pdfSource";
import type { PDFLoadProgress } from "../loadProgress";
import type { CompiledPdfDocument } from "../types";

export interface CompiledDocumentWorkerLoadRequest {
  type: "load";
  requestId: number;
  source: PDFSource;
  options: {
    maxPages?: number;
    extraction?: {
      enableSegmentMerge?: boolean;
      enableInvisibleCull?: boolean;
    };
  };
}

export interface CompiledDocumentWorkerProgressMessage {
  type: "load:progress";
  requestId: number;
  progress: PDFLoadProgress;
}

export interface CompiledDocumentWorkerSuccessMessage {
  type: "load:success";
  requestId: number;
  document: CompiledPdfDocument;
}

export interface CompiledDocumentWorkerFailureMessage {
  type: "load:error";
  requestId: number;
  error: string;
}

export type CompiledDocumentWorkerRequestMessage = CompiledDocumentWorkerLoadRequest;
export type CompiledDocumentWorkerResponseMessage =
  | CompiledDocumentWorkerProgressMessage
  | CompiledDocumentWorkerSuccessMessage
  | CompiledDocumentWorkerFailureMessage;
