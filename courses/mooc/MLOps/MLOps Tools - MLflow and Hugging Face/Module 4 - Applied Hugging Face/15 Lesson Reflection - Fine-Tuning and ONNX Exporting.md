# Lesson Reflection — Fine-Tuning and ONNX Exporting

## 개요
- Lesson 2 전체를 요약하는 공식 회고 자료: 커스텀 데이터로 Hugging Face 모델을 파인튜닝하고, 크로스 플랫폼 배포를 위해 ONNX 포맷으로 내보내는 법을 다뤘다.

## 내용

### 회고 질문
- 어떤 사용 사례에서 파인튜닝이 적합한가?
- ONNX로 모델을 내보내는 것은 어떤 이점을 제공하는가?
- 내보낸 ONNX 모델을 추가로 어떻게 최적화할 수 있는가?

### 도전 과제
1. 조직의 독점(proprietary) 데이터로 작은 모델을 파인튜닝해보기.
2. 모델을 ONNX 포맷으로 변환하고 예측을 테스트해보기.
3. 크기를 줄이기 위해 내보낸 ONNX 모델을 양자화(quantize)해보기.

## 요약
- Lesson 2는 전이학습 이론(Introduction to Fine-Tuning Theory) → CPU vs GPU 파인튜닝 비교(Performing Fine-Tuning) → ONNX 개념과 환경 설정(Introduction to ONNX) → 실제 DistilBERT 변환(Exporting Hugging Face Models to ONNX)까지 다뤘다.
- 다음 레슨("Beyond Hugging Face Spaces")에서는 Spaces 배포와 함께, GenAI를 둘러싼 경제학·윤리·규제 이슈로 코스를 마무리한다.
