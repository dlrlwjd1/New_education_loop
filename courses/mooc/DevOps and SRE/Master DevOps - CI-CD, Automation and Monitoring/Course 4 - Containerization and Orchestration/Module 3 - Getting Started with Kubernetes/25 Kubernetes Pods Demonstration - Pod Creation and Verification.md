# Kubernetes Pods Demonstration - Pod Creation and Verification

## 개요
- GKE(Google Kubernetes Engine)에 클러스터를 만들고, `kubectl explain`으로 리소스의 GVK를 확인한 뒤 Nginx Pod용 YAML을 작성·배포하는 실습.

## 내용
### 클러스터 준비 옵션
- 실습용 Kubernetes 클러스터는 Docker+kubectl+Minikube(로컬 단일 노드)로도 만들 수 있지만, 이번 실습은 **GKE(Google Kubernetes Engine)** 사용.
```bash
gcloud container clusters create hello-cluster --zone us-central1-a --num-nodes=2
```
- 클러스터 생성에는 약 10분 소요. 완료 후:
```bash
kubectl get nodes         # 노드 2개 확인
kubectl cluster-info        # Control Plane, DNS, Metric Server 등 정상 확인
```
- GCP 콘솔의 **Kubernetes Engine**과 **Compute Engine → VM Instances**에서도 클러스터와 노드를 직접 확인 가능.

### `kubectl explain`으로 리소스의 GVK 확인
```bash
kubectl explain pod
kubectl explain deployment
```
- 리소스의 **GVK(Group, Version, Kind)**를 알려줌 — YAML 작성 시 `apiVersion`, `kind`를 외울 필요 없이 이 명령으로 확인 가능.
- **Pod는 그룹(Group)이 없음** — Pod는 원래 core 그룹에 속했으나 이 표기가 폐기되어 `apiVersion: v1`만 사용(그룹명 생략). Deployment 같은 리소스는 `apps/v1`처럼 그룹/버전을 함께 표기.

### Nginx Pod YAML 작성
```bash
mkdir -p app_yaml
cd app_yaml
vi nginx_pod.yaml
```
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80
```
- **주의**: YAML 들여쓰기(indentation) 오류에 유의 — `image`는 `name`과 같은 레벨, `ports`는 `image`와 같은 레벨, `containerPort`는 `ports` 하위에 위치해야 함.
- 이전 버전 이미지(예: `nginx:1.21`)를 사용하고 싶다면 `image` 값만 바꾸면 됨.

### 배포와 확인
```bash
kubectl apply -f nginx_pod.yaml
kubectl get pod   # 4초 만에 Running 상태로 확인
```

## 요약
- GKE에 `gcloud container clusters create`로 실제 클러스터를 만든 뒤 `kubectl get nodes`/`cluster-info`로 상태를 확인하고, `kubectl explain <리소스>`로 GVK(Group/Version/Kind)를 조회해 YAML의 `apiVersion`/`kind`를 정확히 작성하며, Nginx 컨테이너를 담은 Pod YAML을 `kubectl apply -f`로 배포해 즉시 Running 상태의 Pod를 확인했다.
