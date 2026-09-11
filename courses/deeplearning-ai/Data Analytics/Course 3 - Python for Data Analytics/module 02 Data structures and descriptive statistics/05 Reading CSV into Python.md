# Reading CSV into Python

## 개요
- **pd.read_csv** 함수로 CSV 파일을 읽어 **데이터프레임(DataFrame)** 으로 만든다.
- 파일은 노트북과 **같은 폴더**에 있어야 하며(랩에선 준비됨), 결과를 변수(관례적으로 `df`)에 저장한다.

## 내용

### 배경 — 신규 프로그래머 설문
- 신규 프로그래머 대상 교육 제품 마케팅용. 2016년 FreeCodeCamp·CodeNewbie가 수집한 공개 설문(GitHub의 clean data 디렉터리 CSV).
- 파일을 다운로드·이름 변경(survey_data.csv) 후 노트북과 같은 폴더에 배치(랩에선 자동).

### CSV 읽기
- `import pandas as pd`(임포트는 코드 상단 관례).
- `df = pd.read_csv("survey_data.csv")` — 파일명은 문자열, 결과를 df에 저장.
- 타입 확인: `type(df)` → **pandas DataFrame**(Python판 스프레드시트).

### 데이터 확인
- `df` + Shift+Enter로 확인(print df보다 보기 좋음). 각 **행=응답자**, 각 **열=설문 질문**.
- 15,000+ 응답, 16개 특성. 빈 셀은 **NaN(not a number)**. 인덱스는 리스트처럼 **0부터** 시작.
- 탐색 질문 예: 나이 분포, 코딩 학습 지출, 프로그래밍 개월 수, 주당 학습 시간과 소득의 관계 등.

## 예시

### CSV 읽기
```python
import pandas as pd
df = pd.read_csv("survey_data.csv")   # 파일명은 문자열
type(df)   # → pandas.DataFrame
df         # Shift+Enter로 확인 (NaN = 빈 셀)
```

## 요약
- **pd.read_csv("파일.csv")** 로 CSV를 읽어 **데이터프레임**을 만들고 변수(`df`)에 저장한다.
- 파일은 노트북과 같은 폴더에 있어야 하며, 행=관측·열=특성, 빈 셀은 **NaN**, 인덱스는 0부터다.
- `df` 로 데이터를 확인한다. 다음 강의는 데이터프레임 탐색이다.
