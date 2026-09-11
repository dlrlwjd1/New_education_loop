# Markdown Editor Spec

> 원문 [markdown-editor-spec.md](markdown-editor-spec.md)의 한국어 번역본입니다.

## Overview

Write/Preview 탭과 적절한 다크 테마(dark theme) 스타일링을 갖춘, 노트(note)와 프롬프트(prompt)용 마크다운 에디터(Markdown editor) 컴포넌트를 추가한다.

## Requirements

- 탭 인터페이스(Write/Preview)를 갖춘 MarkdownEditor 컴포넌트 생성
- 노트와 프롬프트에 한해 Textarea를 MarkdownEditor로 대체
- 스니펫(snippet)과 커맨드(command)는 CodeEditor를 그대로 유지 (변경 없음)
- GitHub Flavored Markdown 지원을 위해 remark-gfm과 함께 react-markdown 사용
- 기존 다크 테마 스타일링에 맞춤 (bg-[#1e1e1e] 컨테이너, bg-[#2d2d2d] 헤더)
- 헤더에 복사 버튼 추가 (CodeEditor와 동일한 스타일)
- 표시(readonly)와 편집(edit) 모드 모두 지원
- readonly 모드에서는 Preview 탭만 표시
- edit 모드에서는 기본으로 Write 탭을 표시하고 Preview도 사용 가능

## Styling Requirements

- 제목(h1-h6)은 적절한 크기와 굵기로 시각적으로 구별되어야 한다
- 어두운 배경과 monospace 폰트를 가진 코드 블록(code block)
- 은은한 배경 강조가 있는 인라인 코드(inline code)
- 적절한 들여쓰기와 불릿을 가진 목록(순서 있는/없는)
- 왼쪽 테두리 강조가 있는 인용문(blockquote)
- hover 상태를 가진 파란색 링크
- 테두리와 헤더 배경을 가진 테이블
- 안정적인 다크 모드 스타일링을 위해 커스텀 CSS 클래스 사용 (예: `.markdown-preview`)
- 최대 400px의 가변 높이(fluid height), CodeEditor 동작과 일치

## Integration Points

- NewItemDialog: 노트와 프롬프트의 content 필드에 사용
- ItemDrawer (edit mode): 노트와 프롬프트의 content 필드에 사용
- ItemDrawer (view mode): 노트와 프롬프트의 content에 readonly 모드로 사용
