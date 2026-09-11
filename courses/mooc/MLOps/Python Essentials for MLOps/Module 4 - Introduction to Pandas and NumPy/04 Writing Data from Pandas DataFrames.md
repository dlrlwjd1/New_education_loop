# Writing Data from Pandas DataFrames

## 개요
- 로딩(loading)이 "Pandas 라이브러리로 데이터를 가져오는 것"이라면, 쓰기(writing)는 **"DataFrame에서 다른 형식으로 내보내는 것"**이다. CSV/Excel/Parquet/HTML/클립보드(마크다운) 등 다양한 내보내기 방식을 다룬다.

## 내용

### 로딩 vs. 쓰기 — 방향의 차이
- 로딩은 `pd`(Pandas 라이브러리)에서 시작, 쓰기는 **DataFrame 자체**에서 시작한다 (`df.to_*()` 형태).

### 다양한 내보내기 형식
- CSV, Python 딕셔너리, Excel, **Parquet**(대용량 데이터셋을 저장하는 강력한 방식) 등 다양한 목적지로 내보낼 수 있다.

### HTML로 내보내기
- `df.to_html("파일명.html")`로 내보내면, `<head>`/`<body>`/행(row)이 갖춰진 완전한 HTML 테이블 파일이 생성되어 브라우저에서 바로 열어볼 수 있다.

### 클립보드로 내보내기 — 마크다운 예시
- `pandas.io.clipboards`의 `to_clipboard`를 이용하면 DataFrame을 시스템 클립보드에 복사할 수 있다.
- `df.to_clipboard(excel=False)`처럼 **`excel=False`를 지정하고 마크다운 형식으로 변환**하면, 마크다운 문서에 바로 붙여넣을 수 있는 테이블이 클립보드에 담긴다.
- 이 기능을 쓰려면 `tabulate`라는 의존성이 추가로 필요할 수 있다 — 설치되어 있지 않으면 에러 메시지로 안내됨.

## 예시
```python
import pandas as pd

df = pd.read_csv("world_championship_qualifiers.csv")

df.to_csv("export.csv")
df.to_excel("export.xlsx")
df.to_parquet("export.parquet")
df.to_html("dataset.html")

# 마크다운 형식으로 클립보드에 복사
df.to_clipboard(excel=False)
```

## 요약
- 로딩이 `pd.read_*()`로 라이브러리에서 시작하는 것과 달리, 쓰기는 `df.to_*()`로 DataFrame 자체에서 시작한다.
- Pandas는 CSV/Excel/Parquet/HTML/클립보드(마크다운 포함) 등 매우 다양한 형식으로 데이터를 내보낼 수 있을 만큼 유연하다.
