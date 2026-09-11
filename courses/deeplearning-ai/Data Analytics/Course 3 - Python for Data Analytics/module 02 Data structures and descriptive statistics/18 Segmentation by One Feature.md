# Segmentation by One Feature

## 개요
- **세분화(segmentation)** 는 한 특성 기준으로 다른 특성의 패턴을 본다. pandas의 **groupby** 메서드로 수행한다.
- groupby는 데이터를 그룹으로 나눌 뿐, **열 선택 + 집계 함수**를 적용해야 결과가 나온다.

## 내용

### groupby
- 예: 자녀 수별 코딩 학습 시간 차이. 두 열이 필요하므로 **데이터프레임**에서 시작.
- `group_by_children = df.groupby("number of children")` — 자녀 수 값으로 데이터를 하위 집합으로 분할.
- 이것만으론 결과 없음(pandas groupby 객체) — 아직 계산 안 함.

### 열 선택 + 집계
- groupby 결과에서 **관심 열 선택 + 집계 함수**:
  - `df.groupby("number of children")["hours..."].count()` → 그룹별 개수(자녀 1명 ~1000명 등, 4명 초과는 희소).
  - `.mean()` → 그룹별 평균(자녀 1명 14.1시간, 2명 12.4시간 …). 표본 적은 그룹은 신뢰도 낮음.

### 정리
- groupby 결과는 데이터프레임이 아닌 **groupby 객체**(유사한 면 있음). 열 선택 후 count·sum·mean 등으로 그룹별 요약.

## 예시

### groupby 세분화
```python
df.groupby("number of children")["hours"].count()   # 그룹별 개수
df.groupby("number of children")["hours"].mean()    # 그룹별 평균
```

## 요약
- **세분화**는 **groupby("열")** 로 데이터를 그룹으로 나눈 뒤 **열 선택 + 집계(count·mean 등)** 로 요약한다.
- groupby 자체는 계산하지 않으며, 집계 함수를 적용해야 결과가 나온다.
- 여러 특성으로 세분화하려면 **피벗 테이블**을 쓴다 — 다음 강의.
