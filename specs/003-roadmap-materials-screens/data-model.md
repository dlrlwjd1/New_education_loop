# Data Model: 로드맵 탐색·자료실 화면

이 기능은 새 영속 저장소나 스키마를 만들지 않는다(Constitution Check III — N/A). 아래는 002의 다섯 조회 함수가 반환하는 값을 화면에 맞게 옮긴 **뷰 모델**과, 이 기능이 새로 계산하는 뷰 전용 상태다. 필드 의미는 [002 contracts/persistence-library.md](../002-persistence-layer/contracts/persistence-library.md)를 근거로 삼는다(FR-013 — 002가 이미 보장한 값을 재계산하지 않는다).

## 뷰 모델

### RoadmapListView (← 002 `listRoadmaps()`)

| 필드 | 출처 | 설명 |
|---|---|---|
| `roadmapId` | 002 `RoadmapSummary.roadmapId` | 상세 화면 링크에 사용 |
| `title` | 002 `RoadmapSummary.title` | 화면 출력 전 `html.ts`의 이스케이프 헬퍼를 거친다(research.md §3) |
| `progressLabel` | `hasPhaseDocs`/`totalCount`/`progressRatio`로부터 계산 | "진행 자료 없음"(`hasPhaseDocs=false`) / "완료 N/M (P%)" / "미시작" 세 가지 표시 중 하나(FR-003) |
| `needsReviewBadge` | `needsReviewCount > 0` | 목록에서 "확인 필요" 표시 여부(FR-004) |

### RoadmapDetailView (← 002 `getRoadmapDetail()`)

| 필드 | 출처 | 설명 |
|---|---|---|
| `roadmapId`, `title` | 002 `RoadmapDetail` | |
| `tracks[]` | 002 `RoadmapDetail.tracks` | 트랙 없는 로드맵은 빈 배열(FR-002) |
| `rootPhases[]` | 002 `RoadmapDetail.phases` | 트랙 밖의 최상위 Phase |
| 각 Phase의 `items[]` | 002 `PhaseDetail.items` | `aggregatable=false`이면 원본이 이미 빈 배열 — 화면은 이 경우 "형식 확인 필요" 안내로 대체(FR-003) |
| 각 항목의 `linkedMaterialHref` | `LearningItemDetail.linkedMaterialId`가 있으면 `/materials/:id`로 변환 | FR-011 |

### ContinueStudyTarget (003 신규 — 002가 제공하지 않는 뷰 전용 계산, research.md §6)

| 필드 | 타입 | 설명 |
|---|---|---|
| `found` | boolean | `completed === false`인 항목을 찾았는지 |
| `trackId` | string \| null | 찾은 항목이 속한 트랙(없으면 null) |
| `phaseId` | string | 찾은 항목이 속한 Phase |
| `itemId` | string | 찾은 항목 자체 |
| `skippedNeedsReviewCount` | number | 순회 중 건너뛴 `completed === null` 항목 수(사용자에게 "확인 필요 N건은 자동으로 건너뛰었다"는 안내에 사용) |

`found=false`면 화면은 "더 이상 이어서 공부할 항목이 없다"를 보여준다(FR-005 Acceptance Scenario 2, research.md §6이 이 경우를 "전부 완료" 또는 "남은 게 전부 확인 필요 상태"까지 확장).

### MaterialSearchView (← 002 `searchMaterials()`)

| 필드 | 출처 | 설명 |
|---|---|---|
| `materialId`, `title`, `sourcePath`, `category`, `provider`, `course` | 002 `MaterialSearchResult` | 그대로 표시(FR-008) |
| `linkedRoadmapLinks[]` | `MaterialSearchResult.linkedRoadmapIds`를 `/roadmaps/:id`로 변환 | FR-008 |
| 페이지네이션 | 쿼리 파라미터 `offset`/`limit` | research.md §7 — 002 자체는 페이지네이션을 모르며, 003이 반환 배열을 슬라이스한다 |

### MaterialBodyView (003 신규 — 002가 제공하지 않는 데이터, research.md §5)

| 필드 | 타입 | 설명 |
|---|---|---|
| `materialId`, `title`, `sourcePath` | 002 `getMaterialById(materialId)`(003 계획 단계에서 002 계약에 추가, research.md §5) | 자료 메타데이터 |
| `safeHtml` | string | `courses/<sourcePath>` 원문을 읽어 §4의 파이프라인(remark→rehype→sanitize)을 거친 결과. 표·코드 블록·내부 링크·원본 출처 링크가 보존된다(FR-009) |
| `renderError` | string \| null | 원본 파일을 읽거나 변환하는 데 실패하면(파일 삭제됨 등) null 대신 사람이 읽을 오류 메시지 — 화면이 조용히 빈 페이지를 보여주지 않는다 |

## 검증 규칙

- `RoadmapListView.progressLabel`은 002 `RoadmapSummary.hasPhaseDocs=false`와 `progressRatio=null`(totalCount=0)을 서로 다른 문구로 표시해야 한다 — 둘을 같은 "0%"로 뭉뚱그리면 FR-003 위반이다.
- `ContinueStudyTarget` 계산은 `completed === null`인 항목을 절대 `found`의 대상으로 반환하지 않는다(research.md §6).
- `MaterialBodyView.safeHtml`은 원본의 `<script>`, 인라인 이벤트 핸들러(`onerror` 등), `javascript:` URL을 포함해서는 안 된다(FR-010, SC-005) — `rehype-sanitize`의 허용 목록 위반 여부로 검증한다.
- 모든 화면 텍스트(로드맵 제목, 자료 제목 등 파일 시스템에서 온 값)는 `html.ts`의 이스케이프 헬퍼를 거치지 않고 직접 문자열 결합으로 출력되면 안 된다(FR-014, 검증 규칙이자 보안 요구사항).

## 관계 요약

```text
RoadmapListView ---(선택)--> RoadmapDetailView
RoadmapDetailView --items--> ContinueStudyTarget(계산)
RoadmapDetailView --linkedMaterialHref--> MaterialBodyView
MaterialSearchView --선택--> MaterialBodyView
MaterialSearchView --linkedRoadmapLinks--> RoadmapDetailView
```
