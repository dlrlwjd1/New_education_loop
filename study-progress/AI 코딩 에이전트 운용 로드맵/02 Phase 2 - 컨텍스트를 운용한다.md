# Phase 2 — 컨텍스트를 운용한다

- 목표: 에이전트가 지금 무엇을 읽고 있는지 파악하고 의도적으로 조절할 수 있으며, 담당 프로젝트에 규칙 파일을 갖춘다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 규칙 파일의 **3분류(항상 로드 / 경로 조건부 / 모델이 판단해서 로드)**를 구분하고 무엇을 어디에 둘지 정한다
- 규칙 파일에 **넣을 것과 뺄 것**을 판별한다 — 기준은 "이 줄을 지우면 에이전트가 실수하는가?"
- 컨텍스트 사용률을 추적하고 **40~60%대에서 압축**한다
- `/clear`와 `/compact`를 구분해 쓴다
- 대화를 흘려보내지 않고 `research.md` · `plan.md` 같은 파일로 **증류(intentional compaction)**한다
- 인덱싱 경계와 ignore 설정으로 에이전트가 읽을 범위를 정한다
- `AGENTS.md`의 **도구별 지원 범위 차이**를 알고 이식 방법을 정한다

## 2-A. 규칙 파일은 세 갈래로 로드된다 — 이것부터

이 소절이 Phase 2의 뼈대다. **파일명이 아니라 로딩 방식을 배운다.** 2026-09-10 공식 문서 조사에서 확인된 것이다.

| 도구 | 항상 로드 | 경로 조건부(glob) | 모델이 판단 |
|---|---|---|---|
| Claude Code | `CLAUDE.md` · `.claude/rules/` | `paths:` frontmatter | Skills (설명만 상주) |
| Antigravity | `GEMINI.md` · `.agents/rules/` | Glob 모드 | Model Decision 모드 |
| Cursor | `alwaysApply: true` | `globs` | `description` 기반 |
| Copilot | `copilot-instructions.md` | `applyTo` glob | — |

⚠️ **`AGENTS.md` 하나면 다 된다고 생각하면 틀린다.** Cursor·Copilot은 네이티브로 읽지만, Antigravity는 **CLI에서만** 문서화돼 있고, **Claude Code는 아예 읽지 않아** `CLAUDE.md`에서 import하거나 symlink해야 한다. 이 저장소의 **CLAUDE.md**가 `@AGENTS.md`로 처리한 방식이 정확히 그 해법이니 실물로 확인한다.

📌 **가장 중요한 함정**: 규칙 파일은 **컨텍스트일 뿐 강제가 아니다.** Claude Code 문서가 명시한다 — CLAUDE.md는 system prompt가 아니라 그 뒤의 user message로 들어간다. *"CLAUDE.md에 '절대 .env 편집 금지'라고 쓰는 건 요청이고, PreToolUse 훅으로 막는 건 강제다."* 반드시 지켜야 할 것은 [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)의 훅으로 옮긴다.

## 2-B. 컨텍스트와 토큰을 관리한다

메인: Coding with AI, module 4

- [ ] [01 Getting Started with Claude Code.md](../../courses/udemy/Coding%20with%20AI/module%204/01%20Getting%20Started%20with%20Claude%20Code.md) — 대화정리본 있음
- [ ] [02 Plan Mode.md](../../courses/udemy/Coding%20with%20AI/module%204/02%20Plan%20Mode.md) — [Phase 3](03%20Phase%203%20-%20과제%20정의와%20계획%20분리.md)의 전제. 대화정리본 있음
- [ ] [03 Slash Commands, Config, and Settings.md](../../courses/udemy/Coding%20with%20AI/module%204/03%20Slash%20Commands,%20Config,%20and%20Settings.md) — 설정 계층. [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)로 이어진다
- [ ] [04 Context and Tokens.md](../../courses/udemy/Coding%20with%20AI/module%204/04%20Context%20and%20Tokens.md) — **이 Phase의 핵심**
- [ ] [05 Managing Context in Claude Code.md](../../courses/udemy/Coding%20with%20AI/module%204/05%20Managing%20Context%20in%20Claude%20Code.md) — **`/clear`와 `/compact`의 실물**
- [ ] [06 Persistent Memory Update.md](../../courses/udemy/Coding%20with%20AI/module%204/06%20Persistent%20Memory%20Update.md) — 장기 기억과 규칙 파일의 역할 구분

> **압축 규율**: 여러 출처가 공통으로 짚는 수치는 **컨텍스트 사용률을 40~60%대로 유지하고 95%가 아니라 60%쯤에서 압축**하라는 것이다. 창이 안 찼는데도 세션이 길어지면 추론이 나빠진다(context rot). 증상은 이미 요약한 파일을 다시 열기 · 초기 제약 망각 · 같은 도구 반복 호출이다.
>
> ⚠️ **반직관적인 사실 하나** — 요약 기반 압축은 **시스템 프롬프트의 안전 제약도 함께 지운다**는 연구가 있다(arXiv 2606.22528). 장기 세션 후반부에 제약 위반이 늘어난다는 뜻이다. 그래서 압축할 때 "무엇을 반드시 보존할지"를 지시로 붙이는 습관이 필요하다.

함께 보기: 컨텍스트 엔지니어링의 정의

- [ ] **Modern AI Agents / 2026-07-15 Context engineering explained.md** — **용어의 정의**
- [ ] [Tech Bridge / 2026-08-20 Claude Code 세션의 컨텍스트와 토큰 낭비를 줄이는 습관.md](../../courses/youtube/Tech%20Bridge/2026-08-20%20Claude%20Code%20세션의%20컨텍스트와%20토큰%20낭비를%20줄이는%20습관.md) — **실전 습관**
- [ ] [Tech Bridge / 2026-08-27 코딩 에이전트의 메모리 점검 - 코드, 검증, 명시적 맥락.md](../../courses/youtube/Tech%20Bridge/2026-08-27%20코딩%20에이전트의%20메모리%20점검%20-%20코드,%20검증,%20명시적%20맥락.md)
- [ ] [Cole Medin / 2026-06-18 The Creators of Claude Code and OpenClaw dont Prompt Their Agents Anymore.md](../../courses/youtube/Cole%20Medin/2026-06-18%20The%20Creators%20of%20Claude%20Code%20and%20OpenClaw%20dont%20Prompt%20Their%20Agents%20Anymore.md) — **제목이 이 로드맵의 논지다.** 프롬프트가 아니라 설정으로 간다

## 2-C. 인덱싱과 컨텍스트 경계를 정한다

메인: Mastering Google Antigravity, Module 5의 앞 2강

- [ ] [01 Workspace Context.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/01%20Workspace%20Context.md) — ⚠️ 2.0에서 작업 단위가 workspace → **Project**로 바뀌었다
- [ ] [02 Ignored Files and Context Boundaries.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%205%20-%20Organize%20Codebase%20with%20Indexing,%20Rules%20and%20Workflows/02%20Ignored%20Files%20and%20Context%20Boundaries.md) — **읽히면 안 되는 것을 막는다.** [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md)의 시크릿 관리와 이어진다

> 📌 **탐색 방식이 벤더마다 갈린다.** Anthropic은 "stale embeddings를 피하려고 RAG 인덱싱 대신 agentic search(grep + 파일 읽기)를 쓴다"고 명시하는 반면, Cursor는 인덱싱과 semantic 검색을 병용한다. **어느 쪽이 옳다기보다 내 도구가 어떻게 찾는지를 알아야** ignore 설정이 의미를 갖는다.

## 2-D. 규칙 파일을 실제로 쓴다

메인: Coding with AI, module 5의 컨텍스트 부분

- [ ] [03 CLAUDE.md and Project Context.md](../../courses/udemy/Coding%20with%20AI/module%205/03%20CLAUDE.md%20and%20Project%20Context.md) — **이 소절의 메인.** 대화정리본 있음
- [ ] [04 Coding Standards and AI Interaction Rules.md](../../courses/udemy/Coding%20with%20AI/module%205/04%20Coding%20Standards%20and%20AI%20Interaction%20Rules.md) — 대화정리본 있음

함께 보기: 규칙 파일의 함정

- [ ] [Matt Pocock Skills / 2026-02-24 Never Run claude init.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-24%20Never%20Run%20claude%20init.md) — **자동 생성된 규칙 파일이 왜 나쁜가**
- [ ] [Matt Pocock Skills / 2026-02-25 Force Claude Code to use the right CLI.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-25%20Force%20Claude%20Code%20to%20use%20the%20right%20CLI.md) — 규칙으로 도구를 고정하는 실물
- [ ] [Matt Pocock Skills / 2026-02-26 Your codebase is NOT ready for AI.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-26%20Your%20codebase%20is%20NOT%20ready%20for%20AI.md) — [부록 12](12%20부록%20-%20코드베이스를%20에이전트%20친화적으로%20만들기.md)로 이어진다
- [ ] [Tech Bridge / 2026-09-04 Claude Code 팀이 새로 공개한 INTENT.MD의 정체와 AI-Native 개발 방식.md](../../courses/youtube/Tech%20Bridge/2026-09-04%20Claude%20Code%20팀이%20새로%20공개한%20INTENT.MD의%20정체와%20AI-Native%20개발%20방식.md) — **상시 지침(AGENTS.md)과 1회성 의도 기록(INTENT.md)은 다른 것이다**
- [ ] [Cole Medin / 2026-07-02 Finally an Open Standard for the Karpathy LLM Wiki is HERE.md](../../courses/youtube/Cole%20Medin/2026-07-02%20Finally%20an%20Open%20Standard%20for%20the%20Karpathy%20LLM%20Wiki%20is%20HERE.md) — 저장소 문서를 에이전트용으로 표준화하는 흐름
- [ ] [Tech Bridge / 2026-08-17 OpenWiki로 에이전트가 검색하는 저장소 문서를 자동 관리하기.md](../../courses/youtube/Tech%20Bridge/2026-08-17%20OpenWiki로%20에이전트가%20검색하는%20저장소%20문서를%20자동%20관리하기.md)

### 넣을 것 / 뺄 것

| 넣는다 | 뺀다 |
|---|---|
| 추론으로 알 수 없는 bash 명령 | 코드를 읽으면 아는 것 |
| 기본과 다른 코드 스타일 | 그 언어의 표준 관례 |
| 테스트 실행 방법 | 상세 API 문서 |
| 리포지토리 예절(커밋·브랜치 규칙) | 자주 바뀌는 정보 |
| 아키텍처 결정과 그 이유 | 세세한 금지 규칙 나열 |
| 환경 특이사항 | |

**200줄 안쪽을 권장한다.** 비대한 규칙 파일은 실제 지시를 묻어 버려서 에이전트가 통째로 무시한다. 가끔만 필요한 도메인 지식은 [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)의 스킬로 옮긴다 — 이것이 **progressive disclosure**다.

⚠️ **규칙 파일은 사람이 큐레이션한다.** 에이전트가 직접 쓰게 두면 금세 비대해진다.

## 산출물

세 가지다.

1. **담당 프로젝트의 규칙 파일 1개** — 200줄 안쪽, 위 「넣을 것 / 뺄 것」 기준으로 직접 큐레이션한 것. 자동 생성본을 그대로 쓰지 않는다
2. **컨텍스트 규율 메모** — 언제 `/clear`하고 언제 `/compact`하는지, 압축 시 무엇을 보존하라고 지시할지를 자기 언어로 적은 것
3. **증류 파일 1건** — 실제 작업 하나를 하면서 대화를 `research.md` 또는 `plan.md`로 남긴 것. 다음 세션이 이 파일만 읽고 이어갈 수 있어야 한다

## 다음 단계

→ [03 Phase 3 - 과제 정의와 계획 분리](03%20Phase%203%20-%20과제%20정의와%20계획%20분리.md)
