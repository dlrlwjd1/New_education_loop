# Key Terms — Sanitizing and Preparing Data for Modeling

## 개요
- Lesson 1("Sanitizing and Preparing Data for Modeling") 핵심 용어 정리. 결측치 처리, NLP 전처리, 레이블링, 스케일링 등 모델링 이전 데이터 정제 개념을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Missing values(결측치)** | 기록된 값이 없는 데이터 포인트. 행을 제거하거나, 값을 대체(imputing)하거나, 결측치에 강건한 모델링 접근법으로 처리 가능. |
| **Natural Language Processing(NLP)** | 머신러닝 접근법을 사용해 텍스트 데이터를 처리·분석하는 것. 토큰화(tokenization), 불용어(stop words) 제거 등의 단계를 포함하는 경우가 많음. |
| **Labeling(레이블링)** | 지도학습 모델링이 가능하도록 데이터셋의 피처에 레이블 또는 타깃 변수를 할당하는 것. |
| **Scaling(스케일링)** | 피처 간 영향력을 비교 가능하게 만들기 위해 데이터를 0~1 같은 표준 범위로 재조정하는 것. |

## 예시
```python
import pandas as pd
import numpy as np

df = pd.DataFrame([[1, 2], [np.nan, 4], [3, 6]])

df.dropna()          # 결측치가 있는 행 제거
df.fillna(df.mean())  # 평균으로 대체(imputing)
```

```python
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "This is some text data for NLP"

tokens = word_tokenize(text)
cleaned_tokens = [t for t in tokens if t not in stopwords.words('english')]
```

```python
import pandas as pd

df = pd.DataFrame({
    'points': [15, 18, 11],
    'salary': [50000, 60000, None]
})

df['salary'].fillna(df['points'].mean() * 1000, inplace=True)  # 레이블 대체
df.head()
```

```python
from sklearn.preprocessing import MinMaxScaler

df = pd.DataFrame({
    'points': [15, 18, 11],
    'salary': [50000, 60000, None]
})

df['salary'].fillna(df['points'].mean() * 1000, inplace=True)

scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(df)
print(scaled_data)
```

## 요약
- 이번 레슨은 결측치 처리(dropna/fillna), NLP 텍스트 전처리(토큰화·불용어 제거), 지도학습을 위한 레이블링, MinMaxScaler를 활용한 스케일링까지 모델링 전 데이터 정제·준비의 핵심 기법들을 다룬다.
