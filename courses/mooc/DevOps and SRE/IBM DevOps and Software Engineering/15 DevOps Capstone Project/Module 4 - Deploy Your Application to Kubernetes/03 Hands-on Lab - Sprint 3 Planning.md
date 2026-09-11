# Hands-on Lab: Sprint 3 Planning

> MOOC 실습 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/e8g1R/hands-on-lab-sprint-3-planning)

## 개요
- Sprint 1·2 완료 후 Sprint 3을 계획하는 30분짜리 실습 — Docker 이미지 생성, 수동 Kubernetes/OpenShift 배포, Tekton CD 파이프라인 자동화라는 3개 스토리로 스프린트 백로그를 구성.

## 내용
### 시나리오와 새로운 요구 사항
- Product Backlog에 남아 있던 두 스토리("Containerize your microservice using Docker", "Deploy your Docker image to Kubernetes")를 Sprint Backlog로 옮기고, GitHub Actions로 CI를 자동화한 것에 만족한 경영진의 새로운 요구에 따라 Tekton으로 Kubernetes 배포까지 자동화하는 세 번째 스토리를 새로 추가.

### Story 1 — Docker로 마이크로서비스 컨테이너화
```markdown
Title: Containerize your microservice using Docker
**As a** developer
**I need** to containerize my microservice using Docker
**So that** I can deploy it easily with all of its dependencies

### Assumptions
* Create a `Dockerfile` for repeatable builds
* Use a `Python:3.9-slim` image as the base
* It must install all of the Python requirements
* It should not run as `root`
* It should use the `gunicorn` wsgi server as an entry point

### Acceptance Criteria
Given the Docker image named accounts has been created
When I use `docker run accounts`
Then I should see the accounts service running in Docker
```
- 이해관계자에게 눈에 보이는 가치를 주지 않고 주로 개발 효율성을 위한 스토리이므로 `technical debt` 라벨 배정, 추정치 부여 후 Sprint 3에 배정하고 Sprint Backlog 맨 위로 이동.

### Story 2 — Docker 이미지를 Kubernetes에 배포
```markdown
Title: Deploy your Docker image to Kubernetes
**As a** service provider
**I need** my service to run on Kubernetes
**So that** I can easily scale and manage the service

### Assumptions
* Kubernetes manifests will be created in yaml format
* These manifests could be useful to create a CD pipeline
* The actual deployment will be to OpenShift

### Acceptance Criteria
Given the Kubernetes manifests have been created
When I use the oc command to apply the manifests
Then the service should be deployed and run in Kubernetes
```
- 서비스를 확장 가능하고 성능 좋게 만들어 더 나은 사용자 경험을 제공하므로 `enhancement`로 볼 수 있는 라벨 배정, 추정치 부여 후 Sprint 3에 배정하고 Sprint Backlog 두 번째 순위로 이동.

### Story 3 — Kubernetes 배포 자동화를 위한 CD 파이프라인 생성
```markdown
Title: Create a CD pipeline to automate deployment to Kubernetes
**As a** developer
**I need** to create a CD pipeline to automate deployment to Kubernetes
**So that** the developers are not wasting their time doing it manually

### Assumptions
* Use Tekton to define the pipeline
* It should clone, lint, test, build, and deploy the service
* Deployment should be to OpenShift
* It can use a manual trigger for this MVP

### Acceptance Criteria
Given the CD pipeline has been created
When I trigger the pipeline run
Then I should see the accounts service deployed to OpenShift
```
- 이 스토리는 "Deploy to Kubernetes" 스토리에서 만든 Kubernetes 매니페스트를 재사용하기 때문에, 그 스토리에서 단순히 CLI로 배포하지 않은 것 — 배포가 더 빨라져 고객이 새 기능을 더 빨리 받는다는 점에서 `enhancement`로 볼 수도, 고객 가치를 충분히 더하지 않는다는 점에서 `technical debt`로 볼 수도 있음 — 어느 쪽이든 적절한 라벨 배정. 추정치 부여 후 Sprint 3에 배정하고 Sprint Backlog 세 번째 순위로 이동.

## 요약
- Sprint 3은 (1) Dockerfile로 `accounts` 이미지를 만드는 컨테이너화 스토리, (2) YAML 매니페스트로 OpenShift/Kubernetes에 수동 배포하는 스토리, (3) Tekton으로 클론·린트·테스트·빌드·배포를 자동화하는 CD 파이프라인 스토리라는 3개 스토리로 계획되며, 이는 각각 [[04 Hands-on Lab - Deploy Your Application to Kubernetes]]와 Module 5의 Tekton 파이프라인 랩에서 순서대로 구현된다.
