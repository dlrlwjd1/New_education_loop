# Components of Prometheus Architecture

## 개요
- Prometheus 아키텍처를 구성하는 8가지 주요 컴포넌트(Server, Service Discovery, TSDB, Targets, Exporters, Push Gateway, Alertmanager, Client Libraries)를 상세히 정리.

## 내용
### 1. Prometheus Server
- Pull 모델로 Target에서 지표를 수집하는 것이 핵심 역할 — 아키텍처의 중앙 엔진.
- 지표를 TSDB에 저장하고, Alert Rule을 처리하며, API와 UI(Grafana 포함)에 데이터를 제공.
- **Scrape Interval**에 따라 주기적으로 지표를 스크랩. 설정 예시:
  ```yaml
  global:
    scrape_interval: 15s
    evaluation_interval: 15s
    scrape_timeout: 10s
  rule_files: [...]
  scrape_configs: [...]     # job_name과 세부 정보
  alerting: [...]           # Alertmanager 대상
  ```

### 2. Prometheus Service Discovery
- 지표를 스크랩하는 두 가지 방식:
  - **Static Configs** — 설정 파일에 엔드포인트를 수동으로 나열.
  - **Service Discovery(동적 탐색)** — Kubernetes, Consul, EC2, 파일 기반 탐색 지원. 예: Kubernetes에서는 올바른 어노테이션(annotation)이 있으면 Pod와 Node를 자동으로 발견해 지표를 수집.

### 3. Time Series Database(TSDB)
- CPU·메모리 사용량처럼 계속 변하는 지표 데이터를 저장.
- 장기 데이터 관리를 위한 **보존 정책(Retention Policy)** 두 가지 제공:
  - **시간 기반 보존** — 예: 데이터를 30일간 보관.
  - **크기 기반 보존** — 예: 지표 데이터를 최대 50GB까지 보관.

### 4. Prometheus Targets
- Prometheus가 지표를 생성하는 데 사용하는 소스 — 서버, 서비스, Kubernetes Pod, 애플리케이션 엔드포인트 등.
- 예: Nginx는 `http://localhost:9113/metrics`에서 지표를 노출하며, 이 엔드포인트가 Prometheus의 Target이 됨.

### 5. Prometheus Exporters
- Target에서 실행되며 시스템 지표를 Prometheus가 이해할 수 있는 형식으로 변환하는 에이전트.
- 지표는 종류별로 서로 다른 Exporter로 전송됨:
  - **Windows Exporter** — Windows 시스템 지표.
  - **Node Exporter** — Linux 시스템 지표(CPU, 메모리 등).
  - **HAProxy Exporter** — 로드밸런서 지표.
  - **MySQL Exporter** — MySQL 데이터베이스 성능 지표.
  - **Apache Exporter** — 웹 서버 통계.
  - **JMX Exporter** — Java 애플리케이션 지표.

### 6. Prometheus Push Gateway
- 배치 작업 등 단명(short-lived) Job이 HTTP API를 통해 지표를 푸시하는 독립 컴포넌트 — 푸시된 지표는 `/metrics` 엔드포인트에 노출되고, Prometheus가 이를 다른 Exporter와 마찬가지로 풀(pull)해 가져감.

### 7. Prometheus Alertmanager
- Alert 설정에 정의된 지표 임계값을 기반으로 알림을 전송하는 역할.
- Prometheus Server가 Alert Rule을 평가해 Alertmanager로 알림을 전달하면, Alertmanager는 **중복 제거(deduplicate), 라우팅(routing), 그룹화(grouping), 억제(inhibition), 무음 처리(silencing)**를 수행한 뒤 Slack, Email, PagerDuty 등으로 최종 알림을 발송.

### 8. Prometheus Client Libraries
- 애플리케이션이 커스텀 지표를 생성·노출할 수 있게 해주는 라이브러리 — 요청 수, 로그인 실패, 커스텀 오류 같은 비즈니스 지표를 게시(publish)할 수 있음.
- 지원 언어: **Python, Rust, Go, Ruby, Java**.

## 요약
- Prometheus 아키텍처는 Server(수집·저장·평가), Service Discovery(대상 자동 탐색), TSDB(시계열 저장·보존 정책), Targets/Exporters(다양한 시스템의 지표 변환), Push Gateway(단명 Job 지원), Alertmanager(중복 제거·라우팅·알림 발송), Client Libraries(커스텀 애플리케이션 지표)로 구성되어 다양한 인프라와 언어에 걸친 지표 수집·알림 체계를 완성한다.
