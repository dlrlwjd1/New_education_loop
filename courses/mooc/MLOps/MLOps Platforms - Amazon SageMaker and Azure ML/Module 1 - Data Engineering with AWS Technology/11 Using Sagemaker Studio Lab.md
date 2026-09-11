# Using SageMaker Studio Lab

## 개요
- **Amazon SageMaker Studio Lab**의 UI와 GPU 환경을 직접 둘러보고, Hugging Face `transformers` 라이브러리를 설치해 감성 분석·제로샷 분류·텍스트 생성·마스킹까지 실습하는 7분 데모.

## 내용

### SageMaker Studio Lab 개요
- Jupyter Notebook Lab 기반의 **무료 머신러닝 프로토타이핑 환경**.
- **CPU**와 **GPU** 옵션 중 선택 가능 — GPU 옵션은 사전학습 모델(pre-trained model) 활용 등 최신 ML 워크플로에 특히 유용.
- **AWS Machine Learning University** 코스와 **Hugging Face 연동**을 제공 — "Open Hugging Face notebooks"를 선택하면 해당 프로젝트를 자신의 Studio Lab 환경으로 복사하라는 안내가 뜸.

### 인터페이스 기능
- **왼쪽 파일 시스템**: 튜토리얼에서 복사된 디렉토리·노트북들을 탐색 가능.
- **실행 중인 노트북/터미널 아이콘**: 현재 실행 중인 모든 노트북과 터미널을 확인.
- **Git 통합 유틸리티**: Git과 직접 연동 가능.
- Jupyter Notebook의 목차(table of contents) 확인, 실험적(experimental) 기능 활성화도 가능.

### 터미널 활용
- `conda env list` — 사용 가능한 모든 conda 환경 목록 확인, 필요시 새 환경 생성이나 전환 가능.
- `nvidia-smi -l 1` — 로컬 Nvidia 드라이버와 GPU 칩 상태를 실시간으로 모니터링. 드라이버 버전, CUDA 버전, GPU 사용률, GPU 종류(예: Tesla T4)까지 확인 가능 — 로컬에서 Hugging Face 전이학습(transfer learning) 등 GPU 작업을 할 때 유용.

### Hugging Face 노트북 실습
- 파일 시스템에서 Hugging Face 코스 노트북(영어, O'Reilly의 Hugging Face 도서에 대응하는 챕터 구성)으로 이동 → Chapter 1, Section 3 열람 — Transformer 개념을 큐레이션된 환경에서 직접 실험해볼 수 있음.
- `pip install datasets evaluate transformers`로 Hugging Face `transformers` 라이브러리 설치.
- **감성 분석**: 모델을 지정하지 않으면 기본 모델로 자동 대체(default)되어 파이프라인이 동작.
- **제로샷 분류(zero-shot classification)**: 후보 레이블(candidate label)을 지정하면 가장 상관관계가 높은 레이블을 선택 — 예: "이 코스는 transformers 라이브러리에 관한 것"이라는 문장에 대해 "education" 레이블을 가장 유력하게 선택.
- **텍스트 생성**: 예시로 "In this course, I will teach you to create effective WordPress admin files"처럼 문장을 이어서 생성.
- **마스킹(fill-mask)**: distilgpt2 등 다른 모델로 문장의 빈칸(mask)을 자동완성.

### AWS 통합
- 터미널에서 `aws s3` 같은 명령도 바로 실행 가능(자격 증명이 설정되어 있다면) — S3 명령어 등 다양한 작업을 `help` 메뉴로 확인 가능.
- 로컬 SageMaker Studio Lab에서 실험한 내용을 이후 AWS 계정으로 그대로 옮겨 배포하는 흐름으로 이어짐.

## 예시
```bash
# conda 환경 목록 확인
conda env list

# GPU 실시간 모니터링
nvidia-smi -l 1
```

```python
# transformers 라이브러리 설치 및 활용
!pip install datasets evaluate transformers

from transformers import pipeline

# 감성 분석 (모델 미지정 시 기본 모델 자동 사용)
classifier = pipeline("sentiment-analysis")
classifier("I love building AI apps on AWS")

# 제로샷 분류
zero_shot = pipeline("zero-shot-classification")
zero_shot("This is a course about the transformers library",
           candidate_labels=["education", "politics", "business"])

# 텍스트 생성
generator = pipeline("text-generation", model="distilgpt2")
generator("In this course, I will teach you to")

# 마스킹(fill-mask)
unmasker = pipeline("fill-mask")
unmasker("This course will teach you all about <mask> models.")
```

## 요약
- SageMaker Studio Lab은 무료 GPU 환경에서 Hugging Face `transformers` 파이프라인(감성 분석, 제로샷 분류, 텍스트 생성, 마스킹)을 즉시 실험해볼 수 있는 큐레이션된 노트북 환경이며, `nvidia-smi`로 GPU 상태를 모니터링하고 이후 AWS 계정으로 작업을 이어갈 수 있는 실험용 플랫폼이다.
