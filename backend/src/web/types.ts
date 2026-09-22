/**
 * Shared view-model contract between route handlers (backend) and view
 * renderers (frontend) for feature 003 — mirrors
 * specs/003-roadmap-materials-screens/data-model.md exactly. Route handlers
 * build these from 002's persistence query results; view renderers only
 * ever consume these shapes, never 002's own types directly.
 *
 * All string fields that ultimately came from the filesystem (titles, paths)
 * are untrusted for HTML purposes — view renderers MUST pass them through
 * `html.ts`'s `escapeHtml` before writing them into a response (FR-014).
 */

export interface RoadmapListItemView {
  roadmapId: string;
  title: string;
  /** One of: "진행 자료 없음" (hasPhaseDocs=false) | "미시작" (totalCount=0 but hasPhaseDocs) | "완료 N/M (P%)". Never collapses the first two into "0%" (FR-003). */
  progressLabel: string;
  needsReviewBadge: boolean;
}

export interface LearningItemView {
  itemId: string;
  text: string;
  completed: boolean | null;
  completedDate: string | null;
  /** e.g. "/materials/<id>", or null if this item has no linked material (FR-011). */
  linkedMaterialHref: string | null;
  needsReview: boolean;
}

export interface PhaseView {
  phaseId: string;
  title: string;
  aggregatable: boolean;
  /** Always [] when aggregatable is false — render a "형식 확인 필요" notice instead of an empty list (FR-003). */
  items: LearningItemView[];
}

export interface TrackView {
  trackId: string;
  title: string;
  phases: PhaseView[];
}

export interface RoadmapDetailViewModel {
  roadmapId: string;
  title: string;
  /** Empty array for roadmaps with no tracks (FR-002). */
  tracks: TrackView[];
  /** Phases directly under the roadmap root (no track). */
  rootPhases: PhaseView[];
}

export interface ContinueStudyTarget {
  found: boolean;
  trackId: string | null;
  phaseId: string | null;
  itemId: string | null;
  /** Count of completed=null items skipped while searching (research.md §6). */
  skippedNeedsReviewCount: number;
}

export interface MaterialSearchItemView {
  materialId: string;
  title: string;
  sourcePath: string;
  category: string;
  provider: string | null;
  course: string | null;
  linkedRoadmapLinks: Array<{ roadmapId: string; href: string }>;
}

export interface MaterialSearchQueryParams {
  sourcePath?: string;
  title?: string;
  category?: string;
  provider?: string;
  course?: string;
  roadmapId?: string;
}

export interface MaterialSearchViewModel {
  query: MaterialSearchQueryParams;
  results: MaterialSearchItemView[];
  offset: number;
  limit: number;
  /** Total matches before offset/limit slicing (for "다음 N개 보기" links, research.md §7). */
  total: number;
}

export interface MaterialBodyView {
  materialId: string;
  title: string;
  sourcePath: string;
  /** Sanitized HTML from materialContent.ts, or null if renderError is set. */
  safeHtml: string | null;
  /** Human-readable message when the original file couldn't be read/converted; null on success. */
  renderError: string | null;
}
