# Demo: Setting up Prometheus and Grafana for Monitoring - Part 1 (데모 — Prometheus·Grafana 모니터링 설정 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 2: Error Budgets & Observability

## 개요
- **Docker Compose**로 Prometheus와 Grafana를 세워 시스템 메트릭을 모니터링하는 데모(1부): 환경 설정 → 설정 파일 작성 → 스택 기동.
- 도구: EC2 Linux 터미널, nano, Bash, Prometheus, Grafana.

## 내용 · 예시 (절차)

### 1. Docker 설치·시작
```bash
sudo yum install docker
sudo service docker start
sudo docker info               # 실행 확인
# Docker Compose 설치 (curl로 다운로드)
sudo chmod +x <docker-compose>  # 실행 권한
```

### 2. 작업 디렉터리·설정 파일
```bash
mkdir SRE-Foundations/lab3-monitoring
cd SRE-Foundations/lab3-monitoring
```
- **prometheus.yml** 작성 (YAML은 **들여쓰기 민감** — global/scrape_interval 15s, scrape_configs):
```bash
sudo nano prometheus.yml   # 워크북 내용 붙여넣기, 들여쓰기 주의 → Ctrl+O, Ctrl+X
```
- **docker-compose.yml** 작성 (들여쓰기 조정 필요):
  - **Prometheus** 이미지 → 컨테이너명 prometheus, 볼륨 설정, 포트 **9090**.
  - **Grafana** 이미지 → 컨테이너명 grafana, 포트 **3000**.

### 3. 스택 기동
```bash
sudo docker-compose up -d      # 이미지 pull + 백그라운드 실행
sudo docker ps                 # Prometheus(9090)·Grafana(3000) 컨테이너 실행 확인
```
- Docker Compose를 쓰는 이유: **스택을 쉽게 한 번에** 올리기 위함.

## 요약
- **Docker + Docker Compose**로 Prometheus(9090)·Grafana(3000) 스택을 세운다.
- **prometheus.yml**(scrape 설정, 들여쓰기 민감)과 **docker-compose.yml**(두 서비스 정의)을 작성.
- `docker-compose up -d`로 기동하고 `docker ps`로 확인. (다음: Grafana 데이터 소스·대시보드 — Part 2)
