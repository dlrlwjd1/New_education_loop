# Day 5 - Wire Up Engineering Team Tasks and crew.py with Context7 MCP

## 개요
- 네 개발 과제의 문맥과 출력 파일을 연결하고 Context7 MCP를 붙인다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821237#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 과제 연결
설계는 Markdown으로 sandbox에 저장한다. 구현·화면·테스트 과제는 필요한 이전 산출물을 context로 받는다. 테스트 담당은 백엔드를 수정할 때 Gradio 앱과의 호환성을 깨뜨리지 않도록 지시받는다.

### 도구 배분
리드와 프런트엔드에게 Context7 MCP를 연결해 최신 API를 조회하게 한다. 다른 개발 에이전트에는 sandbox 도구를 제공한다. 단순히 도구를 연결하는 것과 실제 사용을 지침으로 유도하는 것을 함께 다룬다.

### 버전별 문제
영상의 CrewAI 버전에서는 MCP 도구 이름의 하이픈 처리 문제에 대한 patch.py를 추가하고 main.py에서 불러온다. 이 패치는 해당 버전의 우회책이며 모든 버전에 무조건 필요한 설정은 아니다.

## 예시
```text
리드: Context7 조회 → 설계 Markdown
개발자: 설계 context + sandbox 도구 → 구현
테스터: 백엔드 검증·수정 → 기존 앱 호환성 확인
```

## 요약
- 과제마다 필요한 입력과 산출물을 연결한다.
- 버전 문제의 임시 패치와 일반 설계를 구분한다.
