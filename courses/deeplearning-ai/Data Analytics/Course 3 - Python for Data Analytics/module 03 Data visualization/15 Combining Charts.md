# Combining Charts

## 개요
- 여러 플롯을 **같은 축에 겹쳐(overlay)** 그릴 수 있다 — 같은 figure에 플롯 함수를 연달아 호출한다.
- 집계 플롯(히스토그램·박스플롯)에 개별값 플롯(러그·스트립)을 겹쳐 보완한다.

## 내용

### 러그 플롯 (rug plot)
- 히스토그램은 구간 내 개별값을 가림 → **러그 플롯(sns.rugplot)** 으로 개별값을 축 밑에 표시(집계+개별 동시).
- `sns.histplot(df, x="loan amount")` 다음 줄에 `sns.rugplot(df, x="loan amount", color="mediumseagreen")` 로 겹침. (보완 색은 LLM에 문의 가능)

### 스트립 플롯 (strip plot)
- 박스플롯 + **스트립 플롯**으로 같은 효과(개별 점). 예: 등급별 대출액 — A~D는 관측 많고 E~G는 적음.

### 히스토그램 겹치기 (분포 비교)
- 두 그룹 필터 후 히스토그램 두 개를 같은 figure에: `a_only = df[df["grade"]=="A"]`, `d_only = df[df["grade"]=="D"]` → histplot 두 번.
- 주의: y축 한계가 다르면 비교 어려움.

## 예시

### 차트 겹치기
```python
sns.histplot(df, x="loan amount")
sns.rugplot(df, x="loan amount", color="mediumseagreen")  # 겹침
# 분포 비교
sns.histplot(a_only, x="loan amount", color="red")
sns.histplot(d_only, x="loan amount")   # 같은 축에 겹침
plt.show()
```

## 요약
- 같은 figure에 플롯 함수를 연달아 호출하면 **차트가 겹쳐진다**.
- **러그/스트립 플롯**으로 히스토그램·박스플롯에 개별값을 보완하고, 히스토그램을 겹쳐 분포를 비교한다.
- 과하지 않게 절제한다. 다음 강의는 여러 플롯을 한 이미지에 배치(subplots)한다.
