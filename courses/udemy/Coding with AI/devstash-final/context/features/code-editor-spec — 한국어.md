# 코드 에디터 명세 (Code Editor Spec)

> 원문 [code-editor-spec.md](code-editor-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

복사 버튼(copy button)과 macOS 윈도우 스타일링(window styling)을 갖춘 스니펫(snippet)과 커맨드(command)용 Monaco Editor 컴포넌트를 추가합니다.

## 요구사항 (Requirements)

- 다크 테마(dark theme)를 사용하여 Monaco Editor 기반의 CodeEditor 컴포넌트를 생성합니다
- 스니펫과 커맨드에 한해 Textarea를 CodeEditor로 교체합니다
- notes, prompts 및 기타 코드가 아닌 타입에는 Textarea를 유지합니다
- 에디터 상단에 macOS 스타일 윈도우 점(dots)(빨강/노랑/초록)을 추가합니다
- 에디터 헤더에 빠른 복사 버튼(quick copy button)을 추가합니다
- 에디터 헤더의 복사 버튼 옆에 언어(language)를 추가합니다
- 표시(display, readonly) 모드와 편집(edit) 모드를 모두 지원합니다
- 에디터의 높이를 유동적(fluid)으로 하되 최대 높이는 400px로 하고, 테마와 어울리는 보기 좋은 스크롤바(scrollbar)를 추가합니다
