# Introduction to Pandas

## 개요
- Pandas가 무엇인지(데이터 편집·로드·시각화·정제·조작 라이브러리), 설치 방법, `import pandas as pd`라는 임포트 별칭(import alias) 관례, 그리고 **DataFrame을 스프레드시트처럼 이해하는 법**을 다룬다.

## 내용

### Pandas란
- 데이터셋을 **편집, 로드, 시각화, 정제(clean), 조작(manipulate)**하는 매우 강력하고 널리 쓰이는 Python 라이브러리.
- **Python에 기본 내장되어 있지 않으므로 별도 설치가 필요**하다 — 항상 그렇듯 가상환경(venv)을 만들고 활성화한 뒤 `pip install pandas`로 설치.
- 설치 후에는 `requirements.txt`에 기록해두는 것을 습관화할 것.

### 임포트 관례 — `import pandas as pd`
- Pandas를 쓸 때는 거의 항상 `import pandas as pd`로 임포트한다 — 이를 **import alias(임포트 별칭)**라고 부른다: 무언가를 임포트하되 다른 이름으로 쓸 수 있게 하는 것.
- `pd`는 공식 문서를 포함해 거의 모든 튜토리얼에서 쓰는 사실상 표준 별칭.

### DataFrame — 스프레드시트처럼 생각하기
- Pandas는 흔히 "잠재적으로 다차원 배열(potentially multidimensional array)"이라고 설명되지만, **스프레드시트**를 떠올리면 이해하기 쉽다 — 열(column), 행(row), 셀(cell)이 있는 구조.
- 리스트의 리스트(예: 과일별 요일 수량 데이터)에 **컬럼 이름과 인덱스(행 이름)**를 지정해서 `pd.DataFrame(data, columns=[...], index=[...])`로 만들면, 정돈된 스프레드시트 형태의 표현이 만들어진다.
- **DataFrame이 Pandas에서 가장 핵심적으로 다루게 될 객체**다 (Series 같은 다른 옵션도 있지만 이 코스는 DataFrame 위주로 다룸).

## 예시
```python
import pandas as pd

data = [[3, 5, 2], [1, 4, 6], [2, 2, 3]]   # 리스트의 리스트
df = pd.DataFrame(
    data,
    columns=["apples", "bananas", "oranges"],
    index=["Monday", "Tuesday", "Wednesday"]
)
print(df)
```

## 요약
- Pandas는 데이터를 로드·정제·조작·시각화하는 라이브러리이며, `pip install pandas`로 설치 후 `import pandas as pd`로 임포트하는 것이 관례.
- DataFrame은 스프레드시트처럼 열/행/셀 구조로 데이터를 표현하는 Pandas의 핵심 객체.
