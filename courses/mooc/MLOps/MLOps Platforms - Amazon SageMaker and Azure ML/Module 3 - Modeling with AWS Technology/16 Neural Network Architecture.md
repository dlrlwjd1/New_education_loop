# Neural Network Architecture

## 개요
- **TensorFlow Playground**(playground.tensorflow.org)를 활용해 신경망의 층(layer)·뉴런(neuron)·학습률·정규화(regularization)를 직접 조작하며 직관을 쌓는 2분 데모.

## 내용

### TensorFlow Playground 구조
- 두 개의 구분되는 클래스(class)를 가진 데이터셋 선택.
- 피처(features), 첫 번째 은닉층의 뉴런들, 두 번째 은닉층의 뉴런들로 구성.
- **테스트 손실(test loss)**과 **학습 손실(training loss)**을 동시에 확인 가능.

### 학습 실행과 과적합 관찰
- 모델 학습을 시작하면 점차 두 클래스를 구분하는 방법을 학습.
- 다만 테스트 손실이 상승하는 등 약간의 **과적합(overfitting)**이 관찰됨.

### 하이퍼파라미터 튜닝 실험
- **학습률(learning rate)** 조정 → 해를 더 빠르게 찾도록 시도 → 실제로 더 빠르게 수렴했고 테스트 손실도 약간 줄어 더 나은 해에 더 빠르게 도달.
- **정규화(regularization)** 추가 → 일반화(generalization)를 돕기 위한 시도 → 이번 문제에서는 큰 변화가 없었음.

### 핵심 통찰
- 하이퍼파라미터를 직접 조작해보고, 다양한 데이터셋 사이를 전환하며 실행해보고, 테스트 데이터 비율을 바꿔보는 것이 신경망이 실제로 어떻게 동작하는지에 대한 직관을 쌓는 좋은 방법.

## 요약
- TensorFlow Playground는 학습률·정규화 같은 하이퍼파라미터를 실시간으로 조정하며 신경망의 수렴 속도와 과적합에 미치는 영향을 시각적으로 직접 체험할 수 있는 훌륭한 실습 도구다.
