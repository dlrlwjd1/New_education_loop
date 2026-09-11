# Demonstration: Collecting Kubernetes Metrics Using Prometheus (데모 — Prometheus로 쿠버네티스 메트릭 수집)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- **Minikube** 로컬 클러스터에 **kube-prometheus-stack**을 배포해 클러스터·노드·파드·워크로드 메트릭을 수집하고, Prometheus UI에서 탐색하는 데모.

## 내용 · 예시 (절차)

### 1. 클러스터·네임스페이스
```bash
minikube start                     # 단일 노드 로컬 K8s
kubectl get nodes                  # 노드 Ready 확인
kubectl create namespace monitoring  # 모니터링 컴포넌트 격리
```

### 2. kube-prometheus-stack 설치 (Helm)
```bash
helm repo add prometheus-community <repo>   # 커뮤니티 차트
helm repo update
helm install ... kube-prometheus-stack -n monitoring
# 자동 설치: Prometheus, Prometheus Operator, Alertmanager, kube-state-metrics, node-exporter
kubectl get pods -n monitoring     # 파드 실행 확인
```

### 3. Prometheus UI 접근
```bash
kubectl port-forward svc/<prometheus> -n monitoring ...   # 로컬 포트 포워딩
# 브라우저 localhost → Prometheus UI
```
- **Status → Targets**: 스크레이프 중인 K8s 컴포넌트. "up"=성공.
  - `kube-controller-manager` 등은 Minikube에서 엔드포인트가 외부 노출 안 돼 **down**일 수 있음.
  - 핵심(**kubelet, node-exporter, kube-state-metrics**)은 정상 텔레메트리 제공.

### 4. 예제 쿼리
```promql
node_cpu_seconds_total / node_memory_MemAvailable_bytes   # 노드 인프라 메트릭 (node-exporter)
kube_pod_info                       # 파드 메타데이터 (namespace/node/pod) — kube-state-metrics
kube_deployment_status_replicas     # 배포별 실행 중 레플리카 수
container_memory_working_set_bytes  # 컨테이너별 현재 메모리 사용
up                                  # 타깃 스크레이프 성공 여부(1=up)
```
- 메트릭 출처: **node-exporter**(노드 인프라), **kube-state-metrics**(K8s 객체 상태), kubelet/cAdvisor(컨테이너).

## 요약
- **Minikube + kube-prometheus-stack(Helm)**으로 K8s에 Prometheus·Alertmanager·node-exporter·kube-state-metrics를 한 번에 배포.
- Prometheus가 K8s 타깃을 **자동 발견·스크레이프**(Targets에서 "up" 확인)하며, `port-forward`로 UI 접근.
- **노드(node-exporter)·객체 상태(kube-state-metrics)·컨테이너** 메트릭을 조회해 K8s 환경 가시성을 확보한다.
