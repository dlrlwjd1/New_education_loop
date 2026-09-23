/**
 * contracts/study-service-library.md `startSession`/`submitAnswer`/
 * `retryGrading`/`getSessionView` — the ONLY orchestration entry points
 * `web/routes/study.ts` calls. This file is the only caller of `ai/grader.ts`
 * outside of tests, and the only caller of `study/store.ts`'s writers.
 *
 * ## Design decisions this file makes that data-model.md leaves implicit
 *
 * See `sessionMachine.ts`'s module doc for how a `"prior_knowledge"`
 * question's `hasMaterial` result maps onto the state table. The
 * consequence for THIS file: `gradeAndAdvance()` below calls
 * `assessPriorKnowledge()` for a `"prior_knowledge"`-kind question ONLY on
 * its first-ever attempt (`countAttempts() === 0`); every later attempt on
 * ANY question (including a `"prior_knowledge"` question's own second
 * attempt, reachable only via the FR-017 "재료 없음" fast path, where the
 * same row continues on into `awaiting_explanation_ack`) is graded via
 * `gradeAnswer()`. contracts/ai-grading-contract.md's one-line routing rule
 * ("질문이 kind:'prior_knowledge'면 assessPriorKnowledge()를, 아니면
 * gradeAnswer()를 호출") does not anticipate a second attempt on that kind of
 * row; this is the concrete rule this implementation applies instead.
 *
 * FR-014 dedup (same concept+topic+date never registers twice) is satisfied
 * structurally rather than by an extra lookup: `sessionMachine.ts`'s
 * `RESOLVED_STEPS` guard means a question can reach `resolved_incorrect`/
 * `resolved_unknown` at most once (this file's own `gradeAndAdvance()` also
 * short-circuits an already-resolved question before grading again, see
 * below), and each session's own topic/material path only ever creates one
 * retrieval question that could resolve wrong. `registerReviewItem()`'s
 * `INSERT OR IGNORE` at the cache layer (via `appendReviewQueueItem`) is the
 * remaining defense against a literal cross-session duplicate; a duplicate
 * LINE briefly appearing in `내학습/복습큐.md` itself (if the same exact
 * concept/topic/date combination is ever hit from two different sessions) is
 * accepted as harmless, per data-model.md's own reasoning for
 * `populateReviewQueue()`'s identical `INSERT OR IGNORE` choice — a future
 * full `reload()` collapses it via the same deterministic id.
 */
import { computeReviewItemId } from "../reviewQueue/identity.js";
import { getMaterialById } from "../persistence/queries.js";
import { appendReviewQueueItem } from "../persistence/queries.js";
import { renderMaterialBody } from "../web/materialContent.js";
import {
  assessPriorKnowledge,
  gradeAnswer,
  generateExplanation,
  generateHint,
  generateRetrievalQuestion,
} from "../ai/grader.js";
import { appendActiveReviewRow } from "./reviewQueueWriter.js";
import { computeNextStep } from "./sessionMachine.js";
import type { SessionMachineEvent } from "./sessionMachine.js";
import {
  countAttempts,
  countHints,
  findAttemptByRequestId,
  getAttemptById,
  getLatestAttempt,
  getQuestionById,
  getQuestionView,
  getSessionById,
  getSessionView as storeGetSessionView,
  insertAttempt,
  insertHint,
  insertQuestion,
  insertSession,
  listPriorIncorrectAnswers,
  updateQuestionProgress,
} from "./store.js";
import type {
  AnswerAttempt,
  AnswerSubmission,
  ResolvedTarget,
  StudyQuestion,
  StudyQuestionView,
  StudySession,
  StudySessionView,
  SubmitAnswerResult,
} from "./types.js";

const DEFAULT_TIMEZONE = "Asia/Seoul";
const RESOLVED_STEPS = new Set(["resolved_correct", "resolved_incorrect", "resolved_unknown"]);

export interface StartSessionOptions {
  timezone?: string;
  now?: Date;
  dbPath?: string;
}

/**
 * Additive to contracts/study-service-library.md (which shows
 * `submitAnswer(questionId, submission, options?)` without spelling out
 * `options`' shape — `study/types.ts` doesn't define one either). `dbPath`/
 * `now` mirror `StartSessionOptions`'s existing test-only-override
 * convention; `reviewQueuePath`/`reviewQueueCacheDbPath` are this file's own
 * addition so a caller (tests) can redirect BOTH review-queue write targets
 * away from the real `내학습/복습큐.md` / `backend/.cache/learning-loop.sqlite`,
 * the same way `insertSession`'s `dbPath` redirects away from the real
 * `내학습/study-sessions.sqlite`.
 */
export interface SubmitAnswerOptions {
  dbPath?: string;
  now?: Date;
  reviewQueuePath?: string;
  reviewQueueCacheDbPath?: string;
}

export interface GetSessionViewOptions {
  dbPath?: string;
}

function todayInTimezone(timezone: string, now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * FR-006: reads a material's body via the SAME reader/path-traversal guard
 * `web/materialContent.ts` already exercises for the material-view screen
 * (003) — no separate raw-file-read path is introduced here. Returns
 * `undefined` (not an error) when the session isn't material-backed, or if
 * the material can no longer be read (spec.md Edge Case: "자료가 이후
 * 삭제되거나 경로가 바뀐 경우… 진행 중이던 세션은 오류로 죽지 않는다" — a
 * session already in progress degrades to no material context rather than
 * failing outright; `resolveStartTarget()` is what rejects an unreadable
 * material at START time).
 */
function loadMaterialContext(session: Pick<StudySession, "path" | "targetMaterialId">): string | undefined {
  if (session.path !== "material" || !session.targetMaterialId) {
    return undefined;
  }
  const material = getMaterialById(session.targetMaterialId);
  if (!material) {
    return undefined;
  }
  const rendered = renderMaterialBody(material.sourcePath);
  return rendered.safeHtml ?? undefined;
}

/**
 * contracts/study-service-library.md `startSession()`. Does not call any
 * `ai/grader.ts` function — the first question's prompt text is a fixed
 * template (FR-005/FR-006), so starting a session never pays the ~15-20s AI
 * latency (research.md §1) that answering it will.
 */
export function startSession(target: ResolvedTarget, options: StartSessionOptions = {}): StudySession {
  const timezone = options.timezone ?? DEFAULT_TIMEZONE;
  const now = options.now ?? new Date();
  const dbPath = options.dbPath;
  const startedAt = now.toISOString();

  const session = insertSession(
    {
      path: target.path,
      targetLabel: target.targetLabel,
      targetMaterialId: target.materialId ?? null,
      targetRoadmapId: target.roadmapId ?? null,
      targetPhaseId: target.phaseId ?? null,
      targetItemId: target.itemId ?? null,
      timezone,
      startedAt,
    },
    dbPath,
  );

  const promptText =
    target.path === "material"
      ? `"${target.targetLabel}" 자료를 기준으로, 지금 아는 것을 적어 주세요.`
      : "지금 아는 것을 적어 주세요.";

  // FR-007: this template never contains a material summary or an answer.
  insertQuestion(
    {
      sessionId: session.id,
      orderIndex: 0,
      kind: "prior_knowledge",
      promptText,
      conceptLabel: target.targetLabel,
      currentStep: "awaiting_answer",
      createdAt: startedAt,
    },
    dbPath,
  );

  return session;
}

async function runPriorKnowledgeAssessment(
  session: StudySession,
  submission: AnswerSubmission,
  materialContext: string | undefined,
): Promise<SessionMachineEvent> {
  const result = await assessPriorKnowledge({
    targetLabel: session.targetLabel,
    materialContext,
    userNote: submission.submittedText,
  });
  if (result.status !== "graded") {
    return { kind: "ai_failure" };
  }
  return { kind: "prior_knowledge_assessed", hasMaterial: result.hasMaterial };
}

async function runGrading(
  question: StudyQuestion,
  submission: AnswerSubmission,
  materialContext: string | undefined,
): Promise<SessionMachineEvent> {
  const result = await gradeAnswer({
    questionText: question.promptText,
    materialContext,
    submittedText: submission.submittedText,
    isDontKnow: submission.isDontKnow,
  });
  if (result.status !== "graded") {
    return { kind: "ai_failure" };
  }
  return {
    kind: "graded",
    verdict: result.verdict,
    correctParts: result.correctParts,
    incorrectParts: result.incorrectParts,
  };
}

/** FR-005/FR-006: builds and inserts the session's next (`"retrieval"`) question once its prior-knowledge check resolves `hasMaterial:true`. */
async function createRetrievalQuestion(
  session: StudySession,
  priorKnowledgeQuestion: StudyQuestion,
  dbPath: string | undefined,
): Promise<StudyQuestion> {
  const materialContext = loadMaterialContext(session);
  const priorKnowledgeAttempt = getLatestAttempt(priorKnowledgeQuestion.id, dbPath);
  const nowIso = new Date().toISOString();

  const result = await generateRetrievalQuestion({
    path: session.path === "material" ? "material" : "topic",
    targetLabel: session.targetLabel,
    materialContext,
    priorKnowledgeNote: priorKnowledgeAttempt?.submittedText ?? "",
  });

  if (result.status !== "graded") {
    // Defensive fallback: contracts/study-service-library.md's
    // `SubmitAnswerResult` union has no "question generation failed" case,
    // so the session must not dead-end with nothing to answer next.
    return insertQuestion(
      {
        sessionId: session.id,
        orderIndex: priorKnowledgeQuestion.orderIndex + 1,
        kind: "retrieval",
        promptText: `"${session.targetLabel}"에 대해 알고 있는 것을 설명해 보세요.`,
        conceptLabel: session.targetLabel,
        currentStep: "awaiting_answer",
        createdAt: nowIso,
      },
      dbPath,
    );
  }

  return insertQuestion(
    {
      sessionId: session.id,
      orderIndex: priorKnowledgeQuestion.orderIndex + 1,
      kind: "retrieval",
      promptText: result.questionText,
      conceptLabel: result.conceptLabel,
      currentStep: "awaiting_answer",
      createdAt: nowIso,
    },
    dbPath,
  );
}

/**
 * FR-013/data-model.md: appends the file row FIRST (research.md §3 — the
 * file is the origin of truth), then mirrors it into the live cache. A
 * cache-write failure (most commonly: 002/004's cache was never `reload()`-ed
 * yet) is logged and reported back as `reviewItemRegistered:false` WITHOUT
 * losing the file row — a future full `reload()` will still pick it up from
 * the file regardless.
 */
function registerReviewItem(
  session: StudySession,
  question: StudyQuestion,
  options: SubmitAnswerOptions,
): boolean {
  const firstWrongDate = todayInTimezone(session.timezone, new Date());
  const item = question.conceptLabel ?? question.promptText;
  const topic = session.targetLabel;

  const appended = appendActiveReviewRow({ item, topic, firstWrongDate }, options.reviewQueuePath);
  const id = computeReviewItemId(appended.item, appended.topic, appended.firstWrongDate);

  try {
    appendReviewQueueItem(
      {
        id,
        item: appended.item,
        topic: appended.topic,
        firstWrongDate: appended.firstWrongDate,
        stageLabel: appended.stageLabel,
        nextReviewDate: appended.nextReviewDate,
      },
      options.reviewQueueCacheDbPath,
    );
    return true;
  } catch (err) {
    console.error(
      "복습큐 라이브 캐시(backend/.cache/learning-loop.sqlite) 갱신에 실패했습니다 — 파일(내학습/복습큐.md)에는 이미 기록되었습니다:",
      err,
    );
    return false;
  }
}

interface ApplyTransitionArgs {
  session: StudySession;
  question: StudyQuestion;
  event: SessionMachineEvent;
  nextStep: StudyQuestion["currentStep"];
  action: "none" | "give_hint" | "show_explanation";
  hintCount: number;
  dbPath: string | undefined;
  options: SubmitAnswerOptions;
}

async function applyTransition(args: ApplyTransitionArgs): Promise<SubmitAnswerResult> {
  const { session, question, event, nextStep, action, hintCount, dbPath, options } = args;
  const nowIso = new Date().toISOString();

  if (action === "give_hint") {
    updateQuestionProgress(question.id, { currentStep: nextStep }, dbPath);
    const hintNumber = (hintCount + 1) as 1 | 2 | 3;
    const priorIncorrectAnswers = listPriorIncorrectAnswers(question.id, dbPath);
    const hintResult = await generateHint({
      questionText: question.promptText,
      materialContext: loadMaterialContext(session),
      priorIncorrectAnswers,
      hintNumber,
    });
    const hintText =
      hintResult.status === "graded" ? hintResult.hintText : "힌트를 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.";
    insertHint({ questionId: question.id, hintNumber, hintText, createdAt: nowIso }, dbPath);
    const view = getQuestionView(question.id, dbPath) as StudyQuestionView;
    return { outcome: "hint_given", question: view, hint: hintText };
  }

  if (action === "show_explanation") {
    const explanationResult = await generateExplanation({
      questionText: question.promptText,
      materialContext: loadMaterialContext(session),
    });
    const explanationText =
      explanationResult.status === "graded"
        ? explanationResult.explanationText
        : "설명을 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.";
    updateQuestionProgress(
      question.id,
      { currentStep: nextStep, explanationText, explanationShownAt: nowIso },
      dbPath,
    );
    const view = getQuestionView(question.id, dbPath) as StudyQuestionView;
    return { outcome: "explanation_shown", question: view, explanation: explanationText };
  }

  // action === "none"
  updateQuestionProgress(question.id, { currentStep: nextStep }, dbPath);

  if (nextStep === "resolved_correct") {
    if (event.kind === "prior_knowledge_assessed") {
      // hasMaterial:true — this prior-knowledge check is done; immediately
      // create the retrieval question it was gathering context for
      // (sessionMachine.ts's module doc explains this mapping).
      const nextQuestion = await createRetrievalQuestion(session, question, dbPath);
      const view = getQuestionView(nextQuestion.id, dbPath) as StudyQuestionView;
      return { outcome: "correct", question: view };
    }
    const view = getQuestionView(question.id, dbPath) as StudyQuestionView;
    return { outcome: "correct", question: view };
  }

  // resolved_incorrect / resolved_unknown (FR-013).
  const view = getQuestionView(question.id, dbPath) as StudyQuestionView;
  const reviewItemRegistered = registerReviewItem(session, question, options);
  return {
    outcome: nextStep === "resolved_unknown" ? "resolved_unknown" : "resolved_incorrect",
    question: view,
    reviewItemRegistered,
  };
}

/** Reconstructs a `SubmitAnswerResult` purely from already-stored data — used both for FR-028 dedup and for an already-resolved question (never re-grades, never re-registers a review item). */
function toSubmitAnswerResult(
  question: StudyQuestion,
  attempt: AnswerAttempt,
  dbPath: string | undefined,
): SubmitAnswerResult {
  if (attempt.status === "retry_needed") {
    return { outcome: "retry_needed", attemptId: attempt.id };
  }

  const view = getQuestionView(question.id, dbPath) as StudyQuestionView;
  switch (question.currentStep) {
    case "resolved_correct":
      return { outcome: "correct", question: view };
    case "resolved_incorrect":
    case "resolved_unknown":
      return { outcome: question.currentStep, question: view, reviewItemRegistered: true };
    case "awaiting_hint_retry": {
      const hints = view.hintsGiven;
      return { outcome: "hint_given", question: view, hint: hints[hints.length - 1] ?? "" };
    }
    case "awaiting_explanation_ack":
      return { outcome: "explanation_shown", question: view, explanation: view.explanation ?? "" };
    default:
      // Unreachable in practice — a graded attempt always advances the step
      // (sessionMachine.ts) — kept only for type/runtime exhaustiveness.
      return { outcome: "correct", question: view };
  }
}

/** Shared core of `submitAnswer()`/`retryGrading()`: grades one submission against one already-resolved (session, question) pair and advances state accordingly. */
async function gradeAndAdvance(
  session: StudySession,
  question: StudyQuestion,
  submission: AnswerSubmission,
  options: SubmitAnswerOptions,
): Promise<SubmitAnswerResult> {
  const dbPath = options.dbPath;
  const now = options.now ?? new Date();
  const submittedAt = now.toISOString();

  if (RESOLVED_STEPS.has(question.currentStep)) {
    // Already finished — never re-grade or double-register a review item
    // (defensive; routes should not normally reach this).
    const latest = getLatestAttempt(question.id, dbPath);
    return latest ? toSubmitAnswerResult(question, latest, dbPath) : { outcome: "correct", question: getQuestionView(question.id, dbPath) as StudyQuestionView };
  }

  const materialContext = loadMaterialContext(session);
  const hintCount = countHints(question.id, dbPath);
  const attemptCountBefore = countAttempts(question.id, dbPath);
  const usesPriorKnowledgeAssessment = question.kind === "prior_knowledge" && attemptCountBefore === 0;

  const event = usesPriorKnowledgeAssessment
    ? await runPriorKnowledgeAssessment(session, submission, materialContext)
    : await runGrading(question, submission, materialContext);

  if (event.kind === "ai_failure") {
    const attempt = insertAttempt(
      {
        questionId: question.id,
        submittedText: submission.submittedText,
        isDontKnow: submission.isDontKnow,
        status: "retry_needed",
        submittedAt,
        requestId: submission.requestId ?? null,
      },
      dbPath,
    );
    return { outcome: "retry_needed", attemptId: attempt.id };
  }

  const transition = computeNextStep({ currentStep: question.currentStep, event, hintCount });
  const gradedAt = new Date().toISOString();

  insertAttempt(
    {
      questionId: question.id,
      submittedText: submission.submittedText,
      isDontKnow: submission.isDontKnow,
      status: "graded",
      verdict: event.kind === "graded" ? event.verdict : null,
      correctParts: event.kind === "graded" ? (event.correctParts ?? null) : null,
      incorrectParts: event.kind === "graded" ? (event.incorrectParts ?? null) : null,
      submittedAt,
      gradedAt,
      requestId: submission.requestId ?? null,
    },
    dbPath,
  );

  return applyTransition({
    session,
    question,
    event,
    nextStep: transition.nextStep,
    action: transition.action,
    hintCount,
    dbPath,
    options,
  });
}

/**
 * contracts/study-service-library.md `submitAnswer()`. Order matches the
 * contract's "보장" section: (1) FR-028 dedup check first, (2) resolve
 * session, (3) grade (routing by kind/attempt-count as this file's module
 * doc explains), (4) on AI failure, save as `retry_needed` and stop (FR-021)
 * — otherwise (5) advance via `sessionMachine.ts` and perform whatever side
 * effect the new step requires.
 */
export async function submitAnswer(
  questionId: number,
  submission: AnswerSubmission,
  options: SubmitAnswerOptions = {},
): Promise<SubmitAnswerResult> {
  const dbPath = options.dbPath;

  const question = getQuestionById(questionId, dbPath);
  if (!question) {
    throw new Error(`존재하지 않는 질문 id: ${questionId}`);
  }

  if (submission.requestId) {
    const existingAttempt = findAttemptByRequestId(questionId, submission.requestId, dbPath);
    if (existingAttempt) {
      return toSubmitAnswerResult(question, existingAttempt, dbPath);
    }
  }

  const session = getSessionById(question.sessionId, dbPath);
  if (!session) {
    throw new Error(`존재하지 않는 세션 id: ${question.sessionId}`);
  }

  return gradeAndAdvance(session, question, submission, options);
}

/**
 * contracts/study-service-library.md `retryGrading()`. Re-grades the SAME
 * `submittedText` as a brand-new attempt row (data-model.md's insert-only
 * invariant — never touches `attemptId`'s own row), without requiring new
 * input (User Story 3).
 */
export async function retryGrading(
  attemptId: number,
  options: SubmitAnswerOptions = {},
): Promise<SubmitAnswerResult> {
  const dbPath = options.dbPath;

  const attempt = getAttemptById(attemptId, dbPath);
  if (!attempt) {
    throw new Error(`존재하지 않는 답변 시도 id: ${attemptId}`);
  }
  if (attempt.status !== "retry_needed") {
    throw new Error(`이미 채점이 완료된 답변입니다(attemptId=${attemptId}) — 재시도할 수 없습니다.`);
  }

  const question = getQuestionById(attempt.questionId, dbPath);
  if (!question) {
    throw new Error(`존재하지 않는 질문 id: ${attempt.questionId}`);
  }
  const session = getSessionById(question.sessionId, dbPath);
  if (!session) {
    throw new Error(`존재하지 않는 세션 id: ${question.sessionId}`);
  }

  const resubmission: AnswerSubmission = {
    submittedText: attempt.submittedText,
    isDontKnow: attempt.isDontKnow,
  };
  return gradeAndAdvance(session, question, resubmission, options);
}

/** contracts/study-service-library.md `getSessionView()`. */
export function getSessionView(sessionId: number, options: GetSessionViewOptions = {}): StudySessionView | null {
  return storeGetSessionView(sessionId, options.dbPath);
}

/**
 * `web/routes/study.ts` convenience export (not part of
 * contracts/study-service-library.md's literal function list): resolves
 * which session a given `attemptId` belongs to, so the retry route can
 * redirect to `GET /study/:sessionId` even when `retryGrading()` itself
 * returns `{outcome:"retry_needed"}` again (that outcome carries no session
 * id on its own).
 */
export function findSessionIdForAttempt(attemptId: number, dbPath?: string): number | null {
  const attempt = getAttemptById(attemptId, dbPath);
  if (!attempt) {
    return null;
  }
  const question = getQuestionById(attempt.questionId, dbPath);
  return question?.sessionId ?? null;
}

/** `web/routes/study.ts` convenience export: the attemptId of a question's latest attempt, when it is `retry_needed` (used to build the retry form's action URL — `StudyQuestionView.latestAttempt` intentionally has no `id` field, see that view's route-layer wrapper). */
export function getLatestRetryableAttemptId(questionId: number, dbPath?: string): number | null {
  const attempt = getLatestAttempt(questionId, dbPath);
  return attempt && attempt.status === "retry_needed" ? attempt.id : null;
}
