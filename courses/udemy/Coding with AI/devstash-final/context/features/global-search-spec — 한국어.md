# Global Search / Command Palette

> 원문 [global-search-spec.md](global-search-spec.md)의 한국어 번역본입니다.

## 개요(Overview)

항목(item)과 컬렉션(collection) 전반에 걸친 퍼지 검색(fuzzy search)을 지원하는 전역 명령 팔레트(command palette, Cmd+K / Ctrl+K)를 추가한다.

## 요구사항(Requirements)

- Cmd+K(Mac) / Ctrl+K(Windows)로 열기
- 모든 항목과 컬렉션에 대한 퍼지 검색(fuzzy search)
- 그룹화된 결과: 항목(Items) 섹션, 컬렉션(Collections) 섹션
- 키보드 내비게이션(방향키, Enter로 선택)
- 항목 타입 아이콘과 컬렉션의 항목 개수 표시
- 선택 시 항목 드로어(drawer) 또는 컬렉션 페이지로 이동
- TopBar 검색 입력창을 클릭하면 팔레트가 열림
- 검색 입력창의 플레이스홀더(placeholder)에 ⌘K 힌트 표시

## 기술 사항(Technical)

- shadcn `cmdk` 컴포넌트(Command) 사용
- 클라이언트 사이드(client-side) 퍼지 검색(서버 왕복 없음)
- 앱 로드 시 검색 가능한 데이터를 미리 가져오기(pre-fetch)
- 검색 데이터: items(id, title, type, content preview), collections(id, name, itemCount)
- 기존 데이터 페칭(data fetching) 함수 재사용
