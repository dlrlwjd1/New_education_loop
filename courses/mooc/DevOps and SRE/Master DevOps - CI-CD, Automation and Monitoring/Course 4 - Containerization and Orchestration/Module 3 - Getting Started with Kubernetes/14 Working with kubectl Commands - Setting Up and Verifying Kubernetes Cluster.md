# Working with kubectl Commands - Setting Up and Verifying Kubernetes Cluster

## 개요
- GCP(Google Kubernetes Engine)에 만든 클러스터에서 `kubectl cluster-info`, `kubectl get nodes`, Deployment 생성·조회, 서비스 노출까지 kubectl 명령을 실제로 실행하는 실습.

## 내용
### 클러스터 준비
- GCP의 **GKE(Google Kubernetes Engine)**에 `hello-cluster`라는 이름의 Kubernetes 클러스터를 생성 — 2개의 노드로 구성.
- GCP 콘솔의 **Kubernetes Engine**과 **Compute Engine → VM Instances**에서 해당 노드(VM 2대)가 실제로 존재함을 확인 가능.

### 클러스터 정보와 노드 확인
```bash
kubectl cluster-info
```
- Kubernetes Control Plane(Master)이 실행 중인 IP 주소, DNS 서버, 메트릭 서버 등의 정보 출력. 문제 진단 시 `kubectl cluster-info dump`도 활용 가능.
```bash
kubectl get nodes
```
- 클러스터의 노드 2개(예: `...1599`, `...748h`로 끝나는 이름) 확인 — GCP 콘솔에서 본 VM과 대응.

### Deployment 생성
```bash
kubectl create deployment nginx-deployment --image=nginx
```
- `nginx-deployment`라는 Deployment 생성 → 내부적으로 Nginx 컨테이너가 담긴 Pod 하나를 생성.
- **`--replicas` 플래그를 지정하지 않으면 기본값은 1개** — 더 많은 Pod로 시작하려면 `--replicas`를 명시해야 함.

### 리소스 조회
```bash
kubectl get deployment    # 또는 kubectl get deploy (축약형)
kubectl get pod            # 또는 kubectl get po (축약형)
kubectl get deploy,pod     # 여러 리소스 타입을 한 번에 조회
```
- Deployment와 Pod 모두 생성 후 약 67초가 지난 상태로 정상 실행 중임을 확인.

### Service로 Deployment 노출
```bash
kubectl get svc   # 기존에 클러스터에 기본으로 존재하는 서비스 확인
kubectl expose deployment nginx-deployment --type=NodePort --port=80 --name=nginx-svc
```
- **NodePort** — Pod를 외부 세계에 노출하는 서비스 타입(상세 내용은 이후 Service 섹션에서 다룸).
- **`--port=80`** — 서비스 포트 지정.
- **`--name=nginx-svc`** — 이름을 생략하면 기본적으로 Deployment 이름과 동일하게 설정됨.
```bash
kubectl get svc   # nginx-svc가 NodePort 타입으로 생성된 것을 확인
```

## 요약
- GKE에 생성한 실제 Kubernetes 클러스터에서 `kubectl cluster-info`(클러스터 정보)와 `kubectl get nodes`(노드 확인)로 상태를 점검한 뒤, `kubectl create deployment`로 Nginx Deployment(기본 Replica 1개)를 만들고 `kubectl get deploy,pod`로 조회하며, `kubectl expose deployment --type=NodePort`로 Service를 만들어 Deployment를 외부에 노출하는 전체 흐름을 실습했다.
