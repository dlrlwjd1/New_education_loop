# Summary & Highlights: Understanding Continuous Integration (CI)

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/supplement/JWdXe/summary-highlights-understanding-continuous-integration-ci)

## 개요
- Module 2의 CI 관련 강의(CI 정의, 이점, 소셜 코딩, Git Feature Branch 워크플로우, CI 도구)까지의 핵심 내용을 정리한 공식 요약.

## 내용
- CI는 짧은 생명주기 브랜치를 이용해 개발자가 코드를 지속적으로 통합하도록 돕는 자동화 프로세스.
- CI는 리뷰하기 쉽고 협업을 장려하는 빈번한 Pull Request를 포함.
- CI는 미리 정의된 테스트를 통해 코드를 자동으로 실행해 개발을 간소화.
- CI/CD로 얻는 것: 변경에 대한 더 빠른 반응 시간, 낮아진 코드 통합 위험, 더 높은 코드 품질, 버전 관리된 코드가 작동한다는 확신.
- 소셜 코딩은 높은 품질의 코드와 증가된 협업으로 이어져 시간·노력·비용을 절약.
- Git은 DevOps를 가능하게 하며 필수 기능을 제공하는 많은 명령어를 가짐.
- 개발자는 깨끗하고 간결하며 고품질의 코드를 개발하기 위해 Git의 Feature Branch 워크플로우를 사용.
- Git Feature Branch 워크플로우의 5단계:
  1. 저장소를 로컬 시스템에 클론하고 이슈 작업을 위한 브랜치를 생성.
  2. 그 브랜치에 변경 사항을 커밋.
  3. 변경 사항을 원격 브랜치로 push.
  4. Pull Request를 제출해 작업을 리뷰받음.
  5. 코드를 main 브랜치에 병합하고 이슈를 닫음.
- 표준 CI 도구로는 Jenkins, CircleCI, Travis CI, GitHub Actions가 있으며 각각 장단점이 있음.
- CI 도구가 실행할 CI 파이프라인을 코드로 작성할 수 있음.
- 많은 CI 도구가 클라우드에서 쉽게 실행하고 확장할 수 있는 서비스 형태로 제공됨.

## 요약
- CI는 짧은 브랜치와 빈번한 Pull Request를 통해 코드를 자동으로 테스트·통합함으로써 반응 속도·통합 위험·코드 품질·신뢰성을 개선하며, 이를 뒷받침하는 것이 소셜 코딩 문화와 클론-브랜치-커밋-push-Pull Request-병합으로 이어지는 Git Feature Branch 워크플로우, 그리고 Jenkins·CircleCI·Travis CI·GitHub Actions 같은 코드로 작성 가능한 CI 도구들이다.
