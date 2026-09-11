# Coding with AI

- **플랫폼**: Udemy
- **링크**: https://www.udemy.com/course/coding-with-ai

## 개요
AI로 바뀌는 소프트웨어 개발 환경에 적응하기 위한 코스. 문법(syntax)이 아니라 AI와 협업하는 **반복 가능한 워크플로**에 초점을 둔다. 바이브 코딩(vibe coding)을 피하고 개발자가 프로젝트의 아키텍트 자리를 유지하도록, 컨텍스트·커스텀 커맨드·서브에이전트·테스트·리뷰를 활용한다. 메인 프로젝트는 DevStash(Next.js/React)이며 주로 Claude Code를 사용한다.

## 선행 지식 (이미 아는 내용)
- **module 1~4는 이미 알고 있는 내용**이다. (코스 소개, AI 기초, 프로토타이핑, Claude Code 시작)
- 새로 학습할 필요가 없으므로 module 5부터 본격적으로 진행한다.

## 예시 프로젝트 (완성본)
- **DevStash** — 강좌의 메인 프로젝트 완성본. 위치: [devstash-final/](devstash-final/)
- 개발자 지식 허브 앱(스니펫·프롬프트·명령어·노트·파일·이미지·링크 저장 + 컬렉션·검색·AI 기능).
- **스택**: Next.js 16 / React 19 / TypeScript 5 / Prisma 7 + Neon PostgreSQL / NextAuth v5 / Tailwind v4 + shadcn/ui / OpenAI / Stripe / Cloudflare R2 / Upstash / Resend / Vitest
- module 5~10의 강의 노트가 실제로 구현한 결과물을 담고 있어, 공부 시 **정답지(참조 자료)**로 활용한다.
- 핵심 컨텍스트 문서: `CLAUDE.md`, `context/`(project-overview / coding-standards / ai-interaction / current-feature), `docs/`(기능별 설계 문서).

## 코스 구성
<!-- 수강하면서 섹션/모듈 폴더를 추가하고 아래 목록을 갱신한다 -->
- [module 1](module%201/) — 코스 소개
  - [01 Course Introduction](module%201/01%20Course%20Introduction.md)
  - [02 How to Take This Course](module%201/02%20How%20to%20Take%20This%20Course.md)
  - [03 The Main Project — DevStash](module%201/03%20The%20Main%20Project%20—%20DevStash.md)
  - [04 Course Files and Resources](module%201/04%20Course%20Files%20and%20Resources.md)
- [module 2](module%202/) — AI 기초 (AI Fundamentals)
  - [01 What is AI](module%202/01%20What%20is%20AI.md)
  - [02 Levels of AI Assistance](module%202/02%20Levels%20of%20AI%20Assistance.md)
- [module 3](module%203/) — 프로토타이핑 (Prototyping)
  - [01 Why Prototype](module%203/01%20Why%20Prototype.md)
  - [02 How to Prompt — Good vs Bad Prompts](module%203/02%20How%20to%20Prompt%20—%20Good%20vs%20Bad%20Prompts.md)
  - [03 Prompting Practice — Landing Page Assignment](module%203/03%20Prompting%20Practice%20—%20Landing%20Page%20Assignment.md)
  - [04 Prototyping with V0 — Markdown Notes App](module%203/04%20Prototyping%20with%20V0%20—%20Markdown%20Notes%20App.md)
  - [05 Reviewing Generated Code](module%203/05%20Reviewing%20Generated%20Code.md)
  - [06 Iterating on the Prototype](module%203/06%20Iterating%20on%20the%20Prototype.md)
  - [07 Prototyping vs Production — Technical Debt](module%203/07%20Prototyping%20vs%20Production%20—%20Technical%20Debt.md)
- [module 4](module%204/) — Claude Code 시작 (Claude Code Basics)
  - [01 Getting Started with Claude Code](module%204/01%20Getting%20Started%20with%20Claude%20Code.md)
  - [02 Plan Mode](module%204/02%20Plan%20Mode.md)
  - [03 Slash Commands, Config, and Settings](module%204/03%20Slash%20Commands,%20Config,%20and%20Settings.md)
  - [04 Context and Tokens](module%204/04%20Context%20and%20Tokens.md)
  - [05 Managing Context in Claude Code](module%204/05%20Managing%20Context%20in%20Claude%20Code.md)
  - [06 Persistent Memory Update](module%204/06%20Persistent%20Memory%20Update.md)
- [module 5](module%205/) — DevStash 빌드: 계획, 부트스트랩 & 대시보드 UI
  - [01 Planning the Project — Project Spec](module%205/01%20Planning%20the%20Project%20—%20Project%20Spec.md)
  - [02 Bootstrapping the Next.js Project](module%205/02%20Bootstrapping%20the%20Next.js%20Project.md)
  - [03 CLAUDE.md and Project Context](module%205/03%20CLAUDE.md%20and%20Project%20Context.md)
  - [04 Coding Standards and AI Interaction Rules](module%205/04%20Coding%20Standards%20and%20AI%20Interaction%20Rules.md)
  - [05 Feature Workflow and Current Feature](module%205/05%20Feature%20Workflow%20and%20Current%20Feature.md)
  - [06 Setting Up Git Repository](module%205/06%20Setting%20Up%20Git%20Repository.md)
  - [07 Prototyping the Dashboard UI with V0](module%205/07%20Prototyping%20the%20Dashboard%20UI%20with%20V0.md)
  - [08 Claude Code VS Code Extension](module%205/08%20Claude%20Code%20VS%20Code%20Extension.md)
  - [09 Creating Mock Data](module%205/09%20Creating%20Mock%20Data.md)
  - [10 Dashboard UI Phase 1 — Shell and Top Bar](module%205/10%20Dashboard%20UI%20Phase%201%20—%20Shell%20and%20Top%20Bar.md)
  - [11 Dashboard UI Phase 2 — Sidebar](module%205/11%20Dashboard%20UI%20Phase%202%20—%20Sidebar.md)
  - [12 Dashboard UI Phase 3 — Main Content](module%205/12%20Dashboard%20UI%20Phase%203%20—%20Main%20Content.md)
- [module 6](module%206/) — DevStash 빌드: 데이터베이스 & Prisma
  - [01 Setting Up Neon Database](module%206/01%20Setting%20Up%20Neon%20Database.md)
  - [02 Setting Up Prisma ORM](module%206/02%20Setting%20Up%20Prisma%20ORM.md)
  - [03 Running Initial Migration and Testing Database](module%206/03%20Running%20Initial%20Migration%20and%20Testing%20Database.md)
  - [04 Seeding Demo Data](module%206/04%20Seeding%20Demo%20Data.md)
  - [05 Replacing Dashboard Collections with Database Data](module%206/05%20Replacing%20Dashboard%20Collections%20with%20Database%20Data.md)
  - [06 Replacing Dashboard Items with Database Data](module%206/06%20Replacing%20Dashboard%20Items%20with%20Database%20Data.md)
  - [07 Replacing Stats and Sidebar with Database Data](module%206/07%20Replacing%20Stats%20and%20Sidebar%20with%20Database%20Data.md)
- [module 7](module%207/) — DevStash 배포 & 운영
  - [01 CI/CD, Migrations, and Database Drift](module%207/01%20CI-CD,%20Migrations,%20and%20Database%20Drift.md)
  - [02 Deploying to Vercel](module%207/02%20Deploying%20to%20Vercel.md)
  - [03 Custom Slash Commands and Skills](module%207/03%20Custom%20Slash%20Commands%20and%20Skills.md)
  - [04 Designing the Feature Skill Workflow](module%207/04%20Designing%20the%20Feature%20Skill%20Workflow.md)
  - [05 Implementing the Feature Skill](module%207/05%20Implementing%20the%20Feature%20Skill.md)
  - [06 Testing the Feature Skill](module%207/06%20Testing%20the%20Feature%20Skill.md)
  - [07 Cleanup Skill](module%207/07%20Cleanup%20Skill.md)
  - [08 Introduction to Sub-Agents](module%207/08%20Introduction%20to%20Sub-Agents.md)
  - [09 Creating a Code Scanner Sub-Agent](module%207/09%20Creating%20a%20Code%20Scanner%20Sub-Agent.md)
  - [10 Running the Code Scanner Sub-Agent](module%207/10%20Running%20the%20Code%20Scanner%20Sub-Agent.md)
  - [11 Introduction to MCP](module%207/11%20Introduction%20to%20MCP.md)
  - [12 Installing the Neon MCP Server](module%207/12%20Installing%20the%20Neon%20MCP%20Server.md)
  - [13 Installing Context7 MCP](module%207/13%20Installing%20Context7%20MCP.md)
  - [14 Installing Playwright MCP](module%207/14%20Installing%20Playwright%20MCP.md)
- [module 8](module%208/) — DevStash 인증 (Authentication)
  - [01 Authentication Phase 1 — NextAuth and GitHub OAuth](module%208/01%20Authentication%20Phase%201%20—%20NextAuth%20and%20GitHub%20OAuth.md)
  - [02 Authentication Phase 2 — Credentials Provider](module%208/02%20Authentication%20Phase%202%20—%20Credentials%20Provider.md)
  - [03 Authentication Phase 3 — Auth UI and Sign Out](module%208/03%20Authentication%20Phase%203%20—%20Auth%20UI%20and%20Sign%20Out.md)
  - [04 Production GitHub OAuth and Vercel Env Vars](module%208/04%20Production%20GitHub%20OAuth%20and%20Vercel%20Env%20Vars.md)
  - [05 Email Verification with Resend](module%208/05%20Email%20Verification%20with%20Resend.md)
  - [06 Development Email Verification Toggle](module%208/06%20Development%20Email%20Verification%20Toggle.md)
  - [07 Forgot Password Flow](module%208/07%20Forgot%20Password%20Flow.md)
  - [08 Profile Page and Account Actions](module%208/08%20Profile%20Page%20and%20Account%20Actions.md)
  - [09 Authentication Audit and Cleanup](module%208/09%20Authentication%20Audit%20and%20Cleanup.md)
  - [10 Setting Up Upstash for Rate Limiting](module%208/10%20Setting%20Up%20Upstash%20for%20Rate%20Limiting.md)
  - [11 Implementing Rate Limiting](module%208/11%20Implementing%20Rate%20Limiting.md)
  - [12 Fixing GitHub OAuth Redirect](module%208/12%20Fixing%20GitHub%20OAuth%20Redirect.md)
- [module 9](module%209/) — DevStash CRUD & Testing
  - [01 Research Skill and Project Documentation](module%209/01%20Research%20Skill%20and%20Project%20Documentation.md)
  - [02 Item List View and Card Border Fix](module%209/02%20Item%20List%20View%20and%20Card%20Border%20Fix.md)
  - [03 Adding Vitest to the Feature Workflow](module%209/03%20Adding%20Vitest%20to%20the%20Feature%20Workflow.md)
  - [04 Item Detail Drawer](module%209/04%20Item%20Detail%20Drawer.md)
  - [05 Editing Items Inline in the Drawer](module%209/05%20Editing%20Items%20Inline%20in%20the%20Drawer.md)
  - [06 Deleting Items](module%209/06%20Deleting%20Items.md)
  - [07 Creating Items](module%209/07%20Creating%20Items.md)
  - [08 Testing CRUD with Playwright MCP](module%209/08%20Testing%20CRUD%20with%20Playwright%20MCP.md)
  - [09 Code Editor for Snippets and Commands](module%209/09%20Code%20Editor%20for%20Snippets%20and%20Commands.md)
  - [10 Markdown Editor for Notes and Prompts](module%209/10%20Markdown%20Editor%20for%20Notes%20and%20Prompts.md)
  - [11 Setting Up Cloudflare R2 for File Uploads](module%209/11%20Setting%20Up%20Cloudflare%20R2%20for%20File%20Uploads.md)
  - [12 Implementing File and Image Uploads](module%209/12%20Implementing%20File%20and%20Image%20Uploads.md)
  - [13 Image Gallery Display](module%209/13%20Image%20Gallery%20Display.md)
  - [14 File List Display](module%209/14%20File%20List%20Display.md)
  - [15 Item Cleanup, Audit Fixes, and Refactoring](module%209/15%20Item%20Cleanup,%20Audit%20Fixes,%20and%20Refactoring.md)
- [module 10](module%2010/) — DevStash Collections
  - [01 Creating Collections](module%2010/01%20Creating%20Collections.md)
  - [02 Adding Items to Collections](module%2010/02%20Adding%20Items%20to%20Collections.md)
  - [03 Collection List and Detail Pages](module%2010/03%20Collection%20List%20and%20Detail%20Pages.md)
  - [04 Editing and Deleting Collections](module%2010/04%20Editing%20and%20Deleting%20Collections.md)
  - [05 Global Fuzzy Search Palette](module%2010/05%20Global%20Fuzzy%20Search%20Palette.md)
  - [06 Server-Side Pagination](module%2010/06%20Server-Side%20Pagination.md)

## 진행 현황
- [x] module 1 — 01 Course Introduction, 02 How to Take This Course, 03 The Main Project (DevStash), 04 Course Files and Resources
- [x] module 2 — 01 What is AI, 02 Levels of AI Assistance
- [x] module 3 — 01 Why Prototype, 02 How to Prompt, 03 Prompting Practice, 04 Prototyping with V0, 05 Reviewing Generated Code, 06 Iterating on the Prototype, 07 Prototyping vs Production
- [x] module 4 — 01 Getting Started with Claude Code, 02 Plan Mode, 03 Slash Commands, Config, and Settings, 04 Context and Tokens, 05 Managing Context in Claude Code, 06 Persistent Memory Update (이미 아는 내용)
- [x] module 5 — 01 Planning the Project through 12 Dashboard UI Phase 3 (Main Content)
- [x] module 6 — 01 Setting Up Neon Database through 07 Replacing Stats and Sidebar with Database Data
- [x] module 7 — 01 CI/CD, Migrations, and Database Drift through 14 Installing Playwright MCP
- [x] module 8 — 01 Authentication Phase 1 through 12 Fixing GitHub OAuth Redirect
- [x] module 9 — 01 Research Skill and Project Documentation through 15 Item Cleanup, Audit Fixes, and Refactoring
- [x] module 10 — 01 Creating Collections through 06 Server-Side Pagination
