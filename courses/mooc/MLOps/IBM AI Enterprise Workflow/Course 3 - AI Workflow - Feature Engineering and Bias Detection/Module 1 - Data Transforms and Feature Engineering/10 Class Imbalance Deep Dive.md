# Class Imbalance Deep Dive

## 개요
- 형식: 영상 (약 9분) — 이 레슨에서 가장 긴 강의
- 핵심: `imbalanced-learn` 패키지로 **샘플링 방식 여러 개를 파이프라인으로 만들어 비교**한다. 그리고 그 결과가 기대와 다르게 나온다.

## 내용

### 전제 — 모든 모델이 불균형에 민감한 것은 아니다
> 이것은 매우 복잡한 주제다. **모든 머신러닝 모델이 클래스 불균형에 민감한 것은 아니다.** 예를 들어 의사결정 나무(decision tree)는 불균형 데이터에서도 종종 좋은 성능을 낸다.

그래서 할 일은 정답을 외우는 게 아니라 **여러 알고리즘을 비교하고 각각의 성능을 평가**하는 것이다.

불균형의 **정도(level)** 도 결과 해석과 접근 방식을 좌우한다. 사기 탐지에서 활동의 1%만 사기라면, 그 모델은 정확도 99%를 받고도 완전히 쓸모없을 수 있다.

### 도구 — imbalanced-learn
- 인터페이스가 단순하고 **scikit-learn과 쉽게 통합**된다
- 업샘플링·다운샘플링 알고리즘을 다수 포함
- 신경망에서 불균형 데이터를 다루는 유틸리티도 제공
- SMOTE 및 관련 알고리즘 접근 제공

### AAVAIL 데이터 준비 절차
사용 변수:

| 종류 | 변수 |
|---|---|
| 범주형(categorical) | country, subscriber type |
| 연속형(continuous) | age, num streams |
| 타깃 | is subscriber |

불균형의 형태: **구독자가 비구독자보다 훨씬 많다.** subscriber 열에 1이 0보다 훨씬 많다.

전처리 순서:
1. `pop` 함수로 타깃(`is_subscriber`)을 데이터프레임에서 분리
2. **이탈(churn)을 소수 클래스로 전환** — 구독자/비구독자에 따라 y를 1/0으로 채운다
3. 쓰지 않는 열(customer ID, customer name) 제거
4. `train_test_split`으로 학습/테스트 분리. **`stratify` 파라미터**를 써서 원본 표본과 같은 클래스 비율을 학습·테스트에 유지

### ColumnTransformer로 두 파이프라인 결합
범주형용 파이프라인과 연속형용 파이프라인을 따로 만들어 `ColumnTransformer`로 합친다.

**왜 나누는가** — 지금 예제에는 결측치가 없지만, **프로덕션에서는 결측치 때문에 파이프라인이 깨지지 않게** 해야 한다. 그래서 나눈 뒤 각각 `SimpleImputer`로 결측을 채운다.

기준 모델(baseline)로는 단순 선형 회귀를 쓴다 — 시작하기에 합리적인 기준선이라는 이유다.

### 오버샘플러 동작 확인
`make_classification`으로 3개 클래스의 불균형 문제를 시뮬레이션한다. 원본 타깃 분포:

| 클래스 | 개수 |
|---|---|
| 0 | 64 |
| 1 | 262 |
| 2 | **4,674** |

`RandomOverSampler` 적용 후 → 클래스 0과 1이 **가장 큰 클래스(2)와 같은 수까지 증강**된다.

### 세 파이프라인 비교 — 이 강의의 결론
`imbalanced-learn`은 자체 파이프라인 생성 함수를 갖고 있고, scikit-learn의 transformer·estimator·심지어 scikit-learn 파이프라인까지 쓸 수 있다. 이를 이용해 세 개를 만든다.

| # | 파이프라인 | 샘플링 |
|---|---|---|
| 1 | 원본 | 없음 |
| 2 | RandomOverSampler | 무작위 오버샘플링 |
| 3 | SMOTE | 합성 소수 클래스 오버샘플링 |

**결과: 세 방식 사이에 큰 차이가 나타나지 않았다.**

subscriber와 churn의 F1 점수가 세 파이프라인에서 대체로 비슷했고, 정밀도·재현율·정확도 등 다른 수치도 매우 유사했다.

> 실무에서 할 일은 이 수치들을 비교해서, **당연히 가장 좋은 성능을 주는 것을 고르는 것**이다.

## 예시

```python
## 타깃 분리 후 이탈을 소수 클래스로 전환
y_raw = df.pop('is_subscriber')
y = np.array([0 if v else 1 for v in y_raw])   # churn = 1 (소수 클래스)

## 원본 비율을 유지한 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, stratify=y, random_state=42)
```

```python
## 범주형·연속형을 나눠 결측 처리 후 ColumnTransformer로 결합
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.pipeline import Pipeline

numeric = Pipeline([('imp', SimpleImputer(strategy='mean')),
                    ('sc',  StandardScaler())])
categorical = Pipeline([('imp', SimpleImputer(strategy='most_frequent')),
                        ('ohe', OneHotEncoder(handle_unknown='ignore'))])

pre = ColumnTransformer([('num', numeric, ['age', 'num_streams']),
                         ('cat', categorical, ['country', 'subscriber_type'])])
```

```python
## imbalanced-learn 파이프라인으로 세 방식 비교
from imblearn.pipeline import Pipeline as ImbPipeline
from imblearn.over_sampling import RandomOverSampler, SMOTE

pipes = {
    'no sampling':  ImbPipeline([('pre', pre), ('clf', clf)]),
    'oversampling': ImbPipeline([('pre', pre), ('smp', RandomOverSampler()), ('clf', clf)]),
    'smote':        ImbPipeline([('pre', pre), ('smp', SMOTE()),             ('clf', clf)]),
}
```

> 위 코드는 강의에서 설명한 절차를 실행 가능한 형태로 옮긴 것이다. 강의 슬라이드의 원본 코드와 변수명이 다를 수 있다.

## 요약
- 의사결정 나무처럼 불균형에 강한 모델이 있으므로, **샘플링이 항상 필요한 것은 아니다.**
- `stratify`는 분할 후에도 원본 클래스 비율을 유지시켜 준다. 불균형 데이터에서 빠뜨리면 안 된다.
- 범주형/연속형을 나눠 `ColumnTransformer`로 합치는 이유는 **프로덕션에서 결측치로 파이프라인이 깨지지 않게** 하기 위함이다.
- **이 강의의 실질적 교훈**: 오버샘플링·SMOTE가 항상 성능을 올려주지는 않는다. 이 예제에서는 차이가 거의 없었다. 그래서 "적용한다"가 아니라 **"비교한다"** 가 올바른 절차다.
