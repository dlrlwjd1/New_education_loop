# Reflection for Chart Generation

## 개요

이 강의에서는 차트 생성 워크플로우에서 Reflection이 어떻게 결과 품질을 개선하는지 살펴봅니다.

핵심 주제:
- LLM이 생성한 시각화 코드의 한계
- 생성된 차트를 multimodal LLM으로 검토하는 방식
- Reflection prompt에 구체적인 평가 기준을 주는 이유
- 초기 생성 모델과 reflection 모델을 다르게 구성하는 방법
- Reflection 효과를 eval로 검증해야 하는 이유

## 내용

### 차트 생성 워크플로우

코딩 랩에서는 agent가 데이터를 바탕으로 차트를 생성하는 워크플로우를 다룹니다.

예시 데이터:
- 커피머신 판매 기록
- 판매된 음료 종류
- 판매 시점
- 판매 가격

목표:
> 2024년과 2025년의 1분기 커피 판매량을 비교하는 plot 생성

LLM에게 CSV 또는 spreadsheet 데이터를 사용해 Python 코드로 시각화를 만들라고 요청할 수 있습니다.

### Direct Generation의 한계

LLM이 처음 생성한 코드가 실행은 되더라도, 결과 차트가 항상 좋은 것은 아닙니다.

예를 들어 첫 번째 버전의 코드는 stacked bar plot을 만들 수 있습니다.

문제점:
- 2024년과 2025년 비교가 직관적이지 않음
- 음료별 차이를 읽기 어려움
- 시각적으로 깔끔하지 않음
- 사용자가 원하는 "비교" 목적에 잘 맞지 않을 수 있음

즉, 코드가 실행 가능하다는 것과 좋은 시각화를 만든다는 것은 다른 문제입니다.

### Multimodal Reflection

Reflection을 사용하면 다음 정보를 다시 LLM에 제공할 수 있습니다.

- v1 코드
- v1 코드가 생성한 plot 이미지
- 필요하면 코드 실행 과정이나 computational history
- 개선 기준

Multimodal LLM은 텍스트뿐 아니라 이미지도 입력으로 받을 수 있으므로, 생성된 그래프를 직접 보고 문제점을 판단할 수 있습니다.

Reflection prompt의 목표:
1. 생성된 이미지를 검토
2. 문제점 critique
3. 더 명확한 시각화 방식 제안
4. 개선된 Python 코드 작성

### Reflection으로 개선되는 점

강의 예시에서는 stacked bar plot 대신 2024년과 2025년 값을 분리해서 보여주는 일반 bar graph가 생성되었습니다.

개선된 점:
- 두 연도의 값을 더 쉽게 비교할 수 있음
- 그래프가 더 명확하고 보기 좋음
- 시각화 목적에 더 잘 맞음
- 사용자 해석 부담이 줄어듦

Reflection은 단순히 코드 오류를 고치는 것이 아니라, 결과물의 품질을 더 나은 방향으로 개선할 수 있습니다.

### 모델 조합 실험

초기 생성과 reflection에 같은 모델을 사용할 수도 있지만, 다른 모델을 사용할 수도 있습니다.

예:
- 초기 생성: GPT-4o 또는 GPT-5 같은 모델로 Python 시각화 코드 생성
- Reflection: reasoning model 또는 multimodal model로 결과 이미지 critique

모델마다 강점이 다르기 때문에 여러 조합을 실험할 수 있습니다.

고려할 조합:
- non-reasoning model로 생성 + reasoning model로 reflection
- multimodal model로 이미지 기반 critique
- 더 빠른 모델로 초안 생성 + 더 강한 모델로 검토
- 같은 모델로 생성과 reflection 모두 수행

### Reflection Prompt 설계

Reflection prompt에는 구체적인 역할과 기준을 주는 것이 좋습니다.

예:
> You are an expert data analyst. Provide constructive feedback on the generated visualization.

함께 제공할 정보:
- version 1 코드
- 생성된 plot 이미지
- 코드 실행 결과나 history
- 개선해야 할 기준

평가 기준 예:
- readability
- clarity
- completeness
- chart type의 적절성
- 축 레이블과 제목의 명확성
- 범례의 가독성

구체적인 기준을 줄수록 LLM은 무엇을 개선해야 하는지 더 잘 판단할 수 있습니다.

### Reflection이 항상 도움이 되는 것은 아님

Reflection은 많은 경우 성능을 개선하지만, 모든 application에서 같은 효과를 내지는 않습니다.

가능한 결과:
- 어떤 작업에서는 조금 개선
- 어떤 작업에서는 크게 개선
- 어떤 작업에서는 거의 차이 없음

따라서 실제 application에서는 reflection이 정말 도움이 되는지 eval로 확인해야 합니다.

확인할 질문:
- Reflection이 품질을 얼마나 개선하는가?
- 추가 LLM 호출 비용을 감수할 만큼 가치가 있는가?
- latency 증가가 허용 가능한가?
- initial generation prompt를 고치는 것이 더 효과적인가?
- reflection prompt를 고치는 것이 더 효과적인가?

## 예시

### Direct Generation 흐름

```text
CSV coffee sales data
  -> LLM에게 plot 생성 코드 요청
  -> Python code v1 생성
  -> 코드 실행
  -> Plot v1 생성
```

문제:
- Plot v1이 실행은 되지만 보기 어렵거나 목적에 맞지 않을 수 있음

### Reflection 흐름

```text
Python code v1
Plot image v1
Evaluation criteria
  -> Multimodal LLM critique
  -> 개선 방향 제안
  -> Python code v2 생성
  -> Plot v2 생성
```

Reflection은 code와 image를 함께 사용해 더 나은 시각화 코드를 만들도록 유도합니다.

### Reflection Prompt 예시 구조

```text
You are an expert data analyst.

Review the generated chart and the Python code that produced it.
Critique the visualization using the following criteria:
- readability
- clarity
- completeness
- appropriateness of chart type

Then write improved Python code that implements your recommendations.
```

이런 prompt는 LLM이 막연히 "더 좋게 만들어줘"라고 요청받는 것보다 구체적인 개선 방향을 잡기 쉽습니다.

## 요약

- LLM이 생성한 시각화 코드는 실행 가능해도 좋은 차트를 만든다는 보장은 없음
- Reflection은 생성된 코드와 결과 이미지를 검토해 더 나은 시각화로 개선하는 데 사용할 수 있음
- Multimodal LLM은 plot 이미지를 직접 보고 시각적 문제를 판단할 수 있음
- Reflection prompt에는 readability, clarity, completeness 같은 구체적 기준을 포함하는 것이 좋음
- 초기 생성 모델과 reflection 모델을 다르게 구성해 실험할 수 있음
- Reasoning model은 reflection 단계에서 더 좋은 결과를 줄 수 있음
- Reflection이 실제 application에서 도움이 되는지는 eval로 확인해야 함

## 다음 주제

Reflection workflow가 실제로 성능을 개선하는지 평가하는 eval 방법 살펴보기
