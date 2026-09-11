# Demo 1: Small to Medium Datasets Transformation (Pandas, Polars)

## 개요
- `mock_data.csv`를 Pandas로 불러와 데이터 품질(결측치, 데이터 타입, 고유값)을 탐색하고, 결측된 나이·급여를 중앙값(median)으로 채우는 데이터 정제 실습을 다루는 6분 데모.

## 내용

### 데이터 불러오기와 초기 확인
- Jupyter Notebook에서 `mock_data.csv` 파일 확인 → 이 데이터를 ML 모델에 바로 사용할 수 있는지는 **데이터 품질 검사**를 해봐야 알 수 있음.
- `import pandas as pd` → `pd.read_csv(filename)`으로 CSV를 **DataFrame**(메모리에 데이터를 저장하고 그 위에서 연산하는 방식)으로 읽음.
- `df.head()`로 몇 개 행을 출력 → 이미 여기서 `hire_date`, `profile`, `department` 컬럼에 값이 없는 경우가 눈에 띔. 이런 결측이 있으면 날짜순 정렬이나 부서별 그룹화 시 해당 행이 누락될 수 있음 — 수백만 행 규모에서는 상당한 데이터 손실로 이어질 수 있어 중요한 문제.

### 데이터 정보와 결측치 확인
- `df.info()`로 컬럼과 데이터 타입 확인: `id`(int), `name`(object), `salary`(float64), `profile`(object — JSON/struct 형태의 데이터) 등.
- `df.isnull().sum()`으로 컬럼별 결측치 개수 확인 — `id`, `name`은 결측 없음, `age`는 1,000건 결측, `salary`는 6,481건 결측.
- 이 상태로 ML 모델을 만들 수는 있지만 **정밀도(precision)가 떨어짐**.
- `df.describe(include=...)`로 통계 정보(고유값 개수, 최빈값, 평균, 중앙값 등) 확인 가능(다만 큰 실용성은 없다고 언급).
- `df['department'].unique()`로 고유 부서 확인 → `marketing`, `HR`, `nan`, `IT`, `finance` — `nan`도 하나의 부서 값으로 나타남. 이 결측 부서 데이터를 그냥 걸러내기 쉽지만, 사실 이 데이터도 가치가 있음.

### 데이터 탐색(Data Exploration)의 정의
- 데이터를 빠르게 이해하는 과정 — 데이터를 시각화하고, 데이터 타입을 확인하고, 결측치·중복을 확인하는 것.

### 결측치 채우기(중앙값 방식)
- 나이·급여·부서가 결측인 레코드를 출력해 확인.
- 급여 결측치를 **중앙값(median)**으로 채우는 방식 시연 — 부서별 급여의 중앙값, 전체 나이의 중앙값을 계산해 결측값에 채워 넣음.
- 이 방식이 완벽히 정확하지는 않을 수 있다는 점을 인정하면서도, 실무에서 흔히 쓰이는 여러 방법 중 하나로 소개.

## 예시
```python
import pandas as pd

df = pd.read_csv("mock_data.csv")
df.head()
df.info()

# 컬럼별 결측치 개수
df.isnull().sum()

# 통계 요약
df.describe(include='all')

# 고유 부서 확인
df['department'].unique()

# 결측된 나이/급여/부서 레코드 확인
df[df['age'].isnull() | df['salary'].isnull() | df['department'].isnull()]

# 급여 결측치를 부서별 중앙값으로 채우기 (개념 구조)
df['salary'] = df.groupby('department')['salary'].transform(lambda x: x.fillna(x.median()))
df['age'] = df['age'].fillna(df['age'].median())
```

## 요약
- 이 데모는 `read_csv` → `head()`/`info()`/`isnull().sum()`으로 데이터 품질을 탐색한 뒤, 결측된 나이·급여를 중앙값으로 채우는 실전 Pandas 데이터 정제 흐름을 보여준다.
