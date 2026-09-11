# AI Agents with Model Context Protocol

**Course URL:** [mooc.org/learn/ai-agents-model-context-protocol](https://www.mooc.org/learn/ai-agents-model-context-protocol)

Vanderbilt University (Dr. Jules White) 강좌. **"AI Agents with Model Context Protocol" Specialization**의 일부. AI 에이전트가 **Model Context Protocol(MCP)**을 통해 캘린더·이메일·데이터베이스 같은 실제 도구·시스템에 직접 접근해 작업을 수행하는 원리를 다룬다. 총 5개 모듈, 12개 비디오 강의로 구성.

> **참고**: Module 4(Robust Error Handling Techniques for AI Agents)는 비디오 강의 없이 읽기 자료(reading)와 인터랙티브 실습 위젯(ungraded plugin)으로만 구성되어 있어, 이 정리본에는 포함되지 않았다.

## 모듈 구성

- [Module 1 - Getting Started with MCP for AI Agents](Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/) — MCP가 필요한 이유, 도구 사용의 기본 원리
- [Module 2 - AI Agent Loops and Model Context Protocol](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/) — MCP의 문법/의미/타이밍, 에이전트 루프, MCP 서버, 도구 명세, Big AI vs. Little AI 전략
- [Module 3 - Building AI Agents with Model Context Protocol](Module%203%20-%20Building%20AI%20Agents%20with%20Model%20Context%20Protocol/) — 리소스(resources)를 통한 맥락 정보 제공
- Module 4 - Robust Error Handling Techniques for AI Agents *(비디오 없음 — 읽기 자료·실습 위젯으로 구성)*
- [Module 5 - Faster, More Predictable, More Capable AI Agents](Module%205%20-%20Faster%2C%20More%20Predictable%2C%20More%20Capable%20AI%20Agents/) — 프롬프트(prompts) 재사용, 정체성/보안, 마무리

## 강의 목록

### Module 1 - Getting Started with Model Context Protocol (MCP) for AI Agents
1. [Why Do We Need Model Context Protocol](Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/01%20Why%20Do%20We%20Need%20Model%20Context%20Protocol.md)
2. [Model Context Protocol and AI Problem Solving with Tools](Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/02%20Model%20Context%20Protocol%20and%20AI%20Problem%20Solving%20with%20Tools.md)
3. [MCP Allows AI to Communicate with the Computer](Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/03%20MCP%20Allows%20AI%20to%20Communicate%20with%20the%20Computer.md)

### Module 2 - AI Agent Loops & Model Context Protocol
1. [Model Context Protocol - Syntax, Semantics, Timing](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/01%20Model%20Context%20Protocol%20-%20Syntax%2C%20Semantics%2C%20Timing.md)
2. [Model Context Protocol and AI Agents](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/02%20Model%20Context%20Protocol%20and%20AI%20Agents.md)
3. [What is an MCP Server](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/03%20What%20is%20an%20MCP%20Server.md)
4. [Tool Specifications](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/04%20Tool%20Specifications.md)
5. [Agents Talking to Tools vs. Tools with AI](Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/05%20Agents%20Talking%20to%20Tools%20vs.%20Tools%20with%20AI.md)

### Module 3 - Building AI Agents with Model Context Protocol
1. [Resources](Module%203%20-%20Building%20AI%20Agents%20with%20Model%20Context%20Protocol/01%20Resources.md)

### Module 5 - Faster, More Predictable, More Capable AI Agents
1. [Prompts and MCP](Module%205%20-%20Faster%2C%20More%20Predictable%2C%20More%20Capable%20AI%20Agents/01%20Prompts%20and%20MCP.md)
2. [AI Agents, MCP, and Identity - Security](Module%205%20-%20Faster%2C%20More%20Predictable%2C%20More%20Capable%20AI%20Agents/02%20AI%20Agents%2C%20MCP%2C%20and%20Identity%20-%20Security.md)
3. [Wrapping Up](Module%205%20-%20Faster%2C%20More%20Predictable%2C%20More%20Capable%20AI%20Agents/03%20Wrapping%20Up.md)

## 핵심 개념 요약

- **MCP가 필요한 이유**: AI가 캘린더·이메일 등에 직접 접근하지 못하면, 사람이 계속 정보를 복사·전달하는 **중간 전달자(middleman)**가 되어야 한다. MCP는 AI에게 도구를 직접 사용할 능력을 줘서 사람을 리더 위치로 되돌린다.
- **도구 사용(tool use)의 본질**: "AI에게 도구를 준다"는 것은 복잡한 훈련이 아니라, 대화 속에서 **도구 목록**과 **사용 형식(`use: tool, notes`)**을 알려주는 것뿐이다. AI는 예상 밖의 상황(덜 익은 파스타 등)에도 적응적으로 대응한다.
- **MCP = 문법(Syntax) + 의미(Semantics) + 타이밍(Timing)**: AI가 컴퓨터와 소통하는 언어. 컴퓨터도 대화의 참여자가 되며, AI는 상대(사람/컴퓨터)에 따라 자연어와 MCP 사이를 전환한다.
- **AI 에이전트 루프**: 과제를 받으면 "도구 선택 → 호출 → 결과 확인 → 다음 행동 결정"을 반복하며 문제를 해결하고, 완료되면 사람에게 자연어로 요약 보고한다.
- **MCP 서버**: 보통 애플리케이션 하나당 하나씩 존재하며(이메일 서버, 캘린더 서버 등), AI가 접속해 도구 목록을 발견하는 대상이다.
- **도구 명세(Tool Specification)**: 각 도구의 **파라미터 스키마**(필수/선택 파라미터, 형식 규칙)를 정의한다. AI→컴퓨터 방향은 엄격한 형식이 필요하지만, 컴퓨터→AI 방향은 유연하되 토큰 비용을 줄이려면 간결해야 한다.
- **Big AI vs. Little AI**: AI를 도구와 분리해 독립적으로 운영(Big AI)하면 최적의 모델을 자유롭게 선택하고 도구/벤더도 유연하게 교체할 수 있다. 반대로 도구마다 AI가 내장된 구조(Little AI)는 벤더 종속과 "포로 노동시장"의 위험이 있다.
- **리소스(Resources)**: 도구를 올바르게 쓰기 위한 배경 지식(DB 스키마, 매뉴얼 등)을 AI가 발견하고 읽을 수 있게 해주는 요소 — "구문적으로 맞지만 의미적으로 틀린" 결과를 방지한다.
- **프롬프트(Prompts)**: 검증된 프롬프트 템플릿을 도구처럼 노출해, AI가 일관된 형식의 결과물(영수증, 보고서 등)을 안정적으로 생성하게 한다.
- **정체성/보안(Identity/Security)**: AI는 항상 특정 사용자의 정체성으로 시스템에 접근해야 하며, **그 사용자의 권한을 넘지 않는(대개 더 제한된) 권한**만 가져야 한다. AI에게 슈퍼유저 계정을 주는 것은 가장 위험한 안티패턴이다.
