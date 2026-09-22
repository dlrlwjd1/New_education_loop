import type { ImportError } from "./types.js";

export interface NormalizeCheckboxesResult {
  /** Markdown with checkbox whitespace variants normalized to strict GFM syntax. */
  normalized: string;
  /** One ImportError(kind="checkbox_unrecognized") per line whose bracket could not be interpreted. */
  errors: ImportError[];
  /**
   * 1-indexed line numbers (in `normalized`, which never removes/adds lines,
   * so they match the original too) where a checkbox-shaped bracket could
   * not be interpreted. Because the line is left byte-for-byte untouched,
   * remark-gfm will parse it as an ordinary (non-task) list item — this set
   * lets the caller correlate that list item's `position.start.line` back to
   * "this was an attempted checkbox", so it can still be surfaced as a
   * LearningItem with completed = null instead of being silently dropped.
   */
  unrecognizedLines: number[];
}

/**
 * Matches a list-item line that opens a bracket right after the bullet
 * marker: "  - [ xx] rest of the line". Group 2 is the raw bracket content
 * (kept small on purpose — genuine checkbox tokens are 0-ish chars; long
 * bracket content is almost always a markdown link label, e.g.
 * "- [코스 워크북 원본 (Google Slides)]").
 */
const LIST_ITEM_BRACKET = /^(\s*(?:[-*+]|\d+[.)])\s+)\[([^\]\n]{0,8})\](.*)$/;

/**
 * FR-006: normalize `[x]`, `[X]`, `[ x]`, `[x ]` and similar whitespace
 * variants to strict GFM checkbox syntax (`[ ]` / `[x]`) *before* AST
 * parsing, because remark-gfm only recognizes the strict form. Notations
 * that still cannot be interpreted after trimming (e.g. `[o]`, `[✓]`, `[-]`)
 * are left untouched and reported as ImportError(kind="checkbox_unrecognized")
 * — the caller is responsible for surfacing LearningItem.completed = null
 * for whatever AST node (if any) results from that line.
 *
 * FR-005: content inside fenced code blocks (``` or ~~~) is never inspected
 * or rewritten — a checkbox-looking line inside a fenced code block is left
 * byte-for-byte identical, and never produces an ImportError, because it was
 * never a real list item to begin with.
 */
export function normalizeCheckboxes(content: string, sourcePath: string): NormalizeCheckboxesResult {
  const lines = content.split(/\r\n|\r|\n/);
  const errors: ImportError[] = [];
  const unrecognizedLines: number[] = [];
  const out: string[] = [];

  let fenceMarker: string | null = null; // the exact fence string currently open, e.g. "```" or "~~~~"

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex] as string;
    const lineNumber = lineIndex + 1;
    const fenceMatch = /^\s*(`{3,}|~{3,})/.exec(line);
    if (fenceMatch) {
      const marker = fenceMatch[1] as string;
      if (fenceMarker === null) {
        // Opening a new fence (only ``` can be closed by ``` of same-or-longer
        // length per CommonMark, but for our purposes any matching close is fine).
        fenceMarker = marker[0] === "`" ? "`" : "~";
      } else if (marker[0] === fenceMarker) {
        fenceMarker = null;
      }
      out.push(line);
      continue;
    }

    if (fenceMarker !== null) {
      // Inside a fenced code block: never touch, never flag.
      out.push(line);
      continue;
    }

    const match = LIST_ITEM_BRACKET.exec(line);
    if (!match) {
      out.push(line);
      continue;
    }

    const [, prefix, inner, rest] = match as unknown as [string, string, string, string];

    if (rest.startsWith("(")) {
      // "[label](url)" markdown link syntax, not a checkbox attempt.
      out.push(line);
      continue;
    }

    const trimmedInner = inner.trim();

    if (trimmedInner === "") {
      out.push(`${prefix}[ ]${rest}`);
      continue;
    }

    if (/^[xX]$/.test(trimmedInner)) {
      out.push(`${prefix}[${trimmedInner}]${rest}`);
      continue;
    }

    // Could not interpret this bracket as a checkbox — leave the line as-is
    // (so downstream AST parsing sees it exactly as authored) and report it.
    out.push(line);
    unrecognizedLines.push(lineNumber);
    errors.push({
      sourcePath,
      kind: "checkbox_unrecognized",
      detail: `알 수 없는 체크박스 표기: "[${inner}]" (원문: ${line.trim()})`,
    });
  }

  return { normalized: out.join("\n"), errors, unrecognizedLines };
}
