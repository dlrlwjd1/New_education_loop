# Summary & Highlights: Explore DevOps Pipeline Tools and Best Practices

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/supplement/A7nzg/summary-highlights-explore-devops-pipeline-tools-and-best-practices)

## 개요
- Module 4의 핵심 내용(DevOps 파이프라인 구성 요소, OpenShift Pipelines, ArgoCD, GitOps 패턴)을 정리한 공식 요약.

## 내용
- DevOps 파이프라인은 소프트웨어 전달을 자동화하는 워크플로우.
- CI 파이프라인은 버전 관리와 리소스 준비를 보장하고, CD 파이프라인은 프로덕션으로의 매끄러운 전환을 가능하게 함.
- CI 파이프라인 구성 요소에는 이슈 트래커, PR 파이프라인, 효율적인 개발을 위한 다른 도구들이 포함됨.
- CD 파이프라인은 안전하고 정확한 배포를 위해 변경 요청 도구와 Key Protect 같은 도구를 사용.
- 지속적 컴플라이언스 파이프라인은 DevOps Insights와 Secrets Manager 같은 도구를 이용해 보안·컴플라이언스 표준을 유지.
- OpenShift Pipelines는 Kubernetes 도구와 매끄럽게 통합하고 OpenShift 서비스를 활용해 개발과 배포를 단순화.
- ArgoCD는 Kubernetes 애플리케이션을 위한 선언적 지속적 전달을 가능하게 하는 오픈소스 도구.
- ArgoCD는 여러 환경을 지원하고 GitOps 방법론을 따라, 현대적인 지속적 전달 관행에 가치 있는 도구.
- OpenShift는 간소화된 애플리케이션 배포를 위해 온-클러스터 리소스 리컨실러와 외부 리소스 리컨실러 같은 GitOps 패턴을 지원.
- ArgoCD는 OpenShift와 통합되어, OpenShift 파이프라인에서 감지된 변경에 의해 트리거되는 자동 애플리케이션 배포를 가능하게 함.

## 요약
- Module 4는 CI/CD/지속적 컴플라이언스 파이프라인의 구성 요소를 정리하고, OpenShift Pipelines가 Kubernetes·OpenShift 서비스와의 통합으로 개발·배포를 단순화하는 방법과, ArgoCD가 GitOps 방법론에 따라 선언적 지속적 전달을 제공하며 OpenShift의 GitOps 패턴(온-클러스터/외부 리소스 리컨실러)과 통합되어 변경 감지 시 자동 배포를 가능하게 함을 요약한다.
