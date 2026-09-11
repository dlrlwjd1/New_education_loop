# Exercise

## 개요

- Module 3 실습 과제와 해설
- 과제: Gonzalez가 제안한 **pit stop 속도 개선 아이디어**를 프로세스로 그린다
- exclusive gateway와 parallel gateway를 **함께** 사용하는 것이 핵심

## 내용

### 과제

Gonzalez가 팀의 pit stop을 어떻게 빠르게 할지에 대한 아이디어를 낸다. 그 내용을 읽고 **정비 책임자(head of mechanics)가 팀에게 명확히 전달할 수 있도록** 프로세스를 매핑한다.

강사는 activity를 **4개로 단순화**해 제공한다. 따라서 **gateway와 event를 올바른 위치에 배치하는 것**에만 집중하면 된다.

### 막혔을 때

> 다이어그램을 **token simulator에 업로드**하면 토큰 흐름과 관련된 문제를 찾을 수 있다.

강사는 질문이 있으면 `fabian@processcamp.io` 로 연락하라고 안내한다.

### 해설

**1. Parallel gateway로 분리**

이전 강의와 마찬가지로 parallel gateway를 사용해 **wheel team과 fuel team이 동시에 수행하는 task로 분리**한다.

**2. Exclusive gateway 추가**

이번에는 각 팀의 task에 **남은 랩 수(the number of laps remaining)에 따른 조건부 동작(conditional behavior)** 이 붙는다.

→ 이 의사결정을 처리하려면 **exclusive gateway를 구현해야 한다**

## 예시

```text
Pit stop 개선 프로세스 (구조)

(○ Pit stop 시작)
        ↓
        ⊕  ← parallel gateway: 두 팀 동시 시작
        │
   ┌────┴────┐
   │         │
[Wheel]   [Fuel]
   │         │
   ◇         ◇   ← exclusive gateway: 남은 랩 수에 따른 조건 분기
   │         │
   └────┬────┘
        ⊕  ← closing parallel gateway: 두 토큰 모두 대기 후 병합
        ↓
   (◎ 완료)
```

**두 gateway의 역할 분담**

- **Parallel gateway** — "동시에 해야 하는가?" → 팀 분리와 동기화
- **Exclusive gateway** — "조건에 따라 다르게 해야 하는가?" → 남은 랩 수에 따른 분기

## 요약

- 실전 프로세스는 **parallel gateway와 exclusive gateway를 함께** 쓰는 경우가 대부분이다
- **동시성은 parallel, 조건 분기는 exclusive**로 역할이 명확히 나뉜다
- 모델이 맞는지 확신이 없으면 **token simulator로 토큰 흐름을 검증**한다
