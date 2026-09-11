# Summary

## 개요

- Module 10 정리. **7가지 task type**과 세 가지 고급 요소를 점검한다

## 내용

### 7가지 BPMN task type

| Task type | 역할 |
|---|---|
| **Send task** | 메시지를 **보낸다** |
| **Receive task** | 메시지를 **받는다** |
| **User task** | **사용자**가 IT 시스템 안에서 수행한다 |
| **Manual task** | IT 시스템 없이 수행한다 |
| **Business rule task** | **사전 정의된 비즈니스 규칙**이 충족되는지 확인한다 |
| **Script task** | **커스텀 스크립트를 실행**한다 |
| **Service task** | **웹 서비스를 호출**한다 |

### 그 외 다룬 개념

**Non-interrupting attached event**

> **예외를 표현하지만 실제 activity를 취소하지 않는다**

**Complex gateway**

> 커스텀 규칙을 지정해 복잡한 sequence flow를 표현한다. **단, 정말 막혔고 배운 다른 gateway들로 해결되지 않을 때만 사용한다**

**Additional process participant**

> **lane으로 지정한 사람이 아닌 추가 참여자가 관여하는 task**에 사용한다. **이상적으로는 RACI 같은 역할 프레임워크를 적용해 그 사람이 어떻게 관여하는지 명시**한다. **Signavio Modeler에서만 사용 가능**하다

## 요약

- **task type 7종**은 자동화 요구사항을 정의하는 도구다
- **non-interrupting event**는 취소하지 않는 예외 처리다
- **complex gateway는 최후의 수단**이다
- **additional process participant는 RACI와 함께** 쓰고, **Signavio 전용**이다
