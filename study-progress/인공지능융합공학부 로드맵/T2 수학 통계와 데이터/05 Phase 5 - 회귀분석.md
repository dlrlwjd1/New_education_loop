# T2 Phase 5 — 회귀분석

> 학부 교과 **회귀분석(2학년 1학기, 이론실습병행 3학점)** · **머신러닝(2-2)의 선이수 과목**
> 교과목해설: "데이터 과학과 머신러닝에서 중요한 통계적 방법인 회귀분석에 대해 포괄적인 소개… 선형 및 비선형 회귀모델, 가정, 추정기법, 모델 평가 등에 대해 배우게 된다. 실습을 통해 실제 데이터 세트에 회귀분석을 적용하고 그에 대한 결과를 도출"

- 목표: 회귀 모델을 적합시키는 데서 끝내지 않고, **가정이 깨졌는지 진단하고 고친다.**
- 분량: 약 18시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 선형회귀의 가정(선형성·독립성·등분산성·정규성)을 대고, 각각을 어떤 그림으로 확인하는지 안다
- 회귀계수를 "다른 변수를 고정했을 때"라는 조건과 함께 해석한다
- 잔차 그림을 보고 무엇이 잘못됐는지 짚는다
- 다중공선성을 VIF로 확인하고 대응한다
- 로지스틱 회귀로 분류를 하고, 회귀와 무엇이 다른지 설명한다
- R²·조정 R²·MSE·MAE 중 상황에 맞는 지표를 고른다

> **이 Phase가 T3의 문턱이다.** 학부 커리큘럼이 회귀분석을 머신러닝의 선이수로 둔 이유가 있다. 회귀는 가장 단순한 지도학습 모델이고, 여기서 배우는 **과적합·정규화·모델 평가**가 이후 모든 모델에 그대로 간다.

## 5-A. 통계 모형으로서의 회귀

메인: Statistics with Python, `Course 3 - Fitting Statistical Models to Data with Python`

Module 1 — 모형화의 전제

- [ ] [01 Welcome to the Course.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/01%20Welcome%20to%20the%20Course.md)
- [ ] [02 Fitting Statistical Models to Data with Python Guidelines.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/02%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python%20Guidelines.md)
- [ ] [03 What Do We Mean by Fitting Models to Data.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/03%20What%20Do%20We%20Mean%20by%20Fitting%20Models%20to%20Data.md)
- [ ] [04 Types of Variables in Statistical Modeling.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/04%20Types%20of%20Variables%20in%20Statistical%20Modeling.md)
- [ ] [05 Different Study Designs Generate Different Types of Data - Implications for Modeling.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/05%20Different%20Study%20Designs%20Generate%20Different%20Types%20of%20Data%20-%20Implications%20for%20Modeling.md)
- [ ] [06 Objectives of Model Fitting - Inference vs. Prediction.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/06%20Objectives%20of%20Model%20Fitting%20-%20Inference%20vs.%20Prediction.md)
- [ ] [07 Plotting Predictions and Prediction Uncertainty.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/07%20Plotting%20Predictions%20and%20Prediction%20Uncertainty.md)
- [ ] [08 Python Statistics Landscape.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%201%20-%20Overview%20and%20Considerations%20for%20Statistical%20Modeling/08%20Python%20Statistics%20Landscape.md)

Module 2 — 독립 데이터에 모형 적합하기. **선형회귀·로지스틱 회귀의 본체**

- [ ] [01 Linear Regression Introduction.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%202%20-%20Fitting%20Models%20to%20Independent%20Data/01%20Linear%20Regression%20Introduction.md)
- [ ] [02 Linear Regression Inference.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%202%20-%20Fitting%20Models%20to%20Independent%20Data/02%20Linear%20Regression%20Inference.md)
- [ ] [03 Interview - Causation vs Correlation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%202%20-%20Fitting%20Models%20to%20Independent%20Data/03%20Interview%20-%20Causation%20vs%20Correlation.md)
- [ ] [04 Logistic Regression Introduction.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%202%20-%20Fitting%20Models%20to%20Independent%20Data/04%20Logistic%20Regression%20Introduction.md)
- [ ] [05 Logistic Regression Inference.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%202%20-%20Fitting%20Models%20to%20Independent%20Data/05%20Logistic%20Regression%20Inference.md)

Module 3 — 종속 데이터(다수준·반복측정). 학부 교과 범위를 넘지만, **같은 사람에게서 여러 번 측정한 데이터**를 다룰 때 필요하다

- [ ] [01 What are Multilevel Models and Why Do We Fit Them.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/01%20What%20are%20Multilevel%20Models%20and%20Why%20Do%20We%20Fit%20Them.md)
- [ ] [02 Multilevel Linear Regression Models.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/02%20Multilevel%20Linear%20Regression%20Models.md)
- [ ] [03 Multilevel Logistic Regression models.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/03%20Multilevel%20Logistic%20Regression%20models.md)
- [ ] [04 Practice with Multilevel Modeling - The Cal Poly App.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/04%20Practice%20with%20Multilevel%20Modeling%20-%20The%20Cal%20Poly%20App.md)
- [ ] [05 What are Marginal Models and Why Do We Fit Them.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/05%20What%20are%20Marginal%20Models%20and%20Why%20Do%20We%20Fit%20Them.md)
- [ ] [06 Marginal Linear Regression Models.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/06%20Marginal%20Linear%20Regression%20Models.md)
- [ ] [07 Marginal Logistic Regression.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%203%20-%20Fitting%20Models%20to%20Dependent%20Data/07%20Marginal%20Logistic%20Regression.md)

Module 4 — 특수 주제

- [ ] [01 Should We Use Survey Weights When Fitting Models.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/01%20Should%20We%20Use%20Survey%20Weights%20When%20Fitting%20Models.md)
- [ ] [02 Introduction to Bayesian.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/02%20Introduction%20to%20Bayesian.md)
- [ ] [03 Bayesian Approaches to Statistics and Modeling.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/03%20Bayesian%20Approaches%20to%20Statistics%20and%20Modeling.md)
- [ ] [04 Bayesian Approaches Case Study - Part I.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/04%20Bayesian%20Approaches%20Case%20Study%20-%20Part%20I.md)
- [ ] [05 Bayesian Approaches Case Study - Part II.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/05%20Bayesian%20Approaches%20Case%20Study%20-%20Part%20II.md)
- [ ] [06 Bayesian Approaches Case Study - Part III.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%203%20-%20Fitting%20Statistical%20Models%20to%20Data%20with%20Python/Module%204%20-%20Special%20Topics/06%20Bayesian%20Approaches%20Case%20Study%20-%20Part%20III.md)

## 5-B. 머신러닝 관점의 회귀

메인: IBM Data Science, `09 Machine Learning with Python` Module 2. 같은 회귀를 **예측 성능** 관점에서 다시 본다

- [ ] [01 Introduction to Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/01%20Introduction%20to%20Regression.md)
- [ ] [02 Introduction to Simple Linear Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/02%20Introduction%20to%20Simple%20Linear%20Regression.md)
- [ ] [03 Introduction to Multiple Linear Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/03%20Introduction%20to%20Multiple%20Linear%20Regression.md)
- [ ] [04 Polynomial and Non-Linear Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/04%20Polynomial%20and%20Non-Linear%20Regression.md)
- [ ] [05 Introduction to Logistic Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/05%20Introduction%20to%20Logistic%20Regression.md)
- [ ] [06 Training a Logistic Regression Model.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%202%20-%20Linear%20and%20Logistic%20Regression/06%20Training%20a%20Logistic%20Regression%20Model.md)

## 5-C. 실습 — 데이터 준비부터 모델 평가까지

메인: IBM Data Science, `07 Data Analysis with Python` Module 4~5

Module 4 — 모델 개발

- [ ] [01 Model Development.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/01%20Model%20Development.md)
- [ ] [02 Linear Regression and Multiple Linear Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/02%20Linear%20Regression%20and%20Multiple%20Linear%20Regression.md)
- [ ] [03 Model Evaluation using Visualization.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/03%20Model%20Evaluation%20using%20Visualization.md)
- [ ] [04 Polynomial Regression and Pipelines.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/04%20Polynomial%20Regression%20and%20Pipelines.md)
- [ ] [05 Measures for In-Sample Evaluation.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/05%20Measures%20for%20In-Sample%20Evaluation.md)
- [ ] [06 Prediction and Decision Making.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%204%20-%20Model%20Development/06%20Prediction%20and%20Decision%20Making.md)

Module 5 — 모델 평가와 정련. **과적합·교차검증·릿지 회귀가 여기 있다**

- [ ] [01 Model Evaluation and Refinement.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%205%20-%20Model%20Evaluation%20and%20Refinement/01%20Model%20Evaluation%20and%20Refinement.md)
- [ ] [02 Overfitting, Underfitting and Model Selection.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%205%20-%20Model%20Evaluation%20and%20Refinement/02%20Overfitting,%20Underfitting%20and%20Model%20Selection.md)
- [ ] [03 Ridge Regression.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%205%20-%20Model%20Evaluation%20and%20Refinement/03%20Ridge%20Regression.md)
- [ ] [04 Grid Search.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/07%20Data%20Analysis%20with%20Python/Module%205%20-%20Model%20Evaluation%20and%20Refinement/04%20Grid%20Search.md)

함께 보기: Data Analytics, `Course 3` module 04 (더 짧은 복습)

- [ ] [01 Module 4 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/01%20Module%204%20Introduction.md)
- [ ] [02 Confidence Intervals.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/02%20Confidence%20Intervals.md)
- [ ] [03 One-Sample t-Tests.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/03%20One-Sample%20t-Tests.md)
- [ ] [04 Two-Sample t-Tests.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/04%20Two-Sample%20t-Tests.md)
- [ ] [05 Simulation Uniform.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/05%20Simulation%20Uniform.md)
- [ ] [06 Simulation Normal.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/06%20Simulation%20Normal.md)
- [ ] [07 What is Linear Regression.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/07%20What%20is%20Linear%20Regression.md)
- [ ] [08 Choosing an Independent Variable.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/08%20Choosing%20an%20Independent%20Variable.md)
- [ ] [09 Training the Model.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/09%20Training%20the%20Model.md)
- [ ] [10 Interpreting the Output of a Regression Model.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/10%20Interpreting%20the%20Output%20of%20a%20Regression%20Model.md)
- [ ] [11 Prediction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/11%20Prediction.md)
- [ ] [12 Multiple Linear Regression.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/12%20Multiple%20Linear%20Regression.md)
- [ ] [13 Training a Multiple Linear Regression Model.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/13%20Training%20a%20Multiple%20Linear%20Regression%20Model.md)
- [ ] [14 Interpreting Multiple Linear Regression.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/14%20Interpreting%20Multiple%20Linear%20Regression.md)
- [ ] [15 Encoding Categorical Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/15%20Encoding%20Categorical%20Data.md)
- [ ] [16 Modeling with Categorical Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/16%20Modeling%20with%20Categorical%20Data.md)
- [ ] [17 Prediction Multiple Linear Regression.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/17%20Prediction%20Multiple%20Linear%20Regression.md)
- [ ] [18 Evaluating Your Model.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/18%20Evaluating%20Your%20Model.md)
- [ ] [19 LLMs for Model Iteration.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/19%20LLMs%20for%20Model%20Iteration.md)
- [ ] [20 The Linear Regression Process.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2004%20Inferential%20statistics%20and%20regression/20%20The%20Linear%20Regression%20Process.md)

## 산출물

회귀분석 보고서 하나. **모델을 적합시킨 것만으로는 산출물이 안 된다.** 아래 넷이 다 있어야 한다.

1. 모델식과 계수 해석 — 계수 하나를 골라 "이 값이 1 늘면 …" 문장으로 쓴다
2. 잔차 진단 4종 그림 (잔차 vs 적합값 / Q-Q / 스케일-위치 / 레버리지) 과 각각에서 읽어 낸 것
3. VIF 표와 다중공선성 대응 기록
4. 학습/검증 분리 후의 성능, 그리고 **훈련 성능과 검증 성능의 차이를 어떻게 해석했는지**

## 다음 단계

→ 트랙 완료. [T3 머신러닝과 딥러닝](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/README.md) 으로 넘어간다.
