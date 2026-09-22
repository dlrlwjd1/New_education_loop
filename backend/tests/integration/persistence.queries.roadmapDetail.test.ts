import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { reload, listRoadmaps, getRoadmapDetail } from "../../src/persistence/queries.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FLAT_ROOT = path.join(HERE, "..", "fixtures", "study-progress-flat");
const NESTED_ROOT = path.join(HERE, "..", "fixtures", "study-progress-nested");
const EDGE_CASES_ROOT = path.join(HERE, "..", "fixtures", "edge-cases", "study-progress");
const COURSES_ROOT = path.join(HERE, "..", "fixtures", "courses-subset");
const EMPTY_COURSES_ROOT = path.join(HERE, "..", "fixtures", "scope-separation", "courses-empty");

// T024 (US4): getRoadmapDetail() must return tracks/phases/items in
// order_index order, aggregatable=false phases must return items: [], and an
// unknown roadmapId must return null (never throw).

const tmpDirs: string[] = [];

function freshDbPath(prefix: string): string {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  tmpDirs.push(dir);
  return path.join(dir, "cache.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("getRoadmapDetail - track-less roadmap (US4, T024)", () => {
  it("returns phases directly under the roadmap (tracks: []), in order_index order", () => {
    const dbPath = freshDbPath("persistence-detail-flat-");
    reload({ studyProgressRoot: FLAT_ROOT, coursesRoot: COURSES_ROOT, dbPath });
    const roadmapId = listRoadmaps(dbPath)[0]!.roadmapId;

    const detail = getRoadmapDetail(roadmapId, dbPath);
    expect(detail).not.toBeNull();
    expect(detail!.tracks).toEqual([]);
    expect(detail!.phases.map((p) => p.title)).toEqual(["Phase 1 - 소개", "Phase 2 - 실습"]);
    expect(detail!.phases[0]!.items.map((i) => i.text)).toEqual([
      "항목 1 - 완료됨",
      "항목 2 - 완료됨",
      "항목 3 - 미완료",
    ]);
    expect(detail!.phases[0]!.items[0]!.completed).toBe(true);
    expect(detail!.phases[0]!.items[2]!.completed).toBe(false);
  });
});

describe("getRoadmapDetail - tracked roadmap (US4, T024)", () => {
  it("returns tracks/phases/items in numeric (not string-sort) order_index order, matching parseRoadmaps directly", () => {
    const dbPath = freshDbPath("persistence-detail-nested-");
    reload({ studyProgressRoot: NESTED_ROOT, coursesRoot: EMPTY_COURSES_ROOT, dbPath });
    const roadmapId = listRoadmaps(dbPath)[0]!.roadmapId;

    const detail = getRoadmapDetail(roadmapId, dbPath);
    expect(detail).not.toBeNull();
    expect(detail!.phases).toEqual([]); // no root-level phases in this fixture, only tracked ones
    expect(detail!.tracks.map((t) => t.title)).toEqual(["T1 첫걸음", "T2 중간", "T10 마지막"]);

    const t2 = detail!.tracks.find((t) => t.title === "T2 중간")!;
    expect(t2.phases.map((p) => p.title)).toEqual(["Phase 1 - 기초", "Phase 2 - 심화", "Phase 3 - 종합"]);

    const totalItems = detail!.tracks.reduce(
      (sum, t) => sum + t.phases.reduce((s, p) => s + p.items.length, 0),
      0,
    );
    expect(totalItems).toBe(11); // T1: 4, T2: 3, T10: 4
  });
});

describe("getRoadmapDetail - non-aggregatable phase (US4, T024)", () => {
  it("a phase with aggregatable=false returns items: [] even though the source file has content", () => {
    const dbPath = freshDbPath("persistence-detail-broken-");
    reload({ studyProgressRoot: EDGE_CASES_ROOT, coursesRoot: EMPTY_COURSES_ROOT, dbPath });
    const summaries = listRoadmaps(dbPath);
    const brokenRoadmap = summaries.find((s) => s.title === "로드맵-형식깨짐")!;
    expect(brokenRoadmap).toBeDefined();

    const detail = getRoadmapDetail(brokenRoadmap.roadmapId, dbPath);
    expect(detail).not.toBeNull();
    const phase = detail!.phases[0]!;
    expect(phase.aggregatable).toBe(false);
    expect(phase.items).toEqual([]);
  });
});

describe("getRoadmapDetail - unknown roadmapId (US4, T024)", () => {
  it("returns null (not an exception) for a roadmapId that does not exist", () => {
    const dbPath = freshDbPath("persistence-detail-unknown-");
    reload({ studyProgressRoot: FLAT_ROOT, coursesRoot: COURSES_ROOT, dbPath });

    expect(() => getRoadmapDetail("this-id-does-not-exist", dbPath)).not.toThrow();
    expect(getRoadmapDetail("this-id-does-not-exist", dbPath)).toBeNull();
  });
});
