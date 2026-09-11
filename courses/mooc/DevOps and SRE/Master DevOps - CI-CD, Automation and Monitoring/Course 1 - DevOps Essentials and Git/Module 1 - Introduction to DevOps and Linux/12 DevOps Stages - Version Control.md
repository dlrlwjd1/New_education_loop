# DevOps Stages - Version Control

## 개요
- DevOps 라이프사이클의 7가지 핵심 스테이지를 개괄하고, 그중 첫 단계인 버전 관리(version control)를 심화 설명.

## 내용
### DevOps의 7가지 스테이지 (개괄)
1. Version Control (Source Code Management) — 모든 코드/설정 변경 추적
2. Continuous Integration — 공유 저장소에 자주 통합, 자동 빌드·테스트
3. Continuous Testing — 기능뿐 아니라 보안·성능·안정성까지 검증
4. Continuous Deployment — 검증된 코드를 수동 개입 없이 프로덕션과 유사한 환경으로 이동
5. Containerization — 앱과 의존성을 컨테이너로 패키징해 환경 간 일관성 보장 (Docker, Kubernetes)
6. Configuration Management — 인프라 설정을 자동화·일관되게 유지 (Ansible, Puppet, Chef)
7. Continuous Monitoring — 실시간으로 애플리케이션·인프라 상태 관찰

### 버전 관리(Version Control) 심화
- 모든 파일 변경, 변경한 사람, 이유까지 기록해 프로젝트 전체 이력을 신뢰할 수 있게 한다.
- **Centralized**: 하나의 중앙 서버에 의존 (서버 다운 시 팀 전체가 막힘)
- **Decentralized (예: Git)**: 개발자마다 전체 저장소의 로컬 사본을 가져 오프라인 작업 후 동기화 가능 — 빠르고 독립적이며 회복력 있는 워크플로우

### 버전 관리가 가능하게 하는 것
- 시간에 따른 변경 이력 추적, 버그 도입 시점 파악
- 코드뿐 아니라 문서·서버 스크립트·설정 템플릿·이미지 등 모든 파일 유형 관리
- 여러 개발자의 동시 작업(협업) 지원, 서로의 작업을 덮어쓰지 않음
- 이전 버전으로 복원(rollback) 가능
- 브랜칭(branching)으로 기능/수정을 독립적으로 개발, 머징(merging)으로 메인에 통합

### 대표 도구
- **Git** — 분산형(distributed), 가장 널리 쓰임, 서버 다운 시에도 작업 지속 가능
- **Subversion(SVN)** — 중앙집중형, 여전히 많은 조직에서 사용
- **Mercurial** — Git과 유사한 분산형, 단순함·속도 중시
- **Perforce Helix Core** — 대용량 코드베이스/바이너리 파일을 다루는 대기업(게임·자동차 업계)에 최적화

### Git의 변경 관리 흐름
1. Working Directory — 로컬에서 파일 수정
2. `git add` — 스테이징 영역으로 이동 (커밋할 변경사항 선별)
3. `git commit` — 로컬 저장소에 스냅샷과 메시지 기록
4. `git push` — 원격 저장소(GitHub/GitLab)로 전송, 팀과 공유
5. `git pull` — 원격의 최신 변경사항을 로컬에 반영
6. `git checkout` — 브랜치 전환 또는 이전 버전으로 이동
7. `git merge` — 서로 다른 브랜치의 변경사항을 통합

## 요약
- 버전 관리는 단순한 안전장치가 아니라 현대 DevOps를 가능하게 하는 기반이며, Git의 분산 모델이 빠르고 회복력 있는 협업 워크플로우의 핵심이다.
