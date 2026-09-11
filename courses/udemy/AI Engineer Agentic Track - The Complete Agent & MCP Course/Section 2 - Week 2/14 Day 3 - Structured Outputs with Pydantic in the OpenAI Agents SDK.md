# Day 3 - Structured Outputs with Pydantic in the OpenAI Agents SDK

## 개요
- Pydantic 스키마로 이메일 평가 결과를 구조화하고 이를 코드의 판단에 사용한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820721#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 객체·JSON·스키마
Pydantic `BaseModel`을 상속한 클래스로 필드와 타입을 정의한다. `Field`의 설명은 각 필드의 의미를 모델에게 알려준다. SDK는 스키마에 맞는 JSON 출력을 받아 해당 객체로 파싱한다. 모델이 메모리 안의 Python 객체를 직접 만드는 것은 아니다.

### EmailReview
실습의 평가 객체는 전문적인지 나타내는 `is_professional`, 문장 수, 개인화 자리표시자 포함 여부 `contains_placeholders`로 구성된다. `model_json_schema()`로 생성된 스키마를 확인하고 Checker의 `output_type`에 클래스를 지정한다.

### 실제 평가
일부러 부적절한 말투와 이름 자리표시자를 넣은 이메일을 전달한다. `final_output`에서 평가 객체를 받고 불리언 필드를 읽어 후속 행동을 결정할 수 있다. 형식 적합성과 평가 내용의 정확성은 별개다.

### 제한과 다음 단계
제약 디코딩(constrained decoding)은 스키마를 어기는 토큰 선택을 제한하는 방식으로 소개된다. 제공자·모델의 지원을 확인해야 하며, 지나치게 중첩된 스키마보다 단순한 결과를 코드로 변환하는 방식을 권한다. 후반부에서는 입력·출력·도구 가드레일의 실행 위치와 tripwire를 소개한다. 병렬로 검사하는 입력 가드레일은 검사 완료 전에 일부 실행이 진행될 수 있어 실행 시점도 고려해야 한다.

## 예시
```text
이메일 → Checker(output_type=EmailReview)
       → 전문성 / 문장 수 / 자리표시자 포함 여부
       → Python 조건문으로 다음 행동 결정
```

예: 전문적이지 않거나 자리표시자가 남아 있으면 전달 단계로 진행하지 않는다.

## 요약
- 구조화 출력은 모델 판단을 코드가 읽기 쉬운 형태로 만든다.
- 스키마 설명과 실제 결과 확인이 함께 필요하다.
- 정해진 JSON 형식이 내용의 사실성까지 보장하지는 않는다.
