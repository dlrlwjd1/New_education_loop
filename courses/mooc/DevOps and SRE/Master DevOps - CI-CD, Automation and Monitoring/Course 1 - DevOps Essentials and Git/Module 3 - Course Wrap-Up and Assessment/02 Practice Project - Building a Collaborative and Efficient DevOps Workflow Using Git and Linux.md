# Practice Project - Building a Collaborative and Efficient DevOps Workflow Using Git and Linux

## 개요
- 스타트업 CodeCraft의 사례를 통해 Git·Linux 기반의 협업형 DevOps 워크플로우를 구축하는 실습 프로젝트.

## 내용
### 시나리오
- CodeCraft는 프리랜서·분산 팀을 위한 웹 기반 작업 관리 도구를 만드는 빠르게 성장 중인 스타트업.
- 엔지니어링 팀이 커지면서 코드 협업·버전 관리·수동 배포에서 문제가 발생, Git과 Linux 기반의 표준화된 DevOps 워크플로우 도입이 필요한 상황.

### 초기 문제점
1. **버전 관리 부재** — 이메일/클라우드로 코드 파일을 수동 공유 → 잦은 덮어쓰기, 코드 손실, 추적 불가
2. **비체계적 협업** — 모든 개발이 하나의 main 브랜치에서 이루어져 충돌과 빌드 깨짐 빈발
3. **수동적이고 오류가 많은 배포** — FTP·SSH로 수동 배포 → 사람의 실수, 환경 불일치, 프로덕션 다운타임 위험
4. **Linux 숙련도 부족** — 기본 Linux 명령어·서버 운영에 익숙하지 않아 이슈 해결 지연

### 목표 및 수행 과제
1. **Git 버전 관리 시스템 구축** — Linux 환경에 Git 설치, 사용자 프로필 설정, 저장소 초기화 후 GitHub/GitLab에 push
2. **Git 브랜칭 워크플로우 구현** — GitFlow 기반 브랜칭 전략(`main`, `develop`, `feature/*`, `hotfix/*`) 정의, 브랜치 생성·전환·병합, Pull/Merge Request로 협업·리뷰 촉진
3. **머지 충돌 시뮬레이션과 해결** — 기능 브랜치 간 의도적 충돌 생성 후 CLI/GUI 도구로 해결, squash·rebase로 커밋 이력 정리
4. **고급 Git 기법 적용** — cherry-pick으로 선택적 커밋 이동, interactive rebase로 이력 정리, git stash로 미완성 작업 관리
5. **Git Hooks로 자동화** — 코드 포맷팅/린팅을 강제하는 pre-commit 훅, 알림·자동 빌드를 트리거하는 post-merge 훅으로 팀 전체의 일관성 확보
6. **Linux 기반 개발·배포 환경 관리** — 파일시스템 탐색, 소스 코드 권한/그룹 관리, 셸 스크립트로 Git 작업(pull, backup, reset) 자동화, SSH·cron으로 저장소 동기화/배포 시뮬레이션 스케줄링

### 기대 결과
| 목표 | 결과 |
|---|---|
| 협업 개발 | 팀원들이 최소한의 충돌로 독립적으로 기능을 개발 |
| 버전 관리 숙련 | Git 기본기와 고급 워크플로우에 익숙해짐 |
| 깔끔한 프로젝트 이력 | 읽기 쉽고 유지보수 가능한 커밋 이력 유지 |
| Hooks를 통한 자동화 | 점검·알림 같은 반복 작업을 Git Hooks로 자동화 |
| Linux 숙련도 | Linux 명령어·스크립트로 DevOps 작업 수행 가능 |

## 요약
- Git과 Linux를 중심으로 한 구조화된 DevOps 워크플로우를 구축하면 CodeCraft는 독립적인 기능 개발, 신속한 충돌 해결, 반복 작업 자동화가 가능한 확장 가능하고 효율적인 협업 시스템으로 전환되며, 이는 이후 단계의 CI/CD를 위한 견고한 토대가 된다.
