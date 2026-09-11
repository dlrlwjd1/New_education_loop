# (Optional) Hands-on Lab - Practice Querying Real World Datasets

> MOOC 선택 실습 랩(Ungraded App Item, 45분) · [원본 랩](https://www.mooc.org/learn/sql-data-science/ungradedLti/99m1e/optional-hands-on-lab-practice-querying-real-world-datasets)

## 개요

`03 Hands-on Lab - Working with a real world data-set`과 **같은 Chicago Public Schools 데이터셋과 같은 12개 문제**를 다루는 **IBM Db2 버전** 랩입니다. 선택 실습이며, 이 랩을 마치면 다음을 할 수 있습니다.

- Chicago Public School 학교별 성과 데이터셋을 이해한다.
- 데이터셋을 **IBM Cloud의 Db2 데이터베이스**에 저장한다.
- 테이블과 컬럼의 메타데이터를 조회하고, 대소문자가 섞인 컬럼명을 쿼리한다.
- 내장 데이터베이스 함수를 사용해 예제 문제를 푼다.

## 내용

### SQLite 버전과 달라지는 부분

이 랩은 문제 자체는 SQLite 버전과 동일하고, **데이터 적재 방식**과 **시스템 카탈로그 조회**만 Db2 방식으로 달라집니다.

#### 1. 데이터셋을 테이블에 저장

pandas 데이터프레임으로 읽어 `PERSIST` 하는 방식이 더 쉽지만, 이 방식은 기본 데이터 타입으로 매핑되어 SQL 쿼리에 최적이 아닐 수 있습니다. 예를 들어 긴 텍스트 필드가 `VARCHAR`가 아니라 `CLOB`으로 매핑됩니다.

따라서 **데이터베이스 콘솔의 LOAD 도구로 직접 테이블을 적재하는 것이 강력히 권장**됩니다 (Week 2 Lab 1 Part II와 같은 방식). Db2 콘솔을 열고 LOAD 도구를 실행한 뒤, CHICAGO PUBLIC SCHOOLS 데이터셋의 `.CSV` 파일을 선택하거나 끌어다 놓습니다.

#### 2. 테이블 메타데이터 조회 — `SYSCAT.TABLES`

```sql
%sql select TABSCHEMA, TABNAME, CREATE_TIME from SYSCAT.TABLES where TABSCHEMA='YOUR-DB2-USERNAME'
```

또는 시스템이 만든 스키마를 제외하고 전체 테이블을 조회합니다.

```sql
%sql select TABSCHEMA, TABNAME, CREATE_TIME from SYSCAT.TABLES \
     where TABSCHEMA not in ('SYSIBM', 'SYSCAT', 'SYSSTAT', 'SYSIBMADM', 'SYSTOOLS', 'SYSPUBLIC')
```

또는 확인하려는 특정 테이블만 조회합니다.

```sql
%sql select * from SYSCAT.TABLES where TABNAME = 'SCHOOLS'
```

#### 3. 컬럼 개수 조회 — `SYSCAT.COLUMNS`

```sql
%sql select count(*) from SYSCAT.COLUMNS where TABNAME = 'SCHOOLS'
```

#### 4. 컬럼명·타입·길이 조회

```sql
%sql select COLNAME, TYPENAME, LENGTH from SYSCAT.COLUMNS where TABNAME = 'SCHOOLS'
```

또는

```sql
%sql select distinct(NAME), COLTYPE, LENGTH from SYSIBM.SYSCOLUMNS where TBNAME = 'SCHOOLS'
```

#### 5. 문제 풀이 시 테이블명

Db2 버전에서는 테이블명이 `SCHOOLS`입니다. 예를 들어 Problem 1의 해답은 다음과 같습니다.

```sql
%sql select count(*) from SCHOOLS where "Elementary, Middle, or High School" = 'ES'
```

**정답: 462** (SQLite 버전과 동일)

### 12개 문제 목록

문제는 SQLite 버전과 같습니다. 상세 해답은 `03 Hands-on Lab - Working with a real world data-set`을 참고하고, 테이블명과 카탈로그 조회만 위 Db2 방식으로 바꾸면 됩니다.

| # | 문제 |
|---|---|
| 1 | 데이터셋에 초등학교(Elementary School)는 몇 개인가? |
| 2 | 가장 높은 Safety Score는? |
| 3 | Safety Score가 가장 높은 학교는? |
| 4 | "Average Student Attendance"가 가장 높은 상위 10개 학교는? |
| 5 | Average Student Attendance가 가장 낮은 5개 학교를 오름차순으로 |
| 6 | 위 결과의 Average Student Attendance에서 `%` 기호 제거 |
| 7 | Average Student Attendance가 70% 미만인 학교는? |
| 8 | Community Area별 총 College Enrollment |
| 9 | 총 College Enrollment가 가장 적은 5개 Community Area (오름차순) |
| 10 | Safety Score가 가장 낮은 5개 학교 |
| 11 | College Enrollment가 4368인 Community Area의 hardship index |
| 12 | 학교 등록 인원이 가장 많은 Community Area의 hardship index |

## 요약

- SQLite 버전 랩과 **같은 데이터셋·같은 12개 문제**를 IBM Db2로 푸는 선택 실습이다.
- 적재는 pandas `PERSIST` 대신 **Db2 콘솔 LOAD 도구**를 권장한다 (타입 매핑 품질 때문).
- 메타데이터는 `SYSCAT.TABLES` / `SYSCAT.COLUMNS` (또는 `SYSIBM.SYSCOLUMNS`)로 조회한다.
- 테이블명은 `SCHOOLS`이며, 나머지 쿼리 로직은 SQLite 버전과 같다.

> 작성자: Rav Ahuja · © IBM Corporation 2020
