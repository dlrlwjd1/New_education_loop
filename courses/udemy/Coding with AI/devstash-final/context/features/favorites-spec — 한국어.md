# Favorites Page

> 원문 [favorites-spec.md](favorites-spec.md)의 한국어 번역본입니다.

## 개요(Overview)

즐겨찾기한 모든 항목(item)과 컬렉션(collection)을 컴팩트하고 개발자 중심의 목록으로 보여주는 /favorites 페이지를 추가한다.

## 요구사항(Requirements)

- TopBar에 /favorites로 연결되는 별(star) 아이콘 버튼 추가
- 보호(protection)가 적용된 /favorites 라우트(route) 생성
- 사용자가 즐겨찾기한 모든 항목과 컬렉션을 가져오기
- 컴팩트한 목록 뷰(VS Code/터미널 스타일, 카드 형태가 아님)
- 각 행(row): 타입 아이콘, 제목, 타입 배지(badge), 추가된 날짜
- 항목과 컬렉션을 각각의 섹션으로 분리하고 개수 표시
- 항목 클릭 시 ItemDrawer 열기, 컬렉션 클릭 시 /collections/[id]로 이동
- 즐겨찾기가 없을 때의 빈 상태(empty state)
- 가장 최근에 즐겨찾기한 순서(updatedAt)로 정렬

## UI 스타일(UI Style)

- 모노스페이스(monospace) 또는 준(準)모노스페이스 폰트
- 최소한의 여백(padding), 높은 밀도
- 은은한 호버(hover) 상태
- 카드나 두꺼운 테두리 없이, 깔끔한 선(line)만 사용
