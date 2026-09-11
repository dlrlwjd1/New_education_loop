# Module 4 — Agent Tool Management

MOOC 강좌 **AI Agents and Agentic AI with Python & Generative AI** (Vanderbilt, Jules White) 의 Module 4 노트.

## 목차

| # | 파일 | 유형 |
|---|------|------|
| 01 | [Keeping Agent Tools Up to Date with Python Decorators](01%20Keeping%20Agent%20Tools%20Up%20to%20Date%20with%20Python%20Decorators.md) | Ungraded Plugin |
| 02 | [Tool Organization for Agents](02%20Tool%20Organization%20for%20Agents.md) | Ungraded Plugin |
| 03 | [Refactoring Our README Agent](03%20Refactoring%20Our%20README%20Agent.md) | Ungraded Plugin |
| 04 | [Try Out the README Agent with the Decorator](04%20Try%20Out%20the%20README%20Agent%20with%20the%20Decorator.md) | Reading |

## 핵심 개념 한눈에 보기
- **`@register_tool` 데코레이터** — 함수의 이름/docstring/타입 힌트를 인트로스펙션해서 도구의 이름·설명·JSON Schema 파라미터를 자동 생성. 함수와 도구 메타데이터가 항상 동기화되도록 보장한다 ([01](01%20Keeping%20Agent%20Tools%20Up%20to%20Date%20with%20Python%20Decorators.md)).
- **태그 기반 조직화** — `tools`(전체 목록)와 `tools_by_tag`(태그별 색인) 두 레지스트리로 도구를 관리하고, `ActionRegistry(tags=[...])`로 필요한 도구만 골라 에이전트를 구성한다 ([02](02%20Tool%20Organization%20for%20Agents.md)).
- **README 에이전트 리팩터링** — [Module 3](../Module%203%20-%20GAME%20-%20A%20Conceptual%20Framework%20for%20AI%20Agents/10%20Putting%20It%20All%20Together%20-%20Document%20Your%20Code%20with%20a%20README%20Agent.md)의 수동 등록 방식을 데코레이터 + 태그 방식으로 전환해 유지보수성을 크게 개선한다 ([03](03%20Refactoring%20Our%20README%20Agent.md), [04](04%20Try%20Out%20the%20README%20Agent%20with%20the%20Decorator.md)).
