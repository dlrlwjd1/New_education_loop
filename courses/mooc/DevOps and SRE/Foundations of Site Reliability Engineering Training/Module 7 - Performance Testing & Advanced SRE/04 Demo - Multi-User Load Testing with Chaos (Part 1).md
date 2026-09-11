# Demo: Multi-User Load Testing with Chaos - Part 1 (데모 — 카오스 환경에서 다중 사용자 부하 테스트 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- **Docker의 Flask 앱**에 **Pumba로 무작위 컨테이너 재시작(카오스)**을 주입하고, **Locust로 다중 사용자 부하 테스트**를 수행해 회복력·복구 시간·동시 부하 하 동작을 관찰하는 데모(1부: 환경 설정 + 프로젝트 파일).
- 도구: EC2, Docker/Compose, Flask, **Pumba**(카오스), **Locust**(부하 테스트). 인바운드 포트 80·5000·8089 필요.

## 내용 · 예시 (절차)

### 1. Docker·Docker Compose 설치
```bash
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user
docker --version
sudo curl -L "<docker-compose-url>" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### 2. Flask 앱 프로젝트 준비
```bash
mkdir restart-test-lab && cd restart-test-lab
mkdir flask_app_test
sudo nano flask_app_test/app.py            # Python (들여쓰기 민감 → notepad 정리)
sudo nano flask_app_test/requirements.txt  # 내용: flask
sudo nano flask_app_test/Dockerfile        # 대문자 D, 확장자 없음, 들여쓰기 불필요
#   FROM python → WORKDIR → COPY requirements.txt → pip install flask → COPY app.py → CMD app 실행
sudo nano docker-compose.yaml              # flask_app_test 상위에 위치, YAML 들여쓰기 민감!
#   flask_app + Pumba(latest 이미지) 서비스 정의
```
> 들여쓰기 민감: **YAML·Python**만. Dockerfile·requirements.txt는 불필요.

## 요약
- EC2에 **Docker·Compose** 설치, `ec2-user`에 Docker 권한.
- `restart-test-lab/flask_app_test/`에 **app.py·requirements.txt·Dockerfile** + 상위에 **docker-compose.yaml**(Flask+Pumba) 작성.
- (다음: 컨테이너 빌드·실행 + Locust 설치·스크립트 + 보안 그룹(5001·8089) + 부하 테스트 — Part 2)
