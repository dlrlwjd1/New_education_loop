# Deeper Dive into GitHub Actions: Part 2

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/U1r3m/deeper-dive-into-github-actions-part-2)

## 개요
- GitHub Actions Job을 구성하는 **Runner, Service, Step, Action**을 심화하고, 이 모든 요소를 조합한 실제 CI 워크플로우 예시로 마무리.

## 내용
### Runner(러너)
- 러너는 특정 플랫폼/운영체제에서 job을 수행하는 서버 — GitHub Actions는 여러 버전의 Ubuntu, macOS, Windows Server를 지원.
- job에 러너를 지정하면 그 job의 모든 step이 그 러너에서 실행됨. `runs-on:` 키워드로 지정:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest        # 항상 최신 Ubuntu
  build2:
    runs-on: ubuntu-22.04         # 항상 22.04 버전으로 고정
  build3:
    runs-on: ubuntu-latest
    container: python:3.9-slim    # 최신 Ubuntu 위에서 Python 3.9-slim(Debian 11 기반) 컨테이너 실행
```
- 세 번째 방식은 최신 Ubuntu를 실행하는 VM이 Python 3.9-slim 이미지로 Docker 컨테이너를 띄워 모든 step을 그 안에서 실행 — 컨테이너로 개발하는 경우 빌드도 같은 컨테이너에서 실행해 예상치 못한 문제를 최소화할 수 있어 자주 쓰이는 방식.

### Service(서비스)
- job은 선택적으로 워크플로우에 필요한 서비스를 정의할 수 있음 — 서비스는 Docker 컨테이너로 정의되며, 원하는 공개 Docker 이미지(자신의 이미지 포함)로 데이터베이스·메시지 큐 등 필요한 서비스를 만들 수 있음.
```yaml
services:
  postgres:
    image: postgres
    # ...
```
- 예시는 일부 단위 테스트 실행 전에 필요한 Postgres 데이터베이스를 생성 — 서비스에 붙인 이름이 그 서비스에 접근할 때 사용하는 DNS 이름이 됨(위 예시에서는 `postgres`라는 호스트명으로 접근). 이런 방식으로 개발 환경에서 쓰는 것과 동일한 Docker 컨테이너를 워크플로우에서도 사용할 수 있음.

### Step(단계)
- Step은 GitHub Actions의 핵심 — 모든 실제 작업이 여기서 일어남. Step은 하나 이상의 셸 명령이나 액션으로 구성된 작업.
- `name:` 키워드로 선택적 이름을 지정할 수 있고 리포트에 표시됨 — 리포트를 볼 때 각 step에서 무슨 일이 일어나는지 알 수 있도록 설명적인 이름을 붙이는 것이 좋음(이름을 붙이지 않으면 실행하는 명령의 이름이 그대로 사용됨).
- `id:` 키워드로 선택적 ID를 지정할 수 있어 다른 step에서 참조하기 유용 — 한 step의 출력을 다른 step의 입력 파라미터로 사용하고 싶을 때 유용.
- Step은 `uses:` 키워드로 지정하는 액션이나 `run:` 키워드로 지정하는 셸 명령 중 하나를 가짐 — 세로 막대(`|`)로 시작한 뒤 각 명령을 새 줄에 배치하면 여러 셸 명령을 지정할 수 있음.
- Step은 환경 변수도 정의할 수 있음 — 진정한 12-factor 방식으로 `env:` 키워드를 통해 서비스를 환경 변수로 설정해야 함. job 안에는 필요한 만큼 많은 step을 둘 수 있음.

### Action(액션)
- 액션은 step 안에서 실행될 수 있는 절차 — 액션을 정의하려면 `uses:` 키워드 뒤에 액션 이름을 지정해야 함. GitHub Actions Marketplace 커뮤니티에 방대한 액션 라이브러리가 있음.
- 액션은 `with:` 키워드 뒤에 이름-값 쌍을 지정해 인자를 설정할 수 있음(일부 액션은 `args:` 키워드 사용). 예: `codecov` 액션이 선택적 파라미터로 버전을 받음.
- 액션을 설정할 수 있는 모든 옵션을 살펴보려면 그 액션의 문서를 읽는 것이 매우 중요 — 문서 읽기가 정말 도움이 되는 순간.
- **GitHub Actions Marketplace**는 액션을 찾기에 훌륭한 곳 — 예: "Python"을 검색하면 Python 환경을 설정하는 액션, Python 린터를 실행하는 액션, coveralls(또 다른 코드 커버리지 유틸리티)를 사용하는 액션 등이 나옴. 무언가를 수행하고 싶은 액션이 있다면 항상 먼저 마켓플레이스를 확인할 것.

### 모든 요소를 조합한 예시 워크플로우
```yaml
name: CI Build
on:
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    container: python:3.9-slim
    services:
      redis:
        image: redis:6-alpine
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip wheel
          pip install -r requirements.txt

      - name: Run unit tests
        env:
          DATABASE_URI: redis://redis:6379
        run: nosetests

      - name: Upload code coverage
        uses: codecov/codecov-action@v3
        with:
          version: "0.1.13"
```
- 모든 워크플로우는 이름을 가짐(`CI Build`, Continuous Integration 워크플로우의 일부이기 때문). master 브랜치로의 Pull Request에서 트리거됨. 최신 Ubuntu 러너 위 Python 3.9 컨테이너에서 실행되는 `build`라는 job을 가지며, Redis 6-Alpine Docker 이미지로 `redis`라는 데이터베이스 서비스를 생성.
- Step들: GitHub 액션으로 코드 체크아웃 → 셸 명령으로 pip·wheel 업그레이드 후 `requirements.txt`의 모든 패키지 설치 → 인기 있는 Python 테스트 러너인 `nosetests`로 단위 테스트 실행(같은 step에서 앞서 만든 `redis` 데이터베이스 서비스를 가리키는 `DATABASE_URI` 환경 변수 설정) → 마지막으로 인자로 버전 번호(`0.1.13`)를 지정해 codecov 업로더로 코드 커버리지 데이터를 Codecov 웹사이트에 업로드.
- 이 예시는 이벤트, job, 러너, 서비스, step, 액션을 모두 함께 조합해 master 브랜치로의 모든 Pull Request에서 트리거되는 CI 워크플로우를 만드는 방법을 보여줌.

## 요약
- GitHub Actions의 Job은 특정 OS/플랫폼에서 실행되는 **Runner**(`runs-on:`), Docker 컨테이너로 정의되는 **Service**(DNS 이름으로 접근), 셸 명령이나 액션으로 구성되고 이름·ID·환경변수를 가질 수 있는 **Step**(`run:` 또는 `uses:`), 그리고 Marketplace에서 가져와 `with:`로 인자를 설정하는 **Action**으로 구성되며, 이 모든 요소를 조합하면 코드 체크아웃부터 의존성 설치·테스트 실행·커버리지 업로드까지 이어지는 완전한 CI 워크플로우를 만들 수 있다.
