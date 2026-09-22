import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoadmaps } from "../../src/ingestion/parseRoadmaps.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.join(HERE, "..", "fixtures", "edge-cases", "study-progress");

// T031 (Polish): walks every bullet in spec.md's Edge Cases section against
// a concrete fixture. Bullets not covered here are covered by other task
// files, noted inline. A fixed `now` (2026-09-18, matching this feature's
// spec.md Created date) makes the future-date case deterministic per
// contracts/ingestion-library.md's `now?` parameter.

const NOW = new Date("2026-09-18T00:00:00Z");

describe("spec.md Edge Cases (T031)", () => {
  const result = parseRoadmaps(FIXTURE_ROOT, NOW);
  const roadmapByName = (name: string) => result.roadmaps.find((r) => r.sourcePath === name)!;

  it("Edge Case: Phase 문서 자체가 없는 로드맵 -> hasPhaseDocs=false, other roadmaps unaffected", () => {
    const empty = roadmapByName("로드맵-빈");
    expect(empty.hasPhaseDocs).toBe(false);
    expect(empty.tracks).toEqual([]);
    expect(empty.rootPhases).toEqual([]);
    // Other roadmaps in the same parseRoadmaps call still parse normally.
    expect(result.roadmaps.length).toBeGreaterThan(1);
  });

  it("Edge Case: 체크박스 형식이 깨져 집계 불가한 Phase -> aggregatable=false, held in a 'format check needed' state, other roadmaps unaffected", () => {
    // NOTE on the fixture: a checkbox-shaped bracket with an ordinary "- "
    // bullet prefix (e.g. "- [o] 항목") is NOT enough to trigger
    // aggregatable=false - remark still parses it as a normal (non-task)
    // list item, so it becomes a LearningItem with completed=null (an
    // individual-item problem, not a whole-Phase one; verified by direct
    // probing while writing this test). What DOES trigger it: 4-space
    // indentation, which makes remark parse the line as an INDENTED CODE
    // BLOCK instead of a list item at all - normalizeCheckboxes still flags
    // it (its own regex tolerates leading whitespace), but no listItem node
    // exists at that line, so checklistCandidates stays empty while
    // unrecognizedLines is non-empty. This fixture uses that construction.
    const broken = roadmapByName("로드맵-형식깨짐");
    expect(broken.hasPhaseDocs).toBe(true); // has a Phase doc, just unaggregatable - distinct from "no docs at all"
    const phase = broken.rootPhases[0]!;
    expect(phase.aggregatable).toBe(false);
    expect(phase.items).toEqual([]);
    // The lines were still noticed - reported as checkbox_unrecognized, not silently dropped.
    const relatedErrors = result.errors.filter((e) => e.sourcePath === phase.sourcePath);
    expect(relatedErrors.length).toBeGreaterThan(0);
    expect(relatedErrors.every((e) => e.kind === "checkbox_unrecognized")).toBe(true);
  });

  it("Edge Case: Markdown 코드 블록 안의 예시 체크박스는 학습 항목으로 세지 않는다", () => {
    const codeBlock = roadmapByName("로드맵-코드블록");
    const phase = codeBlock.rootPhases[0]!;
    expect(phase.items).toHaveLength(2); // only the two real items outside the fence
    expect(phase.items.some((i) => i.text.includes("코드 블록"))).toBe(false);
  });

  it("Edge Case: 미래 날짜로 기록된 완료 항목 -> completedDate=null + ImportError(kind=date_invalid), 오늘 날짜로 임의 변환하지 않음", () => {
    const mixedDates = roadmapByName("로드맵-혼합날짜");
    const phase = mixedDates.rootPhases[0]!;
    const futureItem = phase.items.find((i) => i.text.includes("미래 날짜"))!;
    expect(futureItem.completedDate).toBeNull();
    expect(futureItem.completed).toBe(true); // date problems don't affect the checkbox's own completed state

    const futureErrors = result.errors.filter(
      (e) => e.kind === "date_invalid" && e.detail.includes("미래"),
    );
    expect(futureErrors.length).toBeGreaterThan(0);
  });

  it("Edge Case: 파싱할 수 없는 날짜 형식 -> completedDate=null + ImportError(kind=date_invalid), 나머지 정상 항목은 계속 처리됨", () => {
    const mixedDates = roadmapByName("로드맵-혼합날짜");
    const phase = mixedDates.rootPhases[0]!;
    const unparsable = phase.items.find((i) => i.text.includes("파싱 불가"))!;
    expect(unparsable.completedDate).toBeNull();

    const parseErrors = result.errors.filter(
      (e) => e.kind === "date_invalid" && e.detail.includes("2026-13-45"),
    );
    expect(parseErrors.length).toBeGreaterThan(0);

    // The well-formed date item in the SAME phase is unaffected (processing continues).
    const goodItem = phase.items.find((i) => i.text.includes("정상 날짜"))!;
    expect(goodItem.completedDate).toBe("2026-01-01");
  });

  it("Edge Case: 날짜 없는 정상 항목은 completed/completedDate 모두 정상 처리됨, 나머지 항목의 오류가 이 항목에 전파되지 않음", () => {
    const mixedDates = roadmapByName("로드맵-혼합날짜");
    const phase = mixedDates.rootPhases[0]!;
    const noDateItem = phase.items.find((i) => i.text.includes("날짜 없는 항목"))!;
    expect(noDateItem.completedDate).toBeNull();
    expect(noDateItem.completed).toBe(false);
  });

  it("cross-reference: not asserted here because they are covered by other task files", () => {
    // - "같은 자료가 두 로드맵에 연결됐을 때 완료 상태 독립성" -> covered by
    //   tests/integration/resolveMaterialLinks.test.ts (T021).
    // - "존재하지 않는 자료를 가리키는 학습 항목 -> link_broken" -> covered by
    //   tests/integration/resolveMaterialLinks.test.ts (T021).
    // - "정규화 후 서로 다른 두 원본이 같은 id로 충돌 -> held" -> covered by
    //   tests/unit/resolveIdentity.test.ts case (d). NOTE (see final report):
    //   this branch requires a `previousBatch` to be supplied; the real
    //   runImport()/parseRoadmaps()/parseMaterials() pipeline never supplies
    //   one (by design, per contracts/ingestion-library.md's resolveIdentity
    //   design note), so this case cannot be demonstrated end-to-end via
    //   runImport() against real or fixture directory trees today - only via
    //   direct resolveIdentity() calls.
    // - "동일 원본을 다시 가져올 때 이전 식별자를 못 찾으면 신규로 처리 후 보고"
    //   -> this is resolveIdentity's default "created" branch plus the
    //   ImportMapping{status:"created"} record; covered implicitly by every
    //   other integration test's mappings output.
    expect(true).toBe(true);
  });
});
