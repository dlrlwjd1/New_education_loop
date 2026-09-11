# Demo: Multi-User Load Testing with Chaos - Part 2 (데모 — 카오스 환경에서 다중 사용자 부하 테스트 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- 2부: **컨테이너 빌드·실행 → Locust 설치 → Locust 스크립트 작성 → 보안 그룹(5001·8089) → 부하 테스트 실행·관찰**.

## 내용 · 예시 (절차)

### 3. 컨테이너 빌드·실행
```bash
sudo docker-compose up -d --build   # Flask + Pumba 빌드·실행
docker ps                           # 컨테이너 실행 확인 (구문 오류 시 수정 후 재실행)
```

### 4. Locust 설치
```bash
sudo yum install -y python3
sudo yum install -y python3-pip
pip3 install locust
locust -V                           # 버전 확인
```

### 5. Locust 테스트 스크립트
```bash
sudo nano locustfile.py             # Python (들여쓰기 민감)
# HttpUser 상속 class MyLoadTest: wait_time + @task 2개
#   task1: 인덱스 페이지 GET, task2: /api/data GET
```

### 6. 보안 그룹 (인바운드)
- EC2 → Security → 보안 그룹 → Edit inbound rules → Add rule:
  - Custom TCP **5001** (전체 허용), Custom TCP **8089** (전체 허용) → 저장.

### 7. Locust 실행·부하 테스트
```bash
locust -f locustfile.py --host http://<EC2-public-IP>:5000
# 브라우저: http://<EC2-public-IP>:8089  → Locust 웹 UI
```
- Locust UI에서 **Number of users 50, Ramp up 5/s**, host `http://<IP>:5000` → **Start**.
- **Charts**(실시간 그래프)·**Stats**(사용자 수·실패)·**Ratio**(태스크 비율)·**Failures/Logs** 관찰.
- CSV(요청·실패·예외)·리포트 다운로드, Locust Cloud로 심화 분석 가능.

## 요약
- **`docker-compose up -d --build`**로 Flask+Pumba 실행, **pip3로 Locust 설치**.
- **locustfile.py**(HttpUser + @task 2개) 작성, 보안 그룹에 **5001·8089** 개방.
- **`locust -f ... --host`** → `:8089` UI에서 50 사용자/5 ramp로 부하 테스트, Charts·Stats로 회복력 관찰 — Pumba 카오스 + Locust 부하 테스트 완료.
