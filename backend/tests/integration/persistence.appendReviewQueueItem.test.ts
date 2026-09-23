import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { appendReviewQueueItem, getReviewQueueStatus, reload } from "../../src/persistence/queries.js";

// T014 (US1), written independently from data-model.md's "004 계약의
// additive 확장" section (NOT from reading queries.ts's implementation body
// beyond the exported function signature). Verifies: (1) an immediate INSERT
// is visible via getReviewQueueStatus() WITHOUT a reload() in between
// (research.md §3's whole rationale -- avoiding an 18s full reload per
// wrong answer), (2) INSERT OR IGNORE semantics on a duplicate id, (3) a
// clear thrown error against a dbPath with no schema-applied file yet.

const tmpDirs: string[] = [];

function freshEmptyDir(prefix: string): string {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  tmpDirs.push(dir);
  return dir;
}

function buildEmptySchemaDb(): string {
  const dbPath = path.join(freshEmptyDir("append-rqi-db-"), "cache.sqlite");
  reload({
    dbPath,
    reviewQueuePath: path.join(freshEmptyDir("append-rqi-rq-"), "nonexistent.md"),
    studyProgressRoot: freshEmptyDir("append-rqi-sp-"),
    coursesRoot: freshEmptyDir("append-rqi-courses-"),
  });
  return dbPath;
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

const REFERENCE_DATE = "2026-09-23";

describe("appendReviewQueueItem() - immediate visibility without reload() (T014, research.md §3)", () => {
  it("a freshly appended item is visible via getReviewQueueStatus() without calling reload() again", () => {
    const dbPath = buildEmptySchemaDb();

    const before = getReviewQueueStatus(REFERENCE_DATE, dbPath);
    expect(before.totalActiveCount).toBe(0);

    appendReviewQueueItem(
      {
        id: "test-item-1",
        item: "테스트 항목",
        topic: "테스트 주제",
        firstWrongDate: "2026-09-22",
        stageLabel: "1회차",
        nextReviewDate: "2026-09-23",
      },
      dbPath,
    );

    const after = getReviewQueueStatus(REFERENCE_DATE, dbPath);
    expect(after.totalActiveCount).toBe(1);
    expect(after.dueItems).toHaveLength(1);
    expect(after.dueItems[0]!.item).toBe("테스트 항목");
    expect(after.dueItems[0]!.topic).toBe("테스트 주제");
  });
});

describe("appendReviewQueueItem() - duplicate id does not create a duplicate row (INSERT OR IGNORE)", () => {
  it("calling twice with the same id leaves exactly one row", () => {
    const dbPath = buildEmptySchemaDb();

    const item = {
      id: "dup-item-1",
      item: "중복 항목",
      topic: "중복 주제",
      firstWrongDate: "2026-09-22",
      stageLabel: "1회차",
      nextReviewDate: "2026-09-23",
    };
    appendReviewQueueItem(item, dbPath);
    appendReviewQueueItem(item, dbPath);

    const status = getReviewQueueStatus(REFERENCE_DATE, dbPath);
    expect(status.totalActiveCount).toBe(1);
  });
});

describe("appendReviewQueueItem() - missing dbPath throws a clear error", () => {
  it("throws when dbPath does not exist yet (no schema applied)", () => {
    const dbPath = path.join(freshEmptyDir("append-rqi-missing-"), "does-not-exist.sqlite");
    expect(() =>
      appendReviewQueueItem(
        {
          id: "x",
          item: "x",
          topic: "x",
          firstWrongDate: "2026-09-22",
          stageLabel: "1회차",
          nextReviewDate: "2026-09-23",
        },
        dbPath,
      ),
    ).toThrow();
  });
});
