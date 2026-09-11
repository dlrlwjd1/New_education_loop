# Escalation Event

## 개요

- **Escalation event(에스컬레이션 이벤트)** — 이름 그대로 **에스컬레이션을 촉발**한다
- 용도: **에스컬레이션 상황에서 후속 task를 활성화**한다
- **Error event와의 결정적 차이: non-interrupting 변형이 있다**

## 내용

### 사례 — Deluxe 창고(warehousing) 자동화

**1. 재고 확인 자동화** — 배송할 품목의 가용성 확인이 자동화되어 **ERP 시스템이 재고를 확인하고 결정**한다

**2. 자동 발주** — 품목이 없으면 **시스템이 해당 공급업체에 자동으로 주문**한다

**3. 배송 지연 시 escalation event 촉발**

> **이 배송이 늦어지면 escalation event가 촉발된다. 이것은 부족 품목 조달이라는 부모 task를 취소하지 않는다. non-interrupting이기 때문이며, 점선(dashed)이 그것을 나타낸다.**

4. **두 번째 토큰이 생성**되어 **자동 이메일 task를 촉발**해 **고객에게 지연을 알린다**

### 중요한 규칙 — 하위 프로세스는 언제 완료되는가

> **조달 task는 취소되지 않으므로 하위 프로세스는 여전히 진행 중이다.**
>
> **다시 말해 하위 프로세스 인스턴스는 하위 프로세스 안에 더 이상 토큰이 없고 어떤 activity도 여전히 활성 상태가 아닐 때 완료된다.**
>
> **즉 모든 토큰이 제거되어야 비로소 하위 프로세스가 진행된다.**

### Escalation event의 변형

**Error event와 비슷한 논리를 따른다** — **escalation event도 event sub-process만 촉발할 수 있다.**

**하지만 error event와 대조적으로 non-interrupting sub-process도 시작할 수 있다.**

> **왜냐하면 에스컬레이션은 오류가 발생했을 때처럼 반드시 원래 작업을 멈춘다는 뜻이 아니기 때문이다.**
>
> **방금 본 배송 지연처럼, 에스컬레이션하면서도 병렬로 평상시 업무를 계속할 수 있다.**

**이 논리는 intermediate event에도 적용된다.**

| 계열 | 사용 가능한 변형 |
|---|---|
| **Start** | event sub-process 촉발 — **interrupting과 non-interrupting 둘 다** |
| **Intermediate** | **일반 boundary event**, **non-interrupting boundary event**, **throwing** |
| **End** | **End escalation event** — 프로세스 경로를 종료한다 |

## 예시

```text
Deluxe 창고 자동화 — escalation event

┌─ 창고 하위 프로세스 ─────────────────────────────┐
│  (○) → [재고 확인] (ERP 자동)                     │
│              ↓                                   │
│         ◇ 재고가 있는가? ── no                    │
│              ↓                                   │
│      ┌───────────────────────┐                  │
│      │ [공급업체 자동 발주]    │ ← 계속 진행 ✓     │
│      │  ● 토큰이 살아있다      │                  │
│      └───────(⇗ 점선)─────────┘                  │
│                ┊ 배송 지연 시                     │
│                ↓                                 │
│      [고객에게 지연 자동 이메일] ● ← 두 번째 토큰   │
│                ↓                                 │
│              (◎)                                 │
│                                                  │
│  ← 하위 프로세스는 두 토큰이 모두 사라져야 완료된다  │
└──────────────────────────────────────────────────┘


Error vs Escalation — 결정적 차이

⚡ Error       오류 → 원래 작업을 계속할 수 없다
               → non-interrupting 변형 없음

⇗ Escalation  에스컬레이션 → 알리면서 계속할 수 있다
               → non-interrupting 변형 있음 ✓


Escalation event 변형

┌─ START ─────────────────────────────────────────┐
│ ✗ 일반 start event                              │
│ ✓ event sub-process (interrupting, 실선)         │
│ ✓ event sub-process (non-interrupting, 점선) ★   │
└─────────────────────────────────────────────────┘

┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✗ Catch event                                   │
│ ✓ Interrupting boundary                         │
│ ✓ Non-interrupting boundary ★                   │
│ ✓ Throwing                                      │
└─────────────────────────────────────────────────┘

┌─ END ───────────────────────────────────────────┐
│ ✓ End escalation event                          │
└─────────────────────────────────────────────────┘

★ = error event에는 없고 escalation event에만 있는 것
```

## 요약

- **Escalation event는 에스컬레이션 상황의 후속 task를 활성화**한다
- **error event처럼 event sub-process만 촉발**할 수 있다 (일반 start event 불가)
- **하지만 error와 달리 non-interrupting 변형이 있다** — **에스컬레이션은 원래 작업을 멈추라는 뜻이 아니기 때문**이다
- **하위 프로세스는 모든 토큰이 사라지고 어떤 activity도 활성 상태가 아닐 때 완료**된다
- 전형적 패턴: **지연 발생 → 알림을 보내되 원래 작업은 계속 진행**
