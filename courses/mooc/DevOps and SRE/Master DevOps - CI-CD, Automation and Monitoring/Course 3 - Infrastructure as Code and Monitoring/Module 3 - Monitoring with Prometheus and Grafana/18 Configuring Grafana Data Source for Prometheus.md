# Configuring Grafana Data Source for Prometheus

## 개요
- Grafana에 Prometheus를 데이터 소스로 등록하고, 대시보드를 직접 만들거나 미리 만들어진 대시보드를 가져와(import) 사용하는 실습.

## 내용
### 데이터 소스 등록
1. Prometheus와 Grafana가 같은 서버에 설치되어 있는 상태에서 진행.
2. Grafana **Connections → Data Sources → Add data source** → **Prometheus** 선택.
3. Prometheus 서버 URL 입력 — 같은 서버에서 실행 중이므로 `http://<서버 IP>:9090` 형태로 입력(예: `http://34.203.243.xx:9090`).
4. **Save & Test** 클릭 → "Successfully queried the Prometheus API" 메시지로 연결 확인.

### 대시보드 만들기 — Import 방식
1. **Dashboards → New → Import**.
2. 커뮤니티에서 공개된 대시보드 ID 입력(예: `14513`, Node Exporter Full 계열 대시보드) → **Load**.
3. 데이터 소스로 Prometheus 선택 → **Import**.
4. 서버 사용량(CPU, 메모리 등)을 보여주는 완성된 대시보드가 즉시 생성됨.

### 대시보드 만들기 — 수동 생성 방식
1. **New dashboard → Add visualization** → 데이터 소스로 Prometheus 선택.
2. Panel Options에서 이름을 `node-memory-usage`로 지정, 나머지 옵션은 기본값 유지.
3. 쿼리에 `node_memory_Active_bytes` 입력 후 실행(Run query) → 메모리 사용량 그래프 확인.

## 요약
- Grafana의 Connections → Data Sources에서 Prometheus 서버 URL을 등록해 연결을 검증한 뒤, 커뮤니티 대시보드 ID로 미리 만들어진 대시보드를 Import하거나 `node_memory_Active_bytes` 같은 PromQL 쿼리로 패널을 직접 만들어 대시보드를 구성할 수 있다.
