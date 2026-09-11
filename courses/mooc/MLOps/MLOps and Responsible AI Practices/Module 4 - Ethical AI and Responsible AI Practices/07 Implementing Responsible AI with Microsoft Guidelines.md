# Implementing Responsible AI with Microsoft Guidelines

## 개요
- Azure Responsible AI Dashboard의 각 섹션(Performance/Error Analysis, Fairness, Interpretability)과 Jobs 탭의 로그가 Microsoft의 Responsible AI 6대 원칙 각각과 어떻게 직접 연결되는지 시연.

## 내용
### 대시보드 열기
- Azure Machine Learning Studio → 왼쪽 메뉴에서 **Models** 탭 → MLflow Scikit-learn 방식으로 학습된 모델(예시: `mlflow-sample` 모델) 선택 → 모델 페이지 상단의 **Responsible AI** 탭 선택 → 해당 탭에서 작업 실행(job run)을 선택해 대시보드 열기.
- 대시보드는 **성능 평가(Performance Evaluation)**, **오류 분석(Error Analysis)**, **공정성(Fairness)**, **해석 가능성(Interpretability)**을 중심으로 구성 — 이 섹션들이 Microsoft Responsible AI 프레임워크의 핵심 원칙을 직접 뒷받침.

### Performance Evaluation과 Error Analysis — 신뢰성과 안전성
- 대시보드 상단에 위치 — 정확도 점수(accuracy score), 위양성률(false positive rate), 위음성률(false negative rate), 표본 크기(sample size) 같은 모델 성능의 핵심 지표를 표시.
- 이 지표들은 모델이 얼마나 정확하고 일관되게 작동하는지를 보여줌으로써 **신뢰성과 안전성(Reliability and Safety)** 핵심 원칙을 직접 뒷받침.
- 데이터 미리보기는 **Data Analysis** 섹션 아래에 표시됨.

### Fairness 섹션 — 공정성과 포용성
- 이 뷰의 하단에 위치 — 대시보드가 그룹 간 정확도, 오류율, 위양성률 같은 성능 지표를 비교해 AI 모델의 결과를 다양한 그룹에 걸쳐 비교. 예: 서로 다른 연령대나 지역에서 모델이 얼마나 잘 작동하는지 보여줄 수 있음.
- 공정성 지표는 **공정성(Fairness)** 핵심 원칙과, 나아가 **포용성(Inclusiveness)** 원칙을 직접 다룸 — 모델의 예측이 특정 그룹에서 더 나쁜지 드러냄으로써, Fairness 섹션은 팀이 모델을 더 공평하고 모든 사용자를 포용하도록 만드는 방법을 안내.
- 이런 공정성 지표를 확인함으로써 팀은 **처리 정책(Treatment Policy)**이라는 것을 사용해 배포 전 모델을 조정할 수 있음 — 편향을 완화하기 위한 모델 권장 개입을 제공.
- 대시보드를 설정할 때, 공정성 이유로 대시보드가 변경을 제안하기를 원하는 특정 컬럼을 선택한 뒤 **Treatment Policy** 탭에서 이를 모니터링 — 이는 불공정하거나 편향된 결과의 위험을 줄임.

### Interpretability 섹션 — 투명성
- 대시보드 중간에 위치 — 모델이 어떻게 결정을 내리는지에 집중. 이 영역은 모델 예측에 가장 큰 영향을 미치는 특성들을 보여줌.
- **특성 중요도 점수(Feature Importance Scores)**는 소득이나 계좌 수 같은 어떤 데이터 포인트가 모델 출력을 이끄는지 설명 — 이를 알면 팀이 성능과 예측 뒤의 논리를 이해하는 데 도움이 됨.
- 해석 가능성은 **투명성(Transparency)** 핵심 원칙의 중심 — 사용자가 AI 시스템이 왜 그런 선택을 했는지 이해하면 더 신뢰하게 될 가능성이 높음.

### 로그 — 책임성
- Azure ML Studio는 상세한 로그를 포함해 **책임성(Accountability)** 핵심 원칙을 지원하는 도구도 포함.
- 로그를 찾으려면: 왼쪽 메뉴의 **Assets** 아래 **Jobs** 탭 선택 → AutoML 실험, 작업 선택 → 그 작업이 만들어낸 특정 모델 선택(예: Voting Ensemble) → **Outputs & Logs** 탭 선택.
- 이 로그들은 모델 버전, 배포 시간, 관련 데이터 변경 사항을 기록 — 좋은 기록은 모델의 행동과 결정을 추적할 수 있게 해줌. 문제가 생기면 팀이 이 기록을 검토해 이슈를 식별하고 빠르게 해결 가능.
- **Metrics** 탭을 선택하면 신뢰성, 안전성, 정확도 점수를 확인 가능 — 전체 평가의 중심.

### 배포 전 검토와 보고서 공유
- Azure의 도구는 다양한 조건에서 모델이 어떻게 작동하는지 테스트하고, 오류를 조기에 잡아내며, 위험을 줄이는 데 도움을 줌. 모델을 출시하기 전 대시보드 결과를 검토하면 실제 세계 사용 준비가 되었는지 확인 가능 — 팀은 Azure의 리포트를 책임감 있는 개발의 증거로 포함 가능.
- Metrics 탭에서 **Responsible AI** 탭으로 전환 → 리포트를 공유하려면 **Download** 버튼 클릭 → 리포트가 로컬 컴퓨터에 다운로드되어 이메일 등으로 배포 가능.

### 배포 후 모니터링
- 개발과 모니터링은 모델이 배포된 후에도 멈추지 않음 — 성능이나 공정성의 변화를 모니터링하고, 예상치 못한 문제가 발견되면 재학습해야 함. **Monitoring** 탭이 이를 돕는 데 사용될 수 있음.

### 신뢰로 이어지는 여섯 원칙
- 대시보드의 각 영역과 6대 핵심 원칙은 모두 **신뢰(trust)**라는 아이디어로 다시 연결됨 — 신뢰할 수 있는 AI 시스템은 이 원칙들을 규칙이 아니라 습관과 지속적인 점검으로 따름으로써 만들어짐.
- 모든 배포는 공정성 점검, 결정에 대한 설명 리포트, 감사 기록, 개인정보 설정을 포함해야 함 — 이런 점검을 프로세스에 내장함으로써 실제 사용에서 시스템을 보호하고, 기능과 윤리 모두에서 높은 표준을 충족하도록 보장.
- AI 대시보드는 지표를 제공하지만, **인간의 감독(Human Oversight)**이 숙고와 행동을 제공 — 각각이 신뢰할 수 있고 책임감 있는 AI를 구축하는 한 단계를 지원.

## 요약
- Azure Responsible AI Dashboard는 Performance Evaluation·Error Analysis 섹션으로 신뢰성과 안전성을, Fairness 섹션과 Treatment Policy로 공정성과 포용성을, Interpretability 섹션의 특성 중요도로 투명성을, Jobs 탭의 상세 로그로 책임성을 각각 뒷받침하며, 배포 전 리포트를 다운로드해 책임감 있는 개발의 증거로 남기고 배포 후에도 Monitoring 탭으로 성능·공정성 변화를 지속적으로 확인함으로써, 여섯 가지 핵심 원칙이 일회성 규칙이 아니라 일상 업무의 습관으로 자리 잡을 때 진정으로 신뢰할 수 있는 AI 시스템이 만들어진다.
