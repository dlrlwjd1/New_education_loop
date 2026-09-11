# Core Concepts of Agentic AI

## 개요
- Agentic workflow의 구성요소, 반복 operation cycle과 perception·cognition·action layer를 설명한다.

## 내용
- 핵심 요소는 AI agent, LLM, external tool, feedback mechanism, prompt engineering, multi-agent collaboration과 enterprise integration이다.
- Agent는 `sense -> reason -> plan -> coordinate -> act -> learn/adapt` cycle을 반복한다.
- 실제 workflow는 문제 이해, diagnostic step, adaptive tool use, 결과 기반 iteration, finalization·learning 순으로 진행된다.
- 내부 module은 perception, cognitive, action, learning, collaboration과 security로 나눌 수 있다.
- Perception layer가 text·multimedia·sensor input을 해석하고 cognitive layer가 memory·knowledge로 결정하며 action layer가 tool·process를 실행한다.

## 예시
```text
sensor/input -> perception -> memory + reasoning -> action -> outcome feedback
```

## 요약
- Agentic system의 지능은 LLM 하나가 아니라 sensing, reasoning, tool execution, feedback와 collaboration의 loop에서 나온다.
