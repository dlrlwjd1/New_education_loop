# How to Build a ColumnTransformer - Step-by-Step

## 개요
- 형식: 영상 (약 6~7분)
- 핵심: 수치·범주·텍스트가 섞인 데이터프레임을 **`ColumnTransformer` 하나로** 전처리한다. 강사의 실패 경험이 함께 나온다.

## 내용

### 문제 — 예전 방식
> 실제 데이터를 다뤄 봤다면 그것이 지저분하다는 것을 안다. 스케일링이 필요한 수치 컬럼, 인코딩이 필요한 범주 컬럼, 벡터화가 필요한 텍스트 컬럼이 있다.
>
> **예전 방식은 각 데이터 타입마다 따로 투박한 단계를 작성하는 것**이었고, 그러면 코드가 읽기 어렵고, 재현하기 어렵고, 쉽게 깨진다.

### 강사의 실패 경험 (Odirile, ML 엔지니어 10년)
> 커리어 초기에 고객 유지(customer retention) 프로젝트를 하는데 **전처리 스크립트가 괴물로 자라 있었다.** 스케일링·인코딩·벡터화가 따로 있어서, **컬럼을 하나 추가하거나 제거할 때마다 뭔가가 깨지고 디버깅에 몇 시간이 걸렸다.**
>
> 그 경험이 가르친 교훈: **가장 효과적인 ML 엔지니어는 우아하고 견고한 도구로 워크플로를 깔끔하게 유지하는 사람들이다.**

영상 후반에 같은 이야기의 결말이 나온다.

> **단일 `ColumnTransformer`로 워크플로를 다시 만들었을 때 전체 전처리 로직이 약 10줄에 들어갔다.** 갑자기 모델 재학습, 새 특징 테스트, 결과 재현이 힘들이지 않고 가능해졌다. **코드의 우아함은 단지 더 깔끔한 것이 아니라, 더 빠르고 안전하고 유지하기 쉽다**는 것을 깨달은 순간이었다.

### 데모 데이터
작은 고객 데이터 데이터프레임 — 우리가 이야기해 온 바로 그 혼합 데이터다.

| 컬럼 | 타입 |
|---|---|
| age | 수치형 |
| plan type | 범주형 |
| feedback | 텍스트 |

목표는 **이 셋을 한 번에 처리하는 것**이다.

### 절차 (영상이 정리한 3단계)
1. **데이터 타입별로 컬럼 이름 리스트를 정의한다** — 코드를 깔끔하고 읽기 쉽게 유지하는 모범 사례
2. **타입별 변환기를 정한다**
   - 수치형 → `StandardScaler`
   - 범주형 → `OneHotEncoder`. **`handle_unknown='ignore'`를 추가한다 — 프로덕션 모델에 결정적이다.** 학습 때 못 본 새 범주를 만나도 에러가 나지 않게 막는다
   - 텍스트 → `TfidfVectorizer`
3. **`ColumnTransformer`에 튜플 리스트로 모은다.** 각 튜플은 세 부분이다 — **단계 이름 / 변환기 객체 / 적용할 컬럼**

### 출력
적합시키면 **하나의 NumPy 배열**이 나온다. scikit-learn이 age에 StandardScaler, plan type에 OneHotEncoder, feedback에 TfidfVectorizer를 적용한 뒤 **결과를 깔끔하게 이어 붙인 것**이다.

### 다음
> 이어지는 미채점 Lab에서 **바로 이 기법으로 고객 이탈 예측용 완전한 피처 엔지니어링 파이프라인**을 만든다. (→ [04 Build a Pipeline for Churn Prediction](04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md))

## 예시

```python
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.feature_extraction.text import TfidfVectorizer

## 1단계 — 데이터 타입별로 컬럼을 리스트로 정의한다
numeric_features = ['age']
categorical_features = ['plan_type']
text_feature = 'feedback'          # 텍스트는 문자열 하나로 넘긴다

## 2~3단계 — 변환기를 정하고 튜플 리스트로 모은다
preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features),
    ('txt', TfidfVectorizer(), text_feature),
])

X_processed = preprocessor.fit_transform(df)   # 단일 배열로 이어 붙여 나온다
```

> 위 코드는 영상이 설명한 절차를 실행 가능한 형태로 옮긴 것이다. 영상 화면의 변수명과 다를 수 있다.

## 요약
- 혼합 데이터 전처리를 **타입별 개별 단계 → 단일 `ColumnTransformer`** 로 바꾸는 것이 이 영상의 전부다.
- 튜플 3요소: **이름 / 변환기 / 컬럼**. 텍스트 컬럼만 문자열로 넘긴다.
- **`handle_unknown='ignore'`는 프로덕션 필수** — 새 범주가 와도 안 깨진다.
- 실제 효과는 코드 미학이 아니라 **재학습·특징 실험·결과 재현이 쉬워진다는 것**이다. 강사가 전처리 스크립트를 10줄로 줄인 경험이 근거다.
