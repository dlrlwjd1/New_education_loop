# Hugging Face and Azure ML Studio

## 개요
- Azure ML Studio 워크스페이스를 처음부터 생성하고, **Data(데이터 자산)와 Models** 섹션의 UI를 개괄적으로 살펴보는 4분 소개 영상.

## 내용

### Azure ML 워크스페이스 생성
- Azure 포털 → **Azure Machine Learning** 섹션 → 새 워크스페이스 생성.
- 리소스 그룹(예: `demo-ml`)과 워크스페이스 이름을 **동일하게** 지정하는 습관(특히 데모 목적일 때) 언급.
- "Review + Create" → 검증 단계 → "Create" → 배포(약간의 시간 소요) → 완료 후 리소스로 이동해 **"Launch Studio"**.

### Studio의 주요 섹션 — Data와 Models
- **Data**: **"Create New"**로 새 데이터 자산(data asset, 강사는 "데이터셋"이라고도 부름) 생성 가능. 예시로 tabular 타입 선택 → 다양한 소스(Azure Open Datasets, 웹 파일 URL 등 — URL만 붙여넣으면 데이터 검증까지 진행) 확인만 하고 실제 등록은 다음 영상에서 진행.
- **Models**: **"Register"**로 로컬 파일이나 작업(job) 출력으로부터 모델 등록 가능 — 이 모든 작업은 **Azure SDK**로도 동일하게 수행 가능.
- Home 화면에는 AutoML, Designer, Notebooks 등 다른 기능도 있지만 이번 코스에서는 다루지 않음 — Notebooks는 자유롭게 탐색해볼 만하다고 언급.

## 요약
- Azure ML Studio 워크스페이스는 리소스 그룹 생성 → 검증 → 배포라는 표준 Azure 흐름으로 만들어지며, **Data(데이터 자산 등록)**와 **Models(모델 등록)** 두 섹션이 이번 코스에서 다룰 핵심 UI다.
- 다음 영상들에서 이 두 섹션을 이용해 실제로 Hugging Face 데이터셋과 모델을 등록하는 과정을 이어간다.
