# INSERT statement

## 개요

- INSERT INTO 문으로 테이블에 한 행 또는 여러 행의 데이터를 삽입하는 방법
- 값의 순서·데이터 타입 일치, 따옴표 규칙, CURRENT_DATE() 함수

## 내용

### INSERT INTO 구문

- `INSERT INTO 테이블명 (컬럼 목록)` — 컬럼들은 괄호 안에 쉼표로 구분
- `VALUES (값 목록)` — **각 값은 특정 컬럼에 대응**하므로 같은 데이터 타입과 **같은 순서**여야 한다. 순서가 어긋나면 값이 엉뚱한 컬럼에 저장된다.
- **여러 행 동시 삽입**: VALUES 뒤에 괄호 쌍을 쉼표로 구분해 여러 개 나열한다.

### 주의사항

- **비숫자 값(문자열, 날짜)은 따옴표** 안에 쓴다.
- 날짜는 **연-월-일(year, month, day) 형식**을 지켜야 한다. 아니면 에러가 난다.
- 오늘 날짜는 `CURRENT_DATE()` 함수(빈 괄호)로 넣을 수 있다.

### 삽입 결과 확인

- `SELECT * FROM 테이블명;` — 애스터리스크(*)는 모든 컬럼 반환을 의미. 테이블의 전체 데이터를 확인할 수 있다.

## 예시

스포츠 클럽 데이터베이스의 players 테이블:

```sql
-- 한 행 삽입
INSERT INTO players (ID, Name, Age, Start_date)
VALUES (1, 'Yuval', 25, '2020-10-15');

-- CURRENT_DATE() 사용 예
INSERT INTO players (ID, Name, Age, Start_date)
VALUES (1, 'Yuval', 25, CURRENT_DATE());

-- 여러 행 동시 삽입
INSERT INTO players (ID, Name, Age, Start_date)
VALUES (2, 'Mark', 27, '2020-10-12'),
       (3, 'Karl', 26, '2020-10-07');

-- 전체 데이터 확인
SELECT * FROM players;
```

## 요약

- `INSERT INTO 테이블 (컬럼들) VALUES (값들);`로 데이터를 삽입하며, 값은 컬럼과 순서·타입이 일치해야 한다.
- 여러 행은 괄호 쌍을 쉼표로 이어 한 번에 넣는다.
- 문자열·날짜는 따옴표로 감싸고 날짜는 연-월-일 형식을 지키며, CURRENT_DATE()로 오늘 날짜를 넣을 수 있다.
