# Practical Scenario — Creating a Repository via CLI

## 개요
- AI가 생성한 실전 시나리오형 성찰 활동(real-world application, ungraded). 새로 학습한 모델을 업로드하기 위해 CLI로 리포지토리를 생성하는 명령을 떠올려보는 연습.

## 내용

### 시나리오
- 새 모델 학습을 마치고 Hugging Face Hub에 업로드하려는 상황. `my-awesome-model`이라는 이름의 새 리포지토리를 만들어야 함.
- **질문**: Hugging Face CLI로 이 리포지토리를 생성하는 명령은?

### 정리
- 앞서 "Using Hugging Face Repositories" 레슨에서 다룬 명령을 그대로 적용:
  ```bash
  huggingface-cli repo create my-awesome-model --type model
  ```
  - `--type model`을 지정해 모델 리포지토리로 생성(데이터셋이면 `--type dataset`, Space면 `--type space`).

## 요약
- `huggingface-cli repo create <name> --type model`이 새 모델 리포지토리를 생성하는 정확한 명령이며, 이는 앞선 실습("Using Hugging Face Repositories")에서 `demo-onnx` 리포지토리를 만들 때 사용한 것과 동일한 패턴이다.
