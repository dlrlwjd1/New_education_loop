# Integrating Prometheus and Grafana for Jenkins CI-CD Pipelines

## 개요
- Jenkins 파이프라인에 Prometheus와 Grafana를 통합하는 이점과, 설정하는 전반적인 절차를 정리.

## 내용
### 통합의 이점
1. **더 나은 의사결정** — 빌드 성능 추세를 분석해 파이프라인 효율을 높이는 방향으로 의사결정 가능.
2. **실시간 모니터링** — Jenkins 빌드가 진행될 때마다 빌드 시간, 성공률, CPU·메모리 등 리소스 사용량을 모니터링.
3. **실행 가능한 인사이트(Actionable Insights)** — 파이프라인 실패, 실패한 Job, 느린 빌드, 리소스 급증 같은 문제를 감지하면 즉시 대응 가능.
4. **선제적 문제 탐지** — 파이프라인 실패 시 알림을 설정해 두면 수동으로 확인하지 않아도 즉시 알림을 받아 대응 가능. 예: 빌드가 1시간 이상 걸리는 것처럼 정상 범위를 벗어난 경우도 즉시 파악.

### Prometheus 설정 절차
1. 모니터링 서버(원하는 서버)에 Prometheus를 다운로드해 설치·구성.
2. Jenkins에 **메트릭 플러그인(Metrics Plugin)**을 설치해 Jenkins 지표를 Prometheus에 노출.
   - 플러그인이 수집하는 데이터: 빌드 시간, 빌드 실패 여부, Job 성공/실패율, 리소스 사용량 등.
3. Prometheus 설정 파일을 편집해 Jenkins로부터 지표를 스크랩(scrape)하도록 구성 — Prometheus는 Pull 방식으로 동작하므로, Jenkins Metrics Plugin이 노출하는 엔드포인트를 Prometheus 설정에 등록해 지표를 가져옴.

### Grafana 설정 절차
1. 모니터링 서버에 Grafana를 설치 — Docker로 실행하거나 독립 서비스로 설치 가능. Kubernetes 환경이라면 별도의 Grafana Helm Chart를 클러스터에 배포.
2. Grafana에서 Prometheus URL을 입력해 **Prometheus를 데이터 소스로 연결**.
3. **대시보드 생성** — Jenkins용으로 미리 만들어진(prebuilt) 대시보드를 가져오거나(import), Job 실패, 성공률, 빌드 실패 등 원하는 핵심 지표만 표시하도록 커스터마이징.

## 요약
- Jenkins에 Metrics Plugin을 설치해 빌드 시간·성공률·리소스 사용량 같은 지표를 노출시키고 Prometheus 설정에서 이를 Pull 방식으로 스크랩한 뒤, Grafana에서 Prometheus를 데이터 소스로 연결해 미리 만들어진 대시보드를 가져오거나 필요한 지표만 커스터마이징한 대시보드로 시각화하면 Jenkins CI/CD 파이프라인의 실시간 모니터링과 선제적 문제 탐지가 가능해진다.
