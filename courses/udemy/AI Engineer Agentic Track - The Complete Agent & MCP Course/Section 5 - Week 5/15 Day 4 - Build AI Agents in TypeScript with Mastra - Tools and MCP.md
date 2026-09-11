# Day 4 - Build AI Agents in TypeScript with Mastra: Tools and MCP

## 개요
- TypeScript 파일 다섯 개로 Mastra의 생성·호출·도구·MCP 단계를 실습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821641#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 프로젝트 준비
lab.md의 순서에 따라 Node 버전과 의존성을 준비한다. 영상은 Node 24 환경을 사용하고 해당 프로젝트에서 npm install을 실행한다. board.ts는 SQLite 보드 구현이며 tools.ts가 에이전트용 인터페이스를 제공한다.

### 도구 정의
createTool에 ID·설명·Zod inputSchema·execute 함수를 지정한다. execute는 보드 함수를 호출한다. MCPClient에는 파일 서버의 명령과 인수를 설정한다.

### 단계별 확인
Agent에 ID·이름·instructions·모델을 지정하고 generate로 인사를 요청한다. 보드 도구로 목표를 읽고, MCP의 도구 목록을 받아 notes.txt를 요약하게 한다. 단계마다 실행 결과를 확인하고 다음 연결을 추가한다.

## 예시
```text
step 1: Agent 생성
step 2: generate 호출
step 3: Zod 스키마의 보드 도구
step 4: MCP 파일 읽기
```

## 요약
- TypeScript 도구는 스키마와 실행 함수를 명시한다.
- MCP에서 받은 도구를 Agent의 tools에 연결한다.
