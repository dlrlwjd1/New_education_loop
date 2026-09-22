import { describe, it, expect, beforeAll, vi } from "vitest";
import request from "supertest";

// T021 (US5): GET /materials/:materialId must cover all three contracted
// outcomes - 200 (normal), 404 (no metadata), 200+renderError (metadata
// exists but the underlying file can't be read/converted) - and viewing a
// material must never flip the completed state of a learning item linked to
// it (FR-012).
//
// `getMaterialById` is wrapped so it still delegates to the real
// implementation by default (the real-repo tests below need this, after
// reload() populates the cache in beforeAll); only the dedicated synthetic
// test overrides it, and only for that one call.
vi.mock("../../src/persistence/queries.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/persistence/queries.js")>();
  return {
    ...actual,
    getMaterialById: vi.fn(actual.getMaterialById),
  };
});

import { getMaterialById, getRoadmapDetail, listRoadmaps, reload, searchMaterials } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

describe("GET /materials/:materialId - real repository (US5, T021)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("200: a real material with a readable source file renders its title, source path, and body content", async () => {
    const [material] = searchMaterials({ sourcePath: "articles/01 Engineering Management 2026 Structuring an AI-Native Team.md" });
    expect(material).toBeDefined();

    const res = await request(createApp()).get(`/materials/${material!.materialId}`);
    expect(res.status).toBe(200);
    expect(res.text).toContain(material!.title);
    expect(res.text).toContain(material!.sourcePath);
    // real body content, and its preserved original-source link (FR-009 Acceptance Scenario 2)
    expect(res.text).toContain("채용 방식의 변화");
    expect(res.text).toContain("optimumpartners.com");
  });

  it("404: a materialId with no metadata record responds 404, not a crash or empty 200", async () => {
    const res = await request(createApp()).get("/materials/this-material-id-does-not-exist");
    expect(res.status).toBe(404);
    expect(res.text).toContain("찾을 수 없습니다");
  });

  it("FR-012: viewing a material does not change the completed state of a learning item linked to it", async () => {
    const summary = listRoadmaps().find((s) => s.title === "AI 네이티브 회사 로드맵");
    expect(summary).toBeDefined();
    const before = getRoadmapDetail(summary!.roadmapId)!;
    const allItemsBefore = [...before.phases, ...before.tracks.flatMap((t) => t.phases)].flatMap((p) => p.items);
    const linkedItemBefore = allItemsBefore.find((i) => i.linkedMaterialId !== null);
    expect(linkedItemBefore, "expected at least one real item linked to a material").toBeDefined();

    // View the material at least once (Acceptance Scenario 4 says "열람이 끝나면").
    const viewRes = await request(createApp()).get(`/materials/${linkedItemBefore!.linkedMaterialId}`);
    expect(viewRes.status).toBe(200);

    const after = getRoadmapDetail(summary!.roadmapId)!;
    const allItemsAfter = [...after.phases, ...after.tracks.flatMap((t) => t.phases)].flatMap((p) => p.items);
    const linkedItemAfter = allItemsAfter.find((i) => i.itemId === linkedItemBefore!.itemId);
    expect(linkedItemAfter).toBeDefined();
    expect(linkedItemAfter!.completed).toBe(linkedItemBefore!.completed);
  });
});

describe("GET /materials/:materialId - synthetic renderError (US5, T021)", () => {
  it("200+renderError: metadata exists but the source file cannot be read (deleted/missing on disk)", async () => {
    vi.mocked(getMaterialById).mockReturnValueOnce({
      materialId: "syn-missing-file",
      title: "사라진 자료",
      sourcePath: "articles/이-파일은-존재하지-않습니다-xyz123.md",
      category: "articles",
      provider: null,
      course: null,
      linkedRoadmapIds: [],
    });

    const res = await request(createApp()).get("/materials/syn-missing-file");
    // A read/convert failure for the underlying file is still 200 with
    // renderError, per contracts/http-routes.md - only a missing metadata
    // record (getMaterialById -> null) is 404.
    expect(res.status).toBe(200);
    expect(res.text).toContain("원본 파일을 읽을 수 없습니다");
  });
});
