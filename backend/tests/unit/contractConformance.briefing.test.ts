import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T030 (Polish): verifies the five functions named in
// contracts/briefing-library.md exist with the parameter/return shapes the
// contract documents, mirroring 001/002/004's contractConformance.*.test.ts
// pattern. This is a structural check, not a behavior re-test (that's
// covered by T002/T003/T008/T009/T010/T023's dedicated tests).
//
// generateBriefing() is exercised through the same vi.mock() isolation as
// briefing.service.test.ts (see that file's header for the full rationale --
// generateBriefing() has no dbPath/logPath override of its own, so
// persistence/queries.js/briefing/store.js/briefing/logFile.js must all be
// mocked to keep this file from touching any real file).

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
  };
});

import { formatProgress } from "../../src/briefing/formatProgress.js";
import { buildSnapshot } from "../../src/briefing/buildSnapshot.js";
import { generateBriefing } from "../../src/briefing/service.js";
import { listSnapshotsByDate, getSnapshotById, insertSnapshot } from "../../src/briefing/store.js";
import { listRoadmaps, getReviewQueueStatus } from "../../src/persistence/queries.js";

const tmpDirs: string[] = [];

beforeEach(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-contract-"));
  tmpDirs.push(dir);
  dbPathHolder.path = path.join(dir, "briefing-history.sqlite");
});

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("contract conformance: contracts/briefing-library.md (T030)", () => {
  it("formatProgress(completedCount, totalCount, hasPhaseDocs) is a pure function returning {status, percentLabel}", () => {
    expect(typeof formatProgress).toBe("function");
    expect(formatProgress.length).toBe(3);

    const result = formatProgress(5, 10, true);
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("percentLabel");
    expect(typeof result.status).toBe("string");
    expect(typeof result.percentLabel).toBe("string");
  });

  it("buildSnapshot(input) exists and returns a BriefingSnapshot-shaped object or {reviewDataUnavailable, roadmaps}", () => {
    expect(typeof buildSnapshot).toBe("function");
    expect(buildSnapshot.length).toBe(1);

    const roadmapSummaries: RoadmapSummary[] = [
      { roadmapId: "r-a", title: "A", hasPhaseDocs: true, completedCount: 1, totalCount: 2, progressRatio: 0.5, needsReviewCount: 0 },
    ];
    const reviewStatus: ReviewQueueStatus = { totalActiveCount: 0, dueItems: [] };

    const okResult = buildSnapshot({
      referenceDate: "2026-09-23",
      timezone: "Asia/Seoul",
      scope: "all",
      roadmapSummaries,
      dueReviewResult: reviewStatus,
    });
    expect(okResult).toHaveProperty("referenceDate");
    expect(okResult).toHaveProperty("roadmaps");
    expect(okResult).toHaveProperty("averageProgressRatio");
    expect(okResult).toHaveProperty("averageProgressRoadmapCount");
    expect(okResult).toHaveProperty("dueItems");
    expect(okResult).toHaveProperty("dueReviewCount");
    expect(okResult).toHaveProperty("totalActiveCount");
    expect(okResult).not.toHaveProperty("id"); // Omit<BriefingSnapshot, "id"> until stored

    const degradedResult = buildSnapshot({
      referenceDate: "2026-09-23",
      timezone: "Asia/Seoul",
      scope: "all",
      roadmapSummaries,
      dueReviewResult: new Error("boom"),
    });
    expect(degradedResult).toHaveProperty("reviewDataUnavailable", true);
    expect(degradedResult).toHaveProperty("roadmaps");
  });

  it("generateBriefing(options?) exists, accepts scope/forceNew/timezone/now, and returns a discriminated union of the three documented shapes", () => {
    expect(typeof generateBriefing).toBe("function");
    expect(generateBriefing.length).toBeLessThanOrEqual(1); // single optional options object

    vi.mocked(listRoadmaps).mockReturnValue([
      { roadmapId: "r-a", title: "A", hasPhaseDocs: true, completedCount: 1, totalCount: 2, progressRatio: 0.5, needsReviewCount: 0 },
    ]);
    vi.mocked(getReviewQueueStatus).mockReturnValue({ totalActiveCount: 0, dueItems: [] });

    const ok = generateBriefing({ scope: "all", timezone: "Asia/Seoul", now: new Date("2026-09-23T05:00:00.000Z") });
    expect("id" in ok).toBe(true);
    expect("error" in ok).toBe(false);
    expect("reviewDataUnavailable" in ok).toBe(false);

    const notFound = generateBriefing({ scope: "does-not-exist", timezone: "Asia/Seoul", now: new Date("2026-09-23T05:00:00.000Z") });
    expect(notFound).toEqual({ error: "roadmap_not_found" });

    vi.mocked(getReviewQueueStatus).mockImplementation(() => {
      throw new Error("boom");
    });
    const unavailable = generateBriefing({ scope: "all", timezone: "Asia/Seoul", now: new Date("2026-09-24T05:00:00.000Z") });
    expect(unavailable).toHaveProperty("reviewDataUnavailable", true);
  });

  it("listSnapshotsByDate(dbPath?) exists and returns the documented summary row shape, date/created-at descending", () => {
    expect(typeof listSnapshotsByDate).toBe("function");
    expect(listSnapshotsByDate.length).toBeLessThanOrEqual(1);

    insertSnapshot(
      {
        referenceDate: "2026-09-23",
        timezone: "Asia/Seoul",
        scope: "all",
        createdAt: "2026-09-23T00:00:00.000Z",
        roadmaps: [],
        averageProgressRatio: null,
        averageProgressRoadmapCount: 0,
        dueItems: [],
        dueReviewCount: 0,
        totalActiveCount: 0,
      },
      dbPathHolder.path,
    );

    const list = listSnapshotsByDate(dbPathHolder.path);
    expect(Array.isArray(list)).toBe(true);
    expect(list).toHaveLength(1);
    const row = list[0]!;
    expect(row).toHaveProperty("id");
    expect(row).toHaveProperty("referenceDate");
    expect(row).toHaveProperty("scope");
    expect(row).toHaveProperty("createdAt");
    expect(row).toHaveProperty("averageProgressRatio");
    expect(row).toHaveProperty("dueReviewCount");
  });

  it("getSnapshotById(id, dbPath?) exists, returns a full BriefingSnapshot for a known id, and null for an unknown one", () => {
    expect(typeof getSnapshotById).toBe("function");
    expect(getSnapshotById.length).toBeLessThanOrEqual(2);

    const stored = insertSnapshot(
      {
        referenceDate: "2026-09-23",
        timezone: "Asia/Seoul",
        scope: "all",
        createdAt: "2026-09-23T00:00:00.000Z",
        roadmaps: [
          { roadmapId: "r-a", title: "A", completedCount: 1, totalCount: 2, status: "normal", percentLabel: "50.0% (1/2)" },
        ],
        averageProgressRatio: 0.5,
        averageProgressRoadmapCount: 1,
        dueItems: [{ id: "i1", item: "항목", topic: "주제", nextReviewDate: "2026-09-20", overdueDays: 3 }],
        dueReviewCount: 1,
        totalActiveCount: 1,
      },
      dbPathHolder.path,
    );

    const fetched = getSnapshotById(stored.id, dbPathHolder.path);
    expect(fetched).not.toBeNull();
    expect(fetched).toHaveProperty("id", stored.id);
    expect(fetched).toHaveProperty("roadmaps");
    expect(fetched).toHaveProperty("dueItems");
    expect(fetched).toHaveProperty("totalActiveCount", 1);

    expect(getSnapshotById(999999, dbPathHolder.path)).toBeNull();
  });
});
