import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoadmaps } from "../../src/ingestion/parseRoadmaps.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");

// T010 (US1): flat (track-less) roadmap fixture with hand-counted checkbox
// totals. "샘플 로드맵" contains:
//   01 Phase 1 - 소개.md   : 3 items, 2 completed, 1 not
//   02 Phase 2 - 실습.md   : 4 real items (1 completed) + 2 code-block items
//                            that must NOT be counted (FR-005)
//   00 부록 - 참고자료.md  : 2 checkboxes, but filename has no "Phase" ->
//                            excluded entirely from aggregation (FR-004)
// Hand-counted roadmap total: 7 items, 3 completed.

describe("parseRoadmaps - flat roadmap (US1, T010)", () => {
  const result = parseRoadmaps(FIXTURE_ROOT);

  it("recognizes exactly one roadmap", () => {
    expect(result.roadmaps).toHaveLength(1);
  });

  it("recognizes exactly the two Phase-named documents, excluding the non-Phase appendix", () => {
    const roadmap = result.roadmaps[0]!;
    expect(roadmap.tracks).toEqual([]);
    expect(roadmap.rootPhases).toHaveLength(2);
    const titles = roadmap.rootPhases.map((p) => p.title).sort();
    expect(titles).toEqual(["Phase 1 - 소개", "Phase 2 - 실습"].sort());
  });

  it("matches the hand-counted completed/total per phase exactly", () => {
    const roadmap = result.roadmaps[0]!;
    const phase1 = roadmap.rootPhases.find((p) => p.title === "Phase 1 - 소개")!;
    const phase2 = roadmap.rootPhases.find((p) => p.title === "Phase 2 - 실습")!;

    expect(phase1.items).toHaveLength(3);
    expect(phase1.items.filter((i) => i.completed === true)).toHaveLength(2);

    // Phase 2: 4 real items, 1 completed. The 2 code-block items must not appear at all.
    expect(phase2.items).toHaveLength(4);
    expect(phase2.items.filter((i) => i.completed === true)).toHaveLength(1);
    expect(phase2.items.some((i) => i.text.includes("코드 블록"))).toBe(false);
  });

  it("matches the hand-counted roadmap-wide total (SC-001 style check)", () => {
    const roadmap = result.roadmaps[0]!;
    const allItems = roadmap.rootPhases.flatMap((p) => p.items);
    expect(allItems).toHaveLength(7);
    expect(allItems.filter((i) => i.completed === true)).toHaveLength(3);
  });

  it("produces no errors for this well-formed fixture", () => {
    expect(result.errors).toEqual([]);
  });
});
