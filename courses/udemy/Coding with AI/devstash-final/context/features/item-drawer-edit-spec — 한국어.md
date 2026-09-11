# Item Drawer — Edit Mode

> 원문 [item-drawer-edit-spec.md](item-drawer-edit-spec.md)의 한국어 번역본입니다.

## Overview

항목 드로어(item drawer)의 액션 바(action bar)에서 Edit 버튼(연필 아이콘)을 클릭하면 보기 모드(view mode)에서 편집 모드(edit mode)로 인라인(inline) 전환된다. 동일한 드로어(drawer)가 그대로 열린 상태로 유지되며, 필드들이 편집 가능한 입력(input)으로 바뀐다.

## Requirements

### Mode Toggle

- Edit 버튼은 드로어를 편집 모드로 전환한다
- 편집 모드에서는 액션 바가 Save 및 Cancel 버튼으로 대체된다
- Cancel은 변경 사항을 폐기하고 보기 모드로 돌아간다
- Save는 서버 액션(server action)을 통해 변경 사항을 저장하고, 보기 모드로 돌아가며, 드로어 데이터를 새로고침한다
- 저장 성공 또는 오류 시 토스트(toast) 알림

### Editable Fields

모든 타입:

- **Title** — 텍스트 입력, 필수
- **Description** — textarea, 선택
- **Tags** — 쉼표로 구분된 텍스트 입력으로, 저장 시 태그 배열로 변환된다

타입별 (해당 항목 타입에만 표시):

| Field        | Shown for                      | Input type |
| ------------ | ------------------------------ | ---------- |
| **Content**  | snippet, prompt, command, note | textarea   |
| **Language** | snippet, command               | text input |
| **URL**      | link                           | text input |

### Non-Editable (편집 모드에서 표시만 됨)

- 항목 타입 (snippet, prompt 등) — 변경 불가
- Collections — 별도로 관리 예정
- 생성/수정 날짜

## Validation

업데이트 페이로드(payload)에 대한 Zod 스키마(schema) (코딩 표준에 따름). 데이터베이스에 도달하기 전에 서버 액션에서 검증한다.

- `title` — 비어 있지 않은 문자열, 트림(trim) 처리
- `description` — 문자열 또는 null, 선택
- `content` — 문자열 또는 null, 선택
- `url` — 유효한 URL 문자열 또는 null, 선택
- `language` — 문자열 또는 null, 선택
- `tags` — 트림 처리된 비어 있지 않은 문자열의 배열

`{ success: false, error }` 응답에 Zod 오류를 반환하여 클라이언트가 이를 표시할 수 있도록 한다.

## Server Action

`src/actions/items.ts`의 `updateItem(itemId, data)`는 `{ success, data, error }` 반환 패턴을 따른다. Zod로 입력을 검증하고, `auth()`를 통해 세션(session)을 가져오며, 소유권(ownership)을 검증한 뒤 쿼리 함수를 호출한다.

## Data

- `lib/db/items.ts`의 쿼리 함수 — `updateItem`
- 업데이트 시 태그 처리: 기존 태그를 모두 disconnect한 뒤 새 태그를 connect-or-create 처리
- 드로어가 두 번째 fetch 없이 새로고침할 수 있도록 업데이트된 `ItemDetail`을 반환한다

## Notes

- 단순하게 유지 — 폼 라이브러리(form library)는 필요 없으며, 로컬 상태(local state)를 사용하는 제어 입력(controlled input)을 사용한다
- 클라이언트 측: title이 비어 있으면 Save 버튼을 비활성화한다 (기본적인 UX 가드)
- 서버 측: Zod가 서버 액션에서 모든 필드를 검증한다 (진실의 원천, source of truth)
- content textarea는 코드 에디터(code editor)일 필요가 없다 — 그것은 나중에 다룬다
- 저장 후에는 `router.refresh()`를 호출하여 하위의 카드 목록에 변경 사항이 반영되도록 한다
