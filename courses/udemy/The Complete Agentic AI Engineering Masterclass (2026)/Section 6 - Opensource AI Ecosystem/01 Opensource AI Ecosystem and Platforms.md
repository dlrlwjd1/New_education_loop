# Opensource AI Ecosystem & Platforms

## 개요
- 공개 모델, 라이브러리, 모델 저장소와 관리형 추론 서비스를 구분한다.

## 내용
### 생태계 구성
강의는 Meta Llama, Mistral AI, Hugging Face Transformers·Diffusers, Stability AI와 Google DeepMind를 주요 모델·라이브러리 제공자로 소개한다.

Hugging Face와 TensorFlow Hub는 모델·데이터·코드를 찾는 저장소 역할을 한다. Replicate, RunPod, Together AI, Fireworks AI 같은 서비스는 로컬에 모델을 올리지 않고 API로 추론할 수 있게 한다.

## 예시
```text
로컬 실험: 공개 모델 + Ollama/LM Studio
관리형 추론: 모델 호스팅 서비스의 API
모델 개발: Transformers/TensorFlow + 공개 데이터셋
```

## 요약
- 모델, 모델 허브, 추론 서비스는 서로 다른 계층이다.
- 데이터 통제, 비용과 하드웨어 요구에 맞춰 조합한다.
