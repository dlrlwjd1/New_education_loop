# Machine Learning Models – Learning from Models to Make Predictions

## 개요
- 강좌: Tools for Data Science
- 모듈: Packages, APIs, Data Sets, and Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/gjnFu/machine-learning-models-learning-from-models-to-make-predictions)
- 이 비디오를 시청한 후에는 기계 학습 모델을 정의하고, 다양한 학습 모델 유형을 설명하고, 학습 모델을 사용하여 문제를 해결하는 방법을 설명할 수 있습니다.
- 이제 데이터에는 특정 유형의 문제를 해결하는 데 사용할 수 있는 풍부한 정보가 포함되어 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 기계 학습 모델을 정의하고, 다양한 학습 모델 유형을 설명하고, 학습 모델을 사용하여 문제를 해결하는 방법을 설명할 수 있습니다.
- 이제 데이터에는 특정 유형의 문제를 해결하는 데 사용할 수 있는 풍부한 정보가 포함되어 있습니다.
- 이제 처음부터 사용자 지정 딥러닝 모델을 구축하거나 공개 모델 리포지토리에서 사전 학습된 모델을 사용할 수 있습니다.
- 일반적으로 모델 동물원이라고 하는 리포지토리에서 사전 학습된 최신 모델을 다운로드할 수 있습니다.
- 그런 다음 준비된 데이터를 기반으로 모델을 학습시킬 수 있습니다.
- 이 비디오에서는 머신 러닝 (ML) 이 알고리즘 (“모델”이라고도 함) 을 사용하여 데이터의 패턴을 식별하는 방법을 배웠습니다.

### 한국어 Transcript

“기계 학습 모델 — 모델에서 학습하여 예측하기”에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 기계 학습 모델을 정의하고, 다양한 학습 모델 유형을 설명하고, 학습 모델을 사용하여 문제를 해결하는 방법을 설명할 수 있습니다. 이제 데이터에는 특정 유형의 문제를 해결하는 데 사용할 수 있는 풍부한 정보가 포함되어 있습니다. 기존의 데이터 분석 접근 방식은 사람이 수동으로 데이터를 검사하거나 사람의 분석을 자동화하는 특수 컴퓨터 프로그램 등일 수 있습니다. 이러한 접근 방식은 분석할 데이터의 양이나 문제의 복잡성으로 인해 한계에 도달합니다.

기계 학습 (ML) 은 알고리즘 (“모델”이라고도 함) 을 사용하여 데이터의 패턴을 식별합니다. 모델이 데이터로부터 이러한 패턴을 학습하는 프로세스를 “모델 교육”이라고 합니다. 모델을 학습시킨 후에는 이를 사용하여 예측을 수행할 수 있습니다. 모델에 새 데이터가 제공되면 모델은 과거 데이터에서 학습한 패턴을 기반으로 예측하거나 결정을 내리려고 합니다. 기계 학습 모델은 지도 학습, 비지도 학습, 강화 학습의 세 가지 기본 클래스로 나눌 수 있습니다.

가장 일반적으로 사용되는 기계 학습 유형은 지도 학습입니다. 지도 학습에서는 사람이 입력 데이터와 올바른 결과를 제공합니다. 모델은 입력 데이터와 올바른 출력 간의 관계 및 종속성을 식별하려고 합니다. 이러한 유형의 학습은 회귀와 분류라는 두 가지 유형의 모델로 구성됩니다. 회귀 모델은 숫자 (또는 “실제”) 값을 예측하는 데 사용됩니다.

예를 들어 지리적 위치, 크기, 침실 수, 판매 가격 등 과거 주택 판매에 대한 정보가 제공되면 유사한 특성을 가진 다른 주택의 예상 판매 가격을 예측하도록 모델을 훈련할 수 있습니다. 분류 모델은 일부 정보 또는 데이터가 범주 (또는 “클래스”) 에 속하는지 여부를 예측하는 데 사용됩니다. 예를 들어, 지정이 포함된 이메일 집합의 경우 스팸으로 간주할지 여부를 분류할 수 있습니다. 따라서 원치 않는 이메일을 식별하는 알고리즘을 훈련할 수 있습니다. 비지도 학습에서는 사람이 데이터에 레이블을 지정하지 않습니다.

모델은 데이터를 분석하고 특성에 따라 데이터 내의 패턴과 구조를 식별하려고 노력해야 합니다. 클러스터링은 이러한 학습 스타일의 한 예입니다. 클러스터링 모델은 데이터셋의 각 레코드를 유사한 그룹 중 하나로 나누는 데 사용됩니다. 클러스터링 모델의 예로는 과거 쇼핑 행동 및 장바구니 콘텐츠를 기반으로 전자 상거래 스토어에 구매 권장 사항을 제공하는 경우를 들 수 있습니다. 또 다른 예로는 사기 신용 카드 거래나 의심스러운 온라인 로그인 시도 등 데이터셋에서 이상치를 식별하는 이상 징후 탐지를 들 수 있습니다.

그리고 세 번째 유형의 학습인 강화 학습은 인간과 다른 유기체가 학습하는 방식을 대체로 기반으로 합니다. 미로 속에 있는 쥐를 생각해 보세요. 쥐가 미로 끝에 다다르면 치즈 한 조각을 얻게 되죠. 이것은 과제 완수에 대한 “보상”입니다. 쥐는 시행착오를 통해 미로를 통과하여 최대한 많은 치즈를 얻는 방법을 배웁니다.

비슷한 방식으로 강화 학습 모델은 현재 환경을 고려할 때 시간이 지남에 따라 가장 많은 보상을 받기 위해 취해야 할 최선의 조치를 학습합니다. 이러한 유형의 학습은 최근 바둑, 체스, 인기 전략 비디오 게임과 같은 게임에서 최고의 인간 플레이어를 이기는 데 큰 성공을 거두었습니다. 딥러닝은 특수한 유형의 머신 러닝입니다. 인간의 두뇌가 광범위한 문제를 해결하는 방식을 느슨하게 모방하는 일반적인 모델 및 기법 세트를 말합니다. 일반적으로 자연어 (음성 및 텍스트 모두), 이미지, 오디오, 비디오를 분석하고 시계열 데이터 등을 예측하는 데 사용됩니다.

딥 러닝은 최근 이러한 분야와 다른 분야에서 큰 성공을 거두면서 데이터 과학에서 점점 더 대중적이고 중요한 도구가 되고 있습니다. 모델을 학습하려면 레이블이 지정된 대량의 데이터 세트가 필요하고, 컴퓨팅 집약적이며, 적절한 훈련 시간을 달성하려면 일반적으로 특수 목적의 하드웨어가 필요합니다. 이제 처음부터 사용자 지정 딥러닝 모델을 구축하거나 공개 모델 리포지토리에서 사전 학습된 모델을 사용할 수 있습니다. 딥러닝 모델은 TensorFlow, PyTorch, Keras와 같은 인기 있는 프레임워크를 사용하여 구현됩니다. 학습 프레임워크는 Python API를 제공하며 대부분 C++ 및 JavaScript와 같은 다른 프로그래밍 언어를 지원합니다.

일반적으로 모델 동물원이라고 하는 리포지토리에서 사전 학습된 최신 모델을 다운로드할 수 있습니다. 인기 있는 모델 동물원으로는 텐서플로우, 파이토치, 케라스, ONNX에서 제공하는 동물원이 있습니다. 학계 및 상업 연구 그룹에서도 모델을 발표합니다. 예제를 사용하여 모델 구축과 관련된 높은 수준의 작업을 간략하게 설명해 보겠습니다. 애플리케이션이 딥러닝 모델을 학습시켜 이미지 속 객체를 식별할 수 있도록 하고 싶다고 가정해 보겠습니다.

먼저 모델을 학습시키는 데 사용할 데이터를 수집하고 준비합니다. 데이터 준비는 시간이 많이 걸리고 노동 집약적인 프로세스일 수 있습니다. 영상에서 물체를 감지하도록 모델을 훈련시키려면 원시 훈련 데이터에 레이블을 지정해야 합니다. 예를 들어, 개체 주위에 경계 상자를 그리고 레이블을 지정할 수 있습니다. 다음으로 모델을 처음부터 새로 만들거나 공개 또는 비공개 리소스에서 작업에 적합할 수 있는 기존 모델을 선택합니다.

그런 다음 준비된 데이터를 기반으로 모델을 학습시킬 수 있습니다. 학습 중에 모델은 레이블이 지정된 데이터를 통해 이미지에 묘사된 물체를 식별하는 방법을 학습합니다. 학습이 시작되면 훈련 결과를 분석하고 학습된 모델 성능이 요구 사항을 충족할 때까지 프로세스를 반복합니다. 학습된 모델이 원하는 대로 작동하면 이를 배포하여 애플리케이션에서 사용할 수 있도록 합니다. 이 비디오에서는 머신 러닝 (ML) 이 알고리즘 (“모델”이라고도 함) 을 사용하여 데이터의 패턴을 식별하는 방법을 배웠습니다.

모델이 데이터 패턴을 학습하는 과정을 “모델 교육”이라고 합니다. ML 유형에는 감독형, 감독형, 강화가 있습니다. 지도 학습은 회귀와 분류라는 두 가지 유형의 모델로 구성됩니다. 딥 러닝은 인간의 두뇌가 다양한 문제를 해결하는 방식을 느슨하게 모방하는 일반적인 모델 및 기법 세트를 말합니다.

## 예시
- 예를 들어 지리적 위치, 크기, 침실 수, 판매 가격 등 과거 주택 판매에 대한 정보가 제공되면 유사한 특성을 가진 다른 주택의 예상 판매 가격을 예측하도록 모델을 훈련할 수 있습니다.
- 예를 들어, 지정이 포함된 이메일 집합의 경우 스팸으로 간주할지 여부를 분류할 수 있습니다.
- 클러스터링 모델은 데이터셋의 각 레코드를 유사한 그룹 중 하나로 나누는 데 사용됩니다.
- 예를 들어, 개체 주위에 경계 상자를 그리고 레이블을 지정할 수 있습니다.

## 요약
- 일반적으로 모델 동물원이라고 하는 리포지토리에서 사전 학습된 최신 모델을 다운로드할 수 있습니다.
- 그런 다음 준비된 데이터를 기반으로 모델을 학습시킬 수 있습니다.
- 이 비디오에서는 머신 러닝 (ML) 이 알고리즘 (“모델”이라고도 함) 을 사용하여 데이터의 패턴을 식별하는 방법을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Machine Learning Models – Learning from models to make predictions.” After watching this video, you will be able to define a machine learning model, describe the different learning model types, and describe how to use a learning model to solve a problem. Now data contains a wealth of information that can be used to solve certain types of problems. Traditional data analysis approaches can be a person manually inspecting the data or a specialized computer program that automates the human analysis. These approaches reach their limits due to the amount of data to be analyzed or the complexity of the problem. Machine learning (ML) uses algorithms – also known as “models” - to identify patterns in the data.

The process by which the model learns these patterns from data is called “model training”. Once a model is trained, it can then be used to make predictions. When the model is presented with new data, it tries to make predictions or decisions based on the patterns it has learned from past data. Machine Learning models can be divided into three basic classes: Supervised Learning, Unsupervised Learning, and Reinforcement Learning. The most commonly used type of machine learning is Supervised Learning.

In Supervised Learning, a human provides input data and correct outputs. The model tries to identify relationships and dependencies between the input data and the correct output. This type of learning comprises two types of models, regression and classification. Regression models are used to predict a numeric (or “real”) value. For example, if information is given about past home sales, such as geographic location, size, number of bedrooms, and sales price, you can train a model to predict the estimated sales price for other homes with similar characteristics.

Classification models are used to predict whether some information or data belongs to a category (or “class”). For example, for a set of emails along with a designation you can classify whether they are to be considered as spam or not. And so, you can train an algorithm to identify unsolicited emails. In Unsupervised Learning, the data is not labeled by a human. The models must analyze the data and try to identify patterns and structure within the data based on its characteristics.

Clustering is an example of this learning style. Clustering models are used to divide each record of a dataset into one of a similar group. An example of a clustering model could be providing purchase recommendations for an e-commerce store, based on past shopping behavior and the content of a shopping basket. Another example is anomaly detection that identifies outliers in a dataset, such as fraudulent credit card transactions or suspicious online log-in attempts. And the third type of learning, Reinforcement Learning, is loosely based on the way human beings and other organisms learn.

So, think about a mouse in a maze. If the mouse gets to the end of the maze, it gets a piece of cheese. This is the “reward” for completing a task. The mouse learns through trial and error how to get through the maze to get as much cheese as it can. In a similar way, a reinforcement learning model learns the best set of actions to take, given its current environment, to get the most rewards over time.

This type of learning has recently been very successful in beating the best human players in games such as Go, chess and popular strategy video games. Deep learning is a specialized type of machine learning. It refers to a general set of models and techniques that loosely emulate the way the human brain solves a wide range of problems. It is commonly used to analyze natural language (both spoken and text), images, audio, video, to forecast time series data and much more. Deep learning has recently been very successful in these and other areas and hence is becoming an increasingly popular and important tool for data science.

It requires large datasets of labeled data to train a model, is compute intensive, and usually requires special purpose hardware to achieve acceptable training times. Now you can build a custom Deep Learning model from scratch or use pre-trained models from public model repositories. Deep Learning models are implemented using popular frameworks such as TensorFlow, PyTorch and Keras. The learning frameworks provide a Python API and many support other programming languages, such as C++ and JavaScript. You can download pre-trained state-of-the-art models from repositories that are commonly referred to as model zoos.

Popular model zoos include those provided by TensorFlow, PyTorch, Keras, and ONNX. Models are also published by academic and commercial research groups. Let’s briefly outline the high-level tasks involved in building a model using an example. Assume you want to enable an application to identify objects in images by training a deep learning model. First, you collect and prepare data that will be used to train a model.

Data preparation can be a time-consuming and labor-intensive process. In order to train a model to detect objects in images, you need to label the raw training data. For example, you can draw bounding boxes around objects and label them. Next, you build a model from scratch or select an existing model that might be well suited for the task from a public or private resource. You can then train the model on your prepared data.

During training, your model learns from the labeled data how to identify objects that are depicted in an image. Once training has commenced, you analyze the training results and repeat the process until the trained model performance meets your requirements. When the trained model performs as desired, you deploy it to make it available to your applications. In this video you learned that: Machine learning (ML) uses algorithms – also known as “models” ‒ to identify patterns in the data. The process by which the model learns data patterns is called “model training”.

Types of ML are Supervised, Unsupervised, and Reinforcement. Supervised learning comprises two types of models, regression and classification. And deep learning refers to a general set of models and techniques that loosely emulate the way the human brain solves a wide range of problems.

</details>
