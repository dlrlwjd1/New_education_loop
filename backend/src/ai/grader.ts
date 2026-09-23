/**
 * contracts/ai-grading-contract.md — the five functions this repository ever
 * calls to talk to AI. `study/service.ts` (and everything else) only ever
 * imports from here, never from `claudeProcess.ts`/`promptBuilder.ts`
 * directly (research.md §7 — this is the boundary QA mocks to test
 * everything else deterministically).
 *
 * FR-022: `--json-schema` already constrains the CLI's output shape, but
 * every function here re-validates the parsed result against the exact
 * allowed enum/type before returning `{status:"graded"}` — anything else
 * (including a technically-valid-JSON-but-wrong-enum-value response) is
 * treated the same as any other AI failure, `{status:"retry_needed"}`.
 */
import { runClaudeJson } from "./claudeProcess.js";
import {
  STUDY_AI_SYSTEM_PROMPT,
  buildAssessPriorKnowledgePrompt,
  buildGenerateExplanationPrompt,
  buildGenerateHintPrompt,
  buildGenerateRetrievalQuestionPrompt,
  buildGradeAnswerPrompt,
} from "./promptBuilder.js";
import type {
  AiCallResult,
  AssessPriorKnowledgeInput,
  AssessPriorKnowledgeOutput,
  GenerateExplanationInput,
  GenerateExplanationOutput,
  GenerateHintInput,
  GenerateHintOutput,
  GenerateRetrievalQuestionInput,
  GenerateRetrievalQuestionOutput,
  GradeAnswerInput,
  GradeAnswerOutput,
  GradingVerdict,
} from "./types.js";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isGradingVerdict(value: unknown): value is GradingVerdict {
  return value === "correct" || value === "fluent_but_wrong" || value === "unknown";
}

const RETRIEVAL_QUESTION_SCHEMA = {
  type: "object",
  properties: {
    questionText: { type: "string" },
    conceptLabel: { type: "string" },
  },
  required: ["questionText", "conceptLabel"],
  additionalProperties: false,
};

const PRIOR_KNOWLEDGE_SCHEMA = {
  type: "object",
  properties: {
    hasMaterial: { type: "boolean" },
  },
  required: ["hasMaterial"],
  additionalProperties: false,
};

const GRADE_ANSWER_SCHEMA = {
  type: "object",
  properties: {
    verdict: { type: "string", enum: ["correct", "fluent_but_wrong", "unknown"] },
    correctParts: { type: "string" },
    incorrectParts: { type: "string" },
  },
  required: ["verdict", "correctParts", "incorrectParts"],
  additionalProperties: false,
};

const HINT_SCHEMA = {
  type: "object",
  properties: {
    hintText: { type: "string" },
  },
  required: ["hintText"],
  additionalProperties: false,
};

const EXPLANATION_SCHEMA = {
  type: "object",
  properties: {
    explanationText: { type: "string" },
  },
  required: ["explanationText"],
  additionalProperties: false,
};

/** contracts/ai-grading-contract.md `generateRetrievalQuestion()`. */
export async function generateRetrievalQuestion(
  input: GenerateRetrievalQuestionInput,
): Promise<AiCallResult<GenerateRetrievalQuestionOutput>> {
  const prompt = buildGenerateRetrievalQuestionPrompt(input);
  const result = await runClaudeJson<GenerateRetrievalQuestionOutput>(
    prompt,
    RETRIEVAL_QUESTION_SCHEMA,
    STUDY_AI_SYSTEM_PROMPT,
  );
  if (result.status !== "graded") {
    return result;
  }
  if (!isNonEmptyString(result.questionText) || !isNonEmptyString(result.conceptLabel)) {
    return { status: "retry_needed", reason: "generateRetrievalQuestion 응답이 허용된 형식이 아님" };
  }
  return { status: "graded", questionText: result.questionText, conceptLabel: result.conceptLabel };
}

/** contracts/ai-grading-contract.md `assessPriorKnowledge()`. */
export async function assessPriorKnowledge(
  input: AssessPriorKnowledgeInput,
): Promise<AiCallResult<AssessPriorKnowledgeOutput>> {
  const prompt = buildAssessPriorKnowledgePrompt(input);
  const result = await runClaudeJson<AssessPriorKnowledgeOutput>(prompt, PRIOR_KNOWLEDGE_SCHEMA, STUDY_AI_SYSTEM_PROMPT);
  if (result.status !== "graded") {
    return result;
  }
  if (typeof result.hasMaterial !== "boolean") {
    return { status: "retry_needed", reason: "assessPriorKnowledge 응답이 허용된 형식이 아님" };
  }
  return { status: "graded", hasMaterial: result.hasMaterial };
}

/**
 * contracts/ai-grading-contract.md `gradeAnswer()`. `isDontKnow: true` never
 * calls the AI at all (contract's stated optimization — the verdict is
 * already self-evident, and this also saves a real `claude -p` call, and its
 * cost, on every "모르겠습니다" click).
 */
export async function gradeAnswer(input: GradeAnswerInput): Promise<AiCallResult<GradeAnswerOutput>> {
  if (input.isDontKnow) {
    return { status: "graded", verdict: "unknown", correctParts: "", incorrectParts: "" };
  }

  const prompt = buildGradeAnswerPrompt(input);
  const result = await runClaudeJson<GradeAnswerOutput>(prompt, GRADE_ANSWER_SCHEMA, STUDY_AI_SYSTEM_PROMPT);
  if (result.status !== "graded") {
    return result;
  }
  if (
    !isGradingVerdict(result.verdict) ||
    typeof result.correctParts !== "string" ||
    typeof result.incorrectParts !== "string"
  ) {
    return { status: "retry_needed", reason: "gradeAnswer 응답이 허용된 형식이 아님" };
  }
  return {
    status: "graded",
    verdict: result.verdict,
    correctParts: result.correctParts,
    incorrectParts: result.incorrectParts,
  };
}

/** contracts/ai-grading-contract.md `generateHint()`. */
export async function generateHint(input: GenerateHintInput): Promise<AiCallResult<GenerateHintOutput>> {
  const prompt = buildGenerateHintPrompt(input);
  const result = await runClaudeJson<GenerateHintOutput>(prompt, HINT_SCHEMA, STUDY_AI_SYSTEM_PROMPT);
  if (result.status !== "graded") {
    return result;
  }
  if (!isNonEmptyString(result.hintText)) {
    return { status: "retry_needed", reason: "generateHint 응답이 허용된 형식이 아님" };
  }
  return { status: "graded", hintText: result.hintText };
}

/** contracts/ai-grading-contract.md `generateExplanation()`. */
export async function generateExplanation(
  input: GenerateExplanationInput,
): Promise<AiCallResult<GenerateExplanationOutput>> {
  const prompt = buildGenerateExplanationPrompt(input);
  const result = await runClaudeJson<GenerateExplanationOutput>(prompt, EXPLANATION_SCHEMA, STUDY_AI_SYSTEM_PROMPT);
  if (result.status !== "graded") {
    return result;
  }
  if (!isNonEmptyString(result.explanationText)) {
    return { status: "retry_needed", reason: "generateExplanation 응답이 허용된 형식이 아님" };
  }
  return { status: "graded", explanationText: result.explanationText };
}
