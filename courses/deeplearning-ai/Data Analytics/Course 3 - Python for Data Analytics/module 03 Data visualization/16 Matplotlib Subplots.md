# Matplotlib Subplots

## 개요
- **서브플롯(subplot)** 으로 여러 플롯을 한 이미지(figure)에 배치한다 — `plt.subplot(행, 열, 위치)`.
- Matplotlib으로 빈 격자를 만들고 Seaborn 플롯으로 채운다.

## 내용

### 준비
- figure는 캔버스 → `plt.figure(figsize=(15, 5))` (플롯당 ~5×5인치, 1행 3개면 너비 15).

### plt.subplot(행, 열, 위치)
- 3개 인수: **행 수·열 수·현재 만드는 플롯 번호**. 플롯 생성 **직전**에 호출해 위치 지정.
- 예: `plt.subplot(1, 3, 1)` → 1행 3열 중 첫 번째. `plt.subplot(2, 3, 4)` → 2행 3열 중 두 번째 행 첫 번째.
- 이후 평소처럼 플롯 생성(Seaborn+Matplotlib 조합).

### 예시 (신용 한도별 이자, 등급 세분화)
```
plt.figure(figsize=(15, 5))
plt.subplot(1, 3, 1); sns.barplot(df[df["open credit lines"]==1], hue="grade", y="paid interest", palette="RdYlGn_r")
plt.subplot(1, 3, 2); sns.barplot(df[df["open credit lines"]==2], ...)
plt.subplot(1, 3, 3); sns.barplot(df[df["open credit lines"]==3], ...)
plt.savefig("credit_lines_plots.png")
```

### 참고
- 복수형 **plt.subplots()**(옵션 더 많음)는 LLM으로 탐색. 반복 코드는 **루프**와 결합 시 강력.

## 요약
- **plt.figure(figsize=)** 로 캔버스를 만들고 **plt.subplot(행, 열, 위치)** 로 각 플롯을 배치한다.
- subplot을 플롯 생성 직전에 호출하며, 값별로 유사한 플롯을 나란히 배치할 때 유용하다.
- 반복 코드는 **루프**와 결합하면 강력하다 — 다음 강의.
