# Module 6 Graded Quiz

## Q1. JOIN은 보통 어떤 컬럼들 사이에 생성하는가?

**정답: 한 테이블의 기본 키(Primary Key)와 다른 테이블의 외래 키(Foreign Key)**

| 선택지 | 정답 여부 | 설명 |
|--------|-----------|------|
| **한 테이블의 PK ↔ 다른 테이블의 FK** | ✅ | JOIN의 표준적인 연결 방식 |
| 각 테이블의 FK끼리 | ❌ | FK끼리 연결하는 것은 일반적이지 않음 |
| 두 테이블의 어느 컬럼이든 | ❌ | 기술적으로 가능하지만 일반적인 방식이 아님 |
| 각 테이블의 PK끼리 | ❌ | PK끼리 연결하는 것은 일반적이지 않음 |

---

## Q2. INNER JOIN 결과에 더해, 두 번째 테이블에서 첫 번째 테이블과 일치하지 않는 행까지 반환하는 JOIN 유형은?

**정답: Right outer join**

```text
LEFT OUTER JOIN  :  왼쪽 테이블 전체 + 오른쪽의 일치 행
RIGHT OUTER JOIN :  오른쪽 테이블 전체 + 왼쪽의 일치 행  ← 정답
FULL OUTER JOIN  :  양쪽 테이블 전체
```

"두 번째 테이블(오른쪽 테이블)에서 일치하지 않는 행까지" 포함하므로 **RIGHT OUTER JOIN** 입니다.

---

## Q3. INNER JOIN을 올바르게 사용한 SQL 문은?

**정답:**

```sql
SELECT * FROM EMPLOYEES e
INNER JOIN DEPARTMENTS d
ON e.DEP_ID = d.DEP_ID;
```

| 오답 | 이유 |
|------|------|
| `ON DEP_ID` | `ON` 절에 조건식이 없음, 어느 테이블의 컬럼인지 불명확 |
| `ON DEP_ID = DEP_ID` | 테이블 별칭 없이 동일한 컬럼명을 사용하면 모호성(ambiguity) 오류 발생 |
| `CREATE INNER JOIN BETWEEN ... AND ...` | `CREATE`는 JOIN 키워드가 아님, 유효하지 않은 문법 |

---

## Q4. OUTER JOIN의 세 가지 유효한 유형은?

**정답: Left outer join, Right outer join, Full outer join**

| 유형 | 반환 범위 |
|------|-----------|
| LEFT OUTER JOIN | 왼쪽 테이블 전체 + 오른쪽 일치 행 |
| RIGHT OUTER JOIN | 오른쪽 테이블 전체 + 왼쪽 일치 행 |
| FULL OUTER JOIN | 양쪽 테이블 전체 |

`Total outer join`, `Both outer join`, `Left/right outer join`은 존재하지 않는 유형입니다.

---

## Q5. 두 테이블의 모든 행을 선택하려면 어떤 JOIN을 사용해야 하는가?

**정답: Full outer join**

```text
FULL OUTER JOIN = A ∪ B (합집합)
→ 양쪽 테이블의 모든 행 반환
→ 일치하지 않는 행은 상대 테이블 컬럼이 NULL로 채워짐
```

| 선택지 | 설명 |
|--------|------|
| LEFT OUTER JOIN | 왼쪽 테이블 전체만 보장 |
| RIGHT OUTER JOIN | 오른쪽 테이블 전체만 보장 |
| **FULL OUTER JOIN** | 양쪽 테이블 모든 행 반환 ✅ |
| Total outer join | 존재하지 않는 유형 |
