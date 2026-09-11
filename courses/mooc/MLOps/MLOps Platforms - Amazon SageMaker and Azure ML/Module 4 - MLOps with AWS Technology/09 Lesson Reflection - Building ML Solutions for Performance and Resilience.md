# Lesson Reflection — Building Machine Learning Solutions for Performance, Availability, Scalability, Resilience and Fault

## 개요
- Lesson 1 전체를 요약하는 공식 회고 자료: AWS에서 신뢰할 수 있는 ML 시스템을 아키텍처링하는 방법을 다뤘다. 리전·존에 걸친 분산 아키텍처, Infrastructure as Code, 컨테이너화, 모니터링을 다뤘다.

## 내용

### 핵심 포인트
- 다중 리전 아키텍처는 장애 허용성(fault tolerance)을 개선한다.
- Infrastructure as Code는 재현 가능한 배포를 가능하게 한다.
- 컨테이너화는 공유와 확장을 단순화한다.
- 모니터링과 로깅은 관찰 가능성(observability)을 제공한다.

### 회고 질문
1. Infrastructure as Code가 머신러닝 시스템에 왜 가치 있는가?
2. AWS에서 지리적 장애 허용성을 어떻게 개선할 수 있는가?
3. 시스템을 회복탄력적으로 만드는 데 어떤 전략이 도움이 되는가?
4. 모델 성능을 모니터링하는 데 어떤 통계가 유용한가?
5. 컨테이너화가 ML 배포에 어떤 이점을 줄 수 있는가?

### 도전 과제
1. AWS의 다중 리전 아키텍처를 다이어그램으로 그려보기.
2. S3 버킷을 생성하는 Infrastructure as Code를 작성해보기.
3. 요청 재시도(retry)를 구현해 애플리케이션을 더 회복탄력적으로 만들어보기.
4. 모델 예측 지연시간(latency)을 추적하는 로깅을 추가해보기.
5. 머신러닝 마이크로서비스를 컨테이너화해보기.

## 요약
- Lesson 1은 CDK를 통한 Infrastructure as Code → Python 로깅 → 다중 리전/AZ 아키텍처 → 재현 가능한 워크플로 → AWS 스타일 컨테이너화 DevOps까지, 신뢰할 수 있는 ML 시스템 아키텍처의 핵심 요소를 다뤘다.
