# Course Overview

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/supplement/cp108/course-overview)

## 개요
- CI/CD 코스 전체의 개요, 5개 모듈 구성, 학습 목표, 사용 도구를 정리한 공식 오리엔테이션 자료.

## 내용
### 코스 소개
- 현대 DevOps 환경에서 CI/CD에 대한 실용적이고 실습 중심의 입문 코스 — GitHub Actions, Tekton, OpenShift Pipelines, ArgoCD를 이용한 GitOps로 CI/CD 파이프라인이 소프트웨어 전달을 어떻게 간소화하는지 다룸.
- Kubernetes 기반 클라우드 네이티브 환경에서 소프트웨어 전달 워크플로우를 빌드·자동화·관리하는 스킬을 갖추게 되는 중급 수준 코스. IBM DevOps and Software Engineering 전문 자격증의 일부.
- 실습 랩은 학습자가 따르는 전문 자격증 트랙에 맞는 프로그래밍 언어를 선택할 수 있도록 **두 가지 랩 옵션**을 제공.

### 선수 지식
- IT·클라우드 컴퓨팅 기초, DevOps 원칙, Docker·Kubernetes를 이용한 컨테이너화에 대한 기본적인 이해 권장.
- Linux 명령어, Git/GitHub, 기본 프로그래밍에 익숙하면 실습에 도움이 됨.
- 기초를 다지려면 IBM Full Stack Software Developer 전문 자격증의 "Introduction to Cloud Computing", "Getting Started with Git and GitHub", "Introduction to Containers w/ Docker, Kubernetes & OpenShift" 코스를 복습 권장.

### 코스 목표
- CI/CD 원칙과 자동화된 소프트웨어 전달에서의 역할, 그리고 인프라·애플리케이션 관리를 위한 GitOps의 이점을 설명할 수 있음.
- GitHub Actions로 CI 워크플로우를 구현하고 Tekton으로 테스트·배포용 커스텀 파이프라인을 구축할 수 있음.
- OpenShift Pipelines로 클라우드 네이티브 CI/CD 프로세스를 관리하고, Kubernetes 환경에서 ArgoCD로 선언적(declarative)·Git 기반 전달을 적용할 수 있음.
- GitHub, Tekton, OpenShift Pipelines를 통합하는 실제 CI/CD 프로젝트를 완성해 학습한 개념을 적용할 수 있음.

### 모듈별 개요
- **Module 1 — Introduction to CI/CD**: CI와 CD 개요, 현대 DevOps 관행의 기초. 자동화를 통해 속도·신뢰성·코드 품질을 개선하고 수동 오류를 줄이는 데 초점. CI와 CD의 핵심 차이, Jenkins·GitHub Actions·GitLab CI/CD 같은 인기 도구 개괄, Infrastructure as Code(IaC) 소개.
- **Module 2 — Understanding Continuous Integration**: DevOps에서 CI의 핵심 특징과 이점. 소셜 코딩, Git 버전 관리, Feature Branch 워크플로우로 메인 코드베이스와 정렬된 작고 빈번한 업데이트 보장. Jenkins·CircleCI·Travis CI 같은 CI 도구 개괄과 **GitHub Actions**에 대한 심화. 코드 품질 검사, 단위 테스트, 자동 리포팅을 포함한 워크플로우 실습.
- **Module 3 — Understanding Continuous Delivery**: **Tekton**과 CI/CD에서의 역할 소개. 파이프라인 생성, 작업(task) 구성, 트리거를 이용한 프로세스 자동화. 파이프라인 구축, Tekton Catalog 리소스 사용, 품질 검사 구현, 컨테이너 이미지 빌드, Kubernetes/OpenShift 배포 실습. Docker 이미지 빌드와 Kubernetes 매니페스트·OpenShift 클라이언트를 이용한 배포까지 엔드투엔드 CI/CD 자동화 실습.
- **Module 4 — Explore DevOps Pipeline Tools and Best Practices**: OpenShift를 이용한 DevOps와 GitOps. CI/CD 파이프라인, 구성 요소, 소프트웨어 전달 자동화에서의 역할을 심층적으로 이해. **OpenShift Pipelines**가 Kubernetes와 어떻게 통합되고 효율적으로 확장되며 OpenShift 서비스를 활용하는지 탐구. **GitOps**의 원칙, 워크플로우, 가시성·감사 가능성·손쉬운 롤백 같은 이점 소개. **ArgoCD**의 아키텍처, 핵심 기능, Kubernetes에서 지속적 전달과 간소화된 애플리케이션 배포를 가능하게 하는 방법.
- **Module 5 — Final Project**: 코스 내용에 대한 이해를 보여주는 최종 프로젝트 — CI/CD 원칙, 특징, 이점, 도구, 구현 방법을 다룸. 샘플 애플리케이션과 OpenShift 클러스터가 있는 랩 환경에서 GitHub Actions, Tekton 작업, OpenShift Pipelines를 이용해 CI/CD 파이프라인을 생성. OpenShift를 이용해 실제 환경에 애플리케이션을 배포하는 것까지 실습해 CI/CD 자동화의 실무 스킬을 통합.

### 사용 도구와 기술
- 코스 전반에 걸쳐 여러 도구의 무료 버전이나 체험판 사용: 랩 환경, GitHub 계정, OpenShift(랩 환경에서 제공), Docker/Kubernetes(랩 환경에서 제공).

## 요약
- 이 코스는 Module 1(CI/CD 기초·IaC)부터 Module 2(GitHub Actions 기반 CI), Module 3(Tekton 기반 CD 파이프라인), Module 4(OpenShift Pipelines·GitOps·ArgoCD), Module 5(엔드투엔드 최종 프로젝트)까지 5개 모듈로 구성되며, GitHub·Tekton·OpenShift Pipelines·ArgoCD를 통합해 실제 CI/CD 자동화 파이프라인을 구축하는 실무 스킬을 목표로 한다.
