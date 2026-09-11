# Module 1 — Agentic AI Concepts

MOOC 강좌 **AI Agents and Agentic AI with Python & Generative AI** (Vanderbilt, Jules White) 의 Module 1 노트.

> 이 폴더는 사이트의 실제 Module 1 항목(21개) 순서를 그대로 따라 새로 정리한 것이다. 같은 코스 폴더 안의 `01 module`~`05 module` 폴더는 내용을 대조해보니 이 강좌가 아니라 같은 강사의 다른 강좌(Prompt Engineering for ChatGPT 계열)의 노트로 보여, 손대지 않고 그대로 두었다 ([20](20%20Learning%20More%20%26%20Staying%20Connected.md) 참고).

## 목차

| # | 파일 | 유형 |
|---|------|------|
| 01 | [Introduction](01%20Introduction.md) | Video |
| 02 | [Flipped Interaction Pattern](02%20Flipped%20Interaction%20Pattern.md) | Video |
| 03 | [The Agent Loop](03%20The%20Agent%20Loop.md) | Video |
| 04 | [Knowledge Check](04%20Knowledge%20Check%20-%20Agent%20Loop%20%26%20Flipped%20Interaction.md) | Practice Assignment |
| 05 | [Running the Code Samples in the Course](05%20Running%20the%20Code%20Samples%20in%20the%20Course.md) | Reading |
| 06 | [Programmatic Prompting for Agents](06%20Programmatic%20Prompting%20for%20Agents.md) | Ungraded Plugin |
| 07 | [Try Out Programmatic Prompting](07%20Try%20Out%20Programmatic%20Prompting.md) | Reading |
| 08 | [Programmatic Prompting for Agents II](08%20Programmatic%20Prompting%20for%20Agents%20II.md) | Ungraded Plugin |
| 09 | [Programmatic Prompting for Agents III](09%20Programmatic%20Prompting%20for%20Agents%20III.md) | Ungraded Plugin |
| 10 | **Programmatic Prompting: Building Blocks (Dialogue)**.md) | Dialogue |
| 11 | [Try Out the Customer Service Agent](11%20Try%20Out%20the%20Customer%20Service%20Agent.md) | Reading |
| 12 | [Giving Agents Memory](12%20Giving%20Agents%20Memory.md) | Ungraded Plugin |
| 13 | [Practicing Programmatic Prompting for Agents](13%20Practicing%20Programmatic%20Prompting%20for%20Agents.md) | Ungraded Plugin |
| 14 | **Practicing Programmatic Prompting (Solution)**.md) | Ungraded Plugin |
| 15 | [Adding Structure to AI Agent Outputs](15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md) | Video |
| 16 | **Building Your First Agent (Part 1)**.md) | Ungraded Plugin |
| 17 | **AI Agent / Environment Interface (Part 2)**.md) | Ungraded Plugin |
| 18 | **AI Agent Feedback and Memory (Part 3)**.md) | Ungraded Plugin |
| 19 | **The Agent Loop: Understanding → Thinking Like an Agent (Dialogue)**.md) | Dialogue |
| 20 | [Learning More & Staying Connected](20%20Learning%20More%20%26%20Staying%20Connected.md) | Reading |
| 21 | **Understanding Agentic AI Concepts**.md) | Graded Assignment |

## 핵심 개념 한눈에 보기
- **Agentic AI** = 행위 주체성(agency)을 갖고 실제 세계에 작용하며 결과를 관찰해 적응하는 AI ([01](01%20Introduction.md)).
- **Flipped Interaction Pattern** = 사람이 지시하는 대신 AI가 목표 달성에 필요한 정보를 질문/지시하도록 상호작용을 뒤집는 패턴 ([02](02%20Flipped%20Interaction%20Pattern.md)).
- **Agent Loop** = 프롬프트 구성 → 응답 생성 → 파싱 → 행동 실행 → 결과(피드백) → 종료 판단의 6단계 반복 ([03](03%20The%20Agent%20Loop.md), Python 구현은 **16~18**.md)).
- **LLM은 stateless** — `messages`에 명시하지 않으면 아무것도 기억하지 못한다 ([12](12%20Giving%20Agents%20Memory.md)).
- **출력 구조화** — 템플릿 패턴 + reasoning 플레이스홀더로 파싱 가능한 형식을 강제 ([15](15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md)).
