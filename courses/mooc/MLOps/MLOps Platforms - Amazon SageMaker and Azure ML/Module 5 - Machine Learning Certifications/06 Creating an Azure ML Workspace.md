# Creating an Azure ML Workspace

## 개요
- Azure 포털에서 처음부터 **Azure Machine Learning 워크스페이스**를 생성하는 전체 과정을 단계별로 시연하는 6분 데모.

## 내용

### 워크스페이스 생성 시작
- Azure 포털에서 "ml"을 검색하면 **Azure Machine Learning** 서비스가 상위에 나타남.
- 드롭다운에서 **Create** 클릭 → 두 가지 옵션: **새 워크스페이스(new workspace)**와 **새 레지스트리(new registry)**.
  - 처음 시작하고 Azure ML Studio(웹 인터페이스)를 사용하려면 **새 워크스페이스**를 선택.
  - **새 레지스트리**는 여러 워크스페이스를 다루는 더 고급 기능이므로 초보자는 신경 쓸 필요 없음.

### 워크스페이스 폼 작성
- 구독(subscription)은 자동 선택됨.
- **리소스 그룹**: 기존 것을 선택하거나 새로 생성 — 데모/실험 시에는 `demo-` 접두사를 붙여 새로 만드는 것을 권장(예: `demo-mlstudio`).
- **워크스페이스 이름**: 리소스 그룹과 동일한 이름으로 짓는 것을 선호(예: `demo-mlstudio`).
- 이름을 입력하면 **스토리지 계정(Storage Account)**, **Key Vault**, **Application Insights**가 자동으로 채워짐 — 이는 Azure ML Studio가 머신러닝 작업에 특화된 환경이기 때문에, 일반 가상 머신을 띄우는 것과 달리 이런 구성 요소들이 자동으로 설정되는 것.
- **컨테이너 레지스트리(Container Registry)**: 자동으로 설정되지는 않지만, 나중에 모델을 프로덕션에 컨테이너로 배포할 계획이라면 매우 유용 — 기존 레지스트리를 선택하거나 새로 만들 수 있음(이 데모에서는 생략).

### 생성과 배포
- "Review and create" 클릭 → 검증(validation) 진행 → **Create** 클릭 → "Deployment in progress" 상태로 전환 — 백그라운드에서 Key Vault, 스토리지 계정(그리고 선택했다면 컨테이너 레지스트리까지) 등 선택한 모든 리소스를 Azure가 생성.
- 완료 후 "Go to resource" 클릭.

### 리소스 페이지 ≠ Azure ML Studio
- 생성된 워크스페이스의 리소스 페이지는 **Azure Machine Learning Studio 자체가 아님** — 이 페이지는 개요, 활동 로그, 접근 제어, 태그, 로그·네트워킹 등을 관리하는 패널.
- 실제 머신러닝 작업이 이뤄지는 곳은 별도 — 페이지를 아래로 스크롤하면 **"Launch studio"** 버튼이 있으며, 여기를 통해 실제 Azure ML Studio로 진입.

## 요약
- Azure ML 워크스페이스는 포털에서 리소스 그룹·이름을 지정하면 스토리지·Key Vault·Application Insights가 자동으로 함께 프로비저닝되며, 생성 후의 "리소스 페이지"는 관리용 패널일 뿐이고 실제 ML 작업은 "Launch studio" 버튼을 통해 진입하는 별도의 Azure ML Studio에서 이뤄진다.
