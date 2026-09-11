# Day 1 - First MCP Lab: Connecting Fetch, Playwright and Filesystem

## 개요
- Fetch·Playwright·Filesystem 서버에 연결해 도구 설명과 입력 스키마를 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767611#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### Fetch 서버
MCPServerStdio에 uvx 기반 실행 설정을 전달한다. list_tools로 fetch 도구를 확인하고 URL을 받아 내용을 읽는 설명과 입력 스키마를 살펴본다. 최초 실행은 패키지 준비 때문에 더 오래 걸릴 수 있다.

### 브라우저·파일 서버
Node·Playwright가 독립적으로 동작하는지 확인한 뒤 npx 기반 Playwright MCP를 연결한다. 파일 시스템 서버에는 sandbox 경로를 전달하고 읽기·목록·생성·검색 도구를 조회한다.

### 실습의 초점
이 단계는 아직 에이전트에 큰 목표를 주기보다 서버에 연결해 어떤 기능을 제공하는지 확인하는 과정이다. 함수 설명과 매개변수의 의미가 모델에게 어떻게 전달되는지 관찰한다.

## 예시
```text
서버 실행 설정 → 연결 → list_tools
→ 도구명·자연어 설명·JSON 입력 스키마 확인
→ 다음 강의에서 에이전트에 연결
```

## 요약
- 도구 목록을 직접 읽어 서버의 기능을 파악한다.
- 파일 서버의 작업 경로를 명시한다.
