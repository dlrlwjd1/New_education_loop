import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import { renderMaterialBody } from "../../src/web/materialContent.js";

// T019 (US5, unit): materialContent.ts's renderMaterialBody() is exercised
// with hand-built Markdown fixtures. `fs.readFileSync` is spied on (not the
// whole `node:fs` module mocked) so this test never touches the real,
// read-only `courses/` tree - the module-under-test and this test file both
// hold a reference to the same singleton `node:fs` object, so a spy set here
// is observed by the code under test.
//
// (a) a table + code block + internal link + original-source link survive
//     conversion with their content intact (FR-009).
// (b) <script>, an inline event handler (onerror), and a javascript: URL are
//     all stripped from the resulting HTML (FR-010, SC-005).
// (c) the path-traversal guard rejects a sourcePath that resolves outside
//     courses/ - renderError is set and the file is never read.

afterEach(() => {
  vi.restoreAllMocks();
});

const SAFE_MARKDOWN = `# 제목

## 표

| 열1 | 열2 |
| --- | --- |
| 값a | 값b |

## 코드

\`\`\`js
console.log("코드 블록 내용");
\`\`\`

내부 링크: [다른 자료](../다른자료.md)

원본 출처: [원본 보기](https://example.com/original-source)
`;

const DANGEROUS_MARKDOWN = `# 위험한 문서

<script>alert("xss")</script>

<img src="x" onerror="alert('onerror-fired')">

[위험 링크](javascript:alert('javascript-url'))

안전한 본문은 남아야 한다.
`;

describe("renderMaterialBody - safe content is preserved (US5, T019a, FR-009)", () => {
  it("keeps table, code block, internal link, and original-source link content", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue(SAFE_MARKDOWN);

    const result = renderMaterialBody("some/fixture.md");
    expect(result.renderError).toBeNull();
    expect(result.safeHtml).not.toBeNull();
    const html = result.safeHtml!;

    // table
    expect(html).toContain("<table");
    expect(html).toContain("값a");
    expect(html).toContain("값b");

    // code block
    expect(html).toMatch(/<pre>\s*<code/);
    expect(html).toContain("코드 블록 내용");

    // internal link (the pipeline percent-encodes the href, which is expected/harmless)
    expect(html).toContain(`href="${encodeURI("../다른자료.md")}"`);
    expect(html).toContain("다른 자료");

    // original-source link
    expect(html).toContain('href="https://example.com/original-source"');
  });
});

describe("renderMaterialBody - dangerous constructs are stripped (US5, T019b, FR-010, SC-005)", () => {
  it("removes <script> tags entirely", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue(DANGEROUS_MARKDOWN);
    const result = renderMaterialBody("some/fixture.md");
    expect(result.renderError).toBeNull();
    const html = result.safeHtml!;
    expect(html.toLowerCase()).not.toContain("<script");
    expect(html).not.toContain('alert("xss")');
  });

  it("removes inline event handler attributes (onerror)", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue(DANGEROUS_MARKDOWN);
    const result = renderMaterialBody("some/fixture.md");
    const html = result.safeHtml!;
    expect(html.toLowerCase()).not.toContain("onerror");
    expect(html).not.toContain("onerror-fired");
  });

  it("removes javascript: URLs", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue(DANGEROUS_MARKDOWN);
    const result = renderMaterialBody("some/fixture.md");
    const html = result.safeHtml!;
    expect(html.toLowerCase()).not.toContain("javascript:");
    expect(html).not.toContain("javascript-url");
  });

  it("still renders the safe surrounding text (not an all-or-nothing failure)", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue(DANGEROUS_MARKDOWN);
    const result = renderMaterialBody("some/fixture.md");
    expect(result.renderError).toBeNull();
    expect(result.safeHtml).toContain("안전한 본문은 남아야 한다");
  });
});

describe("renderMaterialBody - path-traversal guard (US5, T019c, research.md §5)", () => {
  it("rejects a sourcePath with enough '../' segments to resolve outside courses/, without reading any file", () => {
    const readSpy = vi.spyOn(fs, "readFileSync");

    const result = renderMaterialBody("../../../etc/passwd");
    expect(result.safeHtml).toBeNull();
    expect(result.renderError).not.toBeNull();
    expect(result.renderError).toContain("허용되지 않는 경로입니다");
    expect(readSpy).not.toHaveBeenCalled();
  });

  it("rejects deep traversal even when disguised with intermediate real-looking segments", () => {
    const readSpy = vi.spyOn(fs, "readFileSync");
    const result = renderMaterialBody("articles/../../../../etc/passwd");
    expect(result.renderError).not.toBeNull();
    expect(result.renderError).toContain("허용되지 않는 경로입니다");
    expect(readSpy).not.toHaveBeenCalled();
  });
});
