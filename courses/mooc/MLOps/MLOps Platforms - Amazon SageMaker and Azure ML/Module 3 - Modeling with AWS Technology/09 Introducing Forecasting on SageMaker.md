# Introducing Forecasting on SageMaker

## 개요
- AWS Academy Machine Learning Foundations Module 4 자료(오디오 요약 1분 36초) — **Amazon Forecast**를 활용한 시계열 예측(time series forecasting) 개념을 소개하는 읽기 자료.

## 내용

### 요약
- 시계열 예측 개념과 Amazon Forecast 서비스 사용법을 개괄. 흔한 예측 사용 사례와 시간 순서가 있는 데이터를 다룰 때의 어려움을 논의.
- Amazon Forecast의 구성 요소: 데이터 임포트, 예측기(predictor) 학습, 정확도 평가, 예측 생성.

### 핵심 포인트
- 예측(forecasting)은 과거 데이터로부터 미래 값을 예측한다.
- 시계열 데이터는 고유한 어려움을 갖는다.
- Amazon Forecast는 예측기 모델 구축을 자동화한다.
- **분위수 손실(Quantile loss)**과 **RMSE**로 정확도를 평가한다.
- 여러 알고리즘을 지원한다.

### 성찰 질문
1. 어떤 비즈니스 문제가 예측 과제로 프레이밍될 수 있는가?
2. 시계열 데이터에서 누락된 타임스탬프나 이상치를 어떻게 처리하겠는가?
3. Amazon Forecast의 어떤 구성 요소가 자동화된 모델 구축과 평가를 가능하게 하는가?
4. 단순 RMSE 대신 wQuantileLoss로 여러 분위수에 걸쳐 예측을 평가하는 이유는 무엇인가?
5. 프로모션 같은 관련 데이터가 정확도를 어떻게 개선할 수 있는가?

### 도전 과제
1. 공개 시계열 데이터셋을 찾아 Amazon Forecast에 불러와보기.
2. Pandas로 리샘플링, 결측 데이터 등의 어려움을 처리해보기.
3. 여러 알고리즘으로 예측 모델을 학습해보기.
4. 백테스팅과 RMSE로 모델 정확도를 평가해보기.
5. 관련된 다른 시계열을 병합해 데이터를 보강해보기.

## 요약
- Amazon Forecast는 데이터 임포트 → 예측기 학습 → 정확도 평가(RMSE, wQuantileLoss) → 예측 생성으로 이어지는 시계열 예측 파이프라인을 자동화하며, 시간 순서 데이터 특유의 어려움(결측 타임스탬프, 이상치)을 다루는 것이 핵심 과제다.
