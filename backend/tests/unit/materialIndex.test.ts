import { describe, it, expect, vi, afterEach } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseMaterials } from "../../src/ingestion/parseMaterials.js";
import { buildMaterialIndex } from "../../src/ingestion/materialIndex.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T020 (US3): MaterialIndex.byId/byPath/search must resolve paths containing
// Korean characters, spaces and parentheses without error (FR-009/SC-006),
// support provider/course search (FR-007), and do so via direct lookup
// rather than a full linear scan of the material list (FR-008) - verified
// here by spying on Array.prototype.find/filter/some and asserting they are
// never invoked once the index has been built (all of MaterialIndex's own
// construction-time iteration happens before these spies are installed).

describe("MaterialIndex (US3, T020)", () => {
  const { materials } = parseMaterials(FIXTURE_ROOT);
  const index = buildMaterialIndex(materials);

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("byPath resolves a path containing Korean characters, spaces and parentheses", () => {
    const target = materials.find((m) => m.sourcePath.includes("특강"));
    expect(target).toBeDefined();

    const found = index.byPath(target!.sourcePath);
    expect(found).toBe(target);
  });

  it("byId resolves every material's own id back to itself", () => {
    for (const m of materials) {
      expect(index.byId(m.id)).toBe(m);
    }
  });

  it("byPath returns undefined for a path that does not exist, without throwing", () => {
    expect(() => index.byPath("nonexistent/경로.md")).not.toThrow();
    expect(index.byPath("nonexistent/경로.md")).toBeUndefined();
  });

  it("search by provider finds only DeepLearning.AI materials", () => {
    const results = index.search({ provider: "DeepLearning.AI" });
    expect(results).toHaveLength(1);
    expect(results[0]!.course).toBe("CourseA 강의");
  });

  it("search by provider+course narrows to exactly one youtube video under a playlist", () => {
    const results = index.search({ provider: "ChannelC", course: "PlaylistD" });
    expect(results).toHaveLength(1);
    expect(results[0]!.sourcePath).toContain("영상 2.md");
  });

  it("search by category=mooc finds the mooc fixture material with provider=null", () => {
    const results = index.search({ category: "mooc" });
    expect(results).toHaveLength(1);
    expect(results[0]!.provider).toBeNull();
    expect(results[0]!.course).toBe("CourseE 과정");
  });

  it("does not perform a full linear scan (Array.find/filter/some) when resolving byId/byPath after construction", () => {
    const findSpy = vi.spyOn(Array.prototype, "find");
    const filterSpy = vi.spyOn(Array.prototype, "filter");
    const someSpy = vi.spyOn(Array.prototype, "some");

    const anyMaterial = materials[0]!;
    index.byId(anyMaterial.id);
    index.byPath(anyMaterial.sourcePath);

    expect(findSpy).not.toHaveBeenCalled();
    expect(filterSpy).not.toHaveBeenCalled();
    expect(someSpy).not.toHaveBeenCalled();
  });
});
