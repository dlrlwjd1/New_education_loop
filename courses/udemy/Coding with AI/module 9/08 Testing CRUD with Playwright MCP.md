# Testing CRUD with Playwright MCP

## 개요
- Item CRUD를 manual testing과 unit tests로 확인한 뒤, Playwright MCP로 end-to-end 흐름을 점검한다.
- 별도 Playwright test suite를 설치해 작성하는 대신, AI에게 Playwright MCP browser automation을 사용하도록 prompt한다.
- Demo user로 로그인한 뒤 item create, read, update, delete 전체 흐름을 실제 browser에서 검증한다.

## 내용

### 왜 E2E 테스트를 하는가
지금까지 CRUD 기능은 두 방식으로 확인했다.

- Browser에서 직접 manual testing
- Vitest unit tests

하지만 전체 user flow가 실제 browser에서 이어지는지도 확인할 필요가 있다.

예:
- login이 되는가
- modal이 열리는가
- form 입력이 되는가
- toast가 뜨는가
- drawer가 열리는가
- edit/delete 후 UI가 갱신되는가

이런 것은 unit test보다 E2E 흐름으로 보는 것이 더 자연스럽다.

### Playwright MCP 사용
강의에서는 Playwright를 npm package로 설치하고 test file을 작성하지 않는다.

대신 이전에 설치한 Playwright MCP를 사용한다.

장점:
- AI가 실제 browser를 열고 클릭/입력/확인을 수행
- 화면 상태를 보며 전체 user flow를 검증
- 별도 test suite 작성 없이 빠르게 smoke test 가능

### Prompt 사용
Resource files의 section 10 prompts에 있는 Playwright MCP prompt를 사용한다.

Prompt 요지:

```text
Use the Playwright MCP to test CRUD functionality.
Log in with the demo user.
Click on the New Item button in the top bar.
Add a new snippet.
Then edit the title, update it,
and finally delete the snippet.
```

Demo user email/password는 각자 seed data에 맞게 수정해야 한다.

### 테스트 흐름
Playwright MCP가 수행한 전체 흐름:

1. Sign-in page로 이동
2. Demo user credentials 입력
3. Dashboard로 로그인
4. Top bar의 `New Item` 클릭
5. Create item modal 열기
6. New snippet 입력
7. Create 실행
8. Success toast 확인
9. Total items count 변경 확인
10. 새 snippet card/drawer 확인
11. Edit 실행
12. Title을 updated title로 변경
13. Save 실행
14. Update success 확인
15. Delete 실행
16. Confirmation dialog 확인
17. Delete confirm
18. Success toast와 card 제거 확인

### Create 검증
AI가 browser에서 `New Item` modal을 열고 snippet을 생성한다.

예:

```text
Title: Test Snippet
Content: console.log(...)
```

확인할 것:
- modal이 정상 open
- form 입력 가능
- create 후 success toast 표시
- item count 증가
- list/card에 새 item 표시

### Read 검증
생성한 snippet을 클릭해 drawer를 연다.

확인할 것:
- drawer open
- title 표시
- content 표시
- snippet detail이 실제로 fetch되어 표시

### Update 검증
Drawer에서 edit mode로 전환해 title을 수정한다.

확인할 것:
- edit button 작동
- title input 수정 가능
- save 후 success toast 표시
- drawer title 변경
- card title 변경

### Delete 검증
수정한 snippet을 삭제한다.

확인할 것:
- delete confirmation 표시
- delete confirm 가능
- success toast 표시
- card가 list에서 사라짐
- item count가 반영됨

### 결과 요약
Playwright MCP는 작업 후 summary를 제공한다.

예:

```text
CRUD test complete.
Snippet was successfully created, updated, and deleted.
```

이 방식은 기능 단위로 전체 사용자 흐름이 깨지지 않았는지 빠르게 확인하는 smoke test로 유용하다.

### `.playwright` folder 관리
Playwright MCP를 사용하면 프로젝트에 `.playwright` folder가 생길 수 있다.

이 folder는 repo에 넣지 않는 것이 좋다.

`.gitignore`에 추가:

```gitignore
.playwright
```

강사는 `.playwright` folder를 삭제하되, 나중에 다시 사용할 수 있으므로 `.gitignore`에는 남겨 두었다.

### 다음 개선 대상
CRUD 기본 흐름은 동작하지만 item display는 아직 개선할 부분이 있다.

예:
- snippet content에 code highlighting 없음
- prompt/note는 markdown editor처럼 보여야 함
- file/image type은 아직 non-functional
- file/image upload나 display 기능 필요

## 예시

Playwright MCP prompt:

```text
Use the Playwright MCP to test CRUD functionality.
Log in with demo@devstash.io.
Create a new snippet, edit its title, then delete it.
```

Expected flow:

```text
Login -> Create -> Read in drawer -> Edit -> Delete
```

Git ignore:

```gitignore
.playwright
```

## 요약
- Playwright MCP를 사용해 실제 browser에서 CRUD 전체 흐름을 E2E로 점검했다.
- 별도 test files를 작성하지 않고 prompt 기반으로 login, create, read, update, delete를 수행했다.
- Toast, drawer, modal, count update, card removal 같은 UI 결과도 함께 확인했다.
- `.playwright` folder는 `.gitignore`에 추가해 repo에 포함하지 않는다.
- 다음 단계는 item type별 display 품질 개선과 file/image 기능 구현이다.
