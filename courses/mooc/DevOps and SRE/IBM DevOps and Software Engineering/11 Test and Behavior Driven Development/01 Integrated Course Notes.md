# Introduction to Test and Behavior Driven Development

## 개요
- 테스트 수준·대역, TDD와 BDD를 이용해 요구를 실행 가능한 검증으로 바꾼다.

## 내용
- unit, integration, system, acceptance test는 범위와 속도가 다르며 pyramid 형태로 균형을 잡는다.
- TDD는 red–green–refactor: 실패 테스트, 최소 구현, 설계 개선을 짧게 반복한다.
- fixture, mock, patch는 외부 의존을 통제하지만 구현 세부에 과도하게 결합하지 않는다.
- BDD는 Given–When–Then 시나리오로 업무 행동을 표현하고 Behave step으로 자동 실행한다.

## 예시
```gherkin
Scenario: Out-of-stock order
  Given a product has zero inventory
  When the customer places an order
  Then the order is rejected
```

## 요약
- 6개 모듈은 테스트, TDD, 고급 TDD, BDD, Behave, 최종 프로젝트다.
