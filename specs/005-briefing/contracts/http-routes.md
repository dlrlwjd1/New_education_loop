# 인터페이스 계약: HTTP 라우트

003과 동일하게 서버 렌더링 단일 앱이다. 모든 응답은 `text/html`(오류 포함). 각 라우트는 `contracts/briefing-library.md`의 함수만 호출한다.

## `GET /briefing`

- **역할**: 메인 브리핑 화면(User Story 1·2).
- **쿼리 파라미터**: `roadmapId?`(생략 시 전체 로드맵 대상, 있으면 그 로드맵으로 진행률 표만 좁힘 — 복습 목록은 항상 전체, FR-006).
- **데이터**: `generateBriefing({ scope: roadmapId ?? "all" })`.
- **응답**: 200(정상 — 새로 생성했든 기존 것을 재사용했든 동일하게 200), `{ error: "roadmap_not_found" }`면 404 + 안내(FR-018, 임의로 전체 결과를 대신 보여주지 않는다), `{ reviewDataUnavailable: true }`면 200으로 로드맵 진행률만 보여주고 복습 목록 자리에는 "복습 데이터를 불러올 수 없음"을 표시(research.md §4).
- **보장**: 같은 날 같은 `roadmapId`로 여러 번 열어도(새로고침) 매번 새 기록이 쌓이지 않는다(research.md §1, SC-004). 로드맵이 0%(미시작)인 것이 4개를 넘으면 이름 목록만 접어 보여준다(FR-010).

## `POST /briefing/rerun`

- **역할**: 명시적 "다시 실행"(User Story 3, FR-012).
- **폼 파라미터**: `roadmapId?`(현재 보고 있던 스코프를 그대로 유지).
- **데이터**: `generateBriefing({ scope: roadmapId ?? "all", forceNew: true })`.
- **응답**: 303으로 `GET /briefing/history/:id`(방금 만든 스냅샷)로 리다이렉트 — PRG 패턴(research.md §6), 새로고침해도 재실행이 반복되지 않는다.
- **보장**: `forceNew: true`이므로 같은 날 같은 스코프에 기존 스냅샷이 있어도 항상 새 스냅샷을 하나 더 만든다(Acceptance Scenario US3-2).

## `GET /briefing/history`

- **역할**: 과거 브리핑 기록 목록(User Story 3, FR-015).
- **데이터**: `listSnapshotsByDate()`.
- **응답**: 200, 기록이 하나도 없으면(가져오기·재실행을 아직 한 번도 안 한 신규 사용자) "아직 브리핑 기록이 없다"를 오류가 아닌 안내로 표시.
- **보장**: 이 목록의 각 항목은 그 시점의 요약 값만 보여주고, 현재 값으로 다시 계산하지 않는다(FR-014).

## `GET /briefing/history/:id`

- **역할**: 특정 과거 브리핑 기록 상세(User Story 3).
- **데이터**: `getSnapshotById(id)`.
- **응답**: 200(존재), 404(`getSnapshotById`가 `null`).
- **보장**: 로드맵별 진행률·복습 대상 목록을 그 시점 그대로 렌더링한다 — 현재 002·004 상태를 다시 조회하지 않는다(FR-014, SC-005).

## 안정성 계약

- 이 라우트들의 경로·파라미터·상태 코드 의미를 바꾸는 것은 프론트엔드·QA 서브에이전트 모두에게 영향을 준다 — 헌법의 "역할 간 통합 절차"에 따라 통보 후 진행한다.
- 이 계약은 002·004의 공개 함수 시그니처를 바꾸지 않는다.
- `GET /briefing`과 `GET /briefing/history/:id`가 렌더링하는 진행률 문자열은 `formatProgress()`가 만든 값을 그대로 쓴다 — 라우트나 뷰 레이어에서 다시 반올림하거나 재계산하지 않는다(계산 로직이 두 곳에 흩어지는 것을 막는다).
