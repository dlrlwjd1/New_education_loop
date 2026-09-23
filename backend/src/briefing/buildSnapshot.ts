/**
 * contracts/briefing-library.md `buildSnapshot()`. Pure assembly — never
 * opens the briefing SQLite file or `내학습/브리핑로그.md` (that is
 * `service.ts`'s job via `store.ts`/`logFile.ts`). "Pure" here follows the
 * contract's own definition ("SQLite나 파일에 쓰지 않는다") rather than strict
 * referential transparency: `createdAt` is stamped from the wall clock at
 * assembly time because neither `BuildSnapshotInput` (per the contract) nor
 * `BriefingSnapshot` has anywhere else for that timestamp to come from, and
 * nothing about this feature's tests need `buildSnapshot()` itself to be
 * clock-deterministic (dedup/backdating is exercised at the `service.ts`
 * level via its own `now` option, per contracts/briefing-library.md).
 */
import type { RoadmapSummary, ReviewQueueStatus } from "../persistence/types.js";
import { formatProgress } from "./formatProgress.js";
import type { BriefingReviewUnavailable, BriefingSnapshot, RoadmapProgressView } from "./types.js";

export interface BuildSnapshotInput {
  /** FR-002 — already resolved by the caller (service.ts) from the user's timezone. */
  referenceDate: string;
  timezone: string;
  /** `"all"` or a specific `roadmapId`. Existence of a non-"all" id is the caller's responsibility (FR-018) — this function filters, it does not validate. */
  scope: string;
  /** 002 `listRoadmaps()`'s raw, unfiltered result. */
  roadmapSummaries: RoadmapSummary[];
  /** 004 `getReviewQueueStatus()`'s result, or the `Error` it threw (research.md §4). */
  dueReviewResult: ReviewQueueStatus | Error;
}

/**
 * `buildSnapshot()`'s success shape before storage — deliberately `Omit<BriefingSnapshot, "id">`
 * rather than the literal `BriefingSnapshot` the contract doc's prose
 * mentions: no `id` exists until `store.insertSnapshot()` assigns one
 * (data-model.md "생성 규칙" — a `reviewDataUnavailable` result is never
 * stored at all and so never gets an id either). `service.ts` is the only
 * place that turns this into a real `BriefingSnapshot`.
 */
export type BuildSnapshotResult = Omit<BriefingSnapshot, "id"> | BriefingReviewUnavailable;

function toRoadmapProgressView(summary: RoadmapSummary): RoadmapProgressView {
  const { status, percentLabel } = formatProgress(summary.completedCount, summary.totalCount, summary.hasPhaseDocs);
  return {
    roadmapId: summary.roadmapId,
    title: summary.title,
    completedCount: summary.completedCount,
    totalCount: summary.totalCount,
    status,
    percentLabel,
  };
}

/** research.md §3: averaged over the scope-filtered `roadmaps` only, never all roadmaps regardless of scope. */
function computeAverage(roadmaps: RoadmapProgressView[]): {
  averageProgressRatio: number | null;
  averageProgressRoadmapCount: number;
} {
  const eligible = roadmaps.filter((r) => r.totalCount > 0);
  if (eligible.length === 0) {
    return { averageProgressRatio: null, averageProgressRoadmapCount: 0 };
  }
  const sum = eligible.reduce((acc, r) => acc + r.completedCount / r.totalCount, 0);
  return { averageProgressRatio: sum / eligible.length, averageProgressRoadmapCount: eligible.length };
}

export function buildSnapshot(input: BuildSnapshotInput): BuildSnapshotResult {
  const filteredSummaries =
    input.scope === "all"
      ? input.roadmapSummaries
      : input.roadmapSummaries.filter((summary) => summary.roadmapId === input.scope);
  const roadmaps = filteredSummaries.map(toRoadmapProgressView);

  // research.md §4: roadmap progress is computed regardless of whether
  // review data succeeded — only the review-related fields are dropped when
  // it failed.
  if (input.dueReviewResult instanceof Error) {
    return { reviewDataUnavailable: true, roadmaps };
  }

  const { averageProgressRatio, averageProgressRoadmapCount } = computeAverage(roadmaps);
  const dueItems = input.dueReviewResult.dueItems.map((item) => ({
    id: item.id,
    item: item.item,
    topic: item.topic,
    nextReviewDate: item.nextReviewDate,
    overdueDays: item.overdueDays,
  }));

  return {
    referenceDate: input.referenceDate,
    timezone: input.timezone,
    scope: input.scope,
    createdAt: new Date().toISOString(),
    roadmaps,
    averageProgressRatio,
    averageProgressRoadmapCount,
    dueItems,
    dueReviewCount: dueItems.length,
    totalActiveCount: input.dueReviewResult.totalActiveCount,
  };
}
