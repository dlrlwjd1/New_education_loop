# Exercise

## 개요

- **네 번째 advanced assignment**
- 주제: **대출 승인 프로세스(loan approval process)**
- 과제의 성격: **기존 텍스트 문서를 BPMN 2.0 모델로 번역**한다

## 내용

### 상황

Bankovia 경영진이 **디지털화 노력을 한 단계 더 진전**시키려 한다. **현재 종이 작업을 많이 만들어 내는 프로세스 중 하나가 대출 승인 프로세스**다.

### 이 과제의 핵심 메시지

> **여러분도 알다시피, 현재 상태(status quo)에 대한 명확한 모델 기반 표현 없이는 프로세스를 효과적으로 자동화할 방법이 없다.**
>
> **그래서 Bankovia가 프로세스 문서로 사용하는 다음 텍스트를 BPMN 2.0 모델로 번역하는 과제를 받았다.**

이는 Module 10의 Fast Fore 사례에서 나온 **"무엇을 자동화하기 전에 비즈니스 요구사항이 실제로 무엇인지 이해해야 한다"** 는 원칙과 정확히 같은 이야기다.

### 과제

**프로세스 문서(산문 텍스트)를 읽고 표현력 있는(expressive) BPMN 프로세스를 만든다.**

## 예시

```text
산문 문서 → BPMN 모델 번역 시 점검할 것

□ 시작과 끝
   → 프로세스는 무엇으로 촉발되는가? (신청서 접수 = message event?)
   → 끝나는 상태가 몇 가지인가? (승인 / 거절 / 보류)
   → 후속 활동이 다르면 end event를 나눈다

□ 참여자
   → 신청 고객 = 외부 → collapsed pool
   → 은행 내부 부서들 = lane으로 분리
   → 조직 내부 인계에 message event를 쓰지 않는다

□ Task type (자동화 잠재력이 목적)
   → 신용 평가 = business rule task (정해진 규칙 적용)
   → 외부 신용정보 조회 = service task (API 호출)
   → 내부 데이터 계산 = script task
   → 심사역 검토 = user task
   → 서류 날인 = manual task ← 자동화 후보
   ※ 애매하면 덜 자동화된 쪽 (as-is를 정직하게)

□ Event
   → 심사 기한 = timer event
   → 서류 보완 요청 후 대기 = event based gateway
     (보완 제출 vs 기한 경과)
   → 승인 후 취소되면? = compensation event
   → 시스템 장애 = error event

□ Best practice
   → task 15개 이하인가? 넘으면 sub-process
   → 여는/닫는 gateway 타입이 일치하는가?
   → 성공 경로가 직선인가?
   → 프로세스 이름은? (예: "Application to Disbursement")
```

## 요약

- 이 과제의 진짜 주제는 **"산문으로 된 프로세스 문서를 실행 가능한 모델로 옮기는 것"** 이다
- **자동화의 전제는 as-is의 명확한 모델 기반 표현**이라는 것이 반복 강조된다
- 코스 전체에서 배운 요소를 **하나의 기술적 프로세스에 통합**하는 마지막 실습이다
