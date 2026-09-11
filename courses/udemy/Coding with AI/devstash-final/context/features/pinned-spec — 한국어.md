# Pinned Items

> 원문 [pinned-spec.md](pinned-spec.md)의 한국어 번역본입니다.

## Overview

ItemDrawer에 이미 존재하는 Pin 버튼을 실제로 동작하도록 만들어, 고정된(pinned) 항목이 목록 상단과 대시보드의 pinned items 섹션에 나타나게 합니다.

## Requirements

- toggleItemPin 서버 액션(server action) 생성
- ItemDrawer의 Pin 버튼을 클릭 가능하게 만들기 (버튼은 있지만 onClick이 없음)
- 즉각적인 피드백을 위한 낙관적 UI 업데이트(optimistic UI updates)
- 성공/실패 시 토스트 알림(toast notification)
- 고정된 항목을 목록 상단으로 정렬
- Favorite Button 패턴을 따를 것
- 항목(item)만 대상 (컬렉션은 제외)
- ItemCard의 Pin 아이콘은 정적 표시자(static indicator)로 유지
