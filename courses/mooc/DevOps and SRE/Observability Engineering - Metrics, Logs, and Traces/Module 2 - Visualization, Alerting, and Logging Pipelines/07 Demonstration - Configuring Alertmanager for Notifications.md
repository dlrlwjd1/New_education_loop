# Demonstration: Configuring Alertmanager for Notifications (데모 — 알림용 Alertmanager 구성)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- **Alertmanager**를 구성하고 Prometheus와 연결해, 알림 리시버(receiver)를 정의하고 **전체 경고 파이프라인**이 작동하는지 검증하는 데모.

## 내용 · 예시 (절차)

### 1. Alertmanager 설치·설정 파일 확인
```bash
which alertmanager                       # /usr/local/bin/alertmanager → 설치됨
ls /etc/alertmanager                     # alertmanager.yml 확인
```

### 2. Alertmanager 라우팅 설정
```bash
sudo nano /etc/alertmanager/alertmanager.yml
```
- 기본 **route**를 정의하고 리시버 **`console-notifications`**에 할당 (데모용 — 이메일/Slack 없이 파이프라인 작동 검증).
- 모든 경고가 정의된 리시버로 라우팅됨.
```bash
sudo systemctl restart alertmanager
sudo systemctl status alertmanager       # active running
# 브라우저 localhost:9093 → Alertmanager 웹 UI (경고 발화 전엔 비어 있음)
```

### 3. Prometheus를 Alertmanager에 연결
- `prometheus.yml`에 **`alerting`** 섹션 추가 → Alertmanager 타깃을 **`localhost:9093`**으로 지정.
```bash
sudo systemctl restart prometheus
sudo systemctl status prometheus
```

### 4. 통합 검증
- Prometheus `localhost:9090/alerts` + Alertmanager `localhost:9093`.
- 경고가 Prometheus에서 활성화되면 **자동으로 Alertmanager로 전달**되어 UI에 표시 → 파이프라인 연결 확인.

## 요약
- **Alertmanager**는 경고의 **라우팅·통지**를 담당하며, `alertmanager.yml`의 route/receiver로 설정하고 포트 **9093**에서 UI 제공.
- Prometheus의 **`alerting`** 섹션에 Alertmanager(`localhost:9093`)를 지정해 연결한다.
- 완성된 파이프라인: **node_exporter(메트릭) → Prometheus(경고 규칙 평가) → Alertmanager(라우팅) → 통지** — 탐지·라우팅·통지가 명확히 분리된 프로덕션급 구조.
