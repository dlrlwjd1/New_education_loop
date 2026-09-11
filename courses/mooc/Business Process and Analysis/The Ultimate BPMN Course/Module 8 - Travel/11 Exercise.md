# Exercise

## 개요

- Module 8 실습 과제이자 **코스 전반부의 마지막 실습**
- 과제: **Wanda Island의 영주 비자(permanent visa) 신청 프로세스**를 모델링한다

## 내용

### 상황

섬 생활이 너무 그리워 **이민을 결심**한다. 하지만 **Dream Island에서 블랙리스트에 올랐기 때문에** 이웃 섬인 **Wanda Island**로 눈을 돌린다.

대사관에 전화해 **영주 비자에 대해 문의**하고, **대사가 직접 전화로 프로세스를 설명**해 준다.

### 작업 절차

1. 제공된 텍스트를 주의 깊게 읽는다 (코스 슬라이드에도 있다)
2. **BPMN 모델링 도구**로 프로세스 모델을 만든다
3. **Token simulator로 모델의 유효성을 검증**한다
4. 두 도구 모두 `processcamp.io/profile/links` 에 있다

막히거나 질문이 있으면 `fabian@processcamp.io`.

## 예시

```text
이 실습에서 점검할 요소 체크리스트

□ Link event — 흐름이 교차하거나 프로세스가 너무 길지 않은가?
□ Sub-process — 한 덩어리로 묶어 추상화할 activity가 있는가?
□ Call activity — 다른 프로세스도 쓸 만한 공용 절차가 있는가?
□ Data object — 어떤 문서가 생성·소비되는가? (넣는 것이 명확성을 높이는가?)
□ Data store — 프로세스 밖에 지속되어야 할 데이터가 있는가?

Module 7 best practice 점검

□ Task 15개를 넘지 않는가? (넘으면 sub-process로 구조화)
□ 조직 내부 인계에 message event를 쓰지 않았는가?
□ Task는 능동형, event는 수동형으로 명명했는가?
□ 성공 경로가 직선인가? (straight to success)
□ 여는/닫는 gateway 타입이 일치하는가? (deadlock·multi-merge)
```

## 요약

- 코스 전반부에서 배운 **모든 요소를 하나의 프로세스에 통합**하는 종합 실습이다
- **모델링 도구 → token simulator 검증** 순서를 지킨다
- Module 7의 best practice까지 함께 점검하면 완성도가 올라간다
