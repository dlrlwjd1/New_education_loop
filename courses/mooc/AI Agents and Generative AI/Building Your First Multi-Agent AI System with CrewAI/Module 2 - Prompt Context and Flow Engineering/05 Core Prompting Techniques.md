# Core Prompting Techniques

## 개요
- Zero-shot, few-shot과 structured reasoning 등 agent output을 안정화하는 prompting technique을 비교한다.

## 내용
- Zero-shot은 example 없이 명확한 instruction만 주어 단순·반복 task와 낮은 token 비용에 적합하다.
- Few-shot은 원하는 input-output example을 제공해 전문 형식과 일관성을 높이지만 context 비용이 증가한다.
- 복잡한 문제는 intermediate step·검증 기준으로 나누어 성급한 결론을 줄인다.
- 명시적 constraint와 schema는 bias·risk를 줄이고 downstream automation과 연결하기 쉽게 한다.
- 표준 prompt pattern은 여러 agent·team으로 확장할 때 품질 편차를 줄인다.

## 예시
```text
Zero-shot: classify this ticket into one category.
Few-shot: provide three labeled examples, then classify the new ticket.
```

## 요약
- Technique은 task 복잡도, 정확성 요구와 token budget에 맞춰 선택하고 실제 결과로 검증한다.
