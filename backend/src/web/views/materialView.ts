import type { MaterialBodyView } from "../types.js";
import { escapeHtml } from "../html.js";
import { renderLayout, renderMessage } from "./layout.js";

/**
 * User Story 5 (spec.md Acceptance Scenarios 1-4): render a material's body.
 * `safeHtml` was already sanitized upstream by materialContent.ts
 * specifically so it can be embedded directly — escaping it again would
 * double-escape tables/code blocks/links and defeat the point (FR-009).
 */
export function renderMaterialViewPage(body: MaterialBodyView): string {
  if (body.renderError !== null) {
    return renderMessage({
      title: body.title || "자료 열람 오류",
      message: body.renderError,
    });
  }

  const bodyHtml = `<h1>${escapeHtml(body.title)}</h1>
<p class="material-source-path">${escapeHtml(body.sourcePath)}</p>
<article class="material-body">
${body.safeHtml ?? ""}
</article>`;

  return renderLayout({ title: body.title, bodyHtml });
}
