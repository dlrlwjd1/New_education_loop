import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import request from "supertest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T011 (US1) + T020 (US2): GET /briefing HTTP-contract tests, written
// independently from specs/005-briefing/contracts/http-routes.md and spec.md
// FR-006/FR-010/FR-018 (NOT from reading routes/briefing.ts or
// views/briefing.ts's implementation bodies).
//
// Isolation: same rationale as briefing.service.test.ts (generateBriefing()
// has no dbPath/logPath override of its own) -- persistence/queries.js,
// briefing/store.js, and briefing/logFile.js are all vi.mock()'d so this
// file, driven through supertest(createApp()) exactly like 003's
// web.roadmapList.test.ts, never touches any real file on disk.

const dbPathHolder = vi.hoisted(() => ({ path: "" }));

vi.mock("../../src/persistence/queries.js", () => ({
  listRoadmaps: vi.fn(),
  getReviewQueueStatus: vi.fn(),
}));

vi.mock("../../src/briefing/logFile.js", () => ({
  appendSnapshot: vi.fn(),
}));

vi.mock("../../src/briefing/store.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../src/briefing/store.js")>();
  return {
    ...actual,
    insertSnapshot: (snapshot: Parameters<typeof actual.insertSnapshot>[0]) =>
      actual.insertSnapshot(snapshot, dbPathHolder.path),
    findLatestSnapshotForKey: (referenceDate: string, timezone: string, scope: string) =>
      actual.findLatestSnapshotForKey(referenceDate, timezone, scope, dbPathHolder.path),
    listSnapshotsByDate: () => actual.listSnapshotsByDate(dbPathHolder.path),
    getSnapshotById: (id: number) => actual.getSnapshotById(id, dbPathHolder.path),
  };
});

import { listRoadmaps, getReviewQueueStatus } from "../../src/persistence/queries.js";
import { createApp } from "../../src/web/server.js";

const ROADMAP_A: RoadmapSummary = {
  roadmapId: "r-a",
  title: "네트워크서비스",
  hasPhaseDocs: true,
  completedCount: 5,
  totalCount: 251,
  progressRatio: 5 / 251,
  needsReviewCount: 0,
};
const ROADMAP_B: RoadmapSummary = {
  roadmapId: "r-b",
  title: "데브옵스",
  hasPhaseDocs: true,
  completedCount: 5,
  totalCount: 799,
  progressRatio: 5 / 799,
  needsReviewCount: 0,
};
const REVIEW_STATUS: ReviewQueueStatus = {
  totalActiveCount: 2,
  dueItems: [
    { id: "item-1", item: "TCP 3-way handshake", topic: "네트워크", nextReviewDate: "2026-09-20", overdueDays: 3 },
    { id: "item-2", item: "NAT 지점", topic: "네트워크", nextReviewDate: "2026-09-22", overdueDays: 1 },
  ],
};

const tmpDirs: string[] = [];

beforeEach(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "web-briefing-"));
  tmpDirs.push(dir);
  dbPathHolder.path = path.join(dir, "briefing-history.sqlite");

  vi.mocked(listRoadmaps).mockReset().mockReturnValue([ROADMAP_A, ROADMAP_B]);
  vi.mocked(getReviewQueueStatus).mockReset().mockReturnValue(REVIEW_STATUS);
});

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("GET /briefing - US1 main screen (T011)", () => {
  it("200s with every roadmap's progress and the full due-review list", async () => {
    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).toContain("네트워크서비스");
    expect(res.text).toContain("데브옵스");
    expect(res.text).toContain("TCP 3-way handshake");
    expect(res.text).toContain("NAT 지점");
  });

  it("an empty roadmap list renders a non-error notice, not a crash", async () => {
    vi.mocked(listRoadmaps).mockReturnValue([]);
    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).toContain("표시할 로드맵이 없습니다");
  });

  it('an empty review queue (totalActiveCount:0) shows "아직 쌓인 오답이 없습니다", not "밀린 복습 없음" (FR-009)', async () => {
    vi.mocked(getReviewQueueStatus).mockReturnValue({ totalActiveCount: 0, dueItems: [] });
    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).toContain("아직 쌓인 오답이 없습니다");
    expect(res.text).not.toContain("밀린 복습 없음");
  });

  it('items exist but none are due today (totalActiveCount>0, dueItems=[]) shows "밀린 복습 없음" -- the FR-009 fix under test', async () => {
    vi.mocked(getReviewQueueStatus).mockReturnValue({ totalActiveCount: 3, dueItems: [] });
    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).toContain("밀린 복습 없음");
    expect(res.text).not.toContain("아직 쌓인 오답이 없습니다");
  });

  it("004 review-data failure degrades gracefully: 200 with roadmap progress + a 복습 데이터를 불러올 수 없음 notice", async () => {
    vi.mocked(getReviewQueueStatus).mockImplementation(() => {
      throw new Error("004 캐시가 준비되지 않았습니다");
    });
    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).toContain("네트워크서비스"); // roadmap progress still present
    expect(res.text).toContain("복습 데이터를 불러올 수 없음");
  });

  it("more than 4 not-started (0%) roadmaps collapse into a name list (FR-010)", async () => {
    const notStarted = (n: number): RoadmapSummary => ({
      roadmapId: `syn-notstarted-${n}`,
      title: `미시작로드맵${n}`,
      hasPhaseDocs: true,
      completedCount: 0,
      totalCount: 10,
      progressRatio: 0,
      needsReviewCount: 0,
    });
    const fiveNotStarted = [1, 2, 3, 4, 5].map(notStarted);
    vi.mocked(listRoadmaps).mockReturnValue([...fiveNotStarted, ROADMAP_A]);

    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    // The collapsed summary must announce the count...
    expect(res.text).toContain("미시작 로드맵 5개");
    // ...and the in-progress roadmap must still render as a normal row.
    expect(res.text).toContain("네트워크서비스");
    // The main progress table body must NOT contain a row for the
    // not-started roadmaps (they only appear inside the collapsed list).
    const tableSection = res.text.split("<h2>로드맵 진행률</h2>")[1]?.split("</section>")[0] ?? "";
    const mainTableHtml = tableSection.split("<details")[0] ?? "";
    for (const r of fiveNotStarted) {
      expect(mainTableHtml).not.toContain(r.title);
    }
  });

  it("exactly 4 not-started roadmaps does NOT collapse (threshold is 'more than 4')", async () => {
    const notStarted = (n: number): RoadmapSummary => ({
      roadmapId: `syn-notstarted-${n}`,
      title: `미시작로드맵${n}`,
      hasPhaseDocs: true,
      completedCount: 0,
      totalCount: 10,
      progressRatio: 0,
      needsReviewCount: 0,
    });
    const fourNotStarted = [1, 2, 3, 4].map(notStarted);
    vi.mocked(listRoadmaps).mockReturnValue(fourNotStarted);

    const res = await request(createApp()).get("/briefing");
    expect(res.status).toBe(200);
    expect(res.text).not.toContain("<details");
    for (const r of fourNotStarted) {
      expect(res.text).toContain(r.title);
    }
  });
});

describe("GET /briefing?roadmapId=... - US2 scoped view (T020)", () => {
  it("scopes the progress table to exactly that roadmap while keeping the FULL review list (FR-006)", async () => {
    const res = await request(createApp()).get("/briefing?roadmapId=r-a");
    expect(res.status).toBe(200);
    expect(res.text).toContain("네트워크서비스");
    expect(res.text).not.toContain("데브옵스"); // the other roadmap's progress row is gone
    // Review list stays complete regardless of scope.
    expect(res.text).toContain("TCP 3-way handshake");
    expect(res.text).toContain("NAT 지점");
  });

  it("the average progress shown for a single-roadmap scope equals that roadmap's own ratio (research.md §3)", async () => {
    const res = await request(createApp()).get("/briefing?roadmapId=r-a");
    expect(res.status).toBe(200);
    // 5/251 = 1.99...% -> 2.0%
    const percent = ((5 / 251) * 100).toFixed(1);
    expect(res.text).toContain(`평균 진행률: ${percent}%`);
    expect(res.text).toContain("로드맵 1개");
  });

  it("an unknown roadmapId responds 404 and never silently falls back to the full list (FR-018)", async () => {
    const res = await request(createApp()).get("/briefing?roadmapId=does-not-exist");
    expect(res.status).toBe(404);
    expect(res.text).not.toContain("데브옵스");
  });
});
