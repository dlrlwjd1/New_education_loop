# Key Terms — Pandas

## 개요
- "Basic Pandas Usage" 레슨의 용어 정리(reading). DataFrame/Series/로딩/탐색적 분석/내보내기의 정의와 기본 코드 예시를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Data frame (데이터프레임) | 스프레드시트와 비슷한, 열과 행을 가진 Pandas의 2차원 자료구조 |
| Series (시리즈) | 축 레이블(axis label)을 가진 1차원 배열. 보통 DataFrame의 한 열로부터 생성 |
| Loading (로딩) | 외부 데이터를 Pandas DataFrame으로 읽어들이는 과정 |
| Exploratory analysis (탐색적 분석) | 본격적인 분석 전에 데이터의 특성을 파악하는 초기 조사 |
| Exporting (내보내기) | DataFrame의 데이터를 CSV나 Excel 같은 다른 형식으로 저장하는 것 |

## 예시
```python
import pandas as pd

# DataFrame 생성
data = [[1, 2], [3, 4]]
df = pd.DataFrame(data, columns=['Num1', 'Num2'], index=['R1', 'R2'])
print(df)

# Series 생성 (DataFrame의 한 열)
s = df['Num1']
print(s)
```
```python
# CSV 파일을 DataFrame으로 로드
df = pd.read_csv('data.csv')

# 탐색적 분석
print(df.describe())

# DataFrame을 CSV로 내보내기
df.to_csv('export.csv')
```

## 요약
- DataFrame은 스프레드시트 형태의 2차원 자료구조, Series는 그 열 하나에 해당하는 1차원 배열.
- 로딩(read_*) → 탐색적 분석(describe 등) → 내보내기(to_*)가 Pandas 기본 워크플로.
