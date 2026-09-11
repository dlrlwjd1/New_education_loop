# Creating an Azure Auto ML Job

## 개요
- Azure Machine Learning Studio에서 GitHub의 와인 평점(wine ratings) CSV 데이터를 웹 URL로 가져와, 데이터셋 생성 → 스키마 정제 → 컴퓨트 클러스터 생성 → 회귀(regression) AutoML 작업 실행까지 전체 과정을 시연하는 14분 데모(가장 긴 영상).

## 내용

### Azure ML Studio 진입
- 워크스페이스에서 "Launch studio"로 진입하면 Azure Machine Learning Studio 인터페이스가 열림 — 처음 보면 다소 복잡해 보일 수 있음.
- 왼쪽 패널에서 Notebooks, **Automated ML**, **Designer**(드래그 앤 드롭 파이프라인 빌더, 이번엔 사용 안 함) 등에 접근 가능.
- 언제든 "Home"으로 돌아올 수 있음. Automated ML 시작은 홈 화면 로고, 좌측 패널의 Automated ML, 또는 "Create new"를 통해 가능 — 모두 동일한 결과로 이어짐.

### 데이터셋(데이터 자산) 생성 — 웹 파일에서 가져오기
- "Create new automated ML job" → 5단계 중 4단계(컴퓨터 비전)는 건너뛰고 **테이블형(tabular) 데이터셋** 사용.
- 데이터 자산이 없으므로 그 자리에서 바로 생성 가능 — 이름(`wine ratings`), 설명 입력, 유형은 tabular.
- 소스 옵션: Azure Open Datasets(사전 준비된 인기 데이터셋), SQL 데이터베이스, 로컬 파일, Azure Storage(blob), **웹 파일(web files)** — 이번엔 웹 파일 사용.
- GitHub에 미리 업로드해둔 `wine ratings.csv`의 **raw** URL(`raw.githubusercontent.com`)을 복사해 붙여넣기 — GitHub 웹페이지 URL이 아니라 **원본 raw URL**이어야 함이 중요.
- 데이터 검증(validation)을 건너뛰지 않고 Azure가 검증하도록 진행.

### 데이터 미리보기와 스키마 정제
- 미리보기에서 문제 확인: 이상한 인덱스 컬럼, 뒤섞인 grape 컬럼 등. red wine/white wine, 평점(rating) 컬럼은 정상.
- 파일 형식·인코딩·구분자(delimiter)·헤더 여부 설정 — 헤더 있음으로 진행.
- **스키마 화면**에서 불필요한 컬럼 제거: 인덱스 컬럼(column 1) 제거, `name` 제거(이 작업에 불필요), `grape`도 뒤섞여 있어 제거.
- 최종적으로 **region, variety(red/white wine), rating** 세 컬럼만 사용하기로 결정.
- "Create"로 데이터셋 생성 → 목록에 바로 안 보이면 **Refresh**를 눌러야 표시됨.

### AutoML 작업 설정
- 실험 이름 지정(예: `auto ML experiment`).
- **타깃 컬럼(target column)** 선택 — 예측하고자 하는 것, 즉 **레이블(label)**. 이 경우 `rating`을 예측(region과 variety가 피처).
- **컴퓨트** 선택 — 컴퓨트 클러스터 또는 인스턴스 중, 병렬화를 위해 **클러스터**를 새로 생성.
  - **Low priority**(예: 시간당 1센트, 2GB RAM) vs **Dedicated**(더 비쌈) — 이 데모에서는 low priority 옵션이 해당 시점·리전에서 제공되지 않아 **dedicated**로 진행, 14GB RAM 노드(시간당 29센트) 선택.
  - 노드 1개, 코어 6개(쿼터 한도) — CPU 클러스터로 생성.
  - SSH 접근 등 고급 설정은 이번엔 불필요.

### 태스크 유형 선택과 실행
- 머신러닝 태스크 유형: 분류, **회귀**, 시계열, NLP, 컴퓨터 비전 중 — Azure가 연속형 수치값(와인 평점) 예측임을 자동 감지해 **회귀(Regression)**로 올바르게 제안.
- 검증 유형은 Auto, 테스트 데이터 자산은 사용하지 않음 → **Finish**로 AutoML 작업 생성.
- 기본 설정상 여러 알고리즘을 시도하며 최적 모델을 찾는 데 상당한 시간이 소요됨 — Automated ML 화면으로 돌아가면 실행 중(45초 경과 등)임을 확인 가능하며, 완료되면 결과를 살펴볼 수 있음.

## 요약
- 이 데모는 GitHub raw URL로 CSV 데이터를 Azure ML 데이터 자산으로 가져와, 불필요한 컬럼을 스키마 화면에서 제거하고, 새 컴퓨트 클러스터를 생성한 뒤, 타깃 컬럼(rating)에 대해 회귀 AutoML 작업을 실행하는 전체 흐름 — 데이터 준비부터 실험 실행까지 — 을 실제로 보여준다.
