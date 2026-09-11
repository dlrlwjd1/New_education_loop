# Joining data from different tables in MySQL database using Python

## 개요

- Python 문자열 쿼리로 JOIN(INNER 등)을 실행해 두 테이블의 데이터를 결합하는 실습 (Little Lemon 메뉴 기능)

## 내용

### JOIN 복습과 Python 적용

- JOIN은 두 테이블의 **공통 컬럼**을 겨냥해 결합·추출한다. LEFT·RIGHT·INNER·OUTER JOIN 모두 Python에서 쓸 수 있다.
- 절차: JOIN 쿼리를 Python 문자열 변수로 작성 → cursor.execute → **fetchall()로 결과 수령** — 행마다 하나씩, 튜플의 리스트.
- 각 항목의 컬럼 순서는 **cursor.column_names** 속성으로 확인한다.

### 과제 — 메뉴 기능 데이터

- 필요한 데이터가 menu_items(이름·타입·가격)와 menu(cuisine) 두 테이블에 나뉘어 있다.
- **공통 컬럼 item_id로 INNER JOIN**해 메뉴 항목·가격·요리 종류를 한 번에 추출한다.

## 예시

```python
my_join_query = """SELECT menu_items.name, menu_items.type,
       menu_items.price, menu.cuisine
FROM menu_items
INNER JOIN menu ON menu_items.item_id = menu.item_id;"""

cursor.execute(my_join_query)
results = cursor.fetchall()       # 행별 튜플 리스트
print(cursor.column_names)        # 컬럼 순서 확인
for row in results:
    print(row)
```

## 요약

- JOIN도 Python 문자열 쿼리 + execute + fetchall의 동일한 흐름으로 실행한다.
- 공통 컬럼 기반 INNER JOIN으로 여러 테이블의 데이터를 하나의 결과로 결합하고, column_names로 순서를 확인한다.
