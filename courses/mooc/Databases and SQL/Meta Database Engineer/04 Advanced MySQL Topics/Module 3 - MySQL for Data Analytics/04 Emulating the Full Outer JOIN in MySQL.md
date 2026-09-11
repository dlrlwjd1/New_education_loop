# Emulating the Full Outer JOIN in MySQL

## 개요

- MySQL이 지원하지 않는 FULL OUTER JOIN을 LEFT JOIN + RIGHT JOIN + UNION(ALL)으로 흉내내는 방법

## 내용

### FULL OUTER JOIN이란

- 두 테이블 사이의 매칭 여부와 상관없이 **왼쪽·오른쪽 테이블의 모든 레코드**(매칭 + 비매칭)를 반환하는 조인.
- **MySQL은 FULL OUTER JOIN을 지원하지 않으므로** LEFT JOIN과 RIGHT JOIN의 결합으로 에뮬레이션한다.

### 에뮬레이션 방법

1. **LEFT JOIN 문** 작성 (왼쪽 테이블 기준, ON으로 매칭 컬럼 등치)
2. 사이에 **UNION ALL**(중복 레코드 포함) 또는 **UNION**(유일 레코드만) 배치
3. **RIGHT JOIN 문** 작성 (LEFT JOIN과 거의 동일, 절만 교체)

## 예시

Lucky Shrub — 모든 신규 주문과 주문한 고객 + **주문하지 않은 고객까지**:

```sql
SELECT c.client_id, c.full_name, c.contact_number,
       o.order_id, o.cost, o.date
FROM clients c
LEFT JOIN orders o ON c.client_id = o.client_id

UNION            -- 유일 레코드만 (중복 필요 시 UNION ALL)

SELECT c.client_id, c.full_name, c.contact_number,
       o.order_id, o.cost, o.date
FROM clients c
RIGHT JOIN orders o ON c.client_id = o.client_id;
```

- 출력: 매칭되는 주문-고객 ID들과 함께, 매칭이 없는 ID(주문 없는 고객 등)도 모두 표시된다.

## 요약

- FULL OUTER JOIN은 MySQL에 없으므로 LEFT JOIN ∪ RIGHT JOIN으로 에뮬레이션한다.
- 중복까지 필요하면 UNION ALL, 유일 레코드만 필요하면 UNION을 사이에 둔다.
