# Multiple Parallel Event

## 개요

- **Multiple parallel event(다중 병렬 이벤트)** — **BPMN의 마지막 event**
- multiple event와 같지만 catching인 경우 **AND 논리**를 따른다 (전부 필요)
- **강사의 명확한 best practice 조언: multiple 계열 두 event는 쓰지 마라**

## 내용

### 개념

multiple event와 매우 가깝다. **여러 event를 하나로 요약**하되, **catching인 경우 AND 논리를 따른다**는 점이 다르다.

| Event | Catching 논리 | 대응하는 gateway |
|---|---|---|
| **Multiple** | 여럿 중 **하나** | exclusive gateway |
| **Multiple parallel** | **전부** 필요 | parallel gateway |

### 사례 — Deluxe 마케팅 부서의 소셜 미디어 캠페인

**두 event가 병렬로 발생해야 한다.**

1. **신제품 TV 캠페인이 이틀 동안 진행되어야 한다** → 조건 충족 시 **토큰 하나가 생성되어 parallel gateway에서 대기**
2. **신제품의 전체 컬렉션이 준비되어 있어야 한다** → 충족 시 **두 번째 토큰이 발행**
3. **그러면 프로세스, 더 정확히는 task들이 실행**된다 → **마케팅 캠페인 시작**

→ **병렬 논리를 따르는 여러 event를 단일 event로 병합**할 수 있다.

### 변형 — throwing만 제외

> **multiple parallel event로는 throwing 유형을 제외한 모든 event 유형을 사용할 수 있다.**

**제약**: **일반 multiple event와 마찬가지로 Camunda에서도 사용할 수 없다.**

### 강사의 조언 — 왜 Camunda가 구현하지 않았는가, 그리고 왜 쓰지 말아야 하는가

강사는 Camunda의 결정을 **"내가 보기에 이해할 만한 결정"** 이라고 하며 두 가지 이유를 든다.

**이유 1 — 애초에 쓸 상황이 드물다**

> **현장 경험에서 말하자면, start event가 여러 개인 프로세스 모델은 상당히 드물다. 그래서 이 event들을 적용할 수 있는 시나리오 자체가 애초에 제한적이다.**

**이유 2 — 정보를 감추는데 명확성은 별로 나아지지 않는다 (더 중요)**

> **multiple event는 가치 있는 정보를 감추면서도 프로세스의 명확성은 실질적으로 크게 개선하지 못한다.**

**구체적으로 무엇을 잃는가**

> **multiple event를 사용하면 어떤 event가 프로세스를 촉발하는지 더 이상 알 수 없다.**
>
> 일반적인 방식으로 쓰면 **이 프로세스를 시작하려면 message event가 필요한지 timer event가 필요한지 볼 수 있다.**
>
> 두 번째 예시도 마찬가지인데, 여기서는 **두 event가 병렬로 일어나야 한다**는 차이가 있다. **multiple event 유형을 적용하면 이 개별 event들에 대한 정보가 사라진다.**

**얻는 것은 얼마나 되는가**

> **이 추상화를 통해 얻는 공간이나 명확성의 양은 내 생각에 상당히 미미하다.**
>
> **예를 들어 sub-process와 비교해 보라. sub-process는 10개, 20개의 task와 event를 하나의 activity로 캡슐화할 수 있다. 그에 비하면 이 구조는 상당히 제한적으로 보인다.**

**결론**

> **짧게 말해, 내 best practice 조언은 두 가지 multiple event 유형을 피하려고 노력하라는 것이다. 드물게 말이 되는 경우가 있을 거라고 확신하지만, 내가 여러분이라면 단순하게 유지하고 그냥 쓰지 않겠다.**

## 예시

```text
Deluxe 마케팅 캠페인

✗ 개별 event 2개 + parallel gateway (원래 방식)

(⏱ TV 캠페인 2일 경과) ──┐
                          ⊕ ──→ [마케팅 캠페인 시작] → (◎)
(◇ 전체 컬렉션 준비됨) ───┘
     ↑ 어떤 조건이 필요한지 명확히 보인다


✓ Multiple parallel start event로 병합 (기술적으로는 가능)

(⬠ Multiple parallel) ──→ [마케팅 캠페인 시작] → (◎)
     ↑ 두 조건이 하나로 요약됨
       하지만 timer인지 conditional인지 알 수 없다 ← 정보 손실


강사의 판단 — 추상화의 손익

              감추는 정보          얻는 명확성
Sub-process   task 10~20개    →   크다 ✓  (쓸 만하다)
Multiple      event 2개       →   미미하다 ✗ (쓰지 마라)


Multiple parallel event 변형

┌─ START ─────────────────────────────────────────┐
│ ✓ 일반 start event                              │
│ ✓ event sub-process (interrupting)              │
│ ✓ event sub-process (non-interrupting)          │
└─────────────────────────────────────────────────┘
┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✓ Catch  ✓ Boundary  ✓ Non-interrupting          │
│ ✗ Throwing  ← 유일한 제외                        │
└─────────────────────────────────────────────────┘
┌─ END ───────────────────────────────────────────┐
│ ✓ End multiple parallel event                   │
└─────────────────────────────────────────────────┘

※ Camunda Modeler에서는 multiple 계열 둘 다 사용 불가
```

## 요약

- **Multiple parallel event는 catching 시 AND 논리**를 따른다 — **모든 조건이 충족되어야** 촉발된다
- **throwing을 제외한 모든 event 유형**을 쓸 수 있다
- **이것으로 BPMN 2.0의 event 13종을 모두 배웠다**
- **강사의 명확한 조언: multiple 계열 두 event는 쓰지 마라**
  - **start event가 여러 개인 프로세스 자체가 드물다**
  - **어떤 event가 촉발하는지 정보를 감추면서, 얻는 명확성은 미미하다**
  - **sub-process는 task 10~20개를 감추므로 이득이 크지만, multiple event는 event 2개를 감출 뿐이다**
- 이것은 **추상화의 손익을 따지는 좋은 사고 훈련**이기도 하다 — 감추는 것에 비해 얻는 것이 충분한가
