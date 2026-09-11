# Theory – Parallel Gateway

## 개요

- **Parallel gateway(병렬 게이트웨이)** 의 동작 원리
- 표시: 가운데에 **큰 플러스(+) 기호**
- 핵심: **질문하지 않는다. 모든 나가는 branch를 자동으로 활성화한다**

## 내용

### Exclusive gateway와의 결정적 차이

| | Exclusive gateway | Parallel gateway |
|---|---|---|
| 기호 | X 표시 | **큰 플러스(+) 기호** |
| 질문 | 한다 (decision point) | **하지 않는다** |
| 경로 | **하나만** 선택 | **모든** 나가는 branch를 동시에 활성화 |

parallel gateway는 **어떤 질문도 하지 않고 의사결정도 하지 않는다.** 대신 나가는 모든 branch를 자동으로 활성화한다.

### 토큰 관점에서의 동작

**여는 gateway (splitting)**

1. 토큰이 parallel gateway에 도착하면 **복제(cloned)** 된다
2. 나가는 branch가 3개면 토큰은 **3개의 별도 토큰으로 분리**된다
3. 각 토큰이 자기 branch를 따라간다
4. branch 개수와 무관하게 **각 branch마다 토큰 하나씩** 받으므로 모든 경로가 **동시에** 활성화된다

**닫는 gateway (merging / synchronization)**

1. 반대쪽 끝에서 **짝이 되는 closing gateway가 모든 토큰이 돌아오기를 기다린다**
2. 3개의 sequence flow가 gateway로 돌아온다면 **정확히 3개의 토큰이 도착하기를 기대**한다
3. 모든 토큰이 확인되면 gateway는 **토큰을 하나로 병합**하고 프로세스를 계속 진행시킨다

> 이 "기다림"이 parallel gateway의 핵심이다. 단순히 나누기만 하는 게 아니라 **동기화(synchronization) 지점**을 만든다.

### 두 gateway를 헷갈리지 않는 법 — 기억의 다리(mental bridges)

> exclusive gateway와 parallel gateway는 **생김새가 비슷해서 숙련된 BPMN 전문가도 자주 혼동한다.**

강사가 제안하는 연상법:

- **Exclusive gateway** → **의사결정의 부정적 답변**과 연결한다. *"아니, 이 경로는 너를 위한 게 아니야"* 라고 말하는 방식
- **Parallel gateway** → **수학의 플러스(+) 기호**와 연결한다. 전부 더하는 것처럼 **모든 나가는 경로를 동시에 활성화**한다

> 강사는 이 연상이 안 맞으면 **자기만의 연상을 만들라**고 권한다. 사람마다 기억하는 방식이 다르므로 직접 만든 연결이 더 잘 작동할 수 있다.

## 예시

```text
Parallel gateway — 토큰의 복제와 병합

                    ┌─→ [Task A] ─┐   (●)
                    │              │
(○) → ● → ⊕ ────────┼─→ [Task B] ─┼──→ ⊕ → ● → (◎)
        토큰    복제 │              │   대기 후 병합
        1개    3개로 └─→ [Task C] ─┘
                    (●)  (●)  (●)
                    각 branch가 토큰 하나씩 받음

여는 ⊕ : 토큰 1개 → 3개로 복제, 모든 경로 동시 활성화
닫는 ⊕ : 토큰 3개가 모두 도착할 때까지 대기 → 1개로 병합


Exclusive gateway와 비교

           ┌─→ [Task A]   ← 선택 안 되면 토큰 없음
(●) → ◇ ──┤
           └─→ [Task B]  (●)  ← 하나만 선택
```

## 요약

- **Parallel gateway는 큰 플러스(+) 기호**로 표시된다
- **질문하지 않고 의사결정도 하지 않는다.** 나가는 모든 branch를 자동 활성화한다
- 토큰이 **branch 개수만큼 복제**되어 모든 경로가 동시에 진행된다
- **닫는 parallel gateway는 모든 토큰이 도착할 때까지 기다렸다가** 하나로 병합한다 — 이것이 동기화 지점이다
- exclusive는 "하나만", parallel은 "전부" — 플러스 기호가 "전부 더한다"는 것을 기억하는 단서다
