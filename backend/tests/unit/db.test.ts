import { describe, it, expect, afterEach } from "vitest";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync, existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildAndReplace, openExistingForRead } from "../../src/persistence/db.js";
import { SCHEMA_VERSION } from "../../src/persistence/schema.js";

// T004 (Foundational): (a) atomic replace on success, (b) existing file left
// untouched when populate() throws (FR-007), (c) missing/corrupted/
// version-mismatched files are reported as a value, never thrown (FR-003).

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-db-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("db.ts buildAndReplace - success path (T004a)", () => {
  it("atomically replaces dbPath with a fully populated database, leaving no temp file behind", () => {
    const dbPath = freshDbPath();
    buildAndReplace(dbPath, (db) => {
      db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
      db.prepare("INSERT INTO marker (n) VALUES (?)").run(1);
    });

    expect(existsSync(dbPath)).toBe(true);

    const dir = path.dirname(dbPath);
    const leftoverTemp = readdirSync(dir).filter((f: string) => f.includes(".tmp-"));
    expect(leftoverTemp).toEqual([]);

    const result = openExistingForRead(dbPath);
    expect(result.ok).toBe(true);
    if (result.ok) {
      const row = result.db.prepare("SELECT n FROM marker").get() as { n: number };
      expect(row.n).toBe(1);
      result.db.close();
    }
  });

  it("a second successful buildAndReplace call fully overwrites the previous content", () => {
    const dbPath = freshDbPath();
    buildAndReplace(dbPath, (db) => {
      db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
      db.prepare("INSERT INTO marker (n) VALUES (?)").run(1);
    });
    buildAndReplace(dbPath, (db) => {
      db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
      db.prepare("INSERT INTO marker (n) VALUES (?)").run(2);
    });

    const result = openExistingForRead(dbPath);
    expect(result.ok).toBe(true);
    if (result.ok) {
      const rows = result.db.prepare("SELECT n FROM marker").all() as Array<{ n: number }>;
      expect(rows).toEqual([{ n: 2 }]); // not [{n:1},{n:2}] - a brand new file, not an upsert
      result.db.close();
    }
  });
});

describe("db.ts buildAndReplace - failure path leaves dbPath untouched (T004b, FR-007)", () => {
  it("when populate() throws partway through, the previously-succeeded dbPath is left byte-for-byte unchanged", () => {
    const dbPath = freshDbPath();
    buildAndReplace(dbPath, (db) => {
      db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
      db.prepare("INSERT INTO marker (n) VALUES (?)").run(1);
    });
    const before = readFileSync(dbPath);

    expect(() =>
      buildAndReplace(dbPath, (db) => {
        db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
        db.prepare("INSERT INTO marker (n) VALUES (?)").run(999);
        throw new Error("simulated mid-load crash");
      }),
    ).toThrow("simulated mid-load crash");

    const after = readFileSync(dbPath);
    expect(after.equals(before)).toBe(true);

    const result = openExistingForRead(dbPath);
    expect(result.ok).toBe(true);
    if (result.ok) {
      const row = result.db.prepare("SELECT n FROM marker").get() as { n: number };
      expect(row.n).toBe(1); // still the old value, not 999
      result.db.close();
    }
  });

  it("leaves no leftover temp file behind after a thrown populate()", () => {
    const dbPath = freshDbPath();
    const dir = path.dirname(dbPath);

    expect(() =>
      buildAndReplace(dbPath, () => {
        throw new Error("simulated crash before any dbPath existed");
      }),
    ).toThrow();

    expect(existsSync(dbPath)).toBe(false); // never existed and still doesn't
    const leftoverTemp = readdirSync(dir).filter((f: string) => f.includes(".tmp-"));
    expect(leftoverTemp).toEqual([]);
  });
});

describe("db.ts openExistingForRead - rebuild signaling (T004c, FR-003)", () => {
  it("reports reason 'missing' for a path that does not exist, without throwing", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "persistence-db-"));
    tmpDirs.push(dir);
    const dbPath = path.join(dir, "does-not-exist.sqlite");

    const result = openExistingForRead(dbPath);
    expect(result).toEqual({ ok: false, reason: "missing" });
  });

  it("reports reason 'corrupted' for a file that exists but is not a valid SQLite database, without throwing", () => {
    const dbPath = freshDbPath();
    writeFileSync(dbPath, "this is not a sqlite file, just garbage bytes");

    const result = openExistingForRead(dbPath);
    expect(result).toEqual({ ok: false, reason: "corrupted" });
  });

  it("reports reason 'version-mismatch' for a valid SQLite file with a different (or absent) PRAGMA user_version, without throwing", () => {
    const dbPath = freshDbPath();
    const db = new DatabaseSync(dbPath);
    db.exec("CREATE TABLE foo (x INTEGER)"); // valid sqlite file, user_version defaults to 0
    db.close();
    expect(SCHEMA_VERSION).not.toBe(0);

    const result = openExistingForRead(dbPath);
    expect(result).toEqual({ ok: false, reason: "version-mismatch" });
  });

  it("reports ok:true for a file built by buildAndReplace (current schema version)", () => {
    const dbPath = freshDbPath();
    buildAndReplace(dbPath, (db) => {
      db.exec("CREATE TABLE IF NOT EXISTS marker (n INTEGER)");
    });
    const result = openExistingForRead(dbPath);
    expect(result.ok).toBe(true);
    if (result.ok) result.db.close();
  });
});
