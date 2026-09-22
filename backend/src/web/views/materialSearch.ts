import type { MaterialSearchViewModel, MaterialSearchItemView, MaterialSearchQueryParams } from "../types.js";
import { escapeHtml } from "../html.js";
import { renderLayout } from "./layout.js";

const QUERY_FIELDS: Array<{ name: keyof MaterialSearchQueryParams; label: string }> = [
  { name: "sourcePath", label: "경로" },
  { name: "title", label: "제목" },
  { name: "category", label: "분류" },
  { name: "provider", label: "제공처" },
  { name: "course", label: "강좌" },
  { name: "roadmapId", label: "로드맵 ID" },
];

/**
 * User Story 4 (spec.md Acceptance Scenarios 1-3): search form + results.
 * A fresh visit (no query fields set) shows only the form — that is not a
 * search yet, not an empty result. A search with zero results shows a clear
 * "no results" message, not an error.
 */
export function renderMaterialSearchPage(model: MaterialSearchViewModel): string {
  const hasQuery = QUERY_FIELDS.some(({ name }) => Boolean(model.query[name]));

  const formHtml = renderForm(model.query);

  let resultsHtml = "";
  if (hasQuery) {
    resultsHtml =
      model.results.length === 0
        ? `<p class="message">조건에 맞는 자료가 없습니다.</p>`
        : renderResults(model);
  }

  const bodyHtml = `<h1>자료실</h1>
${formHtml}
${resultsHtml}`;

  return renderLayout({ title: "자료실", bodyHtml });
}

function renderForm(query: MaterialSearchQueryParams): string {
  const fieldsHtml = QUERY_FIELDS.map(({ name, label }) => {
    const value = query[name] ?? "";
    return `<label class="search-field">
${escapeHtml(label)}
<input type="text" name="${name}" value="${escapeHtml(value)}">
</label>`;
  }).join("\n");

  return `<form class="material-search-form" method="get" action="/materials">
${fieldsHtml}
<button type="submit">검색</button>
</form>`;
}

function renderResults(model: MaterialSearchViewModel): string {
  const rows = model.results.map(renderResultItem).join("\n");

  const nextOffset = model.offset + model.limit;
  const hasMore = model.offset + model.results.length < model.total;
  const nextLink = hasMore
    ? `<p><a href="${escapeHtml(buildQueryHref(model.query, nextOffset, model.limit))}">다음 ${model.limit}개 보기</a></p>`
    : "";

  return `<ul class="material-results">
${rows}
</ul>
${nextLink}`;
}

function renderResultItem(item: MaterialSearchItemView): string {
  const roadmapLinks = item.linkedRoadmapLinks
    .map(
      (link) =>
        `<a href="${escapeHtml(link.href)}">${escapeHtml(link.roadmapId)}</a>`,
    )
    .join(", ");

  return `<li class="material-result-item">
<a class="material-title" href="/materials/${encodeURIComponent(item.materialId)}">${escapeHtml(item.title)}</a>
<span class="material-source-path">${escapeHtml(item.sourcePath)}</span>
<span class="material-category">${escapeHtml(item.category)}</span>
<span class="material-provider">${item.provider ? escapeHtml(item.provider) : ""}</span>
<span class="material-course">${item.course ? escapeHtml(item.course) : ""}</span>
${roadmapLinks ? `<span class="material-roadmap-links">연결된 로드맵: ${roadmapLinks}</span>` : ""}
</li>`;
}

function buildQueryHref(
  query: MaterialSearchQueryParams,
  offset: number,
  limit: number,
): string {
  const params = new URLSearchParams();
  for (const { name } of QUERY_FIELDS) {
    const value = query[name];
    if (value) {
      params.set(name, value);
    }
  }
  params.set("offset", String(offset));
  params.set("limit", String(limit));
  return `/materials?${params.toString()}`;
}
