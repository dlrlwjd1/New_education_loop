# Demonstration: Scraping Metrics from a Sample Application (데모 — 샘플 애플리케이션 메트릭 스크레이핑)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- Prometheus가 샘플 앱을 올바르게 스크레이프하는지 검증하고, **내장 스크레이프·타깃 상태 메트릭**을 조사하며, **장애를 시뮬레이션**해 Prometheus가 다운·복구를 어떻게 탐지하는지 관찰한다.

## 내용 · 예시

### 준비
```bash
cd <project> && source venv/bin/activate && python3 app.py
# localhost:9090 → Status → Targets → application1 "UP" 확인
```

### 내장 스크레이프/상태 메트릭
```promql
up                                        # 가장 기본 메트릭. job별 시계열, 1=성공, 0=실패 (모든 타깃에 자동 생성)
scrape_duration_seconds{job="application1"}   # 스크레이프 소요 시간
scrape_samples_scraped{job="application1"}    # 스크레이프당 수집된 메트릭 수 (0이면 아무것도 못 받음)
up{job="application1"}                     # 라벨 구조: job(논리 그룹) + instance(실제 엔드포인트, 예 localhost:8000)
```
- **`job`** = Prometheus 설정에서 정의한 논리적 그룹, **`instance`** = 실제 스크레이프되는 엔드포인트. 이 라벨 모델이 Prometheus 아키텍처의 근본.

### 장애·복구 시뮬레이션
1. 터미널 1에서 앱 중지(**Ctrl+C**) → 약 20초 대기(다음 스크레이프).
2. `up{job="application1"}` → **0**, Targets에서 **down** 표시.
3. `python3 app.py`로 재시작 → 20초 대기 → `up` → **1**, 상태 **up**으로 복귀 → **스크레이프 복구** 확인.
4. `scrape_samples_scraped`(다운 시 하락), `scrape_duration_seconds`(재시작 시 변화) 관찰.
5. **Graph 뷰**에서 `up`: 1 → 0(장애) → 1(복구) 타임라인 시각화.

### 스크레이프 주기·내부 저장 메트릭
- `prometheus.yml` 상단 **`scrape_interval: 15s`** — 15초마다 메트릭 수집.
- 내부 TSDB 메트릭:
  - **head series** — 메모리에 저장 중인 활성 시계열 수.
  - **head chunks** — 메모리 내 데이터 청크 수.
  - → 저장 동작·확장 특성 이해.

## 요약
- **`up` 메트릭**(1/0)으로 타깃 상태를 확인하고, **`scrape_duration_seconds`·`scrape_samples_scraped`**로 스크레이프 성능·볼륨을 본다.
- 앱을 멈췄다 재시작하면 `up`이 1→0→1로 변하며 **장애·복구가 자동 탐지·기록**된다.
- **job/instance 라벨**, **scrape_interval(15초)**, **TSDB head series/chunks**로 Prometheus의 발견·스크레이프·저장 동작을 이해한다.
