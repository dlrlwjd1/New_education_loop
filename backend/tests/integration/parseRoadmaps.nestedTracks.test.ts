import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoadmaps } from "../../src/ingestion/parseRoadmaps.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.join(HERE, "..", "fixtures", "study-progress-nested");

// T016 (US2): "AI넥스트로드맵" fixture has 3 tracks (T1, T2, T10) with 2, 3, 4
// Phases respectively. Directory/file names are deliberately chosen so that
// plain string sort gives the WRONG order (T1, T10, T2) while the correct,
// numeric, logical order is T1, T2, T10 (FR-001/FR-002, spec.md US2
// Acceptance Scenario 2). Same trick is used one level down inside "T2 중간"
// (files "1", "2", "10" -> string sort gives 1, 10, 2; correct order is 1, 2, 10).

describe("parseRoadmaps - nested tracks (US2, T016)", () => {
  const result = parseRoadmaps(FIXTURE_ROOT);

  it("recognizes exactly one roadmap with exactly 3 tracks", () => {
    expect(result.roadmaps).toHaveLength(1);
    expect(result.roadmaps[0]!.tracks).toHaveLength(3);
  });

  it("recognizes every track's every phase with zero omissions (2 + 3 + 4 = 9 phases total)", () => {
    const roadmap = result.roadmaps[0]!;
    const totalPhases = roadmap.tracks.reduce((sum, t) => sum + t.phases.length, 0);
    expect(totalPhases).toBe(9);
    expect(roadmap.tracks.map((t) => t.phases.length).sort()).toEqual([2, 3, 4]);
  });

  it("orders tracks by logical (numeric) order, not string sort", () => {
    const roadmap = result.roadmaps[0]!;
    const actualOrder = roadmap.tracks.map((t) => t.title);
    const naiveStringSortOrder = [...actualOrder].sort((a, b) => a.localeCompare(b));

    expect(actualOrder).toEqual(["T1 첫걸음", "T2 중간", "T10 마지막"]);
    // Prove this is actually a non-trivial check: naive string sort would
    // have gotten it wrong (T1, T10, T2), demonstrating the fixture truly
    // exercises "order not alphabetical" rather than coincidentally passing.
    expect(naiveStringSortOrder).not.toEqual(actualOrder);
    expect(naiveStringSortOrder).toEqual(["T1 첫걸음", "T10 마지막", "T2 중간"]);
  });

  it("orders phases within a track by logical (numeric) order, not string sort (T2 중간: 1, 2, 10)", () => {
    const roadmap = result.roadmaps[0]!;
    const t2 = roadmap.tracks.find((t) => t.title === "T2 중간")!;
    const actualTitleOrder = t2.phases.map((p) => p.title);
    expect(actualTitleOrder).toEqual(["Phase 1 - 기초", "Phase 2 - 심화", "Phase 3 - 종합"]);

    // The titles themselves ("Phase 1"/"Phase 2"/"Phase 3") happen to also
    // string-sort correctly (single digit each) - the real trap is in the
    // underlying FILENAMES ("1 Phase 1....md", "2 Phase 2....md",
    // "10 Phase 3....md"), which string-sort as 1, 10, 2. Compare against
    // the actual source filenames to prove the fixture truly exercises the
    // non-alphabetical case (spec.md US2 Acceptance Scenario 2).
    const actualFilenameOrder = t2.phases.map((p) => path.basename(p.sourcePath));
    expect(actualFilenameOrder).toEqual(["1 Phase 1 - 기초.md", "2 Phase 2 - 심화.md", "10 Phase 3 - 종합.md"]);

    const naiveStringSortOrder = [...actualFilenameOrder].sort((a, b) => a.localeCompare(b));
    expect(naiveStringSortOrder).not.toEqual(actualFilenameOrder);
    expect(naiveStringSortOrder).toEqual(["1 Phase 1 - 기초.md", "10 Phase 3 - 종합.md", "2 Phase 2 - 심화.md"]);
  });

  it("no learning items are missing across the whole nested structure", () => {
    const roadmap = result.roadmaps[0]!;
    const allItems = roadmap.tracks.flatMap((t) => t.phases.flatMap((p) => p.items));
    // T1: 2+2=4, T2: 1+1+1=3, T10: 1+1+1+1=4 -> total 11
    expect(allItems).toHaveLength(11);
  });

  it("produces no errors for this well-formed fixture", () => {
    expect(result.errors).toEqual([]);
  });
});
