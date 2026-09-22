# Implementation Plan: 로드맵 탐색·자료실 화면 (Roadmap & Materials Screens)

**Branch**: `003-roadmap-materials-screens` | **Date**: 2026-09-22 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-roadmap-materials-screens/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

002-persistence-layer의 다섯 조회 함수를 소비해 로드맵 목록·상세 탐색, "이어서 공부" 위치 안내, 자료 검색·본문 열람 화면을 만든다. 사용자가 명시적으로 선택한 대로(AskUserQuestion), **서버 렌더링 단일 앱**으로 구현한다 — 기존 `backend/` 패키지 안에 얇은 HTTP 서버(Express)를 추가해 화면을 서버에서 직접 HTML로 그려 보내고, 별도 SPA 프레임워크나 클라이언트 빌드 도구는 두지 않는다. 이 결정은 이후 모든 화면 기능(F01, F03~F12)이 이어받는 구조적 선택이며, 그 이유와 한계는 research.md §1에 근거를 남긴다.

## Technical Context

**Language/Version**: TypeScript 5.9 / Node.js 24 (ESM) — 001/002와 동일한 `backend/` 패키지를 그대로 확장.

**Primary Dependencies**:
- `express`(신규) — 라우팅·HTTP 서버. SPA 프레임워크가 아니라 얇은 서버 계층(research.md §2).
- `remark-rehype`/`rehype-raw`/`rehype-sanitize`/`rehype-stringify`(신규) — 001이 이미 쓰는 `unified`/`remark-parse`/`remark-gfm`(001 재사용, 새 파서 도입 안 함)에 이어붙여 Markdown(과 그 안의 raw HTML)을 안전한 HTML로 변환(FR-009, FR-010, research.md §4).
- 002 `backend/src/persistence/*`의 다섯 조회 함수 — 같은 Node 프로세스 안에서 직접 호출(네트워크 홉 없음).
- 001 `backend/src/ingestion/runImport.ts`의 `DEFAULT_COURSES_ROOT` — 자료 본문을 읽을 때 경로 기준으로 재사용(중복 정의 안 함).
- 신규 서버 쪽 코드가 만드는 뷰(HTML)는 별도 템플릿 엔진 의존성 없이, 이스케이프 헬퍼를 갖춘 순수 함수로 만든다(research.md §3).

**Storage**: 신규 영속 저장소 없음(N/A) — 002의 SQLite 캐시를 읽기 전용으로 소비하고, 자료 본문은 `courses/`에서 그때그때 읽는다(001/002와 동일하게 파일이 원본).

**Testing**: vitest(기존과 동일) + `supertest`(신규, devDependency) — Express 라우트에 대한 HTTP 통합 테스트(research.md §6).

**Target Platform**: 로컬 브라우저(데스크톱·모바일 뷰포트) — `backend/`가 띄우는 로컬 HTTP 서버가 제공하는 페이지. 단일 사용자, 인증 없음(spec.md Assumptions).

**Project Type**: 단일 프로젝트 확장 — "웹 애플리케이션"이지만 서버 렌더링 단일 앱이라 별도 `frontend/`를 만들지 않는다(Project Structure 참고).

**Performance Goals**: SC-003(자료 검색 1초 이내 응답), SC-001(목록→로드맵→이어서 공부 3클릭 이내 도달 — UX 흐름 지표).

**Constraints**: 단일 사용자 로컬 앱(인증·인가 범위 밖) · 002의 다섯 조회 함수만 데이터 원천으로 삼고 화면에서 진행률·연결 관계를 재계산하지 않음(FR-013) · 자료 본문 렌더링은 스크립트·위험한 URL을 실행하지 않아야 함(FR-010, SC-005) · 검색·목록 결과가 많아도 한 번에 전부 렌더링하지 않음(Edge Cases).

**Scale/Scope**: 실제 저장소 기준 로드맵 8개, 자료 7,865개(001/002와 동일 규모) — 개인용 로컬 앱 범위를 넘는 확장성은 다루지 않는다.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

이 기능은 이 저장소에서 **원칙 I(프론트엔드)이 처음 실질적으로 적용되는 기능**이다.

| 원칙 | 해당 여부 | 평가 |
|---|---|---|
| I. 프론트엔드 | 적용 | 화면(목록·상세·검색·자료 열람) 작업은 프론트엔드 서브에이전트에게 위임하고, 이 계획서(디자인 계약: contracts/http-routes.md의 응답 스키마, data-model.md의 뷰 모델)를 근거로 넘긴다. `/speckit-implement` 단계에서 **실제 브라우저로 골든 패스(목록→상세→이어서 공부, 검색→열람)와 엣지 케이스(빈 로드맵, 검색 결과 없음, 악성 스크립트 포함 자료)를 확인하기 전까지 완료로 간주하지 않는다** — 타입 체크·유닛 테스트 통과만으로는 부족하다. |
| II. 백엔드 | 적용 | 신규 라우팅(Express)과 자료 본문 읽기(`materialContent.ts`)는 백엔드 서브에이전트에게 위임하고, `contracts/http-routes.md`를 프론트엔드·QA와 공유하는 단일 원본으로 삼는다. 입력 검증(경로 순회 방지 등)은 이 새 경계(브라우저 요청)에서 수행한다. |
| III. DBA / 데이터 계층 | N/A | 이 기능은 새 스키마·마이그레이션을 만들지 않는다(002의 저장소를 읽기 전용으로 소비). |
| IV. QA | 적용 예정 | tasks 단계에서 구현과 분리된 QA 서브에이전트에게 라우트 테스트 작성을 위임하고, **UI가 있으므로 실제 화면에서 골든 패스를 확인하기 전까지 완료로 보고하지 않는다**(원칙 IV 그대로 인용). |
| V. 디버거 | N/A | 계획 단계에서는 재현할 결함이 없음. |
| VI. 메인 에이전트 품질 검수 | 적용 예정 | `/speckit-implement`에서 서브에이전트 산출물을 메인 에이전트가 diff와 **실제 브라우저 확인**으로 검수하기 전까지 완료로 간주하지 않는다. |
| VII. 개발 결과 기록 | 적용 예정 | 원칙 VI 통과 직후 `개발결과.md`에 섹션을 추가한다. |

위반 없음 — Complexity Tracking 불필요. (원칙 I이 이 프로젝트에서 처음 적용되는 만큼, "서버 렌더링 단일 앱"이라는 구조 선택 자체는 사용자에게 직접 확인받았다 — research.md §1.)

**Phase 1 설계 이후 재확인**: `contracts/http-routes.md`(다섯 라우트만 노출, 002의 다섯+1 조회 함수만 호출)와 `data-model.md`(신규 영속 상태 없음, 뷰 모델뿐)를 작성한 뒤에도 위 표의 평가는 변하지 않는다. 다만 설계 중 002 계약에 `getMaterialById` 1개 함수를 추가로 확정했다(원칙 II의 "역할 간 통합 절차"에 따라 002 tasks.md에 Addendum으로 기록, additive라 002의 기존 다섯 함수·완료 상태에는 영향 없음) — 새로운 위반은 없다.

## Project Structure

### Documentation (this feature)

```text
specs/003-roadmap-materials-screens/
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
│   ├── ingestion/               # 001 — 변경 없음
│   ├── persistence/              # 002 — 변경 없음
│   └── web/                      # 003 신규
│       ├── server.ts             # Express 앱 생성 + listen 진입점
│       ├── routes/
│       │   ├── roadmaps.ts       # GET /, GET /roadmaps/:id, GET /roadmaps/:id/continue
│       │   └── materials.ts      # GET /materials, GET /materials/:id
│       ├── views/                # 서버 렌더링 HTML(템플릿 엔진 의존성 없는 함수 기반)
│       │   ├── layout.ts
│       │   ├── roadmapList.ts
│       │   ├── roadmapDetail.ts
│       │   ├── materialSearch.ts
│       │   └── materialView.ts
│       ├── html.ts               # 공용 이스케이프·태그 헬퍼
│       ├── materialContent.ts    # sourcePath → 원문 읽기 + Markdown→안전한 HTML(FR-009, FR-010)
│       ├── continueStudy.ts      # "이어서 공부" 위치 계산(뷰 전용 상태, 002 미제공)
│       └── public/               # 정적 자산(css, 최소 vanilla JS)
└── tests/
    ├── unit/                     # materialContent, continueStudy, html 이스케이프 단위 테스트
    └── integration/              # 라우트별 HTTP 통합 테스트(supertest)
```

**Structure Decision**: 기존 `backend/` 패키지를 그대로 확장한다(Option 1 단일 프로젝트 유지). 서버 렌더링 단일 앱으로 결정했으므로(사용자 확인) 별도 `frontend/` 워크스페이스·빌드 파이프라인을 만들지 않는다 — `backend/src/web/`이 001의 `ingestion/`, 002의 `persistence/`와 나란히 위치해, 화면은 오직 `persistence/`의 다섯 조회 함수만 호출하고 내부 스키마나 파싱 로직을 직접 건드리지 않는 경계를 유지한다.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

해당 없음 — 위반이 없어 정당화가 필요한 항목이 없다.
