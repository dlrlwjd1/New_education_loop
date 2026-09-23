/**
 * FR-020, research.md §7: append-only, human-readable audit trail at
 * `내학습/브리핑로그.md`. This module NEVER rewrites or reorders a single
 * existing byte in that file — the pre-existing CLI-era 3-row table
 * (2026-09-16/18/22, 5-column summary) is left completely untouched, and
 * every previously-appended web sub-section stays exactly where it was.
 * Every call here only ever appends past the current end of the file.
 *
 * This file is a one-way write target, not re-read/re-parsed by the app
 * (research.md §2/§7) — its exact sub-formatting only needs to stay readable
 * to a person, not machine-parseable.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { BriefingSnapshot } from "./types.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
// backend/src/briefing -> backend/src -> backend -> repo root
const DEFAULT_REPO_ROOT = path.resolve(HERE, "..", "..", "..");

export const DEFAULT_BRIEFING_LOG_PATH = path.join(DEFAULT_REPO_ROOT, "내학습", "브리핑로그.md");

const DETAIL_SECTION_HEADING = "## 상세 기록 (웹)";

/** `createdAt` (ISO-8601 UTC) rendered as `YYYY-MM-DD HH:mm` in the snapshot's own timezone (FR-002/research.md §7's heading format), not the server's local time or raw UTC. */
function formatCreatedAt(createdAtIso: string, timezone: string): string {
  const date = new Date(createdAtIso);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${byType.year}-${byType.month}-${byType.day} ${byType.hour}:${byType.minute}`;
}

function formatAverageLabel(snapshot: BriefingSnapshot): string {
  if (snapshot.averageProgressRatio === null) {
    return "집계 대상 없음(0개)";
  }
  const percent = (snapshot.averageProgressRatio * 100).toFixed(1);
  return `${percent}% (로드맵 ${snapshot.averageProgressRoadmapCount}개 평균)`;
}

function renderRoadmapTable(snapshot: BriefingSnapshot): string {
  if (snapshot.roadmaps.length === 0) {
    return "_대상 로드맵 없음_";
  }
  const rows = snapshot.roadmaps.map(
    (roadmap) => `| ${roadmap.title} | ${roadmap.completedCount}/${roadmap.totalCount} | ${roadmap.percentLabel} |`,
  );
  return ["| 로드맵 | 완료/전체 | 진행률 |", "|---|---|---|", ...rows].join("\n");
}

function renderReviewTable(snapshot: BriefingSnapshot): string {
  if (snapshot.dueItems.length === 0) {
    return "_밀린 복습 없음_";
  }
  const rows = snapshot.dueItems.map(
    (item) => `| ${item.item} | ${item.topic} | ${item.nextReviewDate} | ${item.overdueDays} |`,
  );
  return ["| 항목 | 주제 | 다음 복습일 | 연체일 |", "|---|---|---|---|", ...rows].join("\n");
}

function renderSubsection(snapshot: BriefingSnapshot): string {
  const scopeLabel = snapshot.scope === "all" ? "전체" : snapshot.scope;
  const heading = `### ${formatCreatedAt(snapshot.createdAt, snapshot.timezone)} — ${scopeLabel}`;

  return [
    heading,
    "",
    `- 밀린 복습: ${snapshot.dueReviewCount}건`,
    `- 평균 진행률: ${formatAverageLabel(snapshot)}`,
    "",
    "**로드맵별 진행률**",
    "",
    renderRoadmapTable(snapshot),
    "",
    "**복습 대상**",
    "",
    renderReviewTable(snapshot),
    "",
  ].join("\n");
}

/**
 * Appends one sub-section for `snapshot` under a `## 상세 기록 (웹)` heading.
 * Creates that heading (with a minimal file header) if `logPath` doesn't
 * exist yet at all; if the file exists without that heading yet, adds it at
 * the current end of file before the first sub-section; if the heading
 * already exists, the new sub-section is simply appended after the last one
 * (plain `appendFileSync` always lands at end-of-file, so previous
 * sub-sections are never touched).
 *
 * Throws if the underlying file write fails (e.g. disk error) — `service.ts`
 * is responsible for catching that without invalidating the already-stored
 * SQLite snapshot (FR-021).
 */
export function appendSnapshot(snapshot: BriefingSnapshot, logPath: string = DEFAULT_BRIEFING_LOG_PATH): void {
  const body = renderSubsection(snapshot);

  if (!existsSync(logPath)) {
    mkdirSync(path.dirname(logPath), { recursive: true });
    const header = "# 브리핑 로그\n\n`/브리핑`을 실행할 때마다 한 줄씩 쌓인다. 대화는 사라지고 이 파일은 남는다.\n\n";
    writeFileSync(logPath, `${header}${DETAIL_SECTION_HEADING}\n\n${body}\n`, "utf8");
    return;
  }

  const existing = readFileSync(logPath, "utf8");
  const hasDetailSection = existing.includes(DETAIL_SECTION_HEADING);
  const leadingNewline = existing.endsWith("\n") ? "\n" : "\n\n";

  if (!hasDetailSection) {
    appendFileSync(logPath, `${leadingNewline}${DETAIL_SECTION_HEADING}\n\n${body}\n`, "utf8");
    return;
  }

  appendFileSync(logPath, `${leadingNewline}${body}\n`, "utf8");
}
