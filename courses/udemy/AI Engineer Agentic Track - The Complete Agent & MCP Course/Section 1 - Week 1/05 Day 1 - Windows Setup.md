# Day 1 - Windows Setup: Install Cursor, Git, Clone the Repo and Run UV

## 개요
- Windows에서 Cursor, Git, 과정 저장소와 `uv` 환경을 설정한다.

## 내용
### 사전 주의 사항
PowerShell 스크립트 실행 권한, 백신·VPN·방화벽 간섭, Windows 260자 경로 제한과 CrewAI에 필요한 Microsoft Build Tools를 확인한다.

Cursor를 설치하고 터미널에서 Git 버전을 확인한다. 프로젝트 디렉터리를 만든 뒤 과정 저장소를 복제하고, 저장소 루트인 `agents` 폴더를 Cursor 프로젝트로 연다. Python과 Jupyter 확장 프로그램을 설치한다.

`uv`를 설치한 뒤 `uv sync`를 실행하면 필요한 Python 버전, 의존성과 `.venv`가 준비된다.

## 예시
```powershell
git --version
mkdir projects
cd projects
git clone <course-repository-url>
cd agents
uv --version
uv self update
uv sync
```

## 요약
- 저장소의 상위 `projects`가 아니라 `agents` 루트를 IDE에서 연다.
- `uv sync` 오류를 남긴 채 다음 단계로 넘어가지 않는다.
- [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49770331#overview)
