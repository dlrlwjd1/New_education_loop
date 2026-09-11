# Why Gradle in DevOps

## 개요
- DevOps 파이프라인에서 Gradle의 역할, CI 도구와의 통합, Gradle 생태계의 주요 플러그인·기능을 설명.

## 내용
### DevOps 파이프라인에서 Gradle의 역할
- 빌드·테스트·배포 프로세스를 자동화·표준화·최적화하는 빌드 자동화 도구.
- DevOps의 핵심 목표인 "더 빠른 속도의 딜리버리"를 위한 자동화 흐름을 만든다.
- 대규모 프로젝트의 확장과 더 빠른 배포를 지원.

### CI 도구와의 통합
- 버전 관리 시스템과 연동 — 개발자가 커밋하면 Gradle이 변경된 부분만 가져와 빌드.
- Jenkins, GitLab CI/CD, Bamboo, GitHub Actions 등과 매끄럽게 통합 — GitLab CI/CD에는 Gradle이 내장 도구로 제공되기도 함.
- 테스트 오류를 개발자에게 즉시 알려 빠르게 수정하도록 지원 — 변경된 부분만 빌드해 완료 속도를 높이고 빠른 피드백을 제공.

### Gradle 생태계의 주요 기능
- **플러그인** — Java, Application, Maven, Kotlin, Android, JaCoCo, Checkstyle, SpotBugs 등 언어·플랫폼별 다양한 플러그인 제공
- **Java 컴파일 플랫폼** — Java 코드를 쉽게 컴파일·실행
- **Gradle Wrapper** — 개발자와 CI 도구가 항상 동일한 버전의 Gradle을 사용하도록 보장 → "내 컴퓨터에서는 되는데" 문제 방지
- **테스트 지원** — JUnit, TestNG, Spock 등 단위 테스트 도구 기본 지원
- **코드 품질 분석** — Checkstyle, PMD, SonarQube 통합
- **패키징** — war, jar, snapshot 파일 생성. Android와 통합 시 `.apk` 파일도 빌드 가능

## 요약
- Gradle은 버전 관리·CI 도구와 매끄럽게 통합되어 변경된 부분만 빠르게 빌드·테스트하며, Gradle Wrapper로 버전 일관성을 보장하고 다양한 플러그인으로 테스트·코드 품질·패키징까지 아우르는 DevOps 파이프라인의 핵심 빌드 도구 역할을 한다.
