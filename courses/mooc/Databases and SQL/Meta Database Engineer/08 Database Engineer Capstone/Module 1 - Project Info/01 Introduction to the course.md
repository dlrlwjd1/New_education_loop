# Introduction to the course

## 개요

- 캡스톤 코스 소개 — Little Lemon 레스토랑을 위한 데이터베이스 관련 과제 시리즈와 사용할 도구·프로세스 안내

## 내용

### 과제 목록

1. MySQL Workbench + MySQL 인스턴스 서버로 데이터베이스 구축
2. ER 다이어그램(entity relationship diagram) 설계·구현
3. Git으로 프로젝트 커밋 (GitHub에 저장소 보관)
4. 판매 보고서(sales report) 생성
5. 테이블 예약 시스템(table booking system) 구축
6. 데이터 분석으로 인사이트 생성
7. 데이터베이스 클라이언트 제작

### 과제별 도구·기법

- **관계형 데이터베이스 구축** — 3대 정규형(normal forms)을 준수하는 ER 모델을 Workbench로 설계, 데이터 모델을 MySQL 서버의 물리 스키마로 변환(forward engineering), Git으로 커밋
- **판매 보고서** — 질의·프로시저·프리페어드 스테이트먼트 활용:
  - 가상 테이블(virtual table)로 다른 테이블의 데이터 접근·질의 단순화
  - 공통 컬럼 기반 **JOIN** 절로 테이블 간 레코드 연결
  - **저장 프로시저(stored procedure)** — 필요 시 호출·실행하는 재사용 코드
  - **프리페어드 스테이트먼트(prepared statement)** — 재컴파일 없이 반복 사용, MySQL 자원 절약
- **테이블 예약 시스템** — SQL 질의와 트랜잭션: INSERT INTO(생성), UPDATE(변경), DELETE(삭제), SELECT(조회), **트리거(trigger)** — 특정 이벤트 발생 시 자동 호출되는 저장 프로그램. 완료 후 Git 커밋
- **비즈니스 인사이트** — Tableau: 소스 연결 → 데이터 준비 → UI 요소로 시각화 → 인터랙티브 실시간 대시보드
- **데이터베이스 클라이언트** — Python 버전 확인 → Jupyter IDE 설치 → Jupyter 노트북에서 **MySQL Connector** 라이브러리(pip 설치)로 Python ↔ Little Lemon MySQL 연결

## 요약

- 캡스톤은 Little Lemon 데이터베이스 시스템을 처음부터 끝까지 구축하는 과제다: 모델링·구현(Workbench/Git) → 보고서(프로시저·프리페어드 스테이트먼트) → 예약 시스템(트랜잭션·트리거) → 분석(Tableau) → 클라이언트(Python/Jupyter).
