import { describe, it, expect, beforeAll, vi } from "vitest";
import request from "supertest";
import type { RoadmapDetail } from "../../src/persistence/types.js";

// T013 (US3): GET /roadmaps/:roadmapId/continue must 302-redirect to
// /roadmaps/:roadmapId#item-:itemId when found=true, and must render a 200
// "no more items" page directly (never redirecting to an arbitrary item)
// when found=false (FR-005).
vi.mock("../../src/persistence/queries.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/persistence/queries.js")>();
  return {
    ...actual,
    getRoadmapDetail: vi.fn(actual.getRoadmapDetail),
  };
});

import { getRoadmapDetail, reload } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

function makeDetail(overrides: Partial<RoadmapDetail>): RoadmapDetail {
  return {
    roadmapId: "syn-roadmap",
    title: "합성 로드맵",
    tracks: [],
    phases: [],
    ...overrides,
  };
}

describe("GET /roadmaps/:roadmapId/continue - synthetic targets (US3, T013)", () => {
  it("found=true redirects 302 to /roadmaps/:roadmapId#item-:itemId", async () => {
    const synthetic = makeDetail({
      phases: [
        {
          phaseId: "p1",
          title: "Phase 1",
          aggregatable: true,
          items: [
            {
              itemId: "item-42",
              text: "미완료 항목",
              completed: false,
              completedDate: null,
              linkedMaterialId: null,
              needsReview: false,
            },
          ],
        },
      ],
    });
    vi.mocked(getRoadmapDetail).mockReturnValueOnce(synthetic);

    const res = await request(createApp()).get("/roadmaps/syn-roadmap/continue");
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/roadmaps/syn-roadmap#item-item-42");
  });

  it("found=false (all completed) renders 200 directly with a 'no more items' message, never redirecting to an arbitrary item", async () => {
    const synthetic = makeDetail({
      phases: [
        {
          phaseId: "p1",
          title: "Phase 1",
          aggregatable: true,
          items: [
            {
              itemId: "item-1",
              text: "완료된 항목",
              completed: true,
              completedDate: "2026-01-01",
              linkedMaterialId: null,
              needsReview: false,
            },
          ],
        },
      ],
    });
    vi.mocked(getRoadmapDetail).mockReturnValueOnce(synthetic);

    const res = await request(createApp()).get("/roadmaps/syn-roadmap/continue");
    expect(res.status).toBe(200);
    expect(res.headers.location).toBeUndefined();
    expect(res.text).toContain("더 이상 이어서 공부할 항목이 없습니다");
  });

  it("found=false because all remaining items are completed=null (확인 필요) still renders 200, not a redirect to a null item", async () => {
    const synthetic = makeDetail({
      phases: [
        {
          phaseId: "p1",
          title: "Phase 1",
          aggregatable: true,
          items: [
            {
              itemId: "item-review",
              text: "확인 필요 항목",
              completed: null,
              completedDate: null,
              linkedMaterialId: null,
              needsReview: true,
            },
          ],
        },
      ],
    });
    vi.mocked(getRoadmapDetail).mockReturnValueOnce(synthetic);

    const res = await request(createApp()).get("/roadmaps/syn-roadmap/continue");
    expect(res.status).toBe(200);
    expect(res.text).toContain("더 이상 이어서 공부할 항목이 없습니다");
    expect(res.text).toContain("확인 필요 항목 1건은 건너뛰었습니다");
  });

  it("an unknown roadmapId responds 404 (never reaches findContinueTarget)", async () => {
    vi.mocked(getRoadmapDetail).mockReturnValueOnce(null);
    const res = await request(createApp()).get("/roadmaps/does-not-exist/continue");
    expect(res.status).toBe(404);
  });
});

describe("GET /roadmaps/:roadmapId/continue - real repository sanity check (US3, T013)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("a real roadmap with at least one incomplete item redirects 302 to its own detail page anchor", async () => {
    const { listRoadmaps } = await import("../../src/persistence/queries.js");
    const summary = listRoadmaps().find((s) => s.completedCount < s.totalCount);
    expect(summary, "expected at least one real roadmap with an incomplete item").toBeDefined();

    const res = await request(createApp()).get(`/roadmaps/${summary!.roadmapId}/continue`);
    expect(res.status).toBe(302);
    expect(res.headers.location).toMatch(new RegExp(`^/roadmaps/${summary!.roadmapId}#item-.+`));
  });
});
