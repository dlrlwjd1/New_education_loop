# Tools of Continuous Integration (CI)

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/nP2K9/tools-of-continuous-integration-ci)

## 개요
- Jenkins, CircleCI, Travis CI 세 가지 CI 도구의 작동 방식과 설정 파일 구조를 비교하고, 이 코스에서 실제로 다룰 GitHub Actions를 간략히 소개.

## 내용
### Jenkins — 가장 오래되고 자체 호스팅 가능한 도구
- 세 도구 중 가장 오래되었고, CI와 CD를 모두 구현. **오픈소스**라서 자체 Jenkins 서버를 직접 운영할 수 있다는 점이 인기의 비결.
- Docker, Jira, Maven 등 다른 도구와 통합하는 방대한 플러그인 생태계를 가지고 있지만, 그만큼 관리해야 할 플러그인이 많다는 단점 — 모든 플러그인이 최신 상태이고 안전하며 서로 호환되는지 확인하는 데 많은 시간이 필요.
- CI 파이프라인을 **Jenkinsfile** 안에 **Groovy** 언어로 기술 — 사용하려면 Groovy에 대한 어느 정도의 이해가 필요. Jenkinsfile 덕분에 개발자는 CI/CD 파이프라인을 코드로 다룰 수 있음(예: 코드를 체크아웃하고 테스트하는 2단계짜리 간단한 파이프라인).
- **단점**: Jenkins 웹사이트에서 프로젝트를 먼저 설정해야 함 — 다른 도구들은 저장소에 파일 하나만 추가하면 되어 매우 반복 가능한 반면, 이는 자동화할 수 없고 재현 가능하지 않을 수 있는 수동 단계.
- Jenkins Pipeline을 설정하려면 프로젝트 저장소 루트에 **Jenkinsfile**을 만들어 CI 지침을 명시 — Jenkins에게 코드를 빌드·테스트하는 방법을 알려줌. VM이나 Docker 컨테이너 안에서 빌드 가능하지만, **어떤 동작이 빌드를 트리거하는지는 Jenkinsfile에 지정할 수 없고 Jenkins 서버의 UI에서 수동으로 설정**해야 함(master로 push할 때, Pull Request를 낼 때 등).
- 예시 Jenkinsfile(Python 프로젝트의 단위 테스트 실행): Docker 환경 설정 → 코드 체크아웃 → Python 패키지 의존성 설치 → 모든 Python 모듈 lint(모범 코딩 관행 준수 확인) → 단위 테스트 실행의 4단계로 구성.

### CircleCI — 서비스형 도구
- 서비스로 제공되며 CI와 CD를 모두 구현 — Jenkins처럼 자체 서버에서 실행할 수 없고 오픈소스도 아님.
- CI/CD 파이프라인을 코드로 다룰 수 있게 해줌 — Jenkinsfile과 비슷하게 **YAML 파일**(`circle.yaml`)로 CI 과정을 명시(코드 체크아웃, Python 패키지 설치, 단위 테스트 실행 등). YAML은 사람과 기계 모두에게 읽기 쉬운 매우 인기 있는 설정 형식.
- CircleCI 웹사이트에서 프로젝트를 먼저 설정해야 하는 것은 수동 단계 — 이후 저장소에 설정 파일을 만들어 CI 지침 명시.
- Closure, Java, JavaScript, Python, PHP 등 여러 언어와 MySQL, MongoDB, Postgres 같은 데이터베이스를 네이티브로 지원. Docker도 지원하므로 Docker로 만들 수 있는 것은 무엇이든 CircleCI로도 빌드 가능.
- 예시 YAML: Docker Python 이미지를 가져오고 DB URL 환경 변수 설정 → PostgreSQL과 관련 환경 변수 설정 → 환경이 준비되면 코드 체크아웃 → 패키지 설치 → 테스트 실행.

### Travis CI — 호스팅 서비스, 저장소 전체에 한 번만 설정
- CircleCI처럼 CI와 CD를 모두 구현하는 호스팅 서비스 — 자체 서버에서 실행할 수 없지만, 엔터프라이즈 라이선스로 사내에서 운영할 수는 있음.
- CircleCI, Jenkins와 마찬가지로 관리자 UI에서 프로젝트를 먼저 설정해야 하는 수동 단계가 있음.
- CircleCI보다 훨씬 많은 언어와 데이터베이스를 네이티브로 지원하며 Docker도 지원 — 사실상 무엇이든 실행 가능. CircleCI처럼 YAML 파일로 CI 과정을 명시(예: Python 3.9 환경 요청, 의존성 설치, 단위 테스트 실행, 코드 커버리지 업로드).
- Travis CI 웹사이트에서 프로젝트를 설정하는 것은 수동 단계이지만, Jenkins·CircleCI와 달리 **모든 저장소에 대해 한 번에 활성화**할 수 있어 저장소마다 반복할 필요가 없음.
- 저장소를 설정하려면 저장소 루트에 **`.travis.yml`** 파일을 만듦 — VM이나 Docker 컨테이너에서 빌드 가능. 다른 도구들처럼 어떤 동작이 빌드를 트리거하는지 지정할 수 있지만, `.travis.yml` 파일 안에서는 할 수 없고 **Travis CI 관리자 UI에서 수동으로만** 가능하다는 점이 Jenkins와 같은 단점.
- 예시 `.travis.yml`: 사용할 언어 지정 → PostgreSQL 데이터베이스 요청 → DB URL 환경 변수 설정과 테스트용 DB 프로비저닝 → Python 의존성 패키지 설치 → 코드 테스트 → 테스트 결과를 Codecov.io에 수집·업로드.

### GitHub Actions — 이 코스에서 사용할 도구
- 모든 GitHub 저장소에서 사용 가능한 CI/CD 도구 — GitHub에 서비스로 통합되어 있음.
- CI 파이프라인을 완전히 코드로 다룰 수 있게 해주며 YAML 파일로 제어됨. 이후 영상들에서 더 심도 있게 다룰 예정이며, 이 코스에서 실제로 사용할 도구.

## 요약
- Jenkins(오픈소스, 자체 호스팅, Groovy 기반 Jenkinsfile), CircleCI(서비스형, YAML 기반 `circle.yaml`), Travis CI(서비스형, YAML 기반 `.travis.yml`, 저장소 전체 일괄 활성화 가능) 모두 CI 파이프라인을 코드로 다룰 수 있게 해주고 네이티브/Docker 빌드를 지원한다는 공통점이 있지만 빌드 트리거 설정을 파일이 아닌 UI에서 수동으로 해야 한다는 한계가 있으며, 이 코스에서는 모든 GitHub 저장소에 내장되어 있고 YAML로 완전히 코드화된 **GitHub Actions**를 실제로 사용한다.
