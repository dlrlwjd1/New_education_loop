# Day 3 - Agent Memory, Structured Outputs and Middleware in LangChain

## 개요
- create_agent에 대화 메모리·Pydantic 출력·도구 호출 middleware를 추가한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821349#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기억과 출력
MemorySaver와 동일 thread ID를 사용해 London 여행 계획을 다음 질문에서도 기억하게 한다. 도시·날씨·인구를 담는 CityReport를 출력 형식으로 지정하고 structured_response에서 객체와 개별 필드를 읽는다. 날씨·인구는 실습용 고정값이다.

### middleware
wrap_tool_call로 도구 실행 전 이름과 인수를 출력한 뒤 handler를 호출한다. London과 Rome 각각의 날씨·인구를 물어 네 번의 로그가 나오는지 확인한다. 모델 호출 전후나 도구 실행을 감싸는 확장 지점으로 이해한다.

### 기본 제공 확장
긴 대화 요약과 사람의 승인 지점 같은 middleware도 소개한다. 래퍼를 작성할 때 실제 handler 호출을 유지해야 도구 실행이 이어진다.

## 예시
```text
도구 요청 → middleware의 이름·인수 로그
→ handler 실행 → 도구 결과 → 모델
London·Rome × 날씨·인구 = 네 호출 확인
```

## 요약
- 메모리는 checkpointer와 thread를 함께 설정한다.
- middleware는 에이전트 루프의 특정 지점에 코드를 끼운다.
