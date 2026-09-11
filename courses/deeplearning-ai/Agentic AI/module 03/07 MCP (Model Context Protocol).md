# MCP (Model Context Protocol)

## 개요

Anthropic이 제안하고 현재 많은 기업/개발자가 채택한 표준.
LLM에 더 많은 컨텍스트와 툴을 제공하기 위한 공통 규격.

## MCP가 해결하는 문제

### 기존 방식: M × N 문제

```
앱 A ──→ Slack wrapper (직접 작성)
앱 A ──→ Google Drive wrapper (직접 작성)
앱 A ──→ GitHub wrapper (직접 작성)

앱 B ──→ Slack wrapper (또 직접 작성)
앱 B ──→ Google Drive wrapper (또 직접 작성)
앱 B ──→ GitHub wrapper (또 직접 작성)
```

M개 앱 × N개 툴 = M×N 번의 작업

### MCP 방식: M + N 문제

```
앱 A ──┐
앱 B ──┼──→ [MCP 표준] ──→ Slack MCP 서버
앱 C ──┘                ──→ GitHub MCP 서버
                        ──→ Google Drive MCP 서버
```

M개 앱 + N개 서버 = M+N 번의 작업 (표준화로 중복 제거)

## MCP 구성 요소

| 구성 | 역할 | 예시 |
|------|------|------|
| **MCP Client** | 툴/리소스를 소비하는 애플리케이션 | Claude Desktop, 개발자 앱 |
| **MCP Server** | 툴/리소스를 제공하는 소프트웨어 | GitHub MCP 서버, Slack MCP 서버 |

### MCP가 제공하는 것

- **Resources** (데이터 조회): 파일, DB 레코드, 문서 등 읽기 위주
- **Tools** (일반 함수): 데이터 조회 + 액션 실행 모두 포함

초기 MCP는 리소스(데이터 fetch) 중심으로 설계되었으나, 현재는 일반 함수 호출도 포함.

## 실제 동작 예시 (Claude Desktop + GitHub MCP)

요청: "이 GitHub repo의 README.md를 요약해줘"

```
[Claude Desktop (MCP Client)]
    ↓ MCP 요청
[GitHub MCP Server]
    ↓ get_file(repo="aisuite", path="README.md")
    ↓ 파일 내용 반환
[LLM 컨텍스트에 추가]
    ↓
[LLM이 요약 생성]
```

요청: "최근 PR 목록 보여줘"

```
[GitHub MCP Server]
    ↓ list_pull_requests(repo="aisuite", sort="updated", limit=20)
    ↓ PR 목록 반환
[LLM이 텍스트 요약 생성]
```

## 핵심 가치

- **개발자**: 직접 API wrapper 작성 불필요 → 이미 만들어진 MCP 서버 활용
- **생태계**: 누군가 GitHub MCP 서버를 만들면 모든 MCP 클라이언트가 공짜로 사용
- **표준화**: 툴 인터페이스가 통일되어 LLM 연동이 일관적

## 건강 고도화 관점

현재 `healthcare-llm-service`의 툴들(문진 조회, 노화속도 계산 등)을 MCP 서버로 노출하면:
- 다른 팀의 앱에서도 동일한 툴 재사용 가능
- Claude Desktop 등 MCP 클라이언트에서 직접 접근 가능
- 온택트 서비스와의 DB 공유 패턴(현재 키(ID)만 전달)을 MCP 리소스로 표준화 가능

## 다음 모듈

**Evaluations & Error Analysis** — 강사가 "이 강의에서 가장 중요한 모듈"로 꼽음.
에이전트 워크플로우를 잘 구축하는 팀과 그렇지 않은 팀의 핵심 차이.
