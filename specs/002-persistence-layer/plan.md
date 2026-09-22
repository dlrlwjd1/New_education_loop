# Implementation Plan: 영속 저장소 계층 (Persistence Layer)

**Branch**: `002-persistence-layer` | **Date**: 2026-09-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-persistence-layer/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

001-content-ingestion-foundation이 정의한 파싱 계약(`parseRoadmaps`/`parseMaterials`/`resolveMaterialLinks`/`runImport`)의 결과를 SQLite 파생 캐시에 적재해, 반복 조회 시 `study-progress/`·`courses/` 전체를 다시 파싱하지 않고도 로드맵 목록(진행률 포함)·로드맵 상세·자료 검색을 즉시 제공한다. 저장소는 원본 파일의 파생물일 뿐이므로 삭제해도 재적재로 완전히 재생성되고, 파일이 저장소보다 최신이면 항상 파일이 이긴다. 기술 접근: 매 재적재를 001 계약의 전체 재파싱으로 수행해(부분 무효화 없음) "파일 우선" 원칙을 구조적으로 보장하고, 새 SQLite 파일을 임시 경로에 완성한 뒤 원자적으로 교체해 "절반만 반영된 상태 노출 없음"을 보장한다.

## Technical Context

**Language/Version**: TypeScript 5.9 / Node.js 24 (ESM) — 기존 `backend/` 패키지(001)를 그대로 확장하며 새 하위 패키지를 만들지 않는다.

**Primary Dependencies**: 001의 라이브러리 계약(`specs/001-content-ingestion-foundation/contracts/ingestion-library.md`)을 그대로 재사용. 신규 외부 런타임 의존성 없음 — Node.js 24에 내장된 동기 SQLite API `node:sqlite`(`DatabaseSync`)를 사용한다(Research 참고, native addon 불필요).

**Storage**: SQLite 파일 1개(`backend/.cache/learning-loop.sqlite`, 경로는 Research에서 확정) — 원본 Markdown 파일에서 파생되는 캐시이며 git 커밋 대상에서 제외(FR-010, 구현전_결정사항.md 7.1).

**Testing**: vitest — 001과 동일한 도구·테스트 배치(`backend/tests/unit`, `backend/tests/integration`) 구조를 따른다.

**Target Platform**: 로컬 Node.js 프로세스(개인용 로컬 웹앱, 단일 사용자, 서버 배포·다중 프로세스 없음).

**Project Type**: Single project — 기존 `backend/` 패키지 내부 확장(라이브러리). 이 기능은 HTTP API를 노출하지 않는다(001과 동일한 경계, spec.md Assumptions: "조회 가능한 상태를 만든다"까지).

**Performance Goals**: SC-001 — 1회 적재 후 로드맵 목록 조회 100회 반복 시 평균 응답 시간이 최초 적재(전체 파싱) 시간의 1% 미만.

**Constraints**: 단일 사용자 로컬 앱(다중 프로세스 잠금 전략 범위 밖) · 실시간 파일 감시 범위 밖(재적재는 항상 명시적 호출) · 재적재 도중 오류가 나도 이전 조회 가능 상태 훼손 금지(원자적 교체) · 저장소 파일 손상/구버전 스키마는 오류로 취급하지 않고 전체 재생성.

**Scale/Scope**: 실저장소 기준 로드맵 8개, 자료 7,865개, 매핑 14,571건(001 실제 실행 결과) — 개인용 규모이며 수평 확장·다중 사용자 대응은 범위 밖.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

이 기능은 화면(UI)을 만들지 않는다 — 001과 마찬가지로 3단계(사용자·읽기 화면)가 재사용할 백엔드 조회 계층까지만 다룬다.

| 원칙 | 해당 여부 | 평가 |
|---|---|---|
| I. 프론트엔드 | N/A | 이 기능에 UI 컴포넌트가 없음(spec.md Assumptions에 명시). 위반 아님 — 화면은 이후 별도 기능에서 프론트엔드 서브에이전트에게 위임된다. |
| II. 백엔드 | 적용 | 조회 함수 계약(`contracts/persistence-library.md`)을 먼저 정의하고, 백엔드 서브에이전트가 그 계약을 근거로 구현한다. 내부 호출(001 계약 출력 → 002 스키마)은 FR-008에 따라 001을 유일한 근거로 신뢰하고 재검증하지 않는다. |
| III. DBA / 데이터 계층 | 적용 | 스키마 정의는 `data-model.md`에 근거해 마이그레이션(스키마 버전 테이블)로 관리하고, 손상/구버전 감지 시 "삭제 후 전체 재생성"이라는 되돌릴 수 없는 동작은 이미 스펙(FR-003, Edge Cases)이 정책으로 승인한 경로다. 유일성 제약(FR-006 — 안정적 식별자를 기본 키로)은 애플리케이션 코드가 아니라 SQLite `PRIMARY KEY`/`UNIQUE` 제약으로 강제한다. |
| IV. QA | 적용 예정 | tasks 단계에서 구현 서브에이전트와 분리된 QA 서브에이전트에게 테스트 작성·실행을 위임한다(001과 동일 패턴). |
| V. 디버거 | N/A | 계획 단계에서는 재현할 결함이 없음. 구현 중 버그 발견 시 적용. |
| VI. 메인 에이전트 품질 검수 | 적용 예정 | `/speckit-implement` 단계에서 서브에이전트 산출물을 메인 에이전트가 직접 diff로 검수하기 전까지 완료로 간주하지 않는다. |
| VII. 개발 결과 기록 | 적용 예정 | 원칙 VI 통과 직후 `개발결과.md`에 섹션을 추가한다. |

위반 없음 — Complexity Tracking 불필요.

**Phase 1 설계 이후 재확인**: `data-model.md`(SQLite 스키마가 001 타입을 그대로 매핑, FK/UNIQUE로 무결성 강제)와 `contracts/persistence-library.md`(다섯 개 조회 함수만 노출, 내부 스키마 비공개)를 작성한 뒤에도 위 표의 평가는 변하지 않는다 — 새로운 위반 없음.

## Project Structure

### Documentation (this feature)

```text
specs/002-persistence-layer/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── ingestion/            # 001 — 변경 없음, 그대로 재사용(FR-008)
│   └── persistence/          # 002 신규
│       ├── schema.ts         # SQLite DDL + schema_version 상수
│       ├── db.ts             # node:sqlite DatabaseSync 오픈/원자적 교체 헬퍼
│       ├── load.ts           # runImport() 결과 → SQLite 적재(신규 파일에 적재 후 교체)
│       ├── queries.ts        # FR-004 조회 함수: listRoadmaps/getRoadmapDetail/searchMaterials
│       └── types.ts          # 조회 함수의 반환 타입(001 타입을 조회 뷰로 가공한 형태)
└── tests/
    ├── unit/                 # 기존 001 유닛 테스트 + schema.test.ts, db.test.ts 등 추가
    └── integration/          # 기존 001 통합 테스트 + persistence.reload.test.ts,
                               # persistence.rebuild.test.ts, persistence.queries.test.ts 추가
```

**Structure Decision**: Option 1(단일 프로젝트)을 그대로 유지한다. 이 기능은 프론트엔드가 없고 001이 이미 만든 `backend/` 패키지를 확장할 뿐이므로 별도 패키지·워크스페이스를 신설하지 않는다. `backend/src/persistence/`는 `backend/src/ingestion/`과 나란히 두어, 3단계(사용자·읽기 화면)가 나중에 `backend/src/api/`(가칭)를 추가할 때 `persistence/`의 조회 함수만 호출하도록 경계를 유지한다.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

해당 없음 — 위반이 없어 정당화가 필요한 항목이 없다.
