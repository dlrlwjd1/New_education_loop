# Practical Scenario — Defining a JSON Schema for Text Generation

## 개요
- AI가 생성한 실전 시나리오형 성찰 활동(real-world application, ungraded). FastAPI 엔드포인트의 입력 스키마를 어떻게 정의할지 생각해보는 연습.

## 내용

### 시나리오
- Hugging Face 텍스트 생성 모델을 서빙하는 FastAPI 애플리케이션을 구성 중이며, API 엔드포인트의 입력 구조를 정의해야 하는 상황.
- **질문**: 텍스트 생성을 위한 프롬프트(단일 문자열)를 기대하는 입력의 JSON 스키마를 어떻게 정의할 것인가? 이 스키마에 포함할 핵심 요소는 무엇인가?

### 정리
- 앞선 "Hugging Face and FastAPI" 레슨에서 다룬 패턴 그대로 **Pydantic `BaseModel`**을 사용:
  ```python
  from pydantic import BaseModel

  class TextRequest(BaseModel):
      text: str
  ```
- 핵심 요소:
  - **필드명**(`text`)과 **타입**(`str`) 지정 — FastAPI/Pydantic이 이를 바탕으로 자동 검증(validation)과 API 문서(OpenAPI/Swagger)를 생성.
  - 필요하다면 기본값이나 설명(`Field(description=...)`)을 추가해 API 사용자에게 더 명확한 안내 제공 가능.

## 요약
- FastAPI에서 단일 문자열 입력을 받는 표준적인 방법은 Pydantic `BaseModel`에 `text: str` 필드 하나를 정의하는 것이며, 이는 자동 검증과 API 문서화까지 함께 제공한다.
