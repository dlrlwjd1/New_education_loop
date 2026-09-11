# Configuring Prometheus Scrape Targets for Docker Containers - Target Configuration and Deployment

## 개요
- 컨테이너별 지표를 실제로 수집해주는 **cAdvisor**를 `docker-compose.yaml`에 추가하고, `prometheus.yaml`에 cAdvisor를 새로운 Scrape Target으로 등록하는 실습.

## 내용
### cAdvisor란
- Google이 제공하는 컨테이너 지표 수집 도구 — Prometheus 자체는 지표를 "보여주는" 도구이고, **cAdvisor가 실제로 컨테이너별 CPU·메모리·입출력 지표를 수집**해 Prometheus에 제공.
- (참고: Prometheus에는 Node Exporter라는 대안도 있지만, 이번 실습에서는 cAdvisor를 사용.)

### `docker-compose.yaml`에 cAdvisor 서비스 추가
```yaml
services:
  prometheus:
    # 이전 세션에서 이미 구성됨

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
```
- **`image: gcr.io/cadvisor/cadvisor:latest`** — Google Container Registry(GCR)에서 cAdvisor 최신 이미지 사용.
- **`ports: "8080:8080"`** — cAdvisor 애플리케이션이 리스닝하는 포트 8080을 Docker Host 포트 8080에 매핑(외부에서도 cAdvisor UI 접근 가능).
- **볼륨 마운트(모두 읽기 전용 `:ro`)** — cAdvisor는 데이터를 수정하지 않고 오직 **읽기만** 하므로 모든 마운트를 read-only로 설정:
  - `/`(root 파일시스템) → `/rootfs`
  - `/var/run`
  - `/sys`
  - `/var/lib/docker` — `docker info`로 확인 가능한 **Docker Root Directory**(모든 컨테이너·이미지가 실제로 저장되는 경로) — cAdvisor가 이 경로를 읽어 컨테이너 지표를 수집.

### `prometheus.yaml`에 cAdvisor를 Target으로 추가
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']
```
- **`targets: ['cadvisor:8080']`** — IP 대신 **컨테이너 이름(`cadvisor`)**을 그대로 사용 — Docker Compose가 만드는 커스텀 네트워크에는 DNS 서비스가 내장되어 있어, 같은 네트워크의 컨테이너들은 서로의 **컨테이너 이름을 호스트 이름처럼** 사용해 통신 가능.
- 이렇게 설정하면 Prometheus가 15초마다 cAdvisor Target을 스크랩해 컨테이너 지표를 가져와 UI에 표시.

## 요약
- 컨테이너 지표를 실제로 수집하려면 Google의 cAdvisor를 `docker-compose.yaml`에 추가해 Docker Host의 루트·시스템·Docker 데이터 경로를 읽기 전용으로 마운트하고, `prometheus.yaml`의 `scrape_configs`에 `cadvisor:8080`을 새 Target으로 등록해야 하며, 이때 Docker Compose 네트워크의 내장 DNS 덕분에 컨테이너 이름을 그대로 호스트 이름으로 사용할 수 있다.
