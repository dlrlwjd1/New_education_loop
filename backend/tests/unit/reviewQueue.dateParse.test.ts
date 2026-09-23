import { describe, it, expect } from "vitest";
import { parseStrictIsoDate } from "../../src/reviewQueue/dateParse.js";

// T002 (Foundational, research.md §3, data-model.md "검증 규칙"): 복습큐의
// 날짜 칸(처음 틀린 날/다음 복습일/마스터한 날)은 오직 엄격한 YYYY-MM-DD
// ISO-8601 달력 날짜만 통과해야 한다. 그 외 구분자·자연어·빈 문자열·달력에
// 없는 날짜(예: 2026-02-30, 2026-13-01)는 모두 실패로 처리되어야 하며, 실패한
// 행은 조용히 사라지지 않고 ReviewImportError(kind: "date_unparseable")로
// 분리된다(spec.md FR-007).

describe("parseStrictIsoDate() - valid input (T002)", () => {
  it("accepts a well-formed YYYY-MM-DD date", () => {
    const result = parseStrictIsoDate("2026-09-23");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe("2026-09-23");
    }
  });

  it("accepts a leap-year Feb 29 as a real calendar date", () => {
    // 2028 is a leap year (divisible by 4, not a century exception).
    const result = parseStrictIsoDate("2028-02-29");
    expect(result.ok).toBe(true);
  });
});

describe("parseStrictIsoDate() - rejected input (T002)", () => {
  it.each([
    ["2026/09/23", "slash separator"],
    ["2026.09.23", "dot separator"],
    ["09-23-2026", "US month-first order"],
    ["September 23, 2026", "natural-language date"],
    ["9월 19일", "Korean natural-language date (matches the with-errors.md fixture's broken cell)"],
    ["", "empty string"],
    ["2026-02-30", "calendar-invalid: February has no 30th"],
    ["2026-13-01", "calendar-invalid: month 13 does not exist"],
    ["2026-00-10", "calendar-invalid: month 0 does not exist"],
    ["2026-09-00", "calendar-invalid: day 0 does not exist"],
    ["2027-02-29", "calendar-invalid: 2027 is not a leap year"],
  ])("rejects %s (%s)", (value) => {
    const result = parseStrictIsoDate(value);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(typeof result.reason).toBe("string");
      expect(result.reason.length).toBeGreaterThan(0);
    }
  });
});
