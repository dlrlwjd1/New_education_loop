# Scraping Tables with Pandas

## 개요
- **pd.read_html** 은 웹페이지의 표(table)를 데이터프레임 **리스트**로 추출한다.
- 인수는 URL 문자열 하나이며, **제대로 구조화된 표**에만 작동한다.

## 내용

### 배경
- 국제 원조 기구를 위해 세계 인구·반려동물 인구 스크래핑(위키피디아 기반). 행=국가, 열=특성(인구·개 인구·지역·언어 등). 표 형식이 데이터프레임과 유사, 결측 있음.

### pd.read_html
- `import pandas as pd`, `url = "..."`.
- `tables = pd.read_html(url)` — 페이지의 올바른 형식 표를 찾아 **데이터프레임 리스트**로 저장.
- `type(tables)` = 리스트, `len(tables)` = 1(표 하나). `df = tables[0]` (첫 표).
- `df.head()`·`df.info()` 로 확인 — 238행 12열, 개 인구는 38행만(약 15%), 수치 열 자동 감지.
- **change percent** 는 수치인데 **object**(텍스트) — pandas가 안전 변환 불확실 시 텍스트로 기본 처리.

## 예시

### 표 스크래핑
```python
import pandas as pd
url = "..."
tables = pd.read_html(url)   # 데이터프레임 리스트
df = tables[0]               # 첫 표
df.info()                    # 확인
```

## 요약
- **pd.read_html(URL)** 로 웹페이지의 표들을 데이터프레임 **리스트**로 추출하고 `[0]` 등으로 꺼낸다.
- 제대로 구조화된 표에만 작동하며, 이후 head·info 등으로 검사한다.
- 수치처럼 보여도 object(텍스트)로 읽힐 수 있다. 다음 강의는 분석을 위한 문자열 정리다.
