# LLM Providers and Model Selection

## 개요
- Agent 역할과 업무 요구에 맞는 LLM provider·model을 평가하는 기준을 다룬다.

## 내용
- LLM은 요약·code·번역·reasoning 등 여러 task를 별도 재학습 없이 수행한다.
- Model마다 long context, multimodal, safety, cost와 open-source deployment 강점이 다르다.
- Context window, 품질, 가격·license, privacy·compliance와 deployment 방식을 평가한다.
- 실제 use case, input/output modality, SDK integration과 data residency 요구를 먼저 정의한다.
- Benchmark만 믿지 않고 representative workload로 pilot해 cost·latency·accuracy를 측정한다.

## 예시
```text
short classification -> fast low-cost model
strategy/reasoning -> stronger analytical model
sensitive data -> compliant private deployment
```

## 요약
- 가장 강한 model보다 역할·위험·비용·운영 조건에 맞는 model이 올바른 선택이다.
