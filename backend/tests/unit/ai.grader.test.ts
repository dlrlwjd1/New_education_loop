import { describe, it, expect, vi, beforeEach } from "vitest";

// T012 (US1), written independently from contracts/ai-grading-contract.md's
// per-function "보장" sections and its "공통 실패 형태" (NOT from reading
// grader.ts's implementation body beyond the exported function signatures
// needed to call them). Mocks claudeProcess.ts's runClaudeJson() (the only
// dependency these five functions have) to verify: each function passes a
// JSON-schema whose `required` fields match its contract-documented output
// shape, retry_needed passes through unchanged (not reinterpreted), and
// gradeAnswer's isDontKnow:true short-circuits without calling the AI at
// all.

vi.mock("../../src/ai/claudeProcess.js", () => ({
  runClaudeJson: vi.fn(),
}));

import { runClaudeJson } from "../../src/ai/claudeProcess.js";
import {
  generateRetrievalQuestion,
  assessPriorKnowledge,
  gradeAnswer,
  generateHint,
  generateExplanation,
} from "../../src/ai/grader.js";

beforeEach(() => {
  vi.mocked(runClaudeJson).mockReset();
});

describe("generateRetrievalQuestion()", () => {
  it("calls runClaudeJson with a schema requiring questionText/conceptLabel", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({
      status: "graded",
      questionText: "질문 내용",
      conceptLabel: "개념",
    } as never);
    const result = await generateRetrievalQuestion({
      path: "topic",
      targetLabel: "주제",
      priorKnowledgeNote: "압니다",
    });
    expect(result).toEqual({ status: "graded", questionText: "질문 내용", conceptLabel: "개념" });

    const [, schema] = vi.mocked(runClaudeJson).mock.calls[0]!;
    expect((schema as { required: string[] }).required).toEqual(
      expect.arrayContaining(["questionText", "conceptLabel"]),
    );
  });

  it("passes through retry_needed unchanged", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "retry_needed", reason: "타임아웃" });
    const result = await generateRetrievalQuestion({
      path: "topic",
      targetLabel: "주제",
      priorKnowledgeNote: "압니다",
    });
    expect(result).toEqual({ status: "retry_needed", reason: "타임아웃" });
  });
});

describe("assessPriorKnowledge()", () => {
  it("calls runClaudeJson with a schema requiring hasMaterial (boolean)", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "graded", hasMaterial: true } as never);
    const result = await assessPriorKnowledge({ targetLabel: "주제", userNote: "압니다" });
    expect(result).toEqual({ status: "graded", hasMaterial: true });

    const [, schema] = vi.mocked(runClaudeJson).mock.calls[0]!;
    expect((schema as { required: string[] }).required).toEqual(expect.arrayContaining(["hasMaterial"]));
  });

  it("passes through retry_needed unchanged", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "retry_needed", reason: "파싱 실패" });
    const result = await assessPriorKnowledge({ targetLabel: "주제", userNote: "압니다" });
    expect(result).toEqual({ status: "retry_needed", reason: "파싱 실패" });
  });
});

describe("gradeAnswer()", () => {
  it("isDontKnow:true short-circuits to verdict:'unknown' WITHOUT calling runClaudeJson at all", async () => {
    const result = await gradeAnswer({
      questionText: "질문",
      submittedText: "모르겠습니다",
      isDontKnow: true,
    });
    expect(result).toEqual({ status: "graded", verdict: "unknown", correctParts: "", incorrectParts: "" });
    expect(runClaudeJson).not.toHaveBeenCalled();
  });

  it("isDontKnow:false calls runClaudeJson with a schema requiring verdict/correctParts/incorrectParts", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({
      status: "graded",
      verdict: "correct",
      correctParts: "맞음",
      incorrectParts: "",
    } as never);
    const result = await gradeAnswer({
      questionText: "질문",
      submittedText: "답변",
      isDontKnow: false,
    });
    expect(result).toEqual({ status: "graded", verdict: "correct", correctParts: "맞음", incorrectParts: "" });
    expect(runClaudeJson).toHaveBeenCalledTimes(1);

    const [, schema] = vi.mocked(runClaudeJson).mock.calls[0]!;
    expect((schema as { required: string[] }).required).toEqual(
      expect.arrayContaining(["verdict", "correctParts", "incorrectParts"]),
    );
  });

  it("passes through retry_needed unchanged when isDontKnow is false", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "retry_needed", reason: "종료 코드 1" });
    const result = await gradeAnswer({
      questionText: "질문",
      submittedText: "답변",
      isDontKnow: false,
    });
    expect(result).toEqual({ status: "retry_needed", reason: "종료 코드 1" });
  });

  it("an out-of-enum verdict from runClaudeJson is treated as retry_needed (FR-022 server-side re-validation), not passed through", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({
      status: "graded",
      verdict: "definitely_correct_i_promise",
      correctParts: "x",
      incorrectParts: "y",
    } as never);
    const result = await gradeAnswer({
      questionText: "질문",
      submittedText: "답변",
      isDontKnow: false,
    });
    expect(result.status).toBe("retry_needed");
  });
});

describe("generateHint()", () => {
  it("calls runClaudeJson with a schema requiring hintText", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "graded", hintText: "힌트 내용" } as never);
    const result = await generateHint({
      questionText: "질문",
      priorIncorrectAnswers: [],
      hintNumber: 1,
    });
    expect(result).toEqual({ status: "graded", hintText: "힌트 내용" });

    const [, schema] = vi.mocked(runClaudeJson).mock.calls[0]!;
    expect((schema as { required: string[] }).required).toEqual(expect.arrayContaining(["hintText"]));
  });

  it("passes through retry_needed unchanged", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "retry_needed", reason: "실패" });
    const result = await generateHint({
      questionText: "질문",
      priorIncorrectAnswers: [],
      hintNumber: 1,
    });
    expect(result).toEqual({ status: "retry_needed", reason: "실패" });
  });
});

describe("generateExplanation()", () => {
  it("calls runClaudeJson with a schema requiring explanationText", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "graded", explanationText: "설명 내용" } as never);
    const result = await generateExplanation({ questionText: "질문" });
    expect(result).toEqual({ status: "graded", explanationText: "설명 내용" });

    const [, schema] = vi.mocked(runClaudeJson).mock.calls[0]!;
    expect((schema as { required: string[] }).required).toEqual(expect.arrayContaining(["explanationText"]));
  });

  it("passes through retry_needed unchanged", async () => {
    vi.mocked(runClaudeJson).mockResolvedValue({ status: "retry_needed", reason: "실패" });
    const result = await generateExplanation({ questionText: "질문" });
    expect(result).toEqual({ status: "retry_needed", reason: "실패" });
  });
});
