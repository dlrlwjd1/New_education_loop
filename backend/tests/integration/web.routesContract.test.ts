import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { listRoadmaps, reload, searchMaterials } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

// T028: minimal smoke test - each of the 5 routes in
// contracts/http-routes.md responds with one of its documented status codes
// (200/302/404) for at least one real or plausible case.

describe("routes contract smoke test (T028)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("GET / -> 200", async () => {
    const res = await request(createApp()).get("/");
    expect(res.status).toBe(200);
  });

  it("GET /roadmaps/:roadmapId -> 200 for a real roadmap, 404 for an unknown one", async () => {
    const app = createApp();
    const [summary] = listRoadmaps();
    expect(summary).toBeDefined();

    const ok = await request(app).get(`/roadmaps/${summary!.roadmapId}`);
    expect(ok.status).toBe(200);

    const notFound = await request(app).get("/roadmaps/no-such-roadmap");
    expect(notFound.status).toBe(404);
  });

  it("GET /roadmaps/:roadmapId/continue -> 302 (found) or 200 (not found), and 404 for an unknown roadmap", async () => {
    const app = createApp();
    const incomplete = listRoadmaps().find((s) => s.completedCount < s.totalCount);
    expect(incomplete, "expected at least one real roadmap with an incomplete item").toBeDefined();

    const redirect = await request(app).get(`/roadmaps/${incomplete!.roadmapId}/continue`);
    expect(redirect.status).toBe(302);

    const notFound = await request(app).get("/roadmaps/no-such-roadmap/continue");
    expect(notFound.status).toBe(404);
  });

  it("GET /materials -> 200 (with and without query params)", async () => {
    const app = createApp();
    const withoutQuery = await request(app).get("/materials");
    expect(withoutQuery.status).toBe(200);

    const withQuery = await request(app).get("/materials").query({ category: "articles" });
    expect(withQuery.status).toBe(200);
  });

  it("GET /materials/:materialId -> 200 for a real material, 404 for an unknown one", async () => {
    const app = createApp();
    const [material] = searchMaterials({ category: "articles" });
    expect(material).toBeDefined();

    const ok = await request(app).get(`/materials/${material!.materialId}`);
    expect(ok.status).toBe(200);

    const notFound = await request(app).get("/materials/no-such-material");
    expect(notFound.status).toBe(404);
  });
});
