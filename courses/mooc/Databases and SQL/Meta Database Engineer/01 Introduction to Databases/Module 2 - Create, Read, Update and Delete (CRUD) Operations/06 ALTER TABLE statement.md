# ALTER TABLE statement

## 개요

- 테이블은 고정된 것이 아니다 — ALTER TABLE 문으로 컬럼 추가(ADD)·삭제(DROP COLUMN)·수정(MODIFY)하는 방법

## 내용

### ALTER TABLE 구문

- `ALTER TABLE 테이블명` — 내용을 변경할 테이블을 지정
- 이어서 목적에 맞는 키워드:
  - **ADD** — 컬럼 추가. 괄호 안에 새 컬럼 이름과 데이터 타입 선언
  - **DROP COLUMN** — 컬럼 삭제
  - **MODIFY** — 기존 컬럼의 속성(데이터 타입·길이) 변경
- 전제: 데이터베이스와 변경할 테이블이 이미 존재해야 한다.

### 데모 — college 데이터베이스의 students 테이블

students 테이블(ID, 이름, 이메일 보유)에 대해:

1. **컬럼 추가**: age(INT), country(VARCHAR(50)), nationality(VARCHAR(255)) 컬럼을 ADD로 추가
2. **컬럼 삭제**: country와 nationality는 대부분 같은 정보를 담으므로 nationality를 DROP COLUMN으로 제거 — 실행 시 삭제 확인 알림이 뜨고 OK로 확정
3. **컬럼 수정**: country의 문자 제한을 50 → 100으로 MODIFY로 변경

## 예시

```sql
-- 1. 컬럼 추가
ALTER TABLE students
ADD (age INT, country VARCHAR(50), nationality VARCHAR(255));

-- 2. 컬럼 삭제
ALTER TABLE students
DROP COLUMN nationality;

-- 3. 컬럼 속성 변경 (길이 50 → 100)
ALTER TABLE students
MODIFY country VARCHAR(100);
```

## 요약

- ALTER TABLE은 기존 테이블의 구조를 재구성하는 DDL 명령이다.
- ADD로 컬럼을 추가하고, DROP COLUMN으로 제거하며, MODIFY로 데이터 타입·길이를 바꾼다.
