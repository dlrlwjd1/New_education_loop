# Key Terms — Analyzing and Visualizing Data for Machine Learning

## 개요
- Lesson 3("Analyzing and Visualizing Data for Machine Learning") 핵심 용어 정리. 기술 통계, 시각화, 정렬·필터링, 로그 성장, 클러스터링을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Descriptive statistics(기술 통계)** | 평균, 중앙값, 최댓값 같은 데이터를 요약하는 수치 지표. 이상치와 데이터 형태를 파악하는 데 도움. |
| **Visualization(시각화)** | 데이터로부터 관계와 패턴을 보여주는 그래프·플롯을 만드는 것. |
| **Sorting/Filtering(정렬/필터링)** | 정렬과 불리언 필터링을 사용해 값 기준으로 관련 데이터를 분리해 부분집합을 분석하는 것. |
| **Logarithmic growth(로그 성장)** | 시간이 지나며 점차 완만해지는 지수적 증가 패턴. 중요한 선행 지표. |
| **Clustering(클러스터링)** | k-평균(k-means) 같은 알고리즘으로 유사성에 기반해 다차원 데이터를 클러스터로 그룹화하는 것. |

## 예시
```python
df.describe()  # Pandas 요약 통계
```

```python
sns.scatterplot(data=df, x="cases", y="deaths")  # Seaborn 그래프
```

```python
df.sort_values("cases", ascending=False)  # 정렬해 분석
df[df["date"] > "2020-01-01"]              # 날짜로 필터링
```

```python
sns.lineplot(data=df, x="date", y="cases", log=True)  # 로그 스케일
```

```python
from sklearn.cluster import KMeans

kmeans = KMeans(3)
clusters = kmeans.fit_predict(data)
```

## 요약
- 이번 레슨은 기술 통계(`describe()`)와 시각화(Seaborn), 정렬·필터링으로 데이터 부분집합 분석, 로그 스케일로 지수적 성장 패턴 파악, KMeans 클러스터링까지 데이터 분석·시각화의 핵심 도구들을 다룬다.
