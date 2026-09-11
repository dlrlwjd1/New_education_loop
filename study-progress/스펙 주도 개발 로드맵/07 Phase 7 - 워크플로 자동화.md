# Phase 7 — 워크플로 자동화 (스킬·서브에이전트·MCP)

- 목표: 매번 반복하던 지시를 **스킬로 굳힌다.** 명세 → 구현 → 검증 루프의 상당 부분을 자동으로 돌게 만든다.
- 분량: 약 8~10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 커스텀 슬래시 커맨드와 스킬을 만들 수 있다.
- 좋은 스킬과 나쁜 스킬을 가르는 기준(호출·구조·유도·가지치기)으로 자기 스킬을 점검할 수 있다.
- 자기 기능 워크플로를 스킬 하나로 만들 수 있다.
- 서브에이전트를 만들어 리뷰·감사·스캔을 위임할 수 있다.
- MCP 서버를 붙여 에이전트가 외부 시스템(DB·브라우저·문서)을 직접 다루게 할 수 있다.
- 스킬에 평가(eval)를 붙여 「이 스킬이 실제로 작동하는지」 검증할 수 있다.

> **자동화의 대상은 [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)에서 이미 나왔다.** 6-F의 유지 관리 리듬 표에서 「매번 손으로 하는 것」이 스킬 후보다. 새로 찾을 필요가 없다.

## 7-A. 워크플로를 직접 만든다 — 개념

메인: Spec-Driven Development (복습)

- [ ] [13 Build Your Own Workflow.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow.md) — **스킬·MCP·CLI·플러그인, 그리고 Spec Kit·OpenSpec 같은 기성 프레임워크.** 직접 만들 것과 가져다 쓸 것의 경계를 잡는 강의 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 7-B. 슬래시 커맨드와 스킬 — 실전

메인: Coding with AI, module 7

**이 모듈 전체가 Phase 7의 본체다.** 자기 기능 워크플로를 스킬로 만드는 과정이 처음부터 끝까지 나온다.

- [ ] [03 Custom Slash Commands and Skills.md](../../courses/udemy/Coding%20with%20AI/module%207/03%20Custom%20Slash%20Commands%20and%20Skills.md) — **커스텀 슬래시 커맨드와 스킬** — 시작점
- [ ] [04 Designing the Feature Skill Workflow.md](../../courses/udemy/Coding%20with%20AI/module%207/04%20Designing%20the%20Feature%20Skill%20Workflow.md) — **기능 스킬 워크플로 설계** — [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)에서 만든 기능 워크플로 문서를 스킬로 옮기는 단계
- [ ] [05 Implementing the Feature Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/05%20Implementing%20the%20Feature%20Skill.md) — **구현**
- [ ] [06 Testing the Feature Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/06%20Testing%20the%20Feature%20Skill.md) — **테스트** — 스킬도 검증 대상이다
- [ ] [07 Cleanup Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/07%20Cleanup%20Skill.md) — **정리(cleanup) 스킬** — [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)의 유지 관리 작업을 자동화한 예

## 7-C. 좋은 스킬의 기준

메인: Tech Bridge · AI Engineer

스킬을 만들기는 쉽지만 **작동하는** 스킬을 만들기는 어렵다. 기준을 다루는 자료들이다.

- [ ] [2026-07-04 좋은 Agent Skill을 만드는 방법.md](../../courses/youtube/Tech%20Bridge/2026-07-04%20%EC%A2%8B%EC%9D%80%20Agent%20Skill%EC%9D%84%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B0%A9%EB%B2%95.md) — **4단계 체크리스트 — Trigger(언제 불리나) · Structure(내부 구조) · Steering(행동 유도) · Pruning(가지치기).** 「스킬 헬」을 피하는 기준. 7-B에서 만든 스킬을 이 네 항목으로 점검한다

- [ ] [2026-06-28 The Prompt is the Platform.md](../../courses/youtube/AI%20Engineer/2026-06-28%20The%20Prompt%20is%20the%20Platform.md) — 프롬프트가 플랫폼이라는 관점
- [ ] [2026-06-29 Building Great Agent Skills - The Missing Manual.md](../../courses/youtube/AI%20Engineer/2026-06-29%20Building%20Great%20Agent%20Skills%20-%20The%20Missing%20Manual.md) — **스킬 작성의 빠진 매뉴얼** — 7-C의 같은 주제를 발표자 관점에서
- [ ] [2026-07-14 Dont Ship Skills Without Evals.md](../../courses/youtube/AI%20Engineer/2026-07-14%20Dont%20Ship%20Skills%20Without%20Evals.md) — **평가(eval) 없이 스킬을 배포하지 말라** — 스킬이 실제로 의도대로 도는지 재는 방법. 7-B의 06번과 이어진다

- [ ] [2025-12-08 Dont Build Agents Build Skills Instead.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-12-08%20Dont%20Build%20Agents%20Build%20Skills%20Instead.md) — **「에이전트를 만들지 말고 스킬을 만들어라」** — 무엇을 스킬로 하고 무엇을 에이전트로 할지의 경계

## 7-D. 서브에이전트

메인: Coding with AI, module 7 (서브에이전트 부분)

- [ ] [08 Introduction to Sub-Agents.md](../../courses/udemy/Coding%20with%20AI/module%207/08%20Introduction%20to%20Sub-Agents.md) — **서브에이전트란 무엇인가** — 별도 컨텍스트에서 도는 전문 에이전트. 메인 컨텍스트를 오염시키지 않고 훑을 수 있다
- [ ] [09 Creating a Code Scanner Sub-Agent.md](../../courses/udemy/Coding%20with%20AI/module%207/09%20Creating%20a%20Code%20Scanner%20Sub-Agent.md) — **코드 스캐너 만들기** — [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)의 감사 에이전트와 같은 계열
- [ ] [10 Running the Code Scanner Sub-Agent.md](../../courses/udemy/Coding%20with%20AI/module%207/10%20Running%20the%20Code%20Scanner%20Sub-Agent.md) — 실행과 결과 해석

> [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)에서 만든 감사 에이전트가 여기서 정식 도구가 된다. 실물 예시: [`auth-auditor.md`](../../courses/udemy/Coding%20with%20AI/module%208/agents/auth-auditor.md)

## 7-E. MCP — 에이전트가 외부 시스템을 직접 다루기

메인: Coding with AI, module 7 (MCP 부분)

- [ ] [11 Introduction to MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/11%20Introduction%20to%20MCP.md) — **MCP 개념** — 에이전트에게 도구를 붙이는 표준
- [ ] [12 Installing the Neon MCP Server.md](../../courses/udemy/Coding%20with%20AI/module%207/12%20Installing%20the%20Neon%20MCP%20Server.md) — 데이터베이스 MCP — 스키마를 직접 읽어 명세의 모호함을 줄인다
- [ ] [13 Installing Context7 MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/13%20Installing%20Context7%20MCP.md) — **문서 MCP** — 라이브러리 최신 문서를 직접 참조. 학습 데이터가 낡아 생기는 오류를 줄이는 장치
- [ ] [14 Installing Playwright MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/14%20Installing%20Playwright%20MCP.md) — **브라우저 MCP** — [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)의 실제 동작 확인을 에이전트가 직접 하게 만든다

함께 보기: MCP의 배경과 설계

- [ ] [2025-03-01 Building Agents with Model Context Protocol Full Workshop.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-03-01%20Building%20Agents%20with%20Model%20Context%20Protocol%20Full%20Workshop.md) — MCP 전체 워크숍
- [ ] [2025-06-18 MCP Origins and Requests for Startups.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-06-18%20MCP%20Origins%20and%20Requests%20for%20Startups.md)
- [ ] [2025-06-19 Remote MCPs - What We Learned from Shipping.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-06-19%20Remote%20MCPs%20-%20What%20We%20Learned%20from%20Shipping.md) — 원격 MCP 운영에서 배운 것 — 직접 만들 때 참고

## 7-F. 에이전트를 오래 일하게 만들기

메인: Tech Bridge

- [ ] [2026-06-30 1000시간 넘게 배운 Claude를 15분 만에 익혀보세요.md](../../courses/youtube/Tech%20Bridge/2026-06-30%201000%EC%8B%9C%EA%B0%84%20%EB%84%98%EA%B2%8C%20%EB%B0%B0%EC%9A%B4%20Claude%EB%A5%BC%2015%EB%B6%84%20%EB%A7%8C%EC%97%90%20%EC%9D%B5%ED%98%80%EB%B3%B4%EC%84%B8%EC%9A%94.md) — 도구 자체를 빠르게 익히는 방법
- [ ] [2026-07-20 클로드 코드로 기획부터 자동 루프 실행까지 40분 만에 끝내는 법.md](../../courses/youtube/Tech%20Bridge/2026-07-20%20%ED%81%B4%EB%A1%9C%EB%93%9C%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%EA%B8%B0%ED%9A%8D%EB%B6%80%ED%84%B0%20%EC%9E%90%EB%8F%99%20%EB%A3%A8%ED%94%84%20%EC%8B%A4%ED%96%89%EA%B9%8C%EC%A7%80%2040%EB%B6%84%20%EB%A7%8C%EC%97%90%20%EB%81%9D%EB%82%B4%EB%8A%94%20%EB%B2%95.md) — **기획부터 자동 루프까지** — 반복 실행 장치, 작업자/검증자 서브에이전트 분리, 여러 작업 동시 실행. [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 태스크 그룹을 자동으로 도는 형태로 확장하는 방향

- [ ] [2025-07-04 Claude Code and the Evolution of Agentic Coding.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-07-04%20Claude%20Code%20and%20the%20Evolution%20of%20Agentic%20Coding.md) — 에이전틱 코딩의 흐름 — 배경 정리
- [ ] [2026-07-22 Claude for Long-Horizon Tasks.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2026-07-22%20Claude%20for%20Long-Horizon%20Tasks.md) — **긴 호흡 작업(long-horizon task)** — 한 번의 지시로 오래 도는 작업이 성립하는 조건

## 7-G. 자동화 후보 선정 기준

무엇부터 스킬로 만들지의 판단표다. 위에서부터 한다.

| 후보 | 왜 먼저인가 |
|---|---|
| 기능 워크플로 (명세 → 구현 → 테스트 → 리뷰) | 가장 자주 돌고, 순서를 틀리면 품질이 바로 떨어진다 |
| 재계획 (헌법·로드맵·current-feature 갱신) | [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)에서 매번 손으로 했고 빠뜨리기 쉽다 |
| 도메인 감사 (권한·입력 검증·에러 처리) | 사람이 매번 같은 것을 확인하고 있다 |
| 정리(cleanup) | 안 하면 다음 기능의 컨텍스트가 나빠진다 |
| 리서치 | 결과를 재사용할 수 있어 두 번째부터 값이 크다 |

> **한 번밖에 안 할 일은 스킬로 만들지 않는다.** 스킬도 유지 비용이 있다. 7-C의 「가지치기(Pruning)」가 그 이야기다.

## 산출물 과제

1. **기능 워크플로 스킬 1개** — [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)~[Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)에서 손으로 돌린 루프를 스킬로 만든다. 명세 위치·테스트 실행·리뷰 체크리스트가 포함돼야 한다.
2. **7-C의 4단계로 점검** — Trigger·Structure·Steering·Pruning 각 항목에 대해 자기 스킬을 평가하고, 미흡한 항목을 고친다.
3. **스킬 평가 1회** — 같은 종류의 작업 2건에 스킬을 돌려 보고, 스킬 없이 했을 때와 결과를 비교한다. **차이가 없으면 그 스킬은 지운다.**
4. **서브에이전트 1개 추가** — [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)의 감사 에이전트를 정식 정의 파일로 만들고, 기능 워크플로 스킬 안에서 호출되게 한다.
5. **MCP 1개 연결** — 자기 프로젝트에 가장 값이 큰 것 하나(DB 스키마 / 최신 문서 / 브라우저 확인)를 붙인다.
6. **재계획 자동화** — [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)의 과제 2번에서 잰 시간이 5분을 넘었다면 그것도 스킬로 만든다.

## 다음 단계

→ [08 Phase 8 - 레거시 코드베이스에 도입하기](08%20Phase%208%20-%20%EB%A0%88%EA%B1%B0%EC%8B%9C%20%EC%BD%94%EB%93%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90%20%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0.md)
