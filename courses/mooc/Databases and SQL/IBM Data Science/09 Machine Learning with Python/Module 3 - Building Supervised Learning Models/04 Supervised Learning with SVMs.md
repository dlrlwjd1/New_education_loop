# Supervised Learning with SVMs

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/x44ui/supervised-learning-with-svms)
- 서포트 벡터 머신 (SVM) 은 분류에 사용됩니다.
- 이 비디오를 시청한 후에는 SVM에 대해 설명하고, SVM용 Python 도구를 식별하고, SVM 애플리케이션에 대해 논의할 수 있습니다.

## 내용
### 핵심 내용
- 서포트 벡터 머신 (SVM) 은 분류에 사용됩니다.
- 이 비디오를 시청한 후에는 SVM에 대해 설명하고, SVM용 Python 도구를 식별하고, SVM 애플리케이션에 대해 논의할 수 있습니다.
- 서포트 벡터 머신 (SVM) 은 분류 및 회귀 모델을 구축하기 위한 지도 학습 기법입니다.
- SVM은 소프트 마진을 통합할 수 있어 마진을 극대화하는 동시에 오분류를 허용할 수 있습니다.
- 이 비디오에서는 서포트 벡터 머신 (SVM) 이 분류 및 회귀 모델을 구축하기 위한 지도 학습 기법이라는 것을 배웠습니다.
- Scikit-learn은 SVM과 함께 사용할 수 있는 선형, 다항식, RBF 및 시그모이드와 같은 다양한 커널 함수를 제공합니다.

### 한국어 Transcript

SVM을 통한 지도 학습에 오신 것을 환영합니다. 서포트 벡터 머신 (SVM) 은 분류에 사용됩니다. 이 비디오를 시청한 후에는 SVM에 대해 설명하고, SVM용 Python 도구를 식별하고, SVM 애플리케이션에 대해 논의할 수 있습니다. 서포트 벡터 머신 (SVM) 은 분류 및 회귀 모델을 구축하기 위한 지도 학습 기법입니다. 각 데이터 인스턴스를 다차원 공간의 한 지점으로 매핑합니다.

여기서 입력 특징은 특정 좌표의 값으로 표시됩니다. SVM은 두 클래스를 뚜렷하게 구분하는 초평면을 식별하여 입력 데이터를 분류합니다. 따라서 이러한 점은 데이터세트의 기본입니다. 두 가지 특징으로 구성된 분류 작업에서 초평면은 데이터세트를 분리하고 분류하는 선형 선입니다. 새 입력이 작업에 추가될 때마다 초평면의 어느 쪽에 착륙하느냐에 따라 분류가 달라집니다.

SVM의 주요 목표는 데이터 세트를 두 부분으로 분리하고 가장 큰 마진을 찾는 초평면을 만드는 것입니다. 이 예시에서 데이터셋은 빨간색 삼각형과 파란색 정사각형이라는 두 개의 클래스로 구성됩니다. 마진이 클수록 보이지 않는 새로운 데이터에 대한 모델의 정확도가 높아집니다. 실제 시나리오에서는 데이터에 노이즈가 많고 중복되는 경우가 많기 때문에 완벽한 분리가 불가능합니다. SVM은 소프트 마진을 통합할 수 있어 마진을 극대화하는 동시에 오분류를 허용할 수 있습니다.

마진 최대화와 오분류 횟수 최소화 사이의 균형은 매개변수 C에 의해 제어됩니다. C가 작을수록 오분류가 많아져 마진이 부드러워지고 C가 클수록 분리가 엄격해지고 마진이 더 어려워집니다. 기본 SVM은 이진 분류 머신 러닝 알고리즘입니다. 바이너리 SVM은 두 클래스를 선형으로 분리할 수 있다고 가정합니다. 그러나 회귀 문제를 해결하도록 SVM을 조정할 수도 있습니다.

SVM은 결정 경계를 찾아 데이터를 두 클래스로 나누려고 합니다. 예를 들어, 이 차트는 두 특징을 기반으로 하는 두 클래스를 빨간색과 파란색 데이터 포인트로 보여줍니다. 결정 경계는 마진을 최대화하는 초평면입니다. 2차원 특징 공간에서 결정 경계는 선입니다. 여백은 초평면에서 각 클래스의 가장 가까운 점까지의 거리입니다.

각 클래스의 가장 가까운 지점 표현자는 서포트 벡터입니다. 최적화 문제의 도출과 관련된 수학에 대해 자세히 설명하지 않고 이 2D 예제를 고려해 보십시오. 훈련 데이터를 사용하여 데이터가 정규화되었다고 가정할 때 목표는 가중치 벡터와 값 b (편향 항이라고 함) 를 구하여 A: w의 내적을 최소화하여 w의 길이를 최소화하고 B: 모든 관측값 또는 데이터 점 x와 목표값 y에 대해 전송된 x와 b를 더한 곱이 1보다 크거나 같도록 하는 것입니다. 따라서 알고리즘의 출력값은 선의 값인 w와 b입니다. 이 추정된 선을 사용하여 분류할 수 있습니다.

입력 값을 선 방정식에 추가하면 알 수 없는 점이 선 위에 있는지 아래에 있는지 계산할 수 있습니다. 방정식이 0보다 큰 값을 반환하면 점은 선 위에 있는 첫 번째 클래스에 속하며 그 반대의 경우도 마찬가지입니다. 비선형적으로 분리할 수 없는 클래스 쌍의 2D 객체를 생각해 보십시오. 2D 차트에서 볼 수 있듯이 동심원 모양을 가진 두 개의 겹치지 않는 클래스가 있습니다. 이 점들은 높이를 나타내는 지도 등고선과 유사하다고 생각할 수 있습니다.

분명히 이러한 클래스는 선형적으로 분리할 수 없습니다. 2D 오브젝트의 특징을 포물선형 모양으로 변환해 보겠습니다. 새 기능을 z축으로 추가하여 새 3D 개체를 만들어 보겠습니다. 3D 객체를 해석하는 것은 약간 어렵지만, 상상할 수 있듯이 이제 두 클래스가 수평면으로 명확하게 구분됩니다. 이 평면을 사용하여 새 케이스가 평면의 위 또는 아래에 있는지 여부에 따라 분류할 수 있습니다.

이렇게 고차원 공간에 데이터를 매핑하는 것을 커널링 (kerneling) 이라고 하는데, 이 경우 커널은 2차 다항식입니다. 실제 데이터로는 어떤 커널 함수가 가장 잘 수행되는지 알 수 있는 간단한 방법이 없습니다. Scikit-learn은 SVM과 함께 사용할 다양한 커널 함수를 제공합니다. 선형 커널이 기본값이며 일반적인 SVM 모델에 해당합니다. 포물선형 임베딩은 다항식 옵션을 선택하여 구현됩니다.

방사형 기저 함수 (RBF) 는 지점이 서로 가까울수록 높은 점수를 받고 지점이 멀어질수록 점수가 기하급수적으로 감소합니다. 시그모이드는 로지스틱 회귀에 사용되는 것과 동일한 함수입니다. 서포트 벡터 머신이 회귀에 어떻게 작용하는지 알아보려면 이 차트를 참조하십시오. 수학을 배우지 않고도 직관력을 키울 수 있습니다. 주황색 데이터 포인트로 표시된 합성 데이터는 입력 특징의 함수로서 잡음이 있는 비선형 연속 대상 변수를 나타냅니다.

파란색 곡선은 방사형 기저 함수 또는 RBF 커널을 사용한 서포트 벡터 회귀 또는 SVR 모델 예측을 표시합니다. 음영 처리된 하늘색 영역은 예측 주위의 엡실론 튜브를 나타냅니다. 엡실론 튜브 내에 떨어지는 포인트는 노란색으로 표시됩니다. 엡실론은 예측 곡선 주위의 마진을 정의하기 위해 선택할 수 있는 SVR 학습 알고리즘의 파라미터입니다. 여백 밖으로 떨어지는 포인트는 노이즈로 해석되고 내부 포인트는 신호로 해석됩니다.

첫 번째 경우에는 엡실론이 0.2이고 두 번째 경우에는 엡실론이 0.4입니다. 예를 들어 고차원 공간에서 효과적이고, 과적합에 강하고, 분리 가능한 선형 데이터에서 탁월하며, 약한 여백 옵션을 사용하는 약하게 분리 가능한 데이터에서도 작동합니다. SVM에도 몇 가지 제한 사항이 있습니다. 예를 들어 대규모 데이터 세트에 대한 훈련은 느리고 노이즈와 겹치는 클래스에 민감하며 결정하기가 쉽지 않은 커널 및 정규화 파라미터의 선택에도 민감합니다. SVM은 이미지 분류 및 손으로 쓴 숫자 인식과 같은 이미지 분석 작업에 적합합니다.

또한 파싱, 스팸 탐지 및 감정 분석에도 매우 효과적입니다. SVM은 음성 인식, 이상 감지, 노이즈 필터링과 같은 기계 학습 문제에 사용할 수 있습니다. 이 비디오에서는 서포트 벡터 머신 (SVM) 이 분류 및 회귀 모델을 구축하기 위한 지도 학습 기법이라는 것을 배웠습니다. SVM은 마진을 최대화하는 초평면인 결정 경계를 찾아 데이터를 두 클래스로 나누려고 합니다. Scikit-learn은 SVM과 함께 사용할 수 있는 선형, 다항식, RBF 및 시그모이드와 같은 다양한 커널 함수를 제공합니다.

고차원 공간에서는 효과적이며 과대피팅에도 강합니다. 그러나 몇 가지 제한 사항도 있습니다. 대규모 데이터 세트에 대한 학습에는 느리고 노이즈 및 중복 클래스에 민감합니다. 이미지 인식, 스팸 탐지 및 머신 러닝 문제에는 SVM을 사용해야 합니다.

## 예시
- 이 예시에서 데이터셋은 빨간색 삼각형과 파란색 정사각형이라는 두 개의 클래스로 구성됩니다.
- 예를 들어, 이 차트는 두 특징을 기반으로 하는 두 클래스를 빨간색과 파란색 데이터 포인트로 보여줍니다.
- 예를 들어 고차원 공간에서 효과적이고, 과적합에 강하고, 분리 가능한 선형 데이터에서 탁월하며, 약한 여백 옵션을 사용하는 약하게 분리 가능한 데이터에서도 작동합니다.
- 예를 들어 대규모 데이터 세트에 대한 훈련은 느리고 노이즈와 겹치는 클래스에 민감하며 결정하기가 쉽지 않은 커널 및 정규화 파라미터의 선택에도 민감합니다.

## 요약
- SVM은 소프트 마진을 통합할 수 있어 마진을 극대화하는 동시에 오분류를 허용할 수 있습니다.
- 이 비디오에서는 서포트 벡터 머신 (SVM) 이 분류 및 회귀 모델을 구축하기 위한 지도 학습 기법이라는 것을 배웠습니다.
- Scikit-learn은 SVM과 함께 사용할 수 있는 선형, 다항식, RBF 및 시그모이드와 같은 다양한 커널 함수를 제공합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Supervised Learning with SVMs. Support Vector Machines, or SVMs, are used for classification. After watching this video, you will be able to describe SVM, identify Python tools for SVM, and discuss SVM applications. Support Vector Machines, or SVM, is a supervised learning technique for building classification and regression models. It maps each data instance as a point in multidimensional space where the input features are represented as a value for a specific coordinate.

SVM classifies input data by identifying the hyperplane, which distinctly differentiates two classes. Thus, these points are fundamental to the dataset. In a classification task comprising two features, the hyperplane is a linear line that segregates and classifies the dataset. Every time new inputs are added to the task, their classification depends on which side of the hyperplane they land. The primary goal of SVM is to create a hyperplane that segregates a dataset into two parts and finds the largest margin.

In this example, the dataset comprises a collection of two classes, red triangle and blue square. The larger the margin, the better the model's accuracy on new, unseen data. Data is often noisy and overlapping in real-world scenarios, making perfect separation impossible. SVM can incorporate a soft margin, which allows it to tolerate misclassifications while maximizing the margin. The balance between maximizing the margin and minimizing the number of misclassifications is controlled by a parameter, c.

A smaller c allows more misclassifications, softer margin, while a larger c forces a stricter separation, harder margin. Binary SVMs are binary classification machine learning algorithms. Binary SVMs assume that two classes are linearly separable. However, SVMs can also be adapted to solve regression problems. SVMs try to divide data into two classes by finding a decision boundary.

For example, this chart shows two classes as red and blue data points based on two features. The decision boundary is a hyperplane that maximizes the margin. In a two-dimensional feature space, the decision boundary is a line. The margin is the distance from the hyperplane to the closest points from each class. These nearest point representatives from each class are support vectors.

Without getting into the details of the mathematics involved in the derivation of the optimization problem, consider this 2D example. Using the training data and assuming the data has been normalized, the objective is to find a weight vector and a value b, called the bias term, such that a, the inner product of w with itself is minimized, which amounts to minimizing the length of w, and b, for every observation, or data point, x, and target value y, the product of y and w transported x plus b is greater than or equal to 1. Therefore, the algorithm's output is the line's values, w and b. You can make classifications using this estimated line. Adding input values into the line equation lets you calculate whether an unknown point is above or below the line.

If the equation returns a value greater than zero, the point belongs to the first class, which is above the line and vice versa. Consider a 2D object of a non-linearly separable pair of classes. As you can see from the 2D chart, there are two non-overlapping classes with concentrically circular shapes. You can imagine these points as analogous to map contours, representing their heights. Clearly, these classes are not linearly separable.

Let's transform the features of the 2D object so that it takes on a parabolic shape. Let's create a new 3D object by adding the new feature as the z-axis. It's a bit difficult to interpret 3D objects, but as you can imagine, the two classes are now clearly separated by a horizontal plane. You can use this plane to classify new cases according to whether they lie above or below the plane. Mapping data into a higher-dimensional space like this is called kerneling, where the kernel is a quadratic polynomial in this case.

With real-world data, there is no straightforward way to know which kernel function performs best. Scikit-learn provides you with a choice of kernel functions to use with SVM. A linear kernel is the default and corresponds to the usual SVM model. Parabolic embedding is implemented by choosing the polynomial option. Radial basis functions, or RBFs, which score high for points close to each other and an exponentially decreasing score as points become more distant.

The sigmoid is the same function used for logistic regression. To see how support vector machines work for regression, consider this chart. It'll help you build some intuition without going into mathematics. The synthetic data depicted by the orange data points represents a noisy, nonlinear, continuous target variable as a function of an input feature. The blue curve displays the support vector regression, or SVR model prediction using a radial basis function, or RBF kernel.

The shaded light blue region represents the epsilon tube around the prediction. Points falling within the epsilon tube are shaded yellow. Epsilon is a parameter of the SVR learning algorithm that you can select to define a margin around the prediction curve. Points falling outside the margin are interpreted as noise, and points inside as signal. In the first case, epsilon is 0.2, and in the second, epsilon is 0.4.

SVM has many advantages. For example, it's effective in high-dimensional spaces, it's robust to overfitting, it excels on linear separable data, and it works with weakly separable data using weak margin option. SVM also has some limitations. For example, it's slow for training on large datasets, it's sensitive to noise and overlapping classes, and it's sensitive to the choice of kernel and regularization parameters, which are non-trivial to determine. When should you use SVM?

SVM is good for image analysis tasks, such as image classification and handwritten digit recognition. It's also highly effective for parsing, spam detection, and sentiment analysis. SVM can be used for machine learning problems, such as speech recognition, anomaly detection, and noise filtering. In this video, you learned that Support Vector Machines, or SVM, is a supervised learning technique for building classification and regression models. SVMs try to divide data into two classes by finding a decision boundary, which is a hyperplane that maximizes the margin.

Scikit-learn provides many kernel functions, such as linear, polynomial, RBF, and sigmoid for using with SVM. SVM has many advantages. It's effective in high-dimensional spaces and robust to overfitting. However, it also has some limitations. It's slow for training on large datasets, and sensitive to noise and overlapping classes.

You should use SVM for image recognition, spam detection, and machine learning problems.

</details>
