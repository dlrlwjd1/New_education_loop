# Optional: Introduction to Libraries and Data Management

## 개요
- Python 라이브러리(library)의 개념과 이 코스에서 사용할 주요 라이브러리(NumPy, pandas, SciPy, Matplotlib, Seaborn, Statsmodels)를 소개한다
- 프로그래밍 언어를 배울 때 공식 문서(documentation)를 읽는 능력이 중요함을 강조한다
- pandas의 DataFrame으로 CSV 데이터를 불러오고(`read_csv`), 조회하고(`head`, `columns`, `dtypes`), 슬라이싱하고(`.loc`, `.iloc`), 값을 탐색(`unique`, `groupby`)하는 데이터 관리(data management) 기초를 다룬다

## 내용
### Python 라이브러리
Python은 다른 언어처럼 기본 프레임워크와 기능을 확장하는 추가 모듈/라이브러리가 풍부하다. 라이브러리는 직접 알고리즘을 짜지 않고도 특정 프로그래밍 작업을 완수할 수 있게 해 주는 함수들의 모음이라고 생각하면 된다. 이 코스에서 주로 쓰는 라이브러리:

- **NumPy**: 데이터 배열(array)과 수학 연산을 다루는 라이브러리
- **pandas**: 고성능의 사용하기 쉬운 데이터 구조(DataFrame 등)와 데이터 분석 도구 제공
- **SciPy**: 수치·과학 계산 기법 라이브러리
- **Matplotlib**: 그래프 등 시각화 라이브러리
- **Seaborn**: Matplotlib처럼 시각화·그래프 작업에 사용
- **Statsmodels**: 다양한 통계 기법을 구현한 라이브러리

### 문서(documentation)의 중요성
새 프로그래밍 언어를 배울 때 신뢰할 수 있고 접근 가능한 문서는 필수적이다. Python은 언어 문법, 라이브러리 등의 세부를 설명하는 상세한 문서를 제공한다. 문서를 읽는 법을 이해하는 것은 모든 프로그래머에게 중요하다. Python 표준 라이브러리 문서에는 내장 함수(built-in functions), 상수, 내장 타입이 나와 있고, 예컨대 수치 타입(int, float, complex)과 Python이 지원하는 산술 연산도 확인할 수 있다.

### 라이브러리 임포트와 사용
- Python 스크립트는 에러를 피하기 위해 항상 사용할 라이브러리의 임포트로 시작해야 한다.
- 임포트한 라이브러리의 함수는 라이브러리 이름을 함수 이름 앞에 붙여 호출한다(예: `numpy.mean`).
- 매번 라이브러리 전체 이름을 치지 않도록 두세 글자 약어를 정의하는 것이 관례다: `import numpy as np`, `import pandas as pd` → `np.mean`처럼 사용.

### 데이터 관리 — CSV 불러오기와 DataFrame
데이터 관리(data management)는 통계 분석과 데이터 과학 작업의 핵심 요소다.

- pandas의 주 데이터 구조는 **DataFrame** — 행(row)이 보통 사례(case, 예: 카트휠 대회 참가자), 열(column)이 변수(variable)를 나타내는 2차원 표다. 단일 열에 접근할 때 만나는 1차원 구조 **Series**도 있다.
- pandas에는 `read_xxx` 형태의 함수들이 있다. CSV(comma separated value) 외에 Excel, JSON, SQL 형식도 읽을 수 있다.
- 원본 카트휠(Cartwheel) 데이터를 보면 첫 행에 열 제목(ID, age, gender 등)이 있고 모두 쉼표로 구분되어 있다 — 그래서 이름이 comma separated values다.
- CSV를 호스팅하는 URL 문자열을 저장한 뒤 `pd.read_csv`로 읽어 DataFrame으로 저장한다. 변수의 타입은 pandas DataFrame이다.

### 데이터 조회
- `df.head()`: 처음 5개 행과 모든 열 헤더를 보여 줘 데이터에 무엇이 담겼는지 파악하기 좋다.
- `df` 출력: 전체 DataFrame(예시 데이터는 총 25개 행). 큰 데이터셋은 지저분해지므로 head 사용을 권장.
- `df.columns`: 열 이름 확인.

### 데이터 슬라이싱 — .loc과 .iloc
DataFrame에서 특정 부분만 선택하는 것은 데이터 관리에서 매우 중요하다. 방법은 `.loc`, `.iloc`, `.ix` 세 가지가 있으나 이 튜토리얼에서는 `.loc`과 `.iloc`만 다룬다.

- **`.loc`**: 쉼표로 구분된 두 개의 단일 값/리스트/범위 연산자를 받는다 — 첫 번째는 행, 두 번째는 열.
  - 모든 행 + 열 이름 문자열: 해당 열의 모든 관측값 반환(예: CWDistance)
  - 모든 행 + 여러 열: CWDistance, Height, Wingspan 세 열 출력
  - 행 범위 지정: 0~9행만 선택
  - 열 지정 없이 행 범위만: 10~15행의 모든 열
- **`.iloc`**: 정수 기반 슬라이싱(integer based slicing). `.loc`은 레이블·열 이름을 쓰는 반면 `.iloc`은 위치 정수를 쓴다.
  - 정수 하나만 지정: 처음 4개 행 반환
  - 행 1~5 + 열 위치 2~4: 위치 2·3에 해당하는 gender, group 열 반환
  - `.iloc`에는 레이블/문자열을 넣을 수 없다 — 넣으면 에러가 나고, 제거하면 정상 동작한다. 이것이 `.loc`과 `.iloc`의 차이다.

### 데이터 타입과 고유값 탐색
- `df.dtypes`: 각 열의 데이터 타입 확인 — int64, float, object 타입이 있다.
- `df.Gender.unique()`: gender 열의 고유값 확인 → F와 M 반환.
- 같은 방식으로 GenderGroup의 고유값은 1과 2 — 두 필드가 같은 목적(남/여 구분)을 가진 듯하다.
- `.loc`으로 gender와 gender group 두 열만 모두 출력해 보면 F가 1에 대응하는 것으로 보인다.
- 지저분한 데이터에서는 이렇게 눈으로 확인하기 어려울 수 있으므로 **`groupby`** 같은 함수를 활용한다. gender와 gender group 값의 조합을 만들어 보면 (F, 1)과 (M, 2) 두 조합만 존재함을 확인할 수 있어, 두 필드가 본질적으로 같은 정보를 담는다는 처음 가정을 검증할 수 있다.

코스 후반에 pandas 기능을 더 깊이 다루는 읽기 자료가 제공된다.

## 예시
```python
import numpy as np
import pandas as pd

# NumPy 배열과 평균
a = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(np.mean(a))   # 5.0

# CSV 파일을 pandas DataFrame으로 읽기
url = "Cartwheeldata.csv"   # CSV 파일을 호스팅하는 URL 문자열
df = pd.read_csv(url)
print(type(df))     # <class 'pandas.core.frame.DataFrame'>

# 데이터 조회
df.head()           # 처음 5개 행
print(df)           # 전체 DataFrame (25개 행)
print(df.columns)   # 열 이름: ID, Age, Gender, GenderGroup, ...

# .loc — 레이블(열 이름) 기반 슬라이싱
df.loc[:, "CWDistance"]                            # 한 열의 모든 행
df.loc[:, ["CWDistance", "Height", "Wingspan"]]    # 여러 열의 모든 행
df.loc[:9, ["CWDistance", "Height", "Wingspan"]]   # 0~9행만
df.loc[10:15]                                      # 10~15행의 모든 열

# .iloc — 정수 위치 기반 슬라이싱
df.iloc[:4]         # 처음 4개 행
df.iloc[1:5, 2:4]   # 1~5행, 위치 2~3열(gender, group)
# df.iloc[1:5, ["Gender", "GenderGroup"]]  # 에러 — .iloc은 레이블 불가

# 열 타입과 고유값
print(df.dtypes)             # int64, float64, object 등
print(df.Gender.unique())    # ['F' 'M']
print(df.GenderGroup.unique())  # [1 2]

# 두 열의 대응 확인
df.loc[:, ["Gender", "GenderGroup"]]

# groupby로 조합 확인 — (F,1)과 (M,2) 두 조합뿐임을 검증
df.groupby(["Gender", "GenderGroup"]).size()
```

## 요약
- 라이브러리는 미리 만들어진 함수의 모음이며, 코스에서는 NumPy, pandas, SciPy, Matplotlib, Seaborn, Statsmodels를 사용한다
- `import numpy as np`처럼 약어로 임포트하는 것이 관례이며, 스크립트는 항상 임포트로 시작한다
- 공식 문서를 읽는 능력은 프로그래머의 핵심 역량이다
- pandas DataFrame은 행 = 사례, 열 = 변수인 2차원 표이며 `pd.read_csv`로 CSV를 불러온다
- `head`, `columns`, `dtypes`로 데이터를 파악하고 `.loc`(레이블 기반)과 `.iloc`(정수 위치 기반)으로 슬라이싱한다
- `unique`와 `groupby`로 열의 고유값과 열 간 대응 관계를 검증할 수 있다
