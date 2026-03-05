import type { CompiledPdfDocument } from "../../core/types";
import type { PDFSource } from "../types";

export interface WorkerLoadRequest {
  type: "load";
  source: PDFSource;
  options: {
    maxPages?: number;
    extraction?: {
      enableSegmentMerge?: boolean;
      enableInvisibleCull?: boolean;
    };
  };
}

export interface WorkerLoadSuccess {
  type: "load:success";
  document: CompiledPdfDocument;
}

export interface WorkerLoadFailure {
  type: "load:error";
  error: string;
}

export type WorkerResponseMessage = WorkerLoadSuccess | WorkerLoadFailure;
