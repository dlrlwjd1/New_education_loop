# Module 3 Summary

## 핵심 정리

| 개념 | 설명 |
|------|------|
| `WHERE` 절 | 조건(predicate)을 사용해 결과를 필터링 |
| `%` 와일드카드 | 패턴에서 알 수 없는 문자를 대체 (`LIKE`와 함께 사용) |
| `BETWEEN AND` | 숫자·날짜 범위 지정 (양 끝 포함) |
| `ORDER BY` | 결과를 오름차순(`ASC`) 또는 내림차순(`DESC`)으로 정렬 |
| `GROUP BY` | 같은 값을 가진 행을 그룹으로 묶어 집계 |

## 예시로 보는 흐름

```sql
SELECT country, COUNT(country) AS Count
FROM author
WHERE country != 'US'          -- 행 필터
GROUP BY country               -- 그룹화
HAVING COUNT(country) > 2      -- 그룹 필터
ORDER BY Count DESC;           -- 정렬
```
