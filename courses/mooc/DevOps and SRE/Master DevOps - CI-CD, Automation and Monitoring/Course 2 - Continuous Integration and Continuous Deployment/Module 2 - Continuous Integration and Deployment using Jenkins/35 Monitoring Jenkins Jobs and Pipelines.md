# Monitoring Jenkins Jobs and Pipelines

## 개요
- Jenkins 모니터링이 왜 중요한지, 핵심 지표(Build/System/Queue Metrics), 모니터링 도구, 로그 유형을 설명.

## 내용
### 왜 모니터링이 중요한가
- Job 상태, CPU·메모리 등 서버 자원, 로그, 빌드 소요시간, 성공/실패 건수 등을 관찰(observe)하는 것.
- Jenkins 서버 성능 확보, 플러그인 실패 등 조기 문제 탐지, 리소스 최적화(느린 job을 발견해 CPU·메모리 증설 또는 부하 감소), 문제 디버깅에 도움.

### 핵심 지표(Metrics)
1. **Build Metrics** — 빌드 시작·종료 시각, 총 소요 시간, 성공/실패 건수, 빌드 성공률, 테스트 커버리지
2. **System Metrics** — CPU, 메모리, 프로세스 수, 디스크 공간 등 Jenkins 서버·노드의 전반적 상태
3. **Queue Metrics** — 큐에서 대기 중인 job 수, 대기 시간, executor 수 — 큐가 길어지지 않도록 관리 필요

### 모니터링 도구
- **Prometheus** — Jenkins 서버에서 다양한 메트릭 수집
- **Grafana** — 수집된 메트릭을 시각화하는 대시보드 도구
- **ELK Stack** — 로그를 수집해 Kibana로 시각화
- Jenkins 자체 플러그인으로도 기본적인 모니터링 가능하지만, 외부 도구는 고급 분석·시각화·중앙 집중식 알림을 제공.

### 로그(Logs)의 역할
- 언제(timestamp), 무슨 작업이, 누가, 성공/실패 여부까지 기록.
- **로그 종류**
  1. **System Log** — 전체 시스템 정보
  2. **Job/Build Log** — 각 Job/빌드별 로그
  3. **Console Output Log** — 콘솔 출력 로그
  4. **Worker Node Log** — 각 워커 노드별 로그

## 요약
- Jenkins 모니터링은 Build/System/Queue 세 축의 지표를 Prometheus+Grafana나 ELK Stack 같은 도구로 추적하며, System/Job/Console/Worker Node 로그를 함께 분석해 성능 저하·실패 원인을 조기에 발견하고 대응할 수 있게 한다.
