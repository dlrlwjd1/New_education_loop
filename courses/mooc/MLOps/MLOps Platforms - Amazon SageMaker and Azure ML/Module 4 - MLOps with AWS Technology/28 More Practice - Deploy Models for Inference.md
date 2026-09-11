# More Practice: Deploy Models for Inference

## 개요
- Amazon SageMaker의 모델 배포(추론)를 소개하고, 직전 데모에서 다룬 PyTorch + App Runner 리포지토리를 직접 실습해볼 수 있도록 안내하는 자료(오디오 요약 39초).

## 내용

### 소개
- Amazon SageMaker로 머신러닝 모델을 배포해 예측(추론, inference)을 수행할 수 있음.
- SageMaker는 다양한 ML 인프라와 모델 배포 옵션을 제공하는 완전관리형 서비스이며, MLOps 도구와 통합되어 모델 배포를 확장하고, 추론 비용을 줄이고, 프로덕션에서 모델을 더 효과적으로 관리하고, 운영 부담을 줄일 수 있게 해줌.
- 더 읽어보기: https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html

### 직접 해보기
- PyTorch 모델을 AWS App Runner에 배포: https://github.com/nogibjj/pytorch-fastapi-aws-apprunner (직전 "Running PyTorch with AWS App Runner" 데모에서 사용된 것과 동일한 리포지토리).

## 요약
- 이 자료는 "Running PyTorch with AWS App Runner" 데모의 실습판으로, SageMaker의 다양한 추론 배포 옵션을 소개하며 동일한 PyTorch+FastAPI+App Runner 리포지토리를 직접 실습해보도록 안내한다.
