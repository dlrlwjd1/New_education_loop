# Day 5 - Build a Gradio UI for Your Deep Research AI Agent

## 개요
- ResearchManager의 상태 스트림을 Gradio UI에 연결하고 화면을 다듬는다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820809#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 간단한 UI 연결
`simple.py`의 콜백은 ResearchManager가 내보내는 값을 순회해 보고서 영역에 전달한다. 질문 입력과 실행 버튼이 같은 실행 함수를 호출한다. 검색·작성 상태와 trace 링크도 진행 중에 표시한다.

### 화면 개선
강사는 코딩 에이전트로 `app.py`와 `styles.py`를 만들어 스타일을 분리한다. 질문 예시, 결과 서식, 라이트·다크 모드와 인쇄 화면을 개선한다. 조사 흐름 자체는 간단한 UI와 같다.

### 결과 확인
AI 프레임워크와 상업적 활용 사례를 조사하고, 화면의 보고서·trace·수신 메일을 함께 확인한다. 예쁜 출력이 정확한 조사를 보장하지는 않는다. 강사는 검색 수와 모델을 바꿨을 때 답변 품질이 달랐다는 앞선 실험도 상기시킨다.

## 예시
프로젝트 폴더에서 간단한 UI와 스타일 적용 UI를 각각 실행한다.

```bash
uv run simple.py
uv run app.py
```

두 명령은 각 앱을 따로 실행하는 예다.

## 요약
- 상태 제너레이터를 UI 콜백으로 연결한다.
- 출력 내용 검토와 UI 개선을 함께 수행한다.
