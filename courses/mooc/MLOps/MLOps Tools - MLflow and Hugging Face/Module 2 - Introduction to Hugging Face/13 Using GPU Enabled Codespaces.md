# Using GPU Enabled Codespaces

## 개요
- Noah Gift가 Duke University 강의에서 실제로 사용하는 **`mlops-template` GitHub 조직 템플릿**을 소개하고, GPU가 활성화된 GitHub Codespaces로 Hugging Face의 **Whisper**(자동 음성 인식) 모델을 실행해 GPU 사용률을 실시간으로 관찰하는 8분 실습.

## 내용

### GPU Codespaces 템플릿 구조
- GitHub Codespaces는 **일시적(temporary) 환경**이지만 노트북보다 훨씬 강력한 컴퓨팅 파워를 제공하며, **사전 빌드된 컨테이너(prebuilt container)**로 매우 빠르게 시작 가능.
- Duke 조직의 **`mlops-template`**는 **"Public template"**로 설정된 리포지토리 — `.devcontainer`로 개발 환경을 커스터마이징:
  - Dockerfile에서 `ffmpeg`, `python3.8`, `gcc` 등 패키지 설치, Makefile로 추가 설치 진행.
  - **NVIDIA CUDA 드라이버**를 활성화해 이후 GPU 기능 사용 가능하게 구성.

### Codespaces 인스턴스 생성 — GPU 머신 선택
- "Code" → 새 Codespace 생성 시 머신 타입 선택 — **16코어(CPU 작업용)**부터 **6코어 + GPU 1개 + RAM 112GB + 스토리지 128GB**까지 다양한 옵션.
- 대학 강의 환경에서 **사전학습 모델로 추론·학습·파인튜닝**을 하려면 **GPU 1개 포함 머신을 권장**한다고 강조.
- 이 템플릿으로 실제로 만든 리포지토리가 **`hugging-face-tutorials`** — 이번 코스에서 다룰 실습의 기반.

### 환경 구성 확인
- 가상환경이 미리 설정되어 있어 별도 설치 없이 바로 사용 가능 — `requirements.txt`에 **FastAPI, Jupyter, transformers, datasets, tokenizers, rouge-score**(정확도 메트릭) 등이 핀(고정 버전)으로 명시됨.
- **`utils` 디렉터리**에 GPU 동작 여부를 확인하는 **`verify_pytorch`** 스크립트 포함:
  ```bash
  python -m utils.verify_pytorch   # CUDA 사용 가능 여부 확인
  ```

### Whisper로 음성 인식 실행하며 GPU 모니터링
- **Whisper**(OpenAI의 오픈소스 자동 음성 인식 시스템, 인코더-디코더 아키텍처, 언어 간 전사·번역 가능)를 Hugging Face를 통해서도 사용 가능(`whisper-large` 등).
- `utils` 디렉터리에 미리 준비된 짧은 오디오 파일(연설 내레이션)을 Whisper로 전사(transcribe).
- 별도 터미널에서 **`nvidia-smi -l 1`**로 GPU 사용률을 실시간 모니터링하며 Whisper 실행:
  - 대형 언어 모델을 로딩하는 초반에는 시간이 걸리지만, 이후 **GPU 사용률이 스파이크하며 오르내리는 것을 실시간으로 확인** — 오디오를 텍스트로 변환하는 각 단계가 GPU 부하와 정확히 대응됨.
  - 전사가 끝나면 GPU 사용률이 다시 0으로 떨어짐.

## 예시
```bash
# GPU 동작 확인
python -m utils.verify_pytorch

# GPU 모니터링과 함께 Whisper 실행
nvidia-smi -l 1   # 별도 터미널에서 실시간 모니터링
python -m utils.whisper_transcribe audio_file.wav
```

## 요약
- GitHub Codespaces의 GPU 옵션(6코어+GPU 1개+RAM 112GB)과 `.devcontainer` 기반 사전 빌드 템플릿을 활용하면, 별도 설치 과정 없이 즉시 Hugging Face 생태계(transformers/datasets/Whisper)로 GPU 가속 추론을 실행할 수 있다.
- `nvidia-smi -l 1`로 실시간 GPU 사용률을 관찰하면서 Whisper 같은 대형 모델의 추론 과정이 실제로 GPU를 어떻게 활용하는지 시각적으로 확인할 수 있다는 것이 이 실습의 핵심 가치.
