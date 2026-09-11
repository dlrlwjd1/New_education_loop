# Demonstration: Installing Loki for Log Aggregation (데모 — 로그 집계용 Loki 설치)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- **Grafana Loki**(경량 로그 집계 시스템)를 설치·설정하고, 수동 실행으로 검증한 뒤 systemd 서비스로 배포하는 데모.
- 메트릭이 "무엇"을 말하면 로그는 "왜"를 설명. Loki는 **전체 로그 내용이 아니라 메타데이터만 인덱싱**해 효율적·비용 효과적.

## 내용 · 예시 (절차)

### 1. 다운로드·설치
```bash
cd /tmp
wget <Loki linux-arm64 zip>
sudo apt install unzip -y
unzip loki-linux-arm64.zip
chmod +x loki-linux-arm64          # 실행 권한
sudo mv loki-linux-arm64 /usr/local/bin/loki   # 시스템 경로
loki --version                     # 설치 검증
```

### 2. 설정 파일
```bash
sudo mkdir -p /etc/loki
sudo nano /etc/loki/loki-config.yml
```
- 최소 동작 설정:
  - **인증 비활성화**(단순화), **HTTP 서버 포트 3100**.
  - 로컬 파일시스템 스토리지(`/tmp` 하위).
  - 스키마: **BoltDB shipper + 파일시스템 스토리지** (경량 단일 노드에 적합).
  - **Alertmanager URL** 지정 (규칙 기반 경고 통합 대비).

### 3. 수동 테스트
```bash
loki -config.file=/etc/loki/loki-config.yml   # 포트 3100 리슨, 10~15초 관찰(설정 오류 확인)
# 브라우저 http://localhost:3100/ready → "ready"면 정상
# Ctrl+C로 중지
```

### 4. systemd 서비스 배포
```bash
# /etc/systemd/system/loki.service 작성:
#   네트워크 준비 후 시작, loki 바이너리 + 설정 파일 실행, 실패 시 자동 재시작
sudo systemctl daemon-reload
sudo systemctl enable loki      # 부팅 시 자동 시작
sudo systemctl start loki
sudo systemctl status loki      # active running
# 포트 3100 바인딩 확인 (ss/netstat)
```

## 요약
- **Loki**는 메타데이터만 인덱싱하는 경량 로그 집계 시스템으로, 포트 **3100**에서 동작.
- 다운로드 → `/etc/loki` 최소 설정(인증 off, BoltDB shipper + 파일시스템) → `/ready`로 검증 → **systemd 서비스**로 배포.
- 이제 Loki가 로그를 수신·집계할 준비 완료.
