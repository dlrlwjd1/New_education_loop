# Data Model: 영속 저장소 계층 (Persistence Layer)

이 문서는 001 `data-model.md`의 엔티티를 SQLite 스키마로 옮기는 매핑 규칙(FR-008 — 001의 타입과 필드가 유일한 근거)과, 이 기능이 새로 추가하는 조회 지원 엔티티를 정의한다. 001이 정의한 필드 의미를 다시 설명하지 않고, 001 문서를 참조한다.

## 매핑 원칙

- 표는 001 엔티티 → SQLite 테이블/컬럼 대응만 다룬다. 필드 의미는 [001 data-model.md](../001-content-ingestion-foundation/data-model.md)를 근거로 삼는다(FR-008).
- 모든 기본 키는 001이 `resolveIdentity`로 부여한 안정적 식별자를 그대로 사용한다(FR-006 — 재적재해도 행이 늘지 않음의 근거).
- `boolean | null` 필드(예: `LearningItem.completed`)는 SQLite에 네이티브 boolean이 없으므로 `INTEGER`(0/1)로 저장하고 `NULL`을 그대로 허용한다.
- 배열 필드(`Material.linkedRoadmapIds`)는 정규화해 별도 조인 테이블로 저장한다(질의 가능성을 위해 JSON 컬럼으로 뭉치지 않는다).

## 테이블

### `roadmaps` (← 001 `Roadmap`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | TEXT PRIMARY KEY | 001 `Roadmap.id` |
| `source_path` | TEXT NOT NULL | 001 `Roadmap.sourcePath` |
| `title` | TEXT NOT NULL | 001 `Roadmap.title` |
| `has_phase_docs` | INTEGER NOT NULL | 001 `Roadmap.hasPhaseDocs` (0/1) |
| `order_index` | INTEGER NOT NULL | 001 `Roadmap.orderIndex` |

### `tracks` (← 001 `Track`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | TEXT PRIMARY KEY | 001 `Track.id` |
| `roadmap_id` | TEXT NOT NULL REFERENCES roadmaps(id) | 001 `Track.roadmapId` |
| `title` | TEXT NOT NULL | 001 `Track.title` |
| `order_index` | INTEGER NOT NULL | 001 `Track.orderIndex` |

### `phases` (← 001 `Phase`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | TEXT PRIMARY KEY | 001 `Phase.id` |
| `roadmap_id` | TEXT NOT NULL REFERENCES roadmaps(id) | 001 `Phase.roadmapId` |
| `track_id` | TEXT NULL REFERENCES tracks(id) | 001 `Phase.trackId`(트랙 없으면 NULL) |
| `source_path` | TEXT NOT NULL | 001 `Phase.sourcePath` |
| `title` | TEXT NOT NULL | 001 `Phase.title` |
| `order_index` | INTEGER NOT NULL | 001 `Phase.orderIndex` |
| `aggregatable` | INTEGER NOT NULL | 001 `Phase.aggregatable` (0/1) |

### `learning_items` (← 001 `LearningItem`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | TEXT PRIMARY KEY | 001 `LearningItem.id` |
| `phase_id` | TEXT NOT NULL REFERENCES phases(id) | 001 `LearningItem.phaseId` |
| `order_index` | INTEGER NOT NULL | Phase 내 순서 보존(001은 배열 순서로만 표현 — 002가 조회 시 순서를 재구성하기 위해 명시적 컬럼으로 승격) |
| `text` | TEXT NOT NULL | 001 `LearningItem.text` |
| `completed` | INTEGER NULL | 001 `LearningItem.completed` (0/1/NULL) |
| `completed_date` | TEXT NULL | 001 `LearningItem.completedDate` (ISO 8601 문자열) |
| `linked_material_id` | TEXT NULL REFERENCES materials(id) | 001 `LearningItem.linkedMaterialId` |
| `needs_review` | INTEGER NOT NULL DEFAULT 0 | 002 신규 — 이 항목에 대응하는 `import_errors` 행이 있으면 1(FR-005, "확인 필요" 상태) |

`isFromCodeBlock`은 001 정의상 이 목록에 포함된 항목은 항상 `false`이므로(001 FR-005) 저장소 컬럼으로 옮기지 않는다.

### `materials` (← 001 `Material`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | TEXT PRIMARY KEY | 001 `Material.id` |
| `source_path` | TEXT NOT NULL UNIQUE | 001 `Material.sourcePath`(경로 우선 매칭의 근거, 001 검증 규칙과 동일하게 UNIQUE 강제) |
| `title` | TEXT NOT NULL | 001 `Material.title` |
| `category` | TEXT NOT NULL | 001 `Material.category` |
| `provider` | TEXT NULL | 001 `Material.provider` |
| `course` | TEXT NULL | 001 `Material.course` |
| `content_hash` | TEXT NOT NULL | 001 `Material.contentHash`(최신 버전 기준) |

### `material_versions` (← 001 `MaterialVersion`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `material_id` | TEXT NOT NULL REFERENCES materials(id) | 001 `MaterialVersion.materialId` |
| `content_hash` | TEXT NOT NULL | 001 `MaterialVersion.contentHash` |
| `captured_at` | TEXT NOT NULL | 001 `MaterialVersion.capturedAt` |

기본 키: `(material_id, content_hash)` 복합 유일 제약 — 같은 버전이 중복 기록되지 않게 한다.

### `material_roadmap_links` (← 001 `Material.linkedRoadmapIds`, 정규화)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `material_id` | TEXT NOT NULL REFERENCES materials(id) | |
| `roadmap_id` | TEXT NOT NULL REFERENCES roadmaps(id) | |

기본 키: `(material_id, roadmap_id)` — 001 검증 규칙("linkedRoadmapIds는 정확히 일치, 중복 제거")을 UNIQUE 제약으로 강제.

### `import_errors` (← 001 `ImportError`)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | 002 신규 — 화면이 개별 오류를 참조할 안정적 행 식별자 |
| `source_path` | TEXT NOT NULL | 001 `ImportError.sourcePath` |
| `kind` | TEXT NOT NULL | 001 `ImportError.kind` |
| `detail` | TEXT NOT NULL | 001 `ImportError.detail` |
| `related_entity_id` | TEXT NULL | FR-005 "확인 필요" 표시를 위해, 가능한 경우 관련 `learning_items.id`/`materials.id`를 연결(적재 단계에서 `source_path` 매칭으로 채움) |

## 002 신규 조회 지원 엔티티

### `load_runs` (Key Entity: 적재 실행 기록)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | 실행 단위 식별자 |
| `started_at` | TEXT NOT NULL | 적재 시작 시각(ISO 8601) |
| `finished_at` | TEXT NOT NULL | 적재 완료 시각 |
| `roadmap_count` | INTEGER NOT NULL | 001 `ImportMetrics.roadmapCount` 스냅샷 |
| `material_count` | INTEGER NOT NULL | 001 `ImportMetrics.materialCount` 스냅샷 |
| `error_count` | INTEGER NOT NULL | 이번 실행의 `import_errors` 행 수 |

### `load_run_file_snapshots` (적재 실행 기록의 파일별 상세)

| 컬럼 | 타입 | 설명 |
|---|---|---|
| `load_run_id` | INTEGER NOT NULL REFERENCES load_runs(id) | |
| `source_path` | TEXT NOT NULL | 관찰된 원본 파일 경로 |
| `content_hash` | TEXT NOT NULL | 그 시점 내용 해시 — 현재는 쓰기 전용 감사 기록이다(Research §3, 구현 중 수정: 001의 `runImport`가 `previousBatch`를 받는 매개변수가 없고, 안전하게 연결하려면 001의 "updated 상태가 무변경 재적재와 실제 변경을 구분 못 하는" 문제도 함께 고쳐야 해서 이번 범위에서는 다음 재적재에 주입하지 않는다). 부분 무효화 판단에도 쓰이지 않는다 |

기본 키: `(load_run_id, source_path)`.

### 로드맵 요약 (조회 뷰, FR-004)

저장 테이블이 아니라 `queries.ts`의 `listRoadmaps()`가 매 호출 시 다음을 계산해 반환하는 파생 표현이다(테이블로 미리 만들지 않는 이유: 001 원본 데이터가 바뀌는 시점은 재적재뿐이고, 그 시점에 다시 계산해 넣는 것과 조회 시 계산하는 것의 비용 차이가 SC-001 기준에서 무의미하다 — Research 범위 밖의 조기 최적화를 피한다):

| 필드 | 계산 방법 |
|---|---|
| `roadmapId`, `title` | `roadmaps` 테이블 |
| `completedCount` | 해당 로드맵의 `learning_items` 중 `completed = 1`인 행 수 |
| `totalCount` | 해당 로드맵의 `learning_items` 행 수(집계 가능한 Phase만, `phases.aggregatable = 1`) |
| `progressRatio` | `completedCount / totalCount`(`totalCount = 0`이면 null — 001 FR-015의 "미시작/자료 없음" 구분과 동일한 경계) |
| `needsReviewCount` | 해당 로드맵에 속한 `learning_items.needs_review = 1` 행 수 |

## 관계 요약

```text
roadmaps 1--* tracks 1--* phases 1--* learning_items
roadmaps 1--* phases                    (트랙 없는 로드맵, track_id = NULL)
learning_items *--1 materials            (linked_material_id, 선택적)
materials 1--* material_versions
materials *--* roadmaps                  (material_roadmap_links)
load_runs 1--* load_run_file_snapshots
```

## 검증 규칙 (스펙 FR 대응)

- `learning_items.completed IS NULL`인 행은 반드시 `needs_review = 1`이고, 대응하는 `import_errors(kind='checkbox_unrecognized')` 행이 `source_path`로 연결돼야 한다(FR-005; 001 검증 규칙 상속).
- `materials.source_path`는 UNIQUE — 같은 경로가 서로 다른 `id`로 두 번 적재되면 적재 로직 결함이다(FR-006).
- `learning_items.linked_material_id`가 NULL이 아니면 반드시 존재하는 `materials.id`를 가리켜야 한다(FK 제약으로 스키마 레벨에서 강제, 헌법 III 원칙).
- `material_roadmap_links`는 001의 `Material.linkedRoadmapIds`와 "정확히 일치, 중복 없음" 관계를 유지해야 한다 — 적재 로직은 001이 반환한 배열을 그대로 이 조인 테이블에 주입하고 별도로 재계산하지 않는다(FR-008).
- 재적재를 두 번 실행해도 `roadmaps`/`materials`/`learning_items`의 행 수가 늘지 않아야 한다(FR-006, SC-004) — 매 재적재가 새 DB 파일을 만든 뒤 교체하므로, 이 조건은 "새 파일 안에서 001이 반환한 식별자에 중복이 없는지"로 검증한다.
- `PRAGMA user_version`이 코드가 기대하는 값과 다르거나 파일을 열 수 없으면, 어떤 조회 함수도 그 상태를 노출하지 않고 재생성 경로로 진입한다(FR-003, Research §5).
- `material_versions`는 스키마상 존재하지만, 현재는 001의 `resolveIdentity`가 `previousBatch` 없이 호출돼 모든 자료가 항상 `status: "created"`로만 돌아오므로(Research §3) 이 테이블에 행이 추가되는 경우가 아직 없다 — 버그가 아니라 알려진 범위 밖 상태이며, 001 계약이 `previousBatch`를 지원하도록 확장될 때 채워지기 시작한다.
