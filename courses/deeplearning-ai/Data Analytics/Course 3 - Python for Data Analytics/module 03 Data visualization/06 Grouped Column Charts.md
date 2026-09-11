# Grouped Column Charts

## 개요
- **그룹 열 차트(grouped column chart)** 는 수치 특성을 여러 범주형 특성에 걸쳐 비교한다.
- 필터 → 두 특성 groupby → 집계 → **unstack** → plot의 순으로 데이터를 준비한다.

## 내용

### 데이터 준비 단계 (주별·등급별 평균 대출액)
1. **필터**: `filter_df = df[df["state"].isin(states)]` — **isin** 은 리스트 안에 있으면 True(예: DC·Alaska·Hawaii).
2. **groupby 두 특성**: `filter_df.groupby(["state", "grade"])` — 리스트로 두 열.
3. **집계**: `["loan amount"].mean()` → 결과는 **멀티인덱스(multi-index)** 시리즈(state+grade).
4. **unstack**: `.unstack()` — 두 번째 인덱스(grade)를 **열로** 이동 → 단일 인덱스(state)로. (조합 없으면 NA)
5. **plot**: `.plot(kind="bar")` — 인덱스별로 자동 그룹화된 열 차트.

### 차트 향상
- 제목·축 라벨·`plt.xticks(rotation=0)`.
- **범례를 밖으로**: `plt.legend(title="Grade", bbox_to_anchor=(1, 1))` — bbox는 범례 상자 위치(0~1 좌표, (1,1)=우측 밖).
- 색·그리드 적용. savefig로 저장.

### 해석
- Hawaii는 크지만 고위험 대출, Alaska·DC는 저위험 중심 등 주별 패턴 차이. DC의 A등급 평균이 높아 수익 전략 시사.

## 예시

### 그룹 열 차트
```python
filter_df = df[df["state"].isin(["DC", "Alaska", "Hawaii"])]
grouped = filter_df.groupby(["state", "grade"])["loan amount"].mean()
grouped.unstack().plot(kind="bar")   # 멀티인덱스 → unstack → 그룹 차트
plt.legend(title="Grade", bbox_to_anchor=(1, 1))
```

## 요약
- **그룹 열 차트**는 필터 → **groupby(두 열)** → 집계(멀티인덱스) → **unstack** → plot 순으로 만든다.
- **unstack** 은 두 번째 인덱스를 열로 옮겨(pivot 유사) 그룹화된 차트를 가능하게 한다.
- **legend(bbox_to_anchor=)** 로 범례를 밖으로 뺀다. 다음 강의는 **누적 열 차트**다.
