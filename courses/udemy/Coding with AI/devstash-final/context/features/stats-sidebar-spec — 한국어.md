# Stats & Sidebar Spec

> 원문 [stats-sidebar-spec.md](stats-sidebar-spec.md)의 한국어 번역본입니다.

## Overview

@src/lib/mock-data.ts 파일의 데이터 대신 데이터베이스의 데이터를 사용하여 메인 영역에 통계(stats)를 표시합니다.

사이드바에 시스템 항목 유형(system item types)과 데이터베이스의 실제 컬렉션 데이터를 표시합니다.

## Requirements

- 현재 디자인/레이아웃을 유지하면서 데이터베이스 데이터에 관한 통계 표시
- 사이드바에 항목 유형을 아이콘과 함께 표시하고, /items/[typename]으로 링크 연결
- 컬렉션 목록 아래에 /collections로 이동하는 "View all collections" 링크 추가
- 즐겨찾기(favorite) 컬렉션에는 별 아이콘을 유지하되, 최근(recents) 항목의 경우 각 컬렉션이 해당 컬렉션에서 가장 많이 사용된 항목 유형을 기준으로 색상 원(colored circle)을 표시하도록 함
- @src/lib/db/items.ts 를 생성하고 데이터베이스 함수를 추가. 필요하면 collections 파일을 참고할 것

## References

-  @src/lib/db/collections.ts
