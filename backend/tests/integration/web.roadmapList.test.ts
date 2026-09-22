import { describe, it, expect, beforeAll, vi } from "vitest";
import request from "supertest";
import type { RoadmapSummary } from "../../src/persistence/types.js";

// T006 (US1): GET / must show every roadmap with title/completed-of-total/
// progress, must render "hasPhaseDocs=false" (진행 자료 없음) and
// "progressRatio=null with totalCount=0" (미시작) as two DIFFERENT labels
// (FR-003 - never both collapsed into "0%"), and must show a "확인 필요"
// badge exactly when needsReviewCount > 0 (FR-004).
//
// `listRoadmaps` is wrapped so it still delegates to the real implementation
// by default (real-repo assertions below need a populated cache, loaded once
// in beforeAll), but individual tests can override it with
// `mockReturnValueOnce` for synthetic edge cases the real repository doesn't
// currently contain (no roadmap in study-progress/ has hasPhaseDocs=false,
// totalCount=0, or needsReviewCount>0 as of this writing).
vi.mock("../../src/persistence/queries.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/persistence/queries.js")>();
  return {
    ...actual,
    listRoadmaps: vi.fn(actual.listRoadmaps),
  };
});

import { listRoadmaps, reload } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

function extractRow(html: string, roadmapId: string): string {
  const rows = html.split('<li class="roadmap-list-item">');
  const row = rows.find((r) => r.includes(`/roadmaps/${roadmapId}"`));
  if (!row) {
    throw new Error(`row for roadmapId ${roadmapId} not found in:\n${html}`);
  }
  return row;
}

function makeSummary(overrides: Partial<RoadmapSummary>): RoadmapSummary {
  return {
    roadmapId: "syn-default",
    title: "합성 로드맵",
    hasPhaseDocs: true,
    completedCount: 0,
    totalCount: 0,
    progressRatio: null,
    needsReviewCount: 0,
    ...overrides,
  };
}

describe("GET / - real repository (US1, T006)", () => {
  beforeAll(() => {
    reload();
  }, 180000);

  it("responds 200 and lists every real roadmap with its title and a computed progress label", async () => {
    const app = createApp();
    const res = await request(app).get("/");
    expect(res.status).toBe(200);

    const realSummaries = listRoadmaps();
    expect(realSummaries.length).toBeGreaterThan(0);

    for (const summary of realSummaries) {
      const row = extractRow(res.text, summary.roadmapId);
      expect(row).toContain(summary.title);

      if (!summary.hasPhaseDocs) {
        expect(row).toContain("진행 자료 없음");
      } else if (summary.totalCount === 0) {
        expect(row).toContain("미시작");
      } else {
        const percent = Math.round((summary.progressRatio ?? 0) * 100);
        expect(row).toContain(`완료 ${summary.completedCount}/${summary.totalCount} (${percent}%)`);
      }

      if (summary.needsReviewCount > 0) {
        expect(row).toContain("확인 필요");
      } else {
        expect(row).not.toContain("확인 필요");
      }
    }
  });
});

describe("GET / - synthetic edge cases (US1, T006, FR-003/FR-004)", () => {
  it('hasPhaseDocs=false shows "진행 자료 없음", never "0%"', async () => {
    vi.mocked(listRoadmaps).mockReturnValueOnce([
      makeSummary({ roadmapId: "syn-nodocs", title: "자료없음로드맵", hasPhaseDocs: false, totalCount: 0, progressRatio: null }),
    ]);

    const res = await request(createApp()).get("/");
    expect(res.status).toBe(200);
    const row = extractRow(res.text, "syn-nodocs");
    expect(row).toContain("진행 자료 없음");
    expect(row).not.toContain("0%");
  });

  it('hasPhaseDocs=true but totalCount=0 (progressRatio=null) shows "미시작", a DIFFERENT label from "진행 자료 없음"', async () => {
    vi.mocked(listRoadmaps).mockReturnValueOnce([
      makeSummary({ roadmapId: "syn-notstarted", title: "미시작로드맵", hasPhaseDocs: true, totalCount: 0, progressRatio: null }),
    ]);

    const res = await request(createApp()).get("/");
    expect(res.status).toBe(200);
    const row = extractRow(res.text, "syn-notstarted");
    expect(row).toContain("미시작");
    expect(row).not.toContain("진행 자료 없음");
    expect(row).not.toContain("0%");
  });

  it("a roadmap with progress renders the exact 완료 N/M (P%) label", async () => {
    vi.mocked(listRoadmaps).mockReturnValueOnce([
      makeSummary({
        roadmapId: "syn-progress",
        title: "진행중로드맵",
        hasPhaseDocs: true,
        completedCount: 5,
        totalCount: 10,
        progressRatio: 0.5,
      }),
    ]);

    const res = await request(createApp()).get("/");
    const row = extractRow(res.text, "syn-progress");
    expect(row).toContain("완료 5/10 (50%)");
  });

  it("needsReviewCount>0 shows a 확인 필요 badge; needsReviewCount=0 shows none (FR-004)", async () => {
    vi.mocked(listRoadmaps).mockReturnValueOnce([
      makeSummary({ roadmapId: "syn-needsreview", title: "확인필요로드맵", totalCount: 1, progressRatio: 0, needsReviewCount: 3 }),
      makeSummary({ roadmapId: "syn-clean", title: "깨끗한로드맵", totalCount: 1, progressRatio: 0, needsReviewCount: 0 }),
    ]);

    const res = await request(createApp()).get("/");
    const reviewRow = extractRow(res.text, "syn-needsreview");
    const cleanRow = extractRow(res.text, "syn-clean");
    expect(reviewRow).toContain("확인 필요");
    expect(cleanRow).not.toContain("확인 필요");
  });

  it("no roadmaps at all renders a 200 empty-state notice, not an error (Edge Cases)", async () => {
    vi.mocked(listRoadmaps).mockReturnValueOnce([]);
    const res = await request(createApp()).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("아직 로드맵이 없습니다");
  });
});
