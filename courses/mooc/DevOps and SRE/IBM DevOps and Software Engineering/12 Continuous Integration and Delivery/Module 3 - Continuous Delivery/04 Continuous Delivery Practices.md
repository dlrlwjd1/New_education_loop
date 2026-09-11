# Continuous Delivery Practices

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/7uhyx/continuous-delivery-practices)

## 개요
- Continuous Delivery의 모범 사례, CI/CD 파이프라인에 필요한 필수 요소, 그리고 Continuous Delivery와 Continuous Deployment의 차이를 정리.

## 내용
### Continuous Delivery 모범 사례
- **모든 변경을 릴리스 가능하게 만들기**: 사용자 문서, 운영 런북(runbook), 변경 사항에 대한 정보를 항상 포함해야 함 — 모든 변경이 제대로 작동하고, 고객에게 전달될 수 있을 만큼 잘 문서화되어 있으며, 발생할 수 있는 감사(audit)에도 대응할 수 있도록 보장.
- **CD는 CI 위에 세워짐**: 오래 지속되는 브랜치로 인한 통합 지연을 피해야 함 — 메인 코드베이스에 지속적으로 통합되는 짧은 생명주기의 feature 브랜치를 사용. 이를 **trunk-based development**라고도 부름 — 항상 trunk(= master/main 브랜치)로 돌아오기 때문. 모든 변경이 가장 빠른 피드백을 위해 함께 빌드·테스트·배포됨.
- **잘 구성된 자동화 전달 파이프라인**: 성공적인 Continuous Delivery 구현에 필수적 — 모든 코드 릴리스가 일관되고 예측 가능한 방식으로 테스트·프로덕션 환경으로 이동하도록 보장.
- **가능한 한 많은 프로세스를 자동화**: 좋고 신뢰할 수 있는 전달 파이프라인을 만들려면 SDLC의 최대한 많은 프로세스를 자동화해야 함 — 코드 빌드·배포뿐 아니라 새 개발 환경 생성에도 적용됨.
- **다운타임 없음을 목표로**: 빈번한 Continuous Delivery 업데이트를 하면서도 애플리케이션 가용성을 보장하려면, 새 기능을 프로덕션에 push하기 전에 실제 서비스 중인 애플리케이션 인스턴스에 배포하기 전에 먼저 검증해야 함.
- **테스트 단위로 릴리스**: 시스템의 두 부분을 함께 테스트해야 한다면 함께 릴리스해야 함 — 그래야 시스템의 부분들이 호환된다는 것을 알 수 있음. 릴리스 자동화 도구는 이런 종류의 전달을 조율하는 데 능함. 대안으로 완전히 분리(decouple)할 수도 있음.

### CI/CD 파이프라인에 필요한 요소
- **코드 저장소**: 모든 소스 코드를 호스팅·관리 — 소스 코드 관리 시스템이 단일 진실 공급원. 코드를 빌드·릴리스하는 데 필요한 모든 것이 버전 관리에 체크인되어 있어야 함.
- **빌드 서버**: 애플리케이션 빌드를 관리 — 매번 동일한 상태에서 시작하는 깨끗한(clean) 빌드를 수행하는 환경이어야 함.
- **통합 서버(오케스트레이터)**: 빌드 자동화를 처리하고 코드에 대해 테스트를 실행 — 수동 단계가 없어야 하며 모든 것이 자동화되어 있어야 함.
- **저장소(아티팩트 저장소)**: 애플리케이션의 모든 바이너리와 아티팩트를 저장해, 빌드·테스트가 끝나면 쉽게 배포할 수 있게 함.

### Continuous Deployment와 Continuous Delivery의 차이
- Continuous Deployment는 Continuous Delivery 파이프라인의 일부가 될 수 있음.
- **Continuous Delivery**는 코드가 필요한 자동화 테스트를 통과한 후 개발 생애주기(전달 생애주기)를 통해 자동으로 이동하는 것.
- **Continuous Deployment**는 그렇게 전달된 코드를 가져와 **프로덕션에 배포**하는 것.
- Continuous Delivery를 어떻게, 어느 정도로 구현할지는 비즈니스 요구에 달려 있음 — 전달팀이 새롭거나 업데이트된 소프트웨어를 프로덕션에 반복적이고 신뢰성 있고 빠르게 릴리스해야 한다면 Continuous Deployment가 큰 이점이 됨.

## 요약
- Continuous Delivery의 모범 사례는 모든 변경을 문서화해 릴리스 가능하게 만들고, trunk-based development로 CI 위에서 짧은 브랜치를 통합하며, 가능한 한 많은 프로세스를 자동화하고 다운타임 없이 테스트 단위로 릴리스하는 것이며, CI/CD 파이프라인은 코드 저장소·빌드 서버·통합 서버·아티팩트 저장소를 필요로 하고, Continuous Delivery(자동화 테스트 통과 후 전달 생애주기 이동)와 Continuous Deployment(실제 프로덕션 배포)는 서로 다른 개념으로 비즈니스 요구에 따라 선택적으로 구현된다.
