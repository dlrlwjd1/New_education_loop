# Day 3 - Build an AI Agent with Agno: Tools, MCP and the Agent Loop

## 개요
- Agno에서 모델·함수 도구·파일 MCP를 연결해 번역 목표를 실행한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821631#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### Agent와 arun
OpenAIChat 모델 객체와 instructions로 Agent를 만든다. await agent.arun으로 실행한다. 보드용 함수의 docstring·타입을 통해 도구 설명과 인수를 제공한다.

### MCP 수명과 실습
context manager 안에서 MCPTools를 연결하고 파일 요약을 확인한다. 이후 보드와 파일 도구를 모두 제공해 번역 목표를 수행한다. Spanish.txt와 단계별 완료 상태를 확인한다.

### 비교와 모듈화
agno_worker.py로도 실행한다. 실행마다 하위 계획의 개수는 달라질 수 있지만 산출물과 목표 충족은 일관되게 검증한다. 각 프레임워크의 정확한 메서드명은 실습 코드와 문서로 확인한다.

## 예시
```text
동일 번역 목표 → 실행 A: 세 하위 단계
               → 실행 B: 네 하위 단계
평가: 단계 수가 아니라 올바른 번역 파일과 완료 여부
```

## 요약
- 비동기 실행 메서드는 arun이다.
- 자율 계획의 모양보다 목표 결과를 검증한다.
