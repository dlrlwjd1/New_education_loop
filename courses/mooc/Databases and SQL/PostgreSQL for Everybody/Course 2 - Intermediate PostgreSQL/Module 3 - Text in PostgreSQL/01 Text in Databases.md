# Text in Databases

## 개요
- 성능 실험을 위해 대량의 테스트 데이터를 PostgreSQL 내장 함수로 생성하는 방법을 소개하는 도입 강의

## 내용
### 왜 대량 테스트 데이터가 필요한가
- 지금까지의 예제는 레코드 몇 개뿐이었지만, 실제 인덱싱·성능 비교를 체감하려면 1만~100만 건 규모의 데이터가 필요하다. Python 스크립트로 반복문을 돌려 채워도 되지만, PostgreSQL은 자체적으로 무작위 데이터를 생성하는 함수들을 제공한다.

### 주요 데이터 생성 함수
- `repeat(문자열, n)` : 문자열을 n번 반복해 긴 문자열을 만든다(예: 'ABC'를 1000번 반복).
- `random()` : 0과 1 사이의 부동소수점 난수를 반환한다. `trunc(random() * 100)`처럼 곱하고 잘라내면(trunc) 원하는 범위의 정수를 만들 수 있다.
- `generate_series(시작, 끝)` : Python의 `range()`와 비슷하게 여러 개의 행(row)을 생성한다. 다른 표현식과 결합하면 무작위성이 섞인 행을 대량으로 만들어낼 수 있다.
- 문자열 연결(`||`)로 `random()`, `repeat()`, `generate_series()` 결과를 조합해 각기 다른 긴 문자열이 담긴 행을 다수 생성할 수 있다.

## 예시
```sql
SELECT random();                        -- 0~1 사이 난수
SELECT trunc(random() * 100);           -- 0~99 정수
SELECT repeat('neon ', 5);               -- 'neon neon neon neon neon '
SELECT generate_series(1, 5);           -- 1,2,3,4,5 다섯 개의 행

-- 조합: 무작위 데이터가 담긴 여러 행 생성
SELECT 'sql4e.com/neon' || trunc(random() * 1000000) || repeat('lemon', 5)
FROM generate_series(1, 5);
```

## 요약
- `random()`, `trunc()`, `repeat()`, `generate_series()`를 조합하면 별도의 스크립트 없이 SQL만으로 대량의 테스트 데이터를 생성할 수 있다.
- 이렇게 생성한 데이터로 이후 인덱싱 전략과 쿼리 성능을 비교 실험한다.
