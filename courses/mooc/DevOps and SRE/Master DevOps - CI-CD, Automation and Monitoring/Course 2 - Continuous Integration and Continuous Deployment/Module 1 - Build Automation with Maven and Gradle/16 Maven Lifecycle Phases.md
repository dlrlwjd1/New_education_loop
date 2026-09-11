# Maven Lifecycle Phases

## 개요
- Maven의 3가지 라이프사이클(Clean, Default/Build, Site)과 각 단계별 세부 phase를 설명.

## 내용
### Lifecycle이란
- 코드를 빌드하기 위해 실행되는 일련의 단계(phase) 순서.
- Maven에는 크게 **Clean**, **Default(Build)**, **Site** 3가지 라이프사이클이 있다.

### Clean Lifecycle
- 이전 빌드에서 생성된 파일(`target` 폴더)을 정리.
- **pre-clean** → 빌드 전 정리 → **clean**(이전 빌드 산출물 제거) → **post-clean**(실행 후 추가 정리)

### Default(Build) Lifecycle — 핵심 라이프사이클
1. **validate** — Java 코드 작성이 올바른지 검증
2. **initialize** — 프로젝트 초기화
3. **generate-sources** / **process-sources** — 소스 파일 생성·처리
4. **generate-resources** / **process-resources** — 리소스(XML, Excel 등) 생성·처리
5. **compile** — Java 클래스 파일(컴파일 결과물) 생성
6. **generate-test-sources** / **process-test-sources** / **generate-test-resources** — 테스트 관련 소스·리소스 준비
7. **test** — 테스트 클래스 처리, 리소스 처리, 리포트 생성
8. **package** — war/jar/snapshot 등 패키지 생성
9. **integration-test** — 여러 기능을 통합해 컴파일·테스트, 검증(verify)
10. **install** / **deploy** — 최종 아티팩트를 JFrog·Nexus 같은 Artifactory에 배포

### 관련 플러그인
- 컴파일: Archetype/Compiler Plugin
- 테스트: Surefire Plugin
- 패키징: JAR Plugin, WAR Plugin, Snapshot Plugin
- 설치/배포: Install Plugin

### Site Lifecycle
- 프로젝트 문서/리포트(테스트·컴파일·리뷰 리포트 등) 생성과 관련된 라이프사이클.
- **pre-site**(리포트 생성 준비) → **site**(문서·리포트 생성) → **post-site**(사이트 배포 준비 마무리) → **site-deploy**(생성된 문서를 지정된 웹 서버에 배포)

## 요약
- Maven은 Clean(정리) → Default(검증·컴파일·테스트·패키징·배포) → Site(문서화·배포)라는 3개 라이프사이클로 구성되며, 각 phase는 대응하는 플러그인(Compiler, Surefire, JAR/WAR 등)을 통해 실행된다.
