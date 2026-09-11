# Phase 3 — 기능 명세 작성

- 목표: **무엇을 어디까지 적어야 에이전트가 제대로 만드는지**를 손으로 익힌다. 기능 하나의 명세를 실제로 완성한다.
- 분량: 약 6~7시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 기능 명세에 들어갈 항목을 빠짐없이 채울 수 있다 (개요·요구사항·범위 밖·검증 기준·참고).
- 「구현 방법을 지시하는 것」과 「결과를 규정하는 것」을 구분해 쓸 수 있다.
- 검증 가능한 요구사항과 검증 불가능한 요구사항을 구별할 수 있다.
- 큰 기능을 명세 여러 개(phase)로 쪼갤 수 있다.
- 명세에 스크린샷·기존 코드 위치 같은 **참조**를 붙여 모호함을 줄일 수 있다.
- BDD/Gherkin 형식이 명세와 어떤 관계인지 설명할 수 있다.

> **핵심 감각 하나**: 명세는 「에이전트가 물어볼 질문을 미리 답해 둔 문서」다. 명세를 넘겼을 때 에이전트가 되묻는 항목이 곧 명세의 구멍이다. Phase 4에서 되묻는 질문을 기록해 두면 다음 명세가 좋아진다.

## 3-A. 명세 작성 — 개념

메인: Spec-Driven Development (복습)

- [ ] [06 Feature Specification.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification.md) — **기능 브랜치 · 명세 대화 · 계획/요구사항/검증** 세 축. 이 강의를 다시 보며 아래 3-B의 실물 명세와 대조한다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 3-B. 명세 작성 — 실전 (DevStash)

메인: Coding with AI, module 5 (뒷부분)

- [ ] [07 Prototyping the Dashboard UI with V0.md](../../courses/udemy/Coding%20with%20AI/module%205/07%20Prototyping%20the%20Dashboard%20UI%20with%20V0.md) — **프로토타입을 먼저 만들고 그 결과를 명세의 근거로 쓴다.** [부록 11](11%20%EB%B6%80%EB%A1%9D%20-%20%EB%B0%98%EB%A1%A0%EA%B3%BC%20%ED%95%9C%EA%B3%84.md)의 「명세 대신 프로토타입」 논의와 직접 이어지는 지점 ([대화정리](../../courses/udemy/Coding%20with%20AI/module%205/07%20Prototyping%20the%20Dashboard%20UI%20with%20V0%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [08 Claude Code VS Code Extension.md](../../courses/udemy/Coding%20with%20AI/module%205/08%20Claude%20Code%20VS%20Code%20Extension.md)
- [ ] [09 Creating Mock Data.md](../../courses/udemy/Coding%20with%20AI/module%205/09%20Creating%20Mock%20Data.md) — **목업 데이터** — 실제 데이터 연결 전에 UI 명세를 검증하는 장치
- [ ] [10 Dashboard UI Phase 1 — Shell and Top Bar.md](../../courses/udemy/Coding%20with%20AI/module%205/10%20Dashboard%20UI%20Phase%201%20%E2%80%94%20Shell%20and%20Top%20Bar.md) — **대시보드 Phase 1** — 큰 기능을 3개 명세로 쪼갠 첫 조각
- [ ] [11 Dashboard UI Phase 2 — Sidebar.md](../../courses/udemy/Coding%20with%20AI/module%205/11%20Dashboard%20UI%20Phase%202%20%E2%80%94%20Sidebar.md) — Phase 2
- [ ] [12 Dashboard UI Phase 3 — Main Content.md](../../courses/udemy/Coding%20with%20AI/module%205/12%20Dashboard%20UI%20Phase%203%20%E2%80%94%20Main%20Content.md) — Phase 3 — **쪼개는 기준이 무엇인지**를 세 강의를 나란히 놓고 본다

### 실물 확인 — 이 강의가 만들어 낸 명세 파일

강의를 보면서 **동시에** 아래 파일을 연다. 강의는 「어떻게 생각했는지」를, 파일은 「결과가 어떤 모양인지」를 보여 준다.

- [`module 5/specs/dashboard-phase-1-spec.md`](../../courses/udemy/Coding%20with%20AI/module%205/specs/dashboard-phase-1-spec.md)
- [`module 5/specs/dashboard-phase-2-spec.md`](../../courses/udemy/Coding%20with%20AI/module%205/specs/dashboard-phase-2-spec.md)
- [`module 5/specs/dashboard-phase-3-spec.md`](../../courses/udemy/Coding%20with%20AI/module%205/specs/dashboard-phase-3-spec.md)

> 명세 35개 전체 목록과 유형별 분류는 [10 부록](10%20%EB%B6%80%EB%A1%9D%20-%20%EB%AA%85%EC%84%B8%20%ED%85%9C%ED%94%8C%EB%A6%BF%EA%B3%BC%20%EC%8B%A4%EB%AC%BC%20%EC%98%88%EC%8B%9C.md)에 있다.

## 3-C. 명세의 표준 구조

DevStash의 명세 35개에서 반복되는 구조다. 자기 명세의 템플릿으로 그대로 쓴다.

| 섹션 | 무엇을 적나 | 빠지면 생기는 일 |
|---|---|---|
| **Overview** | 이 기능이 무엇이고 왜 필요한가. 2~4문장 | 에이전트가 인접 기능까지 건드린다 |
| **Requirements** | 결과가 만족해야 할 조건. 불릿 목록 | 구현이 제각각으로 나온다 |
| **범위 밖 (명시)** | 이번에 **하지 않을** 것 | 범위가 새서 리뷰가 불가능해진다 |
| **Data / Implementation** | 데이터 흐름, 파일 위치, 기존 코드와의 접점 | 에이전트가 새 패턴을 발명한다 |
| **New / Modified Files** | 건드릴 파일 목록 | 리뷰할 범위를 모른다 |
| **Testing / Validation** | 무엇이 되면 「완료」인가 | 완료 판단이 감으로 간다 |
| **References** | 스크린샷·기존 구현·외부 문서 | 같은 설명을 여러 번 반복하게 된다 |
| **Notes / Prerequisites** | 선행 조건, 주의 사항 | 순서가 꼬인다 |

> **범위 밖 항목이 가장 자주 빠지고 가장 값싸다.** 「이번에는 검색 기능은 넣지 않는다」 한 줄이 리뷰 시간을 크게 줄인다.

## 3-D. 요구사항 — 소프트웨어 공학 쪽 기초

메인: IBM Introduction to Software Engineering, Module 1

명세는 새로운 개념이 아니다. 요구사항 공학의 오래된 논의를 에이전트 시대에 옮겨 온 것이다. **짧게 훑고 넘어간다.**

- [ ] [05 Introduction to the SDLC.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/04%20Introduction%20to%20Software%20Engineering/Module%201%20-%20The%20Software%20Development%20Lifecycle/05%20Introduction%20to%20the%20SDLC.md)
- [ ] [06 Phases of the SDLC.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/04%20Introduction%20to%20Software%20Engineering/Module%201%20-%20The%20Software%20Development%20Lifecycle/06%20Phases%20of%20the%20SDLC.md)
- [ ] [07 Building Quality Software.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/04%20Introduction%20to%20Software%20Engineering/Module%201%20-%20The%20Software%20Development%20Lifecycle/07%20Building%20Quality%20Software.md) — 품질 있는 소프트웨어의 조건
- [ ] [08 Requirements.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/04%20Introduction%20to%20Software%20Engineering/Module%201%20-%20The%20Software%20Development%20Lifecycle/08%20Requirements.md) — **요구사항** — 기능 요구사항과 비기능 요구사항의 구분. 3-C의 Requirements 칸에 무엇이 빠졌는지 점검하는 기준
- [ ] [12 Software Documentation.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/04%20Introduction%20to%20Software%20Engineering/Module%201%20-%20The%20Software%20Development%20Lifecycle/12%20Software%20Documentation.md) — **소프트웨어 문서화** — 명세가 결국 문서라는 점. 문서가 낡으면 무엇이 되는가

## 3-E. 검증 가능한 명세 — BDD와 Gherkin

메인: IBM Test and Behavior Driven Development, Module 4

BDD의 Given/When/Then은 **실행 가능한 명세**다. 명세의 「Validation」 칸을 어떻게 쓸지 막힐 때 이 형식을 빌린다.

- [ ] [01 What is Behavior Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/01%20What%20is%20Behavior%20Driven%20Development.md) — BDD의 정의
- [ ] [02 Benefits of BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/02%20Benefits%20of%20BDD.md)
- [ ] [03 BDD Workflow and Gherkin Syntax.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/03%20BDD%20Workflow%20and%20Gherkin%20Syntax.md) — **Given / When / Then** — 상황·행위·결과. 이 세 칸을 채울 수 없으면 요구사항이 아직 모호한 것이다
- [ ] [04 Example of BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%204%20-%20Behavior%20Driven%20Development/04%20Example%20of%20BDD.md) — 예시

- [ ] [05 TDD and BDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%201%20-%20Introduction%20to%20Software%20Testing/05%20TDD%20and%20BDD.md) — TDD와 BDD의 구분 — 명세와의 관계

> **에이전트 시대의 활용법**: Gherkin 파일을 실제로 만들지 않더라도, 요구사항 하나하나를 「Given/When/Then으로 쓸 수 있는가」로 점검하면 모호한 항목이 걸러진다. 실제 테스트로 만드는 것은 [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md)에서 한다.

## 3-F. 명세 점검표

명세를 에이전트에게 넘기기 전에 확인한다.

- [ ] 이 기능이 **왜** 필요한지 한 문장으로 적혀 있다
- [ ] 요구사항이 「결과」로 쓰여 있다 (「이렇게 구현하라」가 아니라 「이렇게 동작해야 한다」)
- [ ] **이번에 하지 않을 것**이 명시돼 있다
- [ ] 각 요구사항을 「됐다/안 됐다」로 판정할 수 있다
- [ ] 건드릴 파일 또는 영역이 적혀 있다
- [ ] 기존 코드의 어느 패턴을 따를지 참조가 있다
- [ ] 완료 판정 기준이 적혀 있다
- [ ] 명세 하나가 **한 번의 리뷰로 읽을 수 있는 크기**다 (아니면 phase로 쪼갠다)

## 산출물 과제

1. **기능 명세 1건 작성** — 담당 프로젝트의 실제 기능 하나로 3-C 구조를 채운다. **아직 구현하지 않는다.** Phase 4에서 이 명세를 넘긴다.
2. **범위 밖 항목 3개** — 이번에 하지 않을 것을 최소 3개 적는다. 적기 어렵다면 기능이 아직 너무 크다는 신호다.
3. **요구사항을 Given/When/Then으로 변환** — 요구사항 중 3개를 3-E 형식으로 다시 써 본다. 변환이 안 되는 항목은 모호한 것이므로 명세를 고친다.
4. **DevStash 명세와 대조** — 자기 명세를 [`item-drawer-spec.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/features/item-drawer-spec.md) 같은 비슷한 규모의 실물과 나란히 놓고, 빠진 섹션을 채운다.
5. **점검표 통과** — 3-F의 8개 항목.

## 다음 단계

→ [04 Phase 4 - 명세에서 구현으로](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)
