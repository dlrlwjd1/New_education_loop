# Stacked Column Charts

## 개요
- **누적 열 차트(stacked column chart)** 는 각 범주 **내 구성(composition)** 을 비교한다 — `.plot(kind="bar", stacked=True)`.
- 그룹 차트와 준비 단계가 거의 같고(groupby → 집계 → unstack) `stacked=True` 만 추가한다.

## 내용

### 준비와 생성 (등급별·주택소유 상태별 총 대출액)
- 한 줄로: `df.groupby(["grade", "homeownership"])["loan amount"].sum().unstack()`.
  - **sum** 사용(비율 비교 목적, mean 대신). unstack으로 행=등급·열=주택소유.
- `.plot(kind="bar", stacked=True)` → 누적 열 차트. (대부분 mortgage, own이 최소)

### 향상
- 제목·라벨·색(임차인 강조)·`xticks(rotation=0)`·y축 그리드. 범례 title 대문자화. (이 플롯은 범례 이동 불필요)

### 100% 누적 차트
- 각 열 높이를 동일하게(비율) → 직접 비교 쉬움. 복잡하므로 LLM에 요청("proportion을 y축에, 각 열 같은 높이로").
- 범례는 이전처럼 `bbox_to_anchor=(1,1)` 로 밖으로.
- 해석: 임차인 비율이 A·B 등급엔 일정, C·D·E에서 증가 → 등급별 담보 특성 인사이트.

## 예시

### 누적 열 차트
```python
data = df.groupby(["grade", "homeownership"])["loan amount"].sum().unstack()
data.plot(kind="bar", stacked=True)   # 누적
plt.legend(title="Homeownership", bbox_to_anchor=(1, 1))
```

## 요약
- **누적 열 차트**는 `.plot(kind="bar", stacked=True)` 로 만들며 범주 내 구성 비교에 적합하다(집계엔 sum).
- 준비 단계(groupby→집계→unstack)는 그룹 차트와 같고, **100% 누적**은 LLM으로 만든다.
- 다음 강의는 **산점도(scatter plots)** 다.
