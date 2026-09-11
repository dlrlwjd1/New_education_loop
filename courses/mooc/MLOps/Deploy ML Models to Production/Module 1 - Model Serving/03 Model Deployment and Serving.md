# Model Deployment and Serving

## 개요
- ML 모델 서빙을 위한 세 가지 대표 프레임워크(**TensorFlow Serving, TorchServe(PyTorch), BentoML**)의 핵심 역량을 비교하고, Kubernetes 기반 마이크로서비스 아키텍처로 배포되는 예시를 설명하는 4분 영상.

## 내용

### 세 가지 서빙 프레임워크
- **TensorFlow Serving**: 초당 수천 장의 이미지를 처리해야 하는 TensorFlow 기반 컴퓨터 비전 모델에 적합. TensorRT 최적화를 사용하면 **10밀리초 이하의 지연시간(sub-10ms latency)** 달성 가능.
- **TorchServe (PyTorch)**: A/B 테스트 기능이 필요한 PyTorch 기반 NLP 모델에 강점. Amazon SageMaker나 Kubernetes와 쉽게 통합해 자동 배포 가능.
- **BentoML**: 프레임워크에 구애받지 않는(framework-agnostic) 솔루션이 필요하고 견고한 MLOps 통합을 원하는 팀에 적합. BentoML 서빙을 구축·배포하는 방식이 일반적인 마이크로서비스 배포와 매우 유사해 많은 조직에서 널리 사용됨 — 예: scikit-learn 모델과 PyTorch 모델을 동일한 API 엔드포인트로 함께 서빙 가능.

### 프로덕션화에 필수적인 공통 특성
1. **목적(Purpose)**: 프로덕션 환경에서 ML 모델의 확장 가능한 배포를 지원 — 예: 수백만 사용자를 대상으로 하는 추천 시스템에서 요청 큐잉(queuing), 배칭(batching), 자원 할당을 자동으로 처리.
2. **유연성(Flexibility)**: 다양한 MLOps 프레임워크를 지원 — 예: BentoML은 scikit-learn 모델과 PyTorch 모델을 같은 API 엔드포인트로 서빙 가능.
3. **성능(Performance)**: 빠르고 낮은 지연시간의 예측에 최적화 — 예: TensorFlow Serving은 TensorRT 최적화로 10ms 이하 지연시간 달성.
4. **원활한 통합(Seamless Integration)**: DevOps/MLOps 도구와 매끄럽게 연결 — 예: TorchServe를 Amazon SageMaker나 Kubernetes와 통합해 자동화된 배포 구현.

### 프로덕션 운영에 중요한 고급 기능
- **커스터마이징(Customization)**: API를 통해 맞춤형 서빙 솔루션 구현 가능 — 예: TorchServe에서 추론 전 이미지 리사이징을 위한 커스텀 전처리 로직 구현.
- **성능 추적·분석**: Prometheus 통합을 통해 추론 시간, 처리량(throughput), 모델 정확도 드리프트 같은 지표 모니터링.
- **고처리량 요청 처리**: TensorFlow Serving은 로드 밸런싱과 레플리카 관리를 통해 초당 수백~수천 건의 요청에 자동으로 확장 가능.

### Kubernetes 기반 배포 예시 (약국 재고 예측 대시보드)
- 창고 운영자가 의존하는 **재고 예측 대시보드**는 Kubernetes 환경에 배포될 수 있음:
  - **프론트엔드 네임스페이스(front-end namespace)**: 대시보드 UI.
  - 예측이 필요할 때 프론트엔드 네임스페이스가 **ML 서빙 네임스페이스**(BentoML 등으로 배포된 ML 모델)로 API 호출.
  - 응답은 다시 프론트엔드 네임스페이스로 전달되어 대시보드에 렌더링.
- 이 아키텍처는 기존에 학습한 마이크로서비스/DevOps 아키텍처와 매우 유사 — **CI/CD 프로세스도 동일**하며, 유일한 차이는 일반 애플리케이션 대신 **ML 모델을 ML 서빙 애플리케이션에 배포**한다는 점.

### 다음 단계 예고
- 다음 영상부터 실제로 **BentoML을 이용한 ML 서빙 레이어 배포**를 실습.

## 예시
```text
[Kubernetes Cluster]
  ├── front-end namespace (재고 예측 대시보드 UI)
  │       │  API 호출
  │       ▼
  └── ML serving namespace (BentoML로 배포된 ML 모델, /predict)
          │
          ▼ 응답
  front-end namespace → 대시보드에 결과 렌더링
```

| 프레임워크 | 강점 | 대표 사용 사례 |
|---|---|---|
| TensorFlow Serving | 초저지연(sub-10ms), 고처리량 자동 확장 | 대규모 컴퓨터 비전 추론 |
| TorchServe | A/B 테스트, SageMaker/Kubernetes 통합 | PyTorch NLP 모델 |
| BentoML | 프레임워크 무관, 마이크로서비스와 유사한 배포 경험 | 여러 프레임워크 모델을 하나의 API로 서빙 |

## 요약
- TensorFlow Serving, TorchServe, BentoML은 각각 강점이 다르지만(초저지연 비전, PyTorch NLP A/B 테스트, 프레임워크 무관 유연성) 공통적으로 확장성·유연성·성능·통합성이라는 프로덕션 서빙의 핵심 요건을 충족하며, 이런 서빙 레이어는 Kubernetes의 프론트엔드/ML 서빙 네임스페이스 구조처럼 기존 마이크로서비스 배포·CI/CD 방식과 동일한 원리로 운영된다.
