# Demo: Implementing Chaos Engineering with Pumba - Part 2 (데모 — Pumba로 카오스 엔지니어링 구현 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- 2부: **프로젝트 파일 완성(app.py·requirements·Dockerfile·docker-compose) → 컨테이너 빌드·실행 → 앱 접속 → 카오스 관찰**.

## 내용 · 예시 (절차)

### 2. 나머지 파일 생성
```bash
sudo nano flask_app/requirements.txt   # 내용: flask (들여쓰기 불필요)
sudo nano flask_app/Dockerfile         # 확장자 없는 대문자 Dockerfile (들여쓰기 불필요)
#   FROM <image> → WORKDIR /app → COPY requirements.txt → 설치 → COPY app.py → CMD python app.py
sudo nano docker-compose.yaml          # flask_app 상위 디렉터리에 위치, YAML 들여쓰기 민감!
#   flask_app + Pumba 두 서비스를 pull·build
```

### 3. 빌드·실행
```bash
docker-compose up -d       # 이미지 pull → 빌드 → 백그라운드 실행 (녹색 체크 = 성공, X = 오류)
docker ps                  # pumba:latest (up), python-app (5001) 확인
```

### 앱 접속 (보안 그룹 수정)
```bash
# http://<EC2-public-IP>:5001  → 처음엔 접속 불가 (5001 인바운드 미허용)
```
- EC2 → **Security → 보안 그룹 → Edit inbound rules → Add rule**: Custom TCP **5001** 허용(데모는 전체 허용, **프로덕션은 IP 세그먼트 필수**) → 저장 → 새로고침하면 Flask 앱 표시.

### 카오스 관찰
```bash
docker events --filter 'container=flask_app_chaos'   # ~30초마다 이벤트 갱신 관찰
docker logs flask_app_chaos                          # 앱 로그 확인 (개발 서버 주소 등)
```
- Pumba가 컨테이너에 결함을 주입하는 동안 이벤트·로그로 시스템 동작을 관찰.

## 요약
- **requirements.txt·Dockerfile·docker-compose.yaml**(flask_app + Pumba)을 작성(YAML 들여쓰기 주의).
- **`docker-compose up -d`**로 빌드·실행, 보안 그룹에 **5001 인바운드** 추가해 앱 접속.
- **`docker events`·`docker logs`**로 Pumba 카오스 주입을 관찰 — 컨테이너 기반 앱에 카오스 엔지니어링 적용 완료.
