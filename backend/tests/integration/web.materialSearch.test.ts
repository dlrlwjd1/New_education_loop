import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { reload, searchMaterials } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

// T016 (US4): GET /materials must match 002 searchMaterials() results exactly
// for individual and combined filters (FR-007, FR-008), must show only the
// form (no results / no error) when no query fields are given, must show a
// clear "no results" message (not an error) for zero matches, and must
// correctly slice offset/limit (research.md §7).

describe("GET /materials - real repository (US4, T016)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("no query fields at all: shows only the search form, no results list, no error/no-results message", async () => {
    const res = await request(createApp()).get("/materials");
    expect(res.status).toBe(200);
    expect(res.text).toContain('class="material-search-form"');
    expect(res.text).not.toContain('class="material-result-item"');
    expect(res.text).not.toContain("조건에 맞는 자료가 없습니다");
  });

  it("category=articles matches searchMaterials({ category: 'articles' }) exactly (small category, no pagination in play)", async () => {
    const expected = searchMaterials({ category: "articles" });
    expect(expected.length).toBeGreaterThan(0);
    expect(expected.length).toBeLessThan(50); // under the default limit, so nothing is sliced off

    const res = await request(createApp()).get("/materials").query({ category: "articles" });
    expect(res.status).toBe(200);
    for (const material of expected) {
      expect(res.text).toContain(material.sourcePath);
      expect(res.text).toContain(`href="/materials/${material.materialId}"`);
    }
    // and nothing extra: exactly `expected.length` result rows present.
    const rowCount = (res.text.match(/class="material-result-item"/g) ?? []).length;
    expect(rowCount).toBe(expected.length);
  });

  it("sourcePath is an exact match returning exactly one result", async () => {
    const sourcePath = "articles/01 Engineering Management 2026 Structuring an AI-Native Team.md";
    const expected = searchMaterials({ sourcePath });
    expect(expected).toHaveLength(1);

    const res = await request(createApp()).get("/materials").query({ sourcePath });
    expect(res.status).toBe(200);
    const rowCount = (res.text.match(/class="material-result-item"/g) ?? []).length;
    expect(rowCount).toBe(1);
    expect(res.text).toContain(expected[0]!.title);
  });

  it("a query with no matches shows a clear 'no results' message, not an error (Acceptance Scenario 2)", async () => {
    const res = await request(createApp()).get("/materials").query({ category: "이런-분류는-존재하지-않음" });
    expect(res.status).toBe(200);
    expect(res.text).toContain("조건에 맞는 자료가 없습니다");
    expect(res.text).not.toContain('class="material-result-item"');
  });

  it("offset/limit correctly slices a larger result set, matching a manual slice of searchMaterials()'s full array", async () => {
    const full = searchMaterials({ category: "deeplearning-ai" });
    expect(full.length).toBeGreaterThan(20); // large enough category to exercise pagination

    const page1 = await request(createApp()).get("/materials").query({ category: "deeplearning-ai", offset: 0, limit: 10 });
    const page2 = await request(createApp()).get("/materials").query({ category: "deeplearning-ai", offset: 10, limit: 10 });

    const expectedPage1 = full.slice(0, 10);
    const expectedPage2 = full.slice(10, 20);

    for (const m of expectedPage1) {
      expect(page1.text).toContain(m.sourcePath);
    }
    for (const m of expectedPage2) {
      expect(page2.text).toContain(m.sourcePath);
      // page 2's items must NOT appear on page 1 (proves it's a distinct slice, not the same page twice).
      expect(page1.text).not.toContain(m.sourcePath);
    }
    expect((page1.text.match(/class="material-result-item"/g) ?? []).length).toBe(10);
    expect((page2.text.match(/class="material-result-item"/g) ?? []).length).toBe(10);

    // page1 must offer a "다음 10개 보기" link pointing at offset=10&limit=10 (research.md §7)
    expect(page1.text).toContain("다음 10개 보기");
    expect(page1.text).toContain("offset=10");
    expect(page1.text).toContain("limit=10");
  });

  it("linkedRoadmapLinks: a material linked to a roadmap renders a link to that roadmap (FR-008)", async () => {
    const [material] = searchMaterials({ title: "Engineering Management 2026 Structuring an AI-Native Team" });
    expect(material).toBeDefined();
    expect(material!.linkedRoadmapIds.length).toBeGreaterThan(0);

    const res = await request(createApp()).get("/materials").query({ title: "Engineering Management 2026 Structuring an AI-Native Team" });
    expect(res.status).toBe(200);
    for (const roadmapId of material!.linkedRoadmapIds) {
      expect(res.text).toContain(`href="/roadmaps/${roadmapId}"`);
    }
  });

  it("roadmapId filter matches searchMaterials({ roadmapId }) exactly (a roadmap small enough to fit in one page)", async () => {
    const { listRoadmaps } = await import("../../src/persistence/queries.js");
    // Route clamps `limit` to a max of 200 (routes/materials.ts MAX_LIMIT) - pick
    // a real roadmap whose linked-material count fits within that so this test
    // can assert an exact row-count match without pagination getting in the way.
    const candidate = listRoadmaps()
      .map((r) => ({ roadmapId: r.roadmapId, count: searchMaterials({ roadmapId: r.roadmapId }).length }))
      .find((c) => c.count > 0 && c.count <= 200);
    expect(candidate, "expected at least one real roadmap with 1-200 linked materials").toBeDefined();

    const expected = searchMaterials({ roadmapId: candidate!.roadmapId });
    const res = await request(createApp()).get("/materials").query({ roadmapId: candidate!.roadmapId, limit: 200 });
    expect(res.status).toBe(200);
    const rowCount = (res.text.match(/class="material-result-item"/g) ?? []).length;
    expect(rowCount).toBe(expected.length);
  });

  it("combining title + category narrows further (AND semantics), matching searchMaterials exactly", async () => {
    const combined = searchMaterials({ title: "Engineering Management 2026 Structuring an AI-Native Team", category: "articles" });
    expect(combined).toHaveLength(1);
    const mismatched = searchMaterials({ title: "Engineering Management 2026 Structuring an AI-Native Team", category: "udemy" });
    expect(mismatched).toHaveLength(0);

    const resOk = await request(createApp())
      .get("/materials")
      .query({ title: "Engineering Management 2026 Structuring an AI-Native Team", category: "articles" });
    expect((resOk.text.match(/class="material-result-item"/g) ?? []).length).toBe(1);

    const resEmpty = await request(createApp())
      .get("/materials")
      .query({ title: "Engineering Management 2026 Structuring an AI-Native Team", category: "udemy" });
    expect(resEmpty.text).toContain("조건에 맞는 자료가 없습니다");
  });
});
