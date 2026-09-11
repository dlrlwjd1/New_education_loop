# Alertmanager and Automated Remediation

## 개요
- Prometheus의 알림 규칙(Alerting Rule)과, 알림을 중복 제거·그룹화·라우팅·무음화(silence)·억제(inhibition)해 실제 알림 채널(Slack, PagerDuty 등)로 전달하는 **Alertmanager**의 구성 방법 및 자동 복구(Automated Remediation) 연계를 정리.

## 내용
### 1. Prometheus 알림과 Alertmanager 개요
- Prometheus는 메트릭을 수집하고 PromQL로 정의한 **알림 규칙(alerting rule)**을 평가 — 규칙 조건이 지속되면 **Alertmanager로 알림을 전송**.
- Alertmanager는 Prometheus와 실제 알림 채널(Slack, PagerDuty, 이메일) **사이**에 위치하며, 알림을 보내기 전에 다음 역할을 수행:
  - **중복 제거(Deduplication)** — 동일한 알림이 여러 번 발생할 때 노이즈 제거.
  - **그룹화(Grouping)** — 관련된 알림(예: 여러 인스턴스에서 서버 다운)을 하나의 알림으로 병합.
  - **라우팅(Routing)** — `severity` 같은 레이블 기준으로 알림을 적절한 팀/도구로 전송.
  - **무음화(Silencing)** — 유지보수 기간 등에 알림을 일시적으로 억제.
  - **억제(Inhibition)** — 더 심각한(higher-severity) 알림이 활성 상태일 때 낮은 심각도의 알림 발생을 방지.

### 2. 효과적인 알림 규칙 설계
```yaml
groups:
  - name: server.rules
    rules:
      - alert: HighCPU
        expr: rate(process_cpu_seconds_total[1m]) > 0.8
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "CPU > 80% for 2m on {{ $labels.instance }}"
          description: "Take action: scale pod or optimize workload."
```
- **`expr`** — 알림을 트리거하는 PromQL 표현식.
- **`for`** — 조건이 지속되어야 하는 시간(sustained duration).
- **`labels`** — `severity` 등 메타데이터.
- **`annotations`** — 사람이 읽을 수 있는 메시지.
- 여러 심각도 레벨(예: warning vs critical)을 사용해 라우팅을 유도하고, CPU와 메모리처럼 여러 조건을 결합하면 노이즈를 줄일 수 있음.

### 3. Alertmanager 설정 — alertmanager.yml
#### A. 라우팅(Routing)과 수신자(Receiver)
```yaml
route:
  group_by: ['alertname', 'severity']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 4h
  receiver: 'slack'

  routes:
    - match:
        severity: 'critical'
      receiver: 'pagerduty'
```
- `critical` 알림은 PagerDuty로, 나머지는 기본적으로 Slack으로 전달.

#### B. 수신자(Receivers) 정의
```yaml
receivers:
  - name: 'slack'
    slack_configs:
      - api_url: 'https://hooks.slack.com/...'
        channel: '#alerts'
  - name: 'pagerduty'
    pagerduty_configs:
      - service_key: '<PAGERDUTY_KEY>'
        send_resolved: true
```
- Slack은 **Incoming Webhook**을 사용, PagerDuty는 연동 방식에 따라 **Events API v1(`service_key`)** 또는 **v2(`routing_key`)** 사용.

#### C. 그룹화 파라미터
- **`group_wait`** — 관련 알림을 모으기 위한 초기 지연 시간.
- **`group_interval`** — 알림 배치(batch) 간격.
- **`repeat_interval`** — 미해결 알림을 재통지하는 주기.

#### D. 억제(Inhibition) 규칙
```yaml
inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'instance']
```
- 심각한 사고가 발생 중일 때 낮은 심각도의 중복 알림을 방지.

#### E. 무음화(Silence) 메커니즘
- 레이블 기반으로 UI나 API를 통해 설정하는 **일시적 알림 음소거 기간** — 계획된 점검(maintenance) 중 알림을 방지.

### 4. Slack과 PagerDuty 연동
- **Slack**: 워크스페이스에서 "Incoming Webhooks" 앱 활성화 → 특정 채널로 향하는 웹훅 생성 → `slack_configs`에서 이 웹훅 참조. 메시지는 `annotations`(예: `summary`)를 사용하며 템플릿으로 커스터마이징 가능.
- **PagerDuty**: PagerDuty의 "Service" 또는 "Event Orchestration"에서 통합 키(integration key) 생성 → Alertmanager의 `pagerduty_configs`에 `service_key` 추가 → critical 알림에 대한 라우팅 설계 → `send_resolved: true`로 설정해 사고가 자동으로 해소(resolve) 처리되도록 함.

### 5. 자동 복구(Automated Remediation)
- 자동화를 통해 수동 개입 없이 알림에 대응 가능:
  - Alertmanager의 웹훅/API를 자동화 도구(OpsRamp, Robusta 등)와 연동.
  - 일반적인 자동화 워크플로: Pod 재시작, Deployment 스케일링, 웹훅 수신자를 통한 스크립트 호출 등.
  - 예: 웹훅 수신자가 Lambda나 Ansible 플레이북을 호출해 리소스를 스케일링하거나 서비스를 재시작.

### 6. 모범 사례와 고려 사항
- `severity`, `team`, `service` 등으로 알림에 **논리적으로 레이블**을 붙여 효과적인 그룹화·라우팅을 가능하게 함.
- 그룹화 간격(interval)을 조정해 **알림 폭주(alert flood)**를 방지.
- 중복 알림을 막기 위한 억제 규칙 정의.
- 계획된 점검 중에는 Alertmanager UI/API로 알림을 무음화.
- 심각도별로 적절한 수신자 선택 — 정보성 경고는 Slack, 심각한 사고는 PagerDuty.
- 설정을 테스트: `curl`로 `http://localhost:9093/api/v1/alerts`에 알림을 시뮬레이션해볼 수 있음.

## 요약
- Alertmanager는 Prometheus가 평가한 알림 규칙을 받아 중복 제거·그룹화·라우팅·억제·무음화를 거쳐 Slack·PagerDuty 같은 채널로 전달하는 역할을 하며, `alertmanager.yml`의 `route`/`receivers`/`inhibit_rules`로 이를 구성하고, 웹훅을 자동화 도구와 연동하면 Pod 재시작이나 Deployment 스케일링 같은 자동 복구까지 이어질 수 있으므로, 레이블 기반의 논리적 라우팅과 그룹화 간격 튜닝, 억제 규칙, 계획된 점검 시 무음화가 안정적인 알림 운영의 핵심이다.
