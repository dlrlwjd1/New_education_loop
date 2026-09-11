# Dashboard UI Phase 2 Spec

> 원문 [dashboard-phase-2-spec.md](dashboard-phase-2-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

이 문서는 대시보드(dashboard) UI 레이아웃 3단계 중 2단계(phase 2)입니다. 어떻게 보여야 하는지는 아래에서 참조하는 스크린샷을 사용하세요. 데이터는 아래에서 참조하는 목업 데이터(mock data) 파일의 데이터를 사용하세요. 데이터베이스(database)를 구현하기 전까지는 지금은 그냥 직접 import 하세요.

## 2단계(phase 2) 요구사항

- 접을 수 있는(collapsible) 사이드바(sidebar)
- /items/TYPE 로 연결되는 링크가 있는 항목(items)/타입(types) (예: items/snippets)
- 즐겨찾는(favorite) 컬렉션
- 가장 최근(most recent) 컬렉션
- 하단의 사용자 아바타(user avatar) 영역
- 사이드바를 열고/닫는 서랍(drawer) 아이콘
- 모바일 화면에서는 항상 서랍(drawer)

## 참고 자료 (References)

- @context/screenshots/dashboard-ui-main.png
- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-3-spec.md
