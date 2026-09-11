# What Is CI/CD?

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/eaRX9/what-is-ci-cd)

## 개요
- CI(Continuous Integration)와 CD(Continuous Delivery)가 하나의 프로세스가 아니라 순차적으로 이어지는 **두 개의 별개 프로세스**임을 구분하고, Continuous Deployment와의 차이 및 CI/CD가 DevOps 파이프라인 중 어디에 위치하는지 설명.

## 내용
### CI와 CD는 하나가 아니다
- 사람들이 흔히 "CI/CD"를 하나의 프로세스처럼 말하지만, 실제로는 바로 연이어 일어나는 **두 개의 별개 프로세스**.
- **Continuous Integration(CI)**: 코드를 main/master/trunk 브랜치에 지속적으로 다시 통합하는 것 — 브랜치가 너무 멀리 벗어나기 전에 변경 사항을 메인 브랜치에 병합해 정상 작동을 확인. 코드를 메인 코드베이스와 지속적으로 통합하는 것.
- **Continuous Delivery(CD)**: 통합된 코드를 어딘가에 배포하는 것 — 통합할 때마다 매번 배포할 수도, 아닐 수도 있음. 브랜치와 Pull Request를 테스트하는 CI 루프가 있고, 최종적으로 main에 병합되면 CD 부분이 시작됨.

### CI의 정의
- CI는 작업을 저장소에 통합할 수 있게 해주는 자동화 프로세스 — 팀으로 애플리케이션을 개발하고, 애플리케이션의 버그와 오류를 매우 빠르게 식별할 수 있음.
- 팀은 애플리케이션의 서로 다른 영역에서 작은 단위로 작업한 뒤 쉽고 정기적으로 메인 브랜치에 병합.

### CD의 정의
- CD는 CI 다음 단계 — 애플리케이션 릴리스를 위해 코드를 준비하고, 애플리케이션을 배포·빌드하는 데 필요한 과정을 자동화.

### CI/CD의 단계 구분
- **Continuous Integration**은 **Plan, Code, Build, Test** 단계로 구성 — 개발자가 계획하고 코딩한 뒤, 여러 반복 사이클로 빌드·테스트해 완료되면 솔루션이 전달될 준비가 됨.
- **Continuous Delivery**는 **Release, Deploy, Operate** 단계로 구성 — 솔루션이 릴리스되고, 바이너리가 주어진 환경에 반복 사이클로 배포되며, 그 시점부터 솔루션이 실제 운영(live operation) 상태가 됨.
- 이 둘은 매우 다른 단계를 다루는 별개의 프로세스이므로 구분하는 것이 중요.

### Continuous Deployment와의 차이
- 세 번째 개념인 **Continuous Deployment**도 있음 — 기존 CI/CD 용어와 헷갈리지 않게 "Continuous Release" 정도로 불렀어야 할 수도 있음. 차이는 미묘함.
- **Continuous Delivery**는 개발 서버, 스테이징 서버, 테스트 서버, 프리프로덕션 서버 등 **프로덕션이 아닌 곳**에 배포하는 것.
- **Continuous Deployment**는 실제로 **프로덕션에 지속적으로 푸시**하는 것을 가리킴 — 대부분의 사람들이 이 용어를 쓸 때 떠올리는 의미.
- 이 둘은 같은 의미가 아니므로, 누군가 "Continuous Deployment"라고 말하면 정말 프로덕션 배포를 의미하는지 확인이 필요.

### DevOps 파이프라인에서 CI/CD의 위치
- DevOps 파이프라인은 **Plan, Develop, Build, Test, Deploy** 단계로 구성되며, CI/CD는 이 중 **Build와 Test** 단계에 위치.

### CI/CD의 주요 이점
- **더 빠른 반응 시간** — 코드 변경의 효과를 기다릴 필요 없이 자동으로 빌드·테스트·배포됨.
- **코드 통합 위험 감소** — 더 자주 통합할수록 변경이 쌓일 시간이 줄어들어, 무언가가 깨질 위험이 줄어듦.
- **더 높은 코드 품질** — 지속적으로 리뷰되고 테스트되며, 모든 Pull Request가 코드 리뷰의 기회가 됨.
- **버전 관리된 코드가 작동함을 확신** — main/master 브랜치의 코드가 항상 배포 가능한 상태임을 보장하는 것이 일반적인 관행.
- **더 짧은 배포 시간** — 모든 것이 이미 테스트되어 있고 배포가 자동화되어 있어, 더 빠르고 더 반복 가능하게 배포됨.

## 요약
- CI/CD는 하나의 프로세스가 아니라 Plan/Code/Build/Test 단계로 구성된 **CI**(코드를 메인 브랜치에 지속적으로 통합)와 Release/Deploy/Operate 단계로 구성된 **CD**(통합된 코드를 스테이징 등 프로덕션이 아닌 환경에 배포)가 순차적으로 이어지는 두 개의 별개 프로세스이며, 실제 프로덕션에 지속적으로 배포하는 것은 별도로 **Continuous Deployment**라 부르고, DevOps 파이프라인의 Build·Test 단계에 위치해 더 빠른 반응·낮은 통합 위험·높은 코드 품질·짧은 배포 시간이라는 이점을 제공한다.
