# Best Practices for Writing Prompts

## 개요

- 자연스럽고 구체적인 요청이 더 좋은 결과를 만든다.
- 큰 작업은 계획과 작은 단계로 나누고 반복 개선한다.

## 내용

목표, 대상 독자, 입력 맥락, 제약, 출력 형식을 포함한다. 필요한 경우 예시를 제공하고 AI가 빠뜨리기 쉬운 조건을 명시한다.

첫 결과를 그대로 사용하지 말고 확인 후 follow-up prompt로 개선한다. 복잡한 작업은 먼저 roadmap이나 plan을 만들도록 요청한다.

## 예시

```text
역할: Senior React developer
작업: EventForm validation 개선
제약: TypeScript strict, 외부 library 추가 금지
출력: 변경 계획과 수정 코드
```

## 요약

- 명확성, 컨텍스트, 제약, 형식이 핵심 요소다.
- Ask → Check → Improve 순환을 반복한다.
