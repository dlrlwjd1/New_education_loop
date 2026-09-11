# Day 2 - Add the Serper Tool to a CrewAI Financial Researcher and Run It

## 개요
- SerperDevTool을 조사자에 연결하고 기업 보고서와 trace를 검토한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821175#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 도구와 입력 연결
`crewai_tools`의 `SerperDevTool`을 가져와 researcher의 tools에 넣는다. main.py에서는 회사명과 날짜를 입력 사전으로 전달한다. YAML 키와 Agent·Task 이름이 일치하는지 확인하고 실행한다.

### Apple 조사 실행
영상에서는 Apple을 입력하고 검색 도구의 호출과 최신 자료 사용 여부를 확인한다. 조사 다음에 분석 과제가 실행되어 output 폴더에 보고서가 생긴다.

### trace 읽기
LLM 입력과 출력, 검색 쿼리와 결과를 펼쳐 본다. YAML의 role·goal·backstory가 실제 system prompt로 어떻게 조합됐는지, 분석가에게 조사 결과가 context로 전달됐는지 비교한다. 프레임워크가 덧붙인 지침도 이곳에서 볼 수 있다.

## 예시
```text
회사명 입력 → Serper 검색 → 조사 결과
→ 분석가의 보고서 → output 파일
검증: trace에서 검색 입력·결과와 분석가의 문맥을 확인
```

## 요약
- 도구는 사용할 에이전트에 연결한다.
- trace는 결과뿐 아니라 프레임워크의 프롬프트 구성도 보여준다.
