# Day 1 - Add Tools to an Agent with the function_tool Decorator

## 개요
- function_tool이 함수의 설명·타입을 도구 스키마로 바꾸는 과정을 실습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820399#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 함수에서 도구로
알림 함수에 메시지 입력과 반환값의 타입 힌트, 기능을 설명하는 docstring을 추가한다. function_tool 데코레이터를 적용하면 이름·설명·인수 JSON schema와 실행 함수를 가진 도구 객체가 된다.

### Agent에 연결
notifier의 tools에 이 객체를 넣고 Runner.run으로 피자가 도착했다는 알림을 요청한다. 모델은 알림 함수를 호출하고 실제 전송 결과를 받아 최종 답변을 만든다. Pushover를 쓰지 않는 경우 파일 기록 같은 대체 도구로 같은 원리를 시험할 수 있다.

### trace 확인
Agent의 이름만 보고 역할 수행을 가정하지 않고 system·user 메시지와 도구 인수·결과를 확인한다. 원하는 행동이 아니면 지침을 수정해 반복한다.

## 예시
```text
타입·docstring이 있는 함수 → function_tool
→ Agent.tools → Runner.run
→ 도구 실행 결과 → 최종 응답
```

## 요약
- 데코레이터가 모델용 도구 설명과 스키마를 만든다.
- 도구 실행 여부는 trace와 실제 결과로 확인한다.
