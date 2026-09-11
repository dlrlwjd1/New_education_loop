# Working with Plugins

## 개요
- `pom.xml`의 build 섹션에 플러그인을 추가하고, Eclipse에서 Maven 명령(clean, install)을 실행하는 실습.

## 내용
### pom.xml의 build 섹션
- `<build>` 태그 아래 `<pluginManagement>` 섹션에 컴파일러 플러그인, JAR 패키징 플러그인, Enforcer 플러그인 등을 추가한다.
- 모든 플러그인은 **Group ID, Artifact ID, Version**을 가진다.
- 예: Maven Compiler Plugin(버전 지정), JAR 패키징 플러그인, Enforcer 플러그인(Maven 버전 강제, 예: 3.5.4 또는 최신 버전)

```xml
<build>
  <pluginManagement>
    <plugins>
      <plugin>
        <groupId>...</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
      <!-- jar 패키징 플러그인, enforcer 플러그인 등 -->
    </plugins>
  </pluginManagement>
</build>
```

### Eclipse에서 Maven 명령 실행
- 커맨드라인 없이 프로젝트 우클릭 → **Run As**에서 실행 가능:
  - **Maven clean** — `target` 폴더(이전 빌드 산출물)를 정리
  - **Maven install** — 컴파일 → 테스트 → 패키징을 한 번에 수행

```bash
# 커맨드라인으로는 아래와 동일
mvn compile
mvn package
mvn install
```

### 실행 흐름 확인
1. `Run As → Maven clean` → 콘솔에 "clean plugin이 target 폴더를 성공적으로 정리했다"는 로그, `target` 폴더가 비워짐
2. `Run As → Maven install` → 프로젝트 스캔 → 컴파일 → 테스트 케이스 실행 → 아티팩트 생성까지 콘솔에서 순서대로 확인 가능
3. 완료 후 `target` 폴더에 테스트 리포트, 생성된 아티팩트, 소스 파일 등이 채워짐

## 요약
- `pom.xml`의 build 섹션에 필요한 플러그인(Compiler, JAR, Enforcer 등)을 등록한 뒤, Eclipse의 Run As 메뉴(또는 `mvn clean`/`mvn install` 명령)로 정리·컴파일·테스트·패키징을 실행하며, 결과는 콘솔 로그와 `target` 폴더에서 확인할 수 있다.
