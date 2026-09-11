# Building Custom Tools For Agents (Hands On)

## 개요
- Python 함수로 결제 수수료와 환율을 조회하는 에이전트 도구를 만든다.

## 내용
### 도구 함수 규칙
좋은 도구는 명확한 docstring, 타입 힌트, 입력 검증, 오류 처리와 구조화된 딕셔너리 반환값을 갖는다. 강의는 `get_fee_for_payment_method`와 `get_exchange_rate`를 만들고 통화 변환 에이전트에 제공한다.

## 예시
```python
{"status": "success", "rate": 0.93}
```

에이전트는 두 도구의 `status`를 확인하고 오류가 있으면 사용자에게 설명한다.

## 요약
- 커스텀 도구는 비즈니스 규칙을 결정적으로 실행한다.
- 입력·출력 계약이 명확해야 LLM이 안전하게 호출할 수 있다.
