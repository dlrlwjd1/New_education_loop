# The Main Project — DevStash

## 개요
- 메인 프로젝트는 **DevStash** — 개발자가 여기저기 흩어놓는 자료를 한 곳에 모으는 **중앙화(centralized)** 앱.
- 프로젝트는 첫 몇 개 섹션(무엇이 AI인가, AI 코딩 지원 수준, 프로토타이핑, 좋은 프롬프트 작성 등)을 지나야 본격 시작.
- 다시 강조: **결과물이 강사와 똑같을 필요 없다** — 같은 앱의 "나만의 버전"을 만드는 것.

## 내용

### DevStash가 푸는 문제
개발자의 자료가 사방에 흩어져 있음:
- 코드 스니펫(code snippets) → 에디터, 여러 파일
- AI 프롬프트 → AI 도구, 텍스트 파일
- 커맨드(commands) → 터미널
- 링크 → 북마크
- 노트 → 노트 앱

→ 이 모든 것을 **한 곳에 모으고**, 아이템 타입별 **색상 코딩(color-coded)** 으로 빠르게 찾을 수 있게 함.

### 기술 스택(Tech Stack)
| 영역 | 도구 | 비고 |
|------|------|------|
| 프레임워크 | **Next.js 16 + React 19** | 버전은 시청 시점에 따라 다를 수 있음 |
| 언어 | **TypeScript** | 요즘은 사실상 기본값, 항상 권장 |
| 데이터베이스 | **Neon Postgres** | 서버리스(serverless) Postgres, 넉넉한 무료 티어, **브랜칭(branching)** 지원 (dev/production 브랜치 분리) |
| ORM | **Prisma** | 데이터 모델 정의 → 마이그레이션(migration)으로 테이블 생성 → Prisma Client로 쿼리 (raw SQL 불필요) |
| 파일 스토리지 | **Cloudflare R2** | 파일·이미지 저장, Amazon S3 SDK 호환 |
| UI | **Tailwind v4 + shadcn/ui** | shadcn/ui = 재사용 컴포넌트 라이브러리 |
| 인증 | **NextAuth** | 이메일/비밀번호 + GitHub 로그인 |
| 배포 | **Vercel** | GitHub push → 자동 배포(continuous deployment) |
| 이메일 | **Resend** | 이메일 인증(verification) |
| 레이트 리밋 | **Redis + Upstash** | 로그인 브루트포스 방지 (3회 실패 시 타임아웃) |
| AI 모델(예) | **GPT-5 nano** | 프롬프트 옵티마이저 등에 사용, 교체 가능 |

### 핵심 개념: Collections & Items
- **Item(아이템)**: 기본 리소스. 타입 = 스니펫 / 프롬프트 / 커맨드 / 노트 / 파일 / 이미지 / 링크.
  - 파일·이미지는 **Pro 전용**.
  - 타입별 아이콘 색상 = 아이템 테두리 색상 (예: 파랑=스니펫, 주황=커맨드, 초록=링크).
- **Collection(컬렉션)**: 아이템들의 묶음.
  - 컬렉션 색상 = 가장 많이 포함된 아이템 타입의 색 (예: 링크가 최다면 초록).
- 즐겨찾기(favorite)·핀(pin) 기능은 아이템·컬렉션 모두 지원.

### 주요 UI/UX
- 아이템은 **드로어(drawer)** 로 빠르게 열림 (페이지 이동 없음).
- **검색 팔레트(search palette)**: **퍼지 검색(fuzzy search)** — 정확히 안 쳐도 됨. 결과 클릭 시 즉시 열림.
- 스니펫/커맨드 → **코드 에디터**(문법 하이라이팅, 언어 선택 가능).
- 프롬프트/노트 → **마크다운 에디터**.
- 설정에서 에디터 커스터마이징(테마, 폰트 크기 등) 가능.

### AI 기능 4가지
1. **Auto tagging** — 콘텐츠 보고 태그 제안 (초록 체크=수락 / 빨강 X=거부).
2. **AI 요약(summaries)** — 긴 스니펫용 자동 설명/요약(describe).
3. **Explain this code** — AI가 코드 설명, 새 탭에서 열림.
4. **Prompt optimizer** — 프롬프트를 AI가 더 나은 표현으로 재작성 ("use this" 버튼으로 선택 적용).

### SaaS / 결제
- 전체 **SaaS** — **Stripe** 결제 구현.
- **Free**: 아이템 50개, 컬렉션 3개, 기본 아이템 타입, 기본 검색.
- **Pro**: 파일·이미지 업로드 + AI 기능.
- 설정에서 플랜 확인, 계정 삭제(이메일 계정은 비밀번호 변경도), 사용 통계 프로필 제공.

### 코드베이스 특징
- landing page(홈페이지)는 뒤에서 작업 — 먼저 **대시보드**부터.
- 규모가 큰 앱: 수많은 컴포넌트/폴더, lib 파일. repo 제공(단, 따라 하면 코드가 완전히 같지는 않음).
- 강사가 AI가 하는 모든 작업을 **내레이션**해 아키텍처에 익숙해지게 함.
- **약 200개 유닛 테스트(unit tests)** 작성 — AI 없이는 시간이 너무 걸려 안 했을 작업도 AI 덕에 수행.

## 요약
- **DevStash** = 흩어진 개발 자료(스니펫·프롬프트·커맨드·노트·파일·링크)를 한 곳에 모으는 색상 코딩 앱.
- 스택: Next.js 16/React 19 · TypeScript · Neon Postgres · Prisma · Cloudflare R2 · Tailwind v4 + shadcn/ui · NextAuth · Vercel · Resend · Redis(Upstash) · Stripe.
- 핵심 개념 = **Collections & Items**, 타입별 색상 코딩, 드로어 UI, 퍼지 검색.
- AI 기능 4종(auto tagging / 요약 / explain code / prompt optimizer)과 Free·Pro SaaS 모델.
- 목표는 강사 결과물 복제가 아니라 **같은 앱의 나만의 버전** 완성.
