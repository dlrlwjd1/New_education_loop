# Multiple Event

## 개요

- **Multiple event(다중 이벤트)** — **여러 event를 하나로 요약**한다
- catching인 경우 **exclusive gateway와 같은 논리**를 따른다 (여럿 중 하나)
- **제약**: Camunda Modeler에는 구현되어 있지 않다

## 내용

### 개념

이 event는 **여러 event를 하나로 요약(summarize)** 하는 데 쓴다.

> **catching event인 경우 exclusive gateway와 같은 논리를 따른다.**

즉 **여러 촉발 조건 중 하나만 일어나면 된다.**

### 사례 — Deluxe의 제품 카탈로그 발송

카탈로그를 발송하는 경우는 **본질적으로 두 가지**다.

1. **고객이 최신 제품 카탈로그를 요청**하면 발송한다
2. **새 제품 카탈로그가 발행**되면 역시 발송한다

> **이 프로세스가 시작될 수 있는 방법이 두 가지이고, 둘 중 어느 event든 이 프로세스를 촉발할 수 있다.**

→ **두 개의 start event를 multiple start event 하나로 대체**할 수 있다. 왼쪽의 구조를 오른쪽의 단일 event로 병합하는 것이다.

### 제약 — 모델러 지원

> **Camunda는 multiple event를 구현하지 않기로 결정했다. 그래서 Camunda Modeler로 프로세스를 모델링한다면 이것을 쓸 수 없다.**

(그 이유는 다음 강의 `05 Multiple Parallel Event`에서 상세히 설명된다.)

### Multiple event의 변형 — 제약 없음

> **이 event의 사용에 관해서는 신경 쓸 제약이 없다. signal event와 마찬가지로 모든 event 유형이 허용된다.**

## 예시

```text
Deluxe 제품 카탈로그 발송

✗ 개별 event 2개 사용 (원래 방식)

(✉ 고객이 카탈로그 요청) ──┐
                           ├──→ [카탈로그 발송] → (◎)
(⏱ 새 카탈로그 발행됨) ────┘
     ↑ 어떤 event가 촉발하는지 보인다


✓ Multiple start event로 병합

(⬠ Multiple start event) ──→ [카탈로그 발송] → (◎)
     ↑ 두 촉발 조건이 하나로 요약됨
       (하지만 무엇이 촉발했는지는 안 보인다)


Catching multiple event의 논리

⬠ Multiple          여러 중 하나 → ◇ exclusive gateway와 같은 논리
⬠ Multiple parallel 전부 필요    → ⊕ parallel gateway와 같은 논리
                                    (다음 강의)


Multiple event 변형 — 제약 없음

┌─ START ─────────────────────────────────────────┐
│ ✓ 일반 start event                              │
│ ✓ event sub-process (interrupting)              │
│ ✓ event sub-process (non-interrupting)          │
└─────────────────────────────────────────────────┘
┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✓ Catch  ✓ Boundary  ✓ Non-interrupting  ✓ Throwing │
└─────────────────────────────────────────────────┘
┌─ END ───────────────────────────────────────────┐
│ ✓ End multiple event                            │
└─────────────────────────────────────────────────┘

signal event와 함께 모든 유형이 허용되는 event다.
```

## 요약

- **Multiple event는 여러 event를 하나로 요약**한다
- **catching인 경우 exclusive gateway 논리** — **여럿 중 하나**만 일어나면 촉발된다
- **signal event처럼 모든 event 유형이 허용**된다
- **하지만 Camunda Modeler에서는 사용할 수 없다**
- 강사는 다음 강의에서 **이 event 사용을 권하지 않는 이유**를 설명한다
