# Module 3 — GAME: A Conceptual Framework for AI Agents

MOOC 강좌 **AI Agents and Agentic AI with Python & Generative AI** (Vanderbilt, Jules White) 의 Module 3 노트.

## 목차

| # | 파일 | 유형 |
|---|------|------|
| 01 | [Overview of the GAME Framework](01%20Overview%20of%20the%20GAME%20Framework.md) | Video |
| 02 | [Designing AI Agents with GAME](02%20Designing%20AI%20Agents%20with%20GAME.md) | Ungraded Plugin |
| 03 | [Simulating Agents in ChatGPT](03%20Simulating%20Agents%20in%20ChatGPT.md) | Video |
| 04 | [Simulating GAME Agents in Conversation](04%20Simulating%20GAME%20Agents%20in%20Conversation.md) | Ungraded Plugin |
| 05 | [Modular AI Agent Design](05%20Modular%20AI%20Agent%20Design.md) | Ungraded Plugin |
| 06 | [Agent Loop Customization](06%20Agent%20Loop%20Customization.md) | Ungraded Plugin |
| 07 | [Implementing GAME in Code](07%20Implementing%20GAME%20in%20Code.md) | Ungraded Plugin |
| 08 | [Try Out the Agent Framework](08%20Try%20Out%20the%20Agent%20Framework.md) | Reading |
| 09 | [How Your Agent Communicates with the LLM: The Agent Language](09%20How%20Your%20Agent%20Communicates%20with%20the%20LLM%20-%20The%20Agent%20Language.md) | Ungraded Plugin |
| 10 | [Putting It All Together: Document Your Code with a README Agent](10%20Putting%20It%20All%20Together%20-%20Document%20Your%20Code%20with%20a%20README%20Agent.md) | Ungraded Plugin |

## 핵심 개념 한눈에 보기
- **GAME = Goals + Actions + Memory + Environment** — Agent Loop를 설계·구현하는 4가지 추상화. Goals/Actions는 그대로 두고 Environment만 바꿔 재사용하거나, Actions/Memory는 그대로 두고 Goals만 바꿔 다른 동작을 유도할 수 있다 ([01](01%20Overview%20of%20the%20GAME%20Framework.md), [02](02%20Designing%20AI%20Agents%20with%20GAME.md)).
- **대화 시뮬레이션으로 먼저 검증** — 코드를 짜기 전에 ChatGPT 대화에서 GAME 설계를 시뮬레이션하면, 도구 설계 결함이나 목표의 모호함을 값싸고 빠르게 발견할 수 있다 ([03](03%20Simulating%20Agents%20in%20ChatGPT.md), [04](04%20Simulating%20GAME%20Agents%20in%20Conversation.md)).
- **코드 프레임워크화** — `Goal`(dataclass), `Action`+`ActionRegistry`, `Memory`, `Environment`를 클래스로 캡슐화하고, 이를 하나의 `Agent` 클래스로 조립해 `run()` 메서드로 전체 루프를 실행 ([05](05%20Modular%20AI%20Agent%20Design.md), [06](06%20Agent%20Loop%20Customization.md), [07](07%20Implementing%20GAME%20in%20Code.md)).
- **AgentLanguage** — GAME에 더해지는 다섯 번째 요소로, "무엇을 할지"와 "어떻게 소통할지"를 분리한다. `AgentJsonActionLanguage`(파싱 기반)와 `AgentFunctionCallingActionLanguage`(Function Calling 기반)를 교체하는 것만으로 같은 에이전트가 다르게 소통하게 만들 수 있다 ([09](09%20How%20Your%20Agent%20Communicates%20with%20the%20LLM%20-%20The%20Agent%20Language.md)).
- **README 에이전트** — 위 모든 요소를 조립한 완결 예시. 두 개의 순차적 목표(정보 수집→종료) + 세 개의 행동(list/read/terminate) + Function Calling 언어로 실제 동작하는 문서 생성 에이전트를 완성한다 ([10](10%20Putting%20It%20All%20Together%20-%20Document%20Your%20Code%20with%20a%20README%20Agent.md)).
