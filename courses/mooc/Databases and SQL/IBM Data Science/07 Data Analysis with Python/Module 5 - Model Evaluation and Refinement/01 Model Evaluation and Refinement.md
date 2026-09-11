# Model Evaluation and Refinement

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Evaluation and Refinement
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/izKyc/model-evaluation-and-refinement)
- 모델 평가를 통해 실제 세계에서 모델이 어떻게 작동하는지 알 수 있습니다.
- 이전 모듈에서는 샘플 내 평가에 대해 설명했습니다.

## 내용
### 핵심 내용
- 모델 평가를 통해 실제 세계에서 모델이 어떻게 작동하는지 알 수 있습니다.
- 이전 모듈에서는 샘플 내 평가에 대해 설명했습니다.
- 그런 다음 이 데이터를 사용하여 모델이 실제 세계에서 어떻게 작동하는지 대략적으로 파악할 수 있습니다.
- 테스트 데이터를 사용하여 모델이 실제 세계에서 어떻게 작동할지 파악합니다.
- 폴드 중 일부는 모델 학습에 사용하는 훈련 세트로 사용할 수 있고 나머지 부분은 모델을 테스트하는 데 사용하는 테스트 세트로 사용할 수 있습니다.
- 마지막으로 마지막 두 폴드를 학습에 사용한 다음 테스트 데이터를 사용합니다.

### 한국어 Transcript

모델 평가를 통해 실제 세계에서 모델이 어떻게 작동하는지 알 수 있습니다. 이전 모듈에서는 샘플 내 평가에 대해 설명했습니다. 표본 내 평가를 통해 모델을 학습시키기 위해 이미 제공된 데이터가 모형에 얼마나 잘 맞는지 알 수 있습니다. 학습된 모델이 새 데이터를 얼마나 잘 예측할 수 있는지를 추정할 수는 없습니다. 해결 방법은 데이터를 분할하여 샘플 내 데이터나 훈련 데이터를 사용하여 모델을 학습시키는 것입니다.

테스트 데이터라고 하는 나머지 데이터는 샘플 외 데이터로 사용됩니다. 그런 다음 이 데이터를 사용하여 모델이 실제 세계에서 어떻게 작동하는지 대략적으로 파악할 수 있습니다. 데이터를 학습 세트와 테스트 세트로 분리하는 것은 모델 평가의 중요한 부분입니다. 테스트 데이터를 사용하여 모델이 실제 세계에서 어떻게 작동할지 파악합니다. 데이터세트를 분할할 때는 일반적으로 데이터의 많은 부분이 학습에 사용되고 더 작은 부분은 테스트에 사용됩니다.

예를 들어, 데이터의 70% 를 학습에 사용할 수 있습니다. 그런 다음 30% 를 테스트에 사용합니다. 학습 세트를 사용하여 모델을 구축하고 예측 관계를 발견합니다. 그런 다음 테스트 세트를 사용하여 모델 성능을 평가합니다. 모델 테스트를 완료했으면 모든 데이터를 사용하여 모델을 학습시켜야 합니다.

Scikit-Learn 패키지에서 데이터 세트를 분할하는 데 많이 사용되는 함수는 train_test_split 함수입니다. 이 함수는 예제 코드 스니펫에서 데이터세트를 학습 및 테스트 하위 집합으로 무작위로 분할합니다. cross 유효성 검사에서 가져왔습니다. 입력 매개변수 y_data는 대상 변수입니다. 자동차 평가 예시에서는 가격이 표시되고 x_data는 예측 변수 목록입니다.

이 경우 가격을 예측하는 데 사용하는 것은 자동차 데이터셋의 다른 모든 변수입니다. 출력값은 x_train과 y_train이라는 배열입니다. x_test 훈련용 서브셋과 테스트용 서브셋 y_test입니다. 이 경우 테스트 크기는 테스트 세트 데이터의 백분율입니다. 랜덤 상태는 랜덤 데이터 세트 분할을 위한 랜덤 시드입니다.

일반화 오차는 이전에 볼 수 없었던 데이터를 데이터가 얼마나 잘 예측하는지를 나타내는 척도입니다. 테스트 데이터를 사용하여 얻은 오류는 이 오류의 근사치입니다. 이 그림은 파란색으로 표시된 선형 회귀의 예측값과 비교한 실제 값의 분포를 빨간색으로 표시합니다. 분포가 다소 비슷하다는 것을 알 수 있습니다. 테스트 데이터를 사용하여 동일한 그림을 생성하면 분포가 상대적으로 다르다는 것을 알 수 있습니다.

이 차이는 일반화 오류로 인한 것이며 실제 상황을 나타냅니다. 학습에 많은 데이터를 사용하면 모델이 실제 세계에서 얼마나 잘 수행될지 정확하게 결정할 수 있지만 성능의 정밀도는 떨어집니다. 예를 들어 이를 명확히 설명해 보겠습니다. 이 황소의 눈 중앙은 올바른 일반화 오류를 나타냅니다. 데이터의 90% 를 훈련용으로 사용하고 10% 를 테스트용으로 사용하여 무작위 데이터 표본을 추출한다고 가정해 보겠습니다.

처음 실험할 때 훈련 데이터를 잘 추정할 수 있습니다. 다른 샘플 조합으로 모델을 훈련시켜 다시 실험해 보면 좋은 결과를 얻을 수 있지만 실험을 처음 실행할 때와 비교했을 때 결과는 달라집니다. 훈련 샘플과 테스트 샘플을 다르게 조합하여 실험을 다시 반복하면 결과는 일반화 오차와 비교적 비슷하지만 서로 다른 결과를 얻을 수 있습니다. 이 과정을 반복하면 일반화 오차의 근사치는 양호하지만 정밀도가 떨어집니다. 즉, 모든 결과가 서로 매우 달랐습니다.

모델 학습에 사용할 데이터 포인트 수가 적고 모델을 테스트하는 데 더 많이 사용하면 일반화 성능의 정확도는 떨어지지만 모델의 정밀도는 향상됩니다. 모든 오차 추정치는 비교적 비슷하지만 실제 일반화 성능과는 거리가 멀습니다. 이 문제를 해결하기 위해 교차 검증을 사용합니다. 가장 일반적인 샘플 외 평가 지표 중 하나는 교차 검증입니다. 이 방법에서는 데이터세트를 k개의 동일한 그룹으로 분할합니다.

각 그룹을 폴드라고 합니다 (예: 4겹). 폴드 중 일부는 모델 학습에 사용하는 훈련 세트로 사용할 수 있고 나머지 부분은 모델을 테스트하는 데 사용하는 테스트 세트로 사용할 수 있습니다. 예를 들어, 세 번의 접기를 훈련에 사용한 다음 한 번 접기를 테스트에 사용할 수 있습니다. 이 과정은 각 파티션을 학습과 테스트에 모두 사용할 때까지 반복됩니다. 마지막에는 평균 결과를 표본 외 오차의 추정치로 사용합니다.

평가 지표는 모델에 따라 달라집니다. 교차 검증을 적용하는 가장 간단한 방법은 샘플 외 평가를 여러 번 수행하는 cross_val_score 함수를 호출하는 것입니다. 이 메서드는 sklearns 모델 선택 패키지에서 가져온 것입니다. 그런 다음 cross_val_score 함수를 사용합니다. 첫 번째 입력 매개변수는 교차 검증을 수행하는 데 사용하는 모델 유형입니다.

이 예제에서는 cross_val_score 함수에 전달한 선형 회귀 모델 또는 객체 lr을 초기화합니다. 다른 파라미터는 예측 변수 데이터인 x_data와 대상 변수 데이터인 y_data입니다. cv 파라미터로 파티션 수를 관리할 수 있습니다. 여기서 cv=3은 데이터 세트가 세 개의 동일한 파티션으로 분할됨을 의미합니다. 이 함수는 테스트 세트로 선택한 각 파티션당 하나씩 점수 배열을 반환합니다.

NumPy의 mean 함수를 사용하여 결과를 평균화하여 샘플 외 R^2를 추정할 수 있습니다. 마지막 슬라이드에서 점수 배열의 결과를 살펴보겠습니다. 먼저 데이터를 세 부분으로 나눕니다. 두 번의 폴드를 사용하여 나머지 폴드를 테스트용으로 트레이닝합니다. 모델은 결과를 산출하고, 우리는 그 결과를 사용하여 점수를 계산합니다.

R^2 (즉, 결정 계수) 의 경우 이 값을 배열에 저장하고, 두 번 폴드를 학습에 사용하고 한 번 폴드를 테스트에 사용하여 프로세스를 반복하고 점수를 저장한 다음 다른 조합을 트레이닝에 사용하고 나머지 폴드는 테스트에 사용합니다. cross_val_score 함수는 점수 값을 반환하여 교차 검증 결과를 알려줍니다. 좀 더 자세한 정보가 필요하다면 어떻게 해야 할까요? R^2 값을 계산하기 전에 모델이 제공하는 실제 예측값을 알고 싶다면 어떻게 해야 할까요? 이를 위해 cross_val_predict 함수를 사용합니다.

입력 매개변수는 cross_val_score 함수와 정확히 동일하지만 출력값은 예측입니다. 먼저 데이터를 세 부분으로 나눕니다. 두 개의 폴드는 학습에 사용하고 나머지 폴드는 테스트에 사용합니다. 모델은 출력을 생성하고 이를 배열에 저장합니다. 학습용으로 두 번, 테스트용으로 한 번 사용하여 프로세스를 반복합니다.

마지막으로 마지막 두 폴드를 학습에 사용한 다음 테스트 데이터를 사용합니다. 이 마지막 테스트 폴드는 출력을 생성합니다.

## 예시
- 예를 들어, 데이터의 70% 를 학습에 사용할 수 있습니다.
- 이 함수는 예제 코드 스니펫에서 데이터세트를 학습 및 테스트 하위 집합으로 무작위로 분할합니다.
- 자동차 평가 예시에서는 가격이 표시되고 x_data는 예측 변수 목록입니다.
- 예를 들어 이를 명확히 설명해 보겠습니다.

## 요약
- 테스트 데이터를 사용하여 모델이 실제 세계에서 어떻게 작동할지 파악합니다.
- 폴드 중 일부는 모델 학습에 사용하는 훈련 세트로 사용할 수 있고 나머지 부분은 모델을 테스트하는 데 사용하는 테스트 세트로 사용할 수 있습니다.
- 마지막으로 마지막 두 폴드를 학습에 사용한 다음 테스트 데이터를 사용합니다.

<details>
<summary>영문 Transcript 원문</summary>

Model evaluation tells us how our model performs in the real world. In the previous module, we talked about in-sample evaluation. In-sample evaluation tells us how well our model fits the data already given to train it. It does not give us an estimate of how well the trained model can predict new data. The solution is to split our data up, use the in-sample data or training data to train the model.

The rest of the data, called test data, is used as out-of-sample data. This data is then used to approximate how the model performs in the real world. Separating data into training and testing sets is an important part of model evaluation. We use the test data to get an idea how our model will perform in the real world. When we split a dataset, usually the larger portion of data is used for training and a smaller part is used for testing.

For example, we can use 70% of the data for training. We then use 30% for testing. We use training set to build a model and discover predictive relationships. We then use a testing set to evaluate model performance. When we have completed testing our model, we should use all the data to train the model.

A popular function in the Scikit-learn package for splitting datasets is the train_test_split function. This function randomly splits a dataset into training and testing subsets from the example code snippet. This method is imported from sklearn. The input parameters y_data is the target variable. In the car appraisal example it would be the price, and x_data, the list of predictor variables.

In this case, it would be all the other variables in the car dataset that we are using to try to predict the price. The output is an array, x_train and y_train. The subsets for training x_test, and y_test the subsets for testing. In this case, the test size is a percentage of the data for the testing set. The random state is a random seed for random data set splitting.

Generalization error is a measure of how well our data does a predicting previously unseen data. The error we obtain using our testing data is an approximation of this error. This figure shows the distribution of the actual values in red compared to the predicted values from a linear regression in blue. We see the distributions are somewhat similar. If we generate the same plot using the test data, we see the distributions are relatively different.

The difference is due to a generalization error and represents what we see in the real world. Using a lot of data for training gives us an accurate means of determining how well our model will perform in the real world, but the precision of the performance will be low. Let's clarify this with an example. The center of this bull's eye represents the correct generalization error. Let's say we take a random sample of the data using 90% of the data for training and 10% for testing.

The first time we experiment, we get a good estimate of the training data. If we experiment again, training the model with a different combination of samples, we also get a good result, but the results will be different relative to the first time we run the experiment. Repeating the experiment again with a different combination of training and testing samples, the results are relatively close to the generalization error, but distinct from each other. Repeating the process, we get good approximation of the generalization error, but the precision is poor, i. all the results were extremely different from one another.

If we use fewer data points to train the model and more to test the model, the accuracy of the generalization performance will be less, but the model will have good precision. The figure above demonstrates this. All our error estimates are relatively close together, but they are further away from the true generalization performance. To overcome this problem, we use cross validation. One of the most common out-of-sample evaluation metrics is cross validation.

In this method, the dataset is split into k equal groups. Each group is referred to as a fold, for example, four folds. Some of the folds can be used as a training set which we use to train the model, and the remaining parts are used as a test set which we use to test the model. For example, we can use three folds for training, then use one fold for testing. This is repeated until each partition is used for both training and testing.

At the end, we use the average results as the estimate of out-of-sample error. The evaluation metric depends on the model. For example, the R^2. The simplest way to apply cross validation is to call the cross_val_score, function which performs multiple out-of-sample evaluations. This method is imported from sklearns model selection package.

We then use the function cross_val_score. The first input parameter is the type of model we are using to do the cross validation. In this example, we initialize the linear regression model or object lr, which we passed the cross_val_score function. The other parameters are x_data, the predictor variable data, and y_data, the target variable data. We can manage the number of partitions with the cv parameter.

Here, cv=3, which means the data set is split into three equal partitions. The function returns an array of scores, one for each partition that was chosen as the testing set. We can average the result together to estimate out-of-sample R^2 using the mean function in NumPy. Let's see an animation. Let's see the result of the score array in the last slide.

First we split the data into three folds. We use two folds for training the remaining fold for testing. The model will produce an output, we will use the output to calculate a score. In the case of the R^2, i. coefficient of determination, we will store that value in an array, we will repeat the process using two folds for training and one fold for testing, save the score, then use a different combination for training and the remaining fold for testing.

We store the final result. The cross_val_score function returns the score value to tell us the cross validation result. What if we want a little more information? What if we want to know the actual predicted values supplied by our model before the R^2 values are calculated? To do this, we use the cross_val_predict function.

The input parameters are exactly the same as the cross_val_score function, but the output is a prediction. Let's illustrate the process. First, we split the data into three folds. We use two folds for training, the remaining fold for testing. The model will produce an output and we will store it in an array.

We will repeat the process using two folds for training, one for testing. The model produces an output again. Finally, we use the last two folds for training, then we use the testing data. This final testing fold produces an output. These predictions are stored in an array.

</details>
