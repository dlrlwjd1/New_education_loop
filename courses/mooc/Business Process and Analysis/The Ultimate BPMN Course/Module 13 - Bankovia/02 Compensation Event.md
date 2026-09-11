# Compensation Event

## 개요

- **Compensation event(보상 이벤트)** — **이미 완료된 task를 되돌린다(undo)**
- 비유: **테이프를 되감는 것(rewinding a tape)**. 기호도 그 모양이다
- **전제 조건: 되돌릴 task가 먼저 완료되어 있어야 한다**

## 내용

### 개념

이 event는 **이미 완료된 task를 취소(undo)** 하는 데 사용된다.

> **명심할 점은 되돌릴 task가 먼저 완료되어 있어야 한다는 것이다.**

### 표기법 — 조금 특별하다

> **compensation event는 점선(dotted line)으로 compensation task에 연결된다.**

**중요한 차이점**

> **보상할 task는 보상하기 전에 완전히 완료되어야 한다. 이런 의미에서 이 부착 event는 평소와 달리 task를 중단시키지 않는다. 이미 완료되었기 때문이다.**

### 사례 — Deluxe 주문 프로세스

**두 개의 대응하는 compensation event를 적용**했다.

**진행 과정**

1. **두 하위 프로세스가 모두 촉발**된다
2. **창고**는 주문 가용성을 확인하느라 바쁘고, **경리부는 순조롭게 송장을 만들어 고객에게 바로 발송하고 대금까지 받아 사실상 일을 끝냈다**
3. **그런데 고객이 주문을 취소한다**
4. **주문 취소가 촉발되어 평소처럼 처리**된다
5. **하지만 송장이 이미 발송되었으므로**, 토큰이 **exclusive gateway에서 아래쪽 경로**를 탄다
6. → **송장을 무효화(revoke)하는 compensation event를 촉발**한다
7. 이것이 **송장 처리 하위 프로세스에 부착된 compensation event를 촉발**하고
8. → **송장을 무효화하고 고객에게 지불한 금액을 환불하는 compensation task를 활성화**한다
9. **케이스를 종료**할 수 있다

### 왜 유용한가

> **이 개념으로 우리가 이미 한 특정 task를 되돌려야 하는 상황을 매우 단순하고 간결하게 표현할 수 있다.**
>
> **송장 처리 전체를 되돌리는 것을 전용 gateway와 task로 모델링해야 한다고 상상해 보라. 아마도 가끔씩만 일어나는 상황을 표현하기 위해 프로세스를 크게 복잡하게 만들 것이다.**

### Compensation event의 변형

| 계열 | 사용 가능 여부 |
|---|---|
| **Start** | **일반(regular) 또는 interrupting event sub-process에서만** 사용 가능. **error event와 비슷한 가정** — **보상은 항상 현재 흐름을 중단시키는 예외**이기 때문 |
| **Intermediate** | **boundary event** 또는 **throwing event**로 사용 가능 (Deluxe에서 본 것) |
| **End** | **하위 프로세스를 compensation event로 종료**해 **다른 곳의 catching compensation event를 촉발**할 수 있다 |

## 예시

```text
Deluxe 주문 프로세스 — compensation event

┌─ 창고 하위 프로세스 ─┐   ┌═ 경리: 송장 처리 ══════┐
│ [가용성 확인]        │   ║ [송장 생성]            ║
│ (진행 중...)         │   ║ [송장 발송]            ║
│                      │   ║ [입금 확인] ← 완료됨 ✓ ║
└──────────────────────┘   ╚══════(↺ 부착)═════════╝
                                    ┊ 점선 연결
                                    ↓
                          [송장 무효화 · 환불]  ← compensation task
                                    ↑
                                    │ 촉발
(✉ 고객이 주문 취소)                 │
        ↓                           │
   [취소 처리]                       │
        ↓                           │
   ◇ 송장이 이미 발송되었는가?        │
    ├─ no  → (◎ 종료)               │
    └─ yes → (↺ throwing) ──────────┘
                ↓
           (◎ 케이스 종료)


핵심: 부착된 compensation event는 task를 중단시키지 않는다
      이미 완료된 task를 "되감는" 것이기 때문


일반 attached event와의 차이

⚡ 일반 attached event   진행 중인 task를 중단시킨다
↺ compensation event    완료된 task를 되돌린다 (중단 아님)


Compensation event 변형

┌─ START ─────────────────────────────────────────┐
│ ✗ 일반 start event                              │
│ ✓ event sub-process (interrupting)              │
│ ✗ event sub-process (non-interrupting)          │
│    ← 보상은 항상 현재 흐름을 중단시키는 예외      │
└─────────────────────────────────────────────────┘
┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✓ Boundary event   (완료된 task에 부착)          │
│ ✓ Throwing         (보상을 촉발)                 │
└─────────────────────────────────────────────────┘
┌─ END ───────────────────────────────────────────┐
│ ✓ End compensation event                        │
│   → 다른 곳의 catching compensation을 촉발        │
└─────────────────────────────────────────────────┘
```

## 요약

- **Compensation event는 이미 완료된 task를 되돌린다.** 테이프 되감기 비유
- **전제 조건: 보상할 task가 완전히 완료되어 있어야 한다**
- **점선으로 compensation task에 연결**된다
- **일반 attached event와 달리 task를 중단시키지 않는다** — 이미 끝났기 때문
- **gateway와 task로 되돌리기 로직을 다 그리는 것보다 훨씬 간결**하다. 가끔 일어나는 예외를 위해 프로세스를 복잡하게 만들지 않는다
- 전형적 사례: **송장 발송 후 주문 취소 → 송장 무효화 + 환불**
