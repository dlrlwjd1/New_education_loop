/**
 * TypeScript types for the entities defined in
 * specs/005-briefing/data-model.md ("서비스 단계 타입").
 *
 * This module holds no logic — it is the shared contract that lets the
 * backend (service.ts/store.ts/buildSnapshot.ts) and the frontend
 * (web/views/briefing*.ts) work from the same shapes without waiting on
 * each other (same pattern 003 used).
 */

/**
 * FR-005's four states, derived from 002 `RoadmapSummary.hasPhaseDocs` /
 * `completedCount` / `totalCount` alone — no new field is needed on 002's
 * side (data-model.md).
 */
export type RoadmapProgressStatus = "normal" | "not_started" | "no_phase_docs" | "needs_review_format";

export interface RoadmapProgressView {
  roadmapId: string;
  title: string;
  completedCount: number;
  totalCount: number;
  status: RoadmapProgressStatus;
  /** FR-004 display string, e.g. `"0% (미시작)"`, `"<0.1% (진행 중, 5/799)"`, `"1.2% (3/251)"`, `"<100%"`, `"진행 자료 없음"`, `"형식 확인 필요"`. */
  percentLabel: string;
}

/** 004 `DueReviewItem`, carried through unchanged (contracts/briefing-library.md). */
export interface DueReviewItemView {
  id: string;
  item: string;
  topic: string;
  nextReviewDate: string;
  overdueDays: number;
}

/**
 * A frozen point-in-time record (FR-014) — once returned with a real `id`
 * (i.e. it was actually stored, see `reviewDataUnavailable` below), its
 * values never change even if the underlying roadmap/review data does.
 */
export interface BriefingSnapshot {
  id: number;
  referenceDate: string;
  timezone: string;
  /** `"all"` or a specific roadmap id (spec.md FR-001). */
  scope: string;
  createdAt: string;
  /** Scope-filtered roadmap list, in original order (research.md §3). */
  roadmaps: RoadmapProgressView[];
  /** Arithmetic mean of `completedCount/totalCount` over `roadmaps` where `totalCount > 0`; `null` if none qualify. */
  averageProgressRatio: number | null;
  /** How many of `roadmaps` were included in `averageProgressRatio` (FR-011 "대상 수 표시"). */
  averageProgressRoadmapCount: number;
  dueItems: DueReviewItemView[];
  dueReviewCount: number;
  /**
   * 004 `ReviewQueueStatus.totalActiveCount`, copied through unchanged
   * (data-model.md). FR-009's distinction between "복습큐 자체가 비어 있음"
   * (`totalActiveCount === 0`) and "항목은 있으나 오늘 대상이 없음"
   * (`totalActiveCount > 0 && dueReviewCount === 0`) is impossible to make
   * from `dueItems`/`dueReviewCount` alone, so this field is the only basis
   * for that distinction — views must read it instead of recomputing.
   */
  totalActiveCount: number;
}

/**
 * `buildSnapshot()`'s degraded-response shape (research.md §4): 004's
 * review-queue lookup failed, so only roadmap progress is available and
 * nothing gets persisted. Distinguished from `BriefingSnapshot` by the
 * absence of an `id` — this value is never stored, only rendered once.
 */
export interface BriefingReviewUnavailable {
  reviewDataUnavailable: true;
  roadmaps: RoadmapProgressView[];
}

/** `generateBriefing()`'s error case (FR-018) — no snapshot was created or looked up. */
export interface BriefingRoadmapNotFound {
  error: "roadmap_not_found";
}

export type GenerateBriefingResult = BriefingSnapshot | BriefingReviewUnavailable | BriefingRoadmapNotFound;

/** `listSnapshotsByDate()`'s row shape (FR-015) — a summary, not a full `BriefingSnapshot`. */
export interface BriefingSnapshotListItem {
  id: number;
  referenceDate: string;
  scope: string;
  createdAt: string;
  averageProgressRatio: number | null;
  dueReviewCount: number;
}
