# Practice Project - Designing and Automating a CI/CD Pipeline for a Healthcare Web App Using Jenkins

## 개요
- 헬스케어 스타트업 MediTrack의 사례를 통해 Jenkins 기반 CI/CD 파이프라인을 처음부터 구축하는 실습 프로젝트.

## 내용
### 시나리오
- MediTrack은 클라우드 기반 환자 건강 추적 소프트웨어를 제공하는 스타트업. 애자일 방식으로 자주 업데이트를 배포하지만, 제대로 된 CI/CD 파이프라인이 없어 코드 변경을 수동으로 테스트·배포하면서 지연과 불일치가 발생.
- 해결책: Jenkins를 중심으로 소스 관리, 빌드 도구(Maven/Gradle), 자동화 테스트, 배포 오케스트레이션(Ansible)을 통합한 파이프라인 구축.

### 초기 문제점
1. **수동적이고 오류가 많은 배포** — 개발자가 dev/QA/prod 환경에 수동 배포 → 사람의 실수 위험 증가, 릴리스 시 다운타임
2. **비효율적인 빌드·테스트 프로세스** — 빌드·단위 테스트가 수동으로 트리거되어 피드백이 느림 → 버그 발견 지연, 생산성 저하
3. **파이프라인 가시성 부족** — 코드 통합·테스트 결과·배포를 추적할 중앙 시스템 부재 → 실패 감사·문제 특정이 어려움

### 프로젝트 목표
- Java 기반 웹 애플리케이션을 위한 통합·테스트·배포·모니터링을 지원하는 완전 자동화된 Jenkins CI/CD 파이프라인 구축.

### 수행 과제
1. **Jenkins 설치·설정** — Master 서버와 필요한 플러그인 설정, 병렬 빌드를 위한 Jenkins 노드 설정
2. **소스 관리 통합** — GitHub와 연동해 커밋 시 자동으로 Job 트리거
3. **빌드 자동화** — Maven/Gradle로 Java 애플리케이션 컴파일하는 Job 생성, 빌드 트리거(푸시 시/예약) 설정
4. **자동화 테스트** — JUnit/TestNG 통합, Jenkins에 테스트 결과·코드 커버리지 리포트 표시
5. **Pipeline as Code** — Jenkinsfile로 CI/CD 프로세스 구현, Build→Test→Deploy Stage 구성
6. **아티팩트 관리** — 빌드 아티팩트를 아카이브하거나 Artifactory/Nexus에 게시
7. **자동화된 배포** — Jenkins에서 트리거된 Ansible Playbook으로 테스트·스테이징 환경에 배포
8. **알림·모니터링** — Job 상태에 대한 이메일/Slack 알림, Job 추이·상태를 모니터링하는 Jenkins 대시보드 구성
9. **보안·자격 증명 관리** — Jenkins Credentials Plugin으로 SSH 키·API 토큰을 안전하게 저장

### 기대 결과
- **완전 자동화된 파이프라인** — 코드 커밋이 엔드투엔드 CI/CD 흐름을 트리거
- **릴리스 시간 단축** — 빠른 통합·배포 주기
- **오류 감소** — 자동화된 테스트·배포로 사람의 실수 감소
- **가시성 향상** — Jenkins 대시보드로 실시간 인사이트 제공
- **재현 가능한 환경** — Ansible로 환경 간 일관된 배포

## 요약
- MediTrack 프로젝트는 Jenkins 설치·소스 통합·빌드 자동화·테스트·Pipeline as Code·아티팩트 관리·Ansible 배포·모니터링·보안을 하나로 엮어, 수동·오류 많던 배포 프로세스를 완전 자동화된 CI/CD 파이프라인으로 전환하는 실전 종합 실습이다.
