import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runImport } from "../../src/ingestion/runImport.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "scope-separation", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");

// T026 (US4): fixture has three roadmaps:
//   A-실제      : no marker -> real, 3 items (2 completed, 1 not)
//   B-예시전체  : <!-- scope: example --> in README.md -> whole roadmap is example, 2 items
//   C-부분예시  : no marker on the roadmap, but Phase 2 file itself carries
//                the marker -> only that Phase's 4 items are example; Phase 1's
//                2 items are real
//
// spec.md US4 Acceptance Scenario 1 / SC-005: running scope="real" must
// yield metrics.exampleItemCount === 0 (data-model.md: "포함된 예시 데이터
// 수... 0이어야 함" - i.e. the count of example items INCLUDED in the
// real-scope result, not the count found-and-excluded). tasks.md T026 also
// explicitly requires that no example item's sourcePath appears in
// `mappings` at all under scope="real".

describe("runImport - scope separation (US4, T026)", () => {
  it("scope=real excludes the fully-marked example roadmap from roadmaps entirely", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const roadmapTitles = batch.roadmaps.map((r) => r.sourcePath);
    expect(roadmapTitles).not.toContain("B-예시전체");
    expect(roadmapTitles.sort()).toEqual(["A-실제", "C-부분예시"]);
  });

  it("scope=real excludes just the marked Phase from a roadmap that is only partially example", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const roadmapC = batch.roadmaps.find((r) => r.sourcePath === "C-부분예시")!;
    const phaseTitles = roadmapC.rootPhases.map((p) => p.title);
    expect(phaseTitles).toEqual(["Phase 1 - 실제부분"]);
  });

  it("SC-005: metrics.exampleItemCount is 0 under scope=real (per contract's literal invariant)", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    expect(batch.metrics.exampleItemCount).toBe(0);
  });

  it("no example item's sourcePath appears anywhere in batch.mappings under scope=real", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const mappingPaths = batch.mappings.map((m) => m.sourcePath);

    // B-예시전체's own README-marked roadmap and its Phase file must not appear at all.
    expect(mappingPaths.some((p) => p.startsWith("B-예시전체"))).toBe(false);
    // C-부분예시's example-marked Phase 2 file must not appear either.
    expect(mappingPaths.some((p) => p.includes("02 Phase 2 - 예시부분.md"))).toBe(false);
  });

  it("scope=real keeps A-실제's completed/total counts intact", () => {
    const batch = runImport({ scope: "real", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const roadmapA = batch.roadmaps.find((r) => r.sourcePath === "A-실제")!;
    expect(batch.metrics.totalItemCount[roadmapA.id]).toBe(3);
    expect(batch.metrics.completedItemCount[roadmapA.id]).toBe(2);
  });

  it("scope=example returns only the marked example data, in a separate space from the real result", () => {
    const batch = runImport({ scope: "example", studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT });
    const roadmapTitles = batch.roadmaps.map((r) => r.sourcePath).sort();
    expect(roadmapTitles).toEqual(["B-예시전체", "C-부분예시"]);

    const roadmapC = batch.roadmaps.find((r) => r.sourcePath === "C-부분예시")!;
    expect(roadmapC.rootPhases.map((p) => p.title)).toEqual(["Phase 2 - 예시부분"]);
  });
});
