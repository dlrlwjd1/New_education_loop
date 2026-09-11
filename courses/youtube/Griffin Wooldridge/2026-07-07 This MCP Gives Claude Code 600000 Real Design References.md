# This MCP Gives Claude Code 600000 Real Design References

## 개요
- 강의/영상: [This MCP Gives Claude Code 600,000+ Real Design References](https://www.youtube.com/watch?v=ljHRWIYMYf4)
- 채널: Griffin Wooldridge
- 업로드일: 2026-07-07
- 핵심 주제: Mobbin MCP를 Claude Code 같은 AI agent에 연결하면, agent가 실제 출시된 앱의 UI 화면과 flow를 검색해 reference-backed design을 만들 수 있다. 빈 prompt에서 추측하게 하는 대신, profile page, settings page, financial dashboard 같은 화면을 실제 제품 패턴에 근거해 설계하게 만드는 workflow다.

## 내용

### 1. Mobbin은 실제 제품 UI 레퍼런스 라이브러리다
Mobbin은 웹/모바일 앱의 실제 화면, onboarding flow, paywall, settings screen, empty state, toast, progress indicator, dialog, navigation pattern 등을 모아 둔 reference library다. Griffin은 Dribbble처럼 임의 업로드된 컨셉 이미지가 아니라, 실제 출시된 제품과 대형 회사의 UI pattern을 볼 수 있다는 점을 강조한다.

디자이너는 모든 화면 유형을 머릿속에서 바로 설계하지 않는다. checkout flow, profile page, settings page처럼 자주 쓰이는 화면도 기존 제품에서 반복적으로 검증된 구조를 보고 pattern을 추출하는 과정이 필요하다. Mobbin MCP는 이 reference search를 AI agent가 직접 수행하게 만든다.

### 2. MCP 연결 후 Claude Code가 사용할 수 있는 도구
영상에서는 Claude Code desktop app에 Mobbin MCP를 custom connector로 연결한다.

설정 흐름은 다음과 같다.

1. Mobbin에서 profile icon을 열고 settings로 이동한다.
2. MCP tab에서 AI tool 연결 instruction을 확인한다.
3. Claude Code desktop app에서는 sidebar의 customize로 들어간다.
4. connectors에서 MCP를 열고 custom connector를 추가한다.
5. 이름을 `Mobbin`으로 지정하고 server URL을 붙여 넣는다.
6. Mobbin 계정 authorization을 완료한다.

연결 후 Claude에게 확인하면 `search screens`, `search flows`, `search sections` 같은 도구를 사용할 수 있다고 나온다. 이 도구를 통해 Claude가 Mobbin library에서 관련 UI screen과 flow를 검색한다.

### 3. 첫 단계는 바로 구현이 아니라 reference report다
Griffin의 핵심 workflow는 Claude에게 바로 UI를 만들라고 하지 않는 것이다. 먼저 Mobbin에서 관련 사례를 찾고, visual HTML report를 만들게 한다.

예시 prompt의 의도는 다음과 같다.

```text
Mobbin MCP를 사용해서 우리 앱 유형에 맞는 profile page 디자인을 찾아라.
가장 관련 있는 profile page reference와 상위 회사들이 사용하는 best practice를 시각적 HTML report로 정리해라.
```

이렇게 하면 Claude가 수십 개의 screen을 조사하고, identity/profile basics, security, notifications/preferences, sessions/connected accounts/API access 같은 section으로 pattern을 나눈다. 각 reference는 Mobbin 원본으로 열 수 있는 link를 포함하므로 사람이 Claude의 해석을 검증할 수 있다.

### 4. AI agent에게 좋은 디자인의 패턴을 먼저 가르친다
Griffin은 Claude가 좋은 profile page의 pattern을 자동으로 안다고 가정하면 안 된다고 말한다. reference 없이 만들게 하면 generic한 design choice로 흐르기 쉽다.

Mobbin MCP를 쓰면 agent가 다음과 같은 실제 pattern을 학습한 뒤 구현한다.

- profile picture, username, display name, email 같은 기본 정보는 상단 card에 모은다.
- password와 two-factor authentication은 security section에서 명확히 다룬다.
- current session을 표시하고 active session 목록을 제공한다.
- connected accounts와 API access처럼 기술적인 항목은 뒤쪽에 둔다.
- account deletion 같은 destructive action은 danger zone으로 마지막에 배치한다.
- password rule checklist처럼 inline validation을 제공한다.

이 pattern은 Claude가 추측한 것이 아니라, Mobbin에서 찾은 실제 product UI를 종합한 결과다.

### 5. 기존 앱 스타일을 유지하면서 새 화면을 만든다
영상의 예시 app은 analytics dashboard다. 이미 overview, revenue, accounts, settings page가 있는 상태에서 profile page만 없는 상황이다.

Claude는 Mobbin research report를 만든 뒤, 기존 dashboard의 style과 layout을 유지하면서 profile page를 구현한다. Griffin은 특정 design system을 다시 설명하지 않았지만, Claude가 현재 codebase의 styling을 읽고 새 page에도 같은 visual language를 적용했다고 설명한다.

완성된 profile page는 다음 구조를 따른다.

- identity section
- password section
- sign-in method
- two-factor authentication
- active sessions
- connected accounts and API keys
- danger zone

Notifications는 이미 settings page에 있으므로 Griffin이 제외하라고 지시했고, Claude는 그 요구사항을 반영했다.

### 6. 새 화면뿐 아니라 기존 화면 redesign에도 쓸 수 있다
Mobbin MCP는 새 page 생성뿐 아니라 기존 UI redesign에도 사용할 수 있다. Griffin은 이전에 Claude로 만든 기본적인 grayscale financial dashboard를 예로 든다.

Prompt는 대략 다음과 같다.

```text
Mobbin MCP에서 financial dashboard의 best UI/UX guideline을 찾아라.
이 HTML dashboard를 그 기준에 맞게 redesign해라.
```

결과적으로 Claude는 기존 dashboard를 더 명확한 hierarchy, color palette, sidebar navigation, account hero, money in/out summary가 있는 production app처럼 바꾼다. 또한 Mercury, Wise, Quicken 같은 reference를 link로 제시해 어떤 pattern을 어디서 가져왔는지 설명한다.

### 7. Design reference는 내용뿐 아니라 visual system에도 영향을 준다
Mobbin에서 가져오는 것은 화면에 어떤 section을 둘지에 대한 정보만이 아니다. Claude는 reference에서 visual system도 종합한다.

예를 들어 financial dashboard redesign에서는 sidebar navigation, account 중심 hero, transaction-oriented layout, color hierarchy 같은 시각적 구조를 reference에서 추출한다. 즉, "무엇을 넣을지"와 "어떻게 보이게 할지"를 함께 grounding한다.

### 8. AI가 대체할 수 없는 research와 대체 가능한 reference search를 구분한다
Griffin은 Mobbin이 user interview, usability test, 실제 사용자 조사 같은 dedicated user research를 대체한다고 말하지 않는다. 그런 research는 여전히 사람이 해야 한다.

다만 UI pattern reference를 찾기 위해 여러 app을 오가며 screenshot을 수집하고, 비슷한 사례를 정리하는 작업은 Mobbin MCP가 크게 줄여준다. AI agent 안에서 바로 reference search, pattern extraction, implementation까지 이어지기 때문이다.

## 예시

### Profile page 설계 workflow
```text
Mobbin MCP 연결
-> 관련 profile page screen/flow 검색
-> HTML reference report 생성
-> best practice와 section structure 추출
-> 불필요한 section 제거 등 사람의 피드백 반영
-> 기존 app style에 맞춰 profile page 구현
-> Mobbin link로 reference 근거 검증
```

### Reference-backed prompt 예
```text
Using the Mobbin MCP, find the top profile page designs relevant to this app.
Create a visual HTML report showing the most relevant references and best practices.
Then propose a profile page structure that fits our current dashboard.
```

### Redesign prompt 예
```text
Redesign this dashboard based on best UI/UX guidelines for financial dashboards
that you find through the Mobbin MCP. Explain which Mobbin references influenced
the navigation, hierarchy, and visual system.
```

## 요약
- Mobbin MCP는 AI agent가 실제 출시된 제품의 UI screen과 flow를 직접 검색하게 해준다.
- Claude Code에 연결하면 `search screens`, `search flows`, `search sections` 같은 도구로 design reference를 가져올 수 있다.
- 좋은 workflow는 바로 구현하는 것이 아니라 reference report를 먼저 만들고, best practice를 추출한 뒤 구현하는 것이다.
- Profile page 예시에서는 identity, security, sessions, connected accounts, danger zone 같은 구조가 실제 reference에서 도출됐다.
- 기존 UI redesign에도 사용할 수 있으며, content structure뿐 아니라 visual hierarchy와 design system에도 영향을 준다.
- Mobbin은 사용자 조사를 대체하지 않지만, UI pattern reference 수집과 AI 구현 grounding을 크게 줄여준다.
