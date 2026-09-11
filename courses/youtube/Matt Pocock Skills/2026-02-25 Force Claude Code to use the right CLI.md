# Force Claude Code to use the right CLI

## 개요
- 영상: [How to actually force Claude Code to use the right CLI (don't use CLAUDE.md)](https://www.youtube.com/watch?v=3CSi8QAoN-s)
- 채널: Matt Pocock
- 업로드일: 2026-02-25
- 길이: 6:51
- 핵심 주제: `Claude.md`에 "npm 대신 pnpm을 써라"라고 쓰는 것은 확률적 steering일 뿐이다. CLI 사용 규칙은 Claude Code hooks로 deterministic하게 강제하는 편이 낫다.

## 내용

### 1. Claude.md 지시는 deterministic하지 않다
많은 사용자는 agent가 잘못된 CLI를 쓰면 `Claude.md`에 instruction을 넣는다.

예를 들어 다음과 같다.

```text
Use pnpm, not npm.
Never run git push.
```

하지만 이는 모델이 instruction을 따를 확률을 높일 뿐, 실제로 막지는 못한다. 게다가 모든 session에서 instruction budget을 사용한다.

### 2. Hooks는 실행 직전에 deterministic code를 실행한다
Claude Code hooks는 특정 lifecycle event에서 코드를 실행한다.

영상에서 핵심으로 쓰는 것은 `pre-tool use` hook이다. Tool call이 실행되기 전에 command를 검사하고, 필요하면 block할 수 있다.

### 3. Claude.md 내용을 hook으로 변환한다
Matt는 `Claude.md`에 있던 deterministic하게 표현 가능한 규칙을 hook으로 바꾸라고 prompt한다.

예를 들어 다음 규칙은 hook으로 바꿀 수 있다.

- `npm` command block
- `git push` block
- 특정 wrapper script 강제

반대로 모든 instruction이 hook으로 바뀔 수 있는 것은 아니다. 판단이나 style 같은 것은 별도 skill, lint rule, review로 다뤄야 한다.

### 4. npm block hook 예시
Agent는 `block-npm.sh` 같은 bash script를 만들고, command가 `npm`으로 시작하면 exit code 2와 함께 message를 반환한다.

그 후 `.claude/settings.json`의 hooks 설정에 pre-tool use hook을 추가한다. Bash tool이 실행되기 전에 script가 command를 검사한다.

### 5. Hook은 instruction budget을 아낀다
Hook을 쓰면 `Claude.md`에서 "npm 쓰지 말라"는 지시를 제거할 수 있다.

규칙은 background에 있다가 command 실행 직전에만 드러난다. Matt는 이를 just-in-time steering 또는 progressive disclosure처럼 본다.

### 6. 같은 원리를 lint rule에도 적용할 수 있다
Matt는 positional parameter를 싫어하는 style rule을 ESLint rule로 바꾸는 예를 든다.

즉, LLM에게 매번 "이렇게 코딩하지 마"라고 말하기보다, deterministic feedback loop를 만들어 agent가 위반하면 즉시 고치게 하는 편이 좋다.

## 예시

### Hook으로 옮길 수 있는 규칙
```text
- npm 대신 pnpm 사용
- git push 금지
- 특정 destructive command 금지
- 직접 CLI 호출 대신 wrapper script 사용
```

### 설계 원칙
```text
확률적 instruction
  -> deterministic hook
  -> just-in-time feedback
  -> Claude.md 축소
```

## 요약
- `Claude.md` instruction은 command를 deterministic하게 막지 못한다.
- CLI 규칙은 `pre-tool use` hook으로 막는 편이 안전하다.
- Hook은 agent가 tool call을 실행하기 직전에 command를 검사한다.
- 이렇게 하면 global instruction budget을 아낄 수 있다.
- Style 규칙도 가능하면 lint/test 같은 feedback loop로 바꾸는 것이 좋다.
