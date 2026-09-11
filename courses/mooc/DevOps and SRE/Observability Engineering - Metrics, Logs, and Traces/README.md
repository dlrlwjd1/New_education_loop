# Observability Engineering: Metrics, Logs, and Traces

> 제공: MOOC
> 원본: https://www.mooc.org/learn/observability-engineering-metrics-logs-traces

현대 분산 시스템을 **관찰 가능성(observability)** — 메트릭(metrics)·로그(logs)·트레이스(traces) 3축 — 으로 모니터링·분석·최적화하는 실전 강좌입니다. Prometheus·Grafana·Loki·Promtail·OpenTelemetry·Jaeger·Fluent Bit 등 production-grade 도구를 다룹니다. 각 강의 영상의 Transcript 기반 한국어 정리 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기).

## 사용 도구
**Prometheus**(메트릭 수집·PromQL) · **Grafana**(시각화·대시보드·경고·AI 이상 탐지) · **Loki + Promtail**(로그 집계·LogQL) · **OpenTelemetry**(계측) · **Jaeger**(분산 추적) · **Alertmanager**(경고 라우팅) · **Fluent Bit**(K8s 로그 수집) · **Kubernetes/Minikube**

## 모듈 구성 (총 43개 영상)

### [Module 1 - Fundamentals of Observability and System Signals](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/) (16개)
관찰 가능성 원리, 모니터링과의 차이, 3기둥, Prometheus·Node Exporter 설치, 골든 시그널, SLI/SLO/에러 버짓, PromQL(지연·오류·SLI·집계).
- 01 Course Introduction · 02 Scenario · 03 What is Observability · 04 What is Monitoring · 05 Observability vs Monitoring · 06 The Three Pillars
- 07 Installing Prometheus · 08 Node Exporter · 09 Golden Signals · 10 SLIs/SLOs/Error Budgets
- 11 App Metrics · 12 PromQL Latency/Error · 13 Defining SLIs · 14 Prometheus Architecture · 15 Scraping Metrics · 16 PromQL Aggregation/Filtering

### [Module 2 - Visualization, Alerting, and Logging Pipelines](Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/) (12개)
Grafana 대시보드·임계값·주석, 경고 전략·Alertmanager, 구조화 로깅·Loki·Promtail·LogQL.
- 01 Dashboard Design · 02 Installing Grafana · 03 Time-Series Dashboards · 04 Thresholds & Annotations
- 05 Alerting Strategies & Alert Fatigue · 06 Alert Rules · 07 Alertmanager · 08 Alert Trigger & Recovery
- 09 Structured Logging & Pipelines · 10 Installing Loki · 11 Shipping Logs to Loki · 12 Querying with LogQL

### [Module 3 - Distributed Tracing and End-to-End Observability](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/) (14개)
분산 추적 개념·트레이스 컨텍스트·스팬, OpenTelemetry·Jaeger, 쿠버네티스 관찰 가능성(Prometheus·Fluent Bit·Jaeger), 신호 상관, AI/ML 이상 탐지.
- 01 Tracing Concepts · 02 Trace Context/Spans · 03 OpenTelemetry SDK · 04 Exporting to Jaeger · 05 Latency Across Services
- 06 K8s Challenges · 07 K8s Metrics (Prometheus) · 08 Container Logs (Fluent Bit) · 09 Tracing Microservices · 10 Correlation Strategies · 11 Latency w/ Distributed Traces
- 12 AI/ML Intro · 13 Grafana AI Anomaly Detection · 14 ML-Based Anomaly Detection (demo)

### [Module 4 - Course Wrap-Up and Assessment](Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/) (1개 + 평가)
- 01 Course Summary

## 핵심 키워드
observability · monitoring · metrics/logs/traces · Prometheus · PromQL · Node Exporter · golden signals(latency·traffic·errors·saturation) · SLI/SLO/error budget · Grafana · dashboard · thresholds · Alertmanager · alert fatigue · structured logging · Loki · Promtail · LogQL · OpenTelemetry · OTLP · Jaeger · span/trace context · distributed tracing · Kubernetes · Minikube · kube-prometheus-stack · Fluent Bit · signal correlation · AI/ML anomaly detection

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Fundamentals of Observability and System Signals

- [01 Course Introduction](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/01%20Course%20Introduction.md)
- [02 Scenario - Investigating Unexpected System Behaviour](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/02%20Scenario%20-%20Investigating%20Unexpected%20System%20Behaviour.md)
- [03 What is Observability](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/03%20What%20is%20Observability.md)
- [04 What is Monitoring](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/04%20What%20is%20Monitoring.md)
- [05 Observability vs Monitoring in Modern Systems](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/05%20Observability%20vs%20Monitoring%20in%20Modern%20Systems.md)
- [06 The Three Pillars of Observability](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/06%20The%20Three%20Pillars%20of%20Observability.md)
- [07 Demonstration - Installing Prometheus for Metrics Collection](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/07%20Demonstration%20-%20Installing%20Prometheus%20for%20Metrics%20Collection.md)
- [08 Demonstration - Configuring Node Exporter for Host Metrics](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/08%20Demonstration%20-%20Configuring%20Node%20Exporter%20for%20Host%20Metrics.md)
- [09 Metrics, Golden Signals, and Reliability Indicators](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/09%20Metrics%2C%20Golden%20Signals%2C%20and%20Reliability%20Indicators.md)
- [10 Service Reliability with SLIs, SLOs, and Error Budgets](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/10%20Service%20Reliability%20with%20SLIs%2C%20SLOs%2C%20and%20Error%20Budgets.md)
- [11 Demonstration - Exploring Application Metrics Exposed with Prometheus](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/11%20Demonstration%20-%20Exploring%20Application%20Metrics%20Exposed%20with%20Prometheus.md)
- [12 Demonstration - PromQL Queries for Latency and Error Metrics](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/12%20Demonstration%20-%20PromQL%20Queries%20for%20Latency%20and%20Error%20Metrics.md)
- [13 Demonstration - Defining SLIs Using Prometheus Metrics](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/13%20Demonstration%20-%20Defining%20SLIs%20Using%20Prometheus%20Metrics.md)
- [14 Prometheus Architecture and Time-Series Data Model](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/14%20Prometheus%20Architecture%20and%20Time-Series%20Data%20Model.md)
- [15 Demonstration - Scraping Metrics from a Sample Application](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/15%20Demonstration%20-%20Scraping%20Metrics%20from%20a%20Sample%20Application.md)
- [16 Demonstration - Using PromQL for Aggregation and Filtering](Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/16%20Demonstration%20-%20Using%20PromQL%20for%20Aggregation%20and%20Filtering.md)

### Module 2 - Visualization, Alerting, and Logging Pipelines

- [01 Metrics Visualization and Dashboard Design](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/01%20Metrics%20Visualization%20and%20Dashboard%20Design.md)
- [02 Demonstration - Installing Grafana and Connecting Prometheus](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/02%20Demonstration%20-%20Installing%20Grafana%20and%20Connecting%20Prometheus.md)
- [03 Demonstration - Creating Time-Series Dashboards in Grafana](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/03%20Demonstration%20-%20Creating%20Time-Series%20Dashboards%20in%20Grafana.md)
- [04 Demonstration - Configuring Thresholds and Annotations in Grafana](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/04%20Demonstration%20-%20Configuring%20Thresholds%20and%20Annotations%20in%20Grafana.md)
- [05 Alerting Strategies and Alert Fatigue](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/05%20Alerting%20Strategies%20and%20Alert%20Fatigue.md)
- [06 Demonstration - Creating Alert Rules in Prometheus](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/06%20Demonstration%20-%20Creating%20Alert%20Rules%20in%20Prometheus.md)
- [07 Demonstration - Configuring Alertmanager for Notifications](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/07%20Demonstration%20-%20Configuring%20Alertmanager%20for%20Notifications.md)
- [08 Demonstration - Alert Trigger and Recovery Validation](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/08%20Demonstration%20-%20Alert%20Trigger%20and%20Recovery%20Validation.md)
- [09 Structured Logging and Log Pipelines](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/09%20Structured%20Logging%20and%20Log%20Pipelines.md)
- [10 Demonstration - Installing Loki for Log Aggregation](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/10%20Demonstration%20-%20Installing%20Loki%20for%20Log%20Aggregation.md)
- [11 Demonstration - Shipping Application Logs to Loki](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/11%20Demonstration%20-%20Shipping%20Application%20Logs%20to%20Loki.md)
- [12 Demonstration - Querying Logs Using LogQL](Module%202%20-%20Visualization%2C%20Alerting%2C%20and%20Logging%20Pipelines/12%20Demonstration%20-%20Querying%20Logs%20Using%20LogQL.md)

### Module 3 - Distributed Tracing and End-to-End Observability

- [01 Distributed Tracing Concepts and Terminology](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/01%20Distributed%20Tracing%20Concepts%20and%20Terminology.md)
- [02 Trace Context, Spans, and Service Dependencies](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/02%20Trace%20Context%2C%20Spans%2C%20and%20Service%20Dependencies.md)
- [03 Demonstration - Instrumenting an Application with OpenTelemetry SDK](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/03%20Demonstration%20-%20Instrumenting%20an%20Application%20with%20OpenTelemetry%20SDK.md)
- [04 Demonstration - Exporting Traces to Jaeger](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/04%20Demonstration%20-%20Exporting%20Traces%20to%20Jaeger.md)
- [05 Demonstration - Analyzing Request Latency Across Services in Jaeger](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/05%20Demonstration%20-%20Analyzing%20Request%20Latency%20Across%20Services%20in%20Jaeger.md)
- [06 Observability Challenges in Kubernetes Environments](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/06%20Observability%20Challenges%20in%20Kubernetes%20Environments.md)
- [07 Demonstration - Collecting Kubernetes Metrics Using Prometheus](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/07%20Demonstration%20-%20Collecting%20Kubernetes%20Metrics%20Using%20Prometheus.md)
- [08 Demonstration - Collecting Container Logs with Fluent Bit](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/08%20Demonstration%20-%20Collecting%20Container%20Logs%20with%20Fluent%20Bit.md)
- [09 Demonstration - Tracing Requests Across Microservices in Jaeger](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/09%20Demonstration%20-%20Tracing%20Requests%20Across%20Microservices%20in%20Jaeger.md)
- [10 Correlation Strategies Across Telemetry Signals](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/10%20Correlation%20Strategies%20Across%20Telemetry%20Signals.md)
- [11 Demonstration - Analyzing Request Latency Using Distributed Traces](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/11%20Demonstration%20-%20Analyzing%20Request%20Latency%20Using%20Distributed%20Traces.md)
- [12 Introduction to AI and Machine Learning in Observability](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/12%20Introduction%20to%20AI%20and%20Machine%20Learning%20in%20Observability.md)
- [13 How Grafana Uses AI for Anomaly Detection and Insight](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/13%20How%20Grafana%20Uses%20AI%20for%20Anomaly%20Detection%20and%20Insight.md)
- [14 Demonstration - Enabling ML-Based Anomaly Detection in Grafana](Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/14%20Demonstration%20-%20Enabling%20ML-Based%20Anomaly%20Detection%20in%20Grafana.md)

### Module 4 - Course Wrap-Up and Assessment

- [01 Course Summary](Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)

<!-- course-inventory:end -->
