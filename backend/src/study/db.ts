import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SCHEMA_VERSION, applySchema, readSchemaVersion } from "./schema.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// backend/src/study -> backend/src -> backend -> repo root
const DEFAULT_REPO_ROOT = path.resolve(HERE, "..", "..", "..");

/**
 * This feature's own SQLite file, physically separate from 002/004's shared
 * cache and from 005's `briefing-history.sqlite` (research.md §4). Living
 * under `내학습/` (not `backend/.cache/`) signals it is not a disposable
 * derived cache — a study session in progress is the only record of itself.
 */
export const DEFAULT_STUDY_DB_PATH = path.join(DEFAULT_REPO_ROOT, "내학습", "study-sessions.sqlite");

/**
 * Opens this feature's dedicated SQLite file, mirroring
 * `briefing/db.ts`'s `openBriefingDb()` exactly:
 *
 *   - Missing file: normal first run, not an error — created fresh with the
 *     schema applied.
 *   - File exists but fails to open at all (e.g. not a SQLite file): thrown
 *     as a clear error.
 *   - File exists, opens, but `PRAGMA user_version` does not match
 *     `SCHEMA_VERSION`: thrown as a clear error.
 *
 * Unlike `persistence/db.ts`'s `openExistingForRead`/`buildAndReplace`, this
 * function never deletes or rebuilds an existing file on a version mismatch
 * or corruption — a study session's rows are the only record of that
 * session (data-model.md), so a mismatch must surface to a human rather than
 * silently discard progress.
 */
export function openStudyDb(dbPath: string = DEFAULT_STUDY_DB_PATH): DatabaseSync {
  const isNew = !existsSync(dbPath);
  if (isNew) {
    mkdirSync(path.dirname(dbPath), { recursive: true });
  }

  let db: DatabaseSync;
  try {
    db = new DatabaseSync(dbPath);
  } catch (err) {
    throw new Error(
      `학습 세션 저장소를 열 수 없습니다(파일이 손상되었을 수 있습니다): ${dbPath} — 원인: ${
        err instanceof Error ? err.message : String(err)
      }`,
      { cause: err },
    );
  }

  if (isNew) {
    applySchema(db);
    return db;
  }

  let version: number;
  try {
    version = readSchemaVersion(db);
  } catch (err) {
    db.close();
    throw new Error(
      `학습 세션 저장소의 스키마 버전을 읽는 데 실패했습니다(파일이 손상되었을 수 있습니다): ${dbPath} — 원인: ${
        err instanceof Error ? err.message : String(err)
      }`,
      { cause: err },
    );
  }

  if (version !== SCHEMA_VERSION) {
    db.close();
    throw new Error(
      `학습 세션 저장소의 스키마 버전이 일치하지 않습니다(파일: ${version}, 코드가 기대하는 값: ${SCHEMA_VERSION}): ${dbPath} — ` +
        "이 파일은 002/004의 캐시와 달리 버전 불일치 시 삭제 후 재생성하지 않습니다(research.md §4). 진행 중인 학습 세션 데이터 손실을 " +
        "막기 위해 사람이 직접 확인한 뒤 처리해야 합니다.",
    );
  }

  return db;
}
