import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T023 (US3): focused on SC-004 / Acceptance Scenario US3-2 specifically --
// written independently from spec.md's SC-004 and the US3-2 scenario text
// ("같은 날 의도적으로 다시 실행하면 이전 기록과 별개인 새 기록이 하나 더
// 생긴다"), not from reading service.ts's implementation body.
//
// Isolation strategy is identical to briefing.service.test.ts (see that
// file's header comment for the full rationale): generateBriefing() has no
// dbPath/logPath override of its own, so persistence/queries.js,
// briefing/store.js, and briefing/logFile.js are all vi.mock()'d so this
// file never touches backend/.cache/learning-loop.sqlite,
// 내학습/briefing-history.sqlite, or 내학습/브리핑로그.md.

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
  completedCount: 2,
  totalCount: 4,
  progressRatio: 0.5,
  needsReviewCount: 0,
};
const REVIEW_STATUS: ReviewQueueStatus = { totalActiveCount: 0, dueItems: [] };
const FIXED_NOW = new Date("2026-09-23T05:00:00.000Z");

const tmpDirs: string[] = [];

beforeEach(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-dedup-"));
  tmpDirs.push(dir);
  dbPathHolder.path = path.join(dir, "briefing-history.sqlite");

  vi.mocked(listRoadmaps).mockReset().mockReturnValue([ROADMAP_A]);
  vi.mocked(getReviewQueueStatus).mockReset().mockReturnValue(REVIEW_STATUS);
});

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("generateBriefing() dedup key = (referenceDate, timezone, scope) (SC-004)", () => {
  it("repeated calls WITHOUT forceNew for the same key never create more than one row", () => {
    generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });

    expect(listSnapshotsByDate()).toHaveLength(1);
  });

  it("the id returned is identical across repeated non-forceNew calls (simulates page refresh / retry)", () => {
    const first = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    const second = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    const third = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });

    if ("error" in first || "reviewDataUnavailable" in first) throw new Error("unexpected");
    if ("error" in second || "reviewDataUnavailable" in second) throw new Error("unexpected");
    if ("error" in third || "reviewDataUnavailable" in third) throw new Error("unexpected");

    expect(second.id).toBe(first.id);
    expect(third.id).toBe(first.id);
  });

  it("different scopes for the same date/timezone are independent dedup keys (each gets its own row)", () => {
    vi.mocked(listRoadmaps).mockReturnValue([ROADMAP_A]);
    generateBriefing({ scope: "all", now: FIXED_NOW, timezone: "Asia/Seoul" });
    generateBriefing({ scope: "r-a", now: FIXED_NOW, timezone: "Asia/Seoul" });
    generateBriefing({ scope: "all", now: FIXED_NOW, timezone: "Asia/Seoul" }); // repeat of the first key

    expect(listSnapshotsByDate()).toHaveLength(2);
  });
});

describe("generateBriefing() forceNew:true (Acceptance Scenario US3-2)", () => {
  it("always creates a new row for the same key, even called back-to-back with no other calls in between", () => {
    const first = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    const second = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    const third = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });

    if ("error" in first || "reviewDataUnavailable" in first) throw new Error("unexpected");
    if ("error" in second || "reviewDataUnavailable" in second) throw new Error("unexpected");
    if ("error" in third || "reviewDataUnavailable" in third) throw new Error("unexpected");

    const ids = [first.id, second.id, third.id];
    expect(new Set(ids).size).toBe(3); // all distinct
    expect(listSnapshotsByDate()).toHaveLength(3);
  });

  it("a forceNew call followed by a plain (non-forceNew) call reuses the LATEST forced row, not an older one", () => {
    generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    const secondForced = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul", forceNew: true });
    if ("error" in secondForced || "reviewDataUnavailable" in secondForced) throw new Error("unexpected");

    const plain = generateBriefing({ now: FIXED_NOW, timezone: "Asia/Seoul" });
    if ("error" in plain || "reviewDataUnavailable" in plain) throw new Error("unexpected");

    expect(plain.id).toBe(secondForced.id);
    expect(listSnapshotsByDate()).toHaveLength(2); // the plain call added no third row
  });
});
