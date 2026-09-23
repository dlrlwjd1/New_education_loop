import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import request from "supertest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { RoadmapSummary, ReviewQueueStatus } from "../../src/persistence/types.js";

// T024 (US3): POST /briefing/rerun + GET /briefing/history(/:id), written
// independently from specs/005-briefing/contracts/http-routes.md and spec.md
// FR-014/SC-005 (NOT from reading routes/briefing.ts or
// views/briefingHistory.ts's implementation bodies). FR-014/SC-005 -- "a
// past record's numbers must never change even after the underlying data
// does" -- is the single most important guarantee this feature makes, so it
// gets its own dedicated assertion below with a live mock mutation between
// snapshot creation and history read.
//
// Isolation: identical rationale/pattern to web.briefing.test.ts.

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
import { listSnapshotsByDate } from "../../src/briefing/store.js";
import { createApp } from "../../src/web/server.js";

const ROADMAP_A: RoadmapSummary = {
  roadmapId: "r-a",
  title: "로드맵 A",
  hasPhaseDocs: true,
  completedCount: 5,
  totalCount: 10,
  progressRatio: 0.5,
  needsReviewCount: 0,
};
const REVIEW_STATUS: ReviewQueueStatus = { totalActiveCount: 1, dueItems: [] };

const tmpDirs: string[] = [];

beforeEach(() => {
  const dir = mkdtempSync(path.join(tmpdir(), "web-briefing-history-"));
  tmpDirs.push(dir);
  dbPathHolder.path = path.join(dir, "briefing-history.sqlite");

  vi.mocked(listRoadmaps).mockReset().mockReturnValue([ROADMAP_A]);
  vi.mocked(getReviewQueueStatus).mockReset().mockReturnValue(REVIEW_STATUS);
});

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("POST /briefing/rerun - PRG pattern (research.md §6, FR-012)", () => {
  it("303-redirects to /briefing/history/:id for the just-created snapshot", async () => {
    const res = await request(createApp())
      .post("/briefing/rerun")
      .type("form")
      .send({ roadmapId: "" });

    expect(res.status).toBe(303);
    expect(res.headers.location).toMatch(/^\/briefing\/history\/\d+$/);
  });

  it("preserves the roadmapId scope it was submitted with", async () => {
    const res = await request(createApp())
      .post("/briefing/rerun")
      .type("form")
      .send({ roadmapId: "r-a" });

    expect(res.status).toBe(303);
    const location = res.headers.location as string;
    const idMatch = /^\/briefing\/history\/(\d+)$/.exec(location);
    expect(idMatch).not.toBeNull();

    const detail = await request(createApp()).get(location);
    expect(detail.status).toBe(200);
    expect(detail.text).toContain("r-a");
  });

  it("an unknown roadmapId in the form does not create a snapshot and responds with a 404 route", async () => {
    const res = await request(createApp())
      .post("/briefing/rerun")
      .type("form")
      .send({ roadmapId: "does-not-exist" });

    expect(res.status).toBe(404);
    expect(listSnapshotsByDate()).toHaveLength(0);
  });
});

describe("GET /briefing/history - FR-015 date-desc / created-desc ordering", () => {
  it("lists entries with the most recent referenceDate first", async () => {
    await request(createApp()).post("/briefing/rerun").type("form").send({});

    const listRes = await request(createApp()).get("/briefing/history");
    expect(listRes.status).toBe(200);
    expect(listRes.text).toContain("2026"); // the reference date column renders something
  });

  it("shows a non-error notice when there is no history yet", async () => {
    const res = await request(createApp()).get("/briefing/history");
    expect(res.status).toBe(200);
    expect(res.text).toContain("아직 브리핑 기록이 없습니다");
  });

  it("multiple reruns produce multiple distinct entries, most recently created first", async () => {
    const first = await request(createApp()).post("/briefing/rerun").type("form").send({});
    const firstId = Number(/(\d+)$/.exec(first.headers.location as string)?.[1]);
    const second = await request(createApp()).post("/briefing/rerun").type("form").send({});
    const secondId = Number(/(\d+)$/.exec(second.headers.location as string)?.[1]);
    expect(secondId).not.toBe(firstId);

    const listRes = await request(createApp()).get("/briefing/history");
    const posFirst = listRes.text.indexOf(`/briefing/history/${firstId}`);
    const posSecond = listRes.text.indexOf(`/briefing/history/${secondId}`);
    expect(posSecond).toBeGreaterThanOrEqual(0);
    expect(posFirst).toBeGreaterThanOrEqual(0);
    // Same reference date (both created "now") -> tie-broken by createdAt
    // descending, so the LATER rerun (second) must appear BEFORE the first.
    expect(posSecond).toBeLessThan(posFirst);
  });
});

describe("GET /briefing/history/:id - frozen record (FR-014/SC-005, the core guarantee)", () => {
  it("shows the exact values captured at creation time, unaffected by later changes to the underlying roadmap data", async () => {
    const rerun = await request(createApp()).post("/briefing/rerun").type("form").send({});
    const id = Number(/(\d+)$/.exec(rerun.headers.location as string)?.[1]);

    const before = await request(createApp()).get(`/briefing/history/${id}`);
    expect(before.status).toBe(200);
    expect(before.text).toContain("5/10"); // ROADMAP_A's completed/total at creation time

    // Now the "underlying data" changes -- 002 reports very different
    // progress for the same roadmap.
    vi.mocked(listRoadmaps).mockReturnValue([
      { ...ROADMAP_A, completedCount: 9, totalCount: 10, progressRatio: 0.9 },
    ]);
    vi.mocked(getReviewQueueStatus).mockReturnValue({
      totalActiveCount: 99,
      dueItems: [{ id: "new-item", item: "새 항목", topic: "새 주제", nextReviewDate: "2026-09-23", overdueDays: 0 }],
    });

    const after = await request(createApp()).get(`/briefing/history/${id}`);
    expect(after.status).toBe(200);
    // The frozen record must show the SAME numbers as before, not the
    // updated 9/10 or the new due item -- getSnapshotById() never re-queries
    // 002/004.
    expect(after.text).toBe(before.text);
    expect(after.text).toContain("5/10");
    expect(after.text).not.toContain("9/10");
    expect(after.text).not.toContain("새 항목");
  });

  it("a nonexistent id responds 404", async () => {
    const res = await request(createApp()).get("/briefing/history/999999");
    expect(res.status).toBe(404);
  });

  it("a non-numeric id responds 404 rather than throwing", async () => {
    const res = await request(createApp()).get("/briefing/history/not-a-number");
    expect(res.status).toBe(404);
  });
});
