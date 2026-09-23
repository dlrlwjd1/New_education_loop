/**
 * TypeScript types for specs/006-study-core-loop/data-model.md and
 * contracts/study-service-library.md.
 *
 * Written up front (before backend/frontend implementation) so both agents
 * work from the same shared shapes without waiting on each other — the same
 * pattern 003 and 005 already used successfully in this repository.
 */

/** data-model.md's question-level state machine (`study/sessionMachine.ts` is the only place that computes transitions between these). */
export type StudyQuestionStep =
  | "awaiting_answer"
  | "awaiting_hint_retry"
  | "awaiting_explanation_ack"
  | "resolved_correct"
  | "resolved_incorrect"
  | "resolved_unknown";

export type StudyQuestionKind = "prior_knowledge" | "retrieval";

export type StartPath = "topic" | "material" | "roadmap_continue" | "auto";

export interface StudySession {
  id: number;
  path: Exclude<StartPath, "auto">;
  targetLabel: string;
  targetMaterialId: string | null;
  targetRoadmapId: string | null;
  targetPhaseId: string | null;
  targetItemId: string | null;
  timezone: string;
  startedAt: string;
  status: "active";
}

export interface StudyQuestion {
  id: number;
  sessionId: number;
  orderIndex: number;
  kind: StudyQuestionKind;
  promptText: string;
  conceptLabel: string | null;
  currentStep: StudyQuestionStep;
  explanationText: string | null;
  explanationShownAt: string | null;
  /**
   * `null` until this question resolves to `resolved_incorrect`/
   * `resolved_unknown`; then the actual outcome of `registerReviewItem()`'s
   * cache-mirror step (the file write always succeeds first and is not
   * separately tracked — only the cache mirror can fail, e.g. if 004's cache
   * hasn't been loaded yet). Read back by `toSubmitAnswerResult()` instead of
   * assumed `true` (found during QA review, schema.ts documents the deviation).
   */
  reviewItemRegistered: boolean | null;
}

export type AnswerAttemptStatus = "graded" | "retry_needed";

export interface AnswerAttempt {
  id: number;
  questionId: number;
  attemptNumber: number;
  submittedText: string;
  isDontKnow: boolean;
  status: AnswerAttemptStatus;
  verdict: "correct" | "fluent_but_wrong" | "unknown" | null;
  correctParts: string | null;
  incorrectParts: string | null;
  submittedAt: string;
  gradedAt: string | null;
}

export interface HintUsage {
  questionId: number;
  hintNumber: 1 | 2 | 3;
  hintText: string;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// contracts/study-service-library.md — service-layer input/output shapes
// ---------------------------------------------------------------------------

export interface ResolveStartTargetInput {
  freeText?: string;
  explicitPath?: StartPath;
  materialId?: string;
  roadmapId?: string;
}

export interface ResolvedTarget {
  kind: "resolved";
  path: Exclude<StartPath, "auto">;
  targetLabel: string;
  materialId?: string;
  roadmapId?: string;
  phaseId?: string;
  itemId?: string;
}

export interface AmbiguousTarget {
  kind: "ambiguous";
  candidates: Array<{
    path: Exclude<StartPath, "auto">;
    label: string;
    materialId?: string;
    roadmapId?: string;
  }>;
}

export interface AutoSuggestions {
  kind: "auto_suggestions";
  dueReviewCount: number;
  inProgressRoadmaps: Array<{ roadmapId: string; title: string }>;
  candidateRoadmaps: Array<{ roadmapId: string; title: string }>;
}

export interface TargetNotFound {
  kind: "not_found";
  reason: string;
}

export type ResolveTargetResult = ResolvedTarget | AmbiguousTarget | AutoSuggestions | TargetNotFound;

export interface StartSessionOptions {
  timezone?: string;
  now?: Date;
  dbPath?: string;
}

export interface AnswerSubmission {
  submittedText: string;
  isDontKnow: boolean;
  requestId?: string;
}

export type SubmitAnswerResult =
  | { outcome: "retry_needed"; attemptId: number }
  | { outcome: "correct"; question: StudyQuestionView }
  | { outcome: "hint_given"; question: StudyQuestionView; hint: string }
  | { outcome: "explanation_shown"; question: StudyQuestionView; explanation: string }
  | {
      outcome: "resolved_incorrect" | "resolved_unknown";
      question: StudyQuestionView;
      reviewItemRegistered: boolean;
    };

export interface StudyQuestionView {
  questionId: number;
  promptText: string;
  currentStep: StudyQuestionStep;
  hintsGiven: string[];
  explanation: string | null;
  latestAttempt: {
    /**
     * Deviation from contracts/study-service-library.md's literal
     * `StudyQuestionView.latestAttempt` shape (which lists only
     * status/verdict/correctParts/incorrectParts): added so
     * `web/routes/study.ts` can build `POST /study/answers/:attemptId/retry`'s
     * action URL without a separate lookup. Found during frontend/backend
     * reconciliation — `web/views/studySession.ts` needed this id and had no
     * other way to get it (documented in that file's `renderRetryNeeded` doc
     * comment before this field existed).
     */
    id: number;
    status: AnswerAttemptStatus;
    verdict: AnswerAttempt["verdict"];
    correctParts: string | null;
    incorrectParts: string | null;
  } | null;
}

export interface StudySessionView {
  sessionId: number;
  path: Exclude<StartPath, "auto">;
  targetLabel: string;
  questions: StudyQuestionView[];
}
