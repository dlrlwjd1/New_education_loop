# JOINS

## 개요

- JOIN 절 — 두 테이블의 **공통 컬럼**을 기준으로 데이터를 질의하는 개념 소개
- 4가지 JOIN 유형: INNER, LEFT, RIGHT, SELF JOIN (벤 다이어그램으로 이해)

## 내용

### JOIN이 필요한 이유

- Lucky Shrub는 "어떤 상품이 주문되었고 누가 주문했는지"를 알아야 하는데, 정보가 customers·orders·products **세 테이블에 흩어져** 있다.
- JOIN은 **두 대상 테이블 간 공통 컬럼**을 기준으로 데이터를 질의한다 — customers/orders는 customer ID를, orders/products는 product ID를 공유한다.

### 4가지 JOIN 유형

| 유형 | 반환 대상 |
|---|---|
| **INNER JOIN** | 양쪽 테이블에 **일치하는 값이 있는** 레코드만 |
| **LEFT JOIN** | 공통 레코드 + **왼쪽 테이블의 모든 레코드**(오른쪽에 매칭이 없어도) |
| **RIGHT JOIN** | 공통 레코드 + **오른쪽 테이블이 주 대상**(오른쪽 전체 + 왼쪽 매칭) |
| **SELF JOIN** | **테이블을 자기 자신과 조인** — 한 테이블을 둘로 취급해 같은 테이블 안의 정보 추출 |

### 문법 골격

- **INNER JOIN**: `SELECT ... FROM 왼쪽테이블 INNER JOIN 오른쪽테이블 ON 공통컬럼 조건`
- **LEFT JOIN**: SELECT에서 필요한 컬럼에 AS 별칭 → FROM 왼쪽테이블 AS 별칭 → LEFT JOIN 오른쪽테이블 AS 별칭 → ON으로 매칭 컬럼 등치
- **RIGHT JOIN**: LEFT JOIN과 동일한 구조에서 RIGHT JOIN 절만 다름
- **SELF JOIN**: SELECT 문에서 같은 테이블의 공통 컬럼에 별칭을 붙여 두 테이블처럼 취급

### 활용 예 (Lucky Shrub)

- INNER JOIN: clients + orders를 client ID로 조인해 **주문한 모든 고객의 이름** 추출
- LEFT JOIN: clients와 orders에서 매칭 4건 + 왼쪽 테이블 전체
- RIGHT JOIN: orders + products를 product ID로 조인해 **모든 상품과 매칭 주문 상세** 나열
- SELF JOIN: staff 테이블 하나로 **누가 라인 매니저이고 누가 매장 직원인지** 판별

## 요약

- JOIN은 공통 컬럼을 매개로 여러 테이블의 데이터를 함께 질의하는 수단이다.
- INNER(교집합), LEFT(왼쪽 전체+매칭), RIGHT(오른쪽 전체+매칭), SELF(자기 자신과 조인)의 4유형이 있다.
- 상세 문법은 이후 강의에서 유형별로 다룬다.
