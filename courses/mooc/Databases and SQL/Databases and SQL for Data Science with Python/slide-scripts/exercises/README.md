# 연습문제 사용 가이드

이 폴더에는 01~06강 강의 내용을 실습하기 위한 연습문제 파일이 있습니다.

## 폴더 구조

```
exercises/       ← 현재 폴더 (연습문제 Markdown)
data/            ← SQL 데이터 셋업 파일
```

## 연습문제 목록

| 파일 | 강의 주제 | 핵심 개념 |
|------|----------|-----------|
| [01 기본 CRUD 연습문제.md](01%20%EA%B8%B0%EB%B3%B8%20CRUD%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | 데이터베이스와 SQL 기본 CRUD | SELECT, WHERE, COUNT, DISTINCT, LIMIT, INSERT, UPDATE, DELETE |
| [02 테이블 설계 DDL 연습문제.md](02%20%ED%85%8C%EC%9D%B4%EB%B8%94%20%EC%84%A4%EA%B3%84%20DDL%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | 테이블 설계와 DDL | CREATE TABLE, ALTER TABLE, DROP, TRUNCATE, PK, FK |
| [03 필터링 정렬 그룹화 연습문제.md](03%20%ED%95%84%ED%84%B0%EB%A7%81%20%EC%A0%95%EB%A0%AC%20%EA%B7%B8%EB%A3%B9%ED%99%94%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | 필터링, 정렬, 그룹화 | LIKE, BETWEEN, IN, ORDER BY, GROUP BY, HAVING |
| [04 함수 서브쿼리 여러테이블 연습문제.md](04%20%ED%95%A8%EC%88%98%20%EC%84%9C%EB%B8%8C%EC%BF%BC%EB%A6%AC%20%EC%97%AC%EB%9F%AC%ED%85%8C%EC%9D%B4%EB%B8%94%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | SQL 함수, 서브쿼리, 여러 테이블 | SUM/AVG/ROUND/LENGTH, 서브쿼리 3위치, 암시적 조인 |
| [05 Python SQL 연습문제.md](05%20Python%20SQL%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | Python에서 SQL 사용하기 | DB-API, cursor, fetchall, Pandas read_sql, to_sql, SQL Magic |
| [06 고급 SQL 연습문제.md](06%20%EA%B3%A0%EA%B8%89%20SQL%20%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C.md) | 고급 SQL: View, Transaction, Join | CREATE VIEW, COMMIT/ROLLBACK, INNER/LEFT JOIN, NULL 처리 |

## 데이터 파일 목록

| 파일 | 포함된 테이블 | 사용 강의 |
|------|-------------|---------|
| **data/01_crud_data.sql** | EMPLOYEE, INSTRUCTOR, MEDALS | 01강 |
| **data/02_ddl_data.sql** | AUTHOR, BOOK | 02강, 03강 |
| **data/03_filtering_data.sql** | AUTHOR, BOOK (독립 실행용) | 03강 |
| **data/04_functions_data.sql** | PETRESCUE, SALES, DEPARTMENTS, EMPLOYEES | 04강 |
| **data/05_python_data.sql** | MENU | 05강 참고용 |
| **data/06_advanced_data.sql** | JOBS, BORROWER, LOAN | 06강 |
| **data/all_setup.sql** | **전체 테이블** | 모든 강의 |

## 시작하는 방법

### SQLite (권장: DB Browser for SQLite 또는 명령줄)

```bash
# 명령줄에서 SQLite 실행
sqlite3 practice.db < data/all_setup.sql

# 또는 특정 강의만
sqlite3 practice.db < data/01_crud_data.sql
```

### DB Browser for SQLite (GUI)
1. `New Database` → `practice.db` 생성
2. `Execute SQL` 탭에서 `data/all_setup.sql` 내용 붙여넣기 후 실행
3. 연습문제 파일의 쿼리를 하나씩 실행

### Python (Jupyter Notebook)

```python
import sqlite3
import pandas as pd

# DB 연결
con = sqlite3.connect("practice.db")

# 셋업 스크립트 실행
with open("../data/all_setup.sql", "r") as f:
    sql = f.read()
    
cur = con.cursor()
for statement in sql.split(";"):
    if statement.strip():
        cur.execute(statement)
        
con.commit()
print("셋업 완료")
```

## 연습 팁

1. **먼저 혼자 풀어보세요.** 풀이를 보기 전에 직접 작성해봐야 실력이 늡니다.
2. **결과를 항상 SELECT로 확인하세요.** INSERT/UPDATE/DELETE 후에는 반드시 SELECT로 검증합니다.
3. **UPDATE/DELETE는 WHERE 먼저.** 실행 전 같은 WHERE 조건으로 SELECT를 먼저 실행하는 습관을 들이세요.
4. **오류 메시지를 읽으세요.** SQL 오류 메시지는 대부분 문제를 정확히 설명합니다.
5. **DBMS 문법 차이에 주의하세요.** SQLite, MySQL, Db2 문법이 일부 다릅니다. 연습문제에 해당 사항이 명시되어 있습니다.
