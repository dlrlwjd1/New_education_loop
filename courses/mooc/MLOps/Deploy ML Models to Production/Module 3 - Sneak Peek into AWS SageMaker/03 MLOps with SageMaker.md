# MLOps with SageMaker

## 개요
- IoT 데이터를 활용한 예측 모델 구축을 예시로, 앞서 소개한 SageMaker 핵심 구성 요소들이 실제 MLOps 생애주기에서 어떻게 연결되어 동작하는지 보여주는 2분 영상. Module 3의 마무리.

## 내용

### 실제 예시: AWS IoT 기반 예측 모델
- AWS 계정 안에 **AWS IoT 디바이스**가 있고, 이 디바이스가 IoT 정보를 전송 → 이 데이터 위에 예측 모델을 구축해야 하는 상황을 가정.

### 데이터 흐름
1. IoT 디바이스의 데이터가 **S3 버킷**에 도착.
2. **AWS SageMaker Pipeline**이 S3의 데이터를 가져와 사용 사례에 맞는 **변환(transformation)**을 수행한 뒤 다른 S3 버킷에 저장.
3. 이 처리된(processed) 데이터가 **학습(training)**에 사용되어 ML 모델을 구축 → 최종 모델 아티팩트가 버킷에 저장됨.

### 데이터 과학자의 작업
- 데이터 과학자는 **Amazon SageMaker Studio Lab**을 사용해 여러 개의 노트북을 실행하고, SageMaker Pipeline의 출력 데이터에 연결.
- 이 환경에서 ML 모델을 작성, 시각화, 테스트 가능.

### 배포와 외부 접근
- 모델 아티팩트가 버킷에 저장되면, **SageMaker 실시간 서빙(real-time serving)** 또는 **SageMaker 배치 서빙(batch serving)**으로 배포 가능.
- 외부 사용자는 **Amazon API Gateway**를 통해 이 ML 모델의 출력에 연결해 사용 가능.

### 결론
- 이는 AWS SageMaker의 힘을 보여주는 매우 단순한 예시 — 조직이 이미 인프라 구축과 서비스 배포에 AWS/Amazon 클라우드를 사용하고 있다면, 머신러닝 생애주기 도구로 AWS SageMaker를 계속 사용하는 것은 매우 자연스러운(no brainer) 선택.

## 예시
```text
[IoT 예측 모델 파이프라인 — SageMaker 전체 흐름]

AWS IoT 디바이스 → 원본 데이터 → S3 버킷(raw)
        │
        ▼
SageMaker Pipeline (변환·전처리)
        │
        ▼
S3 버킷(processed) → SageMaker Training → 모델 아티팩트 → S3 버킷(model)
        │                                        │
        ▼                                        ▼
SageMaker Studio Lab                    SageMaker 실시간/배치 서빙
(데이터 과학자: 노트북으로 탐색·학습·시각화)         │
                                                  ▼
                                        Amazon API Gateway
                                                  │
                                                  ▼
                                            외부 사용자
```

## 요약
- IoT 디바이스에서 발생한 데이터가 S3에 적재되고, SageMaker Pipeline이 이를 변환·전처리해 SageMaker Training으로 모델을 학습시키며, 데이터 과학자는 Studio Lab에서 이 과정을 탐색·개발하고, 최종 모델은 실시간/배치 서빙과 API Gateway를 통해 외부에 노출되는 이 흐름은 이미 AWS 인프라를 사용 중인 조직에게 SageMaker가 자연스러운 MLOps 생애주기 도구임을 보여준다.
