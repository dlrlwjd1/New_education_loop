# Demonstration: Collecting Container Logs with Fluent Bit (데모 — Fluent Bit로 컨테이너 로그 수집)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- 쿠버네티스 컨테이너 로그를 **Fluent Bit**로 자동 수집해 중앙 로깅 백엔드 **Loki**로 전달하는 데모.
- K8s는 여러 노드·파드에 앱이 흩어져 수동 로그 확인이 비효율 → **중앙 로깅**으로 모든 컨테이너 로그를 한 곳에 수집·검색.

## 내용 · 예시 (절차)

### 1. 클러스터·네임스페이스
```bash
kubectl get nodes                  # Minikube 노드 Ready 확인
kubectl create namespace logging   # 로깅 인프라 격리
```

### 2. Loki 배포 (중앙 로그 저장소, Helm)
```bash
helm repo add grafana <repo> && helm repo update
helm install loki -n logging ...
kubectl get pods -n logging        # 배포 확인
```

### 3. Fluent Bit 배포 (로그 수집기, Helm)
```bash
helm repo add fluent <repo> && helm repo update
helm install fluent-bit -n logging ...
kubectl get pods -n logging        # fluent-bit 파드 확인 (DaemonSet)
```

### 4. 로그 생성 앱 배포
- 경량 컨테이너 이미지로 deployment 생성 → 컨테이너 command를 수정해 **메시지를 반복 출력 + 짧은 대기**하는 로그 생성기로.
```bash
kubectl get pods                   # 로그 생성기 파드 Running 확인
```

### 5. 파이프라인 검증
```bash
kubectl logs <fluent-bit pod>      # 컨테이너 로그 파일을 읽어 백엔드로 forward 중 확인
kubectl logs <sample app pod>      # 앱이 반복 로그 생성 확인 (K8s가 저장, Fluent Bit가 계속 읽음)
# Fluent Bit 설정 확인: 컨테이너 로그 디렉터리에서 읽고 → K8s 메타데이터로 enrich → 설정된 출력 대상으로 전송
```

## 요약
- **Fluent Bit**는 K8s에 **DaemonSet**으로 배포되어 각 노드의 컨테이너 로그 파일을 읽고, **K8s 메타데이터로 enrich**해 **Loki(중앙 백엔드)**로 전달한다.
- Loki·Fluent Bit·로그 생성 앱을 Helm으로 배포 → `kubectl logs`로 파이프라인(수집·전달)을 검증.
- 파드 생애주기와 로그를 분리해 파드가 사라져도 로그가 중앙에 보존된다.
