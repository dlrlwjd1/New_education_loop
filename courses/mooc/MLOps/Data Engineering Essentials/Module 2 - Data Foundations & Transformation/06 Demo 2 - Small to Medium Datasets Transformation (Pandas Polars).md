# Demo 2: Small to Medium Datasets Transformation (Pandas, Polars)

## 개요
- Demo 1에 이어, 중앙값으로 나이·급여 결측치를 실제로 채우고, `department`는 "unknown"으로 채운 뒤, JSON 형태인 `profile` 컬럼을 `address`/`phone`/`email` 개별 컬럼으로 펼치는(flatten) 실습을 다루는 6분 데모.

## 내용

### 나이·급여 결측치를 중앙값으로 채우기
- 나이의 중앙값(48)과 급여의 중앙값(60,000)을 계산해 출력.
- `df['age'].fillna(age_median)`, `df['salary'].fillna(salary_median)`으로 결측치를 채움 → 이후 `isnull().sum()`으로 재확인하면 나이·급여 결측치가 모두 사라짐.

### department 결측치 처리 — "unknown"으로 채우기
- 부서(department)는 중앙값 개념이 없으므로 다른 방식 필요 — 결측값을 **"unknown"**이라는 값으로 채워, 더 명확하게 표시.
- 채운 뒤 다시 결측치 개수를 확인하면 department도 0건으로 확인.

### JSON 형태의 profile 컬럼 펼치기(Flatten)
- `profile` 컬럼은 주소, 전화번호, 이메일을 담은 **구조체(struct)/객체(object)** 형태 — 이대로는 개별 필드를 쿼리할 수 없음.
- 해결책: `address`, `phone`, `email`을 각각 별도 컬럼으로 분리.
- 단계:
  1. `import json` 추가(처음에 빠뜨려서 `NameError` 발생 → 디버깅 후 추가).
  2. `df['profile'].apply(lambda x: json.loads(x))`로 JSON 문자열을 딕셔너리로 변환.
  3. `df['address'] = df['profile'].apply(lambda x: x.get('address'))` — 동일한 방식으로 `phone`, `email`도 추출해 각각 새 컬럼 생성.
- 새로 생긴 3개 컬럼(`address`, `phone`, `email`)을 확인한 뒤, 더 이상 필요 없는 원본 `profile` 컬럼은 `df.drop(columns='profile', inplace=True)`로 제거.

### 정제된 데이터 저장
- `df.to_csv("cleaned_data.csv")`로 정제된 데이터를 저장.
- 최종 컬럼: `id, name, age, salary, hire_date, department, bonus, address, phone, email` — `profile`은 완전히 제거되고 개별 필드로 대체됨.
- `hire_date`의 결측치는 이번에는 다루지 않음 — 나이·급여처럼 임의의 값을 채우기 어려운 이유는, 잘못 채워진 입사일이 보너스나 성과 평가에 영향을 줄 수 있어 더 신중해야 하기 때문.

### 다음 단계 예고
- 지금까지 데이터 탐색 → 정제(결측치 처리) → 변환(JSON 펼치기)을 수행했으며, 이 데이터에 대해 수행할 수 있는 추가적인 변환이 더 있음 — 다음 데모에서 계속 탐구 예정.

## 예시
```python
import json

# 중앙값으로 결측치 채우기
age_median = df['age'].median()
salary_median = df['salary'].median()
df['age'] = df['age'].fillna(age_median)
df['salary'] = df['salary'].fillna(salary_median)

# department 결측치는 "unknown"으로 채우기
df['department'] = df['department'].fillna('unknown')

# JSON 문자열을 딕셔너리로 변환 후 개별 컬럼으로 추출
df['profile'] = df['profile'].apply(lambda x: json.loads(x))
df['address'] = df['profile'].apply(lambda x: x.get('address'))
df['phone'] = df['profile'].apply(lambda x: x.get('phone'))
df['email'] = df['profile'].apply(lambda x: x.get('email'))

# 원본 profile 컬럼 제거
df.drop(columns='profile', inplace=True)

# 정제된 데이터 저장
df.to_csv("cleaned_data.csv", index=False)
```

## 요약
- 이 데모는 결측치를 상황에 맞게 채우는 두 가지 전략(수치형은 중앙값, 범주형은 "unknown")과, JSON 구조체 컬럼을 개별 쿼리 가능한 컬럼으로 펼치는(flatten) 실전 Pandas 변환 기법을 보여준다.
