# Understanding 3rd Party Packaging (외부 읽기 자료)

## 개요
- GPU 가속을 활용하는 ML/DL 프로젝트를 위한 템플릿을 소개하는 보충 읽기 자료. virtualenv/pip 같은 이번 레슨 도구가 Docker, PyTorch, TensorFlow, BentoML, Hugging Face 같은 실전 MLOps 도구와 어떻게 연결되는지 미리 보여준다.

## 내용

**요약**: 이 템플릿은 virtualenv, pip, Docker, PyTorch, TensorFlow 같은 주류 Python 도구를 활용해 GPU 접근이 가능한 개발 환경을 구성하고, 의존성을 격리하며, GPU 학습을 테스트하는 ML/DL 프로젝트의 출발점을 제공한다.

**핵심 포인트 4가지**
- virtualenv가 활성화되어 있는지 확인해서 패키지를 별도로 관리한다.
- GPU 컨테이너 이미지를 빌드하는 Dockerfile이 포함되어 있다.
- PyTorch/TensorFlow 테스트로 GPU가 제대로 동작하는지 검증한다.
- BentoML, Hugging Face 같은 도구와 자연스럽게 연동된다.

**생각해볼 질문(Reflection Questions)**
- Makefile이 모델 실험 학습 과정을 어떻게 간소화할 수 있을까?
- 왜 Python 의존성을 virtualenv와 컨테이너로 격리해야 할까?
- GitHub Actions는 ML ops 파이프라인에서 어떤 역할을 할까?
- BentoML은 저지연(low-latency) 요청에 모델을 어떻게 서빙할 수 있을까?
- 처음부터 학습하는 대신 Hugging Face 모델을 파인튜닝하는 게 나은 경우는 언제일까?

**도전 과제(참고용 — 직접 풀어볼 것)**
- PyTorch GPU 테스트 코드의 하이퍼파라미터 조정해보기
- 모델 학습 중 `nvidia-smi`로 GPU 사용량 로깅하기
- TensorFlow 코드를 실행하는 Docker 컨테이너 빌드하기
- BentoML로 scikit-learn 모델을 로컬에서 서빙하기
- 작은 텍스트 코퍼스로 DistilBERT 모델 파인튜닝하기

## 요약
- 이번 레슨의 virtualenv/pip이 실제로는 Docker·GPU 학습·모델 서빙 같은 MLOps 실전 워크플로의 기초가 된다는 것을 미리 보여주는 자료.
- 도전 과제는 이후 모듈(Testing, Pandas/NumPy, Applied Python for MLOps)에서 다룰 도구들과 이어지는 예고 성격.
