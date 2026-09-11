# External Lab: GPU Powered MLOps Template (외부 읽기 자료)

## 개요
- GPU 컴퓨팅을 활용한 머신러닝 워크로드 설정을 다루는 외부 템플릿 기반 실습 안내. Module 2의 "Understanding 3rd Party Packaging"에서 예고됐던 GPU 템플릿과 동일 계열의 자료.

## 내용

**랩 목표**: 이 템플릿을 이용해 GPU 컴퓨팅을 설정하고 머신러닝 워크로드에 활용하기.

**설명**: GPU는 모델 학습과 배포 속도를 크게 높여준다. GPU 지원 환경을 활용해 더 빠르게 모델을 학습시키고 저지연(low-latency) 추론용으로 배포하는 것이 목표.

**랩 단계**
1. 환경에서 GPU 접근 가능 여부 확인 — `nvidia-smi`로 GPU 확인, `lspci`로 GPU 장치 검증
2. GPU 지원 PyTorch/TensorFlow 설치·임포트
   - `pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
   - `import torch; print(torch.cuda.is_available())`
3. GPU를 활용한 신경망 모델 학습 — PyTorch CNN(이미지 분류), TensorFlow 추천 모델
4. Docker로 모델을 컨테이너화하며 GPU 장치 노출 — `docker run --gpus all`, 컨테이너 내부에서 GPU 검증
5. 실시간 추론으로 모델 배포, GPU vs CPU 벤치마크(지연시간 측정·비교)

**생각해볼 질문**
- GPU가 모델 개발 워크플로를 어떻게 개선할 수 있을까?
- 하드웨어 가속기를 활용하려 할 때 겪을 수 있는 어려움은?
- 워크로드를 GPU vs CPU 중 어디서 돌릴지 어떻게 판단할까?
- GPU 지원 컨테이너화 시 중요한 고려사항은?
- GPU 컴퓨팅이 늘어날수록 병목(bottleneck)이 어디로 옮겨가는가?

**도전 과제(참고용 — 직접 풀어볼 것)**
- 이미지 분류 모델을 GPU 유/무로 각각 학습시켜 성능 비교
- GPU passthrough가 되는 TensorFlow Serving Docker 컨테이너 빌드
- A100/V100/K80 등 GPU 종류를 조사하고 모델 벤치마크
- PyTorch에서 혼합 정밀도(mixed precision)로 GPU 모델 추가 최적화
- 여러 모델이 GPU를 동시에 공유하는 방식 탐구

## 요약
- 실제 실습은 외부 템플릿(GitHub)에서 직접 진행. 이 노트에는 랩의 목적과 단계만 기록.
