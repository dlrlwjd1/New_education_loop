# Demonstration: Writing Prompts for Agent Behavior and Tone

## 개요
- 같은 model을 사용하는 세 agent의 role·goal·backstory만 바꿔 output tone과 alignment 차이를 비교한다.

## 내용
- API key를 `.env`에서 읽고 동일 Claude Haiku instance, temperature와 token limit를 세 agent에 적용한다.
- Vague agent는 단순 writer 역할만 주어 generic하고 예측하기 어려운 결과를 만든다.
- Professional agent는 hospital leader audience, evidence-first tone, 짧은 문단과 hype·jargon 제한을 명시한다.
- Agent identity를 role, goal, backstory의 behavioral rule로 구조화한다.
- Model 조건을 고정하므로 output 차이가 prompt design에서 비롯됐음을 비교할 수 있다.

## 예시
```text
role: Senior healthcare technology writer
goal: concise evidence-forward introduction for decision makers
rules: no hype; define jargon; cautious balanced tone
```

## 요약
- Agent의 role·goal·backstory는 단순 설명이 아니라 audience·tone·constraint를 지속 적용하는 prompt 구조다.
