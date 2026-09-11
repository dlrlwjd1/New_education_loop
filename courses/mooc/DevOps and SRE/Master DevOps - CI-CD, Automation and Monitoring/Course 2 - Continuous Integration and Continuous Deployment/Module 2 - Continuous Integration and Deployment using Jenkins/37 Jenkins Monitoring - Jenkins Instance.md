# Jenkins Monitoring - Jenkins Instance

## 개요
- Monitoring 플러그인의 상세 지표, Disk Usage, Build Failure Analyzer 설정, Prometheus 연동을 실습.

## 내용
### Monitoring 플러그인 (Java Melody 기반)
- 주/월/년 단위로 지표 조회 가능, PDF로 다운로드 가능
- 확인 가능한 지표: 사용 메모리, 활성 스레드, CPU 사용량, 분당 히트 수, HTTP 에러, 세션 수, HTTP 평균 응답시간, CPU 시간 평균/표준편차, Java 메모리, 시스템 로드, 서버·Java 버전 정보, 스레드 목록
- Worker Node(에이전트)가 연결되어 있으면 해당 노드의 지표도 표시됨

### Disk Usage 플러그인
- Job 디렉터리와 Workspace가 차지하는 디스크 공간을 표시
- "Record build disk usage", "Record workspace usage" 옵션으로 Job별 사용량 기록 가능

### Build Failure Analyzer 플러그인
- 실패한 빌드의 원인을 분석해 빌드 페이지에 표시하는 플러그인 — **처음에는 빈 지식 베이스(knowledge base)**로 시작하므로 실패 원인을 직접 등록해야 한다.
- 등록 방법: 대시보드 → **Failure Cause Management** → **Create new**
  - 이름(예: "Build fail if repo not found"), 카테고리, 설명 입력
  - **Indication**(로그에서 패턴 매칭할 문자열, 예: git 관련 오류 패턴) 등록
- 이후 해당 패턴이 로그에 나타나는 빌드 실패가 발생하면 자동으로 원인이 표시되어 트러블슈팅에 도움을 준다.

### Prometheus 연동
- Jenkins에 **Prometheus 플러그인**을 설치하면 서버 데이터를 수집해 Grafana로 전송·시각화할 수 있다 — 외부 모니터링 도구를 쓰는 이점.

## 요약
- Monitoring 플러그인은 메모리·CPU·스레드 등 상세 시스템 지표를, Disk Usage는 Job/Workspace 디스크 사용량을, Build Failure Analyzer는 (직접 등록한 패턴 기반으로) 빌드 실패 원인 분석을 제공하며, Prometheus 플러그인을 추가하면 Grafana와 연동한 외부 모니터링까지 확장할 수 있다.
