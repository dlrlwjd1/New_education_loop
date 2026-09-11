# 01 Foundations of AI

## 개요
- 강좌: Intelligent Agents and Search Algorithms (University of Colorado Boulder)
- 모듈: Module 1 — Search Problems & Intelligence
- [MOOC 원본 강의](https://www.mooc.org/learn/intelligent-agents-and-search-algorithms/lecture/79RTT/foundations-of-ai)
- **AI에 기여한 학문 분야**와 **AI를 정의하는 네 가지 접근법**을 구분한다. 이 강좌가 어느 접근을 택하는지가 여기서 정해진다.

---

## 내용

### 인간 지능부터 생각해 보면
- "지능적이다"에 답은 하나가 아니다. 수학을 잘 푸는 것도, 악기를 잘 다루는 것도, 표정과 몸짓을 잘 읽는 **정서 지능(emotional intelligence)** 도 모두 지능이다.
- 그래서 질문이 생긴다 — **AI는 인간 지능을 모델링해야 하는가, 아니면 다른 무엇인가?**
- 이 강좌의 답: AI는 **문제 해결(problem-solving)과 의사결정(decision-making)** 이다. **합리적으로 행동하는(act rationally) 에이전트**를 설계하는 일이다.

### AI에 기여한 학문 분야
| 분야 | 기여한 것 |
|---|---|
| 철학(philosophy) | 논리와 추론 |
| 수학(mathematics) | 알고리즘과 확률 |
| 신경과학(neuroscience) | 뇌의 모델 |
| 컴퓨터과학(computer science) | 프로그래밍, 시스템 |
| 심리학(psychology) | 인지와 학습, 사람이 배우는 방식 |
| 언어학(linguistics) | 언어 모델 |

> 이 분야들의 기여가 없었다면 오늘날의 AI는 없다. AI는 처음부터 **여러 학문이 합쳐진 분야**다.

### AI의 네 가지 고전적 접근법 ⭐
두 개의 축이 만드는 2×2다.

- 축 1 — **사람처럼 하는가(humanly)** vs **올바르게 하는가(rationally)**
- 축 2 — **생각하는가(thinking)** vs **행동하는가(acting)**

| 접근 | 던지는 질문 | 뿌리 | 특징 |
|---|---|---|---|
| **Thinking humanly** (인간처럼 생각하기) | 기계가 사람처럼 생각할 수 있는가? | 심리학·인지과학 | 기억·지각·추론 같은 **인간의 사고 과정 자체를 시뮬레이션**한다. "사람이 문제를 풀 때 뇌에서 무슨 일이 일어나는가, 그것을 계산으로 옮길 수 있는가" |
| **Acting humanly** (인간처럼 행동하기) | 기계가 사람처럼 행동할 수 있는가? | 튜링 테스트 | 1950년 앨런 튜링이 제안. 대화하고 문제를 풀고 반응하는 것이 **사람과 구별되지 않으면** 지능적이라고 본다. **내부 작동 방식은 상관없고 행동만 본다** |
| **Thinking rationally** (합리적으로 생각하기) | 기계가 논리적·올바르게 생각할 수 있는가? | 논리학·철학 | 형식적 추론 규칙을 따라 타당한 결론에 도달한다. 아리스토텔레스의 **삼단논법(syllogism)** 까지 거슬러 올라간다 — "모든 인간은 죽는다 / 소크라테스는 인간이다 / 따라서 소크라테스는 죽는다". 초기 AI의 **규칙 기반 시스템·전문가 시스템**이 이 계열 |
| **Acting rationally** (합리적으로 행동하기) ⭐ | 기계가 **가능한 최선의 결정**을 내릴 수 있는가? | — | **이 강좌가 택하는 접근.** 환경을 지각하고 성공 확률을 최대화하는 행동을 취한다. 사람처럼 생각하려 하지 않고, **효율적·효과적으로 문제를 푼다.** 불확실성 아래에서도 그렇게 한다 |

- `acting rationally`의 예: 교통을 헤쳐 가는 자율주행차, 게임에서 최선의 수를 추천하는 AI 시스템.
- **오늘날 AI 시스템 대부분이 이 접근 위에 서 있다.**

---

## 요약
- AI는 철학·신경과학·수학·컴퓨터과학·언어학·심리학이 합쳐진 **학제간 분야**다.
- 접근법은 네 가지 — thinking humanly / acting humanly / thinking rationally / **acting rationally**.
- **이 강좌는 `acting rationally`(합리적 행동)를 택한다.** 이후 모든 내용(합리적 에이전트, 탐색 알고리즘)이 이 전제 위에 선다.
- "합리적"은 인간을 흉내 내는 것이 아니라 **주어진 정보로 성공 확률이 가장 높은 행동을 고르는 것**이다.

## 다음 주제
- [02 History of AI](02%20History%20of%20AI.md) — AI가 여기까지 온 경로
