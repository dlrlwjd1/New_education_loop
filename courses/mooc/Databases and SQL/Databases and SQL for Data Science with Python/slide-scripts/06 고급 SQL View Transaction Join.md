# 06 고급 SQL: View, Transaction, Join

## 영상 목표

- View의 역할과 사용 이유를 설명한다.
- Stored Procedure의 개념을 이해한다.
- Transaction과 ACID 원칙을 설명한다.
- INNER JOIN과 OUTER JOIN의 차이를 이해한다.
- 여러 테이블을 연결해 분석 쿼리를 작성하는 기준을 잡는다.

권장 길이: 65-70분

---

## Slide 1. 오늘의 주제

### 슬라이드 문구

고급 SQL 핵심

- Views
- Stored Procedures
- ACID Transactions
- Joins

### 스크립트

마지막 영상에서는 고급 SQL 개념을 정리합니다.

여기서 고급이라는 말은 어렵다는 뜻보다는, 실제 데이터베이스를 안정적으로 운영하고 여러 테이블을 분석하는 데 필요한 개념이라는 뜻에 가깝습니다.

View, Stored Procedure, Transaction, Join을 순서대로 살펴보겠습니다.

---

## Slide 2. View란?

### 슬라이드 문구

View

저장된 SELECT 쿼리처럼 동작하는 가상 테이블

```sql
CREATE VIEW employee_public AS
SELECT ID, NAME, DEPT
FROM EMPLOYEE;
```

### 스크립트

View는 저장된 SELECT 쿼리처럼 동작하는 가상 테이블입니다.

실제 데이터를 복사해서 저장하는 것이 아니라, view를 조회할 때 정의된 SELECT 문이 실행된다고 이해하면 됩니다.

예를 들어 직원 테이블에서 민감한 급여 정보를 제외하고 ID, 이름, 부서만 보여주는 view를 만들 수 있습니다.

---

## Slide 3. View를 사용하는 이유

### 슬라이드 문구

View의 장점

- 복잡한 쿼리 재사용
- 민감한 컬럼 숨기기
- 사용자별 조회 범위 제한
- 분석용 결과 구조 표준화

### 스크립트

View를 사용하는 이유는 여러 가지입니다.

반복해서 쓰는 복잡한 SELECT 문을 view로 만들어 재사용할 수 있습니다.

또한 민감한 컬럼을 숨기고 필요한 컬럼만 노출할 수 있습니다. 급여나 개인정보 컬럼을 직접 테이블에서 보여주지 않고, 제한된 view만 제공하는 방식입니다.

분석팀에 표준화된 조회 결과를 제공할 때도 view가 유용합니다.

---

## Slide 4. View 생성과 삭제

### 슬라이드 문구

기본 문법

```sql
CREATE VIEW high_salary_jobs AS
SELECT JOB_TITLE, MIN_SALARY, MAX_SALARY
FROM JOBS
WHERE MIN_SALARY >= 50000;
```

삭제:

```sql
DROP VIEW high_salary_jobs;
```

### 스크립트

View는 `CREATE VIEW view_name AS SELECT ...` 형태로 만듭니다.

이후 일반 테이블처럼 `SELECT * FROM view_name`으로 조회할 수 있습니다.

더 이상 필요 없으면 `DROP VIEW`로 삭제합니다. View를 삭제해도 원본 테이블 데이터가 삭제되는 것은 아닙니다.

---

## Slide 5. Stored Procedure

### 슬라이드 문구

Stored Procedure

데이터베이스 안에 저장된 실행 가능한 SQL 로직

사용 이유:
- 반복 작업 캡슐화
- 복잡한 로직 재사용
- 애플리케이션과 DB 로직 분리

### 스크립트

Stored Procedure는 데이터베이스 안에 저장된 실행 가능한 SQL 로직입니다.

반복적으로 수행하는 작업이나 여러 SQL 문이 필요한 절차를 하나의 프로시저로 묶을 수 있습니다.

예를 들어 특정 직원의 급여를 인상하는 로직을 프로시저로 만들어 두고, 필요한 파라미터만 전달해 호출할 수 있습니다.

---

## Slide 6. Stored Procedure 예시

### 슬라이드 문구

개념 예시

```sql
CREATE PROCEDURE update_salary(...)
BEGIN
    UPDATE EMPLOYEE
    SET SALARY = SALARY * 1.1
    WHERE ID = ...;
END;
```

DBMS별 문법 차이가 크다

### 스크립트

Stored Procedure는 DBMS별 문법 차이가 큽니다.

MySQL, Db2, PostgreSQL이 모두 프로시저를 지원하지만, 생성 문법과 파라미터 표현, 구분자 처리가 다를 수 있습니다.

따라서 이 강의에서는 프로시저의 개념과 사용 이유를 중심으로 이해하고, 실제 문법은 사용하는 DBMS 기준으로 확인하는 것이 좋습니다.

---

## Slide 7. Transaction

### 슬라이드 문구

Transaction

하나의 작업 단위로 묶인 SQL 실행 묶음

예:
- 계좌 A에서 출금
- 계좌 B에 입금

둘 다 성공하거나 둘 다 실패해야 한다

### 스크립트

Transaction은 여러 SQL 작업을 하나의 논리적 작업 단위로 묶는 개념입니다.

대표적인 예는 계좌 이체입니다. A 계좌에서 돈을 빼고 B 계좌에 돈을 넣는 두 작업이 있습니다.

출금만 성공하고 입금이 실패하면 데이터가 망가집니다. 따라서 두 작업은 모두 성공하거나 모두 실패해야 합니다.

---

## Slide 8. ACID

### 슬라이드 문구

ACID 원칙

- Atomicity: 원자성
- Consistency: 일관성
- Isolation: 격리성
- Durability: 지속성

### 스크립트

Transaction의 신뢰성을 설명하는 네 가지 속성이 ACID입니다.

Atomicity는 작업이 모두 수행되거나 모두 취소되어야 한다는 뜻입니다.

Consistency는 transaction 전후에 데이터베이스가 일관된 상태를 유지해야 한다는 뜻입니다.

Isolation은 동시에 실행되는 transaction들이 서로 부적절하게 영향을 주지 않아야 한다는 뜻입니다.

Durability는 commit된 결과가 장애 후에도 유지되어야 한다는 뜻입니다.

---

## Slide 9. COMMIT과 ROLLBACK

### 슬라이드 문구

Transaction 제어

```sql
COMMIT;
```

변경 사항 확정

```sql
ROLLBACK;
```

변경 사항 취소

### 스크립트

Transaction에서 중요한 명령어는 `COMMIT`과 `ROLLBACK`입니다.

`COMMIT`은 지금까지의 변경 사항을 확정합니다.

`ROLLBACK`은 transaction 안에서 수행한 변경 사항을 취소하고 이전 상태로 되돌립니다.

`UPDATE`, `DELETE`처럼 위험한 작업을 할 때 transaction을 이해하는 것은 매우 중요합니다.

---

## Slide 10. JOIN이 필요한 이유

### 슬라이드 문구

데이터는 여러 테이블에 나뉘어 있다

예:
- BORROWER: 대출자 정보
- LOAN: 대출 기록
- BOOK: 책 정보

질문:
누가 어떤 책을 언제 빌렸는가?

### 스크립트

관계형 데이터베이스에서는 데이터를 여러 테이블로 나누어 저장합니다.

대출자 정보는 BORROWER 테이블에 있고, 대출 기록은 LOAN 테이블에 있고, 책 정보는 BOOK 테이블에 있을 수 있습니다.

하지만 분석 질문은 여러 테이블의 정보를 함께 요구합니다. 누가 어떤 책을 언제 빌렸는지 알고 싶다면 테이블을 연결해야 합니다.

이때 사용하는 것이 JOIN입니다.

---

## Slide 11. JOIN 기본 구조

### 슬라이드 문구

JOIN은 공통 키로 테이블을 연결한다

```sql
SELECT B.NAME, L.LOAN_DATE
FROM BORROWER B
JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID;
```

### 스크립트

JOIN은 두 테이블을 공통 키를 기준으로 연결합니다.

BORROWER 테이블과 LOAN 테이블이 모두 BORROWER_ID를 가지고 있다면, 이 값을 기준으로 대출자와 대출 기록을 연결할 수 있습니다.

`ON` 절에는 두 테이블을 어떻게 연결할지 조건을 적습니다.

---

## Slide 12. INNER JOIN

### 슬라이드 문구

INNER JOIN

양쪽 테이블에서 매칭되는 행만 반환

```sql
SELECT B.NAME, L.LOAN_DATE
FROM BORROWER B
INNER JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID;
```

### 스크립트

INNER JOIN은 양쪽 테이블에서 연결 조건이 일치하는 행만 반환합니다.

대출 기록이 있는 대출자만 보고 싶다면 INNER JOIN이 적합합니다.

반대로 대출 기록이 없는 대출자도 포함하고 싶다면 OUTER JOIN이 필요합니다.

---

## Slide 13. LEFT OUTER JOIN

### 슬라이드 문구

LEFT OUTER JOIN

왼쪽 테이블의 모든 행 유지

```sql
SELECT B.NAME, L.LOAN_DATE
FROM BORROWER B
LEFT JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID;
```

매칭이 없으면 오른쪽 컬럼은 `NULL`

### 스크립트

LEFT OUTER JOIN은 왼쪽 테이블의 모든 행을 유지합니다.

오른쪽 테이블에 매칭되는 행이 있으면 값을 붙이고, 없으면 오른쪽 테이블의 컬럼은 NULL로 표시됩니다.

예를 들어 모든 대출자를 보고 싶고, 대출 기록이 있으면 함께 표시하고 싶다면 LEFT JOIN을 사용할 수 있습니다.

---

## Slide 14. RIGHT와 FULL OUTER JOIN

### 슬라이드 문구

RIGHT OUTER JOIN
- 오른쪽 테이블의 모든 행 유지

FULL OUTER JOIN
- 양쪽 테이블의 모든 행 유지
- 매칭이 없으면 NULL

주의:
일부 DBMS는 FULL OUTER JOIN을 직접 지원하지 않는다

### 스크립트

RIGHT OUTER JOIN은 오른쪽 테이블의 모든 행을 유지합니다.

FULL OUTER JOIN은 양쪽 테이블의 모든 행을 유지하고, 매칭되지 않는 부분은 NULL로 채웁니다.

다만 MySQL 같은 일부 DBMS에서는 FULL OUTER JOIN을 직접 지원하지 않을 수 있습니다. 이 경우 LEFT JOIN과 RIGHT JOIN을 `UNION`으로 조합해 구현하기도 합니다.

---

## Slide 15. JOIN 선택 기준

### 슬라이드 문구

어떤 JOIN을 쓸까?

- 매칭되는 데이터만 필요: `INNER JOIN`
- 왼쪽 기준 목록 전체 필요: `LEFT JOIN`
- 오른쪽 기준 목록 전체 필요: `RIGHT JOIN`
- 양쪽의 누락까지 확인: `FULL OUTER JOIN`

### 스크립트

JOIN을 선택할 때는 어떤 행을 보존해야 하는지 생각하면 됩니다.

양쪽에 모두 존재하는 데이터만 필요하면 INNER JOIN입니다.

기준이 되는 왼쪽 테이블의 모든 행을 유지해야 하면 LEFT JOIN입니다.

양쪽 테이블에서 누락된 매칭까지 모두 확인해야 하면 FULL OUTER JOIN을 고려합니다.

---

## Slide 16. NULL 해석

### 슬라이드 문구

OUTER JOIN 결과의 `NULL`

의미:
- 매칭되는 행이 없다
- 값이 존재하지 않는다
- 분석에서 누락/미매칭 신호가 될 수 있다

### 스크립트

OUTER JOIN 결과에서 NULL은 중요한 신호입니다.

단순히 값이 비어 있다는 의미를 넘어서, 연결 대상 테이블에 매칭되는 행이 없다는 뜻일 수 있습니다.

예를 들어 LEFT JOIN 결과에서 LOAN_DATE가 NULL이면, 해당 대출자는 대출 기록이 없다는 의미일 수 있습니다.

---

## Slide 17. 실습 데모: JOIN

### 슬라이드 문구

데모 흐름

1. BORROWER 테이블 확인
2. LOAN 테이블 확인
3. INNER JOIN 실행
4. LEFT JOIN 실행
5. 결과 차이 해석

### 스크립트

JOIN 데모에서는 먼저 두 테이블을 각각 확인합니다.

그 다음 INNER JOIN을 실행해 매칭되는 행만 봅니다. 이어서 LEFT JOIN을 실행해 왼쪽 테이블의 모든 행이 유지되는지 확인합니다.

두 결과를 비교하면서 어떤 행이 사라지고 어떤 행이 NULL을 갖는지 해석합니다.

---

## Slide 18. 전체 코스 정리

### 슬라이드 문구

전체 흐름

1. SQL 기본 CRUD
2. 테이블 설계와 DDL
3. 필터링, 정렬, 그룹화
4. 함수, 서브쿼리, 여러 테이블
5. Python + SQL
6. View, Transaction, Join

### 스크립트

이제 전체 코스를 정리하겠습니다.

처음에는 데이터베이스와 SQL 기본 CRUD를 배웠습니다. 그 다음 테이블 설계와 DDL을 다뤘고, 조회 쿼리를 확장해 필터링, 정렬, 그룹화를 배웠습니다.

이후 SQL 함수와 서브쿼리, 여러 테이블 조회를 다뤘고, Python에서 SQL을 사용하는 흐름을 봤습니다.

마지막으로 View, Stored Procedure, Transaction, JOIN을 통해 실제 데이터베이스 활용에 필요한 개념을 정리했습니다.

---

## Slide 19. 수강 후 연습 방향

### 슬라이드 문구

다음 연습

- 작은 SQLite DB 직접 만들기
- CSV를 테이블로 변환
- 10개 이상의 분석 질문 만들기
- 각 질문을 SQL로 답하기
- JOIN과 GROUP BY를 함께 사용하기

### 스크립트

SQL은 보는 것만으로는 익숙해지기 어렵습니다.

작은 SQLite 데이터베이스를 직접 만들고, CSV를 테이블로 넣은 뒤, 스스로 분석 질문을 만들어 보는 것이 좋습니다.

예를 들어 "카테고리별 평균 가격은?", "가장 높은 값은?", "누락된 매칭은?", "특정 조건의 그룹별 수는?" 같은 질문을 만들고 SQL로 답해보세요.

---

## Slide 20. 마무리

### 슬라이드 문구

핵심 메시지

SQL은 데이터 분석의 출발점이다

좋은 SQL은
- 필요한 데이터만 가져오고
- 구조를 이해하며
- 결과를 검증할 수 있는 쿼리다

### 스크립트

마지막으로 기억할 점은 SQL이 데이터 분석의 출발점이라는 것입니다.

좋은 SQL은 단순히 실행되는 쿼리가 아닙니다. 필요한 데이터만 가져오고, 테이블 구조와 관계를 이해하고, 결과가 맞는지 검증할 수 있는 쿼리입니다.

이 강의의 내용을 바탕으로 실제 데이터셋에서 계속 쿼리를 작성해 보면서 감을 익히면 됩니다.

