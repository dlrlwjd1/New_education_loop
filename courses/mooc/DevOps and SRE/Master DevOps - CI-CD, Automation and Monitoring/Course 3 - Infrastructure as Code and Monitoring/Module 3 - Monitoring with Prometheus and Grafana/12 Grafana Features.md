# Grafana Features

## 개요
- Grafana의 6가지 핵심 기능 — 시각화, 알림, 데이터 통합, 협업, 확장, Grafana Cloud — 를 상세히 정리.

## 내용
### 1. Visualize(시각화) — 커스터마이징 가능한 대시보드
- 라인 그래프, 바 차트, 파이 차트, 히트맵, 테이블, 게이지 등 다양한 시각화 옵션을 제공.
- 인프라, 애플리케이션, 비즈니스 KPI 등 각 사용 사례에 맞는 커스텀 대시보드 구축 가능.

### 2. Alerting(알림)
- 알림이 패널(panel)에 내장되어 데이터를 보는 화면에서 바로 임계값(threshold)을 정의 가능(예: Scrape Duration 패널에서 최댓값·최솟값을 보며 알림 기준 설정).
- 지표가 조건을 초과하면 알림 트리거(예: CPU 사용률이 5분간 90% 초과 시 알림).
- Email, Slack, PagerDuty, Microsoft Teams, Webhook 등 다양한 채널로 알림 지원.

### 3. Unify(통합) — 중앙 집중식 데이터 통합
- 다양한 데이터베이스를 지원해 하나의 대시보드 안에서 여러 데이터 소스를 매끄럽게 통합 가능.
- 지원 데이터 소스 예시:
  - 시계열 DB — Prometheus, InfluxDB, Graphite.
  - 클라우드 기반 — AWS CloudWatch.
  - 로그 — Elasticsearch.
  - 데이터베이스 — MySQL, BigQuery.
- 여러 애플리케이션·팀을 위한 통합 대시보드 제공.

### 4. Collaborate(협업) — 팀 기반 공유
- 팀 간 데이터와 대시보드 공유를 통해 협업 촉진.
- 역할 기반 권한(role-based permissions)으로 대시보드를 공유하고, 그래프에 주석(annotate)이나 댓글(comment)을 남길 수 있음.

### 5. Extend(확장) — 플러그인과 커스터마이징
- 공식 라이브러리에서 다양한 플러그인 선택 가능 — 테마와 커스텀 시각화도 지원.
- 플러그인 예시: Google Analytics, Amazon Aurora, AppDynamics 등.

### 6. Data Source Integration(데이터 소스 통합)
- 100개 이상의 공식·커뮤니티 데이터 소스를 지원.
- Prometheus, Elasticsearch, MySQL처럼 서로 다른 플랫폼에 흩어진 데이터도 중앙 집중식으로 모니터링 가능.

### Grafana Cloud
- Grafana의 관리형·확장 가능한 호스팅 서비스 — 엔터프라이즈급 성능, 보안, 손쉬운 클라우드 통합 제공(성능, 확장성, 보안 포함).

## 요약
- Grafana는 다양한 시각화 옵션(Visualize), 패널 기반 임계값 알림(Alerting), 100개 이상의 데이터 소스 통합(Unify/Data Source Integration), 역할 기반 팀 협업(Collaborate), 플러그인 확장(Extend), 그리고 관리형 호스팅인 Grafana Cloud라는 6가지 핵심 기능으로 다양한 환경의 모니터링을 하나의 플랫폼에서 아우른다.
