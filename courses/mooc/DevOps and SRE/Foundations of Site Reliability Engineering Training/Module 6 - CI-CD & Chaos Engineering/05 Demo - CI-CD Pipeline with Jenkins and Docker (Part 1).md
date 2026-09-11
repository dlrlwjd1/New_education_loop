# Demo: Setting up CI/CD Pipeline with Jenkins and Docker - Part 1 (데모 — Jenkins·Docker CI/CD 파이프라인 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **Amazon Linux 2 EC2**에서 **Jenkins + Docker**로 간단한 Flask 앱의 빌드·테스트·배포를 자동화하는 CI/CD 파이프라인 데모(1부: 환경 설정 + Flask 앱 준비 + Docker Compose로 Jenkins 기동).
- 사전 요구: EC2 인스턴스, 기본 Linux 지식, Git.

## 내용 · 예시 (절차)

### 1. 환경 설정
```bash
sudo yum update -y
sudo yum install -y git
sudo yum install -y docker
sudo systemctl enable --now docker        # Docker 서비스 활성화 + 즉시 실행
sudo usermod -aG docker ec2-user          # (선택) sudo 없이 docker 실행
sudo newgrp docker                        # docker 그룹 생성/적용
docker --version
docker images                             # 아직 이미지 없음

# Docker Compose 설치 (GitHub 릴리스에서 다운로드)
sudo curl -L "<docker-compose-url>" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose   # 실행 권한 부여
docker-compose version
```

### 2. Flask 앱 프로젝트 준비
```bash
mkdir cicd-lab-flask-app && cd cicd-lab-flask-app
# app.py (Flask 앱) — Python은 들여쓰기 민감! nano/notepad로 형식 수정
# requirements.txt — Flask
# Dockerfile — (확장자 없음, 대문자 D) 이미지 빌드 정의
# docker-compose.yml — Jenkins 서비스 정의 (YAML 들여쓰기 민감!)
ls   # app.py  requirements.txt  Dockerfile  docker-compose.yml
```
> **들여쓰기 민감**: `app.py`(Python)·`docker-compose.yml`(YAML). 민감하지 않음: `requirements.txt`·`Dockerfile`.

### 3. docker-compose.yml (Jenkins 컨테이너)
- 핵심 설정: `image`(Jenkins), `restart: unless-stopped`, 포트 **8080**(웹 UI)·**50000**(에이전트), 볼륨 `jenkins_home`, `/var/run/docker.sock` 마운트(컨테이너에서 Docker 제어).

### 4. 컨테이너 기동
```bash
docker-compose up -d          # 이미지 다운로드 → 컨테이너 생성·백그라운드 실행
docker ps                     # Jenkins 컨테이너 실행 확인
docker-compose ps             # 동일 정보
```

## 요약
- EC2에 **Git·Docker·Docker Compose** 설치, Docker 서비스 활성화.
- **Flask 앱 4파일**(app.py·requirements.txt·Dockerfile·docker-compose.yml) 준비, Python/YAML 들여쓰기 주의.
- **`docker-compose up -d`**로 Jenkins 컨테이너를 8080/50000 포트로 기동. (다음: GitHub 토큰·Jenkins 초기 설정 — Part 2)
