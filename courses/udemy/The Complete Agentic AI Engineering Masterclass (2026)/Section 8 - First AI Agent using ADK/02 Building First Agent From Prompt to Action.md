# Building First Agent From Prompt to Action

## 개요
- Google Search 도구를 사용하는 첫 ADK 에이전트를 만들고 `InMemoryRunner`로 실행한다.

## 내용
### 에이전트 구성
핵심 속성은 `name`, `model`, `description`, `instruction`, `tools`다. Gemini 모델을 두뇌로 사용하고 Google Search 도구를 행동 수단으로 제공한다. 속도 제한과 일시적 장애에 대비해 재시도 정책도 설정한다.

`InMemoryRunner`는 사용자 요청, 세션과 에이전트 응답 사이의 흐름을 관리한다. `run_debug`는 에이전트가 지시와 도구를 올바르게 사용하는지 개발 중 확인하는 데 쓰인다.

## 예시
```text
질문 → Agent가 목표 판단 → Google Search 호출
→ 검색 결과 관찰 → 최종 답변
```

## 요약
- 에이전트는 LLM에 역할·지시·도구·실행 루프를 결합한다.
- 재시도 정책은 외부 모델 API 사용의 기본 안전장치다.
