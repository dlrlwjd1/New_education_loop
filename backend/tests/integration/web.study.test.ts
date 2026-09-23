import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import type { StudySessionView, StudyQuestionView } from "../../src/study/types.js";

// T015 (US1) + T027 (US2) + T034 (US4), written independently from
// contracts/http-routes.md and FR-024/SC-001/SC-006/SC-005/spec.md Edge
// Cases (NOT from reading routes/study.ts's implementation body beyond the
// module import list needed to mock the right boundary). Per the task's
// explicit instruction, the mocking boundary is study/service.ts and
// study/targetResolver.ts -- the only two modules routes/study.ts calls
// (contracts/http-routes.md's own stated boundary) -- so no real SQLite file
// is ever touched by this file.

vi.mock("../../src/study/service.js", () => ({
  startSession: vi.fn(),
  submitAnswer: vi.fn(),
  retryGrading: vi.fn(),
  getSessionView: vi.fn(),
  findSessionIdForAttempt: vi.fn(),
}));
vi.mock("../../src/study/targetResolver.js", () => ({
  resolveStartTarget: vi.fn(),
}));

import { startSession, submitAnswer, getSessionView } from "../../src/study/service.js";
import { resolveStartTarget } from "../../src/study/targetResolver.js";
import { createApp } from "../../src/web/server.js";

function question(overrides: Partial<StudyQuestionView> = {}): StudyQuestionView {
  return {
    questionId: 1,
    promptText: "지금 아는 것을 적어 주세요.",
    currentStep: "awaiting_answer",
    hintsGiven: [],
    explanation: null,
    latestAttempt: null,
    ...overrides,
  };
}

function sessionView(overrides: Partial<StudySessionView> = {}): StudySessionView {
  return {
    sessionId: 42,
    path: "topic",
    targetLabel: "TCP 3-way handshake",
    questions: [question()],
    ...overrides,
  };
}

beforeEach(() => {
  vi.mocked(startSession).mockReset();
  vi.mocked(submitAnswer).mockReset();
  vi.mocked(getSessionView).mockReset();
  vi.mocked(resolveStartTarget).mockReset();
});

describe("GET /study/new (T015)", () => {
  it("200s", async () => {
    const res = await request(createApp()).get("/study/new");
    expect(res.status).toBe(200);
  });
});

describe("POST /study/start (T015/T034)", () => {
  it("kind:resolved (topic path) -> 303 redirect to /study/:sessionId", async () => {
    vi.mocked(resolveStartTarget).mockReturnValue({
      kind: "resolved",
      path: "topic",
      targetLabel: "TCP 3-way handshake",
    });
    vi.mocked(startSession).mockReturnValue({
      id: 7,
      path: "topic",
      targetLabel: "TCP 3-way handshake",
      targetMaterialId: null,
      targetRoadmapId: null,
      targetPhaseId: null,
      targetItemId: null,
      timezone: "Asia/Seoul",
      startedAt: "2026-09-23T00:00:00.000Z",
      status: "active",
    });

    const res = await request(createApp()).post("/study/start").type("form").send({ freeText: "TCP 3-way handshake" });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe("/study/7");
  });

  it("kind:ambiguous -> 200, no redirect", async () => {
    vi.mocked(resolveStartTarget).mockReturnValue({
      kind: "ambiguous",
      candidates: [
        { path: "topic", label: "네트워크" },
        { path: "roadmap_continue", label: "네트워크 서비스 로드맵", roadmapId: "r1" },
      ],
    });
    const res = await request(createApp()).post("/study/start").type("form").send({ freeText: "네트워크" });
    expect(res.status).toBe(200);
    expect(res.text).toContain("네트워크 서비스 로드맵");
  });

  it("kind:auto_suggestions -> 200, no redirect", async () => {
    vi.mocked(resolveStartTarget).mockReturnValue({
      kind: "auto_suggestions",
      dueReviewCount: 2,
      inProgressRoadmaps: [{ roadmapId: "r1", title: "진행중로드맵" }],
      candidateRoadmaps: [],
    });
    const res = await request(createApp()).post("/study/start").type("form").send({});
    expect(res.status).toBe(200);
    expect(res.text).toContain("진행중로드맵");
  });

  it("kind:not_found -> 200, no redirect (FR-026, material path)", async () => {
    vi.mocked(resolveStartTarget).mockReturnValue({ kind: "not_found", reason: "등록되지 않은 자료 id입니다." });
    const res = await request(createApp()).post("/study/start").type("form").send({ materialId: "nonexistent" });
    expect(res.status).toBe(200);
    expect(res.text).toContain("등록되지 않은 자료");
  });

  it("kind:resolved (material path, T034) -> 303, and the material's title reaches the redirected session view as a prior-knowledge prompt", async () => {
    vi.mocked(resolveStartTarget).mockReturnValue({
      kind: "resolved",
      path: "material",
      targetLabel: "실제 자료 제목",
      materialId: "mat-1",
    });
    vi.mocked(startSession).mockReturnValue({
      id: 9,
      path: "material",
      targetLabel: "실제 자료 제목",
      targetMaterialId: "mat-1",
      targetRoadmapId: null,
      targetPhaseId: null,
      targetItemId: null,
      timezone: "Asia/Seoul",
      startedAt: "2026-09-23T00:00:00.000Z",
      status: "active",
    });
    const res = await request(createApp()).post("/study/start").type("form").send({ materialId: "mat-1" });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe("/study/9");

    vi.mocked(getSessionView).mockReturnValue(
      sessionView({
        sessionId: 9,
        path: "material",
        targetLabel: "실제 자료 제목",
        questions: [question({ promptText: '"실제 자료 제목" 자료를 기준으로, 지금 아는 것을 적어 주세요.' })],
      }),
    );
    const sessionRes = await request(createApp()).get("/study/9");
    expect(sessionRes.status).toBe(200);
    expect(sessionRes.text).toContain("실제 자료 제목");
  });
});

describe("GET /study/:sessionId (T015)", () => {
  it("200 for a real session", async () => {
    vi.mocked(getSessionView).mockReturnValue(sessionView());
    const res = await request(createApp()).get("/study/42");
    expect(res.status).toBe(200);
  });

  it("404 for a nonexistent session", async () => {
    vi.mocked(getSessionView).mockReturnValue(null);
    const res = await request(createApp()).get("/study/999999");
    expect(res.status).toBe(404);
  });

  it("404 for a non-numeric session id (never a fabricated view, SC-007)", async () => {
    const res = await request(createApp()).get("/study/not-a-number");
    expect(res.status).toBe(404);
    expect(vi.mocked(getSessionView)).not.toHaveBeenCalled();
  });

  it(
    "a fresh awaiting_answer question's HTML contains NO verdict/hint/explanation strings anywhere " +
      "(FR-024/SC-001/SC-006 -- the single most safety-critical assertion in this feature)",
    async () => {
      vi.mocked(getSessionView).mockReturnValue(
        sessionView({
          questions: [
            question({
              currentStep: "awaiting_answer",
              hintsGiven: [],
              explanation: null,
              latestAttempt: null,
            }),
          ],
        }),
      );
      const res = await request(createApp()).get("/study/42");
      expect(res.status).toBe(200);

      // Generic section labels that ONLY ever appear in non-fresh branches
      // (hint/explanation/verdict rendering) of renderStudySessionPage --
      // their total absence here is the structural proof no such content
      // leaked into a fresh question's screen.
      expect(res.text).not.toContain("힌트");
      expect(res.text).not.toContain("설명");
      expect(res.text).not.toContain("판정");
      expect(res.text).not.toContain("맞음");
      expect(res.text).not.toContain("유창하지만 틀림");
      expect(res.text).not.toContain("모름");
      expect(res.text).not.toContain("복습 대상으로 등록");
    },
  );
});

describe("POST /study/:sessionId/questions/:questionId/answer (T015)", () => {
  it("submitting to a questionId that exists but belongs to a DIFFERENT session -> 404, not misrouted", async () => {
    vi.mocked(getSessionView).mockReturnValue(sessionView({ sessionId: 42, questions: [question({ questionId: 1 })] }));
    const res = await request(createApp())
      .post("/study/42/questions/999/answer")
      .type("form")
      .send({ submittedText: "답변", isDontKnow: "" });
    expect(res.status).toBe(404);
    expect(vi.mocked(submitAnswer)).not.toHaveBeenCalled();
  });

  it("a valid answer submission -> 303 redirect back to the session view", async () => {
    vi.mocked(getSessionView).mockReturnValue(sessionView({ sessionId: 42, questions: [question({ questionId: 1 })] }));
    vi.mocked(submitAnswer).mockResolvedValue({
      outcome: "correct",
      question: question({ currentStep: "resolved_correct" }),
    });
    const res = await request(createApp())
      .post("/study/42/questions/1/answer")
      .type("form")
      .send({ submittedText: "답변입니다", isDontKnow: "" });
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe("/study/42");
  });
});

describe("GET /study/:sessionId - refresh preserves hint state (T027, SC-005)", () => {
  it("refetching after a hint was given shows the SAME hint count/content, not reset", async () => {
    const hintedQuestion = question({
      promptText: "TCP 3-way handshake가 왜 3단계인지 설명하시오.",
      currentStep: "awaiting_hint_retry",
      hintsGiven: ["첫 번째 힌트 내용"],
    });
    vi.mocked(getSessionView).mockReturnValue(sessionView({ questions: [hintedQuestion] }));

    const firstRes = await request(createApp()).get("/study/42");
    expect(firstRes.status).toBe(200);
    expect(firstRes.text).toContain("첫 번째 힌트 내용");
    const firstHintCount = (firstRes.text.match(/첫 번째 힌트 내용/g) ?? []).length;

    // Simulate a browser refresh: same GET again, service layer returns the
    // identical persisted view (no new hint call happened in between).
    const secondRes = await request(createApp()).get("/study/42");
    expect(secondRes.status).toBe(200);
    expect(secondRes.text).toContain("첫 번째 힌트 내용");
    const secondHintCount = (secondRes.text.match(/첫 번째 힌트 내용/g) ?? []).length;
    expect(secondHintCount).toBe(firstHintCount);
    expect(secondRes.text).toContain("지금까지 받은 힌트"); // still on the hint-retry branch, not reset to a fresh question
  });
});
