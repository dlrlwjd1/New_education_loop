import { describe, it, expect } from "vitest";
import type { LearningItemDetail, PhaseDetail, RoadmapDetail, TrackDetail } from "../../src/persistence/types.js";
import { findContinueTarget } from "../../src/web/continueStudy.js";

// T012 (US3, unit): findContinueTarget is a pure function - no server, no DB,
// hand-built fixtures only.
//
// (a) finds the first completed=false item in document order across mixed
//     completed/incomplete/needs-review trees.
// (b) completed=null items are NEVER returned as the found target - only
//     counted in skippedNeedsReviewCount (research.md §6).
// (c) if there is no completed=false item anywhere (all true and/or null),
//     found=false.

let itemCounter = 0;
function item(completed: boolean | null): LearningItemDetail {
  itemCounter += 1;
  return {
    itemId: `item-${itemCounter}`,
    text: `항목 ${itemCounter}`,
    completed,
    completedDate: completed === true ? "2026-01-01" : null,
    linkedMaterialId: null,
    needsReview: completed === null,
  };
}

function phase(phaseId: string, items: LearningItemDetail[]): PhaseDetail {
  return { phaseId, title: `Phase ${phaseId}`, aggregatable: true, items };
}

function track(trackId: string, phases: PhaseDetail[]): TrackDetail {
  return { trackId, title: `Track ${trackId}`, phases };
}

function detail(tracks: TrackDetail[], phases: PhaseDetail[] = []): RoadmapDetail {
  return { roadmapId: "r1", title: "로드맵", tracks, phases };
}

describe("findContinueTarget (US3, T012)", () => {
  it("(a) finds the first completed=false item in document order, across a mixed tree", () => {
    const target1 = item(true);
    const target2 = item(null); // skipped, counted
    const target3 = item(false); // <- the answer
    const target4 = item(false); // later false, must NOT be picked
    const p = phase("p1", [target1, target2, target3, target4]);
    const t = track("t1", [p]);

    const result = findContinueTarget(detail([t]));
    expect(result).toEqual({
      found: true,
      trackId: "t1",
      phaseId: "p1",
      itemId: target3.itemId,
      skippedNeedsReviewCount: 1,
    });
  });

  it("(a) continues into a later track/phase when earlier ones have no completed=false item", () => {
    const p1 = phase("p1", [item(true), item(null), item(true)]);
    const t1 = track("t1", [p1]);
    const p2Target = item(false);
    const p2 = phase("p2", [item(null), p2Target]);
    const t2 = track("t2", [p2]);

    const result = findContinueTarget(detail([t1, t2]));
    expect(result.found).toBe(true);
    expect(result.trackId).toBe("t2");
    expect(result.phaseId).toBe("p2");
    expect(result.itemId).toBe(p2Target.itemId);
    // 1 null in t1/p1 + 1 null in t2/p2 before the target = 2 total skipped.
    expect(result.skippedNeedsReviewCount).toBe(2);
  });

  it("(a) falls through to root-level phases (trackId: null) after all tracks are exhausted", () => {
    const t1 = track("t1", [phase("p1", [item(true), item(null)])]);
    const rootTarget = item(false);
    const rootPhase = phase("root-p1", [rootTarget]);

    const result = findContinueTarget(detail([t1], [rootPhase]));
    expect(result).toEqual({
      found: true,
      trackId: null,
      phaseId: "root-p1",
      itemId: rootTarget.itemId,
      skippedNeedsReviewCount: 1,
    });
  });

  it("(b) a completed=null item is never returned as the found target, even when it is the very first item", () => {
    const nullItem = item(null);
    const falseItem = item(false);
    const p = phase("p1", [nullItem, falseItem]);

    const result = findContinueTarget(detail([track("t1", [p])]));
    expect(result.found).toBe(true);
    expect(result.itemId).toBe(falseItem.itemId);
    expect(result.itemId).not.toBe(nullItem.itemId);
    expect(result.skippedNeedsReviewCount).toBe(1);
  });

  it("(c) found=false when every item is completed=true (no completed=false anywhere)", () => {
    const p = phase("p1", [item(true), item(true)]);
    const result = findContinueTarget(detail([track("t1", [p])]));
    expect(result).toEqual({
      found: false,
      trackId: null,
      phaseId: null,
      itemId: null,
      skippedNeedsReviewCount: 0,
    });
  });

  it("(c) found=false when every item is completed=null (all 'needs review'), and they are all still counted", () => {
    const p = phase("p1", [item(null), item(null), item(null)]);
    const result = findContinueTarget(detail([track("t1", [p])]));
    expect(result.found).toBe(false);
    expect(result.trackId).toBeNull();
    expect(result.phaseId).toBeNull();
    expect(result.itemId).toBeNull();
    expect(result.skippedNeedsReviewCount).toBe(3);
  });

  it("(c) found=false when items are a mix of completed=true and completed=null only (still no false anywhere)", () => {
    const p1 = phase("p1", [item(true), item(null)]);
    const p2 = phase("p2", [item(null), item(true)]);
    const result = findContinueTarget(detail([track("t1", [p1, p2])]));
    expect(result.found).toBe(false);
    expect(result.skippedNeedsReviewCount).toBe(2);
  });

  it("an empty tree (no tracks, no phases) returns found=false with skippedNeedsReviewCount=0", () => {
    const result = findContinueTarget(detail([]));
    expect(result).toEqual({
      found: false,
      trackId: null,
      phaseId: null,
      itemId: null,
      skippedNeedsReviewCount: 0,
    });
  });
});
