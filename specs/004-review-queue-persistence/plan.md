# Implementation Plan: 복습큐 자료 이전·영속화

**Branch**: `004-review-queue-persistence` | **Date**: 2026-09-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-review-queue-persistence/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

`내학습/복습큐.md` 하나에 있는 활성 복습 큐 표와 `## 마스터 완료` 표를 파싱해, 001·002가 이미 확립한 "파일이 원본, SQLite는 파생 캐시, 매 재적재는 전체 재생성" 아키텍처에 그대로 얹는다. 001/002는 대상(`study-progress/`·`courses/`, 로드맵/자료 수천 건)이 커서 파싱(001)과 영속화(002)를 별도 기능으로 나눴지만, 이번 대상은 파일 하나·행 수십 개 수준이라 spec.md가 이미 파싱+영속화를 한 기능으로 묶기로 확정했다. 기술 접근: 새 순수 파싱 모듈(`backend/src/reviewQueue/`)이 001의 AST 기반 파싱 방식(unified/remark-gfm)을 그대로 재사용해 두 표를 읽고, 002의 기존 SQLite 캐시 파일에 테이블 3개를 추가해 002의 `reload()` 한 번의 원자적 재생성 안에 함께 적재한다. 별도 SQLite 파일을 새로 만들지 않는다 — 웹전환 명세 7.1이 "SQLite 파일 하나"를 이미 확정했기 때문이다.

## Technical Context

**Language/Version**: TypeScript 5.9 / Node.js 24(ESM) — 기존 `backend/` 패키지(001·002·003)를 그대로 확장하며 새 패키지를 만들지 않는다.

**Primary Dependencies**: 신규 외부 의존성 없음. 001이 이미 도입한 `unified`/`remark-parse`/`remark-gfm`/`mdast-util-to-string`(AST 기반 Markdown 파싱, GFM 표 포함)과 002가 이미 도입한 `node:sqlite`(`DatabaseSync`)를 그대로 재사용한다.

**Storage**: 002가 이미 만든 SQLite 파일 1개(`backend/.cache/learning-loop.sqlite`)에 테이블 3개(`review_queue_items`, `mastered_items`, `review_import_errors`)를 추가한다. 별도 캐시 파일을 신설하지 않는다(웹전환 명세 7.1 "SQLite 파일 하나" 확정 사항). 스키마 변경이므로 `SCHEMA_VERSION`을 올려 002의 기존 "버전 불일치 → 전체 재생성" 경로를 그대로 태운다(새 마이그레이션 스크립트를 만들지 않는다).

**Testing**: vitest — 001·002·003과 동일한 도구·배치(`backend/tests/unit`, `backend/tests/integration`) 구조를 따른다.

**Target Platform**: 로컬 Node.js 프로세스(개인용 로컬 웹앱, 단일 사용자).

**Project Type**: Single project — 기존 `backend/` 패키지 내부 확장(라이브러리). 이 기능은 화면이나 HTTP 엔드포인트를 만들지 않는다(001·002와 동일한 경계, spec.md Assumptions: "조회 가능한 상태를 만든다"까지).

**Performance Goals**: 실저장소 기준 활성 항목 10건 내외, 마스터 완료 항목 소수 — 001·002가 다룬 로드맵 8개·자료 7,865건에 비해 훨씬 작은 데이터량이라 별도 성능 목표를 두지 않는다(002의 기존 SC-001 "최초 적재 대비 1% 미만"이 이 데이터량에서는 자명하게 성립).

**Constraints**: 단일 사용자 로컬 앱(다중 프로세스 잠금 범위 밖) · 실시간 파일 감시 범위 밖(재적재는 항상 명시적 호출, 002와 동일) · 이 기능은 복습 일정을 계산·변경하지 않는다(spec.md FR-013, 원본 값을 그대로 옮겨 담기만 함) · "주제" 칸을 로드맵 레코드에 강제 매핑하지 않는다(spec.md Assumptions).

**Scale/Scope**: 실제 `내학습/복습큐.md` 기준 활성 항목 약 10건, 마스터 완료 0건(2026-09-23 기준) — 개인용 소규모 파일이며 수평 확장 대상이 아니다.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

이 기능은 화면(UI)을 만들지 않는다 — 001·002와 마찬가지로 이후 기능(005-briefing)이 재사용할 백엔드 조회 계층까지만 다룬다.

| 원칙 | 해당 여부 | 평가 |
|---|---|---|
| I. 프론트엔드 | N/A | 이 기능에 UI 컴포넌트가 없음(spec.md Assumptions에 명시). 화면은 005-briefing 이후 별도 기능에서 다룬다. |
| II. 백엔드 | 적용 | 조회 함수 계약(`contracts/review-queue-library.md`)을 먼저 정의하고, 백엔드 서브에이전트가 그 계약을 근거로 구현한다. 파싱 모듈(`reviewQueue/`)과 영속화 확장(`persistence/`)의 경계를 계약에 명시해, 내부 호출 간에는 001/002 선례처럼 재검증 없이 신뢰한다. |
| III. DBA / 데이터 계층 | 적용 | 스키마 확장은 `data-model.md`에 근거해 002의 기존 `schema.ts`에 테이블을 추가하고 `SCHEMA_VERSION`을 올린다 — 이는 002가 이미 승인한 "버전 불일치 시 전체 재생성" 경로를 그대로 타므로 새로운 되돌릴 수 없는 마이그레이션이 아니다. 유일성 제약(내용 기반 결정적 id — data-model.md §식별자)은 SQLite `PRIMARY KEY`로 강제한다. |
| IV. QA | 적용 예정 | tasks 단계에서 구현 서브에이전트와 분리된 QA 서브에이전트에게 테스트 작성·실행을 위임한다(001·002·003과 동일 패턴). 002의 기존 `reload()` 통합 테스트가 회귀하지 않는지 QA가 함께 확인한다. |
| V. 디버거 | N/A | 계획 단계에서는 재현할 결함이 없음. 구현 중 버그 발견 시 적용. |
| VI. 메인 에이전트 품질 검수 | 적용 예정 | `/speckit-implement` 단계에서 서브에이전트 산출물을 메인 에이전트가 직접 diff로 검수하기 전까지 완료로 간주하지 않는다. |
| VII. 개발 결과 기록 | 적용 예정 | 원칙 VI 통과 직후 `개발결과.md`에 섹션을 추가한다. |

**역할 간 통합 절차 관련 메모**: 이 기능은 002가 만든 `reload()`의 내부 구현(스키마·적재 오케스트레이션)을 확장한다 — 002가 외부에 공개한 다섯 개 조회 함수의 시그니처(`contracts/persistence-library.md`)는 바꾸지 않으므로 003이 재사용하는 계약에는 영향이 없다. 다만 DBA(스키마 확장) 작업이 끝난 뒤 백엔드(적재 오케스트레이션)가 이어받고, QA가 002·003의 기존 회귀 테스트 전체(001: 65개, 002: +64개, 003: +52개, 총 181개)를 다시 통과시키는 것을 완료 기준에 포함한다(헌법 "역할 간 통합 절차").

위반 없음 — Complexity Tracking 불필요.

**Phase 1 설계 이후 재확인**: `data-model.md`(새 테이블 3개가 기존 5개 테이블과 FK로 얽히지 않는 독립 테이블임을 확인)와 `contracts/review-queue-library.md`(파싱 함수 1개 + 조회 함수 3개만 공개, 내부 스키마 비공개)를 작성한 뒤에도 위 표의 평가는 변하지 않는다 — 새로운 위반 없음.

## Project Structure

### Documentation (this feature)

```text
specs/004-review-queue-persistence/
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
│   ├── persistence/          # 002·003 기존, 이번에 additive 확장
│   │   ├── schema.ts         # + review_queue_items / mastered_items / review_import_errors 테이블, SCHEMA_VERSION 2로 상향
│   │   ├── load.ts           # + reviewQueue.parseReviewQueue() 결과를 같은 원자적 재적재 안에서 적재
│   │   └── queries.ts        # + getReviewQueueStatus / listMasteredItems / listReviewQueueImportErrors
│   ├── reviewQueue/          # 004 신규 — 순수 파싱 모듈(I/O 없음, 001의 파싱 스타일과 동일 경계)
│   │   ├── types.ts          # ActiveReviewItem / MasteredItem / ReviewImportError
│   │   ├── identity.ts       # 결정적 id 계산(내용 기반 sha256)
│   │   ├── dateParse.ts      # ISO-8601 날짜 파싱 + 실패 시 오류 레코드
│   │   └── parseReviewQueue.ts  # 활성 큐 표·마스터 완료 표 파싱 진입점
│   └── web/                  # 003 — 변경 없음
└── tests/
    ├── unit/                 # + reviewQueue 파싱/식별자/날짜 유닛 테스트
    ├── integration/          # + persistence.reviewQueue.reload / .queries 통합 테스트
    └── fixtures/              # + 이 기능 전용 신규 픽스처(정상/오류 혼합/빈 파일/마스터 완료만 있는 경우)
```

**Structure Decision**: Option 1(단일 프로젝트)을 유지한다. `reviewQueue/`를 `ingestion/`·`persistence/`와 나란히 새 폴더로 두는 이유는 001·002가 이미 증명한 경계 — "파싱은 부작용 없는 순수 함수, 저장은 persistence/가 전담" — 를 이번에도 지키기 위해서다. 다만 저장소 파일 자체는 002의 것을 그대로 확장한다(위 Storage 참고). `persistence/queries.ts`에 함수를 추가하는 방식은 003이 `getMaterialById`를 추가했을 때와 동일한 additive 패턴이다.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

해당 없음 — 위반이 없어 정당화가 필요한 항목이 없다.
