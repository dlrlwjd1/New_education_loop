# Demonstration: Regular Expressions

## 개요
- 이메일 주소·트윗 예제 데이터로 `~` 매칭, `substring()`, `regexp_matches()`, `GROUP BY`를 실제로 실행하며 정규식 활용법을 복습하는 실습 강의

## 내용
### 정규식 매칭(~) 기본 복습
- `email ~ 'umsi'`(어디든 포함), `email ~ '^c'`(c로 시작), `email ~ 'edu$'`(edu로 끝남), `email ~ '^[gnt]'`(g/n/t로 시작), `email ~ '[0-9][0-9]'`(연속된 두 자리 숫자 포함)를 차례로 실행하며 각 결과를 확인한다.

### substring()으로 이메일에서 정보 추출
- `substring(email FROM '[0-9]+')`로 이메일에 포함된 숫자를 추출한다.
- `substring(email FROM '.+@(.*)$')`로 `@` 뒤의 도메인 이름만 추출하고, `SELECT DISTINCT`로 중복 도메인을 제거한 뒤, `GROUP BY`로 도메인별 등장 횟수를 집계한다.
- `substring()`을 WHERE 절 안에 넣어(예: 도메인이 `umich.edu`와 일치하는 행만) 조건으로 활용하는 방법도 보여준다.

### regexp_matches()로 해시태그 추출
- 트윗(tweet) 3건, 해시태그 5개가 섞인 작은 테이블을 만들고, `tweet ~ '#SQL'`로 특정 해시태그가 포함된 트윗을 찾는 단순 WHERE 절부터 시작한다.
- `regexp_matches(tweet, '#([a-zA-Z0-9_]+)')`로 각 트윗에서 해시태그(들)를 추출한다 — 한 트윗에 해시태그가 여러 개면 그만큼 결과 행이 늘어나는 것을 확인한다.
- `SELECT DISTINCT`로 중복 없는 해시태그 6개 → 4개로 줄이는 것을 보여주고, DISTINCT 없이 원본과 연결하면 각 트윗이 어떤 해시태그를 가졌는지(트윗1: SQL·FUN, 트윗2: SQL·UMSI, 트윗3: UMSI·Python) 매핑할 수 있음을 보여준다.

## 예시
```sql
CREATE TABLE tw (id SERIAL PRIMARY KEY, tweet TEXT);
-- 트윗 삽입 후

SELECT * FROM tw WHERE tweet ~ '#SQL';
SELECT regexp_matches(tweet, '#([a-zA-Z0-9_]+)') FROM tw;
SELECT DISTINCT regexp_matches(tweet, '#([a-zA-Z0-9_]+)') FROM tw;
```

## 요약
- `~` 연산자로 다양한 정규식 조건(시작·끝·집합·연속 숫자)을 WHERE 절에 활용할 수 있다.
- `substring()`은 첫 번째 일치 부분만, `regexp_matches()`는 모든 일치 부분을 배열로 반환하며 여러 개면 결과 행이 확장된다.
- 이 두 함수와 GROUP BY/DISTINCT를 결합하면 이메일 도메인 집계, 해시태그 추출 같은 실전 텍스트 분석을 SQL만으로 수행할 수 있다.
