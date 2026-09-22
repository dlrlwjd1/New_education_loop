import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { DEFAULT_COURSES_ROOT } from "../ingestion/runImport.js";

export type MaterialBodyRenderResult =
  | { safeHtml: string; renderError: null }
  | { safeHtml: null; renderError: string };

/**
 * research.md §5: read `courses/<sourcePath>` and convert it to safe HTML
 * (FR-009, FR-010). Reuses 001's `unified`/`remark-parse`/`remark-gfm`
 * pipeline (research.md §4) with `remark-rehype({ allowDangerousHtml: true })`
 * + `rehype-raw` (so raw HTML embedded in the Markdown is actually parsed and
 * rendered, not left as inert text) followed by `rehype-sanitize` (allowlist
 * sanitization — strips `<script>`, inline event handlers, `javascript:`
 * URLs, etc.) + `rehype-stringify`.
 *
 * Path-traversal guard (research.md §5): `sourcePath` arrives from an HTTP
 * query/param — a new trust boundary this feature introduces — so the
 * resolved path is confirmed to still be under `DEFAULT_COURSES_ROOT` before
 * anything is read.
 */
export function renderMaterialBody(
  sourcePath: string,
  coursesRootOverride: string = DEFAULT_COURSES_ROOT,
): MaterialBodyRenderResult {
  const coursesRoot = path.resolve(coursesRootOverride);
  const resolvedPath = path.resolve(path.join(coursesRootOverride, sourcePath));
  if (resolvedPath !== coursesRoot && !resolvedPath.startsWith(coursesRoot + path.sep)) {
    return { safeHtml: null, renderError: `허용되지 않는 경로입니다: ${sourcePath}` };
  }

  let raw: string;
  try {
    raw = fs.readFileSync(resolvedPath, "utf8");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { safeHtml: null, renderError: `원본 파일을 읽을 수 없습니다: ${message}` };
  }

  try {
    const file = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .processSync(raw);
    return { safeHtml: String(file), renderError: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { safeHtml: null, renderError: `본문을 변환할 수 없습니다: ${message}` };
  }
}
