# Plotting with Matplotlib

## 개요
- **Matplotlib** 은 Python의 대표 시각화 라이브러리 — 제목·주석·색·축 범위·라벨 등 **맞춤(customization)** 에 강하다.
- 관례: `import matplotlib.pyplot as plt`. pandas 기본 플롯에 층을 쌓아 향상시킨다.

## 내용

### 구성 요소
- **Figure(그림)**: 그림을 그리는 캔버스(하나 이상의 플롯을 담는 컨테이너).
- **Axes(축=플롯)**: 각 플롯. 라벨·데이터·범례·그리드 등 자체 요소를 가짐.
- `.plot`·`.scatter`·`.hist` 등으로 축(차트)을 만들고, 제목·축 라벨·주석·범례 함수로 요소를 얹음.

### 예시 — P2P 대출 등급
- `df = pd.read_csv("loan_data.csv")`. 대출 등급 A~G(A가 최저 위험·최저 금리).
- `df["grade"].value_counts().plot(kind="bar")` → 빈도 막대(B 최다, E·F·G 희소).
- **정렬**: 등급은 순서가 있으므로 `.sort_index()`(값이 아닌 **인덱스** 기준 정렬) → `sorted_grades = df["grade"].value_counts().sort_index()` → A~G 순 막대.

### Matplotlib으로 향상
- `import matplotlib.pyplot as plt`.
- 기존 차트에 층 추가: `plt.title(...)`, `plt.xlabel(...)`, `plt.ylabel(...)`(빈 문자열 ""로 라벨 제거).
- **plt.show()**: 플롯을 명시적으로 표시. 부수효과 ① Jupyter의 여분 출력(예 "Text...") 숨김, ② 현재 플롯 표시 후 메모리에서 지움 → 한 셀에 여러 플롯 가능. 각 플롯 후 사용 습관 권장.

## 예시

### Matplotlib 플롯
```python
import matplotlib.pyplot as plt
sorted_grades = df["grade"].value_counts().sort_index()
sorted_grades.plot(kind="bar")
plt.title("Frequency of loans by grade")
plt.xlabel("")
plt.ylabel("Frequency")
plt.show()
```

## 요약
- **Matplotlib**(`import matplotlib.pyplot as plt`)은 pandas 플롯에 제목·축 라벨 등을 층으로 얹어 맞춤 시각화를 만든다.
- 순서 있는 값은 **.sort_index()** 로 정렬하고, **plt.show()** 로 표시·정리한다.
- pandas는 빠른 차트, Matplotlib은 커스터마이즈에 강하다. 다음 강의는 열 차트 향상이다.
