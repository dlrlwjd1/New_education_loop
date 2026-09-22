import { Router } from "express";
import { searchMaterials, getMaterialById } from "../../persistence/queries.js";
import { renderMaterialBody } from "../materialContent.js";
import { renderMaterialSearchPage } from "../views/materialSearch.js";
import { renderMaterialViewPage } from "../views/materialView.js";
import { renderMessage } from "../views/layout.js";
import type { MaterialBodyView, MaterialSearchItemView, MaterialSearchQueryParams } from "../types.js";

const router = Router();

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

function stringParam(raw: unknown): string | undefined {
  return typeof raw === "string" && raw.length > 0 ? raw : undefined;
}

function parseOffset(raw: unknown): number {
  const n = typeof raw === "string" ? parseInt(raw, 10) : NaN;
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function parseLimit(raw: unknown): number {
  const n = typeof raw === "string" ? parseInt(raw, 10) : NaN;
  if (!Number.isFinite(n)) {
    return DEFAULT_LIMIT;
  }
  return Math.min(MAX_LIMIT, Math.max(1, n));
}

router.get("/materials", (req, res) => {
  const query: MaterialSearchQueryParams = {
    sourcePath: stringParam(req.query.sourcePath),
    title: stringParam(req.query.title),
    category: stringParam(req.query.category),
    provider: stringParam(req.query.provider),
    course: stringParam(req.query.course),
    roadmapId: stringParam(req.query.roadmapId),
  };
  const offset = parseOffset(req.query.offset);
  const limit = parseLimit(req.query.limit);

  // contracts/http-routes.md: no query field at all still calls
  // searchMaterials({}) (002 returns [] for it), and the view is responsible
  // for showing just the search form rather than an error/empty-result state.
  const results = searchMaterials(query);
  const total = results.length;
  const sliced = results.slice(offset, offset + limit);

  const items: MaterialSearchItemView[] = sliced.map((result) => ({
    materialId: result.materialId,
    title: result.title,
    sourcePath: result.sourcePath,
    category: result.category,
    provider: result.provider,
    course: result.course,
    linkedRoadmapLinks: result.linkedRoadmapIds.map((roadmapId) => ({
      roadmapId,
      href: `/roadmaps/${roadmapId}`,
    })),
  }));

  res
    .status(200)
    .type("html")
    .send(renderMaterialSearchPage({ query, results: items, offset, limit, total }));
});

router.get("/materials/:materialId", (req, res) => {
  const metadata = getMaterialById(req.params.materialId);
  if (!metadata) {
    res
      .status(404)
      .type("html")
      .send(renderMessage({ title: "찾을 수 없음", message: "해당 자료를 찾을 수 없습니다." }));
    return;
  }

  // Only a missing metadata record is 404 (above) — a read/convert failure
  // for the underlying file still responds 200 with `renderError` set
  // (contracts/http-routes.md, data-model.md).
  const rendered = renderMaterialBody(metadata.sourcePath);
  const view: MaterialBodyView = {
    materialId: metadata.materialId,
    title: metadata.title,
    sourcePath: metadata.sourcePath,
    safeHtml: rendered.safeHtml,
    renderError: rendered.renderError,
  };

  res.status(200).type("html").send(renderMaterialViewPage(view));
});

export default router;
