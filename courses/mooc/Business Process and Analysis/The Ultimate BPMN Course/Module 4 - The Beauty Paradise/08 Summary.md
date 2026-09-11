# Summary

## 개요

- Module 4에서 추가된 BPMN 요소 정리

## 내용

### 이 챕터에서 추가한 요소

| 요소 | 핵심 |
|---|---|
| **Plain intermediate event** | 프로세스의 **이정표(milestone)를 표시**한다. **로직에 영향을 주지 않고** 토큰이 그냥 통과한다 |
| **Message event (4종)** | **커뮤니케이션 흐름을 시각화**한다. start / catching intermediate / throwing intermediate / end |
| **Collapsed pool** | pool의 접힌 형태로 **외부 당사자의 관여**를 표현한다 |
| **Inclusive gateway** | **경로의 임의 조합을 활성화**해 모델링에 유연성을 준다 |

### 반드시 기억할 것

> **닫는 inclusive gateway는 현재 토큰의 상태를 항상 알고 있다(always informed about the state of the current tokens).**

이것이 inclusive gateway를 exclusive·parallel과 구분 짓는 결정적 성질이다.

## 요약

- plain intermediate event = 이정표, 흐름에 영향 없음
- message event 4종 = 외부와의 커뮤니케이션, 단계와 방향의 조합
- collapsed pool = 외부 당사자의 black box
- inclusive gateway = 조합 활성화 + **항상 토큰 상태를 인지하는 closing gateway**
