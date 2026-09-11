# Dependencies in Maven

## 개요
- Maven 의존성(dependency)의 정의, 두 가지 유형(direct/transitive), 선언 방법, 캐싱 동작을 설명.

## 내용
### Maven Dependency란
- 프로젝트가 필요로 하는 외부 라이브러리(jar 파일 등 아티팩트) — `pom.xml`에 명시하고 local/central/remote 저장소에서 다운로드된다.
- Maven의 의존성 관리 시스템이 빌드·실행에 필요한 클래스·리소스에 접근할 수 있도록 자동으로 다운로드·포함한다.

### 의존성 두 가지 유형
1. **Direct Dependency** — 개발자가 `pom.xml`에 직접 명시한 의존성. Maven이 자동으로 다운로드.
2. **Transitive Dependency** — direct dependency가 의존하는 하위 의존성. 개발자가 명시할 필요 없이 Maven이 알아서 함께 다운로드·관리.

### 의존성 선언 방법 (pom.xml)
- 필수 좌표(coordinate): **Group ID**, **Artifact ID**, **Version**
- 선택 좌표: **Type**, **Classifier**, **Scope**(테스트용인지 컴파일용인지 지정, 선택사항)

```xml
<dependency>
  <groupId>...</groupId>
  <artifactId>...</artifactId>
  <version>...</version>
  <!-- scope는 선택사항 -->
</dependency>
```

### 캐싱(Caching) 동작
- 조직 전용 의존성은 remote repository에 캐시(저장)해두고 프로젝트가 자동으로 가져오게 할 수 있다.
- 원격에서 처음 다운로드한 의존성은 **로컬 저장소(local repository)**에 캐시된다.
- 이후 빌드 실행 시에는 매번 원격이 아니라 로컬 캐시에서 가져온다.
- 캐시를 지우면 다시 원격 저장소에서 다운로드해 로컬에 저장한다.

## 요약
- Maven 의존성은 Group ID/Artifact ID/Version으로 `pom.xml`에 선언되며, 개발자가 명시한 direct dependency 외에 그에 딸린 transitive dependency까지 Maven이 자동으로 관리하고, 한 번 받은 의존성은 로컬 저장소에 캐시되어 이후 빌드 속도를 높인다.
