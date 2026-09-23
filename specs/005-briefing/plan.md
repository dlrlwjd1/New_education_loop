# Implementation Plan: 브리핑 — 오늘의 학습 현황 한눈에 보기

**Branch**: `005-briefing` | **Date**: 2026-09-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/005-briefing/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

002(로드맵 진행률)와 004(복습 대상)의 기존 조회 함수를 소비해, 사용자 시간대 기준 오늘 날짜로 복습 우선순위와 로드맵별 진행률을 한 화면에 모아 보여주는 서버 렌더링 화면(003의 Express 앱을 확장)을 만든다. 핵심 설계 판단은 두 가지다. (1) "브리핑 실행"의 자연 키를 (기준 날짜, 시간대, 대상 범위)로 삼아 — 같은 날 같은 범위를 다시 보는 것(새로고침)은 기존 기록을 재사용하고, 사용자가 명시적으로 "다시 실행"을 요청할 때만 그 키가 같아도 새 기록을 만든다. (2) 브리핑 스냅샷은 001·002·004와 달리 **파일에서 파생되는 캐시가 아니라 그 자체가 유일한 역사적 사실**이므로(생성된 뒤 원본 로드맵·복습 데이터가 바뀌어도 스냅샷 값은 그대로여야 한다 — FR-014), 002의 공유 캐시 파일(스키마 버전 불일치 시 통째로 재생성됨)에 얹지 않고 **별도의 자체 SQLite 파일**(`내학습/briefing-history.sqlite`)에 보관해 002/004의 "버전 불일치 시 전체 재생성" 경로가 브리핑 이력을 지우는 사고를 원천 차단한다.

## Technical Context

**Language/Version**: TypeScript 5.9 / Node.js 24 (ESM) — 001~004와 동일한 `backend/` 패키지를 그대로 확장.

**Primary Dependencies**: 신규 외부 의존성 없음. 002의 다섯 조회 함수, 004의 세 조회 함수, 003의 Express 앱·뷰 헬퍼(`html.ts`)를 그대로 재사용한다. `node:sqlite`(002·004가 이미 씀)로 이 기능 전용 SQLite 파일을 새로 연다.

**Storage**: 두 곳에 나눠 기록한다(research.md §2).
- 신규 SQLite 파일 `내학습/briefing-history.sqlite` — 브리핑 스냅샷 이력의 주 저장소. 002의 공유 캐시(`backend/.cache/learning-loop.sqlite`)와 물리적으로 분리하고, 002·004의 "스키마 버전 불일치 → 전체 재생성" 로직의 적용 대상이 아니다(자체 스키마 버전 하나만 가짐, 불일치 시에도 데이터를 지우지 않고 오류로 표면화).
- `내학습/브리핑로그.md` — 사람이 읽는 감사 기록(FR-020). 기존 CLI 시절 3줄(2026-09-16/18/22, 5열 요약 표)은 그대로 보존하고 건드리지 않는다(F11의 "원문 보존" 원칙 상속) — 새 스냅샷은 그 아래 별도 섹션에 이어 붙인다.

**Testing**: vitest + `supertest`(003이 이미 도입) — 003과 동일한 도구·배치.

**Target Platform**: 로컬 브라우저(003과 동일, 인증 없음).

**Project Type**: 단일 프로젝트 확장 — 003과 마찬가지로 서버 렌더링, 별도 `frontend/` 없음.

**Performance Goals**: 실저장소 기준 로드맵 9개·복습 대상 10건 수준 — 001~004가 다룬 규모에 비해 훨씬 작아 별도 성능 목표를 두지 않는다.

**Constraints**: 단일 사용자 로컬 앱 · 브리핑은 읽기 전용(002·004의 데이터를 변경하지 않음, FR-016) · 004(복습 데이터) 조회가 실패해도 로드맵 진행률만으로 부분 응답(Edge Cases) · 002(로드맵 진행률) 조회가 실패하면 003이 이미 만든 503 오류 미들웨어를 그대로 재사용(전면 실패, 새 처리 불필요).

**Scale/Scope**: 실저장소 기준 로드맵 9개, 복습 대상 10건 — 개인용 소규모.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

이 기능은 003에 이어 **원칙 I(프론트엔드)이 다시 적용되는 기능**이다(화면이 있음).

| 원칙 | 해당 여부 | 평가 |
|---|---|---|
| I. 프론트엔드 | 적용 | 브리핑 화면(진행률 표, 복습 목록, 기록 이력) 렌더링은 프론트엔드 서브에이전트에게 위임하고, 이 계획서와 `contracts/http-routes.md`(응답에 필요한 뷰 모델)를 계약으로 넘긴다. **실제 브라우저로 골든 패스(전체 브리핑 → 로드맵 필터 → 다시 실행 → 기록 이력)와 엣지 케이스(로드맵 0개, 복습 0건, 004 응답 실패)를 확인하기 전까지 완료로 간주하지 않는다.** |
| II. 백엔드 | 적용 | 신규 라우팅(`web/routes/briefing.ts`)과 스냅샷 생성 로직(`briefing/service.ts`)은 백엔드 서브에이전트에게 위임하고, `contracts/http-routes.md`·`contracts/briefing-library.md`를 프론트엔드·QA와 공유하는 단일 원본으로 삼는다. |
| III. DBA / 데이터 계층 | 적용 | 신규 SQLite 파일의 스키마(`data-model.md`)는 002·004와 다른 성격(파일 파생 캐시가 아니라 그 자체가 원본에 준하는 이력)임을 스키마 주석에 명시하고, DBA 서브에이전트가 "이 파일은 스키마 버전 불일치 시에도 삭제·재생성하지 않는다"는 제약을 코드로 강제한다(002의 `db.ts` 패턴을 그대로 복붙하지 않는다 — research.md §2). |
| IV. QA | 적용 예정 | tasks 단계에서 구현과 분리된 QA 서브에이전트에게 위임하고, 실제 화면 확인 전까지 완료로 보고하지 않는다. |
| V. 디버거 | N/A | 계획 단계에서는 재현할 결함이 없음. |
| VI. 메인 에이전트 품질 검수 | 적용 예정 | `/speckit-implement`에서 서브에이전트 산출물을 메인 에이전트가 diff와 실제 브라우저 확인으로 검수하기 전까지 완료로 간주하지 않는다. |
| VII. 개발 결과 기록 | 적용 예정 | 원칙 VI 통과 직후 `개발결과.md`에 섹션을 추가한다. |

**역할 간 통합 절차 관련 메모**: 이 기능은 002·004의 공개 조회 함수만 호출하고 그 구현(스키마·재적재 로직)은 건드리지 않는다 — 002·004의 기존 계약·완료 상태에는 영향이 없다.

위반 없음 — Complexity Tracking 불필요.

**Phase 1 설계 이후 재확인**: `data-model.md`(신규 SQLite 파일이 002·004와 FK로 얽히지 않는 완전히 독립된 저장소임을 확인)와 `contracts/http-routes.md`·`contracts/briefing-library.md`를 작성한 뒤에도 위 표의 평가는 변하지 않는다 — 새로운 위반 없음.

## Project Structure

### Documentation (this feature)

```text
specs/005-briefing/
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
│   ├── ingestion/            # 001 — 변경 없음
│   ├── persistence/          # 002·003·004 — 변경 없음(공개 함수만 호출)
│   ├── reviewQueue/          # 004 — 변경 없음(공개 함수만 호출)
│   ├── briefing/             # 005 신규 — 스냅샷 생성·자체 영속화(순수 로직 + 저장, UI 없음)
│   │   ├── types.ts          # BriefingSnapshot, RoadmapProgressView, DueReviewItemView 등
│   │   ├── formatProgress.ts # FR-004 진행률 표시 규칙(0%/미시작, <0.1%, <100%, 소수 첫째자리)
│   │   ├── buildSnapshot.ts  # 002·004 조회 결과 → BriefingSnapshot 순수 조립 함수
│   │   ├── schema.ts         # 전용 SQLite DDL + 자체 스키마 버전 상수(002와 별개)
│   │   ├── db.ts             # 전용 SQLite 파일 오픈 헬퍼 — 버전 불일치를 "삭제 후 재생성"이 아니라 오류로 표면화(research.md §2)
│   │   ├── store.ts          # insertSnapshot / findLatestSnapshotForKey / listSnapshotsByDate / getSnapshotById
│   │   ├── logFile.ts        # 내학습/브리핑로그.md에 스냅샷을 사람이 읽는 형식으로 append
│   │   └── service.ts        # 오케스트레이션: 오늘 날짜 판정 → 002·004 조회 → buildSnapshot → dedup-or-생성 → store+logFile
│   └── web/                   # 003 기존, additive 확장
│       ├── routes/
│       │   └── briefing.ts   # 신규: GET /briefing, POST /briefing/rerun, GET /briefing/history, GET /briefing/history/:id
│       └── views/
│           ├── briefing.ts          # 신규: 메인 브리핑 화면
│           └── briefingHistory.ts   # 신규: 기록 이력 목록·상세
└── tests/
    ├── unit/                 # + briefing/formatProgress, buildSnapshot, schema, dedup 로직 단위 테스트
    ├── integration/          # + briefing 라우트 HTTP 통합 테스트(supertest)
    └── fixtures/              # + 이 기능 전용 신규 픽스처(로드맵·복습 조합, 004 실패 시나리오)
```

**Structure Decision**: Option 1(단일 프로젝트)을 유지한다. `briefing/`을 `ingestion/`·`persistence/`·`reviewQueue/`와 나란히 새 모듈로 두어 "002·004는 읽기 전용으로 호출만 하고, 005 고유의 저장(자체 SQLite+파일)은 005 안에 완전히 캡슐화한다"는 경계를 지킨다. HTTP 계층(`web/routes/briefing.ts`)은 `briefing/service.ts` 하나만 호출하고 `briefing/store.ts`나 002/004 내부 스키마를 직접 건드리지 않는다.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

해당 없음 — 위반이 없어 정당화가 필요한 항목이 없다. (별도 SQLite 파일을 추가하는 것은 위반이 아니라 research.md §2에서 근거를 설명하는 설계 판단이다 — 웹전환 명세 7.1의 "SQLite 파일 하나" 원칙에 대한 예외이므로, 그 원칙 문서 자체를 갱신할지는 사용자에게 완료 보고 시 함께 알린다.)
