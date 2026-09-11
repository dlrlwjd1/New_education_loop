# Feature Workflow and Current Feature — 대화정리

> 강의 [05 Feature Workflow and Current Feature.md](05%20Feature%20Workflow%20and%20Current%20Feature.md) 를 바탕으로 나눈 Q&A 정리본.
> 주제: **"플랜을 feature로 어떻게 나누는가"** 와 **"현업도 이렇게 하는가"**.

## 개요
- 강의 자체는 **feature 하나를 어떻게 처리하는가(워크플로 한 사이클)**를 설명하지, **플랜을 feature로 쪼개는 규칙**은 명시하지 않는다.
- feature를 나누는 기준은 강의의 워크플로 + 완성본(DevStash)의 `context/features/` 구성에서 역으로 읽어낼 수 있다.
- 핵심 원리(작고 독립적으로 배포 가능한 단위로 분할)는 **현업 표준과 거의 일치**하며, AI 문서 기반 관리·혼자 머지 부분만 이 코스 특유의 각색이다.

## 내용

### Q1. 플랜에서 feature를 어떻게 나누지?

#### "feature 하나"의 기준은 워크플로가 정해준다
강의 흐름: **문서화 → 브랜치 → 구현 → 테스트 → 반복 → build → 커밋/머지 → 기록**

여기서 "build 통과해야 commit", "main에 merge"가 힌트. 즉
**feature = 이 사이클을 처음부터 끝까지 온전히 한 번 돌 수 있는 최소 단위**.

feature 하나가 끝났을 때 만족해야 하는 3조건:
- `npm run build`가 **통과**한다
- 앱이 깨지지 않고 **동작하는(working) 상태**로 main에 머지될 수 있다
- `current-feature.md`의 **Goals에 한 문단으로 적을 만큼** 범위가 뚜렷하다

→ 이 조건을 못 지킬 만큼 크면 더 쪼개라는 신호.

#### 실제 DevStash가 나눈 기준 (역으로 보기)
완성본 `context/features/` 스펙 파일과 `current-feature.md`의 History에서 드러나는 분할 기준:

- **(a) 세로 슬라이스(vertical slice) 단위** — 레이어가 아니라 사용자가 체감하는 기능 덩어리로 자른다.
  예: `database-spec`, `auth-phase-*`, `item-create-spec`, `global-search-spec`, `stripe-phase-*`, `ai-auto-tag-spec`
- **(b) 큰 기능은 phase로 분할** — 한 번에 build/merge하기 큰 것들.
  예: `dashboard-phase-1(껍데기+탑바)` → `2(사이드바)` → `3(메인)`,
  `auth-phase-1(OAuth)` → `2(credentials)` → `3(UI/로그아웃)`,
  `stripe-phase-1(인프라)` → `2(웹훅+게이팅+UI)`.
  각 phase가 그 자체로 빌드·머지 가능한 상태라는 게 핵심.
- **(c) CRUD는 동사 하나 = feature 하나**로 잘게.
  예: `item-create` / `item-drawer(읽기)` / `item-drawer-edit(수정)` / delete

#### 실전 분할 규칙 4단계
1. 프로젝트 스펙(project-overview)의 기능 목록을 사용자 관점 덩어리로 자른다.
2. 각 덩어리가 "build 통과 + 동작 상태로 머지 가능"한지 본다.
3. 크면 phase로 분할, 작으면 그대로 하나의 feature.
4. **feature 하나 = 스펙 파일 하나 = 브랜치 하나 = current-feature.md 항목 하나 = build/commit/merge 한 사이클.**

### Q2. 다른 현업에서도 이렇게 나누는가?

핵심 원리는 현업과 거의 동일. 강의는 "혼자 + AI 작업"에 맞춘 단순화 버전이다.

#### 현업과 그대로 겹치는 것
| 강의 방식 | 현업 대응 개념 |
|---|---|
| 작게, 빌드/머지 가능한 단위로 쪼개기 | 작은 PR(small pull request) |
| 사용자 관점 덩어리로 자르기 | 수직 슬라이스(vertical slice) |
| 큰 기능을 phase 1·2·3 | 에픽(epic) → 스토리(story) 분해, 점진적 전달 |
| feature/fix 브랜치 | feature branch 전략 (Git Flow / GitHub Flow) |
| build 통과해야 commit | CI(Continuous Integration) 그린이어야 머지 |
| main 보호 | protected branch + required checks |

→ "한 번에 안전하게 닫을 수 있는 최소 단위로 쪼갠다"는 원칙은 업계 베스트 프랙티스와 일치. 작은 PR일수록 리뷰 품질↑·버그↓·배포 리스크↓.

#### 현업에서 달라지는 것
1. **`current-feature.md`/spec 방식은 AI 코딩용 관례.** 현업에선 Jira/Linear 티켓, PRD, 디자인 문서가 그 역할을 대신한다.
2. **merge 방식이 다르다.** 현업은 거의 항상 PR → 동료 code review → CI 통과 → merge. (강의도 "팀이면 PR을 만든다"고 언급.)
3. **긴 브랜치 대신 다른 전략.** 트렁크 기반 개발(trunk-based development) + 피처 플래그(feature flag)로 미완성 코드를 숨긴 채 main에 자주 머지하기도 한다. 강의의 phase 분할도 "큰 기능을 안전하게 넣는 문제"에 대한 또 다른 해법.
4. **분할 기준이 더 정형화.** INVEST 원칙(Independent·Negotiable·Valuable·Estimable·Small·Testable), 스프린트 크기, 담당자 배분 등 팀 제약이 feature 크기를 함께 결정한다.

### Q3. 왜 구현보다 문서화가 먼저인가?

기능의 목표와 요구사항을 먼저 `current-feature.md`에 기록하면 대화가 초기화되거나 다른 세션으로 넘어가도 작업 내용이 휘발되지 않는다. 이 문서는 구현 전에는 작업 지시서, 구현 중에는 체크포인트, 구현 후에는 결과를 원래 요구사항과 비교하는 검수 기준으로 작동한다. 따라서 문서화는 기억 보존뿐 아니라 기능 범위를 고정하고 AI의 임의 확장을 막는 단계다.

### Q4. feature branch와 문서 상태는 무엇을 보호하는가?

feature branch는 구현과 테스트가 끝나지 않은 변경을 `main`에서 격리한다. 기능 동작, build, 사용자 승인을 모두 확인한 뒤 병합하므로 `main`을 검증된 기준선으로 유지할 수 있다.

기능을 완료하면 현재 작업을 `History`에 기록하고 `Current Feature` 영역은 비워야 한다. 같은 기능이 두 영역에 동시에 남으면 에이전트는 완료된 기능을 아직 작업 중인 것으로 오해할 수 있다. 코드의 상태와 문서의 상태가 일치해야 다음 세션에서 워크플로를 신뢰할 수 있다.

### Q5. 수동 테스트, build, 자동화는 어떤 순서인가?

수동 테스트는 사용자가 기대한 기능 동작을 확인하고, `npm run build`는 TypeScript 오류·잘못된 import·프로덕션 번들 문제처럼 배포 빌드에서 드러나는 오류를 확인한다. 두 검증은 서로 대체하지 못한다.

이 워크플로를 처음부터 `/feature` 커맨드로 자동화하지 않는 이유도 검증 순서에 있다. 자동화는 잘못된 절차도 빠르고 일관되게 반복한다. 먼저 수동으로 여러 번 실행하여 필요한 단계, 순서, 승인 지점과 중단 조건을 검증한 뒤 자동화해야 한다.

## 예시

feature 분할과 워크플로의 관계를 한 그림으로:

```text
project-overview 기능 목록
   └─ 사용자 관점 덩어리로 절단
        ├─ 작으면 → feature 1개
        │     = features/xxx-spec.md
        │     = feature/xxx 브랜치
        │     = current-feature.md 항목 1개
        │     = build → commit → merge 1사이클
        └─ 크면 → phase로 분할 (1 → 2 → 3), 각 phase가 위 1사이클을 만족
```

실제 DevStash phase 분할 예:
```text
Dashboard  : phase-1(shell+topbar) → phase-2(sidebar) → phase-3(main content)
Auth       : phase-1(GitHub OAuth) → phase-2(credentials) → phase-3(UI/sign out)
Stripe     : phase-1(infra)        → phase-2(webhooks+gating+UI)
```

## 요약
- **feature = build 통과 + 동작 상태로 머지 가능한 최소 단위.** 이 조건을 못 지키게 크면 phase로 쪼갠다.
- 나누는 축은 레이어가 아니라 **사용자 관점의 수직 슬라이스**, CRUD는 동사 단위로 잘게.
- 매핑 공식: **feature 1개 = spec 파일 1개 = 브랜치 1개 = current-feature 항목 1개 = build/commit/merge 1사이클.**
- 이 분할 원리는 **현업 표준(작은 PR·수직 슬라이스·에픽/스토리·CI 게이트)과 일치**한다.
- 다른 점: 현업은 문서 대신 티켓/PRD, 로컬 머지 대신 PR+리뷰, 긴 브랜치 대신 트렁크 기반+피처 플래그를 쓰기도 한다.
- `current-feature.md`는 휘발 방지뿐 아니라 범위와 검수 기준을 고정하며, 완료 후에는 `History`와 현재 영역의 상태를 정리해야 한다.
- 수동 테스트와 build를 모두 통과하고 사용자 승인을 받은 뒤 병합한다.
- 수동 반복으로 검증된 워크플로만 자동화한다.
