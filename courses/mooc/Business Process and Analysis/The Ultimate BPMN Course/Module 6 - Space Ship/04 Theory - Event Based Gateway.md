# Theory – Event Based Gateway

## 개요

- **Event based gateway(이벤트 기반 게이트웨이)** — 네 번째이자 **마지막 gateway**
- 성격: **수동적(passive)**. 의사결정을 하지 않고 **event의 발생에 반응**한다
- 특이점: **자기만의 닫는 짝이 없다**

## 내용

### 다른 gateway와 다른 점

| | Exclusive / Inclusive | **Event based** |
|---|---|---|
| 역할 | **능동적**. 결정을 내린다(decision making) | **수동적(passive)**. **event의 발생에 반응**한다 |
| 활성화 경로 | exclusive: 하나 / inclusive: 조합 | **하나만** (exclusive와 동일) |

> **exclusive·inclusive gateway와 달리 event based gateway는 수동적 역할을 맡아 의사결정 대신 event의 발생에 반응한다. 다만 exclusive gateway처럼 나가는 branch는 하나만 활성화된다.**

### 동작 방식

**event based gateway 뒤에는 항상 catching event가 따라온다.**

1. 토큰이 gateway에 도착하면 **프로세스가 일시 정지하고 event 중 하나가 발생할 때까지 기다린다**
2. 예를 들어 **기한 만료 전에 고객이 제안을 수락**하면, 토큰은 **"제안 수락"에 연결된 경로**를 따라간다

### 중요 — 오직 하나의 event만 발생한다

> **엣지 케이스에서도 마찬가지다.** 제안 수락과 기한 만료가 **정확히 동시에** 일어나더라도, **BPMN은 둘 중 하나가 아주 약간 먼저 일어났다고 항상 가정한다.** 밀리초 차이라도 상관없다.

### 특이점 — 전용 closing gateway가 없다

event based gateway는 **자기만의 전용 닫는 짝이 없다.** 대신 **closing exclusive gateway를 사용한다.**

**왜?**

> event based gateway는 **오직 하나의 sequence flow만 활성화**한다. 따라서 별도의 closing event based gateway를 만들어도 **closing exclusive gateway와 똑같이 동작**한다.
>
> **BPMN을 단순하게 유지하고 중복 기호를 피하기 위해** closing exclusive gateway를 대신 사용한다.

## 예시

```text
Event based gateway — 무엇이 먼저 일어나는지 기다린다

              ┌─→ (✉ 고객이 제안 수락) → [계약 진행] ──┐
              │                                        │
(●) → ⬡ ──────┼─→ (✉ 고객이 제안 거절) → [기회 종료] ──┼──→ ◇ → (◎)
   event      │                                        │  closing
   based      └─→ (⏱ 기한 만료)      → [자동 취소] ────┘  exclusive
   수동적으로 대기
                 ↑
        뒤에는 항상 catching event가 온다
        먼저 일어난 것 하나만 활성화된다


4가지 gateway 정리

◇ Exclusive    (X)  능동적 결정  → 하나만
⊕ Parallel     (+)  결정 없음    → 전부
◎ Inclusive    (O)  능동적 결정  → 임의 조합
⬡ Event based       수동적 반응  → 먼저 일어난 하나만
```

## 요약

- **Event based gateway는 수동적**이다. 결정하지 않고 **event가 일어나기를 기다린다**
- **뒤에는 항상 catching event가 온다**
- **먼저 발생한 event 하나의 경로만** 활성화된다. 동시 발생 시에도 BPMN은 하나가 먼저라고 가정한다
- **전용 closing gateway가 없다.** 하나의 경로만 활성화하므로 **closing exclusive gateway로 닫는다**
- 이것으로 **BPMN의 gateway 4종을 모두 배웠다**. event based gateway는 **외부 event에 의존하는 프로세스**에 유연성을 더한다
