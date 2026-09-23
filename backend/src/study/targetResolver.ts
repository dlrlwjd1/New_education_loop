/**
 * contracts/study-service-library.md `resolveStartTarget()` — the single
 * decision point for "what is the user trying to study", covering every
 * path (topic/material/roadmap_continue/auto) in one pass, the same way 004
 * built its whole `parseReviewQueue()` parser in one go rather than
 * splitting it across phases.
 */
import { getMaterialById, getReviewQueueStatus, getRoadmapDetail, listRoadmaps } from "../persistence/queries.js";
import { renderMaterialBody } from "../web/materialContent.js";
import type { AmbiguousTarget, AutoSuggestions, ResolveStartTargetInput, ResolveTargetResult } from "./types.js";

const DEFAULT_TIMEZONE = "Asia/Seoul";
/** FR-004's "2~3개" — this implementation's chosen concrete count (documented per the task's "your reasonable definition" latitude). */
const CANDIDATE_ROADMAP_COUNT = 3;

function todayInTimezone(timezone: string, now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * FR-004's "진행 중인 로드맵": has started (`completedCount > 0`) but not yet
 * finished (`completedCount < totalCount`). A roadmap with no phase docs at
 * all, or with `totalCount === 0`, is never "in progress" by this
 * definition — there is nothing to "계속" doing.
 */
function isInProgress(roadmap: { completedCount: number; totalCount: number }): boolean {
  return roadmap.completedCount > 0 && roadmap.completedCount < roadmap.totalCount;
}

function buildAutoSuggestions(): AutoSuggestions {
  const referenceDate = todayInTimezone(DEFAULT_TIMEZONE);
  const reviewStatus = getReviewQueueStatus(referenceDate);
  const roadmapSummaries = listRoadmaps();

  const inProgressRoadmaps = roadmapSummaries
    .filter(isInProgress)
    .map((r) => ({ roadmapId: r.roadmapId, title: r.title }));

  const candidateRoadmaps = roadmapSummaries
    .filter((r) => !isInProgress(r))
    .slice(0, CANDIDATE_ROADMAP_COUNT)
    .map((r) => ({ roadmapId: r.roadmapId, title: r.title }));

  return {
    kind: "auto_suggestions",
    dueReviewCount: reviewStatus.dueItems.length,
    inProgressRoadmaps,
    candidateRoadmaps,
  };
}

/**
 * FR-003/FR-026: a registered material id is not enough on its own — the
 * body must actually be readable/renderable, or session start must fail the
 * same way an unregistered id does (both surface as `kind:"not_found"`, so
 * `web/routes/study.ts` needs only one branch to handle "자료를 열 수
 * 없다").
 */
function resolveMaterialTarget(materialId: string): ResolveTargetResult {
  const material = getMaterialById(materialId);
  if (!material) {
    return { kind: "not_found", reason: `등록되지 않은 자료 id입니다: ${materialId}` };
  }
  const rendered = renderMaterialBody(material.sourcePath);
  if (rendered.renderError) {
    return { kind: "not_found", reason: `자료를 열 수 없습니다: ${rendered.renderError}` };
  }
  return { kind: "resolved", path: "material", targetLabel: material.title, materialId: material.materialId };
}

function resolveRoadmapTarget(roadmapId: string): ResolveTargetResult {
  const detail = getRoadmapDetail(roadmapId);
  if (!detail) {
    return { kind: "not_found", reason: `등록되지 않은 로드맵 id입니다: ${roadmapId}` };
  }
  return { kind: "resolved", path: "roadmap_continue", targetLabel: detail.title, roadmapId: detail.roadmapId };
}

/**
 * FR-002's ambiguity heuristic (this implementation's documented choice):
 * `freeText` is ambiguous when it case-insensitively appears as a substring
 * of some real roadmap's title but is not an EXACT (case-insensitive) match
 * for any roadmap title. An exact title match resolves directly to that
 * roadmap (confident enough to not ask); no substring match at all resolves
 * directly to a topic (nothing to be ambiguous WITH).
 */
function resolveFreeText(freeText: string): ResolveTargetResult {
  const trimmed = freeText.trim();
  const roadmaps = listRoadmaps();
  const lowerFreeText = trimmed.toLowerCase();

  const exactMatch = roadmaps.find((r) => r.title.toLowerCase() === lowerFreeText);
  if (exactMatch) {
    return { kind: "resolved", path: "roadmap_continue", targetLabel: exactMatch.title, roadmapId: exactMatch.roadmapId };
  }

  const substringMatches = roadmaps.filter((r) => r.title.toLowerCase().includes(lowerFreeText));
  if (substringMatches.length > 0) {
    const candidates: AmbiguousTarget["candidates"] = [
      { path: "topic", label: trimmed },
      ...substringMatches.map((r) => ({ path: "roadmap_continue" as const, label: r.title, roadmapId: r.roadmapId })),
    ];
    return { kind: "ambiguous", candidates };
  }

  return { kind: "resolved", path: "topic", targetLabel: trimmed };
}

export function resolveStartTarget(input: ResolveStartTargetInput): ResolveTargetResult {
  // FR-003: a materialId, wherever it came from, is only ever opened by
  // looking it up through 002/004's own index — never by treating it as (or
  // deriving from it) a filesystem path.
  if (input.materialId !== undefined) {
    return resolveMaterialTarget(input.materialId);
  }

  if (input.roadmapId !== undefined) {
    return resolveRoadmapTarget(input.roadmapId);
  }

  if (input.explicitPath === "auto") {
    return buildAutoSuggestions();
  }

  if (input.explicitPath === "topic") {
    const label = input.freeText?.trim();
    if (!label) {
      return { kind: "not_found", reason: "주제명이 비어 있습니다." };
    }
    return { kind: "resolved", path: "topic", targetLabel: label };
  }

  if (input.explicitPath === "material") {
    // materialId is required for this path (checked above) — reaching here
    // means it was omitted.
    return { kind: "not_found", reason: "선택된 자료 id가 없습니다." };
  }

  if (input.explicitPath === "roadmap_continue") {
    return { kind: "not_found", reason: "선택된 로드맵 id가 없습니다." };
  }

  // No explicitPath: disambiguate free text against 002's roadmap titles
  // (FR-002), or fall through to auto-suggestions if nothing at all was
  // given (FR-004).
  if (input.freeText !== undefined && input.freeText.trim() !== "") {
    return resolveFreeText(input.freeText);
  }

  return buildAutoSuggestions();
}
