import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runImport } from "../../src/ingestion/runImport.js";
import { reload } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T008 (US1): loads one 001 ImportBatch via reload() and verifies the SQLite
// tables it populates match that same batch's roadmaps/materials/learning_items
// exactly (data-model.md's mapping, FR-001).

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-load-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

function flattenPhases(batch: ReturnType<typeof runImport>) {
  return batch.roadmaps.flatMap((r) => [...r.rootPhases, ...r.tracks.flatMap((t) => t.phases)]);
}

function flattenItems(batch: ReturnType<typeof runImport>) {
  return flattenPhases(batch).flatMap((p) => p.items);
}

describe("persistence.load - table rows match the ImportBatch (US1, T008)", () => {
  it("roadmaps table has exactly one row per batch.roadmaps entry, same ids", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const rows = db.prepare("SELECT id FROM roadmaps").all() as Array<{ id: string }>;
    db.close();

    expect(rows.map((r) => r.id).sort()).toEqual(batch.roadmaps.map((r) => r.id).sort());
    expect(rows.length).toBe(batch.roadmaps.length);
  });

  it("tracks/phases table row counts match the batch's tree exactly", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const expectedTrackCount = batch.roadmaps.reduce((sum, r) => sum + r.tracks.length, 0);
    const expectedPhaseCount = flattenPhases(batch).length;

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const trackCount = (db.prepare("SELECT COUNT(*) AS c FROM tracks").get() as { c: number }).c;
    const phaseCount = (db.prepare("SELECT COUNT(*) AS c FROM phases").get() as { c: number }).c;
    const phaseIds = (db.prepare("SELECT id FROM phases").all() as Array<{ id: string }>).map((r) => r.id).sort();
    db.close();

    expect(trackCount).toBe(expectedTrackCount);
    expect(phaseCount).toBe(expectedPhaseCount);
    expect(phaseIds).toEqual(flattenPhases(batch).map((p) => p.id).sort());
  });

  it("learning_items table has exactly one row per item across the whole batch, same ids, same completed/text", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const items = flattenItems(batch);
    const db = new DatabaseSync(dbPath, { readOnly: true });
    const rows = db
      .prepare("SELECT id, text, completed FROM learning_items")
      .all() as Array<{ id: string; text: string; completed: number | null }>;
    db.close();

    expect(rows.length).toBe(items.length);
    const rowsById = new Map(rows.map((r) => [r.id, r]));
    for (const item of items) {
      const row = rowsById.get(item.id);
      expect(row).toBeDefined();
      expect(row!.text).toBe(item.text);
      expect(row!.completed).toBe(item.completed === null ? null : item.completed ? 1 : 0);
    }
  });

  it("materials table has exactly one row per batch.materials entry, same ids and source paths", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const rows = db.prepare("SELECT id, source_path FROM materials").all() as Array<{
      id: string;
      source_path: string;
    }>;
    db.close();

    expect(rows.length).toBe(batch.materials.length);
    expect(rows.map((r) => r.source_path).sort()).toEqual(batch.materials.map((m) => m.sourcePath).sort());
  });

  it("import_errors table has exactly one row per batch.errors entry (nothing silently dropped)", () => {
    const dbPath = freshDbPath();
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const count = (db.prepare("SELECT COUNT(*) AS c FROM import_errors").get() as { c: number }).c;
    db.close();

    expect(count).toBe(batch.errors.length);
  });

  it("a learning item with completed = NULL is always flagged needs_review = 1 (data-model.md validation rule)", () => {
    const dbPath = freshDbPath();
    // study-progress-flat has no unrecognized checkboxes, so use the fixture
    // that deliberately includes one (also exercises FR-005 end to end).
    const reviewFixtureRoot = path.join(HERE, "..", "fixtures", "persistence-review-needed", "study-progress");
    const emptyCoursesRoot = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");
    reload({ studyProgressRoot: reviewFixtureRoot, coursesRoot: emptyCoursesRoot, dbPath });

    const db = new DatabaseSync(dbPath, { readOnly: true });
    const nullCompletedRows = db
      .prepare("SELECT id, needs_review FROM learning_items WHERE completed IS NULL")
      .all() as Array<{ id: string; needs_review: number }>;
    db.close();

    expect(nullCompletedRows.length).toBeGreaterThan(0); // fixture must actually exercise this case
    for (const row of nullCompletedRows) {
      expect(row.needs_review).toBe(1);
    }
  });
});
