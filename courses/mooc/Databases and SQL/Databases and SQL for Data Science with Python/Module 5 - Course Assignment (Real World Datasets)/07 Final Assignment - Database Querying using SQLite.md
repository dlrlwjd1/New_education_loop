# Final Assignment - Database Querying using SQLite

> MOOC 실습 랩(Ungraded App Item, 30분) · [원본 랩](https://www.mooc.org/learn/sql-data-science/ungradedLti/jdwQR/final-assignment-database-querying-using-sqlite)

## 개요

이 노트북(Notebook for Graded Assessment)으로 다음을 수행합니다.

1. 세 개의 Chicago 데이터셋을 이해한다.
2. 세 데이터셋을 SQLite 데이터베이스의 세 테이블로 적재한다.
3. SQL 쿼리를 실행해 과제 문제에 답한다.

> **중요**: 이 랩 다음에 채점 과제(graded assignment)가 이어지며, 아래 각 문제마다 질문이 하나씩 출제됩니다. 출제 내용은 여러분이 얻은 **답** 또는 그 문제를 풀기 위해 작성한 **코드**에서 나올 수 있습니다. 따라서 **작성한 코드와 결과를 모두 기록해 두어야 합니다.**

## 내용

### 데이터셋 이해 — City of Chicago Data Portal

과제에는 시카고시 데이터 포털의 세 데이터셋을 사용합니다.

#### 1. Socioeconomic Indicators in Chicago
2008–2012년 시카고 커뮤니티 지역(community area)별로 공중보건상 의미가 있는 **6개의 사회경제 지표**와 **hardship index**를 담고 있습니다.

- 원본: <https://data.cityofchicago.org/Health-Human-Services/Census-Data-Selected-socioeconomic-indicators-in-C/kn9c-c2s2>

#### 2. Chicago Public Schools
2011-2012 학년도 CPS School Report Card 작성에 사용된 학교별 성과 데이터입니다.

#### 3. Chicago Crime Data
2001년부터 현재까지(최근 7일 제외) 시카고시에서 보고된 범죄 사건 기록입니다. 단, 살인(murder)은 피해자별로 데이터가 존재합니다.

### 데이터셋 다운로드

세 테이블은 전체 데이터셋의 **부분집합(subset)** 으로 채워집니다. 아래 링크를 pandas로 읽어 사용합니다.

| 데이터셋 | CSV 링크 |
|---|---|
| Chicago Census Data | `https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/data/ChicagoCensusData.csv` |
| Chicago Public Schools | `https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/data/ChicagoPublicSchools.csv` |
| Chicago Crime Data | `https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/data/ChicagoCrimeData.csv` |

### 필요한 라이브러리 설치

```python
!pip install pandas
!pip install ipython-sql prettytable

import prettytable

prettytable.DEFAULT = 'DEFAULT'
```

### 데이터셋을 데이터베이스 테이블에 저장

SQL로 분석하려면 먼저 SQLite DB에 적재해야 합니다. 다음 세 테이블을 만듭니다.

1. **CENSUS_DATA**
2. **CHICAGO_PUBLIC_SCHOOLS**
3. **CHICAGO_CRIME_DATA**

`pandas`와 `sqlite3`를 로드하고 `FinalDB.db`에 연결한 뒤, SQL magic 모듈을 로드하고, 위 링크의 데이터를 데이터프레임으로 읽어 테이블로 적재합니다. 마지막으로 SQL magic 모듈과 `FinalDB.db`를 연결합니다.

```python
import pandas as pd
import sqlite3

con = sqlite3.connect("FinalDB.db")
cur = con.cursor()

%load_ext sql

base = ("https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/"
        "IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork/labs/FinalModule_MOOC_V5/data/")

pd.read_csv(base + "ChicagoCensusData.csv").to_sql(
    "CENSUS_DATA", con, if_exists='replace', index=False, method="multi")
pd.read_csv(base + "ChicagoPublicSchools.csv").to_sql(
    "CHICAGO_PUBLIC_SCHOOLS", con, if_exists='replace', index=False, method="multi")
pd.read_csv(base + "ChicagoCrimeData.csv").to_sql(
    "CHICAGO_CRIME_DATA", con, if_exists='replace', index=False, method="multi")

%sql sqlite:///FinalDB.db
```

---

## 문제

노트북에는 아래 10개 문제가 제시되며, **해답은 제공되지 않습니다** (채점 과제로 이어지는 문제이므로 직접 작성해야 합니다). Problem 8에만 힌트가 하나 있습니다.

| # | 문제 |
|---|---|
| 1 | CRIME 테이블에 기록된 총 범죄 건수를 구하시오. |
| 2 | 1인당 소득(per capita income)이 11000 미만인 community area의 이름과 번호를 나열하시오. |
| 3 | 미성년자(minor)가 연루된 범죄의 모든 case number를 나열하시오. (범죄 분석 목적상 children은 minor로 보지 않는다) |
| 4 | 아동(child)이 연루된 모든 유괴(kidnapping) 범죄를 나열하시오. |
| 5 | 학교에서 기록된 범죄 종류를 나열하시오. (중복 없이) |
| 6 | 학교 유형별로 유형과 평균 safety score를 나열하시오. |
| 7 | 빈곤선 이하 가구 비율(%)이 가장 높은 5개 community area를 나열하시오. |
| 8 | 범죄가 가장 많이 발생한 community area는? community area 번호만 표시하시오. |
| 9 | 서브쿼리를 사용해 hardship index가 가장 높은 community area의 이름을 구하시오. |
| 10 | 서브쿼리를 사용해 범죄 건수가 가장 많은 Community Area Name을 구하시오. |

> **Problem 8 힌트**: 사건 수가 가장 많은 'community area number'를 쿼리한다.

### 문제 풀이 시 유의할 점

- 컬럼명에 공백·특수문자·대소문자 혼용이 있으면 큰따옴표로 감싼다 (`03` 랩의 교훈).
- Problem 3·4는 `AGE` 또는 `DESCRIPTION` 컬럼에서 문자열 패턴(`LIKE`)으로 걸러야 한다.
- Problem 5·6은 `DISTINCT` / `GROUP BY`와 집계 함수를 사용한다.
- Problem 9·10은 문제에서 **명시적으로 서브쿼리(sub-query)를 요구**한다.

## 요약

- Chicago Census · Public Schools · Crime 세 데이터셋을 `FinalDB.db`의 세 테이블(`CENSUS_DATA`, `CHICAGO_PUBLIC_SCHOOLS`, `CHICAGO_CRIME_DATA`)로 적재한다.
- 10개 문제를 SQL로 풀며, 이 랩 자체는 미채점(ungraded)이다.
- 이어지는 채점 과제가 이 10개 문제의 **답과 코드**에서 출제되므로 풀이 과정을 반드시 기록해 둔다.
- 문제 9·10은 서브쿼리 사용이 요구 조건이다.

> 작성자: Hima Vasudevan, Rav Ahuja, Ramesh Sannreddy · 기여자: Malika Singla, Abhishek Gagneja · © IBM Corporation 2023
