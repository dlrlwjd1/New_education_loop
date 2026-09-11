# Integrating Prometheus and Grafana for Jenkins CI-CD Pipelines - Demonstration

## 개요
- Jenkins, Prometheus, Grafana를 한 서버에 모두 설치한 뒤, Jenkins 빌드 지표를 Prometheus로 수집하고 Grafana 대시보드로 시각화하는 실습.

## 내용
### Prometheus 설정에 Jenkins Job 추가
```bash
sudo nano /etc/prometheus/prometheus.yml
```
```yaml
scrape_configs:
  - job_name: 'jenkins'
    metrics_path: '/prometheus'
    static_configs:
      - targets: ['<서버 IP>:8080']   # Jenkins 포트
```
- EC2 인스턴스를 재시작해 IP가 바뀐 경우, 설정 파일의 `targets` IP를 최신 IP로 갱신해야 함.
```bash
sudo systemctl restart prometheus
```

### Jenkins Prometheus 플러그인 확인
- **Manage Jenkins → Plugins → Installed/Available plugins**에서 **Prometheus metrics plugin**이 설치·활성화되어 있는지 확인(없으면 Available plugins에서 검색해 설치).
- `prometheus.yml`에 이미 metrics 경로(`/prometheus`)를 설정했으므로 Jenkins 쪽에서 추가로 변경할 필요는 없음.

### Prometheus에서 확인
- Prometheus Web UI → **Status → Targets**에서 `jenkins`, `node_exporter`, `prometheus` 세 Job이 모두 **UP** 상태인지 확인 — 레이블(label)에서 지표가 스크랩되는 경로도 확인 가능.
- **Graph** 탭에서 `default_jenkins_last_build_duration_milliseconds` 같은 쿼리를 실행해 Jenkins 빌드 지속 시간(duration) 지표를 조회.

### Grafana에서 데이터 소스 등록 및 대시보드 생성
1. **Connections → Data Sources → Add data source → Prometheus** → URL 입력(`http://<서버 IP>:9090`) → **Save & Test**로 연결 확인.
2. **Dashboards → New dashboard → Add visualization** → 데이터 소스로 Prometheus 선택.
3. 쿼리 에디터를 Code 모드로 전환해 PromQL 쿼리(`default_jenkins_last_build_duration_milliseconds`) 입력 후 실행.
4. 시각화 타입을 **Time series**가 아닌 **Gauge**로 변경 — 빌드별 소요 시간(밀리초)을 게이지 형태로 확인 가능.
5. 이전 실습과 마찬가지로 이 대시보드에도 알림(Alert)을 구성해 원하는 커뮤니케이션 채널(예: Discord, Slack)로 알림을 받을 수 있음.

## 요약
- Jenkins·Prometheus·Grafana를 한 서버에서 연동하려면 `prometheus.yml`에 Jenkins를 스크랩 대상(Job)으로 추가하고 Jenkins에 Prometheus metrics plugin이 설치돼 있는지 확인한 뒤, Prometheus Targets에서 UP 상태를 확인하고 Grafana에서 Prometheus를 데이터 소스로 등록해 `default_jenkins_last_build_duration_milliseconds` 같은 쿼리로 Jenkins 빌드 지표를 Gauge 등으로 시각화할 수 있다.
