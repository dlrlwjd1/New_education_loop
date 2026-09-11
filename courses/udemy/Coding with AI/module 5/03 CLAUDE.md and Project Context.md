# CLAUDE.md and Project Context

## 개요
- Claude Code에서 가장 중요한 지속 컨텍스트 파일인 **`CLAUDE.md`** 를 설정하는 강의.
- AI 도구는 컨텍스트가 `/clear`나 compact로 사라질 수 있으므로, 매 세션마다 로드할 내용을 파일로 남겨야 한다.
- 모든 내용을 한 파일에 넣기보다 `context/` 폴더에 나누고, `CLAUDE.md`에서 참조하는 구조를 사용한다.

## 내용

### 지속 컨텍스트가 필요한 이유
- AI 대화 컨텍스트는 토큰 제한이 있다.
- 작업 중 `/clear`를 하거나 compact가 발생하면 이전 대화 내용은 사라질 수 있다.
- 그래서 매 세션 시작 시 항상 읽어야 하는 정보는 파일로 관리한다.

`CLAUDE.md`에 넣을 수 있는 내용:
- 코딩 스타일과 규칙
- 프로젝트 스펙
- 현재 작업 중인 기능
- AI와 상호작용하는 방식
- 프로젝트 명령어

### 도구별 컨텍스트 파일
각 에이전트 도구는 비슷한 기능을 다른 이름으로 제공한다.

- Claude Code: `CLAUDE.md`
- Codex: `AGENTS.md`
- Cursor: `.cursor/rules` 안의 `.mdc` 파일

핵심은 이름이 아니라, **프로젝트의 지속 규칙과 컨텍스트를 매번 로드하게 만드는 것**이다.

### `/init`으로 CLAUDE.md 생성
Claude Code에서 `/init`을 실행하면 코드베이스를 보고 `CLAUDE.md`를 생성한다.

이번 단계에서는 아직 Next.js 스타터 파일만 있으므로 생성 내용이 많지는 않다.
강사는 생성된 파일에서 불필요한 아키텍처 설명은 제거하고, 명령어 정도는 남긴다.

상단에는 프로젝트 설명을 간단히 둔다.

```md
# DevStash

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links, and custom types.
```

### context 폴더 구성
`CLAUDE.md` 하나에 모든 내용을 몰아넣지 않고, `context/` 폴더에 파일을 나눈다.

참조할 네 가지 파일:
- `context/project-overview.md`
- `context/coding-standards.md`
- `context/ai-interaction.md`
- `context/current-feature.md`

`CLAUDE.md`에는 이 파일들을 읽으라는 지시를 둔다.

```md
## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md
```

### project-overview.md 만들기
이전 강의에서 작성한 `project-spec.md`를 그대로 쓰지 않고, AI로 정리해 더 읽기 좋은 프로젝트 개요 문서로 만든다.

요청한 내용:
- planning notes를 검토하고 정리
- Prisma models 추가
- 다이어그램 추가
- 아이콘, 링크, 관련 정보 추가
- 결과를 `project-overview.md` 형식으로 작성

예시 프롬프트:

```text
I am building a SaaS called DevStash.
Below are my planning notes. Review and clean up as you see fit.
Format with things like Prisma models, diagrams, icons, links, and any other info that you think is relevant.
Put it in a file called project-overview.md.
```

### project overview에 들어가는 내용
AI가 정리한 `project-overview.md`에는 다음과 같은 정보가 포함된다.

- DevStash 개요
- 핵심 개념: Items, Collections
- 아이템 타입과 색상
- 라우트 예시
- 핵심 기능
- AI 기능
- 데이터 아키텍처
- ERD
- Prisma schema/model 초안
- NextAuth 관련 모델
- database migration 규칙
- 추천 프로젝트 구조
- 다음 작업 단계

강사는 Prisma 모델이나 migration 같은 항목을 이해하려면 결국 개발 지식이 필요하다고 강조한다.
AI가 작성해 줄 수는 있지만, 무엇이 중요한지 판단하려면 개발자로서의 이해가 있어야 한다.

### 컨텍스트 비용과 가치
`project-overview.md`를 추가하면 토큰 사용량이 늘어난다.

강의 예시:
- 추가 전 약 20,000 tokens
- 추가 후 약 26,000 tokens
- 약 6,000 tokens 증가

강사는 기능 단위로 작업하고 80,000~100,000 tokens 정도에서 context를 정리하는 편이라, 프로젝트 정보를 충분히 넣는 것이 가치 있다고 본다.

### 컨텍스트 로드 확인
컨텍스트를 clear한 뒤 Claude에게 프로젝트에 대해 물어보면, `project-overview.md`에서 읽은 내용을 기반으로 답한다.

확인 질문 예:

```text
Can you tell me what you know about the current project?
```

예상 답변:
- DevStash는 개발자 지식과 리소스를 위한 통합 허브
- Items가 핵심 단위
- 여러 시스템 타입이 있음
- Collections로 구성 가능
- 사용하는 tech stack과 monetization 구조를 알고 있음

## 예시

권장 구조:

```text
dev-stash/
  CLAUDE.md
  context/
    project-overview.md
    coding-standards.md
    ai-interaction.md
    current-feature.md
```

## 요약
- `CLAUDE.md`는 Claude Code가 매 세션 시작 시 읽는 지속 컨텍스트 파일이다.
- Codex의 `AGENTS.md`, Cursor의 `.cursor/rules`와 같은 역할이다.
- 모든 내용을 한 파일에 넣지 말고 `context/` 폴더로 나누어 관리한다.
- `project-spec.md`를 AI로 정리해 `project-overview.md`로 만들고, 프로젝트 구조·데이터 모델·기능·규칙을 항상 컨텍스트에 둔다.
- 좋은 AI 워크플로는 대화 기억에 의존하지 않고, 문서화된 컨텍스트에 의존한다.
