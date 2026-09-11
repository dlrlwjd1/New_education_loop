# Introduction to DevOps and GitOps with OpenShift

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/8sOW3/introduction-to-devops-and-gitops-with-openshift)

## 개요
- Module 4의 도입부 — CI/CD 환경에서 핵심적인 **OpenShift Pipelines**와, Git을 이용한 애플리케이션 배포 관리 철학인 **GitOps**, 그리고 그 대표 도구인 **ArgoCD**를 이번 모듈에서 다룰 것을 안내.

## 내용
### OpenShift Pipelines
- CI/CD 워크플로우를 만들고 관리하고 최적화하도록 설계됨 — CI/CD 환경에서 중추적인 구성 요소.
- OpenShift 개발자 환경에 매끄럽게 통합된 사용자 친화적 인터페이스로 시작 — 이 인터페이스로 애플리케이션의 DevOps 워크플로우를 정확하게 정의·조율·안내 가능.
- 이번 모듈에서는 코드를 한 줄도 스크립팅하지 않고도 실제로 작동하는 파이프라인을 만드는 법을 배움 — OpenShift Pipelines는 사용자가 UI로 Task와 파이프라인을 다루는 동안, 앞선 모듈에서 이미 익숙해졌을 기저 기술인 **Tekton 코드**의 생성을 교묘하게 자동화.
- 실습에서는 이전 모듈에서 Tekton으로 처음부터 직접 작성했던 파이프라인을, 이번에는 코드 작성 없이 재구성하게 됨.

### GitOps
- OpenShift Pipelines를 파고드는 것은 단순히 CI/CD를 탐구하는 것이 아니라 **GitOps 철학**으로 들어가는 것 — 이 혁신적인 접근은 버전 관리, 특히 **Git**의 힘을 활용해 애플리케이션 배포를 관리하고 통제.

### ArgoCD
- GitOps를 통한 운영 우수성으로 가는 관문 — OpenShift 클러스터에서 실행 중인 애플리케이션을 Git 저장소에 있는 원하는 상태(desired state)와 매끄럽게 동기화하는 도구를 상상해볼 것.
- ArgoCD를 사용하면 단순히 배포를 관리하는 것이 아니라, 인프라·설정·애플리케이션의 모음을 오케스트레이션하며 이들을 지속적으로 동기화된 상태로 유지.

### 이 모듈의 목표
- 이런 스킬들의 조합은 CI/CD를 다루고, 배포 신뢰성을 높이며, DevOps와 GitOps 관행을 통해 운영을 간소화할 수 있게 해줌.

## 요약
- Module 4는 코드를 작성하지 않고도 Tekton 파이프라인을 자동 생성해주는 **OpenShift Pipelines**의 사용자 인터페이스, Git을 단일 진실 공급원으로 삼아 애플리케이션 배포를 관리하는 **GitOps** 철학, 그리고 OpenShift 클러스터의 실제 상태를 Git 저장소의 원하는 상태와 지속적으로 동기화하는 **ArgoCD**를 다루며, 이를 통해 배포 신뢰성을 높이고 운영을 간소화하는 법을 배운다.
