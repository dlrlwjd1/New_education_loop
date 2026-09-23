import { describe, it, expect } from "vitest";
import { buildSnapshot } from "../../src/briefing/buildSnapshot.js";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T008 (US1), written independently from
// specs/005-briefing/contracts/briefing-library.md ("buildSnapshot()") and
// research.md §3/§4/data-model.md ("totalActiveCount") -- NOT by reading
// buildSnapshot.ts's implementation body. buildSnapshot() is a pure function
// (no I/O), so no temp files/mocking are needed here: inputs are hand-built
// RoadmapSummary[]/ReviewQueueStatus-or-Error values straight from
// persistence/types.ts's public shapes.

const ROADMAP_A: RoadmapSummary = {
  roadmapId: "r-a",
  title: "로드맵 A",
  hasPhaseDocs: true,
  completedCount: 1,
  totalCount: 10, // 10%
  progressRatio: 0.1,
  needsReviewCount: 0,
};

const ROADMAP_B: RoadmapSummary = {
  roadmapId: "r-b",
  title: "로드맵 B",
  hasPhaseDocs: true,
  completedCount: 5,
  totalCount: 10, // 50%
  progressRatio: 0.5,
  needsReviewCount: 0,
};

// totalCount=0 -> must be EXCLUDED from any average (research.md §3), no
// matter which scope is being averaged over.
const ROADMAP_C_NO_TOTAL: RoadmapSummary = {
  roadmapId: "r-c",
  title: "로드맵 C",
  hasPhaseDocs: true,
  completedCount: 0,
  totalCount: 0,
  progressRatio: null,
  needsReviewCount: 0,
};

const REVIEW_STATUS: ReviewQueueStatus = {
  totalActiveCount: 2,
  dueItems: [
    { id: "item-1", item: "항목1", topic: "주제1", nextReviewDate: "2026-09-20", overdueDays: 3 },
    { id: "item-2", item: "항목2", topic: "주제2", nextReviewDate: "2026-09-22", overdueDays: 1 },
  ],
};

function baseInput(overrides: Partial<Parameters<typeof buildSnapshot>[0]> = {}) {
  return {
    referenceDate: "2026-09-23",
    timezone: "Asia/Seoul",
    scope: "all",
    roadmapSummaries: [ROADMAP_A, ROADMAP_B, ROADMAP_C_NO_TOTAL],
    dueReviewResult: REVIEW_STATUS,
    ...overrides,
  };
}

describe("buildSnapshot() - scope filtering", () => {
  it('scope "all" includes every roadmap, in original order', () => {
    const result = buildSnapshot(baseInput());
    expect("reviewDataUnavailable" in result).toBe(false);
    if ("reviewDataUnavailable" in result) return;
    expect(result.roadmaps.map((r) => r.roadmapId)).toEqual(["r-a", "r-b", "r-c"]);
  });

  it("a specific roadmapId filters the roadmap list down to exactly that one", () => {
    const result = buildSnapshot(baseInput({ scope: "r-b" }));
    if ("reviewDataUnavailable" in result) throw new Error("unexpected");
    expect(result.roadmaps).toHaveLength(1);
    expect(result.roadmaps[0]?.roadmapId).toBe("r-b");
  });
});

describe("buildSnapshot() - average progress scoped to the filtered set (research.md §3)", () => {
  it("scope=all averages only over totalCount>0 roadmaps (r-c's 0/0 is excluded)", () => {
    const result = buildSnapshot(baseInput({ scope: "all" }));
    if ("reviewDataUnavailable" in result) throw new Error("unexpected");
    // (0.1 + 0.5) / 2 = 0.3 -- NOT divided by 3 (which would wrongly count r-c).
    expect(result.averageProgressRoadmapCount).toBe(2);
    expect(result.averageProgressRatio).toBeCloseTo(0.3, 10);
  });

  it("scoping to a single roadmap changes the average to exactly that roadmap's own ratio -- a DIFFERENT number than the all-roadmaps average", () => {
    const scopedToB = buildSnapshot(baseInput({ scope: "r-b" }));
    if ("reviewDataUnavailable" in scopedToB) throw new Error("unexpected");
    expect(scopedToB.averageProgressRoadmapCount).toBe(1);
    expect(scopedToB.averageProgressRatio).toBeCloseTo(0.5, 10);

    const scopedToAll = buildSnapshot(baseInput({ scope: "all" }));
    if ("reviewDataUnavailable" in scopedToAll) throw new Error("unexpected");
    // Demonstrates the actual distinction research.md §3 requires: averaging
    // over the filtered set (0.5) is NOT the same number as averaging over
    // every roadmap regardless of scope (0.3) -- if buildSnapshot() ignored
    // scope for the average computation, these two would incorrectly match.
    expect(scopedToB.averageProgressRatio).not.toBeCloseTo(scopedToAll.averageProgressRatio ?? -1, 5);
  });

  it("when the filtered set has no roadmap with totalCount>0, the average is null and the count is 0", () => {
    const result = buildSnapshot(baseInput({ scope: "r-c" }));
    if ("reviewDataUnavailable" in result) throw new Error("unexpected");
    expect(result.averageProgressRatio).toBeNull();
    expect(result.averageProgressRoadmapCount).toBe(0);
  });
});

describe("buildSnapshot() - review-data failure (research.md §4)", () => {
  it("an Error dueReviewResult produces ONLY {reviewDataUnavailable:true, roadmaps} -- no dueItems/average/etc.", () => {
    const result = buildSnapshot(baseInput({ dueReviewResult: new Error("004 조회 실패") }));
    expect(result).toHaveProperty("reviewDataUnavailable", true);
    expect(result).toHaveProperty("roadmaps");
    expect("dueItems" in result).toBe(false);
    expect("dueReviewCount" in result).toBe(false);
    expect("averageProgressRatio" in result).toBe(false);
    expect("averageProgressRoadmapCount" in result).toBe(false);
    expect("totalActiveCount" in result).toBe(false);
    expect("referenceDate" in result).toBe(false);
    expect("scope" in result).toBe(false);
  });

  it("roadmap progress is still computed (not dropped) even when review data fails", () => {
    const result = buildSnapshot(baseInput({ dueReviewResult: new Error("004 조회 실패"), scope: "r-a" }));
    if (!("reviewDataUnavailable" in result)) throw new Error("expected reviewDataUnavailable");
    expect(result.roadmaps).toHaveLength(1);
    expect(result.roadmaps[0]?.roadmapId).toBe("r-a");
  });
});

describe("buildSnapshot() - totalActiveCount carried through unchanged (FR-009, the just-fixed bug)", () => {
  it('"queue empty" (totalActiveCount:0) is distinguishable from "queue has items, none due" (totalActiveCount:3, dueItems:[])', () => {
    const queueEmpty = buildSnapshot(
      baseInput({ dueReviewResult: { totalActiveCount: 0, dueItems: [] } }),
    );
    if ("reviewDataUnavailable" in queueEmpty) throw new Error("unexpected");
    expect(queueEmpty.totalActiveCount).toBe(0);
    expect(queueEmpty.dueReviewCount).toBe(0);
    expect(queueEmpty.dueItems).toEqual([]);

    const nothingDueToday = buildSnapshot(
      baseInput({ dueReviewResult: { totalActiveCount: 3, dueItems: [] } }),
    );
    if ("reviewDataUnavailable" in nothingDueToday) throw new Error("unexpected");
    expect(nothingDueToday.totalActiveCount).toBe(3);
    expect(nothingDueToday.dueReviewCount).toBe(0);
    expect(nothingDueToday.dueItems).toEqual([]);

    // The whole point of FR-009's fix: dueReviewCount/dueItems alone cannot
    // tell these two cases apart (both are empty) -- totalActiveCount must
    // differ, and it does here.
    expect(queueEmpty.totalActiveCount).not.toBe(nothingDueToday.totalActiveCount);
  });

  it("totalActiveCount is copied verbatim from the input, independent of dueItems.length", () => {
    const result = buildSnapshot(baseInput({ dueReviewResult: REVIEW_STATUS }));
    if ("reviewDataUnavailable" in result) throw new Error("unexpected");
    expect(result.totalActiveCount).toBe(REVIEW_STATUS.totalActiveCount);
    expect(result.dueReviewCount).toBe(REVIEW_STATUS.dueItems.length);
  });
});

describe("buildSnapshot() - dueItems (FR-006/FR-007, scope-independent)", () => {
  it("dueItems are carried through regardless of scope (review list is never filtered by roadmap)", () => {
    const scopedToA = buildSnapshot(baseInput({ scope: "r-a" }));
    if ("reviewDataUnavailable" in scopedToA) throw new Error("unexpected");
    expect(scopedToA.dueItems.map((i) => i.id)).toEqual(["item-1", "item-2"]);
  });
});
