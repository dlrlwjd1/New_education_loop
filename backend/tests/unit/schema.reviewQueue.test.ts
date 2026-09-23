import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { applySchema, readSchemaVersion, SCHEMA_VERSION } from "../../src/persistence/schema.js";

// T004 (Foundational, data-model.md): review_queue_items/mastered_items/
// review_import_errors are the three additive tables this feature adds on
// top of 002's five-table schema, and SCHEMA_VERSION rises from 1 to 2.
// review_queue_items/mastered_items each enforce PRIMARY KEY(id) at the
// schema level (헌법 III) so uniqueness is not left to application code.
// review_import_errors has no stable id (it is fully replaced every reload,
// data-model.md) and is therefore NOT expected to carry a PRIMARY KEY.

const tmpDirs: string[] = [];

function freshDb(): DatabaseSync {
  const dir = mkdtempSync(path.join(tmpdir(), "reviewqueue-schema-"));
  tmpDirs.push(dir);
  const db = new DatabaseSync(path.join(dir, "test.sqlite"));
  applySchema(db);
  return db;
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("schema.ts - review-queue tables exist (T004)", () => {
  it("creates review_queue_items, mastered_items, review_import_errors", () => {
    const db = freshDb();
    const tables = (
      db.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all() as Array<{
        name: string;
      }>
    ).map((r) => r.name);

    expect(tables).toEqual(
      expect.arrayContaining(["review_queue_items", "mastered_items", "review_import_errors"]),
    );
    db.close();
  });

  it("stamps PRAGMA user_version as 2 (SCHEMA_VERSION bumped 1 -> 2 by this feature)", () => {
    const db = freshDb();
    expect(readSchemaVersion(db)).toBe(2);
    expect(SCHEMA_VERSION).toBe(2);
    db.close();
  });
});

describe("schema.ts - PRIMARY KEY constraints on review-queue tables (T004)", () => {
  it("review_queue_items.id is a PRIMARY KEY (duplicate insert throws)", () => {
    const db = freshDb();
    db.prepare(
      "INSERT INTO review_queue_items (id, item, topic, first_wrong_date, stage_label, next_review_date) VALUES (?, ?, ?, ?, ?, ?)",
    ).run("id1", "항목", "주제", "2026-01-01", "1회차", "2026-01-04");

    expect(() =>
      db
        .prepare(
          "INSERT INTO review_queue_items (id, item, topic, first_wrong_date, stage_label, next_review_date) VALUES (?, ?, ?, ?, ?, ?)",
        )
        .run("id1", "다른 항목", "다른 주제", "2026-02-01", "2회차", "2026-02-04"),
    ).toThrow();
    db.close();
  });

  it("mastered_items.id is a PRIMARY KEY (duplicate insert throws)", () => {
    const db = freshDb();
    db.prepare("INSERT INTO mastered_items (id, item, topic, first_wrong_date, mastered_date) VALUES (?, ?, ?, ?, ?)").run(
      "id1",
      "항목",
      "주제",
      "2026-01-01",
      "2026-03-01",
    );

    expect(() =>
      db
        .prepare("INSERT INTO mastered_items (id, item, topic, first_wrong_date, mastered_date) VALUES (?, ?, ?, ?, ?)")
        .run("id1", "다른 항목", "다른 주제", "2026-02-01", "2026-04-01"),
    ).toThrow();
    db.close();
  });

  it("review_import_errors accepts multiple rows without a stable id (no PRIMARY KEY expected)", () => {
    const db = freshDb();
    db.prepare("INSERT INTO review_import_errors (source_table, row_index, kind, detail, raw_row) VALUES (?, ?, ?, ?, ?)").run(
      "active",
      0,
      "date_unparseable",
      "다음 복습일 칸을 해석할 수 없음",
      "| 항목 | 주제 | ... |",
    );
    // A second row with identical content should NOT throw - this table is
    // fully truncated and repopulated on every reload, so it carries no
    // uniqueness constraint (data-model.md).
    expect(() =>
      db
        .prepare("INSERT INTO review_import_errors (source_table, row_index, kind, detail, raw_row) VALUES (?, ?, ?, ?, ?)")
        .run("active", 0, "date_unparseable", "다음 복습일 칸을 해석할 수 없음", "| 항목 | 주제 | ... |"),
    ).not.toThrow();
    db.close();
  });
});
