# Concrete Steps

## 개요
- RECIPE 프레임워크의 세 번째 요소 **C = Concrete Steps**를 다루는 강의.
- 요청(Requests)과 환경(Environment)을 정했다면, 이제 **실제로 무엇을 어떤 순서로 할지**를 구체적으로 적어야 한다.

## 내용
### "구체적(concrete)"이어야 하는 이유
- 목표는 에이전트가 특정 요청에 대해 **매번 같은 방식, 같은 순서**로 작업을 반복하게 만드는 것.
- 절차를 명확히 스펠아웃(spell out)할 수 있는 요청일수록 스킬의 효과가 가장 크다(the most bang for your buck).
- 물론 모든 요청이 쉽게 명세화되진 않지만, 가능하다면 순서를 명확히 정의하는 것이 좋다.

### 나쁜 예 vs. 좋은 예
- **나쁜 예 (모호함, high-level)**: "보고서가 올바른지 확인해서 감사하라(audit the report by checking that it's correct)." → 무엇을 어떻게 확인할지 정보가 부족함.
- **좋은 예 (구체적)**:
  - 모든 영수증에서 값을 추출해라.
  - 이 항목들이 적절한 카테고리로 분류되어 있는지 확인해라. 카테고리 분류 기준은 이렇다.
  - 이 카테고리들은 이 금액을 절대 초과해서는 안 된다.
- 즉, **판단 기준까지 구체적으로 명시**해야 한다.

### 조건부 분기(decision point)도 허용됨
- 순서가 있는 절차라고 해서 무조건 선형(linear)일 필요는 없다.
- "이런 경우가 발생하면", "이 상황에서만 이걸 해라" 같은 **조건부 지시**도 concrete steps 안에 자연스럽게 포함할 수 있다.

### 실전 예시 — 경비 보고서 감사 스킬의 concrete steps
1. 사용자가 제공한 경비 보고서를 읽는다.
2. 각 항목(line item)에 대해 정책과 카테고리를 대조 확인한다.
3. 스크립트를 실행해 금액 합계를 계산해 검증한다.
4. 날짜를 확인해 검증한다.
5. 만약 항목이 $500를 초과하면 검토 대상으로 플래그(flag)한다.
6. 영수증이 누락된 경우 사용자에게 요청한다.
7. 발견된 이슈들을 요약해서 정리한다.

### 레시피(recipe) 비유와의 연결
- "야채를 썬다 → 볶는다 → 불을 올린다 → 오븐을 예열한다"처럼, 요리 레시피의 단계별 지시와 동일한 개념.
- concrete steps = 에이전트가 따라야 할 **단계별 지시 세트(step-by-step instructions)**.

## 예시
```
1. Read the expense report the user provides.
2. For each line item, check category against policy.
3. Run scripts to calculate totals and verify the amount.
4. Check dates to verify dates.
5. If any item exceeds $500, flag for review.
6. If a receipt is missing, ask the user for it.
7. Summarize findings with any issues found.
```

## 요약
- Concrete Steps는 에이전트가 실제로 수행할 **구체적이고 순서가 있는 절차**다.
- 모호하고 추상적인 지시("확인해라", "감사해라")보다, **판단 기준까지 명시한 구체적 지시**가 훨씬 효과적이다.
- 필요하다면 "이런 경우엔 이렇게 하라"는 조건부 분기도 자연스럽게 포함시킬 수 있다.
