/**
 * TypeScript types for the entities defined in
 * specs/004-review-queue-persistence/data-model.md ("파싱 단계 타입").
 *
 * This feature (004) does not compute or change review scheduling (spec.md
 * FR-013) — these types only transcribe what `내학습/복습큐.md` already
 * contains.
 */

/** A concept still awaiting review — has not yet graduated to `MasteredItem`. */
export interface ActiveReviewItem {
  /** `computeReviewItemId(item, topic, firstWrongDate)` (research.md §2). */
  id: string;
  /** 표의 "항목" 칸, 원문 그대로. */
  item: string;
  /** 표의 "주제" 칸, 원문 텍스트 — 로드맵 레코드에 매핑하지 않는다 (spec.md Assumptions). */
  topic: string;
  /** ISO-8601 (`YYYY-MM-DD`). */
  firstWrongDate: string;
  /**
   * 표의 "상태" 칸 원문(예: "1회차"). 간격 계산 로직의 입력이 아니라 그대로
   * 보존하는 대상이다 — 이 필드를 해석하지 않는다 (data-model.md).
   */
  stageLabel: string;
  /** ISO-8601 (`YYYY-MM-DD`). */
  nextReviewDate: string;
}

/**
 * A concept that passed the final (35-day) review interval and was moved out
 * of the active queue into the "마스터 완료" table.
 */
export interface MasteredItem {
  /**
   * Same computation as `ActiveReviewItem.id` (item + topic + firstWrongDate)
   * — an item moved from the active queue to mastered keeps the same id
   * (data-model.md).
   */
  id: string;
  item: string;
  topic: string;
  firstWrongDate: string;
  /** ISO-8601 (`YYYY-MM-DD`) — 표의 "마스터한 날" 칸. */
  masteredDate: string;
}

/** Which of the two tables a row that failed validation came from. */
export type ReviewImportSourceTable = "active" | "mastered";

/**
 * `date_unparseable`: a date cell was not a valid `YYYY-MM-DD` value.
 * `row_incomplete`: a required text cell (항목/주제) was empty.
 */
export type ReviewImportErrorKind = "date_unparseable" | "row_incomplete";

/** One row from `내학습/복습큐.md` that could not be interpreted, preserved rather than dropped (FR-007/FR-008). */
export interface ReviewImportError {
  sourceTable: ReviewImportSourceTable;
  /** 0-based row index within that table's data rows (not a stable identifier — for debugging/recognition only). */
  rowIndex: number;
  kind: ReviewImportErrorKind;
  /** Human-readable cause, e.g. `"다음 복습일 칸 값 '9월 19일'을 해석할 수 없음"`. */
  detail: string;
  /** Rendered plain-text form of the original row, so a user can recognize which row it was. */
  rawRow: string;
}
