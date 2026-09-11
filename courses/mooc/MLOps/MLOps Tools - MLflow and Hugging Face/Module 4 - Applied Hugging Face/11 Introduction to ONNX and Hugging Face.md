# Introduction to ONNX and Hugging Face

## 개요
- **ONNX(Open Neural Network Exchange)**의 개념과, Hugging Face `transformers` 라이브러리의 **ONNX 익스포트 CLI**를 환경 설정부터 살펴보는 8분 개괄 영상. 실제 익스포트는 다음 영상에서 진행.

## 내용

### ONNX란 — 프레임워크 무관 정규화 포맷
- 어떤 프레임워크로 모델을 만들었든 **ONNX 포맷으로 내보내기(export)** 가능 — 이렇게 정규화하면 프레임워크 출처와 무관하게 다양한 아키텍처에 배포 가능.
- **클라우드 서비스들도 ONNX를 네이티브로 지원** — 특정 프레임워크에 종속되지 않고 활용 가능.

### 환경 설정 (`huggingface-onnx` 리포지토리)
- Conda 환경 YAML: **Python 3.8**, PyTorch(PyTorch 채널에서 설치), **`transformers[onnx]`**(대괄호 표기로 ONNX 관련 추가 의존성을 함께 설치), **ONNX 런타임**, Jupyter 관련 패키지.
- VS Code에서 올바른 **Conda 커널(인터프리터)**을 선택했는지 확인하는 것이 중요.
- Hugging Face는 **BART, BERT, GPT-2, RoBERTa, T5** 같은 인기 모델에 대해 **이미 준비된 ONNX 설정(config)**을 기본 제공 — 별도로 알아낼 필요 없이 바로 사용 가능.

### `transformers.onnx` CLI 확인
```bash
python -m transformers.onnx --help
```
- `transformers` 라이브러리의 **ONNX 모듈을 커맨드라인 도구처럼 실행**하는 방식.
- 주요 옵션: **`--feature`**(어떤 기능/태스크로 내보낼지), **`--opset`**(ONNX 연산자 집합 버전, 이번 영상에서 깊이 다루지 않음), 소스 프레임워크는 **PyTorch가 기본값**(TensorFlow도 가능).
- **위치 인자(positional argument)로 output**을 지정해야 하며, 결과 ONNX 모델 파일 이름은 원하는 대로 지정 가능.

### 모델별 Config 클래스
```python
from transformers.models.roberta import RobertaConfig, RobertaOnnxConfig
```
- 각 모델(RoBERTa 등)마다 전용 **Config/OnnxConfig 클래스**가 있으며, 이를 통해 사용 가능한 feature(태스크) 옵션들을 확인할 수 있음.
- 추천 참고 자료: **"Hugging Face transformer serialization"** 공식 문서.

### ONNX Model Zoo 소개
- **`github.com/onnx/models`** — ONNX 진영이 관리하는 사전 변환된 모델 저장소("ONNX Zoo").
- 예시로 **RoBERTa**(base, sequence-classification 버전) 항목 확인: 의존성, 모델 설명, 다운로드 링크(Git LFS로 저장), **지원하는 ONNX 버전과 opset 버전**, 전처리/출력 방식에 대한 설명까지 제공.
- 이 Zoo의 RoBERTa 항목도 내부적으로 **Hugging Face transformers의 시퀀스 분류·토크나이저를 그대로 사용**하고 있음을 확인 — Hugging Face와 ONNX 생태계가 긴밀히 연결되어 있음을 보여줌.

## 예시
```yaml
# environment.yml (개념 구조)
name: huggingface-onnx
channels:
  - pytorch
  - conda-forge
dependencies:
  - python=3.8
  - pytorch
  - pip
  - pip:
      - transformers[onnx]
      - onnxruntime
      - jupyter
```

```bash
python -m transformers.onnx --help
python -m transformers.onnx --model=roberta-base --feature=sequence-classification onnx_output/
```

## 요약
- ONNX는 프레임워크에 무관하게 모델을 정규화된 포맷으로 내보내 다양한 아키텍처·클라우드 서비스에 배포할 수 있게 해주며, Hugging Face `transformers[onnx]`는 BART/BERT/GPT-2/RoBERTa/T5 같은 인기 모델에 대해 이미 준비된 ONNX 설정을 CLI(`python -m transformers.onnx`)로 손쉽게 활용할 수 있게 한다.
- **ONNX Model Zoo**(`github.com/onnx/models`)에서 이미 변환된 모델과 그 opset/버전 정보를 직접 확인할 수 있으며, 이 역시 내부적으로 Hugging Face 생태계와 연결되어 있다.
