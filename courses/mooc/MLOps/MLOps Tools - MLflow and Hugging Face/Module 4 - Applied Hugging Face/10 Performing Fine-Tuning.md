# Performing Fine-Tuning

## 개요
- Hugging Face 공식 문서의 파인튜닝 예제(Colab)를 **CPU(Colab) vs GPU(GitHub Codespaces)** 환경에서 나란히 실행해 **성능 차이를 직접 비교**하는 8분 실습.

## 내용

### Hugging Face 공식 문서의 파인튜닝 예제
- Hugging Face 공식 코스의 **"Fine-tuning a pretrained model"** 섹션 — 코드가 그리 길지 않으며, **소프트웨어 설치 → 토큰화(tokenize) 함수 → Trainer 설정 → train() 실행**이라는 단순한 구조.
- 문서에서 제공하는 **Colab 노트북**을 그대로 열어 실행 가능.

### CPU 환경(Colab)에서 실행 — 베이스라인
- Colab의 기본 런타임은 **하드웨어 가속 없는 CPU** — "Change runtime type"에서 확인.
- `Runtime → Run all`로 전체 실행 → 설치(미리 로드되어 있지 않아 시간 소요) → 데이터셋 로드 → 사전학습 모델 로드 → **파인튜닝(3 epoch) 시작**.
- 진행 상황: 총 1,377 스텝 중 겨우 4스텝 진행된 상태로 오래 걸릴 것으로 예상(추정 20~30분 이상) — CPU 기반 상용 하드웨어로 파인튜닝할 때의 "베이스라인" 성능을 보여주기 위한 의도적 비교 대상.

### GPU 환경(GitHub Codespaces)에서 동일 코드 실행
- 동일한 코드를 GPU 지원 Codespaces에서 실행: `datasets.load_dataset()`으로 **GLUE 데이터셋** 다운로드, 토큰화 함수, 커스텀 **`compute_metrics`** 함수 정의, `Trainer`에 데이터와 평가 지표 전달.
- `nvidia-smi -l 1`로 GPU 모니터링을 동시에 실행하며 학습 진행.
- **캐시된 데이터셋 발견**(자신의 환경이라 재사용 가능) → 학습 시작 → **GPU(Tesla V100)가 실제로 포화(saturate)되는 것**을 관찰.
- 결과: Colab의 CPU 버전이 여전히 30번째 스텝 근처에 머물러 있는 동안, GPU 버전은 훨씬 빠르게 스텝을 통과 — **극적인 속도 차이**를 실시간으로 대비해서 보여줌.

### 평가 지표 개선 확인
- 파인튜닝 과정에서 **F1 스코어** 같은 평가 지표가 점점 개선되는 것을 확인 — "베이스라인에서 개선된 정확도"로 이어짐.

### 개선된 모델을 Hugging Face에 푸시하기
- `TrainingArguments`에서 **`push_to_hub`** 관련 옵션을 설정하면, 개선이 있을 때마다 결과를 Hugging Face의 새 모델 리포지토리로 자동 푸시 가능.
- 실제 사례로 **Facebook 원본 모델을 파인튜닝해 별도 리포지토리에 올린 요약 모델**을 Hugging Face Models 페이지에서 확인 — "다른 사람들이 이미 이렇게 하고 있다"는 것을 보여주며, 누구나 GPU 자원만 있으면 동일하게 자신만의 파인튜닝 모델을 만들어 공유할 수 있다고 강조.

## 예시
```python
# 파인튜닝 핵심 흐름 (Hugging Face 공식 예제 기반)
from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForSequenceClassification, TrainingArguments, Trainer

dataset = load_dataset("glue", "mrpc")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)

tokenized_datasets = dataset.map(tokenize_function, batched=True)
model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)

def compute_metrics(eval_pred):
    # F1 등 평가 지표 계산
    ...

training_args = TrainingArguments(
    output_dir="my-fine-tuned-model",
    push_to_hub=True,   # 개선 시 Hugging Face로 자동 푸시
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    compute_metrics=compute_metrics,
)
trainer.train()
```

```bash
nvidia-smi -l 1   # GPU 사용률 실시간 모니터링
```

## 요약
- 동일한 Hugging Face 파인튜닝 코드를 CPU(Colab)와 GPU(GitHub Codespaces)에서 나란히 실행한 결과, **GPU 환경이 압도적으로 빠르게 학습을 진행**하며 F1 같은 평가 지표를 실시간으로 개선하는 것을 확인했다.
- `TrainingArguments(push_to_hub=True)`로 파인튜닝된 모델을 자동으로 Hugging Face에 푸시할 수 있으며, 이는 이미 커뮤니티에서 널리 쓰이는 패턴(예: Facebook 원본 모델을 파인튜닝해 재배포한 요약 모델)이다.
