# Demonstration: Configuring Models per Agent Role

## 개요
- Research, strategy, copywriting agent에 서로 다른 model과 temperature를 배치하는 CrewAI 구성을 실습한다.

## 내용
- `.env`에서 Anthropic·Google API key를 읽고 누락 시 즉시 실패하게 한다.
- Trend Scout는 빠른 Gemini Flash, Product Strategist는 분석 중심 Claude Sonnet, Copywriter는 가벼운 Claude Haiku를 사용한다.
- Research는 균형 있는 `0.5`, strategy는 일관된 `0.2`, creative copy는 다양한 `0.7` temperature를 적용한다.
- 각 agent에 role·goal·backstory와 task를 정의하고 sequential crew로 연결한다.
- Trend output이 strategy로, strategy output이 copywriting으로 전달된다.

## 예시
```text
Trend Scout(Gemini) -> Product Strategist(Claude Sonnet)
-> Copywriter(Claude Haiku)
```

## 요약
- 역할별 model assignment는 품질뿐 아니라 latency·cost와 창의성 요구를 함께 최적화한다.
