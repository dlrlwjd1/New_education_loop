# Module summary: Performing advanced queries on a MySQL database using Python

## 개요

- Module 2(Python으로 MySQL 쿼리 수행)에서 배운 내용을 되짚는 요약 강의

## 내용

### 레슨 1 — CRUD 연산

- INSERT로 데이터 생성: Python 문자열 인자로 작성 → 커넥터가 MySQL이 이해하는 형식으로 파싱
- 데이터 읽기(SELECT + fetchall), UPDATE·DELETE 쿼리를 문자열 인자로 작성·실행
- Little Lemon 데이터베이스 예제와 랩·퀴즈로 실습

### 레슨 2 — 고급 쿼리

- 필터링·정렬: WHERE 절(조건), ORDER BY(오름/내림차순), 비교 연산자(정확한 범위 지정)의 Python 적용
- JOIN: 공통 컬럼 기반 JOIN 쿼리를 Python 문자열로 작성 → execute → fetchall로 결과 수령
- 랩에서 JOIN 연산 수행, 퀴즈로 확인

## 요약

- Python 문자열 쿼리 + execute + commit/fetchall 패턴으로 CRUD와 고급 쿼리(필터·정렬·조인)를 모두 수행할 수 있다. 다음 모듈은 고급 데이터베이스 클라이언트다.
