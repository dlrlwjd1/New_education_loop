# INSERT INTO SELECT statement

## 개요

- 한 테이블(원본, source)의 컬럼을 질의한 결과로 다른 테이블(대상, target)의 컬럼을 채우는 INSERT INTO SELECT 구문

## 내용

### 용도

- 하나 이상의 테이블에서 정보를 가져와 **다른 테이블의 컬럼을 채워야** 할 때 사용한다.
- 원본 테이블의 컬럼 C를 질의한 결과를 대상 테이블의 컬럼 B에 넣는 식이다.

### 구문

1. `INSERT INTO 대상테이블 (넣을 컬럼)` — 데이터가 들어갈 대상 테이블과 컬럼
2. `SELECT 추출할 컬럼` — 원본에서 뽑을 컬럼
3. `FROM 원본테이블` — 원본 데이터가 있는 테이블

### 데모 — 축구 클럽 데이터베이스

- players 테이블(원본): 선수 4명의 레코드와 각 선수의 country 컬럼 보유
- country 테이블(대상): 나라 이름이 비어 있는 상태
- players의 country 컬럼을 질의해 country 테이블의 countryName 컬럼을 채운다.
- (데모에서는 원본 데이터가 대상 테이블에 나타날 순서와 같게 정렬되어 있다는 전제)

## 예시

```sql
INSERT INTO country_table (countryName)
SELECT country
FROM player_table;
```

실행 후 대상 테이블을 조회해 countryName 컬럼이 올바로 채워졌는지 확인한다.

## 요약

- INSERT INTO SELECT는 원본 테이블 질의 결과를 대상 테이블 컬럼에 삽입하는 구문이다.
- 형태: `INSERT INTO 대상(컬럼) SELECT 컬럼 FROM 원본;`
