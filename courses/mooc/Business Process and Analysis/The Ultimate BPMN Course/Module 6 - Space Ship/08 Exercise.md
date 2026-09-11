# Exercise

## 개요

- Module 6 실습 과제
- 과제: Space Z의 **탑승(boarding) 프로세스**를 설계한다
- 요구사항: **외부 당사자(승객)를 반드시 포함**할 것

## 내용

### 상황

내열 패널 생산은 성공했고 우주선은 이륙 준비가 끝났다. 하지만 **남은 과제가 하나** 있다.

> **부유한 우주 관광객들은 극도로 까다로운 고객이다.** 그들은 우주 여행에서 **완벽한 경험(flawless experience)** 을 기대한다.

이 높은 기대를 충족하기 위해 Space Z의 CEO가 **여러분을 컨설턴트로 고용**했다. 과제는 **이 고객들의 기준을 충족하는 탑승 프로세스를 설계하는 것**이다.

### 작업 절차

1. 제공된 텍스트를 주의 깊게 읽는다 (코스 슬라이드에도 있다)
2. **BPMN 모델링 도구**로 프로세스 모델을 만든다
3. **Token Simulator에 업로드해 유효성을 검증**한다
4. 두 도구 모두 `processcamp.io/links` 에 있다

### 반드시 포함할 것

> **이 챕터에서 배운 모든 관련 요소를 반영하고, 여기에 외부 당사자(external party) — 우주 관광객, 더 중립적으로는 승객(passenger) — 를 포함시킨다.**

**외부 당사자는 collapsed pool로 표현한다** (Module 4에서 배운 규칙).

## 예시

```text
과제 체크리스트

□ 외부 당사자(승객)를 collapsed pool로 표현했는가?
□ Timer event를 썼는가? (탑승 마감 시각 등)
□ Conditional event를 썼는가?
□ Event based gateway를 썼는가? (승객 도착 vs 마감 시각)
□ Attached event를 썼는가? (진행 중 절차의 중단)
□ 여는/닫는 gateway 타입이 일치하는가? (deadlock·multi-merge 점검)
□ Token Simulator로 검증했는가?
```

## 요약

- 이 실습은 Module 6의 요소 전체를 한 프로세스에 통합하는 훈련이다
- **외부 당사자(승객)를 collapsed pool로 포함**시키는 것이 명시적 요구사항이다
- **모델링 도구 → Token Simulator 검증** 순서를 지킨다
