# T3 Phase 4 — 기계학습 프로젝트

> 학부 교과 **기계학습프로젝트(3학년 1학기, 이론실습병행 3학점)** · 선이수 = 머신러닝
> 교과목해설: "기계 학습 이론과 기법을 실제 프로젝트에 적용하여 문제를 해결하고 모델을 개발한다. 데이터 수집, 모델 선택, 성능 평가 및 결과 분석을 포함한 종합적인 학습 경험을 제공한다"

- 목표: 모델 하나를 만드는 것이 아니라 **실험을 관리해 가며 성능을 끌어올리는 과정**을 굴린다.
- 분량: 약 22시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 하나의 평가 지표(single number evaluation metric)를 정하고 그 이유를 말한다
- 훈련/개발/테스트 분포가 어긋났을 때 생기는 증상을 알아본다
- 오류 분석(error analysis)으로 **다음에 무엇을 고칠지** 데이터에 근거해 정한다
- 사람 수준 성능(human-level performance)을 기준으로 편향과 분산 중 어느 쪽을 먼저 칠지 판단한다
- 실험을 MLflow 같은 도구로 기록해 어제의 실험을 오늘 재현한다
- 피처 엔지니어링과 편향 점검을 파이프라인의 한 단계로 넣는다

> 이 Phase가 [T6 Phase 5(캡스톤)](../T6%20%EA%B8%B0%ED%9A%8D%20%ED%86%B5%ED%95%A9%20%ED%98%84%EC%9E%A5/05%20Phase%205%20-%20%EC%BA%A1%EC%8A%A4%ED%86%A4%20%EB%94%94%EC%9E%90%EC%9D%B8%20AI.md)의 예행연습이다. 여기서 "실험 기록이 남는 습관"을 못 들이면 캡스톤에서 무엇이 성능을 올렸는지 설명하지 못한다.

## 4-A. ML 프로젝트 전략

메인: Deep Learning Specialization, `03 Structuring Machine Learning Projects`. **강의 시간은 짧지만 밀도가 가장 높은 강좌다**

week 1 — 지표 정하기, 사람 수준 성능, 편향/분산 분해

- [ ] [01 Why ML Strategy.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/01%20Why%20ML%20Strategy.md)
- [ ] [02 Orthogonalization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/02%20Orthogonalization.md)
- [ ] [03 Single Number Evaluation Metric.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/03%20Single%20Number%20Evaluation%20Metric.md)
- [ ] [04 Satisficing and Optimizing Metric.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/04%20Satisficing%20and%20Optimizing%20Metric.md)
- [ ] [05 Train Dev Test Distributions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/05%20Train%20Dev%20Test%20Distributions.md)
- [ ] [06 Size of the Dev and Test Sets.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/06%20Size%20of%20the%20Dev%20and%20Test%20Sets.md)
- [ ] [07 When to Change Dev Test Sets and Metrics.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/07%20When%20to%20Change%20Dev%20Test%20Sets%20and%20Metrics.md)
- [ ] [08 Why Human-level Performance.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/08%20Why%20Human-level%20Performance.md)
- [ ] [09 Avoidable Bias.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/09%20Avoidable%20Bias.md)
- [ ] [10 Understanding Human-level Performance.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/10%20Understanding%20Human-level%20Performance.md)
- [ ] [11 Surpassing Human-level Performance.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/11%20Surpassing%20Human-level%20Performance.md)
- [ ] [12 Improving Your Model Performance.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week1%20ML%20Strategy%201/12%20Improving%20Your%20Model%20Performance.md)

week 2 — 오류 분석, 데이터 불일치, 전이학습·다중작업학습

- [ ] [01 Carrying Out Error Analysis.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/01%20Carrying%20Out%20Error%20Analysis.md)
- [ ] [02 Cleaning Up Incorrectly Labeled Data.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/02%20Cleaning%20Up%20Incorrectly%20Labeled%20Data.md)
- [ ] [03 Build Your First System Quickly Then Iterate.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/03%20Build%20Your%20First%20System%20Quickly%20Then%20Iterate.md)
- [ ] [04 Training and Testing on Different Distributions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/04%20Training%20and%20Testing%20on%20Different%20Distributions.md)
- [ ] [05 Bias and Variance with Mismatched Data Distributions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/05%20Bias%20and%20Variance%20with%20Mismatched%20Data%20Distributions.md)
- [ ] [06 Addressing Data Mismatch.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/06%20Addressing%20Data%20Mismatch.md)
- [ ] [07 Transfer Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/07%20Transfer%20Learning.md)
- [ ] [08 Multi-task Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/08%20Multi-task%20Learning.md)
- [ ] [09 What is End-to-end Deep Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/09%20What%20is%20End-to-end%20Deep%20Learning.md)
- [ ] [10 Whether to Use End-to-end Deep Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/03%20Structuring%20Machine%20Learning%20Projects/week2%20ML%20Strategy%202/10%20Whether%20to%20Use%20End-to-end%20Deep%20Learning.md)

## 4-B. 실험을 기록하며 개발하기

메인: ML Model Development and Tracking - Hands-on Guide

- [ ] [01 Course Introduction.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/01%20Course%20Introduction.md)
- [ ] [02 Model Development Overview.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/02%20Model%20Development%20Overview.md)
- [ ] [03 Model Training and Hyperparameter Tuning.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/03%20Model%20Training%20and%20Hyperparameter%20Tuning.md)
- [ ] [04 World of CPUs and GPUs.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/04%20World%20of%20CPUs%20and%20GPUs.md)
- [ ] [05 How to Reach Out and Engage with the Community.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/05%20How%20to%20Reach%20Out%20and%20Engage%20with%20the%20Community.md)
- [ ] [06 Quiz - Model Development (Graded Assignment).md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%201%20-%20Model%20Development/06%20Quiz%20-%20Model%20Development%20%28Graded%20Assignment%29.md)
- [ ] [01 Introduction to MLflow.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/01%20Introduction%20to%20MLflow.md)
- [ ] [02 Demo - Setting up MLflow.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/02%20Demo%20-%20Setting%20up%20MLflow.md)
- [ ] [03 Demo 1 - Running an Experiment and Storing the Result on MLflow.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/03%20Demo%201%20-%20Running%20an%20Experiment%20and%20Storing%20the%20Result%20on%20MLflow.md)
- [ ] [04 Demo 2 - Running an Experiment and Storing the Result on MLflow.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/04%20Demo%202%20-%20Running%20an%20Experiment%20and%20Storing%20the%20Result%20on%20MLflow.md)
- [ ] [05 Demo - MLflow Model Artifact and Versioning.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/05%20Demo%20-%20MLflow%20Model%20Artifact%20and%20Versioning.md)
- [ ] [06 Lab - Hands on with MLflow.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/06%20Lab%20-%20Hands%20on%20with%20MLflow.md)
- [ ] [07 Quiz - Model Development and Training (Lab Access Reading).md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/07%20Quiz%20-%20Model%20Development%20and%20Training%20%28Lab%20Access%20Reading%29.md)
- [ ] [08 Quiz - Experiment Tracking (Graded Assignment).md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/08%20Quiz%20-%20Experiment%20Tracking%20%28Graded%20Assignment%29.md)
- [ ] [09 The MLflow Migration - Role Play.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%202%20-%20Experiment%20Tracking/09%20The%20MLflow%20Migration%20-%20Role%20Play.md)
- [ ] [01 Deploy App for Insurance Agents to Upload all Insurance Claims.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/01%20Deploy%20App%20for%20Insurance%20Agents%20to%20Upload%20all%20Insurance%20Claims.md)
- [ ] [02 Demo - Generate Dummy Data for the Project.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/02%20Demo%20-%20Generate%20Dummy%20Data%20for%20the%20Project.md)
- [ ] [03 Demo - Setup MLflow Server and Run the ML Experiment.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/03%20Demo%20-%20Setup%20MLflow%20Server%20and%20Run%20the%20ML%20Experiment.md)
- [ ] [04 Demo - Register the Model and Setup BentoML for Serving ML models.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/04%20Demo%20-%20Register%20the%20Model%20and%20Setup%20BentoML%20for%20Serving%20ML%20models.md)
- [ ] [05 Demo - Upgrade Python Flask App to Connect to BentoML for Online Serving.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/05%20Demo%20-%20Upgrade%20Python%20Flask%20App%20to%20Connect%20to%20BentoML%20for%20Online%20Serving.md)
- [ ] [06 Lab - Deploy App for Insurance Agents to Upload all Insurance Claims.md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/06%20Lab%20-%20Deploy%20App%20for%20Insurance%20Agents%20to%20Upload%20all%20Insurance%20Claims.md)
- [ ] [07 Quiz - MLflow and BentoML (Graded Assignment).md](../../../courses/mooc/MLOps/ML%20Model%20Development%20and%20Tracking%20-%20Hands-on%20Guide/Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/07%20Quiz%20-%20MLflow%20and%20BentoML%20%28Graded%20Assignment%29.md)

## 4-C. 피처 엔지니어링과 편향 점검

메인: IBM AI Enterprise Workflow, `Course 3 - AI Workflow - Feature Engineering and Bias Detection`

- [ ] [01 Data Transformations Overview.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/01%20Data%20Transformations%20Overview.md)
- [ ] [02 Data Transformation - Through the eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/02%20Data%20Transformation%20-%20Through%20the%20eyes%20of%20our%20Working%20Example.md)
- [ ] [03 Transforms with scikit-learn.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/03%20Transforms%20with%20scikit-learn.md)
- [ ] [04 Pipelines.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/04%20Pipelines.md)
- [ ] [05 Getting Started - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/05%20Getting%20Started%20-%20Check%20for%20Understanding.md)
- [ ] [06 Introduction to Class Imbalance.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/06%20Introduction%20to%20Class%20Imbalance.md)
- [ ] [07 Class imbalance - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/07%20Class%20imbalance%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [08 Class Imbalance.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/08%20Class%20Imbalance.md)
- [ ] [09 Sampling Techniques.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/09%20Sampling%20Techniques.md)
- [ ] [10 Class Imbalance Deep Dive.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/10%20Class%20Imbalance%20Deep%20Dive.md)
- [ ] [11 Models that Naturally Handle Imbalance.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/11%20Models%20that%20Naturally%20Handle%20Imbalance.md)
- [ ] [12 Data Bias.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/12%20Data%20Bias.md)
- [ ] [13 Class Imbalance, Data Bias - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/13%20Class%20Imbalance,%20Data%20Bias%20-%20Check%20for%20Understanding.md)
- [ ] [14 Introduction to Dimensionality Reduction.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/14%20Introduction%20to%20Dimensionality%20Reduction.md)
- [ ] [15 Dimensionality Reduction - Through the Eyes of Our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/15%20Dimensionality%20Reduction%20-%20Through%20the%20Eyes%20of%20Our%20Working%20Example.md)
- [ ] [16 Why is Dimensionality Reduction Important.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/16%20Why%20is%20Dimensionality%20Reduction%20Important.md)
- [ ] [17 Dimension Reduction.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/17%20Dimension%20Reduction.md)
- [ ] [18 Dimensionality Reduction and Topic models.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/18%20Dimensionality%20Reduction%20and%20Topic%20models.md)
- [ ] [19 Dimensionality Reduction - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/19%20Dimensionality%20Reduction%20-%20Check%20for%20Understanding.md)
- [ ] [20 Case Study Intro - Feature Engineering.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/20%20Case%20Study%20Intro%20-%20Feature%20Engineering.md)
- [ ] [21 Topic modeling - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/21%20Topic%20modeling%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [22 Getting Started with the Topic Modeling Case Study (hands-on).md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/22%20Getting%20Started%20with%20the%20Topic%20Modeling%20Case%20Study%20%28hands-on%29.md)
- [ ] [23 Case Study Answer Key Notebook.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/23%20Case%20Study%20Answer%20Key%20Notebook.md)
- [ ] [24 Case Study - Topic Modeling - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/24%20Case%20Study%20-%20Topic%20Modeling%20-%20Check%20for%20Understanding.md)
- [ ] [25 Data Transforms and Feature Engineering - Summary Review.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/25%20Data%20Transforms%20and%20Feature%20Engineering%20-%20Summary%20Review.md)
- [ ] [26 Data Transforms and Feature Engineering - End of Module Quiz.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/26%20Data%20Transforms%20and%20Feature%20Engineering%20-%20End%20of%20Module%20Quiz.md)
- [ ] [01 Exploring IBM's AI Fairness 360 Toolkit.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/01%20Exploring%20IBM's%20AI%20Fairness%20360%20Toolkit.md)
- [ ] [02 ai360 - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/02%20ai360%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [03 Introduction to 360 (hands-on).md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/03%20Introduction%20to%20360%20%28hands-on%29.md)
- [ ] [04 ai360 Tutorial - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/04%20ai360%20Tutorial%20-%20Check%20for%20Understanding.md)
- [ ] [05 Introduction to Outliers.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/05%20Introduction%20to%20Outliers.md)
- [ ] [06 Outlier Detection - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/06%20Outlier%20Detection%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [07 Outlier Detection.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/07%20Outlier%20Detection.md)
- [ ] [08 Outliers.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/08%20Outliers.md)
- [ ] [09 Outlier Detection - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/09%20Outlier%20Detection%20-%20Check%20for%20Understanding.md)
- [ ] [10 Introduction to Unsupervised learning.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/10%20Introduction%20to%20Unsupervised%20learning.md)
- [ ] [11 Unsupervised learning - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/11%20Unsupervised%20learning%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [12 An Overview of Unsupervised Learning.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/12%20An%20Overview%20of%20Unsupervised%20Learning.md)
- [ ] [13 Clustering.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/13%20Clustering.md)
- [ ] [14 Unsupervised Learning.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/14%20Unsupervised%20Learning.md)
- [ ] [15 Clustering Evaluation.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/15%20Clustering%20Evaluation.md)
- [ ] [16 Unsupervised Learning - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/16%20Unsupervised%20Learning%20-%20Check%20for%20Understanding.md)
- [ ] [17 Clustering - Through the Eyes of our Working Example.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/17%20Clustering%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [ ] [18 Getting Started with the Clustering Case Study (hands-on).md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/18%20Getting%20Started%20with%20the%20Clustering%20Case%20Study%20%28hands-on%29.md)
- [ ] [19 Case Study Answer Key Notebook.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/19%20Case%20Study%20Answer%20Key%20Notebook.md)
- [ ] [20 CASE STUDY - Clustering - Check for Understanding.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/20%20CASE%20STUDY%20-%20Clustering%20-%20Check%20for%20Understanding.md)
- [ ] [21 Pattern Recognition and Data Mining Best Practices - Summary Review.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/21%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices%20-%20Summary%20Review.md)
- [ ] [22 Pattern Recognition and Data Mining Best Practices - End of Module Quiz.md](../../../courses/mooc/MLOps/IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/22%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices%20-%20End%20of%20Module%20Quiz.md)

## 4-D. 모델 평가를 한 번 더 — LLM 시대의 평가

함께 보기: LLM Optimization & Evaluation, `Course 1`. 전통 지표만으로 평가가 안 되는 경우(생성 모델)를 미리 본다. [T4 Phase 2(자연어처리 II)](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/02%20Phase%202%20-%20%EC%9E%90%EC%97%B0%EC%96%B4%EC%B2%98%EB%A6%AC%20II%20Transformer%EC%99%80%20LLM.md)의 예습이 된다

- [ ] [01 Welcome! Let Us Set Your Production ML Goals.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/01%20Welcome!%20Let%20Us%20Set%20Your%20Production%20ML%20Goals.md)
- [ ] [02 The What and How of Scikit-learn Pipelines.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/02%20The%20What%20and%20How%20of%20Scikit-learn%20Pipelines.md)
- [ ] [03 How to Build a ColumnTransformer - Step-by-Step.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/03%20How%20to%20Build%20a%20ColumnTransformer%20-%20Step-by-Step.md)
- [ ] [04 Build a Pipeline for Churn Prediction.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md)
- [ ] [05 AI Graded Open-Ended Questions.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/05%20AI%20Graded%20Open-Ended%20Questions.md)
- [ ] [01 Why a High Accuracy Score Can Be a Lie.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/01%20Why%20a%20High%20Accuracy%20Score%20Can%20Be%20a%20Lie.md)
- [ ] [02 From Evaluation to Recommendation.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/02%20From%20Evaluation%20to%20Recommendation.md)
- [ ] [03 How to Diagnose Overfitting with TensorBoard.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/03%20How%20to%20Diagnose%20Overfitting%20with%20TensorBoard.md)
- [ ] [04 Apply Your Judgment - Defend Your Model Choice.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/04%20Apply%20Your%20Judgment%20-%20Defend%20Your%20Model%20Choice.md)
- [ ] [05 Submit Your Feature Engineering and Evaluation Report.md](../../../courses/mooc/MLOps/LLM%20Optimization%20&%20Evaluation/Course%201%20-%20Engineer%20Features%20and%20Evaluate%20Models%20for%20Production/Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/05%20Submit%20Your%20Feature%20Engineering%20and%20Evaluation%20Report.md)

## 4-E. 처음부터 끝까지 한 번 — 캡스톤 형식

함께 보기: IBM Data Science, `10 Applied Data Science Capstone` (데이터 수집 → EDA → 대시보드 → 분류 모델 → 발표까지 한 흐름)

- [ ] [01 Project Scenario and Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/01%20Project%20Scenario%20and%20Overview.md)
- [ ] [02 Data Collection Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/02%20Data%20Collection%20Overview.md)
- [ ] [03 Data Wrangling Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/03%20Data%20Wrangling%20Overview.md)
- [ ] [01 Exploratory Data Analysis Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%202%20-%20Exploratory%20Data%20Analysis%20%28EDA%29/01%20Exploratory%20Data%20Analysis%20Overview.md)
- [ ] [01 Interactive Visual Analytics and Dashboards.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%203%20-%20Interactive%20Visual%20Analytics%20and%20Dashboard/01%20Interactive%20Visual%20Analytics%20and%20Dashboards.md)
- [ ] [01 Predictive Analysis Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%204%20-%20Predictive%20Analysis%20%28Classification%29/01%20Predictive%20Analysis%20Overview.md)
- [ ] [01 Elements Of A Successful Data Findings Report.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%205%20-%20Present%20Your%20Data-Driven%20Insights/01%20Elements%20Of%20A%20Successful%20Data%20Findings%20Report.md)
- [ ] [02 Best Practices For Presenting Your Findings.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%205%20-%20Present%20Your%20Data-Driven%20Insights/02%20Best%20Practices%20For%20Presenting%20Your%20Findings.md)

## 산출물

**실험 기록이 남는 ML 프로젝트 하나.** 모델 성능보다 과정이 평가 대상이다.

1. 문제 정의와 **단일 평가 지표**, 그리고 그것을 고른 이유
2. 최소 10회의 실험 기록 (MLflow 등) — 각 실험의 변경점 한 줄과 결과
3. 오류 분석 표 — 틀린 예측 50건을 분류하고, 가장 큰 덩어리가 무엇인지
4. "다음에 무엇을 하겠는가"를 3-4번의 오류 분석에 근거해 쓴 한 문단
5. 처음 베이스라인과 최종 모델의 성능 차이, 그리고 **그 차이를 만든 것이 무엇이었는지**

## 다음 단계

→ 트랙 완료. [T4 응용 AI — 언어·시각·로봇](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/README.md) 으로 넘어간다.
