import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoadmaps } from "../../src/ingestion/parseRoadmaps.js";
import { parseMaterials } from "../../src/ingestion/parseMaterials.js";
import { buildMaterialIndex } from "../../src/ingestion/materialIndex.js";
import { resolveMaterialLinks } from "../../src/ingestion/resolveMaterialLinks.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "link-fixture", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

function flattenItems(roadmaps: ReturnType<typeof parseRoadmaps>["roadmaps"]) {
  return roadmaps.flatMap((r) => [...r.rootPhases, ...r.tracks.flatMap((t) => t.phases)].flatMap((p) => p.items));
}

// T021 (US3): "자료연결로드맵" has a valid (percent-encoded) link to a real
// courses-subset material, a link to a nonexistent file, a link to a
// directory (trailing slash), and a plain item with no link at all.
// "두번째로드맵" links to the SAME material to verify Material.linkedRoadmapIds
// accumulates both roadmap ids, and that completion state stays independent
// per roadmap (spec.md Edge Cases, FR-013).

describe("resolveMaterialLinks (US3, T021)", () => {
  const roadmapResult = parseRoadmaps(STUDY_PROGRESS_ROOT);
  const materialResult = parseMaterials(COURSES_ROOT);
  const index = buildMaterialIndex(materialResult.materials);
  const items = flattenItems(roadmapResult.roadmaps);
  const { linked, errors } = resolveMaterialLinks(items, index, roadmapResult.roadmaps);

  it("resolves the valid percent-encoded link to the real material's id", () => {
    const validItem = linked.find((i) => i.text.includes("유효한 자료 링크"))!;
    expect(validItem.linkedMaterialId).not.toBeNull();

    const target = materialResult.materials.find((m) => m.sourcePath.endsWith("모듈 1.md"));
    expect(target).toBeDefined();
    expect(validItem.linkedMaterialId).toBe(target!.id);
  });

  it("leaves linkedMaterialId null and reports ImportError(kind=link_broken) for a reference to a nonexistent file", () => {
    const brokenItem = linked.find((i) => i.text.includes("존재하지 않는 자료 링크"))!;
    expect(brokenItem.linkedMaterialId).toBeNull();

    const brokenErrors = errors.filter((e) => e.kind === "link_broken");
    expect(brokenErrors).toHaveLength(1);
    expect(brokenErrors[0]!.detail).toContain("없는파일");
  });

  it("leaves linkedMaterialId null WITHOUT reporting an error for a link that points to a directory", () => {
    const dirLinkItem = linked.find((i) => i.text.includes("폴더 링크"))!;
    expect(dirLinkItem.linkedMaterialId).toBeNull();

    const brokenErrors = errors.filter((e) => e.kind === "link_broken");
    expect(brokenErrors).toHaveLength(1); // only the nonexistent-file case, not this one
  });

  it("leaves linkedMaterialId null for a plain item with no link at all, no error", () => {
    const noLinkItem = linked.find((i) => i.text.includes("그냥 텍스트 항목"))!;
    expect(noLinkItem.linkedMaterialId).toBeNull();
  });

  it("accumulates both roadmaps' ids in Material.linkedRoadmapIds, deduplicated, when two roadmaps link the same material (FR-013)", () => {
    const target = materialResult.materials.find((m) => m.sourcePath.endsWith("모듈 1.md"))!;
    const [roadmapA, roadmapB] = roadmapResult.roadmaps;
    expect(target.linkedRoadmapIds.sort()).toEqual([roadmapA!.id, roadmapB!.id].sort());
    expect(new Set(target.linkedRoadmapIds).size).toBe(target.linkedRoadmapIds.length); // no duplicates
  });

  it("keeps each roadmap's completion state on the shared material independent (FR-013 edge case)", () => {
    const roadmapA = roadmapResult.roadmaps.find((r) => r.sourcePath === "자료연결로드맵")!;
    const roadmapB = roadmapResult.roadmaps.find((r) => r.sourcePath === "두번째로드맵")!;
    const itemA = roadmapA.rootPhases[0]!.items.find((i) => i.text.includes("유효한 자료 링크"))!;
    const itemB = roadmapB.rootPhases[0]!.items.find((i) => i.text.includes("같은 자료"))!;

    expect(itemA.completed).toBe(true); // checked in roadmap A
    expect(itemB.completed).toBe(false); // unchecked in roadmap B, same material
  });

  it("after resolution, every non-null linkedMaterialId points to a Material.id that actually exists", () => {
    const materialIds = new Set(materialResult.materials.map((m) => m.id));
    for (const item of linked) {
      if (item.linkedMaterialId !== null) {
        expect(materialIds.has(item.linkedMaterialId)).toBe(true);
      }
    }
  });
});
