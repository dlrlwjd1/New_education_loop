# Installing Context7 MCP

## 개요
- 최신 framework/library documentation을 AI가 조회할 수 있도록 **Context7 MCP**를 설치하는 강의.
- Context7은 Next.js, React, Claude Code, Prisma 등 수많은 library의 최신 문서를 제공한다.
- Prisma 7처럼 AI의 학습 데이터가 오래된 경우, Context7로 최신 breaking changes와 setup 정보를 확인할 수 있다.

## 내용

### Context7이 필요한 이유
AI model은 많은 지식을 갖고 있지만, framework/library는 계속 바뀐다.

문제:
- AI가 오래된 문법을 제안할 수 있음
- 최신 breaking changes를 모를 수 있음
- 새 major version의 설정 방식이 바뀌었을 수 있음

예:
- Prisma 7
- Next.js 최신 버전
- Claude Code 최신 기능

Context7은 이런 최신 documentation을 MCP로 제공한다.

### Context7에서 제공하는 것
Context7은 수만 개의 library documentation을 제공한다.

예:
- Next.js
- React
- Claude Code
- Prisma
- 기타 인기 framework/library

강의 시점에서 Context7 homepage에는 65,000개 이상의 libraries가 표시된다.
Docs가 최근 업데이트된 날짜도 확인할 수 있다.

### API key 생성
Context7 MCP를 사용하려면 API key가 필요하다.

흐름:
1. Context7에 sign in
2. Google/GitHub/email 중 하나 사용
3. 새 API key 생성
4. 이름 지정

예:

```text
dev stash
```

생성된 API key는 복사해둔다.

주의:
- 자신의 key를 사용해야 함
- 강사의 key는 재발급될 예정
- API key는 secret이므로 공개 repository에 노출하지 않도록 주의

### Claude MCP add command
Context7 docs에서 Claude Code용 install command를 복사한다.

Command에 API key를 넣고 project scope를 추가한다.

예:

```bash
claude mcp add context7 ... --scope project
```

강사는 project directory에 설정을 두기 위해 `--scope project`를 추가한다.

이렇게 하지 않으면 home directory/user scope에 설정될 수 있다.

### .mcp.json 확인
Command 실행 후 `.mcp.json`에 Context7이 추가된다.

기존 Neon MCP가 있다면 다음처럼 함께 들어간다.

```json
{
  "mcpServers": {
    "neon": {
      ...
    },
    "context7": {
      ...
    }
  }
}
```

Context7 entry에는 API key가 포함될 수 있으므로 repository 공개 여부와 secret 관리에 주의한다.

### Context7 테스트
Claude Code를 열고 Context7을 사용하는 요청을 보낸다.

강사는 sub-agent를 spawn해 별도 context에서 Context7을 사용하게 한다.

Prompt:

```text
Spawn a sub-agent which will use its own context to use Context7
to look up what is new in Prisma 7 specifically,
new features and breaking changes from version 6.
```

Context7 MCP tool이 실행된다.

예:
- query docs

Tool 사용은 승인해야 할 수 있다.

### Prisma 7 최신 정보 예시
Context7 결과 예:

- Rust-free client architecture
- all-TypeScript query compiler
- smaller bundles
- new generator provider
- Prisma Client replaces Prisma Client JS
- TypeScript config file
- native ESM support
- Node.js 18 support dropped
- TypeScript minimum version 변경
- output field mandatory
- import paths changed
- Prisma validator removed
- ESM required

이런 정보는 Prisma setup을 할 때 매우 유용했을 것이다.
당시에는 아직 MCP를 다루기 전이라 수동으로 docs를 참조했다.

### DevStash project note
Context7 결과가 DevStash 현재 상태를 보고 다음처럼 말할 수 있다.

```text
The project is currently using Prisma 7, so these changes should already be in place.
Would you like me to verify the current configuration?
```

필요하다면 verification을 요청할 수 있다.
이번 강의의 목적은 Context7 사용법을 보여주는 것이므로 여기서 멈춘다.

### 언제 Context7을 쓰는가
Context7은 다음 상황에 유용하다.

- library major version이 최근에 바뀐 경우
- AI 답변이 outdated해 보이는 경우
- setup guide가 자주 바뀌는 tool을 사용할 때
- breaking changes를 확인해야 할 때
- docs 기반으로 정확한 implementation을 해야 할 때

예:

```text
Use Context7 to look up the latest Next.js app router docs.
```

```text
Use Context7 to check Prisma 7 migration changes from Prisma 6.
```

### 다음 단계
마지막으로 설치할 MCP는 Playwright다.

Playwright MCP는 browser/UI 확인과 interaction에 사용할 예정이다.

## 예시

설치 흐름:

```text
Sign in to Context7
  -> Create API key
  -> Copy Claude MCP add command
  -> Add --scope project
  -> Insert API key
  -> Run command
  -> Confirm context7 in .mcp.json
```

사용 예:

```text
Spawn a sub-agent to use Context7 and look up Prisma 7 breaking changes from Prisma 6.
```

## 요약
- Context7 MCP는 최신 library/framework documentation을 AI가 조회할 수 있게 해준다.
- API key를 만든 뒤 Claude MCP add command에 넣고 `--scope project`로 설치한다.
- `.mcp.json`에 Context7 server가 Neon MCP와 함께 추가된다.
- Prisma 7처럼 최신 major version 변화가 있는 경우 Context7이 특히 유용하다.
- 다음 강의에서는 Playwright MCP를 설치한다.
