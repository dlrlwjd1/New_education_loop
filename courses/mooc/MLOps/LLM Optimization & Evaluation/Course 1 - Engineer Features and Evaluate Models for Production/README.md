# Engineer Features and Evaluate Models for Production

- 플랫폼: MOOC · 제공: MOOC (강사 표기 "Professionals in the Industry")
- 전문과정: [LLM Optimization & Evaluation](../README.md) 의 **1번째 강좌** (전체 13강좌)
- 링크: https://www.mooc.org/learn/engineer-features-and-evaluate-models-for-production
- 난이도: 중급 · MOOC Plus 포함
- 구성: 2 모듈 · 10개 항목 (영상 2 · 읽기 2 · Lab 2 · Dialogue 2 · 과제 2)
- 분량: **총 약 3시간** (Lab 포함 시 실제로는 더 걸린다)
- 정리일: 2026-08-22

## 이 강좌의 한 줄 요약

**전처리를 `ColumnTransformer` 하나로 모으고(Module 1), 정확도 대신 올바른 지표로 모델을 평가해 이해관계자에게 권고한다(Module 2).**

> **전문과정 이름에 LLM이 붙어 있지만 이 강좌에는 LLM 내용이 없다.** 다루는 것은 전부 고전 ML의 피처 엔지니어링과 모델 평가다 (`StandardScaler`·`OneHotEncoder`·`TfidfVectorizer`·TensorBoard·정확도 역설). 전문과정의 도입 강좌라 기초를 깔는 역할이다.

## Module 1 - Build Feature Engineering Pipelines

- [01 Welcome! Let Us Set Your Production ML Goals](Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/01%20Welcome%21%20Let%20Us%20Set%20Your%20Production%20ML%20Goals.md) — Dialogue 15분. 목표 설정 (대화 내용 미기록)
- [02 The What and How of Scikit-learn Pipelines](Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/02%20The%20What%20and%20How%20of%20Scikit-learn%20Pipelines.md) — 읽기 7분. **`Pipeline` · `ColumnTransformer` · 데이터 누출 방지 3원칙**
- [03 How to Build a ColumnTransformer - Step-by-Step](Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/03%20How%20to%20Build%20a%20ColumnTransformer%20-%20Step-by-Step.md) — 영상 6분. 수치·범주·텍스트를 한 번에
- [04 Build a Pipeline for Churn Prediction](Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md) — Lab 22분 (내용 미확인)
- [05 AI Graded Open-Ended Questions](Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/05%20AI%20Graded%20Open-Ended%20Questions.md) — 연습 과제 30분 (문항 미확인)

## Module 2 - Evaluate Experiments and Recommend a Model

- [01 Why a High Accuracy Score Can Be a Lie](Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/01%20Why%20a%20High%20Accuracy%20Score%20Can%20Be%20a%20Lie.md) — 영상 4분. **이 강좌에서 가장 값진 항목.** 정확도 역설 + 숫자가 붙은 실제 실패 사례
- [02 From Evaluation to Recommendation](Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/02%20From%20Evaluation%20to%20Recommendation.md) — 읽기 7분. TensorBoard 과적합 진단 + 트레이드오프 세 축
- [03 How to Diagnose Overfitting with TensorBoard](Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/03%20How%20to%20Diagnose%20Overfitting%20with%20TensorBoard.md) — Lab 1시간 (내용 미확인)
- [04 Apply Your Judgment - Defend Your Model Choice](Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/04%20Apply%20Your%20Judgment%20-%20Defend%20Your%20Model%20Choice.md) — Dialogue 15분. 비기술 이해관계자에게 방어하기
- [05 Submit Your Feature Engineering and Evaluation Report](Module%202%20-%20Evaluate%20Experiments%20and%20Recommend%20a%20Model/05%20Submit%20Your%20Feature%20Engineering%20and%20Evaluation%20Report.md) — **채점 과제. 통과 필수** (요구사항 미확인)

## 가장 기억할 것

**Module 2의 01번 영상**이 이 강좌의 핵심이다. 강사가 결제 프로젝트에서 겪은 실패에 숫자가 붙어 있다.

| | 값 |
|---|---|
| 검증 정확도 | 98% |
| 실제 사기 유병률 | 약 0.6% |
| **사기 재현율** | **0.07** |
| PR-AUC | 거의 무작위 |

고친 뒤: **정확도 98% → 93%로 떨어졌지만 사기 재현율은 6배, 순손실은 첫 달에 측정 가능하게 감소.**

## 정리 범위와 한계

**정리한 것 (4개)** — 영상 2개는 **영어 원본 자막**, 읽기 자료 2개는 본문 기반.

**안내문만 정리한 것 (4개)** — Lab 2개와 Dialogue 2개. 페이지의 Overview·학습 성과·진행 방법은 실제 텍스트로 확보했으나, **Lab 노트북 내용과 AI 대화 내용 자체는 실행해야 나온다.**

**미확인 (2개)** — 과제 2개. 시작해야 문항이 노출된다.

`AGENTS.md` 규칙대로 **임의로 채우지 않고**, 각 파일에 확보한 안내문 + 그 항목을 하기 위해 무엇을 알아야 하는지 점검 목록을 넣었다. 실습·과제를 수행하면 해당 파일에 결과를 채운다.

## 이 저장소에서의 자리

**MLOps 로드맵**이 진행 기록 원본을 소유한다.

| 이 강좌의 내용 | 로드맵 위치 |
|---|---|
| Module 1 — 프로덕션 피처 파이프라인 | **Phase 4 — 피처 엔지니어링** |
| Module 2 — 지표 선택과 과적합 진단 | **Phase 5 — 모델 학습과 평가** |

## 함께 보면 좋은 저장소 자료

- [IBM AI Workflow: Feature Engineering and Bias Detection](../../IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/README.md) — **같은 주제를 훨씬 깊게** 다룬다. 특히 [08 Class Imbalance](../../IBM%20AI%20Enterprise%20Workflow/Course%203%20-%20AI%20Workflow%20-%20Feature%20Engineering%20and%20Bias%20Detection/Module%201%20-%20Data%20Transforms%20and%20Feature%20Engineering/08%20Class%20Imbalance.md)가 정확도 역설을 식으로 설명한다. 이 강좌의 Module 2 01번과 짝지어 보면 좋다
- [MLOps Platforms / Module 2 — 피처 엔지니어링](../../MLOps%20Platforms%20-%20Amazon%20SageMaker%20and%20Azure%20ML/Module%202%20-%20Exploratory%20Data%20Analysis%20with%20AWS%20Technology/) — AWS 기준 피처 엔지니어링 7강
