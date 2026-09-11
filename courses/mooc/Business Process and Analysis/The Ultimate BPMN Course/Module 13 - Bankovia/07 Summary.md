# Summary

## 개요

- Module 13 정리
- **이 시점에서 BPMN의 모든 요소를 배웠다**

## 내용

| Event | 역할 | 주의점 |
|---|---|---|
| **Compensation event** | **완료된 task를 되돌린다(undo)** | **task에 부착한 event가 task를 취소하는 것이 아니라, 원래 task를 되돌리거나 보상하는 compensation task를 개시**한다 |
| **Cancel event** | **transaction 프로세스의 취소**를 나타낸다 | 유일한 목적이며 매우 단순하다 |
| **Multiple event** | 여러 event를 하나로 요약. **exclusive(OR) 논리** | — |
| **Multiple parallel event** | 여러 event를 하나로 요약. **AND(병렬) 논리** | — |

### 강사의 마무리 조언

> **일반적으로 이 multiple 계열은 피하려고 노력하는 것이 최선이지만, 완전성을 위해 이 코스에 포함했다.**

## 요약

- **Compensation의 핵심 오해 방지**: 부착 event가 task를 취소하는 것이 아니다. **이미 끝난 task를 되돌리는 별도의 compensation task를 개시**하는 것이다
- **Cancel은 transaction 전용**이다
- **Multiple 계열 둘은 배우되 쓰지 않는다**
- **이것으로 BPMN 2.0의 모든 요소를 익혔다**
