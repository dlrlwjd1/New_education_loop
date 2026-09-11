# Prometheus Kubernetes Exporters and Custom Metrics - Deploying a Node.js App on Kubernetes

## 개요
- 커스텀 메트릭 애플리케이션을 Pod/Service로 배포해 카운터가 실제로 증가하는 것을 확인한 뒤, 이 서비스를 Prometheus의 스크레이프 대상(target)으로 등록하기 위한 `values.yaml`을 작성.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### Service YAML — ClusterIP로 앱 노출
- Service는 `type: ClusterIP`이며, 레이블이 일치하는 Pod를 관리 대상으로 삼음.
- **`port: 80`**(Service 포트), **`targetPort: 3000`**(컨테이너 포트, Dockerfile에서 노출한 포트와 일치).

### Deployment와 Service 적용
```bash
kubectl apply -f deployment.yaml -f service.yaml
kubectl get pod,svc -w
```
- Pod 1개가 ContainerCreating을 거쳐 Running 상태가 되고, ClusterIP 타입의 Service도 함께 생성됨.

### 애플리케이션 동작 테스트
```bash
kubectl run test-pod --image=nginx
kubectl exec -it test-pod -- bash
```
- 별도의 테스트용 Pod(`nginx` 이미지)를 만들어 그 안에서 커스텀 메트릭 서비스에 접근.
```bash
curl custom-metric
```
- 서비스 이름(`custom-metric`)으로 요청하면 **"Hello World"** 응답 확인.
```bash
curl custom-metric/metrics
```
- `/metrics` 엔드포인트에서 커스텀 카운터 값 확인 — 처음 "Hello World"를 호출하면 카운터가 **1**로 표시됨.
- "Hello World" 엔드포인트를 몇 차례 더 호출한 뒤 다시 `/metrics`를 조회하면, 호출 횟수만큼 카운터가 증가(예: 2, 3, 4)하는 것을 확인 — `app.js`에 정의한 대로 요청 횟수가 정확히 카운트됨.

### 아직 Prometheus에는 연동되지 않은 상태
- Prometheus UI의 Query 화면에서 `custom`으로 검색해도 **아무 결과가 나오지 않음** — 이 커스텀 메트릭이 아직 Prometheus의 스크레이프 대상으로 등록되지 않았기 때문.

### values.yaml 작성 — 커스텀 스크레이프 설정(Scrape Config) 추가
- Helm Chart는 기본 `values.yaml`로 배포되지만, 원하는 값만 담은 **커스텀 values 파일**을 별도로 만들어 전달하면 그 값만 덮어쓰고 **나머지는 Chart의 기본값을 그대로 사용**(예: 기본 파일에 100개 값이 있고 커스텀 파일에 10개만 있다면, 그 10개만 덮어쓰고 나머지 90개는 기본값 유지).
- Prometheus 설정 파일(`prometheus.yml`)에 새로운 스크레이프 Job을 추가하기 위한 `values.yaml`을 작성:
```yaml
serverFiles:
  prometheus.yml:
    scrape_configs:
      - job_name: custom-metric
        metrics_path: /metrics
        static_configs:
          - targets:
              - custom-metric.default.svc.cluster.local:80
```
- **`job_name: custom-metric`** — 새로 추가하는 Job 이름(기존 기본 Job은 그대로 유지되고, 이 Job이 추가로 생성됨).
- **`metrics_path: /metrics`** — 메트릭을 노출하는 경로.
- **`targets`** — 스크레이프 대상은 앞서 만든 Service의 **FQDN(Fully Qualified Domain Name)**: `<서비스명>.<네임스페이스>.svc.cluster.local`(예: `custom-metric.default.svc.cluster.local`), 포트는 Service 포트인 **80**.

## 요약
- 커스텀 메트릭 애플리케이션을 Pod·Service(ClusterIP, `targetPort: 3000`)로 배포한 뒤 테스트 Pod에서 `curl`로 "Hello World"를 호출하고 `/metrics` 엔드포인트에서 호출 횟수 카운터가 정확히 증가함을 확인했지만, 아직 Prometheus UI에서는 이 메트릭이 조회되지 않으므로, Prometheus의 `prometheus.yml`에 새 Job(`custom-metric`, 경로 `/metrics`, 대상은 서비스의 FQDN)을 추가하는 `scrape_configs`를 담은 커스텀 `values.yaml`을 작성했다.
