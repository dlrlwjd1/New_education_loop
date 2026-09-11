# How to Create Architecture Diagrams with MCP using Claude Code Excalidraw and Draw.io

## 개요
- 원본: https://www.youtube.com/watch?v=ChbHNOm_JpI
- 채널: Code Canvas With Touseef
- 게시일: 2026-07-06
- 핵심 주제: MCP를 통해 Claude를 Excalidraw와 Draw.io 같은 외부 다이어그램 도구에 연결하고, 아키텍처 다이어그램 초안을 자동 생성하는 방법

## 내용
### MCP의 역할
영상은 MCP를 AI 도구와 외부 애플리케이션을 연결하는 표준 프로토콜로 설명한다. Claude가 직접 여러 API를 각각 다루는 대신, MCP server가 중간에서 요청을 받아 적절한 외부 도구를 호출한다.

예를 들어 사용자가 "내일 회의가 뭐야?"라고 묻는다면, AI는 calendar 정보가 필요하다고 판단하고 MCP server를 통해 calendar tool을 호출한다. 결과는 다시 MCP server를 거쳐 자연어 답변으로 돌아온다.

### Excalidraw connector로 다이어그램 생성
첫 번째 실습은 Claude Desktop의 connector 설정에서 Excalidraw connector를 추가하는 방식이다.

절차는 다음과 같다.

1. Claude Desktop을 연다.
2. `File > Settings`로 이동한다.
3. `Connectors` 섹션에서 `Customize`를 연다.
4. `Add connector`에서 Excalidraw를 검색한다.
5. Excalidraw connector를 연결한다.
6. Claude chat에 아키텍처 다이어그램 생성 prompt를 입력한다.
7. 생성된 결과를 Excalidraw에서 열어 수동 편집한다.

영상에서는 microservices web application architecture diagram을 prompt로 요청하고, Claude가 Excalidraw MCP connector를 통해 시각 다이어그램을 만든다. 생성 후 Excalidraw에서 색상이나 구성 요소를 직접 조정할 수 있다.

### Draw.io MCP 연결 방식 1: hosted MCP server
두 번째 실습은 Draw.io MCP를 remote hosted MCP server로 연결하는 방식이다. Claude Desktop의 custom connector 기능에서 MCP server 이름과 remote URL을 입력해 등록한다.

이후 기존 Excalidraw prompt에서 대상 도구만 Draw.io로 바꾸면, Claude가 Draw.io MCP tool을 호출해 아키텍처 다이어그램을 생성한다. 영상에서는 일부 아이콘이 Claude preview에서는 제대로 보이지 않지만, Draw.io에서 열면 정상적으로 보인다고 설명한다.

### Draw.io MCP 연결 방식 2: local MCP server
세 번째 흐름은 Draw.io MCP server를 로컬 명령으로 실행하도록 Claude Desktop config에 등록하는 방식이다.

절차는 다음과 같다.

1. Claude Desktop settings에서 `Developer` 섹션으로 이동한다.
2. `Edit config`를 눌러 `claude_desktop_config.json` 위치를 연다.
3. `mcpServers` 설정에 Draw.io MCP server command와 arguments를 추가한다.
4. Claude Desktop을 재시작한다.
5. Developer 섹션에서 local MCP server가 잡혔는지 확인한다.
6. 기존 remote connector를 제거하고 같은 prompt로 다시 다이어그램을 생성한다.

이 방식은 remote endpoint 대신 로컬 MCP server를 통해 Draw.io 기능을 Claude에 제공한다.

### Draw.io 연결 방식 3: skill 사용
마지막 방식은 Draw.io 관련 `skill.md` 파일을 Claude에 업로드하는 방식이다. skill은 재사용 가능한 지시문과 workflow를 패키징해 Claude가 특정 작업을 반복적으로 수행하게 하는 방법으로 소개된다.

영상에서는 GitHub repo에서 Draw.io skill 파일을 받아 Claude Desktop의 skill 섹션에 업로드한 뒤, Spring Boot microservices application과 Angular frontend를 포함한 아키텍처 다이어그램을 생성한다.

### 제목과 실제 실습 범위
영상 제목에는 Claude Code가 포함되어 있지만, 자막의 실제 실습 설명은 주로 Claude Desktop의 connector, developer config, skill 업로드 흐름을 다룬다. 따라서 이 노트에서는 Claude 기반 MCP workflow로 정리한다.

## 예시
### 다이어그램 생성 prompt 구조
```text
Generate a clean, professional microservices web application architecture diagram
using [Excalidraw or Draw.io] via the MCP connector.
Include frontend, API gateway, microservices, databases, message broker,
authentication, monitoring, and external integrations.
```

### 세 가지 Draw.io 연결 방식 비교
| 방식 | 특징 | 적합한 상황 |
| --- | --- | --- |
| Hosted MCP server | remote URL을 custom connector로 등록 | 빠르게 테스트하고 싶을 때 |
| Local MCP server | `claude_desktop_config.json`에 command 등록 | 로컬에서 MCP server를 제어하고 싶을 때 |
| Skill | `skill.md`를 업로드해 workflow를 재사용 | 반복 가능한 다이어그램 생성 절차를 만들고 싶을 때 |

### 결과물 활용 흐름
1. Claude가 초기 아키텍처 다이어그램을 생성한다.
2. Excalidraw 또는 Draw.io에서 연다.
3. 색상, 아이콘, 레이아웃, 라벨을 수동으로 다듬는다.
4. 설계 문서나 발표 자료에 첨부한다.

## 요약
- MCP는 Claude 같은 AI 도구가 Excalidraw, Draw.io 같은 외부 도구를 호출하게 해주는 연결 계층이다.
- Excalidraw connector를 쓰면 Claude가 다이어그램 초안을 빠르게 생성하고, 이후 사람이 시각적으로 다듬을 수 있다.
- Draw.io는 hosted MCP server, local MCP server, skill 업로드 세 가지 방식으로 연결할 수 있다.
- 아키텍처 다이어그램 생성에서 AI의 강점은 완성본을 한 번에 만드는 것보다, 반복 가능한 초안을 빠르게 만드는 데 있다.
