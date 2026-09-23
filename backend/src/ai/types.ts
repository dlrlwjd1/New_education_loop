/**
 * TypeScript types for specs/006-study-core-loop/contracts/ai-grading-contract.md.
 *
 * `backend/src/ai/grader.ts` is the ONLY place in this repository that calls
 * the `claude` CLI. Every other module (including `study/service.ts`) only
 * ever sees these types — never a child process, a prompt string, or a raw
 * CLI response (research.md §7: this boundary is what lets QA mock away AI
 * entirely and test everything else deterministically).
 */

/**
 * Every AI call in this feature converges failures (timeout, non-zero exit,
 * unparseable JSON, missing `structured_output`, or a verdict outside the
 * allowed enum) to the same shape (research.md §6) — callers never need to
 * distinguish *why* a call failed, only that it did.
 */
export type AiCallResult<T> = ({ status: "graded" } & T) | { status: "retry_needed"; reason: string };

export type GradingVerdict = "correct" | "fluent_but_wrong" | "unknown";

export interface GenerateRetrievalQuestionInput {
  path: "topic" | "material";
  targetLabel: string;
  /** Present when `path === "material"` — the material's body, already read by 002/004. */
  materialContext?: string;
  /** The user's answer to "지금 아는 것을 적어 주세요". */
  priorKnowledgeNote: string;
}

export interface GenerateRetrievalQuestionOutput {
  /** Exactly one question (FR-008 — never a list). */
  questionText: string;
  /** Short concept label — reused verbatim as the review item's "항목" field if this question is later answered wrong (FR-013). */
  conceptLabel: string;
}

export interface AssessPriorKnowledgeInput {
  targetLabel: string;
  materialContext?: string;
  userNote: string;
}

export interface AssessPriorKnowledgeOutput {
  /** `false` is FR-017's "재료가 전혀 없다" — the caller skips hints entirely and goes straight to explanation. */
  hasMaterial: boolean;
}

export interface GradeAnswerInput {
  questionText: string;
  materialContext?: string;
  submittedText: string;
  /** `true` short-circuits to `{status:"graded", verdict:"unknown", ...}` without calling the AI (contract's stated optimization). */
  isDontKnow: boolean;
}

export interface GradeAnswerOutput {
  verdict: GradingVerdict;
  /** Must quote the student's own wording where relevant (FR-012). */
  correctParts: string;
  incorrectParts: string;
}

export interface GenerateHintInput {
  questionText: string;
  materialContext?: string;
  priorIncorrectAnswers: string[];
  hintNumber: 1 | 2 | 3;
}

export interface GenerateHintOutput {
  hintText: string;
}

export interface GenerateExplanationInput {
  questionText: string;
  materialContext?: string;
}

export interface GenerateExplanationOutput {
  explanationText: string;
}
