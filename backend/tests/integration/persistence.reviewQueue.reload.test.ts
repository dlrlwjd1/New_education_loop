import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, getReviewQueueStatus } from "../../src/persistence/queries.js";

// T011/T012/T013 (US1): quickstart.md 시나리오 1·2·5. reload() is pointed at
// the review-queue fixtures via ReloadOptions.reviewQueuePath (types.ts), and
// studyProgressRoot/coursesRoot are pointed at fresh empty temp directories
// per test so this file never touches 내학습/복습큐.md, study-progress/, or
// courses/, and 001's roadmap/material import contributes nothing that could
// interfere with these review-queue-only assertions.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(HERE, "..", "fixtures", "review-queue");
const NORMAL_MD = path.join(FIXTURES, "normal.md");
const EMPTY_MD = path.join(FIXTURES, "empty.md");

const REFERENCE_DATE = "2026-09-23";

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "reviewqueue-reload-db-"));
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
    studyProgressRoot: freshEmptyDir("reviewqueue-sp-"),
    coursesRoot: freshEmptyDir("reviewqueue-courses-"),
  });
}

describe("getReviewQueueStatus() - normal.md due-item filtering and ordering (T011, SC-001)", () => {
  it("returns only nextReviewDate <= referenceDate rows, sorted by overdueDays descending, with totalActiveCount = full fixture row count", () => {
    const dbPath = freshDbPath();
    isolatedReload(NORMAL_MD, dbPath);

    const status = getReviewQueueStatus(REFERENCE_DATE, dbPath);

    // normal.md has 5 active rows in total (verified directly against the
    // fixture file: nextReviewDate values 09-18, 09-20, 09-22, 09-23, 09-24
    // against a 2026-09-23 reference date). Only the first four are due;
    // the 09-24 row is tomorrow and must be excluded from dueItems but still
    // counted in totalActiveCount.
    expect(status.totalActiveCount).toBe(5);
    expect(status.dueItems).toHaveLength(4);
    expect(status.dueItems.map((i) => i.overdueDays)).toEqual([5, 3, 1, 0]);
    expect(status.dueItems.map((i) => i.item)).toEqual([
      "TCP 3-way handshake가 왜 3번인가",
      "사설 IP가 공인 IP로 바뀌는 지점(NAT)",
      "DevOps 파이프라인 5단계 순서",
      "표현 계층의 보안 역할",
    ]);
    expect(status.dueItems.every((i) => i.nextReviewDate <= REFERENCE_DATE)).toBe(true);
    expect(status.dueItems.some((i) => i.item === "OSI 세션 계층 vs HTTP 쿠키")).toBe(false);
  });
});

describe("reload() - repeated reload against the same fixture (T012, SC-002)", () => {
  it("running reload() twice against normal.md yields byte-identical getReviewQueueStatus() JSON and no row-count growth", () => {
    const dbPath = freshDbPath();
    const studyProgressRoot = freshEmptyDir("reviewqueue-sp-");
    const coursesRoot = freshEmptyDir("reviewqueue-courses-");

    reload({ reviewQueuePath: NORMAL_MD, dbPath, studyProgressRoot, coursesRoot });
    const first = getReviewQueueStatus(REFERENCE_DATE, dbPath);
    const firstTotal = first.totalActiveCount;

    reload({ reviewQueuePath: NORMAL_MD, dbPath, studyProgressRoot, coursesRoot });
    const second = getReviewQueueStatus(REFERENCE_DATE, dbPath);

    expect(JSON.stringify(second)).toBe(JSON.stringify(first));
    expect(second.totalActiveCount).toBe(firstTotal);

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const row = db.prepare("SELECT COUNT(*) AS c FROM review_queue_items").get() as { c: number };
    db.close();
    expect(row.c).toBe(firstTotal); // no duplicate rows after the second reload
  });
});

describe("getReviewQueueStatus() - empty.md (T013, SC-005, FR-014)", () => {
  it("returns { totalActiveCount: 0, dueItems: [] } without throwing when the source file has no active rows", () => {
    const dbPath = freshDbPath();
    expect(() => isolatedReload(EMPTY_MD, dbPath)).not.toThrow();

    const status = getReviewQueueStatus(REFERENCE_DATE, dbPath);
    expect(status).toEqual({ totalActiveCount: 0, dueItems: [] });
  });
});
