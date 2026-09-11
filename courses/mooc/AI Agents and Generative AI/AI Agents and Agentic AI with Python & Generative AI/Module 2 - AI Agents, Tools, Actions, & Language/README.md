# Module 2 — AI Agents, Tools, Actions, & Language

MOOC 강좌 **AI Agents and Agentic AI with Python & Generative AI** (Vanderbilt, Jules White) 의 Module 2 노트.

## 목차

| # | 파일 | 유형 |
|---|------|------|
| 01 | [GAIL - Goals, Actions, Information, Language](01%20GAIL%20-%20Goals%2C%20Actions%2C%20Information%2C%20Language.md) | Video |
| 02 | [Giving Agents Tools](02%20Giving%20Agents%20Tools.md) | Video |
| 03 | [Tool Descriptions and Naming](03%20Tool%20Descriptions%20and%20Naming.md) | Video |
| 04 | [Tool Results and Agent Feedback](04%20Tool%20Results%20and%20Agent%20Feedback.md) | Video |
| 05 | [Agent Tools in Python](05%20Agent%20Tools%20in%20Python.md) | Ungraded Plugin |
| 06 | [Try Out an Agent that Calls Python Functions](06%20Try%20Out%20an%20Agent%20that%20Calls%20Python%20Functions.md) | Reading |
| 07 | [Using Function Calling Capabilities with LLMs](07%20Using%20Function%20Calling%20Capabilities%20with%20LLMs.md) | Ungraded Plugin |
| 08 | [Try Out LLM Function Calling](08%20Try%20Out%20LLM%20Function%20Calling.md) | Reading |
| 09 | [An Agent Loop with Function Calling](09%20An%20Agent%20Loop%20with%20Function%20Calling.md) | Ungraded Plugin |
| 10 | [Try Out an Agent Loop with Function Calling](10%20Try%20Out%20an%20Agent%20Loop%20with%20Function%20Calling.md) | Reading |
| 11 | [Exercise: Extend the Function Calling Agent](11%20Exercise%20-%20Extend%20the%20Function%20Calling%20Agent.md) | Reading |
| 12 | [Agent Tool Design Best Practices](12%20Agent%20Tool%20Design%20Best%20Practices.md) | Ungraded Plugin |
| 13 | **Understanding the AI Agent Loop**.md) | Graded Assignment |

## 핵심 개념 한눈에 보기
- **GAIL** = Goals(목표/규칙/프로세스) + Actions(행동) + Information(정보/피드백) + Language(소통형식) — 에이전트 프롬프트 설계 프레임워크. G·A·L은 system 메시지, I는 user 메시지로 매핑 ([01](01%20GAIL%20-%20Goals%2C%20Actions%2C%20Information%2C%20Language.md)).
- **도구/행동 제한** — 에이전트가 임의로 문제를 풀지 않도록 사용 가능한 도구의 범위를 명시적으로 제약해야 한다. 컴퓨터 시스템엔 Action, 사람에겐 Tool이라는 표현이 더 자연스럽다 ([02](02%20Giving%20Agents%20Tools.md)).
- **도구 이름/설명** — 이름 하나만 바꿔도 에이전트 성능이 극적으로 달라진다. 설명이 있으면 이상한 이름도 괜찮지만, 설명 없는 약어는 위험하다 ([03](03%20Tool%20Descriptions%20and%20Naming.md)).
- **도구 결과 피드백** — 에이전트는 행동 결과를 스스로 관찰할 수 없으므로 반드시 피드백해야 하며, 에러 메시지는 에이전트가 이해할 수 있는 형태로 원인을 설명해야 한다 ([04](04%20Tool%20Results%20and%20Agent%20Feedback.md)).
- **JSON Schema 도구 정의** — `tool_name`/`description`/`parameters(object)`로 도구를 구조화해서 기술 ([05](05%20Agent%20Tools%20in%20Python.md)).
- **Function Calling API** — 프롬프트 엔지니어링으로 출력 형식을 강제하는 대신, 모델이 네이티브하게 구조화된 `tool_calls`를 반환하도록 하는 두 번째 접근법. Agent Loop의 파싱 단계를 사실상 없애준다 ([07](07%20Using%20Function%20Calling%20Capabilities%20with%20LLMs.md), [09](09%20An%20Agent%20Loop%20with%20Function%20Calling.md)).
- **도구 설계 모범 사례** — 범용보다 작업 특화 도구, 명확한 이름, 견고한 에러 처리, 에러 메시지에 "다음에 뭘 해야 할지" 지침을 심어두기 ([12](12%20Agent%20Tool%20Design%20Best%20Practices.md)).
