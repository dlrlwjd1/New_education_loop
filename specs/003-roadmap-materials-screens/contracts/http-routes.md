# 인터페이스 계약: HTTP 라우트

이 기능은 서버 렌더링 단일 앱(research.md §1)이므로, 브라우저에 노출하는 유일한 인터페이스는 아래 HTTP 라우트들이다. 모든 응답은 `text/html`(오류 포함) — 별도 JSON API는 두지 않는다. 각 라우트는 002의 조회 함수를 직접 호출해 데이터를 얻고, `data-model.md`의 뷰 모델로 옮겨 렌더링한다.

## `GET /`

- **역할**: 로드맵 목록(User Story 1).
- **데이터**: `listRoadmaps()` → `RoadmapListView[]`.
- **응답**: 200, 로드맵이 하나도 없으면 빈 목록 + "아직 로드맵이 없다" 안내(Edge Cases, 오류 아님).
- **보장**: `hasPhaseDocs=false`인 로드맵과 `progressRatio=null`인 로드맵을 서로 다른 문구로 표시한다(FR-003).

## `GET /roadmaps/:roadmapId`

- **역할**: 로드맵 상세 탐색(User Story 2).
- **데이터**: `getRoadmapDetail(roadmapId)` → `RoadmapDetailView`.
- **응답**: 200(존재), 404 + 사람이 읽을 안내 메시지(`getRoadmapDetail`이 `null`을 반환한 경우 — FR-004 계약이 이미 예외 대신 `null`을 반환한다고 보장하므로, 이 라우트가 그 값을 404로 옮기는 것이 유일한 책임이다).
- **보장**: 트랙·Phase·항목을 `order_index` 순서 그대로 렌더링한다(FR-002). `aggregatable=false`인 Phase는 "형식 확인 필요" 안내로 대체한다(FR-003).

## `GET /roadmaps/:roadmapId/continue`

- **역할**: "이어서 공부" 위치 안내(User Story 3).
- **데이터**: `getRoadmapDetail(roadmapId)` 결과에 `continueStudy.ts`(research.md §6)를 적용해 `ContinueStudyTarget`을 계산.
- **응답**: `found=true`면 302로 `/roadmaps/:roadmapId#item-:itemId`(같은 상세 페이지의 해당 항목 위치)로 리다이렉트. `found=false`면 200으로 "더 이상 이어서 공부할 항목이 없다"는 페이지를 직접 렌더링(임의의 항목으로 잘못 이동시키지 않는다, FR-005).
- **보장**: `completed === null` 항목은 절대 이 응답의 대상으로 고르지 않는다(research.md §6, data-model.md 검증 규칙).

## `GET /materials`

- **역할**: 자료 검색(User Story 4).
- **쿼리 파라미터**: `sourcePath?`, `title?`, `category?`, `provider?`, `course?`, `roadmapId?`(002 `MaterialSearchQuery`와 동일한 필터 의미, FR-007) + `offset?`(기본 0), `limit?`(기본 50, research.md §7).
- **데이터**: `searchMaterials(query)` → `MaterialSearchView[]`, 이후 `offset`/`limit`으로 슬라이스.
- **응답**: 200. 조건 없음(쿼리 파라미터 전무)이면 검색 폼만 보여주고 빈 결과를 오류로 표시하지 않는다. 결과가 0건이면 "조건에 맞는 자료가 없다"를 명확히 표시한다(Acceptance Scenario 2).
- **보장**: 검색은 매 요청마다 002의 인덱스 조회만 사용하고 전체 자료 목록을 순회하지 않는다(FR-007, 002가 이미 보장하는 성질을 그대로 물려받음).

## `GET /materials/:materialId`

- **역할**: 자료 본문 열람(User Story 5). 로드맵 상세의 "연결된 자료로 이동"(FR-011)과 검색 결과 클릭 모두 이 라우트로 온다.
- **데이터**: 002 `getMaterialById(materialId)`(003 계획 단계에서 002 계약에 추가 — `specs/002-persistence-layer/contracts/persistence-library.md` 참고)로 메타데이터(`sourcePath` 포함)를 얻은 뒤, `materialContent.ts`(research.md §5)가 `courses/<sourcePath>`를 읽고 §4 파이프라인으로 변환해 `MaterialBodyView`를 만든다.
- **응답**: 200(정상), 404(`getMaterialById`가 `null` — 자료 메타데이터를 찾을 수 없음), 200 + `renderError` 메시지(메타데이터는 있으나 원본 파일을 읽거나 변환하는 데 실패 — 조용히 빈 페이지를 보여주지 않는다, data-model.md).
- **보장**: 응답 본문에 `<script>`, 인라인 이벤트 핸들러, `javascript:` URL이 없다(FR-010, SC-005). 표·코드 블록·내부 링크·원본 출처 링크는 원본과 같은 내용으로 보존된다(FR-009).

## 안정성 계약

- 이 라우트들의 경로·쿼리 파라미터·상태 코드 의미를 바꾸는 것은 프론트엔드·QA 서브에이전트 모두에게 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 002의 다섯 조회 함수 시그니처를 바꾸지 않는다 — 003은 002를 오직 호출자로서 소비한다(FR-013).
- 모든 라우트의 HTML 응답은 `data-model.md` 검증 규칙(이스케이프, sanitize)을 어긴 상태로 반환되면 안 된다 — 이것이 이 계약의 유일한 보안 경계다(다른 모든 사용자 입력은 페이지 밖으로 나가지 않는 단일 사용자 로컬 앱).
