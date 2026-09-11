# Introduction to MCP

## 개요
- MCP(Model Context Protocol)의 개념을 소개하는 강의.
- MCP는 AI tool이 외부 데이터와 기능에 안전하게 연결할 수 있게 해주는 open standard다.
- Neon, Vercel, Slack, Google Drive 같은 외부 서비스와 AI를 연결하는 "USB hub" 같은 역할을 한다.

## 내용

### MCP란
MCP는 Model Context Protocol의 약자다.

역할:
- AI model/tool을 외부 data source와 연결
- 외부 tools/API와 상호작용
- local/remote resource에 접근
- AI의 고립된 지식과 기능을 확장

AI는 학습 데이터로 많은 지식을 갖고 있지만, 기본적으로 현재 외부 시스템에 직접 접근하지 못한다.
MCP는 이 gap을 줄여준다.

### AI tool과 MCP server
MCP 구조:

```text
AI tool / MCP client
  <-> Model Context Protocol
  <-> MCP server
  <-> External service/data/tool
```

MCP client가 될 수 있는 것:
- Claude Code
- Cursor
- Claude Desktop
- AI chat interface
- coding agents

MCP server가 연결할 수 있는 것:
- database
- filesystem
- Git
- Sentry
- Slack
- Google Maps
- Notion
- Vercel
- WordPress
- Webflow
- Stripe/PayPal/Square
- Udemy Business

많은 인기 서비스가 MCP server를 제공한다.

### Neon MCP 예시
강의에서 곧 사용할 예시는 Neon MCP다.

현재는 Claude Code가 database에 직접 query할 수 없다.
대신 app code/Prisma script를 통해 간접적으로 접근해야 한다.

Neon MCP를 설치하면:

```text
Find me all users in my database.
```

같은 요청을 AI가 직접 database에 query해서 처리할 수 있다.

### USB hub 비유
강사는 MCP를 USB hub에 비유한다.

비유:
- Laptop: AI model
- USB hub: MCP
- External devices: Google Drive, Maps, Neon, Vercel 등

MCP를 통해 여러 외부 서비스가 AI tool에 연결된다.

### Local MCP servers
Local MCP server는 local machine에서 실행된다.

통신:
- standard input/output
- 빠르고 직접적인 interaction

장점:
- local files/resources 접근
- privacy 높음
- offline 가능
- full control
- local database/app과 연결하기 좋음

단점:
- local machine에 제한
- web-based agent와 공유하기 어려움

적합한 경우:
- private local files
- local database
- local development tools

### Remote MCP servers
Remote MCP server는 cloud server에서 실행된다.

통신:
- HTTP
- WebSocket
- OAuth

장점:
- 어디서나 접근 가능
- local setup 적음
- team/collaboration에 적합
- web apps/enterprise 환경에 좋음

단점:
- internet 필요
- privacy concerns 가능
- 외부 service 권한 관리 필요

### MCP 설치와 scope
MCP server 설정 방식은 tool마다 다르다.

예:
- Cursor: one-click install 제공 가능
- Claude Code: command로 설치 가능

Claude Code에서 MCP 설정은 scope에 따라 저장 위치가 달라진다.

#### Local scope
한 project 안에서 나만 사용.

파일:

```text
.claude.json
```

또는 tool/version에 따라 project-local config에 저장된다.

#### Project scope
Team 전체가 같은 project에서 사용.

파일:

```text
.mcp.json
```

#### User scope
내 user account의 여러 project에서 사용.

파일:

```text
~/.claude.json
```

기본 scope는 local인 경우가 많다.
강사는 보통 project scope를 선호한다.

예:

```bash
claude mcp add ... --scope project
```

### MCP list
현재 사용 중인 MCP servers를 확인할 수 있다.

```bash
claude mcp list
```

### Context 비용
MCP server를 추가하면 그 tool description과 schema가 context에 로드된다.

즉:
- MCP가 많아질수록 main context token 사용량 증가
- Neon MCP, Playwright MCP, Context7 MCP 등을 추가하면 몇 천 tokens가 더 쓰일 수 있음

따라서 필요한 MCP만 설치하고, context cost를 인식해야 한다.

### 앞으로 사용할 MCP
강의에서 사용할 예정인 MCP:

- Neon MCP: database 직접 query
- Playwright MCP: browser/UI 확인
- Context7 MCP: 최신 documentation 가져오기

Context7은 framework/library 최신 문서를 가져오는 데 유용하다.
Prisma 7처럼 AI 학습 데이터가 뒤처진 경우 특히 도움이 된다.

## 예시

MCP 개념:

```text
Claude Code
  -> MCP
  -> Neon MCP server
  -> Neon Postgres database
```

Remote service 예:

```text
Claude Code
  -> MCP
  -> Vercel MCP server
  -> deployment/project info
```

## 요약
- MCP는 AI tool을 외부 data/tool/service에 연결하는 open standard다.
- AI가 database, APIs, productivity tools, dev tools와 직접 상호작용할 수 있게 한다.
- Local MCP는 privacy와 local resource 접근에 좋고, remote MCP는 web/enterprise/collaboration에 좋다.
- Claude Code에서는 MCP server를 scope별로 설정할 수 있고, `claude mcp list`로 확인할 수 있다.
- MCP는 context token을 추가로 사용하므로 필요한 것만 신중히 추가한다.
- 다음 강의에서는 Neon MCP server를 설정한다.
