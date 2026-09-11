# Demonstration: Defining Service-Level Indicators Using Prometheus Metrics (데모 — Prometheus 메트릭으로 SLI 정의)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- 원시 시계열 데이터를 **가용성·오류율·지연 백분위·에러 버짓 소진(burn)** 같은 의미 있는 **SLI(Service Level Indicator)**로 변환하는 PromQL 실습.
- 현대 **SRE 모니터링·SLO 추적** 시스템의 핵심 빌딩 블록.

## 내용 · 예시

### 준비
```bash
cd <project> && source venv/bin/activate && python3 app.py   # 앱 유지 (Prometheus가 계속 스크레이프)
# 두 번째 터미널에서 for 루프로 충분한 트래픽 생성 (200·500 응답 + 지연 히스토그램 채우기)
# localhost:9090 → Expression Browser
```

### SLI 계산 (PromQL)
```promql
# 0) 메트릭 존재 확인 (status=200, status=500 시계열 분리 확인)
app_requests_total

# 1) 트래픽 안정성 확인 — 15분 전체 요청률 (예: 3, 5, 8 req/s면 안정)
rate(app_requests_total[15m])

# 2) 가용성(Availability) = 성공(200)률 / 전체률
rate(app_requests_total{status="200"}[15m]) / rate(app_requests_total[15m])
#    × 100 → 가용성 백분율

# 3) 오류율(Error rate) = 500률 / 전체률 → 실패 비율

# 4) P95 지연 — 15분 버킷 rate를 le 라벨로 합산 후 0.95 분위
histogram_quantile(0.95, sum(rate(app_request_latency_seconds_bucket[15m])) by (le))
```
- **가용성/오류율**: 성공(또는 실패) 요청률을 전체 요청률로 나눠 계산.
- **P95 지연**: 히스토그램 버킷 rate를 **`le` 라벨로 그룹 합산** 후 `histogram_quantile(0.95, ...)` — 프로덕션 표준 패턴.
- 또한 정의된 SLO 대비 **번 레이트(burn rate)**를 평가해 실제 신뢰성 영향 이해.

## 요약
- 메트릭 수집만으로는 부족하며, PromQL로 **가용성·오류율·P95 지연·에러 버짓 번 레이트** SLI를 도출해야 한다.
- 가용성/오류율은 **비율 나눗셈**, P95는 **`le`별 버킷 rate 합산 + `histogram_quantile`**로 계산한다.
- 이 패턴들이 프로덕션의 **대시보드·경고·SRE 의사결정**을 구동한다.
