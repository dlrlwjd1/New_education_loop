# Demonstration: Evaluating Cost, Latency, and Accuracy Trade-offs

## 개요
- 동일 agent task를 여러 model로 실행해 비용·응답 시간·정확성의 균형을 비교한다.

## 내용
- 비교할 model에 같은 input, prompt와 output 기준을 적용해 다른 변수를 통제한다.
- Latency는 실제 실행 시간, cost는 token 사용과 provider 가격, accuracy는 task rubric으로 측정한다.
- 단일 실행보다 반복 측정의 중앙값·분산을 보고 rate limit과 warm-up 영향을 구분한다.
- 고성능 model이 단순 task에도 비용 대비 우수한지 확인하고 역할별 최소 충족 model을 선택한다.
- 실행 metadata를 표로 기록해 architecture 결정 근거를 남긴다.

## 예시
```text
model | success score | latency | input/output tokens | estimated cost
```

## 요약
- Agent model 선택은 품질 최대화가 아니라 요구 수준을 만족하는 cost·latency·accuracy 최적점 찾기다.
