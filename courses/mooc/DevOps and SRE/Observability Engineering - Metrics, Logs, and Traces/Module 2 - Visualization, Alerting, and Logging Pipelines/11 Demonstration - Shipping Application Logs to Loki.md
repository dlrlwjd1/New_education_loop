# Demonstration: Shipping Application Logs to Loki (데모 — 애플리케이션 로그를 Loki로 전송)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- 애플리케이션 로그 파일을 만들고, **Promtail**을 설치·구성해 그 로그를 **Loki로 전송(ship)**하며, Loki API로 수집을 검증한 뒤 Promtail을 systemd 서비스로 배포하는 데모.

## 내용 · 예시 (절차)

### 1. Loki 실행 확인 + 로그 파일 준비
```bash
# http://localhost:3100/ready → "ready" 확인
sudo mkdir /var/log/myapp        # 앱 로그 위치 (예)
sudo touch /var/log/myapp/app.log
sudo chown ... app.log           # Promtail 읽기 + 쓰기 권한
# 샘플 로그 생성 (2초마다 append):
while true; do echo "..." >> app.log; sleep 2; done   # 30~60초 실행, 백그라운드 유지
```

### 2. Promtail 설치 (로그 슈퍼 = 파일 읽어 Loki로 push)
```bash
cd /tmp
wget <promtail linux-arm64 zip>
sudo apt install unzip -y
unzip promtail-linux-arm64.zip
chmod +x promtail-linux-arm64
sudo mv promtail-linux-arm64 /usr/local/bin/promtail
promtail --version
```

### 3. Promtail 설정
```bash
sudo mkdir /etc/promtail
sudo nano /etc/promtail/promtail-config.yml
```
- 구성:
  - Promtail HTTP 엔드포인트 **포트 9080**.
  - **positions 파일** — 재시작 후 처음부터 다시 읽지 않도록 읽은 위치 기록.
  - **Loki 목적지** = push URL `localhost:3100`.
  - **`scrape_configs`**: 로그 파일 경로를 가리키는 잡 1개 + **라벨(job, env 등)** 부착 → 나중에 깔끔히 조회.

### 4. 수동 검증
```bash
promtail -config.file=/etc/promtail/promtail-config.yml   # 파일 tailing 시작, 30초 실행
# 다른 터미널에서 Loki 쿼리 (curl):
curl "http://localhost:3100/loki/api/v1/query_range?query=..."   # 최근 로그 JSON → 수집 확인
```

### 5. systemd 서비스 배포
```bash
# /etc/systemd/system/promtail.service 작성 (지정 사용자, 동일 설정 파일, 자동 재시작)
sudo systemctl daemon-reload
sudo systemctl enable promtail
sudo systemctl start promtail
sudo systemctl status promtail   # active running → 백그라운드에서 지속 전송
```

## 요약
- **Promtail**은 로그 파일을 tailing해 **Loki로 push**하는 로그 슈퍼(shipper)다 (자체 포트 9080, positions 파일로 재읽기 방지).
- 설정에서 **Loki push URL(3100) + scrape 잡 + 라벨(job/env)**을 지정한다.
- 수동 실행 → **Loki 쿼리 API**로 수집 검증 → **systemd 서비스**로 배포하면 로그가 백그라운드에서 지속 전송된다.
