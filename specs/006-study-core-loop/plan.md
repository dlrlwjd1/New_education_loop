# Implementation Plan: 학습 핵심 루프 — 학습 시작과 질문·답변·채점

**Branch**: `006-study-core-loop` | **Date**: 2026-09-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/006-study-core-loop/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

001~005는 전부 "보여주기"(읽기 전용 화면·집계)였다. 이 기능이 이 저장소에서 처음으로 (1) 실제 AI를 호출해 (2) 여러 턴에 걸친 대화형 세션 상태를 유지하고 (3) 004가 읽기 전용으로만 다루던 복습큐에 처음으로 새 항목을 쓴다. 세 가지 새 인프라가 필요하다:

1. **AI 채점 호출**: `claude -p`(Claude Code 헤드리스 모드, 별도 API 키 없이 이미 로그인된 구독 사용 — 웹전환 명세 7장 확정)를 `--json-schema`로 구조화 출력을 강제해 서브프로세스로 호출한다. 이 환경에서 실제로 호출해 확인한 결과, `--json-schema`+`--output-format json`은 응답의 `structured_output` 필드에 스키마를 100% 만족하는 객체를 돌려주고, `--restricted`(도구·MCP 차단) 모드에서도 순수 텍스트 판정 작업은 문제없이 동작한다(research.md §1 — 실제 관측 지연 시간 15.7초, 비용 $0.25/회, 기본 모델 자동 선택).
2. **세션 전용 영속화**: 001~005의 어떤 캐시도 아닌 새 SQLite 파일(`내학습/study-sessions.sqlite`) — 005가 "파일에서 파생되지 않는 진짜 데이터는 002/004의 공유 캐시에 얹지 않는다"고 확립한 선례를 그대로 따른다.
3. **복습큐 쓰기 경로**: 004는 `내학습/복습큐.md`를 읽기만 했다. 이 기능이 그 파일에 새 오답 행을 추가하는 첫 쓰기 경로이며, 004의 SQLite 캐시가 무거운 전체 재적재(`reload()`, 실측 약 18초) 없이도 즉시 새 항목을 반영하도록 004의 계약을 additive하게 확장한다(003이 002에 `getMaterialById`를 추가했던 선례와 동일한 절차).

화면은 001~005와 같은 서버 렌더링 Express 패턴(003)을 그대로 쓴다 — 매 턴(답변 제출, 힌트 요청, 재시도)이 완결된 POST 요청 하나이며, 웹소켓·SSE 같은 실시간 프로토콜은 필요 없다(research.md §2).

## Technical Context

**Language/Version**: TypeScript 5.9 / Node.js 24 (ESM) — 001~005와 동일한 `backend/` 패키지를 확장.

**Primary Dependencies**: 신규 외부 npm 의존성 없음 — `claude` CLI를 `node:child_process`로 서브프로세스 호출(SDK 패키지 `@anthropic-ai/claude-agent-sdk`도 설치되어 있음을 확인했으나, CLI 서브프로세스 호출이 이 기능 범위에서 더 간단하고 001~004의 "새 의존성 최소화" 관례와 일치해 우선 채택 — research.md §1). 003의 Express 앱·뷰 헬퍼(`html.ts`, `layout.ts`)를 재사용. 002 `listRoadmaps`/`getRoadmapDetail`/`getMaterialById`, 004의 네 함수를 호출.

**Storage**:
- 신규 전용 SQLite 파일 `내학습/study-sessions.sqlite` — 세션·질문·답변 시도·힌트 사용 기록(005와 동일하게 002/004의 공유 캐시와 물리적으로 분리, 스키마 버전 불일치 시 삭제·재생성하지 않고 예외로 표면화).
- `내학습/복습큐.md` — 이 기능이 활성 큐 표에 새 행을 append하는 **첫 쓰기 경로**(FR-013). 004의 기존 파싱 규칙(항목|주제|처음 틀린 날|다음 복습일|상태)을 그대로 따르는 새 행을 만들고, 기존 행·마스터 완료 표는 건드리지 않는다.
- 004의 SQLite 캐시(`backend/.cache/learning-loop.sqlite`)의 `review_queue_items` 테이블에도 같은 트랜잭션 개념 안에서 즉시 반영 — 004 계약에 신규 함수(`appendReviewQueueItem`)를 additive로 추가해, 무거운 전체 `reload()` 없이 새 행 하나만 넣는다(research.md §3).

**Testing**: vitest + supertest(003·005가 이미 도입) — AI 호출은 테스트에서 실제 프로세스를 띄우지 않고 주입 가능한 인터페이스 뒤에 감춘다(research.md §1).

**Target Platform**: 로컬 브라우저(001~005와 동일) — 로컬 Node 프로세스가 `claude` CLI를 서브프로세스로 실행.

**Project Type**: 단일 프로젝트 확장 — 서버 렌더링, 별도 `frontend/` 없음.

**Performance Goals**: 채점 1회 호출은 실측 약 15~20초, 요청당 서버는 그 시간만큼 응답을 지연한다(개인용 로컬 앱이라 동시 요청 경합 없음, 별도 비동기 작업 큐를 두지 않는다 — research.md §2). 복습큐 신규 등록은 전체 재적재 없이 1초 미만.

**Constraints**: 단일 사용자 로컬 앱(인증 범위 밖) · AI 호출은 `--restricted`(도구·MCP 차단)로 실행해 학습 자료·사용자 답변에 섞인 지시문이 셸·파일에 영향을 주지 않게 한다(FR-022, 헌법 4.1) · AI 응답의 `verdict`는 스키마 강제와 별개로 서버가 허용된 열거값인지 다시 검증한다(FR-022, 방어적 이중 검증) · 채점 호출 타임아웃(90초) 초과 시 프로세스를 종료하고 "채점 대기" 상태로 전환한다(FR-021).

**Scale/Scope**: 실저장소 기준 로드맵 9개, 자료 7,865개, 복습 대상 10건 — 이 기능 자체의 신규 데이터(세션·질문·답변)는 개인 사용 빈도만큼만 쌓인다.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

이 기능은 003·005에 이어 **원칙 I(프론트엔드)이 적용되는 세 번째 기능**이며, 이 저장소에서 **처음으로 실제 AI 호출(서브프로세스)을 포함**한다.

| 원칙 | 해당 여부 | 평가 |
|---|---|---|
| I. 프론트엔드 | 적용 | 학습실 화면(질문·답변 입력·판정 표시·힌트/설명 패널)은 프론트엔드 서브에이전트에게 위임한다. **실제 브라우저로 골든 패스(주제 입력→사전지식→질문→오답→힌트→힌트 3회 초과→설명→재답변→정답)와 엣지 케이스(채점 실패, 존재하지 않는 세션)를 확인하기 전까지 완료로 간주하지 않는다.** |
| II. 백엔드 | 적용 | AI 서브프로세스 호출, 세션 상태 전이, 복습큐 쓰기 경로는 백엔드 서브에이전트에게 위임한다. `contracts/study-service-library.md`·`contracts/http-routes.md`를 프론트엔드·QA와 공유하는 단일 원본으로 삼는다. AI가 반환한 문장은 서버가 검증한 뒤에만 상태 전이에 반영한다(FR-022) — 이 검증 로직 자체가 원칙 II의 "판정 형식 검증, 결과 저장"의 핵심이다. |
| III. DBA / 데이터 계층 | 적용 | `study-sessions.sqlite`의 신규 스키마와, 004에 추가하는 `appendReviewQueueItem` 확장은 DBA 서브에이전트가 담당한다. 004의 기존 다섯 함수 시그니처는 바꾸지 않는다(additive만 허용). |
| IV. QA | 적용 예정 | 구현과 분리된 QA 서브에이전트에게 위임. AI 호출은 실제 프로세스 대신 주입 가능한 인터페이스로 모킹해 결정적으로 테스트하고(원칙 IV의 "실제 AI의 채점 품질은 별도 평가" — 웹전환 명세 6장과 동일한 원칙), 상태 전이·저장·중복 방지는 결정적 테스트로 검증한다. |
| V. 디버거 | N/A | 계획 단계에서는 재현할 결함이 없음. |
| VI. 메인 에이전트 품질 검수 | 적용 예정 | 서브에이전트 산출물을 메인 에이전트가 diff와 실제 브라우저 확인으로 검수하기 전까지 완료로 간주하지 않는다. |
| VII. 개발 결과 기록 | 적용 예정 | 원칙 VI 통과 직후 `개발결과.md`에 섹션을 추가한다. |

**역할 간 통합 절차 관련 메모**: 004에 `appendReviewQueueItem()`을 additive로 추가한다 — 004의 기존 다섯 함수·완료 상태에는 영향이 없지만, 004의 스키마(`review_queue_items` 테이블)에 새 쓰기 경로가 생기므로 DBA(스키마 확인) → 백엔드(구현) → QA(004의 기존 회귀 테스트 재실행)의 순서를 지킨다.

위반 없음 — Complexity Tracking 불필요.

**Phase 1 설계 이후 재확인**: `data-model.md`(신규 SQLite 파일이 002/004/005와 FK로 얽히지 않음)와 `contracts/*.md`(AI 호출 계약을 서버 검증 계층 뒤에 완전히 감춤)를 작성한 뒤에도 위 표의 평가는 변하지 않는다.

## Project Structure

### Documentation (this feature)

```text
specs/006-study-core-loop/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── ai-grading-contract.md
│   ├── study-service-library.md
│   └── http-routes.md
└── tasks.md
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── ingestion/            # 001 — 변경 없음
│   ├── persistence/          # 002·003·004 — additive 확장(queries.ts에 appendReviewQueueItem 추가)
│   ├── reviewQueue/          # 004 — 변경 없음(공개 함수만 호출)
│   ├── briefing/             # 005 — 변경 없음
│   ├── ai/                   # 006 신규 — AI 서브프로세스 호출 캡슐화(다른 모든 모듈은 이 계층만 통해 AI를 부른다)
│   │   ├── types.ts          # GradingVerdict, HintResult, ExplanationResult 등
│   │   ├── claudeProcess.ts  # child_process 스폰 + 타임아웃 + JSON 파싱(순수 I/O 래퍼)
│   │   ├── promptBuilder.ts  # 질문·자료·답변 → 프롬프트 문자열(신뢰 경계 명시)
│   │   └── grader.ts         # gradeAnswer/generateHint/generateExplanation — 검증까지 포함한 상위 API
│   ├── study/                # 006 신규 — 세션 상태 기계 + 전용 영속화
│   │   ├── types.ts
│   │   ├── schema.ts, db.ts  # 전용 SQLite 파일(005 패턴과 동일 — 버전 불일치 시 예외)
│   │   ├── store.ts          # 세션·질문·답변시도·힌트 CRUD(단, 답변시도는 상태 전이만, 값 덮어쓰기 없음)
│   │   ├── sessionMachine.ts # FR-027의 서버측 상태 전이 규칙(순수 함수 — 다음 허용 상태만 계산)
│   │   ├── targetResolver.ts # 주제/로드맵·Phase·자료/자동 제안 대상 해석(002·004 조회 조합)
│   │   └── service.ts        # 오케스트레이션: startSession/submitAnswer/requestRetryGrading 등
│   └── web/                   # 003 기존, additive 확장
│       ├── routes/study.ts   # 신규 라우트
│       └── views/study*.ts   # 신규 뷰
└── tests/
    ├── unit/                 # ai/*, study/* 각 모듈 단위 테스트(AI 호출은 인터페이스 모킹)
    ├── integration/          # study 라우트 HTTP 통합 테스트, 004 확장 회귀 테스트
    └── fixtures/study/       # 세션 시나리오 픽스처
```

**Structure Decision**: Option 1(단일 프로젝트) 유지. `ai/`를 별도 모듈로 분리해 "AI를 실제로 부르는 코드는 이 파일들뿐"이라는 경계를 만든다 — `study/service.ts`조차 `ai/grader.ts`의 상위 API(이미 검증된 판정 객체를 반환)만 호출하고 서브프로세스 세부사항을 모른다. 이렇게 하면 QA가 `ai/grader.ts`의 인터페이스만 모킹해 나머지 전부를 결정적으로 테스트할 수 있다(원칙 IV의 요구사항을 구조적으로 만족).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

해당 없음 — 위반이 없어 정당화가 필요한 항목이 없다. (신규 SQLite 파일과 004 계약의 additive 확장은 005·003이 이미 쓴 패턴을 그대로 반복하는 것이라 새로운 예외가 아니다.)
