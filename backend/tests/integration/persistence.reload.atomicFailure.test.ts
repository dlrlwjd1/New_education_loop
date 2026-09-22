import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, readFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps } from "../../src/persistence/queries.js";
import { buildAndReplace } from "../../src/persistence/db.js";
import { populateDatabase } from "../../src/persistence/load.js";
import { runImport } from "../../src/ingestion/runImport.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T021 (US3): if the load pipeline crashes partway through, query functions
// must keep returning the last successful state - never a half-written one
// (FR-007). Per the QA brief, failure is injected via db.ts's own
// buildAndReplace(dbPath, populate) with a populate callback that throws
// partway, rather than via any test-only hook inside the implementation.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-atomic-failure-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("atomic failure during load - queries keep serving the last good state (US3, T021, FR-007)", () => {
  it("a crash injected via buildAndReplace's populate callback leaves listRoadmaps()/searchMaterials() unchanged", () => {
    const dbPath = freshDbPath();

    const goodResult = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const goodSummaries = listRoadmaps(dbPath);
    const goodBytes = readFileSync(dbPath);

    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });

    expect(() =>
      buildAndReplace(dbPath, (db) => {
        populateDatabase(db, batch); // fully populates the temp file...
        throw new Error("simulated mid-load crash after populateDatabase, before rename");
      }),
    ).toThrow("simulated mid-load crash");

    // The live file must be byte-identical to the last successful build -
    // not even re-opened, per db.ts's buildAndReplace contract.
    expect(readFileSync(dbPath).equals(goodBytes)).toBe(true);

    const afterCrashSummaries = listRoadmaps(dbPath);
    expect(afterCrashSummaries).toEqual(goodSummaries);
    expect(goodResult.roadmapCount).toBe(afterCrashSummaries.length); // last-good state is still fully intact
  });

  it("no leftover temp file remains in the cache directory after the crash", () => {
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(() =>
      buildAndReplace(dbPath, () => {
        throw new Error("simulated crash");
      }),
    ).toThrow();

    const dir = path.dirname(dbPath);
    const leftoverTemp = readdirSync(dir).filter((f) => f.includes(".tmp-"));
    expect(leftoverTemp).toEqual([]);
  });

  it("a subsequent successful reload() after a crashed attempt recovers normally", () => {
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(() =>
      buildAndReplace(dbPath, () => {
        throw new Error("simulated crash");
      }),
    ).toThrow();

    const recovered = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    expect(recovered.roadmapCount).toBeGreaterThan(0);
    expect(listRoadmaps(dbPath).length).toBe(recovered.roadmapCount);
  });
});
