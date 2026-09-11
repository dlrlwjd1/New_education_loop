# Histograms

## 개요
- **히스토그램(histogram)** 은 특성의 분포 시각화에 기본: `sns.histplot(df, x=)`.
- **bins/binwidth**(구간), **kde**(밀도 곡선) 등으로 커스터마이즈한다.

## 내용

### 기본 히스토그램
- `sns.histplot(df, x="loan amount")` + `plt.show()`. 예: 10,000·20,000·25,000 같은 **반올림 숫자**에 스파이크(대출 심리·수요 인사이트).
- 제목·x 라벨·그리드 추가, y 라벨 제거, `color="rosybrown"` 등.

### bins vs binwidth
- **bins=30**: 구간 개수. **binwidth=5000**: 구간 너비(해석 쉬움). **binwidth가 bins를 덮어씀** — 하나만 사용.

### 테마로 인한 문제
- binwidth 후 x축 눈금이 안 보임. LLM의 `xticks(visible=True)` 는 효과 없음 → **테마 설정** 때문.
- `sns.set_style("ticks")` 로 눈금 표시. (LLM만으론 못 고침 — Python·Seaborn·Matplotlib 지식 필요, 협업적)
- 해석 예: $5k~10k 대출이 $20k~25k보다 약 2배 흔함.

### 밀도 곡선 — kde
- `kde=True` → **커널 밀도 추정(Kernel Density Estimate)** 곡선 추가(분포의 상대 확률 밀도).

## 예시

### 히스토그램
```python
sns.set_style("ticks")   # 눈금 표시
sns.histplot(df, x="loan amount", binwidth=5000, color="rosybrown", kde=True)
plt.show()
```

## 요약
- **sns.histplot(df, x=)** 로 분포를 그리며 **bins**(개수) 또는 **binwidth**(너비, bins 덮어씀)로 구간을 조정한다.
- **kde=True** 로 밀도 곡선을 추가하고, 눈금 문제는 **테마 설정**(set_style)으로 해결한다.
- 핵심 차트(열·산점도·히스토그램)를 익혔다. 다음 강의는 Seaborn의 기타 차트다.
