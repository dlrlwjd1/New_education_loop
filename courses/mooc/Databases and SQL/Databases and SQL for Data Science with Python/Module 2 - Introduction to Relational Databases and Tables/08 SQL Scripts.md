# SQL Scripts

## 개요

SQL 스크립트를 사용하면 DDL 명령어를 SQL 편집기에 직접 하나씩 입력하는 대신,  
**하나의 파일에 모든 명령어를 모아 한 번에 실행**할 수 있습니다.

---

## SQL 스크립트의 특징

| 특징 | 설명 |
|------|------|
| 여러 SQL 명령어를 하나의 파일에 저장 | 반복 작업 자동화 |
| 각 명령어는 구분자(`;`)로 종료 | 기본 구분자는 세미콜론 |
| 파일 확장자는 `.sql` 권장 | 가독성 및 호환성 |
| phpMyAdmin에서 파일 임포트 시 순차 실행 | 위에서 아래 순서로 실행 |

---

## 예시 스크립트 — 의료 데이터베이스 (5개 테이블)

스크립트는 먼저 동일한 이름의 테이블이 있으면 삭제한 뒤, 새로 생성합니다.

```sql
-- 기존 테이블 삭제 (존재할 경우)
DROP TABLE IF EXISTS PATIENTS;
DROP TABLE IF EXISTS MEDICAL_HISTORY;
DROP TABLE IF EXISTS MEDICAL_PROCEDURES;
DROP TABLE IF EXISTS MEDICAL_DEPARTMENTS;
DROP TABLE IF EXISTS MEDICAL_LOCATIONS;

-- 테이블 생성
CREATE TABLE PATIENTS (
    PATIENT_ID   CHAR(9)      NOT NULL,
    FIRST_NAME   VARCHAR(15)  NOT NULL,
    LAST_NAME    VARCHAR(15)  NOT NULL,
    DATE_OF_BIRTH DATE        NOT NULL,
    SEX          CHAR(1),
    PHONE        CHAR(15),
    ADDRESS      VARCHAR(50),
    PRIMARY KEY (PATIENT_ID)
);

CREATE TABLE MEDICAL_DEPARTMENTS (
    DEPT_ID      CHAR(5)      NOT NULL,
    DEPT_NAME    VARCHAR(30)  NOT NULL,
    LOCATION_ID  CHAR(5),
    PRIMARY KEY (DEPT_ID)
);

CREATE TABLE MEDICAL_LOCATIONS (
    LOCATION_ID  CHAR(5)      NOT NULL,
    LOCATION_NAME VARCHAR(30) NOT NULL,
    ADDRESS      VARCHAR(50),
    PRIMARY KEY (LOCATION_ID)
);

CREATE TABLE MEDICAL_PROCEDURES (
    PROC_ID      CHAR(7)      NOT NULL,
    PROC_NAME    VARCHAR(50)  NOT NULL,
    DEPT_ID      CHAR(5),
    COST         DECIMAL(8,2),
    PRIMARY KEY (PROC_ID),
    FOREIGN KEY (DEPT_ID) REFERENCES MEDICAL_DEPARTMENTS(DEPT_ID)
);

CREATE TABLE MEDICAL_HISTORY (
    HISTORY_ID   INT          NOT NULL,
    PATIENT_ID   CHAR(9)      NOT NULL,
    PROC_ID      CHAR(7)      NOT NULL,
    DATE_OF_PROC DATE         NOT NULL,
    NOTES        VARCHAR(200),
    PRIMARY KEY (HISTORY_ID),
    FOREIGN KEY (PATIENT_ID) REFERENCES PATIENTS(PATIENT_ID),
    FOREIGN KEY (PROC_ID)    REFERENCES MEDICAL_PROCEDURES(PROC_ID)
);
```

---

## 스크립트 실행 순서 이해

`DROP TABLE IF EXISTS`를 맨 앞에 두는 이유:

- 스크립트를 여러 번 실행해도 오류 없이 동작
- 기존 테이블이 없어도 `IF EXISTS`가 있으면 에러가 발생하지 않음
- `CREATE TABLE` 전에 깨끗한 상태를 보장

> **주의:** `DROP TABLE`은 데이터도 함께 삭제합니다. 운영 환경에서는 신중하게 사용하세요.

---

## phpMyAdmin에서 SQL 스크립트 실행 방법

1. phpMyAdmin 접속 후 대상 데이터베이스 선택
2. 상단 메뉴에서 **Import** 탭 클릭
3. **파일 선택**에서 `.sql` 파일 업로드
4. **실행(Go)** 버튼 클릭
5. 각 구문이 순차적으로 실행되며 성공 메시지 확인
6. 왼쪽 트리 구조에서 생성된 테이블 확인 가능

---

## PATIENTS 테이블 구조 예시

| 열 이름 | 데이터 타입 | 제약 조건 | 설명 |
|--------|------------|----------|------|
| `PATIENT_ID` | `CHAR(9)` | `PRIMARY KEY NOT NULL` | 환자 고유 식별자 |
| `FIRST_NAME` | `VARCHAR(15)` | `NOT NULL` | 이름 |
| `LAST_NAME` | `VARCHAR(15)` | `NOT NULL` | 성 |
| `DATE_OF_BIRTH` | `DATE` | `NOT NULL` | 생년월일 |
| `SEX` | `CHAR(1)` | — | 성별 (M/F) |
| `PHONE` | `CHAR(15)` | — | 전화번호 |
| `ADDRESS` | `VARCHAR(50)` | — | 주소 |

---

## 핵심 요약

| 항목 | 설명 |
|------|------|
| SQL 스크립트 | 여러 SQL 명령어를 하나의 `.sql` 파일에 모은 것 |
| 실행 방식 | 위에서 아래 순서로 순차 실행 |
| `DROP TABLE IF EXISTS` | 재실행 시 오류 방지 |
| `CREATE TABLE` | 테이블과 열, 데이터 타입, 제약 조건 정의 |
| 실행 도구 | phpMyAdmin Import 기능 사용 |
