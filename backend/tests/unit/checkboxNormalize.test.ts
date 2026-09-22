import { describe, it, expect } from "vitest";
import { normalizeCheckboxes } from "../../src/ingestion/checkboxNormalize.js";

// T004 (Foundational): FR-006 — normal checkbox whitespace variants must
// normalize to strict GFM syntax with no error, and notations that still
// cannot be interpreted after trimming must be left untouched and reported
// as ImportError(kind="checkbox_unrecognized").

describe("normalizeCheckboxes", () => {
  it("normalizes [x] (lowercase) with no error", () => {
    const result = normalizeCheckboxes("- [x] 항목", "src.md");
    expect(result.normalized).toBe("- [x] 항목");
    expect(result.errors).toEqual([]);
    expect(result.unrecognizedLines).toEqual([]);
  });

  it("normalizes [X] (uppercase) to lowercase [x] with no error", () => {
    const result = normalizeCheckboxes("- [X] 항목", "src.md");
    expect(result.normalized).toBe("- [X] 항목");
    expect(result.errors).toEqual([]);
  });

  it("normalizes [ x] (leading space variant) to strict [x]", () => {
    const result = normalizeCheckboxes("- [ x] 항목", "src.md");
    expect(result.normalized).toBe("- [x] 항목");
    expect(result.errors).toEqual([]);
  });

  it("normalizes [x ] (trailing space variant) to strict [x]", () => {
    const result = normalizeCheckboxes("- [x ] 항목", "src.md");
    expect(result.normalized).toBe("- [x] 항목");
    expect(result.errors).toEqual([]);
  });

  it("normalizes an empty bracket [ ] to strict unchecked [ ]", () => {
    const result = normalizeCheckboxes("- [] 항목", "src.md");
    expect(result.normalized).toBe("- [ ] 항목");
    expect(result.errors).toEqual([]);
  });

  it("reports [o] as checkbox_unrecognized and leaves the line untouched", () => {
    const line = "- [o] 항목";
    const result = normalizeCheckboxes(line, "src.md");
    expect(result.normalized).toBe(line);
    expect(result.unrecognizedLines).toEqual([1]);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0]).toMatchObject({ sourcePath: "src.md", kind: "checkbox_unrecognized" });
  });

  it("reports [✓] as checkbox_unrecognized and leaves the line untouched", () => {
    const line = "- [✓] 항목";
    const result = normalizeCheckboxes(line, "src.md");
    expect(result.normalized).toBe(line);
    expect(result.unrecognizedLines).toEqual([1]);
    expect(result.errors[0]).toMatchObject({ kind: "checkbox_unrecognized" });
  });

  it("does not touch or flag a checkbox-looking line inside a fenced code block (FR-005)", () => {
    const content = ["```", "- [x] 코드 블록 안 예시", "```"].join("\n");
    const result = normalizeCheckboxes(content, "src.md");
    expect(result.normalized).toBe(content);
    expect(result.errors).toEqual([]);
    expect(result.unrecognizedLines).toEqual([]);
  });

  it("does not flag [label](url) markdown link syntax as an unrecognized checkbox", () => {
    const line = "- [내 자료](../../courses/foo.md) 링크 항목";
    const result = normalizeCheckboxes(line, "src.md");
    expect(result.normalized).toBe(line);
    expect(result.errors).toEqual([]);
  });
});
