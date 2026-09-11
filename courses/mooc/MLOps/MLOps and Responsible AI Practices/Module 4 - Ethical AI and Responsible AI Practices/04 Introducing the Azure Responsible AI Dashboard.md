# Introducing the Azure Responsible AI Dashboard

## 개요
- Azure Machine Learning Studio에서 Responsible AI Dashboard를 생성하고, Fairness(공정성)·Interpretability(해석 가능성)·Performance(성능) 세 섹션을 통해 모델을 배포 전에 점검하는 방법을 시연.

## 내용
### Responsible AI Dashboard 접근 방법 두 가지
1. **Models 탭**에서 등록된 ML flow 모델을 선택하고 **Responsible AI** 탭에서 대시보드를 직접 설정.
2. **Jobs 탭**에서 자동화된 ML(AutoML) 작업으로 들어가 **Models and Child Jobs** 탭에서 생성된 자식 모델 중 하나를 선택하고 **Responsible AI** 탭 확인.
- 수동으로 등록한 모델은 각각에 대해 새 대시보드를 직접 만들어야 하지만, **AutoML 작업의 대시보드는 실행 시 자동으로 생성됨**.

### 새 Responsible AI Dashboard 만들기
- Models에서 ML flow 샘플 모델을 선택 → **Responsible AI** 탭 → **Create Responsible AI Insights** 드롭다운에서 **Create Dashboard** 선택.
- 설정 단계:
  - 학습 데이터셋과 테스트 데이터셋 선택.
  - 모델 유형 선택(회귀, 이진 분류, 다중 클래스 분류) — 예시에서는 신용 위험 여부(참/거짓)를 판단하는 **이진 분류**.
  - 모든 컴포넌트 선택 → 타겟 특성(target feature) 지정.
  - 학습 시 제외했던 특성이나 범주형(Boolean) 특성 선택 — 예시에서는 모든 Boolean 타입에 체크.
  - **처리 특성(Treatment Features)** 선택 — 타겟 결과를 최적화하기 위해 변경해볼 특성. 이 특성들을 선택해 모델 예측에 미치는 영향을 테스트함으로써 의심되는 관계를 확인하고 타겟 결과에 대한 영향을 평가할 수 있음. 예시에서는 **소득(Income)**과 **대출 금액(Loan Amount)**을 사용해, 이 값이 바뀌면 신용 위험 여부에 영향을 미치는지 확인.
  - 컴퓨팅 인스턴스 선택 후 **Create** — 모델과 데이터셋 크기에 따라 몇 분에서 최대 1시간까지 소요될 수 있음.

### Fairness(공정성) 섹션
- 대시보드 홈페이지 상단에 메인 내비게이션이 있고, 중앙에 Fairness·Interpretability·Performance를 볼 수 있는 옵션이 있으며, 상단의 Performance 섹션에는 오류 분석과 모델 개요 관련 지표가 있음.
- Fairness 섹션의 차트에서 각 막대는 각 특성이 전체 모델 예측에 미치는 영향을 보여줌 — 모델 공정성에 과도한 영향을 미칠 수 있는 특성을 식별하는 데 도움.
- 공정성의 목표는 모델의 결정이 편향되지 않도록 보장하는 것 — 대시보드에 정의된 성별, 인종, 나이 같은 민감한 특성에 걸쳐 모델이 유사한 정확도나 오류율을 달성함을 의미. 이런 값을 **Feature Importance Scores**(특성 중요도 점수)라고 부르기도 함.
- 막대가 매우 다르다면 모델이 모든 그룹에 동등하게 공정하지 않을 수 있음 — 예: 소득(Income)이 가장 긴 막대를 보이면, 소득이 모델 결과에 가장 강한 영향을 미친다는 뜻. 대시보드는 그룹별 숫자를 표시할 수 있어, 팀이 종종 "격차(disparity)"라 불리는 차이를 정확히 측정하는 데 도움을 줌.
- 이 섹션은 집계된 특성 중요도를 보여주는 박스 차트로도 정렬할 수 있음.

### Interpretability(해석 가능성) 섹션 — Causal Analysis라고도 함
- 해석 가능성은 모델이 어떻게 결정을 내리는지 이해하는 것 — 높은 점수는 모델이 예측을 위해 그 특성에 크게 의존함을 의미.
- 이 섹션은 나이, 금액, 카테고리 같은 모델이 사용하는 데이터인 특성 목록을 보여줌. 오른쪽의 드롭다운 메뉴에서 서로 다른 데이터 포인트를 선택해 각 특성을 찾고, 이들이 더 큰 예측에 어떤 영향을 미치는지 관찰 가능.
- **Treatment Policy** 탭을 선택하면 이전에 선택한 특정 특성을 제거했을 때 어떤 일이 일어나는지 보여줌 — 예: 처리 특성을 **소득(Income)**으로 설정하고 스크롤하면, 권장되는 처리는 거의 항상 모델 예측에서 소득의 중요도를 **낮추는 것**. 이를 **대출 기간(Loan Term)**으로 설정하면, 더 공정한 모델을 위해 대출 처리의 중요도를 **높이는 것**이 권장 처리임이 드러남.

### Performance(성능) 탭
- Jobs 탭 안에서 확인 가능 — AutoML 샘플로 들어가 이전에 생성된 모델로 이동한 뒤 상단의 **Metrics** 탭 선택.
- 정확도(accuracy), 정밀도(precision) 같은 다양한 지표를 보여주는 차트, 선, 다른 그래픽이 있는 대시보드가 표시됨.
- **정확도(Accuracy)** — 올바른 예측의 비율. **F1 점수** — 긍정·부정 결과에 대한 정확도를 결합한 지표. 다른 지표들도 상단에 나열됨.
- 왼쪽 상단의 공개 삼각형(disclosure triangle)으로 지표를 선택하거나 제거 가능.
- 지표에서 리포트를 만들어야 한다면 **Edit View** 드롭다운을 열어 **Share**를 선택해 공유할 링크를 복사.

### 대시보드 공유
- Responsible AI Dashboard를 공유하려면 **Responsible AI** 탭 선택 → **Download** 버튼으로 대시보드 다운로드.

### 결론
- 각 섹션(Fairness, Interpretability, Performance)은 신뢰할 수 있고 책임감 있는 AI를 구축하는 하나의 단계를 지원 — 모델을 배포하기 전에 모든 대시보드 섹션을 검토하는 것은 시스템이 의도한 대로 작동하고 윤리적 기준을 충족하도록 보장.

## 요약
- Azure Responsible AI Dashboard는 Models 탭에서 수동으로 만들거나 AutoML 작업 실행 시 자동으로 생성되며, 학습/테스트 데이터셋·모델 유형·타겟 특성·범주형 특성·처리 특성(Income, Loan Amount 등)을 설정해 생성한 뒤, Fairness 섹션에서 특성별 중요도와 그룹 간 격차를 확인하고 Interpretability(Causal Analysis) 섹션에서 특정 특성을 제거하거나 조정했을 때의 권장 처리(Treatment Policy)를 확인하며 Performance 섹션에서 정확도·F1 점수 같은 지표를 검토함으로써, 모델을 배포하기 전에 공정성·설명 가능성·성능을 종합적으로 점검할 수 있다.
