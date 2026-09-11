# Hands-On Lab: Add Continuous Integration

> MOOC 실습 자료(Ungraded App Item) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedLti/sQgDe/hands-on-lab-add-continuous-integration)

## 개요
- Sprint 2의 첫 스토리("Need the ability to automate continuous integration checks")를 구현하는 60분짜리 핵심 실습 — GitHub Actions로 PostgreSQL 서비스를 포함한 CI 워크플로우를 처음부터 완성해 매 pull request마다 린팅·테스트가 자동 실행되도록 만든다.

## 내용
### 목표
- GitHub Actions로 CI 파이프라인을 실행하는 워크플로우 생성, 워크플로우를 트리거하는 이벤트 추가, 워크플로우에 job 추가, job에 step 추가, step에서 인라인 명령 실행, 워크플로우 실행 로그 검토, 워크플로우 실행 활동 확인.

### Exercise 1 — 첫 스토리 착수
- Sprint Backlog 맨 위 스토리("Need the ability to automate continuous integration checks")를 In Progress로 옮기고 자신에게 배정 — 스토리 내용을 읽어 요구 사항(GitHub Actions 사용, 린팅+테스트 포함, DB는 `postgres:alpine`, README에 빌드 상태 배지 추가) 확인.

### Exercise 2 — 워크플로우 생성
- `add-ci-build` 브랜치 생성: `git checkout -b add-ci-build`
- `.github/workflows/ci-build.yaml` 파일을 만들고 워크플로우 이름과 트리거 이벤트 정의:
  ```yaml
  name: CI Build
  on:
    push:
      branches:
        - main
    pull_request:
      branches:
        - main
  ```

### Exercise 3 — Job 생성
- `build`라는 이름의 job을 만들고 `ubuntu-latest`에서 실행하며 `python:3.9-slim` 컨테이너 안에서 동작하도록 설정:
  ```yaml
  jobs:
    build:
      runs-on: ubuntu-latest
      container: python:3.9-slim
  ```

### Exercise 4 — 필요한 서비스(PostgreSQL) 정의
- Account 서비스는 데이터 저장을 위해 Postgres 서비스가 필요 — GitHub Actions는 Docker 컨테이너를 지원하므로, 로컬 개발 시 사용하는 것과 동일한 방식으로 워크플로우 안에서 데이터베이스 서비스를 띄울 수 있음(참고: 로컬 Makefile의 `docker run` 명령이 동일한 매개변수를 사용).
- `services:` 아래 `postgres:` 서비스를 정의 — 이미지는 `postgres:alpine`, 포트는 `5432:5432`, 환경변수는 `POSTGRES_PASSWORD: pgs3cr3t`와 `POSTGRES_DB: testdb`, 헬스 체크 옵션은 `pg_isready`(간격 10초, 타임아웃 5초, 재시도 5회):
  ```yaml
  jobs:
    build:
      runs-on: ubuntu-latest
      container: python:3.9-slim
      services:
        postgres:
          image: postgres:alpine
          ports:
            - 5432:5432
          env:
            POSTGRES_PASSWORD: pgs3cr3t
            POSTGRES_DB: testdb
          options: >-
            --health-cmd pg_isready
            --health-interval 10s
            --health-timeout 5s
            --health-retries 5
  ```

### Exercise 5 — 코드 체크아웃과 의존성 설치
- `actions/checkout@v2` 액션으로 코드를 체크아웃하는 `Checkout` 스텝과, pip·wheel을 업그레이드한 뒤 `requirements.txt`를 설치하는 `Install dependencies` 스텝을 추가:
  ```yaml
  steps:
    - name: Checkout
      uses: actions/checkout@v2
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip wheel
        pip install -r requirements.txt
  ```

### Exercise 6 — 린팅 추가
- 스토리의 Assumptions에 "워크플로우는 코드 린팅과 테스트를 포함해야 한다"고 명시되어 있음 — 린팅은 코드의 구문·스타일 문제(줄 간격, 들여쓰기, 초기화되지 않은 변수, 괄호 누락 등)를 점검하는 것으로, 여러 기여자가 있는 오픈소스 프로젝트일수록 CI 파이프라인에 품질 검사를 추가하는 것이 중요.
- `flake8`으로 소스 코드를 린팅(`requirements.txt`에 이미 설치되어 있음):
  ```yaml
    - name: Lint with flake8
      run: |
        flake8 service --count --select=E9,F63,F7,F82 --show-source --statistics
        flake8 service --count --max-complexity=10 --max-line-length=127 --statistics
  ```
- 워크플로우에 추가하기 전 `make lint`로 로컬에서 먼저 코드가 통과하는지 확인하는 것을 권장.

### Exercise 7 — 단위 테스트 추가
- Nose는 `setup.cfg`를 통해 `--with-spec`, `--spec-color` 플래그가 자동 포함되도록 설정되어 있어 red-green-refactor가 색상으로 의미 있게 표시되며, 커버리지 도구도 자동 실행되어 테스트 끝에 커버리지 비율이 표시됨.
- `Run unit tests with nose` 스텝을 추가하고, `service:`에서 만든 PostgreSQL에 연결하도록 `DATABASE_URI` 환경변수를 지정:
  ```yaml
    - name: Run unit tests with nose
      run: nosetests
      env:
        DATABASE_URI: "postgresql://postgres:pgs3cr3t@postgres:5432/testdb"
  ```
- 워크플로우에 추가하기 전 `make test`로 로컬에서 먼저 통과하는지 확인 권장.

### 완성된 워크플로우 전체
```yaml
name: CI Build
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    container: python:3.9-slim
    services:
      postgres:
        image: postgres:alpine
        ports:
          - 5432:5432
        env:
          POSTGRES_PASSWORD: pgs3cr3t
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip wheel
          pip install -r requirements.txt
      - name: Lint with flake8
        run: |
          flake8 service --count --select=E9,F63,F7,F82 --show-source --statistics
          flake8 service --count --max-complexity=10 --max-line-length=127 --statistics
      - name: Run unit tests with nose
        run: nosetests
        env:
          DATABASE_URI: "postgresql://postgres:pgs3cr3t@postgres:5432/testdb"
```

### Exercise 8 — 빌드 상태 배지 만들기
- GitHub Actions 배지 형식:
  ```markdown
  ![Build Status](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg)
  ```
  여기서 `<OWNER>`는 저장소 계정/조직명, `<REPOSITORY>`는 `devops-capstone-project`, `<WORKFLOW_FILE>`은 `ci-build.yaml`.
- `README.md`의 제목 아래(위아래 빈 줄로 구분된 줄)에 다음을 추가하고 `"Added badge for GitHub Actions"` 메시지로 커밋:
  ```markdown
  ![Build Status](https://github.com/<OWNER>/devops-capstone-project/actions/workflows/ci-build.yaml/badge.svg)
  ```

### Exercise 9 — Pull Request 생성
- `git commit -am "completed ci build"` → `git push` → GitHub에서 pull request 생성 — 이것이 방금 작성한 GitHub Action을 트리거함.

### Exercise 10 — 워크플로우 실행 확인
- GitHub 저장소 메인 페이지 → **Actions** 탭 → 왼쪽 사이드바에서 워크플로우 선택 → "Workflow runs"에서 실행 확인 → Jobs 또는 시각화 그래프에서 job 클릭 → 각 스텝의 결과 확인 → 모두 정상이면 pull request 병합.
- GitHub CLI(`gh`)로 터미널에서 워크플로우 실행 결과를 확인할 수도 있음: `gh auth login`으로 인증(Personal Access Token에 `repo`, `read:org`, `workflow` 스코프 필요) → `gh run list`로 실행 목록 확인 → `gh run view <run-id> --verbose`로 상세 정보 확인.
- 완료 후 스토리 "Need the ability to automate continuous integration checks"를 칸반 보드의 Done 컬럼으로 이동.

## 요약
- 이 랩은 `.github/workflows/ci-build.yaml`을 처음부터 작성해 push·pull_request 이벤트로 트리거되는 `build` job(ubuntu-latest, python:3.9-slim 컨테이너)을 만들고, `postgres:alpine` 서비스 컨테이너로 테스트용 데이터베이스를 띄운 뒤, 코드 체크아웃 → 의존성 설치 → flake8 린팅 → nosetests 단위 테스트라는 4단계 스텝으로 완전한 CI 워크플로우를 구성하고, README에 빌드 상태 배지를 추가해 pull request마다 자동으로 품질 검사가 실행되도록 만든다.
