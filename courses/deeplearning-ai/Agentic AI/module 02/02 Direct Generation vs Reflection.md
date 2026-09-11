# Direct Generation vs Reflection

## 개요

이 강의는 LLM에 한 번만 프롬프트를 주고 바로 답을 생성하는 **direct generation**과, 1차 결과물을 다시 검토하고 개선하는 **reflection workflow**를 비교합니다.

핵심 메시지:
- Direct generation은 빠르고 단순함
- Reflection은 추가 단계가 필요하지만 다양한 작업에서 성능을 개선할 수 있음
- Reflection prompt는 검토 기준을 명확히 줄수록 효과적임

## Direct Generation

Direct generation은 LLM에 지시를 한 번만 주고, 바로 최종 답을 생성하게 하는 방식입니다.

예:
- 블랙홀에 대한 에세이를 작성해줘
- 복리 계산을 위한 Python 함수를 작성해줘

이 방식은 보통 **zero-shot prompting**이라고도 부릅니다.

## Zero-Shot, One-Shot, Few-Shot Prompting

### Zero-Shot Prompting

프롬프트에 원하는 출력 예시를 하나도 포함하지 않고 작업 지시만 주는 방식입니다.

예:
> 블랙홀에 대한 에세이를 작성해줘.

### One-Shot Prompting

프롬프트에 원하는 입력-출력 예시를 하나 포함하는 방식입니다.

### Few-Shot Prompting

프롬프트에 여러 개의 입력-출력 예시를 포함하는 방식입니다.

| 방식 | 포함된 예시 수 |
|------|----------------|
| Zero-shot | 0개 |
| One-shot | 1개 |
| Few-shot | 여러 개 |

이 강의에서 말하는 direct generation은 주로 zero-shot prompting처럼 한 번에 답을 생성하는 방식을 의미합니다.

## Reflection이 Direct Generation보다 나은 이유

여러 연구에서 Reflection이 다양한 작업에서 direct generation보다 더 나은 성능을 보일 수 있음이 관찰되었습니다.

연구 결과를 해석하는 방식:
- 밝은 막대: zero-shot prompting
- 어두운 막대: 같은 모델에 reflection 적용
- 여러 색상: GPT-3.5, GPT-4 등 서로 다른 모델

많은 작업에서 reflection을 적용한 결과가 zero-shot보다 더 높은 성능을 보였습니다.

주의:
- 모든 작업에서 항상 좋아지는 것은 아님
- 실제 효과는 애플리케이션과 프롬프트 설계에 따라 달라짐
- 추가 LLM 호출로 인해 시간과 비용이 증가함

## Reflection이 유용한 작업 예시

### 구조화된 데이터 생성

LLM이 HTML table, JSON 같은 구조화된 출력을 만들 때 형식 오류가 발생할 수 있습니다.

Reflection prompt 예:
- HTML이 유효한지 검토
- JSON 구조가 올바른지 확인
- 중첩 구조에 빠진 필드가 없는지 점검

특히 복잡한 JSON처럼 nesting이 많은 구조에서는 reflection이 오류를 찾는 데 더 도움이 될 수 있습니다.

### 단계별 지시문 생성

예:
> 완벽한 차 한 잔을 우리는 방법을 단계별로 설명해줘.

LLM이 절차를 생성할 때 일부 단계를 빠뜨릴 수 있습니다.

Reflection prompt로 확인할 수 있는 기준:
- 단계가 빠지지 않았는가?
- 순서가 자연스러운가?
- 설명이 일관적인가?
- 전체 절차가 완전한가?

### 도메인 이름 생성

LLM이 스타트업 도메인 이름을 생성할 때 다음 문제가 있을 수 있습니다.

- 발음하기 어려움
- 의도치 않은 부정적 의미가 있음
- 영어 또는 다른 언어에서 이상한 뜻을 가질 수 있음
- 브랜드로 쓰기 부적절함

Reflection prompt를 사용해 이름 후보를 다시 검토하고, 기준을 만족하는 이름만 남길 수 있습니다.

### 이메일 개선

이메일 초안에 대해 reflection을 적용할 수 있습니다.

검토 기준:
- 톤이 적절한가?
- 사실, 날짜, 약속이 정확한가?
- 누락된 정보가 없는가?
- 더 명확하게 표현할 수 있는가?

이메일 작성에 필요한 사실과 날짜가 LLM context에 제공되어 있다면, reflection 단계에서 해당 정보를 기준으로 초안을 검토할 수 있습니다.

## Reflection Prompt 예시

### 도메인 이름 검토

```text
Review the domain names you suggested.
Check whether each name is easy to pronounce.
Check whether each name might mean something negative in English or other languages.
Output a short list of only the names that satisfy these criteria.
```

### 이메일 검토

```text
Review the first draft of the email.
Check the tone.
Verify that all stated facts, dates, and promises are accurate based on the provided context.
Based on any problems you find, write the next draft of the email.
```

## Reflection Prompt 작성 팁

좋은 reflection prompt를 작성하려면 다음을 명확히 해야 합니다.

- 첫 번째 초안을 검토하라고 분명히 지시
- 어떤 기준으로 검토할지 구체적으로 제시
- 중요하게 보는 품질 기준을 명시
- 문제가 발견되면 다음 버전을 작성하게 함

좋은 기준 예:
- 발음하기 쉬운가
- 부정적 의미가 있는가
- 톤이 적절한가
- 사실이 정확한가
- 형식이 유효한가
- 단계가 완전하고 일관적인가

## 프롬프트 학습 방법

더 나은 프롬프트를 쓰는 방법 중 하나는 잘 작성된 다른 프롬프트를 많이 읽는 것입니다.

실용적인 방법:
- 오픈소스 소프트웨어의 프롬프트 확인
- 잘 동작하는 AI 애플리케이션의 프롬프트 패턴 분석
- 자신의 작업에 맞게 기준과 표현을 변형

프롬프트 작성 능력은 많은 사례를 보고, 직접 실험하고, eval로 결과를 비교하면서 좋아집니다.

## 요약

- Direct generation은 LLM을 한 번 호출해 바로 답을 생성하는 방식
- Zero-shot prompting은 예시 없이 지시만 주는 프롬프트 방식
- Reflection은 1차 결과물을 검토하고 개선해 성능을 높일 수 있음
- 구조화된 데이터, 단계별 지시문, 도메인 이름, 이메일 개선에 reflection이 유용할 수 있음
- Reflection prompt에는 검토 기준을 구체적으로 넣는 것이 중요함
- 좋은 프롬프트를 쓰려면 다른 사람들이 작성한 프롬프트를 읽고 실험하는 것이 도움이 됨

## 다음 주제

이미지나 차트 같은 멀티모달 입력과 출력에 Reflection을 적용하는 예시 살펴보기
