# Theory – Attached Events

## 개요

- **Attached event(부착 이벤트)** — event를 **task에 직접 붙이는** 개념
- 용도: **진행 중인 activity가 어떤 event의 발생으로 중단되는 상황**을 모델링한다
- 중요 규칙: **catching event만 붙일 수 있다**

## 내용

### 지금까지와 다른 점

지금까지는 event를 **activity나 gateway 사이에만** 사용했다. BPMN에서는 event를 **task에 직접 부착(directly attached to a task)** 할 수도 있다.

**이것이 가능하게 하는 것**: 진행 중인 activity가 **event의 발생으로 중단(interrupted)** 되는 상황을 표현한다.

**예시**: 마감 기한(deadline)이 있는 task. 기한이 만료되면 그 task는 **다른 사람에게 위임(delegated)** 된다.

### 규칙 — catching event만 부착 가능

> **task에는 오직 catching event만 붙일 수 있다.**

throwing event는 우리가 능동적으로 보내는 것이므로, "일이 벌어져서 중단된다"는 부착 event의 성격과 맞지 않는다.

### 사례 — Bookworm 서점 주문 프로세스 변형

**상황**: 주문한 책이 재고에 없으면 **영업 관리자(sales manager)가 조달(procure)** 해야 한다. 그런데 서점에는 **고객이 주문을 취소할 수 있다**는 규칙이 있다.

**동작 방식:**

1. 영업 관리자가 **책 조달 task를 수행하는 동안 토큰은 그 task에 머문다**
2. **고객이 주문을 취소하면** → **부착된 conditional event가 촉발된다**
3. → 영업 관리자는 **진행 중이던 activity를 중단**하고
4. → **토큰이 대체 경로(alternative path)로 전환된다**

### 확장성

> BPMN은 conditional event 외에도 **여러 종류의 catching event를 부착할 수 있게 허용한다.**

이 때문에 attached event는 **유연하고 동적인(flexible and dynamic) 프로세스를 모델링하는 강력한 기능**이 된다.

## 예시

```text
Attached event — 진행 중 task의 중단

        ┌────────────────────────┐
        │                        │
(●) →   │   [책 조달하기]         │  ── 정상 완료 → [배송 준비] → (◎)
        │   ← 토큰이 여기 머문다   │
        │                        │
        └───────────(◇)──────────┘
                     ↑
              부착된 conditional event
              "고객이 주문을 취소함"
                     │
                     ↓  중단 발생 시 토큰이 이쪽으로
              [주문 취소 처리] → (◎ 주문 취소됨)


부착 가능 여부

⏱ Catching timer event       → 부착 가능 ✓  (기한 만료)
◇ Catching conditional event → 부착 가능 ✓  (조건 성립)
✉ Catching message event     → 부착 가능 ✓  (외부 연락 수신)
✉ Throwing message event     → 부착 불가 ✗
```

## 요약

- **Attached event는 task에 직접 붙는 event**로, **진행 중인 activity를 중단**시킨다
- **catching event만 부착할 수 있다**
- 부착 event가 촉발되면 **task가 중단되고 토큰이 대체 경로로 전환**된다
- timer, conditional, message 등 여러 catching event를 붙일 수 있어 **동적인 프로세스 모델링**이 가능해진다
- 전형적인 용도: **마감 기한 만료, 고객 취소, 예외 상황 발생**
