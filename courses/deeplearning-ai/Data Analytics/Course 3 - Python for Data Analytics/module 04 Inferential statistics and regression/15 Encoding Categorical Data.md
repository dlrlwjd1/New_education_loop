# Encoding Categorical Data

## 개요
- OLS는 숫자만 받으므로 **범주형 변수를 숫자로 인코딩**해야 한다 — pandas의 **pd.get_dummies**.
- 각 카테고리를 0/1 열로 바꾸되, **하나는 제외(drop_first=True)** 해 중복 정보를 없앤다.

## 내용

### get_dummies (원-핫 인코딩)
- 예: color(D~J, D는 무색=최고, J로 갈수록 노랑). `pd.get_dummies` 가 카테고리마다 열 생성, 해당 색이면 1 아니면 0.
- **첫 카테고리 제외**: color D 열 없음. 다른 색이 모두 0이면 D임을 알 수 있어 중복 제거 → **drop_first=True 필수**(안 하면 모델 적합 문제).

### 회귀에 추가
- 예측 변수 리스트에 color 추가.
- `sm.add_constant(pd.get_dummies(df[predictors], columns=["color"], drop_first=True, dtype=int))`:
  - **columns**: 인코딩할 열(나머지는 그대로).
  - **drop_first=True**: 중복 제거.
  - **dtype=int**: 불리언(True/False) 대신 숫자(0/1) — OLS는 숫자 필요(LLM 도움).

### 탐색
- `sns.barplot`(x=color, y=price)로 관계 확인. (D·E 비슷하다 J로 갈수록 상승 — 무색이 더 싸 보이는 의외 결과 → 추가 조사 필요)

## 예시

### 범주형 인코딩
```python
x = sm.add_constant(pd.get_dummies(df[predictors],
                                   columns=["color"],
                                   drop_first=True,
                                   dtype=int))
```

## 요약
- 범주형 변수는 **pd.get_dummies(columns=, drop_first=True, dtype=int)** 로 0/1 숫자 열로 인코딩한다.
- **drop_first=True**(중복 제거·필수), **dtype=int**(OLS용 숫자)를 지정한다.
- 다음 강의는 이 범주형 데이터로 모델을 학습한다.
