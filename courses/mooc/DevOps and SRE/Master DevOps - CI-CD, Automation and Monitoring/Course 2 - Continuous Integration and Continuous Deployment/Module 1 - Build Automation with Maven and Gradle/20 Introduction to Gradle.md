# Introduction to Gradle

## 개요
- Gradle의 정의, 핵심 특징, 3가지 단계(phase), 이점을 설명.

## 내용
### Gradle이란
- 강력하고 유연한 현대적 빌드 자동화 도구. Ant·Maven과 유사한 기능을 제공하지만 **Groovy** 또는 **Kotlin** 기반 DSL(Domain-Specific Language)로 스크립팅한다.
- 컴파일·테스트·패키징·배포 과정을 자동화하며, Java·Android 개발에서 널리 쓰이고 Kotlin, Groovy, Scala, C/C++ 빌드도 지원.

### 핵심 특징
1. **증분 빌드(Incremental Build)** — 변경된 부분만 다시 빌드해 대규모 프로젝트에서 성능 향상
2. **Multi-project Build** — 여러 모듈·서브프로젝트·애플리케이션을 하나의 통합 빌드 명령으로 처리
3. **유연성** — Groovy 또는 Kotlin DSL로 스크립트 작성, 배우기 쉽고 커스터마이징 용이

### Gradle의 3가지 단계(Phase)
1. **Initialization** — 메인 프로젝트, 서브프로젝트, 소스 코드 등 빌드에 포함될 요소 식별
2. **Configuration** — 초기화 후 생성된 디렉터리에 빌드할 작업(task)·Java 코드 추가
3. **Execution** — Gradle 명령을 실행해 실제로 빌드·실행

### 이점
- 증분 빌드로 대규모 코드베이스에서 성능 향상
- 멀티 프로젝트 빌드로 확장 가능
- Maven·Ivy 저장소를 활용해 외부 라이브러리 관리 (확장성)
- Ant보다 신뢰할 수 있고 계속 발전하는 도구
- 범용 도구 — Java, Android 등 다양한 플러그인 지원, 커스텀 플러그인 생성 가능
- Eclipse, IntelliJ, Android Studio 등 IDE와 쉽게 통합
- Gradle에서는 컴파일·테스트 등 모든 작업이 **Task**라는 단위로 표현되어 배우기 쉽다.

## 요약
- Gradle은 Groovy/Kotlin DSL 기반의 유연한 빌드 도구로, 증분 빌드와 멀티 프로젝트 지원을 통해 대규모 프로젝트에서 Ant·Maven보다 뛰어난 성능과 확장성을 제공하며, 모든 작업을 Task 단위로 다룬다.
