import type {
  RoadmapDetailViewModel,
  PhaseView,
  TrackView,
  LearningItemView,
} from "../types.js";
import { escapeHtml } from "../html.js";
import { renderLayout } from "./layout.js";

/**
 * User Story 2 (spec.md Acceptance Scenarios 1-4): tracks → phases → items,
 * in the exact array order given (already correct document order per
 * FR-002 — this view never re-sorts). Tracks render first, then root-level
 * phases, matching data-model.md's relationship summary.
 */
export function renderRoadmapDetailPage(detail: RoadmapDetailViewModel): string {
  const tracksHtml = detail.tracks.map(renderTrack).join("\n");
  const rootPhasesHtml = detail.rootPhases.map(renderPhase).join("\n");

  const bodyHtml = `<h1>${escapeHtml(detail.title)}</h1>
<p><a href="/roadmaps/${encodeURIComponent(detail.roadmapId)}/continue">이어서 공부</a></p>
${tracksHtml}
${rootPhasesHtml}`;

  return renderLayout({ title: detail.title, bodyHtml });
}

function renderTrack(track: TrackView): string {
  const phasesHtml = track.phases.map(renderPhase).join("\n");
  return `<section class="track" id="track-${track.trackId}">
<h2>${escapeHtml(track.title)}</h2>
${phasesHtml}
</section>`;
}

function renderPhase(phase: PhaseView): string {
  const inner = phase.aggregatable
    ? `<ul class="learning-items">
${phase.items.map(renderItem).join("\n")}
</ul>`
    : `<p class="notice notice-unaggregatable">형식 확인 필요</p>`;

  return `<section class="phase" id="phase-${phase.phaseId}">
<h3>${escapeHtml(phase.title)}</h3>
${inner}
</section>`;
}

function renderItem(item: LearningItemView): string {
  const stateClass =
    item.completed === true
      ? "item-done"
      : item.completed === false
        ? "item-not-done"
        : "item-needs-review";
  const stateLabel =
    item.completed === true ? "완료" : item.completed === false ? "미완료" : "확인 필요";

  const materialLink = item.linkedMaterialHref
    ? `<a class="material-link" href="${escapeHtml(item.linkedMaterialHref)}">연결된 자료</a>`
    : "";

  return `<li class="learning-item ${stateClass}" id="item-${item.itemId}">
<span class="item-state">${stateLabel}</span>
<span class="item-text">${escapeHtml(item.text)}</span>
${materialLink}
</li>`;
}
