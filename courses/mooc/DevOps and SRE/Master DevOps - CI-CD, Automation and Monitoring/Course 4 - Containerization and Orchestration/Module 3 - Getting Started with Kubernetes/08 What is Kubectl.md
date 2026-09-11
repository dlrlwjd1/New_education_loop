# What is Kubectl

## 개요
- Kubernetes 클러스터와 상호작용하는 CLI 도구 kubectl의 정의와 대표 사용 사례를 정리.

## 내용
### kubectl이란
- "kubectl" 또는 "kubecuddle"(북미권 발음)이라고도 불리며, **Kubernetes 클러스터와 상호작용하기 위한 커맨드라인 인터페이스(CLI)**.
- Pod 생성, Pod 목록 조회, 노드 개수 확인 등 클러스터와의 모든 통신은 CLI(또는 GUI)를 통해 이루어지며, 가장 널리 쓰이는 CLI 도구가 kubectl.
- Docker에 `docker` CLI가 있듯, Kubernetes에서는 모든 명령이 **`kubectl`로 시작**(`kubectl get pod`, `kubectl run`, `kubectl describe`, `kubectl get nodes`, `kubectl get deployments`, `kubectl expose` 등).

### kubectl로 할 수 있는 것
- **애플리케이션 배포·확장** — `kubectl run`(Pod 실행), `kubectl scale`(Pod 개수 증감).
- **리소스 관리** — `kubectl get pod`(Pod 목록), `kubectl get deployment`(Deployment 목록), `kubectl get nodes`(노드 개수).
- **로그 확인** — `kubectl logs <Pod 이름>`으로 Pod 안에서 실행 중인 애플리케이션의 로그 확인.

## 요약
- kubectl은 Kubernetes 클러스터와 상호작용하는 표준 CLI 도구로, 애플리케이션 배포·확장(`run`, `scale`), 리소스 조회(`get pod/deployment/nodes`), 로그 확인(`logs`) 등 클러스터에 대한 모든 명령이 `kubectl`로 시작한다.
