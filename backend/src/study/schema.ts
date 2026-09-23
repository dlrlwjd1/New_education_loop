import type { DatabaseSync } from "node:sqlite";

/**
 * This feature's own schema version — independent of 002/004's
 * `persistence/schema.ts` and of 005's `briefing/schema.ts` (research.md
 * §4). A mismatch against this constant must NEVER trigger 002/004's
 * "delete and rebuild" behavior: a study session in progress is the only
 * record of itself, not a cache re-derivable from `study-progress/`/
 * `courses/`/`내학습/복습큐.md`. `db.ts` enforces that by throwing instead of
 * rebuilding on a mismatch (same posture as `briefing/db.ts`).
 */
export const SCHEMA_VERSION = 1;

/**
 * data-model.md's four tables, translated 1:1 into DDL, with one documented
 * deviation: `study_answer_attempts.request_id`.
 *
 * ## Deviation: `request_id` column
 *
 * data-model.md's `AnswerAttempt` entity does not list a `requestId` field,
 * but contracts/study-service-library.md's `submitAnswer()` "보장" section
 * requires FR-028 dedup ("requestId가 이미 처리된 값이면… 그대로 반환한다") —
 * which needs somewhere durable to check "have I already handled this exact
 * request". This column (nullable — `retryGrading()`'s internally-generated
 * resubmissions never carry one) is that storage. `service.ts` documents the
 * same deviation at its point of use.
 */
const CREATE_TABLES_SQL = `
CREATE TABLE IF NOT EXISTS study_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  path TEXT NOT NULL,
  target_label TEXT NOT NULL,
  target_material_id TEXT NULL,
  target_roadmap_id TEXT NULL,
  target_phase_id TEXT NULL,
  target_item_id TEXT NULL,
  timezone TEXT NOT NULL,
  started_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS study_questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL REFERENCES study_sessions(id),
  order_index INTEGER NOT NULL,
  kind TEXT NOT NULL,
  prompt_text TEXT NOT NULL,
  concept_label TEXT NULL,
  current_step TEXT NOT NULL DEFAULT 'awaiting_answer',
  explanation_text TEXT NULL,
  explanation_shown_at TEXT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS study_answer_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id INTEGER NOT NULL REFERENCES study_questions(id),
  attempt_number INTEGER NOT NULL,
  submitted_text TEXT NOT NULL,
  is_dont_know INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL,
  verdict TEXT NULL,
  correct_parts TEXT NULL,
  incorrect_parts TEXT NULL,
  submitted_at TEXT NOT NULL,
  graded_at TEXT NULL,
  request_id TEXT NULL,
  UNIQUE (question_id, attempt_number)
);

CREATE TABLE IF NOT EXISTS study_hint_usages (
  question_id INTEGER NOT NULL REFERENCES study_questions(id),
  hint_number INTEGER NOT NULL,
  hint_text TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY (question_id, hint_number)
);

CREATE INDEX IF NOT EXISTS idx_study_questions_session ON study_questions(session_id, order_index);
CREATE INDEX IF NOT EXISTS idx_study_attempts_question ON study_answer_attempts(question_id, attempt_number);
CREATE INDEX IF NOT EXISTS idx_study_attempts_request_id ON study_answer_attempts(request_id);
`;

/**
 * Creates every table (idempotent — `IF NOT EXISTS`) and stamps
 * `PRAGMA user_version` with `SCHEMA_VERSION`. Called only against this
 * feature's own file by `db.ts` on a normal first run — never used to "fix
 * up" an existing file with a different version (that path throws instead,
 * see `db.ts`). No UPDATE statement exists anywhere for
 * `study_answer_attempts` (data-model.md's invariant) — `store.ts` only ever
 * INSERTs new attempt rows.
 */
export function applySchema(db: DatabaseSync): void {
  db.exec(CREATE_TABLES_SQL);
  // PRAGMA does not support bound parameters for `user_version`; interpolating
  // the constant here is safe (a fixed internal integer, never user/file
  // input) — same pattern as persistence/schema.ts and briefing/schema.ts.
  db.exec(`PRAGMA user_version = ${SCHEMA_VERSION};`);
}

/** Reads back `PRAGMA user_version` from an already-open database. */
export function readSchemaVersion(db: DatabaseSync): number {
  const row = db.prepare("PRAGMA user_version").get() as { user_version: number } | undefined;
  return row?.user_version ?? -1;
}
