# Creating Dashboards for Docker Containers in Grafana - Setting Up Environment

## 개요
- 커스텀 대시보드를 직접 만들기 위해 Prometheus·cAdvisor·Grafana 스택을 다시 배포하고, Grafana에 Prometheus 데이터 소스를 추가하는 준비 과정.

## 내용
### 사전 준비
```bash
systemctl status docker   # 설치는 되어 있으나 로드되지 않은 상태라면
systemctl start docker
systemctl enable docker     # 재부팅 후에도 지속되도록 설정
systemctl status docker     # active (running) 확인
docker compose version
```

### 설정 파일 작성 (이전 세션과 동일한 3종 스택)
```bash
vi docker-compose.yml   # Prometheus + cAdvisor + Grafana 정의
vi prometheus.yml        # scrape_interval, job(prometheus), job(cadvisor:8080) 정의
```

### 스택 배포
```bash
docker-compose up -d
docker ps -a   # 세 컨테이너(Grafana, cAdvisor, Prometheus) 모두 Up/healthy 확인
```

### 각 UI 접근 확인
- Prometheus: `http://<IP>:9090` → **Status → Targets**에서 두 Target 모두 `UP` 확인.
- cAdvisor: `http://<IP>:8080`.
- Grafana: `http://<IP>:3000` → `admin`/`admin` 로그인(비밀번호 변경은 스킵 가능).

### 데이터 소스 추가 준비
- 로그인 후 Grafana 홈 화면에 **"Add your first data source"** 안내 표시 — 이번 실습(이전에도 다룬 절차)에서는 **Data Sources → Add data source → Prometheus 선택 → URL 입력 → Save & Test**로 이어짐.

## 요약
- 커스텀 Grafana 대시보드를 만들기 전 단계로 Prometheus·cAdvisor·Grafana 3종 스택을 다시 `docker-compose up -d`로 배포하고, 각 서비스의 UI(9090/8080/3000)가 정상 동작하는지 확인한 뒤 Grafana에서 Prometheus를 데이터 소스로 추가할 준비를 마쳤다.
