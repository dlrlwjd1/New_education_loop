# Common Alerting Tools (일반적인 경고 도구)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 대표 경고 도구 **Prometheus**(메트릭 기반 경고)와 **Alertmanager**(경고 라우팅)를 다룬다.

## 내용

### 경고 도구
- **Prometheus, Alertmanager** (그 외 Azure의 App Analytics 등).

### Prometheus 메트릭 기반 경고
- **PromQL 표현식**으로 정의 (사람이 읽기 쉬움). 예:
  - `alert: HighErrorRate`
  - `expr: <함수 표현식>`
  - `for: 5m` (5분 지속)
  - `labels: severity: critical` (P1)
  - `annotations: summary: "High error rate detected"`

### Alertmanager
- **경고 라우팅·통지 관리** — 무슨 일이 생기면 어디로·누구에게.
- 주요 기능:
  - **중복 제거(deduplication)** — 유사 경고.
  - **그룹화(grouping)** — 관련 경고.
  - **묵음(silencing)** — 유지보수 시간 중 경고 억제.
  - **채널 라우팅** — Slack·이메일·PagerDuty·SMS.

## 요약
- **Prometheus**는 **PromQL 표현식 + `for`(지속)·`labels`(심각도)·`annotations`(요약)**으로 메트릭 기반 경고를 정의한다.
- **Alertmanager**는 **중복 제거·그룹화·묵음·채널 라우팅**으로 경고를 관리한다.
