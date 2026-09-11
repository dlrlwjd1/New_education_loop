# Maven Profiles

## 개요
- 환경별로 빌드 설정을 다르게 가져갈 수 있게 해주는 Maven Profile의 개념과 활용 범위(scope), 활성화 방법을 설명.

## 내용
### Maven Profile이란
- `pom.xml`의 로직을 바꾸지 않고도 다른 환경 설정·유스케이스에 맞게 빌드 프로세스를 커스터마이징할 수 있는 기능.
- `pom.xml`의 기본 설정을 오버라이드하거나 확장하는 설정 값들의 집합.

### Profile의 적용 범위(Scope)
- 환경(environment)별, 운영체제(OS)별, 커맨드라인 시스템 속성(system property)별로 범위를 지정 가능.
- 프로젝트 단위(`pom.xml`), 사용자 단위, 또는 전역(global) `settings.xml`에 설정할 수 있다.

### 주요 활용 사례
- **환경별 설정** — `pom.xml`에 dev/production 등 프로파일 섹션 추가
- **의존성 포함/제외** — 특정 사용자·환경에 대해 `settings.xml`에서 특정 의존성을 추가/제외
- **환경별 플러그인 실행** — 특정 프로젝트에만 적용되는 플러그인을 `pom.xml`에 추가
- **컴파일러 버전 고정** — 모든 사용자가 특정 컴파일러 버전을 쓰도록 `settings.xml`에 지정
- **OS 기반 활성화** — Linux 기반 OS 등 조건에 따라 프로파일 활성화
- **시스템 속성 기반 활성화** — 환경변수 값(예: `ci`, `prod`)에 따라 활성화
- 커스텀 매개변수를 전역 properties나 `pom.xml`에 추가 가능

### 프로파일 활성화
- `<activeByDefault>` 태그로 기본 활성화 프로파일 지정 가능.
- 로컬 사용자 프로파일은 `~/.m2/settings.xml` 파일에 위치.

## 요약
- Maven Profile은 `pom.xml`의 핵심 로직을 건드리지 않고 환경·OS·시스템 속성에 따라 설정을 오버라이드할 수 있게 해주며, 프로젝트별(`pom.xml`)·사용자별·전역(`settings.xml`)으로 범위를 나누어 관리한다.
