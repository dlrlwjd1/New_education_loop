# Day 5 - Human in the Loop with LangChain create_agent: Approve and Reject

## 개요
- 도구 호출 직전에 멈추고 승인·수정·거절로 재개하는 human-in-the-loop를 실습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821429#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기본 작업자
검색·Wikipedia·알림 도구로 노벨상 수상자를 찾아 알리는 간단한 에이전트를 실행한다. 이후 실제 일정 서비스가 아닌 가짜 book_meeting 도구로 승인 흐름을 분리해 배운다.

### 중단과 재개
HumanInTheLoopMiddleware의 interrupt_on에 회의 예약 도구를 지정하고 checkpointer를 연결한다. Sam과 금요일 회의를 요청하면 실행 전에 도구명과 인수가 반환된다. 같은 실행 흐름에 resume Command를 전달해 승인한다.

### 거절 실험
별도 thread에서 금요일 회의를 거절하고 이유를 전달한다. 모델은 도구를 실행하지 않고 다른 날짜를 제안한다. edit 결정은 인수를 수정해 실행하는 방식이다.

## 예시
```text
예약 요청 → 도구 호출 전 중단
approve → 도구 실행
edit → 수정한 인수로 실행
reject + 이유 → 도구 건너뛰기·모델에 피드백
```

## 요약
- 중단 시점은 실제 도구 실행 전이다.
- 재개에는 일반 질문과 다른 Command를 사용한다.
