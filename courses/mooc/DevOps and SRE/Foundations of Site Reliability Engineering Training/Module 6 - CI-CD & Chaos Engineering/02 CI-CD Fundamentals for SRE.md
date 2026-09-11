# CI/CD Fundamentals for SRE (SRE를 위한 CI/CD 기초)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **CI/CD**의 정의, 이점, 파이프라인 구성 요소, 도구를 SRE 관점에서 다룬다.

## 내용

### CI/CD란
- **지속적 통합(Continuous Integration, CI)** — 코드 변경을 공유 저장소에 **자주 병합**하고 **자동으로 테스트**. 브랜치 전략을 얕게 유지하고 잦은 병합으로 문제를 조기에 파악.
- **지속적 전달/배포(Continuous Delivery/Deployment, CD)** — 코드베이스를 항상 **배포 가능 상태**로 유지, 개발→스테이징→프로덕션이 한 환경처럼 "서프라이즈 없이" 이동. 완전 자동화된 릴리스(수동 승인 최소화, 단 코드 리뷰 등 게이트 체크는 있을 수 있음).
- → 인적 오류를 줄이고 대규모로 **안정적 소프트웨어를 신뢰성 있게 전달**.

### 이점
- **신뢰성 향상** — 자동 테스트·배포로 인적 오류 감소, 일관된 처리.
- **빠른 복구** — 배포 실패 시 마지막 정상 버전으로 **롤백(rollback)**.
- **관찰 가능성 향상** — 배포 통계·테스트 결과·변경 이력 메트릭으로 가시성·거버넌스 확보.
- **토일 감소(reduced toil)** — 반복 작업 자동화 → SRE가 고부가 작업에 집중.

### CI/CD 파이프라인 구성 요소
1. **소스 제어(source control)** — Git 등.
2. **빌드 자동화(build automation)** — 컴파일·아티팩트 생성·테스트 실행.
3. **테스트 자동화(test automation)** — 기능·구현·사용자 수용(UAT)·취약점 테스트.
4. **배포 자동화(deployment automation)** — 스테이징·프로덕션에 최소 수동 개입으로 푸시.
5. **모니터링·피드백**.

### 도구
- **CI 도구**: Jenkins, GitHub Actions, CircleCI, GitLab CI, TeamCity, Azure DevOps.
- **CD 도구**: Spinnaker, Argo CD, Flux, Octopus Deploy, AWS CodeDeploy, Google Cloud Deploy, Azure DevOps.
- → 모두 쓰는 게 아니라 **유스케이스에 맞게 선택**.

## 요약
- **CI**(잦은 병합+자동 테스트) + **CD**(항상 배포 가능+자동 릴리스)로 인적 오류를 줄이고 신뢰성 있게 배포.
- 이점: **신뢰성·빠른 롤백·관찰 가능성·토일 감소**.
- 파이프라인: **소스 제어 → 빌드 → 테스트 → 배포 → 모니터링**. 도구는 유스케이스별 선택.
