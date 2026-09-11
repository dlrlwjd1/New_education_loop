# Day 3 - Long-Term Memory and Web Search MCP Servers for AI Agents

## 개요
- 지속 메모리와 Tavily 검색 MCP를 연결하고 저장·조회·검색 흔적을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767775#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 장기 메모리
메모리 서버가 entity·relation·observation을 저장한다. 이름·직업·강의 정보를 알려 준 뒤 새 실행에서 같은 저장 경로를 사용해 회상하게 한다. 파일에 남은 기록과 trace의 생성·조회 도구를 확인한다. 이 지식 그래프는 LangGraph의 실행 그래프와 목적이 다르다.

### 웹 검색
Tavily 키를 환경에 넣고 MCP 서버를 연결한다. 검색·추출·크롤링 등 전체 기능 중 이번 에이전트에는 검색만 허용하는 필터를 적용한다. 현재 날짜를 지침에 포함해 Amazon 관련 최신 정보를 조사한다.

### 검증
그럴듯한 최신 설명만 믿지 않고 실제 검색 인수와 반환 출처를 확인한다. 장기 저장 여부도 대화 이력 유지와 혼동하지 않는다.

## 예시
```text
실행 1: 사실 전달 → 메모리 파일 저장
실행 2: 같은 메모리 연결 → 사실 회상
검색 실험: Tavily 검색만 허용 → 쿼리·결과 trace 확인
```

## 요약
- 지속 메모리는 실행 바깥의 저장소를 사용한다.
- 필요한 도구만 노출해 역할을 좁힌다.
