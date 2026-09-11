# Day 1 - Bind Tools and Structured Outputs: Your First LangChain AI Agent

## 개요
- 도구를 모델에 연결하고 직접 호출 루프를 구성한 뒤 구조화 출력을 사용한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821325#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### bind_tools의 범위
bind_tools는 모델에게 사용 가능한 도구를 알려 준다. 모델이 도구 호출 요청을 반환해도 그 자체로 Python 함수가 실행된 것은 아니다. 호출 코드를 따로 작성해야 한다.

### 최소 에이전트 루프
Amazon 주가를 질문하고 응답의 tool calls를 순회한다. 요청된 조회 도구를 invoke로 실행하고 결과를 대화에 추가한 뒤 모델을 다시 호출한다. 이 연결을 직접 작성하는 번거로움이 다음 계층의 필요성을 보여준다.

### 구조화 출력
회사 이름·ticker·설립 연도를 담는 Pydantic 모델을 정의해 with_structured_output으로 연결한다. 반환 형식을 객체로 다루며, 형식 준수가 사실의 정확성을 보장하지는 않는다.

## 예시
```text
질문 → 도구를 연결한 모델
→ 도구 호출 요청 → Python 도구 실행
→ 결과를 포함한 재호출 → 사용자 답변
```

## 요약
- 도구 연결과 도구 실행은 별개다.
- 구조화 출력은 후속 코드가 처리할 형식을 정한다.
