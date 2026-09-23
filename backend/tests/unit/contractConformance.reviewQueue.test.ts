import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseReviewQueue } from "../../src/reviewQueue/parseReviewQueue.js";
import { reload, getReviewQueueStatus, listMasteredItems, listReviewQueueImportErrors } from "../../src/persistence/queries.js";

// T030 (Polish): verifies the four functions named in
// contracts/review-queue-library.md exist with the parameter/return shapes
// the contract documents, mirroring 001/002's contractConformance.test.ts
// pattern. This is a structural check, not a behavior re-test (that's
// covered by the unit/integration tests for T010-T023).

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(HERE, "..", "fixtures", "review-queue");
const NORMAL_MD = path.join(FIXTURES, "normal.md");
const MIXED_MD = path.join(FIXTURES, "mixed.md");
const WITH_ERRORS_MD = path.join(FIXTURES, "with-errors.md");

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "reviewqueue-contract-db-"));
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

function isolatedReload(reviewQueuePath: string, dbPath: string) {
  return reload({
    reviewQueuePath,
    dbPath,
    studyProgressRoot: freshEmptyDir("reviewqueue-contract-sp-"),
    coursesRoot: freshEmptyDir("reviewqueue-contract-courses-"),
  });
}

describe("contract conformance: contracts/review-queue-library.md (T030)", () => {
  it("parseReviewQueue(markdownContent) is a pure function returning { activeItems, masteredItems, errors } arrays", () => {
    expect(typeof parseReviewQueue).toBe("function");
    expect(parseReviewQueue.length).toBe(1); // single required string parameter

    const result = parseReviewQueue("");
    expect(result).toHaveProperty("activeItems");
    expect(result).toHaveProperty("masteredItems");
    expect(result).toHaveProperty("errors");
    expect(Array.isArray(result.activeItems)).toBe(true);
    expect(Array.isArray(result.masteredItems)).toBe(true);
    expect(Array.isArray(result.errors)).toBe(true);
    // Empty/no-table input yields all-empty arrays, never an exception
    // (contract: "입력 문자열이 비어 있거나 두 표 모두 없으면 세 배열 모두
    // 빈 배열을 반환한다").
    expect(result).toEqual({ activeItems: [], masteredItems: [], errors: [] });
  });

  it("getReviewQueueStatus(referenceDate?, dbPath?) exists and returns { totalActiveCount, dueItems } with every documented DueReviewItem field", () => {
    expect(typeof getReviewQueueStatus).toBe("function");
    expect(getReviewQueueStatus.length).toBeLessThanOrEqual(2); // both params optional per the contract

    const dbPath = freshDbPath();
    isolatedReload(NORMAL_MD, dbPath);

    const status = getReviewQueueStatus("2026-09-23", dbPath);
    expect(status).toHaveProperty("totalActiveCount");
    expect(status).toHaveProperty("dueItems");
    expect(typeof status.totalActiveCount).toBe("number");
    expect(Array.isArray(status.dueItems)).toBe(true);
    expect(status.dueItems.length).toBeGreaterThan(0);

    const due = status.dueItems[0]!;
    expect(due).toHaveProperty("id");
    expect(due).toHaveProperty("item");
    expect(due).toHaveProperty("topic");
    expect(due).toHaveProperty("nextReviewDate");
    expect(due).toHaveProperty("overdueDays");
    expect(typeof due.overdueDays).toBe("number");
    expect(due.overdueDays).toBeGreaterThanOrEqual(0); // contract: always >= 0
  });

  it("listMasteredItems(dbPath?) exists and returns MasteredItemView[] with every documented field", () => {
    expect(typeof listMasteredItems).toBe("function");
    expect(listMasteredItems.length).toBeLessThanOrEqual(1);

    const dbPath = freshDbPath();
    isolatedReload(MIXED_MD, dbPath);

    const mastered = listMasteredItems(dbPath);
    expect(Array.isArray(mastered)).toBe(true);
    expect(mastered.length).toBeGreaterThan(0);

    const item = mastered[0]!;
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("item");
    expect(item).toHaveProperty("topic");
    expect(item).toHaveProperty("firstWrongDate");
    expect(item).toHaveProperty("masteredDate");
  });

  it("listReviewQueueImportErrors(dbPath?) exists and returns ReviewImportErrorView[] with every documented field", () => {
    expect(typeof listReviewQueueImportErrors).toBe("function");
    expect(listReviewQueueImportErrors.length).toBeLessThanOrEqual(1);

    const dbPath = freshDbPath();
    isolatedReload(WITH_ERRORS_MD, dbPath);

    const errors = listReviewQueueImportErrors(dbPath);
    expect(Array.isArray(errors)).toBe(true);
    expect(errors.length).toBeGreaterThan(0);

    const error = errors[0]!;
    expect(error).toHaveProperty("sourceTable");
    expect(error).toHaveProperty("kind");
    expect(error).toHaveProperty("detail");
    expect(error).toHaveProperty("rawRow");
    expect(["active", "mastered"]).toContain(error.sourceTable);
    expect(["date_unparseable", "row_incomplete"]).toContain(error.kind);
  });
});
