# Pandas

## 개요
- **pandas** 는 데이터 분석의 핵심 모듈(2008년 작성). 데이터 애널리스트가 매일 쓰는 강력한 자료 구조·기능을 제공한다.
- 두 기본 구조: **데이터프레임(DataFrame)**(표) 와 **시리즈(Series)**(리스트의 강화판).

## 내용

### pandas의 기능
- 대규모 데이터를 효율적으로 조작·정제·분석: 결측 처리, 정렬·필터·피벗, 병합·조인, 그룹·집계, 시계열 분석.
- **CSV·Excel·데이터베이스** 등 다양한 형식 가져오기 지원.
- (이름은 동물 판다와 무관)

### 임포트와 활용
- 관례: `import pandas as pd` (별칭 pd). 수십만 줄의 커뮤니티 코드를 빌려 씀.
- 예: `pd.unique(scores)` → 고유 점수 리스트(스프레드시트 unique 함수와 동일). 직접 짜면 루프+조건이 필요할 복잡한 작업을 함수 하나로 — "친구의 전동 공구를 빌리는 것".

## 예시

### pandas 임포트와 unique
```python
import pandas as pd
unique_scores = pd.unique(scores)   # 고유 값 리스트
```

## 요약
- **pandas**는 데이터 분석 핵심 모듈로, **DataFrame(표)·Series(강화 리스트)** 를 제공한다.
- 정렬·필터·피벗·병합·집계·시계열, CSV·Excel·DB 가져오기 등을 지원하며 `import pandas as pd` 로 쓴다.
- `pd.unique` 등 강력한 함수를 무료로 빌려 쓴다. 다음 강의는 **CSV 파일 읽기**다.
