# Using Prometheus to Query and Visualize Docker Metrics - Integrating Prometheus, cAdvisor, and Grafana

## 개요
- 기존 Prometheus+cAdvisor 구성에 **Grafana**를 추가한 `docker-compose.yaml`을 작성하고, 전체 모니터링 스택(애플리케이션 컨테이너 → cAdvisor → Prometheus → Grafana)의 흐름을 정리.

## 내용
### 사전 준비
```bash
systemctl status docker
docker compose version
mkdir docker-monitoring
cd docker-monitoring
```
- 이전 세션에서 작성한 `prometheus.yaml`을 그대로 복사해 재사용:
```bash
cp ../prometheus-docker-setup/prometheus.yaml .
```

### `docker-compose.yaml`에 Grafana 추가
```yaml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    volumes:
      - ./prometheus.yaml:/etc/prometheus/prometheus.yaml:ro
    ports:
      - "9090:9090"

  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    container_name: cadvisor
    ports:
      - "8080:8080"
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker:/var/lib/docker:ro

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    volumes:
      - grafana-storage:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin

volumes:
  grafana-storage:
```
- **`grafana` 서비스**
  - `image: grafana/grafana:latest` — Docker Hub의 Grafana 공식 이미지.
  - `ports: "3000:3000"` — Grafana의 기본 포트 3000을 그대로 Docker Host에 매핑.
  - **볼륨(`grafana-storage:/var/lib/grafana`)** — Grafana가 대시보드·설정을 저장하는 경로에 볼륨을 마운트해 컨테이너가 삭제돼도 대시보드가 유지되도록 함.
  - **환경 변수**(`GF_SECURITY_ADMIN_USER`, `GF_SECURITY_ADMIN_PASSWORD`) — 초기 관리자 계정을 `admin`/`admin`으로 설정.

### 전체 모니터링 스택의 흐름
1. Docker Host 위에 여러 애플리케이션 컨테이너(App 1, App 2, App 3, App 4 등)가 실행 중.
2. **cAdvisor**가 이 애플리케이션 컨테이너들의 CPU·메모리·입출력 대역폭 등 지표를 수집.
3. **Prometheus**가 `prometheus.yaml`에 정의된 Target(cAdvisor, `cadvisor:8080`)을 15초 간격으로 스크랩(pull)해 cAdvisor로부터 데이터를 가져옴.
4. **Grafana**가 Prometheus를 데이터 소스로 삼아, 수집된 지표를 대시보드로 시각화.
- 요약하면: **애플리케이션 컨테이너 → cAdvisor(수집) → Prometheus(스크랩·저장) → Grafana(시각화)**로 이어지는 파이프라인.

## 요약
- 기존 Prometheus+cAdvisor 구성에 Grafana 서비스(포트 3000, 볼륨으로 대시보드 지속성 확보, `admin`/`admin` 초기 계정)를 추가함으로써, 애플리케이션 컨테이너의 지표가 cAdvisor에 의해 수집되고 Prometheus가 이를 스크랩해 저장한 뒤 Grafana가 시각화하는 완전한 모니터링 스택을 구성한다.
