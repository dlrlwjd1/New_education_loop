# File List View Spec

> 원문 [file-display-spec.md](file-display-spec.md)의 한국어 번역본입니다.

## 목표(Goal)

`/items/files`를 그리드(grid) 카드 대신 단일 열(single-column) 목록(Google Drive/Dropbox 스타일)으로 표시하도록 업데이트한다.

## 요구사항(Requirements)

- 행(row)으로 구성된 단일 열 목록 레이아웃
- 각 행에 표시할 내용: 파일 아이콘(확장자 기준), 파일 이름, 파일 크기, 업로드 날짜, 다운로드 버튼
- 행 호버(hover) 하이라이트
- 행 클릭 시 ItemDrawer 열기
- 다운로드 버튼은 직접 다운로드를 트리거(이벤트 전파 중단, stop propagation)
- 반응형(responsive): 모바일에서는 정보를 세로로 쌓아서 표시
