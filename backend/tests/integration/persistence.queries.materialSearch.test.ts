import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps, searchMaterials } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");
const LINK_STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "link-fixture", "study-progress");

// T025 (US4): searchMaterials() must mirror 001 MaterialIndex's exact-match
// filter semantics for title/category/provider/course/roadmapId (FR-004),
// including that provider/course = null materials are never matched by
// those filters.

const tmpDirs: string[] = [];
let dbPath: string;

beforeAll(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "persistence-material-search-"));
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

describe("searchMaterials - exact-match filters (US4, T025)", () => {
  it("sourcePath returns exactly one exact match, mirroring MaterialIndex.byPath", () => {
    const results = searchMaterials({ sourcePath: "articles/파일 하나.md" }, dbPath);
    expect(results).toHaveLength(1);
    expect(results[0]!.title).toBe("파일 하나");
  });

  it("title is an exact match, not a substring/partial search", () => {
    const exact = searchMaterials({ title: "모듈 1" }, dbPath);
    expect(exact).toHaveLength(1);
    expect(exact[0]!.sourcePath).toBe("deeplearning-ai/CourseA 강의/모듈 1.md");

    const partial = searchMaterials({ title: "모듈" }, dbPath);
    expect(partial).toHaveLength(0); // "모듈" alone must not match "모듈 1"/"모듈 A"
  });

  it("category filters to all materials under that category", () => {
    const results = searchMaterials({ category: "articles" }, dbPath);
    expect(results.map((r) => r.sourcePath).sort()).toEqual(
      ["articles/파일 둘.md", "articles/파일 하나.md"].sort(),
    );
  });

  it("provider filters correctly for deeplearning-ai/udemy/youtube (channel-as-provider)", () => {
    expect(searchMaterials({ provider: "DeepLearning.AI" }, dbPath).map((r) => r.sourcePath)).toEqual([
      "deeplearning-ai/CourseA 강의/모듈 1.md",
    ]);
    expect(searchMaterials({ provider: "Udemy" }, dbPath).map((r) => r.sourcePath)).toEqual([
      "udemy/CourseB Bootcamp/섹션 1 (특강).md",
    ]);
    expect(searchMaterials({ provider: "ChannelC" }, dbPath).map((r) => r.sourcePath).sort()).toEqual(
      ["youtube/ChannelC/2026-01-01 영상 제목.md", "youtube/ChannelC/PlaylistD/영상 2.md"].sort(),
    );
  });

  it("course filters correctly, including youtube's playlist-as-course", () => {
    expect(searchMaterials({ course: "CourseE 과정" }, dbPath).map((r) => r.sourcePath)).toEqual([
      "mooc/CourseE 과정/모듈 A.md",
    ]);
    expect(searchMaterials({ course: "PlaylistD" }, dbPath).map((r) => r.sourcePath)).toEqual([
      "youtube/ChannelC/PlaylistD/영상 2.md",
    ]);
  });

  it("a material whose provider/course is null (e.g. articles, or mooc's provider) is never found by that filter", () => {
    // articles materials have provider=null, course=null in the DB.
    const articleMaterial = searchMaterials({ category: "articles" }, dbPath)[0]!;
    expect(articleMaterial.provider).toBeNull();
    expect(articleMaterial.course).toBeNull();
    // No provider value at all can match a NULL column via SQL `=` - not
    // even the category name itself or an empty string.
    expect(searchMaterials({ provider: "articles" }, dbPath)).toEqual([]);
    expect(searchMaterials({ provider: "" }, dbPath)).toEqual([]);

    // mooc materials have provider=null specifically (multi-provider
    // category, FR-007) - no provider value can match them either.
    const moocMaterial = searchMaterials({ course: "CourseE 과정" }, dbPath)[0]!;
    expect(moocMaterial.provider).toBeNull();
    expect(searchMaterials({ provider: "mooc" }, dbPath)).toEqual([]);
  });

  it("roadmapId filters to materials linked from that roadmap (via material_roadmap_links)", () => {
    const roadmaps = listRoadmaps(dbPath);
    const roadmapA = roadmaps.find((r) => r.title === "자료연결로드맵")!;
    const roadmapB = roadmaps.find((r) => r.title === "두번째로드맵")!;
    expect(roadmapA).toBeDefined();
    expect(roadmapB).toBeDefined();

    // Both roadmaps link the SAME material (모듈 1.md) - the shared material
    // must show up under either roadmapId filter (FR-013's dedup/shared
    // link behavior, inherited).
    const viaA = searchMaterials({ roadmapId: roadmapA.roadmapId }, dbPath);
    const viaB = searchMaterials({ roadmapId: roadmapB.roadmapId }, dbPath);
    expect(viaA.map((r) => r.sourcePath)).toEqual(["deeplearning-ai/CourseA 강의/모듈 1.md"]);
    expect(viaB.map((r) => r.sourcePath)).toEqual(["deeplearning-ai/CourseA 강의/모듈 1.md"]);

    const linked = viaA[0]!;
    expect(linked.linkedRoadmapIds.sort()).toEqual([roadmapA.roadmapId, roadmapB.roadmapId].sort());
  });

  it("a query with no fields at all returns [] (mirrors MaterialIndex.search({}))", () => {
    expect(searchMaterials({}, dbPath)).toEqual([]);
  });

  it("combining title + category narrows further (AND semantics)", () => {
    expect(searchMaterials({ title: "모듈 1", category: "deeplearning-ai" }, dbPath)).toHaveLength(1);
    expect(searchMaterials({ title: "모듈 1", category: "udemy" }, dbPath)).toHaveLength(0);
  });
});
