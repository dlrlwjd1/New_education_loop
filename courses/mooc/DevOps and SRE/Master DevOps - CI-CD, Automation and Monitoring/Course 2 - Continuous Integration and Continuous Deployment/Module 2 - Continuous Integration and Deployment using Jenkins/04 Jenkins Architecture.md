# Jenkins Architecture

## 개요
- Jenkins가 DevOps 파이프라인에서 다른 도구들과 어떻게 통합되어 동작하는지 전체 흐름을 설명.

## 내용
### Jenkins의 통합 흐름
1. **Git 연동** — Git에서 이벤트(커밋)가 발생하면 즉시 코드를 가져옴 → 지속적인 버전 관리·통합 지원
2. **빌드** — 컴파일, 단위 테스트, 패키징 수행 (Maven, Gradle 등과 연동)
3. **테스트 환경 배포** — Selenium 등 자동화 도구로 기능 테스트 수행
4. **스테이징 배포** — 성능·부하 테스트 완료 후 다음 서버로 배포
5. **문제 발생 시 개발팀에 알림** → 개발자가 수정 후 다시 GitHub에 커밋 → Jenkins가 새 코드를 가져와 다시 빌드
6. **프로덕션 배포** — pre-prod 환경 테스트 후 최종적으로 프로덕션에 배포

### Jenkins 아키텍처 동작 방식
- **Source Code Management** — GitHub, GitLab, Bitbucket 등 버전 관리 도구와 긴밀하게 연결되어 코드를 가져옴
- **Build Tools 통합** — Maven, Gradle 등으로 컴파일·테스트·패키징
- **기능 테스트** — 테스트 환경에서 수행
- **배포** — 다음 환경(release/pre-prod/production)으로 배포

### 브랜치별 조건부 파이프라인
- GitHub에 test, release, production 같은 브랜치가 있으면 Jenkins가 이를 확인해 파이프라인에 조건을 둘 수 있다 — 어느 브랜치의 코드를 가져와 빌드·배포할지 결정.
- **Multi-branch Pipeline** 프로젝트를 사용하면 저장소의 모든 브랜치마다 빌드-테스트-배포 단계를 가진 파이프라인이 자동 생성된다.

### 전체 배포 흐름
- 테스트 환경 통과 → **release/pre-prod 환경**으로 배포 후 다시 기능 테스트 → 통과한 코드가 최종적으로 **production 환경**으로 이동.

## 요약
- Jenkins는 SCM(GitHub 등)에서 코드를 가져와 빌드 도구로 컴파일·테스트·패키징하고, 테스트→pre-prod→production 순으로 배포하며 문제 발생 시 개발자에게 알리는 구조로 DevOps 파이프라인의 중심 역할을 한다.
