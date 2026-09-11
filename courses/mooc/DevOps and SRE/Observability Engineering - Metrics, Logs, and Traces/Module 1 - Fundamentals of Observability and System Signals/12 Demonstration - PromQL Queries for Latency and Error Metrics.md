# Demonstration: PromQL Queries for Latency and Error Metrics (데모 — 지연·오류 메트릭용 PromQL 쿼리)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- 원시 메트릭을 **트래픽 비율·오류 비율·백분위 지연** 같은 의미 있는 신호로 바꾸는 **PromQL** 쿼리를 Prometheus Expression Browser에서 실습한다.

## 내용 · 예시

### 준비
```bash
python3 app.py        # 앱 실행 (8001 서비스, 8000 메트릭)
# 두 번째 터미널에서 루프로 트래픽 생성 (200 성공 + 500 실패 + 지연 샘플 → 히스토그램 버킷 채움)
# 브라우저 localhost:9090 → Expression Browser
```
> `rate`, `histogram_quantile` 같은 함수는 **실제 메트릭 샘플(신선한 데이터)**이 있어야 값이 계산됨.

### PromQL 쿼리 패턴
```promql
# 1) 원시 카운터 (method·endpoint·status 라벨로 여러 시계열)
app_requests_total

# 2) 요청률 (초당) — 카운터의 증가 속도 → 실시간 처리량
rate(app_requests_total[1m])

# 3) 초당 실패 요청 (status=500 필터) → 직접적 오류 신호
rate(app_requests_total{status="500"}[1m])

# 4) 오류 비율 (실패율 ÷ 전체율) → 0~1 값, 높을수록 실패 비중 큼
rate(app_requests_total{status="500"}[1m]) / rate(app_requests_total[1m])
#    × 100 하면 백분율 → 실용적 오류 SLI

# 5) 지연 히스토그램 버킷 확인 (버킷 경계별 시계열)
app_request_latency_seconds_bucket

# 6) 백분위 계산은 rate가 필요 (원시 누적 카운터 아님)
rate(app_request_latency_seconds_bucket[1m])

# 7) P95 지연 — 95%의 요청이 완료되는 응답 시간 (대표적 성능 SLI)
histogram_quantile(0.95, rate(app_request_latency_seconds_bucket[1m]))
```

### 핵심 개념
- **`rate()`**: 카운터의 증가 속도 → 누적 값을 **실시간 처리량/비율**로 변환.
- **오류 비율 = 실패율 / 전체율** → 백분율로 추적하면 **오류 SLI**.
- **`histogram_quantile()`**: 버킷 rate로부터 **백분위(P95 등)** 지연 계산 → 사용자 경험 측정·슬로다운 조기 탐지.

## 요약
- 메트릭 노출은 첫 단계일 뿐, 진짜 가치는 **PromQL로 의미 있는 신호를 도출**하는 데 있다.
- 핵심 패턴: **`rate`(처리량·오류율), 오류 비율(백분율), `histogram_quantile`(P95 지연)**.
- 이 쿼리 패턴들이 **프로덕션 대시보드·경고 규칙·SLO 추적**의 기반이 된다.
