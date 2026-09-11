# Items List View

> 원문 [item-list-view-spec.md](item-list-view-spec.md)의 한국어 번역본입니다.

## Overview

타입별로 필터링된 항목(item)을 표시하는 `/items/[type]` 경로의 동적 항목 목록 페이지(dynamic items listing page).

## Requirements

- 동적 라우트(dynamic route) `/items/[type]` 생성 (예: /items/snippets, /items/notes)
- 타입으로 필터링된 항목을 가져와 표시
- ItemCard 컴포넌트의 반응형 그리드(responsive grid)
- medium 이상에서 2열(two columns)
- 각 카드는 항목 타입에 따라 색상이 지정된 왼쪽 테두리(left border)를 가진다
- 기존 코드베이스 패턴을 따른다
