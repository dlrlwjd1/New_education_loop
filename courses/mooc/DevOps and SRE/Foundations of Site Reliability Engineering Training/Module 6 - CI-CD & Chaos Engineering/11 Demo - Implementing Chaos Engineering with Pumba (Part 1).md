# Demo: Implementing Chaos Engineering with Pumba - Part 1 (데모 — Pumba로 카오스 엔지니어링 구현 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **Pumba**로 결함을 주입해 컨테이너 기반 애플리케이션의 회복력을 검증하는 데모(1부: 환경 설정 + Flask 앱 프로젝트 구조 시작).
- 도구: Linux 터미널, Nano. 사전 요구: 기본 Linux 지식, EC2 인스턴스.

## 내용 · 예시 (절차)

### 1. 환경 설정
```bash
sudo yum update -y
sudo yum install -y docker
sudo service docker start          # Docker 서비스 시작
sudo systemctl enable --now docker # 활성화
sudo docker info                   # Docker 정보 확인
sudo docker images                 # 이미지 확인 (신규 설치 → 없음)
sudo usermod -aG docker ec2-user   # Docker 권한 부여
sudo newgrp docker                 # docker 그룹 생성
docker --version

# Docker Compose 설치
sudo curl -L "<docker-compose-1.9-url>" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose   # 실행 권한
docker-compose --version
# (데모 지시) 최신 Docker의 BuildKit 등 특정 기능 비활성화 — 이 데모에서는 미사용
```

### 2. Flask 앱 프로젝트 구조
```bash
mkdir chaos-lab && cd chaos-lab
mkdir flask_app
sudo nano flask_app/app.py         # Python 앱 작성 (들여쓰기 민감 → notepad로 정리 후 붙여넣기)
```

## 요약
- EC2에 **Docker·Docker Compose** 설치·활성화, `ec2-user`에 Docker 권한 부여.
- 데모 지시대로 최신 Docker 일부 기능(BuildKit 등) 비활성화.
- `chaos-lab/flask_app/` 구조 생성 후 **app.py** 작성 시작. (다음: Docker·Compose·Pumba 설정 + 빌드·실행 — Part 2)
