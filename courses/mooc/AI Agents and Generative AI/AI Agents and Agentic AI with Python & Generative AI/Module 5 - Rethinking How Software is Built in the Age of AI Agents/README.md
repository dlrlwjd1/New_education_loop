# Module 5 — Rethinking How Software is Built in the Age of AI Agents

MOOC 강좌 **AI Agents and Agentic AI with Python & Generative AI** (Vanderbilt, Jules White) 의 Module 5(마지막 모듈) 노트.

## 목차

| # | 파일 | 유형 |
|---|------|------|
| 01 | [Build the Impossible with AI Agents](01%20Build%20the%20Impossible%20with%20AI%20Agents.md) | Video |
| 02 | [Rethinking How We Teach Innovation](02%20Rethinking%20How%20We%20Teach%20Innovation.md) | Video |
| 03 | [The Inventory Management Agent](03%20The%20Inventory%20Management%20Agent.md) | Ungraded Plugin |
| 04 | [Hallucination is a New Form of Computing](04%20Hallucination%20is%20a%20New%20Form%20of%20Computing.md) | Video |
| 05 | [New Ways to Access and Extract Information](05%20New%20Ways%20to%20Access%20and%20Extract%20Information.md) | Video |

## 핵심 개념 한눈에 보기
- **불가능했던 문제를 풀어라** — 생성형 AI 없이도 풀리는 문제 말고, 몇 년 전이라면 불가능해 보였던 문제에 집중하라. 도구는 특화된 프롬프트일 수 있고, 입력은 사진/대화/오디오로 확장될 수 있다 ([01](01%20Build%20the%20Impossible%20with%20AI%20Agents.md)).
- **소프트웨어를 만드는 방식의 근본적 변화** — 17페이지 정책 문서를 업로드하고 영수증에 적용시키거나, 사진 한 장으로 재고를 관리하는 것처럼, 팀이 몇 년 걸릴 작업을 개인이 몇 문장으로 즉시 만들 수 있다 ([02](02%20Rethinking%20How%20We%20Teach%20Innovation.md)).
- **단순한 도구 + 똑똑한 에이전트** — 복잡한 로직을 코드로 다 짜지 말고, `save_item`/`get_inventory` 같은 단순 CRUD 도구와 상세한 system 프롬프트(목표+페르소나)의 조합으로 정교한 시스템을 만든다. 이미지 입력까지 확장 가능 ([03](03%20The%20Inventory%20Management%20Agent.md)).
- **환각은 결함이 아니라 새로운 연산** — 답을 구하지 말고 **여러 관점/방법**을 요청하라. 확증 편향을 깨고, 회의록에서 모호함을 찾아 소통을 촉진하는 등 환각을 생산적으로 활용하는 법 ([04](04%20Hallucination%20is%20a%20New%20Form%20of%20Computing.md)).
- **데이터에 대한 재정의** — 구조화된 데이터베이스 대신 사진 한 장 같은 비정형 원본에서 필요한 정보를 그때그때 추출할 수 있다. 데이터를 질의/접근하는 방식 자체가 바뀐다 ([05](05%20New%20Ways%20to%20Access%20and%20Extract%20Information.md)).

---

## 강좌 전체 요약 (Module 1~5)

이번 강좌 **AI Agents and Agentic AI with Python & Generative AI** 5개 모듈을 관통하는 흐름:

1. **[Module 1 — Agentic AI Concepts](../Module%201%20-%20Agentic%20AI%20Concepts/README.md)**: Agentic AI 개념, Flipped Interaction Pattern, Agent Loop(6단계) 이론과 Python 구현.
2. **[Module 2 — AI Agents, Tools, Actions, & Language](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/README.md)**: GAIL 프레임워크, 도구/행동 설계, Function Calling API.
3. **[Module 3 — GAME: A Conceptual Framework for AI Agents](../Module%203%20-%20GAME%20-%20A%20Conceptual%20Framework%20for%20AI%20Agents/README.md)**: GAME(Goals/Actions/Memory/Environment) + AgentLanguage로 재사용 가능한 에이전트 프레임워크 구축.
4. **[Module 4 — Agent Tool Management](../Module%204%20-%20Agent%20Tool%20Management/README.md)**: `@register_tool` 데코레이터와 태그로 도구를 자동 동기화하고 조직화.
5. **Module 5 — Rethinking How Software is Built**: 위 모든 기술을 어디에, 왜 써야 하는지에 대한 철학적 마무리 — 불가능했던 문제, 환각의 재해석, 데이터의 재정의.
