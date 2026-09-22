import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, searchMaterials, getMaterialById } from "../../src/persistence/queries.js";

// T020 (US5, unit): 002's additive getMaterialById() (contracts/persistence-library.md
// Addendum) must return the matching MaterialSearchResult for a real materialId,
// and null (never throw) for a materialId that doesn't exist.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LINK_STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "link-fixture", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

const tmpDirs: string[] = [];
let dbPath: string;

beforeAll(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-get-material-by-id-"));
  tmpDirs.push(dir);
  dbPath = path.join(dir, "cache.sqlite");
  reload({ studyProgressRoot: LINK_STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });
});

afterAll(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop() as string;
    rmSync(d, { recursive: true, force: true });
  }
});

describe("getMaterialById (US5, T020)", () => {
  it("returns the exact MaterialSearchResult for an existing materialId, matching searchMaterials()", () => {
    const [expected] = searchMaterials({ sourcePath: "deeplearning-ai/CourseA 강의/모듈 1.md" }, dbPath);
    expect(expected).toBeDefined();

    const found = getMaterialById(expected!.materialId, dbPath);
    expect(found).toEqual(expected);
  });

  it("returns the same linkedRoadmapIds a shared material would show via searchMaterials (FR-013 - values are not recomputed)", () => {
    const [expected] = searchMaterials({ sourcePath: "deeplearning-ai/CourseA 강의/모듈 1.md" }, dbPath);
    const found = getMaterialById(expected!.materialId, dbPath)!;
    expect(found.linkedRoadmapIds.sort()).toEqual(expected!.linkedRoadmapIds.sort());
  });

  it("returns null (never throws) for a materialId that does not exist", () => {
    expect(() => getMaterialById("0000000000000000000000000000000000000000000000000000000000000000", dbPath)).not.toThrow();
    expect(getMaterialById("0000000000000000000000000000000000000000000000000000000000000000", dbPath)).toBeNull();
  });

  it("returns null for an arbitrary made-up string that isn't even hash-shaped", () => {
    expect(getMaterialById("this-material-id-does-not-exist", dbPath)).toBeNull();
  });
});
