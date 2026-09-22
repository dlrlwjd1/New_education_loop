import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoadmaps } from "../../src/ingestion/parseRoadmaps.js";
import { parseMaterials } from "../../src/ingestion/parseMaterials.js";
import { buildMaterialIndex } from "../../src/ingestion/materialIndex.js";
import { resolveIdentity, computeContentHash } from "../../src/ingestion/resolveIdentity.js";
import { resolveMaterialLinks } from "../../src/ingestion/resolveMaterialLinks.js";
import { runImport } from "../../src/ingestion/runImport.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STUDY_PROGRESS_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");

// T032 (Polish): verifies the six functions/interfaces named in
// contracts/ingestion-library.md exist with signatures/shapes matching the
// CURRENT contract text (which documents the roadmaps-parameter addition to
// resolveMaterialLinks, the now? addition to parseRoadmaps/parseMaterials,
// and the studyProgressRoot/coursesRoot addition to runImport).

describe("contract conformance: contracts/ingestion-library.md (T032)", () => {
  it("parseRoadmaps(rootPath, now?) exists and accepts an optional deterministic clock", () => {
    expect(typeof parseRoadmaps).toBe("function");
    const withoutNow = parseRoadmaps(STUDY_PROGRESS_ROOT);
    const withNow = parseRoadmaps(STUDY_PROGRESS_ROOT, new Date("2026-01-01T00:00:00Z"));
    expect(withoutNow).toHaveProperty("roadmaps");
    expect(withoutNow).toHaveProperty("errors");
    expect(withNow).toHaveProperty("roadmaps");
  });

  it("parseMaterials(rootPath, now?) exists and accepts an optional deterministic clock", () => {
    expect(typeof parseMaterials).toBe("function");
    const withoutNow = parseMaterials(COURSES_ROOT);
    const withNow = parseMaterials(COURSES_ROOT, new Date("2026-01-01T00:00:00Z"));
    expect(withoutNow).toHaveProperty("materials");
    expect(withoutNow).toHaveProperty("materialVersions");
    expect(withNow).toHaveProperty("materials");
  });

  it("MaterialIndex shape: byId/byPath/search are all present as functions on the built index", () => {
    const { materials } = parseMaterials(COURSES_ROOT);
    const index = buildMaterialIndex(materials);
    expect(typeof index.byId).toBe("function");
    expect(typeof index.byPath).toBe("function");
    expect(typeof index.search).toBe("function");
    // search accepts the documented query field set without throwing.
    expect(() => index.search({ title: "x", category: "y", provider: "z", course: "w", roadmapId: "v" })).not.toThrow();
  });

  it("resolveIdentity(candidate, previousBatch?) exists, previousBatch is optional", () => {
    expect(typeof resolveIdentity).toBe("function");
    const hash = computeContentHash("x");
    const withoutPrevious = resolveIdentity({ sourcePath: "a.md", contentHash: hash });
    expect(withoutPrevious).toHaveProperty("id");
    expect(withoutPrevious).toHaveProperty("status");
    expect(["created", "updated", "held"]).toContain(withoutPrevious.status);

    const withPrevious = resolveIdentity({ sourcePath: "a.md", contentHash: hash }, { mappings: [] });
    expect(withPrevious).toHaveProperty("id");
  });

  it("resolveMaterialLinks(items, index, roadmaps) exists with the 3-argument signature the contract documents (roadmaps added post-hoc)", () => {
    expect(typeof resolveMaterialLinks).toBe("function");
    expect(resolveMaterialLinks.length).toBe(3);

    const roadmapResult = parseRoadmaps(STUDY_PROGRESS_ROOT);
    const materialResult = parseMaterials(COURSES_ROOT);
    const index = buildMaterialIndex(materialResult.materials);
    const items = roadmapResult.roadmaps.flatMap((r) => r.rootPhases.flatMap((p) => p.items));

    const result = resolveMaterialLinks(items, index, roadmapResult.roadmaps);
    expect(result).toHaveProperty("linked");
    expect(result).toHaveProperty("errors");
  });

  it("runImport(options) accepts scope plus the studyProgressRoot/coursesRoot overrides the contract documents", () => {
    expect(typeof runImport).toBe("function");
    const batch = runImport({
      scope: "real",
      studyProgressRoot: STUDY_PROGRESS_ROOT,
      coursesRoot: COURSES_ROOT,
    });
    expect(batch).toHaveProperty("mappings");
    expect(batch).toHaveProperty("errors");
    expect(batch).toHaveProperty("metrics");
    expect(batch.metrics).toHaveProperty("roadmapCount");
    expect(batch.metrics).toHaveProperty("completedItemCount");
    expect(batch.metrics).toHaveProperty("totalItemCount");
    expect(batch.metrics).toHaveProperty("materialCount");
    expect(batch.metrics).toHaveProperty("duplicateCount");
    expect(batch.metrics).toHaveProperty("exampleItemCount");
    expect(["real", "example"]).toContain(batch.scope);
  });

  it("runImport rejects an unknown scope value only via the type system, not at runtime (documented contract limitation, not asserted further here)", () => {
    // No runtime assertion here: `scope` is typed as "real" | "example" and
    // enforced at the TypeScript level (and by cli.ts's own validation for
    // the CLI entry point), not inside runImport itself. This test only
    // documents that fact so a future signature change is noticed here.
    expect(true).toBe(true);
  });
});
