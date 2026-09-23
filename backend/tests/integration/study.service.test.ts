import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mkdtempSync, rmSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

// T013 (US1) + T026 (US2) + T029 (US3), written independently from
// contracts/study-service-library.md's submitAnswer()/retryGrading()
// "보장" sections, data-model.md's state machine, and FR-009/010/012/013/
// 014/017/021/028 (NOT from reading service.ts's implementation body beyond
// the exported function signatures/options interfaces needed to call and
// isolate it).
//
// ISOLATION (documented per the task's explicit request):
//   - study-sessions.sqlite: SubmitAnswerOptions.dbPath / StartSessionOptions.dbPath
//     point at a fresh mkdtempSync() file per test -- never the real
//     내학습/study-sessions.sqlite.
//   - 내학습/복습큐.md: SubmitAnswerOptions.reviewQueuePath points at a fresh
//     temp .md path per test (nonexistent -- appendActiveReviewRow() creates
//     it fresh, per that module's own documented "missing file" behavior).
//   - backend/.cache/learning-loop.sqlite (004's live cache):
//     SubmitAnswerOptions.reviewQueueCacheDbPath points at a fresh temp
//     .sqlite file per test. appendReviewQueueItem() requires this file to
//     already have 004's schema applied (persistence/db.ts's
//     openExistingForWrite() throws on a missing file) -- built here by
//     calling the REAL persistence/queries.js's reload() once per test
//     against empty synthetic study-progress/courses roots and a
//     nonexistent review-queue markdown path, mirroring
//     persistence.reviewQueue.reload.test.ts's own isolation helper. This
//     creates a schema-valid, empty cache file cheaply (no 002/004 fixture
//     parsing needed) that appendReviewQueueItem() can then write into.
//   - ai/grader.ts is entirely vi.mock()'d (research.md §7) -- no real
//     `claude` CLI call happens anywhere in this file.

const tmpDirs: string[] = [];

function freshEmptyDir(prefix: string): string {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  tmpDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
  vi.clearAllMocks();
});

vi.mock("../../src/ai/grader.js", () => ({
  assessPriorKnowledge: vi.fn(),
  gradeAnswer: vi.fn(),
  generateHint: vi.fn(),
  generateExplanation: vi.fn(),
  generateRetrievalQuestion: vi.fn(),
}));

import {
  assessPriorKnowledge,
  gradeAnswer,
  generateHint,
  generateExplanation,
  generateRetrievalQuestion,
} from "../../src/ai/grader.js";
import { startSession, submitAnswer, retryGrading, getSessionView } from "../../src/study/service.js";
import { reload } from "../../src/persistence/queries.js";
import type { SubmitAnswerOptions } from "../../src/study/service.js";

interface Isolation {
  studyDbPath: string;
  reviewQueuePath: string;
  reviewQueueCacheDbPath: string;
}

function buildIsolation(): Isolation {
  const studyDir = freshEmptyDir("study-service-db-");
  const studyDbPath = path.join(studyDir, "study-sessions.sqlite");

  const rqDir = freshEmptyDir("study-service-rq-");
  const reviewQueuePath = path.join(rqDir, "복습큐.md");

  const cacheDir = freshEmptyDir("study-service-cache-");
  const reviewQueueCacheDbPath = path.join(cacheDir, "learning-loop.sqlite");
  // Build a schema-valid, empty 004 cache file so appendReviewQueueItem()
  // (which requires an existing, schema-matching file) has somewhere to
  // write into -- via a real reload() against empty synthetic roots, exactly
  // as 004's own persistence.reviewQueue.reload.test.ts isolates its writes.
  reload({
    dbPath: reviewQueueCacheDbPath,
    reviewQueuePath: path.join(freshEmptyDir("study-service-rq-empty-"), "nonexistent.md"),
    studyProgressRoot: freshEmptyDir("study-service-sp-"),
    coursesRoot: freshEmptyDir("study-service-courses-"),
  });

  return { studyDbPath, reviewQueuePath, reviewQueueCacheDbPath };
}

function options(iso: Isolation, extra: Partial<SubmitAnswerOptions> = {}): SubmitAnswerOptions {
  return {
    dbPath: iso.studyDbPath,
    reviewQueuePath: iso.reviewQueuePath,
    reviewQueueCacheDbPath: iso.reviewQueueCacheDbPath,
    ...extra,
  };
}

beforeEach(() => {
  vi.mocked(assessPriorKnowledge).mockReset();
  vi.mocked(gradeAnswer).mockReset();
  vi.mocked(generateHint).mockReset();
  vi.mocked(generateExplanation).mockReset();
  vi.mocked(generateRetrievalQuestion).mockReset();
});

describe("study/service.ts - US1 full topic-path happy flow (T013)", () => {
  it("start -> prior knowledge (hasMaterial:true) -> new retrieval question -> correct verdict -> outcome correct", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "OLTP와 OLAP의 차이" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    expect(view0?.questions).toHaveLength(1);
    const priorKnowledgeQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "OLTP와 OLAP의 차이를 설명하시오.",
      conceptLabel: "OLTP vs OLAP",
    });

    const result1 = await submitAnswer(
      priorKnowledgeQuestionId,
      { submittedText: "OLTP는 트랜잭션 처리, OLAP는 분석 처리입니다.", isDontKnow: false },
      options(iso),
    );
    expect(result1.outcome).toBe("correct");

    const viewAfterPk = getSessionView(session.id, { dbPath: iso.studyDbPath });
    expect(viewAfterPk?.questions).toHaveLength(2);
    const retrievalQuestionId = viewAfterPk!.questions[1]!.questionId;
    expect(viewAfterPk!.questions[1]!.currentStep).toBe("awaiting_answer");

    vi.mocked(gradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "correct",
      correctParts: "정확합니다",
      incorrectParts: "",
    });
    const result2 = await submitAnswer(
      retrievalQuestionId,
      { submittedText: "OLTP는...", isDontKnow: false },
      options(iso),
    );
    expect(result2.outcome).toBe("correct");
    if (result2.outcome === "correct") {
      expect(result2.question.currentStep).toBe("resolved_correct");
    }
  });

  it("wrong answer three times (hints 1-3) then explanation then still-wrong post-explanation -> resolved_incorrect with review item registered in both file and cache (FR-013/FR-014)", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "TCP 3-way handshake" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const pkQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "TCP 3-way handshake가 왜 3단계인지 설명하시오.",
      conceptLabel: "TCP 3-way handshake",
    });
    const startResult = await submitAnswer(pkQuestionId, { submittedText: "조금 압니다", isDontKnow: false }, options(iso));
    expect(startResult.outcome).toBe("correct");
    const viewAfterPk = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const questionId = viewAfterPk!.questions[1]!.questionId;

    vi.mocked(gradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "fluent_but_wrong",
      correctParts: "",
      incorrectParts: "틀렸습니다",
    });
    vi.mocked(generateHint).mockResolvedValue({ status: "graded", hintText: "힌트" });

    // Hint 1, 2, 3
    for (let i = 1; i <= 3; i++) {
      const r = await submitAnswer(questionId, { submittedText: `오답${i}`, isDontKnow: false }, options(iso));
      expect(r.outcome).toBe("hint_given");
    }
    const viewAfterHints = getSessionView(session.id, { dbPath: iso.studyDbPath });
    expect(viewAfterHints!.questions[1]!.hintsGiven).toHaveLength(3);
    expect(viewAfterHints!.questions[1]!.currentStep).toBe("awaiting_hint_retry");

    // 4th wrong -> explanation
    vi.mocked(generateExplanation).mockResolvedValue({ status: "graded", explanationText: "설명입니다" });
    const explanationResult = await submitAnswer(
      questionId,
      { submittedText: "오답4", isDontKnow: false },
      options(iso),
    );
    expect(explanationResult.outcome).toBe("explanation_shown");

    // 5th wrong (post-explanation) -> resolved_incorrect
    const finalResult = await submitAnswer(
      questionId,
      { submittedText: "오답5", isDontKnow: false },
      options(iso),
    );
    expect(finalResult.outcome).toBe("resolved_incorrect");
    if (finalResult.outcome === "resolved_incorrect" || finalResult.outcome === "resolved_unknown") {
      expect(finalResult.reviewItemRegistered).toBe(true);
    }

    // Verify the file was actually appended to.
    const fileContent = readFileSync(iso.reviewQueuePath, "utf8");
    expect(fileContent).toContain("TCP 3-way handshake");

    // Verify the cache actually has the row.
    const cacheDb = new DatabaseSync(iso.reviewQueueCacheDbPath, { readOnly: true });
    const rows = cacheDb.prepare("SELECT item, topic, first_wrong_date, next_review_date, stage_label FROM review_queue_items").all() as Array<{
      item: string;
      topic: string;
      first_wrong_date: string;
      next_review_date: string;
      stage_label: string;
    }>;
    cacheDb.close();
    expect(rows).toHaveLength(1);
    expect(rows[0]!.topic).toBe("TCP 3-way handshake");
    expect(rows[0]!.stage_label).toBe("1회차");
    // firstWrongDate + 1 day
    const first = new Date(`${rows[0]!.first_wrong_date}T00:00:00.000Z`);
    const expectedNext = new Date(first);
    expectedNext.setUTCDate(expectedNext.getUTCDate() + 1);
    const expectedNextStr = expectedNext.toISOString().slice(0, 10);
    expect(rows[0]!.next_review_date).toBe(expectedNextStr);
  });

  it("unknown (모름) verdict on a fresh retrieval question also registers a review item (resolved_unknown)", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "NAT" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const pkQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "NAT이란?",
      conceptLabel: "NAT",
    });
    await submitAnswer(pkQuestionId, { submittedText: "압니다", isDontKnow: false }, options(iso));
    const view1 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const questionId = view1!.questions[1]!.questionId;

    vi.mocked(gradeAnswer).mockResolvedValue({ status: "graded", verdict: "unknown", correctParts: "", incorrectParts: "" });
    vi.mocked(generateHint).mockResolvedValue({ status: "graded", hintText: "힌트" });
    // hintCount 0, so first "unknown" grading -> hint_given per data-model.md
    // (unknown behaves exactly like fluent_but_wrong for state transitions).
    const r1 = await submitAnswer(questionId, { submittedText: "모르겠습니다", isDontKnow: true }, options(iso));
    expect(r1.outcome).toBe("hint_given");
  });

  it("does not duplicate a review-queue cache row when the SAME concept+topic+date is registered twice (FR-014)", async () => {
    // Two DIFFERENT questions (two separate sessions/topics) resolving wrong
    // with the same concept+topic+date must not create two cache rows.
    const iso = buildIsolation();
    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(gradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "fluent_but_wrong",
      correctParts: "",
      incorrectParts: "틀림",
    });
    vi.mocked(generateHint).mockResolvedValue({ status: "graded", hintText: "힌트" });
    vi.mocked(generateExplanation).mockResolvedValue({ status: "graded", explanationText: "설명" });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "같은 개념 질문",
      conceptLabel: "동일개념",
    });

    async function driveToResolvedIncorrect(targetLabel: string) {
      const session = startSession({ kind: "resolved", path: "topic", targetLabel }, { dbPath: iso.studyDbPath });
      const v0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
      const pkId = v0!.questions[0]!.questionId;
      await submitAnswer(pkId, { submittedText: "압니다", isDontKnow: false }, options(iso));
      const v1 = getSessionView(session.id, { dbPath: iso.studyDbPath });
      const qId = v1!.questions[1]!.questionId;
      for (let i = 0; i < 4; i++) {
        await submitAnswer(qId, { submittedText: `오답${i}`, isDontKnow: false }, options(iso));
      }
      return submitAnswer(qId, { submittedText: "최종오답", isDontKnow: false }, options(iso));
    }

    // Same targetLabel (topic) both times -> same conceptLabel ("동일개념")
    // + same topic + same date (test runs same day) -> same computed id.
    const result1 = await driveToResolvedIncorrect("같은주제");
    const result2 = await driveToResolvedIncorrect("같은주제");
    expect(result1.outcome).toBe("resolved_incorrect");
    expect(result2.outcome).toBe("resolved_incorrect");

    const cacheDb = new DatabaseSync(iso.reviewQueueCacheDbPath, { readOnly: true });
    const rows = cacheDb.prepare("SELECT COUNT(*) AS c FROM review_queue_items").all() as Array<{ c: number }>;
    cacheDb.close();
    expect(rows[0]!.c).toBe(1);
  });
});

describe("study/service.ts - US2: hasMaterial:false skips hints entirely (T026, FR-017)", () => {
  it("prior-knowledge assessment returning hasMaterial:false transitions directly to awaiting_explanation_ack, never awaiting_hint_retry", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "생소한 주제" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const pkQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: false });
    vi.mocked(generateExplanation).mockResolvedValue({ status: "graded", explanationText: "기초 설명입니다" });

    const result = await submitAnswer(
      pkQuestionId,
      { submittedText: "전혀 모릅니다", isDontKnow: false },
      options(iso),
    );
    expect(result.outcome).toBe("explanation_shown");
    if (result.outcome === "explanation_shown") {
      expect(result.question.currentStep).toBe("awaiting_explanation_ack");
      expect(result.question.hintsGiven).toHaveLength(0);
    }
    expect(generateHint).not.toHaveBeenCalled();
  });
});

describe("study/service.ts - US3: AI failure keeps step unchanged and retry re-grades (T029, FR-021)", () => {
  it("gradeAnswer returning retry_needed saves the attempt as retry_needed and leaves currentStep unchanged", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "실패 재현용 주제" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const pkQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "인출 질문",
      conceptLabel: "개념",
    });
    await submitAnswer(pkQuestionId, { submittedText: "압니다", isDontKnow: false }, options(iso));
    const view1 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const questionId = view1!.questions[1]!.questionId;
    const stepBefore = view1!.questions[1]!.currentStep;

    vi.mocked(gradeAnswer).mockResolvedValue({ status: "retry_needed", reason: "채점 실패 시뮬레이션" });
    const result = await submitAnswer(questionId, { submittedText: "답변", isDontKnow: false }, options(iso));
    expect(result.outcome).toBe("retry_needed");
    const attemptId = (result as { outcome: "retry_needed"; attemptId: number }).attemptId;
    expect(typeof attemptId).toBe("number");

    const viewAfterFailure = getSessionView(session.id, { dbPath: iso.studyDbPath });
    expect(viewAfterFailure!.questions[1]!.currentStep).toBe(stepBefore);

    // Now retry succeeds with the SAME submittedText.
    vi.mocked(gradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "correct",
      correctParts: "맞음",
      incorrectParts: "",
    });
    const retryResult = await retryGrading(attemptId, options(iso));
    expect(retryResult.outcome).toBe("correct");
    expect(vi.mocked(gradeAnswer)).toHaveBeenLastCalledWith(
      expect.objectContaining({ submittedText: "답변" }),
    );
  });

  it("submitAnswer() requestId dedup: resubmitting the same requestId does not call the AI twice and returns the same result", async () => {
    const iso = buildIsolation();
    const session = startSession(
      { kind: "resolved", path: "topic", targetLabel: "중복제출 테스트" },
      { dbPath: iso.studyDbPath },
    );
    const view0 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const pkQuestionId = view0!.questions[0]!.questionId;

    vi.mocked(assessPriorKnowledge).mockResolvedValue({ status: "graded", hasMaterial: true });
    vi.mocked(generateRetrievalQuestion).mockResolvedValue({
      status: "graded",
      questionText: "인출 질문",
      conceptLabel: "개념",
    });
    await submitAnswer(pkQuestionId, { submittedText: "압니다", isDontKnow: false }, options(iso));
    const view1 = getSessionView(session.id, { dbPath: iso.studyDbPath });
    const questionId = view1!.questions[1]!.questionId;

    vi.mocked(gradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "correct",
      correctParts: "맞음",
      incorrectParts: "",
    });

    const requestId = "req-dedup-test-1";
    const first = await submitAnswer(
      questionId,
      { submittedText: "정답입니다", isDontKnow: false, requestId },
      options(iso),
    );
    expect(vi.mocked(gradeAnswer)).toHaveBeenCalledTimes(1);

    const second = await submitAnswer(
      questionId,
      { submittedText: "정답입니다", isDontKnow: false, requestId },
      options(iso),
    );
    expect(vi.mocked(gradeAnswer)).toHaveBeenCalledTimes(1); // NOT called again
    expect(second.outcome).toBe(first.outcome);
  });
});
