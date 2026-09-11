# Scikit-learn Machine Learning Ecosystem

## 개요
- 강좌: Machine Learning with Python
- 모듈: Introduction to Machine Learning
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/xFs7h/scikit-learn-machine-learning-ecosystem)
- 또한 Scikit-learn 라이브러리의 기능과 작동 방식을 설명할 수 있습니다.
- 사용자가 음악을 재생 및 다운로드하고, 음악 파일을 공유하고, 재생 목록을 만들 수 있는 음악 스트리밍 앱을 개발했다고 가정해 보겠습니다.

## 내용
### 핵심 내용
- 또한 Scikit-learn 라이브러리의 기능과 작동 방식을 설명할 수 있습니다.
- 사용자가 음악을 재생 및 다운로드하고, 음악 파일을 공유하고, 재생 목록을 만들 수 있는 음악 스트리밍 앱을 개발했다고 가정해 보겠습니다.
- 데이터 정리, 스케일링, 특징 선택 및 특징 추출, 학습 또는 테스트 분할, 모델 설정 및 피팅, 교차 검증을 통한 하이퍼파라미터 조정, 예측, 평가, 프로덕션에 사용할 모델 내보내기와 같은 데이터 전처리 작업을 포함하여 머신러닝 파이프라인에서 수행해야 하는 대부분의 작업이 이미 scikit-learn에 구현되어 있습니다.
- 모델 clf를 초기화한 후 학습 데이터를 기반으로 모델을 학습시킬 수 있습니다.
- 테스트 세트의 예측 레이블과 실제 레이블을 비교하기 위한 혼동 행렬과 같은 다양한 메트릭을 사용하여 모델 정확도를 평가할 수도 있습니다.
- 마지막으로 scikit-learn 라이브러리를 사용하여 기본적인 기계 학습 워크플로를 배웠습니다.

### 한국어 Transcript

Scikit-Learn 머신러닝 에코시스템에 오신 것을 환영합니다. 이 비디오를 보고 나면 머신 러닝 생태계를 설명할 수 있을 것입니다. 또한 Scikit-learn 라이브러리의 기능과 작동 방식을 설명할 수 있습니다. 사용자가 음악을 재생 및 다운로드하고, 음악 파일을 공유하고, 재생 목록을 만들 수 있는 음악 스트리밍 앱을 개발했다고 가정해 보겠습니다. 앱 사용자층을 늘리기 위해 사용자가 재생하는 노래, 노래를 듣는 시간, 건너뛰는 노래 등 사용자의 청취 습관에 대한 정보를 수집합니다.

정보를 수집한 후에는 일치하지 않는 데이터, 누락된 값, 이상값을 찾아 정보를 정규화해야 합니다. 기계 학습 도구는 이러한 유형의 정보를 생성할 수 있습니다. 데이터 수집, 전처리, 모델 학습, 모델 평가, 모델 배포 및 모니터링에 유용합니다. 머신러닝, 즉 ML 에코시스템은 머신러닝 모델의 개발, 배포, 관리를 지원하는 상호 연결된 도구, 프레임워크, 라이브러리, 플랫폼 및 프로세스를 말합니다. Python은 기계 학습을 위한 다양한 도구와 라이브러리를 제공합니다.

여러 오픈 소스 Python 라이브러리는 기계 학습에 가장 널리 사용되는 에코시스템 중 하나로 구성됩니다. NumPy는 대규모 다차원 데이터 배열에 대한 효율적인 수치 계산을 통해 기본적인 기계 학습 지원을 제공합니다. NumPy와 Matplotlib을 기반으로 구축된 Pandas는 머신 러닝을 위한 데이터 분석, 시각화, 정리 및 데이터 준비에 사용됩니다. Pandas는 데이터 프레임이라는 다목적 배열을 사용하여 데이터를 처리합니다. NumPy를 기반으로 구축된 SciPy는 과학 컴퓨팅에 사용되며 최적화, 통합, 선형 회귀 등을 위한 모듈을 제공합니다.

Matplotlib은 NumPy를 기반으로 구축되었으며 광범위하고 고도로 사용자 정의 가능한 시각화 도구 세트를 제공합니다. NumPy, SciPy 및 Matplotlib을 기반으로 구축된 Scikit-Learn은 클래식 머신 러닝 모델을 구축하는 데 사용됩니다. scikit-learn에 대해 자세히 살펴보겠습니다. Scikit-learn은 파이썬 프로그래밍 언어를 위한 무료 기계 학습 라이브러리입니다. 분류, 회귀, 클러스터링 및 차원 축소 알고리즘에 대한 광범위한 최신 선택이 있습니다.

파이썬 수치 및 과학 라이브러리 NumPy 및 SciPy와 함께 작동하도록 설계되었습니다. 훌륭한 문서와 대규모 커뮤니티 지원 네트워크가 있습니다. Scikit-learn은 수천 명의 커뮤니티의 기여로 끊임없이 발전하고 있으며 Pandas만이 이를 능가합니다. scikit-learn으로 머신 러닝 모델을 구현하는 것은 파이썬 코드 몇 줄만으로 쉽습니다. 데이터 정리, 스케일링, 특징 선택 및 특징 추출, 학습 또는 테스트 분할, 모델 설정 및 피팅, 교차 검증을 통한 하이퍼파라미터 조정, 예측, 평가, 프로덕션에 사용할 모델 내보내기와 같은 데이터 전처리 작업을 포함하여 머신러닝 파이프라인에서 수행해야 하는 대부분의 작업이 이미 scikit-learn에 구현되어 있습니다.

다음은 scikit-learn 라이브러리를 사용하는 기본 기계 학습 워크플로의 예입니다. 데이터 세트 X와 목표 변수 Y가 모두 NumPy 배열로 저장되어 있다고 가정해 보겠습니다. Scikit-learn의 전처리 패키지는 모델링용 데이터를 준비하는 데 도움이 되는 몇 가지 일반적인 유틸리티 함수와 변환기 클래스를 제공합니다. 예를 들어, 이 첫 번째 코드 블록은 데이터를 표준화하여 데이터를 확장합니다. 지도 학습에서는 데이터 세트를 학습 세트와 테스트 세트로 분할하여 모델을 학습시킨 다음 모델의 정확도를 개별적으로 테스트하려고 합니다.

Scikit-learn은 단 한 줄의 코드로 배열과 행렬을 무작위 기차 및 테스트 하위 집합으로 분할할 수 있습니다. 여기서 데이터의 33% 는 테스트용으로 예약되어 있습니다. 다음으로, 서포트 벡터 분류 알고리즘을 사용하여 분류기 모델을 인스턴스화할 수 있습니다. 이 코드 줄은 clf라는 분류 모델 객체를 생성하고 매개 변수인 gamma 및 C를 초기화합니다. 모델 clf를 초기화한 후 학습 데이터를 기반으로 모델을 학습시킬 수 있습니다.

clf 모델은 훈련 세트를 fit 메서드에 전달하여 알 수 없는 경우에 대한 클래스를 예측하는 방법을 학습합니다. 그런 다음 테스트 데이터를 사용하여 예측을 생성할 수 있습니다. 결과는 테스트 세트의 각 관측치에 대한 예측 클래스를 알려줍니다. 테스트 세트의 예측 레이블과 실제 레이블을 비교하기 위한 혼동 행렬과 같은 다양한 메트릭을 사용하여 모델 정확도를 평가할 수도 있습니다. 마지막으로 모델을 피클 파일로 저장하고 언제든지 검색할 수 있습니다.

이 비디오에서는 머신러닝 에코시스템이 머신러닝 모델의 개발, 배포, 관리를 지원하는 상호 연결된 도구, 프레임워크, 라이브러리, 플랫폼 및 프로세스를 의미한다는 것을 배웠습니다. NumPy, Pandas, SciPy, Matplotlib 및 scikit-learn과 같은 여러 파이썬 도구와 라이브러리를 사용합니다. Scikit-learn은 분류, 회귀, 클러스터링 및 차원 축소 알고리즘을 사용하는 Python용 무료 기계 학습 라이브러리입니다. 머신 러닝 파이프라인에 필요한 대부분의 테스트는 이미 scikit-learn에 구현되어 있습니다. 마지막으로 scikit-learn 라이브러리를 사용하여 기본적인 기계 학습 워크플로를 배웠습니다.

## 예시
- scikit-learn으로 머신 러닝 모델을 구현하는 것은 파이썬 코드 몇 줄만으로 쉽습니다.
- 예를 들어, 이 첫 번째 코드 블록은 데이터를 표준화하여 데이터를 확장합니다.
- Scikit-learn은 단 한 줄의 코드로 배열과 행렬을 무작위 기차 및 테스트 하위 집합으로 분할할 수 있습니다.
- 이 코드 줄은 clf라는 분류 모델 객체를 생성하고 매개 변수인 gamma 및 C를 초기화합니다.

## 요약
- 모델 clf를 초기화한 후 학습 데이터를 기반으로 모델을 학습시킬 수 있습니다.
- 테스트 세트의 예측 레이블과 실제 레이블을 비교하기 위한 혼동 행렬과 같은 다양한 메트릭을 사용하여 모델 정확도를 평가할 수도 있습니다.
- 마지막으로 scikit-learn 라이브러리를 사용하여 기본적인 기계 학습 워크플로를 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Scikit-Learn Machine Learning Ecosystem. After watching this video, you will be able to describe the machine learning ecosystem. You will also be able to explain the features of the scikit-Learn library and how it works. Imagine you developed a music streaming app that allows users to play and download music, share music files, and create playlists. To increase your app's user base, you collect information on your users' listening habits, such as what songs they play, how long they listen to songs, and which songs they skip.

Once you've collected the information, you want to normalize it by finding inconsistent data, missing values, and outliers. Machine learning tools can generate this type of information. They are useful for data collection, preprocessing, model training, model evaluation, model deployment, and monitoring. The machine learning, or ML ecosystem, refers to the interconnected tools, frameworks, libraries, platforms, and processes that support developing, deploying, and managing machine learning models. Python offers a wide variety of tools and libraries for machine learning.

Several open-sourced Python libraries comprise one of the most widely used ecosystems for machine learning. NumPy provides foundational machine learning support with its efficient numerical computations on large multidimensional data arrays. Pandas, built on NumPy and Matplotlib, is used for data analysis, visualization, cleaning, and preparing data for machine learning. Pandas uses versatile arrays called data frames to handle data. SciPy, built on NumPy, is used for scientific computing and has modules for optimization, integration, linear regression, and more.

Matplotlib is built on NumPy and has an extensive, highly customizable set of visualization tools. Scikit-learn, built on NumPy, SciPy, and Matplotlib, is used for building classical machine learning models. Let's take a closer look at scikit-learn. Scikit-learn is a free machine learning library for the Python programming language. It has a wide, up-to-date selection of classification, regression, clustering, and dimensionality reduction algorithms.

It's designed to work with the Python numerical and scientific libraries NumPy and SciPy. It has excellent documentation and a large community support network. Scikit-learn is constantly evolving with contributions from a community of thousands and is exceeded only by Pandas. Implementing machine learning models with scikit-learn is easy, with just a few lines of Python code. Most of the tasks that need to be done in a machine learning pipeline are already implemented in scikit-learn, including data preprocessing tasks like data cleaning, scaling, feature selection and feature extraction, train or test splitting, model setup and fitting, hyperparameter tuning with cross-validation, prediction, evaluation, and exporting the model to be used in production.

Here's an example of a basic machine learning workflow using the scikit-learn library. Consider a data set X and a target variable Y, both stored as NumPy arrays. Scikit-learn's pre-processing package provides several common utility functions and transformer classes to help you prepare data for modeling. For instance, this first code block scales your data by standardizing it. In supervised learning, you want to split your data set into train and test sets to train your model and then test the model's accuracy separately.

Scikit-learn can split arrays and matrices into random train and test subsets for you in one line of code. Here, 33% of the data is reserved for testing. Next, you can instantiate a classifier model using a support vector classification algorithm. This line of code generates a classification model object, called clf, and initializes its parameters, gamma and C. After initializing your model clf, you can train your model on the training data.

The clf model learns to predict the classes for unknown cases by passing the training set to the fit method. Then you can use the test data to generate predictions. The result tells you the predicted class for each observation in the test set. You can also use different metrics to evaluate your model accuracy, such as a confusion matrix to compare the predicted and actual labels for the test set. And finally, you can save your model as a pickle file and retrieve it whenever you like.

In this video, you have learned that a machine learning ecosystem refers to the interconnected tools, frameworks, libraries, platforms, and processes that support developing, deploying, and managing machine learning models. It uses several Python tools and libraries, such as NumPy, Pandas, SciPy, Matplotlib, and scikit-learn. Scikit-learn is a free machine learning library for Python that uses classification, regression, clustering, and dimensionality reduction algorithms. Most tests required in a machine learning pipeline are already implemented in scikit-learn. Finally, you learned the basic machine learning workflow using the scikit-learn library.

</details>
