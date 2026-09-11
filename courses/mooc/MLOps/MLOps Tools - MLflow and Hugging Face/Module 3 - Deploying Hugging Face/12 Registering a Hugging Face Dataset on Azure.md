# Registering a Hugging Face Dataset on Azure

## 개요
- Hugging Face의 와인 평점 데이터셋을 **① `datasets` 라이브러리로 다운로드 → ② pandas CSV로 저장 → ③ Azure ML Studio 웹 UI로 데이터 자산(Data Asset)으로 업로드·등록**하는 전체 흐름을 다루는 7분 실습.

## 내용

### 1. Hugging Face에서 데이터셋 다운로드
```python
from datasets import load_dataset
dataset = load_dataset("<account>/wine-ratings")
train_dataset = dataset["train"]
df = train_dataset.to_pandas()
df.describe()
df.to_csv("wine_ratings.csv", index=False)
```
- 데이터셋 페이지에서 제공하는 예시 코드를 그대로 활용(`pip install datasets` 사전 필요).
- `train` 분할만 선택해 **32,000행** 전체 데이터를 pandas DataFrame으로 변환 후 **CSV 파일로 저장** — Azure에 업로드할 준비 완료.

### 2. Azure ML Studio에서 데이터 자산 생성
- Azure ML Studio → **Data → Create** → 이름(`wine-dataset`), 설명("Hugging Face의 와인 데이터셋"), 타입 **Tabular** 선택.
- 소스: **Local files**(로컬 파일 업로드) 선택 → 저장 방식: **Azure Blob Storage** 선택 → 로컬에서 만든 `wine_ratings.csv`(약 12MB) 업로드.
- **자동 검증(validation)** 진행: 파일 포맷은 UTF-8로 제한, 건너뛸 행 없음, 모든 파일이 동일한 컬럼 헤더를 가짐 확인 → 컬럼(`name`, `region`, `variety`, `rating`, notes) 자동 인식.
- Azure가 컬럼 타입도 자동 추론 — 예: `rating`을 **decimal**(소수점 포함 float에 해당)로 정확히 인식. 필요시 타입을 수동으로 변경 가능(예: Boolean으로).
- **Create**로 데이터셋(Azure 용어로는 "Data Asset") 생성 완료.

### 버전 관리(Versioning)
- 생성된 데이터 자산에는 **"files in dataset 1" / "current version 1"**처럼 버전이 표시됨 — 이후 데이터셋을 갱신할 때마다 새 버전이 자동으로 쌓임.
- 이 버전 관리는 **Azure CLI나 API로 프로그래매틱하게 작업할 때 특히 의미가 큼** — 웹 UI로 시연한 이유는 개념을 시각적으로 쉽게 이해시키기 위함이며, 실제로는 Python API를 포함한 모든 SDK로 동일하게 접근 가능. 버전이 100개 있다면 원하는 특정 버전(예: 버전 10 또는 100)을 지정해 사용할 수도 있음.

## 예시
```python
# Hugging Face 데이터셋을 Azure 업로드용 CSV로 준비
from datasets import load_dataset

dataset = load_dataset("account/wine-ratings")
df = dataset["train"].to_pandas()
df.to_csv("wine_ratings.csv", index=False)
```

## 요약
- Hugging Face 데이터셋을 Azure ML Studio에 등록하는 흐름은 **`datasets` 라이브러리로 다운로드 → pandas로 변환·CSV 저장 → Azure ML Studio UI(또는 API)로 데이터 자산 업로드**라는 3단계로 요약된다.
- Azure는 업로드된 CSV의 컬럼 타입을 자동 추론하고, 데이터 자산을 **버전 관리**해 이후 갱신 시점마다 새 버전을 쌓아가며 프로그래매틱하게(API/CLI) 특정 버전을 지정해 활용할 수 있게 한다.
