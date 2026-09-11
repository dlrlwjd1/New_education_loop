# Demo: Implementing Toil Reduction with Automated Service Recovery Using Shell Script - Part 2 (데모 — 셸 스크립트 자동 서비스 복구로 Toil 감소 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 3: Incident Management & Toil Reduction

## 개요
- 1부의 복구 스크립트를 **Cron으로 스케줄링**해 지속적 자가 치유(self-healing)를 완성하는 데모(2부).

## 내용 · 예시 (절차)

### 5. Cron으로 스크립트 스케줄링
```bash
sudo yum install cronie -y          # cron 데몬
sudo systemctl enable crond
sudo systemctl start crond
crontab -e                          # crontab 편집
# 파일 끝에 cron 항목 추가 (2분마다 check_nginx.sh 실행) → :wq 저장
```

### 6. 엔드투엔드 검증
```bash
docker stop nginx                   # 장애 시뮬레이션
docker ps                           # 실행 없음
curl localhost:8080                 # 다운 확인
# ~2분 대기 → cron이 스크립트 자동 실행 → nginx 복구
docker ps                           # 컨테이너 재시작 확인(약 2분 전)
curl localhost:8080                 # "Welcome to nginx" 복구
tail <auto-recovery log>            # "WARNING nginx not running, attempting recovery" → "successfully recovered"
```
- crontab의 시간 블록이 **2분마다 실행**을 지정 → 스크립트가 주기적으로 가용성 확인·복구.

## 요약
- **Cron(2분 주기)**으로 복구 스크립트를 스케줄링해 **자동·지속적 자가 치유**를 구현.
- `docker stop`으로 장애를 만들면 ~2분 내 cron이 스크립트를 실행해 **자동 복구**, 로그에 기록.
- 사람이 매번 개입할 필요 없이 서비스가 스스로 복구되는 **엔드투엔드 Toil 감소**를 완성했다.
