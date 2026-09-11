# Using Prometheus to Query and Visualize Docker Metrics - Visualizing Docker Metrics with Prometheus, cAdvisor, and Grafana Dashboards

## 개요
- Prometheus·cAdvisor·Grafana 3종 스택을 배포하고, Grafana에 로그인해 Prometheus를 데이터 소스로 등록하는 실습.

## 내용
### 3종 스택의 역할 분담
- **cAdvisor** — 데이터 수집(Data Capturing).
- **Prometheus** — 데이터 저장·수집(Data Collection/Storage).
- **Grafana** — 데이터 시각화(Data Visualization).

### 스택 배포
```bash
vi docker-compose.yaml   # Prometheus + cAdvisor + Grafana 정의(이전 강의 내용)
cat prometheus.yaml       # cAdvisor를 Target으로 정의한 설정 파일 존재 확인
docker-compose up -d
```
- Prometheus, cAdvisor, Grafana 이미지를 차례로 pull한 뒤 네트워크와 세 컨테이너를 생성.
```bash
docker images   # 세 이미지 확인
docker ps -a     # 세 컨테이너 모두 Up 상태 확인
```

### 각 UI 접근 확인
- Prometheus: `http://<IP>:9090` → Targets에서 cAdvisor `UP` 확인.
- cAdvisor: `http://<IP>:8080`.
- **Grafana: `http://<IP>:3000`**(Grafana 기본 포트) — 이번 실습의 핵심.

### Grafana 로그인
- 초기 계정: **`admin` / `admin`**(Compose 파일의 환경 변수로 설정한 값).
- 로그인 후 비밀번호 변경 요구가 뜨면 이번 실습에서는 스킵 가능.

### Prometheus를 Grafana의 데이터 소스로 추가
1. **Add your first data source** 클릭 → **Prometheus** 선택(그 외 Graphite, InfluxDB, OpenTSDB, Loki, Jaeger, Zipkin 등 다양한 데이터 소스 지원).
2. 이름 지정(예: `docker-prometheus`).
3. **URL** — 컨테이너 이름을 그대로 사용: `http://prometheus:9090`(Docker Compose 네트워크의 DNS 덕분에 컨테이너 이름이 곧 호스트 이름 역할).
4. 나머지 옵션(인증, TLS, HTTP 헤더 등)은 기본값 유지, 스크롤해 **Save & Test** 클릭 → **"Successfully queried the Prometheus API. You can start building your dashboards."** 메시지로 연결 확인.

## 요약
- cAdvisor(수집)·Prometheus(저장)·Grafana(시각화) 3종 스택을 Docker Compose로 배포한 뒤, Grafana에 `admin`/`admin`으로 로그인하고 Data Source로 Prometheus를 추가할 때 URL을 컨테이너 이름(`http://prometheus:9090`)으로 지정해 연결을 검증하면 대시보드 구축을 시작할 준비가 완료된다.
