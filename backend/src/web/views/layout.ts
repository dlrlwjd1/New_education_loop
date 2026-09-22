import { escapeHtml } from "../html.js";

/**
 * Shared HTML document shell (T004) — every page-level view renderer wraps
 * its body markup with this so nav/head/doctype stay consistent in one place.
 */
export function renderLayout(options: { title: string; bodyHtml: string }): string {
  const { title, bodyHtml } = options;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<nav class="site-nav">
<a href="/">로드맵</a>
<a href="/materials">자료실</a>
</nav>
<main>
${bodyHtml}
</main>
</body>
</html>`;
}

/**
 * A full page showing just a heading + message paragraph — used for empty
 * states, 404 bodies, "no more items to continue with", and material render
 * errors. `message` is escaped (it may originate from filesystem errors).
 */
export function renderMessage(options: { title: string; message: string }): string {
  const { title, message } = options;
  const bodyHtml = `<h1>${escapeHtml(title)}</h1>
<p class="message">${escapeHtml(message)}</p>`;
  return renderLayout({ title, bodyHtml });
}
