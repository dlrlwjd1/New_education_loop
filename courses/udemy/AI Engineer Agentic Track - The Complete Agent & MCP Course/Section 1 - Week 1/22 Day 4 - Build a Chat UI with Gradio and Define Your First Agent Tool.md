# Day 4 - Build a Chat UI with Gradio and Define Your First Agent Tool

## 개요
- 프로필 기반 Gradio 채팅을 만들고 이메일을 저장하는 첫 도구와 JSON 정의를 작성한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771203#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 역할·배경·규칙 프롬프트
시스템 프롬프트를 역할, 배경, 규칙으로 나눈다. 웹사이트 방문자에게 경력·기술·경험을 답하는 디지털 트윈임을 알리고, 앞서 읽은 소개와 LinkedIn 내용을 넣는다. 모르는 정보는 지어내지 말고 모른다고 답하도록 지시한다.

### Gradio 콜백
`chat(message, history)`에서 시스템 메시지 + 이전 이력 + 최신 사용자 메시지를 구성해 모델을 호출한다. Gradio ChatInterface는 입력과 이력을 콜백에 넘기고 반환값을 답변으로 표시한다. 강사는 고정 문자열이나 입력을 되돌려주는 함수로 바꿔 UI와 모델 호출이 별개임을 시연한다.

### 범위 제한을 실제로 시험하기
경력 질문뿐 아니라 싫어하는 음식도 묻는다. 소개에 치즈를 싫어한다는 정보가 들어 있어 모델이 답한다. 경력만 답하라는 규칙과 제공한 배경이 충돌할 수 있으며, 프롬프트와 검사를 반복 개선해야 한다.

### 첫 도구의 함수와 스키마
이메일 문자열을 받아 `emails.txt`에 UTF-8 추가 모드로 기록하는 함수를 만든다. 직접 두 번 실행하면 두 줄이 추가된다. 다음으로 이름·설명·문자열 email 인자·필수 여부를 JSON Schema로 기술하고 `type="function"` 항목으로 도구 목록에 넣는다. 실제 실행 함수와 모델에게 보여주는 설명은 서로 다른 구성 요소다.

## 예시
강의의 파일 기록 동작을 재구성한 최소 예시다.

```python
def record_email_tool(email):
    with open("emails.txt", "a", encoding="utf-8") as file:
        file.write(email + "\n")
    return "email received"
```

도구를 모델에 알려주는 스키마에는 `email`이 필수 문자열이라는 정보를 별도로 넣는다.

## 요약
- Gradio는 입력·이력과 콜백 반환값을 연결하는 UI 계층이다.
- 도구에는 실행 함수와 모델에게 전달할 스키마가 모두 필요하다.
- 프롬프트의 규칙은 실제 질문으로 시험해 봐야 한다.
