import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

// T043 (Polish): verifies the functions contracts/ai-grading-contract.md and
// contracts/study-service-library.md name exist with the parameter counts/
// shapes those documents describe, mirroring 001/002/004/005's
// contractConformance.*.test.ts pattern. This is a structural check, not a
// behavior re-test (that's covered by ai.grader.test.ts/study.service.test.ts).

vi.mock("../../src/ai/claudeProcess.js", () => ({ runClaudeJson: vi.fn() }));
vi.mock("../../src/ai/grader.js", () => ({
  assessPriorKnowledge: vi.fn(),
  gradeAnswer: vi.fn(),
  generateHint: vi.fn(),
  generateExplanation: vi.fn(),
  generateRetrievalQuestion: vi.fn(),
}));

import { startSession, submitAnswer, retryGrading, getSessionView } from "../../src/study/service.js";
import {
  assessPriorKnowledge as realAssessPriorKnowledge,
  gradeAnswer as realGradeAnswer,
} from "../../src/ai/grader.js";

const tmpDirs: string[] = [];

function freshDbPath(): string {
  const dir = mkdtempSync(path.join(tmpdir(), "study-contract-"));
  tmpDirs.push(dir);
  return path.join(dir, "study-sessions.sqlite");
}

afterEach(() => {
  while (tmpDirs.length > 0) {
    const dir = tmpDirs.pop() as string;
    rmSync(dir, { recursive: true, force: true });
  }
  vi.clearAllMocks();
});

describe("contract conformance: contracts/ai-grading-contract.md (T043)", () => {
  it("all five functions exist and are 1-argument (input) functions returning a Promise", async () => {
    const real = await vi.importActual<typeof import("../../src/ai/grader.js")>("../../src/ai/grader.js");
    expect(typeof real.generateRetrievalQuestion).toBe("function");
    expect(typeof real.assessPriorKnowledge).toBe("function");
    expect(typeof real.gradeAnswer).toBe("function");
    expect(typeof real.generateHint).toBe("function");
    expect(typeof real.generateExplanation).toBe("function");
    for (const fn of [
      real.generateRetrievalQuestion,
      real.assessPriorKnowledge,
      real.gradeAnswer,
      real.generateHint,
      real.generateExplanation,
    ]) {
      expect(fn.length).toBe(1);
    }
  });

  it("runClaudeJson(prompt, jsonSchema, systemPrompt) exists as a 3-argument function", async () => {
    const { runClaudeJson: real } = await vi.importActual<typeof import("../../src/ai/claudeProcess.js")>(
      "../../src/ai/claudeProcess.js",
    );
    expect(typeof real).toBe("function");
    expect(real.length).toBe(3);
  });
});

describe("contract conformance: contracts/study-service-library.md (T043)", () => {
  beforeEach(() => {
    vi.mocked(realAssessPriorKnowledge).mockReset();
    vi.mocked(realGradeAnswer).mockReset();
  });

  it("startSession(target, options?) exists and returns a StudySession with every documented field", () => {
    expect(typeof startSession).toBe("function");
    const dbPath = freshDbPath();
    const session = startSession({ kind: "resolved", path: "topic", targetLabel: "계약 확인용 주제" }, { dbPath });

    expect(session).toHaveProperty("id");
    expect(session).toHaveProperty("path");
    expect(session).toHaveProperty("targetLabel");
    expect(session).toHaveProperty("targetMaterialId");
    expect(session).toHaveProperty("targetRoadmapId");
    expect(session).toHaveProperty("targetPhaseId");
    expect(session).toHaveProperty("targetItemId");
    expect(session).toHaveProperty("timezone");
    expect(session).toHaveProperty("startedAt");
    expect(session).toHaveProperty("status");
  });

  it("getSessionView(sessionId, options?) exists, returns null for a nonexistent id, and the documented shape for a real one", () => {
    expect(typeof getSessionView).toBe("function");
    const dbPath = freshDbPath();
    expect(getSessionView(999999, { dbPath })).toBeNull();

    const session = startSession({ kind: "resolved", path: "topic", targetLabel: "계약 확인용 주제2" }, { dbPath });
    const view = getSessionView(session.id, { dbPath });
    expect(view).not.toBeNull();
    expect(view).toHaveProperty("sessionId");
    expect(view).toHaveProperty("path");
    expect(view).toHaveProperty("targetLabel");
    expect(view).toHaveProperty("questions");
    expect(Array.isArray(view!.questions)).toBe(true);
    const q = view!.questions[0]!;
    expect(q).toHaveProperty("questionId");
    expect(q).toHaveProperty("promptText");
    expect(q).toHaveProperty("currentStep");
    expect(q).toHaveProperty("hintsGiven");
    expect(q).toHaveProperty("explanation");
    expect(q).toHaveProperty("latestAttempt");
  });

  it("submitAnswer(questionId, submission, options?) exists and returns a SubmitAnswerResult with an 'outcome' field", async () => {
    expect(typeof submitAnswer).toBe("function");
    const dbPath = freshDbPath();
    const session = startSession({ kind: "resolved", path: "topic", targetLabel: "계약 확인용 주제3" }, { dbPath });
    const view = getSessionView(session.id, { dbPath })!;
    const questionId = view.questions[0]!.questionId;

    vi.mocked(realAssessPriorKnowledge).mockResolvedValue({ status: "retry_needed", reason: "구조 확인용" });
    const result = await submitAnswer(questionId, { submittedText: "답", isDontKnow: false }, { dbPath });
    expect(result).toHaveProperty("outcome");
    expect(result.outcome).toBe("retry_needed");
  });

  it("retryGrading(attemptId, options?) exists and returns a SubmitAnswerResult with an 'outcome' field", async () => {
    expect(typeof retryGrading).toBe("function");
    const dbPath = freshDbPath();
    const session = startSession({ kind: "resolved", path: "topic", targetLabel: "계약 확인용 주제4" }, { dbPath });
    const view = getSessionView(session.id, { dbPath })!;
    const questionId = view.questions[0]!.questionId;

    vi.mocked(realAssessPriorKnowledge).mockResolvedValue({ status: "retry_needed", reason: "재시도 구조 확인용" });
    const failed = await submitAnswer(questionId, { submittedText: "답", isDontKnow: false }, { dbPath });
    expect(failed.outcome).toBe("retry_needed");
    const attemptId = (failed as { attemptId: number }).attemptId;

    // The retry re-grades via gradeAnswer() (not assessPriorKnowledge()) --
    // service.ts routes a "prior_knowledge" question through
    // assessPriorKnowledge() only on its very first attempt (see
    // sessionMachine.ts's module doc); the attempt just saved above already
    // consumed that first-attempt slot.
    vi.mocked(realGradeAnswer).mockResolvedValue({
      status: "graded",
      verdict: "correct",
      correctParts: "확인용",
      incorrectParts: "",
    });
    const retried = await retryGrading(attemptId, { dbPath });
    expect(retried).toHaveProperty("outcome");
  });
});
