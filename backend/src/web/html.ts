/**
 * Small HTML-escaping helper (research.md §3) — this feature deliberately
 * avoids a template engine dependency. Every piece of text that ultimately
 * came from the filesystem (roadmap titles, phase/track titles, learning
 * item text, material titles, source paths) MUST be passed through
 * `escapeHtml` before being written into any HTML string, since a filename
 * could contain `<`, `&`, etc. (FR-014, data-model.md validation rules).
 *
 * This helper is NOT used for material body HTML (`MaterialBodyView.safeHtml`)
 * — that content is already sanitized upstream by materialContent.ts
 * (research.md §4) and must be injected raw; escaping it again would
 * double-escape tables/code blocks/links.
 */

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escapes `&`, `<`, `>`, `"`, `'` in an untrusted string for safe HTML output. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPE_MAP[char] ?? char);
}

/**
 * Tagged template that auto-escapes interpolated values while leaving the
 * static template text untouched. Values that are already-safe HTML strings
 * (e.g. built by recursively calling `html` on sub-pieces) can be wrapped in
 * `raw()` to opt out of escaping for that one interpolation.
 */
export function html(strings: TemplateStringsArray, ...values: unknown[]): string {
  let out = strings[0] ?? "";
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    out += isRaw(value) ? value.value : escapeHtml(String(value));
    out += strings[i + 1] ?? "";
  }
  return out;
}

interface RawHtml {
  __rawHtml: true;
  value: string;
}

function isRaw(value: unknown): value is RawHtml {
  return typeof value === "object" && value !== null && (value as RawHtml).__rawHtml === true;
}

/** Marks a string as already-safe HTML so `html` won't escape it (e.g. joined list of child fragments). */
export function raw(value: string): RawHtml {
  return { __rawHtml: true, value };
}
