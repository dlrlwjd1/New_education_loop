<!--
Sync Impact Report
- Version change: 1.1.0 → 1.2.0
- Rationale: MINOR bump — added a new principle (VII) requiring every
  completed feature to be logged to a single cumulative development-record
  file immediately after passing the Principle VI quality gate. No existing
  principle was removed or redefined incompatibly.
- Modified principles: none redefined
  - Added: VII. 개발 결과 기록 (Development Record)
- Added sections: none new at section level; extended 역할 간 통합 절차 with
  a bullet requiring the Principle VII log entry right after the Principle
  VI gate passes.
- Removed sections: none
- Deferred / TODO placeholders: none remaining in this file
- Note: this repository's CLAUDE.md governs tutoring/learning-loop behavior
  (Korean-first responses, no answers before retrieval, etc.). This
  constitution governs the *engineering* of the web app itself and does not
  override CLAUDE.md's tutoring rules.

Previous report (1.1.0, retained for history):
- Version change: 1.0.0 → 1.1.0
- Rationale: MINOR bump — added a new principle (VI) requiring the main
  agent to perform its own quality gate over subagent-produced code, rather
  than trusting subagent completion reports. No existing principle was
  removed or redefined incompatibly.
- Modified principles: none redefined
  - Added: VI. 메인 에이전트 품질 검수 (Main-Agent Quality Gate)
- Added sections: none new at section level; extended 역할 간 통합 절차 with
  a bullet requiring the Principle VI gate before any integration is
  reported complete.
- Removed sections: none
- Deferred / TODO placeholders: none remaining in this file

Previous report (1.0.0, retained for history):
- Version change: (none, template) → 1.0.0
- Rationale: Initial ratification for this repository's web-app engineering
  workflow. Supersedes the tutoring-behavior draft prepared earlier in this
  same session (never finalized/reported), per explicit user redirection to
  define role-based (FE/BE/DBA/QA/Debugger) principles with a subagent
  delegation mandate. First complete adoption → 1.0.0.
- Modified principles: n/a (template placeholders → concrete principles)
  - [PRINCIPLE_1_NAME] → I. 프론트엔드 (Frontend)
  - [PRINCIPLE_2_NAME] → II. 백엔드 (Backend)
  - [PRINCIPLE_3_NAME] → III. DBA / 데이터 계층 (Database)
  - [PRINCIPLE_4_NAME] → IV. QA (품질 보증)
  - [PRINCIPLE_5_NAME] → V. 디버거 (Debugging)
- Added sections:
  - 서브에이전트 위임 원칙 (Subagent Delegation Policy — replaces [SECTION_2_NAME])
  - 역할 간 통합 절차 (Cross-Role Integration Workflow — replaces [SECTION_3_NAME])
  - Governance (amendment procedure, versioning policy, compliance review)
- Removed sections: none (template placeholders fully resolved)
- Deferred / TODO placeholders: none remaining in this file
-->

# New_education_loop Constitution
<!-- 웹앱 개발을 위한 역할별(FE/BE/DBA/QA/디버거) 엔지니어링 헌법 -->

## Core Principles

### I. 프론트엔드 (Frontend)
UI 작업(컴포넌트, 상태 관리, 라우팅, 접근성, 반응형 레이아웃)은 프론트엔드
전담 서브에이전트에게 위임한다. 메인 스레드가 직접 컴포넌트를 작성하지 않고,
요구사항과 디자인 계약(props, 상태 흐름, API 응답 스키마)을 정리해 서브에이전트에
넘긴다. UI 변경은 실제 브라우저에서 골든 패스와 엣지 케이스를 확인한 뒤에만
완료로 간주한다 — 타입 체크 통과는 기능 완성의 증거가 아니다.

### II. 백엔드 (Backend)
API 엔드포인트, 인증/인가, 비즈니스 로직은 백엔드 전담 서브에이전트에게
위임한다. 모든 API는 명시적 계약(요청/응답 스키마, 에러 코드)을 먼저 정의하고,
그 계약이 프론트엔드·QA 서브에이전트가 참조하는 단일 원본이 된다. 입력 검증은
시스템 경계(외부 요청, 사용자 입력)에서만 수행하고, 내부 호출 간에는 계약을
신뢰한다.

### III. DBA / 데이터 계층 (Database)
스키마 변경, 마이그레이션, 인덱스·쿼리 성능 튜닝은 DBA 전담 서브에이전트에게
위임한다. 스키마를 바꾸는 모든 변경은 마이그레이션 파일로 남기고, 되돌릴 수
없는 작업(컬럼/테이블 삭제, 데이터 백필)은 실행 전 별도 확인을 받는다. 데이터
무결성 제약(FK, unique, not-null)은 애플리케이션 코드가 아니라 스키마 레벨에서
강제하는 것을 기본으로 한다.

### IV. QA (품질 보증)
테스트 작성·실행·회귀 확인은 QA 전담 서브에이전트에게 위임하고, 가능하면 구현을
담당한 서브에이전트와 분리해 교차 검증 효과를 얻는다. 기능은 관련 테스트가
통과하고, UI가 있는 경우 실제 화면에서 골든 패스를 확인하기 전까지 "완료"로
보고하지 않는다. 버그 수정에는 재발을 막는 회귀 테스트를 동반한다.

### V. 디버거 (Debugging)
장애·버그 조사는 디버거 전담 서브에이전트에게 위임해 근본 원인을 먼저 좁히고,
증상을 가리는 임시 처방(우회, 재시도, 예외 삼키기)으로 종료하지 않는다. 원인
불명 상태에서 수정 서브에이전트에게 넘기지 않는다 — 재현 조건과 근본 원인을
먼저 확정한 뒤에 수정 작업을 위임한다.

### VI. 메인 에이전트 품질 검수 (Main-Agent Quality Gate)
서브에이전트(프론트엔드/백엔드/DBA/QA/디버거 불문)가 작성한 코드는 메인
에이전트가 실제 diff를 직접 읽고 검수하기 전까지 완료로 간주하지 않는다.
서브에이전트의 "완료했다"는 보고를 그대로 신뢰하지 않는다 — 보고는 의도를
설명할 뿐 실제로 무엇이 바뀌었는지는 보장하지 않는다. 검수 항목은 최소한
다음을 포함한다: 해당 원칙(I~V) 준수 여부, 요청 범위를 벗어난 변경이 없는지,
계약(API 스키마, 인터페이스)과 실제 구현의 일치 여부, 테스트·확인 절차가
실제로 수행됐는지. 검수에서 문제를 발견하면 병합하지 않고 원 서브에이전트에게
구체적인 사유와 함께 재작업을 위임한다 — 메인 에이전트가 대신 고쳐 쓰지 않는다.

### VII. 개발 결과 기록 (Development Record)
기능 하나의 구현이 원칙 VI(메인 에이전트 품질 검수)를 통과해 완료로 확정되면,
그 직후 저장소 루트의 `개발결과.md` 한 파일에 결과를 섹션으로 추가(append)한다.
기능마다 새 파일을 만들지 않고 이 한 파일에 누적한다. 각 기록에는 최소한
다음을 포함한다: 날짜, 기능명(대응 스펙·작업 ID), 변경된 파일 목록 또는 범위,
검증 방법과 결과(테스트·실제 브라우저 확인 등), 담당 서브에이전트(역할).
품질 검수를 통과하지 못한 미완성 상태는 완료로 기록하지 않는다 — 재작업 중인
기능은 통과 후에만 기록된다.

## 서브에이전트 위임 원칙

이 프로젝트는 **역할이 분명한 작업일수록 전용 서브에이전트에게 위임하는 것을
기본값**으로 한다. 메인 스레드(오케스트레이터)는 다음만 직접 수행한다:
작업을 역할별로 쪼개기, 서브에이전트 간 계약(API 스키마, 인터페이스) 정리,
결과 통합, 사용자에게 보고. 단일 파일을 살짝 고치는 것처럼 위임 비용이 작업
자체보다 큰 사소한 변경은 예외로 직접 처리할 수 있다. 서로 독립적인 역할의
작업(예: 프론트엔드 UI 작업과 DBA 마이그레이션 작업)은 병렬로 위임한다.

## 역할 간 통합 절차

역할 간 경계를 넘는 변경은 아래 순서를 지킨다:
- 백엔드가 API 계약을 바꾸면, 프론트엔드 서브에이전트와 QA 서브에이전트에게
  계약 변경을 알리고 그에 따른 작업을 각각 위임한다.
- DBA가 스키마를 바꾸면, 그 변경에 의존하는 백엔드 서브에이전트의 작업이
  끝난 뒤 QA 서브에이전트가 회귀 테스트를 수행한다.
- 디버거가 근본 원인을 확정하면, 실제 수정은 원인이 속한 역할의 서브에이전트
  (프론트엔드/백엔드/DBA)에게 위임한다.
- 통합 결과에 대한 최종 확인(브라우저 동작 확인, 테스트 스위트 통과)은
  QA 서브에이전트 또는 메인 스레드가 담당하고, 그 결과를 근거로만 "완료"를
  보고한다.
- 어떤 서브에이전트의 산출물도 메인 에이전트의 품질 검수(원칙 VI)를 통과하기
  전에는 통합 완료로 보고하지 않는다.
- 품질 검수(원칙 VI)를 통과한 즉시 `개발결과.md`에 해당 기능의 결과를
  기록한다(원칙 VII). 기록이 끝나기 전까지 그 기능은 완료 보고 대상이 아니다.

## Governance

이 헌법은 이 저장소의 웹앱 구현 작업(스펙 기반 워크플로: `/speckit-specify`,
`/speckit-plan`, `/speckit-tasks`, `/speckit-implement` 등)에 대한 게이트다.
저장소 루트의 `CLAUDE.md`가 규정하는 학습 튜터링 행동 규칙(한국어 우선 응답,
인출 우선 판정 등)과는 별개이며, 이 헌법이 그 규칙을 대체하지 않는다.

**개정 절차**: 원칙을 추가·삭제·재정의하려면 `/speckit-constitution`을 통해
이 파일을 갱신하고, 변경 사유를 Sync Impact Report에 남긴다. 이 헌법 파일을
스펙 기반 워크플로 밖에서 직접 수정하지 않는다.

**버전 정책**: 시맨틱 버저닝을 따른다 — 기존 원칙의 제거·양립 불가능한 재정의는
MAJOR, 새 원칙 추가나 실질적인 지침 확장(예: 새로운 역할 추가)은 MINOR, 표현
정리나 오탈자 수정은 PATCH.

**준수 검토**: `/speckit-plan`과 `/speckit-tasks`로 생성되는 산출물은 역할별
작업을 서브에이전트에게 위임하는 구조로 설계되어야 한다. 단일 서브에이전트
또는 메인 스레드가 FE/BE/DBA/QA/디버깅 작업을 전부 직접 수행하도록 설계된
계획은 이 헌법을 위반하므로 구현 전에 재검토한다. `/speckit-implement`
실행 중 서브에이전트 작업이 완료될 때마다 원칙 VI(메인 에이전트 품질 검수)
없이 다음 단계로 넘어가는 흐름은 허용하지 않는다.

**Version**: 1.2.0 | **Ratified**: 2026-09-16 | **Last Amended**: 2026-09-18
