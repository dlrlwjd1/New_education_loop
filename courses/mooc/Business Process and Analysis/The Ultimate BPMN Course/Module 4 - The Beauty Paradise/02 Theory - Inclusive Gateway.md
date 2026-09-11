# Theory – Inclusive Gateway

## 개요

- 세 번째 gateway인 **inclusive gateway(포함 게이트웨이)**
- 표시: 가운데에 **큰 원(O)**
- 핵심: **경로의 임의 조합(any combination)을 활성화할 수 있다**

## 내용

### 기본 성격

inclusive gateway는 이미 익숙한 exclusive gateway와 마찬가지로 **결정 지점(decision point)** 역할을 한다. exclusive gateway처럼 **위에 질문이 적혀 있는 경우가 많다.**

**구분법: 가운데의 큰 원(circle 또는 O)**

### Exclusive · Parallel과의 비교

| Gateway | 기호 | 활성화되는 경로 |
|---|---|---|
| **Exclusive** | X | **정확히 하나** |
| **Parallel** | + | **전부** (조건 없음) |
| **Inclusive** | **O** | **임의의 조합** (조건에 따라 1개, 2개, 또는 전부) |

inclusive gateway는 상황에 따라 토큰을

- 한 경로로만 보내거나
- 둘로 나누거나
- 셋으로 늘릴 수도 있다

예를 들어 경로 2와 3이 선택되면 **토큰이 2개로 복제(doubles)** 된다.

### 닫는 inclusive gateway — 여기에 반전이 있다

다른 gateway처럼 inclusive gateway도 닫을 수 있다. 하지만 **한 가지 특별한 성질**이 있다.

> **닫는 inclusive gateway는 자신에게 들어오는 모든 토큰 흐름을 완전히 인지하고 있다(fully aware of all the token flows leading into it).**

예시에서 옵션 2와 3이 선택되었다면, closing gateway는 **아래쪽 경로와 가운데 경로 두 곳에서 토큰이 올 것을 알고** 두 토큰이 모두 도착할 때까지 기다린 뒤 진행한다.

**즉 parallel gateway처럼 "무조건 전부"를 기다리는 것이 아니라, 이번에 실제로 활성화된 경로만큼만 기다린다.**

## 예시

```text
Inclusive gateway — 조건에 따라 임의 조합 활성화

                    ┌─→ [경로 1]  (선택 안 됨, 토큰 없음)
                    │
(●) → ◎ ────────────┼─→ [경로 2] (●) ─┐
      inclusive     │                  │
      큰 원(O)      └─→ [경로 3] (●) ─┤
                                       ↓
                                       ◎  ← 닫는 inclusive
                                       │    "2번과 3번에서 올 것"을 알고
                                       │    토큰 2개만 기다린다
                                       ↓
                                      (●)


세 gateway 비교

Exclusive ◇(X)  →  ●        하나만
Parallel  ⊕(+)  →  ● ● ●    전부
Inclusive ◎(O)  →  ● ●      조건에 맞는 것만 (조합 자유)
```

## 요약

- **Inclusive gateway는 가운데 큰 원(O)** 으로 표시하며 결정 지점 역할을 한다
- **경로의 임의 조합을 활성화**할 수 있다 — 1개, 2개, 전부 모두 가능
- **닫는 inclusive gateway는 어느 경로가 활성화되었는지 알고 있어서**, 실제로 활성화된 경로의 토큰만 기다린다
- exclusive(하나) · parallel(전부) · inclusive(조합) 세 가지로 gateway의 기본 논리가 완성된다
