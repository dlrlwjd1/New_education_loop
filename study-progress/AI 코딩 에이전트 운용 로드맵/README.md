# AI 코딩 에이전트 운용 학습 로드맵 — 도구를 부리는 사람이 된다

코딩 에이전트(Claude Code · Codex · Cursor · Google Antigravity)를 **도구로서 능숙하게 부리는 법**을 다룬다. "AI로 코드를 짜는 법"이 아니라 "에이전트라는 실행 장치를 설정하고, 여러 개를 동시에 굴리고, 그 결과를 믿을 수 있게 만드는 법"이다. 저장소에 이 주제 자료가 150강 넘게 쌓여 있었지만 어느 로드맵도 소유하지 않아 떠 있었고, 2026-09-10에 이 로드맵으로 모았다. 저장소 자료로 Phase 1~9와 11을 덮고, **Phase 7(병렬)과 Phase 10(측정)의 공백은 MOOC Plus 신규 강좌와 산출물 과제로 채운다.**

- 작성일: 2026-09-10
- 웹 리서치 기준일: 2026-09-10
- 대상: 프로그래밍 경험 있음. Claude Code·Codex를 이미 쓰고 있고 [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md)의 Phase 1(SDD 개념 15강)을 먼저 보면 좋다. 다만 **도구 설정을 즉흥적으로 하고, 에이전트를 한 번에 하나씩만 굴리는** 상태
- 원칙: 저장소 자료 우선. 공백은 MOOC Plus 포함 강좌로 채운다(추가 결제 없음). Udemy는 선택
- 도착점: **실제 프로젝트 하나를 코딩 에이전트 여러 개를 병렬로 굴려 배포까지 끝내고, 그 과정에서 만든 rules·skills·workflow 세트와 검증 게이트를 도구가 바뀌어도 쓸 수 있는 내 운용 표준으로 남긴다.**

## 이 로드맵이 다른 로드맵과 겹치는 방식

**강의가 겹치는데도 자체 체크박스를 둔다.** [AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md)·**보안 로드맵**과 같은 예외 방식이다. 관점이 다르기 때문이다.

| 로드맵 | 무엇을 하는가 |
|---|---|
| [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md) | **명세 문서**를 써서 결과 품질을 담보한다 — 무엇을 넘길 것인가 |
| [AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md) | 회사 업무를 돌릴 **에이전트를 만든다** — 에이전트를 짓는 쪽 |
| **이 로드맵** | **에이전트라는 도구를 부린다** — 컨텍스트·권한·병렬·검증 게이트 |

한쪽에서 이미 본 강의는 **다른 쪽에도 학습일을 옮겨 적는다.** 소유 관계 표는 [00 강의 자료 인덱스](00%20강의%20자료%20인덱스.md)에 있다.

## ⚠️ 저장소의 Antigravity 강좌 두 개는 한 세대 전 자료다

[Mastering Google Antigravity](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/README.md)(44강)와 [Liftoff with Google Antigravity](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/README.md)(11강)는 **둘 다 강의 페이지 기준 2026년 4월 자료**다. Antigravity 2.0이 2026-05-19에 나오면서 구조가 바뀌었다.

공식 문서가 이렇게 적는다 — *"Unlike its predecessor, the Agent Manager, Antigravity 2.0 is a standalone application that functions independently of an IDE."* 즉 **두 강좌가 가르치는 Editor view / Manager view 모델 자체가 폐기된 형태**다. 게다가 Mastering 강좌 Module 5가 가르치는 **Workflows는 2026-11-01자로 Skills에 흡수될 예정**이고 공식 문서에 `/migrate-workflows` 마이그레이션 경로가 있다.

**그래서 이렇게 쓴다.**

- **개념 축은 그대로 유효하다** — 규칙 로딩 방식, 컨텍스트 경계, 스킬, 프롬프트 설계. 이건 도구를 가로질러 같다
- **화면 조작과 메뉴 위치는 따라 하지 않는다.** 지금 화면과 다르다
- Workflows를 배울 때는 **"지금은 Skills로 한다"를 전제**로 본다
- 2.0에서 새로 생긴 것(데스크톱 커맨드 센터·CLI·SDK·동적 서브에이전트·Scheduled Tasks·Project 단위)은 [antigravity.google/docs](https://antigravity.google/docs/home)로 보충한다

블록체인 로드맵처럼 "코드가 죽은" 수준은 아니다. 개념은 살아 있고 표면만 바뀌었다.

## 로드맵 구조

| 단계 | 주제 | 핵심 산출물 | 분량 | 저장소 자료 | 파일 |
|---|---|---|---|---|---|
| Phase 1 | 하네스를 이해한다 | 작업 유형별 모델·모드 선택 기준표 | 8시간 | 있음 | [01 Phase 1](01%20Phase%201%20-%20하네스를%20이해한다.md) |
| Phase 2 | 컨텍스트를 운용한다 | 담당 프로젝트의 AGENTS.md + 압축 규율 | 10시간 | 있음 | [02 Phase 2](02%20Phase%202%20-%20컨텍스트를%20운용한다.md) |
| Phase 3 | 과제 정의와 계획 분리 | 기능 1건의 스펙 + 승인된 계획 | 8시간 | 있음 | [03 Phase 3](03%20Phase%203%20-%20과제%20정의와%20계획%20분리.md) |
| Phase 4 | 재사용 자산을 만든다 | 워크플로 스킬 1개 + 훅 게이트 1개 | 14시간 | 있음 | [04 Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md) |
| Phase 5 | 검증 게이트를 건다 | 4단계 중 3단계 이상 걸린 파이프라인 | 12시간 | 부분 | [05 Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md) |
| Phase 6 | 권한과 샌드박스 | 샌드박스 구성 + 위임 클래스 설계표 | 12시간 | 부분 | [06 Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md) |
| **Phase 7** | **병렬로 굴린다 ★** | **worktree 3개 이상 동시 운용 + 집계 규율** | 12시간 | 부분 | [07 Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md) |
| Phase 8 | 실제 앱을 배포한다 | **URL로 접근 가능한 앱 1개** | 20시간 | 있음 | [08 Phase 8](08%20Phase%208%20-%20실제%20앱을%20배포한다.md) |
| Phase 9 | 자동화한다 | CI에 물린 에이전트 작업 1건 | 10시간 | 있음 | [09 Phase 9](09%20Phase%209%20-%20자동화한다.md) |
| Phase 10 | 측정하고 재판정한다 | 비용·재작업률 기록 + 설정 재검토 1회 | 8시간 | **없음** | [10 Phase 10](10%20Phase%2010%20-%20측정하고%20재판정한다.md) |
| Phase 11 | 캡스톤 — 운용 표준 | **이식 가능한 rules·skills·workflow 세트** | 12시간 | 산출물 중심 | [11 Phase 11](11%20Phase%2011%20-%20캡스톤%20운용%20표준.md) |

부속 문서

- [00 강의 자료 인덱스](00%20강의%20자료%20인덱스.md) — 저장소 안 관련 자료 **전체 목록**과 로드맵 간 소유 관계 표
- [12 부록 - 코드베이스를 에이전트 친화적으로 만들기](12%20부록%20-%20코드베이스를%20에이전트%20친화적으로%20만들기.md) — 에이전트 성능은 코드베이스 구조에 직접 좌우된다
- [13 부록 - 실패 패턴과 중단 규칙](13%20부록%20-%20실패%20패턴과%20중단%20규칙.md) — 3회 규칙, 슬롯머신 효과, 흔한 실패 5종
- [14 부록 - 추천 강의 종합](14%20부록%20-%20추천%20강의%20종합.md) — MOOC Plus 신규 6개와 Udemy 선택 목록

## 뼈대가 되는 강좌

1. **[Coding with AI](../../courses/udemy/Coding%20with%20AI/README.md)** (Udemy · 217강) — 전 구간의 실습 척추. Claude Code로 Next.js 앱(DevStash)을 만들며 컨텍스트·슬래시 커맨드·스킬·서브에이전트·MCP·배포까지 간다. **소유는 [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md), 이 로드맵은 자체 체크박스를 둔다**
2. **[Mastering Google Antigravity](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/README.md)** (MOOC · 44강) — **이 로드맵이 단독 소유.** 도구 전반과 rules·workflows·skills. 위 「시점 주의」 적용
3. **[Liftoff with Google Antigravity](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/README.md)** (MOOC · 11강) — **이 로드맵이 단독 소유.** 병렬 오케스트레이션과 Firebase 배포
4. **[Tech Bridge](../../courses/youtube/Tech%20Bridge/README.md)** (YouTube · 94편) — **이 로드맵이 사실상 단독 소유(85편이 미참조였다).** 하네스·컨텍스트 낭비·작업 격리·백그라운드 런타임의 최신 동향
5. **[AI Agent Skills for Leaders](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/README.md)** (MOOC · 25강) — 스킬 설계의 RECIPE 프레임워크. Phase 4의 메인
6. **[Matt Pocock Skills](../../courses/youtube/Matt%20Pocock%20Skills/README.md)** (YouTube · 23편) — 스킬 실물과 AFK 소프트웨어 팩토리

각 Phase 문서에서 "메인"과 "함께 보기"로 짝지어 둔다.

## 순서를 이렇게 잡은 이유

도구를 **이름별로** 배우지 않는다. 네 도구 전부 같은 것을 다른 이름으로 갖고 있다는 것이 2026-09-10 공식 문서 조사에서 확인됐다. 그래서 Phase는 **도구를 가로지르는 공통축**을 따라간다.

| 축 | Claude Code | Antigravity | Cursor / Copilot | Phase |
|---|---|---|---|---|
| 항상 로드되는 규칙 | `CLAUDE.md` · `.claude/rules/` | `GEMINI.md` · `.agents/rules/` | `.cursor/rules/*.mdc` · `*.instructions.md` | 2 |
| 온디맨드 워크플로 | Skills (`SKILL.md`) | Skills (**같은 오픈 표준**) | `*.prompt.md` | 4 |
| 서브에이전트·격리 | `.claude/agents/` · worktree | `.agents/agents/` · `workspace: branch` | — | 4·7 |
| 병렬 오케스트레이션 | subagent → agent view → teams → workflows | `invoke_subagent` → projects → `/teamwork` → `/boost` | — | 7 |
| 권한·자율성 다이얼 | 6단 모드 + allow/ask/deny | 3단 모드 + Deny>Ask>Allow | — | 6 |
| 라이프사이클 훅 | 30여 이벤트, exit 2 = 차단 | `PreToolUse`/`PostToolUse`/`Stop` | — | 4·5 |
| MCP | 네 도구 전부 클라이언트 | | | 4·6 |
| 브라우저 검증·산출물 리뷰 | Chrome 통합 | `/browser` + Artifacts | — | 5 |

**규칙 로딩은 세 도구 전부 「항상 / 경로 조건부(glob) / 모델이 판단해서」 3분류를 갖는다.** 배워야 할 건 이 3분류지 파일명이 아니다. 그래서 Phase 2가 파일명이 아니라 분류로 시작한다.

순서의 나머지 근거는 이렇다.

- **눈에 보이는 결과를 앞으로 당겼다.** Phase 1~4에서 이미 자기 프로젝트에 설정 자산이 쌓이고, Phase 8에서 배포된 앱이 나온다
- **검증(5)과 권한(6)이 병렬(7)보다 먼저다.** 검증 없이 병렬로 늘리면 사고만 배로 늘어난다. 실제로 2026-02-26 Claude Code가 프로덕션에 `terraform destroy`를 실행해 DB 194만 행이 지워진 사고, 2025-12 Amazon Kiro가 2인 승인 요건을 우회한 사고가 있었다
- **측정(10)이 캡스톤(11) 직전이다.** 무엇이 실제로 효과 있었는지 재기 전에 운용 표준을 굳히면 자기기만이 표준이 된다

## 추천 진행 방식

- **주 5시간 기준 약 25주** 코스다. 강의 시간만 126시간이고 산출물 작업이 별도로 붙는다
- 강의 하나를 볼 때마다 `study` 스킬로 Q&A 학습을 하면 정리본이 자동 생성된다
- **실습 대상은 남의 예제가 아니라 자기가 실제로 담당하는 프로젝트다.** Phase 2부터 나오는 산출물(AGENTS.md·스킬·훅)이 전부 그 프로젝트에 쌓여야 Phase 11의 운용 표준이 진짜가 된다
- **Phase 7은 디스크와 시간을 쓴다.** worktree를 3개 이상 만들고 각각 의존성을 설치하므로 여유 공간을 확보하고, 포트 충돌(3000·5432·8080)과 DB 공유 문제를 미리 생각해 둔다

## 빠른 경로 — 목표가 "지금 프로젝트에서 에이전트를 제대로 쓰기" 하나라면

전체 완주가 부담이면 약 8주 경로가 있다.

1. [Phase 2](02%20Phase%202%20-%20컨텍스트를%20운용한다.md) 전체 — AGENTS.md와 컨텍스트 규율
2. [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md) 의 4-A, 4-B — 스킬과 훅만
3. [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md) 의 5-A, 5-B — 검증 강도 4단계와 적대적 리뷰
4. [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md) 의 6-A — 권한 모드와 위임 클래스

빠지는 것은 **병렬 운용(7)·배포(8)·자동화(9)·측정(10)**이다. 에이전트를 하나씩만 굴리는 상태에 머무르므로, 작업이 밀리기 시작하면 Phase 7로 돌아온다.

## 이 로드맵에 없는 것

- **에이전트를 프레임워크로 직접 만드는 것**(LangGraph·CrewAI·OpenAI Agents SDK) → [AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md)
- **명세 문서 작성법** → [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md). 이 로드맵 Phase 3은 "계획을 실행에서 분리한다"까지만 다룬다
- **AI로 화면을 만드는 것** → **와이어프레임 로드맵**·**UI UX 로드맵**
- **LLM 자체의 원리와 학습** → **Andrew Ng 로드맵**
- **OpenClaw** — 같은 전문과정의 3번째 코스지만 코딩 에이전트가 아니라 VPS에 올리는 개인 비서 에이전트라 범위 밖이다

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 | — |
| Phase 5 | 미시작 | — |
| Phase 6 | 미시작 | — |
| Phase 7 | 미시작 | — |
| Phase 8 | 미시작 | — |
| Phase 9 | 미시작 | — |
| Phase 10 | 미시작 | — |
| Phase 11 | 미시작 | — |

## 주의 사항

- **각 Phase 문서의 체크리스트가 Antigravity 두 강좌의 진행 기록 원본이다.** 예전 `study-progress/Mastering Google Antigravity - From Setup to Real Projects.md`와 `study-progress/Liftoff with Google Antigravity - Build a Video Game with AI.md`는 2026-09-10에 이 로드맵으로 흡수하고 삭제했다(둘 다 전부 미체크 상태였다)
- **겹치는 강의는 양쪽에 체크한다.** 특히 `Coding with AI`·`Matt Pocock Skills`는 스펙 주도 개발 로드맵이 소유한다
- **이 분야는 6개월 단위로 바뀐다.** 저장소 자료 중 2026년 상반기 것은 이미 뒤처진 부분이 있다. Phase 문서에 「지금은 다르다」 주석을 달아 뒀고, 새 사실을 알게 되면 그 주석을 갱신한다
- **MCP 강좌는 사양이 뒤처져 있다.** Anthropic 공식 강좌 2개가 sampling·roots를 가르치는데 **현행 개정판(2026-07-28)에서 그 둘은 deprecated**다. 개념은 강좌로, 사양은 [modelcontextprotocol.io](https://modelcontextprotocol.io/specification/latest) 현행판으로 본다
- MOOC 신규 강좌 6개는 **전부 MOOC Plus 포함**으로 확인됐다(2026-09-10). 추가 결제는 없다
