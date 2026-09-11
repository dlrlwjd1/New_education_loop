# More Practice: Deploy a Hugging Face Pre-trained Model to Amazon SageMaker

## 개요
- SageMaker Studio Lab의 세션 제한을 소개한 뒤, Hugging Face 사전학습 모델을 Amazon SageMaker Serverless 엔드포인트로 배포하는 실습 노트북을 안내하는 자료(오디오 요약 54초).

## 내용

### 소개
- SageMaker Studio Lab은 실험용 프로젝트를 개발할 수 있는 무료 환경을 제공하며, ML 학습자가 첫 ML 레슨을 시작하기에 적합. **CPU 세션은 연속 12시간**, **GPU 세션은 연속 4시간** 사용 가능.
- 모델을 로컬에서 실행하는 대신 **공개적으로 사용 가능(publicly available)**하게 만들고 싶은 더 큰 규모의 프로젝트를 생각하고 있다면? 옵션은 **Amazon SageMaker 엔드포인트에 배포**하는 것.
- 이 튜토리얼은 Hugging Face 사전학습 모델을 **Amazon SageMaker Serverless**에 배포하는 방법을 보여줌.

### 직접 해보기
- 실습 노트북: https://studiolab.sagemaker.aws/import/github/aws/studio-lab-examples/blob/main/connect-to-aws/Access_AWS_from_Studio_Lab_Deployment.ipynb

## 요약
- 이 자료는 SageMaker Studio Lab(무료, 세션 시간 제한 있음)에서 실험한 Hugging Face 모델을 SageMaker Serverless 엔드포인트로 배포해 공개적으로 서빙하는 실전 흐름을 다룬다.
