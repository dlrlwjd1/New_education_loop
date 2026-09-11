# Demo: Implementing Toil Reduction with Automated Service Recovery Using Shell Script - Part 1 (데모 — 셸 스크립트 자동 서비스 복구로 Toil 감소 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 3: Incident Management & Toil Reduction

## 개요
- 실패한 **Nginx 컨테이너를 감시·재시작하는 셸 스크립트**로 Toil을 감소하고, **Cron으로 스케줄링**해 자가 치유(self-healing)를 구현하는 데모(1부).

## 내용 · 예시 (절차)

### 1. Docker·Docker Compose 준비
```bash
sudo yum install docker && sudo service docker start
docker --version
# Docker Compose: curl로 다운로드 → sudo chmod +x <compose> → docker-compose version
sudo usermod -aG docker ec2-user      # EC2 사용자 권한
# 인스턴스 재부팅(권장) 후 재접속
```

### 2. Nginx 컨테이너 실행
```bash
sudo docker pull nginx:latest
docker run -d --name nginx -p 8080:80 nginx:latest   # host 8080 → docker 80
docker ps
curl localhost:8080     # "Welcome to nginx" 확인 (curl -i로 상태·헤더도)
```

### 3. 자동 복구 스크립트 작성
```bash
mkdir SRE-Foundations/lab-toil && cd SRE-Foundations/lab-toil
sudo nano check_nginx.sh   # 워크북 스크립트 붙여넣기 → Ctrl+O, Ctrl+X
sudo chmod +x check_nginx.sh   # 실행 권한
cat check_nginx.sh
```
- 스크립트: Nginx 컨테이너 실행 여부 확인 → 안 돌면 재시작 → **로그(nginx auto-recovery log)** 기록.

### 4. 수동 테스트·장애 시뮬레이션
```bash
./check_nginx.sh            # 로그: "nginx is running"
docker stop nginx           # 장애 시뮬레이션
curl localhost:8080         # 다운 확인
./check_nginx.sh            # 로그: "WARNING nginx not running, attempting recovery" → "INFO nginx started successfully"
docker ps                   # 컨테이너 재시작 확인
curl localhost:8080         # 다시 "Welcome to nginx"
```

## 요약
- **Nginx 컨테이너**를 8080에 실행하고, **`check_nginx.sh`** 스크립트로 실행 여부 확인·자동 재시작·로그 기록을 구현.
- `docker stop`으로 장애를 만들고 스크립트를 실행하면 **자동 복구**되어 서비스가 되살아남 → 수동 대응(Toil) 제거.
- (다음: Cron 스케줄링으로 지속적 자가 치유 — Part 2)
