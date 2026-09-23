import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync, existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { applySchema, readSchemaVersion, SCHEMA_VERSION } from "../../src/study/schema.js";
import { openStudyDb } from "../../src/study/db.js";

// T004 (Foundational, written independently from data-model.md's DDL block
// and its "005와 동일하게... 예외로 표면화" note -- NOT from reading
// schema.ts/db.ts's implementation bodies beyond what's needed to import
// them). Verifies: the four dedicated tables exist in a fresh file, the
// UNIQUE(question_id, attempt_number) constraint on study_answer_attempts
// and the composite PK on study_hint_usages are actually enforced by SQLite
// (not just declared), and a schema-version mismatch on an EXISTING file
// throws rather than silently rebuilding -- mirroring 005's
// briefing.schema.test.ts pattern exactly, because data-model.md explicitly
// says this file must behave like briefing/db.ts, not like 002/004's
// delete-and-rebuild cache.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "study-schema-"));
  tmpDirs.push(dir);
  return path.join(dir, "study-sessions.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("study/schema.ts - table creation (T004)", () => {
  it("creates all four data-model.md tables in a fresh file", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    const tables = (
      db.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all() as Array<{
        name: string;
      }>
    ).map((r) => r.name);

    expect(tables).toEqual(
      expect.arrayContaining([
        "study_sessions",
        "study_questions",
        "study_answer_attempts",
        "study_hint_usages",
      ]),
    );
    db.close();
  });

  it("stamps PRAGMA user_version with SCHEMA_VERSION", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);
    expect(readSchemaVersion(db)).toBe(SCHEMA_VERSION);
    expect(SCHEMA_VERSION).toBeGreaterThan(0);
    db.close();
  });

  it("enforces UNIQUE(question_id, attempt_number) on study_answer_attempts", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    db.prepare(
      `INSERT INTO study_sessions (path, target_label, timezone, started_at, status)
       VALUES ('topic', '주제', 'Asia/Seoul', '2026-09-23T00:00:00.000Z', 'active')`,
    ).run();
    db.prepare(
      `INSERT INTO study_questions (session_id, order_index, kind, prompt_text, current_step, created_at)
       VALUES (1, 0, 'prior_knowledge', '지금 아는 것을 적어 주세요.', 'awaiting_answer', '2026-09-23T00:00:00.000Z')`,
    ).run();

    db.prepare(
      `INSERT INTO study_answer_attempts (question_id, attempt_number, submitted_text, status, submitted_at)
       VALUES (1, 1, '첫 시도', 'graded', '2026-09-23T00:00:01.000Z')`,
    ).run();

    expect(() =>
      db
        .prepare(
          `INSERT INTO study_answer_attempts (question_id, attempt_number, submitted_text, status, submitted_at)
           VALUES (1, 1, '중복 시도번호', 'graded', '2026-09-23T00:00:02.000Z')`,
        )
        .run(),
    ).toThrow();

    db.close();
  });

  it("enforces the composite PRIMARY KEY (question_id, hint_number) on study_hint_usages", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    db.prepare(
      `INSERT INTO study_sessions (path, target_label, timezone, started_at, status)
       VALUES ('topic', '주제', 'Asia/Seoul', '2026-09-23T00:00:00.000Z', 'active')`,
    ).run();
    db.prepare(
      `INSERT INTO study_questions (session_id, order_index, kind, prompt_text, current_step, created_at)
       VALUES (1, 0, 'retrieval', '질문', 'awaiting_hint_retry', '2026-09-23T00:00:00.000Z')`,
    ).run();

    db.prepare(
      `INSERT INTO study_hint_usages (question_id, hint_number, hint_text, created_at)
       VALUES (1, 1, '첫 힌트', '2026-09-23T00:00:01.000Z')`,
    ).run();

    expect(() =>
      db
        .prepare(
          `INSERT INTO study_hint_usages (question_id, hint_number, hint_text, created_at)
           VALUES (1, 1, '중복 힌트번호', '2026-09-23T00:00:02.000Z')`,
        )
        .run(),
    ).toThrow();

    db.close();
  });
});

describe("study/db.ts openStudyDb() - version-mismatch handling (T004, data-model.md)", () => {
  it("a missing file is created fresh with the schema applied (normal first run, not an error)", () => {
    const dbPath = freshDbPath();
    expect(existsSync(dbPath)).toBe(false);

    const db = openStudyDb(dbPath);
    expect(readSchemaVersion(db)).toBe(SCHEMA_VERSION);
    db.close();
    expect(existsSync(dbPath)).toBe(true);
  });

  it("throws (never silently deletes/rebuilds) when an existing file's PRAGMA user_version does not match SCHEMA_VERSION", () => {
    const dbPath = freshDbPath();

    const handCrafted = new DatabaseSync(dbPath);
    applySchema(handCrafted);
    handCrafted.exec(`PRAGMA user_version = ${SCHEMA_VERSION + 1};`);
    handCrafted.close();

    const beforeBytes = readFileSync(dbPath);

    expect(() => openStudyDb(dbPath)).toThrow();

    const afterBytes = readFileSync(dbPath);
    expect(afterBytes.equals(beforeBytes)).toBe(true);
    expect(existsSync(dbPath)).toBe(true);
  });

  it("throws when an existing file's user_version defaults to 0 (schema never applied at all)", () => {
    const dbPath = freshDbPath();
    const handCrafted = new DatabaseSync(dbPath);
    handCrafted.exec("CREATE TABLE foo (x INTEGER)");
    handCrafted.close();
    expect(SCHEMA_VERSION).not.toBe(0);

    expect(() => openStudyDb(dbPath)).toThrow();
    expect(existsSync(dbPath)).toBe(true);
  });
});
