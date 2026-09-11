# Docker Container Monitoring

## 개요
- Docker 컨테이너 모니터링의 정의, 대표 도구(Prometheus+Grafana 등), 모니터링이 필요한 이유, 그리고 주요 모니터링 지표를 정리.

## 내용
### Docker Container Monitoring이란
- 컨테이너에서 실행 중인 애플리케이션의 성능, 상태(health), 리소스 사용량(CPU·메모리)을 추적하는 프로세스.

### 대표 모니터링 도구
- **Prometheus** — 가장 널리 쓰이는 오픈소스 모니터링 도구. Docker뿐 아니라 애플리케이션, Kubernetes, OpenStack 같은 클라우드 플랫폼도 모니터링 가능. **CNCF(Cloud Native Computing Foundation)** 졸업 프로젝트.
- **Grafana** — Grafana Labs가 제공하는 데이터 시각화 도구 — 파이 차트, 바 그래프, 라인 다이어그램 등 대시보드로 데이터를 표현.
- Prometheus(데이터 수집) + Grafana(시각화)가 함께 하나의 완전한 모니터링 솔루션을 이룸.
- 그 외 상용 도구 **Datadog**, 그리고 **Nagios, Splunk** 등도 사용됨.

### 왜 Docker 컨테이너를 모니터링해야 하는가
1. **성능(Performance)** — 병목 지점 파악, 애플리케이션 장애 여부, 평균 부하 확인, 개선점 도출.
2. **보안 보증(Security Assurance)** — 무단 접근이나 비정상적인 동작을 탐지해 컨테이너 보안 강화.
3. **컴플라이언스와 감사(Compliance and Auditing)** — 통신·의료 등 규제 산업에서 요구하는 로그·지표 보관 기간(예: 5~10년) 준수, 누가 언제 로그인했는지 등의 감사 기록 확보.
4. **조기 문제 탐지(Early Issue Detection)** — 모니터링이 갖춰져 있으면 문제가 커지기 전에 조기에 발견해 수정 가능.
5. **트러블슈팅과 디버깅** — 실시간·과거 데이터를 활용해 문제의 원인을 빠르게 진단하고 다운타임을 최소화.

### Docker 컨테이너 모니터링 지표
1. **리소스 사용률(Resource Utilization)** — CPU와 메모리 소비량.
2. **컨테이너 상태(Container Status)** — 컨테이너가 정상(healthy)인지 비정상(unhealthy)인지, 애플리케이션이 실행 중인지 여부.
3. **애플리케이션 성능(Application Performance)** — 평균 부하, 로그인 사용자 수, 애플리케이션 장애 여부.
4. **호스트 머신 지표(Host Machine Metrics)** — 컨테이너가 실행되는 노드(Docker Host)의 상태 — 충분한 CPU·RAM을 가지고 있는지 등.
5. **로그와 프로세스(Logs and Processes)** — 애플리케이션 로그, 프로세스가 정상적으로 실행 중인지 여부.
- 이 지표들을 종합해 전체 인프라와 애플리케이션의 상태를 평가.

## 요약
- Docker 컨테이너 모니터링은 성능·보안·컴플라이언스·조기 문제 탐지·트러블슈팅을 위해 리소스 사용률·컨테이너 상태·애플리케이션 성능·호스트 지표·로그/프로세스를 추적하는 것이며, 대표적으로 Prometheus(데이터 수집)와 Grafana(시각화)를 함께 사용해 모니터링 솔루션을 구축한다.
