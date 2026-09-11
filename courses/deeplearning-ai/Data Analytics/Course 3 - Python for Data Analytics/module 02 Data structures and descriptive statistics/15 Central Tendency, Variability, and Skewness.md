# Central Tendency, Variability, and Skewness

## 개요
- 수치 특성의 기술 통계를 pandas 메서드로 계산: **.mean()·.median()·.std()·.var()·.quantile()·.skew()**.
- **.describe()** 로 여러 통계를 한 번에, 시리즈·데이터프레임 모두에 적용한다.

## 내용

### 개별 통계 메서드
- `hours.mean()` ≈ 15(주당, np.float64), `hours.median()` = 10 (양의 왜도라 평균이 꼬리 쪽으로 당겨짐), `hours.std()` ≈ 14.
- 대부분 **인수 없이** 시리즈에 직접 호출.

### 분위수 — .quantile()
- **quartile이 아니라 quantile** (오류 시 LLM으로 수정). `hours.quantile(0.25)` 등.
- 리스트로 여러 개 동시: `hours.quantile([0.25, 0.5, 0.75])` → 시리즈 반환(예: 5, 10, 20).

### .describe()
- `hours.describe()` → count·mean·std·min·max·분위수(median 포함) 한 번에.
- **왜도는 미포함** → `hours.skew()` (스프레드시트 skew와 동일 해석, ≈2면 강한 양의 왜도).
- `df.describe()` → 모든 **수치** 특성의 통계 표(범주형은 제외 — 표준편차 계산 불가).

## 예시

### 기술 통계 메서드
```python
hours.mean()      hours.median()    hours.std()
hours.var()       hours.skew()      hours.min()  hours.max()
hours.quantile([0.25, 0.5, 0.75])   # 여러 분위수
hours.describe()  # 여러 통계 한 번에
df.describe()     # 전체 수치 열
```

## 요약
- **.mean·.median·.std·.var·.skew·.quantile** 등으로 개별 기술 통계를, **.describe()** 로 한 번에 계산한다.
- 분위수는 **.quantile()**(quartile 아님), 왜도는 **.skew()**(describe 미포함)를 쓴다.
- 시리즈·데이터프레임 모두 지원. 다음 강의는 **범주형 데이터**다.
