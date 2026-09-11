# Lesson Reflection — Recommending and Implementing Appropriate Machine Learning Services

## 개요
- Lesson 2 전체를 요약하는 공식 회고 자료: EC2와 Auto Scaling을 포함한 AWS 컴퓨트 리소스 프로비저닝 옵션과, 모델 구축용 SageMaker·컴퓨터 비전용 Rekognition 같은 머신러닝 서비스를 소개했다.

## 내용

### 핵심 포인트
- EC2는 설정 가능한 가상 머신 인스턴스 실행을 가능하게 한다.
- Auto Scaling은 EC2 용량을 자동으로 추가·제거해 가용성을 유지한다.
- SageMaker는 대규모로 ML 모델을 구축·학습·배포하는 것을 단순화한다.
- Rekognition은 사전 구축된 이미지·영상 분석 모델을 제공한다.
- 이런 서비스들은 커스텀 ML 모델을 처음부터 만들 필요성을 줄여준다.

### 회고 질문
1. EC2와 서버리스 플랫폼 중 언제 무엇을 추천하겠는가?
2. Auto Scaling이 애플리케이션 회복탄력성을 어떻게 개선할 수 있는가?
3. SageMaker가 로컬에서 모델을 학습시키는 것보다 어떤 이점을 제공하는가?
4. Rekognition이 잘 맞는 사용 사례 유형은 무엇인가?
5. 사전 구축된 서비스가 머신러닝 애플리케이션 개발을 어떻게 가속화할 수 있는가?

### 도전 과제
1. Python boto3 SDK로 EC2 인스턴스를 실행해보기.
2. CPU 사용률에 따라 확장되는 Auto Scaling 그룹을 구성해보기.
3. SageMaker에서 이미지 분류 모델을 학습해보기.
4. Rekognition으로 업로드한 이미지에서 객체를 탐지해보기.
5. Comprehend와 커스텀 모델의 지연시간·비용을 비교해보기.

## 요약
- Lesson 2는 컴퓨트 선택(가상 머신 vs 서버리스) → EC2/EBS 프로비저닝 → AWS AI/ML 서비스(Comprehend, Rekognition) → Hugging Face 모델의 SageMaker 배포까지, 적절한 ML 인프라·서비스를 추천·구현하는 방법을 다뤘다.
