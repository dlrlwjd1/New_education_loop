# Core Components of SageMaker

## 개요
- AWS SageMaker의 **10가지 핵심 구성 요소**(Studio, Notebooks, Training, Inference, Ground Truth, Autopilot, Model Monitor, Pipelines, Feature Store, Canvas)를 ML 생애주기 단계별로 소개하는 5분 영상.

## 내용

1. **SageMaker Studio**: ML 프로젝트의 **명령 센터(command center)** 역할을 하는 엔드투엔드 IDE — 데이터 준비, 모델 학습, 개발 도구를 하나의 인터페이스로 통합한 중앙 허브. 직관적이고 확장 가능한 환경으로 ML 생애주기 모든 단계를 지원해 생산성 향상.
2. **SageMaker Notebooks**: 클라우드 호스팅 Jupyter 노트북으로 대화형 개발을 한 단계 끌어올림 — 데이터 탐색, 피처 엔지니어링, 모델 구축을 위한 원활한 협업 지원. 다른 SageMaker 서비스와 쉽게 통합해 최적화된 ML 워크플로 구현.
3. **SageMaker Training**: 모델 학습은 자원 집약적일 수 있지만, SageMaker Training이 이를 최적화 — 여러 컴퓨팅 자원에 걸친 **분산 학습(distributed training)**을 지원해 시간과 비용을 크게 절감. 다양한 ML 알고리즘과 프레임워크를 지원해 여러 사용 사례에 유연하게 대응.
4. **SageMaker Inference**: 학습과 프로덕션 사이의 간극을 메우는 **실시간·배치 예측** 서비스 — 실시간 추론을 위한 확장 가능한 엔드포인트와 배치 처리를 제공해 배포를 단순화하고, 대규모로 빠르고 효율적인 모델 접근을 보장.
5. **SageMaker Ground Truth**: 성공적인 ML 모델의 핵심인 정확한 **데이터 라벨링**을 제공 — 사람의 지능과 머신 보조 라벨링을 결합해 고품질 데이터 준비에 드는 비용과 시간을 크게 절감. 데이터셋을 시간이 지남에 따라 개선하는 반복적 라벨링 프로세스 지원.
6. **SageMaker Autopilot**: 데이터에 맞춰 ML 모델을 자동으로 학습·구축·튜닝 — 모델을 구축·학습하는 과정 전체에 대한 가시성을 제공하며 엔드투엔드 ML 프로세스를 자동화. 필요시 추가적인 커스터마이징·최적화가 가능한 유연성도 유지.
7. **SageMaker Model Monitor**: 배포된 모델을 지속적으로 관찰해 **데이터 드리프트**나 성능 저하를 탐지 — 프로덕션 데이터가 학습 데이터셋에서 벗어날 때 알림을 생성해 일관된 모델 신뢰성을 보장.
8. **SageMaker Pipelines**: 엔드투엔드 ML 워크플로를 자동화·관리하는 **CI/CD 프레임워크** — 데이터 준비, 학습, 배포를 위한 모듈식 단계로 원활한 협업과 효율성을 보장.
9. **SageMaker Feature Store**: 여러 ML 모델에 걸쳐 피처를 저장·공유·재사용하는 것을 단순화하는 **중앙화된 저장소** — 통합된 피처 세트를 유지해 학습과 추론 사이의 일관성을 보장.
10. **SageMaker Canvas**: 비즈니스 분석가가 프로그래밍 능력 없이도 직관적인 시각화 인터페이스로 예측 모델을 만들 수 있게 함 — 비기술 사용자도 머신러닝을 활용한 인사이트 도출이 가능하도록 지원.

### 종합
- 이 10가지 핵심 구성 요소를 통해 AWS SageMaker는 어떤 조직이든 ML 모델을 구축하는 데 효과적인 도구가 됨 — 데이터 과학자가 데이터 탐색을 시작하는 순간부터 모델 배포, 재학습까지 이어지는 **엔드투엔드 인프라 서비스**를 제공.

## 예시
```text
[SageMaker 10대 핵심 구성 요소 — ML 생애주기 매핑]
탐색/개발    : Studio (통합 IDE), Notebooks (클라우드 Jupyter)
데이터 준비  : Ground Truth (라벨링), Feature Store (피처 중앙 저장소)
모델 구축    : Autopilot (자동 학습·튜닝), Training (분산 학습)
배포/서빙    : Inference (실시간·배치 예측)
운영/모니터링: Model Monitor (드리프트 탐지), Pipelines (CI/CD)
비기술 사용자: Canvas (노코드 시각화 모델링)
```

## 요약
- AWS SageMaker는 Studio(통합 개발환경), Notebooks(클라우드 협업), Training(분산 학습), Inference(실시간·배치 서빙), Ground Truth(데이터 라벨링), Autopilot(자동 모델링), Model Monitor(드리프트 탐지), Pipelines(CI/CD), Feature Store(피처 중앙화), Canvas(노코드 시각화)라는 10가지 핵심 구성 요소를 통해 데이터 탐색부터 모델 배포·재학습까지 ML 생애주기 전체를 지원하는 엔드투엔드 인프라를 제공한다.
