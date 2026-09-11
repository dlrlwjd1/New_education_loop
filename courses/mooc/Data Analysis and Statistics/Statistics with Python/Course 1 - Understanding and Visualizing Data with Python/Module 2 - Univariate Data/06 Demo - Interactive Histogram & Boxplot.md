# Demo: Interactive Histogram & Boxplot

## 개요
- 박스플롯(boxplot)과 히스토그램(histogram)을 살펴보는 인터랙티브 온라인 앱 데모다.
- 기본 데이터셋(자동차 데이터)으로 수치 요약·박스플롯·히스토그램을 확인하고, 범주형 변수로 패싯(facet)해 그룹 간 비교를 한다.
- 자신의 데이터(예: Iris 데이터셋)를 업로드해 같은 분석을 즉시 수행할 수 있다.

## 내용

### 앱 기본 사용법 — 자동차 데이터셋
앱에서는 Upload User Data로 자기 데이터를 올릴 수도 있지만, 데모에서는 먼저 기본 데이터셋(Default Dataset)인 자동차 데이터를 사용한다. 수십 대의 자동차에 대해 연비(miles per gallon), 차 무게(weight), 배기량(displacement), 실린더 수(cylinders) 등의 변수가 들어 있다.

- Use Default Dataset을 클릭하고 Update Plots를 누르면 수치 요약(numerical summaries)이 나타난다: 다섯 수 요약(five number summary), 평균, 표본 크기 32, 표준편차 6.07.
- 그 아래에 현재 변수(연비, miles per gallon)의 박스플롯과 히스토그램이 표시된다.
- 변수를 무게(WT, weight)로 바꾸고 Update Plots를 다시 클릭하면 수치 요약·박스플롯·히스토그램이 무게 기준으로 갱신된다.

### 패싯(facet) 기능 — 범주형 변수로 그룹 비교
이 앱의 좋은 기능은 범주형 변수(categorical variable)로 데이터를 패싯해 그룹 간 비교를 할 수 있다는 것이다.

- 실린더 수(cylinders: 4, 6, 8)로 패싯하고 Update Plots를 누르면 박스플롯 3개, 히스토그램 3개, 수치 요약 3개가 나온다.
- 박스플롯에서 4기통 차가 6기통보다, 6기통이 8기통보다 연비가 좋은 경향을 볼 수 있으며, 히스토그램도 같은 경향을 보여 준다.
- 구간(bin) 크기도 바꿀 수 있다. bin 수를 줄이면 각 bin이 더 넓어진다. 변경 후에는 항상 좌측 하단의 Update Plots를 클릭한다.
- 변수를 마력(horsepower)으로 바꾸면 반대 경향이 나타난다. 실린더가 많을수록 마력이 높아, 8기통이 가장 높고 4기통이 꽤 낮다.

### 사용자 데이터 업로드 — Iris 데이터셋
Browse를 클릭해 Iris 데이터셋을 선택하고 Upload User Data를 누르면 앱이 범주형 변수와 수치형 변수를 읽어 들인다.

- Iris 데이터셋은 꽃 데이터로, 겉모습이 비슷하지만 성질이 다른 세 종(species)의 꽃 — setosa, versicolor, virginica — 이 들어 있다. 변수는 Sepal.Length, Sepal.Width, Petal.Length, Petal.Width다.
- 먼저 전체 150송이(표본 크기 150)에 대해 Sepal.Length의 박스플롯과 히스토그램을 그린다.
- 이어서 종(species)으로 패싯하면 세 종이 상당히 다른 분포를 보이며, 이것이 어떤 종의 꽃인지 판별할 수 있는 근거가 된다.
- 변수를 Petal Length로 바꾸면 setosa는 꽃잎 길이가 매우 짧고, versicolor와 virginica는 훨씬 긴 것을 볼 수 있다.

이 앱의 장점은 자신의 데이터셋을 올려 수치 요약과 박스플롯으로 데이터에 대한 즉각적인 감(instant feel)을 얻을 수 있고, 보유한 범주형 변수로 패싯까지 할 수 있다는 점이다.

## 요약
- 인터랙티브 앱으로 변수 하나의 수치 요약, 박스플롯, 히스토그램을 한 번에 확인할 수 있다.
- 범주형 변수로 패싯(facet)하면 그룹별 박스플롯·히스토그램·수치 요약이 나란히 생성되어 비교가 쉽다.
- 자동차 데이터: 실린더 수가 적을수록 연비가 좋고, 많을수록 마력이 높다.
- Iris 데이터: 종별로 Sepal/Petal 치수 분포가 뚜렷이 달라 종 판별에 쓸 수 있다.
- 자신의 데이터를 업로드해 같은 분석을 즉시 수행할 수 있다.
