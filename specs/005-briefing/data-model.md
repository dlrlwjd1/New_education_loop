# Data Model: 브리핑

spec.md의 Key Entities를 서비스 단계(순수 조립 타입)와 영속화 단계(전용 SQLite 스키마)로 나눠 정의한다. research.md §1~3, §7의 결정을 반영한다.

## 서비스 단계 타입 (`backend/src/briefing/types.ts`)

### `RoadmapProgressStatus`

```ts
type RoadmapProgressStatus = "normal" | "not_started" | "no_phase_docs" | "needs_review_format"
```

FR-005의 네 상태 — `no_phase_docs`(진행 자료 없음, `hasPhaseDocs===false`) / `needs_review_format`(Phase 문서는 있으나 `totalCount===0`, "형식 확인 필요") / `not_started`(`completedCount===0 && totalCount>0`) / `normal`(그 외, 정상 집계). 002 `RoadmapSummary`의 `hasPhaseDocs`/`completedCount`/`totalCount`만으로 계산 가능 — 002에 새 필드를 요구하지 않는다.

### `RoadmapProgressView`

| 필드 | 타입 | 설명 |
|---|---|---|
| `roadmapId` | `string` | 002 `RoadmapSummary.roadmapId` |
| `title` | `string` | 002 `RoadmapSummary.title` |
| `completedCount` | `number` | 002 그대로 |
| `totalCount` | `number` | 002 그대로 |
| `status` | `RoadmapProgressStatus` | 위 계산 규칙 |
| `percentLabel` | `string` | FR-004 표시 규칙 적용 결과(예: `"0% (미시작)"`, `"<0.1% (진행 중, 5/799)"`, `"1.2% (3/251)"`, `"<100%"`, `"진행 자료 없음"`, `"형식 확인 필요"`) — `formatProgress.ts`가 생성 |

### `DueReviewItemView`

004 `DueReviewItem`을 그대로 옮긴다 — `id`, `item`, `topic`, `nextReviewDate`, `overdueDays`. 새 필드를 추가하지 않는다(FR-006/FR-007은 004의 정렬·필터 결과를 그대로 신뢰).

### `BriefingSnapshot`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `number` | `briefing_snapshots.id`(AUTOINCREMENT) |
| `referenceDate` | `string` | `YYYY-MM-DD`, 사용자 시간대 기준 "오늘"(FR-002) |
| `timezone` | `string` | 예: `"Asia/Seoul"` |
| `scope` | `"all" \| string` | `"all"` 또는 특정 `roadmapId` |
| `createdAt` | `string` | ISO-8601 UTC, 생성 시각 |
| `roadmaps` | `RoadmapProgressView[]` | scope로 필터링된 로드맵 목록(순서 보존) |
| `averageProgressRatio` | `number \| null` | research.md §3: `roadmaps` 중 `totalCount > 0`인 것들의 `completedCount/totalCount` 산술평균. 대상이 하나도 없으면 `null` |
| `averageProgressRoadmapCount` | `number` | 평균 계산에 포함된 로드맵 수(FR-011 "대상 수 표시") |
| `dueItems` | `DueReviewItemView[]` | 004 `getReviewQueueStatus().dueItems` 그대로(스코프 무관, FR-006) |
| `dueReviewCount` | `number` | `dueItems.length` |
| `totalActiveCount` | `number` | 004 `getReviewQueueStatus().totalActiveCount` 그대로 — FR-009가 요구하는 "복습큐 자체가 비어 있음"(`totalActiveCount === 0`)과 "항목은 있으나 오늘 대상이 없음"(`totalActiveCount > 0 && dueReviewCount === 0`)의 구분은 `dueItems`/`dueReviewCount`만으로는 불가능하므로 이 필드가 그 구분의 유일한 근거다 — 화면(뷰)이 다시 계산하지 않도록 스냅샷에 그대로 보존한다 |
| `reviewDataUnavailable` | `boolean` | research.md §4: 004 조회가 실패했던 경우 `true` — 이 값이 `true`인 스냅샷은 저장되지 않는다(아래 "생성 규칙" 참고), 화면에만 일시적으로 쓰인다 |

**생성 규칙**: `reviewDataUnavailable === true`인 `BriefingSnapshot`은 `briefing/store.ts`에 저장하지 않는다 — 화면에는 "복습 데이터를 불러올 수 없음"과 함께 로드맵 진행률만 보여주고, `id`는 아직 없는(저장 전) 상태로 취급한다(research.md §4).

## 영속화 단계: 전용 SQLite 스키마 (`backend/src/briefing/schema.ts`, 파일: `내학습/briefing-history.sqlite`)

001·002·004의 공유 캐시와 물리적으로 분리된 파일이며, FK로 그 어떤 테이블과도 얽히지 않는다(research.md §2).

```sql
CREATE TABLE IF NOT EXISTS briefing_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reference_date TEXT NOT NULL,
  timezone TEXT NOT NULL,
  scope TEXT NOT NULL,
  created_at TEXT NOT NULL,
  average_progress_ratio REAL NULL,
  average_progress_roadmap_count INTEGER NOT NULL,
  due_review_count INTEGER NOT NULL,
  total_active_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS briefing_snapshot_roadmaps (
  snapshot_id INTEGER NOT NULL REFERENCES briefing_snapshots(id),
  order_index INTEGER NOT NULL,
  roadmap_id TEXT NOT NULL,
  title TEXT NOT NULL,
  completed_count INTEGER NOT NULL,
  total_count INTEGER NOT NULL,
  status TEXT NOT NULL,
  percent_label TEXT NOT NULL,
  PRIMARY KEY (snapshot_id, order_index)
);

CREATE TABLE IF NOT EXISTS briefing_snapshot_review_items (
  snapshot_id INTEGER NOT NULL REFERENCES briefing_snapshots(id),
  order_index INTEGER NOT NULL,
  item_id TEXT NOT NULL,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  next_review_date TEXT NOT NULL,
  overdue_days INTEGER NOT NULL,
  PRIMARY KEY (snapshot_id, order_index)
);

CREATE INDEX IF NOT EXISTS idx_briefing_snapshots_lookup
  ON briefing_snapshots(reference_date, scope, created_at DESC);
```

**검증 규칙**:

- `scope`가 `"all"`이 아니면, 생성 시점에 002 `listRoadmaps()`에 그 `roadmapId`가 실제로 존재하는지 확인한다(FR-018) — 존재하지 않으면 스냅샷을 만들지 않고 오류를 반환한다.
- `average_progress_ratio`는 `average_progress_roadmap_count === 0`일 때만 `NULL`이다.
- `briefing_snapshot_roadmaps`/`briefing_snapshot_review_items`는 생성 시점에 한 번만 기록되고 이후 절대 UPDATE되지 않는다(FR-014 "재계산해 덮어쓰지 않는다") — 이 스키마에는 UPDATE 문 자체가 존재하지 않는다.
- 이 파일은 **스키마 버전 불일치를 삭제·재생성으로 처리하지 않는다**(002·004와 다른 동작, research.md §2) — `db.ts`는 버전 불일치를 발견하면 예외를 던져 사람이 확인하게 한다.

## 관계 요약

```text
briefing_snapshots 1--* briefing_snapshot_roadmaps
briefing_snapshots 1--* briefing_snapshot_review_items
```

이 세 테이블은 002(`roadmaps`/`materials`/...)·004(`review_queue_items`/`mastered_items`/...)의 어떤 테이블과도 FK로 연결되지 않는다 — `roadmap_id`/`item_id` 칼럼은 생성 시점의 값을 그대로 복사해 둔 것일 뿐, 그 원본 로드맵·복습 항목이 나중에 삭제·변경돼도 이 스냅샷 값은 바뀌지 않는다(FR-014의 핵심 보장).
