# Hands-on Lab: Deploy Your Application to Kubernetes

> MOOC 실습 자료(Ungraded App Item) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedLti/pDdhY/hands-on-lab-deploy-your-application-to-kubernetes)

## 개요
- Sprint 3의 첫 두 스토리("Containerize your microservice using Docker", "Deploy your Docker image to Kubernetes")를 구현하는 60분짜리 핵심 실습 — Dockerfile을 작성해 이미지를 빌드하고, OpenShift(Kubernetes 기반) 클러스터에 수동으로 배포한다.

## 내용
### 목표
- Sprint Backlog에서 다음 스토리 가져오기 → Dockerfile 작성과 이미지 빌드 → 배포용 Kubernetes 매니페스트 작성 → OpenShift Kubernetes 클러스터에 Docker 이미지 배포 → 로그로 서비스 실행 확인 → pull request와 병합 → 스토리를 Done으로 이동.

### Exercise 1~2 — Dockerfile 작성
- 스토리 요구 사항: 반복 가능한 빌드를 위한 Dockerfile, `python:3.9-slim` 베이스 이미지, 모든 Python 의존성 설치, `root`로 실행하지 않음, `gunicorn` WSGI 서버를 엔트리 포인트로 사용.
- `add-docker` 브랜치를 만들고 저장소 루트에 다음 `Dockerfile`을 작성:
  ```dockerfile
  FROM python:3.9-slim

  # Create working folder and install dependencies
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install --no-cache-dir -r requirements.txt

  # Copy the application contents
  COPY service/ ./service/

  # Switch to a non-root user
  RUN useradd --uid 1000 theia && chown -R theia /app
  USER theia

  # Run the service
  EXPOSE 8080
  CMD ["gunicorn", "--bind=0.0.0.0:8080", "--log-level=info", "service:app"]
  ```
  - `--no-cache-dir`로 이미지 크기를 작게 유지하고, `theia`라는 비루트 사용자를 만들어 `/app` 소유권을 넘긴 뒤 그 사용자로 전환하는 것이 보안 모범 사례.

### Exercise 3 — Docker 이미지 빌드와 푸시
```bash
docker build -t accounts .

docker run --rm \
  --link postgresql \
  -p 8080:8080 \
  -e DATABASE_URI=postgresql://postgres:postgres@postgresql:5432/postgres \
  accounts
# 성공 시: ... [INFO] [__init__] Service initialized!

# IBM Cloud Container Registry로 태그·푸시
docker tag accounts us.icr.io/$SN_ICR_NAMESPACE/accounts:1
docker push us.icr.io/$SN_ICR_NAMESPACE/accounts:1
```
- `SN_ICR_NAMESPACE` 환경변수에는 IBM Cloud Container Registry 상의 이미지 네임스페이스가 담겨 있음.
- Skills Network 아이콘 → Other → Launch Application → 포트 8080 입력으로 브라우저에서 실행 여부 확인 가능.

### Exercise 4 — Pull Request(Dockerfile)
```bash
git add Dockerfile
git commit -am "Added docker support"
git push --set-upstream origin add-docker
```
- GitHub에서 pull request 생성 → 이미 활성화된 GitHub Actions가 트리거됨 → 테스트 통과 후 병합 → 칸반 보드에서 스토리를 Done으로 이동 → `git checkout main && git pull && git branch -d add-docker`로 정리.

### Exercise 5~6 — 다음 스토리 착수와 PostgreSQL 배포
- 다음 스토리("Deploy your Docker image to Kubernetes")를 In Progress로 옮기고 배정.
- `add-kubernetes` 브랜치 생성 후, OpenShift 템플릿으로 테스트용 임시(ephemeral) PostgreSQL을 배포:
  ```bash
  oc create -f postgresql-ephemeral-template.json
  oc new-app postgresql-ephemeral
  oc get all   # postgres 서비스와 pod가 실행 중인지 확인
  ```

### Exercise 7 — Kubernetes 매니페스트 작성
- 팁: `kubectl`/`oc`에 `--dry-run=client -o yaml` 플래그를 붙이면 실제로 리소스를 만들지 않고 YAML 정의만 출력 — 이를 파일로 리다이렉트하면 매니페스트 초안을 손쉽게 얻을 수 있음.
- **Deployment 매니페스트** — IBM Cloud Registry에 푸시한 이미지, 레플리카 3개로 생성:
  ```bash
  oc create deployment accounts \
    --image=us.icr.io/$SN_ICR_NAMESPACE/accounts:1 \
    --replicas=3 \
    --dry-run=client -o yaml > deploy/deployment.yaml
  ```
- 마이크로서비스가 필요로 하는 `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_PASSWORD`, `DATABASE_USER` 환경변수를 위해 `postgresql` 시크릿의 키 확인:
  ```bash
  oc describe secret postgresql
  # Data: database-name, database-password, database-user
  ```
- `deploy/deployment.yaml`에 시크릿 참조로 환경변수 추가:
  ```yaml
  env:
    - name: DATABASE_HOST
      value: postgresql
    - name: DATABASE_NAME
      valueFrom:
        secretKeyRef:
          name: postgresql
          key: database-name
    - name: DATABASE_PASSWORD
      valueFrom:
        secretKeyRef:
          name: postgresql
          key: database-password
    - name: DATABASE_USER
      valueFrom:
        secretKeyRef:
          name: postgresql
          key: database-user
  ```
- 배포 적용: `oc create -f deploy/deployment.yaml`
- **Service 매니페스트** — `ClusterIP` 타입, 포트 8080:
  ```bash
  oc expose deploy accounts \
    --type=ClusterIP \
    --port=8080 \
    --dry-run=client -o yaml > deploy/service.yaml
  oc create -f deploy/service.yaml
  ```
- 확인: `oc get all -l app=accounts` — deployment, replicaset, pod, service가 모두 보여야 함.
- **Route 노출** — edge termination으로 `accounts` 서비스를 외부에 노출:
  ```bash
  oc create route edge accounts --service=accounts
  oc get routes
  ```
  발급된 라우트 URL을 브라우저에 붙여넣어 OpenShift에서 실행 중인 애플리케이션 확인.

### Exercise 8 — Pull Request(Kubernetes 매니페스트)
```bash
git add deploy/deployment.yaml deploy/service.yaml
git commit -am "Added Kubernetes support"
git push --set-upstream origin add-kubernetes
```
- pull request 생성 → GitHub Actions 트리거 확인 → 테스트 통과 후 병합 → 칸반 보드에서 스토리를 Done으로 이동 → `git checkout main && git pull && git branch -d add-kubernetes`로 정리.

### 최종 증거 수집
- `docker image ls` 출력과 `oc get all -l app=accounts` 출력을 캡처해 배포 완료를 증빙.

## 요약
- 이 랩은 `python:3.9-slim` 기반에 비루트 사용자와 `gunicorn` 엔트리 포인트를 가진 Dockerfile로 `accounts` 이미지를 빌드해 IBM Cloud Container Registry에 푸시한 뒤, `oc create deployment`·`oc expose`의 `--dry-run=client -o yaml` 출력을 재사용해 `deploy/deployment.yaml`(PostgreSQL 시크릿을 환경변수로 연결, 레플리카 3개)과 `deploy/service.yaml`(ClusterIP, 8080)을 작성하고, OpenShift route로 서비스를 외부에 노출함으로써 Sprint 3의 컨테이너화·Kubernetes 배포 스토리를 완료하며, 이 매니페스트들은 Module 5의 Tekton CD 파이프라인에서 그대로 재사용된다.
