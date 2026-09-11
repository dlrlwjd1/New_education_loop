# Monitoring Jenkins: Tools and Techniques

## 개요
- Jenkins 모니터링의 중요성, 핵심 지표, 4가지 대표 모니터링 도구(Prometheus+Grafana, JavaMelody, New Relic, Datadog), 베스트 프랙티스를 정리한 리딩.

## 내용
### 모니터링의 중요성
- 선제적 문제 탐지, 성능 최적화, 리소스 관리, 보안 확보(무단 접근·취약점 탐지) — 오류를 예측하고 고가용성을 확보하며 설정을 최적화하고 자동화 워크플로우 진행 상황을 추적할 수 있다.

### 핵심 지표
- **System Metrics** — CPU 사용률, 메모리 소비, 디스크 I/O, 네트워크 대역폭
- **Jenkins 전용 지표** — 빌드 큐 길이, Job 실행 시간, 성공/실패율
- **플러그인 성능** — 설치된 플러그인이 시스템 리소스에 미치는 영향
- **사용자 활동** — 로그인 시도, 설정 변경, Job 트리거 이력

### 모니터링 도구
1. **Prometheus + Grafana** — Prometheus 플러그인으로 Jenkins 메트릭을 노출하고 Grafana 대시보드로 시각화·알림 설정. 비용 효율적이고 커스터마이징 가능.
2. **JavaMelody** — Java 애플리케이션 전용 모니터링. HTTP 요청 통계, 메모리·CPU 사용량, 스레드 모니터링. Jenkins Monitoring 플러그인이 JavaMelody를 내장.
3. **New Relic** — 분산 추적(Distributed Tracing)으로 서비스 간 요청을 추적해 병목 파악, 커스텀 대시보드, 알림 임계값 설정. 복잡한 환경에서 관측성(observability) 강화에 유리.
4. **Datadog** — 실시간 메트릭, 이벤트 상관관계 분석(근본 원인 파악), 커스텀 대시보드·알림. Datadog 플러그인으로 Jenkins와 매끄럽게 통합.

### 베스트 프랙티스
1. 정기적으로 지표를 리뷰하는 루틴 수립
2. 중요한 임계값에 대한 알림(alert) 설정
3. 꼭 필요한 플러그인만 사용해 오버헤드 최소화
4. 모니터링 데이터에 대한 접근 통제 구현
5. 모니터링 설정을 문서화해 향후 참조·감사에 대비

## 요약
- Jenkins 모니터링은 System/Jenkins/플러그인/사용자 활동 지표를 Prometheus+Grafana, JavaMelody, New Relic, Datadog 같은 도구로 추적하며, 정기 리뷰·알림 설정·플러그인 최소화·접근 통제·문서화라는 베스트 프랙티스를 함께 지켜야 견고한 CI/CD 파이프라인을 유지할 수 있다.
