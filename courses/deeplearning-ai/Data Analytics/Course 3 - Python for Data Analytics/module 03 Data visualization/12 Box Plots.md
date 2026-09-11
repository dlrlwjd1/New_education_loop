# Box Plots

## 개요
- **박스플롯(box plot)** 은 Seaborn으로 쉽게 생성: `sns.boxplot(df, x= 또는 y=)`.
- **despine**(경계선 제거), **hue**(색 분할), **figsize**(크기) 등으로 커스터마이즈한다.

## 내용

### 기본 박스플롯
- `sns.boxplot(df, x="interest rate")` → 수평, `y="interest rate"` → 수직(해석 차이 없음, 취향). 예: 금리 중앙값 ~12%.
- 제목·라벨 추가.

### despine
- `sns.despine()` — 기본으로 **우·상단** 경계선 제거. `bottom=True` 로 하단도 제거(True=제거, 직관과 반대). 단일 수직 박스플롯은 x축이 무의미해 유용. 데이터-잉크 비율↑.

### 세분화 — x + y
- `sns.boxplot(df, x="grade", y="interest rate")` → 등급별 금리 분포(A는 한 자리%, E·F·G는 20%대). 데이터 있는 축이므로 하단 spine 복원.

### 색 — palette / hue
- `palette="RdYlGn_r"` 지정 시 **FutureWarning**("palette without hue will be removed") — 오류 아님, 경고. `hue="grade"` 로 지정하면 해결(단 색+라벨 이중 부호화 상실 가능).

### 크기 — plt.figure(figsize=)
- 플롯 **전에** `plt.figure(figsize=(8, 6))` (너비·높이, 인치). 기본 6.4×4.8인치.

## 예시

### 박스플롯
```python
plt.figure(figsize=(8, 6))
sns.boxplot(df, x="grade", y="interest rate", palette="RdYlGn_r")
sns.despine()          # 우·상단 제거
plt.show()
```

## 요약
- **sns.boxplot(df, x=, y=)** 로 박스플롯을 그리며, x·y를 함께 주면 다른 변수로 세분화한다.
- **sns.despine()**(경계선 제거), **hue**(색), **plt.figure(figsize=)**(크기)로 커스터마이즈한다.
- **경고(warning)** 는 오류가 아니다. 다음 강의는 Seaborn **히스토그램**이다.
