import { Router } from "express";
import { generateBriefing } from "../../briefing/service.js";
import { getSnapshotById, listSnapshotsByDate } from "../../briefing/store.js";
import { renderMessage } from "../views/layout.js";
// NOTE: these two view modules (views/briefing.ts, views/briefingHistory.ts)
// are being written in parallel by another agent from the same
// briefing/types.ts this file also imports from. The exact function
// signatures below are this route file's ASSUMPTION about what they export —
// see this feature's implementation report for the reconciliation note.
import { renderBriefingPage } from "../views/briefing.js";
import { renderBriefingHistoryDetailPage, renderBriefingHistoryListPage } from "../views/briefingHistory.js";

const router = Router();

const NOT_FOUND_MESSAGE = { title: "찾을 수 없음", message: "해당 로드맵을 찾을 수 없습니다." } as const;
const HISTORY_NOT_FOUND_MESSAGE = { title: "찾을 수 없음", message: "해당 브리핑 기록을 찾을 수 없습니다." } as const;

function stringParam(raw: unknown): string | undefined {
  return typeof raw === "string" && raw.length > 0 ? raw : undefined;
}

/**
 * contracts/http-routes.md `GET /briefing` (US1/US2). `roadmapId` query param
 * omitted -> scope "all". `{error:"roadmap_not_found"}` -> 404 (FR-018, never
 * silently falls back to the "all roadmaps" result). `{reviewDataUnavailable:true}` still
 * renders 200 with roadmap progress only (research.md §4). Reusing the same
 * `(referenceDate, timezone, scope)` dedup key means reloading this page
 * never creates a new snapshot (research.md §1, SC-004).
 */
router.get("/briefing", (req, res) => {
  const roadmapId = stringParam(req.query.roadmapId);
  const scope = roadmapId ?? "all";
  const result = generateBriefing({ scope });

  if ("error" in result) {
    res.status(404).type("html").send(renderMessage(NOT_FOUND_MESSAGE));
    return;
  }

  res.status(200).type("html").send(renderBriefingPage(result, scope));
});

/**
 * contracts/http-routes.md `POST /briefing/rerun` (US3, FR-012). PRG pattern
 * (research.md §6): always redirects rather than rendering HTML directly, so
 * a browser refresh after this POST never resubmits it. `forceNew: true`
 * means a snapshot is always created here even if one already exists for the
 * same (date, timezone, scope) key (Acceptance Scenario US3-2).
 */
router.post("/briefing/rerun", (req, res) => {
  const body = req.body as Record<string, unknown> | undefined;
  const roadmapId = stringParam(body?.roadmapId);
  const scope = roadmapId ?? "all";
  const result = generateBriefing({ scope, forceNew: true });

  if ("error" in result) {
    res.status(404).type("html").send(renderMessage(NOT_FOUND_MESSAGE));
    return;
  }

  if ("reviewDataUnavailable" in result) {
    // A degraded result is never persisted (research.md §4), so it has no id
    // to redirect a history page to — PRG still applies, just back to the
    // live (still-scoped) /briefing screen instead of a history detail page
    // that was never created.
    const query = scope === "all" ? "" : `?roadmapId=${encodeURIComponent(scope)}`;
    res.redirect(303, `/briefing${query}`);
    return;
  }

  res.redirect(303, `/briefing/history/${result.id}`);
});

/** contracts/http-routes.md `GET /briefing/history` (US3, FR-015). */
router.get("/briefing/history", (_req, res) => {
  const items = listSnapshotsByDate();
  res.status(200).type("html").send(renderBriefingHistoryListPage(items));
});

/** contracts/http-routes.md `GET /briefing/history/:id` (US3, FR-014/SC-005) — rendered exactly as stored, never recomputed. */
router.get("/briefing/history/:id", (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).type("html").send(renderMessage(HISTORY_NOT_FOUND_MESSAGE));
    return;
  }

  const snapshot = getSnapshotById(id);
  if (!snapshot) {
    res.status(404).type("html").send(renderMessage(HISTORY_NOT_FOUND_MESSAGE));
    return;
  }

  res.status(200).type("html").send(renderBriefingHistoryDetailPage(snapshot));
});

export default router;
