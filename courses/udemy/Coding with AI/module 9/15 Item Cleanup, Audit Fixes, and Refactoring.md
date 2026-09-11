# Item Cleanup, Audit Fixes, and Refactoring

## 개요
- Item CRUD와 display 기능을 마무리하면서 quick copy button을 추가한다.
- Cleanup command와 Code Scanner sub-agent로 codebase를 점검하고, low-risk quick wins를 feature로 반영한다.
- 큰 component와 중복 logic을 분리해 유지보수하기 쉬운 구조로 리팩터링한다.

## 내용

### Item 기능 마무리
Item 쪽은 CRUD, drawer, editor, file/image upload, image gallery, file list display까지 대부분 완성되었다.

마지막으로 강사는 item card에서 drawer를 열지 않고도 content를 바로 복사할 수 있는 quick copy를 추가했다.

목표:
- card에서 바로 copy 가능
- drawer를 열고 copy button을 누르는 단계를 줄임
- snippet, command, link 등 copy 가능한 item에만 표시

### Quick copy button
작은 변경이라 별도 feature branch 없이 바로 prompt로 처리했다.

Prompt 요지:

```text
Add a quick copy icon to the cards.
```

구현 내용:
- item card에 copy button 추가
- copy 가능한 content 또는 URL이 있는지 확인
- click 시 clipboard에 복사
- 복사 후 check icon 표시

처음 위치는 마음에 들지 않아 bottom-right로 옮겼다.

Prompt:

```text
Move the icon to the bottom right.
```

### Cleanup command 실행
Quick copy 변경 후 `/cleanup` command를 실행했다.

Cleanup이 확인한 항목:
- current feature/history order
- console statements
- unused imports
- orphan files
- env file consistency

이번 cleanup에서는 history/current feature의 일부 entry가 chronological order에서 어긋난 것을 발견했다.

강사는 cleanup에게 reorder를 맡겨 history 순서를 정리했다.

### Code Scanner audit
그 다음 Code Scanner sub-agent로 전체 codebase audit을 실행했다.

요청 요지:

```text
Use the Code Scanner to audit the codebase
and look for security issues, optimizations,
duplicate code, etc.
Do not report things that are not implemented yet
or false positives.
```

Code Scanner는 자체 context를 사용하지만, 결과는 main context로 보고한다.

### Audit findings
Scanner가 보고한 주요 항목:

- bcrypt rounds 불일치
- middleware not activated
- CSRF protection 관련 지적
- URL protocol validation 부족
- native `img` tags 사용
- error details logging
- upload rate limiting 없음
- file content validation 부족
- DB pool limits
- markdown editor resize debounce

강사는 이 중 일부는 false positive 또는 당장 필요 없는 항목으로 판단했다.

예:
- NextAuth 최신 방식에서 middleware 관련 지적은 부정확할 수 있음
- 모든 destructive operation CSRF는 더 검토가 필요
- DB pool limit은 지금 quick win이 아님

### Quick wins만 선별
Audit 결과를 곧바로 전부 적용하지 않고, 강사는 다음처럼 요청했다.

```text
Give me a list of the quick wins with little to no risk.
```

이 방식은 audit 결과 중 risk가 낮고 효과가 분명한 것만 골라 적용하기 위한 좋은 습관이다.

선택한 fixes:
- bcrypt rounds 표준화
- markdown editor resize debounce
- URL protocol validation
- `next/image` 사용
- upload rate limiting

### Security and performance fixes feature
선택한 quick wins를 current feature로 만들고 `/feature start`를 실행했다.

Feature 요지:

```text
Security and performance fixes identified from codebase audit.
```

적용된 변경:
- password reset hashing rounds를 10에서 12로 변경
- markdown editor resize debounce 추가
- URL validation에서 `http`/`https` protocol만 허용
- image thumbnail에서 native `img` 대신 Next.js `Image` component 사용
- R2 image URL을 허용하도록 `next.config.ts` 수정
- upload rate limit 추가

### Upload rate limiting
File/image upload에도 rate limiting을 추가했다.

정책:

```text
10 uploads per hour per user
```

목적:
- upload abuse 방지
- R2 storage 남용 방지
- 비용/리소스 보호

### Manual regression check
Fix 적용 후 browser에서 주요 기능을 확인했다.

확인:
- images page에서 thumbnail이 계속 표시됨
- 새 image upload가 동작함
- upload 후 card/gallery에 표시됨

강사는 upload 10회 제한을 직접 모두 테스트하지는 않았지만, 기본 upload 동작은 확인했다.

Build도 통과했다.

### Refactoring prompt
그 다음에는 code scanner와 별개로 코드 구조 개선을 요청했다.

Prompt 요지:

```text
Check for areas where we can break up large blocks of code
into separate functions, components, or utilities.
```

AI coding은 큰 monolithic file을 만들기 쉬우므로, 이런 리팩터링 점검을 주기적으로 하는 것이 중요하다.

### Refactoring opportunities
보고된 high priority 항목:

- `item-drawer.tsx`가 약 691 lines로 너무 큼
- `lib/db/items.ts`에 duplicated data mapping 존재
- `new-item-dialog`의 form state가 복잡함

제안된 분리:
- `ItemDrawerEditForm`
- `ItemDrawerViewContent`
- `ItemDrawerHeader`
- item mapping transform functions
- `useNewItemForm` custom hook

Quick wins:
- `useClipboard` hook
- Zod error parsing utility
- date formatting helper
- editor header duplication 제거

강사는 sidebar sharing은 제외하고 나머지를 feature로 만들었다.

```text
Create a feature with all except the sidebar sharing.
```

### useClipboard hook
처음으로 custom hooks directory가 만들어졌다.

예:

```text
src/hooks/use-clipboard.ts
```

역할:
- clipboard copy logic 공통화
- copied state 관리
- success/error feedback 처리

적용 대상:
- code editor
- markdown editor
- item drawer/card copy button

이전에는 각 component가 직접 clipboard logic과 toast를 들고 있었지만, hook으로 분리해 중복을 줄였다.

### Large component split
`item-drawer.tsx`처럼 너무 큰 file은 여러 component로 분리한다.

장점:
- 읽기 쉬움
- 수정 위치가 명확함
- 테스트/리뷰가 쉬움
- AI가 이후 변경할 때 실수할 가능성이 줄어듦

강사는 12개 파일 정도가 추가/수정되었고, items folder에 component들이 더 잘 분리되었다고 설명했다.

### Refactor 후 확인
강사는 edit 등 주요 기능을 직접 확인했고, 정상 동작한다고 판단했다.

결과:
- 중복 code 감소
- 더 유지보수하기 쉬운 구조
- 더 읽기 쉬운 component 구성
- 기능은 기존처럼 동작

### 다음 단계
Item 기능은 마무리되었고, 다음은 collections functionality로 넘어간다.

남은 큰 흐름:
- collection CRUD
- item과 collection 연결
- collection page/display
- collection 관련 workflow

## 예시

Quick copy:

```text
Item card -> Copy icon -> Clipboard -> Check icon feedback
```

Audit quick wins:

```text
bcrypt rounds to 12
URL protocol validation
Next Image for R2 images
Upload rate limiting
Markdown resize debounce
```

Refactor candidates:

```text
item-drawer.tsx -> header/view/edit/actions subcomponents
clipboard logic -> useClipboard hook
Zod error parsing -> shared utility
item mapping -> transform functions
```

## 요약
- Item cards에 quick copy button을 추가해 drawer를 열지 않고도 content/URL을 복사할 수 있게 했다.
- Cleanup command로 history order 같은 작은 정리 항목을 수정했다.
- Code Scanner audit 결과 중 low-risk quick wins만 선별해 보안/성능 개선 feature로 반영했다.
- Upload rate limiting, URL validation, Next Image 적용 등 실질적인 개선을 추가했다.
- 큰 component와 중복 logic을 분리해 codebase를 더 유지보수하기 쉽게 리팩터링했다.
