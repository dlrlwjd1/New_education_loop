# Demo: Setting up Prometheus and Grafana for Monitoring - Part 2 (데모 — Prometheus·Grafana 모니터링 설정 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 2: Error Budgets & Observability

## 개요
- 1부에서 세운 스택으로 **Prometheus·Grafana 인터페이스 접속 → 데이터 소스 연결 → 대시보드·쿼리 작성**을 다루는 데모(2부).

## 내용 · 예시

### Prometheus·Grafana 접속
- **Prometheus**: `http://<public-IP>:9090` → Status → Target health로 타깃 상태 확인.
- **Grafana**: `http://<public-IP>:3000` → 기본 로그인 **admin/admin** → 비밀번호 변경.

### Prometheus 데이터 소스 추가 (Grafana)
- **Connections → Add data source → Prometheus** 선택.
- Connection URL을 Prometheus 위치로 (EC2면 `http://<IP>:9090`, 로컬이면 localhost:9090).
- **Save & test** → "Successfully queried Prometheus API" 확인.

### 대시보드·쿼리 작성
- Dashboards → New dashboard → **Add visualization** → 데이터 소스 Prometheus.
- 제목·설명 지정 후 저장 (Dashboards 폴더에 저장).
- **Run queries** / **Kickstart your query**로 쿼리 실행. 예제 쿼리 (워크북):
  - `prometheus_engine_query_duration_seconds_count{instance="...:9090"}` — 쿼리 지속 시간 카운트.
  - **오류 요청** — `...requests_total{code=~"5.."}` (500대 서버 오류). (HTTP: 200=성공, 400=not found, 500=server error)
  - **메모리** — `process_resident_memory_bytes` (상주 메모리 바이트).
- 여러 쿼리를 **Add query**로 추가해 한 패널에 표시.

## 요약
- **Prometheus(9090)·Grafana(3000)** UI에 접속하고, Grafana에서 Prometheus를 **데이터 소스로 연결(Save & test)**.
- 대시보드를 만들어 PromQL 쿼리(쿼리 지속 시간, `5..` 오류 요청, 메모리 바이트)를 실행·시각화.
- Docker + Prometheus + Grafana로 성능 메트릭을 조회하는 전체 흐름을 완성. (모듈 2 완료)
