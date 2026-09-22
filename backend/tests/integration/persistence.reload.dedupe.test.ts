import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T015 (US2): running reload() twice against the SAME fixture must not grow
// roadmaps/materials/learning_items row counts, and must reuse the same ids
// (FR-006, SC-004). This holds via the two guarantees documented in
// research.md §3 / load.ts's module doc comment: ids are
// sha256(normalized source path) alone, and every reload() rebuilds a brand
// new SQLite file from scratch rather than upserting into the old one -
// NOT via a previousBatch fed into 001's resolveIdentity (which reload()
// deliberately never supplies, per the revision note in tasks.md).
//
// Per the QA brief for this feature: the "content-identical files
// misidentified as a move" regression 001's contract warns about is a
// previousBatch-specific failure mode. Since 002's reload() never
// constructs or supplies a previousBatch, that regression path does not
// exist here to reproduce - this file only asserts the dedupe guarantee
// that IS in scope (no row-count growth / stable ids across repeated
// reloads), matching the QA brief's explicit instruction not to test
// file-move/rename identity continuity.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-dedupe-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

function tableIds(dbPath: string, table: string): string[] {
  const db = new DatabaseSync(dbPath, { readOnly: true });
  const rows = db.prepare(`SELECT id FROM ${table}`).all() as Array<{ id: string }>;
  db.close();
  return rows.map((r) => r.id).sort();
}

function rowCount(dbPath: string, table: string): number {
  const db = new DatabaseSync(dbPath, { readOnly: true });
  const row = db.prepare(`SELECT COUNT(*) AS c FROM ${table}`).get() as { c: number };
  db.close();
  return row.c;
}

describe("reload() - no duplicate growth across repeated reloads (US2, T015, FR-006, SC-004)", () => {
  it("running reload() twice against the same source yields identical roadmaps/materials/learning_items ids and counts", () => {
    const dbPath = freshDbPath();

    const firstResult = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const roadmapIdsAfterFirst = tableIds(dbPath, "roadmaps");
    const materialIdsAfterFirst = tableIds(dbPath, "materials");
    const learningItemIdsAfterFirst = tableIds(dbPath, "learning_items");
    const roadmapCountAfterFirst = rowCount(dbPath, "roadmaps");
    const materialCountAfterFirst = rowCount(dbPath, "materials");
    const learningItemCountAfterFirst = rowCount(dbPath, "learning_items");

    const secondResult = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(secondResult.roadmapCount).toBe(firstResult.roadmapCount);
    expect(secondResult.materialCount).toBe(firstResult.materialCount);

    expect(rowCount(dbPath, "roadmaps")).toBe(roadmapCountAfterFirst);
    expect(rowCount(dbPath, "materials")).toBe(materialCountAfterFirst);
    expect(rowCount(dbPath, "learning_items")).toBe(learningItemCountAfterFirst);

    expect(tableIds(dbPath, "roadmaps")).toEqual(roadmapIdsAfterFirst);
    expect(tableIds(dbPath, "materials")).toEqual(materialIdsAfterFirst);
    expect(tableIds(dbPath, "learning_items")).toEqual(learningItemIdsAfterFirst);
  });

  it("running reload() three times in a row keeps listRoadmaps() output byte-identical", () => {
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const firstSummaries = listRoadmaps(dbPath);

    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const thirdSummaries = listRoadmaps(dbPath);

    expect(thirdSummaries).toEqual(firstSummaries);
  });
});
