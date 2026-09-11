# Maven Architecture - Maven Artifacts

## 개요
- 앞선 강의(Core Components)의 아티팩트 부분을 이어서 Maven Artifact를 집중적으로 다룸 (내용은 이전 강의와 대부분 겹친다).

## 내용
### Maven Artifact란
- Maven 프로젝트의 가장 중요한 산출물 — 빌드 후 생성되는 바이너리 파일.
- 종류: JAR, XML, Snapshot, EAR, WAR 파일 등 — Java 프로젝트 성격에 따라 개발자가 결정.
- Registry(Nexus, JFrog Artifactory, Docker Trusted Registry, AWS/GCP 레지스트리 등)에 저장되어 서버에 배포된다.

### 아티팩트의 핵심 구성요소
- **Group ID** — 조직/프로젝트 식별자 (관례상 `org.apache.maven`처럼 회사명+앱 이름으로 시작)
- **Artifact ID** — 빌드 결과물에 부여하는 고유 이름
- **Version** — 생성된 아티팩트의 버전
- **Packaging** — JAR, WAR 등 패키징 타입
- **Classifier** — 동일한 Group ID/Artifact ID/Version이지만 내용이 다른 아티팩트를 구분하는 식별자

### pom.xml에서의 표현
- Maven 버전(Model Version), Group ID, Artifact ID, Packaging, Version, 의존성 다운로드 URL 등이 `pom.xml`에 명시된다.

## 요약
- Maven Artifact는 Group ID·Artifact ID·Version·Packaging·Classifier로 식별되는 빌드 산출물이며, `pom.xml`에 이 정보를 기록해 Registry에 저장·배포한다. (상세 실행 흐름은 [07 Maven Architecture - Core Components](07%20Maven%20Architecture%20-%20Core%20Components.md) 참고)
