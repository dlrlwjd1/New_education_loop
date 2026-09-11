# Kubernetes Metrics Pods, Nodes, and Deployments - Setting Up Prometheus and Grafana Dashboards

## 개요
- 이번에는 `monitoring` 네임스페이스에 `kube-prometheus-stack`을 재배포하고, Prometheus 자체 UI 대신 **Grafana 대시보드**로 메트릭을 시각화하기 위해 Grafana Service를 NodePort로 변경.
- 참고: 원본 자막에서 Pod를 가리킬 때 "port"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### Prometheus UI vs Grafana
- **Prometheus 자체 UI**는 메트릭 이름을 입력하면 값을 보여주는 정도의 **아주 단순한 화면**일 뿐 — 막대그래프, 차트, 화려한 대시보드 기능은 없음.
- **Grafana**는 **대시보드 서비스(dashboard-as-a-service)** — Prometheus가 수집한 데이터를 Grafana에 넘기면, Grafana가 이를 시각적으로 풍부한 대시보드로 표시.

### monitoring 네임스페이스에 재배포
```bash
helm repo update
kubectl create namespace monitoring
kubectl get namespace
```
- 이번에는 `default` 대신 **`monitoring`**이라는 전용 네임스페이스를 만들어 모니터링 스택을 배포.
```bash
helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring
```
- 이전 세션과 명령 구조는 동일하고 **`--namespace monitoring`**만 달라짐.
```bash
kubectl get pod,svc -n monitoring -w
```
- **`-n monitoring`**을 반드시 붙여야 해당 네임스페이스의 리소스가 보임(안 붙이면 `default` 네임스페이스만 보여 아무것도 없는 것처럼 보임).

### 배포 확인
```bash
helm list -n monitoring
```
- `helm list`도 마찬가지로 **`-n monitoring`**을 붙여야 `prometheus` 릴리스가 보임(네임스페이스를 지정하지 않으면 `default` 네임스페이스 기준으로 조회되어 아무것도 나오지 않음).
- Pod 목록에서 이번에는 **Grafana Pod**도 함께 확인됨 — Grafana Pod는 `ClusterIP` 타입의 `prometheus-grafana` Service로 노출되어 있음.

### Grafana Service를 NodePort로 변경 — 두 가지 방법
- 방법 1: `values.yaml`에서 Service 타입을 미리 `NodePort`로 지정한 뒤 배포하거나, 또는 값을 수정한 뒤 `helm upgrade`로 반영(이전 Helm 실습에서 다룬 방식) — 다만 이 방법은 values 파일을 작성하고 업그레이드 명령까지 실행해야 하는 **두 단계 작업**.
- 방법 2(이번에 사용): **`kubectl edit`**로 Service를 직접 수정 — 더 간단하고 빠른 방법.
```bash
kubectl edit svc prometheus-grafana -n monitoring
```
- (네임스페이스 플래그를 빠뜨리면 오류가 나므로 주의 — 실습 중에도 이 실수가 한 번 있었음)
- 편집기에서 `spec.type`을 **`ClusterIP`에서 `NodePort`로 변경**(원하면 `LoadBalancer`도 가능하나 이번에는 NodePort 선택) 후 저장.
```bash
kubectl get svc prometheus-grafana -n monitoring
```
- 변경 후 자동으로 **5자리 NodePort 번호**(예: `30191`)가 할당된 것을 확인.

## 요약
- Prometheus 자체 UI는 단순 조회 기능만 제공하는 반면 Grafana는 풍부한 시각화를 제공하는 대시보드 서비스이므로, 이번에는 `monitoring` 네임스페이스를 새로 만들어 `kube-prometheus-stack`을 재배포하고(`helm install ... --namespace monitoring`, 이후 조회 명령에는 항상 `-n monitoring` 필요), Grafana를 노출하는 `prometheus-grafana` Service를 `kubectl edit`로 열어 타입을 ClusterIP에서 NodePort로 바꿔 외부 브라우저에서 접근할 수 있는 포트를 확보했다.
