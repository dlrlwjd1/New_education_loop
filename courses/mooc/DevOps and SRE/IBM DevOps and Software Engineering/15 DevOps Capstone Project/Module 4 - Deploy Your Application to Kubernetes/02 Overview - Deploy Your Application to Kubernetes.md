# Overview: Deploy Your Application to Kubernetes

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/53LMZ/overview-deploy-your-application-to-kubernetes)

## 개요
- Sprint 2(CI와 보안)에 이어, Docker 이미지를 만들어 OpenShift/Kubernetes에 수동으로 배포하는 Sprint 3 전반부(Module 4)의 흐름을 안내.

## 내용
### 이전 모듈과의 연결
- 이전 모듈 Lesson 1에서 GitHub Actions로 빌드·테스트 과정을 자동화하는 CI 워크플로우를 추가했고, Lesson 2에서 캡스톤 프로젝트의 RESTful 서비스에 안전한 코드 관행을 추가해 Sprint 2를 완료.
- Sprint 3의 일부로 두 사용자 스토리를 순차적으로 진행 — 마이크로서비스의 Docker 이미지를 만들고 이를 OpenShift/Kubernetes 클러스터에 수동으로 배포.

### 진행 흐름
1. 칸반 보드에서 "Containerize your microservice using Docker" 스토리를 찾아 "In Progress"로 옮기고 자신에게 배정.
2. Dockerfile을 만들고 이를 사용해 `accounts`라는 Docker 이미지를 빌드 — 이 이미지를 IBM Cloud Container Registry에 푸시. 이 이미지는 이어지는 "Deploy your Docker image to Kubernetes" 스토리에서 Kubernetes/OpenShift에 배포하는 데 사용됨.
3. 두 번째 사용자 스토리("Deploy your Docker image to Kubernetes")의 첫 작업으로 OpenShift에 PostgreSQL 서비스를 만듦 — 이는 애플리케이션의 Kubernetes 내 데이터베이스 역할을 함.
4. 이어서 Docker 이미지를 OpenShift 클러스터에 배포하기 위한 매니페스트 YAML 파일들을 작성.
5. 두 스토리 모두에 대해 새 브랜치를 만들어 순차적으로 작업 — 작업이 완료되면 로컬 환경에서 변경 사항을 커밋·푸시하고, pull request를 만들어 main(또는 master) 브랜치에 병합.
6. 작업이 진행됨에 따라 해당 사용자 스토리를 칸반 보드에서 이동 — 스토리를 완료하면 Done으로, 이후 Closed로 옮김.

## 요약
- Module 4는 "Containerize your microservice using Docker"와 "Deploy your Docker image to Kubernetes" 두 스토리를 순차적으로 진행해, Dockerfile로 `accounts` 이미지를 빌드해 IBM Cloud Container Registry에 푸시하고, OpenShift에 PostgreSQL 서비스와 Kubernetes 매니페스트 YAML을 만들어 애플리케이션을 수동으로 배포하는 것을 목표로 한다.
