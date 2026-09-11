# Dashboard Collections Spec

> 원문 [dashboard-collections-spec.md](dashboard-collections-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

대시보드(dashboard) 메인 영역(오른쪽)에 표시되는 더미(dummy) 컬렉션 데이터를 실제 데이터베이스(database) 데이터로 교체합니다. 최근 컬렉션 6개 카드가 지금과 동일하게 보여야 하지만, @src/lib/mock-data.ts의 데이터를 사용하는 대신 Prisma를 통해 Neon 데이터베이스의 데이터를 사용해야 합니다.

아직 하위 항목(items)은 추가하지 마세요. 그 작업은 나중에 진행합니다.

## 요구사항 (Requirements)

- 데이터 조회(data fetching) 함수를 담은 src/lib/db/collections.ts 파일을 생성합니다
- 서버 컴포넌트(server component)에서 컬렉션을 직접 조회합니다
- 컬렉션 카드의 테두리 색상(border color)은 해당 컬렉션에서 가장 많이 사용된 콘텐츠 타입(content type)에서 파생됩니다
- 해당 컬렉션에 포함된 모든 타입의 작은 아이콘을 표시합니다
- 현재 디자인을 유지합니다. 필요하다면 스크린샷을 참고할 수도 있습니다
- 컬렉션 통계(stats) 표시를 업데이트합니다

## 참고 자료 (References)

필요하다면 `@context/screenshots/dashboard-ui-main.png` 스크린샷을 확인하세요. 다만 레이아웃과 디자인은 이미 마련되어 있습니다.
