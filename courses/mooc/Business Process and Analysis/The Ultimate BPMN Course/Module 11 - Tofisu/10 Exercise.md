# Exercise

## 개요

- **두 번째 advanced assignment**
- 주제: **커스텀 생산 요청(custom production request)**
- 등장인물: 생산 총괄 **John**

## 내용

### 상황

판매 프로세스에서 봤듯이 **때때로 고객이 커스텀 생산 샘플을 요청**한다. 과제는 **그 프로세스를 매핑하고, 그 안에서 생산팀과 실현 가능성(feasibility)을 평가**하는 것이다. **생산팀이 그런 커스텀 요청이 가능한지 검증**한다.

### 과제의 진짜 어려움 — 조직 내 이해 충돌

> **John은 생산 총괄이자 잘 정의된 표준 절차와 프로세스의 신봉자다. 그는 예외를 싫어한다. 산출량을 극대화하기 위해 모든 것이 최대한 매끄럽게 돌아가기를 원하기 때문이다.**
>
> **그럼에도 Leah가 특별 요청을 들고 나타나면, 그는 당연히 그냥 거절할 수 없다. 그가 상사이고 무엇을 하는지 알고 있기 때문이다.**

즉 이 과제는 단순한 표기법 연습이 아니라 **"예외를 싫어하는 생산 조직과 예외를 만들어 오는 영업 조직 사이의 절차를 어떻게 설계할 것인가"** 라는 실제 조직 설계 문제다.

## 예시

```text
이 과제에서 고려할 요소

□ 커스텀 요청은 표준 생산 흐름을 중단시키는가?
   → 중단시킨다면 interrupting attached event
   → 병렬 처리한다면 non-interrupting (점선)
   → John이 "매끄럽게 돌아가기"를 원한다는 점을 고려

□ 실현 가능성 검증의 결과 분기
   → 가능 / 불가능 / 조건부 가능?
   → exclusive gateway 또는 inclusive gateway

□ Task type
   → 생산 가능성 검증 = business rule task?
   → 시스템 조회 = user task 또는 service task?

□ 요청이 여러 건 들어오면?
   → multi-instance (건마다 입력이 다르다)

□ End event 분리
   → "커스텀 수주"와 "커스텀 거절"은 후속 활동이 다른가?

□ Best practice
   → task 15개 이하인가?
   → 성공 경로가 직선인가? (straight to success)
   → 프로세스 이름은? (예: "Custom Request to Production Decision")
```

## 요약

- 이 과제의 핵심은 **예외를 표준 절차 안으로 끌어들이는 프로세스를 설계**하는 것이다
- John(예외 싫어함)과 Leah(예외 요청함)의 이해가 충돌하는 상황이 **프로세스로 조정해야 할 실제 문제**다
- Module 11에서 배운 **non-interrupting event**와 **loop type**을 적용할 자리가 있다
