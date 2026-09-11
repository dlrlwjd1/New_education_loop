# Day 1 - Mac Setup - Install Cursor, Git, Clone the Repo and Run UV

## 개요
- Mac·Linux 환경에서 수업 저장소, Cursor, uv, API 키를 준비하는 다섯 단계의 설정 실습이다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49770355#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 1. 저장소 복제와 프로젝트 루트
터미널에서 `git --version`으로 Git 설치를 확인한다. Mac에서 개발자 도구가 없다면 `xcode-select --install`로 준비한다. 강의 리소스에 연결된 강사의 `agents` 저장소를 `projects` 아래로 복제한다. 이후 작업 기준은 상위 `projects`가 아니라 **복제한 `agents` 폴더**다.

### 2. Cursor에서 프로젝트 열기
Cursor를 설치한 뒤 Open Project로 `agents`를 연다. 탐색기에서 주차별 폴더와 README를 확인한다. 강사는 README의 Mac/Linux 설정 안내가 문제 발견에 따라 갱신되므로 영상과 함께 읽으라고 강조한다.

### 3. uv로 실습 환경 생성
설정 안내의 명령으로 uv를 설치하고 터미널을 다시 열어 `uv --version`을 확인한다. 루트에서 `uv sync`를 실행하면 Python 버전 파일, `pyproject.toml`, `uv.lock`에 따라 Python과 패키지를 준비하고 `.venv`를 만든다. 영상에서는 Python 3.12를 사용한다. 이후 `uv run`을 붙여 프로젝트 환경에서 실행한다.

### 4~5. API 키와 .env
영상에서는 OpenAI 플랫폼에서 API 사용을 준비하고 생성한 키를 프로젝트 루트의 `.env`에 저장한다. 변수 이름은 `OPENAI_API_KEY`다. 복사 과정에서 하이픈이 다른 문자로 바뀌거나 접두사가 중복되지 않게 하고, IDE에서 파일을 실제로 저장한다. OpenAI가 필수는 아니며 README의 대안을 참고할 수 있다. 비용·가입 화면은 촬영 시점의 안내다.

## 예시
설정 실습에서 확인하는 명령:

```bash
git --version
uv --version
uv sync
uv run python --version
```

`uv sync`와 `uv run`은 복제한 `agents` 루트에서 실행한다.

## 요약
- 프로젝트 루트와 `.venv`의 위치를 먼저 확인한다.
- uv가 프로젝트에 맞는 Python과 의존성을 함께 준비한다.
- 키의 정확한 복사, `.env` 파일명, 저장 여부가 주요 점검 사항이다.
