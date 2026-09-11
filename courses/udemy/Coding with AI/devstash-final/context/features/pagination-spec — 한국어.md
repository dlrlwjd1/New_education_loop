# Pagination

> 원문 [pagination-spec.md](pagination-spec.md)의 한국어 번역본입니다.

## Overview

번호가 매겨진 페이지 링크와 함께 항목(item) 및 컬렉션(collection) 목록에 페이지네이션(pagination)을 추가한다.

## Requirements

- /items/[type] 및 /collections/[id] 페이지에 페이지네이션 추가
- 페이지 번호와 이전/다음(prev/next) 링크가 있는 페이지네이션 컨트롤을 하단에 배치
- 사용할 수 없을 때 이전/다음을 비활성화(회색 처리)
- 상수 사용: ITEMS_PER_PAGE = 21, COLLECTIONS_PER_PAGE = 21
- 대시보드 제한: DASHBOARD_COLLECTIONS_LIMIT = 6, DASHBOARD_RECENT_ITEMS_LIMIT = 10
- 모든 리소스를 한 번에 가져오지 않는다. 한 페이지에 필요한 양만 가져온다
