# Subqueries and complex comparison operators

## 개요

- 다중 행 서브쿼리와 결합하는 복합 연산자: ALL, ANY, SOME, EXISTS, NOT EXISTS
- Little Lemon 급여·예약 데이터로 각 연산자의 동작 확인

## 내용

### 다중 행 서브쿼리용 연산자

- **ANY** — 지정 조건을 만족하는 **어느 값에 대해서든** 데이터 반환
- **ALL** — **모든 값**에 대해 조건을 만족해야 반환
- **SOME** — 하나 이상의 매칭 값에 대해 반환
- 이들은 단일 값을 **여러 값의 범위와 비교**하게 해 주며, 비교 연산자 뒤·서브쿼리 앞에 놓는다.

### EXISTS / NOT EXISTS

- **EXISTS** — 서브쿼리 결과 집합에 **행이 존재하는지** 검사. 하나 이상 반환되면 true.
- **NOT EXISTS** — 서브쿼리가 **아무 행도 반환하지 않을 때** true.
- WHERE 절 뒤에 놓아 서브쿼리 값의 존재/부재를 판정한다.

## 예시

employees 테이블에서 (기준 역할: manager, assistant manager, head chef, head waiter — 연봉 70,000/65,000/50,000/40,000):

```sql
-- ALL: 네 역할 '모두'의 연봉 이하인 직원 → ID 5, 6 두 명
SELECT * FROM employees
WHERE annual_salary <= ALL (
  SELECT annual_salary FROM employees
  WHERE role IN ('Manager', 'Assistant Manager', 'Head Chef', 'Head Waiter')
);

-- ANY: 네 역할 중 '어느 하나'의 연봉 이상인 직원 → 4명
SELECT * FROM employees
WHERE annual_salary >= ANY (
  SELECT annual_salary FROM employees
  WHERE role IN ('Manager', 'Assistant Manager', 'Head Chef', 'Head Waiter')
);

-- EXISTS: head chef/head waiter가 예약에 배정되어 있으면 해당 직원 정보 반환
SELECT * FROM employees
WHERE EXISTS (
  SELECT * FROM bookings
  WHERE bookings.employee_id = employees.employee_id
    AND employees.role IN ('Head Chef', 'Head Waiter')
);
-- EXISTS는 서브쿼리 결과가 존재(예약 1·2·6)하므로 배정된 직원 2명을 반환
-- NOT EXISTS로 바꾸면 서브쿼리 결과에 존재하지 않는 직원 4명을 반환
```

## 요약

- ALL은 서브쿼리의 모든 값과, ANY/SOME은 값 중 하나와의 비교로 조건을 판정한다.
- EXISTS는 서브쿼리 결과의 존재를, NOT EXISTS는 부재를 검사해 외부 쿼리를 필터링한다.
