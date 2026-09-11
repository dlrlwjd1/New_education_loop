# T3 Phase 3 — 신경망과 딥러닝

> 학부 교과 **신경망(2학년 2학기, 이론실습병행 3학점)** · 선이수 = 인공지능수학
> 교과목해설: "퍼셉트론, 다층 신경망, 역전파 알고리즘을 포함한 주요 신경망 모델과 학습 방법에 대해 학습하며, 다양한 실습을 통해 신경망 모델을 구축하고 훈련시키는 방법을 익히게 된다"

- 목표: 신경망을 프레임워크 없이 한 번 직접 만들어, 학습이 안 될 때 **어디를 봐야 하는지** 안다.
- 분량: 약 28시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 퍼셉트론 하나가 하는 계산을 손으로 쓴다
- 순전파·역전파를 계산 그래프로 그리고 NumPy로 구현한다
- 활성화 함수(sigmoid·tanh·ReLU)를 고르는 기준과 기울기 소실 문제를 설명한다
- 가중치 초기화가 왜 중요한지 말한다
- 정규화(L2·드롭아웃)·배치 정규화가 무엇을 고치는지 안다
- 미니배치 경사하강·모멘텀·RMSprop·Adam의 차이를 설명한다
- 하이퍼파라미터 튜닝을 무작정이 아니라 우선순위를 두고 한다

> **선행 확인**: [T2 Phase 4(인공지능 수학)](../T2%20%EC%88%98%ED%95%99%20%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0/04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%88%98%ED%95%99.md)의 연쇄법칙·기울기를 모르면 3-B(역전파)에서 멈춘다. 강남대 커리큘럼이 인공지능수학을 이 과목의 선이수로 지정한 이유가 정확히 이것이다.

## 3-A. 신경망이란 무엇인가

메인: Deep Learning Specialization, `01 Neural Networks and Deep Learning` week 1

- [ ] [01 Welcome.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/01%20Welcome.md)
- [ ] [02 What is a Neural Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/02%20What%20is%20a%20Neural%20Network.md)
- [ ] [03 Supervised Learning with Neural Networks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/03%20Supervised%20Learning%20with%20Neural%20Networks.md)
- [ ] [04 Why is Deep Learning Taking Off.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/04%20Why%20is%20Deep%20Learning%20Taking%20Off.md)
- [ ] [05 About this Course.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/05%20About%20this%20Course.md)
- [ ] [06 Frequently Asked Questions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/06%20Frequently%20Asked%20Questions.md)
- [ ] [07 Geoffrey Hinton Interview.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week1%20Introduction%20to%20Deep%20Learning/07%20Geoffrey%20Hinton%20Interview.md)

## 3-B. 로지스틱 회귀에서 신경망으로 — 역전파의 뿌리

week 2. **이 트랙 전체에서 가장 중요한 절이다.** 로지스틱 회귀를 "노드 하나짜리 신경망"으로 다시 보면서 순전파·역전파·벡터화를 한꺼번에 세운다

- [ ] [01 Binary Classification.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/01%20Binary%20Classification.md)
- [ ] [02 Logistic Regression.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/02%20Logistic%20Regression.md)
- [ ] [03 Logistic Regression Cost Function.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/03%20Logistic%20Regression%20Cost%20Function.md)
- [ ] [04 Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/04%20Gradient%20Descent.md)
- [ ] [05 Derivatives.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/05%20Derivatives.md)
- [ ] [06 More Derivative Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/06%20More%20Derivative%20Examples.md)
- [ ] [07 Computation Graph.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/07%20Computation%20Graph.md)
- [ ] [08 Derivatives with a Computation Graph.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/08%20Derivatives%20with%20a%20Computation%20Graph.md)
- [ ] [09 Logistic Regression Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/09%20Logistic%20Regression%20Gradient%20Descent.md)
- [ ] [10 Gradient Descent on m Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/10%20Gradient%20Descent%20on%20m%20Examples.md)
- [ ] [01 Vectorization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/01%20Vectorization.md)
- [ ] [02 More Vectorization Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/02%20More%20Vectorization%20Examples.md)
- [ ] [03 Vectorizing Logistic Regression.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/03%20Vectorizing%20Logistic%20Regression.md)
- [ ] [04 Vectorizing Logistic Regression's Gradient Output.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/04%20Vectorizing%20Logistic%20Regression's%20Gradient%20Output.md)
- [ ] [05 Broadcasting in Python.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/05%20Broadcasting%20in%20Python.md)
- [ ] [06 A Note on Python NumPy Vectors.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/06%20A%20Note%20on%20Python%20NumPy%20Vectors.md)
- [ ] [07 Quick Tour of Jupyter iPython Notebooks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/07%20Quick%20Tour%20of%20Jupyter%20iPython%20Notebooks.md)
- [ ] [08 Explanation of Logistic Regression Cost Function (Optional).md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/08%20Explanation%20of%20Logistic%20Regression%20Cost%20Function%20%28Optional%29.md)

## 3-C. 얕은 신경망과 깊은 신경망

week 3 — 은닉층 하나

- [ ] [01 Neural Networks Overview.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/01%20Neural%20Networks%20Overview.md)
- [ ] [02 Neural Network Representation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/02%20Neural%20Network%20Representation.md)
- [ ] [03 Computing a Neural Network's Output.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/03%20Computing%20a%20Neural%20Network's%20Output.md)
- [ ] [04 Vectorizing Across Multiple Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/04%20Vectorizing%20Across%20Multiple%20Examples.md)
- [ ] [05 Explanation for Vectorized Implementation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/05%20Explanation%20for%20Vectorized%20Implementation.md)
- [ ] [06 Activation Functions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/06%20Activation%20Functions.md)
- [ ] [07 Why Non-Linear Activation Functions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/07%20Why%20Non-Linear%20Activation%20Functions.md)
- [ ] [08 Derivatives of Activation Functions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/08%20Derivatives%20of%20Activation%20Functions.md)
- [ ] [09 Gradient Descent for Neural Networks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/09%20Gradient%20Descent%20for%20Neural%20Networks.md)
- [ ] [10 Backpropagation Intuition (Optional).md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/10%20Backpropagation%20Intuition%20%28Optional%29.md)
- [ ] [11 Random Initialization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week3%20Shallow%20Neural%20Networks/11%20Random%20Initialization.md)

week 4 — 층을 깊게

- [ ] [01 Deep L-layer Neural Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/01%20Deep%20L-layer%20Neural%20Network.md)
- [ ] [02 Forward Propagation in a Deep Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/02%20Forward%20Propagation%20in%20a%20Deep%20Network.md)
- [ ] [03 Getting Your Matrix Dimensions Right.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/03%20Getting%20Your%20Matrix%20Dimensions%20Right.md)
- [ ] [04 Why Deep Representations.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/04%20Why%20Deep%20Representations.md)
- [ ] [05 Building Blocks of Deep Neural Networks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/05%20Building%20Blocks%20of%20Deep%20Neural%20Networks.md)
- [ ] [06 Forward and Backward Propagation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/06%20Forward%20and%20Backward%20Propagation.md)
- [ ] [07 Parameters vs Hyperparameters.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/07%20Parameters%20vs%20Hyperparameters.md)
- [ ] [08 What Does This Have to Do with the Brain.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week4%20Deep%20Neural%20Networks/08%20What%20Does%20This%20Have%20to%20Do%20with%20the%20Brain.md)

## 3-D. 학습이 안 될 때 — 실전 기법

메인: Deep Learning Specialization, `02 Improving Deep Neural Networks`

week 1 — 편향/분산, 정규화, 드롭아웃, 기울기 검사

- [ ] [01 Train Dev Test Sets.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/01%20Train%20Dev%20Test%20Sets.md)
- [ ] [02 Bias Variance.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/02%20Bias%20Variance.md)
- [ ] [03 Basic Recipe for Machine Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/03%20Basic%20Recipe%20for%20Machine%20Learning.md)
- [ ] [04 Regularization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/04%20Regularization.md)
- [ ] [05 Why Regularization Reduces Overfitting.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/05%20Why%20Regularization%20Reduces%20Overfitting.md)
- [ ] [06 Dropout Regularization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/06%20Dropout%20Regularization.md)
- [ ] [07 Understanding Dropout.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/07%20Understanding%20Dropout.md)
- [ ] [08 Other Regularization Methods.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/08%20Other%20Regularization%20Methods.md)
- [ ] [09 Normalizing Inputs.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/09%20Normalizing%20Inputs.md)
- [ ] [10 Vanishing Exploding Gradients.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/10%20Vanishing%20Exploding%20Gradients.md)
- [ ] [11 Weight Initialization for Deep Networks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/11%20Weight%20Initialization%20for%20Deep%20Networks.md)
- [ ] [12 Numerical Approximation of Gradients.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/12%20Numerical%20Approximation%20of%20Gradients.md)
- [ ] [13 Gradient Checking.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/13%20Gradient%20Checking.md)
- [ ] [14 Gradient Checking Implementation Notes.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week1%20Practical%20Aspects%20of%20Deep%20Learning/14%20Gradient%20Checking%20Implementation%20Notes.md)

week 2 — 최적화 알고리즘 (미니배치·모멘텀·Adam)

- [ ] [01 Mini-batch Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/01%20Mini-batch%20Gradient%20Descent.md)
- [ ] [02 Understanding Mini-batch Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/02%20Understanding%20Mini-batch%20Gradient%20Descent.md)
- [ ] [03 Exponentially Weighted Averages.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/03%20Exponentially%20Weighted%20Averages.md)
- [ ] [04 Understanding Exponentially Weighted Averages.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/04%20Understanding%20Exponentially%20Weighted%20Averages.md)
- [ ] [05 Bias Correction in Exponentially Weighted Averages.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/05%20Bias%20Correction%20in%20Exponentially%20Weighted%20Averages.md)
- [ ] [06 Gradient Descent with Momentum.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/06%20Gradient%20Descent%20with%20Momentum.md)
- [ ] [07 RMSprop.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/07%20RMSprop.md)
- [ ] [08 Adam Optimization Algorithm.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/08%20Adam%20Optimization%20Algorithm.md)
- [ ] [09 Learning Rate Decay.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/09%20Learning%20Rate%20Decay.md)
- [ ] [10 The Problem of Local Optima.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week2%20Optimization%20Algorithms/10%20The%20Problem%20of%20Local%20Optima.md)

week 3 — 하이퍼파라미터 튜닝·배치 정규화·프레임워크

- [ ] [01 Tuning Process.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/01%20Tuning%20Process.md)
- [ ] [02 Using an Appropriate Scale to Pick Hyperparameters.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/02%20Using%20an%20Appropriate%20Scale%20to%20Pick%20Hyperparameters.md)
- [ ] [03 Hyperparameters Tuning in Practice - Pandas vs Caviar.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/03%20Hyperparameters%20Tuning%20in%20Practice%20-%20Pandas%20vs%20Caviar.md)
- [ ] [04 Normalizing Activations in a Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/04%20Normalizing%20Activations%20in%20a%20Network.md)
- [ ] [05 Fitting Batch Norm into a Neural Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/05%20Fitting%20Batch%20Norm%20into%20a%20Neural%20Network.md)
- [ ] [06 Why Does Batch Norm Work.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/06%20Why%20Does%20Batch%20Norm%20Work.md)
- [ ] [07 Batch Norm at Test Time.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/07%20Batch%20Norm%20at%20Test%20Time.md)
- [ ] [08 Softmax Regression.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/08%20Softmax%20Regression.md)
- [ ] [09 Training a Softmax Classifier.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/09%20Training%20a%20Softmax%20Classifier.md)
- [ ] [10 Deep Learning Frameworks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/10%20Deep%20Learning%20Frameworks.md)
- [ ] [11 TensorFlow.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/02%20Improving%20Deep%20Neural%20Networks/week3%20Hyperparameter%20Tuning%20Batch%20Normalization%20and%20Programming%20Frameworks/11%20TensorFlow.md)

## 3-E. 작게 만들어 보기

함께 보기: Introduction to Embedded Machine Learning Module 2 (신경망을 마이크로컨트롤러에 올릴 수 있을 만큼 작게 만드는 관점. **모델 크기와 성능의 트레이드오프**가 일찍 나온다)

- [ ] [01 Introduction to Neural Networks.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/01%20Introduction%20to%20Neural%20Networks.md)
- [ ] [02 Model Training in Edge Impulse.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/02%20Model%20Training%20in%20Edge%20Impulse.md)
- [ ] [03 How to Evaluate a Model.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/03%20How%20to%20Evaluate%20a%20Model.md)
- [ ] [04 Underfitting and Overfitting.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/04%20Underfitting%20and%20Overfitting.md)
- [ ] [05 How to Use a Model for Inference.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/05%20How%20to%20Use%20a%20Model%20for%20Inference.md)
- [ ] [06 Testing Inference with a Smartphone.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/06%20Testing%20Inference%20with%20a%20Smartphone.md)
- [ ] [07 How to Deploy a Trained Model to Arduino.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/07%20How%20to%20Deploy%20a%20Trained%20Model%20to%20Arduino.md)
- [ ] [08 Anomaly Detection.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/08%20Anomaly%20Detection.md)
- [ ] [09 Industrial Embedded Machine Learning Demo.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/09%20Industrial%20Embedded%20Machine%20Learning%20Demo.md)
- [ ] [10 Module Review.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%202%20-%20Introduction%20to%20Neural%20Networks/10%20Module%20Review.md)

## 산출물

1. **NumPy만으로 만든 2층 신경망** — 순전파·역전파·파라미터 갱신을 직접 짠다. 프레임워크 금지. `lab/` 폴더의 venv를 그대로 쓰면 된다
2. 기울기 검사(gradient check) 통과 기록
3. 같은 문제를 PyTorch나 TensorFlow로 다시 풀고, **직접 만든 것과 결과가 같은지** 확인
4. 학습이 안 되는 상황 3개를 일부러 만들고(학습률 과다 / 초기화 0 / 정규화 없음) 각각의 손실 곡선과 원인 설명

## 다음 단계

→ [04 Phase 4 - 기계학습 프로젝트](04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md)
