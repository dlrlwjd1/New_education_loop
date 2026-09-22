import { describe, it, expect, beforeAll, vi } from "vitest";
import request from "supertest";
import type { RoadmapDetail } from "../../src/persistence/types.js";

// T009 (US2): GET /roadmaps/:roadmapId must render tracks/phases/items in
// order_index order for both a tracked and a track-less real roadmap
// (FR-002), must show a "형식 확인 필요" notice instead of a silently empty
// list for an aggregatable=false phase (FR-003), must render a link to a
// linked material (FR-011), and must 404 for an unknown roadmapId.
vi.mock("../../src/persistence/queries.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/persistence/queries.js")>();
  return {
    ...actual,
    getRoadmapDetail: vi.fn(actual.getRoadmapDetail),
  };
});

import { listRoadmaps, getRoadmapDetail, reload } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

describe("GET /roadmaps/:roadmapId - real repository (US2, T009)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("a tracked roadmap (인공지능융합공학부 로드맵) renders every track/phase/item title in order_index order, none missing", async () => {
    const summary = listRoadmaps().find((s) => s.title === "인공지능융합공학부 로드맵");
    expect(summary).toBeDefined();
    const detail = getRoadmapDetail(summary!.roadmapId)!;
    expect(detail.tracks.length).toBeGreaterThan(0);

    const res = await request(createApp()).get(`/roadmaps/${summary!.roadmapId}`);
    expect(res.status).toBe(200);

    // Every track title, and every phase title within it, must appear in the
    // response, in the same relative order as the RoadmapDetail (already
    // order_index-sorted by 002) - this view must never re-sort.
    let cursor = 0;
    for (const track of detail.tracks) {
      const trackIdx = res.text.indexOf(track.title, cursor);
      expect(trackIdx, `track "${track.title}" missing or out of order`).toBeGreaterThanOrEqual(cursor);
      cursor = trackIdx;
      for (const phase of track.phases) {
        const phaseIdx = res.text.indexOf(phase.title, cursor);
        expect(phaseIdx, `phase "${phase.title}" missing or out of order`).toBeGreaterThanOrEqual(cursor);
        cursor = phaseIdx;
      }
    }

    // Spot-check every item text of the first track's first aggregatable
    // phase appears, in order.
    const firstPhaseWithItems = detail.tracks[0]!.phases.find((p) => p.aggregatable && p.items.length > 0);
    if (firstPhaseWithItems) {
      let itemCursor = res.text.indexOf(firstPhaseWithItems.title);
      for (const item of firstPhaseWithItems.items) {
        const idx = res.text.indexOf(`id="item-${item.itemId}"`, itemCursor);
        expect(idx, `item ${item.itemId} missing or out of order`).toBeGreaterThanOrEqual(itemCursor);
        itemCursor = idx;
      }
    }
  });

  it("a track-less roadmap (ADsP 로드맵) renders its phases directly, with no track section", async () => {
    const summary = listRoadmaps().find((s) => s.title === "ADsP 로드맵");
    expect(summary).toBeDefined();
    const detail = getRoadmapDetail(summary!.roadmapId)!;
    expect(detail.tracks).toEqual([]);
    expect(detail.phases.length).toBeGreaterThan(0);

    const res = await request(createApp()).get(`/roadmaps/${summary!.roadmapId}`);
    expect(res.status).toBe(200);
    expect(res.text).not.toContain('class="track"');
    expect(res.text).toContain(detail.phases[0]!.title);
  });

  it("an item linked to a material renders a link to /materials/:linkedMaterialId (FR-011)", async () => {
    const summary = listRoadmaps().find((s) => s.title === "AI 네이티브 회사 로드맵");
    expect(summary).toBeDefined();
    const detail = getRoadmapDetail(summary!.roadmapId)!;
    const allPhases = [...detail.phases, ...detail.tracks.flatMap((t) => t.phases)];
    const linkedItem = allPhases.flatMap((p) => p.items).find((i) => i.linkedMaterialId !== null);
    expect(linkedItem, "expected at least one real item with a linked material").toBeDefined();

    const res = await request(createApp()).get(`/roadmaps/${summary!.roadmapId}`);
    expect(res.status).toBe(200);
    expect(res.text).toContain(`href="/materials/${linkedItem!.linkedMaterialId}"`);
  });

  it("an unknown roadmapId responds 404", async () => {
    const res = await request(createApp()).get("/roadmaps/this-roadmap-does-not-exist");
    expect(res.status).toBe(404);
    expect(res.text).toContain("찾을 수 없습니다");
  });
});

describe("GET /roadmaps/:roadmapId - synthetic aggregatable=false phase (US2, T009, FR-003)", () => {
  it('shows "형식 확인 필요" instead of silently rendering an empty item list', async () => {
    const synthetic: RoadmapDetail = {
      roadmapId: "syn-roadmap",
      title: "합성 로드맵",
      tracks: [],
      phases: [
        {
          phaseId: "syn-phase-broken",
          title: "깨진 Phase",
          aggregatable: false,
          items: [],
        },
      ],
    };
    vi.mocked(getRoadmapDetail).mockReturnValueOnce(synthetic);

    const res = await request(createApp()).get("/roadmaps/syn-roadmap");
    expect(res.status).toBe(200);
    expect(res.text).toContain("형식 확인 필요");
    expect(res.text).not.toContain('class="learning-items"');
  });
});
