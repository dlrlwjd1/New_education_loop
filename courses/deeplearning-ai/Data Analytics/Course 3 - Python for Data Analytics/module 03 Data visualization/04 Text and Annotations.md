# Text & Annotations

## 개요
- 텍스트 요소(title·xlabel·ylabel)는 **fontsize·fontweight·pad** 등으로 스타일링한다.
- **plt.annotate()** 로 그래프에 주석을 추가해 핵심 결론을 강조한다.

## 내용

### 텍스트 스타일
- `plt.title("...", fontsize=16, fontweight="bold", pad=15)` — 크기·굵기·**pad**(여백).
- `plt.ylabel("...", fontsize=14)` 등.

### 주석 — plt.annotate()
- `plt.annotate(text, xy=(x, y), ...)`:
  - **text**: 주석 텍스트(`\n`으로 줄바꿈).
  - **xy**: 가리킬 점 좌표(막대는 0-인덱스, E 열이면 x=4).
  - **xytext**: 텍스트 위치(점과 독립 이동). `xytext=(-10, 30)`.
  - **textcoords="offset points"**: xytext를 절대값이 아닌 **오프셋**(점 단위)으로 해석.
  - **arrowprops**: 화살표 속성(딕셔너리) — LLM으로 생성 가능("주석에서 점으로 검은 화살표").

### 막대 값 라벨
- 각 막대 위에 빈도 라벨 추가 — LLM에 "각 막대를 빈도로 라벨링" 요청(for 루프 + text 함수). 막대 높이 + 라벨로 **이중 부호화**.

## 예시

### 텍스트·주석
```python
plt.title("Frequency of loans by grade", fontsize=16, fontweight="bold", pad=15)
plt.annotate("Grade E and below\nare very high risk",
             xy=(4, 50), xytext=(-10, 30),
             textcoords="offset points",
             arrowprops={"arrowstyle": "->", "color": "black"})
```

## 요약
- 텍스트는 **fontsize·fontweight·pad** 로 스타일링한다.
- **plt.annotate(text, xy=, xytext=, textcoords="offset points", arrowprops=)** 로 주석·화살표를 추가한다.
- 막대 값 라벨은 LLM으로 쉽게 추가한다. 다음 강의는 축(ticks·spines) 커스터마이즈다.
