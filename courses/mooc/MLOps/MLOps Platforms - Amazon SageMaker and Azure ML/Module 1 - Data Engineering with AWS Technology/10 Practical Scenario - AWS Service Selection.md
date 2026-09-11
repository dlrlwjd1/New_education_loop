# Practical Scenario — AWS Service Selection

## 개요
- CloudShell, Comprehend, Cloud9 등 앞서 다룬 AWS 도구 지식을 적용해보는 5분짜리 AI 생성 인터랙티브 성찰 활동(Real-world application).

## 내용

### 시나리오
- 데이터 과학자로서 제품 리뷰에서 고객 피드백을 분석하는 프로젝트를 진행 중 — 모든 리뷰를 직접 읽지 않고도 전반적인 감성(긍정/부정/중립)을 빠르게 파악하고자 함.
- 질문: 이 작업에 가장 적합한 AWS 서비스는 무엇이며, 앞서 배운 다른 서비스들보다 그것을 선택하는 이유는?

### 종합 답변 (강의 개념 기반)
- 가장 적합한 서비스는 **Amazon Comprehend**다. Comprehend는 감성 분석(sentiment analysis), 개체명 인식(entity recognition), 토픽 모델링 등을 지원하는 완전관리형 NLP 서비스로, `detect_sentiment` API 호출 한 번으로 텍스트의 감성(POSITIVE/NEGATIVE/NEUTRAL/MIXED)을 즉시 반환한다.
- **CloudShell**이나 **Cloud9**과 비교하면: 이 두 도구는 각각 브라우저 기반 셸과 IDE로, 코드를 작성·실행하는 **개발 환경**일 뿐 NLP 분석 능력 자체를 제공하지 않는다. 즉 Comprehend API를 호출하는 코드를 CloudShell이나 Cloud9에서 작성·실행할 수는 있지만, 감성 분석이라는 과제 자체를 해결하는 것은 Comprehend다.
- 결론적으로 대량의 텍스트 리뷰에서 감성을 자동으로 추출하려면, 모델을 직접 학습시킬 필요 없이 API 호출만으로 사용 가능한 Comprehend가 가장 효율적이고 적합한 선택이다.

## 요약
- 이 활동은 "개발 환경 도구(CloudShell/Cloud9)"와 "완전관리형 ML 서비스(Comprehend)"의 역할 차이를 명확히 구분하는 연습이며, 텍스트 감성 분석처럼 특정 ML 과제에는 목적에 맞는 완전관리형 서비스를 선택하는 것이 핵심이라는 점을 강조한다.
