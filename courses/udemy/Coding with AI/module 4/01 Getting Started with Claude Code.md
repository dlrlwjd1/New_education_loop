# Getting Started with Claude Code

## 개요
- 이번 섹션부터 **Claude Code** 시작. Claude Code를 안 쓰더라도, **컨텍스트·토큰** 등 중요한 일반 AI 개념을 다루므로 이 섹션(특히 컨텍스트 강의)은 꼭 볼 것.
- 이 강의는 **설치 → 첫 파이썬 스크립트 생성 → 권한/모드**까지 전체 흐름을 체험한다.

## 내용

### 설치(Installation)
- 랜딩 페이지의 **curl 명령**을 터미널에 붙여넣기 (OS 무관), 브라우저로 인증.
  - **claude.com** 계정 생성 후 인증 (무료/유료 무관).
- 문서에 다른 설치법도: **PowerShell**, Mac은 **Homebrew**, **Winget**. (예전 npm 명령은 제거됨.)
- 설치 후 **`claude`** 명령 사용 가능.

### 시작하기
```bash
mkdir test-project
cd test-project
claude
```
- 처음 실행 시 해당 디렉토리 파일 편집 **권한 허용** 여부 물음 → yes.
- 시작 화면에 **모델 표시** (강사는 Opus 4.5, 플랜/시점에 따라 Sonnet 등 다를 수 있음 — 표시되는 걸 쓰면 됨).
- 단순 챗봇으로도 쓸 수 있지만, 파일 생성·관리, 코드 작성, 도구 실행 등 **터미널에서 할 수 있는 거의 모든 것** 가능.

### 첫 스크립트 — Chuck Norris 조크
프롬프트: "api.chucknorris.io에서 조크를 fetch해 터미널에 출력하는 파이썬 스크립트 생성, **서드파티 패키지 사용 금지**" (표준 라이브러리 `urllib` 사용).
- Claude가 먼저 **무엇을 할지 설명** + 파일명(`chucknorris.py`) + 생성할 코드를 보여줌 (결과는 AI라 매번 다를 수 있음).

### 권한(Permissions) 선택지
파일 생성/실행 시 물어봄:
- **Yes** — 이번만 허용.
- **Yes, allow all edits** — 이후 권한 안 물음 = **auto-run(= YOLO) 모드**. 학습 중엔 비추천.
- **No** — 거부.
- **Tab to add additional instructions** — 거부하며 추가 지시 (예: "파일명을 `joke.py`로 불러라").
- 명령 실행 시엔 **"Yes, and don't ask again for Python 3 command"** 처럼 **특정 액션별 권한** 설정 가능.

### 파일 참조 & bash 모드
- 파일 언급(mention): **`@joke.py`** 처럼 `@` + 파일명 → 하단에 파일 표시.
- **bash 모드**: `!` 입력 후 명령 실행 (예: `!python joke.py`).

### 변경(diff) 확인
- 변경 요청 시 **diff 표시**: 빨강 = 제거, 초록 = 추가. 확인 후 accept.
- 예: "다른 조크 들을지 사용자에게 물어보고, yes면 계속 fetch, no면 종료"하는 루프 추가.

### 모드 전환 — Shift+Tab
- **Shift+Tab** 1회 → **Accept edits on** (권한 안 물음).
- **Shift+Tab** 2회 → **Plan mode** (다음 강의에서 다룸).
- **Shift+Tab** 3회 → 기본 모드로 복귀.

## 요약
- 설치: **curl 명령**(또는 Homebrew/PowerShell/Winget) + claude.com 인증 → `claude` 명령 사용.
- 사용 흐름: 프롬프트 → Claude가 계획·코드 설명 → **권한 승인** → 파일 생성·실행 → **diff로 변경 확인**.
- 권한은 액션별로 세분 가능(특정 명령 auto-approve). **auto-run(YOLO)은 학습 중 비추천**.
- 팁: **`@파일명`** 으로 파일 참조, **`!`** 로 bash 모드, **Shift+Tab**으로 모드 전환(기본 → accept edits → plan).
