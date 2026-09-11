# SELECT statement

## 개요

- SELECT 문으로 테이블에서 데이터를 질의(query)하는 기본 방법
- 단일 컬럼, 다중 컬럼, 전체 컬럼(*) 조회의 세 가지 패턴

## 내용

### 기본 구문

- `SELECT 컬럼명 FROM 테이블명;`
- 세미콜론은 필수는 아니지만 문장의 끝을 표시하기 위해 흔히 붙인다.
- SELECT는 데이터 검색 명령, FROM은 원본 테이블을 지정하는 키워드.

### 조회 패턴 3가지 (축구 클럽 players 테이블: ID, name, age, level)

1. **단일 컬럼**: `SELECT name FROM players;` — 선수 이름이 행마다 하나씩 담긴 결과 컬럼 반환
2. **다중 컬럼**: `SELECT name, level FROM players;` — 컬럼 사이를 **쉼표로 구분**해야 SQL이 별개 컬럼으로 인식
3. **전체 컬럼**:
   - 방법 1: 모든 컬럼 이름을 쉼표로 나열 — `SELECT ID, name, age, level FROM players;`
   - 방법 2: **애스터리스크(*) 축약** — `SELECT * FROM players;` — 결과는 방법 1과 동일

### SELECT의 확장 용도

- 단순 조회 외에도 수학 계산, 날짜·시간 질의, 문자열 연결(concatenation) 함수 등의 작업에 사용할 수 있다 (이후 강의에서 상세히 다룸).

## 예시

```sql
-- 선수 이름만
SELECT name FROM players;

-- 이름과 실력 레벨
SELECT name, level FROM players;

-- 전체 데이터 (두 방법 동일 결과)
SELECT ID, name, age, level FROM players;
SELECT * FROM players;
```

## 요약

- `SELECT 컬럼 FROM 테이블;`이 데이터 조회의 기본형이다.
- 여러 컬럼은 쉼표로 구분하고, 전체 컬럼은 `*`로 축약한다.
- SELECT는 계산·날짜·문자열 함수 등에도 쓰이는 DQL의 핵심 명령이다.
