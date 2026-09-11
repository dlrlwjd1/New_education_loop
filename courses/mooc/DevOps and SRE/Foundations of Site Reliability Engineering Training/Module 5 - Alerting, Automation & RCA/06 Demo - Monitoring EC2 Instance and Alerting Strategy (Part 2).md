# Demo: Monitoring EC2 Instance and Alerting Strategy with Prometheus, Node Exporter, and Alertmanager - Part 2 (데모 — EC2 모니터링·경고 전략 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 1부에서 세운 스택으로 **웹훅 수신기 실행 → 서비스 기동 → 경고 워크플로 테스트**를 다루는 데모(2부).

## 내용 · 예시

### 8. 웹훅(webhook) 서버 실행
```bash
# webhook_server.py 작성 (워크북) — 웹훅 수신기
pip3 install flask
python3 webhook_server.py &     # Flask로 실행 (개발용, Python 들여쓰기 민감!)
```

### 9. 세 서비스 실행 (3개 터미널)
- EC2에 **3개 세션** 열기 (Prometheus·Node Exporter·Alertmanager 각각 실행/모니터).
```bash
# Prometheus, Node Exporter(9100), Alertmanager 실행
# http://<IP>:9090 → Status → Targets에서 9090·9100 타깃 up 확인
```

### 10. 경고 워크플로 테스트
```promql
node_cpu_seconds_total     # CPU 메트릭 조회 (9100)
# 레코딩 규칙(user rate 5m) 조회
```
- **부하 생성** (한 터미널에서): `yes > /dev/null &` (여러 번 실행해 CPU 급등).
- Prometheus에서 **usage rate(5분)** 조회 → 그래프에서 **CPU 스파이크** 확인.
- **무효 로그인 시뮬레이션**: 로컬에서 `ssh wronguser@<IP>` 반복 → permission denied.
- **Alertmanager UI** (`http://<IP>:9093`) → **High CPU usage** 경고 수신 확인 (log receiver).
- Alertmanager 실행 터미널에도 경고가 push되어 표시됨.

## 요약
- **웹훅 수신기(Flask)** + **Prometheus·Node Exporter·Alertmanager** 3개 서비스를 실행하고, `yes > /dev/null`로 CPU 부하를 만들어 **High CPU usage 경고**가 Alertmanager로 push되는 것을 확인.
- Prometheus Targets에서 up 확인, 그래프로 CPU 스파이크 관찰 → 완전한 **모니터링·경고 솔루션** 완성.
