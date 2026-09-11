# Dependencies in Gradle

## 개요
- Gradle 의존성의 개념, 종류(compile-time/test/runtime 등), 선언 방법, 외부 vs 프로젝트 의존성, 의존성 해석(resolution) 과정을 설명.

## 내용
### Gradle Dependency란
- 코드를 컴파일·테스트·빌드하는 데 필요한 외부/로컬 라이브러리, 모듈, 프로젝트.
- `build.gradle` 파일의 dependency 블록에 선언한다.

### 의존성 종류
- **compile-time (compileOnly) dependency** — 컴파일 시점에만 필요 (예: annotation, 컴파일 타임 도구)
- **test dependency** — 테스트 작성·실행에 필요 (예: JUnit, Mockito)
- **runtime dependency** — 빌드 실행 시(런타임)에 필요 (예: JDBC 드라이버, 네이티브 라이브러리)
- 추가로 **implementation**(컴파일+런타임 필요), **api**(컴파일+런타임이면서 전이적으로 노출) 구성도 있음

### 의존성 선언 형식

```gradle
dependencies {
    implementation 'group:artifact:version'
    testImplementation 'group:artifact:version'
}
```

- `implementation`은 의존성 구성(configuration) 이름, `group:name:version`이 Group ID·Artifact·버전에 해당.

### 외부 vs 프로젝트 의존성
- **External Dependency** — Maven, JCenter 등 외부 저장소에서 가져오는 라이브러리
- **Project Dependency** — 멀티 프로젝트 빌드 내에서 직접 작성한 다른 모듈에 대한 의존성

### 의존성 해석(Dependency Resolution)
1. 먼저 프로젝트 디렉터리 내에서 사용 가능한 저장소 확인
2. 없으면 적절한(외부) 저장소로 가서 다운로드
3. 명시된 버전을 다운로드해 충돌이 생기지 않도록 처리

## 요약
- Gradle 의존성은 compile-time/test/runtime 등 목적에 따라 구성(configuration)을 지정해 `build.gradle`에 선언하며, 프로젝트 내 저장소에 없으면 외부 저장소(Maven, JCenter 등)에서 명시된 버전을 다운로드해 충돌 없이 해석한다.
