# Colors, Grids, & Saving Plots

## 개요
- **color** 인수로 차트 색을, **plt.grid()** 로 그리드를, **plt.savefig()** 로 이미지 저장을 한다.
- 색·그리드는 가독성을 높이고, savefig로 보고서용 이미지를 만든다.

## 내용

### 색 — color 인수
- `.plot(kind="bar", color="purple")` — 인수가 많으면 줄마다 나눠 씀.
- 값: **16진 코드(hex)** 또는 **HTML 색 이름**(salmon, deep pink 등, HTMLColorCodes.com).
- **색 리스트**로 막대별 색 지정 → **그라디언트**(초록→빨강)로 이중 부호화(double encoding). LLM으로 색 리스트 생성 가능.

### 그리드 — plt.grid()
- `plt.grid(axis="y")` — y축 그리드만(기본 "both"). 막대 색·라벨이 있으면 x축 그리드는 불필요.
- 커스터마이즈: `color="black"`, `alpha=0.7`(투명도), `linestyle="--"`(대시).

### 저장 — plt.savefig()
- `plt.savefig("lone_column_chart.png")` — 파일명(확장자로 형식 지정: png·jpeg·svg·pdf 등). 노트북과 같은 위치에 저장.

## 예시

### 색·그리드·저장
```python
sorted_grades.plot(kind="bar", color=colors)   # 색 리스트(그라디언트)
plt.grid(axis="y", color="black", alpha=0.7, linestyle="--")
plt.savefig("lone_column_chart.png")           # 이미지 저장
```

## 요약
- **color** 인수(hex·HTML 이름·리스트)로 색을, **plt.grid(axis=, ...)** 로 그리드를 추가해 가독성을 높인다.
- **plt.savefig("파일.확장자")** 로 차트를 이미지(png·pdf 등)로 저장한다.
- 다음 강의는 텍스트 가독성과 주석(annotation)이다.
