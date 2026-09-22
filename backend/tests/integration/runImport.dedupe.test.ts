import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runImport } from "../../src/ingestion/runImport.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T011 (US1): running the same fixture twice must not create duplicates
// (SC-004) and must produce identical entity ids across both runs.

describe("runImport - dedupe on double run (US1, T011)", () => {
  it("metrics.duplicateCount is 0 on a single run of well-formed, non-colliding fixture data", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    expect(batch.metrics.duplicateCount).toBe(0);
  });

  it("running the same fixture twice yields the same entity ids and duplicateCount stays 0", () => {
    const first = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const second = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });

    expect(second.metrics.duplicateCount).toBe(0);

    const idsOf = (batch: typeof first) =>
      batch.mappings
        .map((m) => `${m.entityType}:${m.sourcePath}:${m.entityId}`)
        .sort();

    expect(idsOf(second)).toEqual(idsOf(first));

    // No new entities: same count of mappings both times.
    expect(second.mappings.length).toBe(first.mappings.length);
  });

  it("re-running does not change the roadmap-level completed/total counts", () => {
    const first = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const second = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    expect(second.metrics.completedItemCount).toEqual(first.metrics.completedItemCount);
    expect(second.metrics.totalItemCount).toEqual(first.metrics.totalItemCount);
  });
});
