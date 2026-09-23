import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";

// T030 (US3), written independently from contracts/http-routes.md's
// `POST /study/answers/:attemptId/retry` section (NOT from reading
// routes/study.ts's implementation body beyond the module import list
// needed to mock the right boundary: study/service.ts, per the contract's
// stated "라우트는 오직 호출자다").

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

import { retryGrading, findSessionIdForAttempt } from "../../src/study/service.js";
import { createApp } from "../../src/web/server.js";

beforeEach(() => {
  vi.mocked(retryGrading).mockReset();
  vi.mocked(findSessionIdForAttempt).mockReset();
});

describe("POST /study/answers/:attemptId/retry (T030)", () => {
  it("a real attempt->question->session chain redirects (303) to that attempt's session", async () => {
    vi.mocked(findSessionIdForAttempt).mockReturnValue(123);
    vi.mocked(retryGrading).mockResolvedValue({
      outcome: "correct",
      question: {
        questionId: 5,
        promptText: "질문",
        currentStep: "resolved_correct",
        hintsGiven: [],
        explanation: null,
        latestAttempt: null,
      },
    });

    const res = await request(createApp()).post("/study/answers/77/retry");
    expect(res.status).toBe(303);
    expect(res.headers.location).toBe("/study/123");
    expect(vi.mocked(retryGrading)).toHaveBeenCalledWith(77);
  });

  it("a nonexistent attemptId -> 404", async () => {
    vi.mocked(findSessionIdForAttempt).mockReturnValue(null);

    const res = await request(createApp()).post("/study/answers/999999/retry");
    expect(res.status).toBe(404);
    expect(vi.mocked(retryGrading)).not.toHaveBeenCalled();
  });

  it("a non-numeric attemptId -> 404", async () => {
    const res = await request(createApp()).post("/study/answers/not-a-number/retry");
    expect(res.status).toBe(404);
    expect(vi.mocked(findSessionIdForAttempt)).not.toHaveBeenCalled();
  });
});
