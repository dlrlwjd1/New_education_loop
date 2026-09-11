# Configuring Prometheus Scrape Targets for Docker Containers - Visualizing Docker Container Metrics

## 개요
- cAdvisor를 Target으로 배포해 Prometheus UI와 cAdvisor 자체 대시보드에서 컨테이너 지표를 확인하고, PromQL로 컨테이너 CPU·네트워크 지표를 조회하는 실습.

## 내용
### Target 상태 확인
- `http://<Public IP>:9090` 접속 → **Status → Target health**에서 `cadvisor` Target이 `UP` 상태인지 확인 — `UP`이 아니면 Prometheus가 데이터를 가져오지 못하고 있다는 의미.
```bash
docker ps -a   # cadvisor 컨테이너가 healthy 상태인지 확인
```

### cAdvisor 자체 대시보드
- `http://<Public IP>:8080`으로 접속하면 cAdvisor의 자체 대시보드 확인 가능.
- **Docker Containers** 메뉴에서 현재 실행 중인 컨테이너(`cadvisor`, `prometheus`) 목록 확인.
- 새 컨테이너를 실행하면 자동으로 목록에 나타남:
```bash
docker run -d --name web-container nginx
docker ps -a   # 컨테이너 실행 확인
```
- cAdvisor 대시보드를 새로고침하면 `web-container`가 추가로 표시되며, 클릭하면 CPU 코어 사용량, 메모리 제한·사용량, 프로세스 여부 등 상세 통계(아직 트래픽이 없으면 그래프가 평평한 직선으로 표시)를 확인 가능.

### Prometheus UI에서 PromQL로 조회
- Prometheus **Query** 탭에서 `container`를 입력하면(cAdvisor가 Target으로 등록되어 있으므로) 이전에는 보이지 않던 다양한 지표 옵션이 자동완성으로 나타남.
- 예시 쿼리:
  - **`container_cpu_usage_seconds_total`** — 컨테이너 CPU 사용 시간 누적값 → Execute하면 결과와 그래프 확인.
  - **`container_network_receive_bytes_total`** — 컨테이너별 수신 바이트 총량(네트워크 인바운드) — 여러 컨테이너(`cadvisor`, `prometheus`, `web-container` 등)별로 구분되어 표시되며 `job=cadvisor` 레이블도 함께 확인 가능.

### Grafana 예고
- 지금 사용한 Prometheus/cAdvisor 기본 UI는 단순한 편이며, 다음 세션에서는 **Grafana**를 Prometheus·cAdvisor와 통합해 더 강력하고 보기 좋은 대시보드를 구성할 예정.

### 정리
```bash
docker-compose down       # Prometheus, cAdvisor 컨테이너 제거
docker rm -f web-container # Compose가 아니라 수동으로 만든 컨테이너는 별도로 삭제해야 함
docker ps -a                # 모든 컨테이너 제거 확인
```

## 요약
- cAdvisor를 Target으로 등록한 뒤에는 Prometheus의 Target Health에서 `UP` 상태를 확인하고, cAdvisor 자체 대시보드(포트 8080)와 Prometheus Query(`container_cpu_usage_seconds_total`, `container_network_receive_bytes_total` 등 PromQL)를 통해 실제 컨테이너별 CPU·네트워크 지표를 시각적으로 확인할 수 있으며, 더 정교한 시각화는 다음 세션의 Grafana 통합에서 다룬다.
