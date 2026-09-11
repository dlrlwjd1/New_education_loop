# WHERE clause

## 개요

- WHERE 절의 목적 — 지정한 조건(condition)을 만족하는 레코드만 필터링·추출
- 비교 연산자와 BETWEEN, LIKE, IN 연산자를 조건에 활용하는 방법

## 내용

### WHERE 절의 구조

```text
SELECT 컬럼들 FROM 테이블
WHERE 조건;
```

- **조건 = 필터 기준(filter criteria)** — 조건을 만족하는 레코드만 검색된다.
- 조건은 보통 `컬럼 연산자 피연산자(operand)` 형태.
- **피연산자**는 컬럼의 데이터 타입에 따라 숫자 값 또는 텍스트 값이다.
  - 숫자: `WHERE student_id = 01`
  - 텍스트: `WHERE first_name = 'John'` — **텍스트 값은 반드시 작은따옴표**로 감싼다.

### 사용 가능한 연산자

- 비교 연산자: `=`, `<`, `>`, `<=`, `>=`, `<>`
- **BETWEEN** — 특정 숫자·날짜/시간 **범위** 안의 레코드 필터링
- **LIKE** — 필터 기준에 **패턴** 지정
  - `%` 와일드카드: 0개, 1개 또는 여러 문자
  - `_` 와일드카드: 정확히 한 문자
- **IN** — 컬럼이 가질 수 있는 **여러 가능한 값**을 지정
- WHERE 절은 SELECT뿐 아니라 **UPDATE, DELETE 문에서도** 사용된다.

## 예시

대학 student_table 시나리오:

```sql
-- 1. 공학부(engineering) 학생 전체 조회 → 3명
SELECT * FROM student_table
WHERE faculty = 'engineering';

-- 2. 특정 생년월일 범위(학자금 지원 대상) → 4명
SELECT * FROM student_table
WHERE DOB BETWEEN '2010-01-01' AND '2010-05-30';

-- 3. Sc로 시작하는 학부(science) 학생 → 5명
SELECT * FROM student_table
WHERE faculty LIKE 'Sc%';

-- 4. 미국 또는 영국 출신 학생 → 4명 (USA 2명 + UK 2명)
SELECT * FROM student_table
WHERE country IN ('USA', 'UK');
```

## 요약

- WHERE 절은 조건을 만족하는 레코드만 걸러내며, 조건은 컬럼-연산자-피연산자로 구성된다.
- 텍스트 피연산자는 작은따옴표로 감싼다.
- 비교 연산자 외에 BETWEEN(범위), LIKE(패턴, %·_ 와일드카드), IN(다중 값)을 쓸 수 있다.
- WHERE는 SELECT·UPDATE·DELETE 모두에서 사용 가능하다.
