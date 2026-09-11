# Services - Demonstration - Setting Up the Cluster

## 개요
- GKE 클러스터에 Nginx Deployment(Pod 2개)를 배포한 뒤, ClusterIP Service를 만들어 클러스터 내부 통신을 노출하는 실습.

## 내용
### 사전 준비
- GKE에 `hello-cluster`(노드 2개) 존재 확인 — GCP Kubernetes Engine, Compute Engine에서 확인 가능.
- Minikube를 쓴다면 Docker, Minikube, kubectl 설치가 전제.

### Deployment 작성·배포
```bash
vi nginx_deployment.yaml
```
- YAML 들여쓰기 오류(예: `selector`, `ports`의 위치)를 수정.
```bash
watch kubectl get deployment,pod
kubectl apply -f nginx_deployment.yaml
```
- Deployment와 Pod 2개가 정상적으로 Running 상태가 되는 것을 watch로 실시간 확인.

### 왜 Service(ClusterIP)가 필요한가 (복습)
- Pod는 IP를 가지고 있어 직접 통신할 수 있어 보이지만, **Pod가 죽으면 IP가 바뀌고 Pod 이름은 Kubernetes DNS로 해석되지 않음** — 그래서 직접 통신은 올바른 방법이 아님.
- 클러스터 **내부**에서 한 Pod가 다른 Pod와 통신하려면 항상 **ClusterIP Service**를 거쳐야 함.

### ClusterIP Service YAML 작성·배포
```bash
vi cluster_ip.yaml
```
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-clusterip-service
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
```
- **Container Port와 Target Port는 같은 개념** — 컨테이너(애플리케이션)가 실제로 리스닝하는 포트를 가리키는 두 가지 다른 표현일 뿐, 서로 다른 두 가지가 아님.
```bash
kubectl apply -f cluster_ip.yaml
kubectl get svc   # 또는 kubectl get service
```
- `nginx-clusterip-service`가 생성되어 실행 중임을 확인.
- 클러스터에는 기본으로 존재하는 **Kubernetes API용 서비스**도 함께 보이는데, 이는 항상 실행되는 시스템 서비스이므로 신경 쓸 필요 없이 방금 만든 서비스에만 집중.

## 요약
- GKE에 Nginx Deployment(Pod 2개)를 배포한 뒤, Pod 간 안정적인 통신을 위해 `selector`(레이블 `app: nginx`)와 `port`/`targetPort`(둘 다 80, 같은 개념의 다른 표현)를 지정한 ClusterIP Service를 만들어 클러스터 내부 통신 경로를 구성했다.
