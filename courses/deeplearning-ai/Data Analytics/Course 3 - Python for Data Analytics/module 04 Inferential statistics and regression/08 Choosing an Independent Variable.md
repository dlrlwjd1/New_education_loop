# Choosing an Independent Variable

## 개요
- 단순 선형 회귀의 첫 단계 — 종속 변수(price)를 예측할 **가장 좋은 독립 변수** 선택.
- **상관·산점도·pairplot** 으로 예측력을 평가한다.

## 내용

### 후보 탐색
- 수치 열 후보(carat·depth·table·x·y·z) + 종속 변수 price를 리스트로 선택.
- **sns.pairplot(df[cols])**: price 행을 보면 depth·table은 관계 약함(선이 거의 수직), carat·x·y·z는 증가 시 price 증가 → 후보.

### 상관으로 정량화
- `df[cols].corr()` — price 행 집중. x·y·z도 강하지만 **carat이 가장 강함**(price 변동의 약 92% 설명).

### 산점도로 상세 확인
- `plt.scatter(df["carat"], df["price"], ...)` (독립 변수 carat이 x축).
- 관계가 **비선형**(곡선이 직선보다 더 잘 맞음). 그래도 선형 상관이 강해 선형 회귀로 꽤 정확히 모델링 가능(더 정교한 방법도 있으나 좋은 출발점).

## 예시

### 독립 변수 선택
```python
cols = ["carat", "depth", "table", "x", "y", "z", "price"]
sns.pairplot(df[cols])       # 시각적 탐색
df[cols].corr()              # price 행 → carat 최강 (0.92)
plt.scatter(df["carat"], df["price"], alpha=0.5, marker=".")  # 상세
```

## 요약
- **pairplot·상관표(·히트맵)** 로 종속 변수와 가장 강하게 상관된 독립 변수를 고른다(여기선 carat, 0.92).
- 관계가 비선형이어도 선형 상관이 강하면 선형 회귀가 좋은 출발점이다.
- 다음 강의는 선택한 변수로 회귀 모델을 **학습**한다.
