# Deployments, Rolling Updates and Scaling in Kubernetes - Exposing Deployments via NodePort

## 개요
- Deployment→ReplicaSet→Pod의 이름 연관 관계를 확인하고, `kubectl expose`로 NodePort Service를 만든 뒤 GCP 방화벽 규칙을 열어 외부에서 접근 가능하게 만드는 실습.

## 내용
### Deployment·ReplicaSet·Pod 이름 연관성 확인
```bash
kubectl get replicaset   # 이름 예: nginx-deployment-5fb9854594
kubectl get pod            # 이름 예: nginx-deployment-5fb9854594-<임의문자열>
```
- Pod 이름이 ReplicaSet 이름을 접두사로 갖는 것을 통해, 이 3개 Pod가 모두 해당 ReplicaSet 소속임을 확인.
```bash
kubectl get deployment,rs,pod   # 한 번에 조회
watch kubectl get deployment,rs,pod   # 2초마다 자동 갱신되는 watch 모드로 계속 관찰(롤링 업데이트/롤백 실습 때 재사용)
```

### NodePort로 Deployment 노출
```bash
kubectl expose deployment nginx-deployment --type=NodePort --port=80 --target-port=80 --name=nginx-svc
```
- **`--type=NodePort`** — 서비스 타입(ClusterIP, NodePort, LoadBalancer 중 하나 — 상세 내용은 이후 Service 세션에서 다룸).
- **`--port`** — Service가 리스닝하는 포트. **`--target-port`** — 실제 컨테이너(애플리케이션)가 리스닝하는 포트.
```bash
kubectl get svc
```
- 생성된 서비스의 **External Port**(NodePort, 예: `30466`)를 확인 — 이 포트로 외부에서 접근 가능.

### 노드 IP 확인 및 접근 시도
```bash
kubectl get nodes -o wide   # Internal IP와 External IP 확인
```
- `http://<노드 External IP>:30466`으로 접속 시도 → **최초에는 접근 실패** — GCP 방화벽에서 해당 포트가 열려 있지 않기 때문.

### GCP 방화벽 규칙 추가
```bash
gcloud config set project demo9   # 프로젝트 설정
gcloud compute firewall-rules create test-port --allow=tcp:30000-32767
```
- Kubernetes의 **NodePort 범위(30000~32767)**를 통째로 열어주는 방화벽 규칙 생성 — GCP 콘솔의 **VPC networks → Firewall**에서도 확인 가능.
- 이 범위를 여는 이유: Kubernetes NodePort 서비스는 항상 이 포트 범위 내에서 할당되므로, 미리 전체 범위를 열어두면 이후 어떤 NodePort 서비스든 접근 가능.

## 요약
- Pod 이름은 ReplicaSet 이름을 접두사로 가져 Deployment→ReplicaSet→Pod 관계를 시각적으로 확인할 수 있으며, `kubectl expose deployment --type=NodePort`로 Service를 만들면 노드의 External IP와 자동 할당된 NodePort(예: 30466)로 외부 접근이 가능해지지만, GCP 같은 클라우드에서는 NodePort 범위(30000~32767)에 대한 방화벽 규칙을 별도로 열어줘야 실제로 접근할 수 있다.
