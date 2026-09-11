# Implementing SRE: Workflow, Team Structure, Tools, and Metrics (SRE 구현 — 워크플로·팀 구조·도구·메트릭)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- **통합 SRE 워크플로**, **성숙도 모델(maturity model)**, 팀 구조, 도구, 메트릭을 다룬다.

## 내용

### 통합 SRE 워크플로
1. **개발(develop)** — 신뢰성 기능을 내장한 코드.
2. **CI/CD 파이프라인** — 배포·테스트·게이트 체크 자동화.
3. **성능 테스트** — SLA 충족 검증.
4. **카오스 엔지니어링** — 선제적 테스트.
5. **모니터링·관찰 가능성** — 전부 모니터·로깅.
6. **지속적 개선**.

### 성숙도 모델
- **레벨 1 반응적(reactive)** — 모니터링·수동 배포·인시던트 대응.
- **레벨 2 표준화** — SLO 정의·배포 자동화·기본 성능 테스트.
- **레벨 3 선제적(proactive)** — 단순 카오스 실험 도입.
- **레벨 4 최적화** — CI/CD 통합 테스트·종합 카오스 프로그램·고급 성능 최적화.
- **레벨 5 완전 자동화** — 지속적 검증·예측적 신뢰성 엔지니어링(현실에서 드묾).

### 팀 구조·책임
- SRE = **소프트웨어 엔지니어링 + 운영**의 결합, 강한 소통.
- 구성: SRE 매니저, 시니어 SRE, SRE 엔지니어, 성능 엔지니어, 카오스 엔지니어, CI/CD 전문가(DevOps).
- 책임: **SLO 정의·측정, 에러 버짓 관리, 관찰 가능성 구현, 운영 자동화, 신뢰성 테스트, 인시던트 관리 주도**.

### 도구
- **모니터링/관찰**: Prometheus, Grafana, Datadog, New Relic, Honeycomb.
- **자동화**: Terraform, Ansible, Puppet, Chef, Kubernetes.
- **협업**: Slack, Jira, Confluence, GitHub, GitLab.
- **인시던트 관리**: PagerDuty, OpsGenie, FireHydrant, Blameless.
- **테스트**: JMeter, Gatling, Chaos Monkey, Gremlin, k6.
- **분석**: Elasticsearch, Splunk, BigQuery, Looker.

### 메트릭·KPI
- **신뢰성 메트릭**: SLI, SLO, 에러 버짓 소비, MTBF, MTTR.
- **운영 메트릭**: 배포 빈도, 변경 실패율, 변경 리드 타임, 토일 비율, 인시던트 빈도.
- → 정량적 의사결정 근거 제공.

## 요약
- 통합 워크플로: **개발 → CI/CD → 성능 테스트 → 카오스 → 모니터링 → 지속 개선**.
- 성숙도 **레벨 1(반응적)~5(완전 자동화)**. 팀은 SW 엔지니어링+운영 결합.
- 도구는 영역별 선택, 메트릭은 **신뢰성(SLI/SLO/에러버짓/MTBF/MTTR) + 운영(배포 빈도·변경 실패율·토일)**.
