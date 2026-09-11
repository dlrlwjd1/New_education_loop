# Planning the Project — Project Spec

## 개요
- DevStash의 **진짜 작업** 시작. 바이브 코딩과 달리 "이거 만들어줘"가 아니라 **신중히 설계·문서화**한다.
- AI로 코딩할 땐 코드를 거의 안 쓰므로, 그 공백을 **엄격한 워크플로 + 계획 + 문서화**로 메워 **통제와 컨텍스트를 유지**.
- AI 이전엔 코드를 짜니 항상 뭐가 돌아가는지 알았지만, 이제는 **아키텍트로서 다른 방식으로** 파악해야 기술 부채를 안 쌓는다. → **계획이 매우 중요**.

## 내용

### 프로젝트 계획 체크리스트 (범용)
AI를 쓰든 안 쓰든 좋은 계획 항목:
1. **Problem(문제)** — 무슨 문제를 푸는가. 혁신적일 필요 없음, 기존 것을 **더 낫게·나답게** 만들어도 OK.
2. **Users(사용자)** — 누구를 위한 것인가.
3. **Features(기능)** — 전부가 아니라 **MVP(최소 기능 제품)** 에 충분한 만큼.
4. **Data(데이터)** — 저장할 데이터. DB 테이블/컬렉션, 필드까지 구체적으로.
5. **Tech stack** — 언어·프레임워크·라이브러리·API.
6. **Monetization(수익화)** — SaaS 월정액? 광고?
7. **UI/UX** — 룩앤필 + **영감 레퍼런스 예시**.
8. **Documentation** — 이 모든 걸 문서로.

> 💡 이 문서 작성에 **AI를 활용해도 됨**(Claude/ChatGPT에 아이디어·아웃라인 요청). 단 **결정은 내가(아키텍트)**.

### DevStash project spec (리소스 `docs/project-spec.md`)

**Problem**
- 개발자의 자료가 사방에 흩어짐(에디터/Notion/텍스트파일 스니펫, 챗의 AI 프롬프트, 북마크 링크, 폴더 문서, 커맨드 등) → 컨텍스트 스위칭·지식 손실·일관성 없는 워크플로·시간 낭비.
- DevStash = 모든 개발 지식·리소스를 위한 **하나의 빠른·검색 가능한·AI 강화 허브**.

**Users**
- 일상 개발자, AI-first 개발자(문서·컨텍스트파일·프롬프트 많음), 콘텐츠 제작자/교육자, 풀스택 빌더(패턴·보일러플레이트·API 예시 수집).

**Features**
- 핵심 = **Items**. 아이템 타입(시스템 타입): snippet, prompt, note, command, **file, image**(업로드 = **Pro 전용**), link.
  - MVP 이후엔 유저 커스텀 타입 가능. 지금은 시스템 타입만.
  - URL 형식: `/item/{type}`. 아이템은 **드로어(drawer)** 로 빠르게 열고 생성(페이지 이동 X).
- **Collections** — 임의 타입 아이템 묶음 (예: "React Patterns"에 스니펫+노트+URL).
- **Search** — 콘텐츠·태그·제목 전반 강력 검색.
- **Auth** — 이메일/비밀번호 + GitHub 로그인(개발자 대상).
- 기타: 컬렉션/아이템 즐겨찾기·핀, 최근 사용, 파일에서 코드 임포트, 마크다운 에디터, 파일 업로드, 데이터 export, 다크모드, 컬렉션 아이템 추가/제거·다중 컬렉션 소속 표시.
- **AI features (Pro 전용)**: 자동 태그 제안, 요약, explain code.

**Data (테이블/컬렉션)**
- `users` — NextAuth 기본 모델 + `isPro`(유료 여부), Stripe `customerId`·`subscriptionId`.
- `items` — 여러 필드. `fileUrl`은 파일에만(R2 사용, 텍스트면 null), favorite, pinned, `itemType`.
  - 아이템 타입은 **시스템 타입**(`isSystem=true`), 각 타입은 **색상·아이콘 매핑**.
- `collections` — 아이템 그룹, 즐겨찾기 가능.
- items↔collections **조인 테이블**, `tags`.
- 💡 이런 DB 구조(테이블/컬럼/SQL vs NoSQL)를 짜려면 **개발자여야 함** — 아니면 유일한 선택지는 바이브 코딩.

**Tech stack**
- **Next.js + React 19** — SSR 페이지 + 동적 컴포넌트, API 라우트(백엔드), 단일 코드베이스, **TypeScript**(타입 안전).
- **Postgres on Neon**(클라우드) + **Prisma**(ORM). DB는 완전 클라우드, **dev/production 브랜치 분리**.
- **AI**: GPT-4o mini (저렴·빠름, 단순 작업에 우수).
- **CSS**: Tailwind + shadcn/ui.

**Monetization (Freemium)**
- **Free**: 아이템 50개, 컬렉션 3개, images·files 제외 모든 시스템 타입, 기본 검색, 업로드·AI 없음.
- **Pro**: 전부(무제한 아이템, AI 태깅 등).

**UI/UX**
- 모던·미니멀·개발자 지향, **기본 다크모드**, 깔끔한 타이포. 레퍼런스: **Notion, Linear, Raycast**.
- 코드 블록 **문법 하이라이팅**.
- 레이아웃: 좌측 사이드바 + 우측 메인, 아이템은 **슬라이드 드로어**, **색상 코딩 컬렉션 카드 그리드**(최다 아이템 타입 색·아이콘). 아이콘 라이브러리 사용.
- 반응형, 마이크로 인터랙션, 스켈레톤, 부드러운 트랜지션.

### 다음 순서
- 이제 무엇을 만드는지 알았으니 **프로젝트 부트스트랩** — 강사는 **수동(manually)** 으로 하며 다음 강의에서 설명.

## 요약
- AI 코딩의 공백은 **계획 + 문서화 + 엄격한 워크플로**로 메운다 — 계획이 예전보다 더 중요.
- 계획 체크리스트: **Problem · Users · Features(MVP) · Data · Tech stack · Monetization · UI/UX · Docs**.
- DevStash spec 핵심: 흩어진 자료 → 중앙 허브, **Items(타입별 색·아이콘) + Collections + 검색 + Auth**, Next.js/React19/TS + Neon/Prisma + GPT-4o mini + Tailwind/shadcn, **Freemium**.
- 문서 작성에 AI를 도구로 쓰되 **결정은 아키텍트인 내가**. 다음은 수동 부트스트랩.
