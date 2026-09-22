# Implementation Plan: 자료 이전 기반 (Content Ingestion Foundation)

**Branch**: `001-content-ingestion-foundation` | **Date**: 2026-09-18 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-content-ingestion-foundation/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

`study-progress/`와 `courses/`의 Markdown을 파싱해 로드맵·트랙·Phase·학습 항목·자료에 안정적인 식별자를 부여하고, 조회 가능한 색인 자료구조를 만들며, 예시 데이터와 실제 기록을 분리한다. 결과는 원본과 수치·링크가 100% 일치해야 한다(SC-001~006). Clarifications에서 확정한 대로 이 기능은 파싱·식별자·색인 **규칙의 정의와 검증**까지만 다루며, 그 규칙을 실제 영속 저장소에 적재하는 작업은 3단계(사용자·읽기 화면)의 범위다(FR-016).

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js LTS (사용자 선택, 2026-09-18 — research.md §1)

**Primary Dependencies**: `unified` + `remark-parse` + `remark-gfm`(Markdown AST 파싱, 코드 블록·체크박스 구조적 구분), Node 내장 `fs`/`crypto`(파일 순회, SHA-256 내용 해시)

**Storage**: 없음(N/A) — 이 기능은 영속·조회 가능한 저장소를 만들지 않는다. 실행 결과는 검증용 `ImportBatch` 리포트(파일로 남기는 구조화된 출력물)로만 산출한다(FR-016, research.md §7)

**Testing**: Vitest — 실제 저장소 Markdown 구조를 픽스처로 쓰는 단위·통합 테스트

**Target Platform**: 로컬 환경에서 실행되는 Node.js 스크립트/라이브러리(개인용 로컬 웹앱의 백엔드 패키지 일부, 상시 구동 서버 프로세스 아님)

**Project Type**: 백엔드 라이브러리 모듈(향후 웹 서비스형 백엔드 패키지에 포함될 하위 모듈) — 이 기능 자체는 프론트엔드를 포함하지 않음

**Performance Goals**: 로드맵 8개 + 자료 7,865개 전체 가져오기가 합리적 시간(수 분 단위) 내 완료. 색인 조회(`MaterialIndex`)는 전체 선형 탐색이 아닌 직접 조회로 동작(FR-008). 정확한 수치 목표는 낮은 영향으로 판단해 명시적으로 유보한다(`/speckit-clarify`, `/speckit-analyze` 기록) — T028에서 실제 실행 시간을 관찰값으로 기록해 이후 목표 설정의 기준으로 삼는다

**Constraints**: 원본 파일을 읽기만 하고 고치지 않음(구현전_결정사항.md 7.1) · 코드 블록 내 체크박스 집계 제외(FR-005) · 파일명 정규화 충돌은 자동 병합하지 않고 보류(FR-010)

**Scale/Scope**: 로드맵 8개(트랙-Phase 중첩 포함), `courses/` 자료 7,865개, 단일 사용자

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| 원칙 | 적용 여부 | 확인 |
|---|---|---|
| I. 프론트엔드 | 해당 없음 | 이 기능은 UI가 없다(FR-016) — 백엔드 라이브러리 전용 |
| II. 백엔드 | 적용 | 파싱·식별자·색인 로직은 백엔드 서브에이전트에게 위임. `contracts/ingestion-library.md`가 이 로직의 인터페이스 계약을 먼저 정의한다 |
| III. DBA / 데이터 계층 | 해당 없음 | 이 기능은 영속 저장소·스키마를 만들지 않는다(FR-016) — 마이그레이션 없음 |
| IV. QA | 적용 | 구현 서브에이전트와 분리된 QA 서브에이전트가 `quickstart.md`의 SC-001~006 검증을 회귀 테스트로 작성 |
| V. 디버거 | 조건부 | 구현 중 원인 불명 실패가 나오면 위임(선제적으로 필요하지 않음) |
| VI. 메인 에이전트 품질 검수 | 항상 적용 | 백엔드/QA 서브에이전트 산출물의 diff를 메인 에이전트가 직접 검수하기 전까지 완료로 보지 않는다 |
| VII. 개발 결과 기록 | 항상 적용 | 원칙 VI 통과 즉시 `개발결과.md`에 이 기능의 결과를 기록한다 |

**Gate 결과**: PASS — 위반 없음. Complexity Tracking 불필요(프론트엔드·DBA는 이 기능 범위에 해당하지 않아 "위반의 정당화"가 아니라 단순 비적용).

## Project Structure

### Documentation (this feature)

```text
specs/001-content-ingestion-foundation/
├── plan.md              # 이 문서
├── research.md          # Phase 0 출력
├── data-model.md        # Phase 1 출력
├── quickstart.md        # Phase 1 출력
├── contracts/
│   └── ingestion-library.md
└── tasks.md             # /speckit-tasks 출력(아직 없음)
```

### Source Code (repository root)

```text
backend/
├── src/
│   └── ingestion/
│       ├── types.ts               # data-model.md 엔티티 타입 (Foundational)
│       ├── markdownAst.ts          # 공유 Markdown AST 파싱 헬퍼 (research.md §2)
│       ├── checkboxNormalize.ts    # 체크박스 변형 정규화 (FR-006)
│       ├── resolveIdentity.ts      # 경로 우선·해시 재확인 매칭, 로드맵·자료 공용 (FR-003, FR-010, FR-012)
│       ├── parseRoadmaps.ts        # study-progress/ 파싱 (FR-001, FR-002, FR-004, FR-015)
│       ├── parseMaterials.ts       # courses/ 파싱 + provider/course 추론 (FR-007, FR-009)
│       ├── materialIndex.ts        # MaterialIndex — 직접 조회 색인 (FR-008)
│       ├── resolveMaterialLinks.ts # 학습 항목-자료 연결·깨진 링크 감지 (FR-013, FR-014)
│       ├── exampleSeparation.ts    # 예시/실제 분리 (FR-011)
│       ├── runImport.ts            # 위 모듈을 묶어 ImportBatch를 산출하는 진입점
│       └── cli.ts                  # npm run ingest 진입점(quickstart.md)
└── tests/
    ├── fixtures/                  # 실제 구조를 본뜬 축소 Markdown 샘플(엣지 케이스별)
    ├── unit/
    │   ├── checkboxNormalize.test.ts
    │   ├── resolveIdentity.test.ts
    │   ├── materialIndex.test.ts
    │   └── contractConformance.test.ts
    └── integration/
        ├── parseRoadmaps.basic.test.ts
        ├── parseRoadmaps.nestedTracks.test.ts
        ├── parseMaterials.count.test.ts
        ├── resolveMaterialLinks.test.ts
        ├── runImport.dedupe.test.ts
        └── runImport.scopeSeparation.test.ts  # quickstart.md의 SC-001~006을 코드화
```

**Structure Decision**: 저장소에 아직 코드가 없어 이번 기능이 `backend/` 디렉터리를 처음 만든다. 이 기능은 UI를 포함하지 않으므로 `frontend/`는 만들지 않는다 — 첫 UI 대상 기능(F03 계열)이 계획될 때 함께 만든다. `backend/src/ingestion/`은 이 기능 전용 하위 모듈이며, 3단계가 소비할 공개 인터페이스는 `contracts/ingestion-library.md`에 정의된 함수들로 제한한다(내부 파일 구조는 3단계에 대한 계약이 아니다).

## Complexity Tracking

*(해당 없음 — Constitution Check에 위반 사항 없음)*
