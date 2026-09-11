# Phase 5 — 에이전트 조직 만들기

- 목표: 역할이 나뉜 에이전트 여러 개가 서로 일을 넘기며 하나의 업무 흐름을 완주하게 만들고, 사람이 어디서 개입할지 설계한다.
- 분량: 약 14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 하나의 큰 에이전트 대신 역할을 나눠야 하는 이유를 맥락 품질 관점에서 설명할 수 있다.
- 순차·병렬·루프·오케스트레이터·평가자 패턴 중 무엇을 쓸지 업무 형태를 보고 고를 수 있다.
- 에이전트끼리 구조화된 형태로 결과를 주고받게 만들 수 있다.
- 사람 승인 지점(human in the loop)을 자율성 등급에 맞게 배치할 수 있다.
- 회사의 원칙·톤·금지선을 모든 에이전트가 공유하는 헌법 문서로 쓸 수 있다.
- 역할과 도구를 **나누는 것만큼 합치고 줄이는 판단**도 할 수 있다.

> **2026-09-03 보강 — 나누는 것보다 깎는 것이 어렵다.** 이 Phase의 강의는 전부 "어떻게 나눌 것인가"를 가르친다. 반대 방향의 판단 기준이 없으면 역할이 계속 늘기만 한다. Microsoft의 Azure SRE Agent 팀은 **도구 100개 이상, 전문 에이전트 50개 이상**으로 시작했다가 **핵심 도구 5개와 소수의 범용 에이전트**로 줄인 뒤에야 안정적으로 돌았다고 보고한다. 5-A·5-B로 조직도를 그린 뒤 한 번 거꾸로 검토한다 — **"이 역할을 지우면 무엇이 깨지는가"에 답하지 못하는 역할은 지운다.** 출처: [Context engineering: lessons from building Azure SRE Agent](https://techcommunity.microsoft.com/blog/appsonazureblog/context-engineering-lessons-from-building-azure-sre-agent/4481200) (2026-09-03 확인)

> **왜 지금인가**: 빌더 조쉬 사례에서 한 에이전트에게 기획부터 커밋까지 전부 맡겼더니 **맥락이 커질수록 판단 품질이 떨어졌다**. 역할 분리는 성능 최적화가 아니라 맥락 관리 문제다. 이 절의 모든 판단이 그 사실에서 나온다.

## 5-A. 왜 나누는가, 어떻게 나누는가

메인: AI Agents and Agentic AI Architecture in Python, Module 3. **에이전트 간 통신과 맥락 격리를 정면으로 다룬다.**

- [ ] [01.Introduction to Multi-Agent Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%203%20-%20Multi-Agent%20Systems/01.Introduction%20to%20Multi-Agent%20Systems.md)
- [ ] **02.Building Multi-Agent Systems - Agent-to-Agent Communication.md**
- [ ] **03.Agent Communication Patterns.md**
- [ ] [04.Agent Interaction Patterns with Memory.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%203%20-%20Multi-Agent%20Systems/04.Agent%20Interaction%20Patterns%20with%20Memory.md)
- [ ] **05.Removing Noise - Focusing Agent Attention.md** — **역할별로 필요한 맥락만 주는 법.** 이 Phase에서 가장 중요한 강의.
- [ ] [07.Providing Agentic AI Information About the World.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%203%20-%20Multi-Agent%20Systems/07.Providing%20Agentic%20AI%20Information%20About%20the%20World.md)
- [ ] [08.Agent Interaction Architectures.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%203%20-%20Multi-Agent%20Systems/08.Agent%20Interaction%20Architectures.md)

함께 보기: 도구를 깔끔하게 격리하는 법. 에이전트가 늘어나면 도구 중복이 문제가 된다.

- [ ] [01.Isolating Agents from Accidental Complexity.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%204%20-%20Dependency%20Injection%20for%20Tools/01.Isolating%20Agents%20from%20Accidental%20Complexity.md)
- [ ] [02.Clean AI Tools with Dependency Injection.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%204%20-%20Dependency%20Injection%20for%20Tools/02.Clean%20AI%20Tools%20with%20Dependency%20Injection.md)

함께 보기: 페르소나로 역할을 표현하는 법 — 5-D의 헌법과 이어진다.

- [ ] [09.Simple Multi-Agent Systems with Personas.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/09.Simple%20Multi-Agent%20Systems%20with%20Personas.md)
- [ ] [11.The Persona Abstraction & Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/11.The%20Persona%20Abstraction%20%26%20Agents.md)
- [ ] [12. Invoice Processing with Experts.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/12.%20Invoice%20Processing%20with%20Experts.md) — Phase 3의 단일 전표 에이전트를 전문가 여럿으로 확장한 예. **같은 업무의 전후 비교**라 배우기 좋다.

## 5-B. 조율 패턴을 고른다

메인: The Complete Agentic AI Engineering Masterclass, Section 9. 패턴 카탈로그가 가장 짧고 명확하다.

- [ ] [01 Multiagent LLM Coordination Agent.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%209%20-%20Multi-Agent%20Architecture%20Patterns/01%20Multiagent%20LLM%20Coordination%20Agent.md)
- [ ] [02 Sequential Agents Architecture.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%209%20-%20Multi-Agent%20Architecture%20Patterns/02%20Sequential%20Agents%20Architecture.md)
- [ ] [03 Parallel Agents Architecture.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%209%20-%20Multi-Agent%20Architecture%20Patterns/03%20Parallel%20Agents%20Architecture.md) — Phase 1의 BPMN 병렬 게이트웨이와 짝지어 본다.
- [ ] [04 Loop Agents Architecture.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%209%20-%20Multi-Agent%20Architecture%20Patterns/04%20Loop%20Agents%20Architecture.md)
- [ ] [05 Agent Patterns Overview.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%209%20-%20Multi-Agent%20Architecture%20Patterns/05%20Agent%20Patterns%20Overview.md) — **패턴 선택 요약.** 프린트해서 옆에 두고 쓴다.
- [ ] [03 Agent Tools Vs Sub-Agents Vs ADK Tools.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2010%20-%20Agent%20Tools%20and%20MCP/03%20Agent%20Tools%20Vs%20Sub-Agents%20Vs%20ADK%20Tools.md) — **도구로 만들 것인가, 하위 에이전트로 만들 것인가.** 실무에서 가장 자주 부딪히는 판단.

메인 실습: AI Engineer Agentic Track, Week 2. **같은 문제를 세 가지 방식으로 조율해 본다** — 이 비교가 핵심이다.

- [ ] [07 Day 2 - Build a Multi-Agent Sales Team and Orchestrate Agents Three Ways.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/07%20Day%202%20-%20Build%20a%20Multi-Agent%20Sales%20Team%20and%20Orchestrate%20Agents%20Three%20Ways.md)
- [ ] [09 Day 2 - Agent Orchestration by Code vs by LLM in the OpenAI Agents SDK.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/09%20Day%202%20-%20Agent%20Orchestration%20by%20Code%20vs%20by%20LLM%20in%20the%20OpenAI%20Agents%20SDK.md) — **코드로 조율할 것인가 LLM에 맡길 것인가.** 회사 업무는 대부분 코드 조율이 맞다. 그 이유를 여기서 얻는다.
- [ ] [10 Day 2 - Orchestrate Multiple Sales Agents by Code with asyncio.gather.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/10%20Day%202%20-%20Orchestrate%20Multiple%20Sales%20Agents%20by%20Code%20with%20asyncio.gather.md)
- [ ] [11 Day 2 - Orchestrate Agents as Tools with a Sales Manager Agent.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/11%20Day%202%20-%20Orchestrate%20Agents%20as%20Tools%20with%20a%20Sales%20Manager%20Agent.md) — **에이전트를 도구로 쓰는 패턴.** 빌더 조쉬 사례의 상위 역할 3개 + 하위 워커 구조가 이 형태다.
- [ ] [12 Day 2 - Orchestrate Agents with Handoffs in the OpenAI Agents SDK.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/12%20Day%202%20-%20Orchestrate%20Agents%20with%20Handoffs%20in%20the%20OpenAI%20Agents%20SDK.md)
- [ ] [14 Day 3 - Structured Outputs with Pydantic in the OpenAI Agents SDK.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/14%20Day%203%20-%20Structured%20Outputs%20with%20Pydantic%20in%20the%20OpenAI%20Agents%20SDK.md) — **에이전트 간 계약(contract).** 이게 없으면 조직이 아니라 잡담이 된다.
- [ ] [17 Day 4 - Deep Agents Sub-Agents - Delegation and the Task Tool Explained.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/17%20Day%204%20-%20Deep%20Agents%20Sub-Agents%20-%20Delegation%20and%20the%20Task%20Tool%20Explained.md) — 위임(delegation) 구조.

함께 보기: 설계 패턴을 한 번 더, 다른 어휘로.

- [ ] [04 Essential Design Patterns for AI Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%203%20-%20LangGraph%20CrewAI%20AutoGen%20and%20BeeAI/Module%201%20-%20Agentic%20Frameworks%20and%20LangGraph%20Design%20Patterns/04%20Essential%20Design%20Patterns%20for%20AI%20Systems.md)
- [ ] [05 Orchestrator Design Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%203%20-%20LangGraph%20CrewAI%20AutoGen%20and%20BeeAI/Module%201%20-%20Agentic%20Frameworks%20and%20LangGraph%20Design%20Patterns/05%20Orchestrator%20Design%20Pattern.md)
- [ ] [06 Evaluator-Optimizer Design Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%203%20-%20LangGraph%20CrewAI%20AutoGen%20and%20BeeAI/Module%201%20-%20Agentic%20Frameworks%20and%20LangGraph%20Design%20Patterns/06%20Evaluator-Optimizer%20Design%20Pattern.md) — **평가자-최적화자 패턴.** 빌더 조쉬 사례의 "구현 → 리뷰 → 재리뷰" 구조가 이것이다.
- [ ] [05 Multi-agentic workflows.md](../../courses/deeplearning-ai/Agentic%20AI/module%2005/05%20Multi-agentic%20workflows.md)
- [ ] [07 Communication patterns for multi-agent systems.md](../../courses/deeplearning-ai/Agentic%20AI/module%2005/07%20Communication%20patterns%20for%20multi-agent%20systems.md)
- [ ] [08 Single-Agent vs Multi-Agent AI Architectures.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/08%20Single-Agent%20vs%20Multi-Agent%20AI%20Architectures.md)
- [ ] [2026-01-06 Architecting multi-agent systems.md](../../courses/youtube/Google%20Cloud%20Tech/Building%20distributed%20AI%20agents/2026-01-06%20Architecting%20multi-agent%20systems.md)
- [ ] [2026-03-17 3 Advanced AI agent design patterns.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2026-03-17%203%20Advanced%20AI%20agent%20design%20patterns.md)

프레임워크를 하나 고를 때: CrewAI 강좌의 Module 3이 **역할·태스크를 YAML로 선언하는 방식**을 보여 준다. 회사 조직도를 파일로 관리하고 싶으면 이쪽이 잘 맞는다.

- [ ] [01 Key Elements for High-Performance Agents in CrewAI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/01%20Key%20Elements%20for%20High-Performance%20Agents%20in%20CrewAI.md)
- [ ] [03 Demonstration - Designing High-Performance Agents with YAML Configuration.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/03%20Demonstration%20-%20Designing%20High-Performance%20Agents%20with%20YAML%20Configuration.md)
- [ ] [04 Understanding Tasks in CrewAI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/04%20Understanding%20Tasks%20in%20CrewAI.md)
- [ ] [06 Demonstration - Building a Self-Executing and Self-Evaluating Campaign Pipeline.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/06%20Demonstration%20-%20Building%20a%20Self-Executing%20and%20Self-Evaluating%20Campaign%20Pipeline.md) — **스스로 실행하고 스스로 평가하는 파이프라인.** 캡스톤의 축소판.
- [ ] [09 Agent Collaboration Mechanisms.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/09%20Agent%20Collaboration%20Mechanisms.md)
- [ ] [01 Multi-Agent Customer Support Project.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%204%20-%20Course%20Wrap-Up%20and%20Practice%20Project/01%20Multi-Agent%20Customer%20Support%20Project.md) — 고객 응대 멀티 에이전트. 대부분의 회사에 바로 적용되는 과제다.

건너뛰어도 되는 것: LangGraph·BeeAI·AG2·Mastra·Agno 등 **프레임워크 순회 강의**. 하나를 골라 깊게 쓰고, 나머지는 필요할 때 돌아온다. 선택에 도움이 필요하면 아래 한 편만 본다.

- [ ] [24 Day 5 - Choosing an Agent Framework and 10 Things That Really Matter.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/24%20Day%205%20-%20Choosing%20an%20Agent%20Framework%20and%2010%20Things%20That%20Really%20Matter.md) — **프레임워크 선택 기준.**

## 5-C. 계획과 리플렉션

메인: Agentic AI module 05 + module 02. **에이전트가 스스로 고치게 만드는 부분**이 이 로드맵 도착점의 "자기 개선" 요구를 담당한다.

- [ ] [01 Planning workflows.md](../../courses/deeplearning-ai/Agentic%20AI/module%2005/01%20Planning%20workflows.md)
- [ ] [02 Creating and executing LLM plans.md](../../courses/deeplearning-ai/Agentic%20AI/module%2005/02%20Creating%20and%20executing%20LLM%20plans.md)
- [ ] [03 Planning with code execution.md](../../courses/deeplearning-ai/Agentic%20AI/module%2005/03%20Planning%20with%20code%20execution.md)
- [ ] [01 Reflection.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/01%20Reflection.md)
- [ ] [02 Direct Generation vs Reflection.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/02%20Direct%20Generation%20vs%20Reflection.md) — **한 번에 만들 때와 되돌아볼 때의 차이.** 비용이 배로 드는 만큼 언제 쓸지 판단이 필요하다.
- [ ] [05 Reflection with External Feedback.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/05%20Reflection%20with%20External%20Feedback.md) — **외부 피드백을 받는 리플렉션.** 테스트 결과·실제 지표를 되먹이는 구조라 회사 운영에 가장 잘 맞는다.
- [ ] [06 Improving SQL Generation with Reflection.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/06%20Improving%20SQL%20Generation%20with%20Reflection.md) — Phase 9의 지표 조회 에이전트에 그대로 쓴다.

함께 보기:

- [ ] [02 The Art of AI Self-Improvement - Building Reflection Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%202%20-%20Agentic%20AI%20with%20LangChain%20and%20LangGraph/Module%202%20-%20Self-Improving%20Agents/02%20The%20Art%20of%20AI%20Self-Improvement%20-%20Building%20Reflection%20Agents.md)
- [ ] [03 Understanding Reflexion Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%202%20-%20Agentic%20AI%20with%20LangChain%20and%20LangGraph/Module%202%20-%20Self-Improving%20Agents/03%20Understanding%20Reflexion%20Agents.md)
- [ ] [05 ReAct - Building Agents that Reason Before Acting.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%202%20-%20Agentic%20AI%20with%20LangChain%20and%20LangGraph/Module%202%20-%20Self-Improving%20Agents/05%20ReAct%20-%20Building%20Agents%20that%20Reason%20Before%20Acting.md)

함께 보기: 계획을 미리 세울지 돌면서 세울지의 트레이드오프.

- [ ] [02-Improving AI Agent Reasoning with Up-front Planning & Chain of Thought.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%205%20-%20Approaches%20to%20Improving%20AI%20Agent%20Reasoning/02-Improving%20AI%20Agent%20Reasoning%20with%20Up-front%20Planning%20%26%20Chain%20of%20Thought.md)
- [ ] [05-Improving AI Agent Reasoning with In-loop Planning.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%205%20-%20Approaches%20to%20Improving%20AI%20Agent%20Reasoning/05-Improving%20AI%20Agent%20Reasoning%20with%20In-loop%20Planning.md)
- [ ] **06-Intermediate Planning - Tracking Progress in the Agent Loop.md**
- [ ] **07-The Great Agent Trade-off - Ahead of Time vs. Dynamic.md** — **이 절의 결론 강의.**

## 5-D. 사람 승인 지점과 에이전트 헌법

메인: The Complete Agentic AI Engineering Masterclass, Section 11 + 안전 설계.

- [ ] [01 Shipping Agent and Custom Tool.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2011%20-%20Human%20in%20the%20Loop/01%20Shipping%20Agent%20and%20Custom%20Tool.md)
- [ ] [02 Helper Functions and Agent Flow.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2011%20-%20Human%20in%20the%20Loop/02%20Helper%20Functions%20and%20Agent%20Flow.md)
- [ ] [03 LRO Workflow Explanation and Exercise.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2011%20-%20Human%20in%20the%20Loop/03%20LRO%20Workflow%20Explanation%20and%20Exercise.md) — **장기 실행 작업(long-running operation)에서 사람 승인을 어떻게 끼워 넣는가.** 며칠 걸리는 회사 업무에 필수.
- [ ] [22 Day 5 - Human in the Loop with LangChain create_agent - Approve and Reject.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/22%20Day%205%20-%20Human%20in%20the%20Loop%20with%20LangChain%20create_agent%20-%20Approve%20and%20Reject.md) — 승인/거절 구현 실물.
- [ ] [2026-06-16 Building long-running AI agents with ADK.md](../../courses/youtube/Google%20Cloud%20Tech/5-Days%20of%20AI%20Agents%20and%20Agent%20Factory/2026-06-16%20Building%20long-running%20AI%20agents%20with%20ADK.md)
- [ ] [2026-06-18 3 patterns to build long-running AI agents.md](../../courses/youtube/Google%20Cloud%20Tech/5-Days%20of%20AI%20Agents%20and%20Agent%20Factory/2026-06-18%203%20patterns%20to%20build%20long-running%20AI%20agents.md)

안전 설계 원칙:

- [ ] [01.The MATE Design Principles for AI Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%202%20-%20AI%20Agent%20Design%20Principles%20%26%20Safety/01.The%20MATE%20Design%20Principles%20for%20AI%20Agents.md) — **MATE 설계 원칙.**
- [ ] [02.MATE Design Principles in Code.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%202%20-%20AI%20Agent%20Design%20Principles%20%26%20Safety/02.MATE%20Design%20Principles%20in%20Code.md)
- [ ] [03.AI Agents & Environment Safety.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%202%20-%20AI%20Agent%20Design%20Principles%20%26%20Safety/03.AI%20Agents%20%26%20Environment%20Safety.md) — **에이전트가 환경에 무엇을 할 수 있게 할 것인가.** 권한 설계의 원칙.

헌법 문서 쓰는 법:

- [ ] [05 Creating the Constitution.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution.md) — **헌법(constitution) 작성법.** 코딩 에이전트용으로 나온 개념이지만, 회사의 원칙·톤·금지선을 담는 형식으로 그대로 쓸 수 있다.
- [ ] [02 The Mental Model for Working with AI Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Build%20Apps%20with%20AI%20-%20From%20Idea%20to%20Working%20Product/Module%201%20-%20Engineer%20Systems/02%20The%20Mental%20Model%20for%20Working%20with%20AI%20Agents.md)

## 승인 지점을 MCP로 구현할 때 — MRTR

위 5-D의 실습은 **에이전트 프레임워크 수준의 승인**(OpenAI Agents SDK, LangChain `create_agent`)이라 그대로 쓰면 된다. 다만 [Phase 4](04%20Phase%204%20-%20회사%20지식과%20시스템%20연결.md)에서 사내 MCP 서버를 직접 만들고 **서버 쪽에서 사람 확인을 요구**해야 한다면 경로가 하나로 정해져 있다 — **MRTR(Multi Round-Trip Requests)** 이다.

- 서버가 `resultType: "input_required"` 와 `inputRequests` 를 담아 돌려준다
- 클라이언트가 사람에게 묻고, **원래 요청을 `inputResponses` 를 실어 다시 보낸다**

즉 **MCP 서버는 승인을 기다리며 붙잡고 있지 않는다.** 승인 대기 상태를 서버가 관리하려면 서버가 발급한 식별자를 `requestState`에 담아 재시도 사이에 이어 붙여야 한다. 이 구조가 5-D의 승인 지점 배치도와 어긋나지 않는지 확인한다.

> **LangChain은 `create_agent` 하나를 쓴다.** 강의에 `initialize_agent` · `AgentExecutor` · `langgraph.prebuilt.create_react_agent` 가 나오면 **개념만 취하고 코드는** [공식 마이그레이션 문서](https://docs.langchain.com/oss/python/migrate/langchain-v1)를 따른다.

## 산출물

1. **에이전트 조직도** — Phase 1의 BPMN 레인을 에이전트 역할로 번역한 그림. 각 역할마다 아래를 적는다.
   - 담당 업무 · 접근 가능한 도구와 지식(Phase 4) · 쓰는 모델(Phase 2) · 자율성 등급(Phase 2) · 상위/하위 관계
2. **역할 3개 이상의 멀티 에이전트** — 실제로 돌아가는 것. 최소한 하나는 오케스트레이터, 하나는 실행자, 하나는 검토자여야 한다. 에이전트 간 주고받는 데이터를 스키마로 고정한다.
3. **에이전트 헌법 문서** — 모든 에이전트가 공유하는 문서. 최소한 아래를 담는다.
   - 회사가 하는 일과 고객이 누구인지 · 절대 하지 말 것(금지선) · 확신이 없을 때의 행동 · 사람에게 물어야 하는 상황 · 말투와 문서 양식
4. **승인 지점 배치도** — 어느 단계에서 사람이 승인하는가. Phase 2의 자율성 등급과 어긋나는 곳이 없는지 대조한다.
5. **리졸버 테이블 (= 조직도)** — 일이 들어왔을 때 **어떤 역할이 그것을 맡는지** 결정하는 표. 조직도가 사람 이름의 목록이라면 리졸버는 *상황 → 담당* 의 매핑이다. Phase 1의 BPMN에서 레인 하나가 리졸버 한 줄이 된다.

   | 들어오는 일 | 판별 신호 | 맡는 역할 | 함께 로드할 문서 | 못 맡을 때 |
   |---|---|---|---|---|

   위 1번의 조직도가 *누가 있는가*라면, 리졸버는 *일이 오면 실제로 누구에게 가는가*다. 둘은 다르고, 후자가 없으면 역할만 있고 배선이 없다.
6. **트리거 이벨 (= 인사 평가)** — "그 상황이 오면 그 역할이 실제로 불리는가"를 검증하는 테스트. 리졸버 한 줄마다 최소 1건. **[Phase 6](06%20Phase%206%20-%20평가와%20오류%20분석.md)의 eval과 다르다** — eval은 *답이 맞았는지*를, 이벨은 *애초에 불렸는지*를 본다. 역할이 늘어날수록 조용히 안 불리는 일이 생기는데 이걸 잡는 유일한 방법이다.

## 다음 단계

→ [06 Phase 6 - 평가와 오류 분석](06%20Phase%206%20-%20평가와%20오류%20분석.md)
