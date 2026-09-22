import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runImport } from "../../src/ingestion/runImport.js";
import { reload, listReviewNeededItems, listRoadmaps } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "persistence-review-needed", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");

// T026 (US4): listReviewNeededItems() must expose 100% of 001's reported
// errors (checkbox_unrecognized, date_invalid, link_broken all included in
// this fixture), with zero silently dropped (FR-005, SC-005).

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-review-needed-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("listReviewNeededItems - 100% error exposure (US4, T026, FR-005, SC-005)", () => {
  it("returns exactly one entry per import_errors row, matching 001's reported error count 1:1", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(batch.errors.length).toBeGreaterThan(0); // fixture must actually exercise this
    const reviewNeeded = listReviewNeededItems(dbPath);
    expect(reviewNeeded).toHaveLength(batch.errors.length);
  });

  it("includes at least one checkbox_unrecognized, one date_invalid and one link_broken entry (all three kinds this fixture exercises)", () => {
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const reviewNeeded = listReviewNeededItems(dbPath);
    const kinds = new Set(reviewNeeded.map((i) => i.errorKind));
    expect(kinds.has("checkbox_unrecognized")).toBe(true);
    expect(kinds.has("date_invalid")).toBe(true);
    expect(kinds.has("link_broken")).toBe(true);
  });

  it("every returned entry's sourcePath multiset matches 001's batch.errors sourcePaths exactly (nothing silently dropped or invented)", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const expected = batch.errors.map((e) => `${e.kind}::${e.sourcePath}`).sort();
    const actual = listReviewNeededItems(dbPath)
      .map((i) => `${i.errorKind}::${i.sourcePath}`)
      .sort();
    expect(actual).toEqual(expected);
  });

  it("every returned entry resolves to a real, existing roadmapId", () => {
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const roadmapIds = new Set(listRoadmaps(dbPath).map((r) => r.roadmapId));
    const reviewNeeded = listReviewNeededItems(dbPath);
    expect(reviewNeeded.length).toBeGreaterThan(0);
    for (const entry of reviewNeeded) {
      expect(entry.roadmapId).not.toBe("");
      expect(roadmapIds.has(entry.roadmapId)).toBe(true);
    }
  });

  it("a well-formed fixture with no 001-reported errors yields an empty list (no false positives)", () => {
    const dbPath = freshDbPath();
    const cleanRoot = path.join(HERE, "..", "fixtures", "study-progress-flat");
    const cleanCourses = path.join(HERE, "..", "fixtures", "courses-subset");
    reload({ studyProgressRoot: cleanRoot, coursesRoot: cleanCourses, dbPath });

    expect(listReviewNeededItems(dbPath)).toEqual([]);
  });
});
