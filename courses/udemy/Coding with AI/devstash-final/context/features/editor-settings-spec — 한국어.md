# Editor Preferences Settings

> 원문 [editor-settings-spec.md](editor-settings-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

설정 페이지(settings page)에 데이터베이스(database)로 자동 저장(auto-save)되는 에디터 환경설정(editor preferences) 섹션을 추가합니다.

## 요구사항 (Requirements)

- 글꼴 크기(font size) 드롭다운
- 탭 크기(tab size) 드롭다운
- 자동 줄 바꿈(word wrap) 토글 (기본값: 켜짐)
- 미니맵(minimap) 토글 (기본값: 꺼짐)
- 테마(theme) 드롭다운: vs-dark, monokai, github-dark (기본값: vs-dark)
- User 모델의 JSON 컬럼(column) `editorPreferences`에 저장
- 데이터베이스에 대한 마이그레이션(migration)을 생성하고 실행 (절대 db push 사용 금지)
- 환경설정을 업데이트하는 서버 액션(server action) 생성
- Monaco 에디터 컴포넌트(editor component)에 설정 적용
- 변경 시 자동 저장 (저장 버튼 없음)
- 저장 시 성공 토스트(success toast) 표시
- 클라이언트 컴포넌트(client components)를 위한 EditorPreferencesContext 생성
