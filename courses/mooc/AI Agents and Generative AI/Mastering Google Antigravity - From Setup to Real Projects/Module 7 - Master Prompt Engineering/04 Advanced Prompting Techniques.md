# Advanced Prompting Techniques

## 개요

- 복잡한 문제에 적용할 여러 prompting technique을 소개한다.
- 추론, 대안 비교, 단계적 확장, 자기 개선을 조합한다.

## 내용

강의는 step-by-step reasoning, 여러 해법 비교, generated knowledge, least-to-most decomposition, self-refinement, directional stimulus 등을 설명한다.

디버깅에서는 코드 동작과 실패 원인을 단계별로 분석하게 하고, 설계에서는 여러 대안을 비교하게 한다. 큰 문제는 쉬운 하위 문제부터 해결하며, 초안은 평가 기준에 따라 스스로 개선하도록 요청한다.

## 예시

```text
1. Explain the code step by step.
2. Identify why it fails.
3. Compare possible fixes.
4. Provide the safest fix and tests.
```

## 요약

- 문제 유형에 맞는 technique을 선택한다.
- 드러난 추론도 오류가 있을 수 있으므로 결과를 검증한다.
