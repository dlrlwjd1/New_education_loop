# Code Editor for Snippets and Commands

## 개요
- Snippet과 command item의 content 표시를 일반 textarea에서 Monaco 기반 code editor로 개선한다.
- Drawer view/edit mode와 New Item modal 모두에서 code editor를 사용한다.
- MacOS 스타일 header, syntax highlighting, language label, quick copy button을 추가한다.

## 내용

### 개선 목표
CRUD 기능은 완성되었지만 item content 표시가 아직 단순하다.

특히 snippet과 command는 코드나 명령어를 저장하는 item type이므로 다음 기능이 필요하다.

- syntax highlighting
- code editor look
- language 표시
- copy button
- readable scroll area
- view mode와 edit mode 모두 지원

Prompt나 note는 code editor가 아니라 markdown editor가 더 적합하므로 다음 강의에서 따로 다룬다.

### Code editor spec
Spec file:

```text
code-editor-spec.md
```

요구사항:
- Monaco Editor 추가
- snippet과 command에만 적용
- MacOS window style header 사용
- quick copy button 제공
- language label 표시
- read-only mode와 edit mode 모두 지원
- editor height는 fluid하게, max height는 약 400px
- notes, prompts 등 non-code type은 기존 plain text/다른 editor 유지

### Monaco Editor
사용 package:

```text
@monaco-editor/react
```

Monaco는 VS Code 기반 editor로 syntax highlighting과 editor UI를 쉽게 제공한다.

강사는 여러 code editor package 중 Monaco가 설정이 쉽고 보기 좋아서 사용한다고 설명했다.

### Code editor component
새 component를 만든다.

예:

```text
components/items/code-editor.tsx
```

역할:
- Monaco editor wrapping
- MacOS style header 표시
- language label 표시
- copy button 제공
- read-only/edit mode 처리
- height와 scrollbar 설정

### Drawer integration
`item-drawer.tsx`에서 item type이 snippet 또는 command일 때 code editor를 표시한다.

적용 위치:
- drawer view mode
- drawer edit mode

Snippet/command가 아닌 type에는 code editor를 적용하지 않는다.

예:
- snippet: code editor
- command: code editor
- prompt: markdown editor 예정
- note: markdown editor 예정
- link: URL display/input

### New Item modal integration
처음 구현에서는 drawer에는 code editor가 들어갔지만 New Item modal에는 반영되지 않았다.

강사는 추가 prompt로 수정했다.

Prompt 요지:

```text
The New Item modal should use the editor if the snippet or command type is selected.
```

이후 `new-item-dialog`에서도 snippet/command 선택 시 code editor가 표시되었다.

### Type-specific Add button
추가로 item type page마다 type-specific add button을 만들었다.

이유:
- `/items/commands` page에서 `New Item`을 누르면 command가 기본 선택되면 좋음
- `/items/snippets` page에서는 snippet이 기본 선택되면 좋음
- top bar의 generic `New Item`은 기본 snippet으로 유지 가능

Prompt 요지:

```text
Add a type-specific Add button on each type page
and pre-select the type in the New Item dialog.
```

결과:
- snippets page: `New Snippet`
- prompts page: `New Prompt`
- links page: `New Link`

이 button은 해당 type을 pre-select한 상태로 create modal을 연다.

### Server/client component 분리
Item listing page는 server component다.

Type-specific button은 interactive state가 필요하므로 별도 client component로 분리한다.

예:

```text
components/items/items-page-header.tsx
```

역할:
- page title 표시
- type-specific create button 표시
- default type을 New Item dialog에 전달

### Browser 테스트
확인한 내용:
- snippet drawer에서 syntax highlighting 표시
- command drawer에서도 code editor 표시
- prompt는 code editor를 사용하지 않음
- snippet edit mode에서도 code editor 유지
- New Item modal에서 snippet/command 선택 시 code editor 표시
- note 선택 시 code editor 미표시
- type page의 New Snippet/New Prompt/New Link button이 적절한 type을 pre-select

### Tests
`/feature test`를 실행했지만 새 unit test는 필요 없다고 판단했다.

이유:
- 대부분 UI component 변경
- server action이나 utility logic 추가 없음

기존 tests만 실행해 통과를 확인했다.

## 예시

Code editor 적용 대상:

```text
snippet
command
```

Component 예:

```tsx
<CodeEditor
  value={content}
  language={language}
  readOnly={!isEditing}
/>
```

Type-specific add buttons:

```text
New Snippet
New Command
New Link
```

## 요약
- Snippet과 command content는 Monaco code editor로 표시한다.
- Drawer의 view/edit mode와 New Item modal 모두에 code editor를 적용했다.
- Prompt/note는 code editor 대상이 아니며 markdown editor로 분리한다.
- Type별 page에는 `New Snippet` 같은 type-specific add button을 추가했다.
- UI 중심 변경이라 새 unit test는 만들지 않고 기존 tests만 실행했다.
