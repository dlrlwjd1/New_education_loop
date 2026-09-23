/**
 * FR-004/FR-005 display rules, contracts/briefing-library.md
 * `formatProgress()`. Deliberately separate from 003's
 * `web/routes/roadmaps.ts`'s `toProgressLabel()` (research.md §5) — that
 * function rounds to a whole percent for a "roughly how far along" glance,
 * while this feature exists specifically to surface progress that whole-
 * percent rounding would hide (e.g. 5/799 reading as "0%").
 *
 * Pure function — no I/O, no dependency on the current time or any store.
 */
import type { RoadmapProgressStatus } from "./types.js";

export interface FormatProgressResult {
  status: RoadmapProgressStatus;
  percentLabel: string;
}

/**
 * Branch order matters and matches contracts/briefing-library.md exactly:
 *   1. no phase docs at all -> "진행 자료 없음"
 *   2. phase docs exist but nothing aggregatable (totalCount === 0,
 *      includes 0/0) -> "형식 확인 필요"
 *   3. completedCount === 0 (and totalCount > 0) -> "0% (미시작)"
 *   4. otherwise, round to one decimal place:
 *      - rounds to "0.0" -> "<0.1% (진행 중, N/M)" (the fraction is shown so
 *        real-but-tiny progress like 5/799 is never indistinguishable from
 *        not-started)
 *      - rounds to "100.0" but completedCount < totalCount (incomplete) ->
 *        "<100%" (no fraction appended here — contracts/briefing-library.md
 *        and data-model.md's example list both show this literal form,
 *        unlike the "<0.1%" branch)
 *      - otherwise -> "{P.P}% (N/M)"
 */
export function formatProgress(
  completedCount: number,
  totalCount: number,
  hasPhaseDocs: boolean,
): FormatProgressResult {
  if (!hasPhaseDocs) {
    return { status: "no_phase_docs", percentLabel: "진행 자료 없음" };
  }
  if (totalCount === 0) {
    return { status: "needs_review_format", percentLabel: "형식 확인 필요" };
  }
  if (completedCount === 0) {
    return { status: "not_started", percentLabel: "0% (미시작)" };
  }

  // String comparison on the rounded value (rather than comparing the raw
  // float to 0/100) sidesteps floating-point rounding edge cases entirely —
  // "0.0"/"100.0" are exactly what toFixed(1) produces for the boundary
  // cases FR-004 cares about.
  const rounded = ((completedCount / totalCount) * 100).toFixed(1);

  if (rounded === "0.0") {
    return { status: "normal", percentLabel: `<0.1% (진행 중, ${completedCount}/${totalCount})` };
  }
  if (rounded === "100.0" && completedCount < totalCount) {
    return { status: "normal", percentLabel: "<100%" };
  }
  return { status: "normal", percentLabel: `${rounded}% (${completedCount}/${totalCount})` };
}
