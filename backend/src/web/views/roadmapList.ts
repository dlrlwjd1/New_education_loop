import type { RoadmapListItemView } from "../types.js";
import { escapeHtml } from "../html.js";
import { renderLayout, renderMessage } from "./layout.js";

/**
 * User Story 1 (spec.md Acceptance Scenarios 1-3): roadmap list with
 * progress. `progressLabel` and `needsReviewBadge` are already computed by
 * the backend per FR-003's three-way distinction — this view only displays
 * them, it never recomputes or reinterprets them.
 */
export function renderRoadmapListPage(items: RoadmapListItemView[]): string {
  if (items.length === 0) {
    return renderMessage({
      title: "로드맵",
      message: "아직 로드맵이 없습니다.",
    });
  }

  const rows = items
    .map((item) => {
      const badge = item.needsReviewBadge
        ? `<span class="badge badge-needs-review">확인 필요</span>`
        : "";
      return `<li class="roadmap-list-item">
<a href="/roadmaps/${encodeURIComponent(item.roadmapId)}">${escapeHtml(item.title)}</a>
<span class="progress-label">${escapeHtml(item.progressLabel)}</span>
${badge}
</li>`;
    })
    .join("\n");

  const bodyHtml = `<h1>로드맵</h1>
<ul class="roadmap-list">
${rows}
</ul>`;

  return renderLayout({ title: "로드맵", bodyHtml });
}
