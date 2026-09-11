# Ingres Algorithm

## 개요
- Ingres 알고리즘은 선형 트리(linear trees)를 사용해 다중 테이블 조인 쿼리를 처리하는 방식이다.
- 핵심 단계는 두 가지, **분리(detachment)**와 **튜플 대입(tuple substitution)**이다.

## 내용

### 선형 처리 방식
- 다이어그램 상에서 query 1과 query 2에서 생성된 두 테이블을 조인하고, 그 결과를 query 3에서 생성된 새 테이블과 조인하고, 다시 그 결과를 query 4의 테이블과 조인하는 식으로 진행한다.
- 즉 쿼리를 여러 단계로 쪼개어, 앞 단계의 결과를 다음 단계의 쿼리에 순차적으로 넘겨준다(feed).

### 1단계: 분리(detachment)
- 여러 테이블에 대한 predicate(조건)가 걸린 쿼리가 있을 때, 그중 하나의 테이블 R1에만 적용되는 predicate(predicate 1)을 나머지 쿼리에서 분리한다.
- 분리된 쿼리 Q1은 "R1에서 predicate 1을 적용해 특정 애트리뷰트를 select하여 임시 테이블을 생성"하는 단일 테이블 쿼리다.
- 이 임시 테이블의 결과를 나머지 쿼리(다른 테이블들과의 조인 및 그에 관련된 predicate들)에 입력으로 전달한다.
- 이 과정을 쿼리가 더 이상 줄어들 수 없는(irreducible) 상태, 즉 두 개 이상의 테이블 간 조인만 남을 때까지 반복한다.

### 2단계: 튜플 대입(tuple substitution)
- 쿼리가 irreducible한 상태(두 개 이상 테이블의 조인)가 되면 튜플 대입을 적용한다.
- N개의 행을 가진 관계가 있을 때, 그 관계의 각 행(튜플)을 하나씩 꺼내어 나머지 쿼리에 대입한다.
- 즉 "R1과 나머지 관계들의 조인" 대신 "R1의 특정 튜플 하나와 나머지 관계들의 조인"으로 쿼리를 재구성하고, 이를 각 튜플마다 재귀적으로(recursively) 반복 평가한다.
- 이렇게 대입된 각 쿼리는 하나의 변수(one-variable)만 남은 단순한 쿼리가 되어, 1-variable query processor로 처리할 수 있다.

## 예시
- 원본 쿼리: employee, assignment, project 세 테이블을 조인해 employee name을 조회하며, project name이 'CADCAM'인 project만 대상으로 한다.
- **1단계(detachment)** — project 테이블 기준으로 첫 쿼리를 분리:
  ```sql
  -- Q1: project 테이블에서 조건에 맞는 project number만 뽑아 임시 테이블 P_new 생성
  SELECT project_number INTO P_new
  FROM project
  WHERE project_name = 'CADCAM';
  ```
- **2단계** — P_new와 assignment를 project number로 조인해 employee number만 추출, 임시 테이블 A_new 생성:
  ```sql
  SELECT employee_number INTO A_new
  FROM P_new, assignment
  WHERE P_new.project_number = assignment.project_number;
  ```
- **3단계(tuple substitution 적용 대상)** — A_new와 employee를 employee number로 조인:
  ```sql
  SELECT employee_name
  FROM A_new, employee
  WHERE A_new.employee_number = employee.employee_number;
  ```
- 위 3단계에서 A_new에 담긴 값이 단순화를 위해 E1, E2 두 개뿐이라고 가정하면, 튜플 대입은 아래처럼 각 값을 개별 단일 테이블 쿼리로 변환해 evaluate한다.
  ```sql
  -- E1 대입
  SELECT employee_name FROM employee WHERE employee_number = 'E1';
  -- E2 대입
  SELECT employee_name FROM employee WHERE employee_number = 'E2';
  ```

## 요약
- Ingres는 선형 트리 구조로 다중 테이블 조인을 순차적으로 처리하는 2단계 알고리즘이다.
- **분리(detachment)**: 단일 테이블에만 적용되는 predicate을 먼저 분리해 임시 결과 테이블을 만들고, 이를 다음 단계 쿼리의 입력으로 넘긴다. 쿼리가 irreducible(두 테이블 이상 조인)해질 때까지 반복한다.
- **튜플 대입(tuple substitution)**: irreducible한 조인 쿼리에서, 한쪽 테이블의 각 행(튜플)을 하나씩 꺼내 나머지 쿼리에 대입해 재귀적으로 평가함으로써, 복잡한 다중 테이블 조인을 1-variable 쿼리로 단순화한다.
