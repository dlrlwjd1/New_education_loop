# Azure Open Datasets

## 개요
- Hugging Face Datasets와 유사하게, **Azure Open Datasets**로 큐레이션된 공개 데이터셋(공휴일, 당뇨병 데이터 등)을 동적으로 로드하는 법을 다룬다. 날짜 계산에 유용한 `dateutil.relativedelta`와, 로드한 데이터를 Pandas로 변환해 조건 쿼리하는 실습을 포함한다.

## 내용

### Azure Open Datasets란
- Hugging Face Datasets처럼 **큐레이션되고 준비된 데이터셋을 라이브러리 설치만으로 동적 로드**할 수 있게 해주는 Azure 리소스.
- 공식 문서에 뉴욕시 택시·리무진 데이터 등 다양한 예제 노트북과 컬럼 설명이 풍부하게 제공됨.
- 설치: `pip install azureml-opendatasets` (예시 버전 1.44.0).

### 공휴일 데이터셋 로드 — 날짜 계산
- `from azureml.opendatasets import PublicHolidays`로 임포트.
- **날짜 계산에 `dateutil.relativedelta`가 유용**: `datetime.today()`로 오늘 날짜를 구하고, `relativedelta(months=12)`를 빼서 "1년 전" 날짜를 계산.
- `PublicHolidays(start_date=last_year, end_date=today)`처럼 기간을 지정해 로드한 뒤, `.to_pandas_dataframe()`으로 DataFrame으로 변환.
- 변환된 데이터는 국가/지역, 공휴일 이름(정규화됨), 유급휴일 여부 등의 컬럼을 가진다.

### 당뇨병 데이터셋 — 조건 쿼리 실습
- 같은 방식으로 당뇨병(diabetes) 데이터셋도 로드 가능 — Age, Sex, BMI, Blood Pressure 등의 컬럼을 가짐.
- Pandas `.query()`로 **BMI가 특정 값 미만인 사람들**을 필터링해보며, BMI 기준을 조금씩 올릴 때(18 → 19 → 30) 결과 건수가 늘어나는 것을 확인하는 탐색적 분석 실습.

## 예시
```python
from azureml.opendatasets import PublicHolidays
from datetime import datetime
from dateutil.relativedelta import relativedelta

today = datetime.today()
last_year = today - relativedelta(months=12)

hol = PublicHolidays(start_date=last_year, end_date=today)
holidays_df = hol.to_pandas_dataframe()
holidays_df.head(10)

from azureml.opendatasets import Diabetes
diabetes_df = Diabetes().to_pandas_dataframe()
diabetes_df.query("BMI < 19").head(10)
diabetes_df.query("BMI < 30").head(10)
```

## 요약
- Azure Open Datasets는 `azureml-opendatasets` 설치만으로 공휴일·당뇨병 등 다양한 큐레이션 데이터셋을 동적으로 로드할 수 있게 해준다.
- 날짜 범위 지정 시 `dateutil.relativedelta`가 유용하며, 로드 후에는 Pandas의 익숙한 도구(`.describe()`, `.query()`)로 바로 탐색할 수 있다.
