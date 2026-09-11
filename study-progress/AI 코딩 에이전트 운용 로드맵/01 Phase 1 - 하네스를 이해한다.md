# Phase 1 — 하네스를 이해한다

- 목표: 코딩 에이전트가 무엇을 읽고 무엇을 실행하는 장치인지 설명할 수 있고, 작업에 맞는 모델·실행 모드를 근거를 대고 고를 수 있다.
- 분량: 약 8시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 에이전틱 루프(관찰 → 계획 → 도구 호출 → 관찰)가 어떻게 도는지 설명한다
- **컨텍스트 윈도가 유일한 근본 제약**이고 나머지 운용 원칙 대부분이 여기서 파생된다는 것을 설명한다
- 인라인 자동완성 · 명령 편집 · 에이전트 패널이 각각 언제 쓰는 것인지 구분한다
- 실행 모드(빠른 실행 / 계획 / 자율)를 상황에 따라 고른다
- 모델과 사고 강도(reasoning effort)가 **별개의 축**임을 알고 둘을 따로 조절한다
- 같은 에이전트를 부르는 여러 채널(CLI · 데스크톱 · IDE 확장 · 웹)의 용도를 구분한다
- 세션을 시작·재개·되감기·분기한다

> **⚠️ Antigravity 강좌의 시점 주의**: 아래 Mastering·Liftoff 강의는 2026년 4월 자료다. Antigravity 2.0(2026-05-19)에서 **Agent Manager가 폐기되고 독립 데스크톱 앱 + CLI + SDK 구조로 바뀌었다.** 화면 구성과 메뉴 위치는 지금과 다르니 **개념만 가져가고 조작은 따라 하지 않는다.** 현재 구조는 [antigravity.google/docs/home](https://antigravity.google/docs/home)에서 확인한다.

## 1-A. 하네스와 토큰 — 개념 먼저

메인: AI Builder Essentials

- [ ] [2026-07-16 What is an Agentic Harness.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20Builder%20Essentials/2026-07-16%20What%20is%20an%20Agentic%20Harness.md) — **이 로드맵 전체의 출발점.** "하네스"라는 말이 무엇을 가리키는지
- [ ] [2026-07-23 AI builder essentials - Tokens, Context Windows, RAG 101.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20Builder%20Essentials/2026-07-23%20AI%20builder%20essentials%20-%20Tokens,%20Context%20Windows,%20RAG%20101.md) — **컨텍스트 윈도가 왜 제약인지.** Phase 2 전체의 전제
- [ ] [2026-06-05 What's going on with Developers and AI.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20Builder%20Essentials/2026-06-05%20What’s%20going%20on%20with%20Developers%20and%20AI.md) — 지형도. 가볍게

함께 보기: Tech Bridge (같은 주제를 한국어로, 더 최신)

- [ ] [2026-06-30 1000시간 넘게 배운 Claude를 15분 만에 익혀보세요.md](../../courses/youtube/Tech%20Bridge/2026-06-30%201000시간%20넘게%20배운%20Claude를%2015분%20만에%20익혀보세요.md) — 압축 입문
- [ ] [2026-07-08 Claude는 생각을 어떻게 나눠 처리할까요.md](../../courses/youtube/Tech%20Bridge/2026-07-08%20Claude는%20생각을%20어떻게%20나눠%20처리할까요.md) — 사고 강도 축을 이해하는 데 도움
- [ ] [2026-09-03 Claude Code 개발팀이 Claude Code를 쓰는 방법.md](../../courses/youtube/Tech%20Bridge/2026-09-03%20Claude%20Code%20개발팀이%20Claude%20Code를%20쓰는%20방법.md) — **만든 사람들이 어떻게 쓰는지.** 이 로드맵 전체의 지향점

## 1-B. 에이전트 IDE를 설치하고 화면을 익힌다

메인: Mastering Google Antigravity, Module 1

- [ ] [01 Course Requirements.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/01%20Course%20Requirements.md)
- [ ] [02 Install and Setup Google Antigravity.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/02%20Install%20and%20Setup%20Google%20Antigravity.md) — ⚠️ 2.0은 설치 형태가 다르다. 공식 문서와 대조
- [ ] [03 Quick Start with Google Antigravity.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/03%20Quick%20Start%20with%20Google%20Antigravity.md)
- [ ] [04 Tab and Navigation Feature.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/04%20Tab%20and%20Navigation%20Feature.md) — 인라인 자동완성. **가볍게 넘긴다** — 이 로드맵 도착점(병렬 무인 실행)에 자동완성 최적화는 기여하지 않는다
- [ ] [05 Command Feature for Inline Completions.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/05%20Command%20Feature%20for%20Inline%20Completions.md) — 같이 가볍게
- [ ] [06 Agent Side Panel Overview.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%201%20-%20Getting%20Started%20with%20Antigravity/06%20Agent%20Side%20Panel%20Overview.md) — **여기부터가 본론.** 자동완성과 에이전트의 차이

함께 보기: Liftoff, Module 1~2 (같은 도구를 다른 각도로, 짧다)

- [ ] [01 Why should you take this course.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%201%20-%20Course%20introduction/01%20Why%20should%20you%20take%20this%20course.md)
- [ ] [01 Get started with Antigravity.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%202%20-%20Get%20started%20with%20Antigravity/01%20Get%20started%20with%20Antigravity.md)
- [ ] [02 Hello Worlds.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%202%20-%20Get%20started%20with%20Antigravity/02%20Hello%20Worlds.md) — **"Worlds" 복수형이 힌트다.** 여러 에이전트를 동시에 띄우는 첫 경험

## 1-C. 모델·요금·한계를 판단한다

메인: Mastering Google Antigravity, Module 2

- [ ] [01 Overview of Google Antigravity.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%202%20-%20Getting%20to%20Know%20Antigravity/01%20Overview%20of%20Google%20Antigravity.md)
- [ ] [02 Popular Use Cases for Developers.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%202%20-%20Getting%20to%20Know%20Antigravity/02%20Popular%20Use%20Cases%20for%20Developers.md) — 무엇을 맡기고 무엇을 안 맡길지의 첫 재료
- [ ] [03 Payment Plans and Features.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%202%20-%20Getting%20to%20Know%20Antigravity/03%20Payment%20Plans%20and%20Features.md) — ⚠️ 요금제는 2026-05 이후 개편됐다. 현재는 무료 티어에서도 Claude 계열 모델을 쓸 수 있다
- [ ] [04 AI Models and Limitations.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%202%20-%20Getting%20to%20Know%20Antigravity/04%20AI%20Models%20and%20Limitations.md) — **산출물의 핵심 재료.** 다만 모델 목록은 낡았다
- [ ] [05 Telemetry and Data Privacy Settings.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%202%20-%20Getting%20to%20Know%20Antigravity/05%20Telemetry%20and%20Data%20Privacy%20Settings.md) — 회사에서 쓸 때 먼저 확인할 것

## 1-D. 실행 모드를 고른다

메인: Mastering Google Antigravity, Module 3

- [ ] [01 Agent Fast Mode.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%203%20-%20Understand%20Antigravity%20Chat%20Modes%20and%20Context/01%20Agent%20Fast%20Mode.md)
- [ ] [02 Chat Context for Better Responses.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%203%20-%20Understand%20Antigravity%20Chat%20Modes%20and%20Context/02%20Chat%20Context%20for%20Better%20Responses.md) — Phase 2로 이어진다
- [ ] [03 Agent Planning Mode.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%203%20-%20Understand%20Antigravity%20Chat%20Modes%20and%20Context/03%20Agent%20Planning%20Mode.md) — **Phase 3의 전제.** 계획과 실행을 분리하는 첫 도구

> 📌 **도구를 가로지르는 공통점**: Claude Code(`default → acceptEdits → plan → auto → dontAsk → bypassPermissions`)와 Antigravity CLI(`default → accept-edits → plan`)가 **둘 다 Shift+Tab으로 모드를 순환한다.** 이름이 달라도 사다리 구조가 같다. 자세한 것은 [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md)에서 다룬다.

## 1-E. 하네스는 갈아탈 수 있다 — 지형 감각

함께 보기: 이 소절은 **읽기만 한다.** 지금 다 이해하지 않아도 되고, [Phase 11](11%20Phase%2011%20-%20캡스톤%20운용%20표준.md)에서 돌아온다.

- [ ] [Tech Bridge / 2026-08-18 Codex 하네스의 컨텍스트 구성과 도구 실행 설계.md](../../courses/youtube/Tech%20Bridge/2026-08-18%20Codex%20하네스의%20컨텍스트%20구성과%20도구%20실행%20설계.md) — 다른 하네스는 어떻게 다른가
- [ ] [Tech Bridge / 2026-08-19 Theo가 에이전트 작업을 터미널에서 GUI로 옮긴 이유.md](../../courses/youtube/Tech%20Bridge/2026-08-19%20Theo가%20에이전트%20작업을%20터미널에서%20GUI로%20옮긴%20이유.md) — 채널 선택이 작업 방식을 바꾼다
- [ ] [Tech Bridge / 2026-08-28 Warp Oz의 클라우드 에이전트 플랫폼 - 실행 환경과 협업 구조.md](../../courses/youtube/Tech%20Bridge/2026-08-28%20Warp%20Oz의%20클라우드%20에이전트%20플랫폼%20-%20실행%20환경과%20협업%20구조.md)
- [ ] [찐AI / 2026-07-12 다른 터미널 툴을 압도하는 현존 최고의 IDE Orca의 특징.md](../../courses/youtube/찐AI/2026-07-12%20다른%20터미널%20툴을%20압도하는%20현존%20최고의%20IDE%20Orca의%20특징.md) — **worktree 기반 IDE의 실물.** [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md) 예고편
- [ ] [ZeroCho TV / 2026-09-05 스스로 진화하는 OpenClaw 2.0 - Hermes 에이전트와 비교.md](../../courses/youtube/ZeroCho%20TV/2026-09-05%20스스로%20진화하는%20OpenClaw%202.0%20-%20Hermes%20에이전트와%20비교.md)
- [ ] [Cole Medin / 2026-06-25 Google Just Dropped a Masterclass on Agentic Engineering.md](../../courses/youtube/Cole%20Medin/2026-06-25%20Google%20Just%20Dropped%20a%20Masterclass%20on%20Agentic%20Engineering.md)

## 산출물

**작업 유형별 모델·모드 선택 기준표 1장.**

강의를 다 봤다고 이 Phase가 끝난 것이 아니다. 아래를 채운 표가 있어야 한다.

| 작업 유형 | 모델 | 사고 강도 | 실행 모드 | 근거 |
|---|---|---|---|---|
| 오타·문구 수정 | | | | |
| 버그 재현과 수정 | | | | |
| 새 기능 구현 | | | | |
| 리팩터링 | | | | |
| 코드베이스 파악 | | | | |
| 프로덕션 배포 관련 | | | | |

**표를 만들 때의 원칙 하나** — 모델 선택을 그때그때 기분으로 하지 말고 **작업 유형별 정책으로 고정**한다. 2026년 실무 조사에서 반복해 나온 권고다("개발자가 고르게 두지 말고 태스크별로 전략적으로 선택하라"). 이 표는 [Phase 10](10%20Phase%2010%20-%20측정하고%20재판정한다.md)에서 비용 데이터를 근거로 다시 고친다.

## 다음 단계

→ [02 Phase 2 - 컨텍스트를 운용한다](02%20Phase%202%20-%20컨텍스트를%20운용한다.md)
