# Setting Up Prometheus for Kubernetes Clusters - Adding the Prometheus Helm Repository

## 개요
- `kube-prometheus-stack` Chart 배포가 완료된 뒤 생성되는 Prometheus 컴포넌트들을 확인하고, Prometheus Server Service를 NodePort로 바꿔 브라우저에서 Prometheus UI에 접근.
- 참고: 원본 자막에서 Pod를 가리킬 때 "port"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기(실제 네트워크 포트는 "port 9090"처럼 그대로 유지).

## 내용
### 배포 소요 시간
- `helm install` 명령은 Chart에 포함된 YAML 개수에 따라 소요 시간이 다름 — YAML 10개 정도면 1분 이내, 50~100개면 2~3분 이상 걸릴 수 있음.

### 배포된 Prometheus 컴포넌트 확인
```bash
kubectl get pod,svc
```
- 배포가 완료되면 여러 Prometheus 관련 Pod가 나타남 — **Prometheus Operator**, **kube-state-metrics**, **Prometheus Node Exporter**, **Alertmanager**, **Push Gateway**, **Grafana**(서드파티로 함께 배포됨) 등.
- Prometheus는 **CNCF(Cloud Native Computing Foundation)**가 관리하는 서비스이며, 공식 아키텍처 문서는 `prometheus.io`에서 확인 가능(Push Gateway, Alertmanager, Prometheus Server, Target 등의 구성 요소로 이뤄짐).
```bash
helm list
```
- 배포 상태 확인 — `prometheus` 릴리스가 `default` 네임스페이스에 **Revision 1**로 성공적으로 배포됨.

### Prometheus UI 접근 준비 — Service 타입 변경
- 접근 방법은 두 가지: `kubectl port-forward`(로컬 Cloud Shell에서만 접근 가능) 또는 **Service 타입을 NodePort로 변경**(외부 브라우저에서 접근 가능) — 이번에는 브라우저 접근을 위해 후자를 선택.
- 여러 서비스 중 실제 접근 대상은 **`kube-prometheus-stack-prometheus`**(포트 9090)이며, 이는 Headless Service가 아니라 UI 접근용 Service.
```bash
kubectl edit svc kube-prometheus-stack-prometheus
```
- `spec.type`을 **`ClusterIP`에서 `NodePort`로 변경**한 뒤 저장.
```bash
kubectl get svc kube-prometheus-stack-prometheus
```
- 변경 후 포트 9090에 대해 **NodePort**(예: `32708`)가 할당된 것을 확인(추가로 8080 포트도 있지만 핵심은 9090).

### 브라우저로 Prometheus 접속
```bash
kubectl get nodes -o wide
```
- 워커 노드의 External IP 확인.
- 브라우저에서 `http://<노드 External IP>:32708` 접속 → Prometheus 랜딩 페이지 확인.
- **Status → Target Health** 메뉴에서 Prometheus가 API 서버, 노드 등 모든 대상(target)으로부터 정상적으로 데이터를 수집하고 있는지 확인 가능.

### 데이터 확인 방법 2가지
- Prometheus 자체 UI를 이용하는 방법(이번에 확인한 방법)과, **Grafana 대시보드**를 통해 시각화하는 방법 — Grafana와 Prometheus의 연동은 다음 세션에서 다룰 예정.

## 요약
- `kube-prometheus-stack` Chart를 배포하면 Prometheus Operator, kube-state-metrics, Node Exporter, Alertmanager, Push Gateway, Grafana 등의 Pod가 함께 생성되며, Prometheus UI(포트 9090)에 외부 브라우저로 접근하려면 `kubectl edit svc`로 해당 Service 타입을 ClusterIP에서 NodePort로 바꾼 뒤 `http://<노드 External IP>:<NodePort>`로 접속하면 되고, 접속한 UI의 Target Health 화면에서 Prometheus가 정상적으로 메트릭을 수집 중임을 확인할 수 있다.
