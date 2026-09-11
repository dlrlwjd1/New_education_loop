# Import/Export

> 원문 [import-export-spec.md](import-export-spec.md)의 한국어 번역본입니다.

## Overview

사용자가 자신의 데이터를 JSON(무료)으로, 또는 파일이 포함된 ZIP(Pro)으로 내보내고(export), 이전에 내보낸 JSON 파일에서 데이터를 가져올(import) 수 있도록 한다. `/settings` 페이지의 새로운 "Data" 섹션에 위치한다.

## Export

### JSON Export (Free)

- "Export JSON" 버튼은 사용자의 모든 항목(item), 컬렉션(collection), 태그(tag), 컬렉션 할당(collection assignment)을 조회하는 서버 액션(server action)을 실행한다
- `devstash-export-{date}.json` 파일을 생성하며 `/api/export` 라우트(route)를 통해 다운로드된다
- 파일/이미지 항목은 메타데이터(fileName, fileSize)를 포함하지만 실제 파일은 포함하지 않는다
- 내보내기 형식:

```json
{
  "version": 1,
  "exportedAt": "2026-03-11T...",
  "items": [
    {
      "title": "useAuth hook",
      "type": "snippet",
      "content": "export function useAuth()...",
      "language": "typescript",
      "description": "Custom auth hook",
      "tags": ["react", "auth"],
      "collections": ["React Patterns"],
      "isFavorite": true,
      "isPinned": false,
      "createdAt": "...",
      "updatedAt": "..."
    }
  ],
  "collections": [
    {
      "name": "React Patterns",
      "description": "Common React patterns",
      "isFavorite": false
    }
  ]
}
```

### ZIP Export (Pro)

- PRO 배지가 붙은 "Export ZIP" 버튼
- 위와 동일한 JSON 매니페스트(manifest)에 더해, R2에 있는 실제 파일/이미지를 `/files` 디렉터리에 포함한다
- `devstash-export-{date}.zip` 파일을 다운로드한다

## Import

### UI Flow

1. "Import" 버튼이 다이얼로그(dialog)를 연다
2. `.json` 파일을 위한 파일 드롭 존(file drop zone) (FileUpload의 드래그 앤 드롭(drag-and-drop) 패턴 재사용)
3. 파일이 선택되면 파싱(parse)한 뒤 미리보기 요약(preview summary)을 표시한다:
   - 타입별 항목 개수 (예: "8 snippets, 6 prompts, 5 commands")
   - 컬렉션 개수
   - 태그 개수
4. "Skip duplicates" 체크박스 (title + type + content 해시(hash)로 일치 여부 판단)
5. 진행 표시기(progress indicator)가 있는 "Import" 버튼
6. 완료 시 토스트(toast): "Imported 24 items and 4 collections"

### Mechanics

- 서버 액션은 내보내기 형식과 일치하는 Zod 스키마(schema)로 JSON을 검증한다
- 먼저 컬렉션을 생성하고, 그다음 태그를 connectOrCreate로 처리하며 항목을 생성한 뒤, 컬렉션 할당을 처리한다
- 이 모든 과정은 Prisma 트랜잭션(transaction)으로 감싼다
- 무료 등급 제한(50개 항목 / 3개 컬렉션)이 적용된다 — 초과 시 중단하고 경고를 표시한다
- 무료 사용자의 경우 file/image 타입 항목은 건너뛴다
- 중복 감지(Duplicate detection): title + type + content/URL로 일치 여부 판단

## Settings Page UI

Billing과 Account 사이에 새로운 "Data" 섹션을 둔다:

```
┌─────────────────────────────────────┐
│  Data                               │
│                                     │
│  Export your data or import from     │
│  a previous export.                 │
│                                     │
│  [Export JSON]  [Export ZIP] [PRO]   │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  [Import from JSON]                 │
└─────────────────────────────────────┘
```

## Files Involved

- `src/components/settings/DataSettings.tsx` - 새로운 설정 섹션 컴포넌트
- `src/app/(dashboard)/settings/page.tsx` - Billing과 Account 사이에 DataSettings 추가
- `src/actions/export.ts` - exportData 서버 액션
- `src/actions/import.ts` - Zod 검증이 포함된 importData 서버 액션
- `src/app/api/export/route.ts` - JSON/ZIP 다운로드를 스트리밍(stream)하는 GET 라우트
- `src/lib/db/export.ts` - 내보내기용 전체 사용자 데이터를 가져오는 쿼리
- `src/components/settings/ImportDialog.tsx` - 미리보기와 진행 상태가 있는 가져오기 모달(modal)
- export/import 액션에 대한 단위 테스트(unit test)

## Validation

- JSON 형식에 대한 내보내기 Zod 스키마 (가져오기 시 구조 검증에 사용)
- 향후 형식 마이그레이션(migration)을 위한 version 필드
- 잘못된 형식의 JSON을 사용자 친화적인 오류 메시지와 함께 우아하게(gracefully) 처리
