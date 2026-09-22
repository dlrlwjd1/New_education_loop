import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, unlinkSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T019 (US3): deleting the cache file entirely and reloading must reproduce
// an identical result from the original source files (SC-003) - no error,
// no data loss.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-rebuild-deleted-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("reload() - lossless rebuild after the cache file is deleted (US3, T019, SC-003)", () => {
  it("deleting dbPath and reloading reproduces identical roadmapCount/materialCount and listRoadmaps() output", () => {
    const dbPath = freshDbPath();

    const before = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const beforeSummaries = listRoadmaps(dbPath);

    expect(existsSync(dbPath)).toBe(true);
    unlinkSync(dbPath);
    expect(existsSync(dbPath)).toBe(false);

    const after = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const afterSummaries = listRoadmaps(dbPath);

    expect(after.roadmapCount).toBe(before.roadmapCount);
    expect(after.materialCount).toBe(before.materialCount);
    expect(after.errorCount).toBe(before.errorCount);
    expect(afterSummaries).toEqual(beforeSummaries);
  });

  it("reload() against a dbPath whose parent directory does not even exist yet still succeeds (first-ever run)", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "persistence-rebuild-deleted-"));
    tmpDirs.push(dir);
    const dbPath = path.join(dir, "nested", "does-not-exist-yet", "cache.sqlite");

    expect(() => reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath })).not.toThrow();
    expect(existsSync(dbPath)).toBe(true);
  });
});
