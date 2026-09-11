# Application Development using Microservices and Serverless

## 개요
- 마이크로서비스, REST·GraphQL API, serverless를 사용해 독립 배포 가능한 애플리케이션을 만든다.

## 내용
- 서비스는 업무 경계와 데이터 소유권을 분명히 하고 API 계약으로 느슨하게 결합한다.
- REST는 리소스와 HTTP semantics, GraphQL은 client가 필요한 field를 선언하는 schema 기반 조회를 제공한다.
- serverless function은 이벤트에 따라 실행되고 자동 확장되지만 cold start, 실행 제한과 공급자 종속성을 고려한다.
- 분산 시스템에는 timeout, retry, idempotency, tracing과 eventual consistency 전략이 필요하다.

## 예시
```text
API Gateway -> Function -> Managed DB
Order Service --event--> Inventory Function
```

## 요약
- 6개 모듈은 microservice, REST·GraphQL, serverless, 배포, 프로젝트, OpenShift·Istio 선택 과정이다.
