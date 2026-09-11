# Fundamentals of Reinforcement Learning

MOOC · **University of Alberta · Alberta Machine Intelligence Institute(Amii)** · 강사 **Martha White** · **Adam White**
[강좌 페이지](https://www.mooc.org/learn/fundamentals-of-reinforcement-learning) · 5모듈 약 15시간 · 초급

**`Reinforcement Learning` 전문과정의 1번째 코스**다. 2번째가 `Sample-based Learning Methods`, 3번째가 `Prediction and Control with Function Approximation`, 4번째가 `A Complete Reinforcement Learning System (Capstone)`이다.

- 수강·정리일: **2026-09-04**
- 수강 목적: [인공지능융합공학부 로드맵](../../../../study-progress/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%9C%B5%ED%95%A9%EA%B3%B5%ED%95%99%EB%B6%80%20%EB%A1%9C%EB%93%9C%EB%A7%B5/README.md)의 **강화학습 공백**을 메우기 위해. 강남대 인공지능전공 **강화학습(3학년 2학기)** 에 대응한다
- MOOC Plus 포함 강좌

## 이 강좌의 성격 ⭐

**Sutton & Barto의 `Reinforcement Learning: An Introduction` 2판을 그대로 따라가는 공식 강좌**다. 저자 두 사람이 있는 앨버타 대학에서 만들었고, **Rich Sutton과 Andy Barto 본인들이 나오는 대담 강의**도 들어 있다.

⚠️ **이 강좌는 "강화학습 문제가 무엇인가"를 세우는 데 전부를 쓴다.** 실제로 **경험으로부터 배우는 알고리즘(TD, Q-learning 등)은 다루지 않는다** — 그것은 Course 2의 몫이다. 이 강좌의 마지막 도구인 **동적 계획법조차 환경 동역학 `p`를 이미 안다고 가정**한다.

그래서 **강좌 전체가 하나의 사다리**로 되어 있다.

```
밴딧(상황이 하나뿐)
  → MDP(상황이 여럿, 행동에 장기적 결과가 있다)
    → 정책 · 가치 함수 · 벨만 방정식(문제의 구조)
      → 동적 계획법(모델을 알 때 푸는 법)
        → [Course 2] 모델을 모를 때 경험으로 푸는 법
```

## ⚠️ 모듈 번호와 "Week" 번호가 하나씩 어긋난다

강의 안에서 말하는 **"Week N"은 MOOC 모듈 번호보다 1 작다.** Module 1(Welcome)을 0주차처럼 취급하기 때문이다.

| MOOC 모듈 | 강의 안 표현 |
|---|---|
| Module 2 | Week 1 |
| Module 3 | Week 2 |
| Module 4 | Week 3 |
| Module 5 | Week 4 |

## 강의 목록

### [Module 1 - Welcome to the Course](Module%201%20-%20Welcome%20to%20the%20Course/) (약 50분)

| # | 강의 |
|---|---|
| 1 | [01 Specialization Introduction](Module%201%20-%20Welcome%20to%20the%20Course/01%20Specialization%20Introduction.md) |
| 2 | [02 Course Introduction](Module%201%20-%20Welcome%20to%20the%20Course/02%20Course%20Introduction.md) |
| 3 | [03 Meet your instructors](Module%201%20-%20Welcome%20to%20the%20Course/03%20Meet%20your%20instructors.md) |
| 4 | [04 Your Specialization Roadmap](Module%201%20-%20Welcome%20to%20the%20Course/04%20Your%20Specialization%20Roadmap.md) |

### [Module 2 - An Introduction to Sequential Decision-Making](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/) (약 4시간) — 밴딧

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Sequential Decision Making with Evaluative Feedback](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/01%20Sequential%20Decision%20Making%20with%20Evaluative%20Feedback.md) — **k-armed bandit**, 행동 가치 `q*(a)` |
| 2 | [02 Learning Action Values](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/02%20Learning%20Action%20Values.md) — 표본 평균법 |
| 3 | ⭐ [03 Estimating Action Values Incrementally](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/03%20Estimating%20Action%20Values%20Incrementally.md) — **새 추정 ← 이전 추정 + 스텝 크기 × 오차** |
| 4 | ⭐ [04 What is the trade-off](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/04%20What%20is%20the%20trade-off.md) — **탐험 vs 활용**, ε-탐욕, 10-armed Testbed |
| 5 | [05 Optimistic Initial Values](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/05%20Optimistic%20Initial%20Values.md) — ⚠️ 초기에만 탐험한다 |
| 6 | ⭐ [06 Upper-Confidence Bound UCB Action Selection](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/06%20Upper-Confidence%20Bound%20UCB%20Action%20Selection.md) — **불확실성 앞에서의 낙관** |
| 7 | [07 Jonathan Langford - Contextual Bandits for Real World Reinforcement Learning](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/07%20Jonathan%20Langford%20-%20Contextual%20Bandits%20for%20Real%20World%20Reinforcement%20Learning.md) — 초청 강연 |
| 8 | [08 Week 1 Summary](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/08%20Week%201%20Summary.md) |

### [Module 3 - Markov Decision Processes](Module%203%20-%20Markov%20Decision%20Processes/) (약 3시간)

| # | 강의 |
|---|---|
| 1 | ⭐⭐ [01 Markov Decision Processes](Module%203%20-%20Markov%20Decision%20Processes/01%20Markov%20Decision%20Processes.md) — **전이 동역학 `p(s',r\|s,a)`**, **마르코프 성질** |
| 2 | [02 Examples of MDPs](Module%203%20-%20Markov%20Decision%20Processes/02%20Examples%20of%20MDPs.md) — 재활용 로봇, 로봇 팔 |
| 3 | ⭐ [03 The Goal of Reinforcement Learning](Module%203%20-%20Markov%20Decision%20Processes/03%20The%20Goal%20of%20Reinforcement%20Learning.md) — **이득 `G_t`**, 에피소드형 과제 |
| 4 | ⭐ [04 Michael Littman - The Reward Hypothesis](Module%203%20-%20Markov%20Decision%20Processes/04%20Michael%20Littman%20-%20The%20Reward%20Hypothesis.md) — 초청 강연, **보상 가설과 그 한계** |
| 5 | ⭐⭐ [05 Continuing Tasks](Module%203%20-%20Markov%20Decision%20Processes/05%20Continuing%20Tasks.md) — **할인 γ**, **`G_t = R_(t+1) + γ·G_(t+1)`** |
| 6 | [06 Examples of Episodic and Continuing Tasks](Module%203%20-%20Markov%20Decision%20Processes/06%20Examples%20of%20Episodic%20and%20Continuing%20Tasks.md) |
| 7 | [07 Week 2 Summary](Module%203%20-%20Markov%20Decision%20Processes/07%20Week%202%20Summary.md) |

### [Module 4 - Value Functions and Bellman Equations](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/) (약 3시간 30분)

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Specifying Policies](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/01%20Specifying%20Policies.md) — ⚠️ **정책은 현재 상태에만 의존한다** |
| 2 | ⭐⭐ [02 Value Functions](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/02%20Value%20Functions.md) — **`v_π`와 `q_π`**, 격자 세계 |
| 3 | [03 Rich Sutton and Andy Barto - A brief History of RL](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/03%20Rich%20Sutton%20and%20Andy%20Barto%20-%20A%20brief%20History%20of%20RL.md) — 교과서 저자 대담 |
| 4 | ⭐⭐ [04 Bellman Equation Derivation](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/04%20Bellman%20Equation%20Derivation.md) |
| 5 | ⭐ [05 Why Bellman Equations](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/05%20Why%20Bellman%20Equations.md) — **무한 합 → 선형 연립방정식** |
| 6 | ⭐ [06 Optimal Policies](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/06%20Optimal%20Policies.md) — ⚠️ **정책 수는 `\|A\|^\|S\|`** |
| 7 | ⭐⭐ [07 Optimal Value Functions](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/07%20Optimal%20Value%20Functions.md) — **벨만 최적 방정식** |
| 8 | ⭐⭐ [08 Using Optimal Value Functions to Get Optimal Policies](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/08%20Using%20Optimal%20Value%20Functions%20to%20Get%20Optimal%20Policies.md) — **`q*`가 있으면 argmax만 하면 된다** |
| 9 | [09 Week 3 Summary](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/09%20Week%203%20Summary.md) |

### [Module 5 - Dynamic Programming](Module%205%20-%20Dynamic%20Programming/) (약 3시간 45분)

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Policy Evaluation vs Control](Module%205%20-%20Dynamic%20Programming/01%20Policy%20Evaluation%20vs%20Control.md) — ⚠️ **DP는 `p`를 알아야 한다** |
| 2 | ⭐⭐ [02 Iterative Policy Evaluation](Module%205%20-%20Dynamic%20Programming/02%20Iterative%20Policy%20Evaluation.md) — **벨만 방정식 → 갱신 규칙** |
| 3 | ⭐⭐ [03 Policy Improvement](Module%205%20-%20Dynamic%20Programming/03%20Policy%20Improvement.md) — **정책 개선 정리** |
| 4 | ⭐⭐ [04 Policy Iteration](Module%205%20-%20Dynamic%20Programming/04%20Policy%20Iteration.md) — **정책과 가치의 춤** |
| 5 | ⭐ [05 Flexibility of the Policy Iteration Framework](Module%205%20-%20Dynamic%20Programming/05%20Flexibility%20of%20the%20Policy%20Iteration%20Framework.md) — **GPI · 가치 반복 · 비동기 DP** |
| 6 | ⭐⭐ [06 Efficiency of Dynamic Programming](Module%205%20-%20Dynamic%20Programming/06%20Efficiency%20of%20Dynamic%20Programming.md) — **부트스트래핑**, 차원의 저주 |
| 7 | [07 Warren Powell - Approximate Dynamic Programming for Fleet Management Short](Module%205%20-%20Dynamic%20Programming/07%20Warren%20Powell%20-%20Approximate%20Dynamic%20Programming%20for%20Fleet%20Management%20Short.md) — 초청 강연(짧은 버전) |
| 8 | ⭐ [08 Warren Powell - Approximate Dynamic Programming for Fleet Management Long](Module%205%20-%20Dynamic%20Programming/08%20Warren%20Powell%20-%20Approximate%20Dynamic%20Programming%20for%20Fleet%20Management%20Long.md) — **계층적 집계**, Schneider National 사례 |
| 9 | [09 Week 4 Summary](Module%205%20-%20Dynamic%20Programming/09%20Week%204%20Summary.md) |
| 10 | [10 Congratulations](Module%205%20-%20Dynamic%20Programming/10%20Congratulations.md) |

## 정리본이 없는 항목

**읽기 자료 · 안내** — 각 모듈의 `Learning Objectives`, `Weekly Reading`(Sutton & Barto 교재 해당 장), `Chapter Summary`, `Reinforcement Learning Textbook`, `Read Me: Pre-requisites and Learning Objectives`.

**평가 항목** — 모듈별 연습 퀴즈, **채점 프로그래밍 과제 2건**(`Bandits and Exploration/Exploitation`, `Optimal Policies with Dynamic Programming`), **동료 채점 과제 1건**(`Describe Three MDPs`), 스태프 채점 1건(`Value Functions and Bellman Equations`).

**대화형 위젯 2건** — `Let's play a game!`, `What's underneath?` (밴딧 체험).

## 핵심 개념 한눈에 보기

| 개념 | 식 | 정리본 |
|---|---|---|
| **행동 가치** | `q*(a) ≐ E[R_t \| A_t = a]` | [M2-01](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/01%20Sequential%20Decision%20Making%20with%20Evaluative%20Feedback.md) |
| **증분 갱신** | `Q_(n+1) = Q_n + α·[R_n − Q_n]` | [M2-03](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/03%20Estimating%20Action%20Values%20Incrementally.md) |
| **UCB** | `A_t = argmax_a [ Q_t(a) + c·√(ln t / N_t(a)) ]` | [M2-06](Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/06%20Upper-Confidence%20Bound%20UCB%20Action%20Selection.md) |
| **전이 동역학** | `p(s',r \| s,a) ≐ Pr{S_(t+1)=s', R_(t+1)=r \| S_t=s, A_t=a}` | [M3-01](Module%203%20-%20Markov%20Decision%20Processes/01%20Markov%20Decision%20Processes.md) |
| **마르코프 성질** | **현재 상태만으로 충분하다** | 〃 |
| **이득(할인)** | `G_t = Σ_(k≥0) γ^k · R_(t+k+1)`, `0 ≤ γ < 1` | [M3-05](Module%203%20-%20Markov%20Decision%20Processes/05%20Continuing%20Tasks.md) |
| **이득의 재귀식** | ⭐ **`G_t = R_(t+1) + γ·G_(t+1)`** | 〃 |
| 이득의 상계 | `G_t ≤ R_max / (1−γ)` | 〃 |
| **상태 가치** | `v_π(s) ≐ E_π[G_t \| S_t = s]` | [M4-02](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/02%20Value%20Functions.md) |
| **행동 가치** | `q_π(s,a) ≐ E_π[G_t \| S_t=s, A_t=a]` | 〃 |
| **벨만(상태)** | `v_π(s) = Σ_a π(a\|s) Σ_(s',r) p(s',r\|s,a)[ r + γ v_π(s') ]` | [M4-04](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/04%20Bellman%20Equation%20Derivation.md) |
| **벨만(행동)** | `q_π(s,a) = Σ_(s',r) p[ r + γ Σ_(a') π(a'\|s') q_π(s',a') ]` | 〃 |
| **정책 순서** | `π₁ ≥ π₂ ⟺ 모든 s에서 v_π₁(s) ≥ v_π₂(s)` | [M4-06](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/06%20Optimal%20Policies.md) |
| **벨만 최적(상태)** | ⭐⭐ `v*(s) = max_a Σ p(s',r\|s,a)[ r + γ v*(s') ]` | [M4-07](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/07%20Optimal%20Value%20Functions.md) |
| **벨만 최적(행동)** | `q*(s,a) = Σ p[ r + γ max_(a') q*(s',a') ]` | 〃 |
| **정책 추출** | `π*(s) = argmax_a q*(s,a)` (⚠️ `v*`에서는 `p`도 필요) | [M4-08](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/08%20Using%20Optimal%20Value%20Functions%20to%20Get%20Optimal%20Policies.md) |
| **반복 정책 평가** | `v_(k+1)(s) ← Σ_a π(a\|s) Σ p[ r + γ v_k(s') ]` | [M5-02](Module%205%20-%20Dynamic%20Programming/02%20Iterative%20Policy%20Evaluation.md) |
| **정책 개선 정리** | `q_π(s, π'(s)) ≥ v_π(s) ∀s ⟹ π' ≥ π` | [M5-03](Module%205%20-%20Dynamic%20Programming/03%20Policy%20Improvement.md) |
| **가치 반복** | `v_(k+1)(s) ← max_a Σ p[ r + γ v_k(s') ]` | [M5-05](Module%205%20-%20Dynamic%20Programming/05%20Flexibility%20of%20the%20Policy%20Iteration%20Framework.md) |
| **부트스트래핑** | **후속 상태의 추정으로 현재 추정을 개선** | [M5-06](Module%205%20-%20Dynamic%20Programming/06%20Efficiency%20of%20Dynamic%20Programming.md) |

## 이 강좌의 특징

- ⭐ **초청 강연이 네 편**이나 된다 — **Michael Littman**(보상 가설), **John Langford**(문맥적 밴딧), **Sutton & Barto**(RL의 역사), **Warren Powell**(운송 함대 ADP). 강의 본편이 이론이라면 이 넷이 **"현실에서는 어떻게 되는가"** 를 채운다.
- ⭐ **Powell의 강연에는 짧은 버전과 긴 버전이 따로 있다.** 긴 버전에만 **계층적 집계로 탐험–활용 문제를 푸는 방법**과 **Schneider National 실제 사례**가 나온다.
- **격자 세계(grid world)가 강좌 전체를 관통한다** — [M4-02 가치 함수](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/02%20Value%20Functions.md)의 무작위 정책 → [M4-08](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/08%20Using%20Optimal%20Value%20Functions%20to%20Get%20Optimal%20Policies.md)의 최적 정책 → [M5-02](Module%205%20-%20Dynamic%20Programming/02%20Iterative%20Policy%20Evaluation.md)의 4×4 격자 → [M5-04](Module%205%20-%20Dynamic%20Programming/04%20Policy%20Iteration.md)의 나쁜 상태를 넣은 변형까지 같은 예제가 계속 자란다.
- ⚠️ **정리본은 영어 자막 전문을 근거로 작성했다.** 수식은 자막에서 말로 읽은 것을 복원한 것이라 **슬라이드의 정확한 표기와 다를 수 있다.** 특히 **Sutton & Barto 대담**([M4-03](Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/03%20Rich%20Sutton%20and%20Andy%20Barto%20-%20A%20brief%20History%20of%20RL.md))은 자유 대화라 자동 자막이 군데군데 불완전해 **분명히 알아들을 수 있는 부분만** 옮겼다.
