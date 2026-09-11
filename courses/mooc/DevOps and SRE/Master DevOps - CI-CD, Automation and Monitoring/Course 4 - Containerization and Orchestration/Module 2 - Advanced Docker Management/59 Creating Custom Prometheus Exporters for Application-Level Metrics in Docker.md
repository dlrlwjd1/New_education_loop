# Creating Custom Prometheus Exporters for Application-Level Metrics in Docker

## 개요
- 커스텀 Prometheus Exporter의 개념, 지표 타입 선택, Python 기반 기본 Exporter 작성, Docker 컨테이너화, Prometheus 연동, 베스트 프랙티스를 정리.

## 내용
### Exporter 기초
- Prometheus는 **Pull 기반 모델**로 동작 — HTTP 엔드포인트를 스크랩(scrape)해 지표를 수집.
- **Custom Exporter**는 애플리케이션과 Prometheus 사이의 다리 역할 — 애플리케이션 내부 데이터(로그, 통계, 엔드포인트)를 모아 Prometheus의 `/metrics` 형식으로 노출.
- Exporter는 본질적으로 작은 HTTP 서버로, 내부 지표를 수집 → Prometheus 지표 타입으로 변환 → `/metrics`에 노출.
- Python, Go, Java 등의 언어는 `prometheus_client` 같은 클라이언트 라이브러리를 제공해 지표 정의·노출을 도움.
- **직접 Exporter를 작성해야 하는 이유**: 특정 애플리케이션용 Exporter가 시중에 없거나, 애플리케이션 레벨의 비즈니스 지표를 추적해야 하거나, 노출 방식·포맷·레이블을 완전히 통제하고 싶을 때.

### Prometheus 지표 타입
- **Counter** — 엄격하게 증가만 하는 값(예: 처리한 요청 수).
- **Gauge** — 오르내릴 수 있는 값(예: 현재 큐 길이, 메모리 사용량).
- **Histogram/Summary** — 분포를 관측(예: 응답 시간).
- 측정하려는 대상에 맞게 타입 선택 — 예: 전체 처리 요청 수는 Counter, 처리 시간 분포는 Histogram.

### 기본 Python Exporter 작성 단계
```bash
pip install prometheus_client
```
```python
from prometheus_client import start_http_server, Counter
http_requests = Counter('http_requests_total', 'Total HTTP Requests', ['status_code'])

start_http_server(9000)  # Exporter가 리스닝하는 포트

# 애플리케이션 로직에 계측(instrument) 코드 삽입
http_requests.labels(status_code='200').inc()
```
- **스크랩 통제** — Exporter 서버는 지표 노출을 중앙화하기 위해 단일 프로세스/스레드에서만 실행해야 함.

### Exporter 컨테이너화
```dockerfile
FROM python:3.11-alpine
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY exporter.py .
EXPOSE 9000
CMD ["python", "exporter.py"]
```
- Exporter를 애플리케이션과 함께 Docker로 배포 — Exporter가 애플리케이션 내부(로그, 소켓)에 접근 가능해야 하고, 포트가 노출·매핑(`-p 9000:9000`)되어야 하며, Docker 설정이 애플리케이션 배포와 깔끔하게 정렬되어야 함.

### Prometheus로 스크랩하기
```yaml
scrape_configs:
  - job_name: 'my_app'
    static_configs:
      - targets: ['app-exporter:9000']
```
- Kubernetes(Prometheus Operator 사용 시)에서는 **ServiceMonitor**로 서비스 디스커버리를 자동화 가능.
- 전체 워크플로우: **[App Metrics] → [Custom Exporter] → /metrics → [Prometheus Scrape] → Metrics DB → [Grafana Dashboard]**.

### 베스트 프랙티스
- **유지보수성** — Exporter는 핵심 지표만 담아 가볍게 유지, 필터링·복잡한 수집기가 필요하면 모듈식 설계 고려.
- **설정 가능성** — 플래그나 설정 파일로 런타임에 어떤 지표를 포함/제외할지 지정 가능하게 함.
- **신뢰성** — 오류를 우아하게 처리해 스크랩 도중 Exporter가 크래시하지 않도록 하고, Exporter 자체의 상태(재시작, 예외 등)도 모니터링.
- **보안** — 공개 환경이라면 `/metrics`에 인증이나 TLS를 추가.

## 요약
- 커스텀 Prometheus Exporter는 애플리케이션 내부 지표를 Counter/Gauge/Histogram 같은 Prometheus 타입으로 변환해 `/metrics`에 HTTP로 노출하는 작은 서버이며, Python의 `prometheus_client`로 작성해 Docker로 컨테이너화한 뒤 `scrape_configs`에 Target으로 등록하면 애플리케이션 → Exporter → Prometheus → Grafana로 이어지는 파이프라인을 완성할 수 있고, 이때 경량성·설정 가능성·신뢰성·보안이라는 베스트 프랙티스를 함께 고려해야 한다.
