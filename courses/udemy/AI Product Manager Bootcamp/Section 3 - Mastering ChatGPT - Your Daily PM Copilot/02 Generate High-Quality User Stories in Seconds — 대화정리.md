# Generate High-Quality User Stories in Seconds — 대화정리

## 개요

- 학습일: 2026-08-02
- 원본 강의: `02 Demo — Generating User Stories.md`
- 강의는 유저 스토리(user story)와 인수 조건(acceptance criteria)을 이미 아는 것으로 전제하고 데모를 진행하므로, 이 대화에서는 **두 개념의 기초부터 짚고 → 직접 써보며 실수를 교정 → 강의의 프롬프트 설계 의도**로 넘어갔다.
- 핵심 축 두 가지:
  1. 좋은 유저 스토리·AC란 무엇인가 (직접 작성 연습)
  2. 그걸 AI에게 시킬 때 **무엇을 얻고 무엇을 넘기지 않는가**

## 내용

### 1. 유저 스토리의 세 조각

강의 예시를 분해:

> **As a** team member, **I want to** highlight text and leave a comment **so that** others can see my feedback in context

| 조각 | 답하는 질문 | 예시 |
|---|---|---|
| `As a [role]` | 누가 쓰는가 | team member |
| `I want to [action]` | 무엇을 하고 싶은가 | 텍스트 하이라이트 후 댓글 남기기 |
| `so that [goal/benefit]` | **왜** 필요한가 | 다른 사람이 맥락 속에서 피드백을 볼 수 있게 |

**`so that`이 존재하는 이유**: "댓글 기능 만들기"만 있으면 개발자는 무엇을 만들지는 알아도 판단 근거가 없다. "맥락 속에서 보이게"가 목적임을 알면 "별도 패널에만 뜨면 안 되고 어느 텍스트에 달렸는지 연결이 보여야겠다"고 스스로 판단할 수 있다.

### 2. 가장 흔한 실수 — `so that`이 행동의 반복

직접 작성해본 첫 시도:

```
I want to  → 누가 접속하고 있는지 보기
so that    → 누가 지금 이 문서를 보고 있는지 알 수 있다   ❌
```

두 문장이 사실상 같다. "보기"를 "알 수 있다"로 바꿔 쓴 것뿐이라 `so that`이 아무 정보도 주지 못한다.

**자가 점검법 — "그래서 뭐가 좋은데?"를 한 번 더 묻기**

> 누가 보고 있는지 안다 → 그래서 뭐가 좋은데?
> → 같은 문단을 동시에 고치다 충돌하는 걸 피할 수 있다

교정된 문장:

> As a team member, I want to see who else is currently viewing the document, **so that I can avoid editing the same section at the same time and duplicating work.**

행동(보기)과 이득(중복 작업 방지)이 **다른 층위**에 있어야 한다.

**왜 중요한가**: `so that`이 없으면 그 스토리는 "왜 이게 P0인가"를 스스로 설명하지 못한다. 강의 데모에서 ChatGPT가 P0/P1/P2를 붙일 수 있었던 것도 각 스토리에 이득이 적혀 있었기 때문이다.

### 3. 두 번째 실수 — 스토리 묶기 (`and` 신호)

두 번째 시도에서 "해결됨 표시**하거나** 다시 오픈"을 한 스토리에 담았다. `so that`은 재오픈 쪽 이유만 설명했다.

이는 강의 프롬프트의 제약 조건 중 **independently shippable(독립 배포 가능)** 에 걸린다. 두 기능은 따로 배포 가능하고 우선순위도 다를 수 있으므로 쪼개야 한다:

> **스토리 A (P0)** — As a team member, I want to mark a comment as resolved, so that the document only shows feedback that still needs attention.
>
> **스토리 B (P1)** — As a team member, I want to reopen a resolved comment, so that feedback closed by mistake or closed too early isn't lost.

**규칙**: `I want to`에 **"~하고", "~하거나"** 가 보이면 쪼갤 신호다.

### 4. 좋은 스토리 자가 점검 3문항

강의 프롬프트의 제약 조건이 그대로 체크리스트가 된다.

| 점검 | 질문 |
|---|---|
| **specific** | 이 문장만 보고 만들 수 있나? 해석의 여지가 있나? |
| **testable** | Given/When/Then으로 됐다/안 됐다를 판정할 수 있나? |
| **independently shippable** | 이것만 배포해도 사용자에게 가치가 있나? |

### 5. 인수 조건(AC) — Given / When / Then

유저 스토리 한 문장으로는 "완성됐다"를 판정할 수 없어서 붙는 것이 AC다.

| 칸 | 들어갈 것 | 안 될 것 |
|---|---|---|
| **Given** | 검증 시작 전의 상태 | 사용자의 기분·의도 |
| **When** | **버튼 클릭 수준의 구체적 조작** | "~하고 싶다", "~하려 한다" |
| **Then** | 그 조작 **직후 눈으로 확인되는 결과** | 나중에 다른 사람이 할 일 |

이 형식으로 쓰면 **그대로 테스트 케이스가 된다.** 상황을 만들고(Given) → 행동하고(When) → 결과를 확인(Then). QA가 별도로 해석할 필요가 없다. 강의 프롬프트에 **testable** 제약이 들어간 이유가 이것이다.

**핵심 연결**: `so that`에 적은 이득은 **Then에서 검증되어야 한다.**

### 6. 엣지 케이스의 자리

```
유저 스토리 1개  ← 무엇을, 왜
  ├─ AC          ← 정상 흐름의 판정 조건 (Given/When/Then)
  └─ 엣지 케이스  ← 그 밖의 예외 상황
```

강의에 나온 엣지 케이스 예시: 나중에 삭제된 텍스트에 달린 댓글은 어떻게 되나 / 여러 사용자의 하이라이트가 겹치면. 둘 다 없으면 개발 도중 "이건 어떡하죠?"를 계속 되물어야 한다.

### 7. 강의의 프롬프트 구조

| 요소 | 내용 |
|---|---|
| **컨텍스트** | B2B 팀용 협업 문서 편집기, 이메일 체인 없는 실시간·비동기 피드백이 목표 |
| **요청** | 유저 스토리 5~7개 |
| **출력 형식** | `As a / I want to / so that` + AC는 Given/When/Then + 엣지 케이스 + P0/P1/P2 |
| **제약** | specific · testable · independently shippable |

### 8. 후속 프롬프트 — 편집장의 태도

첫 응답(불릿 리스트)을 최종본으로 취급하지 않고 되받아쳤다:

> "표(table) 형식으로 바꿔줘. 우선순위를 P0 → P1 → P2 순서로 정렬하고 순서를 섞지 마"

결과: 유저 스토리 / AC / 엣지 케이스 / 우선순위가 든 표 → Jira, Linear에 **복사-붙여넣기 가능**.

여기서 두 가지:

1. **첫 응답은 초안** — back and forth로 다듬는다 (author-in-chief가 아니라 **editor-in-chief**)
2. **출력 형식은 "다음에 이걸 어디에 붙여넣을 것인가"로 결정한다** — 표를 고른 건 예뻐서가 아니라 목적지가 티켓 시스템이기 때문

### 9. AI에게 넘기는 것 / 넘기지 않는 것

강사는 정해진 형식으로 스토리를 쓰는 행위를 두 갈래로 본다:

| 성격 | 내용 | AI에 넘겨도 되나 |
|---|---|---|
| **사고 과정** | 올바른 문제를 푸는지 확인, 사고 명료화(clarify thinking) | ❌ |
| **행정 잡무** | 아는 걸 정해진 칸에 옮겨 적기(administrivia) | ✅ |

그래서 강의의 전제가 결정적이다:

> **이미 해결할 문제를 안다면**, AI에게 시키는 건 떠넘기기(offloading)가 아니라 초안(early draft)을 빠르게 얻는 것

이 전제가 깨지면:

| | 문제를 아는 상태 | 문제를 모르는 상태 |
|---|---|---|
| 얻는 것 | 잡무 제거 → **속도** | 그럴싸한 스토리 더미 |
| 잃는 것 | 없음 (판단은 내가 함) | **올바른 문제인지 확인하는 과정** |

검증 단계를 건너뛰면 편집장이 아니라 **승인 도장**이 된다. 뭘 편집해야 할지 판단할 기준 자체가 없기 때문이다.

## 예시

### 프롬프트를 회사 상황에 맞게 바꾸기

회사 상황: 우선순위 대신 T셔츠 사이즈(S/M/L)로 공수 표기, AC는 체크리스트, 티켓은 Jira.

**바꾸는 곳은 출력 형식뿐** — 컨텍스트와 제약(specific·testable·independently shippable)은 그대로 둔다.

| 원본 | 변경 |
|---|---|
| P0/P1/P2 | S/M/L |
| AC: Given/When/Then | AC: 체크리스트 |
| (표 요청) | Jira에 붙여넣을 수 있는 표 — 열: 유저 스토리 / AC 체크리스트 / 엣지 케이스 / 사이즈 |
| "P0 → P1 → P2 순 정렬" | 삭제 (사이즈는 우선순위가 아니므로) |

주의할 점:

- ChatGPT는 Jira에 티켓을 **올려주지 않는다.** 강사도 안 시켰다. 요청한 것은 "Jira에 붙여넣기 쉬운 형태(표)"다.
- 우선순위(P0/P1/P2)와 T셔츠 사이즈(S/M/L)는 **다른 축**이다. 앞은 "얼마나 급한가", 뒤는 "얼마나 큰가".

### 잘못된 스토리 진단 연습

> As a user, I want to get notifications and see version history, so that I can use notifications and version history.

문제 두 가지:

1. `so that`이 행동의 반복 — 아무 정보도 주지 않음
2. `and`로 두 스토리가 묶임 — 알림과 버전 히스토리는 따로 배포 가능

교정:

> **A.** As a team member, I want to be notified when someone comments on my document, so that I can respond without having to keep checking the document.
>
> **B.** As a team member, I want to view the document's version history, so that I can restore content that was changed or deleted by mistake.

### AC 작성 연습

스토리:

> As a team member, I want to suggest an edit to a sentence, so that the author can accept or reject it without losing the original text.

이 스토리의 핵심 가치는 `so that`의 **"without losing the original text"** 이므로, AC의 Then이 그것을 검증해야 한다:

> **Given** a document is open and I have suggest access,
> **When** I select a sentence, click Suggest Edit, and submit my revision,
> **Then** the original sentence remains visible, my suggested version is shown alongside it, and the author sees Accept and Reject options.

흔한 실수:

- When에 "제안을 하고 싶다" → 의도지 행동이 아님. 테스터가 뭘 눌러야 할지 모른다.
- Then에 "글쓴이가 받아들이거나 거절할 수 있다" → 다음 사람의 행동. 조작 직후 화면에서 확인되는 것을 써야 한다.

## 요약

- **유저 스토리** = 누가 / 무엇을 / **왜**. `so that`이 행동의 반복이면 실패 → "그래서 뭐가 좋은데?"를 한 번 더 물을 것
- **`and`가 보이면 쪼갠다** — independently shippable 제약
- **AC = Given/When/Then** → 그대로 테스트 케이스. When은 구체적 조작, Then은 직후 확인되는 결과
- **`so that`의 이득은 Then에서 검증된다** — 스토리와 AC를 잇는 지점
- **프롬프트 = 컨텍스트 + 요청 + 출력 형식 + 제약(specific·testable·independently shippable)**
- **출력 형식은 목적지가 결정한다** — Jira에 붙여넣을 거라 표를 요청한 것
- **첫 응답은 초안** — 편집장(editor-in-chief)처럼 후속 프롬프트로 다듬기
- **얻는 건 속도, 넘기지 않는 건 판단** — "이미 해결할 문제를 안다면"이 전제
