/**
 * data-model.md / research.md §3: appends ONE new row to the END of
 * `내학습/복습큐.md`'s ACTIVE queue table (FR-013) — this feature's first
 * write path into a file 004 previously only ever read.
 *
 * Never round-trips the file through a markdown AST -> string serializer
 * (which could silently reformat unrelated parts of a hand-edited file) —
 * instead it reuses the SAME `unified`/`remark-parse`/`remark-gfm` AST
 * `reviewQueue/parseReviewQueue.ts` already uses to tell the active table
 * apart from the "## 마스터 완료" table, but only to find the exact byte
 * offset where the active table's last existing row ends, then splices the
 * new row's raw text in at that one point. Every other byte in the file is
 * left untouched — the same append-only discipline `briefing/logFile.ts`
 * uses for its own file.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { toString as mdastToString } from "mdast-util-to-string";
import type { Heading, Root, RootContent, Table } from "mdast";
import { DEFAULT_REVIEW_QUEUE_PATH } from "../persistence/load.js";

const processor = unified().use(remarkParse).use(remarkGfm);
/** Same marker `reviewQueue/parseReviewQueue.ts` uses to tell the two tables apart. */
const MASTERED_HEADING_MARKER = "마스터 완료";
const ACTIVE_TABLE_HEADER = ["| 항목 | 주제 | 처음 틀린 날 | 다음 복습일 | 상태 |", "|---|---|---|---|---|"].join("\n");

function isHeading(node: RootContent): node is Heading {
  return node.type === "heading";
}

function isTable(node: RootContent): node is Table {
  return node.type === "table";
}

export interface AppendActiveReviewRowInput {
  /** The review item's "항목" cell — `StudyQuestion.conceptLabel` (or a fallback) when this is called from `study/service.ts`. */
  item: string;
  /** The review item's "주제" cell — the session's `targetLabel`. */
  topic: string;
  /** `YYYY-MM-DD`. */
  firstWrongDate: string;
}

export interface AppendedActiveReviewRow {
  item: string;
  topic: string;
  firstWrongDate: string;
  /** `firstWrongDate` + 1 day (F06's "최초 오답 → 오답 발생일 + 1일" — the ONLY interval math this feature does). */
  nextReviewDate: string;
  /** Always `"1회차"` in this feature — repetition-stage computation (F06 beyond the first interval) is out of scope. */
  stageLabel: string;
}

/** F06: "최초 오답 → 오답 발생일 + 1일". The only date arithmetic this feature performs. */
function addOneDay(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) {
    throw new Error(`잘못된 날짜 형식(YYYY-MM-DD 아님): ${isoDate}`);
  }
  const [, y, m, d] = match as unknown as [string, string, string, string];
  const asDate = new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
  asDate.setUTCDate(asDate.getUTCDate() + 1);
  const yyyy = String(asDate.getUTCFullYear()).padStart(4, "0");
  const mm = String(asDate.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(asDate.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Escapes characters that would otherwise corrupt the GFM table's column
 * structure. 004's parser (`reviewQueue/parseReviewQueue.ts`) reads cells
 * positionally from the parsed AST — an unescaped `|` in free-form
 * AI-generated `item`/session `topic` text would silently create an extra
 * column instead of erroring, so this writer (whose inputs are exactly that
 * kind of free-form text, unlike `briefing/logFile.ts`'s already-controlled
 * inputs) takes on that responsibility itself.
 */
function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function renderRow(row: AppendedActiveReviewRow): string {
  return `| ${escapeCell(row.item)} | ${escapeCell(row.topic)} | ${row.firstWrongDate} | ${row.nextReviewDate} | ${row.stageLabel} |`;
}

function ensureTrailingNewline(content: string): string {
  return content.endsWith("\n") ? content : `${content}\n`;
}

/**
 * Appends one new row to `내학습/복습큐.md`'s active queue table. Never
 * touches any existing row, and never touches the "## 마스터 완료" table.
 */
export function appendActiveReviewRow(
  input: AppendActiveReviewRowInput,
  reviewQueuePath: string = DEFAULT_REVIEW_QUEUE_PATH,
): AppendedActiveReviewRow {
  const nextReviewDate = addOneDay(input.firstWrongDate);
  const row: AppendedActiveReviewRow = {
    item: input.item,
    topic: input.topic,
    firstWrongDate: input.firstWrongDate,
    nextReviewDate,
    stageLabel: "1회차",
  };
  const rowText = renderRow(row);

  const exists = existsSync(reviewQueuePath);
  const content = exists ? readFileSync(reviewQueuePath, "utf8") : "";

  if (!exists || content.trim() === "") {
    // spec.md/004's own "missing file = empty" convention (no prior active
    // items) — create a minimal file 004's parser can read: just the active
    // table header plus this one new row. No "## 마스터 완료" section is
    // invented; 004 already treats its absence as "no mastered items", not
    // an error.
    mkdirSync(path.dirname(reviewQueuePath), { recursive: true });
    writeFileSync(reviewQueuePath, `# 복습큐\n\n${ACTIVE_TABLE_HEADER}\n${rowText}\n`, "utf8");
    return row;
  }

  const root = processor.parse(content) as Root;
  let lastActiveTableEndOffset: number | null = null;
  let underMasteredHeading = false;
  for (const node of root.children) {
    if (isHeading(node)) {
      underMasteredHeading = mdastToString(node).trim().includes(MASTERED_HEADING_MARKER);
      continue;
    }
    if (isTable(node) && !underMasteredHeading) {
      const end = node.position?.end.offset;
      if (typeof end === "number") {
        lastActiveTableEndOffset = end;
      }
    }
  }

  if (lastActiveTableEndOffset === null) {
    // File exists but has no active table yet (e.g. only a mastered
    // section survives, or some other shape) — append a fresh active table
    // at the very end rather than guessing where inside the existing
    // content one belongs, so no existing byte is ever touched.
    const base = ensureTrailingNewline(content);
    writeFileSync(reviewQueuePath, `${base}\n${ACTIVE_TABLE_HEADER}\n${rowText}\n`, "utf8");
    return row;
  }

  const before = content.slice(0, lastActiveTableEndOffset);
  const after = content.slice(lastActiveTableEndOffset);
  const spliced = `${before}\n${rowText}${after}`;
  writeFileSync(reviewQueuePath, ensureTrailingNewline(spliced), "utf8");

  return row;
}
