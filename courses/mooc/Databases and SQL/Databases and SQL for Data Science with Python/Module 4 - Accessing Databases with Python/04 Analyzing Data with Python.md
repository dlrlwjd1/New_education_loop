# Analyzing Data with Python

## 학습 목표

- Pandas를 사용한 탐색적 데이터 분석(EDA) 수행
- SQLite3와 Python을 활용한 데이터 저장 및 조회
- Seaborn을 사용한 데이터 시각화로 패턴과 인사이트 도출

---

## 실습 데이터셋: 맥도날드 메뉴 영양 정보

이번 실습에서는 **맥도날드 메뉴 영양 정보 데이터셋** (Kaggle 출처)을 사용합니다.

- 총 **260개** 메뉴 아이템
- **9개** 카테고리
- 총 지방, 나트륨, 단백질, 당류 등 다양한 영양소 포함

---

## SQLite3로 데이터베이스 구축

**SQLite3**는 Python 내장 라이브러리로, 별도 서버 없이 사용할 수 있는 경량 SQL 데이터베이스 엔진입니다.

### 특징

| 특징 | 설명 |
|------|------|
| 서버리스(Serverless) | 별도 서버 설치 불필요 |
| 자체 포함(Self-contained) | 단일 파일로 데이터베이스 관리 |
| 무설정(Zero-configuration) | 별도 설정 없이 바로 사용 가능 |
| 트랜잭션 지원 | ACID 트랜잭션 SQL 엔진 |

### CSV 파일을 SQLite3 데이터베이스로 불러오는 코드

```python
import pandas as pd
import sqlite3

# 1. CSV 파일 읽기
data = pd.read_csv("mcdonalds_menu.csv")

# 2. SQLite3 데이터베이스 연결 (없으면 새로 생성)
conn = sqlite3.connect("mcdonalds.db")

# 3. 데이터프레임을 SQL 테이블로 저장
data.to_sql("mcdonalds_nutrition", conn, if_exists="replace", index=False)
```

---

## Pandas로 데이터 조회

```python
# SQL 쿼리로 테이블 전체 불러오기
df = pd.read_sql("SELECT * FROM mcdonalds_nutrition", conn)

# 처음 5행 확인
df.head()
```

`read_sql()` 메서드에 **SQL 쿼리**와 **연결 객체(conn)** 를 인자로 전달합니다.

---

## 탐색적 데이터 분석 (EDA)

### describe() — 요약 통계

```python
df.describe()
```

`describe()` 메서드는 데이터프레임의 수치형 컬럼에 대한 요약 통계를 반환합니다.

| 통계량 | 설명 |
|--------|------|
| count | 관측값 수 |
| mean | 평균 |
| std | 표준편차 |
| min / max | 최솟값 / 최댓값 |
| 25% / 50% / 75% | 사분위수 (중앙값 포함) |

예시 결과: 총 지방(Total Fat)의 최댓값은 **118**

---

## 사례 분석: 나트륨(Sodium) 최댓값 찾기

### 나트륨에 대한 배경 지식

- 미국인은 하루 평균 5티스푼 이상의 소금을 섭취 (신체 필요량의 약 20배)
- 나트륨은 혈압과 체내 수분 균형을 조절
- 나트륨 과잉 섭취 시 혈압 상승, 부종 등의 건강 문제 유발 가능
- 일반적인 나트륨 섭취 목표: **하루 2,000mg 미만**

### 나트륨 시각화 — Swarm Plot

```python
import seaborn as sns

sns.swarmplot(x="Category", y="Sodium", data=df)
```

- X축: 메뉴 카테고리
- Y축: 나트륨 함량
- 결과: 나트륨 값 약 **3,600**인 이상치 발견

### 나트륨 최댓값 아이템 찾기

```python
# Code 1: 나트륨 요약 통계 확인
df["Sodium"].describe()
# → 최댓값: 3,600

# Code 2: 나트륨이 최대인 행의 인덱스 확인
idx = df["Sodium"].idxmax()
# → 출력: 82

# Code 3: 82번 행의 아이템 이름 확인
item_name = df.at[idx, "Item"]
# → 출력: Chicken McNuggets (40 pieces)
```

**결론: 나트륨 함량이 가장 높은 메뉴 아이템은 치킨 맥너겟 40조각**

---

## 데이터 시각화

### Scatter Plot — 단백질 vs 총 지방

```python
sns.jointplot(x="Protein", y="Total Fat", data=df)
```

- X축: 단백질(Protein), Y축: 총 지방(Total Fat)
- 산점도 외에 각 변수의 히스토그램도 함께 표시

#### 결과 해석

| 지표 | 값 | 의미 |
|------|----|------|
| 피어슨 상관계수(r) | 0.81 | 강한 양의 상관관계 |
| 유의확률(p) | 매우 작음 | 통계적으로 유의미한 상관관계 |

→ 단백질 함량이 높을수록 총 지방 함량도 높아지는 경향이 있음  
→ 산점도에서 전체 패턴을 벗어난 점은 **가능한 이상치(Outlier)**

---

### Box Plot — 당류(Sugar) 분포

```python
sns.boxplot(x=df["Sugars"])
```

박스플롯의 구성 요소:

| 요소 | 설명 |
|------|------|
| 박스(Box) | 중간 50% 데이터 범위 (IQR) |
| 중앙선 | 중앙값(Median) |
| 수염(Whiskers) | 정상 범위 내 최솟값 / 최댓값 |
| 점(Points) | 이상치(Outlier) |

#### 결과 해석

- 당류 평균값: 약 **30g**
- 이상치 존재: 당류 약 **128g**에 달하는 메뉴 아이템 (캔디류 등)

---

## 핵심 요약

- `pd.read_csv()` — CSV 파일을 데이터프레임으로 읽기
- `sqlite3.connect()` — SQLite3 데이터베이스 연결
- `df.to_sql()` — 데이터프레임을 SQL 테이블로 저장
- `pd.read_sql()` — SQL 쿼리로 데이터프레임 불러오기
- `df.describe()` — 요약 통계 확인
- `df["col"].idxmax()` — 최댓값의 인덱스 반환
- `df.at[idx, "col"]` — 특정 행·열의 값 반환
- `sns.swarmplot()` — 범주형 산점도 생성
- `sns.jointplot()` — 두 변수 간 산점도 + 히스토그램 생성
- `sns.boxplot()` — 박스플롯으로 분포 시각화
