# Services - Demonstration - NodePort and LoadBalancer for Internal and External Access

## 개요
- NodePort가 내부·외부 접근 모두 가능함을 확인하고, GCP 방화벽 설정의 중요성을 재확인한 뒤, LoadBalancer Service를 추가로 생성해 비교.

## 내용
### NodePort의 외부 접근 확인
```bash
kubectl get nodes -o wide   # 여러 노드의 External IP 확인
```
- `http://<노드1 External IP>:30007`, `http://<노드2 External IP>:30007` 모두 "Welcome to nginx!" 정상 응답 — 어떤 노드로 접근해도 동일하게 동작.
- 클러스터가 미국(US)에 있고 사용자가 인도(India)에서 접근해도 정상 작동 — 노드가 **공인 IP**를 가지고 있기 때문에 인터넷을 통한 접근이 가능.

### NodePort는 내부에서도 접근 가능
```bash
kubectl run testpod -it --image=busybox --rm -- /bin/sh
wget -qO- http://nginx-nodeport
```
- ClusterIP 서비스뿐 아니라 **NodePort 서비스도 클러스터 내부에서 이름으로 정상 접근 가능** — NodePort는 내부·외부 접근을 모두 지원.

### GCP 방화벽 설정 필수
```bash
gcloud compute firewall-rules create <이름> --allow=tcp:30000-32767
```
- NodePort 범위(30000~32767)를 방화벽에서 열어주지 않으면 외부에서 접근 불가.
- 클라우드별로 동일한 개념의 설정 필요: **AWS는 Security Group**, **Azure는 방화벽 규칙**에서 해당 포트를 열어야 함.

### LoadBalancer Service 생성
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-loadbalancer
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
  type: LoadBalancer
```
- NodePort YAML과 거의 동일 — **`type: LoadBalancer`**(대문자 L, B)로만 차이.
- LoadBalancer는 NodePort와 동일하게 동작하되, **추가로 External IP를 하나 더 받음**(NodePort는 External IP가 `<none>`이었지만 LoadBalancer는 실제 External IP가 할당됨).
```bash
kubectl apply -f loadbalancer.yaml
kubectl get svc
```
- `nginx-loadbalancer` 서비스가 생성되고 내부 IP도 함께 확인 가능.

### LoadBalancer도 내부 접근 가능
```bash
wget -qO- http://nginx-loadbalancer
```
- ClusterIP, NodePort와 마찬가지로 **LoadBalancer도 클러스터 내부에서 이름으로 접근 가능** — 다만 NodePort와 LoadBalancer는 주로 **외부 접근**을 위해 사용된다는 점이 핵심 차이.

## 요약
- NodePort는 노드의 공인 IP를 통해 외부에서도, 서비스 이름을 통해 내부에서도 모두 접근 가능하지만 클라우드 방화벽/보안 그룹에서 NodePort 범위(30000~32767)를 반드시 열어줘야 하며, LoadBalancer는 NodePort와 동일하게 동작하되 추가로 External IP를 할당받는다는 차이가 있고 이 역시 내부에서 서비스 이름으로 접근 가능하다.
