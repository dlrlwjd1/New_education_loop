# Day 3 - Build a Simple Agent with LangChain create_agent and Tools

## 개요
- create_agent로 도구를 사용하는 여행 도우미를 만들고 내부 그래프를 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821343#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기본 호출
모델 지정은 공급자와 모델명을 콜론으로 연결하는 형식이다. 시스템 프롬프트와 함께 에이전트를 만든 뒤 invoke로 질문한다. ainvoke는 await가 필요한 비동기 대응 메서드다.

### 두 도구 실습
London·Rome의 날씨와 인구를 반환하는 가짜 함수를 tool로 감싸 전달한다. Rome의 두 정보를 함께 물으면 모델이 필요한 도구를 호출하고 결과를 답한다. 예제 값은 실제 최신 도시 데이터가 아니다.

### 내부 구조 확인
get_graph로 만든 그래프를 그려 모델과 도구 사이의 루프를 확인한다. 앞 강의에서 직접 구성한 그래프와 같은 원리를 고수준 함수가 처리한 것이다.

## 예시
```text
Rome의 날씨와 인구 질문
→ 날씨 도구 + 인구 도구
→ 도구 결과를 반영한 답변
→ 내부 그래프에서 model ↔ tools 연결 확인
```

## 요약
- 도구 목록만 전달해 기본 호출 루프를 구성한다.
- 추상화 뒤의 그래프를 직접 확인할 수 있다.
