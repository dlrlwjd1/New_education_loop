# Configuring Prometheus to Scrape Kubernetes Metrics - Accessing and Viewing Kubernetes Metrics

## 개요
- 이번에는 Grafana 없이 **순수 Prometheus만** `monitoring` 네임스페이스에 새로 배포하고, Service를 NodePort로 바꿔 Prometheus UI에 접근.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### 이번 세션의 초점 — Prometheus UI만 사용
- 이전 세션에서는 Prometheus로 데이터를 수집하고 Grafana로 시각화했음.
- 이번 세션은 **Grafana를 배포하지 않고 Prometheus UI만으로 데이터를 확인**하는 데 집중 — 그래서 `kube-prometheus-stack`(Grafana 포함) 대신 순수 **`prometheus`** Chart만 배포.

### 사전 준비
```bash
kubectl get nodes
helm repo list
helm repo update
```
- 2노드 GKE 클러스터, 이미 등록된 `prometheus-community` 저장소를 업데이트.

### monitoring 네임스페이스 확인
```bash
kubectl get namespace
kubectl get pod -n monitoring
helm list -n monitoring
```
- `monitoring` 네임스페이스는 이미 존재하지만 그 안에는 아무 리소스도 없는 빈 상태임을 확인.

### 순수 Prometheus 설치 (Grafana 제외)
```bash
helm install prometheus prometheus-community/prometheus --namespace monitoring
```
- **`kube-prometheus-stack`이 아니라 `prometheus`** Chart를 설치 — 이 Chart는 Grafana를 포함하지 않고 Prometheus 관련 컴포넌트만 배포.
```bash
kubectl get pod,svc -n monitoring -w
```
- 배포가 진행되면서 **Prometheus Node Exporter, Push Gateway, Prometheus Server, kube-state-metrics, Alertmanager** 등의 Pod가 순차적으로 ContainerCreating → Running 상태가 되는 것을 관찰.
```bash
helm list -n monitoring
```
- `prometheus` 릴리스가 `monitoring` 네임스페이스에 **Revision 1**로 성공적으로 배포된 것을 확인.

### Prometheus Server Service를 NodePort로 변경
- 이번에는 Chart를 다운로드해서 그대로 적용했기 때문에 `values.yaml`을 직접 수정하지 않음 — 그래서 기본값(ClusterIP)이 그대로 사용된 상태.
- Service 타입을 바꾸는 방법은 두 가지: ① 커스텀 `values.yaml`을 만들어 `helm upgrade`로 반영, ② **`kubectl edit`로 직접 수정**(이번에 사용한 더 간단한 방법).
```bash
kubectl edit svc prometheus-server -n monitoring
```
- `type`을 `ClusterIP`에서 **`NodePort`**로 변경 후 저장 — 리소스를 삭제할 필요 없이 타입만 바꾸면 됨.
```bash
kubectl get svc prometheus-server -n monitoring
```
- 변경 후 5자리 NodePort 번호(예: `32113`)가 할당된 것을 확인.

### 브라우저로 Prometheus 접속
```bash
kubectl get nodes -o wide
```
- 워커 노드의 External IP 확인 → `http://<노드 IP>:32113`으로 접속 → Prometheus 대시보드(UI) 정상 접속 확인.

## 요약
- 이번에는 Grafana 없이 순수 `prometheus` Helm Chart만 `monitoring` 네임스페이스에 설치해 Prometheus UI만으로 메트릭을 확인하는 데 집중했으며, 기본값 그대로 배포했기 때문에 `kubectl edit svc prometheus-server -n monitoring`으로 Service 타입을 ClusterIP에서 NodePort로 직접 변경한 뒤 `http://<노드 External IP>:<NodePort>`로 접속해 Prometheus 대시보드에 정상 접근했다.
