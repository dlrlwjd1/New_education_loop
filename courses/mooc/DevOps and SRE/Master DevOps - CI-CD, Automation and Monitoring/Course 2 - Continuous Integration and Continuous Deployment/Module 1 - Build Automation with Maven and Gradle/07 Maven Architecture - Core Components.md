# Maven Architecture - Core Components

## 개요
- Maven의 핵심 구성요소(POM, plugins, goals, repositories)와 아티팩트, `pom.xml` 구조, 실행 흐름을 설명.

## 내용
### 핵심 구성요소
- **POM(Project Object Model, `pom.xml`)** — Maven의 중심 파일로, plugins·build lifecycle·goals·repositories 정보를 담는다.
- **Plugins** — build plugin, reporting plugin 등 여러 종류가 있으며 빌드 프로세스의 라이프사이클을 구성.
- **Goals** — 플러그인 실행을 트리거하는 명령어(예: compile, test, package).
- **Repositories** — 의존성과 플러그인을 보관하는 곳.

### Maven Repository의 3가지 종류
1. **Local Repository** — 개발자 로컬 머신의 폴더에 jar 파일 등을 보관. Maven 프로젝트 실행 시 여기서 먼저 의존성을 가져온다.
2. **Central Repository** — 인터넷상의 오픈소스 저장소. 인증 없이 자유롭게 연결해 의존성을 다운로드.
3. **Remote Repository** — 조직 내부 전용 의존성/도구를 위한 저장소. 대개 비밀번호로 보호되며 경로·인증 정보를 `pom.xml`에 명시해야 한다.

### pom.xml 주요 구성요소
- **Project 정보** — 아티팩트 이름, 버전 등
- **Group ID** — 프로젝트가 생성할 아티팩트의 그룹(관례상 `org.apache.maven`처럼 회사명+앱 이름으로 시작)
- **Artifact ID** — 빌드로 생성될 아티팩트의 고유 이름
- **Model Version** — 사용 중인 Maven 버전
- **Version** — 생성되는 아티팩트의 버전
- **Packaging** — 생성 아티팩트 타입(jar, war 등)
- **Classifier** — 동일한 group/artifact/version이지만 내용이 다른 아티팩트를 구분

### Maven Artifact
- 빌드 프로세스의 결과물(바이너리 파일) — jar, war, ear, snapshot 등 다양한 형태.
- 아티팩트는 Registry(Nexus, JFrog Artifactory, Docker Trusted Registry, 클라우드 제공자 레지스트리 등)에 저장되어 서버에 배포된다.

### Maven 실행 흐름
1. 프로젝트 준비 — 소스 코드·테스트 케이스 작성
2. `pom.xml`의 dependency 섹션 작성 → 저장 시 의존성 자동 다운로드
3. plugins 섹션 작성 → 관련 라이브러리 다운로드
4. Goal(compile, test, package 등) 실행으로 빌드 단계 트리거
5. 최종 산출물(컴파일 파일, 테스트 리포트, 아티팩트)이 **`target` 폴더**에 저장됨

## 요약
- Maven은 `pom.xml`을 중심으로 로컬/중앙/원격 저장소에서 의존성·플러그인을 가져와 goal(명령어) 실행으로 컴파일→테스트→패키지 단계를 거치며, 최종 결과물(아티팩트)은 `target` 폴더에 생성되고 Registry에 저장·배포된다.
