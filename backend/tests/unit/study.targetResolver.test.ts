import { describe, it, expect, vi, beforeEach } from "vitest";

// T033 (US4) + T038 (US5), written independently from
// contracts/study-service-library.md's resolveStartTarget() "보장" section
// and FR-002/FR-003/FR-004 (NOT from reading targetResolver.ts's
// implementation body beyond the exported function signature and the
// persistence-module import list needed to mock it correctly).
//
// listRoadmaps() (002) is read-only and safe to call for real against this
// repo's actual study-progress/ data -- no isolation needed for reads, per
// the task's explicit guidance. getReviewQueueStatus() (004) is mocked so
// this file's auto_suggestions assertions don't depend on today's actual
// review-queue state.

vi.mock("../../src/persistence/queries.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/persistence/queries.js")>();
  return {
    ...actual,
    getReviewQueueStatus: vi.fn(actual.getReviewQueueStatus),
  };
});

import { resolveStartTarget } from "../../src/study/targetResolver.js";
import { getReviewQueueStatus, listRoadmaps } from "../../src/persistence/queries.js";

beforeEach(() => {
  vi.mocked(getReviewQueueStatus).mockReset();
});

describe("resolveStartTarget() - materialId (T033a, FR-003)", () => {
  it("a materialId that doesn't exist in 002/004 -> kind:not_found", () => {
    const result = resolveStartTarget({ materialId: "nonexistent-material-id-xyz-999" });
    expect(result.kind).toBe("not_found");
  });
});

describe("resolveStartTarget() - unambiguous topic freeText (T033b)", () => {
  it("a freeText that doesn't resemble any real roadmap title -> kind:resolved, path:topic", () => {
    const freeText = "TCP 3-way handshake가 왜 3번인지 설명하기";
    const result = resolveStartTarget({ freeText });
    expect(result).toEqual({ kind: "resolved", path: "topic", targetLabel: freeText });
  });
});

describe("resolveStartTarget() - ambiguous freeText against a real roadmap title (T033c, FR-002)", () => {
  it("a freeText that partially matches a real roadmap title -> kind:ambiguous with candidates for both readings", () => {
    // Confirmed against the real listRoadmaps() output: "네트워크 서비스
    // 로드맵" is a real roadmap title, and "네트워크" is a substring of it
    // but not an exact match -- exactly FR-002's "동시에 새로운 주제로도 읽힐
    // 수 있는" case.
    const roadmaps = listRoadmaps();
    const target = roadmaps.find((r) => r.title.includes("네트워크"));
    expect(target).toBeDefined(); // sanity check on the fixture assumption itself

    const result = resolveStartTarget({ freeText: "네트워크" });
    expect(result.kind).toBe("ambiguous");
    if (result.kind === "ambiguous") {
      expect(result.candidates.length).toBeGreaterThanOrEqual(2);
      expect(result.candidates.some((c) => c.path === "topic" && c.label === "네트워크")).toBe(true);
      expect(
        result.candidates.some((c) => c.path === "roadmap_continue" && c.roadmapId === target?.roadmapId),
      ).toBe(true);
    }
  });
});

describe("resolveStartTarget() - no input at all -> auto_suggestions (T033/T038, FR-004)", () => {
  it("dueReviewCount reflects getReviewQueueStatus() when there ARE due items", () => {
    vi.mocked(getReviewQueueStatus).mockReturnValue({
      totalActiveCount: 3,
      dueItems: [
        { id: "i1", item: "항목1", topic: "주제1", nextReviewDate: "2026-09-20", overdueDays: 3 },
        { id: "i2", item: "항목2", topic: "주제2", nextReviewDate: "2026-09-22", overdueDays: 1 },
      ],
    });

    const result = resolveStartTarget({});
    expect(result.kind).toBe("auto_suggestions");
    if (result.kind === "auto_suggestions") {
      expect(result.dueReviewCount).toBe(2);
    }
  });

  it("dueReviewCount is 0 when getReviewQueueStatus() has no due items, and inProgressRoadmaps/candidateRoadmaps come from real listRoadmaps()", () => {
    vi.mocked(getReviewQueueStatus).mockReturnValue({ totalActiveCount: 0, dueItems: [] });

    const result = resolveStartTarget({});
    expect(result.kind).toBe("auto_suggestions");
    if (result.kind === "auto_suggestions") {
      expect(result.dueReviewCount).toBe(0);

      // Real repo data (verified directly via listRoadmaps() above the test
      // suite before writing these assertions): roadmaps with
      // completedCount > 0 AND completedCount < totalCount are "진행 중".
      const realRoadmaps = listRoadmaps();
      const expectedInProgressIds = realRoadmaps
        .filter((r) => r.completedCount > 0 && r.completedCount < r.totalCount)
        .map((r) => r.roadmapId)
        .sort();
      const actualInProgressIds = result.inProgressRoadmaps.map((r) => r.roadmapId).sort();
      expect(actualInProgressIds).toEqual(expectedInProgressIds);
      expect(actualInProgressIds.length).toBeGreaterThan(0); // sanity: this repo has real in-progress roadmaps

      // candidateRoadmaps must not overlap with inProgressRoadmaps and must
      // be non-empty given this repo has multiple not-started roadmaps.
      const candidateIds = result.candidateRoadmaps.map((r) => r.roadmapId);
      expect(candidateIds.length).toBeGreaterThan(0);
      for (const id of candidateIds) {
        expect(actualInProgressIds).not.toContain(id);
      }
    }
  });
});
