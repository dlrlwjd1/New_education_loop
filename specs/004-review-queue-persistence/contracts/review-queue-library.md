# Contract: 복습큐 파싱 + 조회 라이브러리

이 문서는 004가 공개하는 함수 시그니처다. 005-briefing은 "조회" 절만 호출하며, 파싱 절(`parseReviewQueue`)이나 SQLite 스키마를 직접 다루지 않는다(spec.md FR-019 상속).

## 파싱 (`backend/src/reviewQueue/parseReviewQueue.ts`)

```ts
interface ParseReviewQueueResult {
  activeItems: ActiveReviewItem[]
  masteredItems: MasteredItem[]
  errors: ReviewImportError[]
}

function parseReviewQueue(markdownContent: string): ParseReviewQueueResult
```

- **보장**: 부작용 없는 순수 함수 — 파일 시스템에 접근하지 않고 이미 읽은 문자열만 받는다(001의 `parseRoadmaps`/`parseMaterials`와 동일 경계). 입력 문자열이 비어 있거나 두 표 모두 없으면 세 배열 모두 빈 배열을 반환한다(오류 아님, spec.md FR-014).
- 타입 정의는 `data-model.md`를 참고.

## 영속화 오케스트레이션 (`backend/src/persistence/load.ts` 확장)

이 기능은 002의 `reload()`(`contracts/persistence-library.md`, `specs/002-persistence-layer/`)가 호출하는 내부 적재 절차에 `parseReviewQueue()`의 결과를 함께 적재하는 단계를 추가한다. **002가 외부에 공개한 다섯 개 조회 함수의 시그니처는 바뀌지 않는다** — `reload()`를 호출하는 기존 코드(003 등)는 수정할 필요가 없다.

- 004 자체 파일(`내학습/복습큐.md`)의 읽기 경로는 002의 기존 파일 읽기 유틸을 재사용한다(새 파일 I/O 계층을 만들지 않는다).
- 파일이 존재하지 않으면 두 표 모두 빈 것으로 취급하고 오류를 발생시키지 않는다(spec.md FR-014, Edge Cases).

## 조회 함수 (`backend/src/persistence/queries.ts` additive 확장)

### `getReviewQueueStatus(referenceDate?: string, dbPath?: string): ReviewQueueStatus`

```ts
interface ReviewQueueStatus {
  totalActiveCount: number
  dueItems: DueReviewItem[]   // 연체 일수 내림차순 정렬
}

interface DueReviewItem {
  id: string
  item: string
  topic: string
  nextReviewDate: string
  overdueDays: number   // referenceDate - nextReviewDate (일), 0 이상
}
```

- **보장**: `referenceDate`를 생략하면 서버의 오늘 날짜(사용자 시간대 기준 — 005가 계산해 넘긴다)를 쓰지 않고 **호출자가 항상 명시적으로 넘긴다** — "오늘"의 시간대 판정 책임은 005(브리핑)에 있고, 이 함수는 순수하게 날짜 비교만 한다(spec.md FR-013 "복습 일정을 계산하지 않는다"와 일관되게, "오늘이 언제인가"라는 정책적 판단도 여기서 내리지 않는다).
- `totalActiveCount === 0`과 `totalActiveCount > 0 && dueItems.length === 0`을 호출자가 구분할 수 있도록 항상 `totalActiveCount`를 함께 반환한다(spec.md FR-005 — 005의 "아직 쌓인 오답이 없습니다" vs "밀린 복습 없음" 구분은 이 두 값의 조합으로 결정된다).
- `dueItems`는 `overdueDays` 내림차순으로 이미 정렬되어 반환된다 — 호출자가 다시 정렬할 필요가 없다.

### `listMasteredItems(dbPath?: string): MasteredItemView[]`

```ts
interface MasteredItemView {
  id: string
  item: string
  topic: string
  firstWrongDate: string
  masteredDate: string
}
```

- **보장**: `getReviewQueueStatus()`의 결과와 절대 겹치지 않는다 — 마스터 완료 항목은 이 함수에서만 조회된다(spec.md FR-006).

### `listReviewQueueImportErrors(dbPath?: string): ReviewImportErrorView[]`

```ts
interface ReviewImportErrorView {
  sourceTable: "active" | "mastered"
  kind: "date_unparseable" | "row_incomplete"
  detail: string
  rawRow: string
}
```

- **보장**: `import_errors`(001)/`review_import_errors`(004)는 별개 테이블이다 — 001의 오류(자료·로드맵 파싱 실패)와 004의 오류(복습큐 파싱 실패)를 섞어서 반환하지 않는다. 조용히 누락되는 행이 없다(spec.md FR-008, SC-004 상속).

## 안정성 계약

- 위 세 조회 함수와 `parseReviewQueue()`의 시그니처를 바꾸는 것은 005-briefing 작업에 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- `dbPath` 인자는 테스트 전용이며, 생략 시 002가 정의한 실제 캐시 파일 경로(`backend/.cache/learning-loop.sqlite`)를 사용한다(002 계약과 동일 관례).
- 이 계약은 SQLite 스키마(`data-model.md`)를 외부에 노출하지 않는다 — 005는 이 함수들만 호출하고 테이블 구조를 직접 쿼리하지 않는다.
