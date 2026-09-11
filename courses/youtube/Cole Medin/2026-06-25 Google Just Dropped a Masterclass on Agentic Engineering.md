# Google Just Dropped a Masterclass on Agentic Engineering

## 개요
- 강의/영상: [Google Just Dropped a Masterclass on Agentic Engineering (It's SO Good)](https://www.youtube.com/watch?v=zbmuiaPuiNM)
- 채널: Cole Medin
- 업로드일: 2026-06-25
- 핵심 주제: AI coding의 병목은 더 이상 구현만이 아니다. 안정적인 결과를 얻으려면 model 자체보다 context, rules, tools, guardrails, workflows, tests, observability로 구성된 harness를 설계해야 한다.

## 내용

### 1. AI-driven SDLC에서 구현은 빨라졌지만 앞뒤 병목은 남아 있다
SDLC는 idea에서 production까지 가는 전체 과정이다. 전통적인 SDLC에서는 요구사항 수집, 설계, 구현, 테스트, 리뷰, 배포, 유지보수가 모두 시간이 걸렸고, 구현이 큰 비중을 차지했다.

AI coding assistant가 들어오면서 구현 단계는 주 단위에서 분/시간 단위로 줄어들 수 있다. 하지만 요구사항 정의와 최종 검증은 여전히 사람과 조직의 판단이 필요하다. 그래서 AI가 engineer output을 크게 높여도 business output이 같은 비율로 늘지 않는 이유는, 소프트웨어 개발이 단순히 코드를 쓰는 일이 아니기 때문이다.

### 2. AI coding은 vibe coding과 agentic engineering 사이의 스펙트럼이다
Cole은 Google 문서를 바탕으로 AI coding을 이분법이 아니라 스펙트럼으로 설명한다.

- Vibe coding: 대략적인 자연어 prompt를 넣고, 눈으로 대충 동작을 확인한다.
- Structured AI-assisted coding: 더 자세한 prompt와 manual spot check를 사용한다.
- Agentic engineering: spec, workflow, automated eval, CI gate, review process를 갖춘 반복 가능한 시스템을 만든다.

Vibe coding은 disposable prototype이나 빠른 MVP에는 적합할 수 있다. 하지만 신뢰 가능한 production code를 만들려면 agentic engineering 쪽으로 가야 한다.

### 3. Agent는 model + harness다
영상의 핵심 주장은 model이 전체 시스템의 일부일 뿐이라는 점이다. Cole은 Google의 관점을 소개하며, model은 agentic system에서 10% 정도이고 나머지 90%는 harness라고 설명한다.

Harness는 다음 요소를 포함한다.

- instructions와 global rules
- MCP server와 tool
- guardrails와 hooks
- skills와 workflow
- test, eval, CI/CD gate
- observability, tracing, scaling

좋은 model을 고르는 것보다 중요한 것은 해당 codebase, architecture, team workflow에 맞는 harness를 설계하는 일이다.

### 4. Factory model에서는 사람이 시스템을 만들고 agent가 산출물을 만든다
Agentic engineering에서 사람의 역할은 모든 코드를 직접 쓰는 것이 아니라, agent가 안정적으로 코드를 만들 수 있는 공장을 설계하는 것이다. 사람은 spec, context, requirement, guardrail을 정의하고, agent는 plan, implementation, validation loop를 수행한다.

Cole은 planning agent와 coding agent를 분리하는 것이 중요하다고 말한다. planning session은 많은 context와 bias를 갖게 되므로, plan을 artifact로 만든 뒤 별도 coding session에 넘겨 context rot을 줄인다. 이후 test, review, human approval을 거쳐 production으로 보낸다.

### 5. 시스템은 매 작업 후 개선되어야 한다
Agentic engineering의 핵심 태도는 system evolution mindset이다. agent가 실수하거나 사람이 중간에 개입해야 했을 때, 단순히 해당 bug만 고치고 끝내지 않는다.

대신 agent에게 되묻는다.

- 어떤 rule이 부족했는가?
- 어떤 workflow step이 빠졌는가?
- 어떤 test나 guardrail이 있으면 같은 문제가 줄어드는가?
- 어떤 context를 dynamic하게 제공해야 했는가?

이렇게 harness 자체를 version control에 들어가는 engineering resource로 다루면, 시간이 지날수록 agent output의 품질이 오른다.

### 6. Static context와 dynamic context를 구분해야 한다
Context는 비용과 품질 모두에 영향을 주는 가장 중요한 자원이다. Cole은 Google의 구분을 바탕으로 static context와 dynamic context를 나눈다.

Static context는 system prompt, core rules, 기본 guardrail처럼 항상 loading되는 정보다. 안정적이지만 비싸고 context window를 차지한다.

Dynamic context는 skill, workflow, codebase convention, RAG search처럼 필요할 때 agent가 찾아 읽는 정보다. 효율적이고 확장 가능하지만 agent가 필요할 때 제대로 가져오지 않을 위험이 있다.

좋은 harness는 static context를 작고 선명하게 유지하고, 나머지는 progressive disclosure 방식으로 dynamic하게 가져오게 한다.

### 7. 한 generalist agent를 skills로 specialization하는 방향으로 간다
Cole은 과거의 복잡한 multi-agent specialist 구조보다, 하나의 generalist agent가 필요한 skill을 불러 specialist처럼 동작하는 방식이 더 실용적이라고 본다.

예를 들어 같은 agent session이 planning skill을 불러 planner가 되고, review skill을 불러 reviewer가 되며, 특정 codebase convention을 읽고 해당 영역의 specialist처럼 동작할 수 있다. 이는 context를 항상 넣지 않고 필요한 순간에만 확장하는 방식이다.

### 8. Conductor와 orchestrator 역할
Google은 engineer가 conductor와 orchestrator 사이를 오간다고 설명한다.

- Conductor: 파일 단위로 AI를 세밀하게 조종하고, tab completion이나 작은 변경을 직접 steer한다.
- Orchestrator: agent가 codebase 전체나 여러 task를 처리하게 하고, 사람은 결과와 PR을 검토한다.

Cole은 좋은 harness가 있다면 점점 orchestrator 쪽으로 이동할 수 있다고 본다. 다만 깊은 debugging이나 초기 exploration에서는 conductor식 개입이 여전히 필요할 수 있다.

### 9. Token economics는 upfront harness 투자를 정당화한다
Vibe coding은 처음에는 싸다. harness를 만들 필요가 없기 때문이다. 하지만 반복적으로 slop code를 고치고, 같은 문제를 token으로 계속 해결하면 operational cost가 커진다.

Agentic engineering은 초기 비용이 높다. spec, workflow, guardrail, test를 설계해야 한다. 대신 한 번 만든 harness는 계속 재사용되고 개선되며, 장기적으로 더 안정적이고 저렴해질 수 있다.

## 예시

### Agentic engineering workflow
```text
요구사항 정의
-> planning agent가 plan artifact 생성
-> 별도 coding agent가 구현
-> test/eval/CI gate 실행
-> review agent 또는 human review
-> 실패 원인을 harness 개선 항목으로 반영
```

### Harness 개선 질문
- 같은 실수를 막기 위한 rule이 필요한가?
- static context에 넣을 만큼 중요한 규칙인가, dynamic skill로 둘 규칙인가?
- test나 eval로 검증할 수 있는가?
- planning과 implementation session을 분리해야 하는가?
- observability나 log가 부족해서 원인 파악이 어려웠는가?

## 요약
- AI-driven SDLC에서 구현은 빨라졌지만 요구사항과 검증은 여전히 병목이다.
- 안정적인 AI coding은 model보다 harness 설계에 더 크게 좌우된다.
- Harness는 rules, tools, skills, workflows, guardrails, tests, observability의 묶음이다.
- 좋은 workflow는 planning과 coding session을 분리하고, test와 review로 agent output을 검증한다.
- 장기적으로는 vibe coding보다 agentic engineering이 더 안정적이고 token 비용도 낮아질 수 있다.
