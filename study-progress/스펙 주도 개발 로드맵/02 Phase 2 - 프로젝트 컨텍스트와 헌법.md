# Phase 2 — 프로젝트 컨텍스트와 헌법

- 목표: **명세를 쓰기 전에 명세가 놓일 자리를 만든다.** 에이전트가 매 세션 처음부터 읽는 프로젝트 규칙 문서 세트를 갖춘다.
- 분량: 약 5~6시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 헌법(constitution)에 무엇을 담고 무엇을 담지 않는지 판단할 수 있다.
- `CLAUDE.md` / `AGENTS.md`에 들어갈 것과 별도 문서로 뺄 것을 나눌 수 있다.
- 코딩 표준과 AI 상호작용 규칙을 문서로 고정할 수 있다.
- 「현재 작업 중인 기능」을 에이전트가 알 수 있게 유지하는 구조를 만들 수 있다.
- **코드베이스 구조 자체가 컨텍스트라는 것**을 이해하고, AI가 읽기 어려운 구조를 진단할 수 있다.

> **Phase 1의 복습 과제 5번에 대한 답이 여기 있다.** 명세를 잘 써도 결과가 나쁜 이유의 대부분은 명세 바깥에 있다 — 프로젝트 규칙이 없거나, 있어도 에이전트가 안 읽는 자리에 있거나, 코드베이스가 읽기 어려운 구조라서다.

## 2-A. 헌법 — 프로젝트의 상위 규칙

메인: Spec-Driven Development (복습)

- [ ] [05 Creating the Constitution.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution.md) — **대화로 헌법을 만든다** — 미션·기술 스택·로드맵. 휴먼 인 더 루프. 이 강의를 다시 보며 자기 프로젝트의 헌법을 실제로 쓴다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 2-B. 프로젝트 컨텍스트 문서 세트

메인: Coding with AI, module 5 (앞부분)

**이 묶음이 Phase 2의 중심이다.** SDD 코스의 「헌법」이 실제 파일 구조로 어떻게 떨어지는지 여기서 보인다.

- [ ] [01 Planning the Project — Project Spec.md](../../courses/udemy/Coding%20with%20AI/module%205/01%20Planning%20the%20Project%20%E2%80%94%20Project%20Spec.md) — **프로젝트 명세** — 헌법에 해당하는 최상위 문서를 실제로 쓴다. 8항목 체크리스트(Problem·Users·Features·Data·Tech stack·Monetization·UI/UX·Documentation)를 05강 헌법의 3기둥(미션·기술 스택·로드맵)과 비교: 둘 다 프로젝트 전체를 다루는 **전역** 문서라는 점은 같지만, 헌법은 로드맵을 "작은 단계"로 쪼개 세부 결정을 나중 기능 명세로 미루는 반면 project-spec은 **부트스트랩 직전**에 필요한 구체적 결정(DB 스키마 등)까지 다 확정한다. Data·Monetization·UI/UX가 upfront로 확정돼야 하는 이유는 "중요해서"가 아니라 **다른 모든 기능에 두루 영향을 미치는 기반 인프라**라서(예: `isPro` 필드 하나가 여러 기능의 게이팅을 좌우) — 나중에 바꾸려면 이미 만든 기능들을 줄줄이 재작업해야 한다. 되돌리기 비용이 큰 결정일수록 AI에게 초안은 맡겨도 **최종 결정은 아키텍트가** 해야 한다는 원칙(05강 휴먼 인 더 루프와 동일한 결) (2026-08-08, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/01%20Planning%20the%20Project%20%E2%80%94%20Project%20Spec%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [02 Bootstrapping the Next.js Project.md](../../courses/udemy/Coding%20with%20AI/module%205/02%20Bootstrapping%20the%20Next.js%20Project.md) — **부트스트랩은 직접, 정리는 AI** — 프로젝트 생성은 `create-next-app` 한 줄로 직접 하고 보일러플레이트 정리만 AI에게 맡긴다. 둘을 가르는 기준은 되돌리기 비용(01강의 축)에 **검증 가능성(verifiability)** 을 더한 두 축: 생성은 산출물이 수십 개 파일 + 의존성 트리라 diff로 검토 불가 → 틀려도 한참 뒤에 발견되는데, 정리는 3~4개 파일이라 즉시 확인하고 거절·재요청이 가능하다(강의의 Tailwind class 거절 장면). **검증이 싸면 실패도 싸다.** 생성은 AI가 아껴주는 시간이 거의 없는데(한 줄) `@latest`가 보장하는 최신성마저 잃는다 → 강의의 "특정 목적에 맞게 쓴다"가 이 뜻. 이 위임 경계 규칙이 들어갈 자리는 `ai-interaction.md`다 — 문서 분류 기준은 「적용 범위」가 아니라 **「무엇에 대한 규칙인가」**(project-overview=무엇을 만드는가 / coding-standards=어떻게 짜는가 / ai-interaction=어떻게 나와 일하는가). `rm`으로 SVG를 지운 것이 "확인 없이 삭제하지 않는다"를 위반하지 않는 이유는 **명시적 지시 + 실행 승인** 두 겹 — 요청을 네 프롬프트로 쪼갠 것 자체가 안전장치 (2026-08-08, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/02%20Bootstrapping%20the%20Next.js%20Project%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [03 CLAUDE.md and Project Context.md](../../courses/udemy/Coding%20with%20AI/module%205/03%20CLAUDE.md%20and%20Project%20Context.md) — **`CLAUDE.md`와 프로젝트 컨텍스트** — 무엇을 항상 읽히고 무엇을 필요할 때만 읽힐 것인가. 컨텍스트 예산 문제와 직결된다. 루트 파일은 핵심 규칙과 상세 문서의 위치·읽기 조건을 알려 주는 **컨텍스트 라우터(context router)** 로 두고, 상세 정보는 목적과 변경 주기에 따라 `project-overview`·`coding-standards`·`ai-interaction`·`current-feature`로 분리한다. 파일을 나누는 것만으로 토큰이 줄지는 않으며, 항상 읽을 문서와 작업에 따라 읽을 문서를 구분해야 한다. `/init` 결과는 불필요한 정보와 잘못된 추측을 포함할 수 있으므로 초안으로 취급하고 사람이 검토한다. 대화 컨텍스트는 `/clear`나 compact로 사라질 수 있으므로 중요한 합의는 파일로 외부화한다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/03%20CLAUDE.md%20and%20Project%20Context%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [04 Coding Standards and AI Interaction Rules.md](../../courses/udemy/Coding%20with%20AI/module%205/04%20Coding%20Standards%20and%20AI%20Interaction%20Rules.md) — **코딩 표준과 AI 상호작용 규칙** — 「어떻게 짜라」와 「어떻게 나와 일하라」는 다른 문서다. `coding-standards.md`는 서버 액션·API route·TypeScript·React·Prisma처럼 **산출되는 코드의 형태**를 정하고, `ai-interaction.md`는 삭제 전 확인·최소 변경·중단 조건·커밋 승인처럼 **에이전트의 행동과 권한 경계**를 정한다. 기존 코드는 구체적인 적용 사례로 참고하되 최신 표준과 충돌하더라도 요청 범위 밖의 코드를 몰래 리팩터링하지 않는다. 규칙에는 좋은 예와 나쁜 예를 함께 넣어 해석의 여지를 줄인다. 빌드 성공은 기술적 검증이고 사용자 승인은 의도와 범위에 대한 검증이므로 둘 다 통과한 뒤 커밋한다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/04%20Coding%20Standards%20and%20AI%20Interaction%20Rules%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [05 Feature Workflow and Current Feature.md](../../courses/udemy/Coding%20with%20AI/module%205/05%20Feature%20Workflow%20and%20Current%20Feature.md) — **기능 워크플로와 current-feature** — 에이전트가 「지금 무엇을 하는 중인지」 아는 장치. [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 구현 루프가 이 파일 위에서 돈다. 구현 전에 문서화하여 휘발을 막고 범위·검증 기준을 고정한다. feature branch는 검증 전 변경을 `main`에서 격리하고, 수동 테스트와 build는 각각 기능 동작과 배포 가능한 빌드를 확인한다. 완료 기능은 `History`로 옮기고 현재 영역을 비워 코드와 문서의 상태를 일치시킨다. 워크플로는 수동 반복으로 단계와 중단 조건을 검증한 뒤 자동화한다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/05%20Feature%20Workflow%20and%20Current%20Feature%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [06 Setting Up Git Repository.md](../../courses/udemy/Coding%20with%20AI/module%205/06%20Setting%20Up%20Git%20Repository.md) — Git 저장소 설정 — 기능 브랜치 전략이 명세 단위와 맞물린다. 초기 커밋은 기능 개발 전 정상 상태로 돌아갈 수 있는 기준선이며 이후 diff에서 초기 설정과 기능 변경을 분리한다. remote push는 이 기준선을 다른 사람·컴퓨터와 공유하고 외부에 보존한다. Git history는 파일 변경의 기술적 이력이고 `current-feature.md`의 `History`는 에이전트가 빠르게 읽는 프로젝트 완료 상태이므로 둘 다 기록한다. `git add`·`commit`·`push`는 범위와 공유 이력에 영향을 주므로 대상 파일·diff·브랜치·메시지를 확인하고 승인한다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%205/06%20Setting%20Up%20Git%20Repository%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

### 실물 확인 — DevStash의 컨텍스트 문서

강의만 보지 말고 **완성본의 실제 파일을 열어 본다.** 형식을 그대로 베끼는 것이 가장 빠르다.

- [`devstash-final/CLAUDE.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/CLAUDE.md) · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/CLAUDE%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md)
- [`context/project-overview.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/project-overview.md) · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/context/project-overview%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md)
- [`context/coding-standards.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/coding-standards.md) · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/context/coding-standards%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md)
- [`context/ai-interaction.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/ai-interaction.md) · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/context/ai-interaction%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md)
- [`context/current-feature.md`](../../courses/udemy/Coding%20with%20AI/devstash-final/context/current-feature.md) · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/context/current-feature%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md)
- `context/new-feature-list.md` · [한국어판](../../courses/udemy/Coding%20with%20AI/devstash-final/context/new-feature-list%20%E2%80%94%20%ED%95%9C%EA%B5%AD%EC%96%B4.md) — ⚠️ **영문 원본은 저장소에 없다.** 한국어 번역본만 있다

> 이 여섯 개가 **한 프로젝트의 컨텍스트 문서 세트 전형**이다. 자기 프로젝트에 그대로 대응시켜 본다.

## 2-C. 컨텍스트 예산 — 다 넣을 수는 없다

메인: Coding with AI, module 4

module 1~4는 코스 README에서 「이미 아는 내용」으로 표시돼 있지만, **04~06번은 컨텍스트 관리라서 이 Phase와 직접 이어진다.** 확인만 하고 넘어간다.

- [ ] [01 Getting Started with Claude Code.md](../../courses/udemy/Coding%20with%20AI/module%204/01%20Getting%20Started%20with%20Claude%20Code.md) — 처음에는 기본 승인 모드에서 AI의 파일 변경과 명령 실행을 단계마다 확인하여 도구의 행동과 위험 범위를 익힌다. 숙련은 모든 것을 auto-run하는 것이 아니라 되돌리기 쉽고 위험이 명확한 특정 액션만 자동 승인하는 판단 능력이다. `@파일명`으로 작업 대상을 명시하면 파일 탐색과 오해를 줄이고, diff에서 의도·범위·삭제 내용을 검토한다. 잘못된 제안은 적용 후 다시 고치기보다 거부하면서 추가 지시해 원하지 않는 중간 변경을 막는다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%204/01%20Getting%20Started%20with%20Claude%20Code%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [02 Plan Mode.md](../../courses/udemy/Coding%20with%20AI/module%204/02%20Plan%20Mode.md) — **Plan Mode** — 실행 전에 계획을 먼저 받는 것. 소형 명세를 즉석에서 만드는 장치. 계획 문서는 사용자와 AI가 함께 작성하는 구현 계약으로, 코드 변경 전에 범위·요구사항·순서를 검토하게 한다. 제안을 한꺼번에 모두 구현하면 AI가 요구사항을 놓치고 사용자의 리뷰가 어려워지므로 작은 기능 단위로 선택한다. 읽기 전용 계획도 프로젝트 파일을 탐색하므로 토큰과 시간이 들며 대상 범위를 지정해야 한다. 계획 승인과 구현 승인은 별개다. 구현 전 Accept Edits 상태를 확인하고, 사용자 선호에 따라 기본 승인 모드에서 실제 diff와 결과를 따로 검증한다 (2026-08-10, [대화정리](../../courses/udemy/Coding%20with%20AI/module%204/02%20Plan%20Mode%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [03 Slash Commands, Config, and Settings.md](../../courses/udemy/Coding%20with%20AI/module%204/03%20Slash%20Commands,%20Config,%20and%20Settings.md)
- [ ] [04 Context and Tokens.md](../../courses/udemy/Coding%20with%20AI/module%204/04%20Context%20and%20Tokens.md) — **컨텍스트와 토큰** — 문서를 늘리면 왜 오히려 나빠질 수 있는가
- [ ] [05 Managing Context in Claude Code.md](../../courses/udemy/Coding%20with%20AI/module%204/05%20Managing%20Context%20in%20Claude%20Code.md) — **컨텍스트 관리** — `/clear` 시점 판단. [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 구현 루프에서 계속 쓴다
- [ ] [06 Persistent Memory Update.md](../../courses/udemy/Coding%20with%20AI/module%204/06%20Persistent%20Memory%20Update.md) — 영구 메모리

## 2-D. 코드베이스 자체가 컨텍스트다

메인: Matt Pocock Skills

문서를 아무리 잘 써도 **코드베이스가 읽기 어려우면 에이전트는 매번 헤맨다.** 이 관점을 다루는 자료는 저장소에서 여기뿐이다.

- [ ] [2026-02-24 Never Run claude init.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-24%20Never%20Run%20claude%20init.md) — **`claude init`을 그냥 돌리지 말라** — 자동 생성된 컨텍스트 문서의 문제. 2-B에서 직접 쓰는 이유
- [ ] [2026-02-25 Force Claude Code to use the right CLI.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-25%20Force%20Claude%20Code%20to%20use%20the%20right%20CLI.md) — 에이전트가 올바른 CLI/도구를 쓰게 강제하기 — 규칙을 문서로 심는 구체적 예
- [ ] [2026-02-26 Your codebase is NOT ready for AI.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-02-26%20Your%20codebase%20is%20NOT%20ready%20for%20AI.md) — **이 Phase에서 가장 중요한 외부 자료.** AI 산출물 품질은 프롬프트보다 코드베이스 구조에 더 좌우된다. 에이전트는 매 세션 「기억 없는 신입」으로 들어오므로, 파일 구조가 개발자의 머릿속 지도를 반영해야 한다
- [ ] [2026-03-23 Claude Code tried to improve init.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-03-23%20Claude%20Code%20tried%20to%20improve%20init.md)

## 2-E. 컨텍스트 문서 점검표

Phase 2를 마쳤다면 다음이 모두 참이어야 한다.

- [ ] 프로젝트의 **목적과 범위**가 한 문서에 적혀 있다 (무엇을 만들지 **않는지**까지)
- [ ] 기술 스택과 그 선택 이유가 적혀 있다
- [ ] 코딩 표준이 「예시 코드」와 함께 있다 (설명만 있으면 잘 안 지켜진다)
- [ ] AI 상호작용 규칙이 있다 — 언제 물어보고 언제 그냥 하는가
- [ ] **지금 작업 중인 기능**을 에이전트가 알 수 있다
- [ ] 항상 읽히는 문서와 필요할 때만 읽히는 문서가 나뉘어 있다
- [ ] 자동 생성된 내용을 그대로 두지 않고 손으로 검토했다
- [ ] 폴더 구조가 기능 단위를 반영한다 (파일 이름만 보고 어디에 무엇이 있는지 알 수 있다)

## 산출물 과제

1. **헌법 문서 1장** — 담당 프로젝트의 미션·범위·기술 스택·현재 로드맵. **「만들지 않을 것」 항목을 반드시 넣는다.** 명세의 범위가 새는 것을 막는 가장 값싼 장치다.
2. **컨텍스트 문서 세트** — 2-B의 여섯 개에 대응하는 문서를 만든다. 전부 다 필요하지는 않지만 **project-overview / coding-standards / ai-interaction / current-feature 네 개는 최소 세트**다.
3. **코딩 표준에 예시 넣기** — 규칙마다 「이렇게 쓴다 / 이렇게 쓰지 않는다」 코드 조각을 붙인다.
4. **코드베이스 진단** — 2-D의 기준으로 지금 코드베이스를 점검한다. 에이전트가 「이 기능을 고치려면 어느 파일을 봐야 하나」에 답하기 어려운 지점을 3개 찾아 적는다. 고치는 것은 [Phase 8](08%20Phase%208%20-%20%EB%A0%88%EA%B1%B0%EC%8B%9C%20%EC%BD%94%EB%93%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90%20%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0.md)에서 한다.
5. **점검표 통과** — 2-E의 8개 항목.

## 다음 단계

→ [03 Phase 3 - 기능 명세 작성](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md)
