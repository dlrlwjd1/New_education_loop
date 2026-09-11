# Kubernetes Metrics Pods, Nodes, and Deployments - Visualizing Metrics

## 개요
- Grafana 로그인 비밀번호를 Secret에서 디코딩해 알아낸 뒤, Grafana에 로그인하고 미리 만들어진 Kubernetes Pod 대시보드(ID 21298)를 Import해 메트릭을 시각화.

## 내용
### Grafana 로그인 정보 확인 — Secret에서 추출
- Grafana 로그인 사용자 이름은 기본적으로 **`admin`**이지만, 비밀번호는 알 수 없으므로 **Secret에서 추출**해야 함.
```bash
kubectl get secret -n monitoring
```
- `prometheus-grafana`라는 이름의 Secret 확인.
```bash
kubectl get secret prometheus-grafana -n monitoring -o yaml
```
- YAML 출력에서 Base64로 인코딩된 `admin-user`, `admin-password` 값을 확인.
```bash
echo "<인코딩된 username>" | base64 -d; echo
# admin

echo "<인코딩된 password>" | base64 -d; echo
# prom-operator
```
- 디코딩 결과: **username은 `admin`, password는 `prom-operator`**.
- 참고: `kubectl get secret ... -o jsonpath=...` 형태로 JSON Path를 지정해 값을 바로 추출한 뒤 디코딩하는 방법도 동일한 결과를 줌(둘 다 결국 Base64 디코딩).

### Grafana 로그인
- 브라우저에서 Grafana 접속(이전 강의에서 NodePort로 노출한 주소) 후 `admin` / `prom-operator`로 로그인.
- **Prometheus가 이미 기본 데이터 소스(Data Source)로 자동 추가**되어 있음 — `kube-prometheus-stack` Helm Chart 자체가 Prometheus와 Grafana를 함께 배포하면서 서로 연동까지 미리 설정해주기 때문.

### 대시보드 만들기 — Import 방식 선택
- Grafana에서 대시보드를 만드는 방법은 여러 가지: 직접 시각화(Visualization) 추가, 라이브러리 패널 추가, 패널/대시보드 Import 등.
- Grafana 개발에 익숙하지 않다면 가장 쉬운 방법은 **기존 대시보드를 Import**하는 것 — Grafana 공식 사이트(`grafana.com`)에서 Kubernetes 관련 미리 만들어진 대시보드들을 제공.
- 각 대시보드는 고유 ID를 가짐(예: `15964`, `17741` 등 여러 개 존재) — JSON 파일을 다운로드해 업로드하거나, **대시보드 ID 번호만 입력**해도 바로 불러올 수 있음.

### Kubernetes Pod 대시보드(ID 21298) Import
- Grafana에서 **Import a dashboard** 선택 후 ID **`21298`**(Kubernetes Pod 대시보드) 입력 → Load.
- 이 대시보드는 Pod가 얼마나 오래 실행 중인지, 상태가 양호한지, 평균 CPU/메모리 사용량 등을 보여주는 **Kubernetes Pod 전용 대시보드**.
- Import 시 **데이터 소스(Data Source)를 선택**하라는 화면이 뜨는데, 이미 연동되어 있는 기본 **Prometheus**를 선택하고 Import 완료.
- Import가 끝나면 실제 대시보드가 나타나고, 클러스터가 지난 1시간 동안 정상적으로 실행되고 있음을 시각적으로 확인 가능.

## 요약
- Grafana의 초기 로그인 정보는 `prometheus-grafana` Secret에서 Base64 디코딩으로 확인할 수 있으며(`admin` / `prom-operator`), `kube-prometheus-stack` Chart는 Prometheus를 Grafana의 기본 데이터 소스로 미리 연동해두기 때문에 별도 설정 없이 Grafana 공식 사이트에서 제공하는 대시보드 ID(예: Kubernetes Pod 대시보드 `21298`)를 Import하기만 하면 Pod 실행 시간, 상태, CPU/메모리 사용량 등을 시각적으로 확인할 수 있다.
