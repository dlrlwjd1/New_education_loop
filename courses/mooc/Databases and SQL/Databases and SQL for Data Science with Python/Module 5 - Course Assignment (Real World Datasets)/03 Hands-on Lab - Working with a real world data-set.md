# Hands-on Lab - Working with a real world data-set

> MOOC 실습 랩(Ungraded App Item, 30분) · [원본 랩](https://www.mooc.org/learn/sql-data-science/ungradedLti/45vvR/hands-on-lab-working-with-a-real-world-data-set)

## 개요

이 랩을 마치면 다음을 할 수 있습니다.

- Chicago Public School 학교별 성과 데이터셋을 이해한다.
- 데이터셋을 SQLite 데이터베이스에 저장한다.
- 테이블과 컬럼의 메타데이터를 조회하고, 대소문자가 섞인(mixed case) 컬럼명을 쿼리한다.
- 내장 데이터베이스 함수(built-in function)를 사용해 예제 문제를 푼다.

---

## 데이터셋 — Chicago Public Schools Progress Report Cards (2011-2012)

시카고시가 2011-2012 학년도 School Report Card 작성에 사용한 학교별 성과 데이터를 공개한 것입니다. 지표(metric)의 종류가 매우 많습니다.

- 원본 포털: <https://data.cityofchicago.org/Education/Chicago-Public-Schools-Progress-Report-Cards-2011-/9xs2-f89t>
- **주의**: City of Chicago 포털에서 직접 내려받지 말고, 데이터베이스에 넣기 좋게 정리된 **정적 사본(static copy)** 을 사용합니다.

---

## 데이터베이스 연결

`ipython-sql` 확장을 로드하고 데이터베이스에 연결합니다. SQLite에서 magic sql로 연결하는 구문은 다음과 같습니다.

```text
%sql sqlite:///DatabaseName
```

여기서 `DatabaseName`은 `.db` 파일입니다.

```python
import csv, sqlite3

con = sqlite3.connect("RealWorldData.db")
cur = con.cursor()
```

```python
!pip install pandas
!pip install ipython-sql prettytable

import prettytable
prettytable.DEFAULT = 'DEFAULT'
```

```python
!pip install ipython-sql
%load_ext sql
```

```python
%sql sqlite:///RealWorldData.db
```

---

## 데이터셋을 테이블에 저장

분석할 데이터셋이 인터넷상의 `.CSV` 파일로 제공되는 경우가 많습니다. SQL로 분석하려면 먼저 데이터베이스에 저장해야 합니다.

pandas 데이터프레임으로 CSV를 읽은 뒤 `df.to_sql()`로 SQLite 테이블로 변환합니다.

```python
import pandas

df = pandas.read_csv(
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/"
    "data/ChicagoPublicSchools.csv"
)
df.to_sql("CHICAGO_PUBLIC_SCHOOLS_DATA", con, if_exists='replace', index=False, method="multi")
```

---

## 시스템 카탈로그로 테이블 메타데이터 조회

테이블이 정상적으로 만들어졌는지 확인하려면 스키마의 전체 테이블 목록을 조회합니다.

> **힌트**: SQLite에서 시스템 카탈로그 테이블은 `sqlite_master`입니다.

```python
%sql SELECT name FROM sqlite_master WHERE type='table'
```

## 시스템 카탈로그로 컬럼 메타데이터 조회

`SCHOOLS` 테이블은 컬럼이 매우 많습니다. 컬럼 개수를 확인합니다.

```python
%sql SELECT count(name) FROM PRAGMA_TABLE_INFO('CHICAGO_PUBLIC_SCHOOLS_DATA');
```

컬럼명과 데이터 타입, 길이를 함께 조회합니다.

```python
%sql SELECT name, type, length(type) FROM PRAGMA_TABLE_INFO('CHICAGO_PUBLIC_SCHOOLS_DATA');
```

### 확인 질문

1. "SCHOOL ID" 속성의 컬럼명은 대문자인가, 대소문자가 섞여 있는가?
2. 테이블에서 "Community Area Name" 컬럼의 이름은 무엇인가? 공백이 포함되어 있는가?
3. 컬럼명의 공백과 괄호(round bracket)가 밑줄(`_`)로 치환된 컬럼이 있는가?

---

## 문제 풀이

### Problem 1 — 데이터셋에 초등학교(Elementary School)는 몇 개인가?

> **힌트 1**: 학교 유형(`'ES'`, `'MS'`, `'HS'`)을 지정하는 컬럼은 무엇인가?
> **힌트 2**: 컬럼명에 대소문자 혼용·공백·특수문자가 있다면 컬럼명을 큰따옴표로 감싼다.

```sql
%sql select count(*) from CHICAGO_PUBLIC_SCHOOLS_DATA
     where "Elementary, Middle, or High School" = 'ES'
```

**정답: 462**

---

### Problem 2 — 가장 높은 Safety Score는?

> **힌트**: `MAX()` 함수를 사용한다.

```sql
%sql select MAX(Safety_Score) AS MAX_SAFETY_SCORE from CHICAGO_PUBLIC_SCHOOLS_DATA
```

**정답: 99**

---

### Problem 3 — Safety Score가 가장 높은 학교는?

앞 문제에서 최고 점수가 99임을 알았으므로 `WHERE` 절에 그대로 넣을 수 있습니다.

```sql
%sql select Name_of_School, Safety_Score from CHICAGO_PUBLIC_SCHOOLS_DATA
     where Safety_Score = 99
```

더 나은 방법은 서브쿼리(subquery)를 쓰는 것입니다.

```sql
%sql select Name_of_School, Safety_Score from CHICAGO_PUBLIC_SCHOOLS_DATA \
     where Safety_Score = (select MAX(Safety_Score) from CHICAGO_PUBLIC_SCHOOLS_DATA)
```

**정답: Safety Score 99인 학교 여러 개**

---

### Problem 4 — "Average Student Attendance"가 가장 높은 상위 10개 학교는?

```sql
%sql select Name_of_School, Average_Student_Attendance from CHICAGO_PUBLIC_SCHOOLS_DATA \
     order by Average_Student_Attendance desc nulls last limit 10
```

---

### Problem 5 — Average Student Attendance가 가장 낮은 5개 학교를 오름차순으로

```sql
%sql SELECT Name_of_School, Average_Student_Attendance \
     from CHICAGO_PUBLIC_SCHOOLS_DATA \
     order by Average_Student_Attendance \
     LIMIT 5
```

---

### Problem 6 — 위 결과의 Average Student Attendance에서 `%` 기호 제거

> **힌트**: `REPLACE()` 함수로 `'%'`를 `''`로 바꾼다.

```sql
%sql SELECT Name_of_School, REPLACE(Average_Student_Attendance, '%', '') \
     from CHICAGO_PUBLIC_SCHOOLS_DATA \
     order by Average_Student_Attendance \
     LIMIT 5
```

---

### Problem 7 — Average Student Attendance가 70% 미만인 학교는?

> **힌트 1**: `Average_Student_Attendance` 컬럼의 데이터 타입은 `varchar`입니다. 그래서 `WHERE` 절에서 숫자 비교에 그대로 쓸 수 없습니다. 먼저 `CAST()` 함수로 `DECIMAL`이나 `DOUBLE`로 변환합니다. 예: `CAST("Column_Name" as DOUBLE)`
> **힌트 2**: 캐스팅 전에 `%` 기호를 먼저 제거해야 합니다.

```sql
%sql SELECT Name_of_School, Average_Student_Attendance \
     from CHICAGO_PUBLIC_SCHOOLS_DATA \
     where CAST(REPLACE(Average_Student_Attendance, '%', '') AS DOUBLE) < 70 \
     order by Average_Student_Attendance
```

---

### Problem 8 — Community Area별 총 College Enrollment

> **힌트 1**: 데이터베이스에서 Enrollment 컬럼의 정확한 이름을 확인하고, `SUM()` 함수로 Community Area별 합계를 낸다.
> **힌트 2**: Community Area로 `GROUP BY` 하는 것을 잊지 않는다.

```sql
%sql select Community_Area_Name, sum(College_Enrollment) AS TOTAL_ENROLLMENT \
     from CHICAGO_PUBLIC_SCHOOLS_DATA \
     group by Community_Area_Name
```

---

### Problem 9 — 총 College Enrollment가 가장 적은 5개 Community Area (오름차순)

> **힌트**: 앞 쿼리를 정렬하고 가져올 행 수를 제한한다.

```sql
%sql select Community_Area_Name, sum(College_Enrollment) AS TOTAL_ENROLLMENT \
     from CHICAGO_PUBLIC_SCHOOLS_DATA \
     group by Community_Area_Name \
     order by TOTAL_ENROLLMENT asc \
     LIMIT 5
```

---

### Problem 10 — Safety Score가 가장 낮은 5개 학교

```sql
%sql SELECT name_of_school, safety_score \
     FROM CHICAGO_PUBLIC_SCHOOLS_DATA where safety_score != 'None' \
     ORDER BY safety_score \
     LIMIT 5
```

---

### Problem 11 — College Enrollment가 4368인 학교가 속한 Community Area의 hardship index

> **주의**: 이 해답이 동작하려면 Module 3(Week 3) 마지막 랩에서 만든 `CENSUS_DATA` 테이블이 이미 존재해야 합니다. 없다면 먼저 아래 코드를 실행합니다.

```python
df = pandas.read_csv(
    "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
    "IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/"
    "data/ChicagoCensusData.csv"
)
df.to_sql("CENSUS_DATA", con, if_exists='replace', index=False, method="multi")
```

```sql
%%sql
select hardship_index
from CENSUS_DATA CD, CHICAGO_PUBLIC_SCHOOLS_DATA CPS
where CD.community_area_number = CPS.community_area_number
and college_enrollment = 4368
```

---

### Problem 12 — College Enrollment 값이 가장 큰 Community Area의 hardship index

```sql
%sql select community_area_number, community_area_name, hardship_index from CENSUS_DATA \
     where community_area_number in \
     ( select community_area_number from CHICAGO_PUBLIC_SCHOOLS_DATA order by college_enrollment desc limit 1 )
```

---

## 요약

이 랩에서는 SQL과 Python으로 실제 데이터셋을 다루는 방법을 배웠습니다.

- 컬럼명에 공백이나 특수문자가 있거나 대소문자가 섞인 경우의 쿼리 방법
- 내장 데이터베이스 함수(`MAX`, `REPLACE`, `CAST`, `SUM`) 사용
- 결과 집합의 정렬(`ORDER BY`), 제한(`LIMIT`), 그룹화(`GROUP BY`)
- 서브쿼리(sub-query)와 여러 테이블을 함께 사용하는 방법

> 작성자: Rav Ahuja · © IBM Corporation 2020
