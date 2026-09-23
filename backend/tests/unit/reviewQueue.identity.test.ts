import { describe, it, expect } from "vitest";
import { computeReviewItemId } from "../../src/reviewQueue/identity.js";

// T003 (Foundational, research.md §2, data-model.md): 항목 id는 콘텐츠 기반
// (item+topic+firstWrongDate)이며 결정적이어야 한다. 같은 개념이 다른 날짜에
// 재발하면 서로 다른 id를 가져야 한다 — spec.md Edge Case "같은 개념·주제
// 조합이 표에 중복으로 적혀 있는 경우… 같은 표시 문장이라는 이유만으로
// 자동으로 합치지 않고, 서로 다른 항목으로 유지한다"를 뒷받침하는 규칙이다.

describe("computeReviewItemId() - determinism (T003a)", () => {
  it("returns the same id for the same (item, topic, firstWrongDate) across repeated calls", () => {
    const id1 = computeReviewItemId("TCP 3-way handshake가 왜 3번인가", "네트워크 서비스 Phase 1", "2026-09-14");
    const id2 = computeReviewItemId("TCP 3-way handshake가 왜 3번인가", "네트워크 서비스 Phase 1", "2026-09-14");
    const id3 = computeReviewItemId("TCP 3-way handshake가 왜 3번인가", "네트워크 서비스 Phase 1", "2026-09-14");

    expect(id1).toBe(id2);
    expect(id2).toBe(id3);
    expect(typeof id1).toBe("string");
    expect(id1.length).toBeGreaterThan(0);
  });

  it("is deterministic across many different concrete inputs (no accidental randomness)", () => {
    const pairs: Array<[string, string, string]> = [
      ["OSI 7계층 순서 암기", "네트워크 서비스 Phase 1", "2026-06-01"],
      ["이진 탐색 시간복잡도", "알고리즘 Phase 1", "2026-05-20"],
      ["DevOps 파이프라인 5단계 순서", "데브옵스 Phase 1", "2026-09-15"],
    ];
    for (const [item, topic, firstWrongDate] of pairs) {
      expect(computeReviewItemId(item, topic, firstWrongDate)).toBe(computeReviewItemId(item, topic, firstWrongDate));
    }
  });
});

describe("computeReviewItemId() - relapse and identity distinction (T003b)", () => {
  it("returns a different id when firstWrongDate differs, even for the same item+topic (relapse is a new item)", () => {
    const firstOccurrence = computeReviewItemId("OSI 7계층 순서 암기", "네트워크 서비스 Phase 1", "2026-06-01");
    const relapse = computeReviewItemId("OSI 7계층 순서 암기", "네트워크 서비스 Phase 1", "2026-09-01");
    expect(firstOccurrence).not.toBe(relapse);
  });

  it("returns different ids for different items even with the same topic and firstWrongDate", () => {
    const a = computeReviewItemId("항목 A", "같은 주제", "2026-01-01");
    const b = computeReviewItemId("항목 B", "같은 주제", "2026-01-01");
    expect(a).not.toBe(b);
  });

  it("returns different ids for different topics even with the same item and firstWrongDate", () => {
    const a = computeReviewItemId("같은 항목", "주제 A", "2026-01-01");
    const b = computeReviewItemId("같은 항목", "주제 B", "2026-01-01");
    expect(a).not.toBe(b);
  });
});
