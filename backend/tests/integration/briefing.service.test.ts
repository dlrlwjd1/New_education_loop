import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T010 (US1): generateBriefing() integration test, written independently from
// specs/005-briefing/contracts/briefing-library.md (NOT from reading
// service.ts's implementation body).
//
// ISOLATION -- READ THIS FIRST (documented per the task's explicit request):
//
// generateBriefing()'s own options (contracts/briefing-library.md:
// scope/forceNew/timezone/now) do NOT include a dbPath override. Reading
// service.ts confirms why testing it is trickier than 002/004's reload():
//   - it calls persistence/queries.js's listRoadmaps() and
//     getReviewQueueStatus(referenceDate) with NO dbPath argument, so those
//     always resolve to 002/004's DEFAULT_DB_PATH (backend/.cache/learning-loop.sqlite);
//   - it calls briefing/store.js's findLatestSnapshotForKey()/insertSnapshot()
//     with NO dbPath argument, so those always resolve to
//     DEFAULT_BRIEFING_DB_PATH (내학습/briefing-history.sqlite, a REAL file);
//   - it calls briefing/logFile.js's appendSnapshot() with NO logPath
//     argument, so it always resolves to DEFAULT_BRIEFING_LOG_PATH
//     (내학습/브리핑로그.md, a REAL file).
// In other words: unlike listSnapshotsByDate(dbPath?)/getSnapshotById(id, dbPath?)
// (which DO take a test-only dbPath per the contract's "안정성 계약"),
// generateBriefing() itself has no test-isolation lever at all. Calling it
// directly in a test -- even with 002/004 mocked -- would still write a real
// row into 내학습/briefing-history.sqlite and append a real section to
// 내학습/브리핑로그.md. See this file's final report for why this is flagged
// as a real gap.
//
// The safe workaround used here: vi.mock() all three modules
// generateBriefing() imports by name, so its calls are intercepted before
// they ever reach a default path:
//   - persistence/queries.js's listRoadmaps/getReviewQueueStatus -> plain
//     vi.fn() stubs returning synthetic fixtures (no real file access at all).
//   - briefing/logFile.js's appendSnapshot -> a no-op vi.fn() (T012 already
//     covers appendSnapshot's own behavior in isolation).
//   - briefing/store.js's insertSnapshot/findLatestSnapshotForKey ->
//     wrappers that delegate to the REAL implementation but forward a
//     per-test temp dbPath (via a `vi.hoisted()` mutable holder, reassigned
//     in beforeEach to a fresh mkdtempSync() directory) instead of the
//     omitted argument. This keeps store.ts's real dedup/insert SQL under
//     test while guaranteeing 내학습/briefing-history.sqlite is never opened.
// listSnapshotsByDate is also wrapped the same way, purely so this test can
// assert "no new row was created" after an error case.

const dbPathHolder = vi.hoisted(() => ({ path: "" }));

vi.mock("../../src/persistence/queries.js", () => ({
  listRoadmaps: vi.fn(),
  getReviewQueueStatus: vi.fn(),
}));

vi.mock("../../src/briefing/logFile.js", () => ({
  appendSnapshot: vi.fn(),
}));

vi.mock("../../src/briefing/store.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/briefing/store.js")>();
  return {
    ...actual,
    insertSnapshot: (snapshot: Parameters<typeof actual.insertSnapshot>[0]) =>
      actual.insertSnapshot(snapshot, dbPathHolder.path),
    findLatestSnapshotForKey: (referenceDate: string, timezone: string, scope: string) =>
      actual.findLatestSnapshotForKey(referenceDate, timezone, scope, dbPathHolder.path),
    listSnapshotsByDate: () => actual.listSnapshotsByDate(dbPathHolder.path),
  };
});

import { generateBriefing } from "../../src/briefing/service.js";
import { listRoadmaps, getReviewQueueStatus } from "../../src/persistence/queries.js";
import { listSnapshotsByDate } from "../../src/briefing/store.js";

const ROADMAP_A: RoadmapSummary = {
  roadmapId: "r-a",
  title: "로드맵 A",
  hasPhaseDocs: true,
  completedCount: 5,
  totalCount: 10,
  progressRatio: 0.5,
  needsReviewCount: 0,
};
const ROADMAP_B: RoadmapSummary = {
  roadmapId: "r-b",
  title: "로드맵 B",
  hasPhaseDocs: true,
  completedCount: 0,
  totalCount: 20,
  progressRatio: 0,
  needsReviewCount: 0,
};

const REVIEW_STATUS: ReviewQueueStatus = {
  totalActiveCount: 2,
  dueItems: [
    { id: "item-1", item: "항목1", topic: "주제1", nextReviewDate: "2026-09-20", overdueDays: 3 },
    { id: "item-2", item: "항목2", topic: "주제2", nextReviewDate: "2026-09-22", overdueDays: 1 },
  ],
};

// 2026-09-23T05:00:00Z is 2026-09-23 14:00 in Asia/Seoul -- safely mid-day,
// no risk of the UTC/local date crossing midnight either way.
const FIXED_NOW = new Date("2026-09-23T05:00:00.000Z");

const tmpDirs: string[] = [];

beforeEach(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-service-"));
  tmpDirs.push(dir);
  dbPathHolder.path = path.join(dir, "briefing-history.sqlite");

  vi.mocked(listRoadmaps).mockReset().mockReturnValue([ROADMAP_A, ROADMAP_B]);
  vi.mocked(getReviewQueueStatus).mockReset().mockReturnValue(REVIEW_STATUS);
});

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("generateBriefing() - normal flow matches 002/004 input data", () => {
  it("returns a stored snapshot whose fields match the mocked listRoadmaps()/getReviewQueueStatus() data", () => {
    const result = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    if ("error" in result || "reviewDataUnavailable" in result) {
      throw new Error(`expected a stored snapshot, got ${JSON.stringify(result)}`);
    }

    expect(result.referenceDate).toBe("2026-09-23");
    expect(result.timezone).toBe("Asia/Seoul");
    expect(result.scope).toBe("all");
    expect(typeof result.id).toBe("number");
    expect(result.roadmaps.map((r) => r.roadmapId)).toEqual(["r-a", "r-b"]);
    expect(result.roadmaps.map((r) => r.percentLabel)).toEqual(["50.0% (5/10)", "0% (미시작)"]);
    expect(result.averageProgressRatio).toBeCloseTo(0.25, 10); // (0.5 + 0) / 2
    expect(result.averageProgressRoadmapCount).toBe(2);
    expect(result.dueItems.map((i) => i.id)).toEqual(["item-1", "item-2"]);
    expect(result.dueReviewCount).toBe(2);
    expect(result.totalActiveCount).toBe(2);
  });
});

describe("generateBriefing() - dedup without forceNew (research.md §1, SC-004)", () => {
  it("calling again with the same (referenceDate, timezone, scope) returns the SAME id, no new row", () => {
    const first = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    if ("error" in first || "reviewDataUnavailable" in first) throw new Error("unexpected");

    const second = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    if ("error" in second || "reviewDataUnavailable" in second) throw new Error("unexpected");

    expect(second.id).toBe(first.id);
    expect(listSnapshotsByDate()).toHaveLength(1);
  });

  it("forceNew:true always creates a new row, even back-to-back with identical inputs", () => {
    const first = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    const second = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    if ("error" in first || "reviewDataUnavailable" in first) throw new Error("unexpected");
    if ("error" in second || "reviewDataUnavailable" in second) throw new Error("unexpected");

    expect(second.id).not.toBe(first.id);
    expect(listSnapshotsByDate()).toHaveLength(2);
  });
});

describe("generateBriefing() - FR-018 invalid scope", () => {
  it('an unknown roadmapId returns {error:"roadmap_not_found"} and creates nothing', () => {
    const result = generateBriefing({ scope: "does-not-exist", now: FIXED_NOW, timezone: "Asia/Seoul" });
    expect(result).toEqual({ error: "roadmap_not_found" });
    expect(listSnapshotsByDate()).toHaveLength(0);
  });
});

describe("generateBriefing() - research.md §4 review-data failure", () => {
  it("when getReviewQueueStatus() throws, the result is reviewDataUnavailable and nothing is stored", () => {
    vi.mocked(getReviewQueueStatus).mockImplementation(() => {
      throw new Error("004 캐시를 열 수 없습니다");
    });

    const result = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    expect(result).toHaveProperty("reviewDataUnavailable", true);
    if (!("reviewDataUnavailable" in result)) throw new Error("unexpected");
    expect(result.roadmaps.map((r) => r.roadmapId)).toEqual(["r-a", "r-b"]);
    expect(listSnapshotsByDate()).toHaveLength(0);
  });
});
