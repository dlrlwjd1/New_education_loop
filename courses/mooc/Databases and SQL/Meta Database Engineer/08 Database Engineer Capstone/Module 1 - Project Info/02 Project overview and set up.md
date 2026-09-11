# Project overview and set up

## 개요

- Little Lemon 데이터베이스 프로젝트 설정 3단계와 필요 도구(MySQL Workbench, Git, GitHub) 복습

## 내용

### 프로젝트 설정 3단계

1. MySQL 인스턴스 서버로 MySQL Workbench에 데이터베이스 설정
2. ER 다이어그램 생성·Workbench에서 구현
3. 프로젝트 커밋

### ER 모델 설계 원칙

- 잘 구조화된 ER 데이터 모델을 설계하고 **3대 정규형** 준수 → 무결성 확보, 삽입·갱신·삭제 이상 방지

### MySQL Workbench 복습

- 데이터베이스 모델링·데이터 관리용 통합 시각 도구
- 장점: 오픈소스, 크로스 플랫폼, 시각적 SQL 에디터, 데이터 모델 → MySQL 서버 물리 스키마 변환
- 설치: dev.mysql.com/downloads → 설치 시 **MySQL Server, MySQL Workbench, MySQL Shell** 포함

### Git과 GitHub

- **Git** — 무료 오픈소스 분산 버전 관리 시스템: 소스 코드 이력 관리, 커밋 이력 유지, 이전 버전 복원, 협업 코드 공유. git-scm.com/downloads에서 설치
- **GitHub** — Git 저장소 호스팅 + 프로젝트 관리, 지원 티켓 관리, 버그 추적. 저장소 공유·접근·보관(백업 포함). github.com에서 가입

## 요약

- Workbench로 데이터베이스와 ER 다이어그램을 만들고 Git/GitHub로 커밋·보관하는 것이 프로젝트의 출발점이다.
- 3대 정규형 준수가 무결성과 이상 방지의 핵심 설계 기준이다.
