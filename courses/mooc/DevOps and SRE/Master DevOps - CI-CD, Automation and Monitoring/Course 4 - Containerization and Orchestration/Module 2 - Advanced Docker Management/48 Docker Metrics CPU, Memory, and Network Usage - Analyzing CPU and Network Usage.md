# Docker Metrics CPU, Memory, and Network Usage - Analyzing CPU and Network Usage

## 개요
- Prometheus/cAdvisor 없이 `docker stats` 같은 순수 Docker 명령으로 컨테이너 리소스 통계를 확인하기 위해, Nginx와 MySQL 두 컨테이너를 준비하는 실습.

## 내용
### 사전 준비
```bash
systemctl status docker   # active 확인
mkdir docker-metrics
cd docker-metrics
```

### 이미지 준비
```bash
docker pull nginx:latest    # 이미 있으면 "Image is up to date"
docker pull mysql:latest    # 새로 다운로드
docker images
```

### Nginx 웹 컨테이너 실행
```bash
docker run -d --name web-container -p 80:80 nginx
```
- 포트를 80으로 지정한 이유: 이후 cAdvisor를 별도로(포트 8080) 직접 띄워 확인할 예정이라 겹치지 않도록 함.
```bash
docker ps -a   # 컨테이너 실행 확인
```

### MySQL 데이터베이스 컨테이너 실행
```bash
docker run -d --name db-container \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=test_db \
  mysql:latest
```
- **`-e`(환경 변수)** — MySQL은 `MYSQL_ROOT_PASSWORD`(루트 비밀번호)를 반드시 지정해야 컨테이너가 정상적으로 시작됨.
- `MYSQL_DATABASE=test_db` — 컨테이너 시작 시 자동으로 `test_db`라는 데이터베이스 생성.
```bash
docker ps -a   # 두 컨테이너(web-container, db-container) 모두 Up 상태 확인
```

## 요약
- Prometheus·cAdvisor를 거치지 않고 순수 Docker 명령(`docker stats` 등)으로 리소스 통계를 확인하는 실습을 위해, Nginx(포트 80)와 MySQL(환경 변수로 루트 비밀번호·초기 데이터베이스 지정) 두 컨테이너를 준비했다.
