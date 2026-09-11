# StatefulSets - Demonstration - Headless Service Setup

## 개요
- StatefulSet 실습의 첫 단계로, StatefulSet의 필수 전제 조건인 Headless Service를 GKE 클러스터에 생성.
- 참고: 원본 자막에서 Pod를 가리킬 때 "port"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기(단, 실제 네트워크 포트를 가리키는 "port 80" 등은 그대로 유지).

## 내용
### 사전 준비
- Kubernetes 클러스터 필요(Minikube 또는 클라우드의 관리형 클러스터) — 이번 실습은 **2노드 GKE 클러스터**(`hello-cluster`) 사용.
```bash
kubectl get nodes
```
- GCP 콘솔의 Kubernetes Engine에서 클러스터를, Compute Engine의 VM Instances에서 실제 두 워커 노드(예: `dgm4`, `rh81`)를 확인.
- **동적 프로비저닝을 위한 StorageClass**가 필요 — GKE 클러스터에는 기본으로 준비되어 있음.
```bash
kubectl get sc   # storageclass 목록 확인
```

### 왜 Headless Service가 먼저 필요한가
- StatefulSet은 **Headless Service 없이는 생성할 수 없음** — Headless Service는 IP 주소가 없는 Service이며, 핵심 역할은 관리하는 각 **Pod**를 Kubernetes DNS에 직접 노출시켜 Pod끼리 DNS 이름으로 통신할 수 있게 하는 것.

### Headless Service YAML 작성
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
    - port: 80
      name: web
  clusterIP: None
  selector:
    app: nginx
```
- **`port: 80`** — Service가 수신하는 포트. `targetPort`를 명시하지 않으면 기본적으로 `targetPort`는 `port`와 동일한 값(80)이 됨(원한다면 `targetPort: 80`처럼 명시적으로 지정도 가능).
- **`name: web`** — 포트에 이름을 붙일 수 있음(예: HTTP는 80번, HTTPS는 443번 포트처럼 여러 포트를 이름으로 구분할 때 유용).
- **`clusterIP: None`** — 이 필드가 있으면 **Headless Service**가 됨. 참고로 `type`을 지정하지 않으면 기본값은 ClusterIP이므로, Headless Service는 "IP가 없는 ClusterIP 타입 Service"라고 볼 수 있음.
- **`selector: app: nginx`** — 이 레이블을 가진 Pod들을 이 Headless Service가 관리(노출). 이 레이블이 붙은 Pod들은 이후 StatefulSet에 의해 생성될 예정.

### 적용 및 확인
```bash
mkdir -p app_yamls && cd app_yamls
# headless.yaml 파일 작성 후
kubectl apply -f headless.yaml
kubectl get service
```
- `nginx`라는 이름의 Service가 생성되고, **타입은 ClusterIP이지만 IP 주소가 `None`**으로 표시됨 — 이것이 바로 Headless Service임을 확인.

## 요약
- StatefulSet 실습의 첫 단계로 2노드 GKE 클러스터와 기본 StorageClass가 준비된 환경에서, `port: 80`과 `selector: app: nginx`를 지정하고 **`clusterIP: None`**을 추가한 Headless Service(`nginx`)를 `kubectl apply`로 생성했으며, `kubectl get service`로 확인한 결과 타입은 ClusterIP이지만 IP가 `None`으로 표시되어 정상적으로 Headless Service가 만들어졌음을 확인했다.
