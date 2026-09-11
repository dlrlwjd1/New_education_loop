# Demonstration: Creating Alert Rules in Prometheus (데모 — Prometheus 경고 규칙 만들기)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- Prometheus에서 **CPU 사용 경고 규칙**을 만들고, 규칙 파일을 등록하고, systemd로 설정을 리로드해 UI에서 규칙이 활성·평가되는지 검증하는 데모.

## 내용 · 예시 (절차)

### 1. 설정 파일 위치 확인
```bash
ps aux | grep prometheus     # config.file 파라미터 확인 → 보통 /etc/prometheus/prometheus.yml
ls /etc/prometheus           # prometheus.yml 존재 확인
```

### 2. 별도 경고 규칙 파일 작성
```bash
sudo nano /etc/prometheus/alert_rules.yml
```
- **rule group** `system_alerts` 안에 alert **`HighCPUUsage`** 정의:
  - **expression**: 100 − idle 시간으로 CPU 사용률 계산, **80% 초과가 1분 이상 지속되면** 발화.
  - **severity 라벨** + **summary·description** 주석(사람이 읽을 수 있는 경고 메시지).
```yaml
groups:
  - name: system_alerts
    rules:
      - alert: HighCPUUsage
        expr: 100 - (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[...])) * 100) > 80
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "..."
          description: "..."
```

### 3. 메인 설정에 규칙 파일 등록
- `prometheus.yml`의 **`rule_files`** 섹션에 `alert_rules.yml` 추가 (YAML 들여쓰기 주의).

### 4. 리로드·검증
```bash
sudo systemctl restart prometheus     # 시스템 서비스로 설치되어 있으므로 restart
sudo systemctl status prometheus      # active running 확인
# 브라우저 localhost:9090/alerts → HighCPUUsage 규칙 표시 (state는 대개 inactive)
```
- inactive는 규칙이 정상 로드되어 CPU를 지속 감시 중이며, 조건이 참이 되면 자동 발화함을 의미.

## 요약
- 경고는 별도 **rules 파일**(rule group + alert)에 정의하고, **PromQL expression + `for`(지속 시간) + labels + annotations**로 구성한다.
- `prometheus.yml`의 **`rule_files`**에 등록 후 **systemctl restart**로 리로드, `/alerts` 페이지에서 로드 확인.
- 예제 경고: **CPU 사용 80% 초과가 1분 이상 지속** → 발화.
