import type { StudyQuestionView, StudySessionView } from "../../study/types.js";
import { escapeHtml } from "../html.js";
import { renderLayout } from "./layout.js";

/**
 * `GET /study/:sessionId` — the main interactive session screen (all User
 * Stories, contracts/http-routes.md). Rendering is driven entirely by the
 * LATEST question's `currentStep` — earlier questions are only ever shown as
 * a compact resolved-history list, never with an input form.
 *
 * FR-024/SC-001/SC-006 guarantee: before any answer has been submitted for
 * the current question (`currentStep === "awaiting_answer"` AND
 * `hintsGiven.length === 0` AND `explanation === null` AND no prior attempt),
 * this function must not emit any hint/explanation/verdict text anywhere in
 * the output. The branch structure below enforces that by construction: the
 * "fresh awaiting_answer" branch renders ONLY the prompt + form, with no
 * hints/explanation/verdict containers at all (not even empty ones).
 */
export function renderStudySessionPage(session: StudySessionView): string {
  const questions = session.questions;
  const currentQuestion = questions[questions.length - 1] ?? null;
  const historyQuestions = questions.slice(0, -1);

  const historyHtml = renderHistory(historyQuestions);
  const currentHtml = currentQuestion
    ? renderCurrentQuestion(session.sessionId, currentQuestion)
    : `<p class="message">이 세션에는 아직 질문이 없습니다.</p>`;

  const bodyHtml = `<h1>학습 세션 — ${escapeHtml(session.targetLabel)}</h1>
${historyHtml}
<section class="study-current-question">
${currentHtml}
</section>`;

  return renderLayout({ title: `학습 — ${session.targetLabel}`, bodyHtml });
}

/** Compact one-line-per-question history of already-resolved earlier questions. */
function renderHistory(historyQuestions: StudyQuestionView[]): string {
  if (historyQuestions.length === 0) {
    return "";
  }
  const itemsHtml = historyQuestions
    .map((q) => {
      const verdictLabel = verdictLabelFor(q);
      return `<li class="study-history-item">
<span class="study-history-prompt">${escapeHtml(q.promptText)}</span>
<span class="study-history-verdict">${escapeHtml(verdictLabel)}</span>
</li>`;
    })
    .join("\n");

  return `<section class="study-history">
<h2>지금까지 진행한 질문</h2>
<ul class="study-history-list">
${itemsHtml}
</ul>
</section>`;
}

function verdictLabelFor(q: StudyQuestionView): string {
  switch (q.currentStep) {
    case "resolved_correct":
      return "맞음";
    case "resolved_incorrect":
      return "유창하지만 틀림";
    case "resolved_unknown":
      return "모름";
    default:
      return "진행 중";
  }
}

/**
 * Renders the current (latest) question. `latestAttempt.status ===
 * "retry_needed"` can occur in ANY `currentStep` (data-model.md: a failed
 * grading call leaves the step unchanged), so that check comes first and
 * short-circuits the rest.
 */
function renderCurrentQuestion(sessionId: number, question: StudyQuestionView): string {
  if (question.latestAttempt?.status === "retry_needed") {
    return renderRetryNeeded(sessionId, question);
  }

  switch (question.currentStep) {
    case "awaiting_answer":
      return renderAwaitingAnswer(sessionId, question);
    case "awaiting_hint_retry":
      return renderAwaitingHintRetry(sessionId, question);
    case "awaiting_explanation_ack":
      return renderAwaitingExplanationAck(sessionId, question);
    case "resolved_correct":
      return renderResolvedCorrect(question);
    case "resolved_incorrect":
    case "resolved_unknown":
      return renderResolvedWrong(question);
    default:
      return `<p class="message">알 수 없는 상태입니다.</p>`;
  }
}

/**
 * FR-021/US3: grading failed or timed out. `attemptId` builds the retry
 * form's action URL (`POST /study/answers/:attemptId/retry`) —
 * `StudyQuestionView.latestAttempt.id` (backend/src/study/types.ts, added
 * during frontend/backend reconciliation specifically to close this gap).
 */
function renderRetryNeeded(sessionId: number, question: StudyQuestionView): string {
  const attemptId = question.latestAttempt?.id;
  const retryFormHtml =
    typeof attemptId === "number"
      ? `<form method="post" action="/study/answers/${attemptId}/retry">
<button type="submit">다시 시도</button>
</form>`
      : `<p class="message">재시도 버튼을 표시할 수 없습니다 (답변 시도 ID 누락) — 새로고침 후 다시 시도해 주세요.</p>`;

  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
<p class="study-retry-notice">채점을 완료하지 못했습니다 — 다시 시도해 주세요.</p>
${retryFormHtml}`;
}

/**
 * `awaiting_answer`: either the very first view of a fresh question (no
 * hints, no explanation, no prior attempt — FR-024 applies in full here), or
 * a return to this step after... in practice `awaiting_answer` is only ever
 * the fresh/initial state per data-model.md's state machine (hint/explain
 * cycles move to `awaiting_hint_retry`/`awaiting_explanation_ack`, never back
 * to `awaiting_answer`) — so this branch never has hints/explanation to show.
 */
function renderAwaitingAnswer(sessionId: number, question: StudyQuestionView): string {
  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
${renderAnswerForm(sessionId, question.questionId)}`;
}

/** `awaiting_hint_retry`: all hints given so far, in the order given, above the same answer form. */
function renderAwaitingHintRetry(sessionId: number, question: StudyQuestionView): string {
  const hintsHtml = question.hintsGiven
    .map(
      (hint, index) => `<li class="study-hint-item">
<span class="study-hint-label">힌트 ${index + 1}</span>
<span class="study-hint-text">${escapeHtml(hint)}</span>
</li>`,
    )
    .join("\n");

  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
<section class="study-hints">
<h3>지금까지 받은 힌트</h3>
<ul class="study-hints-list">
${hintsHtml}
</ul>
</section>
${renderAnswerForm(sessionId, question.questionId)}`;
}

/** `awaiting_explanation_ack`: explanation panel (clearly not a hint) + answer form, relabeled to "자기 말로 다시 답해 주세요". */
function renderAwaitingExplanationAck(sessionId: number, question: StudyQuestionView): string {
  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
<section class="study-explanation">
<h3>설명</h3>
<p class="study-explanation-text">${escapeHtml(question.explanation ?? "")}</p>
</section>
${renderAnswerForm(sessionId, question.questionId, "설명을 읽었다면, 이제 자기 말로 다시 답해 주세요.")}`;
}

/** `resolved_correct`: final verdict, no further input for this question. F05 elaboration is out of scope — placeholder only. */
function renderResolvedCorrect(question: StudyQuestionView): string {
  const correctParts = question.latestAttempt?.correctParts ?? "";
  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
<section class="study-verdict study-verdict-correct">
<h3>판정: 맞음</h3>
${correctParts ? `<p class="study-correct-parts">${escapeHtml(correctParts)}</p>` : ""}
<p class="study-next-step">정교화 단계로 넘어갑니다 — 다음 단계는 아직 준비 중입니다.</p>
</section>`;
}

/** `resolved_incorrect` / `resolved_unknown`: quoted incorrect parts + review-registration notice, no further input. */
function renderResolvedWrong(question: StudyQuestionView): string {
  const isUnknown = question.currentStep === "resolved_unknown";
  const verdictLabel = isUnknown ? "모름" : "유창하지만 틀림";
  const incorrectParts = question.latestAttempt?.incorrectParts ?? "";

  return `<h2>질문</h2>
<p class="study-question-prompt">${escapeHtml(question.promptText)}</p>
<section class="study-verdict study-verdict-wrong">
<h3>판정: ${escapeHtml(verdictLabel)}</h3>
${incorrectParts ? `<p class="study-incorrect-parts">${escapeHtml(incorrectParts)}</p>` : ""}
<p class="study-review-notice">복습 대상으로 등록되었습니다.</p>
</section>`;
}

/**
 * Shared answer form used by `awaiting_answer`/`awaiting_hint_retry`/
 * `awaiting_explanation_ack`. `requestId` is a fresh opaque per-render token
 * (`Math.random().toString(36)` — no crypto import needed for this; it only
 * needs to be unlikely to collide across the handful of forms a single user
 * renders, not cryptographically unguessable) so the backend can dedupe
 * double-submits per FR-028. A minimal inline script disables the submit
 * button on click to communicate the ~15-20s grading wait (contracts/
 * http-routes.md "권장" — not required, kept intentionally tiny).
 */
function renderAnswerForm(sessionId: number, questionId: number, label?: string): string {
  const requestId = Math.random().toString(36).slice(2);
  const formLabel = label ?? "답을 적어 주세요.";
  return `<form class="study-answer-form" method="post" action="/study/${sessionId}/questions/${questionId}/answer" onsubmit="var b=this.querySelector('button[type=submit]'); if(b){b.disabled=true; b.textContent='채점 중입니다...';} return true;">
<label for="study-answer-text">${escapeHtml(formLabel)}</label>
<textarea id="study-answer-text" name="submittedText" rows="4"></textarea>
<label class="study-dont-know">
<input type="checkbox" name="isDontKnow" value="true">
모르겠습니다
</label>
<input type="hidden" name="requestId" value="${escapeHtml(requestId)}">
<button type="submit">제출</button>
</form>`;
}
