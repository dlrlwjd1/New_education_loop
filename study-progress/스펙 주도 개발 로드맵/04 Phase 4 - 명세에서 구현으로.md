# Phase 4 — 명세에서 구현으로

- 목표: 명세를 에이전트에게 넘겨 **끝까지 명세대로** 구현시킨다. 중간에 산으로 가는 것을 막는 장치를 익힌다.
- 분량: 약 8~10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 명세를 태스크 그룹으로 쪼개 순서대로 구현시킬 수 있다.
- 구현 중 컨텍스트를 언제 비우고(`/clear`) 언제 유지할지 판단할 수 있다.
- 에이전트가 명세에서 이탈하는 신호를 조기에 알아챌 수 있다.
- 「감독자」 역할로 개입하는 지점과, 개입하지 말아야 할 지점을 구분할 수 있다.
- UI → 데이터 → 통합 순서로 기능을 쌓을 수 있다.
- 에이전트가 되물은 질문을 명세에 되먹여 다음 명세를 개선할 수 있다.

> **가장 흔한 실패**: 명세를 한 번에 다 던지고 「알아서 해」로 두는 것. 그러면 중반부터 명세가 아니라 **직전에 자기가 쓴 코드**를 기준으로 판단하기 시작한다. 태스크 그룹으로 끊고, 끊는 지점마다 사람이 본다.

## 4-A. 구현 루프 — 개념

메인: Spec-Driven Development (복습)

- [ ] [07 Feature Implementation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation.md) — **`/clear`와 태스크 그룹 구현, 그리고 감독자 역할.** 이 강의가 Phase 4의 골격이다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 4-B. 데이터 계층 붙이기 — DevStash

메인: Coding with AI, module 6

Phase 3에서 목업 데이터로 만든 UI를 실제 데이터베이스에 연결하는 구간이다. **「이미 있는 것을 바꾸는」 명세를 어떻게 쓰는지**가 여기서 드러난다.

- [ ] [01 Setting Up Neon Database.md](../../courses/udemy/Coding%20with%20AI/module%206/01%20Setting%20Up%20Neon%20Database.md) — 데이터베이스 준비
- [ ] [02 Setting Up Prisma ORM.md](../../courses/udemy/Coding%20with%20AI/module%206/02%20Setting%20Up%20Prisma%20ORM.md) — ORM 설정
- [ ] [03 Running Initial Migration and Testing Database.md](../../courses/udemy/Coding%20with%20AI/module%206/03%20Running%20Initial%20Migration%20and%20Testing%20Database.md) — 마이그레이션
- [ ] [04 Seeding Demo Data.md](../../courses/udemy/Coding%20with%20AI/module%206/04%20Seeding%20Demo%20Data.md) — **시드 데이터** — 명세: [`seed-spec.md`](../../courses/udemy/Coding%20with%20AI/module%206/specs/seed-spec.md)
- [ ] [05 Replacing Dashboard Collections with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/05%20Replacing%20Dashboard%20Collections%20with%20Database%20Data.md) — **목업 → 실데이터 교체 1** — 기존 코드를 건드리는 명세의 전형
- [ ] [06 Replacing Dashboard Items with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/06%20Replacing%20Dashboard%20Items%20with%20Database%20Data.md) — 교체 2 — 명세: [`dashboard-items-spec.md`](../../courses/udemy/Coding%20with%20AI/module%206/specs/dashboard-items-spec.md)
- [ ] [07 Replacing Stats and Sidebar with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/07%20Replacing%20Stats%20and%20Sidebar%20with%20Database%20Data.md) — 교체 3 — 명세: [`stats-sidebar-spec.md`](../../courses/udemy/Coding%20with%20AI/module%206/specs/stats-sidebar-spec.md)

## 4-C. 큰 기능을 여러 명세로 — 인증

메인: Coding with AI, module 8

**이 모듈이 Phase 4에서 가장 값지다.** 인증은 한 번에 못 만드는 크기의 기능이고, 그래서 「마스터 명세 + 단계별 명세」 구조가 실제로 어떻게 쓰이는지 보인다.

- [ ] [01 Authentication Phase 1 — NextAuth and GitHub OAuth.md](../../courses/udemy/Coding%20with%20AI/module%208/01%20Authentication%20Phase%201%20%E2%80%94%20NextAuth%20and%20GitHub%20OAuth.md) — **Phase 1** — 명세: [`auth-phase-1-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-1-spec.md)
- [ ] [02 Authentication Phase 2 — Credentials Provider.md](../../courses/udemy/Coding%20with%20AI/module%208/02%20Authentication%20Phase%202%20%E2%80%94%20Credentials%20Provider.md) — Phase 2 — [`auth-phase-2-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-2-spec.md)
- [ ] [03 Authentication Phase 3 — Auth UI and Sign Out.md](../../courses/udemy/Coding%20with%20AI/module%208/03%20Authentication%20Phase%203%20%E2%80%94%20Auth%20UI%20and%20Sign%20Out.md) — Phase 3 — [`auth-phase-3-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-3-spec.md)
- [ ] [04 Production GitHub OAuth and Vercel Env Vars.md](../../courses/udemy/Coding%20with%20AI/module%208/04%20Production%20GitHub%20OAuth%20and%20Vercel%20Env%20Vars.md)
- [ ] [05 Email Verification with Resend.md](../../courses/udemy/Coding%20with%20AI/module%208/05%20Email%20Verification%20with%20Resend.md) — 이메일 인증 — 외부 서비스가 끼어들 때의 명세
- [ ] [06 Development Email Verification Toggle.md](../../courses/udemy/Coding%20with%20AI/module%208/06%20Development%20Email%20Verification%20Toggle.md)
- [ ] [07 Forgot Password Flow.md](../../courses/udemy/Coding%20with%20AI/module%208/07%20Forgot%20Password%20Flow.md)
- [ ] [08 Profile Page and Account Actions.md](../../courses/udemy/Coding%20with%20AI/module%208/08%20Profile%20Page%20and%20Account%20Actions.md) — 프로필 페이지 — 명세: [`profile-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/profile-spec.md)

### 실물 확인 — 마스터 명세 구조

- [`auth-spec-files/next-auth-master-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/next-auth-master-spec.md) — **전체 그림을 담은 상위 명세**
- [`auth-phase-1-spec.md`](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-1-spec.md) · [2](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-2-spec.md) · [3](../../courses/udemy/Coding%20with%20AI/module%208/specs/auth-spec-files/auth-phase-3-spec.md) — 실행 단위로 쪼갠 하위 명세

> **마스터 명세는 「전체가 완성되면 어떤 모습인가」를, 단계 명세는 「이번 실행에서 무엇을 만드나」를 담는다.** 둘을 한 문서에 섞으면 에이전트가 이번 범위를 판단하지 못한다.

## 4-D. 기능 하나를 끝까지 — CRUD

메인: Coding with AI, module 9

한 도메인 객체의 조회·수정·삭제·생성을 명세 여러 개로 완주하는 구간이다.

- [ ] [01 Research Skill and Project Documentation.md](../../courses/udemy/Coding%20with%20AI/module%209/01%20Research%20Skill%20and%20Project%20Documentation.md) — **리서치 스킬과 프로젝트 문서화** — 명세를 쓰기 전에 조사가 필요한 경우. 결과물 예: [`research/`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/research/)
- [ ] [02 Item List View and Card Border Fix.md](../../courses/udemy/Coding%20with%20AI/module%209/02%20Item%20List%20View%20and%20Card%20Border%20Fix.md)
- [ ] [04 Item Detail Drawer.md](../../courses/udemy/Coding%20with%20AI/module%209/04%20Item%20Detail%20Drawer.md) — 명세: [`item-drawer-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/item-drawer-spec.md)
- [ ] [05 Editing Items Inline in the Drawer.md](../../courses/udemy/Coding%20with%20AI/module%209/05%20Editing%20Items%20Inline%20in%20the%20Drawer.md) — 명세: [`item-drawer-edit-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/item-drawer-edit-spec.md)
- [ ] [06 Deleting Items.md](../../courses/udemy/Coding%20with%20AI/module%209/06%20Deleting%20Items.md)
- [ ] [07 Creating Items.md](../../courses/udemy/Coding%20with%20AI/module%209/07%20Creating%20Items.md) — 명세: [`item-create-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/item-create-spec.md)
- [ ] [09 Code Editor for Snippets and Commands.md](../../courses/udemy/Coding%20with%20AI/module%209/09%20Code%20Editor%20for%20Snippets%20and%20Commands.md) — 명세: [`code-editor-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/code-editor-spec.md)
- [ ] [10 Markdown Editor for Notes and Prompts.md](../../courses/udemy/Coding%20with%20AI/module%209/10%20Markdown%20Editor%20for%20Notes%20and%20Prompts.md) — 명세: [`markdown-editor-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/markdown-editor-spec.md)
- [ ] [11 Setting Up Cloudflare R2 for File Uploads.md](../../courses/udemy/Coding%20with%20AI/module%209/11%20Setting%20Up%20Cloudflare%20R2%20for%20File%20Uploads.md)
- [ ] [12 Implementing File and Image Uploads.md](../../courses/udemy/Coding%20with%20AI/module%209/12%20Implementing%20File%20and%20Image%20Uploads.md) — 명세: [`file-image-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/file-image-spec.md)
- [ ] [13 Image Gallery Display.md](../../courses/udemy/Coding%20with%20AI/module%209/13%20Image%20Gallery%20Display.md)
- [ ] [14 File List Display.md](../../courses/udemy/Coding%20with%20AI/module%209/14%20File%20List%20Display.md) — 명세: [`file-display-spec.md`](../../courses/udemy/Coding%20with%20AI/module%209/specs/file-display-spec.md)

> 03·08·15번(테스트·감사)은 [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)에서 다룬다.

## 4-E. 구현 중 이탈을 막는 장치

강의가 아니라 실행 규칙이다. Phase 4의 실습 중 이 목록을 옆에 둔다.

| 신호 | 대응 |
|---|---|
| 에이전트가 명세에 없는 파일을 만들기 시작함 | 즉시 중단. 명세의 「New Files」와 대조 |
| 「~도 함께 개선했습니다」류의 보고 | 범위 이탈. 되돌리고 명세 범위만 다시 지시 |
| 같은 오류를 두 번 이상 다르게 고치려 함 | 컨텍스트가 오염됨. `/clear` 후 명세부터 다시 |
| 명세에 없는 라이브러리를 추가함 | 헌법의 기술 스택과 대조 ([Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)) |
| 에이전트가 되물음 | **명세의 구멍이다.** 답하고 **명세 파일에도 반영**한다 |
| 구현이 절반 넘게 진행됐는데 아직 확인 안 함 | 태스크 그룹이 너무 크다. 다음부터 더 잘게 |

## 산출물 과제

1. **[Phase 3](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md)의 명세를 실제로 구현시킨다** — 태스크 그룹으로 끊어서, 끊는 지점마다 결과를 확인한다.
2. **되물음 기록** — 에이전트가 물어본 질문을 전부 적는다. 각 질문에 대해 「명세 어디에 적었어야 했나」를 표시한다. **이 목록이 다음 명세의 품질을 결정한다.**
3. **명세 갱신** — 2번의 결과를 명세 파일에 반영한다. 명세는 구현 후에도 살아 있는 문서다.
4. **큰 기능 쪼개기 연습** — 담당 프로젝트에서 한 번에 못 만들 크기의 기능 하나를 골라, 4-C 구조(마스터 명세 1개 + 단계 명세 2~3개)로 쪼갠다. 구현은 [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)에서 한다.
5. **이탈 로그** — 4-E의 신호 중 실제로 겪은 것을 기록한다. 어느 신호가 자주 나오는지가 자기 명세의 약점이다.

## 다음 단계

→ [05 Phase 5 - 검증 — 리뷰·테스트·감사](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)
