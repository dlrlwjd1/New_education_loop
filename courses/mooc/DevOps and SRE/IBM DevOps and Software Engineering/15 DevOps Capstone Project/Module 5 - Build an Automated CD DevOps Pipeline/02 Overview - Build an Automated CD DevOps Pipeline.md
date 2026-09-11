# Overview: Build an Automated CD DevOps Pipeline

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/Q5tH0/overview-build-an-automated-cd-devops-pipeline)

## 개요
- Sprint 3의 마지막 스토리로, Tekton 파이프라인을 사용해 Kubernetes 배포를 자동화하는 Module 5의 흐름을 안내.

## 내용
### 이전 모듈과의 연결
- 이전 모듈에서 마이크로서비스의 Docker 이미지를 만들어 Sprint 3의 일부로 Kubernetes 클러스터에 수동으로 배포.
- 이번 모듈의 실습에서는 Tekton 파이프라인을 사용해 Kubernetes 배포를 자동화 — 파이프라인이 트리거되면 어떤 수동 개입 없이도 accounts 서비스가 Kubernetes에 배포됨.

### 진행 흐름
1. 칸반 보드에서 "Create a CD pipeline to automate deployment to Kubernetes" 스토리를 찾아 Sprint Backlog에서 In Progress로 옮기고 자신에게 배정.
2. 서비스를 OpenShift/Kubernetes 클러스터에 클론(clone)·린트(lint)·단위 테스트·빌드·배포하는 작업(task)들로 구성된 CD 파이프라인을 만듦.
3. 이 스토리를 위한 새 브랜치를 만들어 작업을 시작 — 작업이 완료되면 로컬 환경에서 변경 사항을 커밋·푸시하고, pull request를 만들어 main(또는 master) 브랜치에 병합.
4. 작업이 진행됨에 따라 해당 사용자 스토리를 칸반 보드에서 이동 — 스토리를 완료하면 Done으로, 이후 Closed로 옮김.

## 요약
- Module 5는 Sprint 3의 마지막 스토리를 완료하기 위해, 서비스를 클론·린트·테스트·빌드·배포하는 작업들로 구성된 Tekton CD 파이프라인을 만들어 Kubernetes 배포를 완전히 자동화하는 것을 목표로 한다.
