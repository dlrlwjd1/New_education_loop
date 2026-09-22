import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { applySchema, readSchemaVersion, SCHEMA_VERSION } from "../../src/persistence/schema.js";

// T003 (Foundational): every data-model.md table + constraint exists, and
// PRAGMA user_version matches SCHEMA_VERSION. Each test opens its own
// throwaway DatabaseSync in a fresh temp directory (never the real cache).

const tmpDirs: string[] = [];

function freshDb(): DatabaseSync {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-schema-"));
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

describe("schema.ts - table creation (T003)", () => {
  it("creates every data-model.md table", () => {
    const db = freshDb();
    const tables = (
      db.prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name").all() as Array<{
        name: string;
      }>
    ).map((r) => r.name);

    expect(tables).toEqual(
      expect.arrayContaining([
        "roadmaps",
        "tracks",
        "phases",
        "learning_items",
        "materials",
        "material_versions",
        "material_roadmap_links",
        "import_errors",
        "load_runs",
        "load_run_file_snapshots",
      ]),
    );
    db.close();
  });

  it("stamps PRAGMA user_version with SCHEMA_VERSION", () => {
    const db = freshDb();
    expect(readSchemaVersion(db)).toBe(SCHEMA_VERSION);
    expect(SCHEMA_VERSION).toBeGreaterThan(0);
    db.close();
  });

  it("is idempotent: applying the schema twice against the same file does not throw", () => {
    const db = freshDb();
    expect(() => applySchema(db)).not.toThrow();
    db.close();
  });
});

describe("schema.ts - UNIQUE constraints (T003)", () => {
  it("materials.source_path is UNIQUE", () => {
    const db = freshDb();
    db.prepare(
      "INSERT INTO materials (id, source_path, title, category, provider, course, content_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ).run("m1", "articles/a.md", "A", "articles", null, null, "hash1");

    expect(() =>
      db
        .prepare(
          "INSERT INTO materials (id, source_path, title, category, provider, course, content_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
        )
        .run("m2", "articles/a.md", "A-duplicate-path", "articles", null, null, "hash2"),
    ).toThrow();
    db.close();
  });

  it("material_versions enforces a (material_id, content_hash) composite UNIQUE constraint", () => {
    const db = freshDb();
    db.prepare(
      "INSERT INTO materials (id, source_path, title, category, provider, course, content_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ).run("m1", "articles/a.md", "A", "articles", null, null, "hash1");
    db.prepare("INSERT INTO material_versions (material_id, content_hash, captured_at) VALUES (?, ?, ?)").run(
      "m1",
      "hash1",
      "2026-01-01T00:00:00.000Z",
    );

    expect(() =>
      db
        .prepare("INSERT INTO material_versions (material_id, content_hash, captured_at) VALUES (?, ?, ?)")
        .run("m1", "hash1", "2026-01-02T00:00:00.000Z"),
    ).toThrow();

    // A different content_hash for the same material is fine (real second version).
    expect(() =>
      db
        .prepare("INSERT INTO material_versions (material_id, content_hash, captured_at) VALUES (?, ?, ?)")
        .run("m1", "hash2", "2026-01-02T00:00:00.000Z"),
    ).not.toThrow();
    db.close();
  });

  it("material_roadmap_links enforces a (material_id, roadmap_id) composite UNIQUE constraint", () => {
    const db = freshDb();
    db.prepare("INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)").run(
      "r1",
      "로드맵",
      "로드맵",
      1,
      0,
    );
    db.prepare(
      "INSERT INTO materials (id, source_path, title, category, provider, course, content_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ).run("m1", "articles/a.md", "A", "articles", null, null, "hash1");
    db.prepare("INSERT INTO material_roadmap_links (material_id, roadmap_id) VALUES (?, ?)").run("m1", "r1");

    expect(() =>
      db.prepare("INSERT INTO material_roadmap_links (material_id, roadmap_id) VALUES (?, ?)").run("m1", "r1"),
    ).toThrow();
    db.close();
  });
});

describe("schema.ts - PRIMARY KEY constraints (T003)", () => {
  it("roadmaps.id is a PRIMARY KEY (duplicate insert throws)", () => {
    const db = freshDb();
    db.prepare("INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)").run(
      "r1",
      "로드맵",
      "로드맵",
      1,
      0,
    );
    expect(() =>
      db
        .prepare("INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)")
        .run("r1", "다른로드맵", "다른", 1, 1),
    ).toThrow();
    db.close();
  });

  it("learning_items.id is a PRIMARY KEY (duplicate insert throws)", () => {
    const db = freshDb();
    db.prepare("INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)").run(
      "r1",
      "로드맵",
      "로드맵",
      1,
      0,
    );
    db.prepare(
      "INSERT INTO phases (id, roadmap_id, track_id, source_path, title, order_index, aggregatable) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ).run("p1", "r1", null, "로드맵/01 Phase 1.md", "Phase 1", 0, 1);
    db.prepare(
      "INSERT INTO learning_items (id, phase_id, order_index, text, completed, completed_date, linked_material_id, needs_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    ).run("i1", "p1", 0, "항목", 1, null, null, 0);

    expect(() =>
      db
        .prepare(
          "INSERT INTO learning_items (id, phase_id, order_index, text, completed, completed_date, linked_material_id, needs_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .run("i1", "p1", 1, "다른 항목", 0, null, null, 0),
    ).toThrow();
    db.close();
  });
});

describe("schema.ts - FOREIGN KEY enforcement (T003)", () => {
  it("rejects a learning_items row whose phase_id does not exist in phases", () => {
    const db = freshDb();
    expect(() =>
      db
        .prepare(
          "INSERT INTO learning_items (id, phase_id, order_index, text, completed, completed_date, linked_material_id, needs_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .run("i1", "nonexistent-phase", 0, "항목", 1, null, null, 0),
    ).toThrow();
    db.close();
  });

  it("rejects a learning_items row whose linked_material_id does not exist in materials", () => {
    const db = freshDb();
    db.prepare("INSERT INTO roadmaps (id, source_path, title, has_phase_docs, order_index) VALUES (?, ?, ?, ?, ?)").run(
      "r1",
      "로드맵",
      "로드맵",
      1,
      0,
    );
    db.prepare(
      "INSERT INTO phases (id, roadmap_id, track_id, source_path, title, order_index, aggregatable) VALUES (?, ?, ?, ?, ?, ?, ?)",
    ).run("p1", "r1", null, "로드맵/01 Phase 1.md", "Phase 1", 0, 1);

    expect(() =>
      db
        .prepare(
          "INSERT INTO learning_items (id, phase_id, order_index, text, completed, completed_date, linked_material_id, needs_review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .run("i1", "p1", 0, "항목", 1, null, "nonexistent-material", 0),
    ).toThrow();
    db.close();
  });

  it("rejects a phases row whose roadmap_id does not exist in roadmaps", () => {
    const db = freshDb();
    expect(() =>
      db
        .prepare(
          "INSERT INTO phases (id, roadmap_id, track_id, source_path, title, order_index, aggregatable) VALUES (?, ?, ?, ?, ?, ?, ?)",
        )
        .run("p1", "nonexistent-roadmap", null, "로드맵/01 Phase 1.md", "Phase 1", 0, 1),
    ).toThrow();
    db.close();
  });
});
