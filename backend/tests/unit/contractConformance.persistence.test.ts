import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps, getRoadmapDetail, searchMaterials, listReviewNeededItems } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T032 (Polish): verifies the five functions named in
// contracts/persistence-library.md exist with signatures/return shapes
// matching the contract text (reload, listRoadmaps, getRoadmapDetail,
// searchMaterials, listReviewNeededItems), mirroring 001's
// contractConformance.test.ts pattern.

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-contract-"));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("contract conformance: contracts/persistence-library.md (T032)", () => {
  it("reload(options?) exists, accepts studyProgressRoot/coursesRoot/dbPath, and returns LoadResult's documented fields", () => {
    expect(typeof reload).toBe("function");
    const dbPath = freshDbPath();
    const result = reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(result).toHaveProperty("roadmapCount");
    expect(result).toHaveProperty("materialCount");
    expect(result).toHaveProperty("errorCount");
    expect(result).toHaveProperty("durationMs");
    expect(typeof result.roadmapCount).toBe("number");
    expect(typeof result.materialCount).toBe("number");
    expect(typeof result.errorCount).toBe("number");
    expect(typeof result.durationMs).toBe("number");
  });

  it("reload() also works with no options at all (defaults to the real cache path) - checked only for the call not throwing at the type/signature level, not executed against the real cache", () => {
    // reload.length reflects that `options` is a single optional parameter,
    // matching contracts/persistence-library.md's `reload(options?: {...})`.
    expect(reload.length).toBeLessThanOrEqual(1);
  });

  it("listRoadmaps(dbPath?) exists and returns RoadmapSummary[] with every documented field", () => {
    expect(typeof listRoadmaps).toBe("function");
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    const summaries = listRoadmaps(dbPath);
    expect(Array.isArray(summaries)).toBe(true);
    expect(summaries.length).toBeGreaterThan(0);
    const summary = summaries[0]!;
    expect(summary).toHaveProperty("roadmapId");
    expect(summary).toHaveProperty("title");
    expect(summary).toHaveProperty("hasPhaseDocs");
    expect(summary).toHaveProperty("completedCount");
    expect(summary).toHaveProperty("totalCount");
    expect(summary).toHaveProperty("progressRatio");
    expect(summary).toHaveProperty("needsReviewCount");
  });

  it("getRoadmapDetail(roadmapId, dbPath?) exists, returns null for an unknown id, and RoadmapDetail's documented shape for a known one", () => {
    expect(typeof getRoadmapDetail).toBe("function");
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(getRoadmapDetail("does-not-exist", dbPath)).toBeNull();

    const roadmapId = listRoadmaps(dbPath)[0]!.roadmapId;
    const detail = getRoadmapDetail(roadmapId, dbPath);
    expect(detail).not.toBeNull();
    expect(detail).toHaveProperty("roadmapId");
    expect(detail).toHaveProperty("title");
    expect(detail).toHaveProperty("tracks");
    expect(detail).toHaveProperty("phases");
    expect(Array.isArray(detail!.tracks)).toBe(true);
    expect(Array.isArray(detail!.phases)).toBe(true);

    const phase = detail!.phases[0]!;
    expect(phase).toHaveProperty("phaseId");
    expect(phase).toHaveProperty("title");
    expect(phase).toHaveProperty("aggregatable");
    expect(phase).toHaveProperty("items");

    const item = phase.items[0]!;
    expect(item).toHaveProperty("itemId");
    expect(item).toHaveProperty("text");
    expect(item).toHaveProperty("completed");
    expect(item).toHaveProperty("completedDate");
    expect(item).toHaveProperty("linkedMaterialId");
    expect(item).toHaveProperty("needsReview");
  });

  it("searchMaterials(query, dbPath?) exists and accepts every documented query field without throwing", () => {
    expect(typeof searchMaterials).toBe("function");
    const dbPath = freshDbPath();
    reload({ studyProgressRoot: STUDY_PROGRESS_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(() =>
      searchMaterials(
        { sourcePath: "x", title: "y", category: "z", provider: "w", course: "v", roadmapId: "u" },
        dbPath,
      ),
    ).not.toThrow();

    const results = searchMaterials({ category: "articles" }, dbPath);
    expect(Array.isArray(results)).toBe(true);
    const result = results[0]!;
    expect(result).toHaveProperty("materialId");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("sourcePath");
    expect(result).toHaveProperty("category");
    expect(result).toHaveProperty("provider");
    expect(result).toHaveProperty("course");
    expect(result).toHaveProperty("linkedRoadmapIds");
    expect(Array.isArray(result.linkedRoadmapIds)).toBe(true);
  });

  it("listReviewNeededItems(dbPath?) exists and returns entries with every documented field", () => {
    expect(typeof listReviewNeededItems).toBe("function");
    const dbPath = freshDbPath();
    const reviewRoot = path.join(HERE, "..", "fixtures", "persistence-review-needed", "study-progress");
    const emptyCoursesRoot = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");
    reload({ studyProgressRoot: reviewRoot, coursesRoot: emptyCoursesRoot, dbPath });

    const items = listReviewNeededItems(dbPath);
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    const item = items[0]!;
    expect(item).toHaveProperty("itemId");
    expect(item).toHaveProperty("roadmapId");
    expect(item).toHaveProperty("sourcePath");
    expect(item).toHaveProperty("errorKind");
    expect(item).toHaveProperty("detail");
  });
});
