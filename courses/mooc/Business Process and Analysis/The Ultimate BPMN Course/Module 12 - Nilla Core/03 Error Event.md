# Error Event

## 개요

- **Error event(오류 이벤트)** — **정의된 기술적 오류(technical error)** 에 의해 촉발된다
- **핵심 원칙: 오류는 항상 예외여야 한다**
- 그래서 **변형이 3가지뿐**이다 (signal event의 8가지와 대비)

## 내용

### 기본 원칙

> **오류는 항상 예외(exception)여야 하므로, start error event는 event sub-process만 촉발할 수 있다.**

즉 **일반 start event로는 쓸 수 없다.** "오류로 프로세스를 시작한다"는 것은 BPMN의 사고방식에 맞지 않는다.

### 사례 — Deluxe의 자동화된 송장 처리

**상황**: 관리자가 주문 프로세스를 자동화하려 한다. 초점은 **송장 처리(invoicing)** 다.

**자동화된 버전의 흐름**

1. **주문서가 작성되면** 송장 처리 하위 프로세스가 준비되어 **즉시 촉발**된다
2. **송장이 자동으로 생성**되고
3. **고객에게 발송**된다
4. **발송이 성공하지 못한 경우** → **end error event가 촉발되어 하위 프로세스를 종료**시킨다
5. 이것이 **부착된 error event를 촉발**하고, **예외 task를 시작**시킨다
6. → **고객에게 송장을 수동으로 발송**한다
7. **입금이 확인되면 케이스를 종료**할 수 있다

### Error event의 3가지 변형

> **error event는 signal event와 달리 3가지 유형만 있다.**
>
> **단순한 이유는 BPMN이 오류를 예외적 event로 가정하기 때문이다.**

| 변형 | 설명 |
|---|---|
| **Start error event** | **event sub-process를 시작하는 용도로만** 쓴다 |
| **Catching boundary event** | 방금 본 것. **하위 프로세스에 부착되어 대체 경로를 촉발**한다 |
| **End error event** | transaction 프로세스 예시에서도 본 것. **오류로 종료**한다 |

**없는 것**: 일반 start event, non-interrupting 변형, throwing intermediate, catch event

## 예시

```text
Deluxe 자동화된 송장 처리 — error event

(○ 주문서 작성됨)
      ↓
┌─ 송장 처리 하위 프로세스 ────────────────┐
│  (○) → [송장 자동 생성] → [고객에게 발송] │
│                              ↓           │
│                     ◇ 발송 성공?          │
│                      │ no                │
│                      ↓                   │
│                (◍ End error event)        │
│                 하위 프로세스 종료          │
└──────────────(⚡ 부착 error event)────────┘
                      ↓
              [송장 수동 발송]  ← 예외 task
                      ↓
              (✉ 입금 확인 대기)
                      ↓
                 (◎ 케이스 종료)


Error event 변형 — 3가지만

┌─ START ─────────────────────────────────────────┐
│ ✗ 일반 start event         (오류로 시작하지 않는다)│
│ ✓ event sub-process 촉발 (interrupting)          │
│ ✗ event sub-process 촉발 (non-interrupting)      │
│    ← 오류는 무시하고 계속할 수 없다                │
└─────────────────────────────────────────────────┘

┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✗ Catch event                                   │
│ ✓ Interrupting boundary   (부착 + 취소)          │
│ ✗ Non-interrupting boundary                     │
│ ✗ Throwing                (오류를 던지지 않는다)   │
└─────────────────────────────────────────────────┘

┌─ END ───────────────────────────────────────────┐
│ ✓ End error event         오류로 종료             │
└─────────────────────────────────────────────────┘

핵심: error에는 non-interrupting이 없다
      오류가 났는데 원래 작업을 계속할 수는 없기 때문
```

## 요약

- **Error event는 정의된 기술적 오류로 촉발**된다
- **BPMN은 오류를 예외로 가정**하므로 **변형이 3가지뿐**이다
  - **Start** — event sub-process 촉발 전용
  - **Interrupting boundary** — 부착되어 대체 경로 촉발
  - **End** — 오류로 종료
- **non-interrupting 변형이 없다**는 것이 핵심이다. **오류가 났는데 원래 작업을 그대로 계속할 수는 없기 때문**이다
- 전형적 패턴: **자동 처리 실패 → error event → 수동 대체 경로**
