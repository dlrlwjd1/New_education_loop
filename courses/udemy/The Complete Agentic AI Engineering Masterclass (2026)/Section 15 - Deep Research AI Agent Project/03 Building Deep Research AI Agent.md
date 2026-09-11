# Building Deep Research AI Agent

## 개요
- Agno, Gemini와 웹 검색 도구로 실제 Deep Research Agent를 구현한다.

## 내용
### Agno 에이전트
`research_agent.py`에서 Gemini 2.5 Flash Lite 모델과 DuckDuckGo 검색·Newspaper 기사 읽기 도구를 Agent에 제공한다. 역할은 탐사보도 기자로 설정한다.

지시에는 최신 자료 우선, 10개 이상 출처 조사, 교차 검증, 주목도 높은 제목, 구조화된 보고서와 품질 점검을 포함한다. Markdown 출력을 활성화한다.

## 예시
```text
Write a detailed investigation report on the impact of AI on job markets.
```

에이전트는 여러 하위 질의로 약 20개 결과를 조사하고 이해관계자 관점과 핵심 쟁점을 종합한다.

## 요약
- 도구·역할·조사 규칙·출력 형식을 구체적으로 정의한다.
- 출처 수, 최신성, 교차 검증 규칙이 연구 품질을 높인다.
