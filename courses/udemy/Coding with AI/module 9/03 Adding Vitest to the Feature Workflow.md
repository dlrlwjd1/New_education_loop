# Adding Vitest to the Feature Workflow

## 개요
- AI 개발 workflow에 unit testing을 추가한다.
- React component testing이 아니라 server actions와 utility functions를 중심으로 Vitest를 설정한다.
- `/feature test` command를 추가해 feature별 testable logic을 찾고 필요한 test를 작성/실행하도록 만든다.

## 내용

### 테스트 범위
강사는 모든 UI component를 React Testing Library로 테스트하려는 것이 아니라고 설명한다.

이번 프로젝트의 unit test 대상:
- server actions
- utility functions
- meaningful server-side logic

테스트하지 않을 대상:
- 단순 presentational components
- CSS class 변경만 있는 UI 수정
- 테스트 가치가 낮은 boilerplate

이 기준은 AI가 무작정 test를 많이 만들지 않게 해준다.

### Vitest 설치
Prompt로 Vitest 설정을 요청한다.

Prompt 요지:

```text
Set up Vitest for unit testing.
We only want to test server actions and utilities, not components.
Update context/AI-interaction.md if needed and any other docs you see fit.
```

설치되는 dev dependency:

```text
vitest
@vitejs/plugin-react
```

### Vitest config
기본 Vitest config를 추가한다.

또한 `package.json` scripts에 test command를 추가한다.

예:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

강의에서는 `npm run test`가 전체 test suite를 실행하는 기준 command가 된다.

### Sample test
Vitest가 제대로 동작하는지 확인하기 위해 sample test를 만든다.

대상:

```text
src/lib/date.ts
```

Test file:

```text
src/lib/date.test.ts
```

테스트 예:
- current date는 `Today`
- 하루 전은 `Yesterday`
- 2~6일 전은 `X days ago`

`npx vitest run` 또는 `npm run test`로 실행하고 모든 test가 pass하는지 확인한다.

### Documentation 업데이트
Vitest 설정 후 project workflow 문서도 업데이트한다.

수정 대상:
- `context/AI-interaction.md`
- coding standards 관련 문서
- `CLAUDE.md`
- current feature/history

핵심 규칙:
- commit 전 `npm run build`가 통과해야 함
- test가 있으면 `npm run test`도 통과해야 함
- AI가 source code를 변경할 때 test workflow를 인식해야 함

### `/feature test` 추가
기존 feature skill에 `test` action을 추가한다.

기존 action 예:

```text
load | start | review | complete
```

여기에 `test`를 추가한다.

```text
load | start | review | test | complete
```

`test` action의 역할:
- current feature에서 추가/수정된 파일 확인
- server actions와 utilities 중 testable logic 식별
- 기존 test 존재 여부 확인
- 필요한 경우 Vitest unit test 작성
- happy path와 error case를 테스트
- `npm run test` 실행
- 새 feature code의 test coverage 요약

### 테스트 작성 기준
AI가 test를 억지로 만들지 않도록 기준을 명확히 한다.

규칙:
- server action과 utility 중심
- component test는 작성하지 않음
- 의미 있는 logic이 있을 때만 작성
- 단순 CSS class 변경에는 새 test를 만들지 않음
- existing tests는 항상 실행

### Feature skill 수정
`.claude/skills/feature/SKILL.md`에 `test` action을 추가한다.

수정 내용:
- argument hint에 `test` 추가
- action summary에 `test` 설명 추가
- 자세한 instruction은 actions folder의 test instruction을 참조하도록 함

### 작은 feature로 검증
`/feature test`가 제대로 동작하는지 확인하기 위해 작은 feature를 만든다.

Feature:

```text
Change the item listing view to be a three column row on larger screens.
Keep it responsive.
```

구현은 Tailwind grid class 변경이다.

결과:
- 큰 화면에서는 3 columns
- 중간 화면에서는 2 columns
- 작은 화면에서는 1 column

### `/feature test` 결과
이 feature는 CSS class 변경뿐이라 testable server logic이 없다.

`/feature test`는 다음처럼 판단한다.

```text
No server actions or utility functions were added or modified,
so there is no testable logic.
```

하지만 기존 tests는 실행한다.

이 점이 중요하다.

새 test를 억지로 만들지 않지만, 전체 test suite는 계속 확인한다.

## 예시

Feature test command:

```text
/feature test
```

Vitest command:

```bash
npm run test
```

Test file colocated with source:

```text
src/lib/date.ts
src/lib/date.test.ts
```

Testing scope:

```text
Server actions and utilities only.
Do not test components.
```

## 요약
- Vitest를 추가해 server actions와 utilities 중심의 unit testing workflow를 만든다.
- `npm run test`, `npm run test:watch` script를 추가한다.
- `/feature test`는 current feature의 testable logic만 찾아 필요한 test를 작성한다.
- Test가 필요 없는 UI class 변경에는 새 test를 만들지 않고 기존 tests만 실행한다.
- AI coding workflow에서 build뿐 아니라 test pass도 중요한 완료 조건으로 추가했다.
