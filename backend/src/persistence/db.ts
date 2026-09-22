import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SCHEMA_VERSION, applySchema, readSchemaVersion } from "./schema.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// backend/src/persistence -> backend/src -> backend -> repo root
const DEFAULT_REPO_ROOT = path.resolve(HERE, "..", "..", "..");

/** plan.md: `backend/.cache/learning-loop.sqlite`, excluded from git (FR-010). */
export const DEFAULT_DB_PATH = path.join(DEFAULT_REPO_ROOT, "backend", ".cache", "learning-loop.sqlite");

export type RebuildReason = "missing" | "corrupted" | "version-mismatch";

export type OpenResult = { ok: true; db: DatabaseSync } | { ok: false; reason: RebuildReason };

function safeClose(db: DatabaseSync): void {
  try {
    db.close();
  } catch {
    // already closed / never fully opened — nothing to do.
  }
}

/**
 * Opens an existing cache file **read-only** and validates it well enough to
 * decide "usable" vs. "needs rebuild" (research.md §5, FR-003):
 *   - file does not exist -> "missing"
 *   - file exists but is not a valid SQLite database (or any other open
 *     failure) -> "corrupted"
 *   - opens fine but `PRAGMA user_version` doesn't match `SCHEMA_VERSION`
 *     (including a plain empty/foreign file, which reads back as 0) ->
 *     "version-mismatch"
 * Never throws — every failure mode is reported as a value so callers (T007)
 * can fall back to full regeneration instead of crashing.
 */
export function openExistingForRead(dbPath: string): OpenResult {
  if (!existsSync(dbPath)) {
    return { ok: false, reason: "missing" };
  }

  let db: DatabaseSync;
  try {
    db = new DatabaseSync(dbPath, { readOnly: true });
  } catch {
    return { ok: false, reason: "corrupted" };
  }

  try {
    const version = readSchemaVersion(db);
    if (version !== SCHEMA_VERSION) {
      safeClose(db);
      return { ok: false, reason: "version-mismatch" };
    }
  } catch {
    safeClose(db);
    return { ok: false, reason: "corrupted" };
  }

  return { ok: true, db };
}

/**
 * Builds a brand new database at a temp path beside `dbPath`, lets `populate`
 * fill it (schema + data), then atomically replaces `dbPath` with it via
 * `fs.renameSync` (research.md §2 — POSIX rename within the same filesystem
 * is atomic, so a concurrent reader never observes a half-written file).
 *
 * FR-007: if `populate` throws, the temp file is discarded and `dbPath` is
 * left completely untouched (not even opened) — any exception propagates to
 * the caller after cleanup so `reload()` can report it, but the cache
 * directory's live file is exactly what it was before this call started.
 */
export function buildAndReplace(dbPath: string, populate: (db: DatabaseSync) => void): void {
  const dir = path.dirname(dbPath);
  mkdirSync(dir, { recursive: true });

  const tmpPath = path.join(dir, `.${path.basename(dbPath)}.tmp-${process.pid}-${Date.now()}`);
  // Defensive: clear out any stale temp file from a previous crashed run
  // before we start (never touches `dbPath` itself).
  rmSync(tmpPath, { force: true });

  let db: DatabaseSync | undefined;
  try {
    db = new DatabaseSync(tmpPath);
    applySchema(db);
    populate(db);
    db.close();
    db = undefined; // already closed; avoid double-close in the catch below
    renameSync(tmpPath, dbPath);
  } catch (err) {
    if (db) {
      safeClose(db);
    }
    rmSync(tmpPath, { force: true });
    throw err;
  }
}
