# Design Patterns — 대화정리

## 개요

강의 [08 Design Patterns.md](08%20Design%20Patterns.md)의 **Multi-Agent Collaboration** 파트에서 출발해, "ChatDev 같은 멀티에이전트 프레임워크가 실무에서 어떻게 쓰이는가", 그리고 "그 역할을 Claude Code로도 할 수 있는가"를 이야기로 풀어본 정리본입니다.

핵심 통찰 한 줄:
> 강의에서 배운 4가지 패턴(Reflection, Tool Use, Planning, Multi-Agent)은 프레임워크로만 존재하는 게 아니라, **Claude Code 같은 에이전트 안에 이미 하나로 통합**되어 있다.

## 내용

### 1. ChatDev는 실무에서 많이 쓰나?

- ChatDev는 강의에서 **Multi-Agent Collaboration 패턴을 설명하기 위한 대표 예시**로 등장 (CEO·Programmer·Tester·Designer 역할 분담).
- 실제로는 **연구/데모 성격의 프레임워크**에 가깝고, 프로덕션에서 널리 쓰이는 도구는 아님.
- 즉 ChatDev는 "역할 분담형 멀티에이전트로 소프트웨어를 만들 수 있다"는 **아이디어를 유명하게 만든 개념 증명(proof of concept)**으로 이해하면 됨.

### 2. 그럼 지금 실무에서는 뭘 많이 쓰나?

하나의 승자는 없고, **무엇을 만드느냐**에 따라 갈림.

| 상황 | 실무에서 많이 쓰는 것 |
|------|---------------------|
| 복잡한 워크플로우 제어 (분기·루프·상태·human-in-the-loop) | **LangGraph** |
| 역할 분담형 팀 협업 (ChatDev 개념의 실무판) | **CrewAI** |
| OpenAI 생태계 중심 | **OpenAI Agents SDK** |
| MS/엔터프라이즈 | **AutoGen(AG2) / Semantic Kernel** |
| 프레임워크 없이 직접 | **Anthropic/OpenAI SDK로 직접 오케스트레이션** |

실무 흐름 2가지:
1. **무거운 프레임워크 회피 경향** — 추상화가 두꺼우면 디버깅이 어려워, 꼭 필요한 오케스트레이션만 프레임워크로 쓰고 나머지는 SDK로 직접 짜는 방향으로 이동.
2. **패턴은 프레임워크와 무관하게 살아있음** — Reflection/Tool Use/Planning/Multi-Agent는 어떤 도구를 골라도 그 위에서 구현하는 설계 개념. 도구만 바뀔 뿐 강의 내용이 낡는 게 아님.

### 3. CrewAI로 기획·디자인·와이어프레임이 되나?

- CrewAI 에이전트는 근본적으로 **텍스트(LLM) + 도구(tool) 호출** 기반. 각 에이전트에 `role`·`goal`·`backstory`·`tools`를 주고 팀(crew)으로 묶어 협업시킴. → **강의의 Multi-Agent 패턴을 실제로 구현하는 도구.**

| 작업 | 가능 여부 |
|------|----------|
| 기획 (PRD·유저스토리·리서치) | ✅ 매우 잘 됨 (텍스트 산출물 + 웹검색 툴) |
| 디자인 방향/명세 | ✅ 됨 (텍스트 명세, DALL-E 툴로 시안 이미지) |
| 와이어프레임 (텍스트/코드) | 🔶 부분적 (HTML/CSS 목업, Mermaid, ASCII 레이아웃) |
| 와이어프레임 (Figma에 실제로 그리기) | ❌ 기본은 안 됨 → Figma MCP/플러그인을 툴로 붙여야 함 |

정리: **기획서·명세까지는 아주 잘 되고, "실제로 예쁘게 그리는" 단계는 외부 도구를 툴로 연결해야** 함.

### 4. Claude Code로도 되나? (ChatDev/CrewAI 역할)

**된다. 오히려 일회성 작업에는 더 잘 맞음.** Claude Code 자체가 이미 에이전트 + 도구를 갖춘 시스템이기 때문.

| CrewAI/ChatDev에서 조립해야 하는 것 | Claude Code 기본 제공 |
|-----------------------------------|----------------------|
| 웹검색 툴 | WebSearch / WebFetch |
| 파일 산출물 생성 | Read / Write / Edit |
| 코드 실행 툴 | Bash |
| 멀티에이전트(역할 분담) | **Agent(서브에이전트)** |
| Reflection(자기검토·개선) | 스스로 검토+수정, code-review 스킬 |
| 외부 연동(Figma·Notion 등) | MCP |
| HTML 목업 확인 | **Artifact로 실제 렌더링** |

**ChatDev와의 결정적 차이**: ChatDev는 코드를 실제로 실행·검증하지 못하고 텍스트로만 주고받는 한계가 컸음. Claude Code는 **진짜로 파일을 쓰고 실행하고 에러를 보고 고침** → 강의가 말한 Reflection의 "외부 피드백 활용(코드 실행→에러 확인→수정)"이 시뮬레이션이 아니라 실제로 일어남.

> ChatDev = "가상 소프트웨어 회사" / Claude Code = "실제로 코드가 돌아가는 회사"

## 예시

### 강의 개념 → 실제 구현체 매핑

```
강의 개념                →   실제 구현체
──────────────────────────────────────────
ChatDev (멀티에이전트)      →  Claude Code 서브에이전트 / CrewAI
CrewAI (역할 협업)          →  Claude Code 서브에이전트
Reflection                 →  Claude Code 자기검토 + 실제 코드 실행
Tool Use                   →  Web / Bash / 파일 / MCP
Planning                   →  Claude Code가 스스로 단계 설계
```

### "기획 → 와이어프레임" 워크플로우 (도구 무관 개념)

```
[리서처]  웹검색으로 타겟/경쟁 제품 조사
    ↓
[기획자]  PRD·유저스토리 작성
    ↓
[UX설계자] 화면 흐름 + 와이어프레임 명세(텍스트)
    ↓
[프론트]  명세를 HTML/Tailwind 목업 코드로
    ↓
(선택) [디자이너] 이미지 생성 툴로 비주얼 시안
```

→ CrewAI로 코드화해도 되고, Claude Code 서브에이전트로 대화하며 돌려도 됨.

## 요약

- **ChatDev**는 멀티에이전트 협업 패턴의 유명한 **개념 증명**이지, 실무 주류 도구는 아님.
- 실무에서는 **LangGraph · CrewAI · OpenAI Agents SDK**가 주류이고, "프레임워크 없이 SDK로 직접"도 많이 늘었음.
- **CrewAI**는 기획·디자인 명세까지 잘 뽑지만, 실제 와이어프레임 "그리기"는 외부 도구(Figma MCP 등)를 툴로 붙여야 함.
- **Claude Code**는 ChatDev/CrewAI가 조립해야 하는 기능(웹검색·파일·실행·멀티에이전트·MCP)을 기본 통합 → **일회성/탐색적 작업이면 프레임워크 없이 이걸로 충분.**
- **프레임워크 vs Claude Code 판단 기준**:
  - "지금 이 제품 하나를 직접 만든다" → **Claude Code** (대화형, 일회성)
  - "같은 워크플로우를 자동 반복하는 서비스에 내장한다" → **CrewAI / LangGraph** (코드화, 재현성). 이때 Claude Code는 그 서비스를 *만드는* 도구지, 엔진 자체는 아님.
- 가장 큰 교훈: **강의의 4가지 패턴은 도구가 바뀌어도 유효한 설계 개념**이며, Claude Code는 그 패턴들을 하나로 통합해 놓은 에이전트다.
