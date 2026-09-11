# MySQL CREATE VIEW

## 개요

- 뷰(view) — 하나 이상의 테이블에서 만드는 **가상 테이블** — 의 개념과 용도
- CREATE VIEW, RENAME TABLE, DROP VIEW 실습 (Lucky Shrub 베스트셀러 상품 예제)

## 내용

### 뷰란

- **요구사항에 따라 하나 또는 여러 테이블로부터 만든 가상 테이블.** 사용자는 일반 테이블 인터페이스처럼 뷰의 데이터에 접근·조작할 수 있다.
- 용도:
  1. 테이블 데이터의 **부분집합**(예: 7개 컬럼 중 3개만)
  2. **여러 테이블의 데이터 결합**(한 테이블의 2컬럼 + 다른 테이블의 4컬럼을 하나의 가상 테이블로)

### 생성 문법 (5단계 프로세스)

1. `CREATE VIEW 뷰이름 AS`로 가상 테이블 생성
2. SELECT로 옮길 컬럼 나열 (**점 표기법**: 테이블.컬럼 — 여러 테이블에서 같은 컬럼 이름이 충돌하는 것을 방지. 단일 테이블이면 생략 가능)
3. FROM으로 원본 테이블 지정 — **여러 테이블이면 INNER JOIN + ON**으로 매칭 컬럼 연결
4. 조건 설정 (WHERE)
5. 정렬·필터 규칙 설정 (ORDER BY 등)

### 이름 변경과 삭제

- **이름 변경**: `RENAME TABLE 기존이름 TO 새이름;` — 모든 테이블 유형에 쓰는 구문
- **삭제**: `DROP VIEW 뷰이름;` — 뷰만 제거되고 **원본 테이블에는 영향이 없다**

## 예시

orders(OrderID, ClientID, ProductID, Quantity, Cost)와 products(ProductID, ItemName, Price)에서 베스트셀러 상위 3개 뷰 만들기:

```sql
CREATE VIEW Top3Products AS
SELECT products.item_name, orders.quantity, orders.cost
FROM orders
INNER JOIN products ON orders.product_id = products.product_id
ORDER BY orders.cost DESC
LIMIT 3;

-- 일반 테이블처럼 질의
SELECT * FROM Top3Products;

-- 이름 변경
RENAME TABLE Top3Products TO TopProducts;

-- 삭제 (원본 테이블 무영향)
DROP VIEW TopProducts;
```

## 요약

- 뷰는 부분집합 추출이나 다중 테이블 결합을 위한 가상 테이블로, 일반 테이블처럼 질의할 수 있다.
- CREATE VIEW ... AS SELECT ... 로 만들고, 다중 테이블이면 INNER JOIN을 쓰며 점 표기법으로 컬럼 충돌을 피한다.
- RENAME TABLE로 이름을 바꾸고 DROP VIEW로 제거해도 원본에는 영향이 없다.
