# Data management in MySQL Workbench

## 개요

- Workbench로 스키마·테이블·뷰 생성, 데이터 삽입, 조회까지 데이터 관리 전 과정 실습 (M&G 직원 데이터베이스)

## 내용

### 스키마 생성

- 서버 인스턴스 선택 → 스키마 툴바의 **Create Schema** → 이름(mg_schema) 입력 → Apply → 생성된 CREATE SCHEMA 스크립트 검토 → Apply → Finish.
- 스키마 메뉴에서 확인(Refresh 필요할 수 있음). Information 아이콘으로 Tables·Columns·Triggers 정보, 더블클릭으로 하위 메뉴, 우클릭 **Drop Schema**로 삭제.

### 테이블 생성

- Tables 우클릭 → **Create Table** → 이름(staff) → 중간 창에서 컬럼 정의:
  - StaffID: INT + 체크박스로 **PRIMARY KEY** 지정
  - FullName, ContactNumber, Role, Email — 각자 타입과 NULL/NOT NULL 선언
- Apply → 생성 SQL 검토 → Apply 실행 → Finish.
- 구조 확인: Information 아이콘의 Columns 탭, 또는 SQL Editor에서 `DESCRIBE staff` 실행.

### 뷰(가상 테이블) 생성

- Views 우클릭 → **Create View** → SQL Editor에 CREATE VIEW 문 작성 (직원 이름·연락처 뷰) → Apply → Review 창의 제안 코드를 수락/수정(컬럼 **별칭** 추가로 가독성 향상) → Apply → Finish.

### 데이터 삽입과 조회

- INSERT 문 대신 **테이블 그리드에 직접 입력** 가능: staff 우클릭 → rows 선택 → 레코드 입력 → Apply → 자동 생성된 INSERT INTO 문 검토 → Apply → Finish.
- 조회: SQL Editor에서 `SELECT * FROM staff_view;` — 결과가 테이블 그리드로 출력.

## 요약

- Workbench의 GUI 흐름은 항상 "폼 입력 → Apply → 생성 SQL 검토 → Apply → Finish"다.
- 스키마·테이블·뷰 생성과 그리드 직접 입력, DESCRIBE·SELECT 조회까지 시각적으로 처리할 수 있다.
