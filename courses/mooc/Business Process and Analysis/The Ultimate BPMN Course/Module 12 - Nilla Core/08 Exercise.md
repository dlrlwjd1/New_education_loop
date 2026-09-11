# Exercise

## 개요

- **세 번째 advanced assignment**
- 주제: **혈액 샘플 검사(blood sample testing)**
- 의뢰인: Nilla Care의 검사실(lab) 운영자 **Mary**

## 내용

### 상황

Mary는 Nilla Care의 검사실을 운영하는데, **프로세스에 점점 불만이 커지고 있다.**

> **그의 느낌은 프로세스가 매우 비효율적이고 팀의 시간을 많이 잡아먹는다는 것이다. 그래서 개선점과 자동화 잠재력(automation potentials)을 탐색하고 싶어 한다.**

### 과제

과제 텍스트를 읽고 BPMN 프로세스 모델을 만든다.

## 예시

```text
이 과제에서 고려할 요소

□ Multi-instance — 샘플이 여러 개인가?
   → 샘플마다 입력이 다르다 → multi-instance
   → 순차인가 병렬인가? (장비 대수 = 자원)

□ Task type (자동화 잠재력 파악이 목적)
   → 샘플 접수 = receive task?
   → 분석 장비 실행 = service task?
   → 결과 판독 = user task 또는 business rule task?
   → 수기 기록 = manual task ← 자동화 후보
   ※ 애매하면 덜 자동화된 쪽 (as-is를 정직하게)

□ Error event — 장비나 시스템이 실패하면?
   → 현재 샘플만 중단 → event sub-process (실선)
   → 남은 샘플 전부 중단 → sub-process에 부착

□ Escalation event — 긴급 샘플이나 이상 수치가 나오면?
   → 검사는 계속하면서 알린다 → non-interrupting (점선)

□ Timer event — 검사 기한이 있는가?

□ Best practice
   → task 15개 이하인가?
   → 프로세스 이름은? (예: "Sample to Result")
```

## 요약

- 이 과제의 목적은 **비효율을 드러내고 자동화 잠재력을 찾는 것**이다 — Module 10의 task type이 다시 핵심 도구가 된다
- Nilla Care 통제 테스트 사례처럼 **"샘플마다 반복" + "전역 마무리"** 구조가 나올 가능성이 높다
- **error event의 두 가지 취소 범위**(현재 인스턴스 vs 전체)를 구분해 적용하는 것이 관건이다
