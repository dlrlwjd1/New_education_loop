# Ticks & Spines

## 개요
- **눈금(ticks)** 과 **경계선(spines)** 등 플롯 축을 커스터마이즈한다.
- 플롯을 변수 **ax**(axes)에 저장하면 축·경계선 등 세부 요소에 접근할 수 있다.

## 내용

### 눈금 라벨 회전 — plt.xticks()
- `plt.xticks(rotation=0)` — x축 라벨을 수평으로.

### ax 패턴
- 플롯 메서드 결과를 **ax** 변수에 저장(관례) → 플롯 세부에 접근·수정.

### 보조 눈금 — AutoMinorLocator
- `from matplotlib.ticker import AutoMinorLocator` (특정 항목만 임포트).
- `ax.yaxis.set_minor_locator(AutoMinorLocator(2))` — 각 주 눈금을 2등분한 보조 눈금.
  - set(변경) + minor(보조 눈금) + locator(위치 지정).
- 보조 눈금에 그리드: `plt.grid(which="both")` (주·보조 모두).

### 경계선 제거 — spines
- `ax.spines["top"].set_visible(False)` — 상단 경계선 제거(left·right·bottom도 동일).
- 눈금 제거: `ax.yaxis.set_ticks([])` (빈 리스트). → 미니멀한 깔끔한 플롯.

## 예시

### 눈금·경계선
```python
plt.xticks(rotation=0)
from matplotlib.ticker import AutoMinorLocator
ax.yaxis.set_minor_locator(AutoMinorLocator(2))
plt.grid(which="both")
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
ax.yaxis.set_ticks([])
```

## 요약
- **plt.xticks(rotation=)** 로 라벨 회전, 플롯을 **ax** 에 저장해 세부 요소에 접근한다.
- **AutoMinorLocator** 로 보조 눈금을, **ax.spines[...].set_visible(False)** 로 경계선을 제거한다.
- 더 복잡한 플롯엔 데이터 **재구조화(reshaping)** 가 필요하다. 다음 강의는 그룹 열 차트다.
