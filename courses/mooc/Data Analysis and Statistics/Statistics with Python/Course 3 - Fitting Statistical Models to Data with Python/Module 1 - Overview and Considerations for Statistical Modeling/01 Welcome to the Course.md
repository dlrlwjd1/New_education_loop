# Welcome to the Course!

## 개요
- Statistics with Python 전문과정의 세 번째 코스인 "Fitting Statistical Models to Data with Python"의 전체 구성을 소개하는 오리엔테이션 강의
- 코스는 총 4개 파트로 구성: 모델 적합 개요, 선형·로지스틱 회귀, 다층·주변 모델, 특수 주제
- Jupyter 노트북과 Python 기반 튜토리얼로 실습하며 진행

## 내용

### 파트 1 — 모델 적합의 개요와 고려사항
- 데이터에 모델을 적합(fitting models to data)한다는 것이 실제로 무엇을 의미하는지 살펴본다.
- 주요 고려사항: 변수의 유형(type of variables)과 연구에서의 역할, 결측 데이터(missing data)의 적절한 처리, 모델 적합 시 연구 설계(study design) 반영, 명확한 목표 정의의 중요성, 예측 불확실성(prediction uncertainty)의 측정.
- 컴퓨팅 측면에서는 Python 통계 생태계(Python statistics landscape)를 소개하고 Jupyter 노트북으로 모델링 과정을 안내한다.

### 파트 2 — 선형·로지스틱 회귀
- 두 가지 기본 회귀인 선형 회귀(linear regression)와 로지스틱 회귀(logistic regression)를 다룬다.
- 모델을 적합하는 법, 적합도(fit)를 평가하는 법, 데이터 맥락에서 결과를 해석하는 법을 배운다.
- Cartwheel 데이터셋을 사용해 키(height)로 옆돌기 거리(cartwheel distance)를 예측하고, 이진 결과변수(binary outcome variable)인 옆돌기 완수 확률을 나이(age)로 예측한다.
- 연관성(association)과 인과성(causality)의 차이에 대한 동료들의 논의와 데이터 시각화의 중요성도 다룬다.

### 파트 3 — 다층 모델과 주변 모델
- 다층 선형 모델(multilevel linear model)과 주변 모델(marginal model)에 초점을 맞춘다.
- 랜덤 효과(random effects)로 변수 간 종속성(dependency)을 설명하는 방법과, GEE(generalized estimating equation, 일반화 추정 방정식) 기법으로 주변 모델을 다루는 방법을 살펴본다.
- 예시: 평생 비흡연자일 확률 예측, 경찰에 대한 인식·신뢰 연구에서의 면접원 효과(interviewer effects) 분석.

### 파트 4 — 특수 주제
- 다양한 표본 설계(sampling designs)와 모델링 과정에 조사 가중치(survey weights)를 포함할지 여부를 다룬다.
- 랜덤 포레스트(random forests) 예제와 베이지안 기법(Bayesian techniques) 심화 사례 연구를 소개하며, 베이지안 모델링 언어로 Stan을 사용한다.

### 학습 지원 요소
- 여러 방식의 지식 점검 기회, 심화 학습용 읽기 자료와 리소스, 인터랙티브 웹 애플릿 실습, 다수의 Python 기반 튜토리얼이 제공된다.

## 요약
- 이 코스는 통계 모델을 데이터에 적합하는 과정을 4개 파트로 나누어 다룬다.
- 파트 1: 모델 적합의 의미와 고려사항(변수 유형, 결측 데이터, 연구 설계, 예측 불확실성).
- 파트 2: 선형·로지스틱 회귀와 해석, 연관성 vs 인과성.
- 파트 3: 랜덤 효과와 GEE를 이용한 다층·주변 모델.
- 파트 4: 조사 가중치, 랜덤 포레스트, Stan 기반 베이지안 사례 연구.
