# Gradle Wrapper

## 개요
- 모든 환경에서 동일한 Gradle 버전으로 빌드하도록 보장하는 Gradle Wrapper의 개념, 생성 파일, 명령어, 사용 이유를 설명.

## 내용
### Gradle Wrapper란
- 노트북, CI 서버(Jenkins, CircleCI), 프로덕션 빌드 환경 등 모든 환경에서 빌드 일관성을 보장하는 도구.
- Gradle 아티팩트를 다운로드·배포하고, Gradle 사용자 홈에 배포판을 저장·압축 해제하는 역할.

### 사용 방법
- 새 프로젝트 셋업 시 wrapper를 추가해 모든 환경에서 일관성 유지
- 기존 프로젝트 실행 시에도 사용 — 의존성·버전 변경 없이 동일하게 동작 보장
- wrapper 자체를 업그레이드해 최신 Gradle 버전 사용 가능

### Wrapper 생성 (`gradle wrapper` 명령)
생성되는 파일:
- **gradlew** — Unix/Mac에서 Gradle을 실행하는 셸 스크립트
- **gradlew.bat** — Windows에서 실행하는 배치 스크립트
- **gradle-wrapper.jar** — Gradle을 다운로드하는 부트스트랩 코드
- **gradle-wrapper.properties** — 사용할 Gradle 버전과 다운로드 URL 지정

### 주요 명령어

```bash
./gradlew build              # 프로젝트 빌드
./gradlew test                # 테스트 케이스 실행
./gradlew wrapper --gradle-version 8.2   # 특정 Gradle 버전으로 wrapper 설정
./gradlew --version           # Gradle 버전 확인
```

### 사용해야 하는 이유
- **일관성** — 모든 환경에서 동일한 Gradle 버전 사용, 버전 불일치 방지
- **간편한 설정** — 반복 설치 불필요
- CI 도구·버전 관리 도구와 쉽게 통합
- **크로스 플랫폼** — Windows, Mac, Linux에서 동일하게 동작
- CI/CD 전 환경에서 빌드 일관성 보장

## 요약
- Gradle Wrapper는 `gradlew`(Unix)/`gradlew.bat`(Windows) 스크립트와 `gradle-wrapper.properties`로 지정된 버전을 통해, 어떤 환경에서든 동일한 Gradle 버전으로 일관되게 빌드되도록 보장하는 필수 도구다.
