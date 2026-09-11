# Demonstration: Using PromQL for Aggregation and Filtering (데모 — PromQL 집계와 필터링)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- **차원(dimensionality) 제어, 라벨 집계·필터링, 카디널리티(cardinality) 추론** 등 실전 PromQL 기법을 실습한다.
- `sum, by, without, rate, count, topk`, 통계 함수 등으로 시계열을 형태화·분석한다.

## 내용 · 예시

### 준비
```bash
cd <project> && source venv/bin/activate && python3 app.py
# 터미널 2: 연속 curl 루프로 1분 이상 트래픽 생성 (카운터 꾸준히 증가 → rate 안정)
# localhost:9090, Table 뷰
```

### 차원 폭발(Dimensional Explosion)과 집계
```promql
app_requests_total                       # 라벨 조합마다 별도 시계열 (성공/실패 등) → 다차원 설계
sum(app_requests_total)                  # 모든 라벨 제거 → 단일 시계열
sum(app_requests_total) by (status)      # status별 1줄 (지정 라벨만 유지)
sum(app_requests_total) without (instance)  # 특정 라벨만 제거 (by의 반대) → 차원 추론
```

### rate + 집계
```promql
sum(rate(app_requests_total[10m])) by (status)   # 성공 vs 실패 비율
sum(rate(app_requests_total[10m]))               # 단일 총 처리량 (프로덕션 대시보드 패턴)
```

### 라벨 필터링
```promql
app_requests_total{status="500"}         # 실패만
app_requests_total{status!="500"}        # 실패 아닌 것
app_requests_total{status=~"5.."}        # 정규식 — 모든 5xx
app_requests_total{status!~"5.."}        # 부정 정규식 — 5xx 제외
```

### count·랭킹·통계·중첩·카디널리티
```promql
count(app_requests_total)                # 시계열 개수 (카디널리티 증가 조기 탐지)
count(app_requests_total) by (status)
topk(1, rate(app_requests_total[...]))   # 최고 요청률 시계열 (핫스팟 식별)
max(rate(app_request_latency_seconds_bucket[...]))   # 통계 집계
avg(...)
# 중첩 집계: status로 그룹 후 다시 집계 (recording rule·대시보드에서 흔함)
# 전체 활성 시계열 수 조회 → 메모리 사용 가시성 (고카디널리티는 자원 소모 증가)
```

## 요약
- Prometheus 메트릭은 **다차원(라벨 조합마다 시계열)**이며, **`sum ... by / without`**로 차원을 제어한다.
- **필터링**: `=`, `!=`, `=~`(정규식), `!~`; **집계**: `sum·count·max·avg·topk`; **rate + 집계**로 처리량·오류율.
- **카디널리티 인식**이 프로덕션에서 중요 — 고카디널리티는 자원 소모를 늘리므로 시계열 수를 모니터링한다. (모듈 1 완료)
