# The Multimerge

## 개요

- 두 번째 함정 **multi-merge(다중 병합)**
- 원인: **여는 parallel gateway를 닫는 exclusive gateway와 짝지었을 때**
- 결과: **같은 activity가 여러 번 실행된다(multiple executions)**

## 내용

### Deadlock과의 차이

| | Deadlock | Multi-merge |
|---|---|---|
| 결과 | 프로세스가 **멈춘다** | 프로세스가 **중복 실행된다** |
| 문제 유형 | 정지 | **중복(duplication)과 불필요한 반복(redundancy)** |

### 왜 중복되는가

1. **여는 parallel gateway가 여러 개의 토큰을 만든다** (예: 2개)
2. **닫는 exclusive gateway는 토큰을 병합하지 않는다.** 대신 **각각을 독립적으로 그냥 통과시킨다(forwards each of them independently)**
3. → **이후의 모든 activity가 토큰 개수만큼 여러 번 실행된다**
4. 토큰이 하나로 병합되지 않고 **여러 개가 프로세스 전체를 계속 굴러다닌다**

### 사례 — Bookworm 서점 주문 프로세스에 multi-merge를 넣으면

1. **parallel gateway가 토큰 2개를 발행**한다 → 포장 준비(package preparation)와 송장 생성(invoice generation)이 병렬로 실행된다. **여기까지는 의도한 대로다**
2. 그런데 **닫는 exclusive gateway가 토큰을 다시 병합하지 않고 둘 다 독립적으로 통과**시킨다
3. → **"물품 배송(ship item)" activity가 두 번 실행된다.** 토큰 하나당 한 번씩

### 왜 문제인가 — "논리적으로 말이 되는 것 같은데?"

> 소포와 송장을 따로 배송하는 것이 **논리적으로 보일 수 있다.** 하지만 **이 모델링 방식은 불명확하고 매우 오해를 부른다(unclear and very misleading).**

**검토자(reviewer)가 두 번째 토큰의 존재를 아예 놓칠 수 있고**, 그러면 프로세스 로직을 잘못 이해하게 된다.

## 예시

```text
✗ Multi-merge — 잘못된 모델

              ┌─→ [포장 준비] ──┐ (●)
              │                  │
(●) → ⊕ ──────┤                  ├──→ ◇ ── (●) → [물품 배송] → (◎)
   토큰 1개   │                  │    닫는     └─ (●) → [물품 배송] → (◎)
   parallel   └─→ [송장 생성] ──┘  exclusive         ↑
   2개로 복제       (●)              병합 안 함    같은 activity가
                                     그냥 통과      두 번 실행됨


✓ 올바른 모델

              ┌─→ [포장 준비] ──┐ (●)
              │                  │
(●) → ⊕ ──────┤                  ├──→ ⊕ → (●) → [물품 배송] → (◎)
              │                  │    닫는 parallel      한 번만 실행
              └─→ [송장 생성] ──┘      토큰 2개를 1개로 병합
                    (●)


짝짓기 규칙 (전체)

여는 ◇ (exclusive) → 닫는 ◇ (exclusive)  ✓
여는 ⊕ (parallel)  → 닫는 ⊕ (parallel)   ✓
여는 ◇ (exclusive) → 닫는 ⊕ (parallel)   ✗ Deadlock    (멈춤)
여는 ⊕ (parallel)  → 닫는 ◇ (exclusive)  ✗ Multi-merge (중복)
```

## 요약

- **Multi-merge는 여는 parallel + 닫는 exclusive** 조합에서 발생한다
- 닫는 exclusive gateway가 **병합하지 않고 각 토큰을 그냥 통과**시킨다
- 결과적으로 **이후 activity가 토큰 개수만큼 반복 실행**된다
- deadlock처럼 프로세스를 멈추지는 않지만, **모델을 불명확하고 오해하기 쉽게** 만든다
- 검토자가 여분의 토큰을 놓치면 프로세스 로직 자체를 오해하게 된다
