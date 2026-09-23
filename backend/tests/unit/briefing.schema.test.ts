import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync, existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { applySchema, readSchemaVersion, SCHEMA_VERSION } from "../../src/briefing/schema.js";
import { openBriefingDb } from "../../src/briefing/db.js";

// T002 (Foundational, independently written from specs/005-briefing/data-model.md
// and research.md §2 — NOT by reading service.ts/store.ts's logic): the
// dedicated briefing SQLite file must contain the three tables data-model.md
// documents (including the totalActiveCount-backing `total_active_count`
// column added by the main-agent fix), and — unlike 002/004's shared cache —
// a schema-version mismatch on an EXISTING file must throw rather than be
// silently deleted and rebuilt (research.md §2's core safety property: this
// file's rows are the historical record itself, not a derived cache).

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-schema-"));
  tmpDirs.push(dir);
  return path.join(dir, "briefing-history.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("briefing/schema.ts - table creation (T002)", () => {
  it("creates all three data-model.md tables in a fresh file", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    const tables = (
      db.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all() as Array<{
        name: string;
      }>
    ).map((r) => r.name);

    expect(tables).toEqual(
      expect.arrayContaining(["briefing_snapshots", "briefing_snapshot_roadmaps", "briefing_snapshot_review_items"]),
    );
    db.close();
  });

  it("briefing_snapshots has a NOT NULL total_active_count column (data-model.md's updated DDL for FR-009)", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    const columns = db.prepare("PRAGMA table_info(briefing_snapshots)").all() as Array<{
      name: string;
      notnull: number;
    }>;
    const totalActiveCountCol = columns.find((c) => c.name === "total_active_count");
    expect(totalActiveCountCol).toBeDefined();
    expect(totalActiveCountCol?.notnull).toBe(1);
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

  it("a real row can be inserted into every table (columns line up with data-model.md)", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    applySchema(db);

    db.prepare(
      `INSERT INTO briefing_snapshots
         (reference_date, timezone, scope, created_at, average_progress_ratio, average_progress_roadmap_count, due_review_count, total_active_count)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    ).run("2026-09-23", "Asia/Seoul", "all", "2026-09-23T00:00:00.000Z", 0.5, 1, 0, 0);
    const snapshotId = 1;

    expect(() =>
      db
        .prepare(
          `INSERT INTO briefing_snapshot_roadmaps
             (snapshot_id, order_index, roadmap_id, title, completed_count, total_count, status, percent_label)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(snapshotId, 0, "r1", "로드맵1", 5, 10, "normal", "50.0% (5/10)"),
    ).not.toThrow();

    expect(() =>
      db
        .prepare(
          `INSERT INTO briefing_snapshot_review_items
             (snapshot_id, order_index, item_id, item, topic, next_review_date, overdue_days)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(snapshotId, 0, "i1", "항목", "주제", "2026-09-20", 3),
    ).not.toThrow();
    db.close();
  });
});

describe("briefing/db.ts openBriefingDb() - version-mismatch handling (T002, research.md §2)", () => {
  it("a missing file is created fresh with the schema applied (normal first run, not an error)", () => {
    const dbPath = freshDbPath();
    expect(existsSync(dbPath)).toBe(false);

    const db = openBriefingDb(dbPath);
    expect(readSchemaVersion(db)).toBe(SCHEMA_VERSION);
    db.close();
    expect(existsSync(dbPath)).toBe(true);
  });

  it("throws (never silently deletes/rebuilds) when an existing file's PRAGMA user_version does not match SCHEMA_VERSION", () => {
    const dbPath = freshDbPath();

    // Hand-construct a valid SQLite file with the three tables but a
    // DIFFERENT schema version, simulating a future schema bump.
    const handCrafted = new DatabaseSync(dbPath);
    applySchema(handCrafted);
    handCrafted.exec(`PRAGMA user_version = ${SCHEMA_VERSION + 1};`);
    handCrafted.close();

    const beforeBytes = readFileSync(dbPath);

    expect(() => openBriefingDb(dbPath)).toThrow();

    // The file must be left byte-for-byte untouched -- 002/004's
    // "delete and rebuild" behavior must NOT have fired.
    const afterBytes = readFileSync(dbPath);
    expect(afterBytes.equals(beforeBytes)).toBe(true);
    expect(existsSync(dbPath)).toBe(true);
  });

  it("throws when an existing file's user_version defaults to 0 (never applied any schema at all)", () => {
    const dbPath = freshDbPath();
    const handCrafted = new DatabaseSync(dbPath);
    handCrafted.exec("CREATE TABLE foo (x INTEGER)"); // valid sqlite file, user_version defaults to 0
    handCrafted.close();
    expect(SCHEMA_VERSION).not.toBe(0);

    expect(() => openBriefingDb(dbPath)).toThrow();
    expect(existsSync(dbPath)).toBe(true);
  });
});
