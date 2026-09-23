import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseReviewQueue } from "../../src/reviewQueue/parseReviewQueue.js";
import type { ActiveReviewItem, MasteredItem } from "../../src/reviewQueue/types.js";

// T010 (US1) / T017 (US2) / T018 (US2, error field detail lives in
// integration test) / T022 (US3): parseReviewQueue() is a pure function
// (contracts/review-queue-library.md) - no file I/O here, only the fixture
// content read once and handed in as a string.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(HERE, "..", "fixtures", "review-queue");

function readFixture(name: string): string {
  return readFileSync(path.join(FIXTURES, name), "utf8");
}

function activeFields(i: ActiveReviewItem) {
  return {
    item: i.item,
    topic: i.topic,
    firstWrongDate: i.firstWrongDate,
    stageLabel: i.stageLabel,
    nextReviewDate: i.nextReviewDate,
  };
}

function masteredFields(i: MasteredItem) {
  return {
    item: i.item,
    topic: i.topic,
    firstWrongDate: i.firstWrongDate,
    masteredDate: i.masteredDate,
  };
}

describe("parseReviewQueue() - normal.md: every active row extracted correctly (T010)", () => {
  it("returns all 5 rows in activeItems with correct item/topic/firstWrongDate/stageLabel/nextReviewDate, masteredItems/errors empty", () => {
    const result = parseReviewQueue(readFixture("normal.md"));

    expect(result.masteredItems).toEqual([]);
    expect(result.errors).toEqual([]);
    expect(result.activeItems).toHaveLength(5);
    expect(result.activeItems.map(activeFields)).toEqual([
      {
        item: "TCP 3-way handshake가 왜 3번인가",
        topic: "네트워크 서비스 Phase 1",
        firstWrongDate: "2026-09-14",
        stageLabel: "2회차",
        nextReviewDate: "2026-09-18",
      },
      {
        item: "사설 IP가 공인 IP로 바뀌는 지점(NAT)",
        topic: "네트워크 서비스 Phase 1",
        firstWrongDate: "2026-09-14",
        stageLabel: "2회차",
        nextReviewDate: "2026-09-20",
      },
      {
        item: "DevOps 파이프라인 5단계 순서",
        topic: "데브옵스 Phase 1",
        firstWrongDate: "2026-09-15",
        stageLabel: "2회차",
        nextReviewDate: "2026-09-22",
      },
      {
        item: "표현 계층의 보안 역할",
        topic: "네트워크 서비스 Phase 1 1-A",
        firstWrongDate: "2026-09-17",
        stageLabel: "1회차",
        nextReviewDate: "2026-09-23",
      },
      {
        item: "OSI 세션 계층 vs HTTP 쿠키",
        topic: "네트워크 서비스 Phase 1 1-A",
        firstWrongDate: "2026-09-17",
        stageLabel: "1회차",
        nextReviewDate: "2026-09-24",
      },
    ]);

    // Every row must get a non-empty, mutually unique id (FR-012: no
    // accidental merging of distinct rows).
    const ids = result.activeItems.map((i) => i.id);
    expect(ids.every((id) => typeof id === "string" && id.length > 0)).toBe(true);
    expect(new Set(ids).size).toBe(5);
  });
});

describe("parseReviewQueue() - with-errors.md: broken date row isolated, rest unaffected (T017)", () => {
  it("keeps the 4 valid rows in activeItems and routes the broken date row to errors with a recognizable rawRow", () => {
    const result = parseReviewQueue(readFixture("with-errors.md"));

    expect(result.activeItems).toHaveLength(4);
    expect(result.activeItems.map((i) => i.item)).toEqual([
      "TCP 3-way handshake가 왜 3번인가",
      "사설 IP가 공인 IP로 바뀌는 지점(NAT)",
      "DevOps 파이프라인 5단계 순서",
      "표현 계층의 보안 역할",
    ]);

    expect(result.errors).toHaveLength(1);
    const error = result.errors[0]!;
    expect(error.sourceTable).toBe("active");
    expect(error.kind).toBe("date_unparseable");
    // Contract does not pin exact wording, only that it is a non-empty
    // human-readable explanation (data-model.md ReviewImportError.detail).
    expect(typeof error.detail).toBe("string");
    expect(error.detail.length).toBeGreaterThan(0);
    // rawRow must let a human recognize which row broke: the 5th row, about
    // "OSI 세션 계층 vs HTTP 쿠키" with the broken cell "9월 19일".
    expect(error.rawRow).toContain("OSI 세션 계층");
    expect(error.rawRow).toContain("9월 19일");
  });
});

describe("parseReviewQueue() - mastered-only.md / mixed.md: mastered rows extracted (T022)", () => {
  it("mastered-only.md: extracts both mastered rows with correct fields, no active rows", () => {
    const result = parseReviewQueue(readFixture("mastered-only.md"));

    expect(result.activeItems).toEqual([]);
    expect(result.errors).toEqual([]);
    expect(result.masteredItems).toHaveLength(2);
    expect(result.masteredItems.map(masteredFields)).toEqual([
      {
        item: "OSI 7계층 순서 암기",
        topic: "네트워크 서비스 Phase 1",
        firstWrongDate: "2026-06-01",
        masteredDate: "2026-08-10",
      },
      {
        item: "이진 탐색 시간복잡도",
        topic: "알고리즘 Phase 1",
        firstWrongDate: "2026-05-20",
        masteredDate: "2026-07-30",
      },
    ]);
  });

  it("mixed.md: extracts 3 active rows + 2 mastered rows whose ids are completely disjoint", () => {
    const result = parseReviewQueue(readFixture("mixed.md"));

    expect(result.errors).toEqual([]);
    expect(result.activeItems).toHaveLength(3);
    expect(result.masteredItems).toHaveLength(2);
    expect(result.masteredItems.map(masteredFields)).toEqual([
      {
        item: "OSI 7계층 순서 암기",
        topic: "네트워크 서비스 Phase 1",
        firstWrongDate: "2026-06-01",
        masteredDate: "2026-08-10",
      },
      {
        item: "이진 탐색 시간복잡도",
        topic: "알고리즘 Phase 1",
        firstWrongDate: "2026-05-20",
        masteredDate: "2026-07-30",
      },
    ]);

    const activeIds = new Set(result.activeItems.map((i) => i.id));
    const masteredIds = new Set(result.masteredItems.map((i) => i.id));
    const intersection = [...activeIds].filter((id) => masteredIds.has(id));
    expect(intersection).toEqual([]);
  });
});

describe("parseReviewQueue() - empty.md: no table present, no exception (FR-014)", () => {
  it("returns all three arrays empty for a fixture with a heading but no table", () => {
    expect(() => parseReviewQueue(readFixture("empty.md"))).not.toThrow();
    const result = parseReviewQueue(readFixture("empty.md"));
    expect(result).toEqual({ activeItems: [], masteredItems: [], errors: [] });
  });

  it("also returns all three arrays empty for a completely empty string (pure-function contract)", () => {
    const result = parseReviewQueue("");
    expect(result).toEqual({ activeItems: [], masteredItems: [], errors: [] });
  });
});
