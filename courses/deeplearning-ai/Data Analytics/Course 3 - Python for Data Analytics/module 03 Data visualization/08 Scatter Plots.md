# Scatter Plots

## 개요
- **산점도(scatter plot)** 는 두 수치 특성 간 관계를 시각화한다: `plt.scatter(x, y)`.
- 마커(alpha·marker), 축 범위(xlim·ylim), 참조선(axvline·axhline)으로 커스터마이즈한다.

## 내용

### 기본 산점도
- 예: 연소득 vs 총 신용한도(상관 0.55). `plt.scatter(df["annual income"], df["total credit limit"])` + `plt.show()`.
- 제목·축 라벨 추가. 산점도는 대칭이라 순서 무관(첫 인수가 x축).

### 마커 조정
- **alpha=0.5**: 투명도 — 3천+ 점의 밀집 영역 확인(0 근처 조밀).
- **marker="^"**(삼각형), 기본은 원("o"), 데이터 많으면 점(".")이 가시성↑.

### 축 범위 — xlim/ylim
- `plt.xlim(0, 500000)` — x축 확대(이상치 제외). 
- 주의: 축이 **과학적 표기(1e6=100만)** 일 수 있음 → `xlim(0, 0.5)` 는 0~50센트라 빈 차트. 실제론 `xlim(0, 500000)`.
- `plt.ylim(...)` 로 y축도 동일.

### 참조선 — axvline/axhline
- 상위 5% 소득 컷오프: `top5 = df["annual income"].quantile(0.95)` (약 $170,000).
- `plt.axvline(x=top5, color="black", linestyle="--")` — 수직선. 수평선은 **plt.axhline**.

## 예시

### 산점도
```python
plt.scatter(df["annual income"], df["total credit limit"], alpha=0.5, marker=".")
plt.xlim(0, 500000)
top5 = df["annual income"].quantile(0.95)
plt.axvline(x=top5, color="black", linestyle="--")
plt.show()
```

## 요약
- **산점도**는 `plt.scatter(x, y)` 로 두 수치 관계를 그리며 **alpha·marker** 로 마커를 조정한다.
- **xlim/ylim** 으로 확대(과학적 표기 주의), **axvline/axhline** 으로 참조선을 긋는다.
- 산점도는 코드가 복잡할 수 있다. 다음 강의는 그 복잡성(**메서드 체이닝**)을 이해한다.
