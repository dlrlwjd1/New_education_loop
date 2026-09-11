# Grid Search

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Evaluation and Refinement
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/e4fyg/grid-search)
- [음악] 그리드 검색을 사용하면 몇 줄의 코드로 여러 개의 무료 매개변수를 스캔할 수 있습니다.
- 이전 비디오에서 설명한 알파 용어와 같은 파라미터는 피팅 또는 트레이닝 프로세스의 일부가 아니며, 이러한 값을 하이퍼파라미터라고 합니다.

## 내용
### 핵심 내용
- [음악] 그리드 검색을 사용하면 몇 줄의 코드로 여러 개의 무료 매개변수를 스캔할 수 있습니다.
- 이전 비디오에서 설명한 알파 용어와 같은 파라미터는 피팅 또는 트레이닝 프로세스의 일부가 아니며, 이러한 값을 하이퍼파라미터라고 합니다.
- 그리드 검색은 학습시키려는 모델 또는 객체와 다양한 하이퍼파라미터 값을 가져옵니다.
- 이것은 다양한 자유 매개 변수 값이 있는 테이블로 볼 수 있으며 개체 또는 모델도 있습니다.
- 사전에는 다양한 자유 매개 변수 값이 포함되어 있으므로 자유 매개 변수에 가장 적합한 값을 찾을 수 있습니다.
- 다양한 자유 매개변수 값에 대한 점수를 출력할 수 있습니다.

### 한국어 Transcript

[음악] 그리드 검색을 사용하면 몇 줄의 코드로 여러 개의 무료 매개변수를 스캔할 수 있습니다. 이전 비디오에서 설명한 알파 용어와 같은 파라미터는 피팅 또는 트레이닝 프로세스의 일부가 아니며, 이러한 값을 하이퍼파라미터라고 합니다. SciKit-Learn에는 교차 검증을 사용하여 이러한 하이퍼파라미터를 자동으로 반복하는 방법이 있습니다. 이 방법을 그리드 검색이라고 합니다. 그리드 검색은 학습시키려는 모델 또는 객체와 다양한 하이퍼파라미터 값을 가져옵니다.

그런 다음 다양한 하이퍼파라미터 값에 대한 평균 제곱 오차 또는 r 제곱을 계산하여 최적의 값을 선택할 수 있도록 합니다. 작은 원이 서로 다른 하이퍼파라미터를 나타낸다고 가정해 보겠습니다. 하이퍼파라미터 값 하나부터 시작하여 모델을 학습시킵니다. 다양한 하이퍼파라미터를 사용하여 모델을 학습시킵니다. 다양한 자유 파라미터 값을 모두 사용할 때까지 프로세스를 계속합니다.

각 모델에서 오류가 발생하므로 오류를 최소화하는 하이퍼파라미터를 선택합니다. 하이퍼파라미터를 선택하기 위해 데이터 세트를 훈련 세트, 검증 세트, 테스트 세트의 세 부분으로 나눕니다. 다양한 하이퍼파라미터에 대해 모델을 훈련시키고, 각 모델에 대해 r 제곱 오차 또는 평균 제곱 오차를 사용합니다. 검증 세트의 평균 제곱 오차를 최소화하거나 r 제곱을 최대화하는 하이퍼파라미터를 선택합니다. 마지막으로 테스트 데이터를 사용하여 모델 성능을 테스트합니다.

이것은 객체 생성자 매개변수가 제공되는 Scikit-Learn 웹 페이지입니다. 참고로 객체의 속성은 매개변수라고도 합니다. 옵션 중 일부는 그 자체로 하이퍼파라미터가 아니더라도 구분하지는 않겠습니다. 이 모듈에서는 하이퍼파라미터 알파와 정규화 파라미터에 초점을 맞출 것입니다 . 그리드 검색의 값은 Python 사전이 포함된 Python 목록이고 키는 사용 가능한 매개 변수의 이름입니다.

사전의 값은 자유 매개 변수의 다양한 값입니다. 이것은 다양한 자유 매개 변수 값이 있는 테이블로 볼 수 있으며 개체 또는 모델도 있습니다. 그리드 검색은 스코어링 방식 (이 경우에는 r 제곱, 폴드 수, 모델 또는 개체, 자유 매개변수 값) 을 사용합니다. 일부 출력에는 자유 매개변수 값마다 다른 점수가 포함됩니다. 이 경우 r은 점수가 가장 높은 자유 매개변수 값과 함께 제곱됩니다.

먼저 매개 변수 값 사전인 Grid Search CV를 포함하여 필요한 라이브러리를 가져옵니다. 릿지 회귀 개체 또는 모델을 만든 다음 GridSearchCV 개체를 만듭니다. 입력값은 릿지 회귀 개체, 매개변수 값, 접기 수입니다. r 제곱을 사용하겠는데, 이것이 기본 점수 매기기 방법입니다. 객체를 피팅하고, 속성 최적 추정기를 사용하여 자유 매개변수에 가장 적합한 값을 찾을 수 있습니다.

또한 속성 CV 결과를 사용하여 검증 데이터의 평균 점수와 같은 정보를 얻을 수 있습니다. 그리드 검색의 장점 중 하나는 여러 매개변수를 빠르게 테스트할 수 있다는 것입니다. 예를 들어, 릿지 회귀에는 데이터를 정규화할 수 있는 옵션이 있습니다. 표준화 방법을 보려면 모듈 4를 참조하십시오. 알파라는 용어는 사전의 첫 번째 요소이고, 두 번째 요소는 정규화 옵션입니다.

키는 매개 변수의 이름이고, 이 경우 값은 다양한 옵션입니다. 데이터를 정규화할 수도 있고 그렇지 않을 수도 있기 때문입니다. 값은 각각 true 또는 false입니다. 사전은 서로 다른 두 값을 포함하는 테이블 또는 그리드입니다. 이전과 마찬가지로 릿지 회귀 객체 또는 모델이 필요합니다.

이 절차는 서로 다른 매개변수 값으로 구성된 표 또는 그리드가 있다는 점을 제외하면 비슷합니다. 출력은 매개 변수 값의 다양한 조합에 대한 점수이며 코드도 비슷합니다. 사전에는 다양한 자유 매개 변수 값이 포함되어 있으므로 자유 매개 변수에 가장 적합한 값을 찾을 수 있습니다. 다양한 자유 매개변수의 결과 점수는 이 사전인 Grid1. 다양한 자유 매개변수 값에 대한 점수를 출력할 수 있습니다.

매개변수 값은 여기에 표시된 대로 저장됩니다. 더 많은 예를 보려면 교육 과정 실습을 참조하십시오.

## 예시
- [음악] 그리드 검색을 사용하면 몇 줄의 코드로 여러 개의 무료 매개변수를 스캔할 수 있습니다.
- 예를 들어, 릿지 회귀에는 데이터를 정규화할 수 있는 옵션이 있습니다.
- 출력은 매개 변수 값의 다양한 조합에 대한 점수이며 코드도 비슷합니다.
- 더 많은 예를 보려면 교육 과정 실습을 참조하십시오.

## 요약
- 이것은 다양한 자유 매개 변수 값이 있는 테이블로 볼 수 있으며 개체 또는 모델도 있습니다.
- 사전에는 다양한 자유 매개 변수 값이 포함되어 있으므로 자유 매개 변수에 가장 적합한 값을 찾을 수 있습니다.
- 다양한 자유 매개변수 값에 대한 점수를 출력할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Grid Search allows us to scan through multiple free parameters with few lines of code. Parameters like the alpha term discussed in the previous video are not part of the fitting or training process, these values are called hyperparameters. Scikit-learn has a means of automatically iterating over these hyperparameters using cross-validation. This method is called Grid Search. Grid Search takes the model or objects you would like to train and different values of the hyperparameters.

It then calculates the mean square error or r squared for various hyperparameter values, allowing you to choose the best values. Let the small circles represent different hyperparameters. We start off with one value for hyperparameters and train the model. We use different hyperparameters to train the model. We continue the process until we have exhausted the different free parameter values.

Each model produces an error, we select the hyperparameter that minimizes the error. To select the hyperparameter, we split our data set into three parts, the training set, validation set and test set. We train the model for different hyperparameters, we use the r squared or mean squared error for each model. We select the hyperparameter that minimizes the mean squared error or maximizes the r squared on the validation set. We finally test our model performance using the test data.

This is the Scikit-learn webpage where the object constructor parameters are given. It should be noted that the attributes of an object are also called parameters. We will not make the distinction even though some of the options are not hyperparameters per se. In this module, we will focus on the hyperparameter alpha and the normalization parameter. The value of your grid search is a Python list that contains a Python dictionary, the key is the name of the free parameter.

The value of the dictionary is the different values of the free parameter. This can be viewed as a table with various free parameter values, we also have the object or model. The Grid Search takes on the scoring method, in this case r squared, the number of folds, the model or object, and the free parameter values. Some of the outputs include the different scores for different free parameter values. In this case, the r squared along with the free parameter values that have the best score.

First, we import the libraries we need, including Grid Search CV, the dictionary of parameter values. We create a ridge regression object or model, we then create a GridSearchCV object. The inputs are the ridge regression object, the parameter values and the number of folds. We will use r squared, this is the default scoring method. We fit the object, we can find the best values for the free parameters using the attribute best estimator.

We can also get information like the mean score on the validation data using the attribute CV result. One of the advantages of Grid Search is how quickly we can test multiple parameters. For example, ridge regression has the option to normalize the data, to see how to standardize, see Module 4. The term alpha is the first element in the dictionary, the second element is the normalize option. The key is the name of the parameter, the value is the different options in this case, because we can either normalize the data or not.

The values are true or false, respectively. The dictionary is a table or grid that contains two different values. As before, we need the ridge regression object or model. The procedure is similar except that we have a table or grid of different parameter values. The output is the score for all the different combinations of parameter values, the code is also similar.

The dictionary contains the different free parameter values, we can find the best value for the free parameters. The resulting scores of the different free parameters are stored in this dictionary, Grid1. We can print out the score for the different free parameter values. The parameter values are stored as shown here, see the course labs for more examples.

</details>
