import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, statSync } from "node:fs";
import { parseMaterials } from "../../src/ingestion/parseMaterials.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

function countMdFilesRecursively(dir: string): number {
  let count = 0;
  for (const entry of readdirSync(dir)) {
    const abs = path.join(dir, entry);
    const st = statSync(abs);
    if (st.isDirectory()) {
      count += countMdFilesRecursively(abs);
    } else if (entry.toLowerCase().endsWith(".md")) {
      count += 1;
    }
  }
  return count;
}

// T019 (US3): parseMaterials over a courses/ subset fixture must return
// exactly as many Material entries as there are .md files on disk (SC-003),
// counted here independently via a plain recursive fs walk (not reusing any
// ingestion code) to avoid the test trivially agreeing with the implementation.

describe("parseMaterials - count accuracy (US3, T019)", () => {
  it("returns exactly as many materials as an independent filesystem count of .md files", () => {
    const independentCount = countMdFilesRecursively(FIXTURE_ROOT);
    const result = parseMaterials(FIXTURE_ROOT);

    expect(independentCount).toBe(7); // sanity check on the fixture itself
    expect(result.materials).toHaveLength(independentCount);
  });

  it("produces no errors and no held/colliding mappings for this fixture", () => {
    const result = parseMaterials(FIXTURE_ROOT);
    expect(result.errors).toEqual([]);
    expect(result.mappings.every((m) => m.status !== "held")).toBe(true);
  });
});
