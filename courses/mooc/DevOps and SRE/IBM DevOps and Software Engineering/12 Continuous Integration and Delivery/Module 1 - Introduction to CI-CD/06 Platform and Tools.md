# Platform and Tools

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/58LU4/platform-and-tools)

## 개요
- 같은 조직 안에서도 팀마다 서로 다른 CI/CD 도구를 써도 괜찮은 이유와, Jenkins·CircleCI·Travis CI·GitHub Actions 같은 대표적인 CI/CD 도구를 개괄.

## 내용
### 서로 다른 도구를 써도 괜찮은 이유
- 같은 회사 안에서도 서로 다른 팀이 운영하는 여러 사업 라인(LOB) 애플리케이션들이 서로 다른 도구를 사용할 수 있고, 이는 문제가 되지 않음.
- 소스 코드 관리 시스템, 빌드 시스템, CI 시스템, 저장소 등이 팀마다 다른 도구(예: Jenkins, Travis, Nexus, JFrog Artifactory) 위에서 돌아갈 수 있음 — 특정 도구가 무엇인지는 중요하지 않고, **수동으로 하는 대신 도구로 이 과정을 자동화하고 있다는 것**이 중요.
- CI/CD 도구는 선택지가 매우 많음 — 파이프라인 도구 다이어그램의 "Build" 열 안 "CI" 박스만 봐도 Team City, Jenkins, Travis CI, Bamboo, Codeship, Snap, Go 등이 있음. 상위권 도구들은 대체로 비슷한 방식과 개념으로 작동 — 한 도구를 써보고 마음에 안 들면 마음에 드는 도구를 찾을 때까지 다른 것을 계속 시도해도 됨.

### 대표적인 CI/CD 도구 개괄
- **Jenkins** — 중앙 빌드가 이뤄지는 서버에 설치하는 CI/CD 소프트웨어. 가장 오래되었고, 가장 인기 있으며, 가장 복잡한 CI/CD 도구 중 하나.
- **CircleCI** — DevOps 관행을 구현하는 데 사용할 수 있는 CI/CD 플랫폼. Continuous Delivery를 위한 배포를 수행하며, `circle.yaml` 파일 안에 워크플로우를 정의.
- **Travis CI** — GitHub와 Bitbucket에 호스팅된 소프트웨어 프로젝트를 빌드·테스트하도록 돕는 호스팅형 CI 서비스. 오픈소스 프로젝트에 무료 서비스를 제공한 최초의 CI 서비스. 마찬가지로 Continuous Delivery를 위한 배포를 수행하며, `.travis.yaml` 파일 안에 워크플로우를 정의.
- **GitHub Actions** — 빌드·테스트·배포 GitHub 워크플로우를 자동화할 수 있게 해주는 CI/CD 플랫폼. 다른 도구들과 달리 **GitHub에서만** 작동.

## 요약
- 같은 조직 안에서도 사업 라인별로 여러 팀이 서로 다른 CI/CD 도구를 사용할 수 있으며 중요한 것은 프로세스가 수동이 아니라 자동화되어 있다는 점이고, Jenkins(가장 오래되고 복잡함)·CircleCI(`circle.yaml`)·Travis CI(`.travis.yaml`, 오픈소스 무료 제공 최초)·GitHub Actions(GitHub 전용)처럼 다양한 도구 중 마음에 드는 것을 골라 시도해볼 수 있다.
