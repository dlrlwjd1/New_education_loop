# Working with Real World Datasets

## 학습 목표

- 데이터베이스에서 데이터가 저장되는 형식 이해
- 실제 데이터셋을 데이터베이스에 불러오는 방법 설명

---

## CSV 파일이란?

실제 세계의 데이터셋은 대부분 **CSV(Comma-Separated Values)** 파일 형식으로 제공됩니다.

- 데이터 값이 쉼표(`,`)로 구분된 텍스트 파일
- 경우에 따라 세미콜론(`;`) 등 다른 구분자 사용 가능

### 예시: DOGS.csv

| ID | Name of Dog | Breed |
|----|-------------|-------|
| 1 | Wolfie | German Shepherd |
| 2 | Fluffy | Pomeranian |
| 3 | Huggy | Labrador |

- **첫 번째 행(헤더 행)**: 속성(컬럼) 이름 포함
- 이후 행: 실제 데이터 값

---

## 데이터베이스에 CSV 파일 불러오기

**phpMyAdmin** 도구를 사용해 CSV를 데이터베이스에 import할 수 있습니다.

### 절차

1. import할 CSV 파일 선택
2. Format 섹션에서 **CSV** 선택
3. "Format Specific Options" 섹션에서 **첫 줄이 컬럼명임** 체크박스 선택
4. **Go** 버튼 클릭

MySQL이 헤더 이름을 컬럼명으로 자동 인식하고 `CREATE` 및 `INSERT` 구문을 생성합니다.  
테이블 이름은 기본적으로 **파일 이름(소문자)** 으로 설정됩니다.

---

## 특수문자/공백이 포함된 컬럼명 쿼리

컬럼명에 공백이나 특수문자가 포함된 경우, **백틱(`` ` ``)** 으로 감싸서 사용합니다.

```sql
-- 올바른 방법: 백틱 사용
SELECT `Name of Dog`, `Dominant Breed` FROM dogs;

-- 잘못된 방법: 단따옴표/쌍따옴표는 컬럼명에 사용 불가
SELECT 'Name of Dog' FROM dogs;  -- ❌
```

---

## 긴 쿼리를 여러 줄로 나누기

JOIN 쿼리나 중첩 쿼리처럼 쿼리가 길어질 경우 가독성을 위해 여러 줄로 나눌 수 있습니다.

### Line magic 사용 시 — 백슬래시로 줄 이음

```python
# Python 노트북에서 line magic 사용 시 백슬래시 필요
%sql SELECT * FROM dogs \
     WHERE Breed = 'Labrador'
```

백슬래시 없이 줄을 나누면 오류가 발생합니다.

### Cell magic 사용 시 — 백슬래시 불필요

```sql
%%sql
SELECT *
FROM dogs
WHERE Breed = 'Labrador'
```

`%%sql` (cell magic)은 셀 전체를 SQL로 해석하므로 백슬래시가 필요 없습니다.

---

## Python에서 쿼리 작성 시 따옴표 처리

`pandas.read_sql()`을 사용할 때 쿼리를 변수에 저장하면 관리가 편리합니다.

### 쌍따옴표 컬럼명 + 단따옴표 Python 변수

```python
# 컬럼명에 공백이 있는 경우: 바깥은 단따옴표, 컬럼명은 쌍따옴표
query_statement = 'SELECT "Name of Dog" FROM dogs'
df = pd.read_sql(query_statement, conn)
```

### WHERE 절에 단따옴표 값이 필요한 경우 — 이스케이프 처리

```python
# 백슬래시로 단따옴표 이스케이프
query_statement = 'SELECT * FROM dogs WHERE Breed = \'Labrador\''
df = pd.read_sql(query_statement, conn)
```

---

## 조회 결과 행 수 제한: LIMIT 절

테이블에 수천~수백만 행이 있을 때 전체를 불러오면 시간이 오래 걸립니다.

```python
# 비효율적인 방법: 전체를 가져온 후 head()로 제한
df = pd.read_sql("SELECT * FROM census_data", conn)
df.head()  # 느릴 수 있음

# 효율적인 방법: LIMIT 절로 DB에서 미리 제한
df = pd.read_sql("SELECT * FROM census_data LIMIT 3", conn)
```

`LIMIT` 절을 사용하면 쿼리 자체에서 결과 수를 제한해 성능이 향상됩니다.

---

## 핵심 요약

| 주제 | 핵심 내용 |
|------|-----------|
| CSV 형식 | 쉼표로 구분된 텍스트 파일, 첫 행은 헤더 |
| DB 적재 | phpMyAdmin으로 import, 헤더 체크박스 선택 |
| 특수 컬럼명 | 백틱(`` ` ``)으로 감쌀 것, 따옴표 사용 금지 |
| 긴 쿼리 | Line magic: 백슬래시 필요 / Cell magic: 불필요 |
| 따옴표 혼용 | 바깥 단따옴표 + 컬럼명 쌍따옴표 / 값에 단따옴표 필요 시 `\'` |
| 결과 제한 | `LIMIT` 절 사용으로 불필요한 전체 데이터 조회 방지 |
