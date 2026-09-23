# Data Model: 복습큐 자료 이전·영속화

spec.md의 Key Entities를 파싱 단계(순수 타입)와 영속화 단계(SQLite 테이블)로 나눠 정의한다. research.md §1~3의 결정(AST 파싱, 내용 기반 id, 엄격한 ISO 날짜)을 그대로 반영한다.

## 파싱 단계 타입 (`backend/src/reviewQueue/types.ts`)

### `ActiveReviewItem`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `string` | `sha256(정규화(item) + "\0" + 정규화(topic) + "\0" + firstWrongDate)` (research.md §2) |
| `item` | `string` | 개념/항목명(표의 "항목" 칸, 원문 그대로) |
| `topic` | `string` | 소속 로드맵·주제(표의 "주제" 칸, 원문 텍스트 — 로드맵 레코드에 매핑하지 않음, spec.md Assumptions) |
| `firstWrongDate` | `string` | ISO-8601 날짜(`YYYY-MM-DD`) |
| `stageLabel` | `string` | 표의 "상태" 칸 원문(예: `"1회차"`) — 간격 계산 로직의 입력이 아니라 보존 대상(research.md, spec.md Assumptions) |
| `nextReviewDate` | `string` | ISO-8601 날짜 |

### `MasteredItem`

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | `string` | `ActiveReviewItem`과 동일한 계산식(항목+주제+최초 오답일 기준) — 활성 큐에 있던 항목이 마스터 완료로 옮겨져도 같은 개념이면 같은 id를 유지한다 |
| `item` | `string` | 개념/항목명 |
| `topic` | `string` | 소속 로드맵·주제(원문) |
| `firstWrongDate` | `string` | ISO-8601 날짜 |
| `masteredDate` | `string` | ISO-8601 날짜(표의 "마스터한 날") |

### `ReviewImportError`

| 필드 | 타입 | 설명 |
|---|---|---|
| `sourceTable` | `"active" \| "mastered"` | 오류가 발생한 표 |
| `rowIndex` | `number` | 표 안에서의 0-기준 행 순번(재현·디버깅용, 안정적 식별자로 쓰지 않음) |
| `kind` | `"date_unparseable" \| "row_incomplete"` | `date_unparseable`: 날짜 칸이 `YYYY-MM-DD`가 아님. `row_incomplete`: 필수 칸 자체가 비어 있음 |
| `detail` | `string` | 사람이 읽을 원인 설명(예: `"다음 복습일 칸 값 '9월 19일'을 해석할 수 없음"`) |
| `rawRow` | `string` | 원본 행의 표시용 텍스트(어떤 행인지 사용자가 알아볼 수 있게) |

**검증 규칙**:

- `firstWrongDate`, `nextReviewDate`, `masteredDate`는 모두 `YYYY-MM-DD` 정규식과 실제 달력상 유효한 날짜(예: `2026-02-30` 같은 값 제외)를 통과해야 한다. 실패 시 그 행은 `ActiveReviewItem`/`MasteredItem`에 포함되지 않고 `ReviewImportError(kind="date_unparseable")`로만 존재한다(data-model 불변식: 완전한 항목과 오류 행은 상호 배타적).
- `item`, `topic` 칸이 비어 있으면 `ReviewImportError(kind="row_incomplete")`로 분리한다.
- 파싱 결과는 `{ activeItems: ActiveReviewItem[], masteredItems: MasteredItem[], errors: ReviewImportError[] }` 하나로 묶는다 — 001의 `ImportBatch`와 같은 "성공·실패를 한 결과 객체에 함께 담는다" 관례를 따른다.

## 영속화 단계: SQLite 스키마 확장 (`backend/src/persistence/schema.ts`)

기존 5개 테이블(roadmaps/tracks/phases/materials/learning_items 등)과 FK로 얽히지 않는 독립 테이블 3개를 추가한다. `SCHEMA_VERSION`을 2로 올린다.

```sql
CREATE TABLE IF NOT EXISTS review_queue_items (
  id TEXT PRIMARY KEY,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  first_wrong_date TEXT NOT NULL,
  stage_label TEXT NOT NULL,
  next_review_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS mastered_items (
  id TEXT PRIMARY KEY,
  item TEXT NOT NULL,
  topic TEXT NOT NULL,
  first_wrong_date TEXT NOT NULL,
  mastered_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS review_import_errors (
  source_table TEXT NOT NULL,
  row_index INTEGER NOT NULL,
  kind TEXT NOT NULL,
  detail TEXT NOT NULL,
  raw_row TEXT NOT NULL
);
```

- `review_queue_items.id`/`mastered_items.id`에 `PRIMARY KEY` 제약으로 유일성을 강제한다(애플리케이션 코드가 아니라 스키마 레벨 — 헌법 III).
- `review_import_errors`는 안정적 id가 없는 감사 기록이라 `PRIMARY KEY` 없이 매 재적재마다 전량 교체한다(001의 `import_errors`와 동일한 성격).
- 002와 동일하게, 재적재는 항상 전체 재계산 후 새 SQLite 파일에 적재 → 원자적 교체이며, 이 세 테이블에 대한 부분 갱신(UPDATE/DELETE 개별 행)은 존재하지 않는다.

## 관계 요약

```text
(review_queue_items, mastered_items, review_import_errors)는 서로 및 기존 5개 테이블과 FK 관계가 없다 — 001·002가 만든 로드맵/자료 그래프와는 독립된 평평한(flat) 테이블 3개다. "주제" 칼럼은 로드맵 이름과 문자열이 비슷할 수 있지만 참조 무결성 제약의 대상이 아니다(spec.md Assumptions에 따른 의도적 설계).
```
