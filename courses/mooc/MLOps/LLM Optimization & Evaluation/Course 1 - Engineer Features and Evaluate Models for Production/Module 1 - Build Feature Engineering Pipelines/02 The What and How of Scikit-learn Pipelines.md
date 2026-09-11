# The What and How of Scikit-learn Pipelines

## 개요
- 형식: 읽기 자료 (약 7분)
- 핵심: `Pipeline`과 `ColumnTransformer` 두 클래스, 그리고 **데이터 누출(data leakage) 방지 규칙**.

## 내용

### 왜 파이프라인인가
> 머신러닝 맥락에서 scikit-learn 파이프라인을 활용하는 것은 **효율적이고 재현 가능한(reproducible) 워크플로**를 만드는 데 필수적이다.

### 1. Pipeline 클래스
여러 처리 단계를 **하나의 워크플로로 연결(chain)** 한다.

- 변환의 순서를 조직화하고, **학습과 평가 양쪽에서 일관되게 적용**되도록 보장한다
- 전형적인 파이프라인은 전처리 → 특징 추출 → 모델 적합을 **하나의 객체에 캡슐화**한다
- 이 접근이 **새 데이터에 같은 변환을 적용하는 일을 단순화**해 재현성을 높인다

### 2. ColumnTransformer 클래스
**서로 다른 컬럼에 서로 다른 전처리를 동시에** 적용한다.

- 수치형과 범주형처럼 **혼합 데이터 타입**을 다룰 때 특히 유용하다
- 어느 변환기를 어느 컬럼에 적용할지 지정해 **통합된 워크플로**를 만든다

### 3. 단계 연결(chaining)
파이프라인의 각 단계는 변환이거나 모델이며, **지정한 순서대로 실행**된다.

> 이것은 명확성을 높이는 동시에, **변환을 수동으로 적용할 때 발생하는 오류 가능성을 줄인다.**

### 데이터 누출 방지 규칙 — 이 자료에서 가장 중요한 부분

| 규칙 | 내용 |
|---|---|
| **적합 전에 분리한다** | **전체 데이터셋에 변환기를 적합시키지 말라.** `train_test_split` → `pipeline.fit(X_train, y_train)` → `X_test`로 평가 |
| **전처리를 파이프라인 안에 캡슐화한다** | 파이프라인 밖에서 임시(ad-hoc) 변환을 하지 말라 |
| **층화 분리를 쓴다** | 분류 문제에서 **클래스가 불균형하면 stratified split**을 사용 |

### 희소 행렬 관련 팁
> 파이프라인이 희소 행렬(sparse matrix)을 출력하면(예: `OneHotEncoder`나 `TfidfVectorizer`에서), 수치형 특징에는 **`StandardScaler(with_mean=False)`** 를 유지해 밀집(dense) 변환을 피하라. 밀집 수치 스케일링을 원하고 수치 분기가 밀집으로 남아 있다면 그대로 두면 된다.

## 예시

### Pipeline
```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000))
])
```

### ColumnTransformer — 수치·범주·텍스트를 한 번에
```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.feature_extraction.text import TfidfVectorizer

preprocessor = ColumnTransformer(
    transformers=[
        ("num", StandardScaler(), ['numerical_column1', 'numerical_column2']),
        ("cat", OneHotEncoder(handle_unknown="ignore"), ['categorical_column']),
        ("txt", TfidfVectorizer(max_features=5000), "text_column"),
    ],
    remainder="drop"
)
```

세 가지를 눈여겨볼 것.

- **텍스트 컬럼은 리스트가 아니라 문자열**로 넘긴다 (`"text_column"`). `TfidfVectorizer`는 1차원 입력을 받는다
- `handle_unknown="ignore"` — 학습 때 못 본 범주가 와도 에러가 나지 않는다
- `remainder="drop"` — 지정하지 않은 컬럼은 버린다

## 요약
- `Pipeline`은 단계를 순서대로 연결하고, `ColumnTransformer`는 **컬럼별로 다른 변환**을 붙인다.
- 두 클래스의 값은 편의가 아니라 **재현성**이다 — 학습과 평가, 그리고 새 데이터에 같은 변환이 보장된다.
- **데이터 누출 방지 3원칙**: 분리 후 적합 / 전처리는 파이프라인 안에서만 / 불균형이면 층화 분리.
- 희소 행렬이 섞이면 `StandardScaler(with_mean=False)`로 밀집 변환을 피한다.
