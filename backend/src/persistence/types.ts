/**
 * Public return types for `contracts/persistence-library.md`'s five exported
 * functions (`reload`, `listRoadmaps`, `getRoadmapDetail`, `searchMaterials`,
 * `listReviewNeededItems`).
 *
 * FR-004 / contract "안정성 계약": these are the ONLY shapes future callers
 * (stage 3 screens) should depend on — the internal SQLite schema
 * (`schema.ts`/`data-model.md`) must never leak through them.
 */

export interface ReloadOptions {
  /** Passed straight through to 001 `runImport` (test fixtures only). */
  studyProgressRoot?: string;
  /** Passed straight through to 001 `runImport` (test fixtures only). */
  coursesRoot?: string;
  /** Cache file path; defaults to `db.ts`'s `DEFAULT_DB_PATH`. Test-only. */
  dbPath?: string;
  /**
   * specs/004-review-queue-persistence: path to the review-queue source
   * file; defaults to `load.ts`'s `DEFAULT_REVIEW_QUEUE_PATH`
   * (`내학습/복습큐.md`). Test fixtures only.
   */
  reviewQueuePath?: string;
}

export interface LoadResult {
  roadmapCount: number;
  materialCount: number;
  errorCount: number;
  durationMs: number;
}

export interface RoadmapSummary {
  roadmapId: string;
  title: string;
  hasPhaseDocs: boolean;
  completedCount: number;
  totalCount: number;
  /** null when totalCount === 0 (data-model.md "로드맵 요약"). */
  progressRatio: number | null;
  needsReviewCount: number;
}

export interface LearningItemDetail {
  itemId: string;
  text: string;
  completed: boolean | null;
  completedDate: string | null;
  linkedMaterialId: string | null;
  needsReview: boolean;
}

export interface PhaseDetail {
  phaseId: string;
  title: string;
  aggregatable: boolean;
  items: LearningItemDetail[];
}

export interface TrackDetail {
  trackId: string;
  title: string;
  phases: PhaseDetail[];
}

export interface RoadmapDetail {
  roadmapId: string;
  title: string;
  tracks: TrackDetail[];
  /** Phases directly under the roadmap root (no track). */
  phases: PhaseDetail[];
}

export interface MaterialSearchQuery {
  sourcePath?: string;
  title?: string;
  category?: string;
  provider?: string;
  course?: string;
  roadmapId?: string;
}

export interface MaterialSearchResult {
  materialId: string;
  title: string;
  sourcePath: string;
  category: string;
  provider: string | null;
  course: string | null;
  linkedRoadmapIds: string[];
}

export interface ReviewNeededItem {
  itemId: string;
  roadmapId: string;
  sourcePath: string;
  errorKind: string;
  detail: string;
}

// ---------------------------------------------------------------------------
// 004 — review queue (contracts/review-queue-library.md)
// ---------------------------------------------------------------------------

export interface DueReviewItem {
  id: string;
  item: string;
  topic: string;
  nextReviewDate: string;
  /** `referenceDate` - `nextReviewDate`, in days. Always >= 0 (FR-004). */
  overdueDays: number;
}

export interface ReviewQueueStatus {
  totalActiveCount: number;
  /** Sorted by `overdueDays` descending — callers never need to re-sort (FR-004). */
  dueItems: DueReviewItem[];
}

export interface MasteredItemView {
  id: string;
  item: string;
  topic: string;
  firstWrongDate: string;
  masteredDate: string;
}

export interface ReviewImportErrorView {
  sourceTable: "active" | "mastered";
  kind: "date_unparseable" | "row_incomplete";
  detail: string;
  rawRow: string;
}
