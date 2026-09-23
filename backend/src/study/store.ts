/**
 * contracts/study-service-library.md's storage layer. `service.ts` is the
 * only caller. `study_answer_attempts` is INSERT-only everywhere in this
 * file (data-model.md's invariant) — there is no UPDATE statement anywhere
 * below that touches that table. `study_questions.current_step`/
 * `explanation_text`/`explanation_shown_at` ARE mutable (that is the whole
 * point of the state machine) via `updateQuestionProgress()` — the
 * insert-only invariant is scoped to `study_answer_attempts` alone, exactly
 * as data-model.md states it.
 */
import type { DatabaseSync } from "node:sqlite";
import { DEFAULT_STUDY_DB_PATH, openStudyDb } from "./db.js";
import type {
  AnswerAttempt,
  AnswerAttemptStatus,
  HintUsage,
  StudyQuestion,
  StudyQuestionKind,
  StudyQuestionStep,
  StudyQuestionView,
  StudySession,
  StudySessionView,
  StartPath,
} from "./types.js";

// ---------------------------------------------------------------------------
// study_sessions
// ---------------------------------------------------------------------------

export interface InsertSessionInput {
  path: StudySession["path"];
  targetLabel: string;
  targetMaterialId?: string | null;
  targetRoadmapId?: string | null;
  targetPhaseId?: string | null;
  targetItemId?: string | null;
  timezone: string;
  startedAt: string;
}

export function insertSession(input: InsertSessionInput, dbPath: string = DEFAULT_STUDY_DB_PATH): StudySession {
  const db = openStudyDb(dbPath);
  try {
    const result = db
      .prepare(
        `INSERT INTO study_sessions
           (path, target_label, target_material_id, target_roadmap_id, target_phase_id, target_item_id, timezone, started_at, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      )
      .run(
        input.path,
        input.targetLabel,
        input.targetMaterialId ?? null,
        input.targetRoadmapId ?? null,
        input.targetPhaseId ?? null,
        input.targetItemId ?? null,
        input.timezone,
        input.startedAt,
      );
    return {
      id: Number(result.lastInsertRowid),
      path: input.path,
      targetLabel: input.targetLabel,
      targetMaterialId: input.targetMaterialId ?? null,
      targetRoadmapId: input.targetRoadmapId ?? null,
      targetPhaseId: input.targetPhaseId ?? null,
      targetItemId: input.targetItemId ?? null,
      timezone: input.timezone,
      startedAt: input.startedAt,
      status: "active",
    };
  } finally {
    db.close();
  }
}

interface SessionRow {
  id: number;
  path: string;
  target_label: string;
  target_material_id: string | null;
  target_roadmap_id: string | null;
  target_phase_id: string | null;
  target_item_id: string | null;
  timezone: string;
  started_at: string;
  status: string;
}

function hydrateSession(row: SessionRow): StudySession {
  return {
    id: row.id,
    path: row.path as Exclude<StartPath, "auto">,
    targetLabel: row.target_label,
    targetMaterialId: row.target_material_id,
    targetRoadmapId: row.target_roadmap_id,
    targetPhaseId: row.target_phase_id,
    targetItemId: row.target_item_id,
    timezone: row.timezone,
    startedAt: row.started_at,
    status: "active",
  };
}

export function getSessionById(sessionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): StudySession | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db
      .prepare(
        "SELECT id, path, target_label, target_material_id, target_roadmap_id, target_phase_id, target_item_id, timezone, started_at, status FROM study_sessions WHERE id = ?",
      )
      .get(sessionId) as SessionRow | undefined;
    return row ? hydrateSession(row) : null;
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// study_questions
// ---------------------------------------------------------------------------

export interface InsertQuestionInput {
  sessionId: number;
  orderIndex: number;
  kind: StudyQuestionKind;
  promptText: string;
  conceptLabel?: string | null;
  /** Default `"awaiting_answer"` — a `"prior_knowledge"` question that resolves `hasMaterial:false` is created directly at `"awaiting_explanation_ack"` instead (FR-017). */
  currentStep?: StudyQuestionStep;
  explanationText?: string | null;
  explanationShownAt?: string | null;
  createdAt: string;
}

interface QuestionRow {
  id: number;
  session_id: number;
  order_index: number;
  kind: string;
  prompt_text: string;
  concept_label: string | null;
  current_step: string;
  explanation_text: string | null;
  explanation_shown_at: string | null;
  review_item_registered: number | null;
}

function hydrateQuestion(row: QuestionRow): StudyQuestion {
  return {
    id: row.id,
    sessionId: row.session_id,
    orderIndex: row.order_index,
    kind: row.kind as StudyQuestionKind,
    promptText: row.prompt_text,
    conceptLabel: row.concept_label,
    currentStep: row.current_step as StudyQuestionStep,
    explanationText: row.explanation_text,
    explanationShownAt: row.explanation_shown_at,
    reviewItemRegistered: row.review_item_registered === null ? null : row.review_item_registered === 1,
  };
}

const QUESTION_COLUMNS =
  "id, session_id, order_index, kind, prompt_text, concept_label, current_step, explanation_text, explanation_shown_at, review_item_registered";

export function insertQuestion(input: InsertQuestionInput, dbPath: string = DEFAULT_STUDY_DB_PATH): StudyQuestion {
  const db = openStudyDb(dbPath);
  try {
    const currentStep = input.currentStep ?? "awaiting_answer";
    const result = db
      .prepare(
        `INSERT INTO study_questions
           (session_id, order_index, kind, prompt_text, concept_label, current_step, explanation_text, explanation_shown_at, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        input.sessionId,
        input.orderIndex,
        input.kind,
        input.promptText,
        input.conceptLabel ?? null,
        currentStep,
        input.explanationText ?? null,
        input.explanationShownAt ?? null,
        input.createdAt,
      );
    return {
      id: Number(result.lastInsertRowid),
      sessionId: input.sessionId,
      orderIndex: input.orderIndex,
      kind: input.kind,
      promptText: input.promptText,
      conceptLabel: input.conceptLabel ?? null,
      currentStep,
      explanationText: input.explanationText ?? null,
      explanationShownAt: input.explanationShownAt ?? null,
      reviewItemRegistered: null,
    };
  } finally {
    db.close();
  }
}

export function getQuestionById(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): StudyQuestion | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db.prepare(`SELECT ${QUESTION_COLUMNS} FROM study_questions WHERE id = ?`).get(questionId) as
      | QuestionRow
      | undefined;
    return row ? hydrateQuestion(row) : null;
  } finally {
    db.close();
  }
}

export interface UpdateQuestionProgressInput {
  currentStep: StudyQuestionStep;
  explanationText?: string | null;
  explanationShownAt?: string | null;
  /** Set only when `currentStep` is `resolved_incorrect`/`resolved_unknown` — the real outcome of `registerReviewItem()`'s cache-mirror step (schema.ts's deviation note). */
  reviewItemRegistered?: boolean;
}

/**
 * Mutates a `study_questions` row's step (and, when transitioning into
 * `awaiting_explanation_ack`, its explanation fields, or when resolving to
 * incorrect/unknown, its `review_item_registered` outcome). This is NOT
 * covered by data-model.md's insert-only invariant — that invariant is
 * scoped to `study_answer_attempts` alone (a question's `current_step` is
 * exactly the mutable state the whole feature's state machine exists to
 * advance).
 */
export function updateQuestionProgress(
  questionId: number,
  input: UpdateQuestionProgressInput,
  dbPath: string = DEFAULT_STUDY_DB_PATH,
): void {
  const db = openStudyDb(dbPath);
  try {
    if (input.reviewItemRegistered !== undefined) {
      db.prepare("UPDATE study_questions SET current_step = ?, review_item_registered = ? WHERE id = ?").run(
        input.currentStep,
        input.reviewItemRegistered ? 1 : 0,
        questionId,
      );
      return;
    }
    if (input.explanationText !== undefined || input.explanationShownAt !== undefined) {
      db.prepare("UPDATE study_questions SET current_step = ?, explanation_text = ?, explanation_shown_at = ? WHERE id = ?").run(
        input.currentStep,
        input.explanationText ?? null,
        input.explanationShownAt ?? null,
        questionId,
      );
      return;
    }
    db.prepare("UPDATE study_questions SET current_step = ? WHERE id = ?").run(input.currentStep, questionId);
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// study_answer_attempts (INSERT-only — data-model.md's invariant)
// ---------------------------------------------------------------------------

export interface InsertAttemptInput {
  questionId: number;
  submittedText: string;
  isDontKnow: boolean;
  status: AnswerAttemptStatus;
  verdict?: AnswerAttempt["verdict"];
  correctParts?: string | null;
  incorrectParts?: string | null;
  submittedAt: string;
  gradedAt?: string | null;
  /** FR-028 dedup key — see `schema.ts`'s doc comment on the `request_id` column deviation. */
  requestId?: string | null;
}

interface AttemptRow {
  id: number;
  question_id: number;
  attempt_number: number;
  submitted_text: string;
  is_dont_know: number;
  status: string;
  verdict: string | null;
  correct_parts: string | null;
  incorrect_parts: string | null;
  submitted_at: string;
  graded_at: string | null;
}

const ATTEMPT_COLUMNS =
  "id, question_id, attempt_number, submitted_text, is_dont_know, status, verdict, correct_parts, incorrect_parts, submitted_at, graded_at";

function hydrateAttempt(row: AttemptRow): AnswerAttempt {
  return {
    id: row.id,
    questionId: row.question_id,
    attemptNumber: row.attempt_number,
    submittedText: row.submitted_text,
    isDontKnow: row.is_dont_know === 1,
    status: row.status as AnswerAttemptStatus,
    verdict: row.verdict as AnswerAttempt["verdict"],
    correctParts: row.correct_parts,
    incorrectParts: row.incorrect_parts,
    submittedAt: row.submitted_at,
    gradedAt: row.graded_at,
  };
}

/** Computes the next `attempt_number` and inserts exactly one new row — never an UPDATE (data-model.md's invariant; a retry is always a brand-new row with a new `attempt_number`, never a rewrite of a previous one). */
export function insertAttempt(input: InsertAttemptInput, dbPath: string = DEFAULT_STUDY_DB_PATH): AnswerAttempt {
  const db = openStudyDb(dbPath);
  try {
    const maxRow = db
      .prepare("SELECT MAX(attempt_number) AS maxAttempt FROM study_answer_attempts WHERE question_id = ?")
      .get(input.questionId) as { maxAttempt: number | null };
    const attemptNumber = (maxRow.maxAttempt ?? 0) + 1;

    const result = db
      .prepare(
        `INSERT INTO study_answer_attempts
           (question_id, attempt_number, submitted_text, is_dont_know, status, verdict, correct_parts, incorrect_parts, submitted_at, graded_at, request_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        input.questionId,
        attemptNumber,
        input.submittedText,
        input.isDontKnow ? 1 : 0,
        input.status,
        input.verdict ?? null,
        input.correctParts ?? null,
        input.incorrectParts ?? null,
        input.submittedAt,
        input.gradedAt ?? null,
        input.requestId ?? null,
      );

    return {
      id: Number(result.lastInsertRowid),
      questionId: input.questionId,
      attemptNumber,
      submittedText: input.submittedText,
      isDontKnow: input.isDontKnow,
      status: input.status,
      verdict: input.verdict ?? null,
      correctParts: input.correctParts ?? null,
      incorrectParts: input.incorrectParts ?? null,
      submittedAt: input.submittedAt,
      gradedAt: input.gradedAt ?? null,
    };
  } finally {
    db.close();
  }
}

export function getAttemptById(attemptId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): AnswerAttempt | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db.prepare(`SELECT ${ATTEMPT_COLUMNS} FROM study_answer_attempts WHERE id = ?`).get(attemptId) as
      | AttemptRow
      | undefined;
    return row ? hydrateAttempt(row) : null;
  } finally {
    db.close();
  }
}

export function getLatestAttempt(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): AnswerAttempt | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db
      .prepare(`SELECT ${ATTEMPT_COLUMNS} FROM study_answer_attempts WHERE question_id = ? ORDER BY attempt_number DESC LIMIT 1`)
      .get(questionId) as AttemptRow | undefined;
    return row ? hydrateAttempt(row) : null;
  } finally {
    db.close();
  }
}

/** FR-028: same `(questionId, requestId)` pair already handled -> return that prior result instead of grading again. */
export function findAttemptByRequestId(
  questionId: number,
  requestId: string,
  dbPath: string = DEFAULT_STUDY_DB_PATH,
): AnswerAttempt | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db
      .prepare(`SELECT ${ATTEMPT_COLUMNS} FROM study_answer_attempts WHERE question_id = ? AND request_id = ? LIMIT 1`)
      .get(questionId, requestId) as AttemptRow | undefined;
    return row ? hydrateAttempt(row) : null;
  } finally {
    db.close();
  }
}

export function countAttempts(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): number {
  const db = openStudyDb(dbPath);
  try {
    const row = db.prepare("SELECT COUNT(*) AS cnt FROM study_answer_attempts WHERE question_id = ?").get(questionId) as {
      cnt: number;
    };
    return row.cnt;
  } finally {
    db.close();
  }
}

/** `ai/grader.ts`'s `generateHint()` input `priorIncorrectAnswers` — every graded wrong/unknown submission so far, in submission order. */
export function listPriorIncorrectAnswers(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): string[] {
  const db = openStudyDb(dbPath);
  try {
    const rows = db
      .prepare(
        "SELECT submitted_text FROM study_answer_attempts WHERE question_id = ? AND status = 'graded' AND verdict IN ('fluent_but_wrong', 'unknown') ORDER BY attempt_number ASC",
      )
      .all(questionId) as Array<{ submitted_text: string }>;
    return rows.map((r) => r.submitted_text);
  } finally {
    db.close();
  }
}

// ---------------------------------------------------------------------------
// study_hint_usages
// ---------------------------------------------------------------------------

export function insertHint(hint: HintUsage, dbPath: string = DEFAULT_STUDY_DB_PATH): void {
  const db = openStudyDb(dbPath);
  try {
    db.prepare(
      "INSERT INTO study_hint_usages (question_id, hint_number, hint_text, created_at) VALUES (?, ?, ?, ?)",
    ).run(hint.questionId, hint.hintNumber, hint.hintText, hint.createdAt);
  } finally {
    db.close();
  }
}

export function countHints(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): number {
  const db = openStudyDb(dbPath);
  try {
    const row = db.prepare("SELECT COUNT(*) AS cnt FROM study_hint_usages WHERE question_id = ?").get(questionId) as {
      cnt: number;
    };
    return row.cnt;
  } finally {
    db.close();
  }
}

function listHintTexts(db: DatabaseSync, questionId: number): string[] {
  const rows = db
    .prepare("SELECT hint_text FROM study_hint_usages WHERE question_id = ? ORDER BY hint_number ASC")
    .all(questionId) as Array<{ hint_text: string }>;
  return rows.map((r) => r.hint_text);
}

// ---------------------------------------------------------------------------
// Read-model hydration (contracts/study-service-library.md)
// ---------------------------------------------------------------------------

function toQuestionView(db: DatabaseSync, question: QuestionRow): StudyQuestionView {
  const hintsGiven = listHintTexts(db, question.id);
  const latestAttemptRow = db
    .prepare(
      `SELECT id, status, verdict, correct_parts, incorrect_parts FROM study_answer_attempts WHERE question_id = ? ORDER BY attempt_number DESC LIMIT 1`,
    )
    .get(question.id) as
    | { id: number; status: string; verdict: string | null; correct_parts: string | null; incorrect_parts: string | null }
    | undefined;

  return {
    questionId: question.id,
    promptText: question.prompt_text,
    currentStep: question.current_step as StudyQuestionStep,
    hintsGiven,
    explanation: question.explanation_text,
    latestAttempt: latestAttemptRow
      ? {
          id: latestAttemptRow.id,
          status: latestAttemptRow.status as AnswerAttemptStatus,
          verdict: latestAttemptRow.verdict as AnswerAttempt["verdict"],
          correctParts: latestAttemptRow.correct_parts,
          incorrectParts: latestAttemptRow.incorrect_parts,
        }
      : null,
  };
}

/** Single-question hydration for `service.ts` (e.g. right after advancing one question's step), avoiding a full session re-read. */
export function getQuestionView(questionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): StudyQuestionView | null {
  const db = openStudyDb(dbPath);
  try {
    const row = db.prepare(`SELECT ${QUESTION_COLUMNS} FROM study_questions WHERE id = ?`).get(questionId) as
      | QuestionRow
      | undefined;
    return row ? toQuestionView(db, row) : null;
  } finally {
    db.close();
  }
}

/** contracts/study-service-library.md `getSessionView()`. `null` for a nonexistent session (never throws — FR-007/spec.md Edge Cases: "임의의 세션 데이터를 대신 보여주지 않는다"). */
export function getSessionView(sessionId: number, dbPath: string = DEFAULT_STUDY_DB_PATH): StudySessionView | null {
  const db = openStudyDb(dbPath);
  try {
    const sessionRow = db
      .prepare("SELECT id, path, target_label FROM study_sessions WHERE id = ?")
      .get(sessionId) as { id: number; path: string; target_label: string } | undefined;
    if (!sessionRow) {
      return null;
    }

    const questionRows = db
      .prepare(`SELECT ${QUESTION_COLUMNS} FROM study_questions WHERE session_id = ? ORDER BY order_index ASC`)
      .all(sessionId) as unknown as QuestionRow[];

    return {
      sessionId: sessionRow.id,
      path: sessionRow.path as Exclude<StartPath, "auto">,
      targetLabel: sessionRow.target_label,
      questions: questionRows.map((row) => toQuestionView(db, row)),
    };
  } finally {
    db.close();
  }
}
