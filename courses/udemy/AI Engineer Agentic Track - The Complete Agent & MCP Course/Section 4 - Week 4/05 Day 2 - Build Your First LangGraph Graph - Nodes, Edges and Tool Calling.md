# Day 2 - Build Your First LangGraph Graph: Nodes, Edges and Tool Calling

## 개요
- 단순 Python 노드에서 시작해 LLM·도구·번역 노드를 연결한 그래프를 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821333#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 첫 그래프
messages 상태와 메시지 reducer를 정의하고 임의 명사·형용사 문장을 만드는 노드를 연결한다. 시작→노드→종료 그래프를 compile한 뒤 invoke로 실행한다. LangGraph가 LLM 전용 엔진은 아니라는 점을 보여준다.

### 도구 루프
chatbot에 검색과 알림 도구를 연결한다. ToolNode는 요청된 도구를 실행하고 tools_condition은 도구 요청 여부에 따라 경로를 선택한다. 도구 실행 뒤에는 chatbot으로 돌아가 결과를 처리한다.

### 후속 번역
응답 뒤에 번역 노드를 연결해 원문과 스페인어 결과를 만든다. 호출 순서를 매번 직접 작성하는 대신 그래프에 정의한 의존성을 실행 엔진에 맡긴다.

## 예시
```text
START → chatbot ── 도구 요청 → ToolNode ──→ chatbot
              └─ 답변 완료 → translator → END
```

## 요약
- 그래프 정의와 실제 실행을 분리한다.
- 도구 결과를 모델에 다시 전달하는 반환 경로가 필요하다.
