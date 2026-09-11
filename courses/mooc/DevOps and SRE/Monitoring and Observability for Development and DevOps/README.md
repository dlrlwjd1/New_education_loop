# Monitoring and Observability for Development and DevOps

> 제공: **IBM** (MOOC) · 강사: John Rofrano
> 원본: https://www.mooc.org/learn/monitoring-and-observability-for-development-and-devops

**개발자·DevOps 관점**에서 (운영/인프라가 아닌) 애플리케이션의 **모니터링·로깅·관찰 가능성(observability)**을 구현하는 법을 다루는 강좌입니다. "If you build it, you run it" 철학에 맞춰, 무엇을·언제 로깅·모니터링할지 개발 단계부터 설계합니다. 각 강의 영상의 Transcript 기반 한국어 정리 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기).

## 다루는 도구
Prometheus · Grafana · **Mezmo(구 LogDNA)** · **IBM Instana** · Datadog · New Relic · Sumo Logic · Kibana/Elasticsearch · Splunk · Jaeger · Zipkin · Fluentd · OpenTelemetry/OpenTracing

## 모듈 구성 (5개 모듈, 총 63개 항목 — 영상·리딩·핸즈온랩·치트시트·용어집 포함, 채점 퀴즈 제외)

### **Module 1 - Introduction to Monitoring for Applications** (12개)
- 01 IBM Product Spotlight - IBM Instana · 02 Course Introduction · 03 Introduction to Monitoring · 04 Types of Monitoring · 05 Golden Signals of Monitoring · 06 Summary and Highlights - Monitoring Basics · 07 Difference between Monitoring and Evaluation · 08 Components of a Monitoring System · 09 Types of Metrics in a Monitoring System · 10 Importance of Monitoring · 11 Summary and Highlights - Objectives of Monitoring · 12 Module 1 Glossary

### **Module 2 - Monitoring Systems and Techniques** (14개)
- 01 Introduction to Synthetic Monitoring · 02 Tools of Synthetic Monitoring · 03 Introduction to Application Monitoring · 04 Introduction to Prometheus · 05 Hands-on Lab - Monitoring in Action with Prometheus · 06 Choosing the Right Application Monitoring Tool · 07 Introduction to Grafana · 08 Hands-on Lab - Configuring and Visualizing Metrics with Prometheus and Grafana · 09 Summary and Highlights - Implementing Monitoring · 10 Using Visualization in Monitoring · 11 Alerting in Monitoring · 12 Summary and Highlights - Monitoring Techniques · 13 Cheat Sheet - Monitoring Systems and Techniques · 14 Module 2 Glossary

### [Module 3 - Methodologies and Tools in Logging](Module%203%20-%20Methodologies%20and%20Tools%20in%20Logging/) (12개)
- 01 Introduction to Logging · 02 Log Monitoring Tools · 03 Distributed Logging and Tracing · 04 Summary and Highlights - Logging · 05 Implementing Logging · 06 Log Storage · 07 Hands-on Lab - Analyze HTTP Logs · 08 Summary and Highlights - Logging Implementation · 09 Mezmo Overview and Demo Video · 10 Hands-on lab - Create a Parsing Template using Mezmo · 11 Summary and Highlights - Introduction to Mezmo · 12 Module 3 Glossary

### **Module 4 - Observability and Concepts** (18개)
- 01 What is Observability · 02 The 3 Pillars of Observability · 03 Cloud Native Observability · 04 Cloud Native Observability Tools · 05 Introduction to Sampling · 06 IBM Instana Overview and Demo Video · 07 Hands-on Lab - Observability in Action with Instana (Sandbox) · 08 Reading - Future of IT Operations - Leveraging Observability for Self-Healing · 09 Summary and Highlights - Observability · 10 Introduction to Telemetry · 11 Telemetry and Tracing Tools · 12 Hands-on Lab - Automated Instrumentation with OpenTelemetry · 13 Summary and Highlights - Tracing using Open Telemetry · 14 Tracing for Container-Based Applications · 15 Hands-on Lab - Kubernetes Configuration for Tracing · 16 Summary and Highlights - Monitoring Containers · 17 Cheat Sheet - Observability and Concepts · 18 Module 4 Glossary

### **Module 5 - Final Project and Assessment** (7개)
- 01 Final Project - Overview and Project Scenario · 02 Final Project (Part 1) - Getting Started with Instana · 03 Final Project (Part 2) - Monitoring the Robotshop Application using Instana · 04 What's Next - Explore IBM Instana · 05 Glossary(통합) · 06 Congratulations and Next Steps · 07 Thanks from the Course Team
- 최종 평가(Final Assessment)는 채점 과제이므로 제외.

## 핵심 키워드
application monitoring · golden signals(latency·traffic·errors·saturation) · monitoring vs evaluation · metrics(host/application/network/server pool) · synthetic monitoring vs RUM · APM · Prometheus(exporter·instrumentation·PromQL·Alertmanager) · Grafana · visualization(Kibana·Splunk) · alerting(Bosun·Cabot·StatsAgg) · logging(event/error/access/performance/debug) · structured logging(JSON) · log parsing/storage(retention) · distributed logging vs tracing · Mezmo · observability 3 pillars(logs·metrics·traces) · cloud native observability(automation·context·intelligent action) · sampling · IBM Instana · telemetry · OpenTelemetry/OpenTracing/OpenCensus · SRE golden signals · RED metrics

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Introduction to Monitoring for Applications

- **01 IBM Product Spotlight - IBM Instana**
- **02 Course Introduction**
- **03 Introduction to Monitoring**
- **04 Types of Monitoring**
- **05 Golden Signals of Monitoring**
- **06 Summary and Highlights - Monitoring Basics**
- **07 Difference between Monitoring and Evaluation**
- **08 Components of a Monitoring System**
- **09 Types of Metrics in a Monitoring System**
- **10 Importance of Monitoring**
- **11 Summary and Highlights - Objectives of Monitoring**
- **12 Module 1 Glossary - Introduction to Monitoring for Applications**

### Module 2 - Monitoring Systems and Techniques

- **01 Introduction to Synthetic Monitoring**
- **02 Tools of Synthetic Monitoring**
- **03 Introduction to Application Monitoring**
- **04 Introduction to Prometheus**
- **05 Hands-on Lab - Monitoring in Action with Prometheus**
- **06 Choosing the Right Application Monitoring Tool**
- **07 Introduction to Grafana**
- **08 Hands-on Lab - Configuring and Visualizing Metrics with Prometheus and Grafana**
- **09 Summary and Highlights - Implementing Monitoring**
- **10 Using Visualization in Monitoring**
- **11 Alerting in Monitoring**
- **12 Summary and Highlights - Monitoring Techniques**
- **13 Cheat Sheet - Monitoring Systems and Techniques**
- **14 Module 2 Glossary - Monitoring Systems and Techniques**

### Module 3 - Methodologies and Tools in Logging

- **01 Introduction to Logging**
- **02 Log Monitoring Tools**
- **03 Distributed Logging and Tracing**
- **04 Summary and Highlights - Logging**
- **05 Implementing Logging**
- **06 Log Storage**
- [07 Hands-on Lab - Analyze HTTP Logs](Module%203%20-%20Methodologies%20and%20Tools%20in%20Logging/07%20Hands-on%20Lab%20-%20Analyze%20HTTP%20Logs.md)
- **08 Summary and Highlights - Logging Implementation**
- **09 Mezmo Overview and Demo Video**
- **10 Hands-on lab - Create a Parsing Template using Mezmo**
- **11 Summary and Highlights - Introduction to Mezmo**
- **12 Module 3 Glossary - Methodologies and Tools in Logging**

### Module 4 - Observability and Concepts

- **01 What is Observability**
- **02 The 3 Pillars of Observability**
- **03 Cloud Native Observability**
- **04 Cloud Native Observability Tools**
- **05 Introduction to Sampling**
- **06 IBM Instana Overview and Demo Video**
- **07 Hands-on Lab - Observability in Action with Instana (Sandbox)**
- **08 Reading - Future of IT Operations - Leveraging Observability for Self-Healing**
- **09 Summary and Highlights - Observability**
- **10 Introduction to Telemetry**
- **11 Telemetry and Tracing Tools**
- **12 Hands-on Lab - Automated Instrumentation with OpenTelemetry**
- **13 Summary and Highlights - Tracing using Open Telemetry**
- **14 Tracing for Container-Based Applications**
- **15 Hands-on Lab - Kubernetes Configuration for Tracing**
- **16 Summary and Highlights - Monitoring Containers**
- **17 Cheat Sheet - Observability and Concepts**
- **18 Module 4 Glossary - Observability and Concepts**

### Module 5 - Final Project and Assessment

- **01 Final Project - Overview and Project Scenario**
- **02 Final Project (Part 1) - Getting Started with Instana - Setup and Creating Dashboard**
- **03 Final Project (Part 2) - Monitoring the Robotshop Application using Instana**
- **04 What's Next - Explore IBM Instana**
- **05 Glossary - Monitoring and Observability for Development and DevOps**
- **06 Congratulations and Next Steps**
- **07 Thanks from the Course Team**

<!-- course-inventory:end -->
