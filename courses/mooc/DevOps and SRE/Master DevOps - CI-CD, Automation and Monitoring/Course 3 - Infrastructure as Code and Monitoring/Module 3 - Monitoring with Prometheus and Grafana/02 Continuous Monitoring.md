# Continuous Monitoring

## 개요
- DevOps 라이프사이클 전반에 걸쳐 통합되는 Continuous Monitoring(지속적 모니터링)의 정의, 필요성, 이점, 한계, 그리고 관련 도구를 정리.

## 내용
### Continuous Monitoring이란
- 시스템, 애플리케이션, 인프라, 파이프라인을 관찰하는 **자동화된 프로세스** — 컴플라이언스 이슈와 보안 위협을 감지하며 성능·상태 지표도 추적.
- 전통적인 모니터링과 달리, 코드 커밋부터 배포까지 **DevOps 라이프사이클 전 단계**에 통합됨.

### Continuous Monitoring이 필요한 이유
1. **선제적 위협 탐지(Proactive Threat Detection)** — 이상 징후나 침해를 발생 즉시 감지.
2. **효율성과 경제성** — 다운타임을 줄이고, 알림을 자동화하며, 수동 점검을 없앰.
3. **시스템 다운타임 감소** — 사용자가 영향을 받기 전에 빠르게 대응 가능.
4. **실시간 인지(Real-time Awareness)** — 팀이 인프라·애플리케이션·리스크에 대한 실시간 가시성을 확보.
- 예: CPU 사용률이 90%를 초과하거나 EC2 인스턴스에 무단 접근이 발생하면 자동으로 알림 트리거.

### 이점
1. **강화된 보안** — 취약점과 침입을 빠르게 식별하고 대응.
2. **운영 효율성** — 워크플로우를 자동화해 수동 작업과 다운타임을 줄임.
3. **리스크 관리** — 컴플라이언스 이슈를 예방하고 접근 통제·감사 로그를 강제.
4. **향상된 의사결정** — 실시간 데이터로 더 빠르고 스마트한 의사결정 지원.

### 도전 과제와 한계
1. **데이터 과부하(Data Overload)** — 모니터링·처리해야 할 데이터 양이 매우 많음.
2. **오탐(False Positives)** — 알림이나 의심 상황이 실제로는 문제가 아닐 수 있음.
3. **통합 이슈(Integration Issues)** — 전체 애플리케이션을 지속적 모니터링과 통합할 때 발생할 수 있는 문제.
4. **리소스 집약적(Resource Intensive)** — 상당한 리소스를 소모.

### DevOps의 Continuous Monitoring 도구
- **모니터링 도구** — Sensu, Prometheus, Nagios.
- **알림(Alerting) 도구** — PagerDuty, ServiceNow, Slack(슬랙으로 알림을 받거나 ServiceNow로 티켓·인시던트 발행 가능).
- **지표 저장(Metric Storage)** — Splunk, InfluxDB, AWS.
- **시각화(Visualization)** — Grafana.

## 요약
- Continuous Monitoring은 코드 커밋부터 배포까지 DevOps 전 단계에서 자동으로 위협·이상을 감지해 보안·운영 효율성·리스크 관리·의사결정을 개선하지만, 데이터 과부하·오탐·통합 이슈 같은 한계가 있으며 Prometheus·PagerDuty·Splunk·Grafana 등 도구 조합으로 구현된다.
