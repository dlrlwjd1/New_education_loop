import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, getReviewQueueStatus, listReviewQueueImportErrors } from "../../src/persistence/queries.js";

// T018 (US2): quickstart.md 시나리오 3 / SC-004. with-errors.md has 4 valid
// active rows and 1 row whose "다음 복습일" cell is "9월 19일" (not ISO). The
// broken row must not count toward totalActiveCount, must not silently
// disappear, and must appear exactly once via listReviewQueueImportErrors().

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WITH_ERRORS_MD = path.join(HERE, "..", "fixtures", "review-queue", "with-errors.md");

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "reviewqueue-errors-db-"));
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

describe("with-errors.md - broken date row isolated from the active count (T018, SC-004)", () => {
  it("excludes the broken row from totalActiveCount and surfaces exactly one entry via listReviewQueueImportErrors()", () => {
    const dbPath = freshDbPath();
    reload({
      reviewQueuePath: WITH_ERRORS_MD,
      dbPath,
      studyProgressRoot: freshEmptyDir("reviewqueue-errors-sp-"),
      coursesRoot: freshEmptyDir("reviewqueue-errors-courses-"),
    });

    const status = getReviewQueueStatus("2026-09-23", dbPath);
    // 5 rows total in the fixture, 1 broken -> 4 valid active rows persisted.
    expect(status.totalActiveCount).toBe(4);

    const errors = listReviewQueueImportErrors(dbPath);
    expect(errors).toHaveLength(1);
    const error = errors[0]!;
    expect(error.kind).toBe("date_unparseable");
    expect(error.sourceTable).toBe("active");
    expect(typeof error.detail).toBe("string");
    expect(error.detail.length).toBeGreaterThan(0);
    expect(error.rawRow).toContain("OSI 세션 계층");

    // The 001 import_errors table and 004's review_import_errors must never
    // be mixed together (contract "안정성 계약"): every entry returned here
    // is specifically a review-queue parsing failure.
    expect(errors.every((e) => e.kind === "date_unparseable" || e.kind === "row_incomplete")).toBe(true);
  });
});
