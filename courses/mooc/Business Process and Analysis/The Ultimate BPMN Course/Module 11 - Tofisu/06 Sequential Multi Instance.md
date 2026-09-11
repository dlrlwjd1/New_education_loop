# Sequential Multi Instance

## 개요

- **Sequential multi-instance task(순차 다중 인스턴스 작업)** — activity가 **순차적으로(sequentially) 실행**된다
- 실행은 **정의된 조건으로 종료**된다
- **핵심 질문: loop task와 무엇이 다른가?** → **입력(input)이 같은가 다른가**

## 내용

### 사례 — Bookworm 서점의 급여일

**Bookworm 서점에서는 송금이 순차적**이다. 즉 **각 급여가 해당 직원에게 하나씩 이체**된다.

**프로세스**

1. **급여일 3일 전** 재무팀이 **급여 계좌의 유동성(liquidity)을 확인**한다
2. 문제가 없으면 **급여일에 급여가 이체**된다
3. Space Z 사례와 마찬가지로, **투박한 gateway 구조가 6명의 직원 모두가 돈을 받을 때까지 하나씩 이체를 처리**하고 있었다
4. 같은 방식으로 **sequential multi-instance task로 바꾼다** → **프로세스가 훨씬 깔끔하고 명시적**이 된다

> 참고: **sequential task는 당연히 3번보다 많이도 적게도 실행될 수 있다.**

### 핵심 — Loop task와 Multi-instance의 차이

강사가 명확히 구분한다.

**Space Z의 내열 패널 → loop task를 썼다**

> **양산 시스템(serial production system)의 핵심 특성은 이상적으로 생산되는 모든 품목 — 여기서는 내열 패널 — 이 정확히 동일하다는 것이다. 애초에 기계를 설치한 이유가 바로 그것이다. 높은 효율로 똑같은 것을 반복해서 만들기 위해서다.**
>
> 다시 말해 **task가 같은 입력으로 여러 번 수행된다.**

**Bookworm 서점의 급여 → multi-instance task를 썼다**

> **대조적으로 급여는 다르다. 파트타임으로만 일하는 서점 직원은 풀타임 직원과 다른 급여를 받는다.**
>
> 즉 **task가 서로 다른 입력으로 여러 번 수행된다.**

### 판단 규칙

> **입력이 같으면 loop를 쓴다. 입력이 다르면 multi-instance task로 간다.**

## 예시

```text
Loop vs Multi-instance — 판단 기준

[Task ↻]        Loop
                같은 입력으로 반복
                예: 동일한 내열 패널 100개 생산
                    → 매번 같은 작업

[Task ≡]        Sequential multi-instance
                다른 입력으로 하나씩 반복
                예: 직원 6명에게 각자 다른 급여 이체
                    → 매번 다른 금액, 다른 계좌


Bookworm 서점 급여 프로세스

(⏱ 급여일 3일 전)
        ↓
  [급여 계좌 유동성 확인]
        ↓
   ◇ 문제없는가? ── yes
        ↓
  (⏱ 급여일)
        ↓
  [급여 이체 ≡]  ← sequential multi-instance
        │          직원 6명에게 하나씩
        ↓
     (◎ 완료)


✗ 바꾸기 전 (gateway 구조)

  ◇ ←──────────────┐
  ↓                │
[직원 1명 급여 이체] │
  ↓                │
  ◇ 다 했나? ───────┘ no
  ↓ yes
```

## 요약

- **Sequential multi-instance는 activity를 순차적으로 여러 번 실행**한다
- **Loop task와의 차이는 입력이 같은지 다른지**다
  - **같은 입력** → **loop task** (동일 제품 양산)
  - **다른 입력** → **multi-instance task** (직원마다 다른 급여)
- 둘 다 **gateway로 만든 투박한 반복 구조를 기호 하나로 대체**한다
- 실행 횟수는 고정되어 있지 않다 — 조건에 따라 정해진다
