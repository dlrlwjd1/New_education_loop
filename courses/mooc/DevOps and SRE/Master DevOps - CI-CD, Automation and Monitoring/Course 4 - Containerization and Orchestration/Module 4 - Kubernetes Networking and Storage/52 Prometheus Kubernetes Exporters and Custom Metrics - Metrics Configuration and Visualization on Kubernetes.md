# Prometheus Kubernetes Exporters and Custom Metrics - Metrics Configuration and Visualization on Kubernetes

## 개요
- `helm upgrade`로 커스텀 `values.yaml`을 Prometheus Chart에 반영해 커스텀 메트릭을 실제로 Prometheus UI에서 조회하고, 실시간으로 값이 증가하는 것을 확인하며 전체 실습을 마무리.

## 내용
### helm upgrade로 스크레이프 설정 반영
```bash
helm repo list
helm upgrade prometheus prometheus-community/prometheus -f values.yaml
```
- **`helm upgrade <릴리스 이름> <저장소>/<Chart 이름> -f <커스텀 values 파일>`** 형식으로, 앞서 작성한 커스텀 `values.yaml`(스크레이프 설정 포함)을 Chart에 반영.

### 예상치 못한 부작용 — Service 타입이 다시 ClusterIP로 되돌아감
- 업그레이드 후 Prometheus Service의 타입이 이전에 수동으로 `NodePort`로 바꿔뒀던 것이 **다시 `ClusterIP`로 되돌아감**.
- 원인: `helm upgrade`는 **커스텀 values 파일 + Chart의 기본 values 파일**을 함께 반영하는데, 커스텀 `values.yaml`에는 Service 타입에 대한 값을 지정하지 않았으므로 **Chart의 기본값(ClusterIP)이 다시 적용**된 것 — `kubectl edit`로 했던 수동 변경은 Helm이 관리하는 값이 아니므로 업그레이드 시 덮어써짐.
- 해결: 다시 수동으로 변경.
```bash
kubectl edit svc prometheus-server
```
- `type`을 다시 **NodePort**로 변경 후 저장 — 이번에는 새로운 NodePort 번호(예: `31238`)가 할당됨.
```bash
kubectl get nodes -o wide
```
- 노드 IP + 새 NodePort(`31238`)로 Prometheus UI 재접속.

### 커스텀 메트릭이 실제로 스크레이프되는지 확인
```bash
kubectl exec -it test-pod -- bash
curl custom-metric/metrics
```
- 테스트 Pod 안에서 커스텀 카운터의 현재 값(예: 4) 확인.
- Prometheus UI → **Status → Target Health**에서 커스텀 Job(`custom-metric`)이 정상적으로 목록에 나타남을 확인.
- Prometheus UI → **Query**에서 `custom` 입력 → 자동완성으로 **`my_custom_counter`**(커스텀 카운터 메트릭 이름) 확인 → 실행(Execute)하면 값 **4**로 표시됨 — 애플리케이션의 실제 카운터 값과 정확히 일치.

### 실시간 반영 확인
- 테스트 Pod에서 "Hello World" 엔드포인트를 여러 차례 호출(`curl custom-metric`)할 때마다 카운터가 5, 6, 7, 8로 증가.
- Prometheus UI에서 쿼리를 다시 실행(또는 새로고침)하면 그 값이 **그대로 반영**됨을 확인 — 다만 새로고침만으로는 즉시 반영되지 않는 경우가 있어, 쿼리를 다시 실행해야 최신 값이 보이는 경우도 있었음(Prometheus의 스크레이프 주기에 따른 지연).
- Prometheus는 이 값을 조회할 때마다 실시간으로 해당 서비스에 접속해 현재 카운터 값을 가져오는 방식으로 동작.

### 전체 실습 마무리
- 이번 세션에서 Docker부터 Kubernetes까지의 전체 과정을 복습: Node.js 애플리케이션 작성 → Docker 이미지 빌드·푸시 → 그 이미지로 Kubernetes Deployment/Service 배포 → Prometheus 스크레이프 설정(`scrape_configs`)으로 등록 → `helm upgrade`로 반영 → Service를 NodePort로 노출해 브라우저에서 커스텀 메트릭 조회까지 **엔드투엔드로 성공적으로 완료**.
- Prometheus 자체 UI는 단순하므로, 실제로는 Grafana를 통해 이런 커스텀 메트릭도 시각화하는 것이 일반적(이전 실습들에서 다룬 대로).

## 요약
- 커스텀 `values.yaml`을 반영하기 위해 `helm upgrade`를 실행하면 이전에 수동으로 변경했던 Service 타입(NodePort)이 Chart의 기본값(ClusterIP)으로 되돌아가므로 다시 `kubectl edit`로 NodePort로 바꿔야 했고, 이후 Prometheus UI의 Target Health와 Query 화면에서 `my_custom_counter` 메트릭이 정상적으로 나타나 테스트 Pod에서 반복 호출할 때마다 카운터 값이 실시간으로 Prometheus에 반영됨을 확인하며 Docker 이미지 빌드부터 Kubernetes 배포, Prometheus 커스텀 메트릭 연동까지 전체 파이프라인을 엔드투엔드로 완성했다.
