# Jenkins Monitoring - Load Statistics

## 개요
- Jenkins에 기본 내장된 System Log·Load Statistics 화면과, 추가 모니터링 플러그인(Monitoring, Build Failure Analyzer, Disk Usage) 설치를 실습.

## 내용
### 기본 제공 모니터링 (플러그인 설치 없이)
- **Manage Jenkins → System Information**
  - **System Log** — Jenkins 서버(작업이 아니라 시스템) 자체의 로그. 플러그인 로드, 디스크 사용량 수집, 경고 등을 확인 가능. Recorder를 추가해 특정 레벨의 새 로그를 기록할 수도 있음.
  - **Load Statistics** — Jenkins 서버의 현재 부하를 보여줌. 4가지 지표를 추적:
    - **Online Executors** — 온라인 상태인 executor 수
    - **Busy Executors** — 작업 중인 executor(빨간색으로 표시)
    - **Available Executors** — 사용 가능한 executor(주황색)
    - **Queue Length** — 대기 중인 job 수
  - 그래프는 1분/1시간 등 시간 구간별로 10초마다 갱신되는 지수 이동 평균(exponential moving average)으로 표시된다.
  - 표시 형식은 Short/Medium/Long 중 선택 가능 (Medium은 1분 간격으로 표시해 가독성이 좋음).

### 추가 모니터링 플러그인 설치
- **Manage Jenkins → Plugins → Available**에서 검색·설치:
  1. **Monitoring** — Java Melody 기반, Jenkins 서버 모니터링 리포트 생성
  2. **Build Failure Analyzer** — 빌드 로그를 스캔해 어떤 빌드가 왜 실패했는지 분석
  3. **Disk Usage** — Jenkins 서버의 디스크 사용량 집계
- 설치 후에는 재시작이 필요할 수도, 필요 없을 수도 있음.
- 설치 완료 후 **Manage Jenkins**에 "Monitoring", "Disk Usage" 등 새로운 메뉴 항목이 추가되어 확인 가능.

## 요약
- Jenkins는 플러그인 없이도 System Log와 Load Statistics(Online/Busy/Available Executors, Queue Length)를 기본 제공하며, Monitoring/Build Failure Analyzer/Disk Usage 플러그인을 추가하면 더 상세한 서버 상태·빌드 실패 원인·디스크 사용량까지 모니터링할 수 있다.
