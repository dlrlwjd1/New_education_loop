# Demonstration: Enabling ML-Based Anomaly Detection in Grafana (데모 — Grafana ML 기반 이상 탐지 활성화)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- Grafana에서 시스템 메트릭을 시각화하고, **표현식(expression)과 임계값으로 편차(deviation) 기반 이상 탐지**를 적용해 수동 임계값 없이 비정상 CPU 활동을 식별하는 데모.
- 정적 임계값은 미묘한 변화를 놓치거나 불필요한 경고를 냄 → ML 기반 이상 탐지는 과거 패턴을 학습해 이탈을 자동 탐지.

## 내용 · 예시 (절차)

### 1. 스택 기동
```bash
docker run ... prometheus     # 메트릭 수집, localhost UI 확인
docker run ... node_exporter  # 호스트 메트릭(CPU/메모리/디스크), /metrics 엔드포인트 확인
docker run ... grafana        # 시각화, localhost 로그인(admin/admin)
```

### 2. 데이터 소스·패널
- Grafana **Data source → Prometheus** (로컬 주소) → Save & test.
- 새 대시보드 + 패널 → Prometheus 데이터 소스 → CPU 사용 쿼리 (idle 제외로 활성 사용률 계산) → 시계열 그래프.

### 3. 편차(deviation) 기반 이상 로직 (표현식)
- **Query A** — 메인 CPU 사용 메트릭.
- **Expression B** (Math): 입력에 `A` 참조 → A와 동일 (baseline 역할). A와 B가 같아 그래프는 한 줄.
- **Expression C** (Math): `A - B` 계산 → **편차 시계열** 생성. B가 A와 같으면 정상 시 편차 ≈ 0 → baseline 확립, 크게 벗어나면 이상.

### 4. 임계값 설정
- 패널 편집기 우측 **Threshold** 섹션 → 유의미한 편차 값 설정 → 초과 시 Grafana가 시각적으로 강조(비정상 표시).
- **Apply**로 대시보드 저장.

### 5. 이상 생성·관찰
```bash
# 터미널에서 인위적 CPU 부하 생성 → 몇 초 후 Grafana에서 CPU 사용 라인 급등(스파이크)
# 부하 중지 → 정상 상태 복귀 관찰
```
- → 라이브 값을 기대 패턴과 비교해 비정상 동작을 식별하는 방식을 시연.

## 요약
- Prometheus → Grafana 연결 후 CPU 사용 패널을 만들고, **표현식(Math)으로 baseline(B)과 편차(C = A−B)**를 계산해 **임계값**으로 이상을 강조.
- 인위적 CPU 스파이크로 이상이 대시보드에 나타났다 부하 제거 후 정상화되는 것을 관찰.
- 정적 임계값 대신 **기대 패턴 대비 편차**로 미묘한 비정상까지 잡는 접근을 보여준다. (모듈 3 완료)
