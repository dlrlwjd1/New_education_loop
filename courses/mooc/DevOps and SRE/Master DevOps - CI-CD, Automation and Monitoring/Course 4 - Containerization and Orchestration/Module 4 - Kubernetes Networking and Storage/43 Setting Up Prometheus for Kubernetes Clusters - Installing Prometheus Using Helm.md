# Setting Up Prometheus for Kubernetes Clusters - Installing Prometheus Using Helm

## 개요
- Helm을 이용해 Kubernetes 클러스터에 Prometheus를 설치하는 실습의 시작 — Helm 저장소(repository) 추가, 업데이트, `helm install`로 `kube-prometheus-stack` Chart 배포.

## 내용
### 사전 준비
- Kubernetes 클러스터, `kubectl`, **Helm**(Kubernetes 패키지 매니저)이 필요 — Prometheus를 Helm Chart로 배포할 것이므로 Helm이 전제 조건.
```bash
kubectl get nodes
helm version
```
- 2노드 GKE 클러스터(`hello-cluster`)와 설치된 Helm 확인.

### Helm 저장소(Repo) 추가
```bash
helm repo list
```
- 저장소가 없는 초기 상태(`no repositories to show`) 확인.
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```
- **`helm repo add <저장소 이름> <URL>`** 형식 — 저장소 이름(`prometheus-community`)은 사용자가 자유롭게 정할 수 있는 식별용 이름, URL은 실제 Chart가 호스팅된 위치.
```bash
helm repo list
```
- 추가된 저장소 이름과 URL 확인.

### Helm 저장소 업데이트
```bash
helm repo update
```
- 저장소를 방금 추가했다면 업데이트할 내용이 없을 수 있지만, **Chart를 설치하기 전에는 항상 `helm repo update`를 먼저 실행하는 것이 권장** — 저장소에 추가된 지 몇 주가 지난 뒤에 설치한다면 그 사이의 Chart 업데이트 내역을 로컬로 받아오기 위해 필요.

### 네임스페이스 결정
```bash
kubectl get namespaces
```
- 별도의 네임스페이스(예: `monitoring`)를 만들어 배포할 수도 있지만, 이번 실습에서는 **`default` 네임스페이스**를 그대로 사용.
- 네임스페이스를 새로 만들고 싶다면:
```bash
kubectl create namespace monitoring
```
- 그 후 `helm install` 명령 끝에 `--namespace monitoring` 플래그를 추가하면 해당 네임스페이스에 배포됨.

### Prometheus 설치 — helm install
```bash
helm install prometheus prometheus-community/kube-prometheus-stack --namespace default
```
- 명령 구조: **`helm install <릴리스 이름> <저장소 이름>/<Chart 이름> [--namespace <네임스페이스>]`**.
- `--namespace default`를 생략해도 기본적으로 `default` 네임스페이스가 사용되지만, 명시적으로 지정하면 더 명확함.
- Chart 이름은 **`kube-prometheus-stack`**이며, 방금 추가한 `prometheus-community` 저장소에서 가져옴.
```bash
kubectl get pod,svc -w
```
- 설치가 진행되면서 Prometheus 관련 Pod와 Service가 자동으로 생성되는 것을 관찰(다음 강의에서 계속).

## 요약
- Helm으로 Prometheus를 설치하려면 먼저 `helm repo add`로 `prometheus-community` 저장소를 추가하고 `helm repo update`로 최신 상태를 반영한 뒤, `helm install <릴리스 이름> prometheus-community/kube-prometheus-stack --namespace <네임스페이스>` 형식으로 설치하면 되며, 네임스페이스를 지정하지 않으면 기본적으로 `default` 네임스페이스가 사용된다.
