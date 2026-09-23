import type { DatabaseSync } from "node:sqlite";

/**
 * Bumped whenever the DDL below changes shape. `db.ts` compares this against
 * `PRAGMA user_version` on an existing file and treats any mismatch (or a
 * missing/corrupt file) as "needs rebuild" rather than an error (FR-003,
 * research.md §5) — never as a migration to run in place.
 *
 * Bumped 1 -> 2 by 004 (specs/004-review-queue-persistence/research.md §4):
 * adding `review_queue_items`/`mastered_items`/`review_import_errors` is a
 * shape change, so any existing cache file must be treated as
 * "version-mismatch" and fully rebuilt — no in-place migration script.
 */
export const SCHEMA_VERSION = 2;

/**
 * data-model.md's full table set, translated 1:1 into DDL (FR-008: 001's
 * types/fields are the only basis — this file does not invent new business
 * columns beyond what data-model.md documents, with one deliberate exception
 * noted on `load_run_file_snapshots` below).
 *
 * Table creation order matters only for readability here — SQLite does not
 * validate FOREIGN KEY targets at CREATE TABLE time, only at DML time (with
 * `PRAGMA foreign_keys = ON`, which `node:sqlite`'s `DatabaseSync` enables by
 * default) — but tables are still listed parent-before-child.
 */
const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS roadmaps (
  id TEXT PRIMARY KEY,
  source_path TEXT NOT NULL,
  title TEXT NOT NULL,
  has_phase_docs INTEGER NOT NULL,
  order_index INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS tracks (
  id TEXT PRIMARY KEY,
  roadmap_id TEXT NOT NULL REFERENCES roadmaps(id),
  title TEXT NOT NULL,
  order_index INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS phases (
  id TEXT PRIMARY KEY,
  roadmap_id TEXT NOT NULL REFERENCES roadmaps(id),
  track_id TEXT NULL REFERENCES tracks(id),
  source_path TEXT NOT NULL,
  title TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  aggregatable INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS materials (
  id TEXT PRIMARY KEY,
  source_path TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  provider TEXT NULL,
  course TEXT NULL,
  content_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS learning_items (
  id TEXT PRIMARY KEY,
  phase_id TEXT NOT NULL REFERENCES phases(id),
  order_index INTEGER NOT NULL,
  text TEXT NOT NULL,
  completed INTEGER NULL,
  completed_date TEXT NULL,
  linked_material_id TEXT NULL REFERENCES materials(id),
  needs_review INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS material_versions (
  material_id TEXT NOT NULL REFERENCES materials(id),
  content_hash TEXT NOT NULL,
  captured_at TEXT NOT NULL,
  PRIMARY KEY (material_id, content_hash)
);

CREATE TABLE IF NOT EXISTS material_roadmap_links (
  material_id TEXT NOT NULL REFERENCES materials(id),
  roadmap_id TEXT NOT NULL REFERENCES roadmaps(id),
  PRIMARY KEY (material_id, roadmap_id)
);

CREATE TABLE IF NOT EXISTS import_errors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_path TEXT NOT NULL,
  kind TEXT NOT NULL,
  detail TEXT NOT NULL,
  related_entity_id TEXT NULL
);

CREATE TABLE IF NOT EXISTS load_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at TEXT NOT NULL,
  finished_at TEXT NOT NULL,
  roadmap_count INTEGER NOT NULL,
  material_count INTEGER NOT NULL,
  error_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS load_run_file_snapshots (
  load_run_id INTEGER NOT NULL REFERENCES load_runs(id),
  source_path TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  PRIMARY KEY (load_run_id, source_path)
);

-- specs/004-review-queue-persistence/data-model.md: three independent flat
-- tables, no FK relationship to the five tables above or to each other (the
-- "주제" column is free text, not a roadmap reference — spec.md Assumptions).
CREATE TABLE IF NOT EXISTS review_queue_items (
  id TEXT PRIMARY KEY,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  first_wrong_date TEXT NOT NULL,
  stage_label TEXT NOT NULL,
  next_review_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS mastered_items (
  id TEXT PRIMARY KEY,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  first_wrong_date TEXT NOT NULL,
  mastered_date TEXT NOT NULL
);

-- No PRIMARY KEY: an audit-trail table with no stable id, replaced wholesale
-- on every reload -- same character as 001's import_errors table above.
CREATE TABLE IF NOT EXISTS review_import_errors (
  source_table TEXT NOT NULL,
  row_index INTEGER NOT NULL,
  kind TEXT NOT NULL,
  detail TEXT NOT NULL,
  raw_row TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_tracks_roadmap_id ON tracks(roadmap_id);
CREATE INDEX IF NOT EXISTS idx_phases_roadmap_id ON phases(roadmap_id);
CREATE INDEX IF NOT EXISTS idx_phases_track_id ON phases(track_id);
CREATE INDEX IF NOT EXISTS idx_learning_items_phase_id ON learning_items(phase_id);
CREATE INDEX IF NOT EXISTS idx_learning_items_linked_material_id ON learning_items(linked_material_id);
CREATE INDEX IF NOT EXISTS idx_materials_category ON materials(category);
CREATE INDEX IF NOT EXISTS idx_materials_provider ON materials(provider);
CREATE INDEX IF NOT EXISTS idx_materials_course ON materials(course);
CREATE INDEX IF NOT EXISTS idx_material_versions_material_id ON material_versions(material_id);
CREATE INDEX IF NOT EXISTS idx_material_roadmap_links_roadmap_id ON material_roadmap_links(roadmap_id);
CREATE INDEX IF NOT EXISTS idx_import_errors_source_path ON import_errors(source_path);
CREATE INDEX IF NOT EXISTS idx_import_errors_related_entity_id ON import_errors(related_entity_id);
CREATE INDEX IF NOT EXISTS idx_load_run_file_snapshots_load_run_id ON load_run_file_snapshots(load_run_id);
`;

/**
 * Creates every table (idempotent — `IF NOT EXISTS`) and stamps
 * `PRAGMA user_version` with `SCHEMA_VERSION`. Called only against a brand
 * new, empty database file created at a temp path by `db.ts` — never against
 * the live file in place (research.md §2: every reload rebuilds from
 * scratch, it never migrates an existing file's rows).
 */
export function applySchema(db: DatabaseSync): void {
  db.exec(CREATE_TABLES_SQL);
  // PRAGMA does not support bound parameters for `user_version`; interpolating
  // the constant here is safe (it is a fixed internal integer, never
  // user/file input).
  db.exec(`PRAGMA user_version = ${SCHEMA_VERSION};`);
}

/** Reads back `PRAGMA user_version` from an already-open database. */
export function readSchemaVersion(db: DatabaseSync): number {
  const row = db.prepare("PRAGMA user_version").get() as { user_version: number } | undefined;
  return row?.user_version ?? -1;
}
