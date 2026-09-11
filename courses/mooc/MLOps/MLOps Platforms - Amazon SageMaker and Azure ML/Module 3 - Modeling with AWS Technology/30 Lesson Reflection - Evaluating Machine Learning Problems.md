# Lesson Reflection — Evaluating Machine Learning Problems

## 개요
- Lesson 3 전체를 요약하는 공식 회고 자료: 이미지·영상 분석을 위한 컴퓨터 비전 개념과 서비스, Amazon Rekognition, SageMaker Ground Truth를 활용한 커스텀 데이터셋 레이블링을 다뤘다.

## 내용

### 핵심 포인트
- 컴퓨터 비전은 시각적 정보를 추출한다.
- Rekognition은 객체, 장면, 얼굴을 탐지한다.
- 커스텀 모델은 레이블이 있는 데이터가 필요하다.
- Ground Truth는 이미지 레이블링을 돕는다.
- 모델은 정밀도/재현율로 평가한다.
- 과적합과 과소적합을 이해한다.

### 회고 질문
1. 얼굴 분석과 인식을 활용할 때 어떤 윤리적 고려사항이 발생하는가?
2. 컴퓨터 비전 기법이 비즈니스 워크플로 개선에 어떻게 적용될 수 있는가?
3. 자신의 도메인에 맞춘 커스텀 레이블 데이터셋을 만드는 데 투자해야 하는 이유는 무엇인가?
4. 대규모 이미지·영상 데이터를 다루면서 어떤 어려움을 경험했는가?
5. 컴퓨터 비전이 의사결정을 완전히 자동화하기보다 인간의 능력을 어떻게 보강할 수 있는가?

### 도전 과제
1. Rekognition Custom Labels로 다중 클래스 이미지 분류기를 만들어보기.
2. 품질 관리를 위해 Ground Truth로 제품 결함 데이터셋에 레이블을 붙여보기.
3. 자신의 도메인에서 기본 제공 모델과 커스텀 모델의 성능을 비교해보기.
4. Rekognition으로 유명인 이미지의 얼굴 속성·감정·인구통계를 분석해보기.
5. Rekognition과 Kinesis Video Streams로 실시간 영상 분석 파이프라인을 프로토타이핑해보기.

## 요약
- Lesson 3는 컴퓨터 비전(Rekognition, Ground Truth) → 언더피팅/오버피팅 → 평가 지표(AUC, RMSE, R²) → 실험 추적 → 선형 회귀/이미지 분류 실습까지 다뤘으며, 이것으로 Module 3(Modeling with AWS Technology)이 마무리된다.
