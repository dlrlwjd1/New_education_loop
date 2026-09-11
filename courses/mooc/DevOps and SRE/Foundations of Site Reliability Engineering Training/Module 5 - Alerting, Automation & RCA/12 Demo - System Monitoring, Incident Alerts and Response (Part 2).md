# Demo: Setting Up System Monitoring, Incident Alerts, and Response with Prometheus and Alertmanager - Part 2 (데모 — 시스템 모니터링·인시던트 경고·대응 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 1부 설치에 이어 **설정 파일 작성·systemd 서비스·웹훅·Flask 설치**를 다루는 데모(2부).

## 내용 · 예시 (절차)

### 5. 설정 파일 작성 (모두 YAML 들여쓰기 민감)
```bash
sudo nano /etc/prometheus/prometheus.yml   # scrape 설정 (들여쓰기 수정)
sudo nano /etc/prometheus/alert_rules.yml  # 경고 규칙
sudo chown -R prometheus:prometheus /etc/prometheus   # 소유권 → prometheus
sudo nano /etc/alertmanager/alertmanager.yml          # Alertmanager 설정
sudo chown ... /etc/alertmanager                       # 소유권
```
> 파일명 오타(alertmanager.yaml vs .yml) 주의, 붙여넣기 후 **들여쓰기 형식 반드시 수정**.

### 6. systemd 서비스 생성 (부팅 시 자동 실행)
- `/etc/systemd/system/`에 서비스 유닛 작성 (들여쓰기 불필요 — 순차 실행):
  - **node_exporter.service**
  - **nginx exporter (system exporter)**
  - **prometheus.service**
  - **alertmanager.service**
  - **webhook.service** (웹훅 백그라운드 실행)

### 7. 웹훅·Python·Flask
```bash
# /usr/local/bin/webhook_server.py 작성 (Python 들여쓰기 민감! nano로 형식 수정)
sudo yum install python3 python3-pip
pip3 install flask
```

## 요약
- **prometheus.yml·alert_rules.yml·alertmanager.yml**을 작성(들여쓰기 수정)하고 소유권을 prometheus로 변경.
- **systemd 서비스 유닛**(node_exporter·nginx exporter·prometheus·alertmanager·webhook)을 만들어 부팅 시 자동 실행.
- **webhook_server.py(Flask)**로 경고 수신기 준비. (다음: 서비스 실행·인시던트 트리거 — Part 3)
