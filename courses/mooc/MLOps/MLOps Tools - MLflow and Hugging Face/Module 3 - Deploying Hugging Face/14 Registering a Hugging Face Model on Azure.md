# Registering a Hugging Face Model on Azure

## 개요
- GPT-2 모델을 **`transformers`로 다운로드 → `save_pretrained()`로 로컬 저장 → Azure ML Studio에 모델로 등록**하는 5분 실습. 앞선 데이터셋 등록 실습과 대응되는 "모델 버전" 관리 흐름을 다룬다.

## 내용

### `transformers`로 GPT-2 다운로드 및 로컬 저장
```python
from transformers import GPT2Tokenizer, GPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")
model.save_pretrained("gpt2")
```
- PyTorch와 transformers가 이미 설치된 환경에서 실행 — 이미 캐시된 모델이라 3.8초 만에 로드.
- `save_pretrained()` 실행 시 **`gpt2`라는 로컬 디렉터리**가 생성되고, 그 안에 **`config.json`**(모델 메타데이터)과 **`pytorch_model.bin`**(PyTorch로 로드 가능한 실제 가중치 파일)이 저장됨.

### Azure ML Studio에서 모델 등록
- Home → **Models → Register** → **"From local files"** 선택 → 모델 타입은 **Unspecified**로 지정 → 방금 저장한 **`pytorch_model.bin`**(약 486.75MB) 업로드.
- 이름(`GPT2`), 설명 입력 → 버전은 기본값(1) 사용, 태그는 생략 → **Register**로 완료(대용량 파일이라 업로드에 다소 시간 소요).

### 왜 Azure에 모델을 등록하는가
- **간단한 버전 관리 체계** 제공 — Hugging Face 모델뿐 아니라 **ONNX 등 다른 모델 타입**에도 동일하게 적용 가능.
- 등록된 모델을 **배치(batch) 엔드포인트** 또는 **실시간(real-time) 엔드포인트**로 바로 배포할 수 있음.
- 모델을 다른 사람과 공유 가능 — 버전이 10개 있다면 각 버전을 비교·분석(클러스터로 실험 등)하는 것도 가능.
- **Asset ID**로 나중에 이 모델을 다시 조회·상호작용할 수 있음.

## 예시
```python
# Hugging Face 모델을 로컬에 저장 (Azure 업로드용)
from transformers import GPT2Tokenizer, GPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")
model.save_pretrained("gpt2")  # ./gpt2/config.json, pytorch_model.bin 생성
```

## 요약
- Hugging Face 모델을 Azure ML Studio에 등록하는 흐름은 **`save_pretrained()`로 로컬 저장 → Models → Register → From local files**로 요약되며, 이는 데이터셋 등록 흐름과 구조적으로 동일하다.
- Azure에 등록된 모델은 버전 관리, 배치/실시간 엔드포인트 배포, 공유, Asset ID를 통한 재조회까지 지원하는 중앙 모델 레지스트리 역할을 한다.
