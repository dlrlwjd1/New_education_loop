import type {
  AmbiguousTarget,
  AutoSuggestions,
  TargetNotFound,
} from "../../study/types.js";
import { escapeHtml } from "../html.js";
import { renderLayout } from "./layout.js";

/**
 * `GET /study/new` — the start screen (User Stories 1/4/5, contracts/http-routes.md).
 * This screen never calls `resolveStartTarget()` itself; it only renders the
 * entry points. `materialId` is an optional query param this route may be
 * given (`/study/new?materialId=...`) — see the module doc below for the
 * material-search handoff design.
 *
 * Material-search handoff (US4/FR-003): `/materials` (003) is not modified by
 * this feature. Instead, `/study/new` accepts an optional `?materialId=`
 * query param. If present, the top of this page shows a small "이 자료로
 * 학습 시작" confirm form pre-filled with that id (hidden field), submitting
 * `POST /study/start` with `materialId` set — so a future 003 change that
 * makes material search result rows link to `/study/new?materialId=<id>`
 * would work immediately with no further changes on this side. Until that
 * link exists on the materials page, a user can still paste/type a material
 * id manually into the plain text field this page also always shows.
 */
export interface RoadmapChoice {
  roadmapId: string;
  title: string;
}

export function renderStudyNewPage(options?: { materialId?: string; roadmaps?: RoadmapChoice[] }): string {
  const materialId = options?.materialId?.trim() ?? "";
  // FR-002/User Story 4: fixes the previously dead-end "로드맵 이어하기" entry
  // point (found during QA review) — each roadmap is its own one-click form
  // straight into `POST /study/start` with `explicitPath:"roadmap_continue"`,
  // the same pattern `renderRoadmapSuggestionSection()` below already uses
  // for the auto-suggestions page (inlined here, not reused, since that
  // helper renders its own `<h2>` and this section already has one).
  const roadmaps = options?.roadmaps ?? [];
  const roadmapListHtml =
    roadmaps.length > 0
      ? `<ul class="study-suggestion-list">
${roadmaps
  .map(
    (r) => `<li class="study-suggestion-roadmap">
<form method="post" action="/study/start">
<input type="hidden" name="explicitPath" value="roadmap_continue">
<input type="hidden" name="roadmapId" value="${escapeHtml(r.roadmapId)}">
<button type="submit">${escapeHtml(r.title)}</button>
</form>
</li>`,
  )
  .join("\n")}
</ul>`
      : "";

  const materialConfirmHtml = materialId
    ? `<section class="study-material-confirm">
<p>선택한 자료 ID: <strong>${escapeHtml(materialId)}</strong></p>
<form method="post" action="/study/start">
<input type="hidden" name="materialId" value="${escapeHtml(materialId)}">
<button type="submit">이 자료로 학습 시작</button>
</form>
</section>`
    : "";

  const bodyHtml = `<h1>학습 시작</h1>
${materialConfirmHtml}
<section class="study-start-topic">
<h2>주제 공부</h2>
<form method="post" action="/study/start">
<label class="search-field">
공부할 주제
<input type="text" name="freeText" placeholder="예: OLTP와 OLAP의 차이" required>
</label>
<button type="submit">주제로 시작</button>
</form>
</section>

<section class="study-start-material">
<h2>자료로 공부</h2>
<p><a href="/materials">자료실에서 자료 찾기</a></p>
<form method="post" action="/study/start">
<label class="search-field">
자료 ID
<input type="text" name="materialId" placeholder="자료실에서 확인한 자료 ID" value="${escapeHtml(materialId)}">
</label>
<button type="submit">이 자료 ID로 시작</button>
</form>
</section>

<section class="study-start-roadmap">
<h2>로드맵 이어하기</h2>
<p><a href="/">로드맵 목록에서 이어할 로드맵 찾기</a></p>
${roadmapListHtml}
</section>

<section class="study-start-auto">
<h2>무엇을 할지 찾기</h2>
<form method="post" action="/study/start">
<input type="hidden" name="explicitPath" value="auto">
<button type="submit">무엇을 할지 찾기</button>
</form>
</section>`;

  return renderLayout({ title: "학습 시작", bodyHtml });
}

/**
 * `kind:"ambiguous"` outcome of `POST /study/start` (FR-002/User Story 4
 * Acceptance Scenario 3). Each candidate is its own small form resubmitting
 * `POST /study/start` with the disambiguating fields already filled in as
 * hidden inputs — the user only clicks, never retypes.
 */
export function renderAmbiguousChoicePage(result: AmbiguousTarget): string {
  const candidatesHtml = result.candidates
    .map((candidate) => {
      const hiddenFields = [
        `<input type="hidden" name="explicitPath" value="${escapeHtml(candidate.path)}">`,
        candidate.materialId
          ? `<input type="hidden" name="materialId" value="${escapeHtml(candidate.materialId)}">`
          : "",
        candidate.roadmapId
          ? `<input type="hidden" name="roadmapId" value="${escapeHtml(candidate.roadmapId)}">`
          : "",
      ]
        .filter(Boolean)
        .join("\n");

      return `<li class="study-ambiguous-choice">
<form method="post" action="/study/start">
${hiddenFields}
<button type="submit">${escapeHtml(candidate.label)}</button>
</form>
</li>`;
    })
    .join("\n");

  const bodyHtml = `<h1>어느 쪽으로 시작할까요?</h1>
<p class="message">입력하신 이름이 여러 가지로 해석될 수 있어요. 하나를 선택해 주세요.</p>
<ul class="study-ambiguous-list">
${candidatesHtml}
</ul>
<p><a href="/study/new">처음으로 돌아가기</a></p>`;

  return renderLayout({ title: "학습 시작 — 선택", bodyHtml });
}

/**
 * `kind:"auto_suggestions"` outcome (FR-004/User Story 5). Order is fixed:
 * due reviews (if any) first, then in-progress roadmaps, then candidate
 * roadmaps — this function does not reorder or re-sort what it's given.
 */
export function renderAutoSuggestionsPage(result: AutoSuggestions): string {
  const sectionsHtml = [
    renderDueReviewSuggestion(result.dueReviewCount),
    renderRoadmapSuggestionSection(
      "진행 중인 로드맵",
      result.inProgressRoadmaps,
      "roadmap_continue",
    ),
    renderRoadmapSuggestionSection("로드맵 후보", result.candidateRoadmaps, "roadmap_continue"),
  ]
    .filter(Boolean)
    .join("\n");

  const bodyHtml = `<h1>무엇을 할지 찾기</h1>
${sectionsHtml || `<p class="message">추천할 항목이 없습니다.</p>`}
<p><a href="/study/new">처음으로 돌아가기</a></p>`;

  return renderLayout({ title: "학습 시작 — 제안", bodyHtml });
}

function renderDueReviewSuggestion(dueReviewCount: number): string {
  if (dueReviewCount <= 0) {
    return "";
  }
  return `<section class="study-suggestion-due">
<h2>오늘의 복습 대상 (${dueReviewCount}건)</h2>
<form method="post" action="/study/start">
<input type="hidden" name="explicitPath" value="auto">
<button type="submit">복습 대상으로 시작</button>
</form>
</section>`;
}

function renderRoadmapSuggestionSection(
  heading: string,
  roadmaps: Array<{ roadmapId: string; title: string }>,
  path: "roadmap_continue",
): string {
  if (roadmaps.length === 0) {
    return "";
  }
  const itemsHtml = roadmaps
    .map(
      (r) => `<li class="study-suggestion-roadmap">
<form method="post" action="/study/start">
<input type="hidden" name="explicitPath" value="${escapeHtml(path)}">
<input type="hidden" name="roadmapId" value="${escapeHtml(r.roadmapId)}">
<button type="submit">${escapeHtml(r.title)}</button>
</form>
</li>`,
    )
    .join("\n");

  return `<section class="study-suggestion-roadmaps">
<h2>${escapeHtml(heading)}</h2>
<ul class="study-suggestion-list">
${itemsHtml}
</ul>
</section>`;
}

/**
 * `kind:"not_found"` outcome (FR-026): a calm error + links back, never a
 * dead end — a link to material search and a link back to the topic form.
 */
export function renderTargetNotFoundPage(reason: string): string {
  const bodyHtml = `<h1>학습을 시작할 수 없습니다</h1>
<p class="message">${escapeHtml(reason)}</p>
<ul>
<li><a href="/materials">자료실에서 다른 자료 선택하기</a></li>
<li><a href="/study/new">주제 공부로 다시 시작하기</a></li>
</ul>`;

  return renderLayout({ title: "학습 시작 — 오류", bodyHtml });
}

/** Convenience re-export union so route code can type its branch without importing `study/types.ts` directly if it prefers. */
export type StudyStartNonRedirectResult = AmbiguousTarget | AutoSuggestions | TargetNotFound;
