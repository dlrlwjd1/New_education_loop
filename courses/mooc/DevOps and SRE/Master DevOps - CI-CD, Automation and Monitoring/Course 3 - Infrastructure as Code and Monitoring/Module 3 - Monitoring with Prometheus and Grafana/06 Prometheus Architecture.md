# Prometheus Architecture

## 개요
- Prometheus 아키텍처의 핵심 특징(Pull 기반, 다차원 데이터 모델, 시계열 DB)과 전체 구성 요소(Prometheus Server, Service Discovery, Push Gateway, Web UI, Alertmanager, Grafana)의 흐름을 정리.

## 내용
### 아키텍처 개요
- Prometheus 아키텍처는 확장성과 효율성이 뛰어나 소규모 시스템부터 Kubernetes 기반의 대규모 동적 인프라까지 모두 적합.
- **Pull 기반 데이터 수집 모델**을 중심으로 구축.
- **다차원 데이터 모델(Multi-dimensional Data Model)** — 지표를 레이블(label)과 함께 저장해 유연하게 필터링·집계 가능(예: 국가·시간대별 사용량처럼 여러 차원으로 구분).
- **시계열 데이터베이스(TSDB)** — 지표를 타임스탬프-값 쌍으로 저장.

### 아키텍처 구성 요소
1. **Prometheus Server** — 아키텍처의 중심. TSDB를 내장해 지표를 저장하며, 지표를 수집(retrieve)하고 TSDB에 저장하고 Alert Rule을 평가하는 메인 엔진. HTTP 서버를 통해 API로 데이터를 노출해 시각화나 export에 사용.
2. **Prometheus Targets(지표 소스)** — Job이나 Exporter를 통해 지표를 제공하는 대상들.
3. **Service Discovery** — Kubernetes 기반 또는 파일(File SD) 기반으로 모니터링 대상을 자동으로 찾아냄. Kubernetes에서는 Pod·Node·Service를, 파일에서는 정적 설정 파일을 가져와 동적이고 확장 가능한 모니터링을 지원.
4. **Push Gateway(단명 Job 지원)** — 배치 프로세서처럼 빠르게 종료되어 자체 엔드포인트를 노출할 수 없는 단명(short-lived) Job은 지표를 Push Gateway에 푸시(push)해 임시로 저장. Prometheus는 다른 Exporter와 마찬가지로 이 Push Gateway에서 지표를 풀(pull)해 가져감 — 이렇게 단명 작업까지도 모니터링이 가능해짐.
5. **Prometheus Web UI** — 웹 기반 UI와 REST API를 노출해 PromQL 쿼리 실행, 시계열 그래프 확인, 대상(target)과 알림 디버깅에 사용. Grafana 같은 도구에도 데이터를 제공.
6. **Grafana 연동** — Grafana가 Prometheus를 데이터 소스로 사용해 실시간 대시보드를 생성 — 팀별 커스텀 시각화 제공.
7. **Alertmanager** — 평가된 Alert Rule을 기반으로 Slack, Email, PagerDuty 등으로 알림을 발송.

### 전체 데이터 흐름
- REST API를 통한 PromQL 쿼리가 HTTP 서버로 전송되면, 서버는 TSDB에서 데이터를 조회해 응답.
- 실제 지표 수집은 Prometheus Targets에서의 Pull과, 단명 Job의 경우 Push Gateway를 통한 방식으로 이루어짐.
- 수집된 모든 지표는 TSDB에 로컬로 저장되며, 이 데이터가 쿼리·알림·Grafana 대시보드에 사용됨.
- Alert Rule 평가 결과는 Alertmanager를 통해 Slack·Email·PagerDuty로 알림을 푸시.

## 요약
- Prometheus 아키텍처는 Server(수집·저장·평가 엔진), Service Discovery(대상 자동 탐색), Push Gateway(단명 Job 지원), Web UI(PromQL 쿼리), Alertmanager(알림 발송), Grafana(시각화)가 유기적으로 연결되어, Pull 기반 모델과 다차원 시계열 데이터를 중심으로 소규모부터 Kubernetes 대규모 환경까지 확장 가능한 모니터링을 제공한다.
