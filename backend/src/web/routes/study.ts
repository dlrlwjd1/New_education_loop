import { Router } from "express";
import { listRoadmaps } from "../../persistence/queries.js";
import { resolveStartTarget } from "../../study/targetResolver.js";
import {
  findSessionIdForAttempt,
  getSessionView,
  retryGrading,
  startSession,
  submitAnswer,
} from "../../study/service.js";
import type { ResolveStartTargetInput } from "../../study/types.js";
import { renderMessage } from "../views/layout.js";
// NOTE: these two view modules (views/studyNew.ts, views/studySession.ts) were
// written in parallel by another agent from the same study/types.ts this file
// also imports from — reconciled against their ACTUAL exports (not the
// signatures this file originally assumed before that reconciliation; see
// this feature's implementation report). `renderStudyNewPage` only covers the
// default form; the other three `ResolveTargetResult` kinds each get their
// own render function.
import {
  renderAmbiguousChoicePage,
  renderAutoSuggestionsPage,
  renderStudyNewPage,
  renderTargetNotFoundPage,
} from "../views/studyNew.js";
import { renderStudySessionPage } from "../views/studySession.js";

const router = Router();

const SESSION_NOT_FOUND_MESSAGE = { title: "찾을 수 없음", message: "해당 학습 세션을 찾을 수 없습니다." } as const;

function stringParam(raw: unknown): string | undefined {
  return typeof raw === "string" && raw.length > 0 ? raw : undefined;
}

/**
 * contracts/http-routes.md `GET /study/new` (US1/US4/US5). Does not call
 * `resolveStartTarget()` — this screen alone never resolves a target, only
 * `POST /study/start` does (contract's explicit "역할" note). `?materialId=`
 * is `web/views/studyNew.ts`'s own material-search handoff design (its module
 * doc comment) — a future `/materials` (003) result row could link here.
 */
router.get("/study/new", (req, res) => {
  const materialId = stringParam(req.query.materialId);
  // FR-002/User Story 4 (found dead-end during QA review — fixed): lists
  // real in-progress roadmaps as one-click "로드맵 이어하기" entries, the same
  // `completedCount > 0 && completedCount < totalCount` definition
  // `study/targetResolver.ts`'s `isInProgress()` uses for auto-suggestions.
  const roadmaps = listRoadmaps()
    .filter((r) => r.completedCount > 0 && r.completedCount < r.totalCount)
    .map((r) => ({ roadmapId: r.roadmapId, title: r.title }));
  res.status(200).type("html").send(renderStudyNewPage({ materialId, roadmaps }));
});

/**
 * contracts/http-routes.md `POST /study/start`. Form fields mirror
 * `ResolveStartTargetInput` exactly. `kind:"resolved"` is the only branch
 * that performs a real state change (`startSession()`) and is the only
 * branch that redirects (PRG — a refresh of the resulting page must never
 * re-run `resolveStartTarget()`/`startSession()`); every other kind re-renders
 * a `GET /study/new`-family page (200, not a redirect, since nothing was
 * created) via `web/views/studyNew.ts`'s dedicated function for that kind.
 */
router.post("/study/start", (req, res) => {
  const body = req.body as Record<string, unknown> | undefined;
  const input: ResolveStartTargetInput = {
    freeText: stringParam(body?.freeText),
    explicitPath: stringParam(body?.explicitPath) as ResolveStartTargetInput["explicitPath"],
    materialId: stringParam(body?.materialId),
    roadmapId: stringParam(body?.roadmapId),
  };

  const result = resolveStartTarget(input);

  switch (result.kind) {
    case "resolved": {
      const session = startSession(result);
      res.redirect(303, `/study/${session.id}`);
      return;
    }
    case "ambiguous":
      res.status(200).type("html").send(renderAmbiguousChoicePage(result));
      return;
    case "auto_suggestions":
      res.status(200).type("html").send(renderAutoSuggestionsPage(result));
      return;
    case "not_found":
      res.status(200).type("html").send(renderTargetNotFoundPage(result.reason));
      return;
  }
});

/**
 * contracts/http-routes.md `GET /study/:sessionId`. `getSessionView()`
 * returning `null` (nonexistent id, or a malformed one — spec.md Edge Case
 * "존재하지 않거나 다른 세션의 식별자로 접근") -> 404, never a fabricated view
 * (FR-007/SC-007).
 */
router.get("/study/:sessionId", (req, res) => {
  const sessionId = Number(req.params.sessionId);
  if (!Number.isInteger(sessionId)) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  const view = getSessionView(sessionId);
  if (!view) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  res.status(200).type("html").send(renderStudySessionPage(view));
});

/**
 * contracts/http-routes.md `POST /study/:sessionId/questions/:questionId/answer`
 * (US1/US2). The question must belong to `:sessionId` in the URL — checked
 * via `getSessionView()` before calling `submitAnswer()` (which only takes a
 * bare `questionId`), so a request naming a real `questionId` that belongs to
 * a DIFFERENT session 404s exactly like a nonexistent one, rather than
 * silently grading against the wrong session's question.
 *
 * PRG regardless of `submitAnswer()`'s `outcome` (research.md §2 — the 15-20s
 * AI call already happened synchronously inside this POST; the redirect
 * target, `GET /study/:sessionId`, is what actually renders the result).
 * Express 5 forwards a rejected async handler's promise to the error
 * middleware automatically, so `submitAnswer()`'s throw cases (defensive,
 * unreachable here since existence was just checked above) fall through to
 * `web/server.ts`'s generic 500 rather than needing an explicit try/catch.
 */
router.post("/study/:sessionId/questions/:questionId/answer", async (req, res) => {
  const sessionId = Number(req.params.sessionId);
  const questionId = Number(req.params.questionId);
  if (!Number.isInteger(sessionId) || !Number.isInteger(questionId)) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  const view = getSessionView(sessionId);
  if (!view || !view.questions.some((question) => question.questionId === questionId)) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  const body = req.body as Record<string, unknown> | undefined;
  const submittedText = stringParam(body?.submittedText) ?? "";
  const isDontKnow = body?.isDontKnow === "on" || body?.isDontKnow === "true";
  const requestId = stringParam(body?.requestId);

  await submitAnswer(questionId, { submittedText, isDontKnow, requestId });
  res.redirect(303, `/study/${sessionId}`);
});

/**
 * contracts/http-routes.md `POST /study/answers/:attemptId/retry` (US3,
 * T031). `findSessionIdForAttempt()` (`study/service.ts`'s route-convenience
 * export) resolves the redirect target even though `retryGrading()`'s own
 * return value carries no session id (`SubmitAnswerResult` has none by
 * contract).
 */
router.post("/study/answers/:attemptId/retry", async (req, res) => {
  const attemptId = Number(req.params.attemptId);
  if (!Number.isInteger(attemptId)) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  const sessionId = findSessionIdForAttempt(attemptId);
  if (sessionId === null) {
    res.status(404).type("html").send(renderMessage(SESSION_NOT_FOUND_MESSAGE));
    return;
  }

  await retryGrading(attemptId);
  res.redirect(303, `/study/${sessionId}`);
});

export default router;
