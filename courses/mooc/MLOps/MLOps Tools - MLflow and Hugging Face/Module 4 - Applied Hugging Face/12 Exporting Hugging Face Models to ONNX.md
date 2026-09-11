# Exporting Hugging Face Models to ONNX

## 개요
- **DistilBERT** 모델을 실제로 ONNX 포맷으로 내보내는 4분 실습. 모델의 지원 기능(feature)을 먼저 확인한 뒤, CLI로 특정 태스크(질의응답)에 맞는 ONNX 파일을 생성한다.

## 내용

### 모델이 지원하는 Feature 확인
```python
from transformers.onnx.features import FeaturesManager
```
- **DistilBERT**로 예제 진행 — 이 모델이 지원하는 기능(feature)들을 확인: **시퀀스 분류(sequence classification), 객관식(multiple choice), 토큰 분류(token classification), 질의응답(question-answering)** 등.
- **왜 이게 중요한가**: 모델이 특정 작업(예: 질의응답)에 특화되어 있다면, **그 작업에 맞는 feature로만 ONNX 변환**하면 되기 때문 — 강사는 특히 질의응답 모델을 좋아한다고 언급.

### CLI로 ONNX 변환 실행
```bash
python -m transformers.onnx \
  --model=distilbert-base-uncased-distilled-squad \
  --feature=question-answering \
  .
```
- **`--model`**: 정확한 모델 이름(`distilbert-base-uncased-distilled-squad`, "말하기 번거로운 이름"이라고 언급).
- **`--feature`**: 원하는 태스크(`question-answering`).
- 마지막의 **점(`.`)**: 결과 ONNX 모델을 **현재 디렉터리에 생성**하라는 의미(경로+이름을 지정하면 다른 위치/이름으로도 가능).

### 실행 및 결과 확인
- 실행 시 먼저 **DistilBERT 파인튜닝 모델을 다운로드** → 진행 로그 출력.
- 확인해야 할 핵심 로그: **모델 검증(model validation)**과 **"All good, model saved"**, 그리고 결과 파일명 **`model.onnx`**.
- VS Code Explorer에서 새로 생성된 `model.onnx` 파일을 직접 확인.

## 예시
```bash
# DistilBERT를 질의응답(feature) 용 ONNX로 변환
python -m transformers.onnx \
  --model=distilbert-base-uncased-distilled-squad \
  --feature=question-answering \
  .
```

## 요약
- Hugging Face 모델을 ONNX로 내보내는 실전 흐름은 **① 모델이 지원하는 feature 확인 → ② `python -m transformers.onnx --model=<모델명> --feature=<태스크> <출력경로>`**로 요약되며, "All good, model saved" 로그와 함께 생성된 `model.onnx` 파일이 최종 산출물이다.
