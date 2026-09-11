# Loading Data into Pandas

## 개요
- Pandas가 얼마나 다양한 소스에서 데이터를 로드할 수 있는지(원격 URL, 로컬 CSV, JSON, Excel, 클립보드, XML/HTML 등)를 실습으로 보여준다. GitHub에서 원본(raw) CSV URL을 얻는 법도 함께 다룬다.

## 내용

### GitHub에서 원격 CSV 로드하기
- GitHub 저장소에 있는 CSV 파일을 바로 쓰려면, **"raw" 보기 링크의 URL을 복사**해야 한다 — 일반 저장소 페이지 URL은 HTML을 반환하므로 데이터로 쓸 수 없다.
- raw URL은 보통 `raw.githubusercontent.com` 도메인으로 바뀐다 — 이 URL이어야 실제 CSV 파일 내용을 받아올 수 있다.
- `pd.read_csv(url, index_col=0)`처럼 URL을 그대로 전달하면 원격 데이터를 바로 DataFrame으로 로드할 수 있다. `index_col=0`은 "0번째 열을 인덱스로 써라"는 의미(데이터에 이미 인덱스가 있는 경우).

### 로컬 CSV 로드
- 로컬 파일 시스템에 있는 CSV도 동일하게 `pd.read_csv("파일명.csv")`로 로드한다.

### 로컬 JSON 로드
- 같은 데이터를 JSON 형식으로 저장했다면 `pd.read_json("파일명.json")`으로 로드한다.
- **로드 후의 표현(representation)은 CSV든 JSON이든 동일** — Pandas가 내부적으로 표준화된 열/행/필드 뷰로 구성해주기 때문.

### 그 외 지원하는 포맷
- 클립보드(clipboard), Excel 스프레드시트, XML, HTML 등 매우 다양한 소스에서 로드할 수 있다.

### DataFrame 이름과 확인
- 관례적으로 변수명을 `df`로 줄여 쓰지만, 의미가 더 잘 드러나는 이름(예: `wine_ratings`)을 써도 된다.
- 로드 후 `print(df)`나 `df.head()`로 데이터가 잘 로드됐는지 확인한다.

## 예시
```python
import pandas as pd

# 원격 GitHub raw CSV
url = "https://raw.githubusercontent.com/user/repo/main/wine_ratings.csv"
df = pd.read_csv(url, index_col=0)
df.head()

# 로컬 CSV
df = pd.read_csv("world_championship_qualifiers.csv")

# 로컬 JSON (같은 데이터, 다른 포맷)
df = pd.read_json("world_championship_qualifiers.json")
```

## 요약
- Pandas는 원격 URL(GitHub raw 링크 포함), 로컬 CSV/JSON/Excel/XML/HTML, 클립보드 등 매우 다양한 소스에서 데이터를 로드할 수 있다.
- GitHub에서 로드할 때는 반드시 "raw" 형식의 URL(HTML이 아닌 실제 파일 내용)을 써야 한다.
