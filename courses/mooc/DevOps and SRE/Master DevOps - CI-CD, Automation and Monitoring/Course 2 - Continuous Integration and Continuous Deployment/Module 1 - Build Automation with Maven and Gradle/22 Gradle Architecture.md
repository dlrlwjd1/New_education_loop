# Gradle Architecture

## 개요
- Gradle의 모듈형 아키텍처 — Build Lifecycle, Build Scripts, Task, 플러그인, 병렬 실행을 설명.

## 내용
### 모듈형 아키텍처
- 확장성·독립적 사용·모듈 재사용·병렬 빌드를 가능하게 하는 구조.
- 핵심 구성요소: **Build Lifecycle**, **Build Scripts**, **Task**

### Build Lifecycle의 3단계
1. **Initialization** — 빌드에 포함될 프로젝트 결정, Gradle 설정 및 프로젝트 구조 셋업
2. **Configuration** — 각 프로젝트의 `build.gradle` 파일을 평가, task를 생성·설정(단, 실행하지는 않음), 컴파일·테스트·패키징에 필요한 플러그인 적용, 의존성 체크 설정
3. **Execution** — 요청된 task와 그 의존 task들을 실행. Gradle의 그래프 기능으로 실행 순서 결정. **증분 실행(incremental execution)**, up-to-date 체크, 의존성 캐싱 지원

### Build Scripts
- Kotlin(`build.gradle.kts`) 또는 Groovy DSL로 작성.
- task, 의존성, 플러그인, 설정을 정의 — Java 홈, Java 세부사항, 애플리케이션 정보 등을 포함해 유연하고 커스터마이징된 프로젝트 설정을 가능하게 함(예: Android 관련 설정 추가).

### Task
- Gradle에서 하는 모든 작업의 기본 단위 — 컴파일, 테스트, 패키징(war/jar/apk) 등.
- 각 task는 다른 task에 의존할 수 있다.

### 플러그인 관리
- **Built-in Plugins** — Gradle이 기본 제공(Java 컴파일·테스트 등)
- **Custom Plugins** — 프로젝트 전용 작업을 위해 직접 생성 가능
- 플러그인은 컴파일·테스트·패키징 과정에 재사용 가능한 빌드 로직을 추가한다.

### 병렬 실행(Parallel Execution)
- `--parallel` 플래그로 여러 프로젝트/서브프로젝트를 동시에 빌드 가능.
- 독립적인 서브프로젝트가 있을 때 빌드 시간을 크게 단축.
- Gradle 프로젝트 생성 시 단일 프로젝트인지 서브프로젝트 구조인지 선택하며, 서브프로젝트는 명령 하나로 한 번에 빌드 가능.

## 요약
- Gradle은 Initialization→Configuration→Execution의 3단계 라이프사이클과 Kotlin/Groovy 빌드 스크립트, Task 단위 실행, 플러그인 시스템, `--parallel` 병렬 빌드를 통해 모듈화되고 확장 가능한 빌드 아키텍처를 구현한다.
