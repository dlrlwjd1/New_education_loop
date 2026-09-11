# Thermonuclear code quality review

## 개요
- 영상: [Can Cursor's HARDCORE Review Skill Stop The Slop?](https://www.youtube.com/watch?v=mh5XZ-L5SFQ)
- 채널: Matt Pocock
- 업로드일: 2026-05-28
- 길이: 13:23
- 핵심 주제: Cursor 팀의 thermonuclear code quality review skill을 실제 코드에 적용해 보고, AI code review가 더 야심차고 구조적인 피드백을 주도록 만드는 방법을 분석한다.

## 내용

### 1. 자동 code review는 agent 코드 품질을 높이는 강력한 방법이다
Matt는 agent가 만든 코드의 품질을 높이는 가장 효과적인 방법 중 하나가 자동 code review라고 말한다. 다만 일반 review prompt는 너무 소극적일 때가 많다.

보통 agent에게 diff를 주면 agent는 그 diff 안에서만 문제를 찾으려 한다. Cursor의 thermonuclear review skill은 그보다 더 넓게 보고, 구조 개선과 추상화 개선까지 제안하라고 강하게 요구한다.

### 2. 이 스킬은 "야심찬 리뷰"를 요구한다
Cursor skill의 기본 태도는 단순한 스타일 지적이 아니라 구현 구조 자체를 다시 생각하는 것이다.

주요 방향은 다음과 같다.

- 동작은 유지하면서 구현 품질을 높인다.
- abstraction, modularity, legibility를 개선한다.
- spaghetti code를 줄인다.
- 명확한 구조 개선 경로가 있으면 더 큰 refactor도 제안한다.
- working code를 그대로 받아들이지 않고 design problem으로 본다.

Matt가 특히 좋게 본 표현은 "code judo move"다. 복잡한 구현을 힘으로 밀어붙이는 대신, 문제를 다른 프레임으로 바꿔 전체 복잡도를 줄이는 움직임을 찾으라는 뜻이다.

### 3. 큰 파일과 무작위 성장에 엄격하다
스킬은 PR이 파일을 1,000줄 이상으로 키우는 것을 강하게 경계한다. Matt도 agent가 큰 파일을 탐색하기 어렵기 때문에 파일을 쪼개는 기준이 필요하다고 동의한다.

큰 파일은 agent가 필요한 맥락을 찾기 위해 전체 파일을 context에 넣어야 하므로 비효율적이다. 반대로 작은 파일은 파일명 자체가 context pointer 역할을 한다.

또한 기존 코드 경로에 이상한 `if`문과 조건 분기가 계속 붙는 것을 design smell로 본다. 이런 경우 dedicated abstraction, helper, state machine, policy object, separate module로 밀어내는 것이 더 나을 수 있다.

### 4. TypeScript type boundary를 강하게 본다
Matt가 좋게 본 기준 중 하나는 type and boundary cleanliness다. 특히 TypeScript에서 다음 문제를 의심하라고 한다.

- 불필요한 optional prop
- `unknown`, `any`, cast-heavy code
- 명확한 type boundary 없이 흐르는 값
- runnable command와 prose marker가 같은 필드에 섞이는 contract

Matt는 agent가 React prop을 불필요하게 optional로 만드는 경향을 지적한다. blast radius를 줄이려는 의도일 수 있지만, 실제로 항상 필요한 값이라면 optional로 만드는 것은 타입 경계를 흐린다.

### 5. canonical layer와 existing helper를 재사용한다
스킬은 이미 codebase 안에 있는 canonical utility나 helper가 있다면 bespoke one-off를 만들지 말라고 한다. 같은 문제가 이미 해결되어 있다면 그 경로를 따라야 한다.

이는 단순한 DRY 문제가 아니라 코드베이스의 local architecture를 지키는 문제다.

### 6. 실행 결과는 꽤 유용했지만 false positive도 있었다
Matt는 자신의 Sandcastle repo에서 최근 PR들을 대상으로 이 스킬을 실행한다. 결과적으로 꽤 많은 유효한 지적이 나왔다.

예를 들어 다음과 같은 피드백은 좋게 평가했다.

- init service가 너무 커졌고 여러 책임을 섞고 있다.
- 중복 boilerplate를 generic helper로 줄일 수 있다.
- feature-specific 조건 분기가 여러 layer에 흩어져 있다.
- Zod dependency 처리 경로가 이상하게 hardcode되어 있다.
- 일부 swallowed error가 있다.
- 큰 파일 분해가 반쯤만 진행되어 있다.

반면 prompt duplication을 무조건 refactor하라는 제안처럼, 의도적으로 독립성을 유지해야 하는 부분에서는 false positive도 있었다.

### 7. 야심찬 리뷰는 false positive를 늘리지만 놓치는 문제를 줄인다
Matt의 결론은 "야심찬 리뷰는 false positive를 늘리지만, false positive는 거절하면 된다"는 것이다. 더 위험한 것은 review가 너무 소극적이라 구조 개선 기회를 아예 발견하지 못하는 경우다.

다만 그는 이 Cursor skill이 너무 반복적이고 장황하다고 본다. 더 짧고 우선순위가 분명해질 필요가 있으며, testing과 seam에 대한 관점이 부족하다고 지적한다.

### 8. 테스트와 feedback loop가 빠져 있다
Matt가 가장 아쉬워한 점은 code review가 source code 구조에만 집중하고 테스트를 거의 다루지 않는다는 점이다.

좋은 코드베이스는 단순히 예쁜 코드가 아니라 변경하기 쉽고, feedback loop가 좋아야 한다. 따라서 review skill은 구조뿐 아니라 test seams, future runs의 안정성, feedback loop 개선도 봐야 한다.

## 예시

### Review에서 강하게 봐야 할 질문
```text
- 이 변경은 파일을 너무 크게 만들었는가?
- 새 조건 분기가 기존 경로를 더 지저분하게 만들었는가?
- 더 적은 개념으로 같은 동작을 표현할 수 있는가?
- type boundary가 더 명확해질 수 있는가?
- 기존 helper나 canonical layer를 재사용할 수 있는가?
- 테스트 seam이나 feedback loop가 좋아졌는가?
```

### Matt의 평가
| 항목 | 평가 |
| --- | --- |
| 구조 개선 야심 | 좋음 |
| 큰 파일 감지 | 좋음 |
| type boundary 감지 | 좋음 |
| false positive | 있음, 하지만 감수 가능 |
| prompt 중복 | 많음 |
| 테스트 관점 | 부족함 |

## 요약
- 일반 AI review는 diff 안에 갇히기 쉬워 너무 소극적이다.
- Thermonuclear review는 구조 개선, abstraction, maintainability를 강하게 요구한다.
- 큰 파일, random spaghetti growth, 불명확한 type boundary, bespoke helper를 주요 smell로 본다.
- 야심찬 리뷰는 false positive를 만들 수 있지만, 놓친 개선 기회보다 덜 위험하다.
- Matt는 이 skill에서 아이디어를 얻되, 중복을 줄이고 testing/seam 관점을 추가해야 한다고 본다.
