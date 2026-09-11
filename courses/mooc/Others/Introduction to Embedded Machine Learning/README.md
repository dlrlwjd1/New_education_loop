# Introduction to Embedded Machine Learning

- 강좌: https://www.mooc.org/learn/introduction-to-embedded-machine-learning
- 제공: Edge Impulse · Arm · Arduino · tinyML Foundation (MOOC, 무료 — 인증서만 유료)
- 구성: 3개 모듈 · 강의별 학습 노트 32개
- 핵심: AI/ML 개념과 윤리, 임베디드 ML 전용 하드웨어(Arm Cortex-M55·Ethos-U)와 소프트웨어(TensorFlow Lite Micro·CMSIS-NN), Edge Impulse로 데이터 수집·특징 추출(RMS·FFT/PSD·MFCC)·모델 학습·평가(혼동행렬·F1)·Arduino 배포, CNN·이상 탐지·오디오 키워드 스팟팅까지 임베디드 머신러닝 프로젝트 전체 사이클
- 이 저장소에서: **IoT 로드맵 Phase 8 - 엣지 컴퓨팅과 TinyML**의 메인 자료

## 모듈

1. Introduction to Machine Learning — 13개 (AI/ML 개념·윤리, 임베디드 ML 하드웨어·소프트웨어, Edge Impulse 시작, 제스처 데이터 수집·특징 추출·파이프라인)
2. Introduction to Neural Networks — 10개 (퍼셉트론·역전파, Edge Impulse 학습·평가·과적합, Arduino 배포, 이상 탐지, 산업 사례)
3. Audio classification and Keyword Spotting — 9개 (마이크·샘플링, MFCC, CNN, 모델 튜닝, 연속 리스닝 배포, 임계값·후처리, 센서 퓨전)

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Introduction to Machine Learning

- [01 Welcome to the Course](Module%201%20-%20Introduction%20to%20Machine%20Learning/01%20Welcome%20to%20the%20Course.md)
- [02 Instructor Introductions](Module%201%20-%20Introduction%20to%20Machine%20Learning/02%20Instructor%20Introductions.md)
- [03 What is Machine Learning](Module%201%20-%20Introduction%20to%20Machine%20Learning/03%20What%20is%20Machine%20Learning.md)
- [04 Limitations and Ethics of Machine Learning](Module%201%20-%20Introduction%20to%20Machine%20Learning/04%20Limitations%20and%20Ethics%20of%20Machine%20Learning.md)
- [05 Machine Learning on Embedded Devices](Module%201%20-%20Introduction%20to%20Machine%20Learning/05%20Machine%20Learning%20on%20Embedded%20Devices.md)
- [06 Machine Learning Specific Hardware](Module%201%20-%20Introduction%20to%20Machine%20Learning/06%20Machine%20Learning%20Specific%20Hardware.md)
- [07 Machine Learning Software Frameworks](Module%201%20-%20Introduction%20to%20Machine%20Learning/07%20Machine%20Learning%20Software%20Frameworks.md)
- [08 Getting Started with Edge Impulse](Module%201%20-%20Introduction%20to%20Machine%20Learning/08%20Getting%20Started%20with%20Edge%20Impulse.md)
- [09 Data Collection](Module%201%20-%20Introduction%20to%20Machine%20Learning/09%20Data%20Collection.md)
- [10 Feature Extraction from Motion Data](Module%201%20-%20Introduction%20to%20Machine%20Learning/10%20Feature%20Extraction%20from%20Motion%20Data.md)
- [11 Feature Selection in Edge Impulse](Module%201%20-%20Introduction%20to%20Machine%20Learning/11%20Feature%20Selection%20in%20Edge%20Impulse.md)
- [12 Machine Learning Pipeline](Module%201%20-%20Introduction%20to%20Machine%20Learning/12%20Machine%20Learning%20Pipeline.md)
- [13 Review of Module 1](Module%201%20-%20Introduction%20to%20Machine%20Learning/13%20Review%20of%20Module%201.md)

### Module 2 - Introduction to Neural Networks

- [01 Introduction to Neural Networks](Module%202%20-%20Introduction%20to%20Neural%20Networks/01%20Introduction%20to%20Neural%20Networks.md)
- [02 Model Training in Edge Impulse](Module%202%20-%20Introduction%20to%20Neural%20Networks/02%20Model%20Training%20in%20Edge%20Impulse.md)
- [03 How to Evaluate a Model](Module%202%20-%20Introduction%20to%20Neural%20Networks/03%20How%20to%20Evaluate%20a%20Model.md)
- [04 Underfitting and Overfitting](Module%202%20-%20Introduction%20to%20Neural%20Networks/04%20Underfitting%20and%20Overfitting.md)
- [05 How to Use a Model for Inference](Module%202%20-%20Introduction%20to%20Neural%20Networks/05%20How%20to%20Use%20a%20Model%20for%20Inference.md)
- [06 Testing Inference with a Smartphone](Module%202%20-%20Introduction%20to%20Neural%20Networks/06%20Testing%20Inference%20with%20a%20Smartphone.md)
- [07 How to Deploy a Trained Model to Arduino](Module%202%20-%20Introduction%20to%20Neural%20Networks/07%20How%20to%20Deploy%20a%20Trained%20Model%20to%20Arduino.md)
- [08 Anomaly Detection](Module%202%20-%20Introduction%20to%20Neural%20Networks/08%20Anomaly%20Detection.md)
- [09 Industrial Embedded Machine Learning Demo](Module%202%20-%20Introduction%20to%20Neural%20Networks/09%20Industrial%20Embedded%20Machine%20Learning%20Demo.md)
- [10 Module Review](Module%202%20-%20Introduction%20to%20Neural%20Networks/10%20Module%20Review.md)

### Module 3 - Audio classification and Keyword Spotting

- [01 Introduction to Audio Classification](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/01%20Introduction%20to%20Audio%20Classification.md)
- [02 Audio Data Capture](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/02%20Audio%20Data%20Capture.md)
- [03 Audio Feature Extraction](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/03%20Audio%20Feature%20Extraction.md)
- [04 Introduction to Convolutional Neural Networks](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/04%20Introduction%20to%20Convolutional%20Neural%20Networks.md)
- [05 Modifying the Neural Network](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/05%20Modifying%20the%20Neural%20Network.md)
- [06 Deploy Keyword Spotting System](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/06%20Deploy%20Keyword%20Spotting%20System.md)
- [07 Implementation Strategies](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/07%20Implementation%20Strategies.md)
- [08 Sensor Fusion](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/08%20Sensor%20Fusion.md)
- [09 Conclusion](Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/09%20Conclusion.md)

<!-- course-inventory:end -->
