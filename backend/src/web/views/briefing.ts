import type {
  BriefingSnapshot,
  BriefingReviewUnavailable,
  RoadmapProgressView,
  DueReviewItemView,
} from "../../briefing/types.js";
import { escapeHtml } from "../html.js";
import { renderLayout } from "./layout.js";

/**
 * `GET /briefing`'s two renderable outcomes (spec.md User Stories 1-2,
 * contracts/http-routes.md). `{ error: "roadmap_not_found" }` is deliberately
 * NOT part of this union — that case is the route's job to turn into an
 * HTTP 404 via `layout.ts`'s `renderMessage()` (the same way 003's
 * roadmap-detail 404 works), so this view never needs to render it.
 */
export type BriefingPageResult = BriefingSnapshot | BriefingReviewUnavailable;

/** FR-010: collapse "not started" roadmaps into a name-only list once there are more than this many. */
const NOT_STARTED_COLLAPSE_THRESHOLD = 4;

/**
 * Main briefing screen (User Story 1/2). `currentScope` is whatever scope
 * the page was requested with ("all" or a roadmapId) — it drives the hidden
 * field on the rerun form and the scope-picker UI, independently of what
 * `result.roadmaps` happens to contain.
 */
export function renderBriefingPage(result: BriefingPageResult, currentScope: string): string {
  const scopeControlsHtml = renderScopeControls(result, currentScope);
  const contentHtml =
    "reviewDataUnavailable" in result ? renderDegradedBody(result) : renderSnapshotBody(result);

  const bodyHtml = `<h1>브리핑</h1>
${scopeControlsHtml}
${contentHtml}
<form class="rerun-form" method="post" action="/briefing/rerun">
<input type="hidden" name="roadmapId" value="${escapeHtml(currentScope)}">
<button type="submit">다시 실행</button>
</form>
<p><a href="/briefing/history">기록 이력 보기</a></p>`;

  return renderLayout({ title: "브리핑", bodyHtml });
}

/**
 * Scope picker. When scope is "all", `result.roadmaps` holds every roadmap,
 * so a full `<select>` picker (plain GET form, no client JS) can be built
 * from it. When scope is a single roadmapId, `result.roadmaps` only holds
 * that one roadmap (data-model.md: "scope로 필터링된 로드맵 목록") — there is no
 * way to build a full picker from this response alone, so instead this
 * shows the FR "필터링됨: {제목}" label (tasks.md T022) plus a plain link
 * back to `/briefing` (unscoped) for "전체 보기".
 */
function renderScopeControls(result: BriefingPageResult, currentScope: string): string {
  if (currentScope === "all") {
    if (result.roadmaps.length === 0) {
      return "";
    }
    const options = result.roadmaps
      .map(
        (r) => `<option value="${escapeHtml(r.roadmapId)}">${escapeHtml(r.title)}</option>`,
      )
      .join("\n");
    return `<form class="scope-picker" method="get" action="/briefing">
<label for="briefing-scope-select">로드맵으로 좁혀 보기</label>
<select id="briefing-scope-select" name="roadmapId">
${options}
</select>
<button type="submit">보기</button>
</form>`;
  }

  const filteredTitle = result.roadmaps[0]?.title ?? currentScope;
  return `<p class="scope-filtered">필터링됨: ${escapeHtml(filteredTitle)} — <a href="/briefing">전체 보기</a></p>`;
}

function renderDegradedBody(result: BriefingReviewUnavailable): string {
  return `${renderRoadmapTable(result.roadmaps)}
<section class="due-items">
<h2>오늘의 복습</h2>
<p class="notice">복습 데이터를 불러올 수 없음</p>
</section>`;
}

/**
 * Renders one snapshot's contents: roadmap progress table + average
 * progress + due-items list. Exported so `briefingHistory.ts`'s detail view
 * can reuse it verbatim instead of duplicating the table/list markup — the
 * only difference for history is a "frozen record" notice wrapped around it.
 */
export function renderSnapshotBody(snapshot: BriefingSnapshot): string {
  return `${renderRoadmapTable(snapshot.roadmaps)}
${renderAverageProgress(snapshot.averageProgressRatio, snapshot.averageProgressRoadmapCount)}
${renderDueItemsSection(snapshot.dueItems, snapshot.dueReviewCount, snapshot.totalActiveCount)}`;
}

// FR-011: average progress ratio + how many roadmaps it was computed over.
function renderAverageProgress(ratio: number | null, roadmapCount: number): string {
  if (ratio === null || roadmapCount === 0) {
    return `<p class="average-progress">평균 진행률: 집계 대상 로드맵 없음</p>`;
  }
  const percent = (ratio * 100).toFixed(1);
  return `<p class="average-progress">평균 진행률: ${escapeHtml(percent)}% (로드맵 ${roadmapCount}개, 완료/전체 비율 산술평균 기준)</p>`;
}

/**
 * FR-003/FR-004/FR-005/FR-010. `percentLabel` is already fully formatted
 * upstream by `formatProgress()` per contracts/http-routes.md's "안정성
 * 계약" (never re-rounded here) — it can literally contain a `<` character
 * (e.g. "<0.1% (진행 중, 5/799)"), so it MUST be escaped, not just for XSS
 * but so the string renders as text instead of being parsed as a tag.
 */
function renderRoadmapTable(roadmaps: RoadmapProgressView[]): string {
  if (roadmaps.length === 0) {
    return `<section class="roadmap-progress">
<h2>로드맵 진행률</h2>
<p class="message">표시할 로드맵이 없습니다.</p>
</section>`;
  }

  const notStarted = roadmaps.filter((r) => r.status === "not_started");
  const collapse = notStarted.length > NOT_STARTED_COLLAPSE_THRESHOLD;
  const visibleRows = collapse ? roadmaps.filter((r) => r.status !== "not_started") : roadmaps;

  const rowsHtml = visibleRows
    .map(
      (r) => `<tr>
<td><a href="/roadmaps/${encodeURIComponent(r.roadmapId)}">${escapeHtml(r.title)}</a></td>
<td>${r.completedCount}/${r.totalCount}</td>
<td>${escapeHtml(r.percentLabel)}</td>
</tr>`,
    )
    .join("\n");

  const tableHtml =
    visibleRows.length > 0
      ? `<table class="roadmap-progress-table">
<thead><tr><th>로드맵</th><th>완료/전체</th><th>진행률</th></tr></thead>
<tbody>
${rowsHtml}
</tbody>
</table>`
      : "";

  const collapsedHtml = collapse
    ? `<details class="not-started-collapse">
<summary>미시작 로드맵 ${notStarted.length}개 (0%)</summary>
<ul>
${notStarted
  .map(
    (r) =>
      `<li><a href="/roadmaps/${encodeURIComponent(r.roadmapId)}">${escapeHtml(r.title)}</a></li>`,
  )
  .join("\n")}
</ul>
</details>`
    : "";

  return `<section class="roadmap-progress">
<h2>로드맵 진행률</h2>
${tableHtml}
${collapsedHtml}
</section>`;
}

/**
 * FR-006/FR-007/FR-009: `dueItems` is always the full, unfiltered list and is
 * already sorted (most overdue first) by the upstream review-queue lookup —
 * this never re-sorts. FR-009 requires distinguishing "복습 대상 데이터 자체가
 * 비어 있는 상태"(`totalActiveCount === 0`, "아직 쌓인 오답이 없습니다") from
 * "데이터는 있지만 오늘 대상이 없는 상태"(`totalActiveCount > 0 &&
 * dueReviewCount === 0`, "밀린 복습 없음") — `dueReviewCount` alone cannot make
 * that distinction (both are 0), so `totalActiveCount` (data-model.md,
 * carried through by `buildSnapshot()`/`store.ts` unchanged from 004's
 * `ReviewQueueStatus.totalActiveCount`) must be read here instead of
 * recomputed.
 */
function renderDueItemsSection(
  dueItems: DueReviewItemView[],
  dueReviewCount: number,
  totalActiveCount: number,
): string {
  if (totalActiveCount === 0) {
    return `<section class="due-items">
<h2>오늘의 복습</h2>
<p class="message">아직 쌓인 오답이 없습니다</p>
</section>`;
  }

  if (dueReviewCount === 0) {
    return `<section class="due-items">
<h2>오늘의 복습</h2>
<p class="message">밀린 복습 없음</p>
</section>`;
  }

  const itemsHtml = dueItems
    .map(
      (item) => `<li class="due-item">
<span class="due-item-topic">${escapeHtml(item.topic)}</span>
<span class="due-item-text">${escapeHtml(item.item)}</span>
<span class="due-item-date">다음 복습일: ${escapeHtml(item.nextReviewDate)} (${item.overdueDays}일 지남)</span>
</li>`,
    )
    .join("\n");

  return `<section class="due-items">
<h2>오늘의 복습 (${dueReviewCount}건)</h2>
<ul class="due-items-list">
${itemsHtml}
</ul>
</section>`;
}
