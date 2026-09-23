import { describe, it, expect } from "vitest";
import { formatProgress } from "../../src/briefing/formatProgress.js";

// T003 (Foundational), written independently from
// specs/005-briefing/contracts/briefing-library.md and spec.md FR-004/FR-005
// (NOT from reading formatProgress.ts's implementation body). The contract
// pins down literal templates for every branch, so exact-string assertions
// are used where the contract itself is that precise; only the general
// "{P.P}%" case is checked by substring/threshold since the contract gives a
// pattern, not one fixed example.

describe("formatProgress() - FR-005 no-data states (contract branch order)", () => {
  it("hasPhaseDocs=false -> no_phase_docs / 진행 자료 없음, regardless of counts", () => {
    expect(formatProgress(0, 0, false)).toEqual({ status: "no_phase_docs", percentLabel: "진행 자료 없음" });
    // hasPhaseDocs=false must win even if completedCount/totalCount would
    // otherwise look like real progress -- Phase 문서가 없으면 그 숫자 자체가
    // 신뢰할 수 없다는 것이 FR-005의 요지.
    expect(formatProgress(5, 10, false)).toEqual({ status: "no_phase_docs", percentLabel: "진행 자료 없음" });
  });

  it("hasPhaseDocs=true, totalCount=0 -> needs_review_format / 형식 확인 필요 (includes the 0/0 case)", () => {
    expect(formatProgress(0, 0, true)).toEqual({ status: "needs_review_format", percentLabel: "형식 확인 필요" });
  });
});

describe("formatProgress() - FR-004 completed=0 boundary", () => {
  it("completedCount=0 with totalCount>0 -> not_started / 0% (미시작)", () => {
    expect(formatProgress(0, 251, true)).toEqual({ status: "not_started", percentLabel: "0% (미시작)" });
  });
});

describe("formatProgress() - FR-004 <0.1% boundary (tiny-but-real progress)", () => {
  it("rounds to 0.0 at one decimal place but completed>0 -> <0.1% (진행 중, N/M), fraction shown", () => {
    // 5/799 = 0.626% -> not actually below 0.1, use a genuinely sub-0.05% case
    // so toFixed(1) really rounds down to "0.0": 1/10000 = 0.01%.
    const result = formatProgress(1, 10000, true);
    expect(result.status).toBe("normal");
    expect(result.percentLabel).toBe("<0.1% (진행 중, 1/10000)");
  });

  it("the spec's own canonical example (5/799 style small fraction) still reports the original fraction verbatim", () => {
    // 5/799 = 0.626% rounds to "0.6", which is NOT the <0.1% branch -- verifies
    // the boundary is about the ROUNDED value, not "any small fraction".
    const result = formatProgress(5, 799, true);
    expect(result.percentLabel).toBe("0.6% (5/799)");
  });
});

describe("formatProgress() - FR-004 <100% boundary (rounds up to 100% but incomplete)", () => {
  it("rounds to 100.0 at one decimal place while completed<total -> <100%, no fraction appended", () => {
    // 9999/10000 = 99.99% -> toFixed(1) rounds to "100.0", but 1 item remains.
    const result = formatProgress(9999, 10000, true);
    expect(result.status).toBe("normal");
    expect(result.percentLabel).toBe("<100%");
  });

  it("true 100% completion (completed === total) is NOT collapsed into <100% -- shows 100.0% (N/M)", () => {
    const result = formatProgress(10, 10, true);
    expect(result.percentLabel).toBe("100.0% (10/10)");
  });
});

describe("formatProgress() - normal decimal case", () => {
  it("a mid-range ratio is shown to one decimal place with the completed/total fraction", () => {
    const result = formatProgress(3, 251, true);
    expect(result.status).toBe("normal");
    // 3/251 = 1.195...% -> "1.2%"
    expect(result.percentLabel).toBe("1.2% (3/251)");
  });

  it("every 'normal' branch keeps the original completed/total fraction visible somewhere in the label", () => {
    const result = formatProgress(42, 100, true);
    expect(result.percentLabel).toContain("42/100");
  });
});

describe("formatProgress() - purity", () => {
  it("is a pure function: identical inputs always produce identical, deep-equal output", () => {
    const a = formatProgress(5, 799, true);
    const b = formatProgress(5, 799, true);
    expect(a).toEqual(b);
  });
});
