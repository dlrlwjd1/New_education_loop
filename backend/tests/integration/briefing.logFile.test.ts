import { describe, it, expect, afterEach } from "vitest";
import { mkdtempSync, rmSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { appendSnapshot } from "../../src/briefing/logFile.js";
import type { BriefingSnapshot } from "../../src/briefing/types.js";

// T012 (US1), written independently from specs/005-briefing/research.md §7
// (NOT from reading logFile.ts's implementation body's exact table
// formatting choices -- assertions below check documented guarantees:
// "existing rows untouched", "new '## 상세 기록 (웹)' section", and that the
// new section carries the snapshot's actual data, rather than pinning exact
// column layout). Every test operates on a TEMP COPY of the real
// 내학습/브리핑로그.md's existing 3 rows (backend/tests/fixtures/briefing/legacy-log.md,
// itself a byte-for-byte copy of the real file's current content) -- the
// real file is never opened by this suite.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_LOG_FIXTURE = path.join(HERE, "..", "fixtures", "briefing", "legacy-log.md");

const tmpDirs: string[] = [];

function freshLogPath(seedFromLegacy: boolean): string {
  const dir = mkdtempSync(path.join(tmpdir(), "briefing-logfile-"));
  tmpDirs.push(dir);
  const logPath = path.join(dir, "브리핑로그.md");
  if (seedFromLegacy) {
    writeFileSync(logPath, readFileSync(LEGACY_LOG_FIXTURE, "utf8"), "utf8");
  }
  return logPath;
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
});

function makeSnapshot(overrides: Partial<BriefingSnapshot> = {}): BriefingSnapshot {
  return {
    id: 1,
    referenceDate: "2026-09-23",
    timezone: "Asia/Seoul",
    scope: "all",
    createdAt: "2026-09-23T05:30:00.000Z",
    roadmaps: [
      {
        roadmapId: "r-a",
        title: "네트워크서비스",
        completedCount: 5,
        totalCount: 251,
        status: "normal",
        percentLabel: "2.0% (5/251)",
      },
    ],
    averageProgressRatio: 0.02,
    averageProgressRoadmapCount: 1,
    dueItems: [{ id: "item-1", item: "TCP 3-way handshake", topic: "네트워크", nextReviewDate: "2026-09-20", overdueDays: 3 }],
    dueReviewCount: 1,
    totalActiveCount: 1,
    ...overrides,
  };
}

describe("appendSnapshot() - preserves the legacy 3-row table untouched (research.md §7)", () => {
  it("never changes a single byte of the existing content -- new content is a pure append", () => {
    const logPath = freshLogPath(true);
    const before = readFileSync(logPath, "utf8");

    appendSnapshot(makeSnapshot(), logPath);

    const after = readFileSync(logPath, "utf8");
    expect(after.startsWith(before)).toBe(true);
    // The three legacy rows must still be present verbatim.
    expect(after).toContain("| 2026-09-16 | 3 | 2 | 0% (학기 초) |");
    expect(after).toContain("| 2026-09-18 | 1 | 2 | 네트워크서비스 2.0%(5/251), 데브옵스 0.6%(5/799) |");
    expect(after).toContain("| 2026-09-22 | 6 | 2 | 네트워크서비스 0.8%(2/251), 데브옵스 0.6%(5/799) |");
  });

  it("adds a '## 상세 기록 (웹)' section positioned AFTER the legacy table", () => {
    const logPath = freshLogPath(true);
    appendSnapshot(makeSnapshot(), logPath);
    const content = readFileSync(logPath, "utf8");

    expect(content).toContain("## 상세 기록 (웹)");
    const legacyIndex = content.indexOf("| 2026-09-22 | 6 | 2 |");
    const detailIndex = content.indexOf("## 상세 기록 (웹)");
    expect(legacyIndex).toBeGreaterThanOrEqual(0);
    expect(detailIndex).toBeGreaterThan(legacyIndex);
  });

  it("the new subsection carries the snapshot's actual date, roadmap progress, and due-review content", () => {
    const logPath = freshLogPath(true);
    appendSnapshot(makeSnapshot(), logPath);
    const content = readFileSync(logPath, "utf8");

    expect(content).toContain("2026-09-23");
    expect(content).toContain("네트워크서비스");
    expect(content).toContain("5/251");
    expect(content).toContain("TCP 3-way handshake");
    expect(content).toContain("2026-09-20");
  });
});

describe("appendSnapshot() - repeated calls stack without disturbing earlier sub-sections", () => {
  it("a second call's output starts with the first call's full output, plus new content", () => {
    const logPath = freshLogPath(true);
    appendSnapshot(
      makeSnapshot({
        id: 1,
        referenceDate: "2026-09-23",
        dueItems: [{ id: "item-1", item: "첫 번째 항목", topic: "주제1", nextReviewDate: "2026-09-20", overdueDays: 3 }],
      }),
      logPath,
    );
    const afterFirst = readFileSync(logPath, "utf8");

    appendSnapshot(
      makeSnapshot({
        id: 2,
        referenceDate: "2026-09-24",
        dueItems: [{ id: "item-2", item: "두 번째 항목", topic: "주제2", nextReviewDate: "2026-09-24", overdueDays: 0 }],
      }),
      logPath,
    );
    const afterSecond = readFileSync(logPath, "utf8");

    expect(afterSecond.startsWith(afterFirst)).toBe(true);
    expect(afterSecond).toContain("첫 번째 항목");
    expect(afterSecond).toContain("두 번째 항목");
  });
});

describe("appendSnapshot() - file does not exist yet (very first run)", () => {
  it("creates the file fresh with a header and the detail section, without throwing", () => {
    const logPath = freshLogPath(false);
    expect(existsSync(logPath)).toBe(false);

    expect(() => appendSnapshot(makeSnapshot(), logPath)).not.toThrow();

    expect(existsSync(logPath)).toBe(true);
    const content = readFileSync(logPath, "utf8");
    expect(content).toContain("## 상세 기록 (웹)");
    expect(content).toContain("네트워크서비스");
  });
});
