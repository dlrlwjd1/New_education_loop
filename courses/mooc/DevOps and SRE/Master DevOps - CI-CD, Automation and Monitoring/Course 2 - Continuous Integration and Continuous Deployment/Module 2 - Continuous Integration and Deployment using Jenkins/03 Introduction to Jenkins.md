# Introduction to Jenkins

## 개요
- Jenkins의 정의, 인기 있는 이유, 설치 개요, 프로젝트(Job) 종류를 설명.

## 내용
### Jenkins란
- 오픈소스 자동화 도구(자동화 서버/오케스트레이터)로, GitHub(코드 가져오기), Maven(빌드), Selenium(테스트), Docker(배포), 모니터링 도구 등과 통합해 SDLC 전체(빌드·테스트·배포)를 자동화한다.

### Jenkins의 특징
- **무료** — 오픈소스, CloudBees의 엔터프라이즈 버전도 존재
- **플러그인 기반** — 1000개 이상의 플러그인으로 아키텍처 확장
- **커뮤니티 기반** — 커뮤니티 페이지에서 이슈 해결 지원
- **빠르고 안정적** — 작업 실행 결과와 성공/실패 상태를 상세히 제공
- **표준 도구** — Windows, Mac, Linux 어디서나 설치 가능
- 파이프라인은 **Scripted Pipeline** 또는 **Declarative Pipeline** 문법으로 작성
- 설치·설정·업그레이드가 쉽고, 컨테이너에도 설치 가능
- 메트릭 기반, 프로젝트 기반, 사용자 기반 보안 기능으로 안전
- 여러 팀원이 함께 작업하는 분산 팀 관리 지원

### 주요 활용 사례
1. **CI/CD 자동화** — 파이프라인(순차 실행되는 task 집합)으로 구현
2. **빌드 프로세스** — 컴파일·테스트·패키징 전담 설정 가능
3. **모니터링 통합** — 파이프라인·작업의 성공/실패를 대시보드에서 모니터링
4. **클라우드/컨테이너 통합** — AWS, Azure, Docker와 연동해 배포

### Jenkins 설치 개요
- Java 기반 도구 — **JDK 17 또는 21** 설치가 선행 조건
- Windows: `.war` 파일 다운로드 / Linux·Mac: 패키지 설치
- 설치 후 Jenkins 서비스 시작 → **포트 8080**에서 브라우저로 접근(`localhost:8080` 또는 EC2 퍼블릭 IP)
- 주로 GUI(대시보드)로 사용하며, CLI 명령도 있지만 DevOps에서는 GUI 중심으로 다룸

### Jenkins Project(Job) 종류
- **Freestyle Project** — 가장 기본적인 템플릿, 특별한 코딩 스킬 불필요
- **Pipeline** — 코드로 파이프라인을 작성해 복잡하고 장시간 실행되는 작업을 처리(가장 많이 사용)
- **Multi-configuration Project** — 여러 환경/단계에 대해 설정
- **Folder Project** — 여러 Job을 환경/작업별로 묶어 조직화
- **Organization** — GitHub 조직과 연동해 파이프라인을 자동 생성하는 고급 프로젝트
- **Multi-branch Pipeline** — GitHub 저장소의 모든 브랜치마다 파이프라인을 자동 생성

## 요약
- Jenkins는 오픈소스·플러그인 기반의 자동화 서버로 JDK 설치 후 포트 8080의 대시보드로 사용하며, Freestyle부터 Pipeline, Multi-branch Pipeline까지 다양한 Job 유형으로 CI/CD 자동화를 구현한다.
