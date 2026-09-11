# Item Create

> 원문 [item-create-spec.md](item-create-spec.md)의 한국어 번역본입니다.

## Overview

모달 다이얼로그(modal dialog)를 통해 새 항목(item)을 추가한다. 상단 바(top bar)의 "New Item" 버튼에서 열린다.

## Requirements

- shadcn Dialog 컴포넌트 사용
- 타입 선택기(type selector) (snippet, prompt, command, note, link)
- 선택된 타입에 따라 표시되는 필드:
  - 모든 타입: title (필수), description, tags
  - snippet/command: content, language
  - prompt/note: content
  - link: URL (필수)
- Zod 검증이 포함된 서버 액션(server action) `createItem`
- `lib/db/items.ts`의 쿼리 함수 `createItem`
- 성공 시 토스트(toast), 모달 닫기 및 새로고침(refresh)
