# Seaborn Pairplot

## 개요
- **pairplot** 은 데이터의 특성들 간 관계를 한 번에 여러 플롯으로 보여준다: `sns.pairplot(df)`.
- 특성 쌍마다 **산점도**, 대각선엔 각 특성의 **히스토그램**을 그린다.

## 내용

### pairplot
- 관심 특성 부분집합 선택 후 `sns.pairplot(filter_df)` → 모든 쌍의 산점도 + 대각선 히스토그램.
- 예: loan amount·annual income·interest rate·paid interest. 관계 탐색·부록(appendix)용으로 유용.

### 전체 제목 — plt.suptitle
- `plt.suptitle("...", y=1)` — 개별 축이 아닌 **전체 figure** 제목(supertitle). y=1 이상으로 위로 이동.

### 참고
- 여러 플롯 유형이 섞여 색·선 스타일 등 개별 커스터마이즈 옵션은 제한적 → LLM으로 추가 서식 탐색.
- savefig로 저장.

## 예시

### pairplot
```python
cols = ["loan amount", "annual income", "interest rate", "paid interest"]
sns.pairplot(df[cols])
plt.suptitle("Pairplot of key features", y=1)
plt.savefig("pairplot.png")
plt.show()
```

## 요약
- **sns.pairplot(df)** 는 특성 쌍마다 산점도, 대각선엔 히스토그램을 그려 관계를 한눈에 탐색한다.
- **plt.suptitle(y=)** 로 전체 제목을 추가하며, 개별 커스터마이즈는 제한적이다.
- 이로써 Module 3(시각화: pandas·Matplotlib·Seaborn)을 마친다. 다음 모듈은 **추론 통계·선형 회귀**다.
