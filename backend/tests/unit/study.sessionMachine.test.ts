import { describe, it, expect } from "vitest";
import { computeNextStep } from "../../src/study/sessionMachine.js";
import type { StudyQuestionStep } from "../../src/study/types.js";

// T003 (Foundational), written independently from data-model.md's question-
// level state machine table (§"질문 단위 상태 기계") -- NOT from reading
// sessionMachine.ts's implementation body beyond the exported function
// signature needed to call it. Exhaustively covers every transition row in
// that table plus the FR-017/FR-021/idempotence guarantees called out in
// spec.md and contracts/study-service-library.md.

const NON_RESOLVED_STEPS: StudyQuestionStep[] = ["awaiting_answer", "awaiting_hint_retry", "awaiting_explanation_ack"];
const RESOLVED_STEPS: StudyQuestionStep[] = ["resolved_correct", "resolved_incorrect", "resolved_unknown"];

describe("computeNextStep() - correct verdict always resolves (data-model.md)", () => {
  for (const currentStep of NON_RESOLVED_STEPS) {
    it(`from ${currentStep}, a "correct" verdict -> resolved_correct, action none`, () => {
      const result = computeNextStep({
        currentStep,
        event: { kind: "graded", verdict: "correct" },
        hintCount: 0,
      });
      expect(result).toEqual({ nextStep: "resolved_correct", action: "none" });
    });
  }
});

describe("computeNextStep() - wrong/unknown before hint cap (awaiting_answer/awaiting_hint_retry)", () => {
  for (const currentStep of ["awaiting_answer", "awaiting_hint_retry"] as StudyQuestionStep[]) {
    for (const verdict of ["fluent_but_wrong", "unknown"] as const) {
      for (const hintCount of [0, 1, 2]) {
        it(`from ${currentStep}, verdict=${verdict}, hintCount=${hintCount} -> awaiting_hint_retry, action give_hint`, () => {
          const result = computeNextStep({
            currentStep,
            event: { kind: "graded", verdict },
            hintCount,
          });
          expect(result).toEqual({ nextStep: "awaiting_hint_retry", action: "give_hint" });
        });
      }

      it(`from ${currentStep}, verdict=${verdict}, hintCount=3 -> awaiting_explanation_ack, action show_explanation`, () => {
        const result = computeNextStep({
          currentStep,
          event: { kind: "graded", verdict },
          hintCount: 3,
        });
        expect(result).toEqual({ nextStep: "awaiting_explanation_ack", action: "show_explanation" });
      });
    }
  }
});

describe("computeNextStep() - post-explanation re-grade (awaiting_explanation_ack)", () => {
  it("wrong -> resolved_incorrect, action none", () => {
    const result = computeNextStep({
      currentStep: "awaiting_explanation_ack",
      event: { kind: "graded", verdict: "fluent_but_wrong" },
      hintCount: 3,
    });
    expect(result).toEqual({ nextStep: "resolved_incorrect", action: "none" });
  });

  it("unknown -> resolved_unknown, action none", () => {
    const result = computeNextStep({
      currentStep: "awaiting_explanation_ack",
      event: { kind: "graded", verdict: "unknown" },
      hintCount: 3,
    });
    expect(result).toEqual({ nextStep: "resolved_unknown", action: "none" });
  });

  it("correct -> resolved_correct, action none", () => {
    const result = computeNextStep({
      currentStep: "awaiting_explanation_ack",
      event: { kind: "graded", verdict: "correct" },
      hintCount: 3,
    });
    expect(result).toEqual({ nextStep: "resolved_correct", action: "none" });
  });
});

describe("computeNextStep() - ai_failure leaves step unchanged from every non-resolved step (FR-021)", () => {
  for (const currentStep of NON_RESOLVED_STEPS) {
    it(`from ${currentStep}, ai_failure -> unchanged step, action none`, () => {
      const result = computeNextStep({
        currentStep,
        event: { kind: "ai_failure" },
        hintCount: 1,
      });
      expect(result).toEqual({ nextStep: currentStep, action: "none" });
    });
  }
});

describe("computeNextStep() - prior_knowledge_assessed (FR-017)", () => {
  it("hasMaterial:true -> resolved_correct, action none", () => {
    const result = computeNextStep({
      currentStep: "awaiting_answer",
      event: { kind: "prior_knowledge_assessed", hasMaterial: true },
      hintCount: 0,
    });
    expect(result).toEqual({ nextStep: "resolved_correct", action: "none" });
  });

  it('hasMaterial:false -> awaiting_explanation_ack, action show_explanation (hints skipped entirely)', () => {
    const result = computeNextStep({
      currentStep: "awaiting_answer",
      event: { kind: "prior_knowledge_assessed", hasMaterial: false },
      hintCount: 0,
    });
    expect(result).toEqual({ nextStep: "awaiting_explanation_ack", action: "show_explanation" });
  });
});

describe("computeNextStep() - idempotent once resolved (defensive, data-model.md 'more not proceed')", () => {
  for (const currentStep of RESOLVED_STEPS) {
    it(`from ${currentStep}, a graded event -> unchanged, action none`, () => {
      const result = computeNextStep({
        currentStep,
        event: { kind: "graded", verdict: "correct" },
        hintCount: 0,
      });
      expect(result).toEqual({ nextStep: currentStep, action: "none" });
    });

    it(`from ${currentStep}, ai_failure -> unchanged, action none`, () => {
      const result = computeNextStep({
        currentStep,
        event: { kind: "ai_failure" },
        hintCount: 0,
      });
      expect(result).toEqual({ nextStep: currentStep, action: "none" });
    });

    it(`from ${currentStep}, prior_knowledge_assessed -> unchanged, action none`, () => {
      const result = computeNextStep({
        currentStep,
        event: { kind: "prior_knowledge_assessed", hasMaterial: true },
        hintCount: 0,
      });
      expect(result).toEqual({ nextStep: currentStep, action: "none" });
    });
  }
});
