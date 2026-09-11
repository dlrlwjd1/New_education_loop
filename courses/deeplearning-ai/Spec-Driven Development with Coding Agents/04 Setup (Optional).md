# Setup (Optional)

## 개요
- 첫 프롬프트를 보내기 전 **작업 공간(workspace) 설정** — 선택 영상. 이미 IDE에 코딩 에이전트를 세팅해 봤다면 건너뛰어도 된다.

## 내용

### IDE·에이전트는 자유
- SDD는 특정 IDE·에이전트에 묶이지 않는 **모범 사례(best practice)**. VS Code + Codex CLI, Zed + 로컬 모델 등 무엇이든 가능.
- 이 코스는 웹 애플리케이션 개발이라 **WebStorm IDE + Claude Code** 사용(다운로드·설치는 이전 reading 참고).

### 프로젝트 생성
- WebStorm에서 **Agent Clinic** 신규 프로젝트 생성 — **TypeScript** + **Git 저장소**(코드·명세 버전 관리를 위해).

### 버전 관리와 확인
- SDD에서는 코드 버전 관리를 **밀착 추적**하는 것이 중요.
- 에이전트로 초기 커밋 생성 가능 — 명령 실행마다 **확인(confirmation)** 요청(unsafe 모드가 아니면). Claude Code가 시키는 것을 주의 깊게 확인 — **코드에 대한 최종 책임은 나에게** 있다.

## 요약
- SDD는 IDE·에이전트에 독립적이며, 코스는 **WebStorm + Claude Code**로 진행한다.
- **TypeScript + Git** 프로젝트(Agent Clinic)를 만들어 코드·명세를 버전 관리한다.
- 에이전트의 명령 실행은 확인하며, **최종 책임은 사용자**에게 있다.
