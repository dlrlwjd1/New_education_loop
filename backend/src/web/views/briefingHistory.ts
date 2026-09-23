import type { BriefingSnapshot, BriefingSnapshotListItem } from "../../briefing/types.js";
import { escapeHtml } from "../html.js";
import { renderLayout, renderMessage } from "./layout.js";
import { renderSnapshotBody } from "./briefing.js";

/**
 * `GET /briefing/history` (User Story 3, FR-015). `items` is expected in
 * the order the route already sorted it (date desc, then created_at desc
 * per contracts/http-routes.md) — this never re-sorts.
 *
 * `averageProgressRatio` here is a raw ratio (0-1) or `null`, unlike the
 * main briefing page's `RoadmapProgressView.percentLabel` which is a
 * pre-formatted FR-004 string — `BriefingSnapshotListItem` doesn't carry a
 * pre-formatted label (data-model.md), so this view formats it itself as a
 * plain percentage, or "N/A" when null.
 */
export function renderBriefingHistoryListPage(items: BriefingSnapshotListItem[]): string {
  if (items.length === 0) {
    return renderMessage({
      title: "브리핑 기록",
      message: "아직 브리핑 기록이 없습니다.",
    });
  }

  const rowsHtml = items
    .map((item) => {
      const scopeLabel = item.scope === "all" ? "전체" : item.scope;
      return `<li class="briefing-history-item">
<a href="/briefing/history/${item.id}">${escapeHtml(item.referenceDate)}</a>
<span class="history-scope">${escapeHtml(scopeLabel)}</span>
<span class="history-created-at">${escapeHtml(item.createdAt)}</span>
<span class="history-average">평균 진행률 ${escapeHtml(formatRatioAsPercent(item.averageProgressRatio))}</span>
<span class="history-due-count">복습 ${item.dueReviewCount}건</span>
</li>`;
    })
    .join("\n");

  const bodyHtml = `<h1>브리핑 기록</h1>
<ul class="briefing-history-list">
${rowsHtml}
</ul>`;

  return renderLayout({ title: "브리핑 기록", bodyHtml });
}

/**
 * `GET /briefing/history/:id` (User Story 3, FR-014/SC-005). Renders the
 * exact snapshot values as stored — reuses `briefing.ts`'s
 * `renderSnapshotBody()` for the roadmap table / due-items list so this
 * doesn't duplicate that markup, and adds a clear "frozen record" notice so
 * the user never mistakes this for a live, recalculated view.
 */
export function renderBriefingHistoryDetailPage(snapshot: BriefingSnapshot): string {
  const scopeLabel = snapshot.scope === "all" ? "전체" : snapshot.scope;
  const bodyHtml = `<h1>브리핑 기록 — ${escapeHtml(snapshot.referenceDate)}</h1>
<p class="notice history-frozen-notice">이 기록은 생성 당시 값입니다 — 현재 값으로 다시 계산되지 않습니다.</p>
<p class="history-meta">범위: ${escapeHtml(scopeLabel)} · 시간대: ${escapeHtml(snapshot.timezone)} · 생성 시각: ${escapeHtml(snapshot.createdAt)}</p>
${renderSnapshotBody(snapshot)}
<p><a href="/briefing/history">기록 목록으로</a></p>`;

  return renderLayout({ title: `브리핑 기록 ${snapshot.referenceDate}`, bodyHtml });
}

function formatRatioAsPercent(ratio: number | null): string {
  if (ratio === null) {
    return "N/A";
  }
  return `${(ratio * 100).toFixed(1)}%`;
}
