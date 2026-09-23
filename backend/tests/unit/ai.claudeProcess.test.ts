import { describe, it, expect, vi, afterEach } from "vitest";
import { execFile as execFileCb } from "node:child_process";

// T002 (Foundational), written independently from
// contracts/ai-grading-contract.md's "서브프로세스 계약" section (NOT from
// reading claudeProcess.ts's implementation body beyond the exported
// `runClaudeJson<T>(prompt, jsonSchema, systemPrompt)` signature needed to
// call it). The contract states: timeout, non-zero exit, JSON parse
// failure, and missing `structured_output` must ALL converge to
// `{status:"retry_needed", reason}` -- this file asserts exactly that shape
// (not the exact `reason` string, which the contract explicitly leaves
// unpinned), plus that a timeout actually kills the child process rather
// than leaving a zombie.
//
// Per the task's safety instructions: only real (but broken/trivial/
// nonexistent) processes are spawned here -- never the real `claude` binary.

import { runClaudeJson } from "../../src/ai/claudeProcess.js";

const dummySchema = { type: "object", properties: { foo: { type: "string" } } };
const dummySystemPrompt = "test system prompt";

describe("runClaudeJson() - failure convergence (T002, contracts/ai-grading-contract.md)", () => {
  it("a nonexistent command (ENOENT) resolves to {status:'retry_needed', reason}", async () => {
    // runClaudeJson always spawns literally "claude" -- to force ENOENT
    // deterministically without depending on whether "claude" happens to be
    // installed on the test machine, temporarily hijack PATH so no
    // executable named "claude" can be found by execFile's lookup.
    const originalPath = process.env.PATH;
    process.env.PATH = "";
    try {
      const result = await runClaudeJson(dummySchema ? "prompt text" : "", dummySchema, dummySystemPrompt);
      expect(result.status).toBe("retry_needed");
      if (result.status === "retry_needed") {
        expect(typeof result.reason).toBe("string");
        expect(result.reason.length).toBeGreaterThan(0);
      }
    } finally {
      process.env.PATH = originalPath;
    }
  });

  it("JSON.parse failure surfaces as retry_needed, not a thrown exception", async () => {
    // Directly exercise the same convergence logic runClaudeJson uses for a
    // successful process whose stdout isn't valid JSON, by mocking
    // node:child_process's execFile (the only dependency runClaudeJson has)
    // so we control stdout deterministically instead of depending on a real
    // "claude" binary's actual output format.
    vi.resetModules();
    vi.doMock("node:child_process", () => ({
      execFile: (
        _cmd: string,
        _args: string[],
        _opts: unknown,
        cb: (err: unknown, stdout: string, stderr: string) => void,
      ) => {
        cb(null, "this is not json{{{", "");
      },
    }));
    const { runClaudeJson: mockedRunClaudeJson } = await import("../../src/ai/claudeProcess.js");
    const result = await mockedRunClaudeJson(dummySchema ? "prompt" : "", dummySchema, dummySystemPrompt);
    expect(result.status).toBe("retry_needed");
    if (result.status === "retry_needed") {
      expect(typeof result.reason).toBe("string");
    }
    vi.doUnmock("node:child_process");
    vi.resetModules();
  });

  it("valid JSON missing the structured_output field surfaces as retry_needed", async () => {
    vi.resetModules();
    vi.doMock("node:child_process", () => ({
      execFile: (
        _cmd: string,
        _args: string[],
        _opts: unknown,
        cb: (err: unknown, stdout: string, stderr: string) => void,
      ) => {
        cb(null, JSON.stringify({ something_else: true }), "");
      },
    }));
    const { runClaudeJson: mockedRunClaudeJson } = await import("../../src/ai/claudeProcess.js");
    const result = await mockedRunClaudeJson(dummySchema ? "prompt" : "", dummySchema, dummySystemPrompt);
    expect(result.status).toBe("retry_needed");
    if (result.status === "retry_needed") {
      expect(typeof result.reason).toBe("string");
    }
    vi.doUnmock("node:child_process");
    vi.resetModules();
  });

  it("a real trivial process that exceeds a very short timeout resolves to retry_needed via runClaudeJson itself, and the child is actually killed", async () => {
    // claudeProcess.ts hardcodes its own 90s timeout (TIMEOUT_MS) with no
    // parameter to shrink it from outside, and always spawns literally
    // "claude". To test the KILL PATH through runClaudeJson itself (not a
    // reimplementation of it) without waiting 90s or invoking the real
    // `claude` binary, mock node:child_process's execFile to forward to the
    // REAL execFile, spawning a real trivial long-sleeping `node` process in
    // place of "claude", with the caller's 90_000ms timeout overridden down
    // to 50ms. This exercises runClaudeJson's actual describeFailure/kill
    // handling against a genuine child process exit, not a fabricated error.
    vi.resetModules();
    vi.doMock("node:child_process", () => ({
      execFile: (
        _cmd: string,
        _args: string[],
        opts: Record<string, unknown>,
        cb: (err: unknown, stdout: string, stderr: string) => void,
      ) => {
        return execFileCb("node", ["-e", "setTimeout(() => {}, 5000)"], { ...opts, timeout: 50 }, cb as never);
      },
    }));
    const { runClaudeJson: mockedRunClaudeJson } = await import("../../src/ai/claudeProcess.js");

    const start = Date.now();
    const result = await mockedRunClaudeJson("prompt", dummySchema, dummySystemPrompt);
    const elapsed = Date.now() - start;

    expect(result.status).toBe("retry_needed");
    if (result.status === "retry_needed") {
      expect(typeof result.reason).toBe("string");
      expect(result.reason.length).toBeGreaterThan(0);
    }
    // Killed well before the process's own 5s sleep would have finished --
    // proof the child was actually terminated, not merely ignored.
    expect(elapsed).toBeLessThan(4000);

    vi.doUnmock("node:child_process");
    vi.resetModules();
  });
});

afterEach(() => {
  vi.doUnmock("node:child_process");
  vi.resetModules();
});
