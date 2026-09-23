/**
 * data-model.md's ENTIRE question-level state machine, as one pure function.
 * No AI dependency, no I/O — `service.ts` is the only caller, and it is
 * responsible for turning this function's output into actual side effects
 * (generating a hint/explanation, persisting the new step, registering a
 * review item). QA can test every branch of data-model.md's table here
 * without mocking anything (research.md §7).
 *
 * ## How the two AI outcomes map onto ONE state table
 *
 * data-model.md's table is written as if a single "질문" only ever receives
 * grading events, but this feature's first question of every session (kind
 * `"prior_knowledge"`) is answered via `assessPriorKnowledge()`
 * (`hasMaterial: boolean`), not `gradeAnswer()` (`verdict`). This function
 * models that as a third event kind (`prior_knowledge_assessed`) alongside
 * `graded`/`ai_failure`, applied to whichever row is currently
 * `awaiting_answer`:
 *
 *   - `hasMaterial: true` -> `resolved_correct`. This closes the
 *     prior-knowledge question itself (it never receives a second attempt);
 *     `service.ts` reacts to this specific case by creating the session's
 *     next question (kind `"retrieval"`, starting fresh at
 *     `awaiting_answer`) rather than treating it as "done, nothing more to
 *     do" the way a real correct retrieval answer is treated (FR-011's
 *     elaboration transition is out of this feature's scope, so THAT case
 *     really does just stop here).
 *   - `hasMaterial: false` -> `awaiting_explanation_ack` (FR-017 — hints are
 *     skipped entirely). This reuses the SAME row: `service.ts` generates an
 *     explanation for it immediately, and the student's next answer to this
 *     same question is graded via `gradeAnswer()` (its `kind` field stays
 *     `"prior_knowledge"`, but after this point it behaves exactly like a
 *     retrieval question for grading purposes — `service.ts`'s doc comment
 *     on `gradeAndAdvance()` explains the routing rule this implies:
 *     `assessPriorKnowledge()` is only ever used for a `"prior_knowledge"`
 *     question's very FIRST attempt).
 *
 * This is an interpretive decision this feature's design docs leave
 * implicit — data-model.md's table only spells out the `hasMaterial: false`
 * branch explicitly (as "사전지식 확인에서 '재료 없음' 판정 →
 * awaiting_explanation_ack"). Flagged here and in the implementation report.
 */
import type { GradingVerdict, StudyQuestionStep } from "./types.js";

export type SessionMachineEvent =
  | { kind: "ai_failure" }
  | { kind: "prior_knowledge_assessed"; hasMaterial: boolean }
  | { kind: "graded"; verdict: GradingVerdict; correctParts?: string; incorrectParts?: string };

export type SessionMachineAction = "none" | "give_hint" | "show_explanation";

export interface ComputeNextStepInput {
  currentStep: StudyQuestionStep;
  event: SessionMachineEvent;
  /** Hints already given on this question BEFORE this event (0-3). Only consulted for a wrong/unknown `graded` event outside `awaiting_explanation_ack`. */
  hintCount: number;
}

export interface ComputeNextStepResult {
  nextStep: StudyQuestionStep;
  /** What `service.ts` must do to actually deliver this transition — `"give_hint"`/`"show_explanation"` mean it must call the matching `ai/grader.ts` function and persist the result before the step change is complete. */
  action: SessionMachineAction;
}

const RESOLVED_STEPS: ReadonlySet<StudyQuestionStep> = new Set([
  "resolved_correct",
  "resolved_incorrect",
  "resolved_unknown",
]);

/**
 * contracts/study-service-library.md's `submitAnswer()` "보장": "이 함수가
 *이 기능의 유일한 상태 전이 지점이다" — this is that function.
 */
export function computeNextStep(input: ComputeNextStepInput): ComputeNextStepResult {
  const { currentStep, event, hintCount } = input;

  // Defensive/total: a resolved question never moves again within this
  // feature's scope (data-model.md — "종결 상태… 더 진행하지 않음"), whatever
  // event arrives. `service.ts` should never call this once a question is
  // already resolved, but this makes the function safe (and idempotent) even
  // if it does.
  if (RESOLVED_STEPS.has(currentStep)) {
    return { nextStep: currentStep, action: "none" };
  }

  // research.md §6 / FR-021: ANY AI failure leaves the step completely
  // unchanged — only the individual attempt itself is marked retry_needed,
  // by the caller, not here.
  if (event.kind === "ai_failure") {
    return { nextStep: currentStep, action: "none" };
  }

  if (event.kind === "prior_knowledge_assessed") {
    return event.hasMaterial
      ? { nextStep: "resolved_correct", action: "none" }
      : { nextStep: "awaiting_explanation_ack", action: "show_explanation" };
  }

  // event.kind === "graded" from here on.
  if (event.verdict === "correct") {
    return { nextStep: "resolved_correct", action: "none" };
  }

  // verdict is "fluent_but_wrong" | "unknown" from here.
  if (currentStep === "awaiting_explanation_ack") {
    // Post-explanation re-grade (data-model.md's third block) is final for
    // this feature's scope — F05 (further elaboration/spaced repetition
    // beyond this point) is out of scope.
    return {
      nextStep: event.verdict === "unknown" ? "resolved_unknown" : "resolved_incorrect",
      action: "none",
    };
  }

  // currentStep is "awaiting_answer" or "awaiting_hint_retry" here.
  if (hintCount >= 3) {
    return { nextStep: "awaiting_explanation_ack", action: "show_explanation" };
  }
  return { nextStep: "awaiting_hint_retry", action: "give_hint" };
}
