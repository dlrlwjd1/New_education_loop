# Creating Dashboards for Docker Containers in Grafana - Adding Metrics to the Dashboard

## 개요
- Grafana에 Prometheus 데이터 소스를 컨테이너 이름으로 연결하고, 미리 만들어진 대시보드를 가져오는 대신 처음부터 직접 패널(Panel)을 만들어 PromQL 쿼리로 지표를 추가하는 실습.

## 내용
### 데이터 소스 추가
- **Connections → Data Sources → Add data source → Prometheus**.
- 이름: `docker-prometheus`.
- **URL**: `http://prometheus:9090` — 컨테이너 이름(`prometheus`)을 그대로 사용 가능한 이유는, Docker Compose가 만드는 커스텀 네트워크에 **DNS 해석 기능이 내장**되어 있어 같은 네트워크의 컨테이너끼리는 이름으로 서로를 찾을 수 있기 때문(IP 주소를 몰라도 됨).
- 나머지 인증·TLS 설정은 변경하지 않고 **Save & Test** → "Successfully queried the Prometheus API" 확인.

### 커스텀 대시보드 생성 (Import 대신 직접 제작)
1. **Dashboards → New → New dashboard → Add visualization**.
2. **데이터 소스 선택** — 여러 데이터 소스가 있다면 목록에서 선택 가능, 이번엔 유일한 소스인 `docker-prometheus` 선택.
3. **쿼리(Query A) 추가** — Query A는 `docker-prometheus`에 요청을 보내고 그 결과를 패널에 표시.
4. **Metric 선택** — 드롭다운에서 지표 이름을 직접 입력: `container_cpu_usage_seconds_total`.
5. **Run query** 클릭 → 컨테이너별 CPU 사용량 추이가 라인 그래프로 표시(서버가 방금 켜졌으므로 데이터 구간은 아직 짧음, 예: 18분 정도의 uptime).

### 대시보드 저장
- **Save dashboard** → 이름 지정(예: "Container CPU Usage") → 저장.
- 이후 **Dashboards** 목록에서 해당 대시보드를 찾아 **View**로 다시 열람 가능.

### 추가 대시보드/패널 만들기
- **Dashboards → New → New dashboard → Add visualization**을 반복해 다른 지표(예: 메모리 사용량 등)에 대한 패널을 추가로 생성 가능 — 데이터 소스는 동일하게 `docker-prometheus` 선택 후 원하는 Metric을 지정.

## 요약
- Grafana의 Prometheus 데이터 소스는 컨테이너 이름(`http://prometheus:9090`)으로 간단히 연결할 수 있으며, 미리 만들어진 대시보드를 Import하는 대신 **New dashboard → Add visualization**으로 직접 패널을 만들어 `container_cpu_usage_seconds_total` 같은 PromQL 지표를 쿼리하고 이름을 붙여 저장하면 커스텀 대시보드를 완성할 수 있다.
