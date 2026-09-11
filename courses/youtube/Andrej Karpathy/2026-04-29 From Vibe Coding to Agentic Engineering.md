# From Vibe Coding to Agentic Engineering

## 개요
- 영상: [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs)
- 채널: Sequoia Capital
- 업로드일: 2026-04-29
- 길이: 29:49
- 핵심 주제: Karpathy가 말하는 vibe coding 이후의 단계. AI coding agent를 전문 소프트웨어 개발에 쓰려면 "느낌으로 만들기"를 넘어서 spec, oversight, quality bar, agentic engineering이 필요하다.

## 내용

### 1. 2025년 말부터 agentic workflow가 실제로 작동하기 시작했다
Karpathy는 2025년 12월 무렵부터 coding agent 경험이 질적으로 바뀌었다고 말한다. 이전에는 agent가 code chunk를 만들고 사람이 자주 고쳐야 했지만, 어느 시점부터 계속 더 맡겨도 결과가 괜찮게 나오는 경험을 했다고 설명한다.

그 결과 side project를 계속 만들게 되었고, 기존 programming workflow가 완전히 달라졌다고 말한다.

### 2. Software 3.0은 영어로 프로그래밍하는 패러다임이다
Karpathy는 software의 변화를 세 단계로 설명한다.

- Software 1.0: 사람이 명시적으로 code를 작성한다.
- Software 2.0: dataset과 optimizer로 neural network weight를 만든다.
- Software 3.0: prompt/spec/documentation으로 LLM을 program한다.

Software 3.0에서 programming language는 상당 부분 English가 된다. 중요한 것은 "코드를 직접 쓰는 능력"보다 "agent에게 정확히 의도를 전달하는 능력"이다.

### 3. Vibe coding은 floor를 높인다
Vibe coding은 누구나 software를 만들 수 있게 해준다. 이는 floor를 크게 올린다.

하지만 vibe coding만으로 professional software를 만들 수는 없다. 보안 취약점, 잘못된 data model, 유지보수성, test 부재 같은 문제가 생길 수 있기 때문이다.

### 4. Agentic engineering은 quality bar를 보존하는 discipline이다
Karpathy는 agentic engineering을 "agent를 활용해 더 빠르게 가되, professional software의 quality bar를 희생하지 않는 방법"으로 설명한다.

Agent는 강력하지만 stochastic하고 fallible하다. 따라서 agent를 조율하고, 검토하고, spec을 설계하고, 품질 기준을 유지하는 별도 engineering discipline이 필요하다.

### 5. Plan mode보다 detailed spec이 중요하다
Karpathy는 agent의 plan mode가 유용하긴 하지만, 더 일반적인 핵심은 agent와 함께 매우 detailed한 spec을 설계하는 것이라고 말한다.

사람은 top-level category, product judgment, taste, oversight를 맡고, agent는 그 아래의 세부 구현을 많이 수행한다.

### 6. 인간에게 남는 가치는 taste, judgment, oversight다
Agent가 API detail이나 boilerplate를 처리할수록 인간은 다음에 더 집중해야 한다.

- spec
- architecture
- design taste
- security awareness
- data model correctness
- top-level product decision
- oversight

Karpathy는 agent가 여전히 이상한 실수를 만든다고 설명한다. 예를 들어 Stripe email과 Google login email을 같은 사용자 식별자로 매칭하는 식의 실수는 사람이 보면 이상하지만 agent가 놓칠 수 있다.

### 7. Hiring도 바뀌어야 한다
Karpathy는 agentic engineer를 채용하려면 작은 puzzle을 풀게 하는 기존 방식보다 큰 project를 agent와 함께 구현하게 봐야 한다고 말한다.

예를 들어 Twitter clone을 만들게 하고, agent로 simulated activity와 공격을 시켜 secure하고 robust한지 확인하는 식이다.

## 예시

### Vibe coding vs agentic engineering
| 구분 | Vibe coding | Agentic engineering |
| --- | --- | --- |
| 목표 | 누구나 만들 수 있게 함 | professional quality 유지 |
| 장점 | floor 상승 | ceiling 상승 |
| 위험 | 보안/품질/유지보수성 저하 | 사람의 oversight 필요 |
| 인간 역할 | 아이디어 제시 | spec, judgment, review, architecture |

### Agentic engineer가 신경 써야 할 것
```text
- detailed spec
- data model
- security
- tests
- review
- deployment quality
- agent가 놓칠 edge case
```

## 요약
- Agentic coding은 2025년 말부터 질적으로 달라졌다고 Karpathy는 본다.
- Software 3.0에서는 영어 spec과 prompt가 LLM을 program하는 방식이 된다.
- Vibe coding은 software creation의 floor를 높인다.
- Agentic engineering은 professional quality bar를 유지하며 agent를 조율하는 discipline이다.
- 사람은 API detail보다 spec, taste, architecture, oversight에 더 집중해야 한다.
- Agentic engineer hiring은 작은 puzzle보다 큰 project 수행 능력을 봐야 한다.
