# Deleting data

## 개요

- DELETE FROM 구문으로 단일 레코드, 조건에 맞는 다중 레코드, 테이블 전체 레코드를 삭제하는 방법 (phpMyAdmin 데모)

## 내용

### 단일 레코드 삭제

- student 테이블에서 성(last name)이 Miller인 학생 레코드 삭제:
  - `DELETE FROM student_table WHERE last_name = 'Miller';`
  - 데이터베이스가 학생 목록을 스캔해 Miller 값을 찾아 그 레코드를 제거하고, 삭제 확인 메시지를 보여준다.

### 다중 레코드 삭제

- 공학과(engineering) 학생 두 명의 레코드를 한 번에 삭제:
  - `DELETE FROM student_table WHERE department = 'engineering';`
  - department 컬럼 값이 engineering인 **모든 레코드**가 제거된다.
- **주의**: WHERE 절을 정확히 지정하지 않으면 **테이블의 모든 레코드가 삭제**될 수 있다.

### 전체 레코드 삭제

- WHERE 절을 아예 제거하면 테이블의 모든 레코드를 삭제하라는 뜻이 된다:
  - `DELETE FROM student_table;` → 실행·확인 후 테이블은 빈 상태가 된다.

## 예시

```sql
-- 단일 레코드
DELETE FROM student_table WHERE last_name = 'Miller';

-- 조건에 맞는 다중 레코드
DELETE FROM student_table WHERE department = 'engineering';

-- 전체 레코드 (테이블 비우기 — 주의!)
DELETE FROM student_table;
```

## 요약

- DELETE FROM + WHERE 조건으로 삭제 대상을 지정한다.
- 조건에 따라 한 건이든 여러 건이든 삭제되며, WHERE를 생략하면 전체 레코드가 삭제되므로 특히 주의해야 한다.
