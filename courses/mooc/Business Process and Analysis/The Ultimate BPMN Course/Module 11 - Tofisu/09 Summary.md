# Summary

## 개요

- Module 11 정리
- 강사의 평가: **가장 내용이 많고 도전적인 챕터**. 다만 **"이제 고비는 넘겼고 이후 챕터는 좀 더 가벼워진다"**

## 내용

### Expanded sub-process

**collapsed sub-process와 정확히 같다.** 차이는 **하위 프로세스 자체가 부모 프로세스 안에 그려진다**는 것.

**특히 유용한 경우 두 가지**

1. **부모와 하위 프로세스의 서로 다른 실행 빈도(frequencies)를 드러내고 싶을 때** — Tofisu의 판매 리드 처리처럼
2. **하위 프로세스 안의 여러 activity에 event나 loop type을 적용하고 싶을 때**

### Event sub-process

**항상 다른 부모 하위 프로세스와의 관계 속에서 존재**한다. **event를 통해 촉발된 예외가 어떻게 처리되는지**를 표현한다.

- 예: **고객의 주문 취소를 주문 프로세스의 예외로 정의**하고, **event sub-process가 취소 자체를 처리**한다

### Transaction sub-process

대조적으로 **주로 더 기술적인 시나리오**에서 **논리적 작업 단위**를 표현할 때 쓴다. 보통 **소프트웨어/IT 시스템 안**에서 **성공하거나, 취소되거나, hazard 상태로 끝날 수 있는** 단위다.

- 예: **송장을 생성·발송하고 입금을 감지하는 현금 수납 트랜잭션**
  - 모두 정상이면 → **succeeded**
  - 주문 취소가 필요하면 → **canceled**
  - **서버/시스템 장애**의 경우 → **hazard**

### Loop types

**매우 중요하고 유용한 개념.** **task나 sub-process가 여러 번 실행되는 것**을 표현할 때 유용하다.

> **예를 들어 Space Z가 샘플 20개를 생산한다면, 20개의 서로 다른 task를 만드는 대신 loop 유형의 task 하나만 만들면 된다.**

## 요약

- **Expanded sub-process** — 표현 방식의 선택. **event/loop를 그룹 전체에 걸 때** 필수
- **Event sub-process** — 예외 처리. **점선(비취소) vs 실선(취소)**
- **Transaction sub-process** — 기술적 시나리오의 **논리적 작업 단위**. succeeded / canceled / hazard
- **Loop types** — 반복을 기호 하나로. **loop(같은 입력) / sequential MI(다른 입력, 순차) / parallel MI(다른 입력, 동시)**
