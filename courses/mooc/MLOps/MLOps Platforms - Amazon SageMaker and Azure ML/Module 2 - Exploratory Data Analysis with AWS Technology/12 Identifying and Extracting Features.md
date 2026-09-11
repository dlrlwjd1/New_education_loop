# Identifying and Extracting Features

## 개요
- 머신러닝 시스템을 구축할 때 흔히 사용하는 3가지 공개 데이터셋 소스(Hugging Face, Amazon S3의 공개 데이터셋, Kaggle)를 소개하는 1분 영상.

## 내용

### Hugging Face 데이터셋
- 매우 인기 있는 공개 데이터셋 소스 — 모델 파인튜닝에 사용.
- 흐름: Hugging Face에서 사전학습 모델을 가져옴 → GPU가 활성화된 환경(GitHub Codespaces나 GPU 지원 Amazon SageMaker 환경)에서 Hugging Face 데이터셋으로 새 데이터 기반 파인튜닝 → 새 모델 생성 → 프로덕션에 배포하거나 다시 Hugging Face에 등록.

### Amazon S3의 공개 데이터셋
- 대형 공개 데이터셋을 S3에서 가져오는 것도 흔한 시나리오.
- 흐름: S3 데이터셋을 Jupyter Notebook으로 가져옴 → 탐색적 데이터 분석(EDA) 수행 → 무엇을 만들지 파악 → 해당 S3 데이터셋 기반 모델 생성.

### Kaggle
- 또 다른 대표적인 공개 데이터셋 소스 — 이미 피처 엔지니어링이 많이 더해진 경우가 많아, 이를 기반으로 자신만의 커스텀 모델을 만들 수 있음.

### 핵심 통찰
- 이 세 가지(Hugging Face, S3, Kaggle)는 취미로 하든 프로덕션 ML 엔지니어로서 하든, 모델을 구축하거나 추가 실험으로 이어지는 데 유용한 공개 데이터셋의 대표적인 예시.

## 요약
- Hugging Face(파인튜닝용 사전학습 모델+데이터셋), Amazon S3(대형 공개 데이터셋+EDA), Kaggle(피처 엔지니어링이 더해진 데이터셋)은 머신러닝 모델을 구축하는 데 흔히 활용되는 3대 공개 데이터 소스다.
