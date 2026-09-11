# Subqueries in MySQL

## 개요

- 서브쿼리(subquery) — 쿼리 안의 쿼리 — 의 개념과 실행 순서, 반환 형태
- 비교 연산자와 결합해 "다른 레코드의 값 기준으로 필터링"하는 실습 (Little Lemon 급여 예제)

## 내용

### 서브쿼리란

- **다른 쿼리 안에 놓인 쿼리** — 내부(inner/child) 쿼리가 외부(outer/parent) 쿼리 안에 들어간다.
- **내부 쿼리가 먼저 실행**되고 그 결과가 외부 쿼리로 전달된다. 여러 서브쿼리를 중첩할 수도 있다.
- 서브쿼리는 표준 쿼리처럼 작성하되 **반드시 괄호 안에** 둔다.
- 반환 가능한 결과: 단일 값, 단일 행, 단일 컬럼, 여러 행(하나 이상의 컬럼).

### 비교 연산자와의 결합

- 서브쿼리의 핵심 장점: 결과를 **비교 연산자(=, <, >, <=, >=, <>)와 비교**할 수 있다.
- 서브쿼리는 부모 쿼리 WHERE 절에서 비교 연산자의 앞이나 뒤에 놓을 수 있다.

## 예시

Little Lemon employees 테이블(직원 ID, 이름, 역할, 연봉)에서 "Assistant Chef보다 연봉이 높은 직원" 찾기:

```sql
SELECT *
FROM employees
WHERE annual_salary > (
  SELECT annual_salary
  FROM employees
  WHERE role = 'Assistant Chef'
);
```

실행 순서:

1. **서브쿼리 먼저**: Assistant Chef의 연봉($45,000) 추출
2. 그 값이 외부 쿼리 WHERE 절의 입력이 됨
3. **외부 쿼리**: $45,000보다 연봉이 높은 직원 필터링 → Manager, Assistant Manager, Head Chef 3명

## 요약

- 서브쿼리는 괄호로 감싼 내부 쿼리로, 먼저 실행된 결과가 외부 쿼리의 입력이 된다.
- 단일 값·행·컬럼·다중 행을 반환할 수 있고 비교 연산자와 결합해 동적 기준의 필터링을 만든다.
