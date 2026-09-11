# Python Packages for Data Science

## 개요
- 강좌: Data Analysis with Python
- 모듈: Importing Data Sets
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/l4Gjq/python-packages-for-data-science)
- Python에서 데이터 분석을 수행하려면 먼저 Python의 분석과 관련된 주요 패키지에 대해 조금 설명해야 합니다.
- Python 라이브러리는 코드를 작성하지 않고도 많은 작업을 수행할 수 있는 함수와 메서드의 모음입니다.

## 내용
### 핵심 내용
- Python에서 데이터 분석을 수행하려면 먼저 Python의 분석과 관련된 주요 패키지에 대해 조금 설명해야 합니다.
- Python 라이브러리는 코드를 작성하지 않고도 많은 작업을 수행할 수 있는 함수와 메서드의 모음입니다.
- 라이브러리에는 일반적으로 직접 사용할 수 있는 다양한 기능을 제공하는 내장 모듈이 포함되어 있습니다.
- SciPy에는 이 슬라이드에 나열된 일부 고급 수학 문제에 대한 함수와 데이터 시각화가 포함되어 있습니다.
- Scikit-learn 라이브러리에는 회귀, 분류, 클러스터링 등을 포함한 통계 모델링을 위한 도구가 포함되어 있습니다.
- Statsmodels는 사용자가 데이터를 탐색하고, 통계 모델을 추정하고, 통계 테스트를 수행할 수 있는 Python 모듈이기도 합니다.

### 한국어 Transcript

Python에서 데이터 분석을 수행하려면 먼저 Python의 분석과 관련된 주요 패키지에 대해 조금 설명해야 합니다. Python 라이브러리는 코드를 작성하지 않고도 많은 작업을 수행할 수 있는 함수와 메서드의 모음입니다. 라이브러리에는 일반적으로 직접 사용할 수 있는 다양한 기능을 제공하는 내장 모듈이 포함되어 있습니다. 광범위한 기능을 제공하는 광범위한 라이브러리가 있습니다. Python 데이터 분석 라이브러리를 세 그룹으로 나누었습니다.

첫 번째 그룹은 과학 컴퓨팅 라이브러리라고 합니다. Pandas는 효과적인 데이터 조작 및 분석을 위한 데이터 구조 및 도구를 제공합니다. 이를 통해 정형 데이터에 빠르게 액세스할 수 있습니다. Pandas의 기본 도구는 열과 행 레이블로 구성된 2차원 테이블이며, 이를 데이터 프레임이라고 합니다. 간편한 인덱싱 기능을 제공하도록 설계되었습니다.

NumPy 라이브러리는 입력 및 출력에 배열을 사용합니다. 행렬의 객체까지 확장할 수 있으며, 코딩을 조금만 변경하면 개발자가 빠른 배열 처리를 수행할 수 있습니다. SciPy에는 이 슬라이드에 나열된 일부 고급 수학 문제에 대한 함수와 데이터 시각화가 포함되어 있습니다. 데이터 시각화 방법을 사용하는 것이 다른 사람들과 소통하고 의미 있는 분석 결과를 보여주는 가장 좋은 방법입니다. 이러한 라이브러리를 사용하여 그래프, 차트, 지도를 만들 수 있습니다.

Matplotlib lib 패키지는 가장 잘 알려진 데이터 시각화 라이브러리입니다. 그래프와 플롯을 만드는 데 아주 좋습니다. 또한 그래프는 고도로 사용자 정의할 수 있습니다. 또 다른 고급 시각화 라이브러리는 Seaborn입니다. 히트 맵, 시계열, 바이올린 플롯과 같은 다양한 플롯을 생성하는 것은 매우 쉽습니다.

기계 학습 알고리즘을 사용하면 데이터 세트를 사용하여 모델을 개발하고 예측을 얻을 수 있습니다. 알고리즘 라이브러리는 기본적인 것부터 복잡한 것까지 일부 기계 학습 작업을 다룹니다. 여기서는 두 가지 패키지를 소개합니다. Scikit-learn 라이브러리에는 회귀, 분류, 클러스터링 등을 포함한 통계 모델링을 위한 도구가 포함되어 있습니다. 이 라이브러리는 NumPy, SciPy 및 Matplotlib를 기반으로 구축되었습니다.

Statsmodels는 사용자가 데이터를 탐색하고, 통계 모델을 추정하고, 통계 테스트를 수행할 수 있는 Python 모듈이기도 합니다.

## 예시
- Python 라이브러리는 코드를 작성하지 않고도 많은 작업을 수행할 수 있는 함수와 메서드의 모음입니다.

## 요약
- SciPy에는 이 슬라이드에 나열된 일부 고급 수학 문제에 대한 함수와 데이터 시각화가 포함되어 있습니다.
- Scikit-learn 라이브러리에는 회귀, 분류, 클러스터링 등을 포함한 통계 모델링을 위한 도구가 포함되어 있습니다.
- Statsmodels는 사용자가 데이터를 탐색하고, 통계 모델을 추정하고, 통계 테스트를 수행할 수 있는 Python 모듈이기도 합니다.

<details>
<summary>영문 Transcript 원문</summary>

In order to do data analysis in Python, we should first tell you a little bit about the main packages relevant to analysis in Python. A Python library is a collection of functions and methods that allow you to perform lots of actions without writing any code. The libraries usually contain built-in modules providing different functionalities which you can use directly. There are extensive libraries offering a broad range of facilities. We have divided the Python data analysis libraries into three groups.

The first group is called Scientific Computing Libraries. Pandas offers data structure and tools for effective data manipulation and analysis. It provides fast access to structured data. The primary instrument of Pandas is a two dimensional table consisting of column and row labels, which are called a data frame. It is designed to provide easy indexing functionality.

The NumPy library uses arrays for its inputs and outputs. It can be extended to objects for matrices, and with minor coding changes, developers can perform fast array processing. SciPy includes functions for some advanced math problems as listed on this slide, as well as data visualization. Using data visualization methods is the best way to communicate with others, showing the meaningful results of analysis. These libraries enable you to create graphs, charts, and maps.

The Matplotlib lib package is the most well-known library for data visualization. It is great for making graphs and plots. The graphs are also highly customizable. Another high-level visualization library is Seaborn. It is based on Matplotlib.

It's very easy to generate various plots, such as heat maps, time series, and violin plots. With machine learning algorithms, we're able to develop a model using our data set and obtain predictions. The algorithmic libraries tackle some machine learning tasks from basic too complex. Here we introduce two packages. The Scikit-learn library contains tools, for statistical modeling, including regression, classification, clustering, and so on.

This library is built on NumPy, SciPy, and Matplotlib. Statsmodels is also a Python module that allows users to explore data, estimate statistical models, and perform statistical tests.

</details>
