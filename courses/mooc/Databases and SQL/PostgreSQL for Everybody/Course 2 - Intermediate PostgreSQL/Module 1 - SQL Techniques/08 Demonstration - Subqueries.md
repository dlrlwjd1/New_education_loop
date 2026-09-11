# Demonstration: Subqueries

## 개요
- 계정(account)·댓글(comment) 데이터와 시간대(pg_timezone_names) 데이터를 이용해 서브쿼리를 두 가지 형태(조건절 서브쿼리, FROM절 서브쿼리)로 실습하는 강의

## 내용
### 조건절(WHERE) 서브쿼리
- 이메일로 계정 id를 찾은 뒤 그 id로 댓글을 조회하는 두 단계 작업을, 괄호로 감싼 서브쿼리 하나로 합칠 수 있음을 실제로 실행해 보여준다.
```sql
SELECT content FROM comment
WHERE account_id = (SELECT id FROM account WHERE email = 'ed@umich.edu');
```

### FROM절 서브쿼리 (임시 테이블처럼 사용)
- HAVING 절 없이 같은 결과를 얻는 방법으로, GROUP BY + COUNT 결과를 만드는 서브쿼리를 `FROM (...) AS zap`처럼 이름을 붙여 하나의 "임시 테이블"처럼 취급하고, 바깥 쿼리에서 그 결과에 대해 다시 WHERE·ORDER BY를 적용한다.
```sql
SELECT * FROM (
    SELECT abbrev, COUNT(*) AS ct
    FROM pg_timezone_names
    GROUP BY abbrev
) AS zap
WHERE ct > 10
ORDER BY ct DESC;
```
- 이 방식은 HAVING 절과 동일한 효과를 서브쿼리로 구현한 것이며, 서브쿼리의 출력 열에 별칭(alias, 예: `ct`)을 붙여두면 바깥 쿼리에서 마치 실제 테이블의 열처럼 참조할 수 있다는 점을 보여준다.

### 성능에 대한 재확인
- 이 예제들은 데이터 양이 작아 체감되지 않지만, 서브쿼리는 바깥 쿼리가 안쪽 쿼리의 완료를 기다려야 하므로(경우에 따라 디스크에 중간 결과를 써야 할 수도 있음) 온라인 서비스의 데이터베이스 튜너들이 기피하는 이유를 다시 강조한다. 반면 데이터 마이닝처럼 가끔 실행하는 경우에는 서브쿼리가 매우 유용하다.

## 예시
- 위 "내용" 절의 두 SQL 예시 참고.

## 요약
- 서브쿼리는 WHERE 절 안에 조건으로 넣거나(단일 값/집합 비교), FROM 절 안에 이름 붙인 임시 테이블처럼 넣어(집계 후 재필터링) 사용할 수 있다.
- FROM절 서브쿼리 + WHERE는 HAVING 절과 동일한 효과를 내는 대안적 표현 방식이다.
- 서브쿼리는 표현력이 좋지만 온라인 서비스에서는 성능·최적화 관점에서 주의가 필요하다.
