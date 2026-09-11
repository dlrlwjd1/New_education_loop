# Monitoring and Observability (모니터링과 관찰 가능성)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 2: Error Budgets & Observability

## 개요
- **모니터링 vs 관찰 가능성**의 차이, **관찰 가능성의 3기둥**, **골든 시그널**, 그리고 대표 도구들을 다룬다.

## 내용

### 모니터링 vs 관찰 가능성
| 모니터링(Monitoring) | 관찰 가능성(Observability) |
|----------------------|---------------------------|
| 사전 정의된 메트릭 수집·분석, **알려진/예상된 이슈** 초점 | 출력으로 **내부 상태** 이해, **unknown unknowns** 조사 |
| 경고·대시보드로 고수준 상태 | 복잡한 이슈 디버깅 맥락 제공 |
| **"뭔가 잘못됐나?"** (증상 탐지) | **"왜 잘못됐나?"** (증상 원인) |

### 관찰 가능성의 3기둥
- **로그(Logs)** — 이벤트·오류·시스템 활동의 타임스탬프 기록. 런타임 맥락, 디버깅·패턴 식별 (error/access/audit 로그).
- **메트릭(Metrics)** — 성능의 정량 측정, 시간 추세·경고 임계값 (CPU 사용, 요청 수, 오류율).
- **트레이스(Traces)** — 분산 시스템 전반 요청의 엔드투엔드 추적. 서비스 의존성 시각화, 병목 식별 (요청 경로).

### 골든 시그널 (4가지)
서비스 건강을 가장 종합적으로 보는 메트릭:
- **지연(Latency)** — 요청 응답 시간.
- **트래픽(Traffic)** — 시스템 수요(초당 요청·사용자·트랜잭션).
- **오류(Errors)** — 실패 요청 비율(500/400).
- **포화도(Saturation)** — 확장 필요 여부(CPU·RAM 사용률).

### 도구
- **모니터링**: **Prometheus**(오픈소스, 차원적 데이터 모델 + 쿼리 언어 + 시계열 DB), **Grafana**(시각화, 오픈소스), **ELK Stack**(Elasticsearch·Logstash·Kibana), **Nagios**(호스트·서비스 가용성), **Zabbix**(엔터프라이즈 네트워크·앱).
- **관찰 가능성**(대개 유료): **Datadog**(메트릭·트레이스·로그 통합), **New Relic**(풀스택 APM·분산 추적), **Dynatrace**(AI 기반, 자동 발견·문제 분석), **Splunk**(메트릭·트레이스·로그·고급 분석).
- **추적(Tracing)**: **Jaeger**(Uber), **Zipkin**(지연 문제 타이밍 데이터), **OpenTelemetry**(벤더 중립 텔레메트리 수집·내보내기 프레임워크).
- 도구 선택은 **비용·예산·필요 메트릭·통합·스킬셋**에 따라 결정.

## 요약
- **모니터링**은 알려진 이슈("뭐가 잘못됐나"), **관찰 가능성**은 unknown unknowns("왜 잘못됐나")를 다룬다.
- 3기둥: **로그·메트릭·트레이스**. 골든 시그널: **지연·트래픽·오류·포화도**.
- 도구: Prometheus·Grafana·ELK·Nagios·Zabbix(모니터링), Datadog·New Relic·Dynatrace·Splunk(관찰), Jaeger·Zipkin·OpenTelemetry(추적).
