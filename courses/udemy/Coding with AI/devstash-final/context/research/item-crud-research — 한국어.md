# Item CRUD Architecture

> 원문 [item-crud-research.md](item-crud-research.md)의 한국어 번역본입니다.

## Output

`docs/item-crud-architecture.md`

## Research

7가지 아이템 타입 전체를 위한 통합 CRUD 시스템을 설계합니다.
- 변경 작업(create, update, delete)을 하나의 액션(action) 파일에 배치
- 데이터 페칭(data fetching)은 lib/db에 배치 (서버 컴포넌트(server component)에서 직접 호출)
- 하나의 동적 라우트(dynamic route)와 타입별로 적응하는 공유 컴포넌트

## Include

- 파일 구조 (변경 작업용 actions, 쿼리용 lib/db, 라우트, 컴포넌트)
- `/items/[type]` 라우팅이 동작하는 방식
- 타입별 로직이 위치하는 곳 (액션이 아니라 컴포넌트)
- 컴포넌트의 책임(responsibility)

## Sources

- @context/project-overview.md
- @docs/content-types.md
- @prisma/schema.prisma
- @src/lib/constants.tsx
