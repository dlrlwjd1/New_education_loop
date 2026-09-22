# Data Model: 자료 이전 기반 (Content Ingestion Foundation)

이 문서는 이번 기능이 산출하는 논리적 엔티티를 정의한다. FR-016에 따라 이 기능은 이 형태를 **영속 저장소에 적재하지 않는다** — 3단계(사용자·읽기 화면)가 이 모델을 그대로 저장소 스키마로 옮겨 쓴다.

## Roadmap (로드맵)

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 로드맵 루트 경로 기반 결정적 식별자 |
| `sourcePath` | string | `study-progress/` 기준 상대 경로 |
| `title` | string | 로드맵 이름(디렉터리명 또는 README 제목) |
| `hasPhaseDocs` | boolean | Phase 문서 존재 여부(FR-015의 "진행 자료 없음" 판정용) |
| `tracks` | Track[] | 순서 보존된 하위 트랙 목록(트랙 없이 바로 Phase가 있는 로드맵은 빈 배열) |
| `orderIndex` | number | 로드맵 목록 내 명시적 순서(문자열 정렬 대체, FR-001) |

## Track (트랙)

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 로드맵 내 결정적 식별자 |
| `roadmapId` | string | 상위 로드맵 참조 |
| `title` | string | 트랙 이름 |
| `orderIndex` | number | 로드맵 내 순서(FR-001) |
| `phases` | Phase[] | 순서 보존된 하위 Phase 목록 |

## Phase

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 결정적 식별자 |
| `roadmapId` | string | 상위 로드맵 참조 |
| `trackId` | string \| null | 상위 트랙 참조(트랙 없는 로드맵은 null) |
| `sourcePath` | string | Phase 문서 파일 경로 |
| `title` | string | Phase 제목 |
| `orderIndex` | number | 순서(FR-001) |
| `aggregatable` | boolean | 체크박스를 집계할 수 있는 형식인지(FR-015의 "형식 확인 필요" 판정용) |
| `items` | LearningItem[] | 순서 보존된 학습 항목 목록 |

## LearningItem (학습 항목)

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 결정적 식별자(Phase 내 위치 기반) |
| `phaseId` | string | 상위 Phase 참조 |
| `text` | string | 체크박스 라벨 원문 |
| `completed` | boolean \| null | 완료 여부. 해석 불가 표기는 null이며 오류 목록에 별도 기록(FR-006) |
| `completedDate` | string \| null | 원문에 기록된 완료 날짜(ISO 8601). 파싱 불가 날짜는 null + 오류 기록 |
| `linkedMaterialId` | string \| null | 연결된 자료 식별자(있는 경우) |
| `isFromCodeBlock` | boolean | 항상 false — 코드 블록 안 체크박스는 이 목록에 아예 포함되지 않음(FR-005) |

## Material (자료)

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 경로 우선·내용 해시 재확인 방식으로 결정된 식별자(FR-003) |
| `sourcePath` | string | `courses/` 기준 상대 경로(원문 그대로, 인코딩·한글·공백 보존) |
| `title` | string | 자료 제목 |
| `category` | string | 분류(`articles` \| `deeplearning-ai` \| `mooc` \| `udemy` \| `youtube` \| 그 외 신규 값) |
| `provider` | string \| null | 제공처 — 경로의 최상위/차상위 세그먼트에서 추론(FR-007). 추론 불가하면 null |
| `course` | string \| null | 강좌·재생목록 단위 — 경로 구조에서 추론 가능한 경우만 채움, 그 외 null(FR-007) |
| `contentHash` | string | 파일 내용 SHA-256 |
| `linkedRoadmapIds` | string[] | 이 자료를 참조하는 로드맵 ID 목록(같은 자료, 여러 로드맵 — FR-013). 어떤 학습 항목도 이 자료를 가리키지 않으면 빈 배열 |

## MaterialVersion (자료 버전)

| 필드 | 타입 | 설명 |
|---|---|---|
| `materialId` | string | 상위 자료 참조 |
| `contentHash` | string | 이 버전의 내용 해시 |
| `capturedAt` | string | 이 버전을 관찰한 시각(가져오기 실행 시각) |

경로가 같고 내용 해시가 달라지면 같은 `Material.id`에 새 `MaterialVersion`이 추가된다(FR-012).

## ImportBatch (가져오기 배치)

| 필드 | 타입 | 설명 |
|---|---|---|
| `id` | string | 실행 단위 식별자(타임스탬프 기반) |
| `scope` | `"real"` \| `"example"` | 실제 기록만 / 예시 데이터 포함 여부(FR-011) |
| `startedAt` / `finishedAt` | string | 실행 시각 |
| `mappings` | ImportMapping[] | 원본→식별자 매핑 목록 |
| `errors` | ImportError[] | 오류 목록(FR-014) |
| `metrics` | ImportMetrics | SC-001~006 검증에 쓰이는 집계치 |

## ImportMapping (가져오기 매핑)

| 필드 | 타입 | 설명 |
|---|---|---|
| `sourcePath` | string | 원본 파일 경로 |
| `contentHash` | string | 원본 내용 해시 |
| `entityId` | string | 부여된 식별자 |
| `entityType` | `"roadmap"` \| `"track"` \| `"phase"` \| `"item"` \| `"material"` | 대상 종류 |
| `status` | `"created"` \| `"updated"` \| `"held"` | 반영 상태(FR-014) |

## ImportError (가져오기 오류)

| 필드 | 타입 | 설명 |
|---|---|---|
| `sourcePath` | string | 오류가 발생한 원본 경로 |
| `kind` | `"date_invalid"` \| `"checkbox_unrecognized"` \| `"id_collision"` \| `"link_broken"` | 오류 종류 |
| `detail` | string | 사람이 읽을 수 있는 설명 |

## ImportMetrics (검증 집계)

| 필드 | 타입 | 설명 |
|---|---|---|
| `roadmapCount` | number | 인식된 로드맵 수 |
| `completedItemCount` / `totalItemCount` | number | 로드맵별 완료/전체(SC-001 검증용, 로드맵 ID별로 존재) |
| `materialCount` | number | 색인된 자료 수(SC-003) |
| `duplicateCount` | number | 재가져오기 시 새로 생성된 중복 수(SC-004, 0이어야 함) |
| `exampleItemCount` | number | "실제 기록만" 범위에서 포함된 예시 데이터 수(SC-005, 0이어야 함) |

## 관계 요약

```text
Roadmap 1--* Track 1--* Phase 1--* LearningItem
Roadmap 1--* Phase              (트랙 없는 로드맵)
LearningItem *--1 Material       (연결된 자료, 선택적)
Material 1--* MaterialVersion
ImportBatch 1--* ImportMapping
ImportBatch 1--* ImportError
ImportBatch 1--1 ImportMetrics
```

## 검증 규칙 (스펙 FR 대응)

- `LearningItem.completed`가 `null`이면 반드시 대응하는 `ImportError(kind="checkbox_unrecognized")`가 있어야 한다(FR-006, FR-014).
- 같은 `Material.sourcePath`를 가진 두 항목이 다른 `id`를 가지면 안 된다(FR-003 경로 우선 매칭).
- `Phase.aggregatable === false`인 Phase의 `items`는 빈 배열이며, 대응하는 `ImportError` 또는 로드맵 수준 "형식 확인 필요" 표시가 있어야 한다(FR-015).
- `Roadmap.hasPhaseDocs === false`인 로드맵은 `tracks`·`phases`가 모두 빈 배열이며, "진행 자료 없음"으로 보고된다(FR-015) — `aggregatable`(형식 확인 필요)과는 서로 다른 케이스이므로 혼용하지 않는다.
- `isFromCodeBlock`이 true인 항목은 존재하지 않는다 — 코드 블록 내용은 파싱 단계에서 이미 제외된다(FR-005).
- `LearningItem.linkedMaterialId`가 null이 아니면 반드시 어떤 `Material.id`와 일치해야 한다. 일치하지 않으면 `linkedMaterialId`는 null로 남기고 대응하는 `ImportError(kind="link_broken")`가 있어야 한다(FR-013, FR-014).
- `Material.linkedRoadmapIds`는 그 자료를 가리키는 유효한 `LearningItem.linkedMaterialId`들의 로드맵 ID 집합과 정확히 일치해야 한다(중복 제거, FR-013).
- 경로가 같고 `contentHash`가 이전 실행과 다른 `Material`은 새 `MaterialVersion`이 추가돼야 한다(FR-012) — `status: "updated"`만 반환하고 버전 이력에 추가하지 않는 구현은 이 규칙 위반이다.
