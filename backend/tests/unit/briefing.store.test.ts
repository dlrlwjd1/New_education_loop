import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  insertSnapshot,
  getSnapshotById,
  findLatestSnapshotForKey,
  listSnapshotsByDate,
} from "../../src/briefing/store.js";
import type { BriefingSnapshot } from "../../src/briefing/types.js";

// T009 (US1), written independently from
// specs/005-briefing/contracts/briefing-library.md's store functions and
// research.md §1 ("latest wins" dedup) -- NOT by reading store.ts's
// implementation body. Every function here takes an explicit dbPath, so
// isolation needs no mocking: each test gets its own throwaway temp SQLite
// file, and 내학습/briefing-history.sqlite is never touched.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-store-"));
  tmpDirs.push(dir);
  return path.join(dir, "briefing-history.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

function makeSnapshot(overrides: Partial<Omit<BriefingSnapshot, "id">> = {}): Omit<BriefingSnapshot, "id"> {
  return {
    referenceDate: "2026-09-23",
    timezone: "Asia/Seoul",
    scope: "all",
    createdAt: "2026-09-23T01:00:00.000Z",
    roadmaps: [
      { roadmapId: "r-a", title: "로드맵 A", completedCount: 5, totalCount: 10, status: "normal", percentLabel: "50.0% (5/10)" },
      { roadmapId: "r-b", title: "로드맵 B", completedCount: 0, totalCount: 20, status: "not_started", percentLabel: "0% (미시작)" },
    ],
    averageProgressRatio: 0.25,
    averageProgressRoadmapCount: 2,
    dueItems: [
      { id: "item-1", item: "항목1", topic: "주제1", nextReviewDate: "2026-09-20", overdueDays: 3 },
      { id: "item-2", item: "항목2", topic: "주제2", nextReviewDate: "2026-09-22", overdueDays: 1 },
    ],
    dueReviewCount: 2,
    totalActiveCount: 5,
    ...overrides,
  };
}

describe("insertSnapshot() + getSnapshotById() - exact round-trip", () => {
  it("returns every field back exactly as inserted, including totalActiveCount and array order", () => {
    const dbPath = freshDbPath();
    const snapshot = makeSnapshot();
    const stored = insertSnapshot(snapshot, dbPath);

    expect(typeof stored.id).toBe("number");

    const fetched = getSnapshotById(stored.id, dbPath);
    expect(fetched).not.toBeNull();
    expect(fetched).toEqual(stored);
    expect(fetched?.totalActiveCount).toBe(5);
    expect(fetched?.roadmaps.map((r) => r.roadmapId)).toEqual(["r-a", "r-b"]);
    expect(fetched?.dueItems.map((i) => i.id)).toEqual(["item-1", "item-2"]);
  });

  it("preserves roadmaps/dueItems array order even when inserted in a non-alphabetical order", () => {
    const dbPath = freshDbPath();
    const snapshot = makeSnapshot({
      roadmaps: [
        { roadmapId: "r-z", title: "Z 로드맵", completedCount: 1, totalCount: 2, status: "normal", percentLabel: "50.0% (1/2)" },
        { roadmapId: "r-a", title: "A 로드맵", completedCount: 0, totalCount: 2, status: "not_started", percentLabel: "0% (미시작)" },
      ],
      dueItems: [
        { id: "item-9", item: "나중 항목", topic: "주제", nextReviewDate: "2026-09-21", overdueDays: 2 },
        { id: "item-1", item: "먼저 항목", topic: "주제", nextReviewDate: "2026-09-23", overdueDays: 0 },
      ],
    });
    const stored = insertSnapshot(snapshot, dbPath);
    const fetched = getSnapshotById(stored.id, dbPath);
    expect(fetched?.roadmaps.map((r) => r.roadmapId)).toEqual(["r-z", "r-a"]);
    expect(fetched?.dueItems.map((i) => i.id)).toEqual(["item-9", "item-1"]);
  });

  it("getSnapshotById returns null for a nonexistent id (never throws)", () => {
    const dbPath = freshDbPath();
    expect(getSnapshotById(999999, dbPath)).toBeNull();
  });
});

describe("findLatestSnapshotForKey() - research.md §1 dedup key lookup", () => {
  it("returns null when no snapshot matches the (referenceDate, timezone, scope) key", () => {
    const dbPath = freshDbPath();
    insertSnapshot(makeSnapshot({ referenceDate: "2026-09-23", scope: "all" }), dbPath);

    expect(findLatestSnapshotForKey("2026-09-24", "Asia/Seoul", "all", dbPath)).toBeNull();
    expect(findLatestSnapshotForKey("2026-09-23", "Asia/Seoul", "r-a", dbPath)).toBeNull();
    expect(findLatestSnapshotForKey("2026-09-23", "America/New_York", "all", dbPath)).toBeNull();
  });

  it("returns the correct snapshot when multiple different keys exist side by side", () => {
    const dbPath = freshDbPath();
    const all23 = insertSnapshot(makeSnapshot({ referenceDate: "2026-09-23", scope: "all" }), dbPath);
    const rA23 = insertSnapshot(makeSnapshot({ referenceDate: "2026-09-23", scope: "r-a" }), dbPath);
    const all24 = insertSnapshot(makeSnapshot({ referenceDate: "2026-09-24", scope: "all" }), dbPath);

    expect(findLatestSnapshotForKey("2026-09-23", "Asia/Seoul", "all", dbPath)?.id).toBe(all23.id);
    expect(findLatestSnapshotForKey("2026-09-23", "Asia/Seoul", "r-a", dbPath)?.id).toBe(rA23.id);
    expect(findLatestSnapshotForKey("2026-09-24", "Asia/Seoul", "all", dbPath)?.id).toBe(all24.id);
  });

  it('"latest wins": two snapshots for the SAME key -> returns the one with the most recent createdAt', () => {
    const dbPath = freshDbPath();
    const older = insertSnapshot(
      makeSnapshot({ referenceDate: "2026-09-23", scope: "all", createdAt: "2026-09-23T01:00:00.000Z" }),
      dbPath,
    );
    const newer = insertSnapshot(
      makeSnapshot({ referenceDate: "2026-09-23", scope: "all", createdAt: "2026-09-23T09:00:00.000Z" }),
      dbPath,
    );

    const latest = findLatestSnapshotForKey("2026-09-23", "Asia/Seoul", "all", dbPath);
    expect(latest?.id).toBe(newer.id);
    expect(latest?.id).not.toBe(older.id);
  });
});

describe("listSnapshotsByDate() - FR-015 ordering", () => {
  it("sorts by referenceDate descending, then createdAt descending within the same date", () => {
    const dbPath = freshDbPath();
    // Inserted deliberately out of order to prove the query sorts, not the
    // insertion order.
    const midDateEarlyCreated = insertSnapshot(
      makeSnapshot({ referenceDate: "2026-09-22", createdAt: "2026-09-22T01:00:00.000Z", scope: "all" }),
      dbPath,
    );
    const lateDate = insertSnapshot(
      makeSnapshot({ referenceDate: "2026-09-23", createdAt: "2026-09-23T01:00:00.000Z", scope: "all" }),
      dbPath,
    );
    const midDateLateCreated = insertSnapshot(
      makeSnapshot({ referenceDate: "2026-09-22", createdAt: "2026-09-22T09:00:00.000Z", scope: "r-a" }),
      dbPath,
    );

    const list = listSnapshotsByDate(dbPath);
    expect(list.map((s) => s.id)).toEqual([lateDate.id, midDateLateCreated.id, midDateEarlyCreated.id]);
  });

  it("returns an empty array when no snapshots exist yet", () => {
    const dbPath = freshDbPath();
    expect(listSnapshotsByDate(dbPath)).toEqual([]);
  });
});
