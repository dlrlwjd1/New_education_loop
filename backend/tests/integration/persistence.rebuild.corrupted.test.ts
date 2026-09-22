import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps } from "../../src/persistence/queries.js";
import { SCHEMA_VERSION } from "../../src/persistence/schema.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T020 (US3): a corrupted cache file, or one stamped with an old/foreign
// PRAGMA user_version, must not make reload() throw - it must rebuild from
// the original source files instead (FR-003, Edge Cases).

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-rebuild-corrupted-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("reload() - rebuilds without throwing on a corrupted cache file (US3, T020, FR-003)", () => {
  it("an arbitrary-bytes file at dbPath is silently replaced by a fresh rebuild, not treated as an error", () => {
    const dbPath = freshDbPath();
    writeFileSync(dbPath, Buffer.from([0x00, 0x01, 0x02, 0xff, 0xfe, 0x00, "not a sqlite file".length]));

    let result;
    expect(() => {
      result = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    }).not.toThrow();

    expect(result!.roadmapCount).toBeGreaterThan(0);
    const summaries = listRoadmaps(dbPath);
    expect(summaries.length).toBe(result!.roadmapCount);
  });

  it("a well-formed SQLite file with an old/foreign PRAGMA user_version is silently rebuilt from scratch, not treated as an error", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    db.exec("CREATE TABLE roadmaps (id TEXT PRIMARY KEY)"); // old/incompatible shape
    db.exec(`PRAGMA user_version = ${SCHEMA_VERSION - 1 >= 0 ? SCHEMA_VERSION - 1 : 999};`);
    db.prepare("INSERT INTO roadmaps (id) VALUES (?)").run("stale-row-from-old-schema");
    db.close();

    let result;
    expect(() => {
      result = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    }).not.toThrow();

    expect(result!.roadmapCount).toBeGreaterThan(0);

    // The rebuilt cache must be a fresh file per data-model.md's current
    // schema, with none of the stale placeholder data left over.
    const summaries = listRoadmaps(dbPath);
    expect(summaries.some((s) => s.roadmapId === "stale-row-from-old-schema")).toBe(false);
  });

  it("a completely empty (zero-byte) file at dbPath is rebuilt without throwing", () => {
    const dbPath = freshDbPath();
    writeFileSync(dbPath, Buffer.alloc(0));

    expect(() => reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath })).not.toThrow();
    expect(listRoadmaps(dbPath).length).toBeGreaterThan(0);
  });
});
