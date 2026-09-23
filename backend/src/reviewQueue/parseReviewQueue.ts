import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { toString as mdastToString } from "mdast-util-to-string";
import type { Root, RootContent, Heading, Table, TableRow } from "mdast";
import { parseStrictIsoDate } from "./dateParse.js";
import { computeReviewItemId } from "./identity.js";
import type { ActiveReviewItem, MasteredItem, ReviewImportError } from "./types.js";

const processor = unified().use(remarkParse).use(remarkGfm);

/** Heading text (research.md §1) that marks the mastered-items table. */
const MASTERED_HEADING_MARKER = "마스터 완료";

export interface ParseReviewQueueResult {
  activeItems: ActiveReviewItem[];
  masteredItems: MasteredItem[];
  errors: ReviewImportError[];
}

/**
 * contracts/review-queue-library.md: pure function, no file I/O. Parses
 * `내학습/복습큐.md`'s two GFM tables using the same AST-based approach 001
 * uses for checklists (`unified`/`remark-parse`/`remark-gfm`) instead of
 * regex line-scanning (research.md §1) — this is what lets a table be
 * identified by the heading it structurally falls under, rather than by
 * table order (order-based detection breaks on the file's actual current
 * state, which has an active table but an EMPTY mastered table/no mastered
 * rows at all).
 *
 * Empty input, or input with neither table present, returns all three
 * arrays empty — not an error (spec.md FR-014).
 */
export function parseReviewQueue(markdownContent: string): ParseReviewQueueResult {
  const root = processor.parse(markdownContent) as Root;

  const activeTables: Table[] = [];
  const masteredTables: Table[] = [];

  // Single top-to-bottom walk, document order: every GFM `table` node is
  // bucketed by the most recently seen heading's text at the point the table
  // appears (research.md §1). A table under any heading OTHER than
  // "## 마스터 완료" (including "# 복습큐" itself, or no heading at all) is
  // active — matching the spec's framing ("마스터 완료 아래 표만 mastered,
  // 나머지는 전부 active"), not a fixed "first table = active" assumption.
  let underMasteredHeading = false;
  for (const node of root.children) {
    if (isHeading(node)) {
      const headingText = mdastToString(node).trim();
      underMasteredHeading = headingText.includes(MASTERED_HEADING_MARKER);
      continue;
    }
    if (isTable(node)) {
      if (underMasteredHeading) {
        masteredTables.push(node);
      } else {
        activeTables.push(node);
      }
    }
  }

  const activeItems: ActiveReviewItem[] = [];
  const masteredItems: MasteredItem[] = [];
  const errors: ReviewImportError[] = [];

  for (const table of activeTables) {
    parseActiveTable(table, activeItems, errors);
  }
  for (const table of masteredTables) {
    parseMasteredTable(table, masteredItems, errors);
  }

  return { activeItems, masteredItems, errors };
}

function isHeading(node: RootContent): node is Heading {
  return node.type === "heading";
}

function isTable(node: RootContent): node is Table {
  return node.type === "table";
}

/** Plain-text cells of one table row, in column order. */
function cellsOf(row: TableRow): string[] {
  return row.children.map((cell) => mdastToString(cell).trim());
}

/** Rendered plain-text form of a row, for `ReviewImportError.rawRow` (so a user can recognize which row it was). */
function renderRawRow(cells: string[]): string {
  return `| ${cells.join(" | ")} |`;
}

/**
 * Active queue table columns, per spec.md/data-model.md's assumed fixed
 * shape: 항목 | 주제 | 처음 틀린 날 | 다음 복습일 | 상태. Read positionally
 * (not by header-name lookup) — this feature assumes the real file's
 * existing column order (research.md), the same assumption data-model.md's
 * DDL already bakes in.
 */
function parseActiveTable(table: Table, out: ActiveReviewItem[], errors: ReviewImportError[]): void {
  const dataRows = table.children.slice(1); // children[0] is the header row.

  dataRows.forEach((row, rowIndex) => {
    const cells = cellsOf(row);
    const rawRow = renderRawRow(cells);
    const item = cells[0] ?? "";
    const topic = cells[1] ?? "";
    const firstWrongDateRaw = cells[2] ?? "";
    const nextReviewDateRaw = cells[3] ?? "";
    const stageLabel = cells[4] ?? "";

    if (item === "" || topic === "") {
      errors.push({
        sourceTable: "active",
        rowIndex,
        kind: "row_incomplete",
        detail: "필수 칸(항목/주제)이 비어 있음",
        rawRow,
      });
      return;
    }

    const firstWrongDate = parseStrictIsoDate(firstWrongDateRaw);
    if (!firstWrongDate.ok) {
      errors.push({
        sourceTable: "active",
        rowIndex,
        kind: "date_unparseable",
        detail: `처음 틀린 날 칸 값 '${firstWrongDateRaw}'을(를) 해석할 수 없음: ${firstWrongDate.reason}`,
        rawRow,
      });
      return;
    }

    const nextReviewDate = parseStrictIsoDate(nextReviewDateRaw);
    if (!nextReviewDate.ok) {
      errors.push({
        sourceTable: "active",
        rowIndex,
        kind: "date_unparseable",
        detail: `다음 복습일 칸 값 '${nextReviewDateRaw}'을(를) 해석할 수 없음: ${nextReviewDate.reason}`,
        rawRow,
      });
      return;
    }

    out.push({
      id: computeReviewItemId(item, topic, firstWrongDate.value),
      item,
      topic,
      firstWrongDate: firstWrongDate.value,
      stageLabel,
      nextReviewDate: nextReviewDate.value,
    });
  });
}

/**
 * Mastered table columns: 항목 | 주제 | 처음 틀린 날 | 마스터한 날 (no 다음
 * 복습일/상태 columns — data-model.md).
 */
function parseMasteredTable(table: Table, out: MasteredItem[], errors: ReviewImportError[]): void {
  const dataRows = table.children.slice(1);

  dataRows.forEach((row, rowIndex) => {
    const cells = cellsOf(row);
    const rawRow = renderRawRow(cells);
    const item = cells[0] ?? "";
    const topic = cells[1] ?? "";
    const firstWrongDateRaw = cells[2] ?? "";
    const masteredDateRaw = cells[3] ?? "";

    if (item === "" || topic === "") {
      errors.push({
        sourceTable: "mastered",
        rowIndex,
        kind: "row_incomplete",
        detail: "필수 칸(항목/주제)이 비어 있음",
        rawRow,
      });
      return;
    }

    const firstWrongDate = parseStrictIsoDate(firstWrongDateRaw);
    if (!firstWrongDate.ok) {
      errors.push({
        sourceTable: "mastered",
        rowIndex,
        kind: "date_unparseable",
        detail: `처음 틀린 날 칸 값 '${firstWrongDateRaw}'을(를) 해석할 수 없음: ${firstWrongDate.reason}`,
        rawRow,
      });
      return;
    }

    const masteredDate = parseStrictIsoDate(masteredDateRaw);
    if (!masteredDate.ok) {
      errors.push({
        sourceTable: "mastered",
        rowIndex,
        kind: "date_unparseable",
        detail: `마스터한 날 칸 값 '${masteredDateRaw}'을(를) 해석할 수 없음: ${masteredDate.reason}`,
        rawRow,
      });
      return;
    }

    out.push({
      id: computeReviewItemId(item, topic, firstWrongDate.value),
      item,
      topic,
      firstWrongDate: firstWrongDate.value,
      masteredDate: masteredDate.value,
    });
  });
}
