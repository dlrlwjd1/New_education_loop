import type { DatabaseSync } from "node:sqlite";

/**
 * This feature's own schema version — independent of 002/004's
 * `SCHEMA_VERSION` in `persistence/schema.ts` (research.md §2, plan.md).
 * A mismatch against this constant must NEVER trigger the "delete and
 * rebuild" behavior `persistence/db.ts` uses: this file's rows are
 * themselves the historical record (FR-014), not a cache re-derivable from
 * `study-progress/`/`courses/`/`내학습/복습큐.md`. `db.ts` enforces that by
 * throwing instead of rebuilding on a mismatch (see that file).
 */
export const SCHEMA_VERSION = 1;

/**
 * data-model.md's three tables, translated 1:1 into DDL. No FK to any 002/004
 * table (data-model.md "관계 요약") — `roadmap_id`/`item_id` columns below are
 * plain copies of the value at generation time, not live references.
 */
const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS briefing_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reference_date TEXT NOT NULL,
  timezone TEXT NOT NULL,
  scope TEXT NOT NULL,
  created_at TEXT NOT NULL,
  average_progress_ratio REAL NULL,
  average_progress_roadmap_count INTEGER NOT NULL,
  due_review_count INTEGER NOT NULL,
  total_active_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS briefing_snapshot_roadmaps (
  snapshot_id INTEGER NOT NULL REFERENCES briefing_snapshots(id),
  order_index INTEGER NOT NULL,
  roadmap_id TEXT NOT NULL,
  title TEXT NOT NULL,
  completed_count INTEGER NOT NULL,
  total_count INTEGER NOT NULL,
  status TEXT NOT NULL,
  percent_label TEXT NOT NULL,
  PRIMARY KEY (snapshot_id, order_index)
);

CREATE TABLE IF NOT EXISTS briefing_snapshot_review_items (
  snapshot_id INTEGER NOT NULL REFERENCES briefing_snapshots(id),
  order_index INTEGER NOT NULL,
  item_id TEXT NOT NULL,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  next_review_date TEXT NOT NULL,
  overdue_days INTEGER NOT NULL,
  PRIMARY KEY (snapshot_id, order_index)
);

CREATE INDEX IF NOT EXISTS idx_briefing_snapshots_lookup
  ON briefing_snapshots(reference_date, scope, created_at DESC);
`;

/**
 * Creates every table (idempotent — `IF NOT EXISTS`) and stamps
 * `PRAGMA user_version` with `SCHEMA_VERSION`. Called only against a brand
 * new database file by `db.ts` (normal first run) — never used to "fix up"
 * an existing file with a different version (that path throws instead, see
 * `db.ts`). No UPDATE statement exists anywhere for these three tables
 * (data-model.md's validation rule, FR-014) — rows are inserted once by
 * `store.ts` and never modified afterward.
 */
export function applySchema(db: DatabaseSync): void {
  db.exec(CREATE_TABLES_SQL);
  // PRAGMA does not support bound parameters for `user_version`; interpolating
  // the constant here is safe (a fixed internal integer, never user/file
  // input) — same pattern as `persistence/schema.ts`.
  db.exec(`PRAGMA user_version = ${SCHEMA_VERSION};`);
}

/** Reads back `PRAGMA user_version` from an already-open database. */
export function readSchemaVersion(db: DatabaseSync): number {
  const row = db.prepare("PRAGMA user_version").get() as { user_version: number } | undefined;
  return row?.user_version ?? -1;
}
