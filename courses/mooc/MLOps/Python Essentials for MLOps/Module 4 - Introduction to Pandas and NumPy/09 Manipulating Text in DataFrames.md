# Manipulating Text in DataFrames

## 개요
- 텍스트(문자열) 데이터를 다루는 두 가지 흔한 패턴 — **값 치환(`.replace()`)으로 새 컬럼 만들기**, **문자열 분할(`.str.split()` + `.str.get()`)로 텍스트 일부만 추출하기** — 를 다룬다. 원본을 보존하기 위해 새 컬럼에 결과를 담는 습관도 강조된다.

## 내용

### 값 치환 — `.replace()`로 새 컬럼 만들기
- `variety` 컬럼의 값("Red Wine", "White Wine")을 짧게 축약하고 싶을 때, **딕셔너리를 이용한 치환**을 사용: `{"Red Wine": "R", "White Wine": "W"}`.
- `df["variety_short"] = df["variety"].replace({...})`처럼 **원본 컬럼을 바로 바꾸지 않고 새 컬럼(`variety_short`)에 결과를 담는 것을 선호** — 실수했을 때 원본 데이터로 쉽게 되돌아갈 수 있기 때문.
- (물론 `inplace`로 즉시 변경하는 것도 가능하지만, 안전을 위해 새 컬럼을 만드는 방식을 권장.)

### 문자열 분할과 추출 — `.str.split()` + `.str.get()`
- `region` 컬럼 값이 "Mendocino, California"처럼 **콤마로 구분된 여러 단위**를 담고 있을 때, 마지막 항목("California")만 뽑아내고 싶은 상황.
- 콤마 개수와 무관하게 **항상 마지막 항목만 가져오는** 방법:
  ```python
  df["region_short"] = df["region"].str.split(",").str.get(-1)
  ```
  - `.str.split(",")`: 컬럼의 각 문자열을 콤마 기준으로 분할해 리스트로 만듦 (Python의 `split()`과 동일한 개념을 Pandas `str` 네임스페이스로 적용).
  - `.str.get(-1)`: 분할된 리스트에서 **마지막 인덱스(-1)**의 항목만 꺼냄.
- 이렇게 만든 `region_short`을 확인해보면, 대부분 "California"였던 지역이 스페인·워싱턴 등 콤마가 없는 지역들과 함께 깔끔하게 정리된 것을 볼 수 있다.

## 예시
```python
df["variety_short"] = df["variety"].replace({"Red Wine": "R", "White Wine": "W"})

df["region_short"] = df["region"].str.split(",").str.get(-1)
```

## 요약
- 값 치환은 `.replace({원본: 대체값, ...})`로, 문자열 일부 추출은 `.str.split(구분자).str.get(인덱스)`로 처리한다.
- 원본 컬럼을 바로 덮어쓰기보다 **새 컬럼에 결과를 담아** 실수 시 원본으로 돌아갈 수 있게 하는 것이 안전한 습관.
