/**
 * contracts/ai-grading-contract.md's "서브프로세스 계약" — the ONLY place in
 * this repository that actually spawns the `claude` CLI. `ai/grader.ts` is
 * the only caller.
 *
 * research.md §1 (a real `claude -p --json-schema` call was executed in this
 * environment before this plan was written): `--json-schema` +
 * `--output-format json` makes the CLI return a `.structured_output` field
 * that already satisfies the given schema — no natural-language parsing is
 * needed. Measured latency ~15.7s, cost ~$0.25/call.
 */
import { execFile } from "node:child_process";
import type { AiCallResult } from "./types.js";

/** research.md §6: ~5x the measured 15.7s single-call latency. */
const TIMEOUT_MS = 90_000;
/** Generous headroom over a typical structured JSON reply; still far below Node's default. */
const MAX_BUFFER_BYTES = 10 * 1024 * 1024;

interface ExecFileFailure extends Error {
  killed?: boolean;
  signal?: NodeJS.Signals | null;
  code?: number | string | null;
}

function describeFailure(err: unknown): string {
  if (err && typeof err === "object") {
    const failure = err as ExecFileFailure;
    if (failure.killed) {
      return `claude CLI 프로세스가 타임아웃(${TIMEOUT_MS}ms)으로 종료됨`;
    }
    if (failure.code === "ENOENT") {
      return "claude CLI 실행 파일을 찾을 수 없음(PATH 확인 필요)";
    }
    if (typeof failure.code === "number") {
      return `claude CLI가 0이 아닌 종료 코드로 실패함(exit ${failure.code})`;
    }
    return `claude CLI 실행 실패: ${failure.message}`;
  }
  return `claude CLI 실행 실패: ${String(err)}`;
}

/**
 * contracts/ai-grading-contract.md `runClaudeJson<T>()`.
 *
 * Uses `execFile` (never a shell — research.md §1/헌법 4.1: the prompt
 * carries untrusted student/material text and must never be interpreted by
 * a shell) with a fixed, non-negotiable flag set:
 * `-p <prompt> --output-format json --json-schema <schema> --append-system-prompt <systemPrompt> --restricted --permission-prompts none --strict-mcp-config`.
 *
 * `execFile`'s own `timeout`/`killSignal` options guarantee the child
 * process is actually terminated (Node sends `killSignal`, default
 * `SIGTERM`, to the child once `timeout` elapses) — not just that this
 * function's returned promise settles while a zombie process lingers.
 *
 * Every failure mode (spawn error, non-zero exit, timeout, stdout that
 * isn't JSON, or JSON missing `.structured_output`) converges to
 * `{status:"retry_needed", reason}` (research.md §6) — callers never need to
 * distinguish *why* a call failed. `reason` is for server logs only, never
 * shown to the user.
 */
export function runClaudeJson<T>(
  prompt: string,
  jsonSchema: object,
  systemPrompt: string,
): Promise<AiCallResult<T>> {
  const args = [
    "-p",
    prompt,
    "--output-format",
    "json",
    "--json-schema",
    JSON.stringify(jsonSchema),
    "--append-system-prompt",
    systemPrompt,
    "--restricted",
    "--permission-prompts",
    "none",
    "--strict-mcp-config",
  ];

  return new Promise((resolve) => {
    execFile(
      "claude",
      args,
      { timeout: TIMEOUT_MS, maxBuffer: MAX_BUFFER_BYTES },
      (err, stdout) => {
        if (err) {
          resolve({ status: "retry_needed", reason: describeFailure(err) });
          return;
        }

        let parsed: unknown;
        try {
          parsed = JSON.parse(stdout);
        } catch {
          resolve({ status: "retry_needed", reason: "claude CLI 응답을 JSON으로 파싱할 수 없음" });
          return;
        }

        if (typeof parsed !== "object" || parsed === null || !("structured_output" in parsed)) {
          resolve({ status: "retry_needed", reason: "claude CLI 응답에 structured_output 필드가 없음" });
          return;
        }

        const structuredOutput = (parsed as { structured_output: unknown }).structured_output;
        if (typeof structuredOutput !== "object" || structuredOutput === null) {
          resolve({ status: "retry_needed", reason: "claude CLI structured_output이 객체가 아님" });
          return;
        }

        resolve({ status: "graded", ...(structuredOutput as Record<string, unknown>) } as AiCallResult<T>);
      },
    );
  });
}
