# Working with kubectl Commands - Creating the YAML File for Deployment

## 개요
- YAML 파일로 Deployment(Replica 2개)를 만들어 `kubectl apply`로 배포하고, `kubectl edit`으로 API를 직접 수정해 Replica를 4개로 늘리는 실습.

## 내용
### 기존 리소스 정리
```bash
kubectl delete deployment nginx-deployment   # Deployment 삭제 시 관리하던 Pod도 함께 삭제됨
kubectl delete svc nginx-svc                  # Service는 별도로 삭제해야 함(Deployment 삭제로 자동 제거되지 않음)
```

### Deployment YAML 파일 작성
```bash
mkdir app-yamls
cd app-yamls
vi nginx-deploy.yaml
```
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
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
          image: nginx:1.19
          ports:
            - containerPort: 80
```
- **`kind: Deployment`**, **`apiVersion: apps/v1`** — 만들 리소스 종류와 API 버전.
- **`spec.replicas: 2`** — 이 레이블과 일치하는 Pod가 없으면 Template에 정의된 대로 Pod 2개를 생성.
- **`template`** — Deployment가 생성할 Pod의 정의(메타데이터, 레이블, 컨테이너 스펙 — 이미지 `nginx:1.19`, 컨테이너 이름 `nginx`, 포트 80).
- **주의**: YAML의 **들여쓰기(indentation)**가 정확해야 함 — 잘못되면 "unable to convert YAML into JSON" 같은 API 오류 발생.

### Deployment 배포
```bash
kubectl apply -f nginx-deploy.yaml
kubectl get deploy,pod
```
- Replica가 2이므로 Pod 2개가 생성되어 **고가용성**을 확보 — 이후 하나를 강제 종료해도 Deployment가 다시 생성(장애 허용).

### `kubectl edit`으로 API 직접 수정
```bash
cat nginx-deploy.yaml   # 로컬 파일은 여전히 replicas: 2로 유지됨
kubectl edit deployment nginx-deployment
```
- `kubectl edit`은 로컬 YAML 파일이 아니라 **Kubernetes API 서버에 저장된 설정을 직접 여는 것** — vi 에디터가 열리면 `replicas: 2`를 `replicas: 4`로 수정 후 `:wq!`(강제 저장 종료)로 저장.
```bash
kubectl get deploy,pod   # 새 Pod 2개가 추가로 생성되어 총 4개(Age가 몇 초인 새 Pod 확인)
```
- **핵심 포인트**: `kubectl edit`으로 변경하면 **Kubernetes API의 실제 상태만 바뀌고, 로컬의 정적 YAML 파일 내용은 그대로 유지**됨 — 로컬 파일까지 갱신하려면 파일을 직접 수정한 뒤 `kubectl apply`를 실행해야 함.

## 요약
- YAML 파일(`apiVersion`, `kind: Deployment`, `replicas`, `template`)로 Nginx Deployment를 정의해 `kubectl apply -f`로 배포하면 지정한 Replica 수만큼 Pod가 생성되며, `kubectl edit deployment`로 Kubernetes API의 설정을 직접 열어 Replica 수를 늘리면(예: 2 → 4) 로컬 YAML 파일은 그대로 둔 채 클러스터의 실제 상태만 즉시 갱신된다.
