# I Open-Sourced My Own AFK Software Factory

## 개요
- 영상: [I Open-Sourced My Own AFK Software Factory](https://www.youtube.com/watch?v=E5-QK3CDVQM)
- 채널: Matt Pocock
- 업로드일: 2026-04-30
- 길이: 11:25
- 핵심 주제: Sandcastle은 AI coding agent를 isolated sandbox에서 programmatically 실행하는 TypeScript 라이브러리다. GitHub Issues 기반 backlog, planner, implementer, reviewer, merger agent를 조합해 AFK software factory를 만든다.

## 내용

### 1. AFK agent에는 sandbox가 필요하다
Matt는 agent를 병렬로 오래 돌리려면 permission prompt를 매번 처리할 수 없다고 말한다. 하지만 완전 YOLO mode로 풀어두면 home directory 삭제나 데이터 유출 같은 위험이 생긴다.

그래서 AFK agent에는 sandbox가 필요하다. Sandcastle은 TypeScript 코드에서 agent, sandbox, prompt를 지정해 isolated environment 안에서 agent를 실행하는 라이브러리다.

### 2. Sandcastle은 TypeScript function으로 agent workflow를 만든다
Sandcastle의 기본 사용감은 다음과 같다.

```ts
await sandcastle.run({
  agent,
  sandbox,
  prompt,
})
```

이 단순한 함수 호출로 planner, implementer, reviewer, merger 같은 여러 agent workflow를 구성할 수 있다.

### 3. 초기 설정은 agent, sandbox, backlog manager를 고른다
영상에서는 다음 흐름으로 설정한다.

1. `npm install @ai-hero/sandcastle`
2. `npx sandcastle init`
3. Agent 선택: Claude Code 등
4. Sandbox provider 선택: Docker 등
5. Backlog manager 선택: GitHub Issues
6. Template 선택: parallel planner with review step

GitHub Issues를 backlog로 쓰면 특정 label이 붙은 issue만 agent가 가져가도록 구성할 수 있다.

### 4. `.sandcastle` 디렉터리가 workflow를 담는다
초기화 후 `.sandcastle` 디렉터리에 Dockerfile, env example, `main.mts`, prompt files 등이 생긴다.

Dockerfile은 agent가 실행될 container 환경을 정의한다. GitHub CLI, Claude Code, 시스템 의존성 등을 설치할 수 있다.

`.env`에는 Anthropic API key, GitHub token 같은 값이 필요하다.

### 5. Planner agent는 issue를 읽고 실행 계획을 만든다
Planner는 GitHub Issues를 읽고 지금 처리할 수 있는 issue를 찾는다. Blocking 관계나 label을 확인한 뒤, 어떤 issue를 어떤 agent가 처리할지 plan을 만든다.

Plan은 JSON으로 출력되고, `main.mts`가 이를 파싱해 implementer agent를 실행한다.

### 6. Implementer는 branch에서 작업한다
각 implementer는 별도 sandbox와 branch에서 작업한다. Prompt에는 issue title, task ID, branch 정보 등이 들어간다.

Matt의 template은 red-green-refactor에 가깝게 테스트를 먼저 만들고 구현하도록 유도한다.

### 7. Reviewer와 Merger가 품질과 통합을 맡는다
Implementer가 commit을 만들면 reviewer가 변경을 검토한다. Reviewer prompt는 diff를 읽고 correctness, maintainability, project standards를 확인한다.

여러 branch가 생기면 merger agent가 이를 main branch로 병합한다. Merge conflict가 생길 수 있으므로, Matt는 강한 agent에게 이 작업을 맡기는 것을 선호한다.

### 8. Sandcastle은 agent-agnostic하다
Sandcastle은 Claude Code만 위한 도구가 아니다. Planner는 Claude Code로 돌리고 reviewer는 Codex로 돌리는 식의 adversarial review도 가능하다.

여러 agent가 같은 issue를 다르게 구현하게 한 뒤, 다른 reviewer가 가장 좋은 결과를 고르는 workflow도 만들 수 있다.

## 예시

### Sandcastle workflow
```text
GitHub issue
  -> planner agent
  -> plan JSON
  -> implementer agents on branches
  -> reviewer agents
  -> merger agent
  -> main branch
  -> issue close/comment
```

### Sandcastle이 유용한 경우
```text
- backlog issue를 AFK로 처리하고 싶을 때
- 여러 agent를 병렬로 돌리고 싶을 때
- sandbox 안에서 agent 권한을 제한하고 싶을 때
- reviewer/merger까지 포함한 workflow를 직접 코드로 구성하고 싶을 때
```

## 요약
- Sandcastle은 isolated sandbox에서 AI coding agent를 실행하는 TypeScript 라이브러리다.
- AFK agent는 permission 문제와 보안 위험 때문에 sandbox가 필요하다.
- GitHub Issues를 backlog로 사용해 planner가 issue를 고르고 implementer가 branch에서 작업한다.
- Reviewer와 merger agent를 붙여 품질 확인과 병합까지 자동화할 수 있다.
- Sandcastle은 Claude Code, Codex 등 여러 agent를 조합할 수 있는 agent-agnostic workflow 도구다.
