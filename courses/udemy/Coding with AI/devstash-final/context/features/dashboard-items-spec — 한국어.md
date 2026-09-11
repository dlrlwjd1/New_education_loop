# Dashboard Items Spec

> 원문 [dashboard-items-spec.md](dashboard-items-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

대시보드(dashboard) 메인 영역(오른쪽)에 표시되는 더미(dummy) 항목(item) 데이터를 실제 데이터베이스(database) 데이터로 교체합니다. 여기에는 고정된(pinned) 항목과 최근(recent) 항목이 모두 포함됩니다. 지금과 동일하게 보여야 하지만, @src/lib/mock-data.ts의 데이터를 사용하는 대신 Prisma를 통해 Neon 데이터베이스의 데이터를 사용해야 합니다.

고정된 항목이 없으면 그 자리에 아무것도 표시되지 않아야 합니다.

## 요구사항 (Requirements)

- 데이터 조회(data fetching) 함수를 담은 src/lib/db/items.ts 파일을 생성합니다
- 서버 컴포넌트(server component)에서 항목을 직접 조회합니다
- 항목 카드의 아이콘/테두리(border)는 해당 항목 타입(item type)에서 파생됩니다
- 항목 타입 태그(tag)와 현재 표시되는 그 밖의 모든 요소를 표시합니다. 필요하다면 스크린샷을 참고할 수도 있습니다
- 컬렉션 통계(stats) 표시를 업데이트합니다

## 참고 자료 (References)

필요하다면 `@context/screenshots/dashboard-ui-main.png` 스크린샷을 확인하세요. 다만 레이아웃과 디자인은 이미 마련되어 있습니다.
