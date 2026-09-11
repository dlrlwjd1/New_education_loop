# Slash Commands, Config, and Settings

## 개요
- Claude Code의 **슬래시 커맨드(slash commands)**, **config**, **settings 파일**에 대한 크래시 코스.
- `/`만 입력하면 사용 가능한 커맨드 목록이 뜸 (Anthropic이 자주 추가·제거하므로 시점마다 다를 수 있음).

## 내용

### 주요 슬래시 커맨드
**인증(Auth)**
- `/logout`, `/login` — 로그아웃 / (다른 사용자로) 재로그인. (첫 실행 시 이미 인증됨.)

**프로젝트 & 파일**
- `/add-dir` — 프로젝트에 디렉토리 추가.
- `/init` — **CLAUDE.md** 생성 (컨텍스트 관련 매우 중요한 파일, 곧 다룸).
- `/memory` — 영구 프로젝트 메모리(=CLAUDE.md) 편집.
- `/agents` — **서브에이전트(sub-agent)** 생성·관리 (코드 리뷰, UI 개선점 탐색 등).
- `/hooks` — 특정 이벤트에 셸 명령을 실행하는 훅 관리.
- `/todos` — Claude가 기능 구현 시 만든 to-do 리스트 확인.

**설정 & 환경**
- `/config` — config 설정.
- `/status`, status line, terminal setup — 버전·모델 정보 표시, 키 바인딩 설정 (강사는 잘 안 씀).
- `/model` — 사용 가능 모델·현재 모델 표시 및 변경.

**도움말 & 디버깅**
- `/help` — 도움말/사용법.
- `/bug`(현재는 `/feedback`) — Anthropic에 버그 리포트.
- `/doctor` — 헬스 체크 (버전·경로 등).
- `/permissions` — 특정 명령의 권한(실행 시 확인 여부) 조회·수정.
- `/output-style` — 응답을 간결/장황하게 등 스타일 변경.

**컨텍스트 관리** (몇 강 뒤 심화)
- `/context` — 현재 컨텍스트·토큰 사용량 시각화.
- `/clear` — 컨텍스트 비우기.
- `/compact` — 컨텍스트 압축.
- 대화를 파일로 export / 클립보드 복사.

**통합(Integration)**
- 플러그인 관리.
- **MCP(Model Context Protocol) 서버** — 서드파티 MCP 사용 (나중에 다룸):
  - **Neon MCP** — 모델이 Neon DB를 봄.
  - **Context7 MCP** — LLM에 최신 문서 접근 제공.
  - **Playwright MCP** — Claude가 브라우저를 보고 클릭·호버 등 이벤트 실행.
- IDE 통합 관리, bash 태스크.

### `/config` 주요 옵션
- **Auto compact** — 토큰/컨텍스트 부족 시 자동 압축. 강사는 **false**로 두고 `/compact`로 수동 압축 선호.
- Show tips, prompt suggestions, verbose output, terminal progress bar.
- **Thinking mode** — Claude가 더 "뜨겁게"(더 많은 연산) 사고. Opus·Sonnet에서 **기본 활성**.
  - 프롬프트 키워드로 단계 상승: **think → think harder → ultra think**.
  - 트레이드오프: **토큰 더 소모**. 아끼려면 끌 수 있으나 켜두길 권장.
- **Rewind code** (`/rewind`) — 대화의 특정 체크포인트로 되돌리기.
- **Theme / output style** — 강사는 explanatory였다가 default로 변경.

### `/model` — 모델 선택
- Opus 4.5(강사 사용), **Sonnet**, **Sonnet 1M 컨텍스트(100만 토큰)**, Haiku.
- 일반 모델은 컨텍스트 **최대 200,000 토큰** — 초과 시 문제 발생 → **컨텍스트 관리·클리어 필요**.
- Sonnet 1M은 컨텍스트가 크지만 성능은 Opus 4.5보다 낮음(강사 의견). Haiku는 약하지만 **단순 작업엔 매우 빠름**.

### Settings 파일 & 스코프(Scope)
MCP·플러그인·권한·훅·모델 선호·API config·비활성 도구 등이 저장됨. 3가지 스코프:

| 스코프 | 파일 | 위치 | 공유 | Git |
|--------|------|------|------|-----|
| **Personal (project-local)** | `settings.local.json` | 프로젝트 `.claude/` | 나만 | `.gitignore`됨 (repo에 없음) |
| **Project** | `settings.json` | 프로젝트 `.claude/` | 팀 전체 | repo에 포함 |
| **User / Global** | `settings.json` | 홈 `~/.claude/` | 내 모든 프로젝트 | — |

- `.claude/` 폴더엔 plans, commands, sub-agents, settings가 들어감.
- 설정을 안 바꿨으면 `.claude` 폴더가 없을 수 있음. MCP 설치 등을 하면 폴더가 생기고 **기본적으로 `settings.local.json`** 에 기록됨.
- 확인: `ls -a` → `.claude` 존재, `cat .claude/settings.local.json` 등. 필요 없으면 `rm -rf .claude`로 삭제 시 기본값 복귀.

## 요약
- `/` 로 슬래시 커맨드 목록 확인. 핵심: **`/init`(CLAUDE.md), `/agents`(서브에이전트), `/context`·`/clear`·`/compact`(컨텍스트), `/model`, `/config`, MCP**.
- `/config`: auto compact는 끄고 수동 `/compact` 권장, thinking mode(think → think harder → ultra think)는 토큰↔성능 트레이드오프.
- 컨텍스트 한계 = 일반 **200K 토큰**(Sonnet 1M 옵션 존재) → 관리 필수.
- Settings 3스코프: **local(나만·gitignore) / project(팀·repo) / user(글로벌 ~/.claude)** — MCP·권한·훅 등이 여기 저장.
