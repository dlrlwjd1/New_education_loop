# Demo: Implementing Container Restart Detection and Alerting with Docker - Part 1 (데모 — Docker 컨테이너 재시작 탐지·경고 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- **EC2의 Docker에 Flask 앱을 배포**하고, **자동 재시작을 켠 뒤 컨테이너 재시작 횟수를 추적·표시**하는 데모(1부: 환경 설정 + 프로젝트 구조 + Flask 파일).
- 도구: EC2, Docker/Compose, Flask, **Prometheus**. 인바운드 포트 80·5000·9090 필요.

## 내용 · 예시 (절차)

### 1. Docker·Docker Compose 설치
```bash
sudo yum update -y
sudo yum install -y docker
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
sudo newgrp docker
docker --version
sudo curl -L "<docker-compose-url>" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```

### 2. 프로젝트 구조
```bash
# restart-detect-lab/ 아래 flask_app/ 과 prometheus/ 폴더 생성
cd restart-detect-lab
ls        # flask_app  prometheus
pwd       # /home/ec2-user/restart-detect-lab
```

### 3. Flask 앱 파일
```bash
# app.py는 flask_app/ 안에 생성 (경로 주의 — 강사도 위치 착오)
sudo nano flask_app/app.py           # Python 들여쓰기 민감 → notepad로 정리 후 붙여넣기
cat flask_app/app.py                 # 형식 확인
# requirements.txt (flask_app/ 안, 들여쓰기 불필요)
sudo nano flask_app/requirements.txt # 내용: flask (빌드 시 라이브러리 설치용)
```
> Python 파일은 붙여넣기 시 들여쓰기가 깨지므로 notepad에서 정리 후 넣을 것.

## 요약
- EC2에 **Docker·Compose** 설치·활성화, `ec2-user`에 권한 부여.
- `restart-detect-lab/`에 **flask_app/**, **prometheus/** 구조 생성.
- flask_app/ 안에 **app.py**(들여쓰기 정리)·**requirements.txt** 작성. (다음: Dockerfile·docker-compose·Prometheus 설정 + 빌드·실행 + 재시작 탐지 테스트 — Part 2)
