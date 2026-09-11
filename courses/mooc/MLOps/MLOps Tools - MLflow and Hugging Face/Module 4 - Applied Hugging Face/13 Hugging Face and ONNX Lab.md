# Hugging Face and ONNX Lab

## 개요
- GitHub Codespaces에서 인기 모델을 ONNX 포맷으로 변환해보는 실습(ungraded lab). 앞선 두 영상(Introduction to ONNX and Hugging Face, Exporting Hugging Face Models to ONNX)의 내용을 직접 재현·확장한다.

## 내용

### 사전 준비
- 모든 의존성이 준비된 **GitHub 리포지토리 + Codespaces**를 사용(Jupyter Notebook 예제 포함) — 원한다면 리포지토리를 클론해 직접 환경을 구성해도 됨.
- Codespaces가 처음이라면 별도의 가이드 영상 시리즈 참고 권장.

### 실습 과제
1. **다른 모델**을 골라 Hugging Face에서 ONNX로 변환해보기.
2. 다른 모델에 대해 **특정 feature**(태스크)를 지정해 변환 시도해보기.
3. 결과로 나온 **ONNX 모델을 ONNX Runtime으로 불러와 실제로 사용**해보기.

## 요약
- 이번 랩은 "모델 선택 → feature 지정 → `transformers.onnx` CLI로 변환 → ONNX Runtime으로 로드해 추론"이라는 전체 ONNX 워크플로를 직접 다른 모델로 재현해보는 확장 실습이다.
