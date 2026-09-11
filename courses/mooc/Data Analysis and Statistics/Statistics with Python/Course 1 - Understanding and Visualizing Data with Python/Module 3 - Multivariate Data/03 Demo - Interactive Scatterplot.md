# Demo: Interactive Scatterplot

## 개요
- 다변량 양적 데이터(multivariate quantitative data) 시각화와 상관계수(correlation) 이해를 돕는 인터랙티브 웹 앱 데모
- 기본 데이터셋 보기, 사용자 CSV 업로드, 지정한 상관계수로 데이터 생성이라는 세 가지 기능 시연

## 내용

### 앱 소개
- 코스에서 만든 웹 앱으로, 다변량 양적 데이터를 시각화하고 상관계수를 더 잘 이해하도록 돕는다.
- 웹사이트에 접속한 뒤 **bivariate plot 탭**에 있는지 확인하고 시작한다. 세 가지 주요 기능이 있다.

### 기능 1 — 기본 데이터셋(default dataset) 살펴보기
- 자동차의 무게(weight)와 연비(miles per gallon)를 비교하는 기본 데이터셋을 제공한다.
- `use default data set`을 클릭하면 각 변수의 히스토그램(histogram)과 miles per gallon 대 weight의 산점도(scatterplot)가 표시된다.
- 우측 상단의 `correlation`을 클릭하면 두 변수의 상관계수가 **-0.87**로 표시된다.

### 기능 2 — 자신의 데이터셋 업로드
- CSV 파일을 준비해 업로드할 수 있다. 데모에서는 나이(age)와 수축기 혈압(systolic blood pressure)이 담긴 CSV를 사용한다.
- 파일을 업로드하고 `use uploaded data set`을 클릭하면 systolic blood pressure 대 age의 히스토그램과 산점도가 나타난다.
- 이 그림은 강의 영상 "Looking at Associations with Multivariate Quantitative Data"에서 사용된 것과 같은 시각화다.
- 마찬가지로 두 변수의 상관계수 **0.58**을 확인할 수 있다.

### 기능 3 — 지정한 상관계수로 데이터셋 생성
- 기본 데이터셋을 **bivariate normal**로 바꾸고 `use default data set`을 클릭하면 상관계수 슬라이더(correlation slider)가 나타난다.
- 슬라이더가 0이면 상관계수가 0인 두 변수의 산점도가 그려진다.
- 중간 정도의 양의 상관(moderate positive correlation)을 원하면 슬라이더를 0.6으로 옮기고 다시 `use default data set`을 클릭한다.
- 그러면 양의 중간 선형 연관성(positive moderate linear association)을 보이는 산점도가 표시되고, 상관계수 0.6을 확인할 수 있다.

## 요약
- 인터랙티브 앱의 bivariate plot 탭에서 산점도·히스토그램·상관계수를 함께 볼 수 있다.
- 기본 데이터셋(자동차 무게 vs 연비)의 상관계수는 -0.87, 업로드한 나이 vs 수축기 혈압 데이터는 0.58이었다.
- bivariate normal 모드에서는 슬라이더로 원하는 상관계수를 지정해 데이터를 생성하고, 상관계수 값과 산점도 모양의 관계를 직접 실험할 수 있다.
