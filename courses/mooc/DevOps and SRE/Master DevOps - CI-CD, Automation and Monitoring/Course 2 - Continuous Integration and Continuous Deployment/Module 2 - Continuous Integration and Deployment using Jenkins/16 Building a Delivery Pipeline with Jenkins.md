# Building a Delivery Pipeline with Jenkins

## 개요
- 기본 Job 구성 요소와 Continuous Delivery Pipeline의 흐름, Jenkins가 딜리버리에 적합한 이유를 설명.

## 내용
### 기본 Job의 구성 요소
1. 저장소 링크(GitHub 등 소스 코드 위치) 연결
2. 트리거 설정 — GitHub 이벤트 발생 시 Job 실행
3. 빌드 명령 — 컴파일·테스트·패키징 실행
4. Post-build Actions — 알림, 리포트 생성 등

### Continuous Delivery Pipeline이란
- 자동화된 프로덕션 라인을 통해 변경사항을 프로덕션 환경까지 흘려보내는 흐름 — 한 번의 클릭으로 몇 분 안에 애플리케이션이 라이브 상태가 되게 한다.
- 개발자 커밋 → Maven 등으로 빌드 → JUnit/TestNG/Selenium 등으로 테스트 → 아티팩트를 서버(VM, Tomcat, Apache, Nginx, 컨테이너 등)에 배포 → 스테이징 릴리스 → 프로덕션 배포 → 파이프라인 모니터링

### Jenkins가 딜리버리에 적합한 이유
- 빠르고 신뢰할 수 있으며 유연함 — GitHub, Maven, Slack, Ansible, Docker 등 다양한 도구와 통합
- 무료로 사용 가능, 빌드·테스트·배포 프로세스 설정이 쉬움
- 약 1900개의 플러그인 생태계로 다양한 도구 연동
- 파이프라인 내 여러 stage/job의 **병렬 실행**을 지원해 CI/CD 속도 향상
- 파이프라인 구성에 쓰이는 **Build Pipeline Plugin**(기본 제공) — Manage Jenkins → Manage Plugins의 Available 섹션에서 추가 파이프라인 관련 플러그인(Stage View 제공 등) 설치 가능

### 파이프라인 관련 고급 기능
- 파이프라인 내 stage 병렬 실행
- **Pipeline as Code** — Jenkinsfile로 파이프라인을 코드로 작성
- Post-build actions, 커스텀 변수·파라미터·환경변수 사용
- Step 정의, Agent를 지정해 여러 서버에 작업 분산

## 요약
- Jenkins Job은 저장소 연결→트리거→빌드 명령→Post-build actions로 구성되며, Continuous Delivery Pipeline은 커밋부터 프로덕션 배포·모니터링까지 자동화된 흐름을 만들고, Jenkins는 방대한 플러그인 생태계와 병렬 실행·Pipeline as Code 지원으로 이를 빠르고 유연하게 구현한다.
