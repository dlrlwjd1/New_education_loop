# DataFrames

## 개요
- **데이터프레임(DataFrame)** 은 행·열로 데이터를 표현하는 pandas의 주 자료 구조(여러 리스트를 하나로 묶은 것, 각 리스트가 한 열).
- `.head()·.sample()·.columns·.dtypes·.info()` 등으로 탐색·요약한다.

## 내용

### 탐색 명령
- **df.head()**: 처음 5행(인자로 개수 지정, 예 head(3)).
- **df.sample()**: 무작위 행(sample(5)로 여러 개) — 응답의 다양성 확인에 유용.
- **df.columns**: 모든 열 이름.
- **df.dtypes**: 각 열의 데이터 타입. **float64**(소수) / **object**(비수치·범주형, 대개 문자열).
- **df.info()**: 열·타입 요약 + **non-null 개수**(빈 셀 파악).

### 타입과 결측
- 데이터프레임은 **열마다 타입 지정** — 한 열의 모든 값은 같은 타입.
- **object** 타입 = 텍스트 등 복잡한 데이터. (숫자는 규격 봉투처럼 크기 일정, 텍스트는 길이 가변이라 유연한 object 사용). object가 보이면 텍스트로 가정.
- **NaN(빈 셀)** = 무응답/정제 결과. **0이 아님**(예: 학자금 부채 NaN을 0으로 보면 안 됨). non-null이 낮을수록 결측 많음(예: 절반 이상이 소득 미공개).

## 예시

### 데이터프레임 탐색
```python
df.head(3)     # 처음 3행
df.sample(5)   # 무작위 5행
df.columns     # 열 이름
df.dtypes      # 열별 타입 (float64 / object)
df.info()      # 요약 + non-null 개수
```

## 요약
- **데이터프레임**은 행·열 자료 구조로, 여러 리스트(열)를 묶은 것이며 열마다 타입이 지정된다.
- **head·sample·columns·dtypes·info** 로 탐색하며, **object** 는 텍스트, **NaN** 은 결측(0이 아님)이다.
- 다음 강의는 **속성(attributes)과 메서드(methods)** 의 차이다.
