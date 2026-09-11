# Course Files and Resources

## 개요
- 코스 전반에서 계속 언급될 **코스 파일 / 리소스 파일(resource files)** 의 구성을 소개.
- **두 개의 저장소(repository)**: ① DevStash 실제 코드 repo, ② 코스 리소스 repo — 서로 링크로 연결.
- 여기서 이 코스의 **엄격한 워크플로**를 지탱하는 구조(context 폴더, feature spec, skills, subagents 등)를 미리 훑는다.

## 내용

### 코스 리소스 repo 구성 요소
처음엔 압도적으로 보여도 코스 진행하며 천천히 소개됨.

#### 1. Course Lessons (강의 문서)
- 모든 영상마다 대응하는 **마크다운 문서** — 영상과 동일 내용의 글 버전.
- 기능 강의(예: authentication)에는 API 키 넣을 위치, 사용한 프롬프트 등이 포함.

#### 2. Context 폴더 (워크플로의 핵심)
- **Feature spec files** (`features/` 안, 파일명 `-spec`으로 끝남)
  - 구현할 기능의 **요구사항(requirements)** 을 담은 스펙 파일.
  - 예: 아이템 드로어에 코드 에디터 추가 → 해당 spec 파일에 요구사항 정리.
  - ⚠️ 기능을 "add authentication" 같은 **수동 프롬프트로 만들면 바이브 코딩** — 대신 spec 파일 사용.
- **Current feature** (context 파일)
  - `/feature` 명령이 spec 파일을 로드해 채우는 곳.
  - 담기는 것: **status(상태)**, **goals(스펙에서 로드된 목표)**, notes, 그리고 **지금까지 구현한 기능들의 전체 history**.
- **루트 컨텍스트 파일들** = AI가 시작 시 메모리에 갖는 내용:
  - **AI interaction** — AI가 나와 소통하는 방식. 예: 간결·직접적으로, 비자명한 결정은 짧게 설명, 큰 리팩터 전 확인, **2~3회 시도 후 안 되면 멈추고 문제 설명**.
  - **Coding standards** — 규칙. 예: TypeScript strict mode, `any` 타입 금지.
  - **Current feature** (위 참조).
  - **Project overview** — 꽤 큰 파일. Prisma 모델, 다이어그램 포함 → AI가 항상 무엇을 만드는지 앎.
  - 팁: 강사는 내용을 **간단히 적은 뒤 AI에게 다듬은(refined) 버전**을 받는 방식을 자주 씀.

#### 3. Slash Commands / Skills (Claude Code)
- **`/feature`** — spec 파일을 현재 feature로 로드하고 status 설정. 유닛 테스트 구현 + **review 인자**로 완전 구현 여부 검토.
- **`/research`** — 리서치 문서(예: AI integration, item CRUD, item types, Stripe integration)를 넘기면 계획 문서 생성 → 결과는 `Docs/`에 저장 (예: AI integration plan = 모델 선택, SDK 셋업 등).
- **cleanup** skill — orphaned 파일, 미사용 import 등 정리.
- (Claude Code는 slash command/skill이라 부르지만, 다른 도구에도 **동등 기능**이 있음.)

#### 4. Subagents (서브에이전트)
- 각자 **독립 컨텍스트 윈도(own context window)** 를 가진 에이전트.
- **Code scanner** — 전체 코드베이스 버그 검사.
- **Refactor scanner** — 분리·정리할 영역 탐색.
- **UI reviewer** — UI 검토 및 제안.

#### 5. Prompts
- feature spec을 쓰지 않는 **수동 프롬프트**는 파일로 보관 (특히 초반).
- 초반엔 간단한 노트 프로토타입, Python 예제 등 진행 → 그 프롬프트들 제공 (예: section 3 프롬프트, 이메일 인증 feature 프롬프트 — `/feature`로 로드 후 이어지는 수동 프롬프트).

#### 6. 기타
- **Diagrams & notes** — 모든 다이어그램을 PNG로 제공 (상당수 AI 생성).
- **CLAUDE.md** — Claude가 시작 시 컨텍스트를 얻기 위해 보는 메인 파일. 위 4개 컨텍스트 파일이 링크됨.

### 편의
- 영상 레슨 안에도 해당 파일을 넣어둠 → 매번 repo에 오지 않아도 됨.

## 요약
- 리소스는 **코드 repo + 리소스 repo** 두 곳, 서로 링크.
- 워크플로의 심장은 **context 폴더**: feature spec 파일 → `/feature`로 current feature에 로드 → 구현·테스트·review.
- AI 시작 컨텍스트 = AI interaction 규칙 + coding standards + current feature + project overview, 모두 **CLAUDE.md**로 묶임.
- 보조 도구: `/research`(→ Docs 생성), cleanup skill, subagents(code scanner / refactor scanner / UI reviewer).
- 수동 프롬프트는 파일로 보관하되, 기능 구현은 **spec 파일 기반**으로 해 바이브 코딩을 피함.
