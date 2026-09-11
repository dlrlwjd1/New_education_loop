# External Lab: MLOps Template GitHub

## 개요
- GitHub 템플릿을 활용해 GPU 컴퓨팅 환경을 설정하고, GPU와 CPU의 모델 학습·추론 성능을 비교하는 외부 실습 자료(오디오 요약 1분 48초).

## 내용

### 랩 목표
- 이 템플릿을 사용해 머신러닝 워크로드를 위한 GPU 컴퓨팅을 설정하고 활용하기.

### 랩 설명
- GPU는 모델 학습과 배포 속도를 크게 높일 수 있음. 이 랩에서는 GPU 지원 환경을 활용해 모델을 더 빠르게 학습시키고 저지연(low-latency) 추론을 위해 배포.

### 랩 단계
1. 환경에서 GPU 접근 확인 — `nvidia-smi` 실행, `lspci` 등으로 GPU 장치 검증.
2. GPU를 지원하는 PyTorch와 TensorFlow 설치·임포트.
   - `pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
   - `import torch; print(torch.cuda.is_available())`
3. GPU를 활용해 신경망 모델 학습 — PyTorch CNN(이미지 분류), TensorFlow 추천 모델.
4. GPU 장치를 노출하며 Docker로 모델 컨테이너화 — `docker run --gpus all`, 컨테이너 내부에서 GPU 검증.
5. 실시간 추론으로 모델 배포.
6. GPU vs CPU 벤치마크 — 지연시간(latency) 측정·비교.

### 성찰 질문
1. GPU가 모델 개발 워크플로를 어떻게 개선할 수 있는가?
2. 하드웨어 가속기를 활용하려 할 때 어떤 어려움을 겪었는가?
3. 워크로드가 GPU에서 실행되어야 할지 CPU에서 실행되어야 할지 어떻게 판단하겠는가?
4. GPU를 지원하는 모델을 컨테이너화할 때 중요한 고려사항은 무엇인가?
5. GPU 컴퓨팅이 더 많이 도입될수록 병목 지점이 어디로 이동하는 것을 보았는가?

### 도전 과제
1. GPU 유무에 따라 이미지 분류 모델을 학습시켜 성능을 비교해보기.
2. GPU 패스스루(pass-through)를 지원하는 TensorFlow Serving Docker 컨테이너를 만들어보기.
3. A100, V100, K80 같은 다양한 GPU 유형을 조사하고 모델을 벤치마킹해보기.
4. PyTorch로 혼합 정밀도(mixed precision)를 구현해 GPU 모델을 추가로 최적화해보기.
5. 여러 모델이 하드웨어 동시성을 공유할 수 있게 하는 GPU 공유 방식을 탐구해보기.

## 요약
- 이 외부 랩은 GPU 환경 검증부터 PyTorch/TensorFlow GPU 학습, Docker GPU 컨테이너화, 실시간 추론 배포, GPU vs CPU 벤치마킹까지, 머신러닝 워크로드에서 GPU 컴퓨팅을 실전 활용하는 전체 흐름을 다룬다.
