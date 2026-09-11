# Demonstration: Loading and Normalizing CSV Data

## 개요
- 비정규화된 CSV(x, y 두 열, y에 수직 복제가 있는 데이터)를 `\copy`로 적재한 뒤, `SELECT DISTINCT` + 서브쿼리 + `UPDATE`로 자동 정규화(normalization)하는 핵심 실습 강의

## 내용
### 1단계: 원본 CSV를 그대로 적재 (xy_raw)
- `xy_raw(x TEXT, y TEXT, y_id INTEGER)` 형태의 임시 테이블을 만들고, `\copy xy_raw(x, y) FROM 파일 DELIMITER ',' CSV`로 CSV를 그대로 적재한다. 이 시점에는 `y_id`가 비어 있다.

### 2단계: 조회 테이블(y) 생성 — SELECT DISTINCT + INSERT
- `y(id SERIAL PRIMARY KEY, y TEXT)` 테이블을 만들고, `INSERT INTO y (y) SELECT DISTINCT y FROM xy_raw ORDER BY y;`로 `xy_raw`의 `y` 열에서 중복 제거된 값들만 순서대로 삽입한다. 이 INSERT 안에 SELECT가 들어가는 것도 서브쿼리의 한 형태다.
- SERIAL 기본 키 덕분에 각 고유 값에 자동으로 번호(예: A=1, B=2)가 매겨진다.

### 3단계: xy_raw의 y_id 채우기 — 서브쿼리를 활용한 UPDATE
- `UPDATE xy_raw SET y_id = (SELECT y.id FROM y WHERE y.y = xy_raw.y);` 형태로, `xy_raw`의 각 행마다 대응하는 `y` 테이블의 id를 찾아 채워 넣는다. 이 UPDATE 문 안의 서브쿼리는 바깥쪽 쿼리의 각 행(`xy_raw.y`)을 참조하는 상관 서브쿼리(correlated subquery)다.

### 4단계: 최종 정규화 테이블(xy) 완성
- `INSERT INTO xy (x, y_id) SELECT x, y_id FROM xy_raw;`로 문자열 `y` 열을 제외한 최종 정규화 테이블을 만들거나, `ALTER TABLE xy_raw DROP COLUMN y;`로 원본 테이블에서 문자열 열 자체를 제거하는 두 가지 방법을 보여준다.
- 완성된 `xy` 테이블은 `y_id` 외래 키로 `y` 테이블과 JOIN해 원래 문자열을 다시 조회할 수 있다.

### 핵심 3단계 요약 패턴
1. `\copy`로 CSV를 원본 그대로 적재.
2. `INSERT INTO 조회테이블 (열) SELECT DISTINCT 열 FROM 원본 ORDER BY 열;` — 중복 제거 + 자동 번호 부여.
3. `UPDATE 원본 SET 외래키 = (SELECT id FROM 조회테이블 WHERE 조회테이블.열 = 원본.열);` — 문자열을 번호로 매핑.

## 예시
```sql
-- 1. 원본 그대로 적재
CREATE TABLE xy_raw (x TEXT, y TEXT, y_id INTEGER);
\copy xy_raw(x, y) FROM 'techniques.csv' DELIMITER ',' CSV

-- 2. 조회 테이블 생성 + 중복 제거 삽입
CREATE TABLE y (id SERIAL PRIMARY KEY, y TEXT UNIQUE);
INSERT INTO y (y) SELECT DISTINCT y FROM xy_raw ORDER BY y;

-- 3. 외래 키 채우기 (상관 서브쿼리)
UPDATE xy_raw
SET y_id = (SELECT y.id FROM y WHERE y.y = xy_raw.y);

-- 4. 최종 정규화 테이블
CREATE TABLE xy (id SERIAL PRIMARY KEY, x TEXT, y_id INTEGER REFERENCES y(id));
INSERT INTO xy (x, y_id) SELECT x, y_id FROM xy_raw;

-- 조회용 JOIN
SELECT * FROM xy JOIN y ON xy.y_id = y.id;
```

## 요약
- 비정규화된 CSV는 "원본 그대로 적재 → SELECT DISTINCT로 조회 테이블 생성 → 상관 서브쿼리로 UPDATE하여 외래 키 채우기"의 3단계로 자동 정규화할 수 있다.
- 이 패턴은 테이블 개수·열 개수에 상관없이 반복 적용 가능한 일반적인 기법이다.
- 이 방식은 온라인 서비스보다는 대량 데이터를 한 번에 적재·정규화하는 배치 작업에 적합하다.
