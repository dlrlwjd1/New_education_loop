# Prototyping the Dashboard UI with V0 — 대화정리

> 강의 [07 Prototyping the Dashboard UI with V0.md](07%20Prototyping%20the%20Dashboard%20UI%20with%20V0.md) 를 출발점으로, "UI를 먼저 잡는가 → 그럼 UI/UX도 스펙인가"까지 확장한 Q&A 정리본.
> 관련 노트: [05 Feature Workflow and Current Feature — 대화정리](05%20Feature%20Workflow%20and%20Current%20Feature%20—%20대화정리.md)

## 개요
- 이 코스는 실제 기능 구현 전에 **UI(대시보드 레이아웃)부터** 잡고 간다. 단 V0 결과 코드는 버리고 **스크린샷만 context로** 확보한다.
- 2026년 AI-native 현업 동향은 **vibe coding → SDD(Spec-Driven Development) + 컨텍스트 엔지니어링**으로 이동 중이며, 이 코스 방식이 그 초기 형태다.
- 스펙(spec)은 텍스트 요구사항만이 아니다. **UI(어떻게 보이나)와 UX(어떻게 동작·흐르나)도 스펙의 일부**이며, 셋이 합쳐 **멀티모달 스펙(multimodal spec)**을 이룬다.
- 사용자는 UI/UX를 직접 설계하기로 해서 **Figma MCP(design-to-code)는 사용하지 않는다.**

## 내용

### 1. 이 코스는 UI부터 잡는다 (강의 07)
- V0로 dashboard mockup 생성 → **코드는 안 쓰고 screenshot만** `context/screenshots/`에 저장.
- 그 스크린샷을 `project-overview.md`의 design references에 등록 → Claude Code가 UI 구현 시 시각적 기준으로 참조.
- 목적은 "화면 완성"이 아니라 **AI가 겨냥할 시각적 기준(context) 확보**.

실제 DevStash는 UI가 3단계 레이어로 먼저 온다:
```text
① V0 prototype (강의 07)        → 코드 버림, 스크린샷만 context
② Dashboard UI를 실제 feature로  → dashboard-phase-1/2/3, mock data 사용 (module 5)
③ 데이터 연동                    → mock을 실제 DB(Prisma/Neon)로 교체 (module 6)
```
→ "UI 먼저 세우고 데이터는 나중에(mock → real)" 구조. 단 이는 **화면 중심 앱의 선택**이며, 도메인이 복잡하면 schema-first / API-first도 있다.

### 2. AI-native 현업 동향 (2026)
- **바이브 코딩은 이미 주류**: 미국 개발자 92% 매일 AI 사용, 신규 코드 46%가 AI 생성. 그러나 AI 코드의 상당수(9.8~45%)가 보안 취약점 → 반작용으로 체계화.
- **SDD (Spec-Driven Development, 스펙 주도 개발)**: AI에 시키기 전에 구조화된 스펙(목표·제약·인수 조건(acceptance criteria))을 먼저 쓰고, 에이전트가 계획→구현→테스트→검증. 병목이 "코드 생성 속도"에서 **"의도(intent) 포착"**으로 이동.
- **컨텍스트 엔지니어링(Context Engineering)**: AI가 읽는 컨텍스트(`CLAUDE.md`/`AGENTS.md`/`project-overview.md`/스크린샷)를 무엇을·얼마나·어떻게 넣을지 설계. 원칙 = **"가능한 한 적게, 그러나 살아있게(as little as possible, but as alive as possible)"** — 모든 줄이 attention budget 소모.
- **`AGENTS.md`가 업계 표준**: Claude Code·Codex·Cursor·Copilot·Gemini CLI 등이 네이티브 지원(OpenAI·Google·Anthropic 공동 추진).
- **가드레일 필수**: AI를 "주니어 개발자"로 취급, 버전 관리된 instruction file, 파괴적 행동은 확인/로깅, 인증·결제는 수동, 보안 리뷰 필수.

> 두 용어 관계: **SDD = 무엇을 만들지(WHAT)를 스펙으로**, **컨텍스트 엔지니어링 = 그 스펙·규칙을 AI가 잘 읽도록 관리(HOW to feed)**.
> 코스 매핑: `features/*-spec.md` = SDD, `context/` + `CLAUDE.md` = 컨텍스트 엔지니어링.

### 3. UI도 스펙이다 (멀티모달 스펙)
- 2026년 디자인 스펙에는 **주석 달린 비주얼/스크린샷**이 포함된다(간격·글자 크기·인터랙션 라벨링). SDD에서 스크린샷/목업을 넣어 AI에 시각적 컨텍스트를 주는 게 표준.
- 코스가 스크린샷을 `project-overview.md`에 넣은 게 바로 이것. 단 **"참조형(reference)"** 수준 — *"base로 쓰되 exact일 필요 없음."*
- 최전선은 더 정밀화: **Figma MCP(2026)** 가 픽셀 → 레이아웃 관계, hex → 디자인 토큰으로 변환해 전달(design-to-code, 스캐폴딩 시간 50~70%↓).
  - **단, 사용자는 UI/UX를 직접 설계하므로 Figma MCP는 사용하지 않기로 결정.** → 직접 만든 목업/시안을 스크린샷으로 저장·참조하고, 정밀도는 텍스트 주석으로 보완.

### 4. UX도 스펙이다 — 오히려 spec의 "본체"
- **UI 스펙** = 어떻게 보이나(정적·시각, 참조형). **UX 스펙** = 어떻게 동작·흐르나(사용자 흐름·인터랙션·상태·엣지 케이스) → **인수 조건(acceptance criteria)에 가까움.**
- 왜 UX가 AI에게 더 결정적인가: **비주얼은 AI가 어느 정도 추측 가능**하지만, **동작·흐름·엣지 케이스는 명시하지 않으면 AI가 임의로 지어낸다.** (삭제 확인 다이얼로그? 로딩 skeleton? 미인증 시 리다이렉트?)
- 코스 증거: `project-overview.md`의 `## UI/UX Guidelines`(micro-interactions 150–200ms, hover elevation, toast, skeleton, drawer 애니메이션, responsive 표)와 각 `features/*-spec.md`의 인터랙션·상태 서술, `current-feature.md` History의 loading/error/empty state·optimistic update 기록.

### 5. UI vs UX 구분 — "버튼 배치"는?
- **"버튼을 어디 두나"는 엄밀히는 UI(레이아웃).** UI와 UX가 만나는 접점이라 헷갈린다.
- 정확히는: **배치라는 결과물 = UI**, **그 배치를 왜 그렇게 정했나 + 누른 뒤 사용자 여정이 어떻게 흐르나 = UX.**
- 비유: 문손잡이 모양·색 = UI, "밀지 당길지 헷갈리지 않는가" = UX.

## 예시

"New Item 버튼" 하나를 UI/UX로 쪼개기:
```text
UI (스크린샷에 담김)
  - 위치: top bar 우측 / 색·크기·아이콘

UX (글로 적어야 함 = 스펙)
  - 언제 필요? 어느 화면에서든 즉시 추가 → 항상 보이는 top bar
  - 누르면? 모달 → 타입 선택 → 저장 → toast 확인 → 목록 즉시 반영(optimistic)
  - 실패 시? 에러 toast, 입력값 유지
  - 빈 목록? empty state에서도 같은 버튼 노출
```

멀티모달 스펙 구성:
```text
스펙 = 의도를 포착한 모든 것
  ├─ 텍스트/데이터 스펙 : 규칙·모델 (Prisma schema, 제약, 인수 조건)
  ├─ UI 스펙          : 어떻게 보이나 (스크린샷·색·레이아웃, 참조형)
  └─ UX 스펙          : 어떻게 동작·흐르나 (flow·인터랙션·상태·엣지케이스) ← AI에 가장 결정적
```

## 요약
- 이 코스는 **UI부터** 잡되, V0 코드는 버리고 **스크린샷을 참조형 비주얼 스펙**으로 `context/`에 넣는다. UI-first는 화면 중심 앱의 선택.
- 2026 AI-native 동향 = **vibe coding → SDD + 컨텍스트 엔지니어링**. 코스의 `spec 파일` + `context/`·`CLAUDE.md`가 그 교과서적 축소판.
- **UI도 UX도 스펙이다.** UI = 어떻게 보이나(참조형), UX = 어떻게 동작·흐르나(인수 조건형) → 셋이 합쳐 멀티모달 스펙.
- **UX가 AI에게 더 중요**하다: 비주얼은 추측 가능하지만 흐름·상태·엣지 케이스는 명시하지 않으면 AI가 임의로 정한다.
- "버튼 배치"는 UI, 그 근거와 결과 흐름이 UX. 직접 설계 시 **스크린샷(UI) + 흐름 서술(UX)을 함께** spec에 적어야 한다.
- 사용자 결정: **Figma MCP 미사용** — 직접 설계 + 스크린샷·텍스트 주석으로 대체.

## 참고 자료 (웹서치, 2026)
- [Spec-Driven Development — Microsoft for Developers](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering)
- [From Vibe Coding to Spec-Driven Development — Towards Data Science](https://towardsdatascience.com/from-vibe-coding-to-spec-driven-development/)
- [Agentic Engineering: Beyond Vibe Coding (2026) — NxCode](https://www.nxcode.io/resources/news/agentic-engineering-complete-guide-vibe-coding-ai-agents-2026)
- [How to Build Your AGENTS.md (2026) — Augment Code](https://www.augmentcode.com/guides/how-to-build-agents-md)
- [Design Specifications Explained for UI/UX — UXPilot](https://uxpilot.ai/blogs/design-specifications)
- [Agents, Meet the Figma Canvas — Figma Blog](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/)
- [Figma MCP Server Guide 2026 — RockB](https://baeseokjae.github.io/posts/figma-mcp-design-to-code-2026/)
