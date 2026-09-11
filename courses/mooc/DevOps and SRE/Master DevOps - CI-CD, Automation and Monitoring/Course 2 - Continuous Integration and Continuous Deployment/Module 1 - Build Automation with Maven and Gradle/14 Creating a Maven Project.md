# Creating a Maven Project

## 개요
- Eclipse에서 Maven 프로젝트를 생성하는 실습과 프로젝트 구조 설명.

## 내용
### Maven 프로젝트 구성 요소
- **src/main/java** — 개발자가 Java 코드를 작성하는 폴더
- **src/test/java** — 테스트 케이스를 작성하는 폴더
- **Java Libraries** — 코드 실행에 필요한 의존성
- **pom.xml** — 프로젝트의 핵심 설정 파일

### Eclipse에서 Maven 프로젝트 생성
1. File → New → Maven Project
2. Simple project 옵션 선택, 워크스페이스 위치 지정
3. Project type: Maven
4. Group ID(예: `apps.maven.demo`), Artifact ID 입력 — 패키징 타입(war, ear, jar) 선택
5. 설명(description), 부모 프로젝트가 있다면 그 Group ID/Artifact ID 입력 (선택사항)
6. Finish로 프로젝트 생성 완료

### 생성된 프로젝트 구조
- Main 폴더(Java 코드), Test 폴더(테스트 케이스), Resource 폴더(XML·테스트 데이터), Java 라이브러리, 그리고 처음엔 비어 있는 `pom.xml`
- `pom.xml`에는 이후 의존성(dependency), 테스트 도구 의존성, 플러그인이 추가된다.

### Eclipse에서 Maven 명령 실행
- 프로젝트 우클릭 → Run As에서 Maven build, Maven clean, Maven install, Maven test, verify 등 실행 가능.

### 실무에서의 흐름
- 개발자가 로컬에서 프로젝트를 완성해 GitHub에 푸시하면, 이를 빌드 파이프라인에서 사용한다.
- DevOps 엔지니어가 직접 Java 프로젝트를 만들 필요는 없지만, 프로젝트 구조를 이해하고 있어야 다룰 수 있다.

## 요약
- Maven 프로젝트는 Eclipse의 New Maven Project 마법사로 Group ID·Artifact ID·패키징 타입을 지정해 생성하며, main/test/resource 폴더와 (초기엔 비어 있는) `pom.xml`로 구성된 표준 구조를 갖는다.
