# Deployments, Rolling Updates and Scaling in Kubernetes - Setting up Deployments

## 개요
- GKE 클러스터에서 Nginx Deployment(Replica 3개)를 YAML로 작성·배포하고, Deployment가 내부적으로 ReplicaSet을 만들어 Pod를 관리하는 것을 직접 확인하는 실습.

## 내용
### 환경 확인
```bash
kubectl get nodes   # GKE의 hello-cluster, 노드 2개 확인
```

### Deployment YAML 작성
```bash
kubectl explain deployment   # GVK(Group/Version/Kind) 확인 → apiVersion: apps/v1
```
```bash
mkdir -p app_yaml && cd app_yaml
vi nginx_deployment.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.26.1
          ports:
            - containerPort: 80
```
- 현재 클러스터에 Pod가 하나도 없으므로(`kubectl get pods` → 없음), Deployment가 selector와 일치하는 기존 Pod를 인수하는 게 아니라 **처음부터 새로 3개를 생성**.

### 배포 및 확인
```bash
kubectl apply -f nginx_deployment.yaml   # create도 동일하게 동작(최초 생성이므로)
kubectl get deploy,pod
```
- Deployment 상태: `3/3` READY, UP-TO-DATE, AVAILABLE — 3개 Pod 모두 정상 실행.

### Deployment가 내부적으로 ReplicaSet을 생성함을 확인
```bash
kubectl get replicaset
```
- Deployment가 Pod를 직접 관리하지 않고 **먼저 ReplicaSet을 생성**하며, 그 ReplicaSet이 실제로 Pod 3개를 만들어 관리함을 확인 — 이전 강의에서 설명한 "Deployment → ReplicaSet → Pod" 구조를 실제로 검증.

## 요약
- `kubectl explain deployment`로 GVK를 확인해 `apiVersion: apps/v1`, `kind: Deployment`인 YAML(replicas 3, selector, template)을 작성한 뒤 `kubectl apply -f`로 배포하면 3개의 Pod가 모두 정상 실행되며, `kubectl get replicaset`으로 Deployment가 실제로는 ReplicaSet을 통해 Pod를 관리한다는 구조를 직접 확인할 수 있다.
