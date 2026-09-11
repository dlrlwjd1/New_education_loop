# Understanding CrewAI Architecture

## 개요
- CrewAI의 flow, crew, agent, task와 process가 stateful execution을 구성하는 방식을 다룬다.

## 내용
- Crew는 agent team, agent는 role·goal을 가진 구성원, task는 개별 assignment, process는 실행 순서를 정의한다.
- Flow는 state를 유지하며 event trigger, conditional branch와 다음 실행 단계를 통제한다.
- Flow가 복잡한 작업을 crew에 위임하면 agent들이 LLM·tool·memory를 활용해 task를 수행하고 결과를 반환한다.
- 반환 결과에 따라 flow는 종료하거나 다음 crew·code step을 실행한다.
- Flow는 orchestration logic, crew는 역할 기반 collaborative execution이라는 책임 분리가 핵심이다.

## 예시
```text
Flow code -> Crew -> Agents/Tasks/Tools -> result -> Flow decision -> next Crew
            shared state persists across steps
```

## 요약
- CrewAI architecture는 state·control을 담당하는 flow와 실제 지능 작업을 수행하는 crew를 결합한다.
