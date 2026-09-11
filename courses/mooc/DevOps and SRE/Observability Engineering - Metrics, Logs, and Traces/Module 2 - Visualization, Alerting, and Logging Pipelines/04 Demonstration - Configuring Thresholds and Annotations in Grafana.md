# Demonstration: Configuring Thresholds and Annotations in Grafana (데모 — Grafana 임계값·주석 구성)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- Grafana 시계열 패널에 **색상 코드 임계값(thresholds)**을 추가하고, 특정 시점 이벤트를 표시하는 **주석(annotations)**을 만드는 데모.

## 내용 · 예시

### 임계값(Thresholds) 추가
1. 대시보드 열기(또는 New dashboard → Add visualization → Prometheus) → 패널 선택/추가.
2. **Query**에서 Prometheus + 쿼리 (예: `node_cpu_seconds_total`) → 시계열 그래프 생성.
3. 패널 편집기 우측 **Field 탭 → Thresholds 섹션 → + Add threshold**.
   - 예: CPU 사용 **값 80** 설정(높은 사용 표시), **색상 = 빨강**.

### 수동 주석(Annotation) 추가
1. 패널 편집 모드에서 **나가기** (우상단 Back to dashboard) — 주석은 **대시보드 뷰**에서 추가.
2. 시계열 그래프 위에서 표시할 시점에 **Ctrl+클릭** (Mac은 **Cmd+클릭**).
3. "Add annotation" 팝업:
   - Description: 예) "high memory usage observed during load test".
   - (선택) Tags: `memory`, `spike`, `test` 등 → 나중에 분류·필터.
   - **Save** → 해당 시점에 주석 표시.

### 저장
- 우상단 **Save dashboard** → 이름(예: "Metrics Dashboard") 입력 후 저장.

## 요약
- **임계값**은 우측 **Field → Thresholds**에서 값·색상으로 설정해 위험 값을 시각적으로 강조한다(예: CPU 80 → 빨강).
- **주석**은 대시보드 뷰에서 **Ctrl/Cmd+클릭**으로 특정 시점에 이벤트를 표시하고 태그로 분류한다.
- 이 기능들이 대시보드를 더 의미 있고 인터랙티브하며 **프로덕션에 적합**하게 만든다.
