# Skill Issue Code Agents AutoResearch and the Loopy Era

## 개요
- 영상: [Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI](https://www.youtube.com/watch?v=kwSVtQ7dziU)
- 채널: No Priors: AI, Machine Learning, Tech, & Startups
- 업로드일: 2026-03-20
- 길이: 1:06:31
- 핵심 주제: code agent의 급격한 변화, 여러 agent를 병렬로 다루는 workflow, AutoResearch, objective metric이 있는 영역에서 loop/automation을 확장하는 방식.

## 내용

### 1. "코딩"이라는 말도 부족해졌다
Karpathy는 최근 workflow를 "code를 쓴다"기보다 "agent에게 의지를 표현한다"에 가깝다고 말한다. 직접 typing하는 비중은 급격히 줄고, agent에게 task를 위임하고 결과를 검토하는 비중이 커졌다.

그는 2025년 12월을 큰 전환점으로 본다. 이후 code agent가 실제 workflow를 바꿀 만큼 좋아졌다고 설명한다.

### 2. 모든 것이 skill issue처럼 느껴진다
Agent가 실패하면 "모델이 못한다"보다 "내가 instruction, memory, setup, tool, harness를 제대로 주지 않았나"를 먼저 생각하게 된다고 말한다.

이는 긍정적으로는 사용자가 자신의 workflow를 개선할 수 있다는 뜻이지만, 부정적으로는 끝없이 setup과 loop를 고치게 되는 "AI psychosis" 같은 상태를 만든다.

### 3. 여러 agent를 병렬로 운영한다
Karpathy는 하나의 Claude Code/Codex session이 아니라 여러 agent harness를 동시에 다루는 방향으로 생각한다.

예를 들어 한 agent는 research, 다른 agent는 code 작성, 또 다른 agent는 review를 맡을 수 있다. 중요한 것은 agent들이 서로 어떻게 협업하고, 사용자가 어디서 review하고, 어떤 output을 신뢰할지 설계하는 것이다.

### 4. AutoResearch의 목표는 사람을 bottleneck에서 빼는 것이다
Karpathy는 AutoResearch를 "사람이 매번 다음 prompt를 넣는 bottleneck을 제거하는 시도"로 설명한다.

핵심 질문은 다음과 같다.

- 어떻게 더 많은 agent를 더 오래 돌릴 수 있는가?
- 어떻게 사람의 token input을 줄이고, agent output throughput을 키울 수 있는가?
- objective, metric, boundary를 주고 agent가 계속 실험하게 만들 수 있는가?

### 5. Objective metric이 있을 때 loop가 잘 작동한다
AutoResearch는 모든 문제에 적합하지 않다. 가장 잘 맞는 영역은 평가 지표가 명확한 문제다.

예를 들어 다음은 잘 맞는다.

- hyperparameter tuning
- model training improvement
- CUDA kernel optimization
- 같은 behavior를 유지하면서 performance 개선
- benchmark score 개선

반대로 평가하기 어려운 product taste, ambiguous design, unclear goal에는 자동 loop가 잘못된 방향으로 오래 달릴 수 있다.

### 6. Research organization도 code처럼 최적화될 수 있다
Karpathy는 `program.md` 같은 markdown file로 research process를 설명하고, 이 process 자체도 optimization 대상이 될 수 있다고 말한다.

Research organization을 code처럼 보면 다음도 실험 대상이 된다.

- 어떤 role이 있는가
- 아이디어 queue는 어떻게 관리되는가
- worker가 무엇을 시도하는가
- 어떤 기준으로 feature branch가 main에 merge되는가
- 위험 선호도는 어떤가

즉, agentic research는 모델 하나가 아니라 연구 조직 자체를 프로그램처럼 다루는 방향으로 확장된다.

### 7. Jagged intelligence를 감안해야 한다
Karpathy는 agent를 매우 똑똑한 PhD 학생이자 동시에 10살 아이처럼 느낀다고 표현한다. 어떤 부분은 놀랍도록 잘하지만, 어떤 부분은 인간이라면 하지 않을 이상한 실수를 한다.

그래서 loop를 너무 앞서 자동화하면 net negative가 될 수 있다. 평가 지표와 guardrail이 없는 상태에서 agent를 오래 돌리는 것은 위험하다.

## 예시

### AutoResearch에 적합한 조건
```text
- objective metric이 명확하다.
- 실험을 자동으로 실행할 수 있다.
- 결과를 자동으로 평가할 수 있다.
- 실패 비용이 제한되어 있다.
- 사람의 개입 없이 여러 trial을 돌릴 수 있다.
```

### Agent 병렬화 예시
```text
idea queue
  -> research agent
  -> implementation agent
  -> evaluation agent
  -> review agent
  -> feature branch
  -> human merge checkpoint
```

## 요약
- Karpathy는 coding workflow가 직접 code 작성에서 agent 지휘로 바뀌었다고 본다.
- Agent 실패는 model issue이기도 하지만 setup, instruction, harness의 skill issue일 수 있다.
- 앞으로는 여러 agent를 병렬로 운영하고 조율하는 능력이 중요해진다.
- AutoResearch는 사람을 prompt bottleneck에서 빼고 objective metric 기반 loop를 돌리는 방식이다.
- Metric이 명확한 문제에서는 loop가 강력하지만, ambiguous task에서는 위험하다.
- Research process 자체도 markdown/code처럼 최적화될 수 있다.
