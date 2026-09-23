import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, getReviewQueueStatus, listMasteredItems } from "../../src/persistence/queries.js";

// T023 (US3): quickstart.md 시나리오 4 / SC-003. mixed.md has 3 active rows
// and 2 mastered rows. Mastered items must never appear in
// getReviewQueueStatus().dueItems, and listMasteredItems() must reproduce
// the fixture's mastered rows exactly.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MIXED_MD = path.join(HERE, "..", "fixtures", "review-queue", "mixed.md");

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "reviewqueue-mastered-db-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

function freshEmptyDir(prefix: string): string {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  tmpDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("mixed.md - active/mastered separation (T023, SC-003)", () => {
  it("dueItems and listMasteredItems() share no ids, and listMasteredItems() matches the fixture's mastered rows exactly", () => {
    const dbPath = freshDbPath();
    reload({
      reviewQueuePath: MIXED_MD,
      dbPath,
      studyProgressRoot: freshEmptyDir("reviewqueue-mastered-sp-"),
      coursesRoot: freshEmptyDir("reviewqueue-mastered-courses-"),
    });

    const status = getReviewQueueStatus("2026-09-23", dbPath);
    const mastered = listMasteredItems(dbPath);

    // mixed.md's 3 active rows all have nextReviewDate <= 2026-09-23.
    expect(status.totalActiveCount).toBe(3);
    expect(status.dueItems).toHaveLength(3);

    const dueIds = new Set(status.dueItems.map((i) => i.id));
    const masteredIds = new Set(mastered.map((i) => i.id));
    const intersection = [...dueIds].filter((id) => masteredIds.has(id));
    expect(intersection).toEqual([]); // SC-003: not a single mastered id leaks into dueItems

    expect(mastered).toHaveLength(2);
    const byItem = Object.fromEntries(mastered.map((m) => [m.item, m]));
    expect(byItem["OSI 7계층 순서 암기"]).toMatchObject({
      topic: "네트워크 서비스 Phase 1",
      firstWrongDate: "2026-06-01",
      masteredDate: "2026-08-10",
    });
    expect(byItem["이진 탐색 시간복잡도"]).toMatchObject({
      topic: "알고리즘 Phase 1",
      firstWrongDate: "2026-05-20",
      masteredDate: "2026-07-30",
    });
    // Every mastered entry carries a non-empty id, and mastered.length === 2
    // guarantees none of the fixture's mastered rows silently disappeared.
    expect(mastered.every((m) => typeof m.id === "string" && m.id.length > 0)).toBe(true);
  });
});
