# Module 4 Graded Quiz

## Q1. Jupyter Notebook SQL 확장에서 SQLite 데이터베이스 `EMP.db`에 연결하는 올바른 구문은?

**정답: `%sql sqlite:///EMP.db`**

SQLite 연결 URL 형식: `sqlite:///파일명.db` (슬래시 3개)

| 선택지 | 설명 |
|--------|------|
| **`%sql sqlite:///EMP.db`** | 올바른 SQLite 연결 구문 |
| `%sql` + 줄바꿈 + `sqlite:///EMP.db` | `%sql`은 line magic — 같은 줄에 URL이 있어야 함 |
| `%sql sqlite:/EMP.db` | 슬래시가 1개 — 잘못된 URL 형식 |
| `%sql sqlite3://EMP.db` | `sqlite3://`는 유효하지 않은 스키마, 슬래시도 부족 |

---

## Q2. Jupyter Notebook에서 Cell magic의 용도로 맞는 것 2가지는?

**정답:**
- **Python 외의 다른 프로그래밍 언어로 셀 코딩**
- **셀 전체 블록의 실행 시간 측정**

| 선택지 | 정답 여부 | 설명 |
|--------|-----------|------|
| Python 외의 언어로 코딩 (`%%bash`, `%%html` 등) | ✅ | Cell magic의 대표적인 사용법 |
| Notebook의 기본 언어를 다른 언어로 전환 | ❌ | 영구 전환은 Cell magic의 기능이 아님 |
| 셀 전체 블록 실행 시간 측정 (`%%time`, `%%timeit`) | ✅ | Cell magic으로 셀 전체 시간 측정 가능 |
| SQL 데이터베이스를 Notebook에 로드 | ❌ | `%sql` line magic 또는 Python 코드로 수행 |

---

## Q3. 아래 코드의 실행 결과는?

```python
import sqlite3
import pandas as pd

conn = sqlite3.connect('HR.db')
data = pd.read_csv('./employees.csv')
data.to_sql('Employees', conn)
```

**정답: CSV 파일을 읽어 HR 데이터베이스의 `Employees` SQL 테이블로 변환**

| 단계 | 설명 |
|------|------|
| `sqlite3.connect('HR.db')` | `HR.db` 파일이 없으면 새로 생성하고 연결 |
| `pd.read_csv(...)` | CSV 파일을 Pandas 데이터프레임으로 읽기 |
| `data.to_sql('Employees', conn)` | 데이터프레임을 `Employees` 테이블로 저장 |

| 오답 | 이유 |
|------|------|
| CSV 파일을 SQL 파일로 변환 | 생성되는 건 파일이 아닌 DB 내의 테이블 |
| 문법 오류 발생 | 유효한 코드이므로 오류 없음 |
| CSV 파일을 HR.db에 그대로 저장 | 테이블 형태로 저장되므로 단순 파일 복사가 아님 |

---

## Q4. Python에서 데이터베이스 테이블을 조회하는 올바른 방법 2가지는?

**정답:**
- **`out = pandas.read_sql(query_statement, connection_object)`**
- **`cursor = connection.execute(query_statement)` + `out = cursor.fetchall()`**

```python
# 방법 1: pandas.read_sql() — 결과를 데이터프레임으로 반환
out = pandas.read_sql(query_statement, connection_object)

# 방법 2: cursor를 사용한 직접 조회
cursor = connection.execute(query_statement)
out = cursor.fetchall()
```

| 선택지 | 정답 여부 | 설명 |
|--------|-----------|------|
| `pandas.read_sql(query, conn)` | ✅ | Pandas 표준 DB 조회 방법 |
| `dataframe.read_sql(query, conn)` | ❌ | `read_sql`은 `pandas`의 메서드, 데이터프레임 인스턴스의 메서드가 아님 |
| `cursor = connection.execute(query)` + `cursor.fetchall()` | ✅ | DB-API 표준 방식 |
| `out = connection.execute(query)` | ❌ | `execute()`의 반환값을 직접 결과로 쓸 수 없음, `fetchall()` 필요 |

---

## Q5. Pandas 데이터프레임 `df`의 통계 분석을 수행하는 메서드는?

**정답: `df.describe()`**

| 메서드 | 설명 |
|--------|------|
| **`df.describe()`** | count, mean, std, min, max, 사분위수 등 요약 통계 반환 |
| `df.head()` | 처음 5행 반환 |
| `df.tail()` | 마지막 5행 반환 |
| `df.info()` | 컬럼명, 데이터 타입, Non-null 개수 등 구조 정보 반환 |
