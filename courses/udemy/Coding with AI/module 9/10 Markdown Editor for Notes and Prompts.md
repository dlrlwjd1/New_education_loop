# Markdown Editor for Notes and Prompts

## 개요
- Prompt와 note item에는 code editor 대신 markdown editor를 적용한다.
- `react-markdown`, `remark-gfm`, Tailwind Typography를 사용해 markdown preview를 제대로 렌더링한다.
- New Item modal과 drawer view/edit mode 모두에서 notes/prompts만 markdown editor를 사용하게 한다.

## 내용

### 왜 markdown editor가 필요한가
Code editor는 snippets와 commands에는 적합하지만 prompts와 notes에는 어색하다.

문제:
- line numbers가 필요 없음
- markdown syntax가 렌더링되지 않음
- prompt/note는 문서처럼 읽히는 preview가 필요함

따라서 notes와 prompts에는 markdown editor를 추가한다.

### Markdown editor spec
Spec file:

```text
markdown-editor-spec.md
```

요구사항:
- notes와 prompts용 markdown editor component 생성
- write/preview tabs 제공
- dark theme에 맞는 styling
- snippets/commands는 기존 code editor 유지
- `react-markdown` 사용
- GitHub Flavored Markdown 지원을 위해 `remark-gfm` 사용
- read-only mode와 edit mode 지원
- headings, code blocks, lists 등이 시각적으로 구분되어야 함
- New Item modal과 item drawer에 적용

### Packages
설치 package:

```text
react-markdown
remark-gfm
@tailwindcss/typography
```

`react-markdown`은 markdown text를 React component로 렌더링한다.

`remark-gfm`은 GitHub Flavored Markdown을 지원한다.

예:
- tables
- task lists
- strikethrough
- autolinks

Tailwind Typography는 rendered markdown의 heading, paragraph, list, code block styling에 사용한다.

### Markdown editor component
새 component를 만든다.

예:

```text
components/items/markdown-editor.tsx
```

Props 예:
- value
- onChange
- readOnly
- placeholder

State 예:
- active tab
- copied state

지원 기능:
- Write tab
- Preview tab
- copy button
- read-only display
- dark mode styling

### New Item modal integration
`new-item-dialog`에서 prompt/note type을 선택하면 textarea 대신 markdown editor를 표시한다.

동작:
- snippet/command: code editor
- prompt/note: markdown editor
- link: URL input

이제 일반 textarea import가 필요 없어져 제거된다.

### Drawer integration
`item-drawer.tsx`에도 markdown editor를 적용한다.

적용 위치:
- prompt/note view mode
- prompt/note edit mode

View mode에서는 rendered markdown을 보여주고, edit mode에서는 write/preview tabs로 편집할 수 있다.

### 초기 styling 문제
처음 구현 후 markdown이 제대로 렌더링되지 않는 문제가 있었다.

현상:
- heading syntax가 heading처럼 보이지 않음
- list와 paragraph styling이 약함
- preview가 plain text처럼 보임

강사는 Tailwind Typography plugin의 `prose` class가 필요할 수 있다고 추정했다.

Prompt 요지:

```text
The markdown is not rendering.
I believe it may be from not using the Tailwind prose/typography plugin.
I'm not positive, but check it out.
```

AI가 확인한 결과 typography plugin이 설치되어 있지 않았고, 이를 추가했다.

### Prose class 적용
Tailwind Typography 설치 후 rendered markdown 영역에 `prose` 관련 class를 적용한다.

예:

```text
prose prose-invert
```

Dark theme에서 잘 보이도록 `prose-invert`를 사용한다.

이후 heading과 list가 markdown preview처럼 렌더링되었다.

### Editor height 조정
초기에는 markdown editor height가 너무 작았다.

강사는 default height를 더 크게 조정했다.

변경 방향:
- min height를 약 200px로 증가
- max height는 약 400px

너무 크게 만들면 drawer 아래 content를 밀어내므로 적당한 크기를 유지한다.

### Scrollbar styling
Markdown editor의 scrollbar가 code editor와 달라 보였다.

Monaco editor는 자체 internal scrollbar를 사용하기 때문에 완전히 같게 만들 수는 없지만, CSS로 dark theme에 어울리게 조정했다.

목표:
- 밝은 기본 scrollbar를 피함
- dark UI와 자연스럽게 섞이게 함
- code editor 느낌과 최대한 맞춤

### Browser 테스트
확인한 내용:
- prompt drawer에서 markdown preview 렌더링
- note create 후 heading/list 렌더링 확인
- edit mode에서 write/preview tab 작동
- preview tab에서 markdown 렌더링 확인
- copy button 동작
- New Note button에서 note type pre-select
- editor height와 scrollbar 확인

### Tests
이번 변경은 UI component 중심이다.

Server action이나 utility logic을 추가하지 않았으므로 별도 unit test는 만들지 않았다.

기능 확인은 browser에서 직접 수행했다.

### 다음 단계
이제 text/code/markdown item display는 어느 정도 개선되었다.

남은 주요 기능:
- file item upload
- image item upload
- Cloudflare R2 같은 object storage 연동
- file/image drawer display

## 예시

Markdown editor 적용 대상:

```text
prompt
note
```

Packages:

```bash
npm install react-markdown remark-gfm @tailwindcss/typography
```

Preview styling:

```tsx
<div className="prose prose-invert">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {value}
  </ReactMarkdown>
</div>
```

## 요약
- Prompt와 note는 code editor 대신 markdown editor를 사용한다.
- `react-markdown`, `remark-gfm`, Tailwind Typography로 markdown preview를 렌더링한다.
- 초기 렌더링 문제는 typography plugin과 `prose prose-invert` class 적용으로 해결했다.
- New Item modal과 drawer view/edit mode 모두에 markdown editor를 통합했다.
- 다음 단계는 file/image upload와 display 기능이다.
