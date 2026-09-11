# Day 4 - Build Planner, Writer and Email Agents with Structured Outputs

## 개요
- 검색 계획과 보고서의 Pydantic 구조를 정의하고 전달 에이전트를 준비한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820803#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 검색 계획 스키마
`WebSearchItem`에는 검색 이유 `reason`과 검색어 `query`를 둔다. `WebSearchPlan`의 `searches`는 항목들의 리스트다. Planner의 `output_type`으로 계획 클래스를 지정하면 코드가 검색 항목을 직접 순회할 수 있다.

### 이유를 먼저 두는 설계
강사는 이유 다음 검색어 순으로 필드를 두어 목적에 맞는 검색을 생성하도록 유도한다. 이를 유용한 프롬프트 설계 경험으로 소개하며, 이유 필드가 모델의 실제 내부 사고를 그대로 보여주거나 항상 성능을 높인다는 보장은 아니다.

### ReportData와 Writer
보고서는 짧은 요약, Markdown 보고서, 후속 질문 목록을 담는다. Writer는 원래 질문과 검색 결과를 받아 자세한 보고서를 작성하도록 지시한다. 영상에서는 5~10쪽 분량을 지향하는 긴 결과를 요청한다.

### Emailer
제목·일반 텍스트·HTML을 받는 전달 함수를 도구로 등록한다. 보고서를 보기 좋은 HTML 이메일로 바꾸어 보내도록 지시하고, 이메일 사용 여부에 따라 Pushover로도 대체한다. 계획·작성·전달 에이전트를 실제 실행 코드에 연결하는 것은 다음 단계다.

## 예시
```text
WebSearchPlan
└─ searches: [WebSearchItem(reason, query), ...]

ReportData
├─ 짧은 요약
├─ Markdown 보고서
└─ 후속 조사 질문 목록
```

## 요약
- 구조화된 계획은 검색 호출을 코드로 연결하기 쉽게 한다.
- 보고서 본문과 요약·후속 질문을 분리한다.
- 전달용 표현 변환은 Emailer의 별도 작업이다.
