# MySQL REPLACE statement

## 개요

- REPLACE 명령 — 삽입/갱신 시 **중복 키를 먼저 검사**해 있으면 기존 레코드를 삭제하고 새 레코드로 대체
- INSERT와의 차이, REPLACE ... SET 사용법과 주의점

## 내용

### REPLACE의 동작 원리

- 표준 INSERT·UPDATE와 달리, REPLACE는 먼저 **기본 키/유일 키의 중복을 검사**한다:
  - **매칭 키가 없으면** → 일반 INSERT처럼 새 데이터를 추가
  - **매칭 키가 있으면** → 기존 레코드를 **삭제하고 새 레코드로 대체**

### 두 가지 문법

1. **REPLACE INTO** — INSERT INTO와 동일한 구조 (테이블·컬럼·VALUES), 시작 명령만 REPLACE:
   - `REPLACE INTO 테이블 (컬럼들) VALUES (값들);`
2. **REPLACE ... SET** — WHERE 절 없이 SET 절로 컬럼 값을 지정:
   - **SET에서 값을 지정하지 않은 컬럼은 기본값 또는 NULL로 설정**되므로 모든 컬럼 값을 지정해야 안전하다.

### 왜 INSERT로는 안 되는가

- 이미 ID 1이 존재하는 테이블에 ID 1로 INSERT하면 **duplicate entry 에러** — 기본 키는 행마다 유일해야 하기 때문.
- 같은 문장을 REPLACE로 바꾸면 에러 없이 기존 레코드가 새 데이터로 대체된다.

## 예시

Lucky Shrub 직원 연락처 테이블(employee ID[PK], 연락처, 이메일):

```sql
-- 신규 직원 삽입 (INSERT)
INSERT INTO employee_contact_info (id, contact_number, email)
VALUES (1, '...', 'seamus@...');

-- REPLACE로도 신규 삽입 가능 (키 미존재 → INSERT처럼 동작)
REPLACE INTO employee_contact_info (id, contact_number, email)
VALUES (2, '...', 'thomas@...');

-- 퇴사자(ID 1) 자리를 새 직원으로 대체 — INSERT는 duplicate 에러, REPLACE는 성공
REPLACE INTO employee_contact_info (id, contact_number, email)
VALUES (1, '...', 'maria@...');

-- 연락처만 변경 — SET 사용 시 모든 컬럼 값을 지정해야 NULL을 피함
REPLACE INTO employee_contact_info
SET id = 1, contact_number = '새번호', email = 'maria@...';
```

## 요약

- REPLACE는 키 중복 시 삭제 후 대체, 미중복 시 삽입으로 동작하는 명령이다.
- REPLACE INTO ... VALUES와 REPLACE ... SET 두 형태가 있다.
- SET에서 생략한 컬럼은 NULL/기본값이 되므로 전 컬럼을 명시한다.
