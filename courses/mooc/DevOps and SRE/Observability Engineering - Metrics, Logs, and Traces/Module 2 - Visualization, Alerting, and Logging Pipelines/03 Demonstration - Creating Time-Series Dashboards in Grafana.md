# Demonstration: Creating Time-Series Dashboards in Grafana (데모 — Grafana 시계열 대시보드 만들기)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- Grafana에서 **시계열 대시보드**를 만들어 Prometheus에 연결하고, CPU·메모리·디스크·네트워크 메트릭을 시각화하는 데모.

## 내용 · 예시

### 대시보드·패널 생성
1. `http://<server-IP>:3000` 로그인.
2. 좌측 사이드바 **Dashboard 아이콘 → Create Dashboard → Add Visualization** → 데이터 소스로 **Prometheus** 선택.
3. 패널 편집기의 **Query** 섹션에서 Prometheus 데이터 소스 선택 후 쿼리 입력.

### 시각화할 메트릭 (node_exporter)
```promql
node_cpu_seconds_total              # CPU 모드별 총 CPU 시간 → 모드별 시계열 그래프
node_memory_MemAvailable_bytes      # 가용 메모리(바이트) → 사용 증가 시 감소
node_filesystem_avail_bytes         # 마운트된 파일시스템별 가용 디스크 공간
node_network_receive_bytes_total    # 수신 네트워크 트래픽
node_network_transmit_bytes_total   # 송신 네트워크 트래픽
```

### 시각화 커스터마이즈
- **Visualization type**: Time series 그래프, bar chart 등.
- **Axis**: 단위 조정.
- **Legend**: 각 메트릭 라벨(예: CPU의 user/system/idle) 표시 on/off.
- **Stacking**: 총 자원 사용량 시각화 시.
- **Thresholds**: 예를 들어 높은 CPU 사용을 빨간색으로 표시.
- 라인/바 그래프 선택.

### 저장
- 패널 저장 후, 대시보드 이름(예: "System Metrics Dashboard")·설명 지정 → **Save**.

## 요약
- Grafana에서 **Create Dashboard → Add Visualization(Prometheus)**로 패널을 만들고, `node_*` PromQL 쿼리로 **CPU·메모리·디스크·네트워크**를 시계열로 시각화한다.
- **Visualization type·Axis·Legend·Stacking·Thresholds**로 커스터마이즈하고 대시보드를 저장하면 실시간 모니터링 도구가 완성된다.
