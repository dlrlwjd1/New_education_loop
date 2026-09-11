# Exercise

## 개요

- **첫 번째 advanced assignment**
- 주제: **고객 요청 추적(client request tracking)**
- 의뢰인: Fast Fore Consulting의 파트너 **Sophie** (IT 프로젝트 전문)

## 내용

### 상황

Sophie와 그의 팀은 **프로젝트가 끝났을 때 작업을 제대로 종료하고 고객에게 인계하는 데 어려움을 겪고 있다.**

**그 결과 많은 고객이 프로젝트 공식 종료 후에도 팀에 이슈나 변경 요청(change request)을 보낸다.**

**Sophie가 이것을 싫어하는 이유:**

> **팀이 청구할 수 없는(can't invoice) 작업을 고치고 후속 처리하는 대신, 매출을 만드는 진행 중인 프로젝트에 집중하기를 원하기 때문이다.**

### 과제

과제 텍스트를 읽고 프로세스를 만든다. 강사의 해설 영상에서는 **두 가지 케이스의 토큰 흐름**을 보여준다.

## 예시

```text
이 과제에서 고려할 요소

□ Task type — 어느 단계가 자동화 가능한가?
   - 프로젝트 종료 통보 → send task?
   - 고객 확인 대기 → receive task 또는 catching message event?
   - 요청 분류 → business rule task?

□ 이벤트 처리
   - 공식 종료 후 요청이 들어오면? → attached event
   - 원래 절차를 취소해야 하는가, 계속하면서 처리하는가?
     취소 → interrupting / 계속 → non-interrupting

□ Event based gateway
   - "고객이 인수를 확인한다" vs "기한이 지난다"

□ 종료 지점
   - 청구 가능한 작업과 청구 불가능한 작업의 end event를 나눌 것인가?
     (후속 활동이 다르면 나눈다)
```

## 요약

- 실무에서 흔한 문제를 다룬다 — **프로젝트 종료의 경계가 불분명해 무상 작업이 계속 발생하는 상황**
- BPMN으로 **"어디까지가 프로젝트이고 어디부터가 새 요청인가"를 명시**하는 것이 해법의 출발점이다
- Module 8의 link event 강의에서 나온 **"내 프로세스의 시작과 끝은 무엇인가"** 라는 질문이 여기서 실제 비즈니스 문제로 등장한다
