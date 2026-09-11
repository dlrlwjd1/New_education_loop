# Updating data

## 개요

- UPDATE ... SET ... WHERE 구문으로 단일 레코드, 다중 레코드, 다중 컬럼을 갱신하는 방법 (phpMyAdmin 데모)

## 내용

### 단일 레코드 갱신

- 대학의 student 테이블(ID, 이름, 성, 집 주소, 학교 주소, 연락처, 학과)에서 ID 3 학생의 집 주소·연락처를 변경:
  1. `UPDATE 테이블명` — 갱신할 테이블 지정
  2. `SET 컬럼 = '새값'` — 갱신할 컬럼과 값 쌍. 새 값은 작은따옴표로 감싸고, **여러 쌍은 쉼표로 구분**
  3. `WHERE ID = 3` — **정확히 어떤 레코드를 갱신할지 식별**
- 실행 후 변경 확인 메시지가 나오고 테이블에 새 값이 반영된다.

### 다중 레코드 일괄 갱신

- 공대(engineering) 학생 전원의 학교 주소를 Harper Building으로 변경하는 경우:
- WHERE 절을 **개별 ID가 아니라 조건(department = 'engineering')**으로 지정하면 조건에 맞는 모든 레코드가 한 번에 갱신된다.

### 다중 컬럼 동시 갱신

- SET 절에 컬럼-값 쌍을 쉼표로 이어 붙이면 한 문장으로 여러 컬럼을 갱신할 수 있다.

## 예시

```sql
-- 1. ID 3 학생의 집 주소와 연락처 갱신
UPDATE student_table
SET home_address = '새 주소', contact_number = '새 번호'
WHERE ID = 3;

-- 2. 공대생 전원의 학교 주소 일괄 갱신
UPDATE student_table
SET college_address = 'Harper Building'
WHERE department = 'engineering';

-- 3. 여러 컬럼 동시 갱신
UPDATE student_table
SET college_address = 'Harper Building', home_address = '새 주소'
WHERE department = 'engineering';
```

## 요약

- UPDATE는 테이블 지정 → SET으로 컬럼=값 쌍 지정 → WHERE로 대상 레코드 식별의 3단계다.
- WHERE 조건에 따라 한 레코드든 조건에 맞는 전체 레코드든 갱신할 수 있다.
- SET 절에 쌍을 쉼표로 나열하면 여러 컬럼을 한 번에 바꾼다.
