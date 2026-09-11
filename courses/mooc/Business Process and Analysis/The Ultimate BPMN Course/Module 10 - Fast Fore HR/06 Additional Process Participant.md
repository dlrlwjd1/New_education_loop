# Additional Process Participant

## 개요

- **Additional process participant(추가 프로세스 참여자)** — **lane으로 지정된 역할 외에 task에 참여하는 역할**을 명시한다
- 전형적 용도: **승인자(approver)**
- **중요한 제약**: 표준 BPMN이 아니라 **SAP Signavio의 확장(extension)** 이다

## 내용

### 개념

이 기호로 **lane을 통해 지정된 역할에 더해, 해당 task에 참여하는 역할을 명시**할 수 있다.

> **예를 들어 승인자(approver)의 경우 매우 유용하다.**

### 제약 사항

> **이것은 SAP Signavio가 만든 확장이다. 즉 Signavio Modeler를 사용할 때만 이 요소에 접근할 수 있다. 다른 BPMN 모델러에서는 찾을 수 없다.**

### 함께 쓰는 개념 — RACI 역할 프레임워크

이 요소를 올바르게 적용하려면 **프로세스 내 책임을 정의하는 널리 쓰이는 기본 역할 프레임워크**가 필요하다.

**RACI** — 사람이 주어진 프로세스 task와 관계 맺는 **네 가지 방식**

| 약자 | 의미 |
|---|---|
| **R** — Responsible | **책임지고 실행하는** 사람 |
| **A** — Accountable | **최종 책임을 지는** 사람 |
| **C** — Consulted | **자문을 받는** 사람 |
| **I** — Informed | **통보받는** 사람 |

### 사례 — Space Z 생산 계획

**기획팀이 생산 계획을 만든다.** 그런데 **생산팀이 실제로 그것을 감당할 수 있는지 확인하기 위해 생산 부서와 상의하는 것이 당연하다.**

**이것을 additional process participant로 표현한다.**

> **task와 additional process participant를 잇는 선(line)에 관계를 문서화할 수 있다.**

**이 구조가 보여주는 것:**

- **기획팀과 생산팀이 `생산 계획 수립` task에서 함께 일한다**
- **기획팀이 그 task의 responsible이다** — task가 여전히 **기획팀의 lane에 있기 때문**이다
- **하지만 좋은 생산 계획을 내기 위해 생산팀에게 자문을 구한다(consulted)**

## 예시

```text
Additional process participant + RACI

┌─ Pool: Space Z ────────────────────────────────┐
│  ├─ Lane: 기획팀 ─────────────────────────────┐ │
│  │                                            │ │
│  │      [생산 계획 수립]                       │ │
│  │            │  ← task가 기획팀 lane에 있으므로 │ │
│  │            │     기획팀 = Responsible        │ │
│  │            │                                │ │
│  │            ┊ "Consulted"  ← 선에 관계를 표기  │ │
│  │            ┊                                │ │
│  │      ⬭ 생산팀  ← additional process         │ │
│  │                   participant               │ │
│  └────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘

읽는 법:
  기획팀이 계획을 만든다 (R)
  생산팀에게 자문을 구한다 (C)
  → 감당 가능한 계획인지 확인


RACI 정리

R  Responsible  실행 책임    → 보통 lane이 나타낸다
A  Accountable  최종 책임
C  Consulted    자문           → additional participant로 표현
I  Informed     통보받음       → additional participant로 표현
```

## 요약

- **Additional process participant는 lane 외의 참여 역할**을 task에 명시한다
- **task와 참여자를 잇는 선에 RACI 관계를 표기**한다
- **lane에 있는 역할이 Responsible**이고, 추가 참여자는 보통 **Consulted나 Informed**다
- **표준 BPMN이 아니라 SAP Signavio 전용 확장**이다. 다른 모델러에서는 쓸 수 없다
