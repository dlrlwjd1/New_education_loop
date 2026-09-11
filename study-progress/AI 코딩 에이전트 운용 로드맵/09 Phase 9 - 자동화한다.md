# Phase 9 — 자동화한다

- 목표: 에이전트를 대화창 밖으로 내보낸다 — CI·스크립트·예약 실행에 물리고, 무인 실행 결과를 사후 검증한다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 비대화형(headless) 모드로 에이전트를 실행하고 출력을 파싱한다
- CI에 에이전트 작업(코드 리뷰·이슈 트리아지)을 붙인다
- 반복 작업을 예약 실행으로 돌린다
- **대량 팬아웃 패턴**을 쓴다 — 대상 목록 생성 → 2~3개로 프롬프트 튜닝 → 전체 실행
- **무인 실행의 결과를 사후 검증하는 절차**를 갖춘다

## 9-A. 헤드리스 실행

**저장소 자료가 얇은 구간이다.** 개념은 아래 자료로, 구체적 플래그는 공식 문서로 본다.

- [ ] [Coding with AI / module 7 / 01 CI-CD, Migrations, and Database Drift.md](../../courses/udemy/Coding%20with%20AI/module%207/01%20CI-CD,%20Migrations,%20and%20Database%20Drift.md) — **[Phase 8](08%20Phase%208%20-%20실제%20앱을%20배포한다.md)에서 봤다면 양쪽에 체크**
- [ ] [Matt Pocock Skills / 2026-04-30 I Open-Sourced My Own AFK Software Factory.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-04-30%20I%20Open-Sourced%20My%20Own%20AFK%20Software%20Factory.md) — **[Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)에서 봤다면 여기서는 자동화 관점으로 다시 본다**
- [ ] [Tech Bridge / 2026-08-24 백그라운드 에이전트 런타임 - 이벤트 로그와 재현 가능한 프롬프트.md](../../courses/youtube/Tech%20Bridge/2026-08-24%20백그라운드%20에이전트%20런타임%20-%20이벤트%20로그와%20재현%20가능한%20프롬프트.md) — **재현 가능성이 핵심**
- [ ] [Tech Bridge / 2026-09-01 Anthropic Managed Agents - 지속 실행과 신뢰를 위한 플랫폼 설계.md](../../courses/youtube/Tech%20Bridge/2026-09-01%20Anthropic%20Managed%20Agents%20-%20지속%20실행과%20신뢰를%20위한%20플랫폼%20설계.md)
- [ ] [Tech Bridge / 2026-08-28 Warp Oz의 클라우드 에이전트 플랫폼 - 실행 환경과 협업 구조.md](../../courses/youtube/Tech%20Bridge/2026-08-28%20Warp%20Oz의%20클라우드%20에이전트%20플랫폼%20-%20실행%20환경과%20협업%20구조.md)
- [ ] [Google Cloud Tech / 2026-06-18 3 patterns to build long-running AI agents.md](../../courses/youtube/Google%20Cloud%20Tech/5-Days%20of%20AI%20Agents%20and%20Agent%20Factory/2026-06-18%203%20patterns%20to%20build%20long-running%20AI%20agents.md)
- [ ] [Google Cloud Tech / 2026-06-16 Building long-running AI agents with ADK.md](../../courses/youtube/Google%20Cloud%20Tech/5-Days%20of%20AI%20Agents%20and%20Agent%20Factory/2026-06-16%20Building%20long-running%20AI%20agents%20with%20ADK.md) — ADK 특정 부분은 건너뛰고 패턴만

**공식 문서로 보충한다**

- [code.claude.com/docs/en/headless](https://code.claude.com/docs/en/headless) — `-p`, 출력 포맷, 무인 실행 옵션
- [code.claude.com/docs/en/github-actions](https://code.claude.com/docs/en/github-actions) — CI에 붙이는 법

### ⚠️ 헤드리스 실행의 함정 두 가지

1. **CI 재현성** — 아무 옵션 없이 헤드리스로 돌리면 그 프로젝트의 훅이 실행되고 MCP 서버에 연결된다. **신뢰하지 않는 폴더에서도 그렇다.** CI에서는 자동 탐색을 끄는 옵션(`--bare` 등)을 써서 재현 가능하게 만든다
2. **실패를 실패로 만든다** — 플러그인·MCP 서버 초기화 오류가 조용히 넘어가면 에이전트가 도구 없이 돌아간다. 초기화 오류 배열이 비어 있지 않으면 **CI를 실패시킨다**

## 9-B. 팬아웃 — 대량 작업 자동화

같은 변경을 파일 수십 개에 적용해야 할 때의 표준 패턴이다.

1. **대상 목록 파일을 먼저 만든다** — 에이전트에게 목록을 생성시킨다
2. **2~3개로 프롬프트를 튜닝한다** — 전량 실행 전에 결과를 확인한다
3. **전체를 루프로 돌린다** — 또는 서브에이전트를 팬아웃해 각자 worktree에서 PR을 연다

**2단계를 건너뛰면 수십 개의 잘못된 변경이 한꺼번에 생긴다.** [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)의 「한 파일 한 주인」 규율이 여기서도 적용된다.

- [ ] [Matt Pocock Skills / 2026-05-07 Burn through the backlog from hell with triage.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-07%20Burn%20through%20the%20backlog%20from%20hell%20with%20triage.md)
- [ ] [Tech Bridge / 2026-08-22 Hugging Face Community Science 자동화 - 논문에서 모델·데이터 카드까지.md](../../courses/youtube/Tech%20Bridge/2026-08-22%20Hugging%20Face%20Community%20Science%20자동화%20-%20논문에서%20모델·데이터%20카드까지.md) — 대량 자동화 사례
- [ ] [Tech Bridge / 2026-08-21 Uber Eats 음식 이미지 개선 에이전트의 평가와 자동 개선 루프.md](../../courses/youtube/Tech%20Bridge/2026-08-21%20Uber%20Eats%20음식%20이미지%20개선%20에이전트의%20평가와%20자동%20개선%20루프.md)
- [ ] [Tech Bridge / 2026-08-18 AI 자동화 구축 5000시간에서 얻은 12가지 실무 교훈.md](../../courses/youtube/Tech%20Bridge/2026-08-18%20AI%20자동화%20구축%205000시간에서%20얻은%2012가지%20실무%20교훈.md)
- [ ] [Tech Bridge / 2026-08-16 ChatGPT Work로 만드는 여덟 가지 업무 자동화 사례.md](../../courses/youtube/Tech%20Bridge/2026-08-16%20ChatGPT%20Work로%20만드는%20여덟%20가지%20업무%20자동화%20사례.md) — 코딩 밖 사례. 가볍게

## 9-C. 무인 실행을 사후 검증한다

자동화의 마지막 조각이다. **돌려 놓고 결과를 안 보면 자동화가 아니라 방치다.**

- 무인 실행마다 **증거를 남긴다** — 실행한 명령, 테스트 출력, 변경된 파일 목록
- **PR 설명과 실제 diff의 일치**를 확인한다. 에이전트 PR은 범위를 잘못 기술하거나 없는 변경을 주장하기도 한다
- 예약 실행은 **실패했을 때 알림이 오게** 만든다. 조용히 실패하는 자동화가 가장 위험하다
- [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)의 Stop 훅이 무인 실행에서 특히 중요하다 — 사람이 안 보고 있으므로 결정론적 차단만 남는다

- [ ] [Tech Bridge / 2026-08-15 Harrison Chase의 하네스 커스터마이징과 평가·관측 루프.md](../../courses/youtube/Tech%20Bridge/2026-08-15%20Harrison%20Chase의%20하네스%20커스터마이징과%20평가·관측%20루프.md)
- [ ] [Tech Bridge / 2026-08-14 로컬 연구 에이전트의 기억 검색 정책 평가.md](../../courses/youtube/Tech%20Bridge/2026-08-14%20로컬%20연구%20에이전트의%20기억%20검색%20정책%20평가.md)
- [ ] [Tech Bridge / 2026-08-29 GitHub Spec Kit으로 MCP 서버 만들기 - 명세에서 구현과 검증까지.md](../../courses/youtube/Tech%20Bridge/2026-08-29%20GitHub%20Spec%20Kit으로%20MCP%20서버%20만들기%20-%20명세에서%20구현과%20검증까지.md)

## 산출물

1. **CI에 물린 에이전트 작업 1건** — 코드 리뷰든 이슈 트리아지든, PR을 열면 실제로 돌아가는 것
2. **팬아웃 실행 1회** — 파일 5개 이상에 같은 변경을 적용한 기록. 2~3개로 튜닝한 흔적이 있어야 한다
3. **무인 실행 사후 검증 절차 메모** — 무엇을 증거로 남기고 무엇을 확인하는지

## 다음 단계

→ [10 Phase 10 - 측정하고 재판정한다](10%20Phase%2010%20-%20측정하고%20재판정한다.md)
