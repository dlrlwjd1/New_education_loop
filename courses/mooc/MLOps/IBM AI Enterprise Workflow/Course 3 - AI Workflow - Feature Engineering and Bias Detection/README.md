# AI Workflow: Feature Engineering and Bias Detection

- 플랫폼: MOOC · 제공: **IBM**
- 전문과정: [IBM AI Enterprise Workflow](../README.md) 의 **3번째 강좌**
- 링크: https://www.mooc.org/learn/ibm-ai-workflow-feature-engineering-bias-detection
- 난이도: **고급(Advanced)** — 기존 데이터 과학 실무자 대상
- 구성: 2 모듈 · 48개 항목 (영상 11 · 읽기 25 · 연습 과제 8 · 실습 노트북 2 · 채점 과제 2)
- 분량: 모듈당 약 6시간, 총 12시간
- 정리일: 2026-08-22

## 선행 지식 (강좌가 명시적으로 전제하는 것)

- 선형대수, 통계, 머신러닝, Python
- **PCA · SVD · 고유값 분해** — [Module 1의 16번 자료](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/16%20Why%20is%20Dimensionality%20Reduction%20Important.md)가 Goodfellow *Deep Learning* 2.7~2.12절을 복습 자료로 지정한다
- IBM Watson Studio 친숙도 (사례 연구 실습 환경)

## 이 강좌의 한 줄 요약

**모델을 만들기 전에 데이터에 하는 모든 일** — 변환, 특징 공학, 클래스 불균형과 편향 대응, 차원 축소, 이상치 탐지, 군집화 — 를 **scikit-learn 파이프라인 위에서 서로 비교 가능한 형태로** 수행한다.

두 사례 연구의 공통 목적은 하나다: **비지도 학습으로 지도 학습용 새 특징을 만드는 것.**

## Module 1 - Data Transforms and Feature Engineering

### 시작하기
- [01 Data Transformations Overview](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/01%20Data%20Transformations%20Overview.md) — 영상. 이 단계의 자리와 두 가지 위험
- [02 Data Transformation - Through the eyes of our Working Example](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/02%20Data%20Transformation%20-%20Through%20the%20eyes%20of%20our%20Working%20Example.md) — AAVAiL 사례 도입
- [03 Transforms with scikit-learn](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/03%20Transforms%20with%20scikit-learn.md) — **세 인터페이스**
- [04 Pipelines](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/04%20Pipelines.md) — 파이프라인을 쓰는 이유
- [05 Getting Started - Check for Understanding](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/05%20Getting%20Started%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 클래스 불균형, 데이터 편향
- [06 Introduction to Class Imbalance](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/06%20Introduction%20to%20Class%20Imbalance.md) — 영상. 불균형과 편향은 같은 뿌리
- [07 Class imbalance - Through the Eyes of our Working Example](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/07%20Class%20imbalance%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [08 Class Imbalance](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/08%20Class%20Imbalance.md) — **정확도를 쓰면 안 되는 이유**
- [09 Sampling Techniques](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/09%20Sampling%20Techniques.md) — SMOTE·ADASYN·SMOTENC
- [10 Class Imbalance Deep Dive](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/10%20Class%20Imbalance%20Deep%20Dive.md) — 영상 9분. **imbalanced-learn으로 세 파이프라인 비교**
- [11 Models that Naturally Handle Imbalance](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/11%20Models%20that%20Naturally%20Handle%20Imbalance.md) — `class_weight='balanced'`
- [12 Data Bias](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/12%20Data%20Bias.md) — 얼굴 인식 데이터셋 편향
- [13 Class Imbalance, Data Bias - Check for Understanding](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/13%20Class%20Imbalance%2C%20Data%20Bias%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 차원 감소
- [14 Introduction to Dimensionality Reduction](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/14%20Introduction%20to%20Dimensionality%20Reduction.md) — 영상. 관측치가 많은 문제 vs 특징이 많은 문제
- [15 Dimensionality Reduction - Through the Eyes of Our Working Example](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/15%20Dimensionality%20Reduction%20-%20Through%20the%20Eyes%20of%20Our%20Working%20Example.md)
- [16 Why is Dimensionality Reduction Important](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/16%20Why%20is%20Dimensionality%20Reduction%20Important.md) — **선행 지식 명시**
- [17 Dimension Reduction](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/17%20Dimension%20Reduction.md) — 영상 13분. **Fashion MNIST로 PCA·t-SNE 실습**
- [18 Dimensionality Reduction and Topic models](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/18%20Dimensionality%20Reduction%20and%20Topic%20models.md) — 토픽 모델도 차원 축소다
- [19 Dimensionality Reduction - Check for Understanding](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/19%20Dimensionality%20Reduction%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 사례 연구 — 주제 모델링
- [20 Case Study Intro - Feature Engineering](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/20%20Case%20Study%20Intro%20-%20Feature%20Engineering.md) — 영상. **스키 슬로프 추천 예시**
- [21 Topic modeling - Through the Eyes of our Working Example](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/21%20Topic%20modeling%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [22 Getting Started with the Topic Modeling Case Study (hands-on)](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/22%20Getting%20Started%20with%20the%20Topic%20Modeling%20Case%20Study%20%28hands-on%29.md) — 실습 준비물
- [23 Case Study Answer Key Notebook](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/23%20Case%20Study%20Answer%20Key%20Notebook.md) — 노트북 (내용 미확인)
- [24 Case Study - Topic Modeling - Check for Understanding](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/24%20Case%20Study%20-%20Topic%20Modeling%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 모듈 검토
- [25 Data Transforms and Feature Engineering - Summary Review](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/25%20Data%20Transforms%20and%20Feature%20Engineering%20-%20Summary%20Review.md) — **모듈 1 요약**
- [26 Data Transforms and Feature Engineering - End of Module Quiz](Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/26%20Data%20Transforms%20and%20Feature%20Engineering%20-%20End%20of%20Module%20Quiz.md) — 채점 과제 (내용 미확인)

## Module 2 - Pattern Recognition and Data Mining Best Practices

### 튜토리얼 — ai360
- [01 Exploring IBM's AI Fairness 360 Toolkit](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/01%20Exploring%20IBM%27s%20AI%20Fairness%20360%20Toolkit.md) — 영상. IBM 연구자 인터뷰
- [02 ai360 - Through the Eyes of our Working Example](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/02%20ai360%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [03 Introduction to 360 (hands-on)](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/03%20Introduction%20to%20360%20%28hands-on%29.md) — **보호 속성**과 재가중 실습
- [04 ai360 Tutorial - Check for Understanding](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/04%20ai360%20Tutorial%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 이상치 탐지
- [05 Introduction to Outliers](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/05%20Introduction%20to%20Outliers.md) — 영상. 이상치는 버릴 것이 아니라 조사할 것
- [06 Outlier Detection - Through the Eyes of our Working Example](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/06%20Outlier%20Detection%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [07 Outlier Detection](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/07%20Outlier%20Detection.md) — 영상. **시각화는 t-SNE, 탐지는 PCA**
- [08 Outliers](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/08%20Outliers.md) — 전환 시점에 규칙은 없다
- [09 Outlier Detection - Check for Understanding](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/09%20Outlier%20Detection%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 비지도 학습
- [10 Introduction to Unsupervised learning](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/10%20Introduction%20to%20Unsupervised%20learning.md) — 영상. **목적은 새 특징 만들기**
- [11 Unsupervised learning - Through the Eyes of our Working Example](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/11%20Unsupervised%20learning%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)
- [12 An Overview of Unsupervised Learning](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/12%20An%20Overview%20of%20Unsupervised%20Learning.md) — **교차 검증이 없다**
- [13 Clustering](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/13%20Clustering.md) — 유사도 측정 방식으로 본 분류
- [14 Unsupervised Learning](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/14%20Unsupervised%20Learning.md) — 영상 6분. **알고리즘 5종 비교, 지표를 믿지 말라**
- [15 Clustering Evaluation](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/15%20Clustering%20Evaluation.md) — 실루엣·관성·엘보
- [16 Unsupervised Learning - Check for Understanding](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/16%20Unsupervised%20Learning%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 사례 연구 — 클러스터링
- [17 Clustering - Through the Eyes of our Working Example](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/17%20Clustering%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md) — 마케팅용 PoC 보고서
- [18 Getting Started with the Clustering Case Study (hands-on)](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/18%20Getting%20Started%20with%20the%20Clustering%20Case%20Study%20%28hands-on%29.md) — 실습 준비물
- [19 Case Study Answer Key Notebook](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/19%20Case%20Study%20Answer%20Key%20Notebook.md) — 노트북 (내용 미확인)
- [20 CASE STUDY - Clustering - Check for Understanding](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/20%20CASE%20STUDY%20-%20Clustering%20-%20Check%20for%20Understanding.md) — 연습 과제 (내용 미확인)

### 모듈 검토
- [21 Pattern Recognition and Data Mining Best Practices - Summary Review](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/21%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices%20-%20Summary%20Review.md) — **모듈 2 요약**
- [22 Pattern Recognition and Data Mining Best Practices - End of Module Quiz](Module%202%20-%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices/22%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices%20-%20End%20of%20Module%20Quiz.md) — 채점 과제 (내용 미확인)

## 정리 범위와 한계

**정리한 것 (36개)** — 영상 11개는 **영어 원본 자막**을, 읽기 자료 25개는 본문을 기반으로 정리했다.

> 영상 자막은 MOOC의 한국어 자동 번역본도 있으나 문구 반복 등 품질이 낮아, **영어 원본을 근거로 삼았다.** 일부 읽기 자료는 원문이 이미 한국어 자동 번역으로 제공되어 그 문장을 다듬어 옮겼다.

**정리하지 못한 것 (12개)** — 연습 과제 8개, 실습 노트북 2개, 채점 과제 2개. MOOC 상에서 수행해야 하는 항목이라 강의 자료 API로 내용을 얻을 수 없다. `AGENTS.md` 규칙대로 **임의로 채우지 않고 상태만 명시**했으며, 각 파일에는 대신 **그 항목을 풀기 위해 무엇을 알아야 하는지 점검 목록**을 넣었다.

실습을 실제로 수행하면 해당 파일에 결과를 채워 넣는다.

## 이 저장소에서의 자리

**MLOps 로드맵**이 진행 기록 원본을 소유한다.

| 이 강좌의 내용 | 로드맵 위치 |
|---|---|
| Module 1 — 변환·파이프라인·특징 공학·차원 축소 | **Phase 4 — 피처 엔지니어링** |
| Module 1 — 클래스 불균형·데이터 편향 | **Phase 10 — 책임 있는 AI** |
| Module 2 — AI Fairness 360 | Phase 10 |
| Module 2 — 이상치 탐지·군집화 | Phase 4 (새 특징 만들기) |
