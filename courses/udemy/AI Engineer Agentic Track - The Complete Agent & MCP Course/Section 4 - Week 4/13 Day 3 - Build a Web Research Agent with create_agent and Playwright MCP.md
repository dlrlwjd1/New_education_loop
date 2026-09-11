# Day 3 - Build a Web Research Agent with create_agent and Playwright MCP

## 개요
- Playwright MCP 도구를 create_agent에 전달해 웹 조사 에이전트를 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821359#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### MCP 도구 불러오기
MultiServerMCPClient로 Playwright 서버를 구성하고 브라우저 도구 목록을 가져온다. 직접 각 브라우저 함수를 설명·스키마와 함께 작성하는 대신 서버가 제공하는 도구를 재사용한다. 영상은 Windows 노트북의 실행 호환성 우회책도 별도로 적용한다.

### 웹 조사 실행
브라우저 도구와 시스템 지침을 create_agent에 전달하고 Hacker News 상위 세 기사 제목을 요청한다. 비동기 실행으로 실제 브라우저 탐색이 진행된다.

### 결과와 효율 검토
제목은 맞았지만 불필요한 탐색과 screenshot 호출이 많았다. LangSmith에서 어떤 행동을 선택했는지 살펴보고, 모델 변경만으로 해결된다고 가정하지 않고 지침을 개선하는 과제를 제시한다.

## 예시
```text
MCP 서버의 브라우저 도구 → create_agent
→ 상위 세 기사 조사 → 실제 페이지와 답변 대조
→ trace에서 불필요한 탐색 확인
```

## 요약
- 이미 구성된 MCP 도구 설명과 스키마를 재사용한다.
- 정답 여부와 도구 사용 효율을 함께 본다.
