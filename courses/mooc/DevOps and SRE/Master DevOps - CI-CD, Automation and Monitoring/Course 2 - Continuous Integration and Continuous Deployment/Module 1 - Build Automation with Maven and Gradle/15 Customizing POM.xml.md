# Customizing POM.xml

## 개요
- 비어 있는 `pom.xml`에 properties, repositories, dependencies를 실제로 채워 넣는 실습.

## 내용
### pom.xml의 주요 섹션
1. **Project 정보** — Group ID, Artifact ID, Version
2. **Properties** — 변수와 그 값 (예: 라이브러리 버전 등)
3. **Repositories** — 의존성을 다운로드할 저장소(central/local/remote) 목록. 각 repository는 ID, name, URL을 가짐
4. **Dependencies** — 개발에 필요한 라이브러리 목록
5. **Plugins** — 컴파일러 플러그인, PMD, Surefire(테스트) 플러그인 등

### 예시 구조

```xml
<properties>
  <var1>...</var1>
  <!-- 변수 정의 -->
</properties>

<repositories>
  <repository>
    <id>...</id>
    <name>...</name>
    <url>...</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>...</groupId>
    <artifactId>...</artifactId>
    <version>${validation.version}</version>  <!-- properties에서 정의한 변수 참조 -->
  </dependency>
  <!-- JUnit, 로깅, 서블릿 등 필요한 의존성 추가 -->
</dependencies>
```

- `${...}` 문법으로 `properties`에 정의한 변수를 참조할 수 있다.
- DevOps 엔지니어가 직접 어떤 의존성이 필요한지 결정할 필요는 없다 — 개발자가 필요한 의존성을 지정하며, DevOps 엔지니어는 pom.xml에 오류가 없는지, 의존성이 올바르게 반영됐는지 확인하는 역할을 한다.
- pom.xml에 오타/오류가 있으면 Eclipse가 빨간 마커로 표시하며, 오류가 있으면 Maven 프로젝트 전체가 실행되지 않는다.
- 저장(Save)하는 순간 Maven이 지정된 저장소에서 의존성을 자동으로 다운로드한다(우측 하단 Maven Dependencies에서 확인 가능).

## 요약
- `pom.xml`은 properties(변수) → repositories(저장소) → dependencies(라이브러리) → plugins 순으로 채워지며, 저장 즉시 Maven이 의존성을 자동 다운로드하므로 오류 없이 정확하게 작성하는 것이 중요하다.
