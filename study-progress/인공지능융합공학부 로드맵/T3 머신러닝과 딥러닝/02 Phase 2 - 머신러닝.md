# T3 Phase 2 — 머신러닝

> 학부 교과 **머신러닝(2학년 2학기, 이론실습병행 3학점)** · 선이수 = 회귀분석
> 교과목해설: "지도학습, 비지도학습, 강화학습의 기초를 배우고, 실제 데이터 세트를 사용하여 모델을 훈련하고 평가하는 방법을 실습을 통해 익힌다"

- 목표: 문제를 보고 어떤 학습 방식·어떤 모델로 갈지 고르고, 고른 이유를 성능 지표로 방어한다.
- 분량: 약 39시간 (저장소 24시간 + 강화학습 15시간)
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 지도·비지도·강화학습을 문제 형태로 구분한다 (레이블이 있는가 / 보상이 있는가)
- 분류와 회귀를 구분하고 각각의 평가 지표를 고른다
- 결정트리·랜덤포레스트·SVM·KNN이 각각 어떤 데이터에서 강한지 말한다
- K-means·계층 군집·차원축소(PCA)를 언제 쓰는지 안다
- 훈련/검증/테스트를 나누고 교차검증으로 성능을 추정한다
- 정확도가 높은데 쓸모없는 모델(불균형 데이터)을 알아보고 정밀도·재현율·F1·ROC-AUC로 다시 본다
- 과적합·과소적합을 학습곡선으로 진단한다

> **[T2 Phase 5(회귀분석)](../T2%20%EC%88%98%ED%95%99%20%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0/05%20Phase%205%20-%20%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D.md)을 먼저 끝낸다.** 강남대 커리큘럼도 회귀분석을 이 과목의 선이수로 지정하고 있고, 실제로 선형회귀를 모르면 이 Phase의 절반이 공중에 뜬다.

## 2-A. 지도학습

메인: IBM Data Science, `09 Machine Learning with Python`

Module 1 — 머신러닝 개관

- [ ] [01 Course Introduction.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/01%20Course%20Introduction.md)
- [ ] [02 IBM AI Engineering PC Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/02%20IBM%20AI%20Engineering%20PC%20Overview.md)
- [ ] [03 An Overview of Machine Learning.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/03%20An%20Overview%20of%20Machine%20Learning.md)
- [ ] [04 Machine Learning Model Lifecycle.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/04%20Machine%20Learning%20Model%20Lifecycle.md)
- [ ] [05 A Day in the life of a Machine Learning Engineer.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/05%20A%20Day%20in%20the%20life%20of%20a%20Machine%20Learning%20Engineer.md)
- [ ] [06 Data Scientist vs AI Engineer.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/06%20Data%20Scientist%20vs%20AI%20Engineer.md)
- [ ] [07 Tools for Machine Learning.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/07%20Tools%20for%20Machine%20Learning.md)
- [ ] [08 Scikit-learn Machine Learning Ecosystem.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%201%20-%20Introduction%20to%20Machine%20Learning/08%20Scikit-learn%20Machine%20Learning%20Ecosystem.md)

Module 3 — 지도학습 모델 만들기. **결정트리·랜덤포레스트·SVM·KNN이 여기 있다**

- [ ] [01 Classification.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/01%20Classification.md)
- [ ] [02 Decision Trees.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/02%20Decision%20Trees.md)
- [ ] [03 Regression Trees.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/03%20Regression%20Trees.md)
- [ ] [04 Supervised Learning with SVMs.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/04%20Supervised%20Learning%20with%20SVMs.md)
- [ ] [05 Supervised Learning with KNN.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/05%20Supervised%20Learning%20with%20KNN.md)
- [ ] [06 Bias, Variance, and Ensemble Models.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%203%20-%20Building%20Supervised%20Learning%20Models/06%20Bias,%20Variance,%20and%20Ensemble%20Models.md)

## 2-B. 비지도학습

Module 4 — 군집화와 차원축소

- [ ] [01 Clustering Strategies and Real-World Applications.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%204%20-%20Building%20Unsupervised%20Learning%20Models/01%20Clustering%20Strategies%20and%20Real-World%20Applications.md)
- [ ] [02 K-means and More on K-means.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%204%20-%20Building%20Unsupervised%20Learning%20Models/02%20K-means%20and%20More%20on%20K-means.md)
- [ ] [03 DBSCAN and HDBSCAN Clustering.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%204%20-%20Building%20Unsupervised%20Learning%20Models/03%20DBSCAN%20and%20HDBSCAN%20Clustering.md)
- [ ] [04 Clustering, Dimension Reduction, and Feature Engineering.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%204%20-%20Building%20Unsupervised%20Learning%20Models/04%20Clustering,%20Dimension%20Reduction,%20and%20Feature%20Engineering.md)
- [ ] [05 Dimension Reduction Algorithms.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%204%20-%20Building%20Unsupervised%20Learning%20Models/05%20Dimension%20Reduction%20Algorithms.md)

## 2-C. 모델 평가와 검증

Module 5. **이 절을 대충 넘기면 Phase 4에서 반드시 막힌다**

- [ ] [01 Classification Metrics and Evaluation Techniques.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/01%20Classification%20Metrics%20and%20Evaluation%20Techniques.md)
- [ ] [02 Regression Metrics and Evaluation Techniques.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/02%20Regression%20Metrics%20and%20Evaluation%20Techniques.md)
- [ ] [03 Evaluating Unsupervised Learning Models - Heuristics and Techniques.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/03%20Evaluating%20Unsupervised%20Learning%20Models%20-%20Heuristics%20and%20Techniques.md)
- [ ] [04 Cross-Validation and Advanced Model Validation Techniques.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/04%20Cross-Validation%20and%20Advanced%20Model%20Validation%20Techniques.md)
- [ ] [05 Regularization in Regression and Classification.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/05%20Regularization%20in%20Regression%20and%20Classification.md)
- [ ] [06 Data Leakage and Other Pitfalls.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%205%20-%20Evaluating%20and%20Validating%20Machine%20Learning%20Models/06%20Data%20Leakage%20and%20Other%20Pitfalls.md)

Module 6 — 최종 프로젝트

- [ ] [01 Course Wrap-up.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/09%20Machine%20Learning%20with%20Python/Module%206%20-%20Final%20Project%20and%20Exam/01%20Course%20Wrap-up.md)

## 2-D. 한 도메인으로 관통해서 다시 보기

함께 보기: Machine Learning for Medical Data (같은 지도·비지도·신경망을 의료 데이터 하나로 이어서 본다. **불균형 데이터·민감한 오류 비용**을 다루는 점이 IBM 쪽에 없는 부분이다)

- [ ] [01.Welcome to the Course.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/01%20Welcome/01.Welcome%20to%20the%20Course.md)
- [ ] [02.Course Overview.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/01%20Welcome/02.Course%20Overview.md)
- [ ] [03.How to Make the Most of This Course.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/01%20Welcome/03.How%20to%20Make%20the%20Most%20of%20This%20Course.md)
- [ ] [04.AI for Healthcare Specialization Overview.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/01%20Welcome/04.AI%20for%20Healthcare%20Specialization%20Overview.md)
- [ ] [01.Supervised Learning Basics in Healthcare.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/01.Supervised%20Learning%20Basics%20in%20Healthcare.md)
- [ ] [02.Case Study Diabetes Risk Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/02.Case%20Study%20Diabetes%20Risk%20Prediction.md)
- [ ] [03.Supervised Learning Applications in Clinical AI.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/03.Supervised%20Learning%20Applications%20in%20Clinical%20AI.md)
- [ ] [04.Lab - Supervised Learning for Patient Risk Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/04.Lab%20-%20Supervised%20Learning%20for%20Patient%20Risk%20Prediction.md)
- [ ] [04.Lab Notebook - Patient Risk Scoring (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/04.Lab%20Notebook%20-%20Patient%20Risk%20Scoring%20%28Code%29.md)
- [ ] [05.Quiz - Introduction to Supervised Learning in Healthcare.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/05.Quiz%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare.md)
- [ ] [01.Preprocessing Medical Data Best Practices.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/01.Preprocessing%20Medical%20Data%20Best%20Practices.md)
- [ ] [02.Feature Engineering for Clinical Prediction Tasks.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/02.Feature%20Engineering%20for%20Clinical%20Prediction%20Tasks.md)
- [ ] [03.Data Preparation Guidelines for Healthcare ML (Reading).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/03.Data%20Preparation%20Guidelines%20for%20Healthcare%20ML%20%28Reading%29.md)
- [ ] [04.Dialogue - Reflect on Your Data Preparation Decisions.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/04.Dialogue%20-%20Reflect%20on%20Your%20Data%20Preparation%20Decisions.md)
- [ ] [05.Lab - Healthcare Data Preprocessing and Feature Engineering.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/05.Lab%20-%20Healthcare%20Data%20Preprocessing%20and%20Feature%20Engineering.md)
- [ ] [05.Lab Notebook - Healthcare Data Preprocessing (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%202%20-%20Feature%20Engineering%20and%20Data%20Preprocessing/05.Lab%20Notebook%20-%20Healthcare%20Data%20Preprocessing%20%28Code%29.md)
- [ ] [01.Techniques to Handle Rare Disease Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/01.Techniques%20to%20Handle%20Rare%20Disease%20Prediction.md)
- [ ] [02.Evaluating Models with Precision-Recall and ROC.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/02.Evaluating%20Models%20with%20Precision-Recall%20and%20ROC.md)
- [ ] [03.Reading - Strategies for Managing Imbalanced Clinical Datasets.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/03.Reading%20-%20Strategies%20for%20Managing%20Imbalanced%20Clinical%20Datasets.md)
- [ ] [04.Activity - Building Responsible AI for Rare Disease Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/04.Activity%20-%20Building%20Responsible%20AI%20for%20Rare%20Disease%20Prediction.md)
- [ ] [05.Lab - Detecting Rare Medical Conditions with Machine Learning.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/05.Lab%20-%20Detecting%20Rare%20Medical%20Conditions%20with%20Machine%20Learning.md)
- [ ] [05.Lab Notebook - Detecting Rare Medical Conditions (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%203%20-%20Handling%20Imbalanced%20Data%20in%20Clinical%20Models/05.Lab%20Notebook%20-%20Detecting%20Rare%20Medical%20Conditions%20%28Code%29.md)
- [ ] [01.Reading - Module Summary - Supervised Learning in Healthcare.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%201%20-%20Introduction%20to%20Supervised%20Learning%20in%20Healthcare/Lesson%204%20-%20Module%20Summary%20and%20Assessment/01.Reading%20-%20Module%20Summary%20-%20Supervised%20Learning%20in%20Healthcare.md)
- [ ] [01.Clustering Basics for Healthcare Data.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%201%20-%20Patient%20Segmentation%20through%20Clustering/01.Clustering%20Basics%20for%20Healthcare%20Data.md)
- [ ] [02.Reading - Cluster Analysis in Population Health Research.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%201%20-%20Patient%20Segmentation%20through%20Clustering/02.Reading%20-%20Cluster%20Analysis%20in%20Population%20Health%20Research.md)
- [ ] [03.Lab - K-means Clustering for Patient Segmentation.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%201%20-%20Patient%20Segmentation%20through%20Clustering/03.Lab%20-%20K-means%20Clustering%20for%20Patient%20Segmentation.md)
- [ ] [03.Lab Notebook - K-means Clustering (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%201%20-%20Patient%20Segmentation%20through%20Clustering/03.Lab%20Notebook%20-%20K-means%20Clustering%20%28Code%29.md)
- [ ] [01.PCA for Medical Data.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%202%20-%20Dimensionality%20Reduction%20Techniques/01.PCA%20for%20Medical%20Data.md)
- [ ] [02.Reading - Dimensionality Reduction for Biomedical Datasets.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%202%20-%20Dimensionality%20Reduction%20Techniques/02.Reading%20-%20Dimensionality%20Reduction%20for%20Biomedical%20Datasets.md)
- [ ] [01.From Clusters to Clinical Decisions.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%203%20-%20Making%20Clinical%20Sense%20of%20Unsupervised%20Results/01.From%20Clusters%20to%20Clinical%20Decisions.md)
- [ ] [02.Integration of Unsupervised Results into EHR Systems.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%203%20-%20Making%20Clinical%20Sense%20of%20Unsupervised%20Results/02.Integration%20of%20Unsupervised%20Results%20into%20EHR%20Systems.md)
- [ ] [03.Lab - Using Gradio to Deploy Machine Learning Models.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%203%20-%20Making%20Clinical%20Sense%20of%20Unsupervised%20Results/03.Lab%20-%20Using%20Gradio%20to%20Deploy%20Machine%20Learning%20Models.md)
- [ ] [03.Lab Notebook - Gradio Deployment (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%203%20-%20Making%20Clinical%20Sense%20of%20Unsupervised%20Results/03.Lab%20Notebook%20-%20Gradio%20Deployment%20%28Code%29.md)
- [ ] [01.Reading - Module Summary - Unsupervised Learning for Medical Data.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%202%20-%20Unsupervised%20Learning%20for%20Medical%20Data/Lesson%204%20-%20Module%20Summary%20and%20Assessment/01.Reading%20-%20Module%20Summary%20-%20Unsupervised%20Learning%20for%20Medical%20Data.md)
- [ ] [01.Neural Network Architecture Primer.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%201%20-%20Neural%20Network%20Basics%20for%20Medicine/01.Neural%20Network%20Architecture%20Primer.md)
- [ ] [02.Training Neural Networks for Clinical Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%201%20-%20Neural%20Network%20Basics%20for%20Medicine/02.Training%20Neural%20Networks%20for%20Clinical%20Prediction.md)
- [ ] [03.Lab - Building a Dense Neural Network for Heart Disease Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%201%20-%20Neural%20Network%20Basics%20for%20Medicine/03.Lab%20-%20Building%20a%20Dense%20Neural%20Network%20for%20Heart%20Disease%20Prediction.md)
- [ ] [03.Lab Notebook - Dense Neural Network for Heart Disease (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%201%20-%20Neural%20Network%20Basics%20for%20Medicine/03.Lab%20Notebook%20-%20Dense%20Neural%20Network%20for%20Heart%20Disease%20%28Code%29.md)
- [ ] [01.Convolutional Neural Networks for Radiology.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%202%20-%20CNNs%20for%20Medical%20Imaging/01.Convolutional%20Neural%20Networks%20for%20Radiology.md)
- [ ] [02.Advanced CNN Architectures for Medical Tasks.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%202%20-%20CNNs%20for%20Medical%20Imaging/02.Advanced%20CNN%20Architectures%20for%20Medical%20Tasks.md)
- [ ] [03.Reading - Deep Learning in Medical Imaging.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%202%20-%20CNNs%20for%20Medical%20Imaging/03.Reading%20-%20Deep%20Learning%20in%20Medical%20Imaging.md)
- [ ] [04.Lab - Training a Neural Network for Disease Detection in Chest X-ray.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%202%20-%20CNNs%20for%20Medical%20Imaging/04.Lab%20-%20Training%20a%20Neural%20Network%20for%20Disease%20Detection%20in%20Chest%20X-ray.md)
- [ ] [04.Lab Notebook - Chest X-ray Disease Detection (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%202%20-%20CNNs%20for%20Medical%20Imaging/04.Lab%20Notebook%20-%20Chest%20X-ray%20Disease%20Detection%20%28Code%29.md)
- [ ] [01.Recurrent Models for Sequential Clinical Data.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%203%20-%20Temporal%20Models%20and%20Explainability%20in%20Clinical%20Deep%20Learning/01.Recurrent%20Models%20for%20Sequential%20Clinical%20Data.md)
- [ ] [02.Explainable AI Techniques for Medical Models.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%203%20-%20Temporal%20Models%20and%20Explainability%20in%20Clinical%20Deep%20Learning/02.Explainable%20AI%20Techniques%20for%20Medical%20Models.md)
- [ ] [03.Activity - Interpreting Model Explanations in Clinical Time-Series Prediction.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%203%20-%20Temporal%20Models%20and%20Explainability%20in%20Clinical%20Deep%20Learning/03.Activity%20-%20Interpreting%20Model%20Explanations%20in%20Clinical%20Time-Series%20Prediction.md)
- [ ] [04.Lab - Predicting Clinical Deterioration Using EHR Time Series.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%203%20-%20Temporal%20Models%20and%20Explainability%20in%20Clinical%20Deep%20Learning/04.Lab%20-%20Predicting%20Clinical%20Deterioration%20Using%20EHR%20Time%20Series.md)
- [ ] [04.Lab Notebook - EHR Time Series Deterioration Prediction (Code).md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%203%20-%20Temporal%20Models%20and%20Explainability%20in%20Clinical%20Deep%20Learning/04.Lab%20Notebook%20-%20EHR%20Time%20Series%20Deterioration%20Prediction%20%28Code%29.md)
- [ ] [01.Reading - Module Summary - Neural Networks for Healthcare Applications.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%203%20-%20Neural%20Networks%20for%20Healthcare%20Applications/Lesson%204%20-%20Module%20Summary%20and%20Assessment/01.Reading%20-%20Module%20Summary%20-%20Neural%20Networks%20for%20Healthcare%20Applications.md)
- [ ] [01.Reading - Final Project Overview.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%204%20-%20Final%20Project,%20Exam,%20and%20Wrap-up/Lesson%201%20-%20Final%20Project/01.Reading%20-%20Final%20Project%20Overview.md)
- [ ] [01.Course Wrap-up.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%204%20-%20Final%20Project,%20Exam,%20and%20Wrap-up/Lesson%202%20-%20Glossary%20and%20Final%20Exam/01.Course%20Wrap-up.md)
- [ ] [02.Reading - Course Glossary.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%204%20-%20Final%20Project,%20Exam,%20and%20Wrap-up/Lesson%202%20-%20Glossary%20and%20Final%20Exam/02.Reading%20-%20Course%20Glossary.md)
- [ ] [01.Congratulations and Next Steps.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%204%20-%20Final%20Project,%20Exam,%20and%20Wrap-up/Lesson%203%20-%20Course%20Wrap-Up/01.Congratulations%20and%20Next%20Steps.md)
- [ ] [02.Team and Acknowledgments.md](../../../courses/mooc/MLOps/Machine%20Learning%20for%20Medical%20Data/Module%204%20-%20Final%20Project,%20Exam,%20and%20Wrap-up/Lesson%203%20-%20Course%20Wrap-Up/02.Team%20and%20Acknowledgments.md)

함께 보기: Introduction to Embedded Machine Learning Module 1 (짧은 복습. 임베디드 관점이라 **모델 크기·연산량** 얘기가 일찍 나온다)

- [ ] [01 Welcome to the Course.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/01%20Welcome%20to%20the%20Course.md)
- [ ] [02 Instructor Introductions.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/02%20Instructor%20Introductions.md)
- [ ] [03 What is Machine Learning.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/03%20What%20is%20Machine%20Learning.md)
- [ ] [04 Limitations and Ethics of Machine Learning.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/04%20Limitations%20and%20Ethics%20of%20Machine%20Learning.md)
- [ ] [05 Machine Learning on Embedded Devices.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/05%20Machine%20Learning%20on%20Embedded%20Devices.md)
- [ ] [06 Machine Learning Specific Hardware.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/06%20Machine%20Learning%20Specific%20Hardware.md)
- [ ] [07 Machine Learning Software Frameworks.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/07%20Machine%20Learning%20Software%20Frameworks.md)
- [ ] [08 Getting Started with Edge Impulse.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/08%20Getting%20Started%20with%20Edge%20Impulse.md)
- [ ] [09 Data Collection.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/09%20Data%20Collection.md)
- [ ] [10 Feature Extraction from Motion Data.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/10%20Feature%20Extraction%20from%20Motion%20Data.md)
- [ ] [11 Feature Selection in Edge Impulse.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/11%20Feature%20Selection%20in%20Edge%20Impulse.md)
- [ ] [12 Machine Learning Pipeline.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/12%20Machine%20Learning%20Pipeline.md)
- [ ] [13 Review of Module 1.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%201%20-%20Introduction%20to%20Machine%20Learning/13%20Review%20of%20Module%201.md)

## 2-E. 강화학습 — Fundamentals of Reinforcement Learning (2026-09-04 확보)

학부 교과목해설이 "지도학습, 비지도학습, **강화학습**의 기초"라고 명시하는데 저장소에 강화학습 자료가 없었다. **2026-09-04에 MOOC 강좌를 수강·정리해 이 공백을 메웠다.**

메인: [Fundamentals of Reinforcement Learning](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/README.md) (University of Alberta · Amii · 5모듈 15시간 · MOOC Plus 포함)

> ⭐ **Sutton & Barto 교재 2판을 따라가는 공식 강좌**다. 밴딧 → MDP → 가치 함수·벨만 방정식 → 동적 계획법 순으로 **"강화학습 문제가 무엇인가"** 를 세운다.
>
> ⚠️ **경험으로부터 배우는 알고리즘(TD·Q-learning)은 이 강좌에 없다** — 전문과정 Course 2의 몫이다. **학부 "머신러닝" 과목의 강화학습 파트에는 이 첫 강좌 하나면 충분하다.**
>
> ⚠️ 강의 안에서 말하는 **"Week N"은 MOOC 모듈 번호보다 1 작다.**

Module 1 - Welcome to the Course

- [ ] [01 Specialization Introduction.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%201%20-%20Welcome%20to%20the%20Course/01%20Specialization%20Introduction.md)
- [ ] [02 Course Introduction.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%201%20-%20Welcome%20to%20the%20Course/02%20Course%20Introduction.md)
- [ ] [03 Meet your instructors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%201%20-%20Welcome%20to%20the%20Course/03%20Meet%20your%20instructors.md)
- [ ] [04 Your Specialization Roadmap.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%201%20-%20Welcome%20to%20the%20Course/04%20Your%20Specialization%20Roadmap.md)

Module 2 - An Introduction to Sequential Decision-Making

- [ ] [01 Sequential Decision Making with Evaluative Feedback.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/01%20Sequential%20Decision%20Making%20with%20Evaluative%20Feedback.md) — k-armed bandit, 행동 가치 `q*(a) ≐ E[R|A=a]`
- [ ] [02 Learning Action Values.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/02%20Learning%20Action%20Values.md)
- [ ] [03 Estimating Action Values Incrementally.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/03%20Estimating%20Action%20Values%20Incrementally.md) — **새 추정 ← 이전 추정 + 스텝 크기 × 오차**
- [ ] [04 What is the trade-off.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/04%20What%20is%20the%20trade-off.md) — **탐험 vs 활용**, ε-탐욕, 10-armed Testbed
- [ ] [05 Optimistic Initial Values.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/05%20Optimistic%20Initial%20Values.md)
- [ ] [06 Upper-Confidence Bound UCB Action Selection.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/06%20Upper-Confidence%20Bound%20UCB%20Action%20Selection.md) — **불확실성 앞에서의 낙관**
- [ ] [07 Jonathan Langford - Contextual Bandits for Real World Reinforcement Learning.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/07%20Jonathan%20Langford%20-%20Contextual%20Bandits%20for%20Real%20World%20Reinforcement%20Learning.md)
- [ ] [08 Week 1 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%202%20-%20An%20Introduction%20to%20Sequential%20Decision-Making/08%20Week%201%20Summary.md)

Module 3 - Markov Decision Processes

- [ ] [01 Markov Decision Processes.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/01%20Markov%20Decision%20Processes.md) — **전이 동역학 `p(s',r|s,a)`**, 마르코프 성질
- [ ] [02 Examples of MDPs.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/02%20Examples%20of%20MDPs.md)
- [ ] [03 The Goal of Reinforcement Learning.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/03%20The%20Goal%20of%20Reinforcement%20Learning.md) — **이득 `G_t`**, 에피소드형 과제
- [ ] [04 Michael Littman - The Reward Hypothesis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/04%20Michael%20Littman%20-%20The%20Reward%20Hypothesis.md) — 초청 강연 — 보상 가설과 그 한계
- [ ] [05 Continuing Tasks.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/05%20Continuing%20Tasks.md) — **할인 γ**, `G_t = R_(t+1) + γ·G_(t+1)`
- [ ] [06 Examples of Episodic and Continuing Tasks.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/06%20Examples%20of%20Episodic%20and%20Continuing%20Tasks.md)
- [ ] [07 Week 2 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%203%20-%20Markov%20Decision%20Processes/07%20Week%202%20Summary.md)

Module 4 - Value Functions and Bellman Equations

- [ ] [01 Specifying Policies.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/01%20Specifying%20Policies.md) — ⚠️ 정책은 현재 상태에만 의존한다
- [ ] [02 Value Functions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/02%20Value%20Functions.md) — **`v_π`와 `q_π`**
- [ ] [03 Rich Sutton and Andy Barto - A brief History of RL.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/03%20Rich%20Sutton%20and%20Andy%20Barto%20-%20A%20brief%20History%20of%20RL.md)
- [ ] [04 Bellman Equation Derivation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/04%20Bellman%20Equation%20Derivation.md) — 벨만 방정식 유도
- [ ] [05 Why Bellman Equations.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/05%20Why%20Bellman%20Equations.md)
- [ ] [06 Optimal Policies.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/06%20Optimal%20Policies.md) — ⚠️ 정책 수는 `|A|^|S|`
- [ ] [07 Optimal Value Functions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/07%20Optimal%20Value%20Functions.md) — **벨만 최적 방정식**
- [ ] [08 Using Optimal Value Functions to Get Optimal Policies.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/08%20Using%20Optimal%20Value%20Functions%20to%20Get%20Optimal%20Policies.md) — **`q*`가 있으면 argmax만 하면 된다**
- [ ] [09 Week 3 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%204%20-%20Value%20Functions%20and%20Bellman%20Equations/09%20Week%203%20Summary.md)

Module 5 - Dynamic Programming

- [ ] [01 Policy Evaluation vs Control.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/01%20Policy%20Evaluation%20vs%20Control.md)
- [ ] [02 Iterative Policy Evaluation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/02%20Iterative%20Policy%20Evaluation.md) — **벨만 방정식 → 갱신 규칙**
- [ ] [03 Policy Improvement.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/03%20Policy%20Improvement.md) — **정책 개선 정리**
- [ ] [04 Policy Iteration.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/04%20Policy%20Iteration.md) — **정책과 가치의 춤**
- [ ] [05 Flexibility of the Policy Iteration Framework.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/05%20Flexibility%20of%20the%20Policy%20Iteration%20Framework.md) — GPI · 가치 반복 · 비동기 DP
- [ ] [06 Efficiency of Dynamic Programming.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/06%20Efficiency%20of%20Dynamic%20Programming.md) — **부트스트래핑**, 차원의 저주
- [ ] [07 Warren Powell - Approximate Dynamic Programming for Fleet Management Short.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/07%20Warren%20Powell%20-%20Approximate%20Dynamic%20Programming%20for%20Fleet%20Management%20Short.md)
- [ ] [08 Warren Powell - Approximate Dynamic Programming for Fleet Management Long.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/08%20Warren%20Powell%20-%20Approximate%20Dynamic%20Programming%20for%20Fleet%20Management%20Long.md) — 계층적 집계, Schneider National 사례
- [ ] [09 Week 4 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/09%20Week%204%20Summary.md)
- [ ] [10 Congratulations.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Fundamentals%20of%20Reinforcement%20Learning/Module%205%20-%20Dynamic%20Programming/10%20Congratulations.md)

저장소의 인접 조각 — 강화학습이 LLM 학습에 쓰이는 대목

- [ ] [10 Instruction tuning and RLHF.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2002%20Generative%20AI%20Projects/10%20Instruction%20tuning%20and%20RLHF.md)

### 더 파고들 때 (미확보)

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| Reinforcement Learning (전문과정 나머지 3강좌) | MOOC (University of Alberta · Amii) | [링크](https://www.mooc.org/specializations/reinforcement-learning) | 위 강좌의 후속. Sample-based Learning Methods(22h) / Prediction and Control with Function Approximation(22h) / Capstone(16h). **TD 학습·몬테카를로·Sarsa·Q-러닝·정책 경사·Dyna**가 여기 있다. **학부 한 과목에는 과하다** — 대학원이나 RL 진로일 때만 |
| Unsupervised Learning, Recommenders, Reinforcement Learning | MOOC (Stanford Online · DeepLearning.AI) | [링크](https://www.mooc.org/learn/unsupervised-learning-recommenders-reinforcement-learning) | 28시간. 3주차(8h)가 강화학습 — 화성 로버 예제 / 상태-행동 가치 함수 / 벨만 방정식 / **심층 Q-러닝으로 달 착륙선 제어**. ⚠️ 1·2주차(비지도학습·PCA)는 이 Phase 2-B와 겹치지만 **추천시스템은 저장소에 없어 덤으로 얻는다** |

> 조사일 2026-09-04. 두 페이지 모두 직접 열어 확인했다.

## 산출물

데이터셋 하나에 **세 가지 접근**을 붙여 비교한 노트북.

1. 지도학습 — 모델 3개 이상, 교차검증 성능표
2. 비지도학습 — 군집화 결과를 지도학습의 레이블과 대조해 무엇이 보이는지
3. 평가 — 정확도만이 아니라 **혼동행렬·정밀도/재현율·ROC 곡선**까지
4. 마지막에 한 문단: "이 문제에 나는 무엇을 고르겠는가, 왜"

## 다음 단계

→ [03 Phase 3 - 신경망과 딥러닝](03%20Phase%203%20-%20%EC%8B%A0%EA%B2%BD%EB%A7%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D.md)
