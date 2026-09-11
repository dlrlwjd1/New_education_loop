# Phase 8 — 실제 앱을 배포한다

- 목표: 앞의 일곱 Phase에서 만든 설정 자산을 실제로 써서, URL로 접근 가능한 앱 하나를 끝까지 만든다.
- 분량: 약 20시간 (이 로드맵에서 가장 길다)
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 아이디어를 요구사항으로 정리해 에이전트에 넘긴다
- UI를 만들고 수정을 반복해 원하는 화면을 얻는다
- 상태 관리·폼 검증·에러 처리 같은 **실무 구간**을 처리한다
- 커진 컴포넌트를 리팩터링한다
- 백엔드 서비스(인증·DB·호스팅)를 초기화하고 붙인다
- **실제로 배포해 URL로 접근 가능하게 만든다**
- 시드 데이터를 만들어 테스트한다

> **두 갈래 중 하나를 고른다.** 둘 다 하지 않는다 — 시간이 두 배가 되고 배우는 것은 거의 같다.
>
> | 경로 | 스택 | 분량 | 고를 이유 |
> |---|---|---|---|
> | **A. DevStash** (Coding with AI) | Next.js · Neon · Prisma · Vercel · NextAuth | 길다 (60강+) | **실무에 가깝다.** 인증·업로드·rate limiting·CI까지 간다 |
> | **B. Voyager + Calendar** (Liftoff · Mastering) | Firebase Hosting · Firestore · 익명 인증 / React·TS | 짧다 (20강) | **빠르게 배포까지 간다.** 병렬 오케스트레이션이 붙어 있다 |
>
> 실제로 담당하는 프로젝트가 있으면 **그 프로젝트로 하고 아래 강의는 참조만 한다.** 그게 최선이다.

## 8-A. 경로 A — DevStash (Next.js 풀스택)

메인: Coding with AI, module 5 (프로젝트 착수와 UI)

- [ ] [02 Bootstrapping the Next.js Project.md](../../courses/udemy/Coding%20with%20AI/module%205/02%20Bootstrapping%20the%20Next.js%20Project.md) — 대화정리본 있음
- [ ] [06 Setting Up Git Repository.md](../../courses/udemy/Coding%20with%20AI/module%205/06%20Setting%20Up%20Git%20Repository.md) — **git이 안전망이다.** 대화정리본 있음
- [ ] [08 Claude Code VS Code Extension.md](../../courses/udemy/Coding%20with%20AI/module%205/08%20Claude%20Code%20VS%20Code%20Extension.md)
- [ ] [09 Creating Mock Data.md](../../courses/udemy/Coding%20with%20AI/module%205/09%20Creating%20Mock%20Data.md)
- [ ] [10 Dashboard UI Phase 1 — Shell and Top Bar.md](../../courses/udemy/Coding%20with%20AI/module%205/10%20Dashboard%20UI%20Phase%201%20—%20Shell%20and%20Top%20Bar.md)
- [ ] [11 Dashboard UI Phase 2 — Sidebar.md](../../courses/udemy/Coding%20with%20AI/module%205/11%20Dashboard%20UI%20Phase%202%20—%20Sidebar.md)
- [ ] [12 Dashboard UI Phase 3 — Main Content.md](../../courses/udemy/Coding%20with%20AI/module%205/12%20Dashboard%20UI%20Phase%203%20—%20Main%20Content.md)
- [ ] [07 Prototyping the Dashboard UI with V0.md](../../courses/udemy/Coding%20with%20AI/module%205/07%20Prototyping%20the%20Dashboard%20UI%20with%20V0.md) — 도구 특정. 선택. 대화정리본 있음

데이터베이스 (module 6)

- [ ] [01 Setting Up Neon Database.md](../../courses/udemy/Coding%20with%20AI/module%206/01%20Setting%20Up%20Neon%20Database.md)
- [ ] [02 Setting Up Prisma ORM.md](../../courses/udemy/Coding%20with%20AI/module%206/02%20Setting%20Up%20Prisma%20ORM.md)
- [ ] [03 Running Initial Migration and Testing Database.md](../../courses/udemy/Coding%20with%20AI/module%206/03%20Running%20Initial%20Migration%20and%20Testing%20Database.md)
- [ ] [04 Seeding Demo Data.md](../../courses/udemy/Coding%20with%20AI/module%206/04%20Seeding%20Demo%20Data.md)
- [ ] [05 Replacing Dashboard Collections with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/05%20Replacing%20Dashboard%20Collections%20with%20Database%20Data.md)
- [ ] [06 Replacing Dashboard Items with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/06%20Replacing%20Dashboard%20Items%20with%20Database%20Data.md)
- [ ] [07 Replacing Stats and Sidebar with Database Data.md](../../courses/udemy/Coding%20with%20AI/module%206/07%20Replacing%20Stats%20and%20Sidebar%20with%20Database%20Data.md)

배포 (module 7의 앞 2강 — 나머지는 [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)에서 봤다)

- [ ] [01 CI-CD, Migrations, and Database Drift.md](../../courses/udemy/Coding%20with%20AI/module%207/01%20CI-CD,%20Migrations,%20and%20Database%20Drift.md) — **[Phase 9](09%20Phase%209%20-%20자동화한다.md)의 전제**
- [ ] [02 Deploying to Vercel.md](../../courses/udemy/Coding%20with%20AI/module%207/02%20Deploying%20to%20Vercel.md) — **여기서 URL이 나온다**

인증 (module 8 — [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md)와 겹치는 강의는 양쪽에 체크)

- [ ] [01 Authentication Phase 1 — NextAuth and GitHub OAuth.md](../../courses/udemy/Coding%20with%20AI/module%208/01%20Authentication%20Phase%201%20—%20NextAuth%20and%20GitHub%20OAuth.md)
- [ ] [02 Authentication Phase 2 — Credentials Provider.md](../../courses/udemy/Coding%20with%20AI/module%208/02%20Authentication%20Phase%202%20—%20Credentials%20Provider.md)
- [ ] [03 Authentication Phase 3 — Auth UI and Sign Out.md](../../courses/udemy/Coding%20with%20AI/module%208/03%20Authentication%20Phase%203%20—%20Auth%20UI%20and%20Sign%20Out.md)
- [ ] [05 Email Verification with Resend.md](../../courses/udemy/Coding%20with%20AI/module%208/05%20Email%20Verification%20with%20Resend.md)
- [ ] [06 Development Email Verification Toggle.md](../../courses/udemy/Coding%20with%20AI/module%208/06%20Development%20Email%20Verification%20Toggle.md)
- [ ] [07 Forgot Password Flow.md](../../courses/udemy/Coding%20with%20AI/module%208/07%20Forgot%20Password%20Flow.md)
- [ ] [08 Profile Page and Account Actions.md](../../courses/udemy/Coding%20with%20AI/module%208/08%20Profile%20Page%20and%20Account%20Actions.md)
- [ ] [12 Fixing GitHub OAuth Redirect.md](../../courses/udemy/Coding%20with%20AI/module%208/12%20Fixing%20GitHub%20OAuth%20Redirect.md)

기능 구현 (module 9 — 테스트 강의는 [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)에서 봤다)

- [ ] [01 Research Skill and Project Documentation.md](../../courses/udemy/Coding%20with%20AI/module%209/01%20Research%20Skill%20and%20Project%20Documentation.md) — **스킬을 실제 기능에 쓴다**
- [ ] [02 Item List View and Card Border Fix.md](../../courses/udemy/Coding%20with%20AI/module%209/02%20Item%20List%20View%20and%20Card%20Border%20Fix.md)
- [ ] [04 Item Detail Drawer.md](../../courses/udemy/Coding%20with%20AI/module%209/04%20Item%20Detail%20Drawer.md)
- [ ] [05 Editing Items Inline in the Drawer.md](../../courses/udemy/Coding%20with%20AI/module%209/05%20Editing%20Items%20Inline%20in%20the%20Drawer.md)
- [ ] [06 Deleting Items.md](../../courses/udemy/Coding%20with%20AI/module%209/06%20Deleting%20Items.md)
- [ ] [07 Creating Items.md](../../courses/udemy/Coding%20with%20AI/module%209/07%20Creating%20Items.md)
- [ ] [09 Code Editor for Snippets and Commands.md](../../courses/udemy/Coding%20with%20AI/module%209/09%20Code%20Editor%20for%20Snippets%20and%20Commands.md)
- [ ] [10 Markdown Editor for Notes and Prompts.md](../../courses/udemy/Coding%20with%20AI/module%209/10%20Markdown%20Editor%20for%20Notes%20and%20Prompts.md)
- [ ] [11 Setting Up Cloudflare R2 for File Uploads.md](../../courses/udemy/Coding%20with%20AI/module%209/11%20Setting%20Up%20Cloudflare%20R2%20for%20File%20Uploads.md)
- [ ] [12 Implementing File and Image Uploads.md](../../courses/udemy/Coding%20with%20AI/module%209/12%20Implementing%20File%20and%20Image%20Uploads.md)
- [ ] [13 Image Gallery Display.md](../../courses/udemy/Coding%20with%20AI/module%209/13%20Image%20Gallery%20Display.md)
- [ ] [14 File List Display.md](../../courses/udemy/Coding%20with%20AI/module%209/14%20File%20List%20Display.md)

고급 기능 (module 10 — **선택**. 시간이 부족하면 건너뛴다)

- [ ] [01 Creating Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/01%20Creating%20Collections.md)
- [ ] [02 Adding Items to Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/02%20Adding%20Items%20to%20Collections.md)
- [ ] [03 Collection List and Detail Pages.md](../../courses/udemy/Coding%20with%20AI/module%2010/03%20Collection%20List%20and%20Detail%20Pages.md)
- [ ] [04 Editing and Deleting Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/04%20Editing%20and%20Deleting%20Collections.md)
- [ ] [05 Global Fuzzy Search Palette.md](../../courses/udemy/Coding%20with%20AI/module%2010/05%20Global%20Fuzzy%20Search%20Palette.md)
- [ ] [06 Server-Side Pagination.md](../../courses/udemy/Coding%20with%20AI/module%2010/06%20Server-Side%20Pagination.md)

## 8-B. 경로 B — Voyager와 Calendar App (짧은 경로)

메인: Liftoff, Module 3 (Firebase로 배포까지)

- [ ] [01 Initialize a project.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%203%20-%20Enable%20services%20with%20Firebase/01%20Initialize%20a%20project.md)
- [ ] [02 Deploy an app.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%203%20-%20Enable%20services%20with%20Firebase/02%20Deploy%20an%20app.md) — **여기서 URL이 나온다.** 경로 A보다 훨씬 빠르다
- [ ] [03 Finish enabling services.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%203%20-%20Enable%20services%20with%20Firebase/03%20Finish%20enabling%20services.md) — Firestore + 익명 인증

함께 보기: Mastering Antigravity, Module 4의 구현 구간 (계획 구간은 [Phase 3](03%20Phase%203%20-%20과제%20정의와%20계획%20분리.md)에서 봤다)

- [ ] [06 Build Calendar App from the Plan.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/06%20Build%20Calendar%20App%20from%20the%20Plan.md) — **계획에서 구현으로 넘어가는 지점**
- [ ] [07 Apply UI Fixes and Generate Fake Data.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/07%20Apply%20UI%20Fixes%20and%20Generate%20Fake%20Data.md)
- [ ] [08 Event Create Edit and Delete.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/08%20Event%20Create%20Edit%20and%20Delete.md)
- [ ] [09 Form Validation and Error Handling.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/09%20Form%20Validation%20and%20Error%20Handling.md) — ⭐ **와이어프레임 로드맵 Phase 7도 이 강의를 쓴다.** 양쪽에 체크

## 8-C. 앞 Phase의 자산을 실제로 쓴다

**이 Phase의 진짜 목적은 앱이 아니라 자산 검증이다.** 아래를 의식적으로 확인한다.

| 확인할 것 | 어느 Phase의 자산인가 |
|---|---|
| 규칙 파일이 실제로 반복 지시를 없앴나 | [Phase 2](02%20Phase%202%20-%20컨텍스트를%20운용한다.md) |
| 계획 승인 게이트를 실제로 거쳤나 | [Phase 3](03%20Phase%203%20-%20과제%20정의와%20계획%20분리.md) |
| 만든 스킬이 실제로 불렸나 | [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md) |
| 훅이 실제로 뭔가를 막았나 | [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)·[Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md) |
| 검증 게이트가 실제로 통과를 막은 적이 있나 | [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md) |
| 시크릿이 에이전트 컨텍스트에 들어간 적 없나 | [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md) |
| 기능 2개 이상을 병렬로 만들었나 | [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md) |

**한 번도 안 불린 스킬이나 한 번도 안 막은 훅은 지운다.** 쓰이지 않는 설정은 컨텍스트만 먹는 부채다.

## 산출물

1. **URL로 접근 가능한 앱 1개** — 남에게 링크를 보낼 수 있어야 한다
2. **자산 검증표** — 위 8-C 표를 채운 것. 안 쓰인 자산은 지웠다는 기록 포함
3. **병렬로 만든 기능 최소 2건** — [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)의 규율을 실제 프로젝트에 적용한 흔적

## 다음 단계

→ [09 Phase 9 - 자동화한다](09%20Phase%209%20-%20자동화한다.md)
