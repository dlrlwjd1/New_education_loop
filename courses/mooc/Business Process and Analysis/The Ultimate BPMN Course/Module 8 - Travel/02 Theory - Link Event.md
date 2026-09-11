# Theory – Link Event

## 개요

- **Link event(링크 이벤트)** — 항상 **throwing과 catching 한 쌍(pair)** 으로 나타난다
- 함께 **sequence flow를 대체**한다
- 두 가지 용도: **교차하는 흐름 제거**, **거대한 프로세스 절단**

## 내용

### 기본 규칙

- **throwing link event가 catching link event를 활성화**한다
- 둘이 함께 **sequence flow를 대체**한다
- **두 event는 반드시 같은 이름을 공유해야 한다** — 어느 것끼리 짝인지 쉽게 알아볼 수 있도록

### 용도 1 — 교차하는 sequence flow 피하기

교차하는 흐름은 **프로세스를 어지럽히고 명확성을 떨어뜨린다.**

**예시**: 우주선 프로세스에서 **결함 샘플이 생산 계획 수정을 요구**할 때, 교차하는 흐름을 그리면 프로세스가 훨씬 읽기 어려워진다.

**해결**: **link event 한 쌍을 삽입**한다. throwing link event가 토큰을 catching link event로 보내 **교차 흐름을 우회**한다. → **가독성이 개선된다**

### 용도 2 — 지나치게 큰 프로세스 자르기

Module 7의 best practice에서 다룬 **비즈니스 사용자가 따라가기에 너무 큰 프로세스** 문제의 해법이다.

> **프로세스를 작은 부분으로 자르고, 끊어진 부분을 link event로 다시 연결한다.**

**계산 방법**

> **sequence flow 3개를 자르면 느슨한 끝(loose ends)이 6개 생긴다. 이를 다시 연결하려면 link event 3쌍이 필요하다.**

**결과 예시**

- **1부**는 `machines have been configured for the first batch production(첫 배치 생산을 위해 기계가 구성되었다)` 이라는 **throwing link event로 끝난다**
- **2부**는 대응하는 **catching event로 시작**한다. `quality of the first batch is insufficient(첫 배치의 품질이 불충분하다)`, `negative feedback from the customer(고객의 부정적 피드백)` 같은 시나리오를 함께 포함한다

### 두 가지 핵심 규칙

> 1. **intermediate link event만 허용된다.** **start link event나 end link event는 없다**
> 2. **후속 프로세스(follow-up process)를 연결하는 데 link event를 쓰면 안 된다.** 그럴 때는 **일반 start/end event**를 사용한다

### 자를 것인가, 후속 프로세스로 만들 것인가

이 판단이 어려울 수 있다. 결정하려면 스스로에게 묻는다.

> - **내 프로세스의 시작과 끝은 무엇인가?**
> - **내 프로세스의 목표는 무엇인가?**

**예시 — 신발 매장 프로세스**

Max의 목표는 **고객에게 신발을 판매하는 것**이다.

- **신발 청소하기**, **관리용품 추천하기** 같은 task는 **당면 프로세스의 일부가 아니다**
- → 이들은 **후속 프로세스(follow-up process)에 속한다**

## 예시

```text
용도 1 — 교차 흐름 제거

✗ 교차하는 흐름

  [A] ──────┐
       ╳    │   ← 선이 교차해 읽기 어렵다
  [B] ──┘   │
       └────┘

✓ Link event 사용

  [A] → (▶ 계획 수정 필요)      throwing link event
                                 (이름 동일)
        (▷ 계획 수정 필요) → [B]  catching link event


용도 2 — 큰 프로세스 자르기

자르기 전 (task 20개, 너무 크다)
(○) → [1] → ... → [10] → [11] → ... → [20] → (◎)
                      ↑
                  여기서 자른다

자른 후

Part 1:  (○) → [1] → ... → [10] → (▶ 기계 구성 완료)
Part 2:  (▷ 기계 구성 완료) → [11] → ... → [20] → (◎)

sequence flow 3개를 자르면 → loose end 6개 → link event 3쌍 필요


Link event vs 후속 프로세스 — 판단

  이것이 내 프로세스의 "목표" 안에 있는가?
        │
   ┌────┴────┐
  예         아니오
   │           │
같은 프로세스   별도의 후속 프로세스
(link event로   (일반 start/end event로
 잘라서 연결)     새 프로세스 시작)

예: Max의 목표 = "신발 판매"
    → 신발 청소, 관리용품 추천 = 후속 프로세스
```

## 요약

- **Link event는 throwing/catching 한 쌍**으로 sequence flow를 대체한다. **이름이 같아야 짝을 알아본다**
- 용도 1: **교차하는 흐름을 없애** 가독성을 높인다
- 용도 2: **너무 큰 프로세스를 잘라** 관리 가능한 부분으로 나눈다
- **intermediate link event만 존재**한다. start·end link event는 없다
- **후속 프로세스 연결에는 쓰지 않는다.** 그것은 일반 start/end event의 역할이다
- 자를지 후속 프로세스로 뺄지는 **"내 프로세스의 목표가 무엇인가"** 로 판단한다
