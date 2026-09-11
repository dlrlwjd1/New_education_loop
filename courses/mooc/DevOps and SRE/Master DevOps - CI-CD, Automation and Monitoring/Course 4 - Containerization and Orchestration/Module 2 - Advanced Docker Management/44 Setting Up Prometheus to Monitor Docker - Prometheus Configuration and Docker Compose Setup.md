# Setting Up Prometheus to Monitor Docker - Prometheus Configuration and Docker Compose Setup

## 개요
- Docker 컨테이너를 모니터링하기 위해 `prometheus.yml` 설정 파일과 이를 마운트하는 `docker-compose.yml`을 작성하는 실습.

## 내용
### 사전 준비 확인
```bash
systemctl status docker      # active 확인
docker compose version        # Docker Compose 설치 확인
mkdir prometheus-docker-setup
cd prometheus-docker-setup
```

### Prometheus 설정 파일(`prometheus.yml`) 작성
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
```
- **`scrape_interval: 15s`** — Prometheus가 15초마다 Target에서 CPU 부하, 실행 중인 컨테이너 수, 컨테이너 상태, 메모리 사용량, 네트워크 입출력 대역폭 등의 지표를 수집(기본값 15초, 더 짧게 5초 등으로 변경 가능).
- **`job_name`**과 **`targets`** — Prometheus가 어디로 가서 지표를 스크랩할지 지정(이 경우 자기 자신, `localhost:9090`).

### Docker Compose 파일(`docker-compose.yml`) 작성
```yaml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
    ports:
      - "9090:9090"
```
- **`image: prom/prometheus:latest`** — Docker Hub의 `prom`(Prometheus 공식) Registry에서 최신 이미지 사용.
- **`volumes`** — 로컬에서 작성한 `prometheus.yml`을 컨테이너 내부의 `/etc/prometheus/prometheus.yml` 경로에 마운트 — 파일 이름 확장자(`.yml` vs `.yaml`)는 실제로 만든 파일명과 정확히 일치해야 함(둘 다 같은 의미지만 혼용하면 Compose가 혼동함).
- **`:ro`(read-only)** — 마운트한 설정 파일을 **읽기 전용**으로 컨테이너에 제공 — 컨테이너 안에서 이 파일을 수정할 수 없으며, 오직 Docker Host의 로컬 파일만 편집 가능. 이는 설정이 컨테이너 내부에서 임의로 변경되지 않도록 보호하는 조치.
- **`ports: "9090:9090"`** — Docker Host 포트 9090을 컨테이너 포트 9090(Prometheus 기본 포트)에 정적으로 매핑.

## 요약
- Prometheus를 Docker로 모니터링에 활용하려면 `prometheus.yml`(스크랩 간격·Target 정의)을 작성하고, 이를 `docker-compose.yml`에서 `prom/prometheus:latest` 이미지의 `/etc/prometheus/prometheus.yml` 경로에 읽기 전용(`:ro`)으로 마운트하며 포트 9090을 바인딩해 Prometheus 컨테이너를 실행할 준비를 갖춘다.
