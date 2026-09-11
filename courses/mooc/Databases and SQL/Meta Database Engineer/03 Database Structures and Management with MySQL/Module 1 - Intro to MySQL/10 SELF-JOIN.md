# SELF-JOIN

## 개요

- SELF JOIN — 한 테이블을 두 개의 동일 테이블로 취급해 같은 테이블 안의 행끼리 조인하는 특수 케이스
- 직원-라인 매니저 관계를 employees 테이블 하나로 풀어내는 실습

## 내용

### 문제 설정

- employees 테이블: Employee ID(기본 키), Full Name, JobTitle, County, LineManager ID
- **기본 키인 Employee ID 값이 LineManager ID 컬럼에도 사용**되어 누가 누구를 관리하는지 나타낸다 (라인 매니저도 직원이다).
- 과제: 모든 라인 매니저와 그들이 관리하는 직원의 이름을 나란히 나열.

### SELF JOIN 방법

1. 같은 employees 테이블에 **별칭 두 개**(e1, e2)를 붙여 두 테이블처럼 취급한다.
2. INNER JOIN 조건으로 `e1.EmployeeID = e2.LineManagerID`를 건다 — 직원 ID와 라인 매니저 ID를 매칭.
3. e1의 full name은 **Line Manager**라는 별칭으로, e2의 full name은 **Employee**라는 별칭으로 출력한다.
4. 조건이 참인 행에서만 두 이름이 함께 반환된다.

### 결과 해석

- Seamus와 Greta는 Simon에게 보고, Simon은 자기 자신에게 보고, 나머지 직원은 Seamus에게 보고 — 한 테이블만으로 조직 구조가 드러난다.

## 예시

```sql
SELECT e1.full_name AS "Line Manager",
       e2.full_name AS "Employee"
FROM employees AS e1
INNER JOIN employees AS e2
ON e1.employee_id = e2.line_manager_id;
```

## 요약

- SELF JOIN은 별칭 두 개로 같은 테이블을 두 번 참조해 행 간 관계(예: 직원-관리자)를 추출한다.
- 조인 조건은 한쪽의 기본 키와 다른 쪽의 참조 컬럼(LineManager ID)을 등치시키는 것이다.
