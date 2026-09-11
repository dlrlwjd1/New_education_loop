# Day 1 - Build a Web-Browsing AI Agent with MCP Servers and Traces

## 개요
- 브라우저·파일 MCP를 에이전트에 연결하고 원격 Context7 서버와 비교한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767615#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 두 로컬 서버 조합
Playwright와 Filesystem을 Agent의 mcp_servers에 전달한다. 바노피 파이 조리법을 찾아 sandbox의 banoffee.md에 요약하게 한다. 실제 브라우저 탐색과 생성 문서를 확인한다.

### 역할 구분
host는 노트북 뒤에서 실행되는 Python 커널의 애플리케이션이다. SDK가 client 연결을 관리하고 npx·uvx로 실행된 별도 프로그램이 server다.

### 원격 서버와 trace
Context7은 Streamable HTTP로 연결해 모델 학습 이후의 API 문서를 조회하는 예제로 사용한다. trace에서 도구 발견, 브라우저 탐색, 파일 저장, 문서 조회를 확인한다. 모델의 기존 지식과 도구가 제공한 최신 문맥을 구분한다.

## 예시
```text
브라우저 MCP → 조리법 조사
파일 MCP → banoffee.md 저장
원격 Context7 → API 문서 조회
각 연결과 호출 → SDK trace에서 확인
```

## 요약
- 여러 MCP 서버의 도구를 한 과제에 조합한다.
- 로컬·원격 연결 방식과 실제 도구 사용을 대조한다.
