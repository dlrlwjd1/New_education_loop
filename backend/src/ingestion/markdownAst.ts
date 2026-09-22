import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { toString as mdastToString } from "mdast-util-to-string";
import type { Root, List, ListItem, Code } from "mdast";

const processor = unified().use(remarkParse).use(remarkGfm);

/**
 * Parse Markdown into an mdast tree using remark + remark-gfm.
 *
 * research.md §2: AST parsing (not line-by-line regex scanning) is what lets
 * us structurally distinguish a real GFM task-list item from text that only
 * looks like one inside a fenced code block — a `code` node's `value` is
 * opaque text to the parser, so nothing inside it ever becomes a `listItem`.
 */
export function parseMarkdown(content: string): Root {
  return processor.parse(content) as Root;
}

export interface ChecklistItem {
  node: ListItem;
  /**
   * true/false for a real GFM task-list item ("- [x]" / "- [ ]").
   * null for an ordinary list item that is NOT a checkbox at all (plain bullet).
   * Callers that need to distinguish "ordinary bullet" from "attempted but
   * unrecognized checkbox" must additionally consult
   * checkboxNormalize's `unrecognizedLines` against `node.position`.
   */
  checked: boolean | null;
  /** Flattened plain-text label (link text included, URLs excluded). */
  text: string;
  /** 1-indexed source line the list item starts on, if position info is available. */
  line: number | null;
}

/**
 * Depth-first, document-order walk collecting every list item in the tree,
 * whether or not it is a GFM task-list item. Order is preserved exactly as
 * written — nested sub-items are visited immediately after their parent,
 * never re-sorted (FR-001). Content inside fenced code blocks is skipped
 * entirely because `code` nodes have no list-item children to descend into.
 */
export function collectAllListItems(root: Root): ChecklistItem[] {
  const items: ChecklistItem[] = [];

  function visitList(list: List): void {
    for (const child of list.children) {
      visitListItem(child);
    }
  }

  function visitListItem(item: ListItem): void {
    const checked = typeof item.checked === "boolean" ? item.checked : null;
    items.push({
      node: item,
      checked,
      text: mdastToString(item).trim(),
      line: item.position?.start.line ?? null,
    });
    // Descend into any nested lists (sub-items) immediately, preserving order.
    for (const child of item.children) {
      if (child.type === "list") {
        visitList(child as List);
      }
    }
  }

  function visit(node: Root | Root["children"][number]): void {
    if (node.type === "code") {
      return; // FR-005: never look inside fenced code blocks.
    }
    if (node.type === "list") {
      visitList(node as List);
      return;
    }
    if ("children" in node && Array.isArray((node as { children?: unknown }).children)) {
      for (const child of (node as { children: Array<Root["children"][number]> }).children) {
        visit(child);
      }
    }
  }

  visit(root);
  return items;
}

/** True if the given node is a fenced/indented code block (helper for callers that walk manually). */
export function isCodeNode(node: unknown): node is Code {
  return typeof node === "object" && node !== null && (node as { type?: string }).type === "code";
}
