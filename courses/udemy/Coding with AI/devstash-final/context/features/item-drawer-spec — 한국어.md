# Item Drawer

> 원문 [item-drawer-spec.md](item-drawer-spec.md)의 한국어 번역본입니다.

## Overview

항목 카드(item card)를 클릭하면 열리는 오른쪽 슬라이드인 드로어(right-side slide-in drawer). 이것이 항목 상세 보기(item detail view)이며, 별도의 항목 페이지는 없다.

## Requirements

- shadcn Sheet 컴포넌트 사용, 오른쪽에서 열린다
- ItemCard를 클릭하면 해당 항목의 전체 데이터와 함께 드로어가 열린다
- 대시보드(dashboard)와 항목 목록(items list) 페이지 모두에서 동작한다
- Favorite(별 아이콘, 활성화 시 노란색), Pin, Copy, Edit(연필 아이콘), Delete(휴지통 아이콘, 오른쪽 정렬)가 있는 액션 바(action bar) — 레이아웃은 스크린샷 참고
- 코드 에디터(code editor)나 항목별 기능 같은 부가 요소는 나중에 다룬다. 지금은 드로어의 상세 표시 작업에만 집중한다.
- 페이지가 서버 컴포넌트(server component)이므로 드로어 상태를 관리할 클라이언트 래퍼(client wrapper) 컴포넌트가 필요하다
- 빠릿하게 느껴져야 한다 — 클릭 시 fetch하고, 페이지 이동(page navigation)은 없다

## Data Fetching

- 카드 데이터(title, description, tags 등)는 이전과 같이 서버 컴포넌트가 가져온다
- 전체 항목 상세(content, collections, language 등)는 클릭 시 API 라우트(`/api/items/[id]`)를 통해 가져온다
- 쿼리 함수는 `lib/db/items.ts`에 있으며, API 라우트가 인증 확인(auth check)과 함께 이를 호출한다
- 드로어는 가져오는 동안 스켈레톤/로딩 상태(skeleton/loading state)를 표시한다

## Reference

시각적 디자인은 `context/screenshots/dashboard-ui-drawer.png`를 참고한다.
