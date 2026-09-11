# What is Build Automation

## 개요
- 빌드(Build)의 정의와 빌드 자동화(Build Automation)의 개념, 전체 파이프라인에서의 위치, 이점과 도전 과제를 설명.

## 내용
### Build란
- 소프트웨어 개발 라이프사이클의 일부로 다음 단계를 포함한다.
  1. **컴파일(Compiling)** — 코드를 기계가 이해하는 바이너리(0과 1)로 변환
  2. **단위 테스트(Unit Testing)** — 코드가 제대로 동작하는지 검증
  3. **패키징(Packaging)** — 배포 가능한 형태로 묶음

### Build Automation이란
- 자동화 도구나 스크립트로 빌드 단계(컴파일·패키징·테스트)를 반복 수행하는 과정.
- 버전 관리 도구(Git, GitHub, GitLab 등)와 쉽게 통합되어, 개발자가 커밋하면 빌드 도구가 코드를 가져와 빌드를 수행한다.
- 빌드 도구: Maven, Gradle, MSBuild 등
- 빌드 도구만으로는 전체 프로세스를 자동화할 수 없어 **CI 서버**(Jenkins, CircleCI, Travis, Bamboo, GitHub Actions, GitLab CI/CD)와 연동한다 — 커밋 시 CI 서버가 빌드 도구를 트리거한다.

### 현대적 빌드 프로세스에 추가된 요소
- 코드 품질·코드 리뷰·보안 테스트: SonarQube, JUnit, Selenium, PMD(Programming Mistake Detector) 등
- 빌드 산출물(바이너리)은 **Artifactory/Registry**(Nexus, JFrog Artifactory)에 저장
- Artifactory 업데이트는 Teams·Slack·Jira 등으로 팀에 알림
- Docker, Kubernetes, Ansible, Terraform이 이 바이너리를 가져와 컨테이너/VM에 배포

### 이점
- **일관성** — 모든 서버에서 동일한 빌드
- **속도** — 자동화로 빌드 시간 단축
- **오류 감소** — 사람의 실수 감소
- **CI 통합** — Jenkins 등과 연동해 오류 시 개발자에게 즉시 알림(빠른 피드백)
- **상세 로그** — CI 서버에 상세 출력 로그가 남아 트러블슈팅·재현이 쉬움
- **확장성** — 여러 환경에 더 빠르게 배포
- **협업** — 개발자·테스터·통합팀 간 협업 촉진(DevOps 핵심 원칙)

### 도전 과제
1. 버전 관리·빌드·CI 도구 선택 및 통합이 처음엔 번거로울 수 있음 (도구 궁합을 알면 쉬워짐)
2. 여러 도구를 함께 유지보수해야 함 (단, GitLab CI/CD·GitHub Actions는 별도 유지보수가 필요 없음)
3. 도구/스크립팅 언어(Jenkins의 Groovy, GitLab CI/CD의 YAML)에 익숙하지 않으면 디버깅이 어려움
4. **과도한 자동화(over-automation)** — 실패 시 트러블슈팅·롤백 계획 없이 전체를 자동화하면 리스크가 됨

## 요약
- 빌드 자동화는 컴파일·테스트·패키징을 CI 서버와 연동해 자동화하는 것으로, 일관성·속도·협업이라는 이점이 있지만 도구 통합과 과도한 자동화의 리스크를 함께 고려해야 한다.
