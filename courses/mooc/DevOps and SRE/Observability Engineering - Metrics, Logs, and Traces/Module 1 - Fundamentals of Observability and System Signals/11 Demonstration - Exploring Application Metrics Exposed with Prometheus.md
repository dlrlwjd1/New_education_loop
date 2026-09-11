# Demonstration: Exploring Application Metrics Exposed with Prometheus (데모 — Prometheus로 애플리케이션 메트릭 탐색)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- **Prometheus 메트릭을 노출하는 Python HTTP 서비스**를 만들고, 트래픽을 생성해 **요청률·오류율·지연**을 Prometheus에서 분석하는 데모.
- CPU·메모리를 넘어 **애플리케이션 동작**(요청량, 오류율, 응답 지연) 가시성 확보.

## 내용 · 예시 (절차)

### 1. 환경 준비
```bash
sudo systemctl status prometheus     # Prometheus 실행 확인
sudo apt update
sudo apt install python3-venv -y      # 가상환경으로 의존성 격리
cd ~ && mkdir app_metrics && cd app_metrics
python3 -m venv venv && source venv/bin/activate
pip install --upgrade pip
pip install prometheus_client         # 앱이 Prometheus 형식으로 메트릭 노출
# 포트 8000, 8001 미사용 확인
```

### 2. 애플리케이션 (app.py) — 두 가지 메트릭
- **Counter `app_requests_total`**: HTTP 요청 수 (라벨: method, endpoint, status).
- **Histogram `app_request_latency_seconds`**: 요청 지연 측정.
- **포트 8000**: `start_http_server`로 **/metrics 엔드포인트** 노출.
- **포트 8001**: 들어오는 요청 처리 — 처리 시간 시뮬레이션, 가끔 **500 오류** 반환(현실적 불안정성 모방), 지연을 히스토그램에 기록, 카운터 증가.
```bash
python3 app.py   # 8001에서 실행, 8000에서 메트릭 노출
```

### 3. 트래픽 생성·메트릭 확인
```bash
curl localhost:8001            # 단일 요청 (성공 또는 시뮬레이션된 500)
# 반복 루프로 다수 요청 → 의미 있는 데이터 생성
curl localhost:8000/metrics    # /metrics 도달 확인, app_request_* 존재 확인
```

### 4. Prometheus 스크레이프 설정
- `prometheus.yml`의 `scrape_configs`에 잡 **`application1`** 추가, 타깃 `localhost:8000`.
```bash
sudo systemctl restart prometheus
# localhost:9090 → Status → Targets → prometheus, application1 모두 "up" 확인
```

### 5. PromQL 조회
```promql
app_requests_total                      # 누적 요청 수
rate(app_requests_total[...])           # 초당 요청 수 (카운터 → 비율)
# status=500 필터로 오류율
app_request_latency_seconds_bucket      # 히스토그램 버킷으로 지연 분석
```

## 요약
- Python 앱을 만들어 **Counter(요청 수)·Histogram(지연)** 메트릭을 `/metrics`(포트 8000)로 노출하고, Prometheus가 스크레이프하도록 설정했다.
- **요청량·오류율·지연**을 실시간 PromQL로 분석 → 원시 런타임 동작을 **측정 가능한 관찰 신호**로 변환.
- 트래픽 패턴·실패·성능 추세 가시성은 신뢰성 있는 프로덕션 시스템의 **선제적 모니터링**에 필수다.
