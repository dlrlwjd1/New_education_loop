# Phase 4 — 재사용 자산을 만든다

- 목표: 반복되는 것을 프롬프트가 아니라 자산(스킬·서브에이전트·훅·MCP)으로 굳히고, 넷 중 무엇을 쓸지 근거를 대고 고른다.
- 분량: 약 14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 스킬 · 서브에이전트 · 훅 · MCP **넷 중 무엇을 쓸지 판별**한다
- `SKILL.md`를 쓰고 **언제 로드되는지 제어**한다 (progressive disclosure, 호출 주체 제어)
- 서브에이전트가 **역할극이 아니라 컨텍스트 격리 장치**임을 알고 그렇게 쓴다
- 훅으로 **결정론적 게이트**를 건다 — 지시는 권고, 훅은 강제
- MCP 서버를 붙이고, 언제 MCP 대신 CLI를 쓸지 판단한다
- 자산을 플러그인으로 묶어 배포한다

## 4-A. 무엇을 언제 쓰나 — 판별 기준 먼저

Claude Code 공식 문서의 「Build your setup over time」 표가 사실상 이 Phase의 진행 순서다. **증상에서 출발해 자산을 고른다.**

| 증상 | 만들 것 |
|---|---|
| 같은 실수를 2번 고쳤다 | 규칙 파일 ([Phase 2](02%20Phase%202%20-%20컨텍스트를%20운용한다.md)) |
| 같은 프롬프트를 반복해 붙여넣는다 | **스킬** |
| 브라우저 탭을 열어 복붙하고 있다 | **MCP** |
| 출력이 폭주해 컨텍스트를 잡아먹는다 | **서브에이전트** |
| 매번 반드시 일어나야 하는 일이 있다 | **훅** |
| 두 번째 레포에서도 같은 걸 쓰고 싶다 | **플러그인** |

📌 **가장 중요한 구분 하나** — 규칙 파일에 "절대 `.env`를 편집하지 마라"라고 쓰는 것은 **요청**이고, `PreToolUse` 훅으로 막는 것은 **강제**다. 규칙은 컨텍스트일 뿐이라 모델이 무시할 수 있다. **반드시 지켜져야 하는 것은 훅으로 간다.**

## 4-B. 스킬 — 온디맨드 워크플로

메인: AI Agent Skills for Leaders (25강). 스킬 설계를 정면으로 다루는 유일한 강좌다.

Module 1 — 스킬이 무엇인가

- [ ] [01 Seeing Skills in Action.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/01%20Seeing%20Skills%20in%20Action.md)
- [ ] [02 Skills are On-demand Training for AI Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/02%20Skills%20are%20On-demand%20Training%20for%20AI%20Agents.md) — **"온디맨드"가 핵심이다.** 규칙 파일과 갈리는 지점
- [ ] [03 Creating a Skill Manually.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/03%20Creating%20a%20Skill%20Manually.md)
- [ ] [04 Building a Dashboarding Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/04%20Building%20a%20Dashboarding%20Skill.md)
- [ ] [05 Building a File Organizer Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/05%20Building%20a%20File%20Organizer%20Skill.md)
- [ ] [06 Creating a Skill in Chat with a Skill Creator.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/06%20Creating%20a%20Skill%20in%20Chat%20with%20a%20Skill%20Creator.md)

Module 2 — 값어치 있는 스킬

- [ ] [01 Make Amazing Skills that Create Luxury Outputs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%202%20-%20Building%20Skills%20with%20Amazing%20Value/01%20Make%20Amazing%20Skills%20that%20Create%20Luxury%20Outputs.md)
- [ ] [02 Using AI Memory to Build Skills.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%202%20-%20Building%20Skills%20with%20Amazing%20Value/02%20Using%20AI%20Memory%20to%20Build%20Skills.md)
- [ ] [03 Turn a Conversation into Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%202%20-%20Building%20Skills%20with%20Amazing%20Value/03%20Turn%20a%20Conversation%20into%20Skill.md) — **가장 실용적.** 세션에서 배운 것을 스킬로 증류한다

Module 3 — 스킬의 해부

- [ ] [01 The Anatomy of a Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/01%20The%20Anatomy%20of%20a%20Skill.md) — **필수**
- [ ] [02 The Skill.md File - Instructions and Context for Your AI Agent.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/02%20The%20Skill.md%20File%20-%20Instructions%20and%20Context%20for%20Your%20AI%20Agent.md)
- [ ] [03 Scripts - Tools for Your AI Agent.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/03%20Scripts%20-%20Tools%20for%20Your%20AI%20Agent.md) — ⚠️ 실증 연구(AIware 2026, GitHub 리포 2,853개 분석)에서 **대부분의 스킬이 실행 스크립트 없이 정적 지침에 그친다**는 결과가 나왔다. 스크립트를 붙이는 것이 차별점이다
- [ ] [04 AI Coding for Building Scripts.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/04%20AI%20Coding%20for%20Building%20Scripts.md)
- [ ] [05 Assets - Data, Templates, and More for the AI Agent to Work With.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/05%20Assets%20-%20Data,%20Templates,%20and%20More%20for%20the%20AI%20Agent%20to%20Work%20With.md)
- [ ] [06 References - Contextual Depth, Patterns, Examples for the AI Agent.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%203%20-%20The%20Anatomy%20of%20a%20Skill/06%20References%20-%20Contextual%20Depth,%20Patterns,%20Examples%20for%20the%20AI%20Agent.md) — **progressive disclosure의 실물**

Module 4 — RECIPE 프레임워크 (설계 방법론)

- [ ] [01 The RECIPE Framework.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/01%20The%20RECIPE%20Framework.md) — **필수**
- [ ] [02 Requests.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/02%20Requests.md)
- [ ] [03 Environment.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/03%20Environment.md)
- [ ] [04 Concrete Steps.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/04%20Concrete%20Steps.md)
- [ ] [05 Ideal Result.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/05%20Ideal%20Result.md)
- [ ] [06 Presentation.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/06%20Presentation.md)
- [ ] [07 Examples.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/07%20Examples.md)
- [ ] [08 RECIPE with Multiple Requests.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/08%20RECIPE%20with%20Multiple%20Requests.md)
- [ ] [09 Refining a Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/09%20Refining%20a%20Skill.md)
- [ ] [10 Contextual Preferences Pattern.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%204%20-%20The%20RECIPE%20for%20Skills/10%20Contextual%20Preferences%20Pattern.md)

함께 보기: Antigravity의 스킬 (**Claude Code와 같은 오픈 표준을 쓴다** — 한 번 배우면 양쪽에 쓴다)

- [ ] [Mastering Antigravity / Module 6 / 01 Understand Agent Skills.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%206%20-%20Dive%20into%20Antigravity%20Agent%20Skills/01%20Understand%20Agent%20Skills.md)
- [ ] [Mastering Antigravity / Module 6 / 02 Community Agent Skill Examples.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%206%20-%20Dive%20into%20Antigravity%20Agent%20Skills/02%20Community%20Agent%20Skill%20Examples.md)
- [ ] [Mastering Antigravity / Module 6 / 03 Create and Configure an Agent Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%206%20-%20Dive%20into%20Antigravity%20Agent%20Skills/03%20Create%20and%20Configure%20an%20Agent%20Skill.md)
- [ ] [Mastering Antigravity / Module 6 / 04 Agent Skill Templates for Developers.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%206%20-%20Dive%20into%20Antigravity%20Agent%20Skills/04%20Agent%20Skill%20Templates%20for%20Developers.md)

함께 보기: 좋은 스킬의 조건 (짧고 밀도 높다)

- [ ] [AI Engineer / 2026-06-29 Building Great Agent Skills - The Missing Manual.md](../../courses/youtube/AI%20Engineer/2026-06-29%20Building%20Great%20Agent%20Skills%20-%20The%20Missing%20Manual.md) — **필수**
- [ ] [AI Engineer / 2026-07-14 Dont Ship Skills Without Evals.md](../../courses/youtube/AI%20Engineer/2026-07-14%20Dont%20Ship%20Skills%20Without%20Evals.md) — **[Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)와 [Phase 10](10%20Phase%2010%20-%20측정하고%20재판정한다.md)의 근거**
- [ ] [Anthropic @ AI Engineer / 2025-12-08 Dont Build Agents Build Skills Instead.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2025-12-08%20Dont%20Build%20Agents%20Build%20Skills%20Instead.md) — **제목이 논지다**
- [ ] [Tech Bridge / 2026-07-04 좋은 Agent Skill을 만드는 방법.md](../../courses/youtube/Tech%20Bridge/2026-07-04%20좋은%20Agent%20Skill을%20만드는%20방법.md)
- [ ] [Tech Bridge / 2026-08-30 AI 네이티브 조직은 스킬로 움직입니다 - 구조화 및 확장 전략.md](../../courses/youtube/Tech%20Bridge/2026-08-30%20AI%20네이티브%20조직은%20스킬로%20움직입니다%20-%20구조화%20및%20확장%20전략.md)
- [ ] [Tech Bridge / 2026-09-05 바이브 코딩을 돕는 Claude 스킬 6가지.md](../../courses/youtube/Tech%20Bridge/2026-09-05%20바이브%20코딩을%20돕는%20Claude%20스킬%206가지.md)

함께 보기: 스킬 실물 — Matt Pocock의 공개 스킬 세트

- [ ] [2026-03-16 5 Claude Code skills I use every single day.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-03-16%205%20Claude%20Code%20skills%20I%20use%20every%20single%20day.md)
- [ ] [2026-05-12 New Skills handoff prototype review and writing.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-12%20New%20Skills%20handoff%20prototype%20review%20and%20writing.md)
- [ ] [2026-05-21 handoff is my new favourite skill.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-21%20handoff%20is%20my%20new%20favourite%20skill.md) — **세션 간 인수인계 스킬.** [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)에서 다시 쓴다
- [ ] [2026-05-25 9 Things People Get Wrong With My grill skills.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-25%209%20Things%20People%20Get%20Wrong%20With%20My%20grill%20skills.md)
- [ ] [2026-08-05 New Skills v1.2 brings wait-what writing-for-agents and fixes grill-me.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-08-05%20New%20Skills%20v1.2%20brings%20wait-what%20writing-for-agents%20and%20fixes%20grill-me.md)
- [ ] [Tech Bridge / 2026-08-11 Matt Pocock Skills 1.2 - 질문 묶음과 에이전트 문서 개선.md](../../courses/youtube/Tech%20Bridge/2026-08-11%20Matt%20Pocock%20Skills%201.2%20-%20질문%20묶음과%20에이전트%20문서%20개선.md)

### 호출 주체를 제어한다

스킬을 만들 때 **누가 부를 수 있는지**를 반드시 정한다. 이걸 놓치면 부작용 있는 스킬(배포·커밋)을 모델이 임의로 실행한다.

| 설정 | 누가 부르나 | 쓸 곳 |
|---|---|---|
| 기본 | 사람도 모델도 | 대부분 |
| `disable-model-invocation: true` | **사람만** | 배포·커밋·삭제처럼 되돌리기 어려운 것 |
| `user-invocable: false` | 모델만 | 내부 보조 |

## 4-C. 서브에이전트 — 역할극이 아니라 컨텍스트 격리

메인: Coding with AI, module 7의 서브에이전트 구간

- [ ] [08 Introduction to Sub-Agents.md](../../courses/udemy/Coding%20with%20AI/module%207/08%20Introduction%20to%20Sub-Agents.md)
- [ ] [09 Creating a Code Scanner Sub-Agent.md](../../courses/udemy/Coding%20with%20AI/module%207/09%20Creating%20a%20Code%20Scanner%20Sub-Agent.md) — **[Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)의 검증 서브에이전트와 직결**
- [ ] [10 Running the Code Scanner Sub-Agent.md](../../courses/udemy/Coding%20with%20AI/module%207/10%20Running%20the%20Code%20Scanner%20Sub-Agent.md)

함께 보기

- [ ] [AI PM Bootcamp / Section 11 / 01 Access 100+ Prebuilt Claude Subagents.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2011%20-%20Additional%20Content%20-%20Create%20an%20Entire%20Team%20Around%20You%20with%20Agents/01%20Access%20100+%20Prebuilt%20Claude%20Subagents%20%28Your%20Hidden%20AI%20Toolbox%29.md) — **PM 로드맵이 안 쓰는 섹션이다**
- [ ] [AI PM Bootcamp / Section 11 / 02 Installing and Using a Full-Stack Developer Subagent.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2011%20-%20Additional%20Content%20-%20Create%20an%20Entire%20Team%20Around%20You%20with%20Agents/02%20Installing%20and%20Using%20a%20Full-Stack%20Developer%20Subagent.md)
- [ ] [Tech Bridge / 2026-08-10 에이전트 설계 안티패턴 - Claude 아키텍처 시나리오로 배우기.md](../../courses/youtube/Tech%20Bridge/2026-08-10%20에이전트%20설계%20안티패턴%20-%20Claude%20아키텍처%20시나리오로%20배우기.md) — **위임이 오히려 복잡도만 늘리는 경우**

> 📌 **핵심 원리 세 개** (Claude Code·Antigravity 공식 문서에서 공통 확인)
> 1. 서브에이전트는 **부모의 대화 히스토리를 상속하지 않는다.** 그래서 편향 없는 리뷰가 가능하다
> 2. 결과는 **요약만 돌아온다.** 그래서 출력이 폭주하는 작업을 여기로 보낸다
> 3. **중첩 깊이에 상한이 있다** (Claude Code 기본 3, Antigravity 10)

## 4-D. 훅 — 유일한 강제 계층

이 소절은 **저장소 자료가 얇다.** 강의로는 아래 정도이고, 나머지는 공식 문서로 간다.

- [ ] [Coding with AI / module 7 / 03 Custom Slash Commands and Skills.md](../../courses/udemy/Coding%20with%20AI/module%207/03%20Custom%20Slash%20Commands%20and%20Skills.md)
- [ ] [Coding with AI / module 7 / 04 Designing the Feature Skill Workflow.md](../../courses/udemy/Coding%20with%20AI/module%207/04%20Designing%20the%20Feature%20Skill%20Workflow.md)
- [ ] [Coding with AI / module 7 / 05 Implementing the Feature Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/05%20Implementing%20the%20Feature%20Skill.md)
- [ ] [Coding with AI / module 7 / 06 Testing the Feature Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/06%20Testing%20the%20Feature%20Skill.md)
- [ ] [Coding with AI / module 7 / 07 Cleanup Skill.md](../../courses/udemy/Coding%20with%20AI/module%207/07%20Cleanup%20Skill.md)

**공식 문서로 보충한다** (강의 없음)

- [code.claude.com/docs/en/hooks](https://code.claude.com/docs/en/hooks) — 이벤트 목록과 핸들러 5종. **종료 코드 2가 차단**이라는 것이 핵심
- [antigravity.google/docs/hooks](https://antigravity.google/docs/hooks) — `PreToolUse`·`PostToolUse`·`Stop`. **이름이 Claude Code와 같다**

함께 보기: Antigravity의 Rules와 Workflows

⚠️ **Workflows는 2026-11-01자로 Skills에 흡수될 예정이다.** 공식 문서에 `/migrate-workflows` 경로가 있다. **개념(재사용 절차를 슬래시 커맨드로 만든다)만 가져가고, 지금은 Skills로 만든다.**

- [ ] [Mastering Antigravity / Module 5 / 03 Understand Rules.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/03%20Understand%20Rules.md) — **활성화 모드 4종(Manual/Always On/Model Decision/Glob)이 [Phase 2](02%20Phase%202%20-%20컨텍스트를%20운용한다.md)의 3분류다**
- [ ] [04 Community Rule Examples.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/04%20Community%20Rule%20Examples.md)
- [ ] [05 Create Project Rules.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/05%20Create%20Project%20Rules.md)
- [ ] [06 Rule Templates for Developers.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/06%20Rule%20Templates%20for%20Developers.md)
- [ ] [07 Understand Workflows.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/07%20Understand%20Workflows.md) — ⚠️ deprecated 예정. 개념만
- [ ] [08 Community Workflow Examples.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/08%20Community%20Workflow%20Examples.md)
- [ ] [09 Create and Run a Workflow.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/09%20Create%20and%20Run%20a%20Workflow.md)
- [ ] [10 Workflow Templates for Developers.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/10%20Workflow%20Templates%20for%20Developers.md)

## 4-E. MCP — 도구 간 공통 확장 계층

**MCP를 한 번 배우면 도구를 갈아타도 자산이 남는다.** 네 도구 전부 MCP 클라이언트라, [Phase 11](11%20Phase%2011%20-%20캡스톤%20운용%20표준.md)의 "이식 가능한 운용 표준"에 가장 잘 맞는 축이다.

메인: Coding with AI, module 7의 MCP 구간 (실물 설치)

- [ ] [11 Introduction to MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/11%20Introduction%20to%20MCP.md)
- [ ] [12 Installing the Neon MCP Server.md](../../courses/udemy/Coding%20with%20AI/module%207/12%20Installing%20the%20Neon%20MCP%20Server.md)
- [ ] [13 Installing Context7 MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/13%20Installing%20Context7%20MCP.md)
- [ ] [14 Installing Playwright MCP.md](../../courses/udemy/Coding%20with%20AI/module%207/14%20Installing%20Playwright%20MCP.md) — **[Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)의 브라우저 검증에 쓴다**

함께 보기: MCP의 개념 (AI Agents with Model Context Protocol, 13강)

- [ ] [Module 1 / 01 Why Do We Need Model Context Protocol.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/01%20Why%20Do%20We%20Need%20Model%20Context%20Protocol.md)
- [ ] [Module 1 / 02 Model Context Protocol and AI Problem Solving with Tools.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/02%20Model%20Context%20Protocol%20and%20AI%20Problem%20Solving%20with%20Tools.md)
- [ ] [Module 1 / 03 MCP Allows AI to Communicate with the Computer.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%201%20-%20Getting%20Started%20with%20MCP%20for%20AI%20Agents/03%20MCP%20Allows%20AI%20to%20Communicate%20with%20the%20Computer.md)
- [ ] [Module 2 / 01 Model Context Protocol - Syntax, Semantics, Timing.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/01%20Model%20Context%20Protocol%20-%20Syntax,%20Semantics,%20Timing.md)
- [ ] [Module 2 / 02 Model Context Protocol and AI Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/02%20Model%20Context%20Protocol%20and%20AI%20Agents.md)
- [ ] [Module 2 / 03 What is an MCP Server.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/03%20What%20is%20an%20MCP%20Server.md) — **필수**
- [ ] [Module 2 / 04 Tool Specifications.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/04%20Tool%20Specifications.md)
- [ ] [Module 2 / 05 Agents Talking to Tools vs. Tools with AI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%202%20-%20AI%20Agent%20Loops%20and%20Model%20Context%20Protocol/05%20Agents%20Talking%20to%20Tools%20vs.%20Tools%20with%20AI.md)
- [ ] [Module 3 / 01 Resources.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%203%20-%20Building%20AI%20Agents%20with%20Model%20Context%20Protocol/01%20Resources.md)
- [ ] [Module 5 / 01 Prompts and MCP.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%205%20-%20Faster,%20More%20Predictable,%20More%20Capable%20AI%20Agents/01%20Prompts%20and%20MCP.md) — **prompts는 슬래시 커맨드로 노출된다**
- [ ] [Module 5 / 03 Wrapping Up.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%205%20-%20Faster,%20More%20Predictable,%20More%20Capable%20AI%20Agents/03%20Wrapping%20Up.md)

> ⚠️ **`Module 5 / 02 AI Agents, MCP, and Identity - Security`는 [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md)에서 본다.**

함께 보기: MCP 실물과 워크숍

- [ ] [AI PM Bootcamp / Section 10 / 01 What Is the Model Context Protocol (MCP).md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2010%20-%20Additional%20Content%20-%20Mastering%20the%20Model%20Context%20Protocol%20%28MCP%29/01%20What%20Is%20the%20Model%20Context%20Protocol%20%28MCP%29.md) — **PM 로드맵이 안 쓰는 섹션**
- [ ] [AI PM Bootcamp / Section 10 / 02 Context7 — Simplifying AI Context Management.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2010%20-%20Additional%20Content%20-%20Mastering%20the%20Model%20Context%20Protocol%20%28MCP%29/02%20Context7%20—%20Simplifying%20AI%20Context%20Management.md)
- [ ] [AI PM Bootcamp / Section 10 / 03 Vercel MCP.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2010%20-%20Additional%20Content%20-%20Mastering%20the%20Model%20Context%20Protocol%20%28MCP%29/03%20Vercel%20MCP%20—%20Seamless%20Deployment%20for%20AI-Powered%20Apps.md)
- [ ] [AI PM Bootcamp / Section 10 / 04 Supabase MCP.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2010%20-%20Additional%20Content%20-%20Mastering%20the%20Model%20Context%20Protocol%20%28MCP%29/04%20Supabase%20MCP%20—%20Connecting%20Your%20AI%20Directly%20to%20Live%20Data.md)
- [ ] [AI PM Bootcamp / Section 10 / 05 Playwright MCP.md](../../courses/udemy/AI%20Product%20Manager%20Bootcamp/Section%2010%20-%20Additional%20Content%20-%20Mastering%20the%20Model%20Context%20Protocol%20%28MCP%29/05%20Playwright%20MCP%20—%20Automating%20Product%20Testing%20with%20AI.md)
- [ ] [Modern AI Agents / 2026-06-24 How Model Context Protocol (MCP) actually works.md](../../courses/youtube/Google%20Cloud%20Tech/Modern%20AI%20Agents%20-%20From%20Theory%20to%20Production/2026-06-24%20How%20Model%20Context%20Protocol%20%28MCP%29%20actually%20works.md)
- [ ] **Modern AI Agents / 2026-07-01 MCP vs API - Why traditional APIs are failing AI agents.md**
- [ ] [Anthropic @ AI Engineer / 2025-03-01 Building Agents with Model Context Protocol Full Workshop.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2025-03-01%20Building%20Agents%20with%20Model%20Context%20Protocol%20Full%20Workshop.md) — **서버를 직접 만드는 워크숍.** 길다
- [ ] [Anthropic @ AI Engineer / 2025-06-19 Remote MCPs - What We Learned from Shipping.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2025-06-19%20Remote%20MCPs%20-%20What%20We%20Learned%20from%20Shipping.md)
- [ ] [Code Canvas / 2026-07-06 How to Create Architecture Diagrams with MCP.md](../../courses/youtube/Code%20Canvas%20With%20Touseef/2026-07-06%20How%20to%20Create%20Architecture%20Diagrams%20with%20MCP%20using%20Claude%20Code%20Excalidraw%20and%20Draw.io.md) — MCP 활용 사례
- [ ] [Griffin Wooldridge / 2026-07-07 This MCP Gives Claude Code 600000 Real Design References.md](../../courses/youtube/Griffin%20Wooldridge/2026-07-07%20This%20MCP%20Gives%20Claude%20Code%20600000%20Real%20Design%20References.md)

### ⚠️ MCP 사양 주의 — 강좌가 뒤처져 있다

현행 개정판은 **2026-07-28**이고, 그 이전과 상당히 다르다. 저장소 강의는 대부분 그 이전 기준이다.

| 강좌가 가르치는 것 | 현행 사양(2026-07-28) |
|---|---|
| Roots · Sampling · Logging | **전부 deprecated** (최소 2027-07-28까지 유예) |
| HTTP+SSE 트랜스포트 | deprecated → **Streamable HTTP** |
| `initialize` 핸드셰이크 · 세션 | 제거. 요청마다 `_meta`로 전달 + `server/discover` |
| 서버 발신 요청 | **MRTR** 패턴으로 대체 |
| OAuth DCR (RFC7591) | deprecated → Client ID Metadata Documents |

**개념은 강좌로, 사양은 [modelcontextprotocol.io/specification/latest](https://modelcontextprotocol.io/specification/latest)로 본다.**

### MCP보다 CLI가 나을 때

여러 출처가 공통으로 짚는 것 — **`gh`·`aws`·`psql` 같은 CLI 도구가 컨텍스트 효율이 가장 좋다.** MCP는 도구 정의만으로도 컨텍스트를 먹는다. 반대 의견도 있다(브라우저 조작 같은 건 Playwright MCP가 낫다). 판단 기준은 "이 작업을 CLI 한 줄로 할 수 있나"다.

## 산출물

세 가지다. **전부 담당 프로젝트에 실제로 들어가야 한다.**

1. **워크플로 스킬 1개** — RECIPE 기준으로 설계하고, 스크립트를 포함하며, 호출 주체를 명시적으로 정한 것
2. **훅 게이트 1개** — 규칙 파일로는 못 막던 것 하나를 `PreToolUse` 훅으로 실제로 차단한 것
3. **판별 기준 메모** — 앞으로 무엇이 생기면 스킬/서브에이전트/훅/MCP 중 무엇으로 만들지 자기 언어로 적은 것

## 다음 단계

→ [05 Phase 5 - 검증 게이트를 건다](05%20Phase%205%20-%20검증%20게이트를%20건다.md)
