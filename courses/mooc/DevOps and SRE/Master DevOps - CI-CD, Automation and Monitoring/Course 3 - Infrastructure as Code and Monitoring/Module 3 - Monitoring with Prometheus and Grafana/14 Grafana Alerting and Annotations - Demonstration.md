# Grafana Alerting and Annotations - Demonstration

## 개요
- Grafana에서 Prometheus를 데이터 소스로 대시보드를 만들고, Discord로 알림을 보내는 Alert Rule과 그래프에 색을 표시하는 Annotation을 구성하는 실습.

## 내용
### 사전 준비
- Prometheus와 Grafana가 모두 설치·설정되어 있어야 하며, Grafana의 **Data Sources**에서 Prometheus가 URL과 함께 연결되어 있어야 함.

### 대시보드와 패널 생성
1. **Create a new dashboard → Add visualization**.
2. Data source로 Prometheus 선택, 쿼리에 `avg(rate(node_cpu_seconds_total[5m])) by (instance)` 형태의 PromQL 입력 → 실행하면 인스턴스 사용률(예: 0.10~0.13 사이 값) 확인.
3. 대시보드 이름을 `node-usage`로 저장.

### Alert Rule 생성
1. 패널에서 **Create alert rule** — 조건은 쿼리 값이 특정 임계값(예: `0.1`) 이상일 때 알림이 트리거되도록 설정.
2. Alert가 저장될 폴더(이미 생성된 `alerts` 폴더) 선택, **Evaluation Group**을 만들고 평가 주기(Evaluation Period)를 1분으로 설정.

### 알림 채널(Contact Point) 구성 — Discord 연동
1. **Contact points → New contact point** → 통합 방식으로 **Discord** 선택, 이름도 `discord`로 지정.
2. Discord 채널의 **Integrations → Webhooks**에서 새 Webhook 생성 후 URL 복사.
3. 복사한 Webhook URL을 Grafana의 Contact Point Webhook URL 필드에 붙여넣기.
4. **Test** 버튼으로 테스트 알림 전송 → Discord 채널에서 테스트 알림 수신 확인.
5. 이 밖에도 Alertmanager, Cisco Webex, Email, Google Chat, Jira, Telegram, Slack 등 다양한 통합 지원(Email 사용 시에는 Grafana 설정에서 SMTP를 활성화하고 이메일·비밀번호를 입력해야 함).
6. Contact Point 저장 후, Alert Rule의 Notifications에서 이 Contact Point를 선택 → **Save rule and exit**.

### Alert 동작 확인
- Alert Rules 화면에서 처음엔 상태가 `Normal` → 쿼리 값이 계속 0.1을 초과하므로 잠시 후 `Pending` 상태로 전환 → Evaluation Period 경과 후 `Firing` 상태가 되어 Discord로 알림 전송.
- Discord에 도착한 알림에는 패널 이름(이름을 지정하지 않았다면 "New panel")과 Grafana 대시보드·패널 링크가 포함되어 바로 확인 가능.

### Annotation(주석) 구성
1. 대시보드 **Settings → Annotations → New annotation query**.
2. 사용했던 쿼리를 추가하고 태그(예: `node`, `node-usage`)를 지정 → 저장.
3. 대시보드로 돌아가면 그래프 위에 해당 조건에 맞는 지점에 **색상 마커(annotation)**가 표시됨.
4. 패널에서 직접 특정 지점을 클릭해 수동으로 Annotation을 추가하는 것도 가능.

## 요약
- Grafana 패널에서 PromQL 쿼리 기반 Alert Rule(조건·평가 주기)을 만들고 Discord Webhook 같은 Contact Point에 연결하면 조건 충족 시 Normal → Pending → Firing 순으로 상태가 바뀌며 외부 채널로 알림이 전송되고, 대시보드 Settings의 Annotation 쿼리를 통해 그래프 위에 특정 이벤트를 색상으로 표시할 수도 있다.
