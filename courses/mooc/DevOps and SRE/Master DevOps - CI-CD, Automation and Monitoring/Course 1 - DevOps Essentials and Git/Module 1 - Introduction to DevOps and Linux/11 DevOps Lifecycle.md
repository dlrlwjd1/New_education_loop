# DevOps Lifecycle

## 개요
- 기획부터 모니터링까지 DevOps 라이프사이클의 8단계와 각 단계별 대표 도구를 설명.

## 내용
### 라이프사이클 단계와 도구
1. **Plan** — 무엇을·왜 만들지, 성공 기준을 정의. Product Owner·개발자·테스터·운영이 함께 참여. 도구: Jira, Confluence, Trello, Azure Boards
2. **Code** — 처음부터 협업·버전관리 기반으로 개발. 브랜치 작업, PR, 코드 리뷰. 도구: Git(GitHub/GitLab/Bitbucket)
3. **Build** — 최신 코드를 컴파일·패키징해 배포 준비. 도구: Jenkins, Maven, Gradle, Bamboo
4. **Test** — 매 빌드 직후 자동화 테스트로 버그를 저렴할 때 조기 발견. 도구: Selenium, JUnit, TestNG, SonarQube(코드 품질)
5. **Release** — 패키징·버전 태깅·안정성 검증. 작고 빈번한 릴리스로 리스크를 줄이고 롤백을 쉽게 함. 도구: Jenkins Pipelines, GitHub Actions, CircleCI
6. **Deploy** — 스테이징/프로덕션에 무중단 배포. Blue-green, rolling update, canary release 전략. 도구: Docker, Kubernetes, Ansible, Helm
7. **Operate** — 성능·가동시간·백업·패치를 유지하는 공동 책임. 도구: Chef, Puppet, Kubernetes
8. **Monitor** — 가동시간·사용량·오류·성능을 실시간 추적. 도구: Prometheus, Grafana, Nagios, ELK Stack

## 예시
- 문제 발생 시 사용자 신고를 기다리는 게 아니라, 모니터링 도구가 무엇이·언제·어디서 발생했는지 팀에 먼저 알려준다.

## 요약
- DevOps 라이프사이클은 Plan→Code→Build→Test→Release→Deploy→Operate→Monitor가 서로 피드백을 주고받는 연속적인 순환 구조이며, 한 번으로 끝나는 프로세스가 아니라 매 릴리스·피드백·인시던트마다 계속 발전한다.
