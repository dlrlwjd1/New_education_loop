# Looping with Subplots

## 개요
- **for 루프**로 서브플롯을 반복 생성하면 복사-붙여넣기 없이 수십 개 플롯을 몇 줄로 만든다.
- 복사-붙여넣기가 보이면 대개 **루프**로 대체할 수 있다.

## 내용

### 루프로 서브플롯
- 반복 코드에서 변하는 것: **서브플롯 위치 번호**와 **필터 값** → 둘 다 루프 변수 `i` 로.
- `for i in range(1, 4):` → i=1,2,3. 안에서 `plt.subplot(1, 3, i)` + `df[df["open credit lines"]==i]` 로 필터해 플롯.
- 결과는 동일하지만 코드가 10줄 → 5줄.

### 확장 (9개 플롯)
- `plt.figure(figsize=(15, 15))`, `for i in range(1, 10):`, `plt.subplot(3, 3, i)` → 3×3 격자 9개.
- 루프 안에 `plt.title(i)` 등 추가 가능. savefig로 한 번에 저장.

## 예시

### 루프 + 서브플롯
```python
plt.figure(figsize=(15, 15))
for i in range(1, 10):
    plt.subplot(3, 3, i)
    filter_df = df[df["open credit lines"] == i]
    sns.barplot(filter_df, hue="grade", y="paid interest", palette="RdYlGn_r")
    plt.title(i)
plt.savefig("nine_plots.png")
```

## 요약
- **for 루프**로 서브플롯을 반복 생성하며, 위치·필터 값을 루프 변수로 대체한다(`range(1, n+1)`).
- 복사-붙여넣기는 루프로 바꿔 효율·가독성을 높인다.
- 다음 강의는 Seaborn의 다중 플롯 도구 **pairplot**이다.
