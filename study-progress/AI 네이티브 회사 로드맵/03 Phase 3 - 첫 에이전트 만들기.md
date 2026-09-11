# Phase 3 — 첫 에이전트 만들기

- 목표: 프레임워크에 기대지 않고 에이전트 루프를 직접 짜고, 도구를 붙여 회사의 실제 업무 1건을 끝까지 처리시킨다.
- 분량: 약 14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 에이전트 루프(목표 → 판단 → 도구 호출 → 결과 반영 → 반복)를 파이썬으로 직접 짤 수 있다.
- 회사의 기존 함수·API를 도구(tool)로 노출하고, 모델이 그걸 고르게 만들 수 있다.
- 에이전트의 출력을 구조화(structured output)해 다음 단계가 받아 쓸 수 있게 만들 수 있다.
- 대화가 끊겨도 이어지는 세션과 기억을 붙일 수 있다.
- Phase 1의 우선순위표에서 `지금 자동화`로 판정한 업무 하나를 실제로 돌릴 수 있다.

> **준비물**: 파이썬 환경, 유료 LLM API 키 하나(또는 Phase 2에서 세팅한 Ollama). 이 Phase부터 API 비용이 발생한다.

> **왜 프레임워크를 먼저 안 쓰는가**: CrewAI·LangGraph·ADK는 루프를 감춘다. 감춰진 것을 모르면 Phase 6에서 "왜 틀렸는지"를 못 찾는다. 루프를 손으로 짜 본 뒤 Phase 5에서 프레임워크를 고른다.

## 3-A. 에이전트 루프를 직접 짠다

메인: AI Agents and Agentic AI with Python & Generative AI, Module 1. **이 절이 Phase 3의 중심이다.**

- [ ] [01 Introduction.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/01%20Introduction.md)
- [ ] [02 Flipped Interaction Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/02%20Flipped%20Interaction%20Pattern.md) — 모델이 질문을 던지게 만드는 패턴. 사내 업무처럼 정보가 흩어져 있을 때 특히 쓸모 있다.
- [ ] [03 The Agent Loop.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/03%20The%20Agent%20Loop.md) — **에이전트 루프의 정의.** 이 로드맵 전체에서 가장 자주 되돌아올 강의.
- [ ] [06 Programmatic Prompting for Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/06%20Programmatic%20Prompting%20for%20Agents.md)
- [ ] [08 Programmatic Prompting for Agents II.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/08%20Programmatic%20Prompting%20for%20Agents%20II.md)
- [ ] [09 Programmatic Prompting for Agents III.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/09%20Programmatic%20Prompting%20for%20Agents%20III.md)
- [ ] [12 Giving Agents Memory.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/12%20Giving%20Agents%20Memory.md)
- [ ] [15 Adding Structure to AI Agent Outputs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md) — **구조화된 출력.** 에이전트 여러 개를 잇는 순간 이게 없으면 전부 문자열 파싱 지옥이 된다.
- [ ] [16 Building Your First Agent (Part 1 - The Agent Loop in Python).md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/16%20Building%20Your%20First%20Agent%20%28Part%201%20-%20The%20Agent%20Loop%20in%20Python%29.md) — **손으로 짜는 실습 1/3.**
- [ ] [17 AI Agent - Environment Interface (Part 2 - Parse & Execute).md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/17%20AI%20Agent%20-%20Environment%20Interface%20%28Part%202%20-%20Parse%20%26%20Execute%29.md) — 실습 2/3.
- [ ] [18 AI Agent Feedback and Memory (Part 3 - Update Memory & Loop Control).md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%201%20-%20Agentic%20AI%20Concepts/18%20AI%20Agent%20Feedback%20and%20Memory%20%28Part%203%20-%20Update%20Memory%20%26%20Loop%20Control%29.md) — 실습 3/3. **루프를 언제 멈출 것인가**가 여기 있다.

함께 보기: 같은 루프를 밑바닥부터 다시 짜 보는 Udemy 실습. 반복이 아깝지 않다.

- [ ] [20 Day 4 - How Tool Calling Works - The Truth Behind AI Agent Autonomy.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/20%20Day%204%20-%20How%20Tool%20Calling%20Works%20-%20The%20Truth%20Behind%20AI%20Agent%20Autonomy.md) — **"자율성"이 실제로는 무엇인지.** 과대평가를 걷어내는 강의.
- [ ] [23 Day 4 - Build the Agent Loop From Scratch - Tool Calling with a While Loop.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/23%20Day%204%20-%20Build%20the%20Agent%20Loop%20From%20Scratch%20-%20Tool%20Calling%20with%20a%20While%20Loop.md)
- [ ] [31 Day 5 - Build a Visible Agent Loop with Checklist Tools Like Claude Code.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/31%20Day%205%20-%20Build%20a%20Visible%20Agent%20Loop%20with%20Checklist%20Tools%20Like%20Claude%20Code.md) — 루프 진행을 눈에 보이게 만드는 법. Phase 7의 관측으로 이어진다.

작업 분해:

- [ ] [06 Task Decomposition.md](../../courses/deeplearning-ai/Agentic%20AI/module%2001/06%20Task%20Decomposition.md) — **업무를 에이전트가 실행 가능한 단위로 쪼개는 법.** Phase 1의 BPMN 지도를 여기서 실행 단위로 번역한다.
- [ ] [08 Design Patterns.md](../../courses/deeplearning-ai/Agentic%20AI/module%2001/08%20Design%20Patterns.md) — 네 가지 기본 패턴 개요. Phase 5의 예고편.

## 3-B. 도구를 붙인다

메인: 같은 강좌 Module 2. **도구 설계가 에이전트 품질의 대부분을 결정한다.**

- [ ] [01 GAIL - Goals, Actions, Information, Language.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/01%20GAIL%20-%20Goals,%20Actions,%20Information,%20Language.md) — 에이전트를 설계할 때 채우는 네 칸.
- [ ] [02 Giving Agents Tools.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/02%20Giving%20Agents%20Tools.md)
- [ ] [03 Tool Descriptions and Naming.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/03%20Tool%20Descriptions%20and%20Naming.md) — **도구 이름과 설명이 곧 프롬프트다.** Phase 1의 BPMN 이름 규칙 강의와 짝지어 본다.
- [ ] [04 Tool Results and Agent Feedback.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/04%20Tool%20Results%20and%20Agent%20Feedback.md)
- [ ] [05 Agent Tools in Python.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/05%20Agent%20Tools%20in%20Python.md)
- [ ] [07 Using Function Calling Capabilities with LLMs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/07%20Using%20Function%20Calling%20Capabilities%20with%20LLMs.md)
- [ ] [09 An Agent Loop with Function Calling.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/09%20An%20Agent%20Loop%20with%20Function%20Calling.md)
- [ ] [12 Agent Tool Design Best Practices.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20with%20Python%20%26%20Generative%20AI/Module%202%20-%20AI%20Agents,%20Tools,%20Actions,%20%26%20Language/12%20Agent%20Tool%20Design%20Best%20Practices.md) — **도구 설계 원칙 모음.** 사내 API를 노출할 때 이 목록을 체크리스트로 쓴다.

함께 보기: Agentic AI module 03. 코드 실행 도구와 MCP 예고까지 한 번에 훑는다.

- [ ] [01 Tool Use Introduction.md](../../courses/deeplearning-ai/Agentic%20AI/module%2003/01%20Tool%20Use%20Introduction.md)
- [ ] [02 How LLMs Use Tools.md](../../courses/deeplearning-ai/Agentic%20AI/module%2003/02%20How%20LLMs%20Use%20Tools.md)
- [ ] [04 Turning Functions into Tools.md](../../courses/deeplearning-ai/Agentic%20AI/module%2003/04%20Turning%20Functions%20into%20Tools.md)
- [ ] [05 Lab - Email Assistant Workflow.md](../../courses/deeplearning-ai/Agentic%20AI/module%2003/05%20Lab%20-%20Email%20Assistant%20Workflow.md) — **사내 업무에 가장 가까운 실습.** 메일 처리는 어느 회사나 있는 자동화 후보다.
- [ ] [06 Code Execution Tool.md](../../courses/deeplearning-ai/Agentic%20AI/module%2003/06%20Code%20Execution%20Tool.md) — 코드 실행 도구. 강력한 만큼 Phase 7의 샌드박스와 반드시 함께 본다.

함께 보기: 도구 관점을 한 번 더.

- [ ] [05 Why AI Needs Tools - From Guessing to Real-World Action.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%201%20-%20Fundamentals%20of%20Building%20AI%20Agents/Module%201%20-%20Foundations%20of%20Tool%20Calling%20and%20Chaining/05%20Why%20AI%20Needs%20Tools%20-%20From%20Guessing%20to%20Real-World%20Action.md)
- [ ] [06 Build Effective AI Tools for Advanced LLMs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%201%20-%20Fundamentals%20of%20Building%20AI%20Agents/Module%201%20-%20Foundations%20of%20Tool%20Calling%20and%20Chaining/06%20Build%20Effective%20AI%20Tools%20for%20Advanced%20LLMs.md)
- [ ] [01 Building Custom Tools For Agents.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2010%20-%20Agent%20Tools%20and%20MCP/01%20Building%20Custom%20Tools%20For%20Agents.md)
- [ ] [02 Improve Agent Reliability with Code Executor.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2010%20-%20Agent%20Tools%20and%20MCP/02%20Improve%20Agent%20Reliability%20with%20Code%20Executor.md)

## 3-C. 프롬프트로 행동을 고정한다

메인: CrewAI 강좌 Module 2의 프롬프트·컨텍스트 부분. 실제 데모가 붙어 있어 "좋은 프롬프트"를 눈으로 비교할 수 있다.

- [ ] [04 Principles of Effective Prompt Engineering.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/04%20Principles%20of%20Effective%20Prompt%20Engineering.md)
- [ ] [05 Core Prompting Techniques.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/05%20Core%20Prompting%20Techniques.md)
- [ ] [06 Writing Prompts for Agent Behavior and Tone.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/06%20Writing%20Prompts%20for%20Agent%20Behavior%20and%20Tone.md) — **행동과 말투를 고정하는 법.** Phase 5의 에이전트 헌법이 여기서 시작된다.
- [ ] [07 Demonstration - Evaluating Prompt Impact Through Structured Comparison.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/07%20Demonstration%20-%20Evaluating%20Prompt%20Impact%20Through%20Structured%20Comparison.md)
- [ ] [09 Introduction to Context Engineering.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/09%20Introduction%20to%20Context%20Engineering.md) — **컨텍스트 엔지니어링.** Phase 4의 지식베이스 설계 근거.
- [ ] [12 Demonstration - Context Quality in Action - Signal vs Noise.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/12%20Demonstration%20-%20Context%20Quality%20in%20Action%20-%20Signal%20vs%20Noise.md) — 맥락을 많이 주면 좋아진다는 착각을 깨는 데모.

함께 보기: AI Agents and Agentic AI Architecture in Python, Module 1. **페르소나 패턴**을 역할 분리의 프로그래밍 추상으로 다룬다 — Phase 5의 직접 근거다.

- [ ] [01.Prompts as Computation.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/01.Prompts%20as%20Computation.md)
- [ ] [02.Self-Prompting & Clean Separation of AI Agent Reasoning.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/02.Self-Prompting%20%26%20Clean%20Separation%20of%20AI%20Agent%20Reasoning.md)
- [ ] [04.AI Agent Structured Data Extraction.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/04.AI%20Agent%20Structured%20Data%20Extraction.md)
- [ ] [05.An Invoice Processing Agent.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/05.An%20Invoice%20Processing%20Agent.md) — **전표 처리 에이전트.** 사내 업무 자동화의 전형적인 첫 대상.
- [ ] [07.The Persona Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/07.The%20Persona%20Pattern.md)
- [ ] [08.Format of the Persona Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/08.Format%20of%20the%20Persona%20Pattern.md)
- [ ] [13. Using Human Policies for Document-as-Implementation.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20and%20Agentic%20AI%20Architecture%20in%20Python/Module%201%20-%20Extending%20AI%20Agents%20with%20Self-Prompting/13.%20Using%20Human%20Policies%20for%20Document-as-Implementation.md) — **사내 규정 문서를 그대로 구현으로 쓰는 법.** 이 로드맵에서 특히 값진 강의다.

## 3-D. 세션과 기억

메인: The Complete Agentic AI Engineering Masterclass, Section 12.

- [ ] [01 Stateful Agent Applications.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2012%20-%20Sessions%20and%20Memory/01%20Stateful%20Agent%20Applications.md)
- [ ] [02 Building Persistent Memory for Agents.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2012%20-%20Sessions%20and%20Memory/02%20Building%20Persistent%20Memory%20for%20Agents.md)
- [ ] [03 Shared Context between Agent and Sessions.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2012%20-%20Sessions%20and%20Memory/03%20Shared%20Context%20between%20Agent%20and%20Sessions.md) — **에이전트 간 공유 맥락.** Phase 5의 전제.

함께 보기: Google Cloud Tech의 기억 3부작. 단기·장기·메모리 뱅크를 나눠 설명한다.

- [ ] [2026-03-26 How to add short-term memory to your AI agent (Sessions & State Explained).md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2026-03-26%20How%20to%20add%20short-term%20memory%20to%20your%20AI%20agent%20%28Sessions%20%26%20State%20Explained%29.md)
- [ ] [2026-04-08 How to add persistent memory to your AI agent.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2026-04-08%20How%20to%20add%20persistent%20memory%20to%20your%20AI%20agent.md)
- [ ] [2026-04-16 AI agent long-term memory with memory bank.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2026-04-16%20AI%20agent%20long-term%20memory%20with%20memory%20bank.md)

함께 보기:

- [ ] [24 Day 5 - Context Engineering for AI Agents - Memory, Tools and RAG.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/24%20Day%205%20-%20Context%20Engineering%20for%20AI%20Agents%20-%20Memory,%20Tools%20and%20RAG.md) — 기억·도구·RAG를 하나의 컨텍스트 문제로 묶어 보는 관점. **Phase 4로 넘어가는 다리.**
- [ ] **2026-07-15 Context engineering explained - What every AI developer should know.md**

## 산출물

1. **직접 짠 에이전트 루프** — 프레임워크 없이 파이썬 100줄 안팎. 루프 종료 조건과 최대 반복 횟수를 명시적으로 넣는다.
2. **회사 도구 3개 이상** — 사내 시스템의 실제 조회/실행 기능을 도구로 노출한다. 각 도구마다 이름·설명·입력 스키마·실패 시 반환값을 문서화한다.
3. **업무 1건이 끝까지 도는 에이전트** — Phase 1에서 `지금 자동화`로 판정한 것 중 하나. Phase 2의 자율성 등급에 따라 L1(제안)으로 시작한다. **아직 L3로 올리지 않는다** — eval이 없기 때문이다(Phase 6).
4. **실패 기록** — 이 에이전트가 틀린 사례를 그때그때 모아 둔다. Phase 6의 eval 데이터셋이 여기서 나온다. 지금부터 모으지 않으면 Phase 6에서 처음부터 만들어야 한다.

## 다음 단계

→ [04 Phase 4 - 회사 지식과 시스템 연결](04%20Phase%204%20-%20회사%20지식과%20시스템%20연결.md)
