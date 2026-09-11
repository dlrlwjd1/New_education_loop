# Executing a Sample Gradle Application

## 개요
- `gradle init`으로 샘플 Java 애플리케이션을 생성하고, 코드를 수정한 뒤 build·run하는 실습.

## 내용

```bash
gradle -v          # 설치된 Gradle 버전 확인

mkdir mygradleproject && cd mygradleproject
gradle init
```

- `gradle init` 진행 중 선택 항목: 프로젝트 타입(Java) → 서브프로젝트 분리 여부(No) → 테스트 프레임워크(Groovy/JUnit4 등) → 프로젝트 이름(기본값) → 소스 패키지(기본값) → 타깃 버전(17) → API 생성 여부(Yes)

### 코드 수정 및 실행

```bash
# src/main/java/.../App.java 파일 열어 출력 메시지 수정
# 예: "Hello World" → "Hello Gradle"

cd ..
gradle build   # app:test 등 전체 빌드 실행, 성공 확인
gradle run     # app:run으로 애플리케이션 실행 → 수정한 "Hello Gradle" 출력 확인
```

## 요약
- `gradle init`(프로젝트 생성) → 코드 수정 → `gradle build`(빌드) → `gradle run`(실행)이라는 세 가지 핵심 명령으로 간단한 Gradle 프로젝트를 처음부터 끝까지 실행할 수 있다.
