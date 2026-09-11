# Key Terms — Working with DataFrames

## 개요
- "Working with DataFrames" 레슨의 용어 정리(reading). 필터링과 시각화 예제 코드를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Dataframe | Pandas에서 레이블이 붙은 행과 열을 가진 테이블 형태의 자료구조 |
| Series | Pandas에서 레이블이 붙은 데이터의 단일 열 |
| Loading (로딩) | 외부 데이터셋을 Pandas DataFrame으로 읽어들이는 것 |
| Manipulation (조작) | 로딩 이후 DataFrame을 변형·필터링·정제하는 것 |
| Visualization (시각화) | DataFrame 데이터로 차트와 플롯을 만드는 것 |

## 예시
```python
import pandas as pd

df = pd.DataFrame([[1, 2], [3, 4]], columns=['Num1', 'Num2'], index=['R1', 'R2'])
s = df['Num1']

# CSV 로드
df = pd.read_csv('data.csv')

# 조건으로 필터링
new_df = df[df['Sales'] > 1000]

# 히스토그램 플롯
df['Sales'].plot.hist()
```

## 요약
- 이 레슨은 로딩 이후의 단계 — 조건 필터링, 텍스트 조작, 함수 적용, 시각화 — 를 다룬다.
