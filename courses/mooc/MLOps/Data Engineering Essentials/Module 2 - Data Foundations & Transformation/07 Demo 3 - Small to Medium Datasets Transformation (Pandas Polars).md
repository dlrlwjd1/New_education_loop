# Demo 3: Small to Medium Datasets Transformation (Pandas, Polars)

## 개요
- 정제된 데이터에 새 피처(주소 길이, 급여 카테고리)를 추가하고, 부서별 집계 리포트를 만든 뒤, 이 데이터가 실제 ML 사용 사례(이직 예측)에 어떻게 활용될 수 있는지 설명하는 5분 데모(Demo 1·2에 이어지는 마지막 파트).

## 내용

### 정제된 데이터 다시 불러오기
- `df = pd.read_csv("cleaned_data.csv")`로 이전 데모에서 정제한 데이터를 새 DataFrame으로 로드.

### 새 피처 1 — 주소 길이(Address Length)
- 주소가 비어있지 않고 의미 있는 정보를 담고 있는지 확인하기 위해, 주소 문자열의 **길이(length)**를 새 컬럼으로 추가.
- `df['address_length'] = df['address'].apply(lambda x: len(x))`로 각 주소 값의 길이를 계산해 저장.

### 새 피처 2 — 급여 카테고리(Salary Category)
- 급여를 **low/medium/high** 카테고리로 구간화(binning) — 예: 1만 달러는 high, 7만 달러는 medium 등으로 정의(실제 구간 기준은 예시로 임의 정의).
- `pd.cut()` 함수로 구간(bin)과 레이블(label)을 정의해 `salary_category`라는 새 컬럼 생성.
- 이런 변환은 코드를 작성하는 방식이 여러 가지가 있으며, 여기서는 한 가지 방법을 보여줌.

### 부서별 집계 리포트
- 부서별로 그룹화해 각 부서의 평균 급여와 평균 나이를 계산.
- `df.groupby('department').agg({'salary': 'mean', 'age': 'mean'}).reset_index()` — `reset_index()`를 사용하는 이유는 그룹화된 데이터를 집계값 기준으로 재정렬하기 때문.
- 명확성을 위해 컬럼명을 리네이밍한 뒤 최종 데이터를 `transform_data.csv`로 저장.

### 집계 결과에서 발견한 문제
- 요약 리포트에서 **"unknown" 부서**의 평균 급여가 상당히 높고 평균 나이도 48세로 나타남 — 이는 추가 조사가 필요한 신호.
- 부서 태그가 없는 직원들을 그냥 무시할 수 없음 — 다시 조직 내부에서 이 문제를 제기하고, 각 직원이 실제로 어느 부서에 속하는지 파악한 뒤, 데이터를 다시 가져와 **탐색 → 정제 → 변환** 사이클을 반복해야 함.

### 이 피처들이 실제로 어떻게 활용되는가 — 이직 예측 사례
- `salary_category`를 활용한 예: 이 데이터를 ML 모델에 전달해 **급여 카테고리에 따른 이직(crunch/turnover)** 대상을 예측 — 저·중·고 급여대 중 어느 그룹이 조직을 더 빨리 떠나는 경향이 있는지 예측하는 모델.
- 예: 항공사 직원 산업에서 이런 모델을 실행하면, 이직 가능성이 높은 카테고리를 예측할 수 있고, 해당 카테고리가 영향을 받으면 항공사 운영(정시 출발 등)에 직접적 영향을 미쳐 막대한 손실로 이어질 수 있음 — 이런 예측이 매우 유용함.

### 확장성에 대한 통찰
- 실제 사용 사례에서는 컬럼이 수백 개, 행이 수백만 개에 달할 수 있어, 이런 정제·변환 작업을 노트북(로컬 랩톱)에서만 처리할 수 없고 더 큰 데이터셋·더 큰 인프라가 필요할 수 있음 — 이는 향후 영상에서 다룰 주제.

## 예시
```python
df = pd.read_csv("cleaned_data.csv")

# 주소 길이 피처
df['address_length'] = df['address'].apply(lambda x: len(x))

# 급여 카테고리 피처 (구간화)
bins = [0, 40000, 80000, float('inf')]
labels = ['low', 'medium', 'high']
df['salary_category'] = pd.cut(df['salary'], bins=bins, labels=labels)

# 부서별 요약 리포트
summary_report = df.groupby('department').agg(
    avg_salary=('salary', 'mean'),
    avg_age=('age', 'mean')
).reset_index()

print(summary_report)

df.to_csv("transform_data.csv", index=False)
```

## 요약
- 이 데모는 정제된 데이터에 파생 피처(주소 길이, 급여 카테고리)를 추가하고 부서별 집계 리포트를 생성하는 과정을 보여주며, 집계 결과에서 발견된 이상 신호("unknown" 부서의 특이한 통계)를 통해 데이터 탐색·정제·변환이 일회성이 아니라 반복적 사이클임을 강조하고, 이렇게 만들어진 피처(급여 카테고리)가 실제로 이직 예측 같은 ML 모델에 어떻게 활용되는지 예시로 마무리한다.
