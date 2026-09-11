# Databases and SQL for Data Science with Python 슬라이드/스크립트 구성안

## 개요

이 폴더는 `Databases and SQL for Data Science with Python` 코스를 6시간 비대면 녹화 강의로 제작하기 위한 슬라이드 문구와 녹화 스크립트를 담습니다.

원본 코스는 6개 모듈로 구성되어 있지만, 녹화 강의에서는 수강 흐름을 고려해 6개 영상으로 압축합니다.

## 영상 구성

| 순서 | 영상 제목 | 권장 길이 | 주요 원본 노트 |
|------|-----------|-----------|----------------|
| 1 | 데이터베이스와 SQL 기본 CRUD | 55-60분 | `module 1` |
| 2 | 테이블 설계와 DDL | 55-60분 | `module 2` |
| 3 | 필터링, 정렬, 그룹화 | 60-65분 | `module 3` 전반 |
| 4 | SQL 함수, 서브쿼리, 여러 테이블 | 60-65분 | `module 3` 후반 |
| 5 | Python에서 SQL 사용하기 | 60-65분 | `module 4`, `module 5` |
| 6 | 고급 SQL: View, Transaction, Join | 65-70분 | `module 6` |

총 권장 길이: 약 6시간

## 강의 톤

- SQL을 처음 배우는 수강자를 기준으로 설명합니다.
- 문법 암기보다 "언제 이 구문을 쓰는가"를 먼저 설명합니다.
- 각 영상에는 최소 2-3개의 직접 쿼리 작성 데모를 넣습니다.
- 위험한 구문인 `UPDATE`, `DELETE`, `DROP`, `TRUNCATE`는 항상 `WHERE`, 백업, 트랜잭션 관점과 함께 설명합니다.
- Python 연동 파트는 DB-API, SQL Magic, Pandas 흐름을 하나의 데이터 분석 pipeline으로 설명합니다.

## 전체 학습 목표

수강자는 이 강의를 마치면 다음을 할 수 있어야 합니다.

- 관계형 데이터베이스와 SQL의 역할 설명
- `SELECT`, `WHERE`, `COUNT`, `DISTINCT`, `LIMIT`로 기본 조회 작성
- `INSERT`, `UPDATE`, `DELETE`로 데이터를 조작
- `CREATE`, `ALTER`, `DROP`, `TRUNCATE`로 테이블 구조 관리
- `LIKE`, `BETWEEN`, `IN`, `ORDER BY`, `GROUP BY`, `HAVING`으로 분석 쿼리 작성
- SQL 함수와 날짜 함수, 서브쿼리 사용
- Python DB-API, SQL Magic, Pandas로 데이터베이스 접근
- View, Stored Procedure, ACID Transaction, Join 개념 이해

## 추천 녹화 방식

1. 슬라이드로 개념과 문법 구조 설명
2. SQL 편집기 또는 Notebook에서 예제 실행
3. 실행 결과를 보며 왜 이 결과가 나왔는지 해석
4. 짧은 연습 문제를 제시하고 풀이
5. 다음 영상에서 이어질 개념 예고

